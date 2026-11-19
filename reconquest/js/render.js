// Playtest drawings. Illustrated tiles can replace these functions later.
// Game state does not care how a ship is drawn.

import { TILE_H, TILE_W, tileCenter } from './iso.js';
import { TERRAIN, NATION_BY_ID, UNIT_KINDS } from './data.js';
import { idx, neighbors4 } from './mapgen.js';
import { footprintOf, humanPlayer, visibleKeys } from './rules.js';

const DEPTH = { ocean: 0, coast: 0, plains: 2, forest: 3, hills: 10, mountains: 18 };
const LIFT = { ocean: 0, coast: 0, plains: 0, forest: 0, hills: 8, mountains: 16 };
const UNKNOWN = '#102433';

export function drawMap(ctx, view, state, cam, marks) {
  const human = humanPlayer(state);
  const visible = visibleKeys(state, human.id);
  const { width, height, tiles } = state.map;
  ctx.clearRect(0, 0, view.w, view.h);
  ctx.fillStyle = '#07141d';
  ctx.fillRect(0, 0, view.w, view.h);

  const built = indexBuildings(state);
  const order = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) order.push([x, y]);
  }
  order.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]) || a[0] - b[0]);

  const drawn = [];
  for (const [x, y] of order) {
    const center = tileCenter(x, y, cam);
    if (center.x < -160 || center.y < -180 || center.x > view.w + 160 || center.y > view.h + 180) continue;
    const known = human.explored[idx(x, y, width)] === '1';
    const tile = tiles[idx(x, y, width)];
    const live = visible.has(`${x},${y}`);
    const lift = known ? (LIFT[tile.terrain] || 0) * cam.zoom : 0;
    const cx = center.x;
    const cy = center.y - lift;
    if (!known) {
      drawSlab(ctx, cx, cy, cam, UNKNOWN, 0, false);
      strokeDiamond(ctx, cx, cy, cam, 'rgba(150, 186, 204, 0.22)', 1);
    } else {
      ctx.save();
      if (!live) ctx.globalAlpha = 0.78;
      const top = vary(TERRAIN[tile.terrain].color, x, y);
      drawSlab(ctx, cx, cy, cam, top, DEPTH[tile.terrain] || 0, true);
      drawScenery(ctx, cx, cy, cam, state, x, y, tile);
      const hit = built.get(`${x},${y}`);
      if (hit) {
        const shape = footprintOf(hit.building.id);
        const owner = state.players.find((player) => player.id === hit.colony.owner);
        const color = hit.building.id === 'center' ? NATION_BY_ID[owner.nationId].color : shape.color;
        fillDiamond(ctx, cx, cy, cam, colorAlpha(color, 0.78));
      }
      ctx.restore();
    }
    drawn.push({ x, y, cx, cy, known });
  }

  for (const cell of drawn) {
    const key = `${cell.x},${cell.y}`;
    if (marks.reach && marks.reach.has(key)) {
      const wash = cell.known ? 'rgba(255, 206, 80, 0.30)' : 'rgba(255, 206, 80, 0.16)';
      fillDiamond(ctx, cell.cx, cell.cy, cam, wash);
      strokeDiamond(ctx, cell.cx, cell.cy, cam, '#ffd76a', 3);
    }
    if (marks.shore && marks.shore.some(([sx, sy]) => sx === cell.x && sy === cell.y)) {
      fillDiamond(ctx, cell.cx, cell.cy, cam, 'rgba(120, 230, 160, 0.34)');
      strokeDiamond(ctx, cell.cx, cell.cy, cam, '#e7fff1', 3);
    }
    if (marks.zone && marks.zone.has(key)) {
      fillDiamond(ctx, cell.cx, cell.cy, cam, 'rgba(232, 214, 170, 0.28)');
      strokeDiamond(ctx, cell.cx, cell.cy, cam, 'rgba(244, 232, 204, 0.9)', 2);
    }
    if (marks.ghost && ghostCovers(marks.ghost, cell.x, cell.y)) {
      const ink = marks.ghost.ok ? '#e2c57a' : '#8c2f39';
      strokeDiamond(ctx, cell.cx, cell.cy, cam, ink, 3);
    }
    if (marks.hover && marks.hover.x === cell.x && marks.hover.y === cell.y) {
      strokeDiamond(ctx, cell.cx, cell.cy, cam, 'rgba(255,255,255,0.95)', 2);
    }
  }

  for (const cell of drawn) {
    const hit = built.get(`${cell.x},${cell.y}`);
    if (hit && cell.known && hit.origin && cam.zoom >= 1.6) {
      if (hit.building.id === 'center') {
        drawSprite(ctx, cell.cx, cell.cy, cam, (g) => drawTownName(g, hit.colony.name));
      } else {
        drawSprite(ctx, cell.cx, cell.cy, cam, (g) => drawBuildingLabel(g, footprintOf(hit.building.id).short));
      }
    }
    const live = visible.has(`${cell.x},${cell.y}`);
    if (!live) continue;
    const group = state.units.filter((unit) => !unit.aboard && unit.x === cell.x && unit.y === cell.y);
    if (!group.length) continue;
    const unit = group.find((entry) => entry.kind === 'ship')
      || group.find((entry) => entry.kind === 'leader')
      || group[0];
    const owner = state.players.find((player) => player.id === unit.owner);
    const color = NATION_BY_ID[owner.nationId].color;
    const selected = marks.selected && group.some((entry) => entry.id === marks.selected);
    drawSprite(ctx, cell.cx, cell.cy, cam, (g) => drawUnit(g, unit, color, group.length, selected));
  }
}

function drawScenery(ctx, cx, cy, cam, state, x, y, tile) {
  const z = cam.zoom;
  if (tile.terrain === 'ocean') drawWaves(ctx, cx, cy, cam);
  if (tile.terrain === 'coast') drawBeach(ctx, cx, cy, cam, state, x, y);
  if (tile.terrain === 'plains') drawTufts(ctx, cx, cy, z, x, y);
  if (tile.terrain === 'forest') drawForest(ctx, cx, cy, z, x, y);
  if (tile.terrain === 'hills') drawHill(ctx, cx, cy, z);
  if (tile.terrain === 'mountains') drawPeak(ctx, cx, cy, z, Boolean(tile.peakId));
  if (tile.riverId) drawRiver(ctx, cx, cy, cam, state, x, y, tile.riverId);
  if (tile.gold) drawNugget(ctx, cx, cy, z);
}

function drawWaves(ctx, cx, cy, cam) {
  clipDiamond(ctx, cx, cy, cam, () => {
    ctx.strokeStyle = 'rgba(198, 232, 244, 0.38)';
    ctx.lineWidth = Math.max(1, cam.zoom * 0.7);
    const z = cam.zoom;
    for (const dy of [-8, 0, 8]) {
      ctx.beginPath();
      ctx.moveTo(cx - 30 * z, cy + dy * z);
      ctx.quadraticCurveTo(cx - 10 * z, cy + (dy - 3) * z, cx + 8 * z, cy + dy * z);
      ctx.quadraticCurveTo(cx + 20 * z, cy + (dy + 2) * z, cx + 32 * z, cy + (dy - 1) * z);
      ctx.stroke();
    }
  });
}

function drawBeach(ctx, cx, cy, cam, state, x, y) {
  const { width, height, tiles } = state.map;
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  for (const [nx, ny] of neighbors4(x, y, width, height)) {
    const terrain = tiles[idx(nx, ny, width)].terrain;
    if (terrain === 'ocean' || terrain === 'coast') continue;
    const ox = ((nx - x) - (ny - y)) * hw;
    const oy = ((nx - x) + (ny - y)) * hh;
    ctx.strokeStyle = '#f3e6c4';
    ctx.lineWidth = Math.max(3, 5.5 * cam.zoom);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx + ox * 0.22, cy + oy * 0.22);
    ctx.lineTo(cx + ox * 0.46, cy + oy * 0.46);
    ctx.stroke();
  }
}

function drawTufts(ctx, cx, cy, z, x, y) {
  ctx.strokeStyle = 'rgba(96, 92, 32, 0.55)';
  ctx.lineWidth = Math.max(1, z * 0.6);
  const spots = [[-8, 2], [5, 4], [-1, -3], [9, -1]];
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const [dx, dy] = spots[(i + x + y) % spots.length];
    ctx.moveTo(cx + dx * z, cy + dy * z);
    ctx.lineTo(cx + (dx - 1.5) * z, cy + (dy - 5) * z);
    ctx.moveTo(cx + (dx + 2.5) * z, cy + dy * z);
    ctx.lineTo(cx + (dx + 3.5) * z, cy + (dy - 4) * z);
  }
  ctx.stroke();
}

function drawForest(ctx, cx, cy, z, x, y) {
  const spots = [[-8, 3], [7, 5], [0, -2]];
  for (let i = 0; i < 3; i++) {
    const [dx, dy] = spots[(i + x) % spots.length];
    pine(ctx, cx + dx * z, cy + dy * z, z * (0.85 + ((x + y + i) % 3) * 0.08));
  }
}

function pine(ctx, x, y, z) {
  ctx.fillStyle = '#4a3018';
  ctx.fillRect(x - 1.1 * z, y - 3 * z, 2.2 * z, 4.2 * z);
  ctx.fillStyle = '#14381f';
  ctx.beginPath();
  ctx.moveTo(x, y - 20 * z);
  ctx.lineTo(x + 8 * z, y - 2 * z);
  ctx.lineTo(x - 8 * z, y - 2 * z);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#2c6b38';
  ctx.beginPath();
  ctx.moveTo(x, y - 15 * z);
  ctx.lineTo(x + 6 * z, y - 5 * z);
  ctx.lineTo(x - 6 * z, y - 5 * z);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#49a056';
  ctx.beginPath();
  ctx.moveTo(x, y - 11 * z);
  ctx.lineTo(x + 4.2 * z, y - 5 * z);
  ctx.lineTo(x - 4.2 * z, y - 5 * z);
  ctx.closePath();
  ctx.fill();
}

function drawHill(ctx, cx, cy, z) {
  ctx.fillStyle = '#6a4e2c';
  ctx.beginPath();
  ctx.moveTo(cx - 14 * z, cy + 3 * z);
  ctx.quadraticCurveTo(cx - 4 * z, cy - 12 * z, cx + 2 * z, cy - 9 * z);
  ctx.quadraticCurveTo(cx + 14 * z, cy - 6 * z, cx + 15 * z, cy + 4 * z);
  ctx.quadraticCurveTo(cx, cy + 8 * z, cx - 14 * z, cy + 3 * z);
  ctx.fill();
  ctx.fillStyle = '#c4a15a';
  ctx.beginPath();
  ctx.moveTo(cx - 8 * z, cy + 1 * z);
  ctx.quadraticCurveTo(cx - 1 * z, cy - 8 * z, cx + 4 * z, cy - 6 * z);
  ctx.quadraticCurveTo(cx + 10 * z, cy - 3 * z, cx + 8 * z, cy + 2 * z);
  ctx.quadraticCurveTo(cx, cy + 4 * z, cx - 8 * z, cy + 1 * z);
  ctx.fill();
}

function drawPeak(ctx, cx, cy, z, named) {
  ctx.fillStyle = '#6d7882';
  ctx.beginPath();
  ctx.moveTo(cx - 2 * z, cy - 6 * z);
  ctx.lineTo(cx + 16 * z, cy - 18 * z);
  ctx.lineTo(cx + 10 * z, cy + 1 * z);
  ctx.lineTo(cx - 8 * z, cy + 3 * z);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#9aa6b0';
  ctx.beginPath();
  ctx.moveTo(cx - 2 * z, cy + 5 * z);
  ctx.lineTo(cx + 13 * z, cy - 1 * z);
  ctx.lineTo(cx, cy - 30 * z);
  ctx.lineTo(cx - 15 * z, cy - 3 * z);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#d5dee6';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 30 * z);
  ctx.lineTo(cx + 13 * z, cy - 1 * z);
  ctx.lineTo(cx + 2 * z, cy - 8 * z);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = named ? '#ffffff' : '#f4f7fa';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 30 * z);
  ctx.lineTo(cx + 5 * z, cy - 16 * z);
  ctx.lineTo(cx - 5 * z, cy - 17 * z);
  ctx.closePath();
  ctx.fill();
}

function drawRiver(ctx, cx, cy, cam, state, x, y, riverId) {
  const { width, height, tiles } = state.map;
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  const ends = [];
  for (const [nx, ny] of neighbors4(x, y, width, height)) {
    const other = tiles[idx(nx, ny, width)];
    const wet = other.riverId === riverId || other.terrain === 'ocean' || other.terrain === 'coast';
    if (!wet) continue;
    ends.push({
      x: cx + ((nx - x) - (ny - y)) * hw * 0.46,
      y: cy + ((nx - x) + (ny - y)) * hh * 0.46,
    });
  }
  ctx.strokeStyle = 'rgba(120, 198, 222, 0.95)';
  ctx.lineWidth = Math.max(2.5, 3.4 * cam.zoom);
  ctx.lineCap = 'round';
  ctx.beginPath();
  if (ends.length === 0) {
    ctx.moveTo(cx - 6 * cam.zoom, cy);
    ctx.lineTo(cx + 6 * cam.zoom, cy);
  } else if (ends.length === 1) {
    ctx.moveTo(ends[0].x, ends[0].y);
    ctx.lineTo(cx, cy);
  } else {
    ctx.moveTo(ends[0].x, ends[0].y);
    ctx.lineTo(cx, cy);
    for (let i = 1; i < ends.length; i++) ctx.lineTo(ends[i].x, ends[i].y);
  }
  ctx.stroke();
}

function drawNugget(ctx, cx, cy, z) {
  ctx.lineWidth = Math.max(0.6, z * 0.35);
  ctx.strokeStyle = '#6a4a16';
  for (const [dx, dy, r] of [[7, 3, 2.1], [10, 5, 1.5], [5.5, 5.5, 1.3]]) {
    ctx.fillStyle = dx > 8 ? '#f0d56a' : '#e2b84a';
    ctx.beginPath();
    ctx.arc(cx + dx * z, cy + dy * z, r * z, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

function drawSprite(ctx, cx, cy, cam, draw) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(cam.zoom, cam.zoom);
  draw(ctx);
  ctx.restore();
}

function drawUnit(ctx, unit, color, count, selected) {
  const kind = unit.kind;
  ctx.fillStyle = 'rgba(0,0,0,0.28)';
  ctx.beginPath();
  ctx.ellipse(0, 8, kind === 'ship' ? 16 : 9, 3.6, -0.3, 0, Math.PI * 2);
  ctx.fill();
  if (selected) {
    ctx.strokeStyle = '#fff4c8';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.ellipse(0, 8, kind === 'ship' ? 18 : 12, 5.2, -0.3, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (kind === 'ship') drawShip(ctx, color);
  else if (kind === 'settler') drawWagon(ctx, color);
  else if (kind === 'cavalry') drawHorse(ctx, color);
  else if (kind === 'artillery') drawGun(ctx, color);
  else drawPerson(ctx, color, kind);
  if (count > 1) {
    ctx.fillStyle = '#1c140c';
    ctx.beginPath();
    ctx.arc(14, -18, 6.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f6f1e4';
    ctx.font = 'bold 8px Palatino, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(count), 14, -18);
  }
  if (selected) drawLabel(ctx, unit.name || UNIT_KINDS[kind].name);
}

function drawLabel(ctx, text) {
  ctx.font = 'bold 7px Palatino, Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const width = Math.min(ctx.measureText(text).width, 54);
  const shown = text.length > 16 ? `${text.slice(0, 15)}…` : text;
  const plate = Math.max(width, ctx.measureText(shown).width);
  ctx.fillStyle = 'rgba(12, 22, 30, 0.88)';
  ctx.fillRect(-plate / 2 - 4, -40, plate + 8, 11);
  ctx.fillStyle = '#fff6df';
  ctx.fillText(shown, 0, -34.5);
}

function drawShip(ctx, color) {
  ctx.strokeStyle = 'rgba(214, 238, 246, 0.85)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(12, 11);
  ctx.quadraticCurveTo(20, 15, 28, 11);
  ctx.moveTo(10, 15);
  ctx.quadraticCurveTo(18, 19, 26, 14);
  ctx.stroke();

  ctx.fillStyle = '#4e2e16';
  ctx.beginPath();
  ctx.moveTo(-22, -7);
  ctx.quadraticCurveTo(-14, 2, -4, 7);
  ctx.lineTo(16, 11);
  ctx.quadraticCurveTo(23, 7, 18, 2);
  ctx.quadraticCurveTo(4, 5, -18, -2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#8d5b32';
  ctx.beginPath();
  ctx.moveTo(-19, -6);
  ctx.quadraticCurveTo(-6, 1, 15, 4);
  ctx.lineTo(14, 7);
  ctx.quadraticCurveTo(-2, 5, -15, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(-15, -2);
  ctx.quadraticCurveTo(0, 4, 14, 6);
  ctx.stroke();
  ctx.fillStyle = '#3c2412';
  ctx.fillRect(9, -1, 7, 6);

  ctx.strokeStyle = '#2a1a0e';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-2, 3);
  ctx.lineTo(-5, -24);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-4, -22);
  ctx.quadraticCurveTo(14, -16, 12, -3);
  ctx.quadraticCurveTo(2, -1, -4, -2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  ctx.lineWidth = 0.9;
  ctx.beginPath();
  ctx.moveTo(-2, -18);
  ctx.quadraticCurveTo(7, -12, 6, -6);
  ctx.stroke();
  ctx.fillStyle = '#f7f1e4';
  ctx.beginPath();
  ctx.moveTo(-5, -24);
  ctx.lineTo(3, -21.5);
  ctx.lineTo(-5, -19);
  ctx.fill();
}

function drawPerson(ctx, color, kind) {
  ctx.strokeStyle = '#2a2118';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-3, 4);
  ctx.lineTo(-6, 12);
  ctx.moveTo(2, 4);
  ctx.lineTo(1, 12);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-5, -2);
  ctx.lineTo(4, -1);
  ctx.lineTo(3, 6);
  ctx.lineTo(-4, 6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#e6c6a6';
  ctx.beginPath();
  ctx.arc(-1, -6, 3.4, 0, Math.PI * 2);
  ctx.fill();
  if (kind === 'leader') {
    ctx.fillStyle = '#2a2118';
    ctx.fillRect(-4.5, -10, 8, 2.2);
    ctx.strokeStyle = '#3a2414';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(7, 10);
    ctx.lineTo(6, -16);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(6, -16);
    ctx.lineTo(16, -11);
    ctx.lineTo(6, -6);
    ctx.closePath();
    ctx.fill();
  } else if (kind === 'explorer') {
    ctx.fillStyle = '#c4a35a';
    ctx.beginPath();
    ctx.ellipse(-1, -9, 6, 1.7, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#6b3e22';
    ctx.beginPath();
    ctx.ellipse(5, 1, 3.2, 4.2, 0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === 'infantry') {
    ctx.strokeStyle = '#efe8da';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(6, 12);
    ctx.lineTo(5, -15);
    ctx.stroke();
    ctx.fillStyle = '#d5d8dc';
    ctx.beginPath();
    ctx.moveTo(4, -15);
    ctx.lineTo(9, -11);
    ctx.lineTo(4, -10);
    ctx.fill();
  }
}

function drawWagon(ctx, color) {
  ctx.fillStyle = '#6b4424';
  ctx.fillRect(-12, -1, 22, 8);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-11, -1);
  ctx.quadraticCurveTo(0, -12, 10, -1);
  ctx.fill();
  ctx.fillStyle = '#24180f';
  ctx.beginPath();
  ctx.arc(-7, 8, 2.8, 0, Math.PI * 2);
  ctx.arc(8, 8, 2.8, 0, Math.PI * 2);
  ctx.fill();
}

function drawHorse(ctx, color) {
  ctx.fillStyle = '#6b4424';
  ctx.beginPath();
  ctx.moveTo(-12, 4);
  ctx.quadraticCurveTo(-2, -2, 8, 1);
  ctx.lineTo(12, -2);
  ctx.quadraticCurveTo(16, -1, 14, 3);
  ctx.lineTo(10, 4);
  ctx.quadraticCurveTo(2, 8, -8, 7);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#3a2414';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-8, 7); ctx.lineTo(-9, 13);
  ctx.moveTo(-3, 7); ctx.lineTo(-2, 13);
  ctx.moveTo(5, 6); ctx.lineTo(6, 13);
  ctx.moveTo(9, 5); ctx.lineTo(11, 13);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillRect(-2, -6, 6, 7);
  ctx.fillStyle = '#e6c6a6';
  ctx.beginPath();
  ctx.arc(2, -8, 2.6, 0, Math.PI * 2);
  ctx.fill();
}

function drawGun(ctx, color) {
  ctx.fillStyle = '#6b4424';
  ctx.fillRect(-10, 2, 16, 5);
  ctx.fillStyle = '#24180f';
  ctx.beginPath();
  ctx.arc(-6, 8, 2.4, 0, Math.PI * 2);
  ctx.arc(4, 8, 2.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2a241c';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-2, 3);
  ctx.lineTo(12, -2);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillRect(-12, 3, 4, 4);
}

function ghostCovers(ghost, x, y) {
  const shape = footprintOf(ghost.buildingId);
  if (!shape) return false;
  return x >= ghost.x && x < ghost.x + shape.w && y >= ghost.y && y < ghost.y + shape.h;
}

function drawBuildingLabel(ctx, name) {
  ctx.font = 'bold 6px Palatino, Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const width = ctx.measureText(name).width;
  ctx.fillStyle = 'rgba(20, 14, 8, 0.78)';
  ctx.fillRect(-width / 2 - 3, -6, width + 6, 10);
  ctx.fillStyle = '#f6f1e4';
  ctx.fillText(name, 0, -1);
}

function drawTownName(ctx, name) {
  ctx.font = '7px Palatino, Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const shown = name.length > 18 ? `${name.slice(0, 17)}…` : name;
  const width = ctx.measureText(shown).width;
  ctx.fillStyle = 'rgba(20, 14, 8, 0.82)';
  ctx.fillRect(-width / 2 - 4, -30, width + 8, 11);
  ctx.fillStyle = '#f6f1e4';
  ctx.fillText(shown, 0, -24.5);
}

function indexBuildings(state) {
  const built = new Map();
  for (const colony of state.colonies) {
    for (const building of colony.buildings) {
      const w = building.w || 1;
      const h = building.h || 1;
      for (let dy = 0; dy < h; dy++) {
        for (let dx = 0; dx < w; dx++) {
          built.set(`${building.x + dx},${building.y + dy}`, {
            colony,
            building,
            origin: dx === 0 && dy === 0,
          });
        }
      }
    }
  }
  return built;
}

function colorAlpha(hex, alpha) {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

function drawSlab(ctx, cx, cy, cam, top, depth, shaded) {
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  const drop = depth * cam.zoom;
  if (drop > 0.4) {
    ctx.beginPath();
    ctx.moveTo(cx - hw, cy);
    ctx.lineTo(cx, cy + hh);
    ctx.lineTo(cx, cy + hh + drop);
    ctx.lineTo(cx - hw, cy + drop);
    ctx.closePath();
    ctx.fillStyle = mix(top, -42);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx, cy + hh);
    ctx.lineTo(cx + hw, cy);
    ctx.lineTo(cx + hw, cy + drop);
    ctx.lineTo(cx, cy + hh + drop);
    ctx.closePath();
    ctx.fillStyle = mix(top, -22);
    ctx.fill();
  }
  if (!shaded) {
    diamondPath(ctx, cx, cy, hw, hh);
    ctx.fillStyle = top;
    ctx.fill();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(cx, cy - hh);
  ctx.lineTo(cx - hw, cy);
  ctx.lineTo(cx, cy + hh);
  ctx.closePath();
  ctx.fillStyle = mix(top, -14);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx, cy - hh);
  ctx.lineTo(cx + hw, cy);
  ctx.lineTo(cx, cy + hh);
  ctx.closePath();
  ctx.fillStyle = mix(top, 16);
  ctx.fill();
  diamondPath(ctx, cx, cy, hw, hh);
  ctx.strokeStyle = 'rgba(8, 16, 22, 0.35)';
  ctx.lineWidth = 1;
  ctx.stroke();
}

function diamondPath(ctx, cx, cy, hw, hh) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - hh);
  ctx.lineTo(cx + hw, cy);
  ctx.lineTo(cx, cy + hh);
  ctx.lineTo(cx - hw, cy);
  ctx.closePath();
}

function clipDiamond(ctx, cx, cy, cam, draw) {
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  ctx.save();
  diamondPath(ctx, cx, cy, hw, hh);
  ctx.clip();
  draw();
  ctx.restore();
}

function fillDiamond(ctx, cx, cy, cam, color) {
  const hw = (TILE_W * cam.zoom) / 2 - 3;
  const hh = (TILE_H * cam.zoom) / 2 - 2;
  diamondPath(ctx, cx, cy, hw, hh);
  ctx.fillStyle = color;
  ctx.fill();
}

function strokeDiamond(ctx, cx, cy, cam, color, width) {
  const hw = (TILE_W * cam.zoom) / 2 - 2;
  const hh = (TILE_H * cam.zoom) / 2 - 1;
  diamondPath(ctx, cx, cy, hw, hh);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function vary(hex, x, y) {
  const wobble = ((x * 13 + y * 7) % 5) - 2;
  return mix(hex, wobble * 4);
}

function mix(color, amount) {
  const [r, g, b] = parseColor(color).map((channel) => Math.max(0, Math.min(255, channel + amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

function parseColor(color) {
  if (color.startsWith('#')) {
    const value = parseInt(color.slice(1), 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  }
  return color.match(/\d+/g).slice(0, 3).map(Number);
}

export function drawMinimap(ctx, canvas, state, cam, view) {
  const { width, height } = state.map;
  const human = humanPlayer(state);
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const sx = w / width;
  const sy = h / height;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const known = human.explored[idx(x, y, width)] === '1';
      if (!known) {
        ctx.fillStyle = '#122433';
        ctx.fillRect(x * sx, y * sy, Math.ceil(sx), Math.ceil(sy));
        continue;
      }
      const tile = state.map.tiles[idx(x, y, width)];
      ctx.fillStyle = TERRAIN[tile.terrain].color;
      ctx.fillRect(x * sx, y * sy, Math.ceil(sx), Math.ceil(sy));
    }
  }
  for (const unit of state.units) {
    if (unit.aboard || unit.owner !== human.id) continue;
    ctx.fillStyle = unit.kind === 'ship' ? '#f2c95c' : '#f4efe2';
    ctx.fillRect(unit.x * sx - 1, unit.y * sy - 1, Math.max(3, sx + 1), Math.max(3, sy + 1));
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.strokeRect(1, 1, w - 2, h - 2);
  void cam;
  void view;
}
