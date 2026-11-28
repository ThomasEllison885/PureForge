var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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
  static mergeArray(status2, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status2.dirty();
      arrayValue.push(s.value);
    }
    return { status: status2.value, value: arrayValue };
  }
  static async mergeObjectAsync(status2, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status2, syncPairs);
  }
  static mergeObjectSync(status2, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status2.dirty();
      if (value.status === "dirty")
        status2.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status2.value, value: finalObject };
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
  pipe(target) {
    return ZodPipeline.create(this, target);
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
    const status2 = new ParseStatus();
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
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
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
    const status2 = new ParseStatus();
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
          status2.dirty();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
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
    const status2 = new ParseStatus();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
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
    const status2 = new ParseStatus();
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
          status2.dirty();
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
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status2.value,
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
    const { ctx, status: status2 } = this._processInputParams(input);
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
        status2.dirty();
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
        status2.dirty();
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
        status2.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status2, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status2, result);
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
    const { status: status2, ctx } = this._processInputParams(input);
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
          status2.dirty();
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
        return ParseStatus.mergeObjectSync(status2, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status2, pairs);
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
    const { status: status2, ctx } = this._processInputParams(input);
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
        status2.dirty();
      }
      return { status: status2.value, value: merged.data };
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
    const { status: status2, ctx } = this._processInputParams(input);
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
      status2.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status2, results);
      });
    } else {
      return ParseStatus.mergeArray(status2, items);
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
    const { status: status2, ctx } = this._processInputParams(input);
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
      return ParseStatus.mergeObjectAsync(status2, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status2, pairs);
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
    const { status: status2, ctx } = this._processInputParams(input);
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
            status2.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status2.value, value: finalMap };
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
          status2.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status2.value, value: finalMap };
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
    const { status: status2, ctx } = this._processInputParams(input);
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
        status2.dirty();
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
        status2.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status2.dirty();
        parsedSet.add(element.value);
      }
      return { status: status2.value, value: parsedSet };
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
    const { status: status2, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status2.abort();
        } else {
          status2.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status2.value === "aborted")
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
          if (status2.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status2.value === "aborted")
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
        if (status2.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
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
          status2.dirty();
        executeRefinement(inner.value);
        return { status: status2.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status2.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status2.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status2.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status2.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
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
    const { status: status2, ctx } = this._processInputParams(input);
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
          status2.dirty();
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
        status2.dirty();
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
    abilities: [{ trigger: "onDeploy", effects: [{ do: "extraStow", amount: 1 }] }],
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
    abilities: [{ trigger: "onDeploy", effects: [{ do: "stowFromDeck" }] }],
    text: "When deployed, put the top card of your deck into your Stores."
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
    abilities: [{ trigger: "onDeploy", effects: [{ do: "survey", n: 1 }] }],
    text: "When deployed, Survey 1."
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
    abilities: [{ trigger: "static", keyword: "hardy", scope: "otherFriendlies" }],
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
    abilities: [{ trigger: "onPlay", effects: [{ do: "extraMarch" }] }],
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
    abilities: [{ trigger: "onPlay", effects: [{ do: "draw", amount: 1 }] }],
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
    abilities: [{ trigger: "onPlay", effects: [{ do: "buffYourCrews", might: 1, until: "round" }] }],
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
    abilities: [{ trigger: "onPlay", effects: [{ do: "damageCrew", amount: 2 }] }],
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
    abilities: [{ trigger: "static", keyword: "entrench", scope: "yourCrews" }],
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
    abilities: [{ trigger: "atClaim", if: { youControlAtLeast: 3 }, gain: 3 }],
    text: "At Claim, if you control 3 or more Regions, gain 3 Renown."
  }
];

// packages/cards/src/deck.ts
function basicDeck() {
  const copies = [
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
  ];
  return copies.flatMap(([id, count]) => Array.from({ length: count }, () => id));
}

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

// packages/cards/src/index.ts
var effectSchema = external_exports.discriminatedUnion("do", [
  external_exports.object({ do: external_exports.literal("draw"), amount: external_exports.number().int().positive() }),
  external_exports.object({ do: external_exports.literal("stowFromDeck") }),
  external_exports.object({ do: external_exports.literal("extraStow"), amount: external_exports.number().int().positive() }),
  external_exports.object({ do: external_exports.literal("survey"), n: external_exports.number().int().positive() }),
  external_exports.object({ do: external_exports.literal("extraMarch") }),
  external_exports.object({
    do: external_exports.literal("buffYourCrews"),
    might: external_exports.number().int().optional(),
    endurance: external_exports.number().int().optional(),
    until: external_exports.enum(["turn", "round"])
  }),
  external_exports.object({ do: external_exports.literal("damageCrew"), amount: external_exports.number().int().positive() })
]);
var abilitySchema = external_exports.discriminatedUnion("trigger", [
  external_exports.object({
    trigger: external_exports.enum(["onDeploy", "onPlay", "landing"]),
    effects: external_exports.array(effectSchema)
  }),
  external_exports.object({
    trigger: external_exports.literal("static"),
    keyword: external_exports.enum(["hardy", "entrench"]),
    scope: external_exports.enum(["otherFriendlies", "yourCrews"])
  }),
  external_exports.object({
    trigger: external_exports.literal("atClaim"),
    if: external_exports.object({ youControlAtLeast: external_exports.number().int().positive() }),
    gain: external_exports.number().int().positive()
  })
]);
var cardSchema = external_exports.object({
  id: external_exports.string().min(1),
  set: external_exports.enum(["FL", "basic"]),
  name: external_exports.string().min(1),
  faction: external_exports.enum(["castavar", "hollen", "aldmoor", "captains", "neutral", "basic"]),
  rarity: external_exports.enum(["basic", "common", "uncommon", "rare", "legendary"]),
  type: external_exports.enum(["crew", "order", "outpost", "venture"]),
  subtypes: external_exports.array(external_exports.enum(["soldier", "sailor", "scout", "merchant", "scholar", "officer", "rogue", "mercenary"])),
  cost: external_exports.object({
    supply: external_exports.number().int().min(0),
    goods: external_exports.array(external_exports.enum(["gold", "timber", "spice"]))
  }),
  might: external_exports.number().int().min(0).optional(),
  endurance: external_exports.number().int().min(1).optional(),
  keywords: external_exports.array(external_exports.enum(["swift", "entrench", "hardy", "raid", "scout", "escort", "ambush"])),
  abilities: external_exports.array(abilitySchema),
  text: external_exports.string(),
  flavor: external_exports.string().optional()
});
var traitSchema = external_exports.discriminatedUnion("kind", [
  external_exports.object({ kind: external_exports.literal("whenRevealed"), effects: external_exports.array(effectSchema) }),
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
  external_exports.object({ kind: external_exports.literal("firstControl"), effects: external_exports.array(effectSchema) })
]);
var regionSchema = external_exports.object({
  id: external_exports.string().min(1),
  name: external_exports.string().min(1),
  renown: external_exports.union([external_exports.literal(1), external_exports.literal(2), external_exports.literal(3)]),
  goods: external_exports.array(external_exports.enum(["gold", "timber", "spice"])),
  hazard: external_exports.boolean(),
  tags: external_exports.array(external_exports.enum(["Coastal", "River", "Mountain"])),
  traits: external_exports.array(traitSchema),
  text: external_exports.string()
});
function parseAll(schema, rows, label) {
  return rows.map((row, i) => {
    const parsed = schema.safeParse(row);
    if (!parsed.success) {
      throw new Error(`${label}[${i}] ${parsed.error.issues.map((q) => q.message).join("; ")}`);
    }
    return parsed.data;
  });
}
var basics = parseAll(cardSchema, BASICS, "basic");
var regions = parseAll(regionSchema, REGIONS, "region");
var cardIds = /* @__PURE__ */ new Set();
for (const card of basics) {
  if (cardIds.has(card.id)) throw new Error(`Duplicate card id ${card.id}`);
  cardIds.add(card.id);
  if (card.type === "crew" && (card.might == null || card.endurance == null)) {
    throw new Error(`${card.id} is a crew and needs Might and Endurance`);
  }
}
var regionIds = /* @__PURE__ */ new Set();
for (const region of regions) {
  if (regionIds.has(region.id)) throw new Error(`Duplicate region id ${region.id}`);
  regionIds.add(region.id);
}
function getCard(id) {
  const card = basics.find((c) => c.id === id) ?? extraCards.get(id);
  if (!card) throw new Error(`Unknown card ${id}`);
  return card;
}
function getRegion(id) {
  const region = regions.find((r) => r.id === id);
  if (!region) throw new Error(`Unknown region ${id}`);
  return region;
}
var extraCards = /* @__PURE__ */ new Map();
var starter = basicDeck();
if (starter.length !== 40) throw new Error("The Basic deck is not 40 cards.");
for (const id of starter) getCard(id);

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
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
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
  let target = state2;
  let traps = objectTraps;
  if (isArray) {
    target = [state2];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
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
    const owner = latest(state2);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state2.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
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
function trait(regionId, kind) {
  return getRegion(regionId).traits.find((t) => t.kind === kind);
}
function hasKeyword(state2, crew, keyword) {
  if (getCard(crew.cardId).keywords.includes(keyword)) return true;
  if (crew.where.zone !== "region") return false;
  const region = state2.regions[crew.where.index];
  if (!region) return false;
  if (keyword === "entrench") {
    if (trait(region.regionId, "grantEntrenchToController") && region.controller === crew.owner) return true;
    if (region.outpost && region.outpost.owner === crew.owner) {
      const aura = getCard(region.outpost.cardId).abilities.some(
        (a) => a.trigger === "static" && a.keyword === "entrench" && a.scope === "yourCrews"
      );
      if (aura) return true;
    }
  }
  if (keyword === "hardy") {
    for (const other2 of crewsAt(state2, crew.where.index)) {
      if (other2.iid === crew.iid || other2.owner !== crew.owner) continue;
      const aura = getCard(other2.cardId).abilities.some(
        (a) => a.trigger === "static" && a.keyword === "hardy" && a.scope === "otherFriendlies"
      );
      if (aura) return true;
    }
  }
  return false;
}
function enduranceOf(crew) {
  const base = getCard(crew.cardId).endurance ?? 1;
  return base + crew.mods.reduce((sum, mod) => sum + mod.endurance, 0);
}
function crewMight(state2, crew, clash) {
  const base = getCard(crew.cardId).might ?? 0;
  let might = base + crew.mods.reduce((sum, mod) => sum + mod.might, 0);
  if (clash && hasKeyword(state2, crew, "entrench") && crew.where.zone === "region") {
    const held = state2.claim?.controlAtStart[crew.where.index];
    if (held === crew.owner) might += 1;
  }
  return might;
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
function goodsOf(state2, player) {
  const goods = /* @__PURE__ */ new Set();
  for (const region of state2.regions) {
    if (!region.faceUp || region.controller !== player) continue;
    for (const good of getRegion(region.regionId).goods) goods.add(good);
  }
  return goods;
}
function hasGoods(state2, player, goods) {
  const held = goodsOf(state2, player);
  return goods.every((good) => held.has(good));
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
function playableOrder(state2, player, iid, ambushOnly) {
  const cardRef = state2.players[player].hand.find((c) => c.iid === iid);
  if (!cardRef) return [];
  const card = getCard(cardRef.cardId);
  if (card.type !== "order") return [];
  if (ambushOnly && !card.keywords.includes("ambush")) return [];
  if (!hasGoods(state2, player, card.cost.goods)) return [];
  if (readySupply(state2, player) < supplyCost(state2, card.id)) return [];
  const text = card.abilities.flatMap((a) => a.trigger === "onPlay" ? a.effects : []);
  const actions2 = [];
  if (text.some((e) => e.do === "extraMarch")) {
    for (const crew of crewsOf(state2, player)) actions2.push({ type: "play", iid, target: crew.iid });
    return actions2;
  }
  if (text.some((e) => e.do === "buffYourCrews")) {
    for (let index = 0; index < 5; index++) {
      if (state2.crews.some((c) => c.owner === player && c.where.zone === "region" && c.where.index === index)) {
        actions2.push({ type: "play", iid, region: index });
      }
    }
    return actions2;
  }
  if (text.some((e) => e.do === "damageCrew")) {
    for (let index = 0; index < 5; index++) {
      if (!contested(state2, index)) continue;
      for (const crew of state2.crews) {
        if (crew.where.zone === "region" && crew.where.index === index && orderCanTarget(state2, player, crew)) {
          actions2.push({ type: "play", iid, target: crew.iid, region: index });
        }
      }
    }
    return actions2;
  }
  actions2.push({ type: "play", iid });
  return actions2;
}
function commandActions(state2, player) {
  const you = state2.players[player];
  const out = [act({ type: "end" })];
  if (you.stowLeft > 0) {
    for (const card of you.hand) out.push(act({ type: "stow", iid: card.iid }));
  }
  for (const card of you.hand) {
    const def = getCard(card.cardId);
    if (!hasGoods(state2, player, def.cost.goods)) continue;
    if (def.type === "crew") {
      const cost = supplyCost(state2, def.id);
      if (readySupply(state2, player) < cost) continue;
      const dests = [{ zone: "harbor" }];
      for (let index = 0; index < 5; index++) if (canDeploy(state2, player, index)) dests.push({ zone: "region", index });
      for (const dest of dests) out.push(act({ type: "play", iid: card.iid, dest }));
    } else if (def.type === "order") {
      for (const action of playableOrder(state2, player, card.iid, false)) out.push(act(action));
    } else if (def.type === "outpost") {
      for (let index = 0; index < 5; index++) {
        const region = state2.regions[index];
        if (!region.faceUp || region.controller !== player || region.outpost) continue;
        if (!state2.crews.some((c) => c.owner === player && c.where.zone === "region" && c.where.index === index)) continue;
        if (readySupply(state2, player) < supplyCost(state2, def.id, index)) continue;
        out.push(act({ type: "play", iid: card.iid, region: index }));
      }
    } else if (def.type === "venture") {
      if (you.ventures.some((slot) => slot === null) && readySupply(state2, player) >= supplyCost(state2, def.id)) {
        out.push(act({ type: "play", iid: card.iid }));
      }
    }
  }
  for (const crew of crewsOf(state2, player)) {
    if (crew.marchesLeft <= 0) continue;
    if (crew.where.zone === "harbor") {
      for (let index = 0; index < 5; index++) {
        const region = state2.regions[index];
        if (forbidsHarbor(region.regionId) || !roomFor(state2, player, index)) continue;
        out.push(act({ type: "march", iid: crew.iid, dest: { zone: "region", index } }));
      }
    } else {
      out.push(act({ type: "march", iid: crew.iid, dest: { zone: "harbor" } }));
      for (const index of regionsYouCanMarchTo(state2, crew)) {
        if (roomFor(state2, player, index)) out.push(act({ type: "march", iid: crew.iid, dest: { zone: "region", index } }));
      }
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
  if (decision.type === "mulligan") {
    return [
      concede,
      { kind: "subset", actionType: "mulligan", options: state2.players[player].hand.map((c) => c.iid), min: 0, max: state2.players[player].hand.length }
    ];
  }
  if (decision.type === "discard") {
    const hand2 = state2.players[player].hand;
    return [concede, { kind: "subset", actionType: "discard", options: hand2.map((c) => c.iid), min: hand2.length - 8, max: hand2.length - 8 }];
  }
  if (decision.type === "surveyLook") {
    return [concede, { kind: "subset", actionType: "surveyLook", options: decision.options, min: 0, max: Math.min(decision.max, decision.options.length) }];
  }
  if (decision.type === "surveyFlip") {
    return [concede, { kind: "subset", actionType: "surveyFlip", options: decision.options, min: 0, max: decision.options.length }];
  }
  if (decision.type === "command") return [concede, ...commandActions(state2, player)];
  if (decision.type === "ambush") {
    const orders = [act({ type: "pass" })];
    for (const card of state2.players[player].hand) {
      for (const action of playableOrder(state2, player, card.iid, true)) orders.push(act(action));
    }
    return [concede, ...orders];
  }
  if (decision.type === "assign") {
    return [concede, { kind: "assign", targets: decision.targets, amount: decision.amount }];
  }
  return [concede];
}

// packages/engine/src/types.ts
function other(player) {
  return player === 0 ? 1 : 0;
}

// packages/engine/src/apply.ts
function compile(effects, player, ctx) {
  const out = [];
  for (const effect of effects) {
    if (effect.do === "draw") out.push({ op: "draw", player, amount: effect.amount });
    else if (effect.do === "stowFromDeck") out.push({ op: "stowDeck", player });
    else if (effect.do === "extraStow") out.push({ op: "extraStow", player, amount: effect.amount });
    else if (effect.do === "survey") out.push({ op: "beginSurvey", player, n: effect.n });
    else if (effect.do === "extraMarch") {
      if (!ctx.target) throw new Error("That order needs a crew.");
      out.push({ op: "extraMarch", iid: ctx.target });
    } else if (effect.do === "buffYourCrews") {
      if (ctx.region == null) throw new Error("That order needs a Region.");
      out.push({
        op: "buff",
        player,
        region: ctx.region,
        might: effect.might ?? 0,
        endurance: effect.endurance ?? 0,
        until: effect.until
      });
    } else if (effect.do === "damageCrew") {
      if (!ctx.target) throw new Error("That order needs a crew.");
      out.push({ op: "damage", iid: ctx.target, amount: effect.amount, source: "order" });
    }
  }
  return out;
}
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
function defeat(state2, iid, events) {
  const crew = findCrew(state2, iid);
  if (!crew) return;
  state2.players[crew.owner].discard.push({ iid: crew.iid, cardId: crew.cardId });
  state2.crews = state2.crews.filter((c) => c.iid !== iid);
  events.push({ type: "defeat", iid, owner: crew.owner, cardId: crew.cardId });
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
  if (source !== "strike" && crew.damage >= enduranceOf(crew)) defeat(state2, iid, events);
}
function surveyOptions(state2) {
  const options = [];
  state2.regions.forEach((region, index) => {
    if (!region.faceUp && !trait(region.regionId, "hiddenFromScout")) options.push(index);
  });
  return options;
}
function applyFx(state2, fx, events) {
  if (fx.op === "draw") draw(state2, fx.player, fx.amount, events);
  else if (fx.op === "stowDeck") {
    const cardId = state2.players[fx.player].deck.shift();
    if (!cardId) {
      const foe = other(fx.player);
      state2.players[foe].renown += 2;
      events.push({ type: "deckout", player: fx.player }, { type: "renown", player: foe, amount: 2, reason: "deck" });
    } else state2.players[fx.player].stores.push({ iid: mint(state2), cardId, exhausted: false });
  } else if (fx.op === "extraStow") state2.players[fx.player].stowLeft += fx.amount;
  else if (fx.op === "beginSurvey") {
    const options = surveyOptions(state2);
    if (!options.length || fx.n <= 0) return;
    if (state2.decision) state2.paused.push(state2.decision);
    state2.decision = { type: "surveyLook", player: fx.player, max: fx.n, options };
  } else if (fx.op === "flip") {
    const region = state2.regions[fx.index];
    if (!region || region.faceUp || trait(region.regionId, "hiddenFromScout")) return;
    region.faceUp = true;
    events.push({ type: "flip", index: fx.index, regionId: region.regionId, player: fx.player });
    const revealed = getRegion(region.regionId).traits.find((t) => t.kind === "whenRevealed");
    if (revealed && revealed.kind === "whenRevealed") state2.queue.unshift(...compile(revealed.effects, fx.player, {}));
  } else if (fx.op === "damage") damageCrew(state2, fx.iid, fx.amount, fx.source, events);
  else if (fx.op === "buff") {
    for (const crew of crewsAt(state2, fx.region)) {
      if (crew.owner !== fx.player) continue;
      crew.mods.push({ might: fx.might, endurance: fx.endurance, until: fx.until });
    }
  } else if (fx.op === "extraMarch") {
    const crew = findCrew(state2, fx.iid);
    if (crew) crew.marchesLeft += 1;
  } else if (fx.op === "handoffAmbush") handoffAmbush(state2);
}
function drain(state2, events) {
  let guard = 0;
  while (state2.queue.length && !choiceOpen(state2) && !state2.over) {
    if (++guard > 500) throw new Error("The rules queued too much work.");
    const fx = state2.queue.shift();
    if (fx) applyFx(state2, fx, events);
  }
  if (choiceOpen(state2) || state2.over) return;
  if (state2.claim && !state2.decision) continueClaim(state2, events);
  if (!choiceOpen(state2) && state2.paused.length && !state2.queue.length && !state2.claim) {
    state2.decision = state2.paused.pop() ?? null;
  }
}
function choiceOpen(state2) {
  const kind = state2.decision?.type;
  return kind === "surveyLook" || kind === "surveyFlip" || kind === "ambush" || kind === "assign" || kind === "discard" || kind === "mulligan";
}
function startTurn(state2, player, events) {
  const you = state2.players[player];
  for (const card of you.stores) card.exhausted = false;
  you.stowLeft = 1;
  if (!(state2.round === 1 && player === state2.firstPlayer)) draw(state2, player, 1, events);
  for (const crew of crewsOf(state2, player)) {
    crew.deployedThisTurn = false;
    crew.marchesLeft = 1;
  }
  state2.turnsTaken += 1;
  state2.claim = null;
  state2.decision = { type: "command", player };
}
function finishTurn(state2, player, events) {
  for (const crew of crewsOf(state2, player)) crew.mods = crew.mods.filter((mod) => mod.until !== "turn");
  if (state2.turnsTaken >= 2) beginClaim(state2, events);
  else startTurn(state2, other(player), events);
}
function beginClaim(state2, events) {
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
  continueClaim(state2, events);
}
function continueClaim(state2, events) {
  const claim = state2.claim;
  if (!claim || state2.over) return;
  let guard = 0;
  while (!state2.over && !choiceOpen(state2)) {
    if (++guard > 80) throw new Error("The Claim phase did not advance.");
    if (claim.step === "hazards") {
      resolveHazards(state2, events);
      claim.step = "clash";
      claim.region = 0;
      claim.clashStep = "ambush";
      continue;
    }
    if (claim.step === "clash") {
      if (claim.region >= 5) {
        claim.step = "control";
        continue;
      }
      const both = crewsAt(state2, claim.region).some((c) => c.owner === 0) && crewsAt(state2, claim.region).some((c) => c.owner === 1);
      if (!both) {
        claim.region += 1;
        claim.clashStep = "ambush";
        continue;
      }
      if (claim.clashStep === "ambush") {
        claim.passes = 0;
        claim.priority = other(state2.initiative);
        openAmbush(state2);
        if (choiceOpen(state2)) return;
        if (claim.clashStep === "ambush") claim.clashStep = "assign";
        continue;
      }
      if (claim.clashStep === "assign") {
        prepareAssign(state2, events);
        if (choiceOpen(state2)) return;
        continue;
      }
      claim.region += 1;
      claim.clashStep = "ambush";
      continue;
    }
    if (claim.step === "control") {
      resolveControl(state2, events);
      scoreRegionRenown(state2, events);
      claim.step = "ventures";
      continue;
    }
    if (claim.step === "ventures") {
      scoreVentures(state2, events);
      claim.step = "other";
      continue;
    }
    if (claim.step === "other") {
      claim.step = "victory";
      continue;
    }
    if (claim.step === "victory") {
      if (checkVictory(state2, events)) return;
      claim.step = "cleanup";
      continue;
    }
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
        for (const owner of [0, 1]) {
          const mine = crewsAt(state2, index).filter((c) => c.owner === owner);
          if (!mine.length) continue;
          const low = Math.min(...mine.map(enduranceOf));
          for (const crew of mine) if (enduranceOf(crew) === low) damageCrew(state2, crew.iid, t.amount, "region", events);
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
  if (canPlay) {
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
    if (crew.damage >= enduranceOf(crew)) defeat(state2, crew.iid, events);
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
    const m0 = sideMight(state2, 0, index, false);
    const m1 = sideMight(state2, 1, index, false);
    let next = region.controller;
    if (left.length && !right.length) next = 0;
    else if (right.length && !left.length) next = 1;
    else if (left.length && right.length) {
      if (m0 > m1) next = 0;
      else if (m1 > m0) next = 1;
    }
    if (def.traits.some((t) => t.kind === "loseControlWithoutCrew") && next !== null) {
      const holding = next === 0 ? left : right;
      if (!holding.length) next = null;
    }
    const margin = def.traits.find((t) => t.kind === "controlMargin");
    if (next !== region.controller && next !== null && margin && margin.kind === "controlMargin") {
      const have = next === 0 ? m0 : m1;
      const against = next === 0 ? m1 : m0;
      if (have < against + margin.margin) next = region.controller;
    }
    if (next === region.controller) continue;
    const prev = region.controller;
    if (region.outpost && prev !== null && region.outpost.owner === prev) {
      state2.players[prev].discard.push({ iid: region.outpost.iid, cardId: region.outpost.cardId });
      region.outpost = null;
    }
    region.controller = next;
    events.push({ type: "control", index, player: next });
    if (prev !== null && next !== null) raid(state2, next, prev, index, events);
    if (next !== null && !region.controlledOnce) {
      region.controlledOnce = true;
      const first = def.traits.find((t) => t.kind === "firstControl");
      if (first && first.kind === "firstControl") {
        for (const effect of first.effects) if (effect.do === "draw") draw(state2, next, effect.amount, events);
      }
    }
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
function raid(state2, taker, victim, index, events) {
  const region = state2.regions[index];
  const extra = trait(region.regionId, "raidExtra")?.extra ?? 0;
  const per = 1 + extra;
  for (const crew of crewsAt(state2, index)) {
    if (crew.owner !== taker || !hasKeyword(state2, crew, "raid")) continue;
    for (let n = 0; n < per; n++) {
      const pile = state2.players[victim].stores;
      if (!pile.length) break;
      const pick = Math.floor(roll(state2) * pile.length);
      const [card] = pile.splice(pick, 1);
      if (!card) break;
      card.exhausted = true;
      state2.players[taker].stores.push(card);
      events.push({ type: "raid", player: taker, from: victim, cardId: card.cardId });
    }
  }
}
function scoreVentures(state2, events) {
  for (const player of [state2.initiative, other(state2.initiative)]) {
    const you = state2.players[player];
    const held = state2.regions.filter((region) => region.controller === player).length;
    for (let slot = 0; slot < 2; slot++) {
      const venture = you.ventures[slot];
      if (!venture) continue;
      for (const ability of getCard(venture.cardId).abilities) {
        if (ability.trigger !== "atClaim" || held < ability.if.youControlAtLeast) continue;
        you.renown += ability.gain;
        you.completedVentures += 1;
        you.discard.push(venture);
        you.ventures[slot] = null;
        events.push({ type: "renown", player, amount: ability.gain, reason: venture.cardId });
      }
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
  const hand2 = state2.players[player].hand;
  const index = hand2.findIndex((card2) => card2.iid === iid);
  if (index < 0) throw new Error("That card is not in your hand.");
  const [card] = hand2.splice(index, 1);
  return card;
}
function subsetFits(legal, values) {
  if (legal.kind !== "subset") return false;
  if (values.length < legal.min || values.length > legal.max) return false;
  const options = new Set(legal.options);
  return values.every((value) => options.has(value)) && new Set(values).size === values.length;
}
function allowed(state2, player, action) {
  if (state2.over) throw new Error("The game is over.");
  if (action.type === "concede") return;
  const legal = getLegalActions(state2, player);
  if (action.type === "assign") {
    const spec = legal.find((item) => item.kind === "assign");
    if (!spec || spec.kind !== "assign") throw new Error("No damage to assign.");
    const keys = Object.keys(action.hits);
    if (keys.some((key) => !spec.targets.includes(key))) throw new Error("Assign damage only to enemy crews there.");
    const sum = spec.targets.reduce((total, iid) => total + (action.hits[iid] ?? 0), 0);
    if (sum !== spec.amount || spec.targets.some((iid) => (action.hits[iid] ?? 0) < 0)) throw new Error("Assign all of the damage.");
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
  const match = legal.some((item) => item.kind === "act" && JSON.stringify(item.action) === JSON.stringify(action));
  if (!match) throw new Error("That is not a legal action.");
}
function actorOf(state2, action) {
  if (action.type === "concede") return action.player;
  if (!state2.decision) throw new Error("Nobody is deciding.");
  return state2.decision.player;
}
function perform(state2, action, events) {
  const player = state2.decision?.player;
  if (action.type === "concede") {
    endGame(state2, other(action.player), "concede", events);
    return;
  }
  if (player == null) throw new Error("Nobody is deciding.");
  if (action.type === "mulligan") return mulligan(state2, player, action.iids, events);
  if (action.type === "discard") {
    for (const iid of action.iids) {
      const card = takeFromHand(state2, player, iid);
      state2.players[player].discard.push(card);
    }
    state2.decision = null;
    finishTurn(state2, player, events);
    return;
  }
  if (action.type === "stow") {
    const card = takeFromHand(state2, player, action.iid);
    state2.players[player].stores.push({ ...card, exhausted: false });
    state2.players[player].stowLeft -= 1;
    return;
  }
  if (action.type === "play") return play(state2, player, action, events);
  if (action.type === "march") return march(state2, player, action.iid, action.dest, events);
  if (action.type === "abandon") {
    const venture = state2.players[player].ventures[action.slot];
    if (!venture) throw new Error("That Venture slot is empty.");
    state2.players[player].discard.push(venture);
    state2.players[player].ventures[action.slot] = null;
    return;
  }
  if (action.type === "end") {
    const you = state2.players[player];
    if (you.hand.length > 8) {
      state2.decision = { type: "discard", player };
      return;
    }
    state2.decision = null;
    finishTurn(state2, player, events);
    return;
  }
  if (action.type === "pass") {
    const claim = state2.claim;
    if (!claim) throw new Error("Nothing to pass.");
    claim.passes += 1;
    state2.decision = null;
    if (claim.passes >= 2) {
      claim.clashStep = "assign";
      continueClaim(state2, events);
      return;
    }
    claim.priority = other(player);
    openAmbush(state2);
    if (!choiceOpen(state2)) continueClaim(state2, events);
    return;
  }
  if (action.type === "assign") {
    const claim = state2.claim;
    if (!claim) throw new Error("No Clash to assign.");
    for (const [iid, amount] of Object.entries(action.hits)) claim.hits[iid] = (claim.hits[iid] ?? 0) + amount;
    claim.assignQueue.shift();
    state2.decision = null;
    finishAssign(state2, events);
    if (!choiceOpen(state2)) continueClaim(state2, events);
    return;
  }
  if (action.type === "surveyLook") {
    state2.decision = { type: "surveyFlip", player, options: action.indices };
    return;
  }
  if (action.type === "surveyFlip") {
    state2.decision = state2.paused.pop() ?? null;
    state2.queue.unshift(...action.indices.map((index) => ({ op: "flip", index, player })));
    drain(state2, events);
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
  const card = takeFromHand(state2, player, action.iid);
  const def = getCard(card.cardId);
  const cost = def.type === "outpost" ? supplyCostOf(state2, def.id, action.region) : supplyCostOf(state2, def.id);
  pay(state2, player, cost);
  events.push({ type: "play", player, cardId: card.cardId });
  if (def.type === "crew") {
    const dest = action.dest ?? { zone: "harbor" };
    const crew = {
      iid: card.iid,
      cardId: card.cardId,
      owner: player,
      where: dest,
      damage: 0,
      deployedThisTurn: true,
      marchesLeft: def.keywords.includes("swift") ? 1 : 0,
      mods: []
    };
    state2.crews.push(crew);
    state2.queue.push(...compile(effectsOn(card.cardId, "onDeploy"), player, {}));
    drain(state2, events);
    return;
  }
  if (def.type === "order") {
    state2.players[player].discard.push(card);
    const ambush = state2.decision?.type === "ambush";
    if (ambush) state2.decision = null;
    state2.queue.push(...compile(effectsOn(card.cardId, "onPlay"), player, { target: action.target, region: action.region }));
    if (ambush) state2.queue.push({ op: "handoffAmbush" });
    drain(state2, events);
    return;
  }
  if (def.type === "outpost") {
    const index = action.region;
    const region = index == null ? void 0 : state2.regions[index];
    if (!region) throw new Error("That Region cannot hold an Outpost.");
    region.outpost = { ...card, owner: player };
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
function effectsOn(cardId, trigger) {
  return getCard(cardId).abilities.flatMap((ability) => ability.trigger === trigger ? ability.effects : []);
}
function march(state2, player, iid, dest, events) {
  const crew = findCrew(state2, iid);
  if (!crew || crew.owner !== player || crew.marchesLeft <= 0) throw new Error("That crew cannot March.");
  const fromHarbor = crew.where.zone === "harbor";
  crew.marchesLeft -= 1;
  crew.where = dest;
  if (dest.zone !== "region") return;
  const region = state2.regions[dest.index];
  const flipped = !region.faceUp;
  if (flipped) {
    region.faceUp = true;
    events.push({ type: "flip", index: dest.index, regionId: region.regionId, player });
    const revealed = getRegion(region.regionId).traits.find((t) => t.kind === "whenRevealed");
    if (revealed && revealed.kind === "whenRevealed") state2.queue.push(...compile(revealed.effects, player, {}));
    state2.queue.push(...compile(effectsOn(crew.cardId, "landing"), player, {}));
  }
  const landingDamage = trait(region.regionId, "enterFromHarborDamage");
  if (fromHarbor && landingDamage) state2.queue.push({ op: "damage", iid: crew.iid, amount: landingDamage.amount, source: "region" });
  drain(state2, events);
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
      drain(draft, events);
      if (!choiceOpen(draft) && draft.paused.length && !draft.queue.length && !draft.claim && !draft.over) {
        draft.decision = draft.paused.pop() ?? null;
      }
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
    completedVentures: 0
  };
}
function faceDown(regionId) {
  return { regionId, faceUp: false, controller: null, outpost: null, controlledOnce: false };
}
function hasAllGoods(ids) {
  const goods = /* @__PURE__ */ new Set();
  for (const id of ids) for (const good of getRegion(id).goods) goods.add(good);
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
    extraRound: false
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
      const known = region.faceUp || scoutSees(state2, viewer, index);
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

// apps/table/main.ts
var seatName = (player) => player === 0 ? "Player 1" : "Player 2";
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
var pending = [];
var note = "";
function required(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`#${id} is missing.`);
  return node;
}
var table = required("table");
var cover = required("cover");
var status = required("status");
var seedNode = required("seed");
if (!(seedNode instanceof HTMLInputElement)) throw new Error("#seed is not a field.");
var seedInput = seedNode;
function yourDecision() {
  const decision = state.decision;
  if (!decision || decision.player !== seat) return null;
  return decision;
}
function esc(value) {
  return value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
}
function cardName(id) {
  return getCard(id).name;
}
function goodName(good) {
  if (good === "gold") return "Gold";
  if (good === "timber") return "Timber";
  return "Spice";
}
function view() {
  return getPlayerView(state, seat);
}
function coastLabel(index, seen) {
  const region = seen.regions[index];
  if (region?.regionId) return getRegion(region.regionId).name;
  return `Coast ${index + 1}`;
}
function crewBy(seen, iid) {
  return seen.crews.find((crew) => crew.iid === iid);
}
function crewLabel(seen, iid) {
  const crew = crewBy(seen, iid);
  if (!crew) return "a crew";
  const place = crew.where.zone === "harbor" ? "Harbor" : coastLabel(crew.where.index, seen);
  const twins = seen.crews.filter((other2) => other2.cardId === crew.cardId && JSON.stringify(other2.where) === JSON.stringify(crew.where));
  const mark = twins.length > 1 ? ` ${twins.findIndex((other2) => other2.iid === iid) + 1}` : "";
  return `${cardName(crew.cardId)}${mark} in ${place}`;
}
function actionLabel(action, seen) {
  if (action.type === "end") return "End turn";
  if (action.type === "pass") return "Pass";
  if (action.type === "concede") return "Concede";
  if (action.type === "stow") {
    const card = seen.hand.find((item) => item.iid === action.iid);
    return `Stow ${card ? cardName(card.cardId) : "card"}`;
  }
  if (action.type === "abandon") {
    const card = seen.ventures[seen.you][action.slot];
    return `Abandon ${card ? cardName(card.cardId) : "venture"}`;
  }
  if (action.type === "march") {
    const dest = action.dest.zone === "harbor" ? "Harbor" : coastLabel(action.dest.index, seen);
    return `March ${crewLabel(seen, action.iid)} to ${dest}`;
  }
  if (action.type === "play") {
    const card = seen.hand.find((item) => item.iid === action.iid);
    const name = card ? cardName(card.cardId) : "card";
    if (action.dest?.zone === "harbor") return `Deploy ${name} to your Harbor`;
    if (action.dest?.zone === "region") return `Deploy ${name} to ${coastLabel(action.dest.index, seen)}`;
    if (action.target) return `Play ${name} on ${crewLabel(seen, action.target)}`;
    if (action.region != null) return `Play ${name} at ${coastLabel(action.region, seen)}`;
    return `Play ${name}`;
  }
  return "Choose";
}
function actsOf(seen) {
  return seen.legal.flatMap((item) => item.kind === "act" && item.action.type !== "concede" ? [item.action] : []);
}
function buttonFor(action, seen, primary = false) {
  const index = pending.length;
  pending.push(action);
  const cls = primary ? "primary" : "";
  return `<button type="button" class="${cls}" data-act="${index}">${esc(actionLabel(action, seen))}</button>`;
}
function prompt(seen) {
  const decision = yourDecision();
  if (seen.over) {
    if (seen.over.winner == null) return "The voyage is a draw.";
    const why = seen.over.reason === "renown" ? "15 Renown" : seen.over.reason === "rounds" ? "the long count" : seen.over.reason === "concede" ? "concession" : seen.over.reason;
    return `${seatName(seen.over.winner)} wins by ${why}.`;
  }
  if (!decision || decision.player !== seat) return "Waiting.";
  if (decision.type === "mulligan") return "Set aside any cards you do not want. You draw that many back. You get one mulligan.";
  if (decision.type === "discard") return "Your hand is over 8. Discard down to 8.";
  if (decision.type === "surveyLook") return `Look at up to ${decision.max} hidden coasts, then choose which to flip.`;
  if (decision.type === "surveyFlip") return "Flip any of the coasts you just looked at. Leave the rest face down.";
  if (decision.type === "ambush") return `Ambush at ${coastLabel(decision.region, seen)}. Play an Ambush order, or pass.`;
  if (decision.type === "assign") return `Assign ${decision.amount} strike damage among the enemy crews.`;
  const ready = seen.stores.filter((card) => !card.exhausted).length;
  return `Your turn. Ready supply ${ready}. Stows left ${seen.stowLeft}. Play, march, then end the turn.`;
}
function eventLine(event, viewer) {
  if (event.type === "draw") {
    if (event.player === viewer && event.cardIds.length) return `You draw ${event.cardIds.map(cardName).join(", ")}.`;
    if (event.amount > 0) return `${seatName(event.player)} draws ${event.amount}.`;
    return "";
  }
  if (event.type === "deckout") return `${seatName(event.player)} cannot draw. The other captain gains 2 Renown.`;
  if (event.type === "renown") return `${seatName(event.player)} gains ${event.amount} Renown.`;
  if (event.type === "flip") return `${getRegion(event.regionId).name} is revealed.`;
  if (event.type === "damage") return event.prevented ? "Hardy stops the damage." : `A crew takes ${event.amount} damage.`;
  if (event.type === "defeat") return `${cardName(event.cardId)} is defeated.`;
  if (event.type === "control") {
    const region = state.regions[event.index];
    const where = region?.faceUp ? getRegion(region.regionId).name : `Coast ${event.index + 1}`;
    return event.player == null ? `${where} is left uncontrolled.` : `${seatName(event.player)} takes ${where}.`;
  }
  if (event.type === "play") return `${seatName(event.player)} plays ${cardName(event.cardId)}.`;
  if (event.type === "raid") return `${seatName(event.player)} raids ${cardName(event.cardId)} from ${seatName(event.from)}.`;
  if (event.type === "gameover") {
    if (event.winner == null) return "The voyage is a draw.";
    return `${seatName(event.winner)} wins.`;
  }
  return "";
}
function crewBlock(seen, iid, cardId, owner, damage, marchesLeft, mods) {
  const card = getCard(cardId);
  const extra = mods.reduce((total, mod) => total + mod.might, 0);
  const might = (card.might ?? 0) + extra;
  const buttons = actsOf(seen).filter((action) => action.type === "march" && action.iid === iid).map((action) => buttonFor(action, seen)).join("");
  const decision = yourDecision();
  const bump = decision?.type === "assign" && decision.targets.includes(iid) ? `<div class="actions"><button type="button" data-bump="${esc(iid)}" data-dir="-1">\u2212</button><span>${hits[iid] ?? 0}</span><button type="button" data-bump="${esc(iid)}" data-dir="1">+</button></div>` : "";
  return `<div class="crew owner-${owner}">
    <h3>${esc(card.name)}</h3>
    <p class="small">${esc(seatName(owner))} \xB7 Might ${might} \xB7 Endurance ${card.endurance ?? 0}${damage ? ` \xB7 hurt ${damage}` : ""}${marchesLeft > 0 ? " \xB7 can march" : ""}</p>
    ${buttons || bump ? `<div class="actions">${buttons}${bump}</div>` : ""}
  </div>`;
}
function regionBlock(seen, index) {
  const spot = seen.regions[index];
  if (!spot) return "";
  const known = spot.regionId ? getRegion(spot.regionId) : null;
  const yours = spot.faceUp && spot.controller === seat;
  const cls = `region${known?.hazard && spot.faceUp ? " hazard" : ""}${yours ? " yours" : ""}`;
  const title = known ? known.name : `Coast ${index + 1}`;
  const facts = known && spot.faceUp ? `<p class="small">Renown ${known.renown}${known.goods.length ? ` \xB7 ${known.goods.map(goodName).join(", ")}` : ""}${known.hazard ? " \xB7 Hazard" : ""}</p><p class="small muted">${esc(known.text)}</p>` : known ? `<p class="small muted">Seen, not entered. ${esc(known.text)}</p>` : `<p class="small muted">Face down.</p>`;
  const who = spot.faceUp && spot.controller != null ? `<p>${esc(seatName(spot.controller))} controls this.</p>` : "";
  const post = spot.outpost ? `<p class="small">Outpost: ${esc(cardName(spot.outpost.cardId))}</p>` : "";
  const decision = yourDecision();
  const survey = decision && (decision.type === "surveyLook" || decision.type === "surveyFlip") && decision.options.includes(index) ? `<button type="button" data-pick="${index}">${picked.has(String(index)) ? "Chosen" : "Choose"}</button>` : "";
  const crews = seen.crews.filter((crew) => crew.where.zone === "region" && crew.where.index === index).map((crew) => crewBlock(seen, crew.iid, crew.cardId, crew.owner, crew.damage, crew.marchesLeft, crew.mods)).join("");
  return `<section class="${cls} ${picked.has(String(index)) ? "picked" : ""}"><h2>${esc(title)}</h2>${facts}${who}${post}${survey}${crews}</section>`;
}
function side(seen, player) {
  const mine = player === seat;
  const stores = mine ? seen.stores.map((card) => `${cardName(card.cardId)}${card.exhausted ? " (spent)" : ""}`).join(", ") || "empty" : `${seen.foeStores.ready} ready of ${seen.foeStores.total}`;
  const ventures = seen.ventures[player].map((card, slot) => {
    if (!card) return "empty";
    const leave = mine ? actsOf(seen).filter((action) => action.type === "abandon" && action.slot === slot).map((action) => buttonFor(action, seen)).join("") : "";
    return `${esc(cardName(card.cardId))}${leave ? ` ${leave}` : ""}`;
  }).join(" \xB7 ");
  const discard = seen.discard[player].slice(-4).map((card) => cardName(card.cardId)).join(", ") || "empty";
  const harbor = seen.crews.filter((crew) => crew.where.zone === "harbor" && crew.owner === player).map((crew) => crewBlock(seen, crew.iid, crew.cardId, crew.owner, crew.damage, crew.marchesLeft, crew.mods)).join("");
  return `<section class="panel owner-${player}">
    <h2>${esc(seatName(player))}${mine ? " (you)" : ""}</h2>
    <p>Renown ${seen.renown[player]} \xB7 Ventures completed ${seen.completedVentures[player]}</p>
    <p class="small">Hand ${mine ? seen.hand.length : seen.foeHand} \xB7 Deck ${mine ? seen.deck : seen.foeDeck} \xB7 Stores ${esc(stores)}</p>
    <p class="small">Ventures: ${ventures}</p>
    <p class="small muted">Discard: ${esc(discard)}</p>
    ${harbor || `<p class="small muted">Harbor is empty.</p>`}
  </section>`;
}
function hand(seen) {
  const choosing = seen.decision?.type === "mulligan" || seen.decision?.type === "discard";
  return seen.hand.map((card) => {
    const def = getCard(card.cardId);
    const stats = def.type === "crew" ? `Might ${def.might} \xB7 Endurance ${def.endurance} \xB7 ` : "";
    const cost = `${def.cost.supply} supply${def.cost.goods.length ? ` \xB7 ${def.cost.goods.map(goodName).join(", ")}` : ""}`;
    const keys = def.keywords.length ? `<p class="small">${esc(def.keywords.join(", "))}</p>` : "";
    const toggle = choosing ? `<button type="button" data-pick="${esc(card.iid)}">${picked.has(card.iid) ? "Chosen" : "Choose"}</button>` : actsOf(seen).filter((action) => (action.type === "play" || action.type === "stow") && action.iid === card.iid).map((action) => buttonFor(action, seen)).join("");
    return `<article class="card ${picked.has(card.iid) ? "picked" : ""}">
      <h3>${esc(def.name)}</h3>
      <p class="small">${esc(stats + cost)}</p>
      ${keys}
      <p class="small">${esc(def.text)}</p>
      ${def.flavor ? `<p class="small muted">${esc(def.flavor)}</p>` : ""}
      ${toggle ? `<div class="actions">${toggle}</div>` : ""}
    </article>`;
  }).join("");
}
function bar(seen) {
  const end = actsOf(seen).find((action) => action.type === "end");
  const pass = actsOf(seen).find((action) => action.type === "pass");
  const subset = seen.legal.find((item) => item.kind === "subset");
  const assign = seen.legal.find((item) => item.kind === "assign");
  const parts = [];
  if (end) parts.push(buttonFor(end, seen, true));
  if (pass) parts.push(buttonFor(pass, seen, true));
  if (subset && subset.kind === "subset") {
    const ready = picked.size >= subset.min && picked.size <= subset.max;
    const word = subset.actionType === "mulligan" ? picked.size === 0 ? "Keep all" : `Set aside ${picked.size}` : subset.actionType === "discard" ? `Discard ${picked.size}` : subset.actionType === "surveyLook" ? `Look at ${picked.size}` : `Flip ${picked.size}`;
    parts.push(`<button type="button" class="primary" data-go="subset" ${ready ? "" : "disabled"}>${word}</button>`);
    parts.push(`<span class="small muted">Choose ${subset.min === subset.max ? subset.min : `${subset.min} to ${subset.max}`}.</span>`);
  }
  if (assign && assign.kind === "assign") {
    const sum = assign.targets.reduce((total, iid) => total + (hits[iid] ?? 0), 0);
    parts.push(`<button type="button" class="primary" data-go="assign" ${sum === assign.amount ? "" : "disabled"}>Assign ${sum} of ${assign.amount}</button>`);
  }
  if (!seen.over) {
    parts.push(`<button type="button" class="${armConcede ? "danger" : "quiet"}" data-go="concede">${armConcede ? "Concede? Click again" : "Concede"}</button>`);
  }
  return parts.join("");
}
function render() {
  const seen = view();
  pending = [];
  const lines = redactEvents(log, seat).map((event) => eventLine(event, seat)).filter(Boolean).slice(-8);
  status.textContent = seen.over ? prompt(seen) : `Round ${seen.round} \xB7 Renown ${seen.renown[0]}\u2013${seen.renown[1]} \xB7 Initiative ${seatName(seen.initiative)}`;
  if (covered && !seen.over) {
    table.innerHTML = "";
    cover.hidden = false;
    const waiting = seen.decision?.type === "mulligan" ? "Mulligan." : seen.decision?.type === "ambush" ? "Ambush." : seen.decision?.type === "assign" ? "Assign the strike." : "Your turn.";
    cover.innerHTML = `<section class="cover-card">
      <p class="kicker">Hand the screen across</p>
      <h2>${esc(seatName(seat))}</h2>
      <p>${esc(waiting)} The other hand stays covered.</p>
      <p class="muted">Renown ${seen.renown[0]}\u2013${seen.renown[1]} \xB7 Round ${seen.round}</p>
      <button type="button" class="primary" data-go="sit">I'm ${esc(seatName(seat))}</button>
    </section>`;
    return;
  }
  cover.hidden = true;
  cover.innerHTML = "";
  table.innerHTML = `
    <details class="how">
      <summary>How a turn works</summary>
      <p>Stow once, play cards by spending ready Stores, and march each crew once. Goods come from Regions you control and are not spent. After both turns the round is claimed: hazards, clashes, then control and Renown. First to 15 Renown at that count wins.</p>
    </details>
    <div class="board">${[0, 1, 2, 3, 4].map((index) => regionBlock(seen, index)).join("")}</div>
    <div class="row">${side(seen, 0)}${side(seen, 1)}</div>
    <h2 class="kicker" style="margin-top:1rem">Your hand</h2>
    <p>${esc(prompt(seen))}</p>
    ${error ? `<p class="alert">${esc(error)}</p>` : ""}
    ${note ? `<p class="muted">${esc(note)}</p>` : ""}
    <div class="bar">${bar(seen)}</div>
    <div class="hand">${hand(seen)}</div>
    <section class="log"><ul>${lines.map((line) => `<li>${esc(line)}</li>`).join("") || "<li class='muted'>The log is empty.</li>"}</ul></section>
  `;
}
function send(action) {
  const prev = state.decision?.player ?? null;
  try {
    const result = applyAction(state, action);
    state = result.state;
    log.push(...result.events);
    actions.push(action);
    error = "";
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
    render();
    return;
  }
  const next = state.decision?.player ?? null;
  picked = /* @__PURE__ */ new Set();
  hits = {};
  armConcede = false;
  if (next != null && next !== prev) {
    covered = true;
    seat = next;
  }
  render();
}
function boot(nextSeed) {
  seed = nextSeed >>> 0 || 1;
  seedInput.value = String(seed);
  state = createGame({ seed });
  seat = state.decision?.player ?? 0;
  covered = state.decision != null;
  log = [];
  actions = [];
  picked = /* @__PURE__ */ new Set();
  hits = {};
  armConcede = false;
  error = "";
  note = "";
  render();
}
document.body.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-act], [data-pick], [data-bump], [data-go]") : null;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.go === "concede") {
    if (!armConcede) {
      armConcede = true;
      render();
      return;
    }
    send({ type: "concede", player: seat });
    return;
  }
  armConcede = false;
  if (target.dataset.act != null) {
    const action = pending[Number(target.dataset.act)];
    if (action) send(action);
    return;
  }
  if (target.dataset.pick != null) {
    const id = target.dataset.pick;
    const spec = view().legal.find((item) => item.kind === "subset");
    if (picked.has(id)) picked.delete(id);
    else if (spec && spec.kind === "subset" && picked.size < spec.max) picked.add(id);
    render();
    return;
  }
  if (target.dataset.bump != null && target.dataset.dir != null) {
    const iid = target.dataset.bump;
    const dir = Number(target.dataset.dir);
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
  if (target.dataset.go === "subset") {
    const spec = view().legal.find((item) => item.kind === "subset");
    if (!spec || spec.kind !== "subset") return;
    if (picked.size < spec.min || picked.size > spec.max) return;
    const values = [...picked];
    if (spec.actionType === "mulligan" || spec.actionType === "discard") send({ type: spec.actionType, iids: values });
    else send({ type: spec.actionType, indices: values.map(Number) });
    return;
  }
  if (target.dataset.go === "assign") {
    const spec = view().legal.find((item) => item.kind === "assign");
    if (!spec || spec.kind !== "assign") return;
    const payload = {};
    for (const iid of spec.targets) payload[iid] = hits[iid] ?? 0;
    send({ type: "assign", hits: payload });
    return;
  }
  if (target.dataset.go === "sit") {
    covered = false;
    picked = /* @__PURE__ */ new Set();
    hits = {};
    render();
  }
});
document.querySelector("#new")?.addEventListener("click", () => {
  const raw = Number(seedInput.value);
  boot(Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 1);
});
document.querySelector("#replay")?.addEventListener("click", async () => {
  const text = JSON.stringify({ seed, actions });
  try {
    await navigator.clipboard.writeText(text);
    note = "Replay copied.";
  } catch {
    note = text;
  }
  render();
});
boot(1 + Math.floor(Math.random() * 999999));
