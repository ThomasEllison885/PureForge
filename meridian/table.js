var __defProp = Object.defineProperty;
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};

// packages/cards/src/basics.ts
var BASICS = [
  {
    id: "deckhand",
    set: "basic",
    name: "Deckhand",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["sailor"],
    cost: { supply: 1, goods: [] },
    might: 1,
    endurance: 1,
    keywords: [],
    abilities: [{ on: "onDeploy", effects: [{ do: "extraStow", amount: 1 }] }],
    text: "When you deploy Deckhand, you may Stow 1 additional card this turn.",
    flavor: "Someone has to haul the rope."
  },
  {
    id: "musketeer",
    set: "basic",
    name: "Musketeer",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["soldier"],
    cost: { supply: 2, goods: [] },
    might: 3,
    endurance: 2,
    keywords: [],
    abilities: [],
    text: ""
  },
  {
    id: "pikeman",
    set: "basic",
    name: "Pikeman",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["soldier"],
    cost: { supply: 2, goods: [] },
    might: 1,
    endurance: 3,
    keywords: ["entrench"],
    abilities: [],
    text: "Entrench"
  },
  {
    id: "dispatch-rider",
    set: "basic",
    name: "Dispatch Rider",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["scout"],
    cost: { supply: 2, goods: [] },
    might: 2,
    endurance: 1,
    keywords: ["swift"],
    abilities: [],
    text: "Swift"
  },
  {
    id: "pathfinder",
    set: "basic",
    name: "Pathfinder",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["scout"],
    cost: { supply: 2, goods: [] },
    might: 2,
    endurance: 2,
    keywords: ["scout"],
    abilities: [],
    text: "Scout"
  },
  {
    id: "ox-cart-teamsters",
    set: "basic",
    name: "Ox-Cart Teamsters",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["merchant"],
    cost: { supply: 2, goods: [] },
    might: 0,
    endurance: 3,
    keywords: [],
    abilities: [{ on: "onDeploy", effects: [{ do: "stowFromDeck", amount: 1 }] }],
    text: "When you deploy Ox-Cart Teamsters, put the top card of your deck into your Stores."
  },
  {
    id: "hired-guide",
    set: "basic",
    name: "Hired Guide",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["mercenary"],
    cost: { supply: 3, goods: [] },
    might: 2,
    endurance: 2,
    keywords: [],
    abilities: [{ on: "onDeploy", effects: [{ do: "survey", n: 1 }] }],
    text: "When you deploy Hired Guide, Survey 1."
  },
  {
    id: "veteran-marine",
    set: "basic",
    name: "Veteran Marine",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["soldier", "sailor"],
    cost: { supply: 3, goods: [] },
    might: 3,
    endurance: 4,
    keywords: [],
    abilities: [],
    text: ""
  },
  {
    id: "field-surgeon",
    set: "basic",
    name: "Field Surgeon",
    faction: "basic",
    rarity: "basic",
    type: "crew",
    subtypes: ["scholar"],
    cost: { supply: 3, goods: [] },
    might: 1,
    endurance: 3,
    keywords: [],
    abilities: [{ on: "static", aura: { aura: "keyword", keyword: "hardy", scope: "otherFriendlyHere" } }],
    text: "Your other crews in this Region have Hardy."
  },
  {
    id: "forced-march",
    set: "basic",
    name: "Forced March",
    faction: "basic",
    rarity: "basic",
    type: "order",
    subtypes: [],
    cost: { supply: 1, goods: [] },
    keywords: [],
    abilities: [{ on: "onPlay", effects: [{ do: "extraMarch", target: { t: "chosenCrew", filter: { owner: "you", where: "anywhere" } } }] }],
    text: "Target crew of yours may March again this turn."
  },
  {
    id: "salted-provisions",
    set: "basic",
    name: "Salted Provisions",
    faction: "basic",
    rarity: "basic",
    type: "order",
    subtypes: [],
    cost: { supply: 1, goods: [] },
    keywords: [],
    abilities: [{ on: "onPlay", effects: [{ do: "draw", amount: 1 }] }],
    text: "Draw a card."
  },
  {
    id: "rally-the-banners",
    set: "basic",
    name: "Rally the Banners",
    faction: "basic",
    rarity: "basic",
    type: "order",
    subtypes: [],
    cost: { supply: 1, goods: [] },
    keywords: ["ambush"],
    abilities: [
      { on: "onPlay", effects: [{ do: "modifyStats", might: 1, until: "round", target: { t: "crewsInChosenRegion", owner: "you", region: { yourCrewThere: true } } }] }
    ],
    text: "Ambush. Your crews in one Region get +1 Might until end of round."
  },
  {
    id: "musket-volley",
    set: "basic",
    name: "Musket Volley",
    faction: "basic",
    rarity: "basic",
    type: "order",
    subtypes: [],
    cost: { supply: 2, goods: [] },
    keywords: ["ambush"],
    abilities: [{ on: "onPlay", effects: [{ do: "damage", amount: 2, target: { t: "chosenCrew", filter: { owner: "any", where: "contested" } } }] }],
    text: "Ambush. Deal 2 damage to a crew in a Region where both players have crews."
  },
  {
    id: "stockade",
    set: "basic",
    name: "Stockade",
    faction: "basic",
    rarity: "basic",
    type: "outpost",
    subtypes: [],
    cost: { supply: 2, goods: ["timber"] },
    keywords: [],
    abilities: [{ on: "static", aura: { aura: "keyword", keyword: "entrench", scope: "friendlyHere" } }],
    text: "Your crews here have Entrench."
  },
  {
    id: "plant-the-flag",
    set: "basic",
    name: "Plant the Flag",
    faction: "basic",
    rarity: "basic",
    type: "venture",
    subtypes: [],
    cost: { supply: 1, goods: [] },
    keywords: [],
    abilities: [{ on: "atClaim", if: { if: "controlAtLeast", n: 3 }, effects: [{ do: "gainRenown", amount: 3 }] }],
    text: "At Claim, if you control 3 or more Regions, gain 3 Renown."
  }
];

// packages/cards/src/deck.ts
var FORMATS = {
  standard: { name: "Standard", deckSize: 40, maxFactions: 2, copies: 3, legendaryCopies: 1 },
  draft: { name: "Expedition Draft", deckSize: 30, maxFactions: null, copies: 99, legendaryCopies: 99 }
};
function validateDeck(ids, lookup, format = FORMATS.standard) {
  const problems = [];
  if (ids.length !== format.deckSize) problems.push(`A ${format.name} deck has exactly ${format.deckSize} cards (this one has ${ids.length}).`);
  const counts = /* @__PURE__ */ new Map();
  for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
  const factions2 = /* @__PURE__ */ new Set();
  for (const [id, count] of counts) {
    const card = lookup(id);
    if (card.faction !== "basic" && card.faction !== "neutral") factions2.add(card.faction);
    if (card.rarity === "basic") continue;
    const limit = card.rarity === "legendary" ? format.legendaryCopies : format.copies;
    if (count > limit) problems.push(`${card.name}: at most ${limit} ${limit === 1 ? "copy" : "copies"}.`);
  }
  if (format.maxFactions != null && factions2.size > format.maxFactions) problems.push(`Use at most ${format.maxFactions} factions (this deck has ${factions2.size}).`);
  return problems;
}
function expand(list) {
  return list.flatMap(([id, count]) => Array.from({ length: count }, () => id));
}
function basicDeck() {
  return expand([
    ["deckhand", 4],
    ["musketeer", 4],
    ["pikeman", 4],
    ["dispatch-rider", 4],
    ["pathfinder", 4],
    ["ox-cart-teamsters", 3],
    ["hired-guide", 2],
    ["veteran-marine", 2],
    ["field-surgeon", 2],
    ["forced-march", 2],
    ["salted-provisions", 2],
    ["rally-the-banners", 2],
    ["musket-volley", 2],
    ["stockade", 2],
    ["plant-the-flag", 1]
  ]);
}
var STARTER_DECKS = [
  {
    id: "iron-tide",
    name: "Iron Tide",
    faction: "castavar",
    rare: "bastion-of-the-crown",
    plan: "Hold ground; Entrench and Escort.",
    blurb: "Big crews that dig in and never leave. The easiest deck to learn.",
    keyCards: ["tercio-square", "conquistador-captain", "bastion-of-the-crown"],
    cards: expand([
      ["musketeer", 3],
      ["pikeman", 3],
      ["veteran-marine", 2],
      ["field-surgeon", 1],
      ["rally-the-banners", 2],
      ["musket-volley", 1],
      ["stockade", 2],
      ["castavar-halberdier", 3],
      ["tercio-square", 2],
      ["hold-the-line", 2],
      ["conquistador-captain", 2],
      ["royal-decree", 1],
      ["bastion-of-the-crown", 1],
      ["rodela-swordsman", 2],
      ["crown-arquebusier", 2],
      ["fever-hardened-veteran", 2],
      ["vanguard-pioneers", 2],
      ["banner-bearer", 2],
      ["shield-wall", 1],
      ["presidio", 1],
      ["veteran-of-the-old-wars", 1],
      ["free-company-pikes", 2]
    ])
  },
  {
    id: "ledger-and-lead",
    name: "Ledger and Lead",
    faction: "hollen",
    rare: "hostile-buyout",
    plan: "Goods and extra Supply.",
    blurb: "A slow start, then more Supply than anyone. Win the Goods and you win the coast.",
    keyCards: ["concern-musketeers", "charter-of-monopoly", "hostile-buyout"],
    cards: expand([
      ["deckhand", 3],
      ["musketeer", 2],
      ["pikeman", 2],
      ["ox-cart-teamsters", 3],
      ["hired-guide", 1],
      ["salted-provisions", 2],
      ["musket-volley", 1],
      ["company-factor", 3],
      ["concern-musketeers", 2],
      ["trading-post", 2],
      ["company-clerk", 3],
      ["spice-porters", 2],
      ["warehouse-watch", 2],
      ["company-surgeon", 1],
      ["dividend-payment", 2],
      ["market-day", 1],
      ["charter-of-monopoly", 1],
      ["quarterly-dividend", 1],
      ["ledger-keeper", 2],
      ["monopoly-agent", 1],
      ["hostile-buyout", 1],
      ["letter-from-home", 1],
      ["frontier-woodsmen", 1]
    ])
  },
  {
    id: "first-chart",
    name: "First Chart",
    faction: "aldmoor",
    rare: "observatory",
    plan: "Survey and Ventures.",
    blurb: "Fast, clever and fragile. Map the coast first and win on Ventures before the fighting matters.",
    keyCards: ["survey-cutter-crew", "naturalist-s-expedition", "observatory"],
    cards: expand([
      ["deckhand", 2],
      ["dispatch-rider", 2],
      ["pathfinder", 3],
      ["hired-guide", 2],
      ["veteran-marine", 2],
      ["forced-march", 1],
      ["salted-provisions", 1],
      ["rally-the-banners", 1],
      ["admiralty-cartographer", 3],
      ["survey-cutter-crew", 3],
      ["chart-the-unknown", 2],
      ["royal-marines", 2],
      ["midshipman-lookout", 2],
      ["ship-s-boat-party", 2],
      ["fair-winds", 2],
      ["log-of-discoveries", 1],
      ["base-camp", 1],
      ["naturalist-s-expedition", 2],
      ["swift-packet", 2],
      ["royal-society-fellow", 1],
      ["observatory", 1],
      ["shipwreck-survivors", 2]
    ])
  },
  {
    id: "red-flag-rising",
    name: "Red Flag Rising",
    faction: "captains",
    rare: "night-raid",
    plan: "Swift pressure and Raid.",
    blurb: "Hit early, steal their Stores, and be gone before the counterattack.",
    keyCards: ["boarding-party", "black-market", "night-raid"],
    cards: expand([
      ["musketeer", 2],
      ["dispatch-rider", 3],
      ["deckhand", 2],
      ["pikeman", 1],
      ["veteran-marine", 2],
      ["rally-the-banners", 2],
      ["musket-volley", 2],
      ["shoals-cutthroat", 3],
      ["boarding-party", 2],
      ["cutlass-crew", 3],
      ["bilge-rats", 2],
      ["smuggler-sloop-crew", 2],
      ["cut-and-run", 2],
      ["pistol-shot", 2],
      ["plunder", 1],
      ["prize-money", 1],
      ["black-market", 1],
      ["articles-of-the-shoals", 1],
      ["sea-wolf", 2],
      ["mutiny", 1],
      ["night-raid", 1],
      ["hired-musket", 2]
    ])
  }
];

// packages/cards/src/factions.ts
var FACTIONS = [
  {
    id: "castavar",
    name: "Kingdom of Castavar",
    short: "Castavar",
    plan: "Take Regions and never give them back.",
    color: "#9E1B32",
    accent: "#C9A44C"
  },
  {
    id: "hollen",
    name: "The Hollen Concern",
    short: "Hollen",
    plan: "Control Goods and squeeze the opponent's economy.",
    color: "#E39B2D",
    accent: "#1B2A41"
  },
  {
    id: "aldmoor",
    name: "Aldmoor Admiralty",
    short: "Aldmoor",
    plan: "Explore fast and complete Ventures.",
    color: "#1F3A68",
    accent: "#EFE7D6"
  },
  {
    id: "captains",
    name: "Free Captains",
    short: "Free Captains",
    plan: "Raid Stores and disrupt.",
    color: "#1C7A78",
    accent: "#1A1A1A"
  }
];

// packages/cards/src/regions.ts
var REGIONS = [
  {
    id: "pearl-lagoon",
    name: "Pearl Lagoon",
    renown: 1,
    goods: ["spice"],
    hazard: false,
    tags: ["Coastal"],
    traits: [{ kind: "whenRevealed", effects: [{ do: "draw", amount: 1 }] }],
    text: "When revealed, the player who revealed it draws a card."
  },
  {
    id: "mangrove-delta",
    name: "Mangrove Delta",
    renown: 1,
    goods: ["timber"],
    hazard: false,
    tags: ["Coastal", "River"],
    traits: [{ kind: "marchPlus", distance: 2 }],
    text: "Crews here can March to a Region 2 positions away."
  },
  {
    id: "highland-mines",
    name: "Highland Mines",
    renown: 2,
    goods: ["gold"],
    hazard: false,
    tags: ["Mountain"],
    traits: [{ kind: "cantEnterFromHarbor" }],
    text: "Crews can't enter from a Harbor."
  },
  {
    id: "fever-marsh",
    name: "Fever Marsh",
    renown: 1,
    goods: ["spice"],
    hazard: true,
    tags: [],
    traits: [{ kind: "atClaimDamageEach", amount: 1 }],
    text: "At Claim, deal 1 damage to each crew here."
  },
  {
    id: "storm-cape",
    name: "Storm Cape",
    renown: 2,
    goods: [],
    hazard: true,
    tags: ["Coastal"],
    traits: [{ kind: "enterFromHarborDamage", amount: 1 }],
    text: "Crews that enter from a Harbor take 1 damage."
  },
  {
    id: "cedar-ridge",
    name: "Cedar Ridge",
    renown: 1,
    goods: ["timber"],
    hazard: false,
    tags: [],
    traits: [{ kind: "outpostDiscount", amount: 1 }],
    text: "Outposts here cost 1 less Supply."
  },
  {
    id: "golden-savanna",
    name: "Golden Savanna",
    renown: 1,
    goods: ["gold"],
    hazard: false,
    tags: [],
    traits: [],
    text: "No trait. Open, easy ground."
  },
  {
    id: "ruins-of-the-first-builders",
    name: "Ruins of the First Builders",
    renown: 2,
    goods: [],
    hazard: false,
    tags: [],
    traits: [
      { kind: "whenRevealed", effects: [{ do: "survey", n: 1 }] },
      { kind: "firstControl", effects: [{ do: "draw", amount: 2 }] }
    ],
    text: "When revealed, the revealing player Surveys 1. The first player to control it draws 2 cards."
  },
  {
    id: "whispering-falls",
    name: "Whispering Falls",
    renown: 1,
    goods: ["timber", "spice"],
    hazard: false,
    tags: ["River"],
    traits: [{ kind: "crewCap", n: 3 }],
    text: "Each player may have at most 3 crews here."
  },
  {
    id: "smugglers-cove",
    name: "Smugglers' Cove",
    renown: 1,
    goods: ["gold"],
    hazard: false,
    tags: ["Coastal"],
    traits: [{ kind: "raidExtra", extra: 1 }],
    text: "Raid here takes 2 cards instead of 1."
  },
  {
    id: "jaguar-wilds",
    name: "Jaguar Wilds",
    renown: 1,
    goods: ["timber"],
    hazard: true,
    tags: [],
    traits: [{ kind: "atClaimDamageLowest", amount: 1 }],
    text: "At Claim, each player's crew with the lowest Endurance here takes 1 damage."
  },
  {
    id: "spice-terraces",
    name: "Spice Terraces",
    renown: 2,
    goods: ["spice"],
    hazard: false,
    tags: ["Mountain"],
    traits: [{ kind: "loseControlWithoutCrew" }],
    text: "You lose control at Claim unless you have a crew here."
  },
  {
    id: "great-river-mouth",
    name: "Great River Mouth",
    renown: 1,
    goods: ["timber"],
    hazard: false,
    tags: ["Coastal", "River"],
    traits: [{ kind: "marchAnywhere" }],
    text: "Crews here count as adjacent to every Region."
  },
  {
    id: "smoking-peak",
    name: "Smoking Peak",
    renown: 3,
    goods: ["gold"],
    hazard: true,
    tags: ["Mountain"],
    traits: [{ kind: "atClaimDamageEach", amount: 2 }],
    text: "At Claim, deal 2 damage to each crew here."
  },
  {
    id: "coral-reefs",
    name: "Coral Reefs",
    renown: 1,
    goods: ["gold"],
    hazard: true,
    tags: ["Coastal"],
    traits: [{ kind: "cantEnterFromHarbor" }],
    text: "Crews can't enter from a Harbor."
  },
  {
    id: "sandbar-haven",
    name: "Sandbar Haven",
    renown: 1,
    goods: [],
    hazard: false,
    tags: ["Coastal"],
    traits: [{ kind: "deployWithoutControl" }],
    text: "You may deploy crews here even if you don't control it."
  },
  {
    id: "fog-banks",
    name: "Fog Banks",
    renown: 1,
    goods: ["spice"],
    hazard: false,
    tags: ["Coastal"],
    traits: [{ kind: "hiddenFromScout" }],
    text: "Scout and Survey can't look at or flip this Region. Only entering reveals it."
  },
  {
    id: "old-fortress",
    name: "Old Fortress",
    renown: 2,
    goods: ["timber"],
    hazard: false,
    tags: [],
    traits: [{ kind: "grantEntrenchToController" }],
    text: "The controller's crews here have Entrench."
  },
  {
    id: "tidal-flats",
    name: "Tidal Flats",
    renown: 1,
    goods: ["spice"],
    hazard: false,
    tags: ["Coastal"],
    traits: [{ kind: "strikeMightPenalty", amount: 1 }],
    text: "During Strike, each player's total Might here is reduced by 1."
  },
  {
    id: "gilded-valley",
    name: "The Gilded Valley",
    renown: 3,
    goods: ["gold", "timber"],
    hazard: false,
    tags: [],
    traits: [{ kind: "controlMargin", margin: 2 }],
    text: "To take control here, you need at least 2 more Might than your opponent."
  }
];

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error2) => {
      for (const issue of error2.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error2 = new ZodError(issues);
  return error2;
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error2 = new ZodError(ctx.common.issues);
        this._error = error2;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target2) {
    return ZodPipeline.create(this, target2);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error2) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error2
        }
      });
    }
    function makeReturnsIssue(returns, error2) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error2
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error2 = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error2.addIssue(makeArgsIssue(args, e));
          throw error2;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error2.addIssue(makeReturnsIssue(result, e));
          throw error2;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect2 = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect2.type === "preprocess") {
      const processed = effect2.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect2.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect2.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect2.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect2.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect2.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect2);
  }
};
ZodEffects.create = (schema, effect2, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect: effect2,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze2 = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze2(data)) : freeze2(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;

// packages/cards/src/schema.ts
var GOODS = ["gold", "timber", "spice"];
var KEYWORDS = ["swift", "entrench", "hardy", "raid", "scout", "escort", "ambush"];
var FACTIONS2 = ["castavar", "hollen", "aldmoor", "captains", "neutral", "basic"];
var RARITIES = ["basic", "common", "uncommon", "rare", "legendary"];
var CARD_TYPES = ["crew", "order", "outpost", "venture"];
var SUBTYPES = ["soldier", "sailor", "scout", "merchant", "scholar", "officer", "rogue", "mercenary"];
var REGION_TAGS = ["Coastal", "River", "Mountain"];
var good = external_exports.enum(GOODS);
var keyword = external_exports.enum(KEYWORDS);
var subtype = external_exports.enum(SUBTYPES);
var until = external_exports.enum(["turn", "round", "permanent"]);
var owner = external_exports.enum(["you", "opponent", "any"]);
var crewFilter = external_exports.object({
  owner,
  /** here = the source's Region; contested = a Region where both players have crews; controlled = a Region you control. */
  where: external_exports.enum(["here", "anywhere", "contested", "controlled", "harbor", "map"]),
  subtype: subtype.optional(),
  keyword: keyword.optional(),
  /** Leave out the card itself. */
  other: external_exports.boolean().optional()
});
var regionFilter = external_exports.object({
  controller: external_exports.enum(["you", "opponent", "none", "notYou"]).optional(),
  yourCrewThere: external_exports.boolean().optional(),
  contested: external_exports.boolean().optional(),
  opponentMightAtMost: external_exports.number().int().min(0).optional(),
  noEnemyOutpost: external_exports.boolean().optional()
});
var target = external_exports.discriminatedUnion("t", [
  /** The source crew itself. */
  external_exports.object({ t: external_exports.literal("self") }),
  /** The crew that just entered (for "Whenever another crew of yours enters..."). */
  external_exports.object({ t: external_exports.literal("entering") }),
  /** One crew the player chooses (when the card is played, or when the ability triggers). */
  external_exports.object({ t: external_exports.literal("chosenCrew"), filter: crewFilter }),
  /** Every crew that matches. */
  external_exports.object({ t: external_exports.literal("allCrews"), filter: crewFilter }),
  /** One Region the player chooses; the effect touches the chosen owner's crews there. */
  external_exports.object({ t: external_exports.literal("crewsInChosenRegion"), owner: external_exports.enum(["you", "opponent"]), region: regionFilter }),
  /** One Region the player chooses (for effects that act on the Region itself). */
  external_exports.object({ t: external_exports.literal("chosenRegion"), region: regionFilter })
]);
var condition = external_exports.discriminatedUnion("if", [
  external_exports.object({ if: external_exports.literal("controlAtLeast"), n: external_exports.number().int().positive() }),
  /** Positions are 1 to 5, as printed on the table. */
  external_exports.object({ if: external_exports.literal("controlPositions"), positions: external_exports.array(external_exports.number().int().min(1).max(5)).min(1) }),
  external_exports.object({ if: external_exports.literal("outpostRegions"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("goodsAtLeast"), n: external_exports.number().int().min(1).max(3) }),
  external_exports.object({ if: external_exports.literal("crewsInRegions"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("takenAtLeast"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("controlHere") }),
  external_exports.object({ if: external_exports.literal("controlHereWithGood") }),
  external_exports.object({ if: external_exports.literal("crewsHere"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("hazardsControlled"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("faceUpRegions"), n: external_exports.number().int().positive() }),
  external_exports.object({ if: external_exports.literal("behind") }),
  external_exports.object({ if: external_exports.literal("hasFactionCrew"), faction: external_exports.enum(["castavar", "hollen", "aldmoor", "captains"]) })
]);
var effect = external_exports.lazy(
  () => external_exports.discriminatedUnion("do", [
    external_exports.object({ do: external_exports.literal("draw"), amount: external_exports.number().int().positive(), who: external_exports.enum(["you", "opponent"]).optional() }),
    external_exports.object({ do: external_exports.literal("stowFromDeck"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("extraStow"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("readyStores"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("survey"), n: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("damage"), amount: external_exports.number().int().positive(), target }),
    external_exports.object({ do: external_exports.literal("modifyStats"), might: external_exports.number().int().optional(), endurance: external_exports.number().int().optional(), until, target }),
    external_exports.object({ do: external_exports.literal("grantKeyword"), keyword, until, target }),
    external_exports.object({ do: external_exports.literal("returnToHarbor"), target }),
    external_exports.object({ do: external_exports.literal("extraMarch"), target }),
    external_exports.object({ do: external_exports.literal("takeFromStores"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("discardFromStores"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("discardFromHand"), amount: external_exports.number().int().positive() }),
    external_exports.object({ do: external_exports.literal("gainRenown"), amount: external_exports.number().int().positive(), per: external_exports.enum(["good", "regionControlled", "crewHere"]).optional() }),
    external_exports.object({ do: external_exports.literal("takeControl"), target }),
    external_exports.object({ do: external_exports.literal("chooseOne"), options: external_exports.array(external_exports.array(effect).min(1)).min(2) })
  ])
);
var TRIGGERS = [
  "onDeploy",
  "onPlay",
  "landing",
  "atClaim",
  "startOfTurn",
  "onDefeated",
  "onControlGained",
  "onRaid",
  "onFlip",
  "onFriendlyEnter"
];
var auraScope = external_exports.object({
  /** self, your other crews here, all your crews here, or all your crews anywhere. */
  scope: external_exports.enum(["self", "otherFriendlyHere", "friendlyHere", "yourCrews"]),
  subtype: subtype.optional()
});
var aura = external_exports.discriminatedUnion("aura", [
  auraScope.extend({ aura: external_exports.literal("keyword"), keyword }),
  auraScope.extend({ aura: external_exports.literal("stats"), might: external_exports.number().int().optional(), endurance: external_exports.number().int().optional() }),
  /** Outposts: your opponent pays this much Supply for each crew that enters this Region. */
  external_exports.object({ aura: external_exports.literal("taxEntry"), amount: external_exports.number().int().positive() }),
  /** Outposts: you keep this Region unless your opponent has this much more Might. */
  external_exports.object({ aura: external_exports.literal("holdMargin"), margin: external_exports.number().int().positive() }),
  /** You may Stow this many more cards each turn. */
  external_exports.object({ aura: external_exports.literal("stowLimit"), amount: external_exports.number().int().positive() }),
  /** Cards you take with Raid can be played from your Stores as if they were in your hand. */
  external_exports.object({ aura: external_exports.literal("playTakenFromStores") })
]);
var ability = external_exports.union([
  external_exports.object({ on: external_exports.enum(TRIGGERS), if: condition.optional(), effects: external_exports.array(effect).min(1) }),
  external_exports.object({ on: external_exports.literal("static"), if: condition.optional(), aura })
]);
var cardSchema = external_exports.object({
  id: external_exports.string().min(1),
  /** Collector number, e.g. FL-047. Basics have none. */
  number: external_exports.string().regex(/^FL-\d{3}$/).optional(),
  set: external_exports.enum(["FL", "basic"]),
  name: external_exports.string().min(1),
  faction: external_exports.enum(FACTIONS2),
  rarity: external_exports.enum(RARITIES),
  type: external_exports.enum(CARD_TYPES),
  subtypes: external_exports.array(subtype).max(2),
  cost: external_exports.object({ supply: external_exports.number().int().min(0), goods: external_exports.array(good) }),
  might: external_exports.number().int().min(0).optional(),
  endurance: external_exports.number().int().min(1).optional(),
  keywords: external_exports.array(keyword),
  abilities: external_exports.array(ability),
  text: external_exports.string(),
  flavor: external_exports.string().optional(),
  /** Two-faction archetype this card rewards (section 9). */
  pair: external_exports.enum(["castavar", "hollen", "aldmoor", "captains"]).optional(),
  art: external_exports.string().optional(),
  artist: external_exports.string().optional()
});
var effectList = external_exports.array(effect);
var traitSchema = external_exports.discriminatedUnion("kind", [
  external_exports.object({ kind: external_exports.literal("whenRevealed"), effects: effectList }),
  external_exports.object({ kind: external_exports.literal("marchPlus"), distance: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("marchAnywhere") }),
  external_exports.object({ kind: external_exports.literal("cantEnterFromHarbor") }),
  external_exports.object({ kind: external_exports.literal("enterFromHarborDamage"), amount: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("atClaimDamageEach"), amount: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("atClaimDamageLowest"), amount: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("outpostDiscount"), amount: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("crewCap"), n: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("raidExtra"), extra: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("loseControlWithoutCrew") }),
  external_exports.object({ kind: external_exports.literal("deployWithoutControl") }),
  external_exports.object({ kind: external_exports.literal("hiddenFromScout") }),
  external_exports.object({ kind: external_exports.literal("grantEntrenchToController") }),
  external_exports.object({ kind: external_exports.literal("strikeMightPenalty"), amount: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("controlMargin"), margin: external_exports.number().int().positive() }),
  external_exports.object({ kind: external_exports.literal("firstControl"), effects: effectList })
]);
var regionSchema = external_exports.object({
  id: external_exports.string().min(1),
  name: external_exports.string().min(1),
  renown: external_exports.union([external_exports.literal(1), external_exports.literal(2), external_exports.literal(3)]),
  goods: external_exports.array(good),
  hazard: external_exports.boolean(),
  tags: external_exports.array(external_exports.enum(REGION_TAGS)),
  traits: external_exports.array(traitSchema),
  text: external_exports.string()
});

// packages/cards/src/text.ts
var cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var plural = (n, one, many = `${one}s`) => n === 1 ? one : many;
var FACTION_NAME = { castavar: "Castavar", hollen: "Hollen", aldmoor: "Aldmoor", captains: "Free Captains" };
var SUBTYPE_PLURAL = {
  soldier: "Soldiers",
  sailor: "Sailors",
  scout: "Scouts",
  merchant: "Merchants",
  scholar: "Scholars",
  officer: "Officers",
  rogue: "Rogues",
  mercenary: "Mercenaries"
};
function duration(until2) {
  return until2 === "turn" ? " until end of turn" : until2 === "round" ? " until end of round" : " permanently";
}
function regionPhrase(region, lead = "a") {
  let base = lead === "one" ? "one Region" : "a Region";
  if (region.controller === "you") base = "a Region you control";
  if (region.controller === "opponent") base = "a Region your opponent controls";
  if (region.controller === "none") base = "an uncontrolled Region";
  if (region.controller === "notYou") base = "a Region you don't control";
  const parts = [];
  if (region.noEnemyOutpost) parts.push("with no enemy Outpost");
  if (region.contested) parts.push("where both players have crews");
  if (region.opponentMightAtMost != null) parts.push(`where your opponent has ${region.opponentMightAtMost} or less total Might`);
  if (region.yourCrewThere && region.controller == null && lead !== "one") parts.push("where you have a crew");
  return [base, ...parts].join(" ");
}
function whereSuffix(f2) {
  switch (f2.where) {
    case "here":
      return " here";
    case "contested":
      return f2.owner === "any" ? " in a Region where both players have crews" : " in a Clash";
    case "controlled":
      return " in a Region you control";
    case "harbor":
      return f2.owner === "opponent" ? " in your opponent's Harbor" : " in your Harbor";
    case "map":
      return " on the map";
    default:
      return "";
  }
}
function crewNoun(f2) {
  const sub = f2.subtype;
  const kw = f2.keyword ? ` with ${cap(f2.keyword)}` : "";
  const single = sub ? cap(sub) : "crew";
  const many = sub ? SUBTYPE_PLURAL[sub] : "crews";
  return { one: `${single}${kw}`, many: `${many}${kw}` };
}
function targetPhrase(t, name) {
  if (t.t === "self") return { text: name, plural: false };
  if (t.t === "entering") return { text: "it", plural: false };
  if (t.t === "chosenRegion") return { text: regionPhrase(t.region), plural: false };
  if (t.t === "crewsInChosenRegion") {
    const whose = t.owner === "you" ? "your crews" : "enemy crews";
    return { text: `${whose} in ${regionPhrase(t.region, "one")}`, plural: true };
  }
  const noun = crewNoun(t.filter);
  const other2 = t.filter.other ? "other " : "";
  if (t.t === "chosenCrew") {
    if (t.filter.owner === "you") {
      if (t.filter.where === "anywhere") return { text: `target ${noun.one} of yours`, plural: false };
      return { text: `one of your ${other2}${noun.many}${whereSuffix(t.filter)}`, plural: false };
    }
    if (t.filter.owner === "opponent") return { text: `an enemy ${noun.one}${whereSuffix(t.filter)}`, plural: false };
    return { text: `a ${other2}${noun.one}${whereSuffix(t.filter)}`, plural: false };
  }
  if (t.filter.owner === "you") return { text: `your ${other2}${noun.many}${whereSuffix(t.filter)}`, plural: true };
  if (t.filter.owner === "opponent") return { text: `each enemy ${noun.one}${whereSuffix(t.filter)}`, plural: false };
  return { text: `each ${other2}${noun.one}${whereSuffix(t.filter)}`, plural: false };
}
function statPhrase(might, endurance) {
  const parts = [];
  if (might) parts.push(`${might > 0 ? "+" : ""}${might} Might`);
  if (endurance) parts.push(`${endurance > 0 ? "+" : ""}${endurance} Endurance`);
  return parts.join(" and ");
}
function effectText(e, name) {
  switch (e.do) {
    case "draw":
      if (e.who === "opponent") return e.amount === 1 ? "your opponent draws a card" : `your opponent draws ${e.amount} cards`;
      return e.amount === 1 ? "draw a card" : `draw ${e.amount} cards`;
    case "stowFromDeck":
      return e.amount === 1 ? "put the top card of your deck into your Stores" : `put the top ${e.amount} cards of your deck into your Stores`;
    case "extraStow":
      return `you may Stow ${e.amount} additional ${plural(e.amount, "card")} this turn`;
    case "readyStores":
      return `ready ${e.amount} of your exhausted Stores`;
    case "survey":
      return `Survey ${e.n}`;
    case "damage":
      return `deal ${e.amount} damage to ${targetPhrase(e.target, name).text}`;
    case "modifyStats": {
      const who = targetPhrase(e.target, name);
      return `${who.text} ${who.plural ? "get" : "gets"} ${statPhrase(e.might, e.endurance)}${e.until === "permanent" ? "" : duration(e.until)}`;
    }
    case "grantKeyword": {
      const who = targetPhrase(e.target, name);
      return `${who.text} ${who.plural ? "gain" : "gains"} ${cap(e.keyword)}${duration(e.until)}`;
    }
    case "returnToHarbor": {
      const who = targetPhrase(e.target, name);
      const mine = e.target.t !== "self" && "filter" in e.target && e.target.filter.owner === "you";
      return `return ${who.text} to ${mine || e.target.t === "self" ? "your" : "its owner's"} Harbor`;
    }
    case "extraMarch": {
      const who = targetPhrase(e.target, name);
      return `${who.text} may March again this turn`;
    }
    case "takeFromStores":
      return e.amount === 1 ? "take a random card from your opponent's Stores and put it into your Stores exhausted" : `take ${e.amount} random cards from your opponent's Stores and put them into your Stores exhausted`;
    case "discardFromStores":
      return `your opponent discards ${e.amount} random ${plural(e.amount, "card")} from their Stores`;
    case "discardFromHand":
      return `your opponent discards ${e.amount} random ${plural(e.amount, "card")} from their hand`;
    case "gainRenown":
      if (e.per === "good") return `gain ${e.amount} Renown for each different Good you control`;
      if (e.per === "regionControlled") return `gain ${e.amount} Renown for each Region you control`;
      if (e.per === "crewHere") return `gain ${e.amount} Renown for each of your crews here`;
      return `gain ${e.amount} Renown`;
    case "takeControl":
      return `choose ${targetPhrase(e.target, name).text}. Return your opponent's crews there to their Harbor and take control of it`;
    case "chooseOne":
      return e.options.map((option) => effectsText(option, name)).join(" or ");
  }
}
function effectsText(effects, name) {
  const said = effects.map((e) => effectText(e, name));
  if (said.length <= 1) return said[0] ?? "";
  return said.reduce((all, next, i) => i === 0 ? next : said[i - 1].includes(". ") ? `${all}. ${cap(next)}` : `${all}, then ${next}`, "");
}
function conditionText(c) {
  switch (c.if) {
    case "controlAtLeast":
      return `you control ${c.n} or more Regions`;
    case "controlPositions":
      return `you control ${c.positions.length === 1 ? "Region" : "Regions"} ${c.positions.join(" and ")}`;
    case "outpostRegions":
      return `you control ${c.n} Regions that each have your Outpost`;
    case "goodsAtLeast":
      return c.n === 3 ? "you have all three Goods" : `you have ${c.n} or more different Goods`;
    case "crewsInRegions":
      return `you have crews in ${c.n} different Regions`;
    case "takenAtLeast":
      return `you have taken ${c.n} or more cards from your opponent's Stores this game`;
    case "controlHere":
      return "you control this Region";
    case "controlHereWithGood":
      return "you control this Region and it produces a Good";
    case "crewsHere":
      return `you have ${c.n} or more crews here`;
    case "hazardsControlled":
      return `you control ${c.n} or more Hazard Regions`;
    case "faceUpRegions":
      return `${c.n} or more Regions are face up`;
    case "behind":
      return "you have less Renown than your opponent";
    case "hasFactionCrew": {
      const name = FACTION_NAME[c.faction];
      return `you have ${/^[AEIOU]/.test(name) ? "an" : "a"} ${name} crew in play`;
    }
  }
}
function auraText(a, name) {
  if (a.aura === "taxEntry") return `Your opponent must pay ${a.amount} Supply for each crew that enters this Region.`;
  if (a.aura === "holdMargin") return `You can't lose control of this Region unless your opponent has at least ${a.margin} more Might than you.`;
  if (a.aura === "stowLimit") return `You may Stow ${a.amount} additional ${plural(a.amount, "card")} each turn.`;
  if (a.aura === "playTakenFromStores") return "Cards you take with Raid can be played from your Stores as if they were in your hand.";
  const many = a.subtype ? SUBTYPE_PLURAL[a.subtype] : "crews";
  const who = a.scope === "self" ? name : a.scope === "otherFriendlyHere" ? `Your other ${many} in this Region` : a.scope === "friendlyHere" ? `Your ${many} here` : `Your ${many}`;
  const singular = a.scope === "self";
  if (a.aura === "keyword") return `${who} ${singular ? "has" : "have"} ${cap(a.keyword)}.`;
  return `${who} ${singular ? "gets" : "get"} ${statPhrase(a.might, a.endurance)}.`;
}
function abilityText(ability2, card) {
  const name = card.name;
  if (ability2.on === "static") {
    const body2 = auraText(ability2.aura, name);
    return ability2.if ? `While ${conditionText(ability2.if)}, ${body2.charAt(0).toLowerCase()}${body2.slice(1)}` : body2;
  }
  const body = effectsText(ability2.effects, name);
  const cond2 = ability2.if ? `if ${conditionText(ability2.if)}, ` : "";
  switch (ability2.on) {
    case "onPlay":
      return `${cap(cond2)}${cond2 ? body : cap(body)}.`;
    case "onDeploy":
      return card.type === "outpost" ? `When built, ${cond2}${body}.` : `When you deploy ${name}, ${cond2}${body}.`;
    case "landing":
      return `Landing: ${cond2}${body}.`;
    case "atClaim":
      return `At Claim, ${cond2}${body}.`;
    case "startOfTurn":
      return `At the start of your turn, ${cond2}${body}.`;
    case "onDefeated":
      return `When ${name} is defeated, ${cond2}${body}.`;
    case "onControlGained":
      return `When you take control of a Region while ${name} is there, ${cond2}${body}.`;
    case "onRaid":
      return `Whenever you take a card with Raid, ${cond2}${body}.`;
    case "onFlip":
      return `Whenever a Region is flipped, ${cond2}${body}.`;
    case "onFriendlyEnter":
      return `Whenever another crew of yours enters ${name}'s Region, ${cond2}${body}.`;
  }
}
function renderText(card) {
  const keys = card.keywords.map(cap).join(", ");
  const body = card.abilities.map((a) => abilityText(a, card)).join(" ");
  if (!keys) return body;
  return body ? `${keys}. ${body}` : keys;
}

// packages/cards/src/sets/build.ts
var RARITY = { C: "common", U: "uncommon", R: "rare", L: "legendary" };
var slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function makeSet(faction, specs6) {
  return specs6.map((s) => {
    const card = {
      id: slug(s.name),
      number: `FL-${String(s.n).padStart(3, "0")}`,
      set: "FL",
      name: s.name,
      faction,
      rarity: RARITY[s.r],
      type: s.type,
      subtypes: s.sub ?? [],
      cost: { supply: s.cost, goods: s.goods ?? [] },
      keywords: s.kw ?? [],
      abilities: s.ab ?? [],
      text: "",
      art: `fl-${String(s.n).padStart(3, "0")}.webp`,
      artist: "Meridian Studio (AI-assisted)"
    };
    if (s.type === "crew") {
      card.might = s.m ?? 0;
      card.endurance = s.e ?? 1;
    }
    if (s.flavor) card.flavor = s.flavor;
    if (s.pair) card.pair = s.pair;
    card.text = s.text ?? renderText(card);
    return card;
  });
}
var on = (trigger, ...effects) => ({ on: trigger, effects });
var onIf = (trigger, condition2, ...effects) => ({ on: trigger, if: condition2, effects });
var keywordAura = (keyword2, scope, extra = {}) => ({
  on: "static",
  ...extra.if ? { if: extra.if } : {},
  aura: { aura: "keyword", keyword: keyword2, scope, ...extra.subtype ? { subtype: extra.subtype } : {} }
});
var statAura = (might, endurance, scope, extra = {}) => ({
  on: "static",
  ...extra.if ? { if: extra.if } : {},
  aura: { aura: "stats", scope, ...might ? { might } : {}, ...endurance ? { endurance } : {}, ...extra.subtype ? { subtype: extra.subtype } : {} }
});
var tax = (amount) => ({ on: "static", aura: { aura: "taxEntry", amount } });
var hold = (margin) => ({ on: "static", aura: { aura: "holdMargin", margin } });
var moreStows = (amount) => ({ on: "static", aura: { aura: "stowLimit", amount } });
var playTaken = () => ({ on: "static", aura: { aura: "playTakenFromStores" } });
var cond = {
  control: (n) => ({ if: "controlAtLeast", n }),
  positions: (...positions) => ({ if: "controlPositions", positions }),
  outposts: (n) => ({ if: "outpostRegions", n }),
  goods: (n) => ({ if: "goodsAtLeast", n }),
  spread: (n) => ({ if: "crewsInRegions", n }),
  taken: (n) => ({ if: "takenAtLeast", n }),
  here: () => ({ if: "controlHere" }),
  hereGood: () => ({ if: "controlHereWithGood" }),
  crewsHere: (n) => ({ if: "crewsHere", n }),
  hazards: (n) => ({ if: "hazardsControlled", n }),
  faceUp: (n) => ({ if: "faceUpRegions", n }),
  behind: () => ({ if: "behind" }),
  ally: (faction) => ({ if: "hasFactionCrew", faction })
};
var f = (owner2, where, extra = {}) => ({ owner: owner2, where, ...extra });
var tgt = {
  self: () => ({ t: "self" }),
  entering: () => ({ t: "entering" }),
  yours: (where, extra = {}) => ({ t: "chosenCrew", filter: f("you", where, extra) }),
  enemy: (where, extra = {}) => ({ t: "chosenCrew", filter: f("opponent", where, extra) }),
  any: (where, extra = {}) => ({ t: "chosenCrew", filter: f("any", where, extra) }),
  all: (owner2, where, extra = {}) => ({ t: "allCrews", filter: f(owner2, where, extra) }),
  inRegion: (owner2, region) => ({ t: "crewsInChosenRegion", owner: owner2, region }),
  region: (region) => ({ t: "chosenRegion", region })
};
var fx = {
  draw: (amount, who) => who ? { do: "draw", amount, who } : { do: "draw", amount },
  stow: (amount) => ({ do: "stowFromDeck", amount }),
  extraStow: (amount) => ({ do: "extraStow", amount }),
  ready: (amount) => ({ do: "readyStores", amount }),
  survey: (n) => ({ do: "survey", n }),
  damage: (amount, target2) => ({ do: "damage", amount, target: target2 }),
  stats: (might, endurance, until2, target2) => ({ do: "modifyStats", ...might ? { might } : {}, ...endurance ? { endurance } : {}, until: until2, target: target2 }),
  grant: (keyword2, until2, target2) => ({ do: "grantKeyword", keyword: keyword2, until: until2, target: target2 }),
  harbor: (target2) => ({ do: "returnToHarbor", target: target2 }),
  march: (target2) => ({ do: "extraMarch", target: target2 }),
  take: (amount) => ({ do: "takeFromStores", amount }),
  burnStores: (amount) => ({ do: "discardFromStores", amount }),
  burnHand: (amount) => ({ do: "discardFromHand", amount }),
  renown: (amount, per) => per ? { do: "gainRenown", amount, per } : { do: "gainRenown", amount },
  takeControl: (region) => ({ do: "takeControl", target: { t: "chosenRegion", region } }),
  choose: (...options) => ({ do: "chooseOne", options })
};

// packages/cards/src/sets/aldmoor.ts
var specs = [
  /* ----- Commons ----- */
  {
    n: 65,
    name: "Admiralty Cartographer",
    r: "C",
    type: "crew",
    sub: ["scholar"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [on("onDeploy", fx.survey(1))],
    flavor: "Every line she draws is a line someone else can't."
  },
  {
    n: 66,
    name: "Survey Cutter Crew",
    r: "C",
    type: "crew",
    sub: ["sailor"],
    cost: 2,
    m: 2,
    e: 1,
    kw: ["swift"],
    ab: [on("landing", fx.draw(1))],
    text: "Swift. Landing: draw a card.",
    flavor: "First boat in, first to know."
  },
  {
    n: 67,
    name: "Chart the Unknown",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.survey(2))],
    text: "Survey 2."
  },
  {
    n: 68,
    name: "Royal Marines",
    r: "C",
    type: "crew",
    sub: ["soldier", "sailor"],
    cost: 3,
    m: 2,
    e: 3,
    kw: ["swift"],
    flavor: "Over the rail and up the beach before the drums stop."
  },
  {
    n: 69,
    name: "Midshipman Lookout",
    r: "C",
    type: "crew",
    sub: ["sailor", "scout"],
    cost: 1,
    m: 1,
    e: 1,
    kw: ["scout"],
    ab: [on("landing", fx.draw(1))],
    flavor: "Fourteen years old and already the best eyes aboard."
  },
  {
    n: 70,
    name: "Naturalist's Assistant",
    r: "C",
    type: "crew",
    sub: ["scholar"],
    cost: 1,
    m: 0,
    e: 2,
    ab: [on("landing", fx.stow(1))],
    flavor: "Carries the nets, the jars, and the blame."
  },
  {
    n: 71,
    name: "Ship's Boat Party",
    r: "C",
    type: "crew",
    sub: ["sailor"],
    cost: 2,
    m: 2,
    e: 2,
    ab: [on("landing", fx.draw(1))]
  },
  {
    n: 72,
    name: "Mapping Party",
    r: "C",
    type: "crew",
    sub: ["scout", "scholar"],
    cost: 3,
    m: 2,
    e: 4,
    kw: ["scout"],
    flavor: "Chain, compass, and blistered feet."
  },
  {
    n: 73,
    name: "Admiralty Pilot",
    r: "C",
    type: "crew",
    sub: ["sailor"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [on("onDeploy", fx.march(tgt.yours("anywhere")))],
    flavor: "She knows every sandbar by its first name."
  },
  { n: 74, name: "Telescope Watch", r: "C", type: "crew", sub: ["scout"], cost: 2, m: 1, e: 3, kw: ["scout", "hardy"] },
  {
    n: 75,
    name: "Fair Winds",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.march(tgt.yours("anywhere")), fx.draw(1))]
  },
  {
    n: 76,
    name: "Lighthouse",
    r: "C",
    type: "outpost",
    cost: 2,
    ab: [onIf("startOfTurn", cond.faceUp(4), fx.draw(1))],
    flavor: "A light for friends. A landmark for the charts."
  },
  {
    n: 77,
    name: "Broadside Warning",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(0, 2, "round", tgt.inRegion("you", { yourCrewThere: true })))]
  },
  {
    n: 78,
    name: "Log of Discoveries",
    r: "C",
    type: "venture",
    cost: 1,
    ab: [onIf("atClaim", cond.faceUp(5), fx.renown(3))],
    flavor: "Every page a new name on the map."
  },
  {
    n: 79,
    name: "Signal Station",
    r: "C",
    type: "outpost",
    cost: 1,
    ab: [keywordAura("scout", "friendlyHere"), on("onDeploy", fx.draw(1))]
  },
  {
    n: 80,
    name: "Base Camp",
    r: "C",
    type: "outpost",
    cost: 2,
    ab: [statAura(0, 1, "friendlyHere")],
    flavor: "Tents, a flag, and a cook who swears he has seen worse."
  },
  /* ----- Uncommons ----- */
  {
    n: 81,
    name: "Naturalist's Expedition",
    r: "U",
    type: "venture",
    cost: 2,
    ab: [onIf("atClaim", cond.spread(3), fx.renown(3))],
    text: "At Claim, if you have crews in 3 different Regions, gain 3 Renown."
  },
  {
    n: 82,
    name: "Admiralty Liaison",
    r: "U",
    type: "crew",
    sub: ["officer"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [onIf("onDeploy", cond.ally("castavar"), fx.survey(2))],
    pair: "castavar",
    flavor: "Lend us your swords, and we will tell you where to point them."
  },
  {
    n: 83,
    name: "Marine Detachment",
    r: "U",
    type: "crew",
    sub: ["soldier", "sailor"],
    cost: 3,
    m: 3,
    e: 2,
    kw: ["swift"],
    ab: [statAura(0, 2, "self", { if: cond.ally("castavar") })],
    pair: "castavar"
  },
  {
    n: 84,
    name: "Company Mapmaker",
    r: "U",
    type: "crew",
    sub: ["scholar", "merchant"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [onIf("onDeploy", cond.ally("hollen"), fx.draw(2))],
    pair: "hollen",
    flavor: "Her maps are accurate. Her invoices, less so."
  },
  {
    n: 85,
    name: "Privateer Lookout",
    r: "U",
    type: "crew",
    sub: ["sailor", "rogue"],
    cost: 2,
    m: 2,
    e: 1,
    kw: ["swift", "scout"],
    ab: [statAura(1, 0, "self", { if: cond.ally("captains") })],
    pair: "captains"
  },
  {
    n: 86,
    name: "Smugglers' Charts",
    r: "U",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.draw(1)), onIf("onPlay", cond.ally("captains"), fx.take(1))],
    pair: "captains"
  },
  {
    n: 87,
    name: "Royal Society Fellow",
    r: "U",
    type: "crew",
    sub: ["scholar"],
    cost: 3,
    m: 1,
    e: 3,
    ab: [on("onFlip", fx.stow(1))],
    flavor: "Each new coast is a new paper for the Society."
  },
  {
    n: 88,
    name: "Swift Packet",
    r: "U",
    type: "crew",
    sub: ["sailor"],
    cost: 3,
    m: 2,
    e: 2,
    kw: ["swift"],
    ab: [on("onDeploy", fx.draw(1))],
    flavor: "Carries the post, the orders, and the gossip."
  },
  {
    n: 89,
    name: "Wind Shift",
    r: "U",
    type: "order",
    cost: 2,
    kw: ["ambush"],
    ab: [on("onPlay", fx.harbor(tgt.yours("contested")), fx.draw(1))]
  },
  /* ----- Rares ----- */
  {
    n: 90,
    name: "Observatory",
    r: "R",
    type: "outpost",
    cost: 3,
    goods: ["timber"],
    ab: [on("startOfTurn", fx.choose([fx.survey(1)], [fx.draw(1)]))],
    text: "At the start of your turn, Survey 1 or draw a card."
  },
  {
    n: 91,
    name: "Hydrographer Royal",
    r: "R",
    type: "crew",
    sub: ["scholar", "officer"],
    cost: 3,
    m: 2,
    e: 3,
    kw: ["scout"],
    ab: [onIf("landing", cond.ally("hollen"), fx.stow(2))],
    pair: "hollen"
  },
  {
    n: 92,
    name: "Beyond the Meridian",
    r: "R",
    type: "venture",
    cost: 3,
    ab: [onIf("atClaim", cond.spread(4), fx.renown(5))],
    flavor: "Past the last line on the last chart."
  },
  {
    n: 93,
    name: "Expedition Leader",
    r: "R",
    type: "crew",
    sub: ["officer"],
    cost: 4,
    m: 3,
    e: 4,
    ab: [statAura(1, 0, "otherFriendlyHere")],
    flavor: "She has never lost a man to the land. Only to boredom."
  },
  {
    n: 94,
    name: "Full Sail",
    r: "R",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.march(tgt.inRegion("you", { yourCrewThere: true })))]
  },
  /* ----- Legendaries ----- */
  {
    n: 95,
    name: "Commodore Ada Whitlock",
    r: "L",
    type: "crew",
    sub: ["officer", "sailor"],
    cost: 4,
    m: 3,
    e: 3,
    kw: ["swift"],
    ab: [on("landing", fx.survey(2))],
    flavor: "She sighted Auralis first. She means to chart it first."
  },
  {
    n: 96,
    name: "Dr. Silas Fenwick, Naturalist",
    r: "L",
    type: "crew",
    sub: ["scholar"],
    cost: 3,
    m: 1,
    e: 4,
    ab: [on("onFlip", fx.draw(1))],
    text: "Whenever a Region is flipped, draw a card.",
    flavor: '"Another beetle no one has named. Splendid."'
  }
];
var ALDMOOR = makeSet("aldmoor", specs);

// packages/cards/src/sets/captains.ts
var specs2 = [
  /* ----- Commons ----- */
  {
    n: 97,
    name: "Shoals Cutthroat",
    r: "C",
    type: "crew",
    sub: ["rogue"],
    cost: 1,
    m: 2,
    e: 1,
    kw: ["swift"],
    flavor: "In, out, and gone with your purse."
  },
  {
    n: 98,
    name: "Powder Monkey",
    r: "C",
    type: "crew",
    sub: ["rogue"],
    cost: 2,
    m: 1,
    e: 1,
    ab: [on("onDefeated", fx.damage(2, tgt.any("here")))],
    flavor: "Mind the fuse. He doesn't."
  },
  {
    n: 99,
    name: "Cut and Run",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.harbor(tgt.yours("contested")))],
    text: "Ambush. Return one of your crews in a Clash to your Harbor."
  },
  {
    n: 100,
    name: "Boarding Party",
    r: "C",
    type: "crew",
    sub: ["rogue", "sailor"],
    cost: 3,
    m: 3,
    e: 2,
    kw: ["swift", "raid"],
    text: "Swift, Raid",
    flavor: "Grapples, cutlasses, and no plan for the way back."
  },
  {
    n: 101,
    name: "Bilge Rats",
    r: "C",
    type: "crew",
    sub: ["rogue"],
    cost: 1,
    m: 1,
    e: 1,
    kw: ["raid"],
    flavor: "They'll steal the nails out of your stockade."
  },
  { n: 102, name: "Cutlass Crew", r: "C", type: "crew", sub: ["rogue", "sailor"], cost: 2, m: 3, e: 1, kw: ["raid"] },
  {
    n: 103,
    name: "Smuggler Sloop Crew",
    r: "C",
    type: "crew",
    sub: ["sailor", "rogue"],
    cost: 2,
    m: 2,
    e: 1,
    kw: ["swift"],
    ab: [on("landing", fx.draw(1))],
    flavor: "Every cove has a secret, and they know most of them."
  },
  {
    n: 104,
    name: "Marooned Gunners",
    r: "C",
    type: "crew",
    sub: ["mercenary"],
    cost: 3,
    m: 4,
    e: 3,
    flavor: "Left on a beach with a cannon and a grudge."
  },
  {
    n: 105,
    name: "Grapeshot",
    r: "C",
    type: "order",
    cost: 2,
    kw: ["ambush"],
    ab: [on("onPlay", fx.damage(1, tgt.all("opponent", "contested")))]
  },
  {
    n: 106,
    name: "Plunder",
    r: "C",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.take(1))],
    flavor: "Finders keepers."
  },
  {
    n: 107,
    name: "Pistol Shot",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.damage(1, tgt.enemy("contested")))]
  },
  {
    n: 108,
    name: "Smugglers' Hideout",
    r: "C",
    type: "outpost",
    cost: 2,
    ab: [on("onDeploy", fx.take(1))],
    flavor: "A cave, a lantern, and other people's cargo."
  },
  {
    n: 109,
    name: "Lookout on the Mast",
    r: "C",
    type: "crew",
    sub: ["sailor", "scout"],
    cost: 1,
    m: 1,
    e: 2,
    kw: ["scout"],
    flavor: `"Sail ho! And she's riding low with treasure!"`
  },
  {
    n: 110,
    name: "Fever-Proof Buccaneer",
    r: "C",
    type: "crew",
    sub: ["rogue"],
    cost: 3,
    m: 3,
    e: 4,
    kw: ["hardy"],
    flavor: "Survived the marsh, the scurvy and three hangings."
  },
  {
    n: 111,
    name: "Prize Money",
    r: "C",
    type: "venture",
    cost: 1,
    ab: [onIf("atClaim", cond.taken(2), fx.renown(2))],
    flavor: "Shares by the Articles: one for each hand, two for the captain."
  },
  {
    n: 112,
    name: "Coast Wreckers",
    r: "C",
    type: "crew",
    sub: ["rogue"],
    cost: 3,
    m: 2,
    e: 3,
    ab: [on("landing", fx.take(1))],
    flavor: "False lights on the rocks, and the sea does the rest."
  },
  /* ----- Uncommons ----- */
  {
    n: 113,
    name: "Black Market",
    r: "U",
    type: "outpost",
    cost: 2,
    goods: ["gold"],
    ab: [on("onRaid", fx.draw(1))],
    text: "Whenever you take a card with Raid, draw a card."
  },
  {
    n: 114,
    name: "Articles of the Shoals",
    r: "U",
    type: "venture",
    cost: 1,
    ab: [onIf("atClaim", cond.taken(3), fx.renown(4))],
    text: "At Claim, if you have taken 3 or more cards from your opponent's Stores this game, gain 4 Renown."
  },
  {
    n: 115,
    name: "Turncoat Soldiers",
    r: "U",
    type: "crew",
    sub: ["soldier", "rogue"],
    cost: 2,
    m: 2,
    e: 1,
    kw: ["swift"],
    ab: [statAura(0, 2, "self", { if: cond.ally("castavar") })],
    pair: "castavar",
    flavor: "Castavari drill, pirate pay."
  },
  {
    n: 116,
    name: "Contraband Runners",
    r: "U",
    type: "crew",
    sub: ["rogue", "merchant"],
    cost: 2,
    m: 1,
    e: 2,
    kw: ["swift"],
    ab: [onIf("landing", cond.ally("hollen"), fx.stow(2))],
    pair: "hollen"
  },
  {
    n: 117,
    name: "Fence",
    r: "U",
    type: "crew",
    sub: ["rogue", "merchant"],
    cost: 2,
    m: 1,
    e: 3,
    ab: [onIf("onRaid", cond.ally("hollen"), fx.ready(2))],
    pair: "hollen",
    flavor: "Stolen at noon, sold by supper."
  },
  {
    n: 118,
    name: "Shadowing Sloop",
    r: "U",
    type: "crew",
    sub: ["sailor", "rogue"],
    cost: 3,
    m: 2,
    e: 3,
    kw: ["raid"],
    ab: [keywordAura("swift", "self", { if: cond.ally("aldmoor") })],
    pair: "aldmoor",
    flavor: "Follow the Admiralty. They always find the good coves first."
  },
  {
    n: 119,
    name: "Quartermaster of the Shoals",
    r: "U",
    type: "crew",
    sub: ["rogue", "officer"],
    cost: 3,
    m: 2,
    e: 3,
    ab: [keywordAura("raid", "otherFriendlyHere")],
    flavor: "She decides who gets what. Everyone gets something."
  },
  {
    n: 120,
    name: "Mutiny",
    r: "U",
    type: "order",
    cost: 2,
    kw: ["ambush"],
    ab: [on("onPlay", fx.harbor(tgt.enemy("contested")))]
  },
  { n: 121, name: "Sea Wolf", r: "U", type: "crew", sub: ["rogue", "sailor"], cost: 4, m: 4, e: 3, kw: ["swift", "raid"] },
  /* ----- Rares ----- */
  {
    n: 122,
    name: "Renegade Hidalgo",
    r: "R",
    type: "crew",
    sub: ["officer", "rogue"],
    cost: 3,
    m: 3,
    e: 3,
    kw: ["raid"],
    ab: [onIf("onControlGained", cond.ally("castavar"), fx.renown(2))],
    pair: "castavar",
    flavor: "He swore an oath to the Crown once. He swore a better one to the Shoals."
  },
  {
    n: 123,
    name: "Phantom Fleet",
    r: "R",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.march(tgt.inRegion("you", { yourCrewThere: true }))), onIf("onPlay", cond.ally("aldmoor"), fx.draw(2))],
    pair: "aldmoor"
  },
  {
    n: 124,
    name: "Corsair Captain",
    r: "R",
    type: "crew",
    sub: ["officer", "rogue"],
    cost: 4,
    m: 4,
    e: 4,
    ab: [statAura(1, 0, "otherFriendlyHere", { subtype: "rogue" })]
  },
  {
    n: 125,
    name: "Night Raid",
    r: "R",
    type: "order",
    cost: 3,
    kw: ["ambush"],
    ab: [on("onPlay", fx.damage(2, tgt.enemy("contested")), fx.take(1))]
  },
  {
    n: 126,
    name: "Treasure Map",
    r: "R",
    type: "venture",
    cost: 2,
    ab: [onIf("atClaim", cond.taken(5), fx.renown(6))],
    flavor: "X marks someone else's spot."
  },
  /* ----- Legendaries ----- */
  {
    n: 127,
    name: "Red Maren, Queen of the Shoals",
    r: "L",
    type: "crew",
    sub: ["rogue", "officer"],
    cost: 4,
    m: 4,
    e: 3,
    kw: ["raid"],
    ab: [playTaken()],
    text: "Raid. Cards you take with Raid can be played from your Stores as if they were in your hand.",
    flavor: `"What's yours is mine. What's mine is the Shoals'."`
  },
  {
    n: 128,
    name: "Old Gallows Jack",
    r: "L",
    type: "crew",
    sub: ["rogue"],
    cost: 3,
    m: 3,
    e: 2,
    ab: [on("onDefeated", fx.burnStores(2))],
    flavor: "They hanged him twice. He keeps coming back for the rope."
  }
];
var CAPTAINS = makeSet("captains", specs2);

// packages/cards/src/sets/castavar.ts
var specs3 = [
  /* ----- Commons ----- */
  {
    n: 1,
    name: "Castavar Halberdier",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 2,
    m: 2,
    e: 3,
    kw: ["entrench"],
    flavor: "Plant the butt, lower the blade, and let them come."
  },
  {
    n: 2,
    name: "Tercio Square",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 4,
    m: 3,
    e: 5,
    kw: ["entrench", "escort"],
    flavor: "Three hundred pikes, one will."
  },
  {
    n: 3,
    name: "Hold the Line",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(0, 2, "round", tgt.inRegion("you", { controller: "you", yourCrewThere: true })))],
    text: "Ambush. Your crews in a Region you control get +2 Endurance until end of round."
  },
  {
    n: 4,
    name: "Crown Arquebusier",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 3,
    m: 4,
    e: 3,
    flavor: "Slow to load. Never slow to land."
  },
  {
    n: 5,
    name: "Rodela Swordsman",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 1,
    m: 1,
    e: 2,
    kw: ["entrench"],
    flavor: "A round shield and a short temper."
  },
  {
    n: 6,
    name: "Fever-Hardened Veteran",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 3,
    m: 3,
    e: 4,
    kw: ["hardy"],
    flavor: "He has buried better men in worse marshes."
  },
  {
    n: 7,
    name: "Mission Friar",
    r: "C",
    type: "crew",
    sub: ["scholar"],
    cost: 2,
    m: 1,
    e: 3,
    kw: ["hardy"],
    ab: [on("onDeploy", fx.ready(1))],
    flavor: "He keeps the ledgers, the stores and the peace."
  },
  {
    n: 8,
    name: "Lancer Patrol",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 3,
    m: 3,
    e: 3,
    kw: ["swift"],
    flavor: "The only Castavari in a hurry."
  },
  {
    n: 9,
    name: "Siege Engineer",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 3,
    goods: ["timber"],
    m: 3,
    e: 5,
    kw: ["entrench"],
    flavor: "Give him timber and a week, and the hill is ours forever."
  },
  {
    n: 10,
    name: "Shield Wall",
    r: "C",
    type: "order",
    cost: 2,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(1, 1, "round", tgt.inRegion("you", { controller: "you", yourCrewThere: true })))]
  },
  {
    n: 11,
    name: "Dig In",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.grant("entrench", "round", tgt.yours("map")))],
    flavor: "Spades before supper."
  },
  {
    n: 12,
    name: "Call to Arms",
    r: "C",
    type: "order",
    cost: 3,
    ab: [on("onPlay", fx.stats(2, 0, "round", tgt.inRegion("you", { controller: "you", yourCrewThere: true })))]
  },
  {
    n: 13,
    name: "Vanguard Pioneers",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 2,
    m: 2,
    e: 2,
    ab: [on("landing", fx.grant("entrench", "permanent", tgt.self()))],
    flavor: "First ashore, first to dig."
  },
  {
    n: 14,
    name: "Banner Bearer",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [statAura(0, 1, "otherFriendlyHere", { subtype: "soldier" })],
    flavor: "Where the crimson stands, so do we."
  },
  {
    n: 15,
    name: "Presidio",
    r: "C",
    type: "outpost",
    cost: 3,
    ab: [keywordAura("hardy", "friendlyHere")],
    flavor: "Thick walls, a well, and a priest. Enough to outlast the fever."
  },
  {
    n: 16,
    name: "Long Garrison",
    r: "C",
    type: "venture",
    cost: 1,
    ab: [onIf("atClaim", cond.hazards(2), fx.renown(3))],
    flavor: "Hold the places no one else can stomach."
  },
  /* ----- Uncommons ----- */
  {
    n: 17,
    name: "Conquistador Captain",
    r: "U",
    type: "crew",
    sub: ["officer"],
    cost: 3,
    goods: ["gold"],
    m: 3,
    e: 3,
    ab: [statAura(1, 0, "otherFriendlyHere", { subtype: "soldier" })],
    text: "Your other Soldiers in this Region get +1 Might."
  },
  {
    n: 18,
    name: "Royal Decree",
    r: "U",
    type: "venture",
    cost: 2,
    ab: [onIf("atClaim", cond.outposts(2), fx.renown(4))],
    text: "At Claim, if you control 2 Regions that each have your Outpost, gain 4 Renown."
  },
  {
    n: 19,
    name: "Treasure Fleet Escort",
    r: "U",
    type: "crew",
    sub: ["soldier", "sailor"],
    cost: 3,
    goods: ["gold"],
    m: 2,
    e: 4,
    kw: ["escort"],
    ab: [statAura(2, 0, "self", { if: cond.ally("hollen") })],
    pair: "hollen",
    flavor: "The Concern pays well for an honest guard."
  },
  {
    n: 20,
    name: "Crown Assayer",
    r: "U",
    type: "crew",
    sub: ["merchant", "officer"],
    cost: 2,
    m: 1,
    e: 3,
    ab: [onIf("atClaim", cond.hereGood(), fx.renown(1))],
    pair: "hollen",
    flavor: "Every ounce weighed, every fifth to the Crown."
  },
  {
    n: 21,
    name: "Spearhead Captain",
    r: "U",
    type: "crew",
    sub: ["officer"],
    cost: 3,
    m: 3,
    e: 3,
    ab: [statAura(1, 1, "self", { if: cond.faceUp(4) })],
    pair: "aldmoor",
    flavor: "Show me the map, and I will take the best of it."
  },
  {
    n: 22,
    name: "Storm the Breach",
    r: "U",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.stats(2, 0, "round", tgt.inRegion("you", { controller: "notYou", yourCrewThere: true })))],
    pair: "captains"
  },
  {
    n: 23,
    name: "Sackmaster Sergeant",
    r: "U",
    type: "crew",
    sub: ["soldier"],
    cost: 3,
    m: 3,
    e: 3,
    ab: [onIf("onControlGained", cond.ally("captains"), fx.take(1))],
    pair: "captains",
    flavor: "The Crown takes the town. He takes the town's silver."
  },
  {
    n: 24,
    name: "Star Fort",
    r: "U",
    type: "outpost",
    cost: 3,
    goods: ["timber"],
    ab: [statAura(1, 0, "friendlyHere")],
    flavor: "Five points, no blind angle."
  },
  {
    n: 25,
    name: "Veteran of the Old Wars",
    r: "U",
    type: "crew",
    sub: ["soldier"],
    cost: 4,
    m: 4,
    e: 4,
    kw: ["entrench", "hardy"],
    flavor: "Twenty years of the Old Shore taught him one thing: stay."
  },
  /* ----- Rares ----- */
  {
    n: 26,
    name: "Bastion of the Crown",
    r: "R",
    type: "outpost",
    cost: 3,
    goods: ["timber"],
    ab: [onIf("atClaim", cond.here(), fx.renown(1))],
    text: "At Claim, if you control this Region, gain 1 Renown."
  },
  {
    n: 27,
    name: "Adelantado Serrano",
    r: "R",
    type: "crew",
    sub: ["officer"],
    cost: 4,
    m: 3,
    e: 5,
    ab: [onIf("landing", cond.ally("aldmoor"), fx.grant("entrench", "permanent", tgt.all("you", "here")))],
    pair: "aldmoor",
    flavor: "The Admiralty finds the coast. Castavar keeps it."
  },
  {
    n: 28,
    name: "Iron Cuirassiers",
    r: "R",
    type: "crew",
    sub: ["soldier"],
    cost: 5,
    m: 5,
    e: 6,
    kw: ["entrench", "escort"],
    flavor: "Steel from crown to spur."
  },
  {
    n: 29,
    name: "Unbroken Square",
    r: "R",
    type: "order",
    cost: 2,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(2, 2, "round", tgt.inRegion("you", { controller: "you", yourCrewThere: true })))]
  },
  {
    n: 30,
    name: "Charter of Conquest",
    r: "R",
    type: "venture",
    cost: 3,
    ab: [onIf("atClaim", cond.control(4), fx.renown(5))],
    flavor: "Signed in the King's own hand, and in the blood of whoever disagrees."
  },
  /* ----- Legendaries ----- */
  {
    n: 31,
    name: "Captain-General Ilario Vendaro",
    r: "L",
    type: "crew",
    sub: ["officer", "soldier"],
    cost: 5,
    m: 4,
    e: 5,
    kw: ["entrench"],
    ab: [on("onFriendlyEnter", fx.grant("entrench", "permanent", tgt.entering()))],
    flavor: "Where he stands, Castavar stands."
  },
  {
    n: 32,
    name: "The Iron Viceroy",
    r: "L",
    type: "outpost",
    cost: 4,
    goods: ["gold"],
    ab: [hold(3)],
    text: "You can't lose control of this Region unless your opponent has at least 3 more Might than you."
  }
];
var CASTAVAR = makeSet("castavar", specs3);

// packages/cards/src/sets/hollen.ts
var specs4 = [
  /* ----- Commons ----- */
  {
    n: 33,
    name: "Company Factor",
    r: "C",
    type: "crew",
    sub: ["merchant"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [onIf("atClaim", cond.hereGood(), fx.stow(1))],
    text: "At Claim, if you control this Region and it produces a Good, put the top card of your deck into your Stores."
  },
  {
    n: 34,
    name: "Concern Musketeers",
    r: "C",
    type: "crew",
    sub: ["soldier", "mercenary"],
    cost: 3,
    goods: ["gold"],
    m: 4,
    e: 3,
    kw: ["escort"],
    flavor: "Paid monthly. Loyal weekly."
  },
  {
    n: 35,
    name: "Trading Post",
    r: "C",
    type: "outpost",
    cost: 2,
    ab: [on("onDeploy", fx.stow(1))],
    text: "When built, put the top card of your deck into your Stores."
  },
  {
    n: 36,
    name: "Company Clerk",
    r: "C",
    type: "crew",
    sub: ["merchant"],
    cost: 1,
    m: 0,
    e: 2,
    ab: [on("onDeploy", fx.stow(1))],
    flavor: "Ink, quill, and an eye for a short crate."
  },
  {
    n: 37,
    name: "Contract Pikemen",
    r: "C",
    type: "crew",
    sub: ["mercenary"],
    cost: 2,
    goods: ["timber"],
    m: 2,
    e: 4,
    kw: ["entrench"],
    flavor: "They hold the line exactly as long as the contract says."
  },
  {
    n: 38,
    name: "Spice Porters",
    r: "C",
    type: "crew",
    sub: ["merchant"],
    cost: 2,
    goods: ["spice"],
    m: 2,
    e: 3,
    ab: [on("landing", fx.stow(1))],
    flavor: "Every sack ashore is a sack sold."
  },
  {
    n: 39,
    name: "Gold Guard",
    r: "C",
    type: "crew",
    sub: ["soldier", "mercenary"],
    cost: 4,
    goods: ["gold"],
    m: 5,
    e: 5,
    flavor: "The best soldiers money can rent."
  },
  {
    n: 40,
    name: "Warehouse Watch",
    r: "C",
    type: "crew",
    sub: ["soldier"],
    cost: 2,
    m: 2,
    e: 3,
    kw: ["hardy"],
    flavor: "Damp, dull, and well paid."
  },
  {
    n: 41,
    name: "Company Surgeon",
    r: "C",
    type: "crew",
    sub: ["scholar"],
    cost: 3,
    m: 1,
    e: 4,
    kw: ["hardy"],
    ab: [keywordAura("hardy", "otherFriendlyHere")],
    flavor: "Quinine is cheaper than replacements."
  },
  {
    n: 42,
    name: "Dividend Payment",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.ready(2))],
    flavor: "The shareholders smile, and the crews eat."
  },
  {
    n: 43,
    name: "Inventory",
    r: "C",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.stow(2))]
  },
  {
    n: 44,
    name: "Market Day",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.draw(1), fx.extraStow(1))]
  },
  {
    n: 45,
    name: "Paid Escort",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(1, 0, "round", tgt.inRegion("you", { controller: "you", yourCrewThere: true })))]
  },
  {
    n: 46,
    name: "Counting House",
    r: "C",
    type: "outpost",
    cost: 2,
    goods: ["gold"],
    ab: [onIf("atClaim", cond.here(), fx.stow(1))],
    flavor: "Gold in, ledgers out."
  },
  {
    n: 47,
    name: "Company Venture",
    r: "C",
    type: "venture",
    cost: 1,
    ab: [onIf("atClaim", cond.goods(2), fx.renown(2))],
    flavor: "Two trades are a business. Three are a monopoly."
  },
  {
    n: 48,
    name: "Coastal Factor",
    r: "C",
    type: "crew",
    sub: ["merchant", "sailor"],
    cost: 2,
    m: 1,
    e: 2,
    kw: ["swift"],
    ab: [on("landing", fx.stow(1))],
    flavor: "First to the beach, first to the bargain."
  },
  /* ----- Uncommons ----- */
  {
    n: 49,
    name: "Charter of Monopoly",
    r: "U",
    type: "outpost",
    cost: 3,
    goods: ["spice"],
    ab: [tax(1)],
    text: "Your opponent must pay 1 Supply for each crew that enters this Region."
  },
  {
    n: 50,
    name: "Quarterly Dividend",
    r: "U",
    type: "venture",
    cost: 2,
    ab: [onIf("atClaim", cond.goods(3), fx.renown(3), fx.draw(2))]
  },
  {
    n: 51,
    name: "Ledger Keeper",
    r: "U",
    type: "crew",
    sub: ["merchant", "scholar"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [moreStows(1)],
    flavor: "Every card has a price, and she knows it."
  },
  {
    n: 52,
    name: "Bought Commission",
    r: "U",
    type: "crew",
    sub: ["officer", "mercenary"],
    cost: 3,
    m: 2,
    e: 3,
    kw: ["escort"],
    ab: [statAura(2, 0, "self", { if: cond.ally("castavar") })],
    pair: "castavar",
    flavor: "A Castavari rank, bought with Hollen coin."
  },
  {
    n: 53,
    name: "Chartered Surveyor",
    r: "U",
    type: "crew",
    sub: ["scout", "merchant"],
    cost: 2,
    m: 1,
    e: 2,
    kw: ["scout"],
    ab: [onIf("onDeploy", cond.ally("aldmoor"), fx.survey(1))],
    pair: "aldmoor",
    flavor: "The Admiralty draws the map. The Concern prices it."
  },
  {
    n: 54,
    name: "Joint-Stock Expedition",
    r: "U",
    type: "venture",
    cost: 3,
    ab: [onIf("atClaim", cond.faceUp(4), fx.renown(3))],
    pair: "aldmoor"
  },
  {
    n: 55,
    name: "Smugglers' Broker",
    r: "U",
    type: "crew",
    sub: ["rogue", "merchant"],
    cost: 2,
    m: 1,
    e: 3,
    ab: [on("onRaid", fx.stow(1))],
    pair: "captains",
    flavor: "No questions, fair prices, a cut of everything."
  },
  {
    n: 56,
    name: "Monopoly Agent",
    r: "U",
    type: "crew",
    sub: ["merchant"],
    cost: 3,
    goods: ["spice"],
    m: 2,
    e: 4,
    kw: ["hardy"],
    ab: [onIf("atClaim", cond.hereGood(), fx.draw(1))]
  },
  {
    n: 57,
    name: "Embargo",
    r: "U",
    type: "order",
    cost: 2,
    goods: ["gold"],
    ab: [on("onPlay", fx.burnStores(2))],
    flavor: "No ship sails without a Concern stamp."
  },
  /* ----- Rares ----- */
  {
    n: 58,
    name: "Hostile Buyout",
    r: "R",
    type: "order",
    cost: 4,
    goods: ["gold"],
    ab: [on("onPlay", fx.takeControl({ noEnemyOutpost: true, opponentMightAtMost: 2 }))]
  },
  {
    n: 59,
    name: "Captain of the Treasure Road",
    r: "R",
    type: "crew",
    sub: ["officer"],
    cost: 4,
    goods: ["gold"],
    m: 4,
    e: 4,
    kw: ["escort"],
    ab: [statAura(0, 1, "friendlyHere", { if: cond.ally("castavar") })],
    pair: "castavar",
    flavor: "Castavari steel, Hollen books, and gold all the way to the sea."
  },
  {
    n: 60,
    name: "Black Ledger",
    r: "R",
    type: "order",
    cost: 3,
    ab: [onIf("onPlay", cond.ally("captains"), fx.take(2))],
    pair: "captains",
    flavor: "Some accounts are never audited."
  },
  {
    n: 61,
    name: "Concern Admiral",
    r: "R",
    type: "crew",
    sub: ["sailor", "officer"],
    cost: 5,
    goods: ["gold"],
    m: 5,
    e: 6,
    ab: [on("onDeploy", fx.ready(2))],
    flavor: "He commands the fleet, and the fleet's accounts."
  },
  {
    n: 62,
    name: "Spice Magnate",
    r: "R",
    type: "crew",
    sub: ["merchant"],
    cost: 3,
    goods: ["spice"],
    m: 2,
    e: 3,
    ab: [onIf("atClaim", cond.goods(3), fx.renown(2))]
  },
  /* ----- Legendaries ----- */
  {
    n: 63,
    name: "Director Pieter Hollenbrandt",
    r: "L",
    type: "crew",
    sub: ["merchant", "officer"],
    cost: 4,
    m: 3,
    e: 4,
    ab: [on("atClaim", fx.renown(1, "good"))],
    text: "At Claim, gain 1 Renown for each different Good you control.",
    flavor: "Seventeen shareholders. One opinion."
  },
  {
    n: 64,
    name: "The Golden Fluyt",
    r: "L",
    type: "outpost",
    cost: 3,
    ab: [on("startOfTurn", fx.stow(1))],
    flavor: "The fattest ship on the coast, and every hold full."
  }
];
var HOLLEN = makeSet("hollen", specs4);

// packages/cards/src/sets/neutral.ts
var specs5 = [
  /* ----- Commons ----- */
  {
    n: 129,
    name: "Free Company Pikes",
    r: "C",
    type: "crew",
    sub: ["mercenary"],
    cost: 4,
    m: 4,
    e: 4,
    kw: ["entrench"],
    text: "Entrench",
    flavor: "Every flag pays the same."
  },
  {
    n: 130,
    name: "Shipwreck Survivors",
    r: "C",
    type: "crew",
    sub: ["sailor"],
    cost: 2,
    m: 1,
    e: 2,
    ab: [on("landing", fx.stow(1))],
    text: "Landing: put the top card of your deck into your Stores.",
    flavor: "They lost the ship. They kept the biscuits."
  },
  { n: 131, name: "Hired Musket", r: "C", type: "crew", sub: ["mercenary"], cost: 2, m: 2, e: 2, kw: ["swift"] },
  {
    n: 132,
    name: "Frontier Woodsmen",
    r: "C",
    type: "crew",
    sub: ["scout"],
    cost: 2,
    m: 2,
    e: 3,
    kw: ["scout"],
    flavor: "They read the forest like a ledger."
  },
  {
    n: 133,
    name: "Desperate Stand",
    r: "C",
    type: "order",
    cost: 1,
    kw: ["ambush"],
    ab: [on("onPlay", fx.stats(0, 3, "round", tgt.yours("contested")))]
  },
  {
    n: 134,
    name: "Quinine Bark",
    r: "C",
    type: "order",
    cost: 1,
    ab: [on("onPlay", fx.grant("hardy", "round", tgt.inRegion("you", { yourCrewThere: true })))],
    flavor: "Bitter as regret, worth its weight in gold."
  },
  /* ----- Uncommons ----- */
  {
    n: 135,
    name: "Letter from Home",
    r: "U",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.draw(2))],
    text: "Draw 2 cards.",
    flavor: "News of a world that already feels very far away."
  },
  { n: 136, name: "Sellsword Captain", r: "U", type: "crew", sub: ["mercenary", "officer"], cost: 3, m: 3, e: 3, kw: ["escort", "hardy"] },
  { n: 137, name: "Mercenary Raiders", r: "U", type: "crew", sub: ["mercenary", "rogue"], cost: 3, m: 3, e: 2, kw: ["swift", "raid"] },
  /* ----- Rares ----- */
  {
    n: 138,
    name: "Guild Chart",
    r: "R",
    type: "order",
    cost: 2,
    ab: [on("onPlay", fx.survey(2), fx.draw(1))]
  },
  {
    n: 139,
    name: "Sudden Squall",
    r: "R",
    type: "order",
    cost: 3,
    kw: ["ambush"],
    ab: [on("onPlay", fx.harbor(tgt.all("any", "contested")))],
    flavor: "The sky decides who fights today."
  },
  /* ----- Legendary ----- */
  {
    n: 140,
    name: "The Lost Colony",
    r: "L",
    type: "venture",
    cost: 3,
    ab: [onIf("atClaim", cond.positions(1, 5), fx.renown(6))],
    text: "At Claim, if you control Regions 1 and 5, gain 6 Renown.",
    flavor: "They came before any of us. Where did they go?"
  }
];
var NEUTRAL = makeSet("neutral", specs5);

// packages/cards/src/index.ts
function parseAll(schema, rows, label) {
  return rows.map((row, i) => {
    const parsed = schema.safeParse(row);
    if (!parsed.success) {
      const id = row.id ?? i;
      throw new Error(`${label} ${id}: ${parsed.error.issues.map((q) => `${q.path.join(".")} ${q.message}`).join("; ")}`);
    }
    return parsed.data;
  });
}
var basics = parseAll(cardSchema, BASICS, "basic");
var firstLanding = parseAll(cardSchema, [...CASTAVAR, ...HOLLEN, ...ALDMOOR, ...CAPTAINS, ...NEUTRAL], "card");
var allCards = [...basics, ...firstLanding];
var regions = parseAll(regionSchema, REGIONS, "region");
var factions = FACTIONS;
var registry = /* @__PURE__ */ new Map();
for (const card of allCards) {
  if (registry.has(card.id)) throw new Error(`Duplicate card id ${card.id}`);
  if (card.type === "crew" && (card.might == null || card.endurance == null)) throw new Error(`${card.id} is a crew and needs Might and Endurance`);
  registry.set(card.id, card);
}
var regionIds = /* @__PURE__ */ new Set();
for (const region of regions) {
  if (regionIds.has(region.id)) throw new Error(`Duplicate region id ${region.id}`);
  regionIds.add(region.id);
}
function getCard(id) {
  const card = registry.get(id) ?? extraCards.get(id);
  if (!card) throw new Error(`Unknown card ${id}`);
  return card;
}
function getRegion(id) {
  const region = regions.find((r) => r.id === id);
  if (!region) throw new Error(`Unknown region ${id}`);
  return region;
}
var extraCards = /* @__PURE__ */ new Map();
for (const deck of [basicDeck(), ...STARTER_DECKS.map((d) => d.cards)]) {
  const problems = validateDeck(deck, getCard);
  if (problems.length) throw new Error(`A built-in deck is not legal: ${problems.join(" ")}`);
}

// node_modules/.pnpm/immer@10.2.0/node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function die(error2, ...args) {
  if (true) {
    const e = errors[error2];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error2}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null || proto === Object.prototype)
    return true;
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  if (typeof Ctor !== "function")
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0) {
    const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state2 = thing[DRAFT_STATE];
  return state2 ? state2.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target2) {
  return target2 instanceof Map;
}
function isSet(target2) {
  return target2 instanceof Set;
}
function latest(state2) {
  return state2.copy_ || state2.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    Object.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  Object.freeze(obj);
  if (deep)
    Object.values(obj).forEach((value) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
var dontMutateMethodOverride = {
  value: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || typeof obj !== "object")
    return true;
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state2 = draft[DRAFT_STATE];
  if (state2.type_ === 0 || state2.type_ === 1)
    state2.revoke_();
  else
    state2.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
  const state2 = value[DRAFT_STATE];
  if (!state2) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state2, value, key, childValue, path),
      useStrictIteration
    );
    return value;
  }
  if (state2.scope_ !== rootScope)
    return value;
  if (!state2.modified_) {
    maybeFreeze(rootScope, state2.base_, true);
    return state2.base_;
  }
  if (!state2.finalized_) {
    state2.finalized_ = true;
    state2.scope_.unfinalizedDrafts_--;
    const result = state2.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state2.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(
        rootScope,
        state2,
        result,
        key,
        childValue,
        path,
        isSet2
      ),
      useStrictIteration
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state2,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state2.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue == null) {
    return;
  }
  if (typeof childValue !== "object" && !targetIsSet) {
    return;
  }
  const childIsFrozen = isFrozen(childValue);
  if (childIsFrozen && !targetIsSet) {
    return;
  }
  if (childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !childIsFrozen) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state2 = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target2 = state2;
  let traps = objectTraps;
  if (isArray) {
    target2 = [state2];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target2, traps);
  state2.draft_ = proxy;
  state2.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state2, prop) {
    if (prop === DRAFT_STATE)
      return state2;
    const source = latest(state2);
    if (!has(source, prop)) {
      return readPropFromProto(state2, source, prop);
    }
    const value = source[prop];
    if (state2.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state2.base_, prop)) {
      prepareCopy(state2);
      return state2.copy_[prop] = createProxy(value, state2);
    }
    return value;
  },
  has(state2, prop) {
    return prop in latest(state2);
  },
  ownKeys(state2) {
    return Reflect.ownKeys(latest(state2));
  },
  set(state2, prop, value) {
    const desc = getDescriptorFromProto(latest(state2), prop);
    if (desc?.set) {
      desc.set.call(state2.draft_, value);
      return true;
    }
    if (!state2.modified_) {
      const current2 = peek(latest(state2), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state2.copy_[prop] = value;
        state2.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state2.base_, prop)))
        return true;
      prepareCopy(state2);
      markChanged(state2);
    }
    if (state2.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state2.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state2.copy_[prop]))
      return true;
    state2.copy_[prop] = value;
    state2.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state2, prop) {
    if (peek(state2.base_, prop) !== void 0 || prop in state2.base_) {
      state2.assigned_[prop] = false;
      prepareCopy(state2);
      markChanged(state2);
    } else {
      delete state2.assigned_[prop];
    }
    if (state2.copy_) {
      delete state2.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state2, prop) {
    const owner2 = latest(state2);
    const desc = Reflect.getOwnPropertyDescriptor(owner2, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state2.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner2[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state2) {
    return getPrototypeOf(state2.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state2, prop) {
  if (isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state2, prop, void 0);
};
arrayTraps.set = function(state2, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state2[0], prop, value, state2[0]);
};
function peek(draft, prop) {
  const state2 = draft[DRAFT_STATE];
  const source = state2 ? latest(state2) : draft;
  return source[prop];
}
function readPropFromProto(state2, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state2.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state2) {
  if (!state2.modified_) {
    state2.modified_ = true;
    if (state2.parent_) {
      markChanged(state2.parent_);
    }
  }
}
function prepareCopy(state2) {
  if (!state2.copy_) {
    state2.copy_ = shallowCopy(
      state2.base_,
      state2.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = true;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state2, ...args) => this.produceWithPatches(state2, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (typeof config?.useStrictIteration === "boolean")
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state2 = draft && draft[DRAFT_STATE];
    if (!state2 || !state2.isManual_)
      die(9);
    const { scope_: scope } = state2;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state2 = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state2) {
    if (!state2.modified_)
      return state2.base_;
    state2.finalized_ = true;
    copy = shallowCopy(value, state2.scope_.immer_.useStrictShallowCopy_);
    strict = state2.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state2) {
    state2.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;

// packages/engine/src/types.ts
function other(player) {
  return player === 0 ? 1 : 0;
}

// packages/engine/src/query.ts
function roll(state2) {
  let s = state2.rng >>> 0;
  s = s + 1831565813 >>> 0;
  let t = Math.imul(s ^ s >>> 15, 1 | s);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  state2.rng = (t ^ t >>> 14) >>> 0;
  return state2.rng / 4294967296;
}
function shuffle(list, state2) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(roll(state2) * (i + 1));
    const a = list[i];
    list[i] = list[j];
    list[j] = a;
  }
}
function mint(state2) {
  state2.seq += 1;
  return `i${state2.seq}`;
}
function crewsAt(state2, index) {
  return state2.crews.filter((c) => c.where.zone === "region" && c.where.index === index);
}
function crewsOf(state2, player) {
  return state2.crews.filter((c) => c.owner === player);
}
function findCrew(state2, iid) {
  return state2.crews.find((c) => c.iid === iid);
}
function regionOf(crew) {
  return crew.where.zone === "region" ? crew.where.index : null;
}
function trait(regionId, kind) {
  return getRegion(regionId).traits.find((t) => t.kind === kind);
}
function permanents(state2) {
  const out = state2.crews.map((c) => ({ iid: c.iid, cardId: c.cardId, owner: c.owner, here: regionOf(c), kind: "crew" }));
  state2.regions.forEach((region, index) => {
    if (region.outpost) out.push({ iid: region.outpost.iid, cardId: region.outpost.cardId, owner: region.outpost.owner, here: index, kind: "outpost" });
  });
  return out;
}
function triggered(state2, on2, first, accept = () => true) {
  const found = [];
  for (const player of [first, other(first)]) {
    for (const p of permanents(state2)) {
      if (p.owner !== player || !accept(p)) continue;
      for (const ability2 of getCard(p.cardId).abilities) {
        if (ability2.on !== on2) continue;
        found.push({ ability: ability2, ctx: { player, cardId: p.cardId, sourceIid: p.iid, here: p.here } });
      }
    }
  }
  return found;
}
function controlled(state2, player) {
  return state2.regions.flatMap((r, i) => r.faceUp && r.controller === player ? [i] : []);
}
function goodsOf(state2, player) {
  const goods = /* @__PURE__ */ new Set();
  for (const index of controlled(state2, player)) for (const good2 of getRegion(state2.regions[index].regionId).goods) goods.add(good2);
  return goods;
}
function hasGoods(state2, player, goods) {
  const held = goodsOf(state2, player);
  return goods.every((good2) => held.has(good2));
}
function conditionMet(state2, condition2, player, here) {
  if (!condition2) return true;
  const mine = controlled(state2, player);
  switch (condition2.if) {
    case "controlAtLeast":
      return mine.length >= condition2.n;
    case "controlPositions":
      return condition2.positions.every((p) => mine.includes(p - 1));
    case "outpostRegions":
      return mine.filter((i) => state2.regions[i].outpost?.owner === player).length >= condition2.n;
    case "goodsAtLeast":
      return goodsOf(state2, player).size >= condition2.n;
    case "crewsInRegions":
      return new Set(crewsOf(state2, player).flatMap((c) => c.where.zone === "region" ? [c.where.index] : [])).size >= condition2.n;
    case "takenAtLeast":
      return state2.players[player].taken >= condition2.n;
    case "controlHere":
      return here != null && mine.includes(here);
    case "controlHereWithGood":
      return here != null && mine.includes(here) && getRegion(state2.regions[here].regionId).goods.length > 0;
    case "crewsHere":
      return here != null && crewsAt(state2, here).filter((c) => c.owner === player).length >= condition2.n;
    case "hazardsControlled":
      return mine.filter((i) => getRegion(state2.regions[i].regionId).hazard).length >= condition2.n;
    case "faceUpRegions":
      return state2.regions.filter((r) => r.faceUp).length >= condition2.n;
    case "behind":
      return state2.players[player].renown < state2.players[other(player)].renown;
    case "hasFactionCrew":
      return crewsOf(state2, player).some((c) => getCard(c.cardId).faction === condition2.faction);
  }
}
function auras(state2) {
  const out = [];
  for (const p of permanents(state2)) {
    for (const ability2 of getCard(p.cardId).abilities) {
      if (ability2.on !== "static") continue;
      if (!conditionMet(state2, ability2.if, p.owner, p.here)) continue;
      out.push({ aura: ability2.aura, source: p });
    }
  }
  return out;
}
function auraTouches(live, crew) {
  const a = live.aura;
  if (!("scope" in a)) return false;
  if (crew.owner !== live.source.owner) return false;
  if (a.subtype && !getCard(crew.cardId).subtypes.includes(a.subtype)) return false;
  const here = regionOf(crew);
  switch (a.scope) {
    case "self":
      return crew.iid === live.source.iid;
    case "otherFriendlyHere":
      return crew.iid !== live.source.iid && here != null && here === live.source.here;
    case "friendlyHere":
      return here != null && here === live.source.here;
    case "yourCrews":
      return true;
  }
}
function hasKeyword(state2, crew, keyword2) {
  if (getCard(crew.cardId).keywords.includes(keyword2)) return true;
  if (crew.grants.some((g) => g.keyword === keyword2)) return true;
  const here = regionOf(crew);
  if (keyword2 === "entrench" && here != null) {
    const region = state2.regions[here];
    if (trait(region.regionId, "grantEntrenchToController") && region.controller === crew.owner) return true;
  }
  return auras(state2).some((live) => live.aura.aura === "keyword" && live.aura.keyword === keyword2 && auraTouches(live, crew));
}
function auraStats(state2, crew) {
  let might = 0;
  let endurance = 0;
  for (const live of auras(state2)) {
    if (live.aura.aura !== "stats" || !auraTouches(live, crew)) continue;
    might += live.aura.might ?? 0;
    endurance += live.aura.endurance ?? 0;
  }
  return { might, endurance };
}
function enduranceOf(state2, crew) {
  const base = getCard(crew.cardId).endurance ?? 1;
  return Math.max(1, base + crew.mods.reduce((sum, mod) => sum + mod.endurance, 0) + auraStats(state2, crew).endurance);
}
function crewMight(state2, crew, clash) {
  const base = getCard(crew.cardId).might ?? 0;
  let might = base + crew.mods.reduce((sum, mod) => sum + mod.might, 0) + auraStats(state2, crew).might;
  if (clash && crew.where.zone === "region" && hasKeyword(state2, crew, "entrench")) {
    const held = state2.claim?.controlAtStart[crew.where.index];
    if (held === crew.owner) might += 1;
  }
  return Math.max(0, might);
}
function sideMight(state2, player, index, clash) {
  let sum = crewsAt(state2, index).filter((c) => c.owner === player).reduce((total, crew) => total + crewMight(state2, crew, clash), 0);
  if (clash) {
    const region = state2.regions[index];
    const penalty = region && trait(region.regionId, "strikeMightPenalty");
    if (penalty) sum = Math.max(0, sum - penalty.amount);
  }
  return sum;
}
function entryTax(state2, player, index) {
  const outpost = state2.regions[index]?.outpost;
  if (!outpost || outpost.owner === player) return 0;
  return getCard(outpost.cardId).abilities.reduce((t, a) => t + (a.on === "static" && a.aura.aura === "taxEntry" ? a.aura.amount : 0), 0);
}
function holdMargin(state2, index) {
  const region = state2.regions[index];
  const outpost = region.outpost;
  if (!outpost || outpost.owner !== region.controller) return 0;
  return getCard(outpost.cardId).abilities.reduce((t, a) => Math.max(t, a.on === "static" && a.aura.aura === "holdMargin" ? a.aura.margin : 0), 0);
}
function stowsPerTurn(state2, player) {
  return 1 + auras(state2).reduce((t, live) => t + (live.source.owner === player && live.aura.aura === "stowLimit" ? live.aura.amount : 0), 0);
}
function canPlayTakenFromStores(state2, player) {
  return auras(state2).some((live) => live.source.owner === player && live.aura.aura === "playTakenFromStores");
}
function crewMatches(state2, crew, filter, ctx) {
  if (filter.owner === "you" && crew.owner !== ctx.player) return false;
  if (filter.owner === "opponent" && crew.owner === ctx.player) return false;
  if (filter.other && crew.iid === ctx.sourceIid) return false;
  if (filter.subtype && !getCard(crew.cardId).subtypes.includes(filter.subtype)) return false;
  if (filter.keyword && !hasKeyword(state2, crew, filter.keyword)) return false;
  const here = regionOf(crew);
  switch (filter.where) {
    case "anywhere":
      return true;
    case "here":
      return here != null && here === ctx.here;
    case "contested":
      return here != null && contested(state2, here);
    case "controlled":
      return here != null && state2.regions[here].controller === ctx.player;
    case "harbor":
      return here == null;
    case "map":
      return here != null;
  }
}
function regionMatches(state2, index, filter, player, mustHaveCrewsOf) {
  const region = state2.regions[index];
  if (!region || !region.faceUp) return false;
  const foe = other(player);
  if (filter.controller === "you" && region.controller !== player) return false;
  if (filter.controller === "opponent" && region.controller !== foe) return false;
  if (filter.controller === "none" && region.controller !== null) return false;
  if (filter.controller === "notYou" && region.controller === player) return false;
  if (filter.yourCrewThere && !crewsAt(state2, index).some((c) => c.owner === player)) return false;
  if (filter.contested && !contested(state2, index)) return false;
  if (filter.opponentMightAtMost != null && sideMight(state2, foe, index, false) > filter.opponentMightAtMost) return false;
  if (filter.noEnemyOutpost && region.outpost && region.outpost.owner !== player) return false;
  if (mustHaveCrewsOf != null && !crewsAt(state2, index).some((c) => c.owner === mustHaveCrewsOf)) return false;
  return true;
}
function crewCap(regionId) {
  return trait(regionId, "crewCap")?.n ?? 5;
}
function forbidsHarbor(regionId) {
  return Boolean(trait(regionId, "cantEnterFromHarbor"));
}
function regionsYouCanMarchTo(state2, crew) {
  if (crew.where.zone !== "region") return [];
  const here = crew.where.index;
  const def = getRegion(state2.regions[here].regionId);
  if (def.traits.some((t) => t.kind === "marchAnywhere")) {
    return [0, 1, 2, 3, 4].filter((n) => n !== here);
  }
  const dest = /* @__PURE__ */ new Set();
  if (here > 0) dest.add(here - 1);
  if (here < 4) dest.add(here + 1);
  for (const t of def.traits) {
    if (t.kind !== "marchPlus") continue;
    if (here - t.distance >= 0) dest.add(here - t.distance);
    if (here + t.distance <= 4) dest.add(here + t.distance);
  }
  dest.delete(here);
  return [...dest];
}
function roomFor(state2, player, index) {
  const region = state2.regions[index];
  if (!region) return false;
  const have = crewsAt(state2, index).filter((c) => c.owner === player).length;
  return have < crewCap(region.regionId);
}
function canDeploy(state2, player, index) {
  const region = state2.regions[index];
  if (!region || !region.faceUp || !roomFor(state2, player, index)) return false;
  if (region.controller === player) return true;
  return Boolean(trait(region.regionId, "deployWithoutControl"));
}
function supplyCost(state2, cardId, regionIndex) {
  const card = getCard(cardId);
  let cost = card.cost.supply;
  if (card.type === "outpost" && regionIndex != null) {
    const region = state2.regions[regionIndex];
    const discount = region && trait(region.regionId, "outpostDiscount");
    if (discount) cost = Math.max(0, cost - discount.amount);
  }
  return cost;
}
function readySupply(state2, player) {
  return state2.players[player].stores.filter((s) => !s.exhausted).length;
}
function contested(state2, index) {
  const here = crewsAt(state2, index);
  return here.some((c) => c.owner === 0) && here.some((c) => c.owner === 1);
}
function orderCanTarget(state2, actor, crew) {
  if (crew.owner === actor || crew.where.zone !== "region") return true;
  return !crewsAt(state2, crew.where.index).some(
    (mate) => mate.owner === crew.owner && mate.iid !== crew.iid && hasKeyword(state2, mate, "escort")
  );
}
function adjacent(index) {
  const out = [];
  if (index > 0) out.push(index - 1);
  if (index < 4) out.push(index + 1);
  return out;
}
function scoutSees(state2, player, index) {
  const region = state2.regions[index];
  if (!region || region.faceUp) return false;
  if (trait(region.regionId, "hiddenFromScout")) return false;
  for (const crew of crewsOf(state2, player)) {
    if (!hasKeyword(state2, crew, "scout")) continue;
    if (crew.where.zone === "harbor" && (index === 0 || index === 4)) return true;
    if (crew.where.zone === "region") {
      const here = crew.where.index;
      const def = getRegion(state2.regions[here].regionId);
      if (def.traits.some((t) => t.kind === "marchAnywhere")) return true;
      if (adjacent(here).includes(index)) return true;
    }
  }
  return false;
}

// packages/engine/src/legal.ts
function act(action) {
  return { kind: "act", action };
}
function firstChoice(effects) {
  for (const effect2 of effects) {
    if ("target" in effect2 && effect2.target.t !== "self" && effect2.target.t !== "allCrews" && effect2.target.t !== "entering") return effect2;
  }
  return null;
}
function choicesFor(state2, effect2, ctx, orderFrom) {
  if (!("target" in effect2)) return [{}];
  const t = effect2.target;
  if (t.t === "chosenCrew") {
    return state2.crews.filter((crew) => crewMatches(state2, crew, t.filter, ctx) && (orderFrom == null || orderCanTarget(state2, orderFrom, crew))).map((crew) => ({ target: crew.iid }));
  }
  if (t.t === "crewsInChosenRegion") {
    const whose = t.owner === "you" ? ctx.player : other(ctx.player);
    return [0, 1, 2, 3, 4].filter((i) => regionMatches(state2, i, t.region, ctx.player, whose)).map((region) => ({ region }));
  }
  if (t.t === "chosenRegion") {
    return [0, 1, 2, 3, 4].filter((i) => regionMatches(state2, i, t.region, ctx.player)).map((region) => ({ region }));
  }
  return [{}];
}
function spendable(state2, player, card, fromStores) {
  const ready = readySupply(state2, player);
  if (!fromStores) return ready;
  const self = state2.players[player].stores.find((s) => s.iid === card.iid);
  return self && !self.exhausted ? ready - 1 : ready;
}
function orderPlays(state2, player, card, ambushOnly, fromStores) {
  const def = getCard(card.cardId);
  if (def.type !== "order") return [];
  if (ambushOnly && !def.keywords.includes("ambush")) return [];
  if (!hasGoods(state2, player, def.cost.goods)) return [];
  if (spendable(state2, player, card, fromStores) < supplyCost(state2, def.id)) return [];
  const effects = def.abilities.flatMap((a) => a.on === "onPlay" ? a.effects : []);
  const extra = fromStores ? { fromStores: true } : {};
  const choice = firstChoice(effects);
  if (!choice) return [{ type: "play", iid: card.iid, ...extra }];
  const ctx = { player, cardId: def.id, here: null };
  return choicesFor(state2, choice, ctx, player).map((pick) => ({ type: "play", iid: card.iid, ...pick, ...extra }));
}
function playsFor(state2, player, card, fromStores) {
  const you = state2.players[player];
  const def = getCard(card.cardId);
  if (!hasGoods(state2, player, def.cost.goods)) return [];
  const supply = spendable(state2, player, card, fromStores);
  const extra = fromStores ? { fromStores: true } : {};
  const out = [];
  if (def.type === "crew") {
    const cost = supplyCost(state2, def.id);
    if (supply < cost) return [];
    const dests = [{ zone: "harbor" }];
    for (let index = 0; index < 5; index++) {
      if (canDeploy(state2, player, index) && supply >= cost + entryTax(state2, player, index)) dests.push({ zone: "region", index });
    }
    for (const dest of dests) out.push({ type: "play", iid: card.iid, dest, ...extra });
  } else if (def.type === "order") {
    out.push(...orderPlays(state2, player, card, false, fromStores));
  } else if (def.type === "outpost") {
    for (let index = 0; index < 5; index++) {
      const region = state2.regions[index];
      if (!region.faceUp || region.controller !== player || region.outpost) continue;
      if (!state2.crews.some((c) => c.owner === player && c.where.zone === "region" && c.where.index === index)) continue;
      if (supply < supplyCost(state2, def.id, index)) continue;
      out.push({ type: "play", iid: card.iid, region: index, ...extra });
    }
  } else if (def.type === "venture") {
    if (you.ventures.some((slot) => slot === null) && supply >= supplyCost(state2, def.id)) out.push({ type: "play", iid: card.iid, ...extra });
  }
  return out;
}
function playableStores(state2, player) {
  if (!canPlayTakenFromStores(state2, player)) return [];
  return state2.players[player].stores.filter((s) => s.taken);
}
function commandActions(state2, player) {
  const you = state2.players[player];
  const out = [act({ type: "end" })];
  if (you.stowLeft > 0) {
    for (const card of you.hand) out.push(act({ type: "stow", iid: card.iid }));
  }
  for (const card of you.hand) for (const action of playsFor(state2, player, card, false)) out.push(act(action));
  for (const card of playableStores(state2, player)) for (const action of playsFor(state2, player, card, true)) out.push(act(action));
  const ready = readySupply(state2, player);
  for (const crew of crewsOf(state2, player)) {
    if (crew.marchesLeft <= 0) continue;
    const dests = [];
    if (crew.where.zone === "harbor") {
      for (let index = 0; index < 5; index++) {
        const region = state2.regions[index];
        if (region.faceUp && forbidsHarbor(region.regionId)) continue;
        dests.push(index);
      }
    } else {
      out.push(act({ type: "march", iid: crew.iid, dest: { zone: "harbor" } }));
      dests.push(...regionsYouCanMarchTo(state2, crew));
    }
    for (const index of dests) {
      if (!roomFor(state2, player, index) || ready < entryTax(state2, player, index)) continue;
      out.push(act({ type: "march", iid: crew.iid, dest: { zone: "region", index } }));
    }
  }
  you.ventures.forEach((slot, index) => {
    if (slot) out.push(act({ type: "abandon", slot: index }));
  });
  return out;
}
function getLegalActions(state2, player) {
  if (state2.over) return [];
  const concede = act({ type: "concede", player });
  const decision = state2.decision;
  if (!decision || decision.player !== player) return [concede];
  switch (decision.type) {
    case "mulligan":
      return [concede, { kind: "subset", actionType: "mulligan", options: state2.players[player].hand.map((c) => c.iid), min: 0, max: state2.players[player].hand.length }];
    case "discard": {
      const hand = state2.players[player].hand;
      return [concede, { kind: "subset", actionType: "discard", options: hand.map((c) => c.iid), min: hand.length - 8, max: hand.length - 8 }];
    }
    case "surveyLook":
      return [concede, { kind: "subset", actionType: "surveyLook", options: decision.options, min: 0, max: Math.min(decision.max, decision.options.length) }];
    case "surveyFlip":
      return [concede, { kind: "subset", actionType: "surveyFlip", options: decision.options, min: 0, max: decision.options.length }];
    case "command":
      return [concede, ...commandActions(state2, player)];
    case "ambush": {
      const orders = [act({ type: "pass" })];
      for (const card of state2.players[player].hand) for (const action of orderPlays(state2, player, card, true, false)) orders.push(act(action));
      for (const card of playableStores(state2, player)) for (const action of orderPlays(state2, player, card, true, true)) orders.push(act(action));
      return [concede, ...orders];
    }
    case "assign":
      return [concede, { kind: "assign", targets: decision.targets, amount: decision.amount }];
    case "pick":
      return [concede, ...decision.options.map((choice) => act({ type: "pick", choice }))];
    case "choose":
      return [concede, ...decision.options.map((_, index) => act({ type: "choose", index }))];
  }
}

// packages/engine/src/apply.ts
function draw(state2, player, amount, events) {
  const you = state2.players[player];
  const drawn = [];
  for (let n = 0; n < amount; n++) {
    const cardId = you.deck.shift();
    if (!cardId) {
      const foe = other(player);
      state2.players[foe].renown += 2;
      events.push({ type: "deckout", player }, { type: "renown", player: foe, amount: 2, reason: "deck" });
    } else {
      you.hand.push({ iid: mint(state2), cardId });
      drawn.push(cardId);
    }
  }
  if (drawn.length) events.push({ type: "draw", player, amount: drawn.length, cardIds: drawn });
}
function stowFromDeck(state2, player, amount) {
  for (let n = 0; n < amount; n++) {
    const cardId = state2.players[player].deck.shift();
    if (cardId) state2.players[player].stores.push({ iid: mint(state2), cardId, exhausted: false });
  }
}
function queueTriggers(state2, on2, first, accept, extra = {}, front = false) {
  const items = triggered(state2, on2, first, accept).map(({ ability: ability2, ctx }) => ({ op: "ability", ability: ability2, ctx: { ...ctx, ...extra } }));
  if (front) state2.queue.unshift(...items);
  else state2.queue.push(...items);
}
function defeat(state2, iid, events) {
  const crew = findCrew(state2, iid);
  if (!crew) return;
  const here = regionOf(crew);
  const last = getCard(crew.cardId).abilities.flatMap((a) => a.on === "onDefeated" ? [a] : []);
  state2.players[crew.owner].discard.push({ iid: crew.iid, cardId: crew.cardId });
  state2.crews = state2.crews.filter((c) => c.iid !== iid);
  events.push({ type: "defeat", iid, owner: crew.owner, cardId: crew.cardId });
  for (const ability2 of last) state2.queue.push({ op: "ability", ability: ability2, ctx: { player: crew.owner, cardId: crew.cardId, here } });
}
function damageCrew(state2, iid, amount, source, events) {
  const crew = findCrew(state2, iid);
  if (!crew || amount <= 0) return;
  if (source === "region" && hasKeyword(state2, crew, "hardy")) {
    events.push({ type: "damage", iid, amount: 0, prevented: true });
    return;
  }
  crew.damage += amount;
  events.push({ type: "damage", iid, amount });
  if (source !== "strike" && crew.damage >= enduranceOf(state2, crew)) defeat(state2, iid, events);
}
function surveyOptions(state2) {
  const options = [];
  state2.regions.forEach((region, index) => {
    if (!region.faceUp && !trait(region.regionId, "hiddenFromScout")) options.push(index);
  });
  return options;
}
function flipRegion(state2, index, player, events, lander) {
  const region = state2.regions[index];
  if (!region || region.faceUp) return [];
  region.faceUp = true;
  events.push({ type: "flip", index, regionId: region.regionId, player });
  const out = [];
  for (const t of getRegion(region.regionId).traits) {
    if (t.kind !== "whenRevealed") continue;
    for (const effect2 of t.effects) out.push({ op: "effect", effect: effect2, ctx: { player, cardId: region.regionId, here: index } });
  }
  if (lander) {
    for (const ability2 of getCard(lander.cardId).abilities) {
      if (ability2.on === "landing") out.push({ op: "ability", ability: ability2, ctx: { player, cardId: lander.cardId, sourceIid: lander.iid, here: index } });
    }
  }
  out.push(...triggered(state2, "onFlip", player).map(({ ability: ability2, ctx }) => ({ op: "ability", ability: ability2, ctx })));
  return out;
}
function setController(state2, index, next, events) {
  const region = state2.regions[index];
  const prev = region.controller;
  if (prev === next) return;
  if (region.outpost && prev !== null && region.outpost.owner === prev) {
    state2.players[prev].discard.push({ iid: region.outpost.iid, cardId: region.outpost.cardId });
    events.push({ type: "razed", owner: prev, index, cardId: region.outpost.cardId });
    region.outpost = null;
  }
  region.controller = next;
  events.push({ type: "control", index, player: next });
  if (next === null) return;
  if (prev !== null) raid(state2, next, prev, index, events);
  if (!region.controlledOnce) {
    region.controlledOnce = true;
    for (const t of getRegion(region.regionId).traits) {
      if (t.kind !== "firstControl") continue;
      for (const effect2 of t.effects) state2.queue.push({ op: "effect", effect: effect2, ctx: { player: next, cardId: region.regionId, here: index } });
    }
  }
  queueTriggers(state2, "onControlGained", next, (p) => p.kind === "crew" && p.here === index);
}
function steal(state2, taker, victim, amount, events, byRaid) {
  for (let n = 0; n < amount; n++) {
    const pile = state2.players[victim].stores;
    if (!pile.length) break;
    const [card] = pile.splice(Math.floor(roll(state2) * pile.length), 1);
    if (!card) break;
    card.exhausted = true;
    card.taken = true;
    state2.players[taker].stores.push(card);
    state2.players[taker].taken += 1;
    events.push({ type: "raid", player: taker, from: victim, cardId: card.cardId });
    if (byRaid) queueTriggers(state2, "onRaid", taker);
  }
}
function raid(state2, taker, victim, index, events) {
  const region = state2.regions[index];
  const per = 1 + (trait(region.regionId, "raidExtra")?.extra ?? 0);
  for (const crew of crewsAt(state2, index)) {
    if (crew.owner !== taker || !hasKeyword(state2, crew, "raid")) continue;
    steal(state2, taker, victim, per, events, true);
  }
}
function needsChoice(effect2, ctx) {
  if (!("target" in effect2)) return false;
  const t = effect2.target.t;
  if (t === "chosenCrew") return ctx.target == null;
  if (t === "crewsInChosenRegion" || t === "chosenRegion") return ctx.region == null;
  return false;
}
function crewsFor(state2, target2, ctx) {
  switch (target2.t) {
    case "self":
      return state2.crews.filter((c) => c.iid === ctx.sourceIid);
    case "entering":
      return state2.crews.filter((c) => c.iid === ctx.target);
    case "chosenCrew":
      return state2.crews.filter((c) => c.iid === ctx.target && crewMatches(state2, c, target2.filter, ctx));
    case "allCrews":
      return state2.crews.filter((c) => crewMatches(state2, c, target2.filter, ctx));
    case "crewsInChosenRegion": {
      if (ctx.region == null) return [];
      const whose = target2.owner === "you" ? ctx.player : other(ctx.player);
      return crewsAt(state2, ctx.region).filter((c) => c.owner === whose);
    }
    case "chosenRegion":
      return [];
  }
}
function openPick(state2, effects, ctx) {
  const choice = firstChoice(effects);
  if (!choice) return false;
  const options = choicesFor(state2, choice, ctx);
  const kind = options.some((o) => o.region != null) ? "region" : "crew";
  const values = options.map((o) => kind === "region" ? o.region : o.target);
  if (!values.length) return false;
  if (values.length === 1) {
    const picked2 = kind === "region" ? { ...ctx, region: values[0] } : { ...ctx, target: values[0] };
    state2.queue.unshift(...effects.map((effect2) => ({ op: "effect", effect: effect2, ctx: picked2 })));
    return true;
  }
  if (state2.decision && state2.decision.type === "command") state2.paused.push(state2.decision);
  state2.decision = { type: "pick", player: ctx.player, kind, options: values, effects, ctx };
  return true;
}
function runEffect(state2, effect2, ctx, events) {
  if (needsChoice(effect2, ctx)) {
    openPick(state2, [effect2], ctx);
    return;
  }
  const you = ctx.player;
  const foe = other(you);
  switch (effect2.do) {
    case "draw":
      draw(state2, effect2.who === "opponent" ? foe : you, effect2.amount, events);
      return;
    case "stowFromDeck":
      stowFromDeck(state2, you, effect2.amount);
      return;
    case "extraStow":
      state2.players[you].stowLeft += effect2.amount;
      return;
    case "readyStores": {
      let left = effect2.amount;
      for (const card of state2.players[you].stores) {
        if (left <= 0) break;
        if (card.exhausted) {
          card.exhausted = false;
          left -= 1;
        }
      }
      return;
    }
    case "survey": {
      const options = surveyOptions(state2);
      if (!options.length) return;
      if (state2.decision && state2.decision.type === "command") state2.paused.push(state2.decision);
      state2.decision = { type: "surveyLook", player: you, max: effect2.n, options };
      return;
    }
    case "damage":
      for (const crew of crewsFor(state2, effect2.target, ctx)) damageCrew(state2, crew.iid, effect2.amount, "effect", events);
      return;
    case "modifyStats":
      for (const crew of crewsFor(state2, effect2.target, ctx)) {
        crew.mods.push({ might: effect2.might ?? 0, endurance: effect2.endurance ?? 0, until: effect2.until });
        if (crew.damage >= enduranceOf(state2, crew)) defeat(state2, crew.iid, events);
      }
      return;
    case "grantKeyword":
      for (const crew of crewsFor(state2, effect2.target, ctx)) {
        crew.grants.push({ keyword: effect2.keyword, until: effect2.until });
        if (effect2.keyword === "swift" && crew.deployedThisTurn && crew.marchesLeft === 0 && crew.owner === you) crew.marchesLeft = 1;
      }
      return;
    case "returnToHarbor":
      for (const crew of crewsFor(state2, effect2.target, ctx)) {
        crew.where = { zone: "harbor" };
        events.push({ type: "returned", iid: crew.iid });
      }
      return;
    case "extraMarch":
      for (const crew of crewsFor(state2, effect2.target, ctx)) crew.marchesLeft += 1;
      return;
    case "takeFromStores":
      steal(state2, you, foe, effect2.amount, events, false);
      return;
    case "discardFromStores":
      for (let n = 0; n < effect2.amount; n++) {
        const pile = state2.players[foe].stores;
        if (!pile.length) break;
        const [card] = pile.splice(Math.floor(roll(state2) * pile.length), 1);
        if (!card) break;
        state2.players[foe].discard.push({ iid: card.iid, cardId: card.cardId });
        events.push({ type: "discarded", player: foe, cardId: card.cardId, from: "stores" });
      }
      return;
    case "discardFromHand":
      for (let n = 0; n < effect2.amount; n++) {
        const hand = state2.players[foe].hand;
        if (!hand.length) break;
        const [card] = hand.splice(Math.floor(roll(state2) * hand.length), 1);
        if (!card) break;
        state2.players[foe].discard.push(card);
        events.push({ type: "discarded", player: foe, cardId: card.cardId, from: "hand" });
      }
      return;
    case "gainRenown": {
      const times = effect2.per === "good" ? goodsOf(state2, you).size : effect2.per === "regionControlled" ? controlled(state2, you).length : effect2.per === "crewHere" ? ctx.here == null ? 0 : crewsAt(state2, ctx.here).filter((c) => c.owner === you).length : 1;
      const amount = effect2.amount * times;
      if (amount > 0) {
        state2.players[you].renown += amount;
        events.push({ type: "renown", player: you, amount, reason: ctx.cardId });
      }
      return;
    }
    case "takeControl": {
      if (ctx.region == null) return;
      for (const crew of crewsAt(state2, ctx.region).filter((c) => c.owner === foe)) {
        crew.where = { zone: "harbor" };
        events.push({ type: "returned", iid: crew.iid });
      }
      setController(state2, ctx.region, you, events);
      return;
    }
    case "chooseOne":
      if (state2.decision && state2.decision.type === "command") state2.paused.push(state2.decision);
      state2.decision = { type: "choose", player: you, options: effect2.options, ctx };
      return;
  }
}
function runAbility(state2, ability2, ctx) {
  if (!conditionMet(state2, ability2.if, ctx.player, ctx.here)) return;
  const choice = firstChoice(ability2.effects);
  if (choice && needsChoice(choice, ctx)) {
    if (!openPick(state2, ability2.effects, ctx)) {
      const rest = ability2.effects.filter((e) => !needsChoice(e, ctx));
      state2.queue.unshift(...rest.map((effect2) => ({ op: "effect", effect: effect2, ctx })));
    }
    return;
  }
  state2.queue.unshift(...ability2.effects.map((effect2) => ({ op: "effect", effect: effect2, ctx })));
}
function applyFx(state2, fx3, events) {
  switch (fx3.op) {
    case "ability":
      runAbility(state2, fx3.ability, fx3.ctx);
      return;
    case "effect":
      runEffect(state2, fx3.effect, fx3.ctx, events);
      return;
    case "flip": {
      const region = state2.regions[fx3.index];
      if (!region || trait(region.regionId, "hiddenFromScout")) return;
      state2.queue.unshift(...flipRegion(state2, fx3.index, fx3.player, events));
      return;
    }
    case "damage":
      damageCrew(state2, fx3.iid, fx3.amount, fx3.source, events);
      return;
    case "handoffAmbush":
      handoffAmbush(state2);
      return;
  }
}
function choiceOpen(state2) {
  const kind = state2.decision?.type;
  return kind != null && kind !== "command";
}
function run(state2, events) {
  for (let guard = 0; guard < 5e3; guard++) {
    if (state2.over) return;
    if (choiceOpen(state2)) return;
    const fx3 = state2.queue.shift();
    if (fx3) {
      applyFx(state2, fx3, events);
      continue;
    }
    if (state2.claim) {
      stepClaim(state2, events);
      continue;
    }
    if (!state2.decision && state2.paused.length) {
      state2.decision = state2.paused.pop() ?? null;
      continue;
    }
    return;
  }
  throw new Error("The rules queued too much work.");
}
function startTurn(state2, player, events) {
  const you = state2.players[player];
  for (const card of you.stores) card.exhausted = false;
  you.stowLeft = stowsPerTurn(state2, player);
  if (!(state2.round === 1 && player === state2.firstPlayer)) draw(state2, player, 1, events);
  for (const crew of crewsOf(state2, player)) {
    crew.deployedThisTurn = false;
    crew.marchesLeft = 1;
  }
  state2.turnsTaken += 1;
  state2.claim = null;
  state2.decision = { type: "command", player };
  queueTriggers(state2, "startOfTurn", player, (p) => p.owner === player);
}
function finishTurn(state2, player, events) {
  for (const crew of state2.crews) {
    crew.mods = crew.mods.filter((mod) => mod.until !== "turn");
    crew.grants = crew.grants.filter((g) => g.until !== "turn");
  }
  if (state2.turnsTaken >= 2) beginClaim(state2);
  else startTurn(state2, other(player), events);
}
function beginClaim(state2) {
  state2.claim = {
    step: "hazards",
    region: 0,
    clashStep: "ambush",
    priority: other(state2.initiative),
    passes: 0,
    hits: {},
    assignQueue: [],
    controlAtStart: state2.regions.map((region) => region.controller)
  };
  state2.decision = null;
}
function stepClaim(state2, events) {
  const claim = state2.claim;
  switch (claim.step) {
    case "hazards":
      resolveHazards(state2, events);
      claim.step = "clash";
      claim.region = 0;
      claim.clashStep = "ambush";
      return;
    case "clash": {
      if (claim.region >= 5) {
        claim.step = "control";
        return;
      }
      const both = crewsAt(state2, claim.region).some((c) => c.owner === 0) && crewsAt(state2, claim.region).some((c) => c.owner === 1);
      if (!both || claim.clashStep === "defeat") {
        claim.region += 1;
        claim.clashStep = "ambush";
        return;
      }
      if (claim.clashStep === "ambush") {
        claim.passes = 0;
        claim.priority = other(state2.initiative);
        openAmbush(state2);
        return;
      }
      prepareAssign(state2, events);
      return;
    }
    case "control":
      resolveControl(state2, events);
      scoreRegionRenown(state2, events);
      claim.step = "ventures";
      return;
    case "ventures":
      scoreVentures(state2, events);
      claim.step = "other";
      return;
    case "other":
      queueTriggers(state2, "atClaim", state2.initiative);
      claim.step = "victory";
      return;
    case "victory":
      if (!checkVictory(state2, events)) claim.step = "cleanup";
      return;
    case "cleanup":
      cleanup(state2, events);
      return;
  }
}
function resolveHazards(state2, events) {
  for (let index = 0; index < 5; index++) {
    const region = state2.regions[index];
    if (!region.faceUp) continue;
    for (const t of getRegion(region.regionId).traits) {
      if (t.kind === "atClaimDamageEach") {
        for (const crew of [...crewsAt(state2, index)]) damageCrew(state2, crew.iid, t.amount, "region", events);
      } else if (t.kind === "atClaimDamageLowest") {
        for (const owner2 of [0, 1]) {
          const mine = crewsAt(state2, index).filter((c) => c.owner === owner2);
          if (!mine.length) continue;
          const low = Math.min(...mine.map((c) => enduranceOf(state2, c)));
          for (const crew of mine) if (enduranceOf(state2, crew) === low) damageCrew(state2, crew.iid, t.amount, "region", events);
        }
      }
    }
  }
}
function openAmbush(state2) {
  const claim = state2.claim;
  const player = claim.priority;
  const probe = { ...state2, decision: { type: "ambush", player, region: claim.region } };
  const canPlay = getLegalActions(probe, player).some((legal) => legal.kind === "act" && legal.action.type === "play");
  if (canPlay || state2.players[player].hand.length > 0) {
    state2.decision = { type: "ambush", player, region: claim.region };
    return;
  }
  claim.passes += 1;
  if (claim.passes >= 2) {
    claim.clashStep = "assign";
    state2.decision = null;
    return;
  }
  claim.priority = other(player);
  openAmbush(state2);
}
function handoffAmbush(state2) {
  const claim = state2.claim;
  if (!claim) return;
  claim.passes = 0;
  claim.priority = other(claim.priority);
  openAmbush(state2);
}
function prepareAssign(state2, events) {
  const claim = state2.claim;
  claim.hits = {};
  claim.assignQueue = [];
  for (const player of [state2.initiative, other(state2.initiative)]) {
    const amount = sideMight(state2, player, claim.region, true);
    const targets = crewsAt(state2, claim.region).filter((c) => c.owner !== player);
    if (amount > 0 && targets.length === 1) claim.hits[targets[0].iid] = (claim.hits[targets[0].iid] ?? 0) + amount;
    else if (amount > 0 && targets.length > 1) claim.assignQueue.push(player);
  }
  finishAssign(state2, events);
}
function finishAssign(state2, events) {
  const claim = state2.claim;
  const player = claim.assignQueue[0];
  if (player != null) {
    const targets = crewsAt(state2, claim.region).filter((c) => c.owner !== player).map((c) => c.iid);
    state2.decision = { type: "assign", player, region: claim.region, amount: sideMight(state2, player, claim.region, true), targets };
    return;
  }
  for (const [iid, amount] of Object.entries(claim.hits)) damageCrew(state2, iid, amount, "strike", events);
  claim.hits = {};
  for (const crew of [...crewsAt(state2, claim.region)]) {
    if (crew.damage >= enduranceOf(state2, crew)) defeat(state2, crew.iid, events);
  }
  claim.clashStep = "defeat";
  state2.decision = null;
}
function resolveControl(state2, events) {
  for (let index = 0; index < 5; index++) {
    const region = state2.regions[index];
    if (!region.faceUp) continue;
    const def = getRegion(region.regionId);
    const here = crewsAt(state2, index);
    const left = here.filter((c) => c.owner === 0);
    const right = here.filter((c) => c.owner === 1);
    const might = { 0: sideMight(state2, 0, index, false), 1: sideMight(state2, 1, index, false) };
    let next = region.controller;
    if (left.length && !right.length) next = 0;
    else if (right.length && !left.length) next = 1;
    else if (left.length && right.length) {
      if (might[0] > might[1]) next = 0;
      else if (might[1] > might[0]) next = 1;
    }
    if (def.traits.some((t) => t.kind === "loseControlWithoutCrew") && next !== null) {
      const holding = next === 0 ? left : right;
      if (!holding.length) next = null;
    }
    const margin = def.traits.find((t) => t.kind === "controlMargin");
    if (next !== region.controller && next !== null && margin && margin.kind === "controlMargin") {
      if (might[next] < might[other(next)] + margin.margin) next = region.controller;
    }
    const hold2 = holdMargin(state2, index);
    if (hold2 > 0 && region.controller !== null && next !== region.controller) {
      const holder = region.controller;
      if (might[other(holder)] < might[holder] + hold2) next = holder;
    }
    setController(state2, index, next, events);
  }
}
function scoreRegionRenown(state2, events) {
  for (let index = 0; index < 5; index++) {
    const region = state2.regions[index];
    if (!region.faceUp || region.controller === null) continue;
    const amount = getRegion(region.regionId).renown;
    const player = region.controller;
    state2.players[player].renown += amount;
    events.push({ type: "renown", player, amount, reason: region.regionId });
  }
}
function scoreVentures(state2, events) {
  for (const player of [state2.initiative, other(state2.initiative)]) {
    const you = state2.players[player];
    for (let slot = 0; slot < 2; slot++) {
      const venture = you.ventures[slot];
      if (!venture) continue;
      const def = getCard(venture.cardId);
      const ability2 = def.abilities.find((a) => a.on === "atClaim");
      if (!ability2 || !conditionMet(state2, ability2.if, player, null)) continue;
      you.completedVentures += 1;
      you.discard.push(venture);
      you.ventures[slot] = null;
      events.push({ type: "ventureDone", player, cardId: venture.cardId });
      for (const effect2 of ability2.effects) state2.queue.push({ op: "effect", effect: effect2, ctx: { player, cardId: venture.cardId, here: null } });
    }
  }
}
function leading(state2) {
  const score = (player) => {
    const regions2 = state2.regions.filter((region) => region.controller === player).length;
    return [state2.players[player].renown, regions2, state2.players[player].completedVentures];
  };
  const a = score(0);
  const b = score(1);
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] > b[i] ? 0 : 1;
  }
  return null;
}
function checkVictory(state2, events) {
  const any = state2.players.some((player) => player.renown >= 15);
  const limited = state2.round >= 12 || state2.extraRound;
  if (!any && !limited) return false;
  if (!any && state2.round >= 12 && !state2.extraRound) {
    const leader2 = leading(state2);
    if (leader2 === null) {
      state2.extraRound = true;
      return false;
    }
    return endGame(state2, leader2, "rounds", events);
  }
  const leader = leading(state2);
  if (leader === null) {
    if (state2.extraRound || state2.round > 12) return endGame(state2, null, "tie", events);
    state2.extraRound = true;
    return false;
  }
  if (any || state2.extraRound || state2.round >= 12) return endGame(state2, leader, any ? "renown" : "rounds", events);
  return false;
}
function endGame(state2, winner, reason, events) {
  state2.over = { winner, reason };
  state2.decision = null;
  state2.claim = null;
  state2.queue = [];
  events.push({ type: "gameover", winner, reason });
  return true;
}
function cleanup(state2, events) {
  for (const crew of state2.crews) {
    crew.damage = 0;
    crew.mods = crew.mods.filter((mod) => mod.until !== "round");
    crew.grants = crew.grants.filter((g) => g.until !== "round");
  }
  state2.initiative = other(state2.initiative);
  state2.round += 1;
  state2.turnsTaken = 0;
  state2.claim = null;
  if (!state2.over) startTurn(state2, state2.initiative, events);
}
function pay(state2, player, cost) {
  const ready = state2.players[player].stores.filter((card) => !card.exhausted);
  if (ready.length < cost) throw new Error("Not enough Supply.");
  for (let i = 0; i < cost; i++) ready[i].exhausted = true;
}
function takeFromHand(state2, player, iid) {
  const hand = state2.players[player].hand;
  const index = hand.findIndex((card2) => card2.iid === iid);
  if (index < 0) throw new Error("That card is not in your hand.");
  const [card] = hand.splice(index, 1);
  return card;
}
function takeFromStores(state2, player, iid) {
  const stores = state2.players[player].stores;
  const index = stores.findIndex((card2) => card2.iid === iid);
  if (index < 0) throw new Error("That card is not in your Stores.");
  const [card] = stores.splice(index, 1);
  return { iid: card.iid, cardId: card.cardId };
}
function subsetFits(legal, values) {
  if (legal.kind !== "subset") return false;
  if (values.length < legal.min || values.length > legal.max) return false;
  const options = new Set(legal.options);
  return values.every((value) => options.has(value)) && new Set(values).size === values.length;
}
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    const entries = Object.entries(value).filter(([, v]) => v !== void 0).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
    return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function allowed(state2, player, action) {
  if (state2.over) throw new Error("The game is over.");
  if (action.type === "concede") return;
  const legal = getLegalActions(state2, player);
  if (action.type === "assign") {
    const spec = legal.find((item) => item.kind === "assign");
    if (!spec || spec.kind !== "assign") throw new Error("No damage to assign.");
    const keys = Object.keys(action.hits);
    if (keys.some((key2) => !spec.targets.includes(key2))) throw new Error("Assign damage only to enemy crews there.");
    const sum = spec.targets.reduce((total, iid) => total + (action.hits[iid] ?? 0), 0);
    if (Object.values(action.hits).some((value) => !Number.isInteger(value) || value < 0)) {
      throw new Error("Damage comes in whole points.");
    }
    if (sum !== spec.amount) throw new Error("Assign all of the damage.");
    return;
  }
  if (action.type === "mulligan" || action.type === "discard") {
    const spec = legal.find((item) => item.kind === "subset" && item.actionType === action.type);
    if (!spec) throw new Error("That is not a legal action.");
    if (!subsetFits(spec, action.iids)) throw new Error("Those cards cannot be set aside.");
    return;
  }
  if (action.type === "surveyLook" || action.type === "surveyFlip") {
    const spec = legal.find((item) => item.kind === "subset" && item.actionType === action.type);
    if (!spec) throw new Error("That is not a legal action.");
    if (!subsetFits(spec, action.indices)) throw new Error("Those Regions cannot be chosen.");
    return;
  }
  const key = canonical(action);
  const match = legal.some((item) => item.kind === "act" && canonical(item.action) === key);
  if (!match) throw new Error("That is not a legal action.");
}
function actorOf(state2, action) {
  if (action.type === "concede") return action.player;
  if (!state2.decision) throw new Error("Nobody is deciding.");
  return state2.decision.player;
}
function enterRegion(state2, crew, index) {
  queueTriggers(
    state2,
    "onFriendlyEnter",
    crew.owner,
    (p) => p.kind === "crew" && p.owner === crew.owner && p.here === index && p.iid !== crew.iid,
    { target: crew.iid }
  );
}
function perform(state2, action, events) {
  const player = state2.decision?.player;
  if (action.type === "concede") {
    endGame(state2, other(action.player), "concede", events);
    return;
  }
  if (player == null) throw new Error("Nobody is deciding.");
  switch (action.type) {
    case "mulligan":
      mulligan(state2, player, action.iids, events);
      return;
    case "discard":
      for (const iid of action.iids) state2.players[player].discard.push(takeFromHand(state2, player, iid));
      state2.decision = null;
      finishTurn(state2, player, events);
      return;
    case "stow": {
      const card = takeFromHand(state2, player, action.iid);
      state2.players[player].stores.push({ ...card, exhausted: false });
      state2.players[player].stowLeft -= 1;
      events.push({ type: "stow", player });
      return;
    }
    case "play":
      play(state2, player, action, events);
      return;
    case "march":
      march(state2, player, action.iid, action.dest, events);
      return;
    case "abandon": {
      const venture = state2.players[player].ventures[action.slot];
      if (!venture) throw new Error("That Venture slot is empty.");
      state2.players[player].discard.push(venture);
      state2.players[player].ventures[action.slot] = null;
      return;
    }
    case "end":
      if (state2.players[player].hand.length > 8) {
        state2.decision = { type: "discard", player };
        return;
      }
      state2.decision = null;
      finishTurn(state2, player, events);
      return;
    case "pass": {
      const claim = state2.claim;
      if (!claim) throw new Error("Nothing to pass.");
      claim.passes += 1;
      state2.decision = null;
      if (claim.passes >= 2) {
        claim.clashStep = "assign";
        return;
      }
      claim.priority = other(player);
      openAmbush(state2);
      return;
    }
    case "assign": {
      const claim = state2.claim;
      if (!claim) throw new Error("No Clash to assign.");
      for (const [iid, amount] of Object.entries(action.hits)) claim.hits[iid] = (claim.hits[iid] ?? 0) + amount;
      claim.assignQueue.shift();
      state2.decision = null;
      finishAssign(state2, events);
      return;
    }
    case "surveyLook": {
      const seen = state2.peeked[player];
      for (const index of action.indices) if (!seen.includes(index)) seen.push(index);
      state2.decision = { type: "surveyFlip", player, options: action.indices };
      return;
    }
    case "surveyFlip":
      state2.decision = null;
      state2.queue.unshift(...action.indices.map((index) => ({ op: "flip", index, player })));
      return;
    case "pick": {
      const decision = state2.decision;
      if (decision?.type !== "pick") throw new Error("Nothing to pick.");
      const ctx = decision.kind === "region" ? { ...decision.ctx, region: action.choice } : { ...decision.ctx, target: action.choice };
      state2.decision = null;
      state2.queue.unshift(...decision.effects.map((effect2) => ({ op: "effect", effect: effect2, ctx })));
      return;
    }
    case "choose": {
      const decision = state2.decision;
      if (decision?.type !== "choose") throw new Error("Nothing to choose.");
      state2.decision = null;
      state2.queue.unshift(...decision.options[action.index].map((effect2) => ({ op: "effect", effect: effect2, ctx: decision.ctx })));
      return;
    }
  }
}
function mulligan(state2, player, iids, events) {
  const you = state2.players[player];
  const back = [];
  for (const iid of iids) back.push(takeFromHand(state2, player, iid).cardId);
  you.deck.push(...back);
  if (back.length) shuffle(you.deck, state2);
  draw(state2, player, back.length, events);
  const first = state2.firstPlayer;
  const second = other(first);
  if (player === first) {
    state2.decision = { type: "mulligan", player: second };
    return;
  }
  const cardId = state2.players[second].deck.shift();
  if (cardId) state2.players[second].stores.push({ iid: mint(state2), cardId, exhausted: false });
  startTurn(state2, first, events);
}
function play(state2, player, action, events) {
  const card = action.fromStores ? takeFromStores(state2, player, action.iid) : takeFromHand(state2, player, action.iid);
  const def = getCard(card.cardId);
  let cost = supplyCostOf(state2, def.id, def.type === "outpost" ? action.region : void 0);
  if (def.type === "crew" && action.dest?.zone === "region") cost += entryTax(state2, player, action.dest.index);
  pay(state2, player, cost);
  events.push({ type: "play", player, cardId: card.cardId });
  if (def.type === "crew") {
    const dest = action.dest ?? { zone: "harbor" };
    const crew = { iid: card.iid, cardId: card.cardId, owner: player, where: dest, damage: 0, deployedThisTurn: true, marchesLeft: 0, mods: [], grants: [] };
    state2.crews.push(crew);
    if (hasKeyword(state2, crew, "swift")) crew.marchesLeft = 1;
    events.push({ type: "deploy", player, iid: crew.iid, cardId: crew.cardId, dest });
    const here = dest.zone === "region" ? dest.index : null;
    for (const ability2 of def.abilities) {
      if (ability2.on === "onDeploy") state2.queue.push({ op: "ability", ability: ability2, ctx: { player, cardId: def.id, sourceIid: crew.iid, here } });
    }
    if (here != null) enterRegion(state2, crew, here);
    return;
  }
  if (def.type === "order") {
    state2.players[player].discard.push(card);
    const ambush = state2.decision?.type === "ambush";
    if (ambush) state2.decision = null;
    const ctx = { player, cardId: def.id, here: null, target: action.target, region: action.region };
    for (const ability2 of def.abilities) if (ability2.on === "onPlay") state2.queue.push({ op: "ability", ability: ability2, ctx });
    if (ambush) state2.queue.push({ op: "handoffAmbush" });
    return;
  }
  if (def.type === "outpost") {
    const index = action.region;
    const region = index == null ? void 0 : state2.regions[index];
    if (!region || index == null) throw new Error("That Region cannot hold an Outpost.");
    region.outpost = { ...card, owner: player };
    events.push({ type: "built", player, index, cardId: card.cardId });
    for (const ability2 of def.abilities) {
      if (ability2.on === "onDeploy") state2.queue.push({ op: "ability", ability: ability2, ctx: { player, cardId: def.id, sourceIid: card.iid, here: index } });
    }
    return;
  }
  const slot = state2.players[player].ventures.findIndex((venture) => venture === null);
  if (slot !== 0 && slot !== 1) throw new Error("You have no empty Venture slot.");
  state2.players[player].ventures[slot] = card;
}
function supplyCostOf(state2, cardId, region) {
  const card = getCard(cardId);
  let cost = card.cost.supply;
  if (card.type === "outpost" && region != null) {
    const board = state2.regions[region];
    const discount = board && trait(board.regionId, "outpostDiscount");
    if (discount) cost = Math.max(0, cost - discount.amount);
  }
  return cost;
}
function march(state2, player, iid, dest, events) {
  const crew = findCrew(state2, iid);
  if (!crew || crew.owner !== player || crew.marchesLeft <= 0) throw new Error("That crew cannot March.");
  const from = crew.where;
  const fromHarbor = from.zone === "harbor";
  crew.marchesLeft -= 1;
  if (dest.zone === "region" && fromHarbor && forbidsHarbor(state2.regions[dest.index].regionId)) {
    state2.queue.push({ op: "flip", index: dest.index, player });
    return;
  }
  if (dest.zone === "region") pay(state2, player, entryTax(state2, player, dest.index));
  crew.where = dest;
  events.push({ type: "march", player, iid, from, to: dest });
  if (dest.zone !== "region") return;
  const region = state2.regions[dest.index];
  if (!region.faceUp) state2.queue.push(...flipRegion(state2, dest.index, player, events, crew));
  const landingDamage = trait(region.regionId, "enterFromHarborDamage");
  if (fromHarbor && landingDamage) state2.queue.push({ op: "damage", iid: crew.iid, amount: landingDamage.amount, source: "region" });
  enterRegion(state2, crew, dest.index);
}
function applyAction(state2, action) {
  const events = [];
  let error2 = null;
  const next = produce(state2, (draft) => {
    try {
      if (draft.over) throw new Error("The game is over.");
      const player = action.type === "concede" ? action.player : actorOf(draft, action);
      allowed(draft, player, action);
      perform(draft, action, events);
      run(draft, events);
    } catch (err) {
      error2 = err instanceof Error ? err : new Error(String(err));
    }
  });
  if (error2) throw error2;
  return { state: next, events };
}

// packages/engine/src/setup.ts
function emptyPlayer(deck) {
  return {
    deck,
    hand: [],
    stores: [],
    discard: [],
    ventures: [null, null],
    renown: 0,
    stowLeft: 0,
    completedVentures: 0,
    taken: 0
  };
}
function faceDown(regionId) {
  return { regionId, faceUp: false, controller: null, outpost: null, controlledOnce: false };
}
function hasAllGoods(ids) {
  const goods = /* @__PURE__ */ new Set();
  for (const id of ids) for (const good2 of getRegion(id).goods) goods.add(good2);
  return goods.has("gold") && goods.has("timber") && goods.has("spice");
}
function copyDeck(ids) {
  const deck = [...ids ?? basicDeck()];
  if (deck.length !== 40) throw new Error("A deck has 40 cards.");
  for (const id of deck) getCard(id);
  return deck;
}
function createGame(options = {}) {
  const decks = [copyDeck(options.decks?.[0]), copyDeck(options.decks?.[1])];
  const state2 = {
    rng: (options.seed ?? 1) >>> 0,
    round: 1,
    firstPlayer: 0,
    initiative: 0,
    turnsTaken: 0,
    seq: 0,
    players: [emptyPlayer(decks[0]), emptyPlayer(decks[1])],
    crews: [],
    regions: [],
    regionDeck: [],
    decision: null,
    paused: [],
    queue: [],
    claim: null,
    over: null,
    extraRound: false,
    peeked: [[], []]
  };
  if (options.shuffleDecks !== false) {
    shuffle(state2.players[0].deck, state2);
    shuffle(state2.players[1].deck, state2);
  }
  if (options.regions) {
    if (options.regions.length !== 5 || new Set(options.regions).size !== 5) {
      throw new Error("A game deals 5 different Regions.");
    }
    for (const id of options.regions) getRegion(id);
    const dealt = new Set(options.regions);
    const rest = regions.map((region) => region.id).filter((id) => !dealt.has(id));
    shuffle(rest, state2);
    state2.regions = options.regions.map(faceDown);
    state2.regionDeck = rest;
  } else {
    const pool = regions.map((region) => region.id);
    let dealt = null;
    for (let attempt = 0; attempt < 200; attempt++) {
      shuffle(pool, state2);
      const five = pool.slice(0, 5);
      if (options.anyMap || hasAllGoods(five)) {
        dealt = five;
        break;
      }
    }
    if (!dealt) throw new Error("The Region deck could not deal all three Goods.");
    state2.regions = dealt.map(faceDown);
    state2.regionDeck = pool.slice(5);
  }
  const first = options.firstPlayer ?? (roll(state2) < 0.5 ? 0 : 1);
  state2.firstPlayer = first;
  state2.initiative = first;
  for (const player of [0, 1]) {
    const you = state2.players[player];
    for (let n = 0; n < 6; n++) {
      const cardId = you.deck.shift();
      if (!cardId) throw new Error("A deck cannot deal an opening hand.");
      you.hand.push({ iid: mint(state2), cardId });
    }
  }
  state2.decision = { type: "mulligan", player: first };
  if (options.autoMulligan === "keep") {
    const firstKeep = applyAction(state2, { type: "mulligan", iids: [] }).state;
    return applyAction(firstKeep, { type: "mulligan", iids: [] }).state;
  }
  return state2;
}

// packages/engine/src/view.ts
function shownDecision(state2, viewer) {
  const decision = state2.decision;
  if (!decision) return null;
  if (decision.player === viewer) return decision;
  if (decision.type === "mulligan" || decision.type === "discard") {
    return { type: decision.type, player: decision.player };
  }
  return decision;
}
function getPlayerView(state2, viewer) {
  const foe = viewer === 0 ? 1 : 0;
  const you = state2.players[viewer];
  const them = state2.players[foe];
  return {
    you: viewer,
    round: state2.round,
    initiative: state2.initiative,
    firstPlayer: state2.firstPlayer,
    extraRound: state2.extraRound,
    over: state2.over,
    renown: [state2.players[0].renown, state2.players[1].renown],
    completedVentures: [state2.players[0].completedVentures, state2.players[1].completedVentures],
    taken: [state2.players[0].taken, state2.players[1].taken],
    decision: shownDecision(state2, viewer),
    hand: you.hand,
    foeHand: them.hand.length,
    stores: you.stores,
    foeStores: { total: them.stores.length, ready: them.stores.filter((card) => !card.exhausted).length },
    deck: you.deck.length,
    foeDeck: them.deck.length,
    discard: [state2.players[0].discard, state2.players[1].discard],
    ventures: [state2.players[0].ventures, state2.players[1].ventures],
    stowLeft: you.stowLeft,
    crews: state2.crews,
    regions: state2.regions.map((region, index) => {
      const known = region.faceUp || scoutSees(state2, viewer, index) || state2.peeked[viewer].includes(index);
      return {
        index,
        faceUp: region.faceUp,
        regionId: known ? region.regionId : null,
        controller: region.faceUp ? region.controller : null,
        outpost: region.faceUp ? region.outpost : null
      };
    }),
    regionDeck: state2.regionDeck.length,
    legal: getLegalActions(state2, viewer)
  };
}
function redactEvents(events, viewer) {
  return events.map((event) => {
    if (event.type === "draw" && event.player !== viewer) return { ...event, cardIds: [] };
    return event;
  });
}

// packages/ai/src/config.ts
var AI_CONFIG = {
  deckhand: { samples: 1, noise: 2.5, randomMove: 0.15, ambushChance: 0.5 },
  captain: { samples: 3, noise: 0.4, randomMove: 0, ambushChance: 1, planDepth: 90 },
  /** Milliseconds the table waits before the computer moves, so animations can play. */
  thinkDelay: 650
};
var WEIGHTS = {
  renown: 10,
  projectedRegion: 6,
  good: 2,
  might: 1.2,
  endurance: 0.4,
  hand: 0.8,
  stores: 1.6,
  venture: 2,
  ventureOnTrack: 7,
  atRisk: 1.5,
  /** How much a Region counts when the rival can reach and outmuscle it before Claim. */
  contestable: 0.45
};

// packages/ai/src/index.ts
function chooseAction(view2, level, rng2) {
  const decision = view2.decision;
  if (!decision || decision.player !== view2.you || view2.over) throw new Error("The computer has nothing to decide.");
  const legal = view2.legal;
  switch (decision.type) {
    case "mulligan":
      return { type: "mulligan", iids: mulliganPicks(view2) };
    case "discard":
      return { type: "discard", iids: discardPicks(view2, subsetOf(legal, "discard").min) };
    case "surveyLook": {
      const spec = subsetOf(legal, "surveyLook");
      return { type: "surveyLook", indices: shuffled(spec.options, rng2).slice(0, spec.max) };
    }
    case "surveyFlip":
      return { type: "surveyFlip", indices: flipPicks(view2, subsetOf(legal, "surveyFlip").options) };
    case "assign": {
      const spec = legal.find((item) => item.kind === "assign");
      if (!spec || spec.kind !== "assign") throw new Error("No damage to assign.");
      return { type: "assign", hits: assignHits(view2, spec.amount, spec.targets) };
    }
    case "ambush":
      return ambushChoice(view2, level, rng2);
    case "command":
      return commandChoice(view2, level, rng2);
    case "pick":
    case "choose":
      return bestOption(view2, level, rng2);
  }
}
function subsetOf(legal, type) {
  const spec = legal.find((item) => item.kind === "subset" && item.actionType === type);
  if (!spec || spec.kind !== "subset") throw new Error(`No ${type} choice.`);
  return spec;
}
function acts(view2) {
  return view2.legal.flatMap((item) => item.kind === "act" && item.action.type !== "concede" ? [item.action] : []);
}
function shuffled(list, rng2) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng2() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function mulliganPicks(view2) {
  const cheap = view2.hand.filter((c) => getCard(c.cardId).cost.supply <= 2).length;
  if (cheap >= 2) return [];
  return view2.hand.filter((c) => getCard(c.cardId).cost.supply >= 3).map((c) => c.iid);
}
function playable(view2, iid) {
  return (view2.hand.find((c) => c.iid === iid) ?? view2.stores.find((c) => c.iid === iid)).cardId;
}
function cardValue(cardId) {
  const card = getCard(cardId);
  if (card.type === "crew") return (card.might ?? 0) * 1.2 + (card.endurance ?? 0) * 0.6 + card.keywords.length * 0.5 + card.abilities.length * 0.6;
  if (card.type === "venture") return 2.5;
  if (card.type === "outpost") return 2;
  return 1.5 + card.cost.supply * 0.4;
}
function discardPicks(view2, count) {
  return [...view2.hand].sort((a, b) => cardValue(a.cardId) - cardValue(b.cardId)).slice(0, count).map((c) => c.iid);
}
function flipPicks(view2, options) {
  return options.filter((index) => {
    const id = view2.regions[index]?.regionId;
    return id ? getRegion(id).traits.some((t) => t.kind === "whenRevealed") : false;
  });
}
function assignHits(view2, amount, targets) {
  const hits2 = Object.fromEntries(targets.map((t) => [t, 0]));
  const crews = targets.map((iid) => view2.crews.find((c) => c.iid === iid)).filter(Boolean).map((c) => ({ c, left: enduranceOf2(c) - c.damage, worth: mightOf(c) + 1 })).sort((a, b) => b.worth / Math.max(1, a.left) - a.worth / Math.max(1, b.left));
  let pool = amount;
  for (const { c, left } of crews) {
    if (pool >= left && left > 0) {
      hits2[c.iid] = left;
      pool -= left;
    }
  }
  if (pool > 0) {
    const target2 = crews.find(({ c }) => hits2[c.iid] < enduranceOf2(c) - c.damage) ?? crews[0];
    hits2[target2.c.iid] = (hits2[target2.c.iid] ?? 0) + pool;
  }
  return hits2;
}
function bestOption(view2, level, rng2) {
  const options = acts(view2).filter((a) => a.type === "pick" || a.type === "choose");
  if (!options.length) throw new Error("Nothing to choose.");
  if (level === "deckhand") return options[Math.floor(rng2() * options.length)];
  const worlds = Array.from({ length: AI_CONFIG.captain.samples }, () => determinize(view2, rng2));
  let best = options[0];
  let bestScore = -Infinity;
  for (const option of options) {
    const score = average(worlds.map((world) => {
      try {
        return evaluate(applyAction(world, option).state, view2.you);
      } catch {
        return -Infinity;
      }
    }));
    if (score > bestScore) {
      best = option;
      bestScore = score;
    }
  }
  return best;
}
function mightOf(crew) {
  return (getCard(crew.cardId).might ?? 0) + crew.mods.reduce((t, m) => t + m.might, 0);
}
function enduranceOf2(crew) {
  return (getCard(crew.cardId).endurance ?? 1) + crew.mods.reduce((t, m) => t + m.endurance, 0);
}
function sideAt(crews, owner2, index) {
  return crews.filter((c) => c.owner === owner2 && c.where.zone === "region" && c.where.index === index);
}
function ambushChoice(view2, level, rng2) {
  const plays = acts(view2).filter((a) => a.type === "play");
  const pass = { type: "pass" };
  if (!plays.length) return pass;
  if (rng2() > AI_CONFIG[level].ambushChance) return pass;
  const me = view2.you;
  const foe = other(me);
  let best = { action: pass, score: 0 };
  const world = determinize(view2, rng2);
  const crew = (iid) => world.crews.find((c) => c.iid === iid);
  const left = (c) => enduranceOf(world, c) - c.damage;
  const might = (owner2, index) => sideAt(world.crews, owner2, index).reduce((t, c) => t + crewMight(world, c, true), 0);
  for (const action of plays) {
    const card = getCard(playable(view2, action.iid));
    let score = 0;
    for (const ability2 of card.abilities) {
      if (ability2.on !== "onPlay") continue;
      for (const effect2 of ability2.effects) {
        if (effect2.do === "damage") {
          if (effect2.target.t === "allCrews") {
            for (const c of world.crews) {
              if (c.owner === foe && c.where.zone === "region" && sideAt(world.crews, me, c.where.index).length) score += left(c) <= effect2.amount ? 4 + mightOf(c) : 1;
            }
          } else {
            const c = crew(action.target);
            if (c && c.owner === foe) score += left(c) <= effect2.amount ? 4 + mightOf(c) : 1;
            else score -= 5;
          }
        }
        if (effect2.do === "modifyStats" && action.region != null) {
          const mm = might(me, action.region);
          const tm = might(foe, action.region);
          const gain = (effect2.might ?? 0) * sideAt(world.crews, me, action.region).length;
          const theirs = sideAt(world.crews, foe, action.region).length;
          if (theirs && mm <= tm && mm + gain > tm) score += 5;
          else if (theirs) score += gain * 0.6 + (effect2.endurance ?? 0) * 0.5;
        }
        if (effect2.do === "modifyStats" && action.target) {
          const c = crew(action.target);
          if (c && c.owner === me && c.where.zone === "region" && might(foe, c.where.index) >= left(c)) score += 3;
        }
        if (effect2.do === "returnToHarbor") {
          const c = crew(action.target);
          if (c && c.where.zone === "region") {
            const index = c.where.index;
            if (c.owner === me && might(foe, index) >= left(c) && might(me, index) <= might(foe, index)) score += 3 + mightOf(c) * 0.3;
            if (c.owner === foe) score += mightOf(c) * 1.2 + (might(foe, index) - crewMight(world, c, true) < might(me, index) ? 3 : 0);
          }
          if (effect2.target.t === "allCrews") {
            let losing = 0;
            for (let i = 0; i < 5; i++) if (sideAt(world.crews, me, i).length && sideAt(world.crews, foe, i).length && might(me, i) < might(foe, i)) losing += 1;
            score += losing * 3 - 1;
          }
        }
        if (effect2.do === "takeFromStores" || effect2.do === "draw") score += 1;
      }
    }
    if (score > best.score) best = { action, score };
  }
  return best.action;
}
function deckhandChoice(view2, rng2, planning = false) {
  const cfg = AI_CONFIG.deckhand;
  const options = acts(view2);
  const moves = options.filter((a) => a.type !== "end");
  if (!planning && moves.length && rng2() < cfg.randomMove) return moves[Math.floor(rng2() * moves.length)];
  const foe = other(view2.you);
  const ready = view2.stores.filter((c) => !c.exhausted).length;
  const score = (a) => {
    if (a.type === "end") return 0.5;
    if (a.type === "abandon") return -5;
    if (a.type === "stow") {
      const card = view2.hand.find((c) => c.iid === a.iid);
      return 3 + (ready < 2 ? 2 : 0) - cardValue(card.cardId) * 0.3;
    }
    if (a.type === "play") {
      const card = getCard(playable(view2, a.iid));
      if (card.type === "crew") return 2 + (card.might ?? 0) + (card.endurance ?? 0) * 0.5 + (a.dest?.zone === "region" ? 1 : 0);
      if (card.type === "venture") return 2.5;
      if (card.type === "outpost") return 2;
      return 1.5;
    }
    if (a.type === "march") {
      if (a.dest.zone === "harbor") return -2;
      const theirs = sideAt(view2.crews, foe, a.dest.index).reduce((t, c) => t + mightOf(c), 0);
      const region = view2.regions[a.dest.index];
      const owned = region.controller === view2.you;
      return 3 - theirs + (region.faceUp ? 0 : 2) + (owned ? -2 : 1);
    }
    return 0;
  };
  let best = options.find((a) => a.type === "end") ?? { type: "end" };
  let bestScore = -Infinity;
  for (const a of options) {
    const v = score(a) + (planning ? 0 : (rng2() - 0.5) * cfg.noise);
    if (v > bestScore) {
      best = a;
      bestScore = v;
    }
  }
  return best;
}
function commandChoice(view2, level, rng2) {
  if (level === "deckhand") return deckhandChoice(view2, rng2);
  const cfg = AI_CONFIG[level];
  const options = acts(view2);
  const end = options.find((a) => a.type === "end") ?? { type: "end" };
  const moves = options.filter((a) => a.type !== "end");
  if (!moves.length) return end;
  if (rng2() < cfg.randomMove) return moves[Math.floor(rng2() * moves.length)];
  const worlds = Array.from({ length: cfg.samples }, () => determinize(view2, rng2));
  const outcome = (move) => average(worlds.map((world) => {
    try {
      return evaluate(rollout(applyAction(world, move).state, rng2), view2.you);
    } catch {
      return -Infinity;
    }
  }));
  let best = end;
  let bestScore = outcome(end) + 0.25;
  for (const move of moves) {
    const scores = [outcome(move)];
    const score = average(scores) + (rng2() - 0.5) * cfg.noise;
    if (score > bestScore) {
      best = move;
      bestScore = score;
    }
  }
  return best;
}
function rollout(world, rng2) {
  let state2 = world;
  const round = state2.round;
  for (let step = 0; step < AI_CONFIG.captain.planDepth; step++) {
    const decision = state2.decision;
    if (!decision || state2.over || state2.round !== round) break;
    const view2 = getPlayerView(state2, decision.player);
    const action = decision.type === "command" ? deckhandChoice(view2, rng2, true) : chooseAction(view2, "deckhand", rng2);
    try {
      state2 = applyAction(state2, action).state;
    } catch {
      break;
    }
  }
  return state2;
}
function average(values) {
  return values.reduce((t, v) => t + v, 0) / Math.max(1, values.length);
}
function determinize(view2, rng2) {
  const me = view2.you;
  const foe = other(me);
  const pool = basicDeck();
  const sample = (n) => Array.from({ length: n }, () => pool[Math.floor(rng2() * pool.length)]);
  let hidden = 0;
  const hid = () => `x${++hidden}`;
  const seen = new Set(view2.regions.flatMap((r) => r.regionId ? [r.regionId] : []));
  const unseen = shuffled(regions.map((r) => r.id).filter((id) => !seen.has(id)), rng2);
  const boardRegions = view2.regions.map((r) => ({
    regionId: r.regionId ?? unseen.pop(),
    faceUp: r.faceUp,
    controller: r.controller,
    outpost: r.outpost,
    controlledOnce: r.controller != null
  }));
  const highest = Math.max(
    0,
    ...[...view2.hand, ...view2.stores, ...view2.discard[0], ...view2.discard[1], ...view2.crews].map((c) => Number(c.iid.slice(1)) || 0)
  );
  const ventures = (p) => view2.ventures[p].map((v) => v ? { ...v } : null);
  const foeStores = Array.from({ length: view2.foeStores.total }, (_, i) => ({ iid: hid(), cardId: sample(1)[0], exhausted: i >= view2.foeStores.ready }));
  const players = [];
  players[me] = {
    deck: sample(view2.deck),
    hand: view2.hand.map((c) => ({ ...c })),
    stores: view2.stores.map((c) => ({ ...c })),
    discard: view2.discard[me].map((c) => ({ ...c })),
    ventures: ventures(me),
    renown: view2.renown[me],
    stowLeft: view2.stowLeft,
    completedVentures: view2.completedVentures[me],
    taken: view2.taken[me]
  };
  players[foe] = {
    deck: sample(view2.foeDeck),
    hand: sample(view2.foeHand).map((cardId) => ({ iid: hid(), cardId })),
    stores: foeStores,
    discard: view2.discard[foe].map((c) => ({ ...c })),
    ventures: ventures(foe),
    renown: view2.renown[foe],
    stowLeft: 1,
    completedVentures: view2.completedVentures[foe],
    taken: view2.taken[foe]
  };
  return {
    rng: Math.floor(rng2() * 4294967295) >>> 0,
    round: view2.round,
    firstPlayer: view2.firstPlayer,
    initiative: view2.initiative,
    turnsTaken: me === view2.initiative ? 1 : 2,
    seq: highest + 1e3,
    players,
    crews: view2.crews.map((c) => ({ ...c, where: { ...c.where }, mods: c.mods.map((m) => ({ ...m })), grants: c.grants.map((g) => ({ ...g })) })),
    regions: boardRegions,
    regionDeck: unseen,
    decision: view2.decision,
    paused: [],
    queue: [],
    claim: null,
    over: view2.over,
    extraRound: view2.extraRound,
    peeked: [[], []]
  };
}
function reachableMight(state2, player, index) {
  const target2 = getRegion(state2.regions[index].regionId);
  const noHarbor = target2.traits.some((t) => t.kind === "cantEnterFromHarbor") && state2.regions[index].faceUp;
  let total = 0;
  for (const crew of state2.crews) {
    if (crew.owner !== player) continue;
    if (crew.where.zone === "harbor") {
      if (!noHarbor) total += mightOf(crew);
    } else if (crew.where.index === index || Math.abs(crew.where.index - index) === 1) total += mightOf(crew);
  }
  return total;
}
function evaluate(state2, me) {
  if (state2.over) return state2.over.winner === me ? 1e4 : state2.over.winner == null ? 0 : -1e4;
  const foe = other(me);
  let score = (state2.players[me].renown - state2.players[foe].renown) * WEIGHTS.renown;
  const held = { 0: 0, 1: 0 };
  const goods = { 0: /* @__PURE__ */ new Set(), 1: /* @__PURE__ */ new Set() };
  state2.regions.forEach((region, index) => {
    const mine = sideAt(state2.crews, me, index);
    const theirs = sideAt(state2.crews, foe, index);
    const def = getRegion(region.regionId);
    let owner2 = region.controller;
    if (region.faceUp) {
      if (mine.length && !theirs.length) owner2 = me;
      else if (theirs.length && !mine.length) owner2 = foe;
      else if (mine.length && theirs.length) {
        const mm = mine.reduce((t, c) => t + mightOf(c), 0);
        const tm = theirs.reduce((t, c) => t + mightOf(c), 0);
        if (mm > tm) owner2 = me;
        else if (tm > mm) owner2 = foe;
      }
      if (def.traits.some((t) => t.kind === "loseControlWithoutCrew") && owner2 != null && !(owner2 === me ? mine : theirs).length) owner2 = null;
    }
    if (owner2 != null) {
      held[owner2] += 1;
      for (const g of def.goods) goods[owner2].add(g);
      let value = def.renown * WEIGHTS.projectedRegion;
      const rival = other(owner2);
      const holding = (owner2 === me ? mine : theirs).reduce((t, c) => t + mightOf(c), 0);
      const reach = reachableMight(state2, rival, index);
      if (state2.decision?.player !== rival && reach > holding) value *= WEIGHTS.contestable;
      score += (owner2 === me ? 1 : -1) * value;
    }
    const hazard = def.traits.reduce((t, tr) => t + (tr.kind === "atClaimDamageEach" ? tr.amount : 0), 0);
    if (hazard && region.faceUp) {
      for (const crew of [...mine, ...theirs]) {
        const hardy = getCard(crew.cardId).keywords.includes("hardy");
        if (!hardy && enduranceOf2(crew) - crew.damage <= hazard) score += (crew.owner === me ? -1 : 1) * (mightOf(crew) + 2) * WEIGHTS.atRisk;
      }
    }
  });
  for (const crew of state2.crews) {
    const value = crewMight(state2, crew, false) * WEIGHTS.might + (enduranceOf(state2, crew) - crew.damage) * WEIGHTS.endurance;
    score += crew.owner === me ? value : -value;
  }
  score += (goods[me].size - goods[foe].size) * WEIGHTS.good;
  score += (state2.players[me].hand.length - state2.players[foe].hand.length) * WEIGHTS.hand;
  score += (state2.players[me].stores.length - state2.players[foe].stores.length) * WEIGHTS.stores;
  for (const who of [me, foe]) {
    const sign = who === me ? 1 : -1;
    for (const venture of state2.players[who].ventures) {
      if (!venture) continue;
      score += sign * WEIGHTS.venture;
      for (const ability2 of getCard(venture.cardId).abilities) {
        if (ability2.on !== "atClaim") continue;
        const gain = ability2.effects.reduce((t, e) => t + (e.do === "gainRenown" ? e.amount : 1), 0);
        const onTrack = ability2.if?.if === "controlAtLeast" ? held[who] >= ability2.if.n : conditionMet(state2, ability2.if, who, null);
        if (onTrack) score += sign * gain * WEIGHTS.ventureOnTrack / 3;
      }
    }
  }
  return score;
}

// apps/table/art.ts
var uid = 0;
var nextId = (stem) => `${stem}${++uid}`;
function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}
function rng(seed2) {
  let s = hash(seed2) || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}
var SKIES = {
  dawn: { top: "#1d2a4a", mid: "#7a4a6a", low: "#f0a868", sun: "#ffe2a8", sunX: 120, sunY: 58, sunR: 11 },
  noon: { top: "#24507a", mid: "#4f86a8", low: "#cfe0d8", sun: "#fff6d8", sunX: 34, sunY: 22, sunR: 9 },
  dusk: { top: "#1a1730", mid: "#6b2e3e", low: "#e2733f", sun: "#ffcf7a", sunX: 80, sunY: 60, sunR: 14 },
  storm: { top: "#0f141c", mid: "#26313e", low: "#4a5562", sun: "#9aa7b4", sunX: 130, sunY: 18, sunR: 0 },
  night: { top: "#070b16", mid: "#142240", low: "#2c4466", sun: "#e9eef5", sunX: 124, sunY: 20, sunR: 7 },
  haze: { top: "#33405a", mid: "#8c8a86", low: "#d9c9a6", sun: "#fff0c8", sunX: 40, sunY: 30, sunR: 10 },
  ember: { top: "#140c10", mid: "#4a1a18", low: "#c4502a", sun: "#ffb070", sunX: 112, sunY: 40, sunR: 0 },
  jade: { top: "#10262a", mid: "#2f5a50", low: "#a8c49a", sun: "#f8f2c8", sunX: 118, sunY: 24, sunR: 8 }
};
function skyLayer(sky, w, h, stars = false) {
  const g = nextId("sky");
  const glow = nextId("glow");
  let out = `<defs>
    <linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${sky.top}"/><stop offset="0.55" stop-color="${sky.mid}"/><stop offset="1" stop-color="${sky.low}"/>
    </linearGradient>
    <radialGradient id="${glow}"><stop offset="0" stop-color="${sky.sun}" stop-opacity="0.9"/><stop offset="1" stop-color="${sky.sun}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${g})"/>`;
  if (stars) {
    const r = rng(`stars${w}`);
    for (let i = 0; i < 26; i++) {
      out += `<circle class="twinkle" style="animation-delay:${(r() * 4).toFixed(2)}s" cx="${(r() * w).toFixed(1)}" cy="${(r() * h * 0.45).toFixed(1)}" r="${(0.3 + r() * 0.5).toFixed(2)}" fill="#fff"/>`;
    }
  }
  if (sky.sunR > 0) {
    out += `<circle cx="${sky.sunX}" cy="${sky.sunY}" r="${sky.sunR * 3.2}" fill="url(#${glow})"/>`;
    out += `<circle cx="${sky.sunX}" cy="${sky.sunY}" r="${sky.sunR}" fill="${sky.sun}"/>`;
  }
  return out;
}
function clouds(seed2, w, color, opacity = 0.5, y0 = 8, y1 = 34) {
  const r = rng(seed2);
  let out = `<g class="drift" opacity="${opacity}">`;
  for (let i = 0; i < 4; i++) {
    const x = r() * w;
    const y = y0 + r() * (y1 - y0);
    const s = 8 + r() * 14;
    out += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(s * 1.8).toFixed(1)}" ry="${(s * 0.45).toFixed(1)}" fill="${color}"/>`;
    out += `<ellipse cx="${(x + s * 0.8).toFixed(1)}" cy="${(y - s * 0.25).toFixed(1)}" rx="${s.toFixed(1)}" ry="${(s * 0.4).toFixed(1)}" fill="${color}"/>`;
  }
  return `${out}</g>`;
}
function ridge(seed2, w, base, height, jag, color, snow) {
  const r = rng(seed2);
  const pts = [[0, base]];
  const steps = 9;
  for (let i = 0; i <= steps; i++) {
    const x = i / steps * w;
    const peak = i % 2 === 1;
    const y = base - (peak ? height * (0.55 + r() * 0.45) : height * r() * jag);
    pts.push([x, y]);
  }
  pts.push([w, base], [w, 200], [0, 200]);
  let out = `<path d="M${pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L")} Z" fill="${color}"/>`;
  if (snow) {
    for (let i = 1; i < pts.length - 3; i++) {
      const [x, y] = pts[i];
      if (y < base - height * 0.7) out += `<path d="M${(x - 5).toFixed(1)} ${(y + 5).toFixed(1)} L${x.toFixed(1)} ${y.toFixed(1)} L${(x + 5).toFixed(1)} ${(y + 5).toFixed(1)} L${(x + 2).toFixed(1)} ${(y + 4).toFixed(1)} L${x.toFixed(1)} ${(y + 6).toFixed(1)} Z" fill="${snow}"/>`;
    }
  }
  return out;
}
function hills(seed2, w, base, amp, color) {
  const r = rng(seed2);
  let d = `M0 ${base}`;
  const n = 4;
  for (let i = 0; i < n; i++) {
    const x0 = i / n * w;
    const x1 = (i + 1) / n * w;
    const cy = base - amp * (0.4 + r() * 0.8);
    d += ` Q${((x0 + x1) / 2).toFixed(1)} ${cy.toFixed(1)} ${x1.toFixed(1)} ${(base - r() * amp * 0.3).toFixed(1)}`;
  }
  return `<path d="${d} L${w} 200 L0 200 Z" fill="${color}"/>`;
}
function sea(w, y, deep, light, h = 200) {
  const g = nextId("sea");
  let out = `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="${deep}"/></linearGradient></defs>`;
  out += `<rect x="0" y="${y}" width="${w}" height="${h - y}" fill="url(#${g})"/>`;
  out += `<g class="wave" opacity="0.55">`;
  for (let row = 0; row < 4; row++) {
    const yy = y + 3 + row * 5;
    let d = `M${-20} ${yy}`;
    for (let x = -20; x < w + 40; x += 10) d += ` q2.5 -1.6 5 0 t5 0`;
    out += `<path d="${d}" fill="none" stroke="${light}" stroke-width="0.6" stroke-opacity="${0.8 - row * 0.15}"/>`;
  }
  return `${out}</g>`;
}
function palm(x, base, s, color, lean = 1) {
  const top = base - 22 * s;
  const tx = x + 4 * s * lean;
  let out = `<path d="M${x} ${base} Q${x + 1 * s * lean} ${base - 12 * s} ${tx} ${top}" stroke="${color}" stroke-width="${1.6 * s}" fill="none"/>`;
  const fronds = [[-11, 3], [-8, -4], [0, -7], [8, -4], [11, 3], [5, 6], [-5, 6]];
  for (const [dx, dy] of fronds) {
    out += `<path d="M${tx} ${top} q${dx * s / 2} ${dy * s / 2 - 3 * s} ${dx * s} ${dy * s}" stroke="${color}" stroke-width="${1.3 * s}" fill="none" stroke-linecap="round"/>`;
  }
  return out;
}
function pine(x, base, s, color) {
  return `<path d="M${x} ${base - 18 * s} L${x - 5 * s} ${base - 7 * s} L${x - 2.5 * s} ${base - 7 * s} L${x - 6 * s} ${base} L${x + 6 * s} ${base} L${x + 2.5 * s} ${base - 7 * s} L${x + 5 * s} ${base - 7 * s} Z" fill="${color}"/>`;
}
function canopy(seed2, w, base, color, count = 9, size = 9) {
  const r = rng(seed2);
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = i / (count - 1) * w + (r() - 0.5) * 8;
    const s = size * (0.7 + r() * 0.6);
    out += `<circle cx="${x.toFixed(1)}" cy="${(base - s * 0.6).toFixed(1)}" r="${s.toFixed(1)}" fill="${color}"/>`;
  }
  return out + `<rect x="0" y="${base - 2}" width="${w}" height="${200 - base}" fill="${color}"/>`;
}
function acacia(x, base, s, color) {
  return `<path d="M${x} ${base} L${x + 1 * s} ${base - 12 * s} L${x - 4 * s} ${base - 16 * s} M${x + 1 * s} ${base - 12 * s} L${x + 5 * s} ${base - 17 * s}" stroke="${color}" stroke-width="${1.3 * s}" fill="none"/>
    <ellipse cx="${x + 0.5 * s}" cy="${base - 17.5 * s}" rx="${11 * s}" ry="${2.6 * s}" fill="${color}"/>`;
}
function reeds(seed2, w, base, color) {
  const r = rng(seed2);
  let out = `<g class="sway">`;
  for (let i = 0; i < 26; i++) {
    const x = r() * w;
    const h = 5 + r() * 9;
    out += `<path d="M${x.toFixed(1)} ${base} q${(r() * 2 - 1).toFixed(1)} ${(-h / 2).toFixed(1)} ${(r() * 3 - 1.5).toFixed(1)} ${(-h).toFixed(1)}" stroke="${color}" stroke-width="0.7" fill="none"/>`;
  }
  return `${out}</g>`;
}
function ship(x, y, s, color, sail = "#e9dfc6") {
  return `<g class="bob" transform="translate(${x} ${y}) scale(${s})">
    <path d="M-14 0 L14 0 L10 5 L-10 5 Z" fill="${color}"/>
    <path d="M-2 0 L-2 -20 M6 0 L6 -15 M-9 0 L-9 -13" stroke="${color}" stroke-width="0.9"/>
    <path d="M-2 -19 Q4 -14 -2 -8 Z M-2 -8 Q5 -4 -2 -1 Z M6 -14 Q11 -10 6 -5 Z M-9 -12 Q-5 -8 -9 -4 Z" fill="${sail}" opacity="0.9"/>
    <path d="M-2 -20 l4 1.2 l-4 1.2 Z" fill="#c8413b"/>
  </g>`;
}
function smoke(x, y, color, n = 5) {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += `<circle class="smoke" style="animation-delay:${(i * 0.7).toFixed(1)}s" cx="${x}" cy="${y}" r="${4 + i}" fill="${color}"/>`;
  }
  return out;
}
function rain(w, h) {
  let out = `<g class="rain" stroke="#b8c6d4" stroke-width="0.4" opacity="0.55">`;
  const r = rng("rain");
  for (let i = 0; i < 40; i++) {
    const x = r() * (w + 40) - 20;
    const y = r() * h;
    out += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} l-3 8"/>`;
  }
  return `${out}</g>`;
}
function fogBank(w, y, color = "#cfd8e0", opacity = 0.55) {
  return `<g class="drift slow" opacity="${opacity}">
    <ellipse cx="${w * 0.2}" cy="${y}" rx="${w * 0.35}" ry="7" fill="${color}"/>
    <ellipse cx="${w * 0.7}" cy="${y + 4}" rx="${w * 0.4}" ry="8" fill="${color}"/>
    <ellipse cx="${w * 0.45}" cy="${y - 6}" rx="${w * 0.3}" ry="5" fill="${color}"/>
  </g>`;
}
var W = 160;
var H = 100;
var REGION_SCENES = {
  "pearl-lagoon": () => skyLayer(SKIES.dawn, W, H) + clouds("pl", W, "#f6c9a4", 0.45) + hills("pl-h", W, 62, 10, "#2b3a4a") + sea(W, 60, "#0f4b5a", "#5fc4c0", H) + `<ellipse cx="80" cy="76" rx="44" ry="8" fill="#7fdad0" opacity="0.35"/><circle class="twinkle" cx="70" cy="74" r="1.2" fill="#fff"/><circle class="twinkle" style="animation-delay:1s" cx="92" cy="78" r="1" fill="#fff"/><path d="M0 72 Q20 64 34 70 L34 100 L0 100 Z" fill="#1d2b22"/>` + palm(14, 72, 1.1, "#0e1712", 1) + palm(26, 72, 0.8, "#0e1712", -1) + `<path d="M120 76 Q140 66 160 70 L160 100 L120 100 Z" fill="#1d2b22"/>` + palm(146, 72, 1, "#0e1712", -1),
  "mangrove-delta": () => skyLayer(SKIES.jade, W, H) + clouds("md", W, "#e6efe0", 0.35) + canopy("md-c", W, 60, "#1f3b30", 10, 8) + sea(W, 66, "#13302c", "#6e9e86", H) + `<g stroke="#0d1c17" stroke-width="0.9" fill="none">` + [20, 52, 88, 122, 146].map((x) => `<path d="M${x} 74 q-4 -8 0 -14 M${x} 74 q4 -8 0 -14 M${x} 60 v-10"/><ellipse cx="${x}" cy="48" rx="10" ry="5" fill="#183329" stroke="none"/>`).join("") + `</g>`,
  "highland-mines": () => skyLayer(SKIES.haze, W, H) + ridge("hm1", W, 60, 40, 0.3, "#5a5f6a", "#eef0f2") + ridge("hm2", W, 74, 26, 0.4, "#3a3a40") + `<path d="M88 74 Q100 58 112 74 Z" fill="#14100c"/><path d="M90 74 L110 74 L108 70 L92 70 Z" fill="#5c3b1f"/><path d="M88 74 L60 100 M112 74 L140 100" stroke="#6b4a2a" stroke-width="1"/><rect x="70" y="82" width="10" height="6" fill="#6b4a2a"/><circle cx="72" cy="89" r="1.6" fill="#222"/><circle cx="78" cy="89" r="1.6" fill="#222"/><circle class="twinkle" cx="74" cy="81" r="1.3" fill="#f6d36b"/>` + hills("hm3", W, 92, 6, "#25221f"),
  "fever-marsh": () => skyLayer(SKIES.haze, W, H) + `<rect width="${W}" height="${H}" fill="#6a7a3a" opacity="0.25"/>` + canopy("fm-c", W, 58, "#2b3a24", 8, 10) + sea(W, 66, "#1e2a18", "#6d7a44", H) + reeds("fm-r", W, 86, "#121a0e") + fogBank(W, 64, "#c9d49a", 0.5) + `<g fill="#d8e27a">${[30, 60, 104, 130].map((x, i) => `<circle class="twinkle" style="animation-delay:${i * 0.6}s" cx="${x}" cy="${50 + i % 2 * 6}" r="0.8"/>`).join("")}</g>`,
  "storm-cape": () => skyLayer(SKIES.storm, W, H) + clouds("sc", W, "#1b222c", 0.9, 4, 28) + `<path class="bolt" d="M118 6 L110 26 L116 26 L106 46" stroke="#e8f0ff" stroke-width="1.2" fill="none"/>` + sea(W, 58, "#0b1620", "#3d5a70", H) + `<path d="M100 58 L118 30 L130 36 L160 34 L160 100 L96 100 Z" fill="#141a20"/><rect x="136" y="22" width="5" height="14" fill="#2a2f35"/><circle class="twinkle" cx="138.5" cy="21" r="2" fill="#ffd77a"/>` + ship(46, 70, 0.9, "#0c1116", "#9aa4ae") + rain(W, H),
  "cedar-ridge": () => skyLayer(SKIES.noon, W, H) + clouds("cr", W, "#ffffff", 0.6) + ridge("cr1", W, 58, 26, 0.5, "#3e5a58") + hills("cr2", W, 74, 12, "#24403a") + [10, 22, 36, 50, 64, 80, 96, 112, 126, 140, 154].map((x, i) => pine(x, 80 + i % 3 * 3, 1 + i % 2 * 0.3, "#13261f")).join("") + hills("cr3", W, 94, 6, "#0f1f18"),
  "golden-savanna": () => skyLayer(SKIES.dusk, W, H) + hills("gs1", W, 70, 8, "#7a4a2a") + `<rect y="70" width="${W}" height="30" fill="#b88a3a"/><g class="sway" stroke="#e0b860" stroke-width="0.5">${Array.from({ length: 50 }, (_, i) => `<path d="M${(i * 3.3).toFixed(1)} 100 l1 -${6 + i % 5}"/>`).join("")}</g>` + acacia(40, 74, 1.3, "#1c120c") + acacia(128, 72, 0.9, "#1c120c") + `<g fill="#1c120c">${[96, 104, 111].map((x) => `<path d="M${x} 72 l1 -3 l1 3 M${x - 1} 69 h4 v-2 h-4 Z"/>`).join("")}</g>`,
  "ruins-of-the-first-builders": () => skyLayer(SKIES.night, W, H, true) + hills("rf1", W, 70, 14, "#14202a") + canopy("rf-c", W, 82, "#0f1a14", 9, 7) + `<g fill="#5a6a66"><rect x="60" y="44" width="7" height="34"/><rect x="92" y="44" width="7" height="34"/><path d="M56 44 L104 44 L104 38 L80 30 L56 38 Z"/><rect x="76" y="52" width="8" height="26" fill="#0b1014"/><rect x="40" y="62" width="6" height="16"/><rect x="114" y="58" width="6" height="20"/></g><circle class="pulse" cx="80" cy="40" r="2.2" fill="#7ee0d0"/><g stroke="#2c5a3c" stroke-width="0.8" fill="none"><path d="M62 46 q-4 10 0 20"/><path d="M98 46 q4 8 0 18"/></g>`,
  "whispering-falls": () => skyLayer(SKIES.jade, W, H) + ridge("wf1", W, 66, 44, 0.2, "#2c4a42") + `<rect x="70" y="24" width="18" height="56" fill="#cfeaf0" opacity="0.85"/><g class="fall" stroke="#ffffff" stroke-width="0.6" opacity="0.8">${[72, 76, 80, 84].map((x) => `<path d="M${x} 20 v70"/>`).join("")}</g>` + canopy("wf-c", W, 76, "#1b3a2c", 10, 9) + sea(W, 82, "#18403a", "#8fd0c8", H) + fogBank(W, 82, "#e8f6f4", 0.6),
  "smugglers-cove": () => skyLayer(SKIES.night, W, H, true) + `<path d="M0 30 Q30 40 40 70 L0 70 Z M160 26 Q128 40 120 70 L160 70 Z" fill="#141c24"/>` + sea(W, 66, "#08121c", "#2c4c6a", H) + ship(80, 74, 1, "#05080c", "#3a4656") + `<circle class="twinkle" cx="26" cy="58" r="1.6" fill="#ffb84d"/><circle class="twinkle" style="animation-delay:1.3s" cx="132" cy="60" r="1.4" fill="#ffb84d"/><path d="M0 84 Q40 78 70 90 L0 100 Z" fill="#1a1a18"/><rect x="18" y="80" width="7" height="5" fill="#5a3a1c"/><rect x="27" y="81" width="6" height="4" fill="#4a2e16"/>`,
  "jaguar-wilds": () => skyLayer(SKIES.dusk, W, H) + canopy("jw1", W, 52, "#2a2a1a", 9, 12) + canopy("jw2", W, 70, "#16190f", 11, 11) + canopy("jw3", W, 90, "#0a0c07", 12, 10) + `<g class="blink"><circle cx="58" cy="78" r="1.1" fill="#f2c94c"/><circle cx="63" cy="78" r="1.1" fill="#f2c94c"/></g><g class="blink" style="animation-delay:2.2s"><circle cx="112" cy="62" r="0.9" fill="#f2c94c"/><circle cx="116" cy="62" r="0.9" fill="#f2c94c"/></g>`,
  "spice-terraces": () => skyLayer(SKIES.dawn, W, H) + ridge("st1", W, 50, 30, 0.3, "#5a3a4a") + Array.from({ length: 6 }, (_, i) => `<path d="M0 ${52 + i * 8} Q80 ${46 + i * 8} 160 ${52 + i * 8} L160 ${60 + i * 8} Q80 ${54 + i * 8} 0 ${60 + i * 8} Z" fill="${["#8a4a2a", "#a2602e", "#7a5a24", "#9a4a22", "#6e4a22", "#5a3618"][i]}"/><g fill="${["#d9622b", "#e8a23a", "#c9402a", "#e0b040", "#b8462a", "#d0702a"][i]}">${Array.from({ length: 12 }, (_2, k) => `<circle cx="${6 + k * 13.5}" cy="${54 + i * 8}" r="1.3"/>`).join("")}</g>`).join(""),
  "great-river-mouth": () => skyLayer(SKIES.noon, W, H) + clouds("gr", W, "#ffffff", 0.55) + canopy("gr-c", W, 58, "#2a4a34", 10, 7) + `<path d="M0 100 L0 70 Q50 58 80 60 Q120 60 160 54 L160 100 Z" fill="#6a8c80"/>` + sea(W, 66, "#2e5a5a", "#a8d4c4", H) + `<path d="M70 60 Q80 75 60 100 L110 100 Q92 76 96 60 Z" fill="#8cbcb0" opacity="0.55"/>` + ship(120, 74, 0.6, "#1a2420"),
  "smoking-peak": () => skyLayer(SKIES.ember, W, H) + `<path d="M40 100 L74 28 L86 28 L124 100 Z" fill="#2a1612"/><path d="M74 28 L80 40 L86 28 Z" fill="#ff7a2a"/><path d="M78 30 Q72 60 66 100 L72 100 Q78 62 82 32 Z" fill="#ff5a1a" opacity="0.8"/>` + smoke(80, 24, "#3a2a28", 6) + `<g class="ember">${[70, 84, 90, 76].map((x, i) => `<circle style="animation-delay:${i * 0.5}s" cx="${x}" cy="28" r="0.8" fill="#ffb060"/>`).join("")}</g>` + hills("sp", W, 90, 8, "#120a08"),
  "coral-reefs": () => skyLayer(SKIES.noon, W, H) + clouds("co", W, "#ffffff", 0.5) + sea(W, 46, "#0d4a66", "#58c8d8", H) + `<g opacity="0.9">${[[20, 80, "#e8706a"], [44, 86, "#f0a24a"], [70, 78, "#c85a9a"], [100, 84, "#e8706a"], [128, 80, "#f0c04a"], [148, 88, "#c85a9a"]].map(([x, y, c]) => `<path d="M${x} ${y} v-11 M${x} ${y - 4} l-4 -5 v-3 M${x} ${y - 6} l4 -4 v-3 M${x - 4} ${y - 9} l-2 -2 M${x + 4} ${y - 10} l2 -3" stroke="${c}" stroke-width="1.8" stroke-linecap="round" fill="none"/>`).join("")}</g><path d="M0 66 Q40 60 80 66 Q120 72 160 64" stroke="#ffffff" stroke-width="0.7" fill="none" class="wave" opacity="0.8"/>`,
  "sandbar-haven": () => skyLayer(SKIES.dawn, W, H) + sea(W, 56, "#1c4a64", "#8ac4d0", H) + `<path d="M10 76 Q80 64 150 76 Q80 80 10 76 Z" fill="#e8d4a2"/>` + palm(60, 72, 0.7, "#2a2418") + `<path d="M88 72 l8 -8 l8 8 Z" fill="#c9a44c"/><path d="M96 64 v-6" stroke="#2a2418" stroke-width="0.7"/>` + ship(126, 66, 0.55, "#2a2418"),
  "fog-banks": () => skyLayer(SKIES.haze, W, H) + sea(W, 60, "#4a5a64", "#a8b6bc", H) + `<path d="M90 60 L104 40 L120 60 Z" fill="#5a6a70" opacity="0.5"/>` + fogBank(W, 52, "#e8eef0", 0.85) + fogBank(W, 70, "#dfe7ea", 0.75) + fogBank(W, 86, "#eef3f4", 0.65),
  "old-fortress": () => skyLayer(SKIES.dusk, W, H) + hills("of", W, 74, 16, "#2a1e1e") + `<g fill="#4a3e3a"><rect x="44" y="46" width="72" height="30"/>` + Array.from({ length: 9 }, (_, i) => `<rect x="${44 + i * 8.5}" y="42" width="5" height="5"/>`).join("") + `<rect x="36" y="34" width="14" height="42"/><rect x="110" y="34" width="14" height="42"/><rect x="36" y="30" width="4" height="4"/><rect x="41" y="30" width="4" height="4"/><rect x="46" y="30" width="4" height="4"/><rect x="110" y="30" width="4" height="4"/><rect x="115" y="30" width="4" height="4"/><rect x="120" y="30" width="4" height="4"/></g><path d="M74 76 L74 60 Q80 54 86 60 L86 76 Z" fill="#120c0c"/><path d="M117 30 v-12" stroke="#1a1212" stroke-width="0.8"/><path class="flag" d="M117 18 l9 2 l-9 3 Z" fill="#c8413b"/>` + hills("of2", W, 92, 4, "#1a1212"),
  "tidal-flats": () => skyLayer(SKIES.dusk, W, H) + `<rect y="58" width="${W}" height="42" fill="#8a6a5a"/>` + Array.from({ length: 6 }, (_, i) => `<path class="wave" d="M-10 ${62 + i * 6} Q40 ${59 + i * 6} 80 ${62 + i * 6} T170 ${62 + i * 6}" stroke="#f0b088" stroke-width="0.7" fill="none" opacity="${0.6 - i * 0.07}"/>`).join("") + `<ellipse cx="80" cy="64" rx="30" ry="3" fill="#ffcf7a" opacity="0.4"/><g fill="#2a1a14"><path d="M30 78 l2 -6 l2 6 Z"/><path d="M118 82 l2 -7 l2 7 Z"/></g>`,
  "gilded-valley": () => skyLayer(SKIES.dawn, W, H) + ridge("gv1", W, 56, 34, 0.3, "#4a3a54") + ridge("gv2", W, 70, 20, 0.4, "#2e3a2c") + `<path d="M40 100 Q70 76 78 66 Q84 76 120 100 Z" fill="#3a5a34"/><path d="M78 66 Q76 80 70 100 L88 100 Q82 80 80 66 Z" fill="#ffd970" opacity="0.85"/><ellipse cx="80" cy="68" rx="40" ry="10" fill="#ffd36a" opacity="0.25" class="pulse"/><g fill="#ffe08a">${[60, 74, 92, 104].map((x, i) => `<circle class="twinkle" style="animation-delay:${i * 0.8}s" cx="${x}" cy="${84 + i % 2 * 4}" r="0.9"/>`).join("")}</g>`
};
function fallbackRegion(region) {
  const mountain = region.tags.includes("Mountain");
  const coastal = region.tags.includes("Coastal");
  return skyLayer(region.hazard ? SKIES.storm : SKIES.noon, W, H) + (mountain ? ridge(region.id, W, 64, 36, 0.3, "#3a4048", "#e8ecef") : hills(region.id, W, 64, 14, "#2c4034")) + (coastal ? sea(W, 70, "#163a4a", "#6aaab8", H) : hills(`${region.id}b`, W, 84, 8, "#18261c"));
}
function regionArt(region) {
  const scene = REGION_SCENES[region.id]?.() ?? fallbackRegion(region);
  return `<svg class="art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${scene}</svg>`;
}
function chartBack(index) {
  const r = rng(`coast${index}`);
  let coast = `M0 ${40 + r() * 20}`;
  for (let x = 0; x <= W; x += 16) coast += ` L${x} ${(36 + r() * 30).toFixed(1)}`;
  const g = nextId("parch");
  return `<svg class="art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><radialGradient id="${g}" cx="0.5" cy="0.45" r="0.8"><stop offset="0" stop-color="#2a3a4c"/><stop offset="1" stop-color="#101824"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#${g})"/>
    <g stroke="#c9a44c" stroke-opacity="0.14" stroke-width="0.4">${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 20} 0 V${H}"/>`).join("")}${Array.from({ length: 6 }, (_, i) => `<path d="M0 ${i * 20} H${W}"/>`).join("")}</g>
    <path d="${coast} L${W} 0 L0 0 Z" fill="#c9a44c" fill-opacity="0.08" stroke="#c9a44c" stroke-opacity="0.45" stroke-width="0.6" stroke-dasharray="2 1.5"/>
    <g transform="translate(80 58)" stroke="#c9a44c" stroke-opacity="0.55" fill="none" stroke-width="0.6">
      <circle r="14"/><circle r="10" stroke-dasharray="1 1.4"/>
      <path d="M0 -18 L3 0 L0 18 L-3 0 Z M-18 0 L0 3 L18 0 L0 -3 Z" fill="#c9a44c" fill-opacity="0.18"/>
    </g>
    ${fogBank(W, 40, "#d9e2ea", 0.28)}${fogBank(W, 78, "#d9e2ea", 0.22)}
    <text x="80" y="92" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="8" fill="#c9a44c" fill-opacity="0.75" font-style="italic">terra incognita</text>
  </svg>`;
}
function figure(x, base, s, hat, prop, sash, ink = "#0b0d12", facing = 1) {
  const head = base - 27 * s;
  let out = `<g>`;
  out += `<path d="M${x - 4 * s} ${base} L${x - 3 * s} ${base - 11 * s} L${x - 5.5 * s} ${base - 22 * s} Q${x} ${base - 25 * s} ${x + 5.5 * s} ${base - 22 * s} L${x + 3 * s} ${base - 11 * s} L${x + 4 * s} ${base} L${x + 1 * s} ${base} L${x} ${base - 9 * s} L${x - 1 * s} ${base} Z" fill="${ink}"/>`;
  out += `<circle cx="${x}" cy="${head}" r="${3.2 * s}" fill="${ink}"/>`;
  out += `<path d="M${x - 5 * s} ${base - 21 * s} L${x + 5 * s} ${base - 14 * s}" stroke="${sash}" stroke-width="${1.6 * s}"/>`;
  if (hat === "tricorn") out += `<path d="M${x - 6 * s} ${head - 1.5 * s} Q${x} ${head - 7 * s} ${x + 6 * s} ${head - 1.5 * s} Q${x} ${head - 3 * s} ${x - 6 * s} ${head - 1.5 * s} Z" fill="${ink}"/>`;
  if (hat === "morion") out += `<path d="M${x - 6 * s} ${head - 1 * s} Q${x} ${head - 9 * s} ${x + 6 * s} ${head - 1 * s} Z M${x} ${head - 7 * s} l0 -${2.5 * s}" fill="${ink}" stroke="${ink}" stroke-width="${0.8 * s}"/>`;
  if (hat === "bandana") out += `<path d="M${x - 3.4 * s} ${head - 1 * s} Q${x} ${head - 5 * s} ${x + 3.4 * s} ${head - 1 * s} l${2.5 * s * facing} ${2 * s}" fill="${sash}" stroke="${sash}" stroke-width="${0.6 * s}"/>`;
  if (hat === "cap") out += `<path d="M${x - 3.5 * s} ${head - 1 * s} Q${x} ${head - 5.5 * s} ${x + 3.5 * s} ${head - 1 * s} Z" fill="${ink}"/>`;
  const hx = x + 5 * s * facing;
  const hy = base - 17 * s;
  if (prop === "musket") out += `<path d="M${hx} ${hy + 6 * s} L${hx + 4 * s * facing} ${hy - 18 * s}" stroke="${ink}" stroke-width="${1.2 * s}"/>`;
  if (prop === "pike") out += `<path d="M${hx} ${base} L${hx + 2 * s * facing} ${base - 46 * s}" stroke="${ink}" stroke-width="${0.9 * s}"/><path d="M${hx + 2 * s * facing} ${base - 46 * s} l-${1.5 * s} ${4 * s} l${3 * s} 0 Z" fill="${ink}"/>`;
  if (prop === "spyglass") out += `<path d="M${x + 2 * s * facing} ${head + 0.5 * s} L${x + 12 * s * facing} ${head - 2 * s}" stroke="${ink}" stroke-width="${1.6 * s}" stroke-linecap="round"/><circle cx="${x + 12.5 * s * facing}" cy="${head - 2.1 * s}" r="${0.9 * s}" fill="#ffe7a0"/>`;
  if (prop === "sword") out += `<path d="M${hx} ${hy} L${hx + 9 * s * facing} ${hy - 12 * s}" stroke="#d8dde4" stroke-width="${0.9 * s}"/><path d="M${hx - 1 * s} ${hy - 1 * s} l${2 * s} ${2 * s}" stroke="${ink}" stroke-width="${1.2 * s}"/>`;
  if (prop === "book") out += `<rect x="${hx - 1 * s}" y="${hy - 2 * s}" width="${5 * s}" height="${4 * s}" fill="#e9dfc6"/>`;
  if (prop === "flag") out += `<path d="M${hx} ${base} L${hx} ${base - 44 * s}" stroke="${ink}" stroke-width="${0.9 * s}"/><path class="flag" d="M${hx} ${base - 44 * s} q${7 * s * facing} ${2 * s} ${14 * s * facing} 0 v${8 * s} q-${7 * s * facing} ${2 * s} -${14 * s * facing} 0 Z" fill="${sash}"/>`;
  if (prop === "lantern") out += `<circle cx="${hx}" cy="${hy + 3 * s}" r="${1.6 * s}" fill="#ffc861" class="twinkle"/>`;
  return out + `</g>`;
}
var CW = 100;
var CH = 80;
function cardBackdrop(seed2, sky, land) {
  let out = skyLayer(sky, CW, CH, sky === SKIES.night);
  out += clouds(`${seed2}c`, CW, "#ffffff", 0.18, 6, 24);
  if (land === "coast") out += sea(CW, 52, "#10283a", "#5a8aa0", CH) + ship(74, 52, 0.55, "#0c1218");
  if (land === "hills") out += hills(`${seed2}h`, CW, 56, 10, "#2a2a28") + hills(`${seed2}h2`, CW, 66, 6, "#151513");
  if (land === "jungle") out += canopy(`${seed2}j`, CW, 54, "#16261c", 8, 9);
  if (land === "mountain") out += ridge(`${seed2}m`, CW, 54, 30, 0.3, "#3a3e48", "#e6eaee");
  if (land === "deck") out += sea(CW, 46, "#0c1a26", "#3a6a86", CH) + `<path d="M0 62 L100 58 L100 80 L0 80 Z" fill="#3a2414"/><path d="M0 62 L100 58" stroke="#6a4424" stroke-width="1"/>`;
  if (land === "camp") out += hills(`${seed2}k`, CW, 60, 6, "#2a2620") + `<path d="M70 60 L80 44 L90 60 Z" fill="#c9b48a"/><path d="M80 44 L80 60" stroke="#6a5a3a" stroke-width="0.6"/>`;
  return out;
}
function ground(color = "#08090c") {
  return `<path d="M0 70 Q50 64 100 70 L100 80 L0 80 Z" fill="${color}"/>`;
}
function musketFlash(x, y) {
  return `<g class="flash"><circle cx="${x}" cy="${y}" r="3" fill="#ffe08a"/><circle cx="${x}" cy="${y}" r="6" fill="#ffb84d" opacity="0.4"/></g>` + smoke(x + 3, y - 1, "#c8c0b0", 3);
}
var CARD_SCENES = {
  deckhand: (a) => cardBackdrop("dh", SKIES.noon, "deck") + `<path d="M30 20 L36 62 M30 20 L70 30" stroke="#2a1a10" stroke-width="0.8"/>` + figure(40, 72, 1, "bandana", "none", a) + `<path d="M44 52 Q52 40 36 22" stroke="#c9a66a" stroke-width="0.9" fill="none"/><rect x="58" y="60" width="10" height="10" fill="#5a3a1c"/>`,
  musketeer: (a) => cardBackdrop("mu", SKIES.dusk, "hills") + ground() + figure(42, 72, 1.15, "tricorn", "musket", a) + musketFlash(57, 34),
  pikeman: (a) => cardBackdrop("pk", SKIES.dawn, "hills") + ground() + figure(30, 72, 0.9, "morion", "pike", a) + figure(50, 74, 1.05, "morion", "pike", a) + figure(70, 72, 0.9, "morion", "pike", a),
  "dispatch-rider": (a) => cardBackdrop("dr", SKIES.dusk, "hills") + ground() + `<g class="gallop"><path d="M30 60 Q40 52 58 54 L66 46 L70 48 L64 56 L66 66 L62 66 L60 58 L44 60 L40 68 L36 68 L38 60 Z" fill="#0b0d12"/>` + figure(48, 54, 0.6, "tricorn", "none", a) + `</g><path d="M10 66 h14 M14 62 h10" stroke="#d8b080" stroke-width="0.6" opacity="0.6"/>`,
  pathfinder: (a) => cardBackdrop("pf", SKIES.noon, "mountain") + `<path d="M20 70 L60 40 L100 52 L100 80 L0 80 Z" fill="#1a1c20"/>` + figure(52, 46, 0.9, "cap", "spyglass", a),
  "ox-cart-teamsters": (a) => cardBackdrop("ox", SKIES.dawn, "hills") + ground() + `<path d="M50 54 h26 v8 h-26 Z" fill="#5a3a1c"/><circle cx="56" cy="64" r="5" fill="none" stroke="#0b0d12" stroke-width="1.2"/><circle cx="72" cy="64" r="5" fill="none" stroke="#0b0d12" stroke-width="1.2"/><path d="M22 60 Q28 52 40 54 L46 50 L48 56 L44 60 L44 68 L40 68 L40 62 L28 62 L28 68 L24 68 Z" fill="#0b0d12"/>` + figure(14, 72, 0.8, "cap", "none", a) + `<rect x="54" y="48" width="6" height="6" fill="#7a5226"/><rect x="62" y="47" width="7" height="7" fill="#8a6230"/>`,
  "hired-guide": (a) => cardBackdrop("hg", SKIES.jade, "jungle") + ground("#0a120c") + figure(36, 72, 1, "none", "lantern", a) + figure(60, 70, 0.85, "tricorn", "musket", "#4a4a4a") + `<path d="M22 72 L50 60 L80 66" stroke="#c9a44c" stroke-width="0.5" stroke-dasharray="1.5 1.5" fill="none"/>`,
  "veteran-marine": (a) => cardBackdrop("vm", SKIES.storm, "coast") + rain(CW, CH) + ground() + figure(44, 74, 1.25, "tricorn", "sword", a),
  "field-surgeon": (a) => cardBackdrop("fs", SKIES.night, "camp") + `<circle cx="30" cy="62" r="10" fill="#ffb84d" opacity="0.18" class="pulse"/>` + ground() + figure(34, 72, 1, "cap", "lantern", a) + `<path d="M48 70 h20 v-3 h-20 Z" fill="#e9dfc6"/>` + figure(58, 72, 0.5, "none", "none", "#7a2a2a"),
  "forced-march": (a) => cardBackdrop("fm", SKIES.dawn, "hills") + `<path d="M50 80 L44 52 L56 52 Z" fill="#6a5238" opacity="0.6"/>` + [0, 1, 2, 3, 4].map((i) => figure(30 + i * 9, 72 - i * 3, 0.8 - i * 0.1, "tricorn", "musket", a)).join(""),
  "salted-provisions": () => cardBackdrop("sp", SKIES.noon, "deck") + [[20, 56], [36, 56], [28, 44], [62, 58], [76, 56]].map(([x, y]) => `<ellipse cx="${x + 6}" cy="${y + 6}" rx="7" ry="8" fill="#6a4220"/><path d="M${x} ${y + 2} h12 M${x} ${y + 10} h12" stroke="#2a1a0c" stroke-width="0.8"/>`).join(""),
  "rally-the-banners": (a) => cardBackdrop("rb", SKIES.dusk, "hills") + ground() + figure(30, 72, 0.9, "tricorn", "musket", a, "#0b0d12", -1) + figure(50, 74, 1.1, "tricorn", "flag", a) + figure(72, 72, 0.9, "tricorn", "musket", a),
  "musket-volley": (a) => cardBackdrop("mv", SKIES.dusk, "hills") + ground() + [20, 36, 52].map((x) => figure(x, 72, 0.85, "tricorn", "musket", a)).join("") + [24, 40, 56].map((x) => musketFlash(x + 6, 40)).join(""),
  stockade: () => cardBackdrop("sk", SKIES.dawn, "jungle") + ground("#0a120c") + Array.from({ length: 12 }, (_, i) => `<path d="M${14 + i * 6} 70 V${44 + i % 2 * 3} l3 -4 l3 4 V70 Z" fill="#5a3a1c" stroke="#2a1a0c" stroke-width="0.4"/>`).join("") + `<path d="M50 34 v-10" stroke="#2a1a0c" stroke-width="0.7"/><path class="flag" d="M50 24 l9 2 l-9 3 Z" fill="#c9a44c"/>`,
  "plant-the-flag": (a) => cardBackdrop("pf2", SKIES.dawn, "coast") + `<path d="M0 80 L0 62 Q40 50 70 60 L100 80 Z" fill="#101410"/>` + figure(44, 60, 1, "tricorn", "flag", a)
};
function fallbackCard(card, accent) {
  const sub = card.subtypes;
  if (card.type === "crew") {
    const hat = sub.includes("rogue") ? "bandana" : sub.includes("soldier") ? "morion" : sub.includes("sailor") || sub.includes("officer") ? "tricorn" : "cap";
    const prop = sub.includes("scout") ? "spyglass" : sub.includes("scholar") ? "book" : sub.includes("rogue") || sub.includes("officer") ? "sword" : sub.includes("soldier") || sub.includes("mercenary") ? "musket" : "none";
    const land = sub.includes("sailor") ? "coast" : sub.includes("scout") ? "mountain" : "hills";
    return cardBackdrop(card.id, SKIES.dusk, land) + ground() + figure(46, 72, 1.1, hat, prop, accent);
  }
  if (card.type === "order") return cardBackdrop(card.id, SKIES.storm, "hills") + ground() + musketFlash(50, 40);
  if (card.type === "outpost") return CARD_SCENES.stockade(accent);
  return CARD_SCENES["plant-the-flag"](accent);
}
function cardArt(card, accent) {
  const scene = CARD_SCENES[card.id]?.(accent) ?? fallbackCard(card, accent);
  return `<svg class="art" viewBox="0 0 ${CW} ${CH}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g transform="translate(50 76) scale(1.28) translate(-50 -76)">${scene}</g></svg>`;
}
var ICONS = {
  gold: `<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 9.5v5"/>`,
  timber: `<rect x="4" y="8" width="16" height="8" rx="4"/><ellipse cx="20" cy="12" rx="1.6" ry="4"/><path d="M8 10.5h7M8 13.5h5"/>`,
  spice: `<path d="M12 4c4 3 5 8 0 16c-5-8-4-13 0-16z"/><path d="M12 7v10"/>`,
  sword: `<path d="M5 19L17 7M14 5h5v5M7 14l3 3M4 20l2-2"/>`,
  shield: `<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9c-4-1.5-7-4.5-7-9V6z"/>`,
  banner: `<path d="M6 21V4h12l-3 4l3 4H6"/>`,
  compass: `<circle cx="12" cy="12" r="8.5"/><path d="M12 5l2.2 7L12 19l-2.2-7z"/>`,
  star: `<path d="M12 3l2.6 5.6l6.1.7l-4.5 4.2l1.2 6l-5.4-3l-5.4 3l1.2-6l-4.5-4.2l6.1-.7z"/>`,
  boot: `<path d="M8 3h5v9l6 3v4H6l1-5z"/>`,
  hazard: `<path d="M12 3l9.5 17h-19z"/><path d="M12 9v5M12 16.5v.5"/>`,
  crate: `<rect x="4" y="6" width="16" height="13" rx="1"/><path d="M4 10h16M10 6v4"/>`,
  scroll: `<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7"/><path d="M6 4a2 2 0 0 0-2 2v1h4M7 20a2 2 0 0 1-2-2v-1h12"/>`,
  eye: `<path d="M2 12s3.5-6 10-6s10 6 10 6s-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>`,
  deck: `<rect x="5" y="5" width="11" height="15" rx="1.5"/><path d="M8 3h9.5A1.5 1.5 0 0 1 19 4.5V17"/>`,
  ship: `<path d="M3 16h18l-3 4H6zM12 3v13M12 4l6 9h-6M12 6l-5 7h5"/>`
};
function icon(name, cls = "") {
  const body = ICONS[name] ?? ICONS.star;
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
function compassRose() {
  const spokes = Array.from({ length: 32 }, (_, i) => {
    const a = i / 32 * Math.PI * 2;
    const long = i % 4 === 0;
    const r = long ? 260 : i % 2 === 0 ? 200 : 150;
    return `<path d="M0 0 L${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}" stroke-width="${long ? 1 : 0.5}"/>`;
  }).join("");
  return `<svg viewBox="-300 -300 600 600" aria-hidden="true"><g fill="none" stroke="#c9a44c">${spokes}<circle r="120" stroke-width="0.8"/><circle r="128" stroke-width="0.4"/><circle r="210" stroke-width="0.4" stroke-dasharray="3 6"/></g>
    <g fill="#c9a44c" fill-opacity="0.5"><path d="M0 -150 L14 0 L0 150 L-14 0 Z"/><path d="M-150 0 L0 14 L150 0 L0 -14 Z"/></g></svg>`;
}

// apps/table/auth.ts
var AUTH_REQUIRED = false;
var API = location.hostname.endsWith("pureforge.dev") ? "https://meridian-api.pureforge.dev" : "http://localhost:8787";
var ApiError = class extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
};
var slowNotice = null;
function onSlow(listener) {
  slowNotice = listener;
}
async function api(path, body) {
  const timer = window.setTimeout(() => slowNotice?.(true), 3e3);
  try {
    const response = await fetch(`${API}${path}`, {
      method: body === void 0 ? "GET" : "POST",
      credentials: "include",
      headers: body === void 0 ? {} : { "content-type": "application/json" },
      body: body === void 0 ? void 0 : JSON.stringify(body)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new ApiError(response.status, data.error ?? "Something went wrong.");
    return data;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    throw new ApiError(0, "Can't reach the Meridian server. Check your connection and try again.");
  } finally {
    window.clearTimeout(timer);
    slowNotice?.(false);
  }
}
async function currentUser() {
  try {
    return (await api("/auth/me")).user;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) return null;
    throw err;
  }
}
var signIn = (name, password) => api("/auth/login", { name, password }).then((r) => r.user);
var join = (code, name, password) => api("/auth/join", { code, name, password }).then((r) => r.user);
var redeemReset = (code, password) => api("/auth/reset", { code, password }).then((r) => r.user);
var signOut = () => api("/auth/logout", {});
var esc = (value) => value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
function signInGate(host) {
  return new Promise((resolve) => {
    let tab = new URLSearchParams(location.search).has("invite") ? "join" : "signin";
    let message = "";
    let busy = false;
    let slow = false;
    const invite = new URLSearchParams(location.search).get("invite") ?? "";
    const values = { "a-code": invite };
    const keep = () => host.querySelectorAll("input").forEach((input) => values[input.id] = input.value);
    onSlow((s) => {
      slow = s;
      draw2();
    });
    function field(id, label, type, auto) {
      return `<label class="field" for="${id}"><span>${label}</span><input id="${id}" name="${id}" type="${type}" autocomplete="${auto}" value="${esc(values[id] ?? "")}" ${type === "password" ? 'minlength="8"' : ""} ${busy ? "readonly" : ""} required /></label>`;
    }
    function draw2(fresh = false) {
      if (!fresh) keep();
      const body = tab === "signin" ? `${field("a-name", "Name", "text", "username")}${field("a-pass", "Password", "password", "current-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Sign in</button>` : tab === "join" ? `${field("a-code", "Invite code", "text", "off")}${field("a-name", "Pick a display name", "text", "username")}${field("a-pass", "Pick a password (8 or more characters)", "password", "new-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Join Meridian</button>` : `${field("a-code", "Reset code from the admin", "text", "off")}${field("a-pass", "New password (8 or more characters)", "password", "new-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Set new password</button>`;
      host.hidden = false;
      host.innerHTML = `<section class="cover-card auth-card" style="--accent:#c9a44c">
        <div class="cover-ship" aria-hidden="true">\u2693</div>
        <p class="kicker">Set 1 \xB7 First Landing</p>
        <h2>Meridian</h2>
        <div class="auth-tabs" role="tablist">
          <button type="button" role="tab" aria-selected="${tab === "signin"}" data-tab="signin">Sign in</button>
          <button type="button" role="tab" aria-selected="${tab === "join"}" data-tab="join">I have an invite</button>
          <button type="button" role="tab" aria-selected="${tab === "reset"}" data-tab="reset">Reset password</button>
        </div>
        <form class="auth-form" novalidate>${body}</form>
        ${message ? `<p class="alert" role="alert">${esc(message)}</p>` : ""}
        ${slow ? `<p class="muted small">Waking the server. The first sign-in of the day can take up to a minute.</p>` : ""}
        <p class="muted small">Meridian is invite-only. Ask the admin for a code.</p>
      </section>`;
      const first = Array.from(host.querySelectorAll("input")).find((input) => !input.value) ?? host.querySelector("input");
      if (!busy && !message) first?.focus();
    }
    host.addEventListener("click", (event) => {
      const target2 = event.target instanceof Element ? event.target.closest("[data-tab]") : null;
      if (!target2 || busy) return;
      keep();
      tab = target2.dataset.tab;
      message = "";
      draw2();
    });
    host.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (busy) return;
      keep();
      const value = (id) => values[id] ?? "";
      busy = true;
      message = "";
      draw2();
      try {
        const user = tab === "signin" ? await signIn(value("a-name"), value("a-pass")) : tab === "join" ? await join(value("a-code"), value("a-name"), value("a-pass")) : await redeemReset(value("a-code"), value("a-pass"));
        host.hidden = true;
        host.innerHTML = "";
        if (invite) history.replaceState(null, "", location.pathname);
        resolve(user);
      } catch (err) {
        message = err instanceof Error ? err.message : String(err);
        busy = false;
        keep();
        delete values["a-pass"];
        draw2(true);
      }
    });
    draw2();
  });
}

// apps/table/main.ts
var mode = "captain";
var HUMAN = 0;
var AI_SEAT = 1;
var vsComputer = () => mode !== "hotseat";
var seatName = (player) => {
  if (!vsComputer()) return player === 0 ? "Player 1" : "Player 2";
  return player === HUMAN ? "You" : mode === "captain" ? "The Captain" : "The Deckhand";
};
var SEAT_COLOR = { 0: "#d4af5a", 1: "#38b6ad" };
var state = createGame({ seed: 1 });
var seed = 1;
var seat = 0;
var covered = false;
var log = [];
var actions = [];
var picked = /* @__PURE__ */ new Set();
var hits = {};
var armConcede = false;
var error = "";
var note = "";
var selected = null;
var fx2 = null;
var routes = /* @__PURE__ */ new Map();
var trayActions = [];
var inspecting = null;
var aiTimer = null;
function required(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`#${id} is missing.`);
  return node;
}
var table = required("table");
var cover = required("cover");
var SETUP_KEY = "meridian.setup";
function loadSetup() {
  const fallback = { mode: "captain", deck: STARTER_DECKS[0].id, foeDeck: "random" };
  try {
    const saved = JSON.parse(localStorage.getItem(SETUP_KEY) ?? "null");
    if (!saved) return fallback;
    const decks = new Set(STARTER_DECKS.map((d) => d.id));
    return {
      mode: saved.mode === "deckhand" || saved.mode === "hotseat" ? saved.mode : "captain",
      deck: saved.deck && decks.has(saved.deck) ? saved.deck : fallback.deck,
      foeDeck: saved.foeDeck && (saved.foeDeck === "random" || decks.has(saved.foeDeck)) ? saved.foeDeck : "random"
    };
  } catch {
    return fallback;
  }
}
var setup = loadSetup();
var choosing = true;
var foeDeckName = "";
function deckOf(choice) {
  if (choice === "random") return STARTER_DECKS[Math.floor(Math.random() * STARTER_DECKS.length)];
  return STARTER_DECKS.find((d) => d.id === choice) ?? STARTER_DECKS[0];
}
var FACTION_COLOR = Object.fromEntries(factions.map((f2) => [f2.id, f2.color]));
FACTION_COLOR.neutral = "#8a7a5a";
FACTION_COLOR.basic = "#8a7a5a";
required("rose").innerHTML = compassRose();
function yourDecision() {
  const decision = state.decision;
  if (!decision || decision.player !== seat) return null;
  return decision;
}
function esc2(value) {
  return value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
}
var cardName = (id) => getCard(id).name;
var cap2 = (word) => word.charAt(0).toUpperCase() + word.slice(1);
var view = () => getPlayerView(state, seat);
function coastLabel(index, seen) {
  const region = seen.regions[index];
  if (region?.regionId) return getRegion(region.regionId).name;
  return `Coast ${index + 1}`;
}
function actsOf(seen) {
  return seen.legal.flatMap((item) => item.kind === "act" && item.action.type !== "concede" ? [item.action] : []);
}
function crewLabel(seen, iid) {
  const crew = seen.crews.find((c) => c.iid === iid);
  if (!crew) return "a crew";
  const where = crew.where.zone === "harbor" ? "Harbor" : coastLabel(crew.where.index, seen);
  return `${cardName(crew.cardId)} (${where})`;
}
function actionLabel(action, seen) {
  if (action.type === "end") return "End turn";
  if (action.type === "pass") return "Pass";
  if (action.type === "stow") return "Stow as Supply";
  if (action.type === "abandon") return "Abandon";
  if (action.type === "march") return `March to ${action.dest.zone === "harbor" ? "Harbor" : coastLabel(action.dest.index, seen)}`;
  if (action.type === "play") {
    if (action.dest?.zone === "harbor") return "Deploy to Harbor";
    if (action.dest?.zone === "region") return `Deploy to ${coastLabel(action.dest.index, seen)}`;
    if (action.target) return `Target ${crewLabel(seen, action.target)}`;
    if (action.region != null) return `Play at ${coastLabel(action.region, seen)}`;
    return "Play";
  }
  return "Choose";
}
function routeKey(action) {
  if (action.type === "stow") return "stores";
  if (action.type === "march") return action.dest.zone === "harbor" ? "harbor" : `r${action.dest.index}`;
  if (action.type === "play") {
    if (action.dest) return action.dest.zone === "harbor" ? "harbor" : `r${action.dest.index}`;
    if (action.target) return `c${action.target}`;
    if (action.region != null) return `r${action.region}`;
    return "self";
  }
  return null;
}
function selectionActions(seen) {
  if (!selected) return [];
  return actsOf(seen).filter((action) => (action.type === "play" || action.type === "stow" || action.type === "march") && action.iid === selected);
}
var GOOD_ICON = { gold: "gold", timber: "timber", spice: "spice" };
var KEYWORD_HELP = {
  swift: "Can March the turn it is deployed.",
  entrench: "+1 Might in a Clash where you held the Region at the start of Claim.",
  hardy: "Prevent all damage from Region traits.",
  raid: "When you take a Region from your opponent, steal a random Stores card.",
  scout: "See face-down Regions next to it; from Harbor, see Regions 1 and 5.",
  escort: "Enemy Orders can't target your other crews here.",
  ambush: "Can also be played during an Ambush window at Claim."
};
function accentOf(owner2) {
  return owner2 == null ? "#c9a44c" : SEAT_COLOR[owner2];
}
function rulesText(def) {
  const keys = def.keywords.map(cap2);
  let body = def.text;
  for (const key of keys) body = body.replace(new RegExp(`^${key}\\.?\\s*`), "");
  const keyLine = keys.length ? `<b class="kw" title="${esc2(def.keywords.map((k) => `${cap2(k)}: ${KEYWORD_HELP[k] ?? ""}`).join(" "))}">${esc2(keys.join(" \xB7 "))}</b>` : "";
  return `${keyLine}${body ? `<span>${esc2(body)}</span>` : ""}${def.flavor ? `<i>${esc2(def.flavor)}</i>` : ""}`;
}
function typeLine(def) {
  const subs = def.subtypes.map(cap2).join(", ");
  const amb = def.keywords.includes("ambush") && def.type === "order" ? ": Ambush" : "";
  return `${cap2(def.type)}${subs ? `: ${subs}` : amb}`;
}
function cardFace(def, opts = {}) {
  const accent = accentOf(opts.owner ?? null);
  const goods = def.cost.goods.map((g) => `<span class="good good-${g}" title="Requires ${cap2(g)}">${icon(GOOD_ICON[g])}</span>`).join("");
  const stats = def.type === "crew" ? `<div class="stats"><span class="stat might" title="Might"><b>${def.might}</b></span><span class="stat endure" title="Endurance">${icon("shield")}<b>${def.endurance}</b></span></div>` : "";
  return `<article class="card type-${def.type} rarity-${def.rarity} faction-${def.faction} ${opts.cls ?? ""}" style="--accent:${accent};--faction:${FACTION_COLOR[def.faction]};${opts.style ?? ""}" ${opts.iid ? `data-card="${esc2(opts.iid)}"` : ""} ${opts.attrs ?? ""}>
    <div class="card-inner">
      <div class="card-head">
        <span class="coin" title="Supply cost"><b>${def.cost.supply}</b></span>
        <div class="goods">${goods}</div>
        <h3 class="card-name">${esc2(def.name)}</h3>
        <span class="seal" style="--faction:${FACTION_COLOR[def.faction]}" title="${def.faction === "basic" ? "Basic" : def.faction === "captains" ? "Free Captains" : cap2(def.faction)}">${icon("compass")}</span>
      </div>
      <div class="card-art">${cardArt(def, accent)}</div>
      <div class="type-line">${esc2(typeLine(def))}</div>
      <div class="text-box">${rulesText(def)}</div>
      ${stats}
      <div class="card-foot"><span class="gem gem-${def.rarity}"></span><span>${def.number ? `${def.number}/140` : "Basic"}</span><span>Meridian Studio</span></div>
      <div class="glare"></div>
      ${opts.badge ?? ""}
    </div>
  </article>`;
}
function cardBack(cls = "", style = "") {
  return `<div class="card back ${cls}" style="${style}"><div class="card-inner"><div class="back-face">${icon("compass", "back-rose")}<span>Meridian</span></div></div></div>`;
}
function unit(seen, crew) {
  const def = getCard(crew.cardId);
  const might = (def.might ?? 0) + crew.mods.reduce((t, m) => t + m.might, 0);
  const endure = (def.endurance ?? 0) + crew.mods.reduce((t, m) => t + m.endurance, 0);
  const route = routes.get(`c${crew.iid}`) ? `c${crew.iid}` : "";
  const mine = crew.owner === seat;
  const canAct = mine && actsOf(seen).some((a) => a.type === "march" && a.iid === crew.iid);
  const decision = yourDecision();
  const assignable = decision?.type === "assign" && decision.targets.includes(crew.iid);
  const cls = [
    "unit",
    `owner-${crew.owner}`,
    canAct ? "ready" : "",
    selected === crew.iid ? "selected" : "",
    route ? "target" : "",
    assignable ? "assignable" : "",
    fx2?.landed.has(crew.iid) ? "fx-land" : "",
    fx2?.marched.has(crew.iid) ? "fx-march" : "",
    fx2?.damaged.has(crew.iid) ? "fx-hit" : ""
  ].filter(Boolean).join(" ");
  const pips = Array.from({ length: endure }, (_, i) => `<i class="${i < crew.damage ? "lost" : ""}"></i>`).join("");
  const pop = fx2?.damaged.get(crew.iid) ? `<span class="pop">\u2212${fx2.damaged.get(crew.iid)}</span>` : "";
  const keys = def.keywords.length ? `<span class="unit-keys">${def.keywords.map((k) => cap2(k).slice(0, 1)).join("")}</span>` : "";
  const stepper = assignable ? `<div class="stepper"><button type="button" data-bump="${esc2(crew.iid)}" data-dir="-1" aria-label="Less damage">\u2212</button><b>${hits[crew.iid] ?? 0}</b><button type="button" data-bump="${esc2(crew.iid)}" data-dir="1" aria-label="More damage">+</button></div>` : "";
  const clickable = canAct || route;
  return `<div class="${cls}" style="--accent:${SEAT_COLOR[crew.owner]}" ${clickable ? `role="button" tabindex="0"` : ""} data-crew="${esc2(crew.iid)}" ${route ? `data-route="${route}"` : ""} title="${esc2(`${def.name}. Might ${might}, Endurance ${endure}${crew.damage ? `, ${crew.damage} damage` : ""}. ${def.text}`)}">
    <div class="unit-art">${cardArt(def, SEAT_COLOR[crew.owner])}</div>
    <div class="unit-name">${esc2(def.name)}</div>
    ${keys}
    <div class="unit-stats"><span class="might">${might}</span><span class="endure">${endure - crew.damage}</span></div>
    <div class="pips">${pips}</div>
    ${pop}${stepper}
  </div>`;
}
function ghost(g) {
  const def = getCard(g.cardId);
  return `<div class="unit owner-${g.owner} fx-burn" style="--accent:${SEAT_COLOR[g.owner]}" aria-hidden="true">
    <div class="unit-art">${cardArt(def, SEAT_COLOR[g.owner])}</div><div class="unit-name">${esc2(def.name)}</div></div>`;
}
function regionColumn(seen, index) {
  const spot = seen.regions[index];
  const known = spot.regionId ? getRegion(spot.regionId) : null;
  const foe = seat === 0 ? 1 : 0;
  const route = routes.has(`r${index}`) ? `r${index}` : "";
  const decision = yourDecision();
  const surveying = decision && (decision.type === "surveyLook" || decision.type === "surveyFlip") && decision.options.includes(index);
  const pickedHere = picked.has(String(index));
  const crewsOf2 = (owner2) => seen.crews.filter((c) => c.where.zone === "region" && c.where.index === index && c.owner === owner2);
  const lane = (owner2) => {
    const units = crewsOf2(owner2).map((c) => unit(seen, c)).join("") + (fx2?.ghosts.filter((g) => g.where === index && g.owner === owner2).map(ghost).join("") ?? "");
    return `<div class="lane lane-${owner2 === seat ? "you" : "foe"}">${units || `<span class="lane-empty"></span>`}</div>`;
  };
  const mFor = (owner2) => crewsOf2(owner2).reduce((t, c) => t + (getCard(c.cardId).might ?? 0) + c.mods.reduce((s, m) => s + m.might, 0), 0);
  const contested2 = crewsOf2(0).length > 0 && crewsOf2(1).length > 0;
  const clashHere = state.claim && state.decision && "region" in state.decision && state.decision.region === index;
  let face;
  if (spot.faceUp && known) {
    const goods = known.goods.map((g) => `<span class="good good-${g}" title="${cap2(g)}">${icon(GOOD_ICON[g])}</span>`).join("");
    const banner = spot.controller != null ? `<span class="flag-banner ${fx2?.control.has(index) ? "fx-plant" : ""}" style="--accent:${SEAT_COLOR[spot.controller]}" title="${seatName(spot.controller)} controls">${icon("banner")}</span>` : "";
    const post = spot.outpost ? `<span class="outpost-chip" style="--accent:${SEAT_COLOR[spot.outpost.owner]}" title="${esc2(getCard(spot.outpost.cardId).text)}">${icon("crate")}${esc2(cardName(spot.outpost.cardId))}</span>` : "";
    face = `<div class="region-card ${known.hazard ? "hazard" : ""} ${fx2?.flips.has(index) ? "fx-reveal" : ""}">
      <div class="region-art">${regionArt(known)}</div>
      <div class="region-head"><h3>${esc2(known.name)}</h3><span class="renown-ribbon" title="Renown at each Claim">${icon("star")}<b>${known.renown}</b></span></div>
      ${banner}
      <div class="region-goods">${goods}</div>
      ${post}
      <p class="trait ${known.hazard ? "hazard" : ""}">${known.hazard ? icon("hazard") : ""}${esc2(known.text)}</p>
    </div>`;
  } else if (known) {
    face = `<div class="region-card peeked">
      <div class="region-art">${regionArt(known)}</div>
      <div class="region-head"><h3>${esc2(known.name)}</h3><span class="renown-ribbon">${icon("star")}<b>${known.renown}</b></span></div>
      <span class="peek-tag">${icon("eye")} Seen from afar</span>
      <p class="trait">${esc2(known.text)}</p>
    </div>`;
  } else {
    face = `<div class="region-card hidden">
      <div class="region-art">${chartBack(index)}</div>
      <div class="region-head"><h3>Coast ${index + 1}</h3><span class="renown-ribbon unknown"><b>?</b></span></div>
      <p class="trait muted">Unexplored. March in to reveal it.</p>
    </div>`;
  }
  const pick = surveying ? `<button type="button" class="survey-pick ${pickedHere ? "on" : ""}" data-pick="${index}">${icon("eye")}${pickedHere ? "Chosen" : decision.type === "surveyLook" ? "Look" : "Flip"}</button>` : "";
  const tally = contested2 ? `<div class="tally"><span style="color:${SEAT_COLOR[foe]}">${mFor(foe)}</span>${icon("sword")}<span style="color:${SEAT_COLOR[seat]}">${mFor(seat)}</span></div>` : "";
  return `<section class="region-col ${route ? "target" : ""} ${contested2 ? "contested" : ""} ${clashHere ? "clashing" : ""} ${pickedHere ? "picked" : ""}" style="--n:${index}" ${route ? `data-route="${route}" role="button" tabindex="0"` : ""} aria-label="${esc2(coastLabel(index, seen))}">
    ${lane(foe)}
    <div class="region-slot">${face}${pick}${tally}${clashHere ? `<div class="clash-burst">${icon("sword")}</div>` : ""}</div>
    ${lane(seat)}
  </section>`;
}
function storesPile(seen, player) {
  const mine = player === seat;
  const total = mine ? seen.stores.length : seen.foeStores.total;
  const ready = mine ? seen.stores.filter((c) => !c.exhausted).length : seen.foeStores.ready;
  const route = mine && routes.has("stores") ? "stores" : "";
  const stack = Array.from({ length: Math.min(total, 6) }, (_, i) => `<span class="pile-card" style="--i:${i}"></span>`).join("");
  const pips = Array.from({ length: total }, (_, i) => `<i class="${i < ready ? "lit" : ""}"></i>`).join("");
  return `<div class="zone stores ${route ? "target" : ""}" ${route ? `data-route="stores" role="button" tabindex="0"` : ""} title="${mine ? esc2(seen.stores.map((c) => `${cardName(c.cardId)}${c.exhausted ? " (spent)" : ""}`).join(", ") || "Empty") : "Hidden"}">
    <div class="pile">${stack || `<span class="pile-empty"></span>`}</div>
    <div class="zone-label">Stores</div>
    <div class="supply"><b>${ready}</b><small>/${total}</small></div>
    <div class="supply-pips">${pips}</div>
  </div>`;
}
function harbor(seen, player) {
  const route = player === seat && routes.has("harbor") ? "harbor" : "";
  const units = seen.crews.filter((c) => c.where.zone === "harbor" && c.owner === player).map((c) => unit(seen, c)).join("") + (fx2?.ghosts.filter((g) => g.where === "harbor" && g.owner === player).map(ghost).join("") ?? "");
  return `<div class="zone harbor ${route ? "target" : ""}" ${route ? `data-route="harbor" role="button" tabindex="0"` : ""}>
    <div class="zone-label">${icon("ship")} Harbor</div>
    <div class="dock">${units || `<span class="muted small">No crews waiting</span>`}</div>
  </div>`;
}
function ventureSlots(seen, player) {
  const mine = player === seat;
  const slots = seen.ventures[player].map((card, slot) => {
    if (!card) return `<div class="venture-slot empty">${icon("scroll")}<span>Venture</span></div>`;
    const leave = mine ? actsOf(seen).find((a) => a.type === "abandon" && a.slot === slot) : void 0;
    const btn = leave ? `<button type="button" class="chip danger" data-act="${trayActions.push(leave) - 1}">Abandon</button>` : "";
    return `<div class="venture-slot">${cardFace(getCard(card.cardId), { cls: "mini", owner: player })}${btn}</div>`;
  }).join("");
  return `<div class="zone ventures"><div class="zone-label">${icon("scroll")} Ventures</div><div class="venture-row">${slots}</div></div>`;
}
function deckZone(seen, player) {
  const mine = player === seat;
  const deck = mine ? seen.deck : seen.foeDeck;
  const discard = seen.discard[player];
  const top = discard.at(-1);
  return `<div class="zone deckzone">
    <div class="deck-stack" title="Deck">${cardBack("tiny")}<b>${deck}</b></div>
    <div class="discard-top" title="${esc2(discard.map((c) => cardName(c.cardId)).join(", ") || "Discard is empty")}">${top ? cardFace(getCard(top.cardId), { cls: "tiny", owner: player }) : `<span class="discard-empty"></span>`}<b>${discard.length}</b></div>
  </div>`;
}
function crest(player, seen) {
  const turn = seen.decision?.player === player;
  const init = seen.initiative === player;
  return `<div class="crest ${turn ? "active" : ""}" style="--accent:${SEAT_COLOR[player]}">
    <div class="crest-badge">${icon("ship")}</div>
    <div><div class="crest-name">${seatName(player)}${player === seat && !vsComputer() ? " <small>(you)</small>" : ""}${vsComputer() && player === AI_SEAT ? ` <small>computer</small>` : ""}</div>
    <div class="crest-sub">${icon("star")} ${seen.renown[player]} Renown${init ? ` \xB7 ${icon("compass")} Initiative` : ""}</div>
    <div class="crest-deck">${esc2(player === HUMAN || !vsComputer() && player === 0 ? deckOf(setup.deck).name : foeDeckName)}</div></div>
  </div>`;
}
function foeRow(seen) {
  const foe = seat === 0 ? 1 : 0;
  const backs = Array.from({ length: seen.foeHand }, (_, i) => cardBack("tiny", `--i:${i};--n:${seen.foeHand}`)).join("");
  return `<section class="row foe-row">
    ${crest(foe, seen)}
    <div class="foe-hand" title="${seen.foeHand} cards in hand">${backs}</div>
    ${storesPile(seen, foe)}
    ${harbor(seen, foe)}
    ${ventureSlots(seen, foe)}
    ${deckZone(seen, foe)}
  </section>`;
}
function youRow(seen) {
  return `<section class="row you-row">
    ${crest(seat, seen)}
    ${harbor(seen, seat)}
    ${storesPile(seen, seat)}
    ${ventureSlots(seen, seat)}
    ${deckZone(seen, seat)}
  </section>`;
}
function handFan(seen) {
  const choosing2 = seen.decision?.type === "mulligan" || seen.decision?.type === "discard";
  const all = actsOf(seen);
  const n = seen.hand.length;
  const cards = seen.hand.map((card, i) => {
    const def = getCard(card.cardId);
    const playable2 = all.some((a) => (a.type === "play" || a.type === "stow") && a.iid === card.iid);
    const cls = [
      "in-hand",
      choosing2 ? "choosable" : playable2 ? "playable" : "idle",
      selected === card.iid ? "selected" : "",
      picked.has(card.iid) ? "set-aside" : ""
    ].join(" ");
    const badge = picked.has(card.iid) ? `<span class="aside-badge">${seen.decision?.type === "discard" ? "Discard" : "Set aside"}</span>` : "";
    return cardFace(def, {
      iid: card.iid,
      owner: seat,
      cls,
      style: `--i:${i};--n:${n};`,
      attrs: `role="button" tabindex="0" ${choosing2 ? `data-pick="${esc2(card.iid)}"` : `data-select="${esc2(card.iid)}"`}`,
      badge
    });
  }).join("");
  const spoils = seen.stores.filter((s) => s.taken && all.some((a) => a.type === "play" && a.iid === s.iid));
  const loot = spoils.map((card, i) => cardFace(getCard(card.cardId), {
    iid: card.iid,
    owner: seat,
    cls: `in-hand playable spoils ${selected === card.iid ? "selected" : ""}`,
    style: `--i:${n + i};--n:${n + spoils.length};`,
    attrs: `role="button" tabindex="0" data-select="${esc2(card.iid)}"`,
    badge: `<span class="spoils-badge">From Stores</span>`
  })).join("");
  return `<section class="hand" style="--n:${n + spoils.length}">${cards || (loot ? "" : `<p class="muted">Your hand is empty.</p>`)}${loot}</section>`;
}
function prompt(seen) {
  const decision = yourDecision();
  if (seen.over) {
    if (seen.over.winner == null) return "The voyage ends in a draw.";
    const why = seen.over.reason === "renown" ? "reaching 15 Renown" : seen.over.reason === "rounds" ? "the long count" : seen.over.reason === "concede" ? "concession" : seen.over.reason;
    const verb = vsComputer() && seen.over.winner === HUMAN ? "win" : "wins";
    return `${seatName(seen.over.winner)} ${verb} by ${why}.`;
  }
  if (!decision) return vsComputer() ? `${seatName(AI_SEAT)} is thinking\u2026` : "Waiting for the other captain.";
  if (decision.type === "mulligan") return "Click any cards to set aside. You draw that many back, once.";
  if (decision.type === "discard") return "Your hand is over 8. Choose cards to discard.";
  if (decision.type === "surveyLook") return `Survey: choose up to ${decision.max} hidden coast${decision.max > 1 ? "s" : ""} to look at.`;
  if (decision.type === "surveyFlip") return "You see them now. Choose any to flip face up, or none.";
  if (decision.type === "ambush") return `Ambush at ${coastLabel(decision.region, seen)}. Play an Ambush order, or pass.`;
  if (decision.type === "assign") return `Strike! Split ${decision.amount} damage among the enemy crews at ${coastLabel(decision.region, seen)}.`;
  if (decision.type === "pick") {
    const what = decision.effects.map((e) => effectText(e, cardName(decision.ctx.cardId))).join(", then ");
    return `${cardName(decision.ctx.cardId)}: choose ${decision.kind === "region" ? "a Region" : "a crew"} (glowing) to ${what}.`;
  }
  if (decision.type === "choose") return `${cardName(decision.ctx.cardId)}: choose one.`;
  if (selected) {
    const card = seen.hand.find((c) => c.iid === selected) ?? seen.stores.find((c) => c.iid === selected);
    const crew = seen.crews.find((c) => c.iid === selected);
    if (card) return `${cardName(card.cardId)}: choose where it goes. Glowing spots are legal.`;
    if (crew) return `${cardName(crew.cardId)}: choose where to March.`;
  }
  return "Your turn. Pick a card or a ready crew. Stow one card for Supply.";
}
function eventLine(event, viewer) {
  const who = (p) => p === viewer ? "You" : seatName(p);
  if (event.type === "draw") return event.player === viewer && event.cardIds.length ? `You draw ${event.cardIds.map(cardName).join(", ")}.` : event.amount ? `${who(event.player)} draw${event.player === viewer ? "" : "s"} ${event.amount}.` : "";
  if (event.type === "deckout") return `${who(event.player)} ran out of cards. +2 Renown to the other captain.`;
  if (event.type === "renown") return `${who(event.player)} gain${event.player === viewer ? "" : "s"} ${event.amount} Renown.`;
  if (event.type === "flip") return `${getRegion(event.regionId).name} is revealed.`;
  if (event.type === "damage") return event.prevented ? "Hardy shrugs off the hazard." : `A crew takes ${event.amount} damage.`;
  if (event.type === "defeat") return `${cardName(event.cardId)} falls.`;
  if (event.type === "control") {
    const region = state.regions[event.index];
    const where = region?.faceUp ? getRegion(region.regionId).name : `Coast ${event.index + 1}`;
    return event.player == null ? `${where} is abandoned.` : `${who(event.player)} take${event.player === viewer ? "" : "s"} ${where}.`;
  }
  if (event.type === "play") return `${who(event.player)} play${event.player === viewer ? "" : "s"} ${cardName(event.cardId)}.`;
  if (event.type === "raid") return `${who(event.player)} raid${event.player === viewer ? "" : "s"} ${cardName(event.cardId)}.`;
  if (event.type === "gameover") return event.winner == null ? "The voyage is a draw." : event.winner === viewer ? "You win the coast." : `${seatName(event.winner)} wins the coast.`;
  if (event.type === "built") return `${who(event.player)} build${event.player === viewer ? "" : "s"} ${cardName(event.cardId)}.`;
  if (event.type === "razed") return `${cardName(event.cardId)} is razed.`;
  if (event.type === "ventureDone") return `${who(event.player)} complete${event.player === viewer ? "" : "s"} ${cardName(event.cardId)}.`;
  if (event.type === "returned") return "A crew falls back to its Harbor.";
  if (event.type === "discarded") return `${who(event.player)} lose${event.player === viewer ? "" : "s"} ${cardName(event.cardId)} from ${event.from === "hand" ? "hand" : "Stores"}.`;
  return "";
}
function track(seen) {
  const ticks = Array.from({ length: 16 }, (_, i) => `<span class="tick ${i % 5 === 0 ? "major" : ""}" style="--v:${i}">${i % 5 === 0 ? i : ""}</span>`).join("");
  const token = (p) => `<span class="token ${fx2 && fx2.renown[p] ? "fx-rise" : ""}" style="--v:${Math.min(15, seen.renown[p])};--accent:${SEAT_COLOR[p]}" title="${seatName(p)}: ${seen.renown[p]}">${icon("ship")}<b>${seen.renown[p]}</b></span>`;
  return `<aside class="track" aria-label="Renown race to 15"><div class="track-title">Renown</div><div class="track-bar">${ticks}${token(0)}${token(1)}<span class="goal">15</span></div></aside>`;
}
function helm(seen) {
  const all = actsOf(seen);
  const end = all.find((a) => a.type === "end");
  const pass = all.find((a) => a.type === "pass");
  const subset = seen.legal.find((item) => item.kind === "subset");
  const assign = seen.legal.find((item) => item.kind === "assign");
  const big = [];
  if (end) big.push(`<button type="button" class="brass big" data-act="${trayActions.push(end) - 1}">End turn</button>`);
  if (pass) big.push(`<button type="button" class="brass big" data-act="${trayActions.push(pass) - 1}">Pass</button>`);
  if (subset && subset.kind === "subset") {
    const ok = picked.size >= subset.min && picked.size <= subset.max;
    const word = subset.actionType === "mulligan" ? picked.size === 0 ? "Keep hand" : `Set aside ${picked.size}` : subset.actionType === "discard" ? `Discard ${picked.size} of ${subset.min}` : subset.actionType === "surveyLook" ? picked.size ? `Look at ${picked.size}` : "Look at none" : picked.size ? `Flip ${picked.size}` : "Flip none";
    big.push(`<button type="button" class="brass big" data-go="subset" ${ok ? "" : "disabled"}>${word}</button>`);
  }
  if (assign && assign.kind === "assign") {
    const sum = assign.targets.reduce((t, iid) => t + (hits[iid] ?? 0), 0);
    big.push(`<button type="button" class="brass big" data-go="assign" ${sum === assign.amount ? "" : "disabled"}>Strike ${sum} / ${assign.amount}</button>`);
  }
  const decisionNow = yourDecision();
  const chooseButtons = decisionNow?.type === "choose" ? decisionNow.options.map((option, index) => {
    const label = option.map((e) => effectText(e, cardName(decisionNow.ctx.cardId))).join(", then ");
    return `<button type="button" class="brass big" data-act="${trayActions.push({ type: "choose", index }) - 1}">${esc2(label.charAt(0).toUpperCase() + label.slice(1))}</button>`;
  }).join("") : "";
  if (chooseButtons) big.push(chooseButtons);
  const tray = selectionActions(seen).map((a) => `<button type="button" class="chip" data-act="${trayActions.push(a) - 1}">${esc2(actionLabel(a, seen))}</button>`).join("");
  const orders = seen.decision?.type === "ambush" ? all.filter((a) => a.type === "play" && !selected) : [];
  const ambushHint = orders.length ? `<p class="small muted">Pick an Ambush order from your hand.</p>` : "";
  const phase = state.claim ? "Claim" : seen.decision?.type === "mulligan" ? "Mulligan" : "Command";
  const lines = (fx2?.lines.length ? fx2.lines : redactEvents(log, seat).slice(-6).map((e) => eventLine(e, seat)).filter(Boolean)).slice(-7);
  return `<aside class="helm">
    <div class="helm-top">
      <div class="round"><small>Round</small><b>${seen.round}</b></div>
      <div class="phase"><small>Phase</small><b>${phase}</b></div>
      <div class="init" style="--accent:${SEAT_COLOR[seen.initiative]}" title="Initiative">${icon("compass")}<small>${seatName(seen.initiative)}</small></div>
    </div>
    <p class="prompt">${esc2(prompt(seen))}</p>
    ${error ? `<p class="alert">${esc2(error)}</p>` : ""}
    ${note ? `<p class="small muted note">${esc2(note)}</p>` : ""}
    ${ambushHint}
    ${tray ? `<div class="tray">${tray}<button type="button" class="chip quiet" data-go="deselect">Cancel</button></div>` : ""}
    <div class="big-row">${big.join("")}</div>
    <ol class="log">${lines.map((l, i) => `<li style="--d:${i}" class="${fx2 ? "fx-line" : ""}">${esc2(l)}</li>`).join("") || `<li class="muted">The voyage begins.</li>`}</ol>
    ${seen.over ? "" : `<button type="button" class="chip ${armConcede ? "danger" : "quiet"} concede" data-go="concede">${armConcede ? "Concede? Click again" : "Concede"}</button>`}
  </aside>`;
}
function computeRoutes(seen) {
  routes = /* @__PURE__ */ new Map();
  const decision = yourDecision();
  if (decision?.type === "pick") {
    for (const choice of decision.options) routes.set(decision.kind === "region" ? `r${choice}` : `c${choice}`, { type: "pick", choice });
    return;
  }
  for (const action of selectionActions(seen)) {
    const key = routeKey(action);
    if (key && !routes.has(key)) routes.set(key, action);
  }
}
function inspectOverlay() {
  if (!inspecting) return "";
  return `<div class="inspect" data-go="close-inspect"><div class="inspect-card">${cardFace(getCard(inspecting), { cls: "huge", owner: seat })}
    <div class="inspect-keys">${getCard(inspecting).keywords.map((k) => `<p><b>${cap2(k)}.</b> ${esc2(KEYWORD_HELP[k] ?? "")}</p>`).join("")}<p class="muted small">Click anywhere to close.</p></div></div></div>`;
}
var FACTION_NAME2 = Object.fromEntries(factions.map((f2) => [f2.id, f2.name]));
var FACTION_PLAN = Object.fromEntries(factions.map((f2) => [f2.id, f2.plan]));
function deckPicker() {
  const tiles = STARTER_DECKS.map((deck) => {
    const on2 = setup.deck === deck.id;
    const keys = deck.keyCards.map((id) => cardFace(getCard(id), { cls: "peek", attrs: `data-inspect="${id}" title="See ${esc2(getCard(id).name)} full size"` })).join("");
    return `<div class="deck-tile ${on2 ? "on" : ""}" role="radio" aria-checked="${on2}" tabindex="0" data-deck="${deck.id}" style="--faction:${FACTION_COLOR[deck.faction]}">
      <div class="tile-band"><span class="tile-crest">${icon("compass")}</span>${esc2(FACTION_NAME2[deck.faction] ?? "")}</div>
      <h3>${esc2(deck.name)}</h3>
      <p class="tile-plan">${esc2(FACTION_PLAN[deck.faction] ?? "")}</p>
      <p class="tile-blurb">${esc2(deck.blurb)}</p>
      <div class="tile-keys">${keys}</div>
      <p class="tile-names">${deck.keyCards.map((id) => esc2(getCard(id).name)).join(" \xB7 ")}</p>
      <span class="tile-check">${on2 ? "Your deck" : "Choose"}</span>
    </div>`;
  }).join("");
  const modes = [
    ["captain", "The Captain", "A sharp computer opponent"],
    ["deckhand", "The Deckhand", "An easier computer opponent"],
    ["hotseat", "A friend", "Two players, one screen"]
  ];
  const modeButtons = modes.map(([value, name, note2]) => `<button type="button" class="seg ${setup.mode === value ? "on" : ""}" aria-pressed="${setup.mode === value}" data-mode="${value}"><b>${name}</b><small>${note2}</small></button>`).join("");
  const foes = [["random", "Random"], ...STARTER_DECKS.map((d) => [d.id, d.name])].map(([value, name]) => `<button type="button" class="chip ${setup.foeDeck === value ? "on" : ""}" aria-pressed="${setup.foeDeck === value}" data-foe="${value}">${esc2(name)}</button>`).join("");
  return `<section class="picker">
    <p class="kicker">Choose your expedition</p>
    <h2>Which flag do you sail under?</h2>
    <div class="deck-grid" role="radiogroup" aria-label="Your deck">${tiles}</div>
    <div class="picker-foot">
      <div class="picker-group"><span class="zone-label">Your opponent</span><div class="segs">${modeButtons}</div></div>
      <div class="picker-group"><span class="zone-label">${setup.mode === "hotseat" ? "Your friend's deck" : "Their deck"}</span><div class="foe-chips">${foes}</div></div>
      <button type="button" class="brass big sail" data-go="sail">Set sail</button>
    </div>
    <p class="muted small picker-hint">Click a card to see it full size. Each deck is 40 cards: 24 from its faction, 14 Basics and 2 Neutral.</p>
  </section>`;
}
function saveSetup() {
  try {
    localStorage.setItem(SETUP_KEY, JSON.stringify(setup));
  } catch {
  }
}
function render() {
  if (choosing) {
    table.innerHTML = "";
    cover.hidden = false;
    cover.innerHTML = deckPicker() + inspectOverlay();
    return;
  }
  const seen = view();
  trayActions = [];
  computeRoutes(seen);
  document.body.dataset.hour = ["dawn", "noon", "dusk", "night"][Math.floor((seen.round - 1) / 3) % 4];
  if (covered && !seen.over) {
    table.innerHTML = "";
    cover.hidden = false;
    const waiting = seen.decision?.type === "mulligan" ? "Choose your opening hand." : seen.decision?.type === "ambush" ? "An Ambush window is open." : seen.decision?.type === "assign" ? "Assign your strike." : seen.decision?.type?.startsWith("survey") ? "Survey the coast." : "Your turn to command.";
    cover.innerHTML = `<section class="cover-card" style="--accent:${SEAT_COLOR[seat]}">
      <div class="cover-ship">${icon("ship")}</div>
      <p class="kicker">Hand the screen across</p>
      <h2>${esc2(seatName(seat))}</h2>
      <p>${esc2(waiting)}</p>
      <p class="muted">Round ${seen.round} \xB7 Renown ${seen.renown[0]} to ${seen.renown[1]}</p>
      <button type="button" class="brass big" data-go="sit">Take the helm</button>
    </section>`;
    return;
  }
  cover.hidden = true;
  cover.innerHTML = "";
  const over = seen.over ? `<div class="victory" style="--accent:${seen.over.winner == null ? "#c9a44c" : SEAT_COLOR[seen.over.winner]}"><div><p class="kicker">The voyage is over</p><h2>${esc2(prompt(seen))}</h2><div class="victory-actions"><button type="button" class="brass big" data-go="again">Sail again</button><button type="button" class="chip" data-go="change">Change decks</button></div></div></div>` : "";
  table.innerHTML = `
    <div class="stage ${selected ? "selecting" : ""}">
      ${track(seen)}
      ${foeRow(seen)}
      <section class="map">${[0, 1, 2, 3, 4].map((i) => regionColumn(seen, i)).join("")}</section>
      ${youRow(seen)}
      ${helm(seen)}
      ${handFan(seen)}
    </div>
    ${over}${inspectOverlay()}`;
  fx2 = null;
}
function collectFx(before, after, events) {
  const out = { flips: /* @__PURE__ */ new Set(), damaged: /* @__PURE__ */ new Map(), landed: /* @__PURE__ */ new Set(), marched: /* @__PURE__ */ new Set(), control: /* @__PURE__ */ new Set(), renown: [0, 0], ghosts: [], lines: [] };
  const prev = new Map(before.crews.map((c) => [c.iid, c]));
  for (const crew of after.crews) {
    const was = prev.get(crew.iid);
    if (!was) out.landed.add(crew.iid);
    else if (JSON.stringify(was.where) !== JSON.stringify(crew.where)) out.marched.add(crew.iid);
  }
  for (const event of events) {
    if (event.type === "flip") out.flips.add(event.index);
    if (event.type === "damage" && !event.prevented) out.damaged.set(event.iid, (out.damaged.get(event.iid) ?? 0) + event.amount);
    if (event.type === "control") out.control.add(event.index);
    if (event.type === "renown") out.renown[event.player] += event.amount;
    if (event.type === "defeat") {
      const was = prev.get(event.iid);
      if (was) out.ghosts.push({ cardId: was.cardId, owner: was.owner, where: was.where.zone === "harbor" ? "harbor" : was.where.index });
    }
  }
  return out;
}
function send(action) {
  const prevPlayer = state.decision?.player ?? null;
  const before = state;
  try {
    const result = applyAction(state, action);
    state = result.state;
    log.push(...result.events);
    actions.push(action);
    error = "";
    const next2 = state.decision?.player ?? null;
    const viewer = vsComputer() ? HUMAN : next2 ?? seat;
    const batch = collectFx(before, state, result.events);
    batch.lines = redactEvents(result.events, viewer).map((e) => eventLine(e, viewer)).filter(Boolean);
    fx2 = batch;
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
    render();
    return;
  }
  const next = state.decision?.player ?? null;
  picked = /* @__PURE__ */ new Set();
  hits = {};
  armConcede = false;
  selected = null;
  if (!vsComputer() && next != null && next !== prevPlayer) {
    covered = true;
    seat = next;
  }
  render();
  scheduleComputer();
}
function scheduleComputer() {
  if (aiTimer != null) window.clearTimeout(aiTimer);
  aiTimer = null;
  if (!vsComputer() || state.over || state.decision?.player !== AI_SEAT) return;
  const level = mode;
  aiTimer = window.setTimeout(() => {
    aiTimer = null;
    if (state.over || state.decision?.player !== AI_SEAT) return;
    let action;
    try {
      action = chooseAction(getPlayerView(state, AI_SEAT), level, Math.random);
    } catch (err) {
      error = `The computer could not move: ${err instanceof Error ? err.message : String(err)}`;
      render();
      return;
    }
    send(action);
  }, AI_CONFIG.thinkDelay);
}
function boot(nextSeed) {
  seed = nextSeed >>> 0 || 1;
  mode = setup.mode;
  const mine = deckOf(setup.deck);
  const theirs = deckOf(setup.foeDeck);
  foeDeckName = theirs.name;
  state = createGame({ seed, decks: [mine.cards, theirs.cards] });
  choosing = false;
  if (vsComputer()) {
    seat = HUMAN;
    covered = false;
  } else {
    seat = state.decision?.player ?? 0;
    covered = state.decision != null;
  }
  log = [];
  actions = [];
  picked = /* @__PURE__ */ new Set();
  hits = {};
  armConcede = false;
  error = "";
  note = "";
  selected = null;
  fx2 = null;
  inspecting = null;
  render();
  scheduleComputer();
}
function activate(target2) {
  if (target2.dataset.go === "concede") {
    if (!armConcede) {
      armConcede = true;
      render();
      return;
    }
    send({ type: "concede", player: vsComputer() ? HUMAN : seat });
    return;
  }
  armConcede = false;
  if (target2.dataset.go === "close-inspect") {
    inspecting = null;
    render();
    return;
  }
  if (target2.dataset.inspect) {
    inspecting = target2.dataset.inspect;
    render();
    return;
  }
  if (target2.dataset.deck) {
    setup = { ...setup, deck: target2.dataset.deck };
    saveSetup();
    render();
    return;
  }
  if (target2.dataset.mode) {
    setup = { ...setup, mode: target2.dataset.mode };
    saveSetup();
    render();
    return;
  }
  if (target2.dataset.foe) {
    setup = { ...setup, foeDeck: target2.dataset.foe };
    saveSetup();
    render();
    return;
  }
  if (target2.dataset.go === "sail") {
    boot(1 + Math.floor(Math.random() * 999999));
    return;
  }
  if (target2.dataset.go === "change") {
    choosing = true;
    render();
    return;
  }
  if (target2.dataset.act != null) {
    const action = trayActions[Number(target2.dataset.act)];
    if (action) send(action);
    return;
  }
  if (target2.dataset.route != null) {
    const action = routes.get(target2.dataset.route);
    if (action) send(action);
    return;
  }
  if (target2.dataset.select != null) {
    const iid = target2.dataset.select;
    selected = selected === iid ? null : iid;
    const only = selectionActions(view());
    if (selected && only.length === 1 && routeKey(only[0]) === "self") {
      send(only[0]);
      return;
    }
    render();
    return;
  }
  if (target2.dataset.crew != null) {
    const iid = target2.dataset.crew;
    const seen = view();
    if (actsOf(seen).some((a) => a.type === "march" && a.iid === iid)) {
      selected = selected === iid ? null : iid;
      render();
    }
    return;
  }
  if (target2.dataset.pick != null) {
    const id = target2.dataset.pick;
    const spec = view().legal.find((item) => item.kind === "subset");
    if (picked.has(id)) picked.delete(id);
    else if (spec && spec.kind === "subset" && picked.size < spec.max) picked.add(id);
    render();
    return;
  }
  if (target2.dataset.bump != null && target2.dataset.dir != null) {
    const iid = target2.dataset.bump;
    const dir = Number(target2.dataset.dir);
    const spec = view().legal.find((item) => item.kind === "assign");
    if (!spec || spec.kind !== "assign" || !spec.targets.includes(iid)) return;
    const next = (hits[iid] ?? 0) + dir;
    if (next < 0) return;
    const sum = spec.targets.reduce((total, id) => total + (id === iid ? next : hits[id] ?? 0), 0);
    if (sum > spec.amount) return;
    hits[iid] = next;
    render();
    return;
  }
  if (target2.dataset.go === "subset") {
    const spec = view().legal.find((item) => item.kind === "subset");
    if (!spec || spec.kind !== "subset" || picked.size < spec.min || picked.size > spec.max) return;
    const values = [...picked];
    if (spec.actionType === "mulligan" || spec.actionType === "discard") send({ type: spec.actionType, iids: values });
    else send({ type: spec.actionType, indices: values.map(Number) });
    return;
  }
  if (target2.dataset.go === "assign") {
    const spec = view().legal.find((item) => item.kind === "assign");
    if (!spec || spec.kind !== "assign") return;
    const payload = {};
    for (const iid of spec.targets) payload[iid] = hits[iid] ?? 0;
    send({ type: "assign", hits: payload });
    return;
  }
  if (target2.dataset.go === "deselect") {
    selected = null;
    render();
    return;
  }
  if (target2.dataset.go === "again") {
    boot(1 + Math.floor(Math.random() * 999999));
    return;
  }
  if (target2.dataset.go === "sit") {
    covered = false;
    picked = /* @__PURE__ */ new Set();
    hits = {};
    selected = null;
    render();
  }
}
var HOT = "[data-act], [data-route], [data-pick], [data-bump], [data-go], [data-select], [data-crew], [data-inspect], [data-deck], [data-mode], [data-foe]";
document.body.addEventListener("click", (event) => {
  const target2 = event.target instanceof Element ? event.target.closest(HOT) : null;
  if (target2 instanceof HTMLElement) activate(target2);
});
document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (inspecting) inspecting = null;
    else selected = null;
    render();
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  const target2 = event.target instanceof HTMLElement && !(event.target instanceof HTMLButtonElement) ? event.target.closest(HOT) : null;
  if (target2 instanceof HTMLElement) {
    event.preventDefault();
    activate(target2);
  }
});
document.body.addEventListener("contextmenu", (event) => {
  const el = event.target instanceof Element ? event.target.closest("[data-card], [data-crew]") : null;
  if (!(el instanceof HTMLElement)) return;
  const iid = el.dataset.card ?? el.dataset.crew;
  const s = state;
  const cardId = s.players[seat].hand.find((c) => c.iid === iid)?.cardId ?? s.crews.find((c) => c.iid === iid)?.cardId;
  if (!cardId) return;
  event.preventDefault();
  inspecting = cardId;
  render();
});
document.body.addEventListener("pointermove", (event) => {
  const card = event.target instanceof Element ? event.target.closest(".card:not(.back)") : null;
  if (!(card instanceof HTMLElement)) return;
  const box = card.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width;
  const y = (event.clientY - box.top) / box.height;
  card.style.setProperty("--rx", `${((0.5 - y) * 14).toFixed(2)}deg`);
  card.style.setProperty("--ry", `${((x - 0.5) * 16).toFixed(2)}deg`);
  card.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
  card.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
});
document.body.addEventListener("pointerout", (event) => {
  const card = event.target instanceof Element ? event.target.closest(".card") : null;
  if (card instanceof HTMLElement && !card.contains(event.relatedTarget)) {
    card.style.removeProperty("--rx");
    card.style.removeProperty("--ry");
  }
});
var signedIn = !AUTH_REQUIRED;
document.querySelector("#new")?.addEventListener("click", () => {
  if (!signedIn) return;
  if (aiTimer != null) window.clearTimeout(aiTimer);
  aiTimer = null;
  choosing = true;
  render();
});
document.querySelector("#replay")?.addEventListener("click", async () => {
  const text = JSON.stringify({ seed, actions });
  try {
    await navigator.clipboard.writeText(text);
    note = "Replay copied to the clipboard.";
  } catch {
    note = text;
  }
  render();
});
function showAccount(user) {
  const node = document.getElementById("account");
  if (!node) return;
  if (!user) {
    node.innerHTML = "";
    return;
  }
  node.innerHTML = `<span class="who">${icon("ship")} ${esc2(user.name)}</span>${user.isAdmin ? `<a class="chip quiet" href="admin.html">Admin</a>` : ""}<button type="button" class="chip quiet" id="sign-out">Sign out</button>`;
  document.getElementById("sign-out")?.addEventListener("click", async () => {
    try {
      await signOut();
    } finally {
      location.reload();
    }
  });
}
async function start() {
  if (AUTH_REQUIRED) {
    let user = null;
    try {
      user = await currentUser();
    } catch {
      user = null;
    }
    if (!user) user = await signInGate(cover);
    showAccount(user);
    signedIn = true;
  }
  choosing = true;
  render();
}
void start();
