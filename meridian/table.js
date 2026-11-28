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
    const effect = this._def.effect || null;
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
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
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
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
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
        if (region.faceUp && forbidsHarbor(region.regionId) || !roomFor(state2, player, index)) continue;
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
    const hand = state2.players[player].hand;
    return [concede, { kind: "subset", actionType: "discard", options: hand.map((c) => c.iid), min: hand.length - 8, max: hand.length - 8 }];
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
function applyFx(state2, fx2, events) {
  if (fx2.op === "draw") draw(state2, fx2.player, fx2.amount, events);
  else if (fx2.op === "stowDeck") {
    const cardId = state2.players[fx2.player].deck.shift();
    if (cardId) state2.players[fx2.player].stores.push({ iid: mint(state2), cardId, exhausted: false });
  } else if (fx2.op === "extraStow") state2.players[fx2.player].stowLeft += fx2.amount;
  else if (fx2.op === "beginSurvey") {
    const options = surveyOptions(state2);
    if (!options.length || fx2.n <= 0) return;
    if (state2.decision) state2.paused.push(state2.decision);
    state2.decision = { type: "surveyLook", player: fx2.player, max: fx2.n, options };
  } else if (fx2.op === "flip") {
    const region = state2.regions[fx2.index];
    if (!region || region.faceUp || trait(region.regionId, "hiddenFromScout")) return;
    region.faceUp = true;
    events.push({ type: "flip", index: fx2.index, regionId: region.regionId, player: fx2.player });
    const revealed = getRegion(region.regionId).traits.find((t) => t.kind === "whenRevealed");
    if (revealed && revealed.kind === "whenRevealed") state2.queue.unshift(...compile(revealed.effects, fx2.player, {}));
  } else if (fx2.op === "damage") damageCrew(state2, fx2.iid, fx2.amount, fx2.source, events);
  else if (fx2.op === "buff") {
    for (const crew of crewsAt(state2, fx2.region)) {
      if (crew.owner !== fx2.player) continue;
      crew.mods.push({ might: fx2.might, endurance: fx2.endurance, until: fx2.until });
    }
  } else if (fx2.op === "extraMarch") {
    const crew = findCrew(state2, fx2.iid);
    if (crew) crew.marchesLeft += 1;
  } else if (fx2.op === "handoffAmbush") handoffAmbush(state2);
}
function drain(state2, events) {
  let guard = 0;
  while (state2.queue.length && !choiceOpen(state2) && !state2.over) {
    if (++guard > 500) throw new Error("The rules queued too much work.");
    const fx2 = state2.queue.shift();
    if (fx2) applyFx(state2, fx2, events);
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
  const hand = state2.players[player].hand;
  const index = hand.findIndex((card2) => card2.iid === iid);
  if (index < 0) throw new Error("That card is not in your hand.");
  const [card] = hand.splice(index, 1);
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
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    const entries = Object.entries(value).filter(([, v]) => v !== void 0).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
    return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`).join(",")}}`;
  }
  return JSON.stringify(value);
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
    const seen = state2.peeked[player];
    for (const index of action.indices) if (!seen.includes(index)) seen.push(index);
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
  if (dest.zone === "region" && fromHarbor && forbidsHarbor(state2.regions[dest.index].regionId)) {
    state2.queue.push({ op: "flip", index: dest.index, player });
    drain(state2, events);
    return;
  }
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

// apps/table/main.ts
var seatName = (player) => player === 0 ? "Player 1" : "Player 2";
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
var fx = null;
var routes = /* @__PURE__ */ new Map();
var trayActions = [];
var inspecting = null;
function required(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`#${id} is missing.`);
  return node;
}
var table = required("table");
var cover = required("cover");
var seedNode = required("seed");
if (!(seedNode instanceof HTMLInputElement)) throw new Error("#seed is not a field.");
var seedInput = seedNode;
required("rose").innerHTML = compassRose();
function yourDecision() {
  const decision = state.decision;
  if (!decision || decision.player !== seat) return null;
  return decision;
}
function esc(value) {
  return value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
}
var cardName = (id) => getCard(id).name;
var cap = (word) => word.charAt(0).toUpperCase() + word.slice(1);
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
function accentOf(owner) {
  return owner == null ? "#c9a44c" : SEAT_COLOR[owner];
}
function rulesText(def) {
  const keys = def.keywords.map(cap);
  let body = def.text;
  for (const key of keys) body = body.replace(new RegExp(`^${key}\\.?\\s*`), "");
  const keyLine = keys.length ? `<b class="kw" title="${esc(def.keywords.map((k) => `${cap(k)}: ${KEYWORD_HELP[k] ?? ""}`).join(" "))}">${esc(keys.join(" \xB7 "))}</b>` : "";
  return `${keyLine}${body ? `<span>${esc(body)}</span>` : ""}${def.flavor ? `<i>${esc(def.flavor)}</i>` : ""}`;
}
function typeLine(def) {
  const subs = def.subtypes.map(cap).join(", ");
  const amb = def.keywords.includes("ambush") && def.type === "order" ? ": Ambush" : "";
  return `${cap(def.type)}${subs ? `: ${subs}` : amb}`;
}
function cardFace(def, opts = {}) {
  const accent = accentOf(opts.owner ?? null);
  const goods = def.cost.goods.map((g) => `<span class="good good-${g}" title="Requires ${cap(g)}">${icon(GOOD_ICON[g])}</span>`).join("");
  const stats = def.type === "crew" ? `<div class="stats"><span class="stat might" title="Might"><b>${def.might}</b></span><span class="stat endure" title="Endurance">${icon("shield")}<b>${def.endurance}</b></span></div>` : "";
  return `<article class="card type-${def.type} rarity-${def.rarity} ${opts.cls ?? ""}" style="--accent:${accent};${opts.style ?? ""}" ${opts.iid ? `data-card="${esc(opts.iid)}"` : ""} ${opts.attrs ?? ""}>
    <div class="card-inner">
      <div class="card-head">
        <span class="coin" title="Supply cost"><b>${def.cost.supply}</b></span>
        <div class="goods">${goods}</div>
        <h3 class="card-name">${esc(def.name)}</h3>
        <span class="seal" title="${def.faction === "basic" ? "Basic" : cap(def.faction)}">${icon("compass")}</span>
      </div>
      <div class="card-art">${cardArt(def, accent)}</div>
      <div class="type-line">${esc(typeLine(def))}</div>
      <div class="text-box">${rulesText(def)}</div>
      ${stats}
      <div class="card-foot"><span class="gem gem-${def.rarity}"></span><span>${def.set === "basic" ? "Basic" : "FL"}</span><span>Meridian Studio</span></div>
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
    fx?.landed.has(crew.iid) ? "fx-land" : "",
    fx?.marched.has(crew.iid) ? "fx-march" : "",
    fx?.damaged.has(crew.iid) ? "fx-hit" : ""
  ].filter(Boolean).join(" ");
  const pips = Array.from({ length: endure }, (_, i) => `<i class="${i < crew.damage ? "lost" : ""}"></i>`).join("");
  const pop = fx?.damaged.get(crew.iid) ? `<span class="pop">\u2212${fx.damaged.get(crew.iid)}</span>` : "";
  const keys = def.keywords.length ? `<span class="unit-keys">${def.keywords.map((k) => cap(k).slice(0, 1)).join("")}</span>` : "";
  const stepper = assignable ? `<div class="stepper"><button type="button" data-bump="${esc(crew.iid)}" data-dir="-1" aria-label="Less damage">\u2212</button><b>${hits[crew.iid] ?? 0}</b><button type="button" data-bump="${esc(crew.iid)}" data-dir="1" aria-label="More damage">+</button></div>` : "";
  const clickable = canAct || route;
  return `<div class="${cls}" style="--accent:${SEAT_COLOR[crew.owner]}" ${clickable ? `role="button" tabindex="0"` : ""} data-crew="${esc(crew.iid)}" ${route ? `data-route="${route}"` : ""} title="${esc(`${def.name}. Might ${might}, Endurance ${endure}${crew.damage ? `, ${crew.damage} damage` : ""}. ${def.text}`)}">
    <div class="unit-art">${cardArt(def, SEAT_COLOR[crew.owner])}</div>
    <div class="unit-name">${esc(def.name)}</div>
    ${keys}
    <div class="unit-stats"><span class="might">${might}</span><span class="endure">${endure - crew.damage}</span></div>
    <div class="pips">${pips}</div>
    ${pop}${stepper}
  </div>`;
}
function ghost(g) {
  const def = getCard(g.cardId);
  return `<div class="unit owner-${g.owner} fx-burn" style="--accent:${SEAT_COLOR[g.owner]}" aria-hidden="true">
    <div class="unit-art">${cardArt(def, SEAT_COLOR[g.owner])}</div><div class="unit-name">${esc(def.name)}</div></div>`;
}
function regionColumn(seen, index) {
  const spot = seen.regions[index];
  const known = spot.regionId ? getRegion(spot.regionId) : null;
  const foe = seat === 0 ? 1 : 0;
  const route = routes.has(`r${index}`) ? `r${index}` : "";
  const decision = yourDecision();
  const surveying = decision && (decision.type === "surveyLook" || decision.type === "surveyFlip") && decision.options.includes(index);
  const pickedHere = picked.has(String(index));
  const crewsOf2 = (owner) => seen.crews.filter((c) => c.where.zone === "region" && c.where.index === index && c.owner === owner);
  const lane = (owner) => {
    const units = crewsOf2(owner).map((c) => unit(seen, c)).join("") + (fx?.ghosts.filter((g) => g.where === index && g.owner === owner).map(ghost).join("") ?? "");
    return `<div class="lane lane-${owner === seat ? "you" : "foe"}">${units || `<span class="lane-empty"></span>`}</div>`;
  };
  const mFor = (owner) => crewsOf2(owner).reduce((t, c) => t + (getCard(c.cardId).might ?? 0) + c.mods.reduce((s, m) => s + m.might, 0), 0);
  const contested2 = crewsOf2(0).length > 0 && crewsOf2(1).length > 0;
  const clashHere = state.claim && state.decision && "region" in state.decision && state.decision.region === index;
  let face;
  if (spot.faceUp && known) {
    const goods = known.goods.map((g) => `<span class="good good-${g}" title="${cap(g)}">${icon(GOOD_ICON[g])}</span>`).join("");
    const banner = spot.controller != null ? `<span class="flag-banner ${fx?.control.has(index) ? "fx-plant" : ""}" style="--accent:${SEAT_COLOR[spot.controller]}" title="${seatName(spot.controller)} controls">${icon("banner")}</span>` : "";
    const post = spot.outpost ? `<span class="outpost-chip" style="--accent:${SEAT_COLOR[spot.outpost.owner]}" title="${esc(getCard(spot.outpost.cardId).text)}">${icon("crate")}${esc(cardName(spot.outpost.cardId))}</span>` : "";
    face = `<div class="region-card ${known.hazard ? "hazard" : ""} ${fx?.flips.has(index) ? "fx-reveal" : ""}">
      <div class="region-art">${regionArt(known)}</div>
      <div class="region-head"><h3>${esc(known.name)}</h3><span class="renown-ribbon" title="Renown at each Claim">${icon("star")}<b>${known.renown}</b></span></div>
      ${banner}
      <div class="region-goods">${goods}</div>
      ${post}
      <p class="trait ${known.hazard ? "hazard" : ""}">${known.hazard ? icon("hazard") : ""}${esc(known.text)}</p>
    </div>`;
  } else if (known) {
    face = `<div class="region-card peeked">
      <div class="region-art">${regionArt(known)}</div>
      <div class="region-head"><h3>${esc(known.name)}</h3><span class="renown-ribbon">${icon("star")}<b>${known.renown}</b></span></div>
      <span class="peek-tag">${icon("eye")} Seen from afar</span>
      <p class="trait">${esc(known.text)}</p>
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
  return `<section class="region-col ${route ? "target" : ""} ${contested2 ? "contested" : ""} ${clashHere ? "clashing" : ""} ${pickedHere ? "picked" : ""}" style="--n:${index}" ${route ? `data-route="${route}" role="button" tabindex="0"` : ""} aria-label="${esc(coastLabel(index, seen))}">
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
  return `<div class="zone stores ${route ? "target" : ""}" ${route ? `data-route="stores" role="button" tabindex="0"` : ""} title="${mine ? esc(seen.stores.map((c) => `${cardName(c.cardId)}${c.exhausted ? " (spent)" : ""}`).join(", ") || "Empty") : "Hidden"}">
    <div class="pile">${stack || `<span class="pile-empty"></span>`}</div>
    <div class="zone-label">Stores</div>
    <div class="supply"><b>${ready}</b><small>/${total}</small></div>
    <div class="supply-pips">${pips}</div>
  </div>`;
}
function harbor(seen, player) {
  const route = player === seat && routes.has("harbor") ? "harbor" : "";
  const units = seen.crews.filter((c) => c.where.zone === "harbor" && c.owner === player).map((c) => unit(seen, c)).join("") + (fx?.ghosts.filter((g) => g.where === "harbor" && g.owner === player).map(ghost).join("") ?? "");
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
    <div class="discard-top" title="${esc(discard.map((c) => cardName(c.cardId)).join(", ") || "Discard is empty")}">${top ? cardFace(getCard(top.cardId), { cls: "tiny", owner: player }) : `<span class="discard-empty"></span>`}<b>${discard.length}</b></div>
  </div>`;
}
function crest(player, seen) {
  const turn = seen.decision?.player === player;
  const init = seen.initiative === player;
  return `<div class="crest ${turn ? "active" : ""}" style="--accent:${SEAT_COLOR[player]}">
    <div class="crest-badge">${icon("ship")}</div>
    <div><div class="crest-name">${seatName(player)}${player === seat ? " <small>(you)</small>" : ""}</div>
    <div class="crest-sub">${icon("star")} ${seen.renown[player]} Renown${init ? ` \xB7 ${icon("compass")} Initiative` : ""}</div></div>
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
  const choosing = seen.decision?.type === "mulligan" || seen.decision?.type === "discard";
  const all = actsOf(seen);
  const n = seen.hand.length;
  const cards = seen.hand.map((card, i) => {
    const def = getCard(card.cardId);
    const playable = all.some((a) => (a.type === "play" || a.type === "stow") && a.iid === card.iid);
    const cls = [
      "in-hand",
      choosing ? "choosable" : playable ? "playable" : "idle",
      selected === card.iid ? "selected" : "",
      picked.has(card.iid) ? "set-aside" : ""
    ].join(" ");
    const badge = picked.has(card.iid) ? `<span class="aside-badge">${seen.decision?.type === "discard" ? "Discard" : "Set aside"}</span>` : "";
    return cardFace(def, {
      iid: card.iid,
      owner: seat,
      cls,
      style: `--i:${i};--n:${n};`,
      attrs: `role="button" tabindex="0" ${choosing ? `data-pick="${esc(card.iid)}"` : `data-select="${esc(card.iid)}"`}`,
      badge
    });
  }).join("");
  return `<section class="hand" style="--n:${n}">${cards || `<p class="muted">Your hand is empty.</p>`}</section>`;
}
function prompt(seen) {
  const decision = yourDecision();
  if (seen.over) {
    if (seen.over.winner == null) return "The voyage ends in a draw.";
    const why = seen.over.reason === "renown" ? "reaching 15 Renown" : seen.over.reason === "rounds" ? "the long count" : seen.over.reason === "concede" ? "concession" : seen.over.reason;
    return `${seatName(seen.over.winner)} wins by ${why}.`;
  }
  if (!decision) return "Waiting for the other captain.";
  if (decision.type === "mulligan") return "Click any cards to set aside. You draw that many back, once.";
  if (decision.type === "discard") return "Your hand is over 8. Choose cards to discard.";
  if (decision.type === "surveyLook") return `Survey: choose up to ${decision.max} hidden coast${decision.max > 1 ? "s" : ""} to look at.`;
  if (decision.type === "surveyFlip") return "You see them now. Choose any to flip face up, or none.";
  if (decision.type === "ambush") return `Ambush at ${coastLabel(decision.region, seen)}. Play an Ambush order, or pass.`;
  if (decision.type === "assign") return `Strike! Split ${decision.amount} damage among the enemy crews at ${coastLabel(decision.region, seen)}.`;
  if (selected) {
    const card = seen.hand.find((c) => c.iid === selected);
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
  if (event.type === "gameover") return event.winner == null ? "The voyage is a draw." : `${seatName(event.winner)} wins the coast.`;
  return "";
}
function track(seen) {
  const ticks = Array.from({ length: 16 }, (_, i) => `<span class="tick ${i % 5 === 0 ? "major" : ""}" style="--v:${i}">${i % 5 === 0 ? i : ""}</span>`).join("");
  const token = (p) => `<span class="token ${fx && fx.renown[p] ? "fx-rise" : ""}" style="--v:${Math.min(15, seen.renown[p])};--accent:${SEAT_COLOR[p]}" title="${seatName(p)}: ${seen.renown[p]}">${icon("ship")}<b>${seen.renown[p]}</b></span>`;
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
  const tray = selectionActions(seen).map((a) => `<button type="button" class="chip" data-act="${trayActions.push(a) - 1}">${esc(actionLabel(a, seen))}</button>`).join("");
  const orders = seen.decision?.type === "ambush" ? all.filter((a) => a.type === "play" && !selected) : [];
  const ambushHint = orders.length ? `<p class="small muted">Pick an Ambush order from your hand.</p>` : "";
  const phase = state.claim ? "Claim" : seen.decision?.type === "mulligan" ? "Mulligan" : "Command";
  const lines = (fx?.lines.length ? fx.lines : redactEvents(log, seat).slice(-6).map((e) => eventLine(e, seat)).filter(Boolean)).slice(-7);
  return `<aside class="helm">
    <div class="helm-top">
      <div class="round"><small>Round</small><b>${seen.round}</b></div>
      <div class="phase"><small>Phase</small><b>${phase}</b></div>
      <div class="init" style="--accent:${SEAT_COLOR[seen.initiative]}" title="Initiative">${icon("compass")}<small>${seatName(seen.initiative)}</small></div>
    </div>
    <p class="prompt">${esc(prompt(seen))}</p>
    ${error ? `<p class="alert">${esc(error)}</p>` : ""}
    ${note ? `<p class="small muted note">${esc(note)}</p>` : ""}
    ${ambushHint}
    ${tray ? `<div class="tray">${tray}<button type="button" class="chip quiet" data-go="deselect">Cancel</button></div>` : ""}
    <div class="big-row">${big.join("")}</div>
    <ol class="log">${lines.map((l, i) => `<li style="--d:${i}" class="${fx ? "fx-line" : ""}">${esc(l)}</li>`).join("") || `<li class="muted">The voyage begins.</li>`}</ol>
    ${seen.over ? "" : `<button type="button" class="chip ${armConcede ? "danger" : "quiet"} concede" data-go="concede">${armConcede ? "Concede? Click again" : "Concede"}</button>`}
  </aside>`;
}
function computeRoutes(seen) {
  routes = /* @__PURE__ */ new Map();
  for (const action of selectionActions(seen)) {
    const key = routeKey(action);
    if (key && !routes.has(key)) routes.set(key, action);
  }
}
function inspectOverlay() {
  if (!inspecting) return "";
  return `<div class="inspect" data-go="close-inspect"><div class="inspect-card">${cardFace(getCard(inspecting), { cls: "huge", owner: seat })}
    <div class="inspect-keys">${getCard(inspecting).keywords.map((k) => `<p><b>${cap(k)}.</b> ${esc(KEYWORD_HELP[k] ?? "")}</p>`).join("")}<p class="muted small">Click anywhere to close.</p></div></div></div>`;
}
function render() {
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
      <h2>${esc(seatName(seat))}</h2>
      <p>${esc(waiting)}</p>
      <p class="muted">Round ${seen.round} \xB7 Renown ${seen.renown[0]} to ${seen.renown[1]}</p>
      <button type="button" class="brass big" data-go="sit">Take the helm</button>
    </section>`;
    return;
  }
  cover.hidden = true;
  cover.innerHTML = "";
  const over = seen.over ? `<div class="victory" style="--accent:${seen.over.winner == null ? "#c9a44c" : SEAT_COLOR[seen.over.winner]}"><div><p class="kicker">The voyage is over</p><h2>${esc(prompt(seen))}</h2><button type="button" class="brass big" data-go="again">Sail again</button></div></div>` : "";
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
  fx = null;
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
    const viewer = next2 ?? seat;
    const batch = collectFx(before, state, result.events);
    batch.lines = redactEvents(result.events, viewer).map((e) => eventLine(e, viewer)).filter(Boolean);
    fx = batch;
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
  if (next != null && next !== prevPlayer) {
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
  selected = null;
  fx = null;
  inspecting = null;
  render();
}
function activate(target) {
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
  if (target.dataset.go === "close-inspect") {
    inspecting = null;
    render();
    return;
  }
  if (target.dataset.act != null) {
    const action = trayActions[Number(target.dataset.act)];
    if (action) send(action);
    return;
  }
  if (target.dataset.route != null) {
    const action = routes.get(target.dataset.route);
    if (action) send(action);
    return;
  }
  if (target.dataset.select != null) {
    const iid = target.dataset.select;
    selected = selected === iid ? null : iid;
    const only = selectionActions(view());
    if (selected && only.length === 1 && routeKey(only[0]) === "self") {
      send(only[0]);
      return;
    }
    render();
    return;
  }
  if (target.dataset.crew != null) {
    const iid = target.dataset.crew;
    const seen = view();
    if (actsOf(seen).some((a) => a.type === "march" && a.iid === iid)) {
      selected = selected === iid ? null : iid;
      render();
    }
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
    if (!spec || spec.kind !== "subset" || picked.size < spec.min || picked.size > spec.max) return;
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
  if (target.dataset.go === "deselect") {
    selected = null;
    render();
    return;
  }
  if (target.dataset.go === "again") {
    boot(1 + Math.floor(Math.random() * 999999));
    return;
  }
  if (target.dataset.go === "sit") {
    covered = false;
    picked = /* @__PURE__ */ new Set();
    hits = {};
    selected = null;
    render();
  }
}
var HOT = "[data-act], [data-route], [data-pick], [data-bump], [data-go], [data-select], [data-crew]";
document.body.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest(HOT) : null;
  if (target instanceof HTMLElement) activate(target);
});
document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (inspecting) inspecting = null;
    else selected = null;
    render();
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target instanceof HTMLElement && !(event.target instanceof HTMLButtonElement) ? event.target.closest(HOT) : null;
  if (target instanceof HTMLElement) {
    event.preventDefault();
    activate(target);
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
document.querySelector("#new")?.addEventListener("click", () => {
  const raw = Number(seedInput.value);
  boot(Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 1);
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
boot(1 + Math.floor(Math.random() * 999999));
