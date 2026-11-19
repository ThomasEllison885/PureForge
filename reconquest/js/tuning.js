// Every number another builder is expected to retune lives here.
// The design doc leaves costs, map size, and time-per-turn open on purpose.

export const SAVE_VERSION = 1;

export const TUNING = {
  // Doubled so a 4-square city, and 4-square farms and barracks, can sprawl
  // without covering the continent. Move and vision are doubled with it.
  mapWidth: 96,
  mapHeight: 72,
  startYear: 1500,
  // Open question in the design doc. A season keeps early exploration short.
  seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
  skillPoints: 6,
  // Mother-country invasion size. The original cut 20% per step below hardest.
  invasionScale: { easy: 0.4, normal: 0.6, hard: 0.8, ruthless: 1 },
  move: {
    explorer: 8,
    leader: 4,
    settler: 4,
    infantry: 4,
    cavalry: 6,
    artillery: 2,
    ship: 12,
  },
  // Added on top of move, not instead of it.
  cartographerBonus: 2,
  navigatorBonus: 2,
  vision: {
    explorer: 6,
    ship: 6,
    leader: 4,
    settler: 2,
    infantry: 2,
    cavalry: 2,
    artillery: 2,
  },
  terrainCost: {
    ocean: 1,
    coast: 1,
    plains: 1,
    forest: 1,
    hills: 1,
    mountains: 2,
  },
  shipCapacity: 8,
  // Chebyshev gap between colony centers. A level-4 zone has radius 6,
  // so 16 leaves a gap between two fully grown colonies.
  colonySpacing: 16,
  // Squares from the center, Chebyshev. Level 1 is a 7 by 7 patch.
  // Each upgrade adds one square around the perimeter, as in the original.
  // Level 4 is 13 by 13, about 169 squares. The original level-4 count is 164.
  buildReach: { 1: 3, 2: 4, 3: 5, 4: 6 },
  // Terrain preview while placing. pad is how many squares past the footprint
  // are counted. Farm looks at a 4 by 4, a mill at 5 by 5, a mine at 7 by 7.
  // Gold starts behind, the way a gold mine did. TUNABLE.
  yield: {
    farm: { pad: 1, base: 0, tile: { plains: 4, forest: -1, hills: -2, river: 8 } },
    mill: { pad: 2, base: 0, tile: { forest: 4, plains: 1, river: 8 } },
    mine: { pad: 3, base: 0, tile: { hills: 3, mountains: 4, river: 6 } },
    gold_mine: { pad: 3, base: -100, tile: { hills: 2, mountains: 4, river: 8, gold: 60 } },
  },
  // Landing spends this much of the unit's movement, then it may walk.
  landCost: 2,
  foundCost: 4,
  riverTarget: 6,
  riverMinLength: 8,
  regionGap: 12,
  peakCap: 8,
  regionCount: 5,
  seaLevel: 0.5,
  hillLevel: 0.66,
  mountainLevel: 0.76,
};

export const DIFFICULTIES = [
  { id: 'easy', label: 'Easy' },
  { id: 'normal', label: 'Normal' },
  { id: 'hard', label: 'Hard' },
  { id: 'ruthless', label: 'Ruthless' },
];
