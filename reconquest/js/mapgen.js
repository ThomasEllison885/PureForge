// Random continent. Rivers walk downhill to the sea, so following one uphill
// is a real way to explore. Edges stay ocean so a ship can sail around.

import { TUNING } from './tuning.js';
import { fbm, mulberry32 } from './rng.js';

export function idx(x, y, width) {
  return y * width + x;
}

export function inBounds(x, y, width, height) {
  return x >= 0 && y >= 0 && x < width && y < height;
}

export function neighbors4(x, y, width, height) {
  const out = [];
  if (x > 0) out.push([x - 1, y]);
  if (x + 1 < width) out.push([x + 1, y]);
  if (y > 0) out.push([x, y - 1]);
  if (y + 1 < height) out.push([x, y + 1]);
  return out;
}

function smoothstep(edge0, edge1, value) {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function isWater(terrain) {
  return terrain === 'ocean' || terrain === 'coast';
}

export function generateMap(seed, width = TUNING.mapWidth, height = TUNING.mapHeight) {
  const rng = mulberry32(seed);
  const tiles = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const nx = ((x + 0.5) / width) * 2 - 1;
      const ny = ((y + 0.5) / height) * 2 - 1;
      const dist = Math.hypot(nx * 1.08, ny * 0.9);
      // Noise stays the same size on the continent when the grid gets finer.
      const sx = 48 / width;
      const sy = 36 / height;
      const island = 1 - smoothstep(0.2, 1.02, dist - (fbm(x * 0.07 * sx, y * 0.07 * sy, seed + 17) - 0.5) * 0.35);
      let elev = fbm(x * 0.11 * sx, y * 0.11 * sy, seed) * 0.55 + island * 0.62;
      if (x < 1 || y < 1 || x >= width - 1 || y >= height - 1) elev = 0;
      const moisture = fbm(x * 0.13 * sx, y * 0.13 * sy, seed + 50);
      let terrain = 'ocean';
      if (elev >= TUNING.seaLevel) {
        if (elev >= TUNING.mountainLevel) terrain = 'mountains';
        else if (elev >= TUNING.hillLevel) terrain = 'hills';
        else if (moisture > 0.52) terrain = 'forest';
        else terrain = 'plains';
      }
      tiles.push({
        terrain,
        elev,
        riverId: 0,
        regionId: 0,
        peakId: 0,
        gold: terrain === 'hills' && hashish(x, y, seed) < 0.05,
      });
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tile = tiles[idx(x, y, width)];
      if (tile.terrain !== 'ocean') continue;
      const touchesLand = neighbors4(x, y, width, height).some(([nx, ny]) => {
        return !isWater(tiles[idx(nx, ny, width)].terrain);
      });
      if (touchesLand) tile.terrain = 'coast';
    }
  }

  const rivers = carveRivers(tiles, width, height, rng);
  const peaks = markPeaks(tiles, width, height);
  const regions = markRegions(tiles, width, height, rng);

  return { width, height, seed, tiles, rivers, peaks, regions };
}

function hashish(x, y, seed) {
  const n = Math.imul(x + seed, 374761393) ^ Math.imul(y, 668265263);
  return ((n ^ (n >>> 13)) >>> 0) / 4294967296;
}

function carveRivers(tiles, width, height, rng) {
  const mountains = [];
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].terrain === 'mountains') mountains.push(i);
  }
  mountains.sort((a, b) => tiles[b].elev - tiles[a].elev);
  const pool = mountains.slice(0, Math.max(TUNING.riverTarget * 4, 8));
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const rivers = [];
  const used = new Set();
  for (const start of pool) {
    if (rivers.length >= TUNING.riverTarget) break;
    if (used.has(start)) continue;
    const path = walkDownhill(tiles, width, height, start);
    if (path.length < TUNING.riverMinLength) continue;
    const end = path[path.length - 1];
    const [ex, ey] = indexToXY(end, width);
    const reachesSea = neighbors4(ex, ey, width, height).some(([nx, ny]) => {
      return isWater(tiles[idx(nx, ny, width)].terrain);
    });
    if (!reachesSea) continue;
    if (path.some((cell) => used.has(cell))) continue;
    const id = rivers.length + 1;
    for (const cell of path) {
      tiles[cell].riverId = id;
      used.add(cell);
    }
    rivers.push({ id, name: null, namedBy: null, length: path.length });
  }
  return rivers;
}

function walkDownhill(tiles, width, height, start) {
  const path = [];
  const seen = new Set();
  let current = start;
  for (let guard = 0; guard < width * height; guard++) {
    if (seen.has(current)) break;
    seen.add(current);
    const tile = tiles[current];
    if (isWater(tile.terrain)) break;
    path.push(current);
    const [x, y] = indexToXY(current, width);
    let next = null;
    let nextElev = tile.elev;
    for (const [nx, ny] of neighbors4(x, y, width, height)) {
      const nTile = tiles[idx(nx, ny, width)];
      if (isWater(nTile.terrain)) return path;
      if (nTile.elev < nextElev - 0.0001) {
        nextElev = nTile.elev;
        next = idx(nx, ny, width);
      }
    }
    if (next == null) break;
    current = next;
  }
  return path;
}

function markPeaks(tiles, width, height) {
  const candidates = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tile = tiles[idx(x, y, width)];
      if (tile.terrain !== 'mountains') continue;
      const dominated = neighbors4(x, y, width, height).some(([nx, ny]) => {
        return tiles[idx(nx, ny, width)].elev > tile.elev + 0.0001;
      });
      if (!dominated) candidates.push({ x, y, elev: tile.elev });
    }
  }
  candidates.sort((a, b) => b.elev - a.elev);
  const peaks = [];
  for (const peak of candidates.slice(0, TUNING.peakCap)) {
    const id = peaks.length + 1;
    tiles[idx(peak.x, peak.y, width)].peakId = id;
    peaks.push({ id, x: peak.x, y: peak.y, name: null, namedBy: null });
  }
  return peaks;
}

function markRegions(tiles, width, height, rng) {
  const land = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!isWater(tiles[idx(x, y, width)].terrain)) land.push([x, y]);
    }
  }
  const seeds = [];
  while (seeds.length < TUNING.regionCount && land.length) {
    const pick = land[Math.floor(rng() * land.length)];
    const far = seeds.every(([sx, sy]) => Math.abs(sx - pick[0]) + Math.abs(sy - pick[1]) > TUNING.regionGap);
    if (far || seeds.length === 0) seeds.push(pick);
    else land.splice(land.indexOf(pick), 1);
    if (land.length < 20 && seeds.length < TUNING.regionCount) {
      seeds.push(pick);
    }
    if (seeds.length >= land.length) break;
  }
  if (!seeds.length) return [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tile = tiles[idx(x, y, width)];
      if (isWater(tile.terrain)) continue;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < seeds.length; i++) {
        const dist = Math.abs(seeds[i][0] - x) + Math.abs(seeds[i][1] - y);
        if (dist < bestDist) {
          bestDist = dist;
          best = i + 1;
        }
      }
      tile.regionId = best;
    }
  }
  return seeds.map((_, i) => ({ id: i + 1, name: null, namedBy: null }));
}

function indexToXY(index, width) {
  return [index % width, Math.floor(index / width)];
}

export function landRatio(map) {
  let land = 0;
  for (const tile of map.tiles) {
    if (tile.terrain !== 'ocean' && tile.terrain !== 'coast') land += 1;
  }
  return land / map.tiles.length;
}

export function riverReachesSea(map, riverId) {
  const { tiles, width, height } = map;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (tiles[idx(x, y, width)].riverId !== riverId) continue;
      const mouth = neighbors4(x, y, width, height).some(([nx, ny]) => {
        const terrain = tiles[idx(nx, ny, width)].terrain;
        return terrain === 'ocean' || terrain === 'coast';
      });
      if (mouth) return true;
    }
  }
  return false;
}

export function riverIsDownhill(map, riverId) {
  const { tiles, width, height } = map;
  const cells = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (tiles[idx(x, y, width)].riverId === riverId) cells.push([x, y]);
    }
  }
  if (cells.length < 2) return false;
  const byElev = [...cells].sort((a, b) => {
    return tiles[idx(b[0], b[1], width)].elev - tiles[idx(a[0], a[1], width)].elev;
  });
  // Each step after the source should have a river neighbor that is not higher.
  for (let i = 1; i < byElev.length; i++) {
    const [x, y] = byElev[i];
    const elev = tiles[idx(x, y, width)].elev;
    const linked = neighbors4(x, y, width, height).some(([nx, ny]) => {
      const other = tiles[idx(nx, ny, width)];
      return other.riverId === riverId && other.elev + 0.0001 >= elev;
    });
    if (!linked) return false;
  }
  return true;
}
