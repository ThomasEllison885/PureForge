// Stage 1 rules: movement, fog, naming, founding, and colony sprawl.
// Combat dice live in data.js. Trade, diplomacy, and battles are not here yet.
//
// Land combat units move only as part of a leader's stack. Explorers,
// settlers, leaders, and ships move on their own. Ships stay on water.

import { TUNING } from './tuning.js';
import { TERRAIN, NATION_BY_ID, BUILDING_BY_ID, rulerName } from './data.js';
import { idx, inBounds, neighbors4 } from './mapgen.js';

export function tileAt(state, x, y) {
  if (!inBounds(x, y, state.map.width, state.map.height)) return null;
  return state.map.tiles[idx(x, y, state.map.width)];
}

export function isWaterTerrain(terrain) {
  return terrain === 'ocean' || terrain === 'coast';
}

export function unitById(state, id) {
  return state.units.find((unit) => unit.id === id) || null;
}

export function humanPlayer(state) {
  return state.players.find((player) => player.isHuman);
}

export function playerById(state, id) {
  return state.players.find((player) => player.id === id);
}

export function moveMax(unit, player) {
  let points = TUNING.move[unit.kind] || 1;
  if (!player) return points;
  if (unit.kind !== 'ship' && player.skills.includes('cartographer')) {
    points += TUNING.cartographerBonus;
  }
  if (unit.kind === 'ship' && player.skills.includes('navigator')) {
    points += TUNING.navigatorBonus;
  }
  return points;
}

export function refreshMovement(state) {
  for (const unit of state.units) {
    unit.mp = moveMax(unit, playerById(state, unit.owner));
  }
}

function key(x, y) {
  return `${x},${y}`;
}

function occupants(state, x, y) {
  return state.units.filter((unit) => !unit.aboard && unit.x === x && unit.y === y);
}

export function stackIds(state, unit) {
  if (!unit || unit.aboard) return unit ? [unit.id] : [];
  if (unit.kind === 'leader') {
    return state.units
      .filter((other) => !other.aboard && other.x === unit.x && other.y === unit.y
        && (other.id === unit.id || other.leaderId === unit.id))
      .map((other) => other.id);
  }
  if (unit.leaderId) {
    const leader = state.units.find((other) => other.id === unit.leaderId && !other.aboard
      && other.x === unit.x && other.y === unit.y);
    if (leader) return stackIds(state, leader);
  }
  return [unit.id];
}

function blocked(state, x, y, movingIds) {
  return occupants(state, x, y).some((unit) => !movingIds.includes(unit.id));
}

function passable(unit, tile) {
  if (!tile) return false;
  const domain = TERRAIN[tile.terrain].pass;
  if (unit.kind === 'ship') return domain === 'sea';
  return domain === 'land';
}

export function reachable(state, unitId) {
  const unit = unitById(state, unitId);
  const out = new Map();
  if (!unit || unit.aboard || unit.mp <= 0) return out;
  if (unit.kind !== 'ship' && unit.kind !== 'leader' && unit.kind !== 'explorer' && unit.kind !== 'settler') {
    return out;
  }
  const moving = new Set(stackIds(state, unit));
  const startCost = 0;
  const queue = [[unit.x, unit.y, startCost]];
  out.set(key(unit.x, unit.y), 0);
  while (queue.length) {
    const [x, y, cost] = queue.shift();
    for (const [nx, ny] of neighbors4(x, y, state.map.width, state.map.height)) {
      const tile = tileAt(state, nx, ny);
      const step = TUNING.terrainCost[tile.terrain] || 1;
      const next = cost + step;
      if (next > unit.mp) continue;
      if (!passable(unit, tile)) continue;
      if (blocked(state, nx, ny, [...moving])) continue;
      const k = key(nx, ny);
      if (out.has(k) && out.get(k) <= next) continue;
      out.set(k, next);
      queue.push([nx, ny, next]);
    }
  }
  out.delete(key(unit.x, unit.y));
  return out;
}

export function moveUnit(state, unitId, x, y) {
  const unit = unitById(state, unitId);
  if (!unit) return fail('That unit is gone.');
  if (unit.aboard) return fail('Land it from the ship first.');
  const costs = reachable(state, unitId);
  const cost = costs.get(key(x, y));
  if (cost == null) return fail('That square is out of reach.');
  const ids = stackIds(state, unit);
  for (const id of ids) {
    const member = unitById(state, id);
    member.x = x;
    member.y = y;
    member.mp -= cost;
  }
  const discoveries = touchDiscoveries(state, unit.owner, [{ x, y }]);
  reveal(state, unit.owner);
  return { ok: true, discoveries };
}

export function adjacentLandings(state, shipId) {
  const ship = unitById(state, shipId);
  if (!ship || ship.kind !== 'ship') return [];
  return neighbors4(ship.x, ship.y, state.map.width, state.map.height).filter(([x, y]) => {
    const tile = tileAt(state, x, y);
    return tile && !isWaterTerrain(tile.terrain) && !blocked(state, x, y, []);
  });
}

// Lands the leader and his troops if they are aboard, otherwise one passenger.
export function landNext(state, shipId, x, y) {
  const ship = unitById(state, shipId);
  if (!ship || ship.kind !== 'ship') return fail('Select a ship.');
  const shore = adjacentLandings(state, shipId).some(([lx, ly]) => lx === x && ly === y);
  if (!shore) return fail('Land on an empty shore next to the ship.');
  const cargo = state.units.filter((unit) => unit.aboard === ship.id);
  const leader = cargo.find((unit) => unit.kind === 'leader');
  let party;
  if (leader) {
    party = cargo.filter((unit) => unit.id === leader.id || unit.leaderId === leader.id);
  } else {
    const next = cargo.find((unit) => unit.kind === 'explorer' || unit.kind === 'settler')
      || cargo.find((unit) => unit.kind === 'infantry' || unit.kind === 'cavalry' || unit.kind === 'artillery');
    if (!next) return fail('Nothing aboard can go ashore.');
    party = [next];
  }
  const cost = TUNING.landCost;
  for (const unit of party) {
    if (unit.mp < cost) return fail(`${label(unit)} has no movement left.`);
  }
  for (const unit of party) {
    unit.aboard = null;
    unit.x = x;
    unit.y = y;
    unit.mp -= cost;
  }
  const discoveries = touchDiscoveries(state, ship.owner, [{ x, y }]);
  reveal(state, ship.owner);
  return { ok: true, discoveries, landed: party.map((unit) => unit.id) };
}

export function boardUnit(state, unitId, shipId) {
  const unit = unitById(state, unitId);
  const ship = unitById(state, shipId);
  if (!unit || !ship || ship.kind !== 'ship') return fail('Pick a ship to board.');
  if (unit.aboard) return fail('Already aboard.');
  if (unit.owner !== ship.owner) return fail('That is not your ship.');
  const near = Math.abs(unit.x - ship.x) + Math.abs(unit.y - ship.y) === 1;
  if (!near) return fail('Move next to the ship first.');
  const ids = stackIds(state, unit);
  const cargoCount = state.units.filter((other) => other.aboard === ship.id).length;
  if (cargoCount + ids.length > TUNING.shipCapacity) return fail('That ship is full.');
  if (ids.some((id) => unitById(state, id).mp < 1)) return fail('Not enough movement to board.');
  for (const id of ids) {
    const member = unitById(state, id);
    member.aboard = ship.id;
    member.x = ship.x;
    member.y = ship.y;
    member.mp -= 1;
  }
  return { ok: true, discoveries: [] };
}

export function foundColony(state, settlerId) {
  const settler = unitById(state, settlerId);
  if (!settler || settler.kind !== 'settler' || settler.aboard) {
    return fail('Select a settler on land.');
  }
  if (settler.mp < TUNING.foundCost) return fail('Founding costs the rest of this turn.');
  const tile = tileAt(state, settler.x, settler.y);
  if (!tile || !townTerrain(tile.terrain)) {
    return fail('Found on plains, forest, or hills.');
  }
  if (tileBuilding(state, settler.x, settler.y)) return fail('That square is already built on.');
  const crowded = state.colonies.some((colony) => {
    return Math.max(Math.abs(colony.x - settler.x), Math.abs(colony.y - settler.y)) < TUNING.colonySpacing;
  });
  if (crowded) return fail('Too close to another colony.');
  const player = playerById(state, settler.owner);
  const nation = NATION_BY_ID[player.nationId];
  const name = nation.colonies[player.nextColony] || `Colony ${player.nextColony + 1}`;
  player.nextColony += 1;
  const colony = {
    id: state.nextId++,
    owner: player.id,
    name,
    x: settler.x,
    y: settler.y,
    level: 1,
    // Stage 2 fills these. Do not rename the keys.
    population: 0,
    housing: 0,
    stock: { wood: 0, metal: 0, food: 0, goods: 0, gold: 0 },
    buildings: [{ id: 'center', level: 1, x: settler.x, y: settler.y, w: 1, h: 1 }],
  };
  state.colonies.push(colony);
  state.units = state.units.filter((unit) => unit.id !== settler.id);
  const footprint = zoneList(colony);
  markSeen(state, player.id, footprint);
  const discoveries = touchDiscoveries(state, player.id, footprint.map(([x, y]) => ({ x, y })));
  reveal(state, player.id);
  state.log.push(`${name} is founded.`);
  return { ok: true, discoveries, colony };
}

export function placeBuilding(state, colonyId, buildingId, x, y) {
  const check = canPlace(state, colonyId, buildingId, x, y);
  if (!check.ok) return check;
  const colony = colonyById(state, colonyId);
  const shape = footprintOf(buildingId);
  colony.buildings.push({ id: buildingId, level: 1, x, y, w: shape.w, h: shape.h });
  const tiles = blockTiles(x, y, shape.w, shape.h);
  markSeen(state, colony.owner, tiles);
  const discoveries = touchDiscoveries(state, colony.owner, tiles.map(([tx, ty]) => ({ x: tx, y: ty })));
  state.log.push(`${colony.name} raises a ${shape.name.toLowerCase()}.`);
  return { ok: true, discoveries };
}

export function canPlace(state, colonyId, buildingId, x, y) {
  const colony = colonyById(state, colonyId);
  if (!colony) return fail('No such colony.');
  if (colony.owner !== humanPlayer(state).id) return fail('That is not your colony.');
  if (buildingId === 'center') return fail('The city is already standing.');
  const shape = footprintOf(buildingId);
  if (!shape) return fail('Unknown building.');
  if (buildingId === 'war_college') {
    const already = state.colonies.some((other) => other.owner === colony.owner
      && other.buildings.some((building) => building.id === 'war_college'));
    if (already) return fail('One war college is enough.');
  }
  for (let dy = 0; dy < shape.h; dy++) {
    for (let dx = 0; dx < shape.w; dx++) {
      const tx = x + dx;
      const ty = y + dy;
      const tile = tileAt(state, tx, ty);
      if (!tile) return fail('That runs off the map.');
      if (!inColonyZone(colony, tx, ty)) {
        return fail(`Level ${colony.level} does not cover those squares.`);
      }
      if (tileBuilding(state, tx, ty)) return fail('Those squares are already built on.');
      if (buildingId === 'dock') {
        if (tile.terrain !== 'coast') return fail('A dock has to sit on coast.');
      } else if (!townTerrain(tile.terrain)) {
        return fail('Build on plains, forest, or hills.');
      }
    }
  }
  return { ok: true, discoveries: [] };
}

export function footprintOf(id) {
  if (id === 'center') {
    return { id, name: 'Colony Center', short: 'Center', w: 1, h: 1, squares: 1, color: '#e6d3a1', produces: 'The center of the colony' };
  }
  const building = BUILDING_BY_ID[id];
  if (!building) return null;
  const span = building.squares === 4 ? 2 : 1;
  return { ...building, w: span, h: span };
}

export function inColonyZone(colony, x, y) {
  const reach = TUNING.buildReach[colony.level] || 1;
  return Math.max(Math.abs(x - colony.x), Math.abs(y - colony.y)) <= reach;
}

export function siteYield(state, buildingId, x, y) {
  const spec = TUNING.yield[buildingId];
  const shape = footprintOf(buildingId);
  if (!spec || !shape) return null;
  let total = spec.base || 0;
  const pad = spec.pad;
  for (let ty = y - pad; ty < y + shape.h + pad; ty++) {
    for (let tx = x - pad; tx < x + shape.w + pad; tx++) {
      const tile = tileAt(state, tx, ty);
      if (!tile) continue;
      total += spec.tile[tile.terrain] || 0;
      if (tile.riverId) total += spec.tile.river || 0;
      if (tile.gold) total += spec.tile.gold || 0;
    }
  }
  return total;
}

export function tileBuilding(state, x, y) {
  for (const colony of state.colonies) {
    for (const building of colony.buildings) {
      const w = building.w || 1;
      const h = building.h || 1;
      if (x >= building.x && x < building.x + w && y >= building.y && y < building.y + h) {
        return { colony, building };
      }
    }
  }
  return null;
}

function zoneList(colony) {
  const reach = TUNING.buildReach[colony.level] || 1;
  const tiles = [];
  for (let dy = -reach; dy <= reach; dy++) {
    for (let dx = -reach; dx <= reach; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) <= reach) tiles.push([colony.x + dx, colony.y + dy]);
    }
  }
  return tiles;
}

function townTerrain(terrain) {
  return terrain === 'plains' || terrain === 'forest' || terrain === 'hills';
}

function blockTiles(x, y, w, h) {
  const tiles = [];
  for (let dy = 0; dy < h; dy++) {
    for (let dx = 0; dx < w; dx++) tiles.push([x + dx, y + dy]);
  }
  return tiles;
}

function colonyById(state, id) {
  return state.colonies.find((colony) => colony.id === id) || null;
}

function markSeen(state, playerId, coords) {
  const player = playerById(state, playerId);
  const chars = player.explored.split('');
  const { width, height } = state.map;
  for (const [x, y] of coords) {
    if (!inBounds(x, y, width, height)) continue;
    chars[idx(x, y, width)] = '1';
  }
  player.explored = chars.join('');
}

export function nameDiscovery(state, kind, id, name, playerId) {
  const list = kind === 'river' ? state.map.rivers
    : kind === 'peak' ? state.map.peaks
      : state.map.regions;
  const item = list.find((entry) => entry.id === id);
  if (!item) return fail('Nothing there to name.');
  const clean = String(name || '').trim().slice(0, 40);
  if (!clean) return fail('Give it a name.');
  item.name = clean;
  item.namedBy = playerId;
  state.pendingNames = state.pendingNames.filter((pending) => {
    return !(pending.kind === kind && pending.id === id);
  });
  state.log.push(`${clean} enters the charts.`);
  return { ok: true };
}

export function endTurn(state) {
  const seasons = TUNING.seasons;
  state.season = (state.season + 1) % seasons.length;
  if (state.season === 0) state.year += 1;
  refreshMovement(state);
  for (const player of state.players) reveal(state, player.id);
  state.undo = [];
  const human = humanPlayer(state);
  const nation = NATION_BY_ID[human.nationId];
  state.log.push(`${seasons[state.season]} ${state.year}. ${rulerName(nation, state.year)} reigns in ${nation.name}.`);
  return { ok: true };
}

export function visibleKeys(state, playerId) {
  const keys = new Set();
  const { width, height } = state.map;
  for (const unit of state.units) {
    if (unit.owner !== playerId || unit.aboard) continue;
    const radius = TUNING.vision[unit.kind] || 1;
    const r2 = radius * radius;
    for (let y = unit.y - radius; y <= unit.y + radius; y++) {
      for (let x = unit.x - radius; x <= unit.x + radius; x++) {
        if (!inBounds(x, y, width, height)) continue;
        const dx = x - unit.x;
        const dy = y - unit.y;
        if (dx * dx + dy * dy > r2) continue;
        keys.add(`${x},${y}`);
      }
    }
  }
  return keys;
}

export function reveal(state, playerId) {
  const player = playerById(state, playerId);
  const chars = player.explored.split('');
  const { width, height } = state.map;
  for (const unit of state.units) {
    if (unit.owner !== playerId || unit.aboard) continue;
    const radius = TUNING.vision[unit.kind] || 1;
    const r2 = radius * radius;
    for (let y = unit.y - radius; y <= unit.y + radius; y++) {
      for (let x = unit.x - radius; x <= unit.x + radius; x++) {
        if (!inBounds(x, y, width, height)) continue;
        const dx = x - unit.x;
        const dy = y - unit.y;
        if (dx * dx + dy * dy > r2) continue;
        chars[idx(x, y, width)] = '1';
      }
    }
  }
  player.explored = chars.join('');
}

function touchDiscoveries(state, playerId, positions) {
  const found = [];
  const seen = new Set();
  const consider = (kind, id) => {
    if (!id) return;
    const token = `${kind}:${id}`;
    if (seen.has(token)) return;
    const list = kind === 'river' ? state.map.rivers
      : kind === 'peak' ? state.map.peaks
        : state.map.regions;
    const item = list.find((entry) => entry.id === id);
    if (!item || item.namedBy != null || item.pending) return;
    item.pending = true;
    seen.add(token);
    const pending = { kind, id, ownerId: playerId };
    state.pendingNames.push(pending);
    found.push(pending);
  };
  for (const pos of positions) {
    const tile = tileAt(state, pos.x, pos.y);
    if (!tile) continue;
    consider('peak', tile.peakId);
    consider('region', tile.regionId);
    consider('river', tile.riverId);
    if (tile.terrain === 'coast') {
      for (const [nx, ny] of neighbors4(pos.x, pos.y, state.map.width, state.map.height)) {
        consider('river', tileAt(state, nx, ny).riverId);
      }
    }
  }
  return found;
}

export function seasonName(state) {
  return TUNING.seasons[state.season];
}

export function describeTile(state, x, y, viewer) {
  const tile = tileAt(state, x, y);
  if (!tile) return 'Off the map';
  const known = viewer.explored[idx(x, y, state.map.width)] === '1';
  if (!known) return 'Unexplored';
  const parts = [TERRAIN[tile.terrain].name];
  if (tile.riverId) {
    const river = state.map.rivers.find((entry) => entry.id === tile.riverId);
    parts.push(river && river.name ? river.name : 'an unnamed river');
  }
  if (tile.peakId) {
    const peak = state.map.peaks.find((entry) => entry.id === tile.peakId);
    parts.push(peak && peak.name ? peak.name : 'an unnamed peak');
  }
  if (tile.regionId) {
    const region = state.map.regions.find((entry) => entry.id === tile.regionId);
    if (region && region.name) parts.push(region.name);
  }
  if (tile.gold) parts.push('gold-bearing rock');
  const built = tileBuilding(state, x, y);
  if (built) parts.push(`${built.colony.name} · ${footprintOf(built.building.id).name}`);
  return parts.join(' · ');
}

function label(unit) {
  return unit.name || unit.kind;
}

function fail(error) {
  return { ok: false, error, discoveries: [] };
}
