// Isometric projection for a square grid.
// Tile (x, y) is drawn as a diamond. The stored point is the diamond's center,
// so screenToTile can round back to the same square.

export const TILE_W = 64;
export const TILE_H = 32;

export function tileCenter(x, y, cam) {
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  return {
    x: (x - y) * hw + cam.ox,
    y: (x + y) * hh + cam.oy,
  };
}

export function screenToTile(sx, sy, cam) {
  const hw = (TILE_W * cam.zoom) / 2;
  const hh = (TILE_H * cam.zoom) / 2;
  const a = (sx - cam.ox) / hw;
  const b = (sy - cam.oy) / hh;
  return {
    x: Math.round((a + b) / 2),
    y: Math.round((b - a) / 2),
  };
}
