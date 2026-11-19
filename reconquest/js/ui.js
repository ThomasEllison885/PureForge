import { BUILDINGS, COMBAT, NATIONS, SKILLS, SKILL_BY_ID, hitThreshold, rollHits, rulerName } from './data.js';
import { DIFFICULTIES, TUNING } from './tuning.js';
import { screenToTile, tileCenter } from './iso.js';
import { mulberry32 } from './rng.js';
import {
  actBoard, actEndTurn, actFound, actLand, actMove, actName, actPlaceBuilding, exportGame,
  importGame, loadFromMemory, newGame, saveToMemory, undo,
} from './game.js';
import {
  adjacentLandings, canPlace, describeTile, footprintOf, humanPlayer, inColonyZone, reachable, seasonName, siteYield, tileBuilding, unitById,
} from './rules.js';
import { drawMap, drawMinimap } from './render.js';

const KIND_LABEL = {
  ship: 'Ship', leader: 'Leader', explorer: 'Explorer', settler: 'Settlers',
  infantry: 'Infantry', cavalry: 'Cavalry', artillery: 'Artillery',
};

export function mount(root) {
  root.innerHTML = `
    <section id="setup"></section>
    <section id="game" hidden>
      <header class="bar">
        <strong id="when"></strong>
        <span id="ruler"></span>
        <span style="flex:1"></span>
        <button type="button" id="undo" class="ghost">Undo</button>
        <button type="button" id="end" class="primary">End turn</button>
        <button type="button" id="save" class="ghost">Save</button>
        <button type="button" id="help" class="ghost">Keys</button>
      </header>
      <div class="layout">
        <canvas id="map"></canvas>
        <aside id="side"></aside>
      </div>
      <footer class="bar"><pre id="log"></pre></footer>
    </section>
    <section id="battle" hidden></section>
    <div id="modal" hidden></div>`;

  const setup = root.querySelector('#setup');
  const gameEl = root.querySelector('#game');
  const battleEl = root.querySelector('#battle');
  const canvas = root.querySelector('#map');
  const side = root.querySelector('#side');
  const modal = root.querySelector('#modal');
  let state = null;
  let selected = null;
  let cam = { ox: 80, oy: 40, zoom: 1 };
  let hover = null;
  let drag = null;
  let status = '';
  let helpOn = false;
  let paperOn = false;
  let colonyId = null;
  let tool = null;

  function showSetup() {
    const picked = { nationId: 'england', difficulty: 'normal', skills: ['navigator', 'cartographer'], seed: Math.floor(Math.random() * 999983) };
    const draw = () => {
      const spent = picked.skills.reduce((sum, id) => sum + SKILL_BY_ID[id].cost, 0);
      const left = TUNING.skillPoints - spent;
      setup.innerHTML = `
        <h1>ReConquest of the New World</h1>
        <p class="sub">A private campaign of exploration. Spring ${TUNING.startYear}. The mother country is still across the ocean.</p>
        <h2>Nation</h2>
        <div class="row">${NATIONS.map((nation) => `<button type="button" class="choice ${picked.nationId === nation.id ? 'on' : ''}" data-nation="${nation.id}">${nation.name}</button>`).join('')}</div>
        <h2>Difficulty</h2>
        <div class="row">${DIFFICULTIES.map((item) => `<button type="button" class="choice ${picked.difficulty === item.id ? 'on' : ''}" data-diff="${item.id}">${item.label}</button>`).join('')}</div>
        <p class="sub">Harder settings raise the mother country's invasion later. They do nothing in this first stage.</p>
        <h2>Skills <span class="sub">${left} points left</span></h2>
        <div class="skills">${SKILLS.map((skill) => {
          const on = picked.skills.includes(skill.id);
          return `<button type="button" class="skill ${on ? 'on' : ''}" data-skill="${skill.id}"><b>${skill.name}</b> · ${skill.cost}<small>${skill.effect}${skill.stage > 1 ? ` (stage ${skill.stage})` : ''}</small></button>`;
        }).join('')}</div>
        <h2>Map seed</h2>
        <div class="row"><input id="seed" type="number" value="${picked.seed}"><button type="button" id="reseed" class="ghost">Another map</button></div>
        <div class="row">
          <button type="button" id="start" class="primary">Set sail</button>
          <button type="button" id="continue" class="ghost">Continue saved game</button>
          <button type="button" id="practice" class="ghost">Dice preview</button>
          <label class="ghost" style="padding:6px 10px">Load file<input id="file" type="file" accept="application/json" hidden></label>
        </div>`;
      setup.querySelectorAll('[data-nation]').forEach((button) => {
        button.onclick = () => { picked.nationId = button.dataset.nation; draw(); };
      });
      setup.querySelectorAll('[data-diff]').forEach((button) => {
        button.onclick = () => { picked.difficulty = button.dataset.diff; draw(); };
      });
      setup.querySelectorAll('[data-skill]').forEach((button) => {
        button.onclick = () => {
          const id = button.dataset.skill;
          if (picked.skills.includes(id)) picked.skills = picked.skills.filter((skill) => skill !== id);
          else if (left >= SKILL_BY_ID[id].cost) picked.skills = picked.skills.concat(id);
          draw();
        };
      });
      setup.querySelector('#seed').onchange = (event) => { picked.seed = Number(event.target.value) || 1; };
      setup.querySelector('#reseed').onclick = () => { picked.seed = Math.floor(Math.random() * 999983); draw(); };
      setup.querySelector('#start').onclick = () => begin(newGame(picked));
      setup.querySelector('#continue').onclick = () => {
        const saved = loadFromMemory();
        if (!saved) { status = 'No save in this browser.'; draw(); return; }
        begin(saved);
      };
      setup.querySelector('#file').onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        begin(importGame(await file.text()));
      };
      setup.querySelector('#practice').onclick = () => showBattle();
    };
    setup.hidden = false;
    gameEl.hidden = true;
    battleEl.hidden = true;
    draw();
  }

  function begin(next) {
    state = next;
    status = '';
    setup.hidden = true;
    battleEl.hidden = true;
    gameEl.hidden = false;
    const ship = state.units.find((unit) => unit.kind === 'ship' && unit.owner === humanPlayer(state).id);
    selected = ship ? ship.id : null;
    requestAnimationFrame(() => {
      frameCamera(ship);
      paint();
    });
  }

  function frameCamera(unit) {
    const view = resize();
    if (!unit || view.w < 40) return;
    cam.zoom = 2.45;
    const center = tileCenter(unit.x, unit.y, { ox: 0, oy: 0, zoom: cam.zoom });
    cam.ox = view.w / 2 - center.x;
    cam.oy = view.h / 2 - center.y;
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w: rect.width, h: rect.height };
  }

  let modalKey = null;

  function paintMap() {
    if (!state || gameEl.hidden) return;
    const view = resize();
    const unit = selected ? unitById(state, selected) : null;
    const reach = unit ? reachable(state, unit.id) : null;
    const shore = unit && unit.kind === 'ship' ? adjacentLandings(state, unit.id) : [];
    const colony = colonyId ? state.colonies.find((entry) => entry.id === colonyId) : null;
    const zone = colony ? colonyZone(colony) : null;
    const ghost = colony && tool && hover
      ? { x: hover.x, y: hover.y, buildingId: tool, ok: canPlace(state, colony.id, tool, hover.x, hover.y).ok }
      : null;
    drawMap(view.ctx, view, state, cam, { reach, shore, hover, selected, zone, ghost });
    const hoverLine = side.querySelector('#hover');
    if (hoverLine && hover) {
      if (colony && tool) hoverLine.textContent = placementLine(colony, hover.x, hover.y);
      else hoverLine.textContent = describeTile(state, hover.x, hover.y, humanPlayer(state));
    }
  }

  function paint() {
    if (!state || gameEl.hidden) return;
    const human = humanPlayer(state);
    const nation = NATIONS.find((entry) => entry.id === human.nationId);
    root.querySelector('#when').textContent = `${seasonName(state)} ${state.year}`;
    root.querySelector('#ruler').textContent = `${nation.name} · ${rulerName(nation, state.year)}`;
    root.querySelector('#log').textContent = state.log.slice(-12).join('\n');
    const unit = selected ? unitById(state, selected) : null;
    drawSide(unit, human);
    paintMap();
    if (paperOn && state.paper) {
      showPaper(state.paper);
      return;
    }
    const pending = state.pendingNames.find((entry) => entry.ownerId === human.id);
    if (pending) {
      const key = `${pending.kind}:${pending.id}`;
      if (modalKey !== key) {
        modalKey = key;
        openName(pending);
      }
    } else if (!helpOn) {
      modal.hidden = true;
      modalKey = null;
    }
  }

  function drawSide(unit, human) {
    const colony = colonyId ? state.colonies.find((entry) => entry.id === colonyId) : null;
    if (colony) {
      drawColonySide(colony);
      return;
    }
    const lines = [];
    if (hover) lines.push(describeTile(state, hover.x, hover.y, human));
    const cargo = unit && unit.kind === 'ship'
      ? state.units.filter((entry) => entry.aboard === unit.id)
      : [];
    const stack = unit && unit.kind !== 'ship'
      ? state.units.filter((entry) => !entry.aboard && entry.x === unit.x && entry.y === unit.y && entry.owner === unit.owner)
      : [];
    side.innerHTML = `
      <p id="status">${status}</p>
      <p id="hover">${lines[0] || 'Drag the map. Click a unit, then a highlighted square.'}</p>
      <h2>${unit ? unitTitle(unit) : 'No unit selected'}</h2>
      ${unit ? `<p>Movement ${unit.mp}. ${unit.aboard ? 'Aboard ship.' : ''}</p>` : ''}
      ${cargo.length ? `<ul>${cargo.map((entry) => `<li>${entry.name} · ${KIND_LABEL[entry.kind]}</li>`).join('')}</ul>` : ''}
      ${stack.length > 1 ? `<ul>${stack.map((entry) => `<li>${entry.name} · ${KIND_LABEL[entry.kind]}</li>`).join('')}</ul>` : ''}
      <div class="row">
        <button type="button" id="found" ${unit && unit.kind === 'settler' && !unit.aboard ? '' : 'disabled'}>Found colony</button>
        <button type="button" id="board" ${unit && unit.kind !== 'ship' && !unit.aboard ? '' : 'disabled'}>Board nearest ship</button>
      </div>
      <p class="muted">Gold squares are where you can move. Green squares are where a ship can land. Soldiers walk only with their leader. End turn brings the dispatch.</p>
      <h2>Charts</h2>
      <ul>${chartList()}</ul>
      <h2>Colonies</h2>
      ${state.colonies.some((colony) => colony.owner === human.id) ? `<ul>${state.colonies.filter((colony) => colony.owner === human.id).map((colony) => `<li>${colony.name} · level ${colony.level} <button type="button" data-colony="${colony.id}">Open</button></li>`).join('')}</ul>` : '<p class="muted">None yet. Land a settler and found one.</p>'}
      <div class="minimap-wrap"><canvas id="minimap" width="280" height="110"></canvas></div>`;
    const found = side.querySelector('#found');
    if (found) found.onclick = () => {
      const result = actFound(state, selected);
      note(result);
      if (result.ok && result.colony) openColony(result.colony.id);
      else paint();
    };
    side.querySelectorAll('[data-colony]').forEach((button) => {
      button.onclick = () => openColony(Number(button.dataset.colony));
    });
    const board = side.querySelector('#board');
    if (board) board.onclick = () => {
      const ship = nearestShip(unit);
      const result = ship ? actBoard(state, unit.id, ship.id) : { ok: false, error: 'No ship of yours is next to this unit.' };
      note(result);
      paint();
    };
    const mini = side.querySelector('#minimap');
    drawMinimap(mini.getContext('2d'), mini, state, cam, null);
  }

  function chartList() {
    const human = humanPlayer(state);
    const named = [
      ...state.map.rivers.filter((entry) => entry.namedBy === human.id),
      ...state.map.peaks.filter((entry) => entry.namedBy === human.id),
      ...state.map.regions.filter((entry) => entry.namedBy === human.id),
    ];
    if (!named.length) return '<li class="muted">Name a river, peak, or region by being the first to reach it.</li>';
    return named.map((entry) => `<li>${entry.name}</li>`).join('');
  }

  function nearestShip(unit) {
    if (!unit) return null;
    return state.units.find((ship) => ship.kind === 'ship' && ship.owner === unit.owner
      && Math.abs(ship.x - unit.x) + Math.abs(ship.y - unit.y) === 1) || null;
  }

  function unitTitle(unit) {
    return `${unit.name} · ${KIND_LABEL[unit.kind] || unit.kind}`;
  }

  function note(result) {
    status = result && result.ok ? '' : (result && result.error) || '';
  }

  function openName(pending) {
    const kindLabel = pending.kind === 'river' ? 'river' : pending.kind === 'peak' ? 'peak' : 'region';
    modal.hidden = false;
    modal.innerHTML = `
      <form class="card">
        <h2>You reached this ${kindLabel} first</h2>
        <p>The name is yours. Everyone's map will use it.</p>
        <input name="title" maxlength="40" placeholder="Name" required autofocus>
        <div class="row"><button class="primary" type="submit">Record the name</button></div>
      </form>`;
    const form = modal.querySelector('form');
    form.onsubmit = (event) => {
      event.preventDefault();
      const result = actName(state, pending.kind, pending.id, form.title.value, pending.ownerId);
      note(result);
      paint();
    };
  }

  function showPaper(paper) {
    helpOn = false;
    modalKey = null;
    modal.hidden = false;
    const sections = paper.sections.map((section) => `
      <section>
        <h3>${esc(section.title)}</h3>
        ${section.lines.map((line) => `<p>${esc(line)}</p>`).join('')}
      </section>`).join('');
    modal.innerHTML = `
      <article class="sheet">
        <p class="kicker">${esc(paper.place)}</p>
        <h2 class="mast">${esc(paper.title)}</h2>
        <p class="dateline">${esc(paper.season)} ${esc(String(paper.year))} · ${esc(paper.nation)} · ${esc(paper.ruler)}</p>
        <div class="columns">${sections}</div>
        <div class="row sheet-close"><button type="button" id="close-paper" class="primary">Close the paper</button></div>
      </article>`;
    modal.querySelector('#close-paper').onclick = () => {
      paperOn = false;
      paint();
    };
  }

  function esc(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
    }[char]));
  }

  function showHelp() {
    helpOn = true;
    modal.hidden = false;
    modal.innerHTML = `
      <div class="card">
        <h2>Keys</h2>
        <p>Drag to pan. Wheel to zoom. Click your unit, then a gold square.</p>
        <p>Enter ends the turn and opens the dispatch. Enter or Esc closes it. U undoes a move.</p>
        <p>Ships stay on water. Explorers and settlers walk. A leader carries the soldiers on his square.</p>
        <p>Open a colony and the map highlights its land. Put buildings inside that highlight. Farms, forts, and war colleges are 2 by 2. The center and the other buildings are one square. Esc closes the colony.</p>
        <div class="row"><button type="button" id="close-help" class="primary">Back to the map</button></div>
      </div>`;
    modal.querySelector('#close-help').onclick = () => { helpOn = false; modal.hidden = true; };
  }

  function showBattle() {
    setup.hidden = true;
    gameEl.hidden = true;
    battleEl.hidden = false;
    let last = 'A practice roll. The battle itself is stage 3.';
    const draw = () => {
      const cells = [];
      for (let row = 0; row < COMBAT.grid.rows; row++) {
        for (let col = 0; col < COMBAT.grid.cols; col++) {
          const mark = row === 0 && col === 1 ? 'Inf 4' : row === 3 && col === 1 ? 'Inf 4' : '';
          cells.push(`<button type="button" class="cell" disabled>${mark}</button>`);
        }
      }
      battleEl.innerHTML = `
        <h1>Dice preview</h1>
        <p class="sub">3 columns by 4 rows. Each strength point is one 40-sided die. A hit is a roll at or under the threshold. This screen does not fight a battle.</p>
        <div class="grid3">${cells.join('')}</div>
        <div class="row"><button type="button" id="roll" class="primary">Roll one attack</button><button type="button" id="back" class="ghost">Back</button></div>
        <p class="dice">${last}</p>
        <ul>${COMBAT.bonuses.map((bonus) => `<li>${bonus.label}: +${bonus.amount}</li>`).join('')}</ul>`;
      battleEl.querySelector('#roll').onclick = () => {
        const threshold = hitThreshold({ attackResearch: 0, defenseResearch: 0, bonus: 0 });
        const rolled = rollHits(4, threshold, mulberry32(Date.now() >>> 0));
        last = `Threshold ${threshold}. Rolls ${rolled.rolls.map((die) => die.roll + (die.hit ? '*' : '')).join(', ')}. Hits ${rolled.hits}. A star is a hit.`;
        draw();
      };
      battleEl.querySelector('#back').onclick = () => showSetup();
    };
    draw();
  }

  function eventPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  canvas.addEventListener('mousedown', (event) => {
    drag = { x: event.clientX, y: event.clientY, ox: cam.ox, oy: cam.oy, moved: false };
    canvas.classList.add('drag');
  });
  window.addEventListener('mouseup', (event) => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    canvas.classList.remove('drag');
    if (moved || !state) return;
    const point = eventPoint(event);
    const tile = screenToTile(point.x, point.y, cam);
    onClick(tile.x, tile.y);
  });
  window.addEventListener('mousemove', (event) => {
    if (drag) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      cam.ox = drag.ox + dx;
      cam.oy = drag.oy + dy;
      paint();
      return;
    }
    if (!state || gameEl.hidden) return;
    const point = eventPoint(event);
    const tile = screenToTile(point.x, point.y, cam);
    if (hover && hover.x === tile.x && hover.y === tile.y) return;
    hover = tile;
    paintMap();
  });
  canvas.addEventListener('wheel', (event) => {
    if (!state) return;
    event.preventDefault();
    const point = eventPoint(event);
    const beforeX = (point.x - cam.ox) / cam.zoom;
    const beforeY = (point.y - cam.oy) / cam.zoom;
    const next = Math.max(0.55, Math.min(2.1, cam.zoom * (event.deltaY > 0 ? 0.9 : 1.1)));
    cam.zoom = next;
    cam.ox = point.x - beforeX * cam.zoom;
    cam.oy = point.y - beforeY * cam.zoom;
    paint();
  }, { passive: false });

  function onClick(x, y) {
    const human = humanPlayer(state);
    if (colonyId && tool) {
      note(actPlaceBuilding(state, colonyId, tool, x, y));
      paint();
      return;
    }
    const unit = selected ? unitById(state, selected) : null;
    if (unit && unit.kind === 'ship') {
      const shore = adjacentLandings(state, unit.id).some(([sx, sy]) => sx === x && sy === y);
      if (shore) {
        note(actLand(state, unit.id, x, y));
        paint();
        return;
      }
    }
    if (unit && reachable(state, unit.id).has(`${x},${y}`)) {
      note(actMove(state, unit.id, x, y));
      paint();
      return;
    }
    const hit = state.units.find((entry) => !entry.aboard && entry.owner === human.id && entry.x === x && entry.y === y);
    if (!hit) {
      const built = tileBuilding(state, x, y);
      if (built && built.colony.owner === human.id) {
        openColony(built.colony.id);
        return;
      }
    }
    selected = hit ? hit.id : null;
    status = '';
    paint();
  }

  function openColony(id) {
    colonyId = id;
    tool = null;
    paperOn = false;
    modal.hidden = true;
    const colony = state.colonies.find((entry) => entry.id === id);
    if (colony) frameCamera({ x: colony.x, y: colony.y });
    paint();
  }

  function closeColony() {
    colonyId = null;
    tool = null;
    status = '';
    paint();
  }

  function colonyZone(colony) {
    const reach = TUNING.buildReach[colony.level] || 1;
    const keys = new Set();
    for (let dy = -reach; dy <= reach; dy++) {
      for (let dx = -reach; dx <= reach; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) <= reach) keys.add(`${colony.x + dx},${colony.y + dy}`);
      }
    }
    return keys;
  }

  function placementLine(colony, x, y) {
    const shape = footprintOf(tool);
    const check = canPlace(state, colony.id, tool, x, y);
    const bonus = siteYield(state, tool, x, y);
    const verdict = check.ok ? `${shape.name} fits here.` : check.error;
    if (bonus == null) return verdict;
    const shown = bonus > 0 ? `+${bonus}` : `${bonus}`;
    return `${verdict} Terrain ${shown}%.`;
  }

  function drawColonySide(colony) {
    const tools = BUILDINGS.map((building) => {
      const shape = footprintOf(building.id);
      const size = shape.squares === 4 ? '2 by 2' : '1 square';
      const on = tool === building.id ? ' on' : '';
      return `<button type="button" class="build${on}" data-tool="${building.id}">${building.name}<small>${size}</small></button>`;
    }).join('');
    const counts = colony.buildings.map((building) => footprintOf(building.id).name);
    const summary = counts.reduce((bag, name) => {
      bag[name] = (bag[name] || 0) + 1;
      return bag;
    }, {});
    const tally = Object.entries(summary).map(([name, count]) => `${count} ${name.toLowerCase()}`).join(', ');
    side.innerHTML = `
      <p id="status">${status}</p>
      <p id="hover">Move over the pale squares.</p>
      <h2>${colony.name} · level ${colony.level}</h2>
      <p class="muted">Pale squares are this colony. The whole building has to sit inside them. You can leave gaps. Upgrading the center later adds one square around the edge.</p>
      <div class="build-list">${tools}</div>
      <p>${tally}.</p>
      <p class="muted">People and goods are not running yet, so placing a building is free. A farm, mill, or mine shows its terrain bonus.</p>
      <div class="row"><button type="button" id="colony-close">Close colony</button></div>
      <div class="minimap-wrap"><canvas id="minimap" width="280" height="110"></canvas></div>`;
    side.querySelector('#colony-close').onclick = () => closeColony();
    side.querySelectorAll('[data-tool]').forEach((button) => {
      button.onclick = () => {
        tool = tool === button.dataset.tool ? null : button.dataset.tool;
        status = '';
        paint();
      };
    });
    const mini = side.querySelector('#minimap');
    drawMinimap(mini.getContext('2d'), mini, state, cam, null);
  }

  root.querySelector('#end').onclick = () => {
    actEndTurn(state);
    selected = null;
    paperOn = true;
    paint();
  };
  root.querySelector('#undo').onclick = () => { if (undo(state)) { status = ''; paint(); } };
  root.querySelector('#save').onclick = () => {
    saveToMemory(state);
    const blob = new Blob([exportGame(state)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `newer-world-${state.seed}.json`;
    link.click();
    status = 'Saved in this browser, and a file downloaded.';
    paint();
  };
  root.querySelector('#help').onclick = () => showHelp();
  window.addEventListener('keydown', (event) => {
    if (!state || gameEl.hidden) return;
    if (event.target.matches('input, textarea')) return;
    if (paperOn) {
      if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault();
        paperOn = false;
        paint();
      }
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      actEndTurn(state);
      selected = null;
      paperOn = true;
      paint();
    }
    if (event.key === 'u' || event.key === 'U') { undo(state); paint(); }
    if (event.key === 'Escape') {
      if (tool) { tool = null; paint(); return; }
      if (colonyId) { closeColony(); return; }
      helpOn = false;
      selected = null;
      paint();
    }
    if (event.key === '?' ) showHelp();
    const step = 40;
    if (event.key === 'ArrowLeft') cam.ox += step;
    if (event.key === 'ArrowRight') cam.ox -= step;
    if (event.key === 'ArrowUp') cam.oy += step;
    if (event.key === 'ArrowDown') cam.oy -= step;
    if (event.key.startsWith('Arrow')) paint();
  });
  window.addEventListener('resize', () => paint());

  const params = new URLSearchParams(location.search);
  if (params.get('play') === '1') {
    begin(newGame({
      nationId: params.get('nation') || 'england',
      difficulty: 'normal',
      skills: ['navigator', 'cartographer'],
      seed: Number(params.get('seed')) || 42,
    }));
  } else {
    showSetup();
  }
}
