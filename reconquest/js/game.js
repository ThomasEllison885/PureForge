// Creates a campaign and wraps rules in an undo stack.
// The map itself never changes after generation. Undo restores units,
// colonies, charts, and who has seen what.

import { SAVE_VERSION, TUNING } from './tuning.js';
import { NATION_BY_ID, NATIONS, rulerName } from './data.js';
import { generateMap, idx, neighbors4 } from './mapgen.js';
import {
  boardUnit, endTurn, foundColony, landNext, moveUnit, nameDiscovery, placeBuilding,
  refreshMovement, reveal,
} from './rules.js';
import { noteGlimpse, publishDispatch } from './paper.js';

const MEMORY_KEY = 'cotnw-save';

export function newGame({ nationId, difficulty, skills, seed, rivals = 2 }) {
  const nation = NATION_BY_ID[nationId];
  if (!nation) throw new Error('Pick a nation.');
  if (!TUNING.invasionScale[difficulty]) throw new Error('Pick a difficulty.');
  let map = null;
  let usedSeed = seed >>> 0;
  for (let attempt = 0; attempt < 6; attempt++) {
    map = generateMap(usedSeed + attempt);
    if (map.rivers.length && countLand(map) > 80) {
      usedSeed += attempt;
      break;
    }
  }
  const taken = new Set([nationId]);
  const rivalNations = NATIONS.filter((entry) => entry.id !== nationId).slice(0, rivals);
  for (const rival of rivalNations) taken.add(rival.id);

  const state = {
    version: SAVE_VERSION,
    seed: usedSeed,
    difficulty,
    invasionScale: TUNING.invasionScale[difficulty],
    year: TUNING.startYear,
    season: 0,
    nextId: 1,
    map,
    players: [],
    units: [],
    colonies: [],
    pendingNames: [],
    log: [],
    glimpsed: [],
    undo: [],
  };

  const human = makePlayer(state, nation, true, skills || []);
  state.players.push(human);
  const used = [];
  const east = findCoast(map, (x) => x > map.width * 0.58, used) || findCoast(map, () => true, used);
  if (!east) throw new Error('This seed has no coast to land on.');
  placeExpedition(state, human, east, used);

  rivalNations.forEach((rival) => {
    const player = makePlayer(state, rival, false, []);
    state.players.push(player);
    const spot = findCoast(map, (x) => x < map.width * 0.42, used);
    if (spot) placeRival(state, player, spot, used);
  });

  refreshMovement(state);
  for (const player of state.players) reveal(state, player.id);
  const ruler = rulerName(nation, state.year);
  state.log.push(`${nation.name} sails west in Spring ${state.year}. ${ruler} rules at home.`);
  state.log.push('Two ships. The first has your leader and explorers. The second has settlers.');
  return state;
}

function makePlayer(state, nation, isHuman, skills) {
  return {
    id: state.players.length,
    nationId: nation.id,
    isHuman,
    skills: [...skills],
    explored: '0'.repeat(state.map.width * state.map.height),
    nextLeader: 1,
    nextColony: 0,
    // Stage 6 reads this. Taxes and wars are not simulated yet.
    mother: { favor: 0, resentment: 0, taxUnpaid: 0, independent: false },
  };
}

function placeExpedition(state, player, spot, used) {
  const nation = NATION_BY_ID[player.nationId];
  const second = neighborWater(state.map, spot[0], spot[1]) || [spot[0], Math.min(state.map.height - 2, spot[1] + 1)];
  used.push(spot, second);
  const shipA = addUnit(state, player, 'ship', spot[0], spot[1], 'Lead ship');
  const shipB = addUnit(state, player, 'ship', second[0], second[1], 'Storeship');
  const leader = addUnit(state, player, 'leader', spot[0], spot[1], nation.leaders[0]);
  leader.aboard = shipA.id;
  const explorerA = addUnit(state, player, 'explorer', spot[0], spot[1], 'Explorer');
  const explorerB = addUnit(state, player, 'explorer', spot[0], spot[1], 'Explorer');
  explorerA.aboard = shipA.id;
  explorerB.aboard = shipA.id;
  const guard = addUnit(state, player, 'infantry', spot[0], spot[1], 'Guard');
  guard.aboard = shipA.id;
  guard.leaderId = leader.id;
  guard.strength = 3;
  const settlerA = addUnit(state, player, 'settler', second[0], second[1], 'Settlers');
  const settlerB = addUnit(state, player, 'settler', second[0], second[1], 'Settlers');
  settlerA.aboard = shipB.id;
  settlerB.aboard = shipB.id;
  const garrison = addUnit(state, player, 'infantry', second[0], second[1], 'Garrison');
  garrison.aboard = shipB.id;
  garrison.strength = 3;
}

function placeRival(state, player, spot, used) {
  used.push(spot);
  const nation = NATION_BY_ID[player.nationId];
  const ship = addUnit(state, player, 'ship', spot[0], spot[1], 'Ship');
  const leader = addUnit(state, player, 'leader', spot[0], spot[1], nation.leaders[0]);
  leader.aboard = ship.id;
  const explorer = addUnit(state, player, 'explorer', spot[0], spot[1], 'Explorer');
  explorer.aboard = ship.id;
}

function addUnit(state, player, kind, x, y, name) {
  const unit = {
    id: state.nextId++,
    owner: player.id,
    kind,
    name,
    x,
    y,
    aboard: null,
    leaderId: null,
    strength: kind === 'infantry' ? 3 : kind === 'leader' ? 2 : 1,
    mp: 0,
  };
  state.units.push(unit);
  return unit;
}

function findCoast(map, acceptX, used = []) {
  const coasts = [];
  for (let y = 1; y < map.height - 1; y++) {
    for (let x = 1; x < map.width - 1; x++) {
      if (used.some(([ux, uy]) => Math.abs(ux - x) + Math.abs(uy - y) < 4)) continue;
      const tile = map.tiles[idx(x, y, map.width)];
      if (tile.terrain !== 'coast') continue;
      if (!acceptX(x, y)) continue;
      const land = neighbors4(x, y, map.width, map.height).some(([nx, ny]) => {
        const terrain = map.tiles[idx(nx, ny, map.width)].terrain;
        return terrain !== 'ocean' && terrain !== 'coast';
      });
      if (land) coasts.push([x, y]);
    }
  }
  if (!coasts.length) return null;
  return coasts[Math.floor(coasts.length / 2)];
}

function neighborWater(map, x, y) {
  for (const [nx, ny] of neighbors4(x, y, map.width, map.height)) {
    const terrain = map.tiles[idx(nx, ny, map.width)].terrain;
    if ((terrain === 'ocean' || terrain === 'coast') && (nx !== x || ny !== y)) {
      if (nx !== x || ny !== y) return [nx, ny];
    }
  }
  return null;
}

function countLand(map) {
  return map.tiles.filter((tile) => tile.terrain !== 'ocean' && tile.terrain !== 'coast').length;
}

function checkpoint(state) {
  state.undo.push(JSON.stringify(mutable(state)));
  if (state.undo.length > 40) state.undo.shift();
}

function mutable(state) {
  return {
    year: state.year,
    season: state.season,
    nextId: state.nextId,
    units: state.units,
    colonies: state.colonies,
    pendingNames: state.pendingNames,
    log: state.log,
    glimpsed: state.glimpsed || [],
    players: state.players.map((player) => ({
      id: player.id,
      explored: player.explored,
      nextLeader: player.nextLeader,
      nextColony: player.nextColony,
      mother: player.mother,
    })),
    charts: {
      rivers: state.map.rivers.map(chartFields),
      peaks: state.map.peaks.map(chartFields),
      regions: state.map.regions.map(chartFields),
    },
  };
}

function chartFields(entry) {
  return { id: entry.id, name: entry.name, namedBy: entry.namedBy, pending: !!entry.pending };
}

function restore(state, snap) {
  const data = JSON.parse(snap);
  state.year = data.year;
  state.season = data.season;
  state.nextId = data.nextId;
  state.units = data.units;
  state.colonies = data.colonies;
  state.pendingNames = data.pendingNames;
  state.log = data.log;
  state.glimpsed = data.glimpsed || [];
  for (const saved of data.players) {
    const player = state.players.find((entry) => entry.id === saved.id);
    player.explored = saved.explored;
    player.nextLeader = saved.nextLeader;
    player.nextColony = saved.nextColony;
    player.mother = saved.mother;
  }
  applyCharts(state.map.rivers, data.charts.rivers);
  applyCharts(state.map.peaks, data.charts.peaks);
  applyCharts(state.map.regions, data.charts.regions);
}

function applyCharts(list, saved) {
  for (const entry of saved) {
    const item = list.find((row) => row.id === entry.id);
    if (!item) continue;
    item.name = entry.name;
    item.namedBy = entry.namedBy;
    item.pending = entry.pending;
  }
}

function wrap(state, fn) {
  checkpoint(state);
  const result = fn();
  if (!result.ok) state.undo.pop();
  else noteGlimpse(state);
  return result;
}

export function actMove(state, unitId, x, y) {
  return wrap(state, () => moveUnit(state, unitId, x, y));
}

export function actLand(state, shipId, x, y) {
  return wrap(state, () => landNext(state, shipId, x, y));
}

export function actBoard(state, unitId, shipId) {
  return wrap(state, () => boardUnit(state, unitId, shipId));
}

export function actFound(state, settlerId) {
  return wrap(state, () => foundColony(state, settlerId));
}

export function actPlaceBuilding(state, colonyId, buildingId, x, y) {
  return wrap(state, () => placeBuilding(state, colonyId, buildingId, x, y));
}

export function actName(state, kind, id, name, playerId) {
  return wrap(state, () => nameDiscovery(state, kind, id, name, playerId));
}

export function actEndTurn(state) {
  state.undo = [];
  const result = endTurn(state);
  if (result.ok) publishDispatch(state);
  return result;
}

export function undo(state) {
  const snap = state.undo.pop();
  if (!snap) return false;
  restore(state, snap);
  return true;
}

export function finishSetup(state) {
  refreshMovement(state);
}

export function saveToMemory(state) {
  const payload = exportGame(state);
  localStorage.setItem(MEMORY_KEY, payload);
  return payload;
}

export function loadFromMemory() {
  const raw = localStorage.getItem(MEMORY_KEY);
  if (!raw) return null;
  return importGame(raw);
}

export function exportGame(state) {
  return JSON.stringify({
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    game: {
      seed: state.seed,
      difficulty: state.difficulty,
      invasionScale: state.invasionScale,
      year: state.year,
      season: state.season,
      nextId: state.nextId,
      map: state.map,
      players: state.players,
      units: state.units,
      colonies: state.colonies,
      pendingNames: state.pendingNames,
      log: state.log,
      glimpsed: state.glimpsed || [],
      paper: state.paper || null,
      dispatch: state.dispatch || null,
    },
  });
}

export function importGame(raw) {
  const data = JSON.parse(raw);
  if (!data || data.version !== SAVE_VERSION) throw new Error('That save is from another version.');
  const state = data.game;
  state.undo = [];
  state.log = state.log || [];
  state.glimpsed = state.glimpsed || [];
  return state;
}

export { MEMORY_KEY };
