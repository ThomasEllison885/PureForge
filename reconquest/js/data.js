// Historical names from the working design doc (Nov 18, 2026).
// Reign years are approximate and still need a fact-check. Do not invent
// extra nations here; add names to these lists.

export const NATIONS = [
  {
    id: 'spain',
    name: 'Spain',
    color: '#c4a35a',
    leaders: ['Columbus', 'Cortés', 'Pizarro', 'de Soto', 'Coronado', 'Ponce de León', 'Balboa', 'Menéndez de Avilés'],
    colonies: ['Santo Domingo', 'San Juan', 'Havana', 'Veracruz', 'San Agustín', 'Santa Fe', 'Panamá'],
    monarchs: [
      { name: 'Ferdinand and Isabella', from: 1479 },
      { name: 'Charles V', from: 1516 },
      { name: 'Philip II', from: 1556 },
    ],
  },
  {
    id: 'portugal',
    name: 'Portugal',
    color: '#3d6b4f',
    leaders: ['Cabral', 'Corte-Real', 'Martim Afonso de Sousa', 'Tomé de Sousa', 'Pedro Teixeira'],
    colonies: ['São Vicente', 'Salvador', 'Olinda', 'Rio de Janeiro', 'São Paulo'],
    monarchs: [
      { name: 'Manuel I', from: 1495 },
      { name: 'John III', from: 1521 },
      { name: 'Sebastian', from: 1557 },
    ],
  },
  {
    id: 'england',
    name: 'England',
    color: '#8c2f39',
    leaders: ['John Cabot', 'Frobisher', 'Gilbert', 'Drake', 'Raleigh', 'John Smith'],
    colonies: ['Roanoke', 'Jamestown', 'Plymouth', 'Boston', 'Providence', 'Charles Town'],
    monarchs: [
      { name: 'Henry VII', from: 1485 },
      { name: 'Henry VIII', from: 1509 },
      { name: 'Elizabeth I', from: 1558 },
      { name: 'James I', from: 1603 },
    ],
  },
  {
    id: 'france',
    name: 'France',
    color: '#2c4c7c',
    leaders: ['Verrazzano', 'Cartier', 'Ribault', 'Champlain', 'La Salle', 'Jolliet'],
    colonies: ['Fort Caroline', 'Port-Royal', 'Quebec', 'Trois-Rivières', 'Montreal', 'New Orleans'],
    monarchs: [
      { name: 'Francis I', from: 1515 },
      { name: 'Henry IV', from: 1589 },
      { name: 'Louis XIII', from: 1610 },
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    color: '#c46b2c',
    leaders: ['Hudson', 'Adriaen Block', 'Cornelis May', 'Peter Minuit', 'Peter Stuyvesant'],
    colonies: ['Fort Orange', 'New Amsterdam', 'Breuckelen', 'Swaanendael', 'Wiltwyck'],
    monarchs: [
      { name: 'William of Orange', from: 1544 },
      { name: 'Maurice of Nassau', from: 1585 },
    ],
  },
];

export const NATION_BY_ID = Object.fromEntries(NATIONS.map((n) => [n.id, n]));

// stage: when the effect starts to matter. Stage 1 applies cartographer and navigator only.
export const SKILLS = [
  { id: 'pacifist', name: 'Pacifist', cost: 2, stage: 3, effect: 'Cheaper defense research' },
  { id: 'craftsman', name: 'Craftsman', cost: 2, stage: 5, effect: 'Better selling prices for goods' },
  { id: 'cartographer', name: 'Cartographer', cost: 2, stage: 1, effect: 'Land units move farther' },
  { id: 'navigator', name: 'Navigator', cost: 2, stage: 1, effect: 'Ships move farther' },
  { id: 'admiral', name: 'Admiral', cost: 2, stage: 3, effect: 'Stronger naval combat' },
  { id: 'conqueror', name: 'Conqueror', cost: 2, stage: 3, effect: 'Leaders can command more units' },
  { id: 'missionary', name: 'Missionary', cost: 2, stage: 6, effect: 'Churches slowly calm nearby natives' },
  { id: 'merchant', name: 'Merchant', cost: 2, stage: 5, effect: 'Better prices at every market, not just Europe' },
  { id: 'smuggler', name: 'Smuggler', cost: 2, stage: 5, effect: 'Lower chance of being caught trading with rival Europeans' },
  { id: 'diplomat', name: 'Diplomat', cost: 2, stage: 5, effect: 'Treaties cost less and attitudes recover faster' },
  { id: 'spymaster', name: 'Spymaster', cost: 2, stage: 5, effect: 'Spies succeed more often and learn more' },
];

export const SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s]));

export const TERRAIN = {
  ocean: { id: 'ocean', name: 'Ocean', pass: 'sea', color: '#1a5278', colorDim: '#102f45' },
  coast: { id: 'coast', name: 'Coast', pass: 'sea', color: '#3d8eb5', colorDim: '#24586e' },
  plains: { id: 'plains', name: 'Plains', pass: 'land', color: '#c6b56a', colorDim: '#7d7140' },
  forest: { id: 'forest', name: 'Forest', pass: 'land', color: '#2f6b3a', colorDim: '#1c4023' },
  hills: { id: 'hills', name: 'Hills', pass: 'land', color: '#8d7344', colorDim: '#56462a' },
  mountains: { id: 'mountains', name: 'Mountains', pass: 'land', color: '#8e99a4', colorDim: '#555e66' },
};

// Placed on the map around the colony center. The center itself is one square
// and is not in this list. squares 4 means a 2 by 2 block: farm, fort, and
// war college, as in the original. Costs stay null until the goods pipeline runs.
export const BUILDINGS = [
  { id: 'farm', name: 'Farm', short: 'Farm', squares: 4, color: '#9aaa4a', produces: 'Food', bonusTerrain: ['plains'] },
  { id: 'mill', name: 'Mill', short: 'Mill', squares: 1, color: '#6a3418', produces: 'Wood', bonusTerrain: ['forest'] },
  { id: 'mine', name: 'Metal Mine', short: 'Metal', squares: 1, color: '#5c636b', produces: 'Metal', bonusTerrain: ['hills', 'mountains'] },
  { id: 'gold_mine', name: 'Gold Mine', short: 'Gold', squares: 1, color: '#e6c75a', produces: 'Gold', bonusTerrain: ['hills', 'mountains'] },
  { id: 'house', name: 'Housing', short: 'House', squares: 1, color: '#f3e6cf', produces: 'Room for people, and settlers', bonusTerrain: [] },
  { id: 'church', name: 'Church', short: 'Church', squares: 1, color: '#f7f4ee', produces: 'Faster population growth', bonusTerrain: [] },
  { id: 'commerce', name: 'Commerce', short: 'Goods', squares: 1, color: '#a15d45', produces: 'Goods from wood, metal, and food', bonusTerrain: [] },
  { id: 'fort', name: 'Fort', short: 'Fort', squares: 4, color: '#3e4650', produces: 'Soldiers, and defends the colony', bonusTerrain: [] },
  { id: 'dock', name: 'Dock', short: 'Dock', squares: 1, color: '#c4a882', produces: 'Ships. Sits on the coast.', bonusTerrain: ['coast'] },
  { id: 'tavern', name: 'Tavern', short: 'Tavern', squares: 1, color: '#8d5a3c', produces: 'Explorers', bonusTerrain: [] },
  { id: 'war_college', name: 'War College', short: 'College', squares: 4, color: '#5c3d6e', produces: 'Military research. Only one needed.', bonusTerrain: [] },
];

export const BUILDING_BY_ID = Object.fromEntries(BUILDINGS.map((building) => [building.id, building]));

export const UNIT_KINDS = {
  ship: { name: 'Ship', domain: 'sea' },
  leader: { name: 'Leader', domain: 'land' },
  explorer: { name: 'Explorer', domain: 'land' },
  settler: { name: 'Settler', domain: 'land' },
  infantry: { name: 'Infantry', domain: 'land', combat: true },
  cavalry: { name: 'Cavalry', domain: 'land', combat: true },
  artillery: { name: 'Artillery', domain: 'land', combat: true },
};

export const COMBAT = {
  dieSides: 40,
  baseThreshold: 6,
  attackResearchStep: 2,
  defenseResearchStep: 1,
  thresholdMin: 2,
  thresholdMax: 38,
  grid: { cols: 3, rows: 4 },
  bonuses: [
    { id: 'two-types', label: 'Two unit types attacking the same square', amount: 4 },
    { id: 'three-types', label: 'Three unit types attacking the same square', amount: 6 },
    { id: 'flank-1', label: 'Attacking from 1 extra side', amount: 4 },
    { id: 'flank-2', label: 'Attacking from 2 extra sides', amount: 6 },
    { id: 'flank-3', label: 'Attacking from 3 sides', amount: 8 },
    { id: 'charge', label: 'Cavalry charge', amount: 6 },
  ],
};

export function rulerName(nation, year) {
  let name = nation.monarchs[0].name;
  for (const monarch of nation.monarchs) {
    if (year >= monarch.from) name = monarch.name;
  }
  return name;
}

export function hitThreshold({ attackResearch = 0, defenseResearch = 0, bonus = 0 } = {}) {
  const raw = COMBAT.baseThreshold
    + attackResearch * COMBAT.attackResearchStep
    - defenseResearch * COMBAT.defenseResearchStep
    + bonus;
  return Math.max(COMBAT.thresholdMin, Math.min(COMBAT.thresholdMax, raw));
}

// One strength point is one die. Hits are rolls at or under the threshold.
export function rollHits(strength, threshold, rng) {
  const rolls = [];
  let hits = 0;
  for (let i = 0; i < strength; i++) {
    const roll = 1 + Math.floor(rng() * COMBAT.dieSides);
    const hit = roll <= threshold;
    if (hit) hits += 1;
    rolls.push({ roll, hit });
  }
  return { hits, rolls, threshold };
}

// Lost strength raises the chance a unit runs. Identity curve until playtesting.
export function retreatChance(current, original) {
  if (!original || original <= 0) return 0;
  const lost = Math.max(0, original - current) / original;
  return Math.max(0, Math.min(1, lost));
}
