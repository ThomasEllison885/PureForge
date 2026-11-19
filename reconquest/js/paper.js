// The Western Dispatch. Printed when a turn ends.
// Four columns, and each one may only say what the player can know.
// Stage 4 fills rival movement. Stage 6 fills taxes and demands. Stage 7
// adds native players (`player.native` and `player.peopleName`). Do not
// invent raids, wars, or court orders in this file.

import { TUNING } from './tuning.js';
import { NATION_BY_ID, rulerName } from './data.js';
import { idx } from './mapgen.js';
import { humanPlayer, tileAt, visibleKeys } from './rules.js';

const QUIET = { favor: 0, resentment: 0, taxUnpaid: 0, independent: false };

export function noteGlimpse(state) {
  const human = humanPlayer(state);
  if (!human) return;
  if (!Array.isArray(state.glimpsed)) state.glimpsed = [];
  const visible = visibleKeys(state, human.id);
  const have = new Set(state.glimpsed);
  for (const unit of state.units) {
    if (unit.owner === human.id || unit.aboard) continue;
    if (!visible.has(`${unit.x},${unit.y}`)) continue;
    const token = `${unit.kind === 'ship' ? 'ship' : 'people'}:${unit.id}`;
    if (have.has(token)) continue;
    have.add(token);
    state.glimpsed.push(token);
  }
}

export function publishDispatch(state) {
  noteGlimpse(state);
  const previous = state.dispatch || null;
  const current = survey(state);
  state.paper = writePaper(state, previous, current);
  state.dispatch = current;
  state.glimpsed = [];
  const paper = state.paper;
  state.log.push(`The Western Dispatch arrives for ${paper.season} ${paper.year}.`);
  return paper;
}

function survey(state) {
  const human = humanPlayer(state);
  const nation = NATION_BY_ID[human.nationId];
  const mother = human.mother || QUIET;
  const sight = {};
  const towns = {};
  for (const player of others(state, human)) {
    const look = unitSight(state, human, player.id);
    const saw = sawKinds(state, player.id);
    const prev = previousSight(state, player.id);
    sight[player.id] = {
      ship: nextStatus(look.ships > 0, saw.ship, prev.ship),
      people: nextStatus(look.people > 0, saw.people, prev.people),
    };
    towns[player.id] = knownTowns(state, human, player.id).map((colony) => colony.name);
  }
  return {
    explored: exploredCount(human),
    colonyIds: ownedColonies(state, human.id).map((colony) => colony.id),
    named: namedCharts(state, human.id),
    ashore: ashoreIds(state, human.id),
    ruler: rulerName(nation, state.year),
    taxUnpaid: mother.taxUnpaid || 0,
    favor: mother.favor || 0,
    resentment: mother.resentment || 0,
    independent: Boolean(mother.independent),
    sight,
    towns,
  };
}

function previousSight(state, playerId) {
  return sightOf(state.dispatch, playerId);
}

function sightOf(previous, playerId) {
  const prior = previous && previous.sight && previous.sight[playerId];
  return prior || { ship: 'unseen', people: 'unseen' };
}

function nextStatus(visible, saw, previous) {
  if (visible) return 'visible';
  if (saw || previous === 'visible' || previous === 'gone') return 'gone';
  return 'unseen';
}

function writePaper(state, previous, current) {
  const human = humanPlayer(state);
  const nation = NATION_BY_ID[human.nationId];
  const season = TUNING.seasons[state.season];
  const colony = ownedColonies(state, human.id)[0];
  return {
    title: 'The Western Dispatch',
    season,
    year: state.year,
    nation: nation.name,
    ruler: current.ruler,
    place: colony ? `Printed at ${colony.name}` : 'Printed for the expedition',
    sections: [
      { id: 'land', title: 'The land', lines: landLines(state, human, previous, current) },
      { id: 'home', title: 'The old country', lines: homeLines(human, nation, previous, current, season) },
      { id: 'rivals', title: 'Rivals', lines: peopleLines(state, human, previous, false) },
      { id: 'natives', title: 'Native nations', lines: peopleLines(state, human, previous, true) },
    ],
  };
}

function landLines(state, human, previous, current) {
  const lines = [];
  if (!previous) {
    lines.push('The charts show the water and land around the ships.');
  } else if (current.explored > previous.explored) {
    const gained = current.explored - previous.explored;
    lines.push(gained === 1 ? 'The charts grew by 1 square.' : `The charts grew by ${gained} squares.`);
  } else {
    lines.push('No new land or sea was charted.');
  }

  const colonies = ownedColonies(state, human.id);
  const previousIds = new Set(previous ? previous.colonyIds : []);
  const founded = colonies.filter((colony) => !previousIds.has(colony.id));
  for (const colony of founded) lines.push(`${colony.name} is founded.`);
  if (!colonies.length) lines.push(previous ? 'You hold no colony.' : 'You hold no colony yet.');
  else if (!founded.length) {
    const names = colonies.map((colony) => colony.name);
    lines.push(names.length === 1 ? `${names[0]} remains your colony.` : `Your colonies remain: ${names.join(', ')}.`);
  }

  const namedNow = current.named.map(parseNamed);
  const namedBefore = new Set(previous ? previous.named : []);
  for (const entry of namedNow) {
    if (namedBefore.has(entry.token)) continue;
    lines.push(`${entry.name} is entered on the charts.`);
  }

  const waiting = waitingLine(state, human.id);
  if (waiting) lines.push(waiting);

  const ashoreNow = new Set(current.ashore);
  const ashoreBefore = new Set(previous ? previous.ashore : []);
  if (previous) {
    lines.push(...ashoreChange(state, [...ashoreNow].filter((id) => !ashoreBefore.has(id)), 'has gone ashore', 'have gone ashore'));
    lines.push(...ashoreChange(state, [...ashoreBefore].filter((id) => !ashoreNow.has(id)), 'has returned to a ship', 'have returned to a ship'));
  } else if (!current.ashore.length) {
    lines.push('The company is still aboard the ships.');
  }

  lines.push(companyLine(state, human));
  return lines;
}

function homeLines(human, nation, previous, current, season) {
  const lines = [];
  const ruler = current.ruler;
  if (previous && previous.ruler !== ruler) lines.push(`${ruler} now reigns in ${nation.name}.`);
  else lines.push(`${ruler} reigns in ${nation.name}.`);

  const mother = human.mother || QUIET;
  if (mother.independent && !(previous && previous.independent)) {
    lines.push(`The colony has broken with ${nation.name}. The court is now an enemy.`);
  } else if (mother.independent) {
    lines.push(`The break with ${nation.name} stands.`);
  }

  if (!mother.independent) {
    const seasonWord = season.toLowerCase();
    if ((mother.taxUnpaid || 0) > 0 && !(previous && previous.taxUnpaid > 0)) {
      lines.push(`Unpaid tax stands at ${mother.taxUnpaid}.`);
    } else if ((mother.taxUnpaid || 0) > 0) {
      lines.push(`Unpaid tax still stands at ${mother.taxUnpaid}.`);
    } else if (previous && previous.taxUnpaid > 0) {
      lines.push('The tax has been cleared.');
    } else {
      lines.push(`${ruler} has sent no tax and no demand this ${seasonWord}.`);
    }
  }

  if ((mother.favor || 0) > 0) lines.push(`Favor at court stands at ${mother.favor}.`);
  else if (previous && previous.favor > 0) lines.push('Favor at court has fallen away.');
  if ((mother.resentment || 0) > 0) lines.push(`Resentment at court stands at ${mother.resentment}.`);
  else if (previous && previous.resentment > 0) lines.push('Resentment at court has cooled.');
  return lines;
}

function peopleLines(state, human, previous, native) {
  const players = others(state, human).filter((player) => Boolean(player.native) === native);
  if (native && !players.length) {
    return ['No native nation has been met. None are on the charts.'];
  }
  const lines = [];
  for (const player of players) {
    lines.push(...reportPlayer(state, human, player, previous, native));
  }
  return lines;
}

function reportPlayer(state, human, player, previous, native) {
  const name = peopleLabel(player);
  const look = unitSight(state, human, player.id);
  const saw = sawKinds(state, player.id);
  const prev = sightOf(previous, player.id);
  const shipStatus = nextStatus(look.ships > 0, saw.ship, prev.ship);
  const peopleStatus = nextStatus(look.people > 0, saw.people, prev.people);
  const towns = knownTowns(state, human, player.id);
  const prevTowns = (previous && previous.towns && previous.towns[player.id]) || [];
  const lines = [];
  const shipLine = shipSentence(name, shipStatus, prev.ship, look.ships);
  if (shipLine) lines.push(shipLine);
  const peopleLine = native
    ? nativePeopleLine(name, peopleStatus, prev.people)
    : companySentence(name, peopleStatus, prev.people);
  if (peopleLine) lines.push(peopleLine);
  for (const colony of towns) {
    if (prevTowns.includes(colony.name)) lines.push(`${colony.name}, a town of ${name}, remains on your charts.`);
    else lines.push(`${colony.name}, a town of ${name}, is on your charts.`);
  }
  for (const old of prevTowns) {
    if (!towns.some((colony) => colony.name === old)) lines.push(`${old} is no longer on your charts.`);
  }
  if (lines.length) return lines;
  if (shipStatus === 'unseen' && peopleStatus === 'unseen') {
    return [native ? `The ${name} have not been met.` : `No ship, company, or town of ${name} has been seen.`];
  }
  return [native ? `The ${name} are not in sight.` : `Nothing of ${name} is in sight.`];
}

function shipSentence(name, status, previous, count) {
  if (status === 'unseen') return '';
  if (status === 'gone') {
    if (previous === 'gone') return '';
    return count > 1 ? `The ships of ${name} have passed out of sight.` : `The ship of ${name} has passed out of sight.`;
  }
  if (count > 1) return previous === 'visible' ? `Ships of ${name} remain in sight.` : `Ships of ${name} are in sight.`;
  return previous === 'visible' ? `A ship of ${name} remains in sight.` : `A ship of ${name} is in sight.`;
}

function companySentence(name, status, previous) {
  if (status === 'unseen') return '';
  if (status === 'gone') return previous === 'gone' ? '' : `The company of ${name} has passed out of sight.`;
  return previous === 'visible'
    ? `A company of ${name} remains in sight on land.`
    : `A company of ${name} is in sight on land.`;
}

function nativePeopleLine(name, status, previous) {
  if (status === 'unseen') return '';
  if (status === 'gone') return previous === 'gone' ? '' : `The ${name} have passed out of sight.`;
  return previous === 'visible' ? `The ${name} remain in sight.` : `The ${name} are in sight.`;
}

function companyLine(state, human) {
  const leader = state.units.find((unit) => unit.owner === human.id && unit.kind === 'leader');
  if (!leader) return 'No leader is with the expedition.';
  if (leader.aboard) {
    const ship = state.units.find((unit) => unit.id === leader.aboard);
    const tile = ship ? tileAt(state, ship.x, ship.y) : null;
    const where = tile ? waterPhrase(tile.terrain) : 'at sea';
    return `${leader.name} is aboard the ${ship ? ship.name : 'ship'}, ${where}.`;
  }
  const tile = tileAt(state, leader.x, leader.y);
  return `${leader.name} is ashore ${ashorePhrase(tile && tile.terrain)}.`;
}

function ashoreChange(state, ids, one, many) {
  const units = ids.map((id) => state.units.find((unit) => unit.id === id)).filter(Boolean);
  const explorers = units.filter((unit) => unit.kind === 'explorer');
  const settlers = units.filter((unit) => unit.kind === 'settler');
  const rest = units.filter((unit) => unit.kind !== 'explorer' && unit.kind !== 'settler');
  const lines = [];
  if (explorers.length === 1) lines.push(`An explorer ${one}.`);
  if (explorers.length > 1) lines.push(`Explorers ${many}.`);
  if (settlers.length) lines.push(`Settlers ${many}.`);
  for (const unit of rest) lines.push(`${unitLabel(unit)} ${one}.`);
  return lines;
}

function unitLabel(unit) {
  if (unit.kind === 'leader' || unit.kind === 'infantry') return unit.name;
  if (unit.kind === 'settler') return 'Settlers';
  return unit.name;
}

function waitingLine(state, playerId) {
  const kinds = [];
  for (const pending of state.pendingNames) {
    if (pending.ownerId !== playerId) continue;
    const word = pending.kind === 'river' ? 'a river' : pending.kind === 'peak' ? 'a peak' : 'a region';
    if (!kinds.includes(word)) kinds.push(word);
  }
  if (!kinds.length) return '';
  if (kinds.length === 1) return `${capitalize(kinds[0])} is still waiting for a name.`;
  return `${capitalize(joinAnd(kinds))} are still waiting for names.`;
}

function waterPhrase(terrain) {
  if (terrain === 'coast') return 'off the coast';
  if (terrain === 'ocean') return 'at sea';
  return 'offshore';
}

function ashorePhrase(terrain) {
  if (terrain === 'forest') return 'in the forest';
  if (terrain === 'plains') return 'on the plains';
  if (terrain === 'hills') return 'in the hills';
  if (terrain === 'mountains') return 'in the mountains';
  if (terrain === 'coast') return 'on the coast';
  return 'on land';
}

function others(state, human) {
  return state.players.filter((player) => player.id !== human.id);
}

function peopleLabel(player) {
  if (player.peopleName) return player.peopleName;
  const nation = NATION_BY_ID[player.nationId];
  return nation ? nation.name : 'A native nation';
}

function ownedColonies(state, playerId) {
  return state.colonies.filter((colony) => colony.owner === playerId);
}

function knownTowns(state, human, ownerId) {
  const width = state.map.width;
  return state.colonies.filter((colony) => {
    return colony.owner === ownerId && human.explored[idx(colony.x, colony.y, width)] === '1';
  });
}

function unitSight(state, human, ownerId) {
  const visible = visibleKeys(state, human.id);
  let ships = 0;
  let people = 0;
  for (const unit of state.units) {
    if (unit.owner !== ownerId || unit.aboard) continue;
    if (!visible.has(`${unit.x},${unit.y}`)) continue;
    if (unit.kind === 'ship') ships += 1;
    else people += 1;
  }
  return { ships, people };
}

function sawKinds(state, ownerId) {
  let ship = false;
  let people = false;
  for (const token of state.glimpsed || []) {
    const [kind, idText] = String(token).split(':');
    const unit = state.units.find((entry) => entry.id === Number(idText));
    if (!unit || unit.owner !== ownerId) continue;
    if (kind === 'ship') ship = true;
    if (kind === 'people') people = true;
  }
  return { ship, people };
}

function namedCharts(state, playerId) {
  const out = [];
  const lists = [['river', state.map.rivers], ['peak', state.map.peaks], ['region', state.map.regions]];
  for (const [kind, list] of lists) {
    for (const entry of list) {
      if (entry.namedBy === playerId && entry.name) out.push(`${kind}:${entry.id}:${entry.name}`);
    }
  }
  return out;
}

function parseNamed(token) {
  const parts = token.split(':');
  return { token, name: parts.slice(2).join(':') };
}

function ashoreIds(state, playerId) {
  return state.units
    .filter((unit) => unit.owner === playerId && !unit.aboard && unit.kind !== 'ship')
    .map((unit) => unit.id);
}

function exploredCount(human) {
  return (human.explored.match(/1/g) || []).length;
}

function joinAnd(words) {
  if (words.length === 2) return `${words[0]} and ${words[1]}`;
  return `${words.slice(0, -1).join(', ')}, and ${words[words.length - 1]}`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
