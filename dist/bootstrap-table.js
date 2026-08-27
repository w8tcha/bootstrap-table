(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BootstrapTable = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = true, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var es_error_cause = {};

  var globalThis_1;
  var hasRequiredGlobalThis;

  function requireGlobalThis () {
  	if (hasRequiredGlobalThis) return globalThis_1;
  	hasRequiredGlobalThis = 1;
  	var check = function (it) {
  	  return it && it.Math === Math && it;
  	};

  	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  	globalThis_1 =
  	  // eslint-disable-next-line es/no-global-this -- safe
  	  check(typeof globalThis == 'object' && globalThis) ||
  	  check(typeof window == 'object' && window) ||
  	  // eslint-disable-next-line no-restricted-globals -- safe
  	  check(typeof self == 'object' && self) ||
  	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  	  check(typeof globalThis_1 == 'object' && globalThis_1) ||
  	  // eslint-disable-next-line no-new-func -- fallback
  	  (function () { return this; })() || Function('return this')();
  	return globalThis_1;
  }

  var objectGetOwnPropertyDescriptor = {};

  var fails;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails;
  	hasRequiredFails = 1;
  	fails = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails;
  }

  var descriptors;
  var hasRequiredDescriptors;

  function requireDescriptors () {
  	if (hasRequiredDescriptors) return descriptors;
  	hasRequiredDescriptors = 1;
  	var fails = requireFails();

  	// Detect IE8's incomplete defineProperty implementation
  	descriptors = !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  	});
  	return descriptors;
  }

  var functionBindNative;
  var hasRequiredFunctionBindNative;

  function requireFunctionBindNative () {
  	if (hasRequiredFunctionBindNative) return functionBindNative;
  	hasRequiredFunctionBindNative = 1;
  	var fails = requireFails();

  	functionBindNative = !fails(function () {
  	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  	  var test = function () { /* empty */ }.bind();
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return typeof test != 'function' || test.hasOwnProperty('prototype');
  	});
  	return functionBindNative;
  }

  var functionCall;
  var hasRequiredFunctionCall;

  function requireFunctionCall () {
  	if (hasRequiredFunctionCall) return functionCall;
  	hasRequiredFunctionCall = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var call = Function.prototype.call;
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
  	functionCall = NATIVE_BIND ? call.bind(call) : function () {
  	  return call.apply(call, arguments);
  	};
  	return functionCall;
  }

  var objectPropertyIsEnumerable = {};

  var hasRequiredObjectPropertyIsEnumerable;

  function requireObjectPropertyIsEnumerable () {
  	if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  	hasRequiredObjectPropertyIsEnumerable = 1;
  	var $propertyIsEnumerable = {}.propertyIsEnumerable;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Nashorn ~ JDK8 bug
  	var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  	// `Object.prototype.propertyIsEnumerable` method implementation
  	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  	  var descriptor = getOwnPropertyDescriptor(this, V);
  	  return !!descriptor && descriptor.enumerable;
  	} : $propertyIsEnumerable;
  	return objectPropertyIsEnumerable;
  }

  var createPropertyDescriptor;
  var hasRequiredCreatePropertyDescriptor;

  function requireCreatePropertyDescriptor () {
  	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  	hasRequiredCreatePropertyDescriptor = 1;
  	createPropertyDescriptor = function (bitmap, value) {
  	  return {
  	    enumerable: !(bitmap & 1),
  	    configurable: !(bitmap & 2),
  	    writable: !(bitmap & 4),
  	    value: value
  	  };
  	};
  	return createPropertyDescriptor;
  }

  var functionUncurryThis;
  var hasRequiredFunctionUncurryThis;

  function requireFunctionUncurryThis () {
  	if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  	hasRequiredFunctionUncurryThis = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var call = FunctionPrototype.call;
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
  	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

  	functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  	  return function () {
  	    return call.apply(fn, arguments);
  	  };
  	};
  	return functionUncurryThis;
  }

  var classofRaw;
  var hasRequiredClassofRaw;

  function requireClassofRaw () {
  	if (hasRequiredClassofRaw) return classofRaw;
  	hasRequiredClassofRaw = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var toString = uncurryThis({}.toString);
  	var stringSlice = uncurryThis(''.slice);

  	classofRaw = function (it) {
  	  return stringSlice(toString(it), 8, -1);
  	};
  	return classofRaw;
  }

  var indexedObject;
  var hasRequiredIndexedObject;

  function requireIndexedObject () {
  	if (hasRequiredIndexedObject) return indexedObject;
  	hasRequiredIndexedObject = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var classof = requireClassofRaw();

  	var $Object = Object;
  	var split = uncurryThis(''.split);

  	// fallback for non-array-like ES3 and non-enumerable old V8 strings
  	indexedObject = fails(function () {
  	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return !$Object('z').propertyIsEnumerable(0);
  	}) ? function (it) {
  	  return classof(it) === 'String' ? split(it, '') : $Object(it);
  	} : $Object;
  	return indexedObject;
  }

  var isNullOrUndefined;
  var hasRequiredIsNullOrUndefined;

  function requireIsNullOrUndefined () {
  	if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  	hasRequiredIsNullOrUndefined = 1;
  	// we can't use just `it == null` since of `document.all` special case
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  	isNullOrUndefined = function (it) {
  	  return it === null || it === undefined;
  	};
  	return isNullOrUndefined;
  }

  var requireObjectCoercible;
  var hasRequiredRequireObjectCoercible;

  function requireRequireObjectCoercible () {
  	if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  	hasRequiredRequireObjectCoercible = 1;
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	var $TypeError = TypeError;

  	// `RequireObjectCoercible` abstract operation
  	// https://tc39.es/ecma262/#sec-requireobjectcoercible
  	requireObjectCoercible = function (it) {
  	  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  	  return it;
  	};
  	return requireObjectCoercible;
  }

  var toIndexedObject;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject;
  	hasRequiredToIndexedObject = 1;
  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = requireIndexedObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	toIndexedObject = function (it) {
  	  return IndexedObject(requireObjectCoercible(it));
  	};
  	return toIndexedObject;
  }

  var isCallable;
  var hasRequiredIsCallable;

  function requireIsCallable () {
  	if (hasRequiredIsCallable) return isCallable;
  	hasRequiredIsCallable = 1;
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  	var documentAll = typeof document == 'object' && document.all;

  	// `IsCallable` abstract operation
  	// https://tc39.es/ecma262/#sec-iscallable
  	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  	isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  	  return typeof argument == 'function' || argument === documentAll;
  	} : function (argument) {
  	  return typeof argument == 'function';
  	};
  	return isCallable;
  }

  var isObject$1;
  var hasRequiredIsObject;

  function requireIsObject () {
  	if (hasRequiredIsObject) return isObject$1;
  	hasRequiredIsObject = 1;
  	var isCallable = requireIsCallable();

  	isObject$1 = function (it) {
  	  return typeof it == 'object' ? it !== null : isCallable(it);
  	};
  	return isObject$1;
  }

  var getBuiltIn;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn;
  	hasRequiredGetBuiltIn = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var aFunction = function (argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};

  	getBuiltIn = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn;
  }

  var objectIsPrototypeOf;
  var hasRequiredObjectIsPrototypeOf;

  function requireObjectIsPrototypeOf () {
  	if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  	hasRequiredObjectIsPrototypeOf = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  	return objectIsPrototypeOf;
  }

  var environmentUserAgent;
  var hasRequiredEnvironmentUserAgent;

  function requireEnvironmentUserAgent () {
  	if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  	hasRequiredEnvironmentUserAgent = 1;
  	var globalThis = requireGlobalThis();

  	var navigator = globalThis.navigator;
  	var userAgent = navigator && navigator.userAgent;

  	environmentUserAgent = userAgent ? String(userAgent) : '';
  	return environmentUserAgent;
  }

  var environmentV8Version;
  var hasRequiredEnvironmentV8Version;

  function requireEnvironmentV8Version () {
  	if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  	hasRequiredEnvironmentV8Version = 1;
  	var globalThis = requireGlobalThis();
  	var userAgent = requireEnvironmentUserAgent();

  	var process = globalThis.process;
  	var Deno = globalThis.Deno;
  	var versions = process && process.versions || Deno && Deno.version;
  	var v8 = versions && versions.v8;
  	var match, version;

  	if (v8) {
  	  match = v8.split('.');
  	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  	  // but their correct versions are not interesting for us
  	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  	}

  	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  	// so check `userAgent` even if `.v8` exists, but 0
  	if (!version && userAgent) {
  	  match = userAgent.match(/Edge\/(\d+)/);
  	  if (!match || match[1] >= 74) {
  	    match = userAgent.match(/Chrome\/(\d+)/);
  	    if (match) version = +match[1];
  	  }
  	}

  	environmentV8Version = version;
  	return environmentV8Version;
  }

  var symbolConstructorDetection;
  var hasRequiredSymbolConstructorDetection;

  function requireSymbolConstructorDetection () {
  	if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  	hasRequiredSymbolConstructorDetection = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var V8_VERSION = requireEnvironmentV8Version();
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	var $String = globalThis.String;

  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  	symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  	  var symbol = Symbol('symbol detection');
  	  // Chrome 38 Symbol has incorrect toString conversion
  	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  	  // of course, fail.
  	  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  	});
  	return symbolConstructorDetection;
  }

  var useSymbolAsUid;
  var hasRequiredUseSymbolAsUid;

  function requireUseSymbolAsUid () {
  	if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  	hasRequiredUseSymbolAsUid = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();

  	useSymbolAsUid = NATIVE_SYMBOL &&
  	  !Symbol.sham &&
  	  typeof Symbol.iterator == 'symbol';
  	return useSymbolAsUid;
  }

  var isSymbol;
  var hasRequiredIsSymbol;

  function requireIsSymbol () {
  	if (hasRequiredIsSymbol) return isSymbol;
  	hasRequiredIsSymbol = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var $Object = Object;

  	isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  	  return typeof it == 'symbol';
  	} : function (it) {
  	  var $Symbol = getBuiltIn('Symbol');
  	  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  	};
  	return isSymbol;
  }

  var tryToString;
  var hasRequiredTryToString;

  function requireTryToString () {
  	if (hasRequiredTryToString) return tryToString;
  	hasRequiredTryToString = 1;
  	var $String = String;

  	tryToString = function (argument) {
  	  try {
  	    return $String(argument);
  	  } catch (error) {
  	    return 'Object';
  	  }
  	};
  	return tryToString;
  }

  var aCallable;
  var hasRequiredACallable;

  function requireACallable () {
  	if (hasRequiredACallable) return aCallable;
  	hasRequiredACallable = 1;
  	var isCallable = requireIsCallable();
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	// `Assert: IsCallable(argument) is true`
  	aCallable = function (argument) {
  	  if (isCallable(argument)) return argument;
  	  throw new $TypeError(tryToString(argument) + ' is not a function');
  	};
  	return aCallable;
  }

  var getMethod;
  var hasRequiredGetMethod;

  function requireGetMethod () {
  	if (hasRequiredGetMethod) return getMethod;
  	hasRequiredGetMethod = 1;
  	var aCallable = requireACallable();
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	// `GetMethod` abstract operation
  	// https://tc39.es/ecma262/#sec-getmethod
  	getMethod = function (V, P) {
  	  var func = V[P];
  	  return isNullOrUndefined(func) ? undefined : aCallable(func);
  	};
  	return getMethod;
  }

  var ordinaryToPrimitive;
  var hasRequiredOrdinaryToPrimitive;

  function requireOrdinaryToPrimitive () {
  	if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  	hasRequiredOrdinaryToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();

  	var $TypeError = TypeError;

  	// `OrdinaryToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
  	ordinaryToPrimitive = function (input, pref) {
  	  var fn, val;
  	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  throw new $TypeError("Can't convert object to primitive value");
  	};
  	return ordinaryToPrimitive;
  }

  var sharedStore = {exports: {}};

  var isPure;
  var hasRequiredIsPure;

  function requireIsPure () {
  	if (hasRequiredIsPure) return isPure;
  	hasRequiredIsPure = 1;
  	isPure = false;
  	return isPure;
  }

  var defineGlobalProperty;
  var hasRequiredDefineGlobalProperty;

  function requireDefineGlobalProperty () {
  	if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  	hasRequiredDefineGlobalProperty = 1;
  	var globalThis = requireGlobalThis();

  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;

  	defineGlobalProperty = function (key, value) {
  	  try {
  	    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  	  } catch (error) {
  	    globalThis[key] = value;
  	  } return value;
  	};
  	return defineGlobalProperty;
  }

  var hasRequiredSharedStore;

  function requireSharedStore () {
  	if (hasRequiredSharedStore) return sharedStore.exports;
  	hasRequiredSharedStore = 1;
  	var IS_PURE = requireIsPure();
  	var globalThis = requireGlobalThis();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	var SHARED = '__core-js_shared__';
  	var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

  	(store.versions || (store.versions = [])).push({
  	  version: '3.50.0',
  	  mode: IS_PURE ? 'pure' : 'global',
  	  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  	  license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
  	  source: 'https://github.com/zloirock/core-js'
  	});
  	return sharedStore.exports;
  }

  var shared;
  var hasRequiredShared;

  function requireShared () {
  	if (hasRequiredShared) return shared;
  	hasRequiredShared = 1;
  	var store = requireSharedStore();
  	// eslint-disable-next-line es/no-object-create -- safe
  	var create = Object.create || Object;

  	shared = function (key, value) {
  	  return store[key] || (store[key] = value || create(null));
  	};
  	return shared;
  }

  var toObject;
  var hasRequiredToObject;

  function requireToObject () {
  	if (hasRequiredToObject) return toObject;
  	hasRequiredToObject = 1;
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	var $Object = Object;

  	// `ToObject` abstract operation
  	// https://tc39.es/ecma262/#sec-toobject
  	toObject = function (argument) {
  	  return $Object(requireObjectCoercible(argument));
  	};
  	return toObject;
  }

  var hasOwnProperty_1;
  var hasRequiredHasOwnProperty;

  function requireHasOwnProperty () {
  	if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  	hasRequiredHasOwnProperty = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toObject = requireToObject();

  	var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  	// `HasOwnProperty` abstract operation
  	// https://tc39.es/ecma262/#sec-hasownproperty
  	// eslint-disable-next-line es/no-object-hasown -- safe
  	hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  	  return hasOwnProperty(toObject(it), key);
  	};
  	return hasOwnProperty_1;
  }

  var uid;
  var hasRequiredUid;

  function requireUid () {
  	if (hasRequiredUid) return uid;
  	hasRequiredUid = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var id = 0;
  	var postfix = Math.random();
  	var toString = uncurryThis(1.1.toString);

  	uid = function (key) {
  	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  	};
  	return uid;
  }

  var wellKnownSymbol;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  	hasRequiredWellKnownSymbol = 1;
  	var globalThis = requireGlobalThis();
  	var shared = requireShared();
  	var hasOwn = requireHasOwnProperty();
  	var uid = requireUid();
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var Symbol = globalThis.Symbol;
  	var WellKnownSymbolsStore = shared('wks');
  	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

  	wellKnownSymbol = function (name) {
  	  if (!hasOwn(WellKnownSymbolsStore, name)) {
  	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
  	      ? Symbol[name]
  	      : createWellKnownSymbol('Symbol.' + name);
  	  } return WellKnownSymbolsStore[name];
  	};
  	return wellKnownSymbol;
  }

  var toPrimitive;
  var hasRequiredToPrimitive;

  function requireToPrimitive () {
  	if (hasRequiredToPrimitive) return toPrimitive;
  	hasRequiredToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isObject = requireIsObject();
  	var isSymbol = requireIsSymbol();
  	var getMethod = requireGetMethod();
  	var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var $TypeError = TypeError;
  	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  	// `ToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-toprimitive
  	toPrimitive = function (input, pref) {
  	  if (!isObject(input) || isSymbol(input)) return input;
  	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  	  var result;
  	  if (exoticToPrim) {
  	    if (pref === undefined) pref = 'default';
  	    result = call(exoticToPrim, input, pref);
  	    if (!isObject(result) || isSymbol(result)) return result;
  	    throw new $TypeError("Can't convert object to primitive value");
  	  }
  	  if (pref === undefined) pref = 'number';
  	  return ordinaryToPrimitive(input, pref);
  	};
  	return toPrimitive;
  }

  var toPropertyKey;
  var hasRequiredToPropertyKey;

  function requireToPropertyKey () {
  	if (hasRequiredToPropertyKey) return toPropertyKey;
  	hasRequiredToPropertyKey = 1;
  	var toPrimitive = requireToPrimitive();
  	var isSymbol = requireIsSymbol();

  	// `ToPropertyKey` abstract operation
  	// https://tc39.es/ecma262/#sec-topropertykey
  	toPropertyKey = function (argument) {
  	  var key = toPrimitive(argument, 'string');
  	  return isSymbol(key) ? key : key + '';
  	};
  	return toPropertyKey;
  }

  var documentCreateElement;
  var hasRequiredDocumentCreateElement;

  function requireDocumentCreateElement () {
  	if (hasRequiredDocumentCreateElement) return documentCreateElement;
  	hasRequiredDocumentCreateElement = 1;
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();

  	var document = globalThis.document;
  	// typeof document.createElement is 'object' in old IE
  	var EXISTS = isObject(document) && isObject(document.createElement);

  	documentCreateElement = function (it) {
  	  return EXISTS ? document.createElement(it) : {};
  	};
  	return documentCreateElement;
  }

  var ie8DomDefine;
  var hasRequiredIe8DomDefine;

  function requireIe8DomDefine () {
  	if (hasRequiredIe8DomDefine) return ie8DomDefine;
  	hasRequiredIe8DomDefine = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();
  	var createElement = requireDocumentCreateElement();

  	// Thanks to IE8 for its funny defineProperty
  	ie8DomDefine = !DESCRIPTORS && !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(createElement('div'), 'a', {
  	    get: function () { return 7; }
  	  }).a !== 7;
  	});
  	return ie8DomDefine;
  }

  var hasRequiredObjectGetOwnPropertyDescriptor;

  function requireObjectGetOwnPropertyDescriptor () {
  	if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  	hasRequiredObjectGetOwnPropertyDescriptor = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var call = requireFunctionCall();
  	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var toIndexedObject = requireToIndexedObject();
  	var toPropertyKey = requireToPropertyKey();
  	var hasOwn = requireHasOwnProperty();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();

  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// `Object.getOwnPropertyDescriptor` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  	objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  	  O = toIndexedObject(O);
  	  P = toPropertyKey(P);
  	  if (IE8_DOM_DEFINE) try {
  	    return $getOwnPropertyDescriptor(O, P);
  	  } catch (error) { /* empty */ }
  	  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  	};
  	return objectGetOwnPropertyDescriptor;
  }

  var objectDefineProperty = {};

  var v8PrototypeDefineBug;
  var hasRequiredV8PrototypeDefineBug;

  function requireV8PrototypeDefineBug () {
  	if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  	hasRequiredV8PrototypeDefineBug = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();

  	// V8 ~ Chrome 36-
  	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
  	v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
  	    value: 42,
  	    writable: false
  	  }).prototype !== 42;
  	});
  	return v8PrototypeDefineBug;
  }

  var anObject;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject;
  	hasRequiredAnObject = 1;
  	var isObject = requireIsObject();

  	var $String = String;
  	var $TypeError = TypeError;

  	// `Assert: Type(argument) is Object`
  	anObject = function (argument) {
  	  if (isObject(argument)) return argument;
  	  throw new $TypeError($String(argument) + ' is not an object');
  	};
  	return anObject;
  }

  var hasRequiredObjectDefineProperty;

  function requireObjectDefineProperty () {
  	if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  	hasRequiredObjectDefineProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var anObject = requireAnObject();
  	var toPropertyKey = requireToPropertyKey();

  	var $TypeError = TypeError;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var $defineProperty = Object.defineProperty;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var ENUMERABLE = 'enumerable';
  	var CONFIGURABLE = 'configurable';
  	var WRITABLE = 'writable';

  	// `Object.defineProperty` method
  	// https://tc39.es/ecma262/#sec-object.defineproperty
  	objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
  	    var current = $getOwnPropertyDescriptor(O, P);
  	    if (current && current[WRITABLE]) {
  	      O[P] = Attributes.value;
  	      Attributes = {
  	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
  	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
  	        writable: false
  	      };
  	    }
  	  } return $defineProperty(O, P, Attributes);
  	} : $defineProperty : function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (IE8_DOM_DEFINE) try {
  	    return $defineProperty(O, P, Attributes);
  	  } catch (error) { /* empty */ }
  	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  	  if ('value' in Attributes) O[P] = Attributes.value;
  	  return O;
  	};
  	return objectDefineProperty;
  }

  var createNonEnumerableProperty;
  var hasRequiredCreateNonEnumerableProperty;

  function requireCreateNonEnumerableProperty () {
  	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  	hasRequiredCreateNonEnumerableProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = requireObjectDefineProperty();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
  	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  	} : function (object, key, value) {
  	  object[key] = value;
  	  return object;
  	};
  	return createNonEnumerableProperty;
  }

  var makeBuiltIn = {exports: {}};

  var functionName;
  var hasRequiredFunctionName;

  function requireFunctionName () {
  	if (hasRequiredFunctionName) return functionName;
  	hasRequiredFunctionName = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var hasOwn = requireHasOwnProperty();

  	var FunctionPrototype = Function.prototype;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

  	var EXISTS = hasOwn(FunctionPrototype, 'name');
  	// additional protection from minified / mangled / dropped function names
  	var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
  	var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

  	functionName = {
  	  EXISTS: EXISTS,
  	  PROPER: PROPER,
  	  CONFIGURABLE: CONFIGURABLE
  	};
  	return functionName;
  }

  var inspectSource;
  var hasRequiredInspectSource;

  function requireInspectSource () {
  	if (hasRequiredInspectSource) return inspectSource;
  	hasRequiredInspectSource = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var isCallable = requireIsCallable();
  	var store = requireSharedStore();

  	var functionToString = uncurryThis(Function.toString);

  	// this helper broken in `core-js [at] 3.4.1-3.4.4`, so we can't use `shared` helper
  	if (!isCallable(store.inspectSource)) {
  	  store.inspectSource = function (it) {
  	    return functionToString(it);
  	  };
  	}

  	inspectSource = store.inspectSource;
  	return inspectSource;
  }

  var weakMapBasicDetection;
  var hasRequiredWeakMapBasicDetection;

  function requireWeakMapBasicDetection () {
  	if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  	hasRequiredWeakMapBasicDetection = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var WeakMap = globalThis.WeakMap;

  	weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  	return weakMapBasicDetection;
  }

  var sharedKey;
  var hasRequiredSharedKey;

  function requireSharedKey () {
  	if (hasRequiredSharedKey) return sharedKey;
  	hasRequiredSharedKey = 1;
  	var shared = requireShared();
  	var uid = requireUid();

  	var keys = shared('keys');

  	sharedKey = function (key) {
  	  return keys[key] || (keys[key] = uid(key));
  	};
  	return sharedKey;
  }

  var hiddenKeys;
  var hasRequiredHiddenKeys;

  function requireHiddenKeys () {
  	if (hasRequiredHiddenKeys) return hiddenKeys;
  	hasRequiredHiddenKeys = 1;
  	hiddenKeys = {};
  	return hiddenKeys;
  }

  var internalState;
  var hasRequiredInternalState;

  function requireInternalState () {
  	if (hasRequiredInternalState) return internalState;
  	hasRequiredInternalState = 1;
  	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var hasOwn = requireHasOwnProperty();
  	var shared = requireSharedStore();
  	var sharedKey = requireSharedKey();
  	var hiddenKeys = requireHiddenKeys();

  	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  	var TypeError = globalThis.TypeError;
  	var WeakMap = globalThis.WeakMap;
  	var set, get, has;

  	var enforce = function (it) {
  	  return has(it) ? get(it) : set(it, {});
  	};

  	var getterFor = function (TYPE) {
  	  return function (it) {
  	    var state;
  	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
  	      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
  	    } return state;
  	  };
  	};

  	if (NATIVE_WEAK_MAP || shared.state) {
  	  var store = shared.state || (shared.state = new WeakMap());
  	  /* eslint-disable no-self-assign -- prototype methods protection */
  	  store.get = store.get;
  	  store.has = store.has;
  	  store.set = store.set;
  	  /* eslint-enable no-self-assign -- prototype methods protection */
  	  set = function (it, metadata) {
  	    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    store.set(it, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return store.get(it) || {};
  	  };
  	  has = function (it) {
  	    return store.has(it);
  	  };
  	} else {
  	  var STATE = sharedKey('state');
  	  hiddenKeys[STATE] = true;
  	  set = function (it, metadata) {
  	    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    createNonEnumerableProperty(it, STATE, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return hasOwn(it, STATE) ? it[STATE] : {};
  	  };
  	  has = function (it) {
  	    return hasOwn(it, STATE);
  	  };
  	}

  	internalState = {
  	  set: set,
  	  get: get,
  	  has: has,
  	  enforce: enforce,
  	  getterFor: getterFor
  	};
  	return internalState;
  }

  var hasRequiredMakeBuiltIn;

  function requireMakeBuiltIn () {
  	if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  	hasRequiredMakeBuiltIn = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var DESCRIPTORS = requireDescriptors();
  	var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  	var inspectSource = requireInspectSource();
  	var InternalStateModule = requireInternalState();

  	var enforceInternalState = InternalStateModule.enforce;
  	var getInternalState = InternalStateModule.get;
  	var $String = String;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;
  	var stringSlice = uncurryThis(''.slice);
  	var replace = uncurryThis(''.replace);
  	var join = uncurryThis([].join);

  	var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  	  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  	});

  	var TEMPLATE = String(String).split('String');

  	var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
  	  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
  	    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  	  }
  	  if (options && options.getter) name = 'get ' + name;
  	  if (options && options.setter) name = 'set ' + name;
  	  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
  	    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
  	    else value.name = name;
  	  }
  	  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
  	    defineProperty(value, 'length', { value: options.arity });
  	  }
  	  try {
  	    if (options && hasOwn(options, 'constructor') && options.constructor) {
  	      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
  	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
  	    } else if (value.prototype) value.prototype = undefined;
  	  } catch (error) { /* empty */ }
  	  var state = enforceInternalState(value);
  	  if (!hasOwn(state, 'source')) {
  	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  	  } return value;
  	};

  	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  	// eslint-disable-next-line no-extend-native -- required
  	Function.prototype.toString = makeBuiltIn$1(function toString() {
  	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
  	}, 'toString');
  	return makeBuiltIn.exports;
  }

  var defineBuiltIn;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  	hasRequiredDefineBuiltIn = 1;
  	var isCallable = requireIsCallable();
  	var definePropertyModule = requireObjectDefineProperty();
  	var makeBuiltIn = requireMakeBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	defineBuiltIn = function (O, key, value, options) {
  	  if (!options) options = {};
  	  var simple = options.enumerable;
  	  var name = options.name !== undefined ? options.name : key;
  	  if (isCallable(value)) makeBuiltIn(value, name, options);
  	  if (options.global) {
  	    if (simple) O[key] = value;
  	    else defineGlobalProperty(key, value);
  	  } else {
  	    try {
  	      if (!options.unsafe) delete O[key];
  	      else if (O[key]) simple = true;
  	    } catch (error) { /* empty */ }
  	    if (simple) O[key] = value;
  	    else definePropertyModule.f(O, key, {
  	      value: value,
  	      enumerable: false,
  	      configurable: !options.nonConfigurable,
  	      writable: !options.nonWritable
  	    });
  	  } return O;
  	};
  	return defineBuiltIn;
  }

  var objectGetOwnPropertyNames = {};

  var mathTrunc;
  var hasRequiredMathTrunc;

  function requireMathTrunc () {
  	if (hasRequiredMathTrunc) return mathTrunc;
  	hasRequiredMathTrunc = 1;
  	var ceil = Math.ceil;
  	var floor = Math.floor;

  	// `Math.trunc` method
  	// https://tc39.es/ecma262/#sec-math.trunc
  	// eslint-disable-next-line es/no-math-trunc -- safe
  	mathTrunc = Math.trunc || function trunc(x) {
  	  var n = +x;
  	  return (n > 0 ? floor : ceil)(n);
  	};
  	return mathTrunc;
  }

  var toIntegerOrInfinity;
  var hasRequiredToIntegerOrInfinity;

  function requireToIntegerOrInfinity () {
  	if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  	hasRequiredToIntegerOrInfinity = 1;
  	var trunc = requireMathTrunc();

  	// `ToIntegerOrInfinity` abstract operation
  	// https://tc39.es/ecma262/#sec-tointegerorinfinity
  	toIntegerOrInfinity = function (argument) {
  	  var number = +argument;
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return number !== number || number === 0 ? 0 : trunc(number);
  	};
  	return toIntegerOrInfinity;
  }

  var toAbsoluteIndex;
  var hasRequiredToAbsoluteIndex;

  function requireToAbsoluteIndex () {
  	if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  	hasRequiredToAbsoluteIndex = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var max = Math.max;
  	var min = Math.min;

  	// Helper for a popular repeating case of the spec:
  	// Let integer be ? ToInteger(index).
  	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  	toAbsoluteIndex = function (index, length) {
  	  var integer = toIntegerOrInfinity(index);
  	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
  	};
  	return toAbsoluteIndex;
  }

  var toLength;
  var hasRequiredToLength;

  function requireToLength () {
  	if (hasRequiredToLength) return toLength;
  	hasRequiredToLength = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var min = Math.min;

  	// `ToLength` abstract operation
  	// https://tc39.es/ecma262/#sec-tolength
  	toLength = function (argument) {
  	  var len = toIntegerOrInfinity(argument);
  	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  	};
  	return toLength;
  }

  var lengthOfArrayLike;
  var hasRequiredLengthOfArrayLike;

  function requireLengthOfArrayLike () {
  	if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  	hasRequiredLengthOfArrayLike = 1;
  	var toLength = requireToLength();

  	// `LengthOfArrayLike` abstract operation
  	// https://tc39.es/ecma262/#sec-lengthofarraylike
  	lengthOfArrayLike = function (obj) {
  	  return toLength(obj.length);
  	};
  	return lengthOfArrayLike;
  }

  var arrayIncludes;
  var hasRequiredArrayIncludes;

  function requireArrayIncludes () {
  	if (hasRequiredArrayIncludes) return arrayIncludes;
  	hasRequiredArrayIncludes = 1;
  	var toIndexedObject = requireToIndexedObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();

  	// `Array.prototype.{ indexOf, includes }` methods implementation
  	var createMethod = function (IS_INCLUDES) {
  	  return function ($this, el, fromIndex) {
  	    var O = toIndexedObject($this);
  	    var length = lengthOfArrayLike(O);
  	    if (length === 0) return !IS_INCLUDES && -1;
  	    var index = toAbsoluteIndex(fromIndex, length);
  	    var value;
  	    // Array#includes uses SameValueZero equality algorithm
  	    // eslint-disable-next-line no-self-compare -- NaN check
  	    if (IS_INCLUDES && el !== el) while (length > index) {
  	      value = O[index++];
  	      // eslint-disable-next-line no-self-compare -- NaN check
  	      if (value !== value) return true;
  	    // Array#indexOf ignores holes, Array#includes - not
  	    } else for (;length > index; index++) {
  	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
  	    } return !IS_INCLUDES && -1;
  	  };
  	};

  	arrayIncludes = {
  	  // `Array.prototype.includes` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.includes
  	  includes: createMethod(true),
  	  // `Array.prototype.indexOf` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  	  indexOf: createMethod(false)
  	};
  	return arrayIncludes;
  }

  var objectKeysInternal;
  var hasRequiredObjectKeysInternal;

  function requireObjectKeysInternal () {
  	if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  	hasRequiredObjectKeysInternal = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var hasOwn = requireHasOwnProperty();
  	var toIndexedObject = requireToIndexedObject();
  	var indexOf = requireArrayIncludes().indexOf;
  	var hiddenKeys = requireHiddenKeys();

  	var push = uncurryThis([].push);

  	objectKeysInternal = function (object, names) {
  	  var O = toIndexedObject(object);
  	  var i = 0;
  	  var result = [];
  	  var key;
  	  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  	  // Don't enum bug & hidden keys
  	  while (names.length > i) if (hasOwn(O, key = names[i++])) {
  	    ~indexOf(result, key) || push(result, key);
  	  }
  	  return result;
  	};
  	return objectKeysInternal;
  }

  var enumBugKeys;
  var hasRequiredEnumBugKeys;

  function requireEnumBugKeys () {
  	if (hasRequiredEnumBugKeys) return enumBugKeys;
  	hasRequiredEnumBugKeys = 1;
  	// IE8- don't enum bug keys
  	enumBugKeys = [
  	  'constructor',
  	  'hasOwnProperty',
  	  'isPrototypeOf',
  	  'propertyIsEnumerable',
  	  'toLocaleString',
  	  'toString',
  	  'valueOf'
  	];
  	return enumBugKeys;
  }

  var hasRequiredObjectGetOwnPropertyNames;

  function requireObjectGetOwnPropertyNames () {
  	if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  	hasRequiredObjectGetOwnPropertyNames = 1;
  	var internalObjectKeys = requireObjectKeysInternal();
  	var enumBugKeys = requireEnumBugKeys();

  	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  	// `Object.getOwnPropertyNames` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertynames
  	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
  	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  	  return internalObjectKeys(O, hiddenKeys);
  	};
  	return objectGetOwnPropertyNames;
  }

  var objectGetOwnPropertySymbols = {};

  var hasRequiredObjectGetOwnPropertySymbols;

  function requireObjectGetOwnPropertySymbols () {
  	if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  	hasRequiredObjectGetOwnPropertySymbols = 1;
  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  	return objectGetOwnPropertySymbols;
  }

  var ownKeys;
  var hasRequiredOwnKeys;

  function requireOwnKeys () {
  	if (hasRequiredOwnKeys) return ownKeys;
  	hasRequiredOwnKeys = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  	var anObject = requireAnObject();

  	var concat = uncurryThis([].concat);

  	// all object keys, includes non-enumerable and symbols
  	ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  	  var keys = getOwnPropertyNamesModule.f(anObject(it));
  	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  	};
  	return ownKeys;
  }

  var copyConstructorProperties;
  var hasRequiredCopyConstructorProperties;

  function requireCopyConstructorProperties () {
  	if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  	hasRequiredCopyConstructorProperties = 1;
  	var hasOwn = requireHasOwnProperty();
  	var ownKeys = requireOwnKeys();
  	var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  	var definePropertyModule = requireObjectDefineProperty();

  	copyConstructorProperties = function (target, source, exceptions) {
  	  var keys = ownKeys(source);
  	  var defineProperty = definePropertyModule.f;
  	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  	  for (var i = 0; i < keys.length; i++) {
  	    var key = keys[i];
  	    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
  	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  	    }
  	  }
  	};
  	return copyConstructorProperties;
  }

  var isForced_1;
  var hasRequiredIsForced;

  function requireIsForced () {
  	if (hasRequiredIsForced) return isForced_1;
  	hasRequiredIsForced = 1;
  	var fails = requireFails();
  	var isCallable = requireIsCallable();

  	var replacement = /#|\.prototype\./;

  	var isForced = function (feature, detection) {
  	  var value = data[normalize(feature)];
  	  return value === POLYFILL ? true
  	    : value === NATIVE ? false
  	    : isCallable(detection) ? fails(detection)
  	    : !!detection;
  	};

  	var normalize = isForced.normalize = function (string) {
  	  return String(string).replace(replacement, '.').toLowerCase();
  	};

  	var data = isForced.data = {};
  	var NATIVE = isForced.NATIVE = 'N';
  	var POLYFILL = isForced.POLYFILL = 'P';

  	isForced_1 = isForced;
  	return isForced_1;
  }

  var _export;
  var hasRequired_export;

  function require_export () {
  	if (hasRequired_export) return _export;
  	hasRequired_export = 1;
  	var globalThis = requireGlobalThis();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();
  	var copyConstructorProperties = requireCopyConstructorProperties();
  	var isForced = requireIsForced();

  	/*
  	  options.target         - name of the target object
  	  options.global         - target is the global object
  	  options.stat           - export as static methods of target
  	  options.proto          - export as prototype methods of target
  	  options.real           - real prototype method for the `pure` version
  	  options.forced         - export even if the native feature is available
  	  options.bind           - bind methods to the target, required for the `pure` version
  	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  	  options.sham           - add a flag to not completely full polyfills
  	  options.enumerable     - export as enumerable property
  	  options.dontCallGetSet - prevent calling a getter on target
  	  options.name           - the .name of the function if it does not match the key
  	*/
  	_export = function (options, source) {
  	  var TARGET = options.target;
  	  var GLOBAL = options.global;
  	  var STATIC = options.stat;
  	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  	  if (GLOBAL) {
  	    target = globalThis;
  	  } else if (STATIC) {
  	    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  	  } else {
  	    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  	  }
  	  if (target) for (key in source) {
  	    sourceProperty = source[key];
  	    if (options.dontCallGetSet) {
  	      descriptor = getOwnPropertyDescriptor(target, key);
  	      targetProperty = descriptor && descriptor.value;
  	    } else targetProperty = target[key];
  	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
  	    // contained in target
  	    if (!FORCED && targetProperty !== undefined) {
  	      if (typeof sourceProperty == typeof targetProperty) continue;
  	      copyConstructorProperties(sourceProperty, targetProperty);
  	    }
  	    // add a flag to not completely full polyfills
  	    if (options.sham || (targetProperty && targetProperty.sham)) {
  	      createNonEnumerableProperty(sourceProperty, 'sham', true);
  	    }
  	    defineBuiltIn(target, key, sourceProperty, options);
  	  }
  	};
  	return _export;
  }

  var functionApply;
  var hasRequiredFunctionApply;

  function requireFunctionApply () {
  	if (hasRequiredFunctionApply) return functionApply;
  	hasRequiredFunctionApply = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var apply = FunctionPrototype.apply;
  	var call = FunctionPrototype.call;

  	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
  	functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  	  return call.apply(apply, arguments);
  	});
  	return functionApply;
  }

  var functionUncurryThisAccessor;
  var hasRequiredFunctionUncurryThisAccessor;

  function requireFunctionUncurryThisAccessor () {
  	if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  	hasRequiredFunctionUncurryThisAccessor = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var aCallable = requireACallable();

  	functionUncurryThisAccessor = function (object, key, method) {
  	  try {
  	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  	  } catch (error) { /* empty */ }
  	};
  	return functionUncurryThisAccessor;
  }

  var isPossiblePrototype;
  var hasRequiredIsPossiblePrototype;

  function requireIsPossiblePrototype () {
  	if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  	hasRequiredIsPossiblePrototype = 1;
  	var isObject = requireIsObject();

  	isPossiblePrototype = function (argument) {
  	  return isObject(argument) || argument === null;
  	};
  	return isPossiblePrototype;
  }

  var aPossiblePrototype;
  var hasRequiredAPossiblePrototype;

  function requireAPossiblePrototype () {
  	if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  	hasRequiredAPossiblePrototype = 1;
  	var isPossiblePrototype = requireIsPossiblePrototype();

  	var $String = String;
  	var $TypeError = TypeError;

  	aPossiblePrototype = function (argument) {
  	  if (isPossiblePrototype(argument)) return argument;
  	  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
  	};
  	return aPossiblePrototype;
  }

  var objectSetPrototypeOf;
  var hasRequiredObjectSetPrototypeOf;

  function requireObjectSetPrototypeOf () {
  	if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  	hasRequiredObjectSetPrototypeOf = 1;
  	/* eslint-disable no-proto -- safe */
  	var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  	var isObject = requireIsObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var aPossiblePrototype = requireAPossiblePrototype();

  	// `Object.setPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.setprototypeof
  	// Works with __proto__ only. Old v8 can't work with null proto objects.
  	// eslint-disable-next-line es/no-object-setprototypeof -- safe
  	objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  	  var CORRECT_SETTER = false;
  	  var test = {};
  	  var setter;
  	  try {
  	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
  	    setter(test, []);
  	    CORRECT_SETTER = test instanceof Array;
  	  } catch (error) { /* empty */ }
  	  return function setPrototypeOf(O, proto) {
  	    requireObjectCoercible(O);
  	    aPossiblePrototype(proto);
  	    if (!isObject(O)) return O;
  	    if (CORRECT_SETTER) setter(O, proto);
  	    else O.__proto__ = proto;
  	    return O;
  	  };
  	}() : undefined);
  	return objectSetPrototypeOf;
  }

  var proxyAccessor;
  var hasRequiredProxyAccessor;

  function requireProxyAccessor () {
  	if (hasRequiredProxyAccessor) return proxyAccessor;
  	hasRequiredProxyAccessor = 1;
  	var defineProperty = requireObjectDefineProperty().f;

  	proxyAccessor = function (Target, Source, key) {
  	  key in Target || defineProperty(Target, key, {
  	    configurable: true,
  	    get: function () { return Source[key]; },
  	    set: function (it) { Source[key] = it; }
  	  });
  	};
  	return proxyAccessor;
  }

  var inheritIfRequired;
  var hasRequiredInheritIfRequired;

  function requireInheritIfRequired () {
  	if (hasRequiredInheritIfRequired) return inheritIfRequired;
  	hasRequiredInheritIfRequired = 1;
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var setPrototypeOf = requireObjectSetPrototypeOf();

  	// makes subclassing work correct for wrapped built-ins
  	inheritIfRequired = function ($this, dummy, Wrapper) {
  	  var NewTarget, NewTargetPrototype;
  	  if (
  	    // it can work only with native `setPrototypeOf`
  	    setPrototypeOf &&
  	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  	    isCallable(NewTarget = dummy.constructor) &&
  	    NewTarget !== Wrapper &&
  	    isObject(NewTargetPrototype = NewTarget.prototype) &&
  	    NewTargetPrototype !== Wrapper.prototype
  	  ) setPrototypeOf($this, NewTargetPrototype);
  	  return $this;
  	};
  	return inheritIfRequired;
  }

  var toStringTagSupport;
  var hasRequiredToStringTagSupport;

  function requireToStringTagSupport () {
  	if (hasRequiredToStringTagSupport) return toStringTagSupport;
  	hasRequiredToStringTagSupport = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var test = {};
  	// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	test[TO_STRING_TAG] = 'z';

  	toStringTagSupport = String(test) === '[object z]';
  	return toStringTagSupport;
  }

  var classof;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof;
  	hasRequiredClassof = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = requireIsCallable();
  	var classofRaw = requireClassofRaw();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var $Object = Object;

  	// ES3 wrong here
  	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

  	// fallback for IE11 Script Access Denied error
  	var tryGet = function (it, key) {
  	  try {
  	    return it[key];
  	  } catch (error) { /* empty */ }
  	};

  	// getting tag from ES6+ `Object.prototype.toString`
  	classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  	  var O, tag, result;
  	  return it === undefined ? 'Undefined' : it === null ? 'Null'
  	    // @@toStringTag case
  	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  	    // builtinTag case
  	    : CORRECT_ARGUMENTS ? classofRaw(O)
  	    // ES3 arguments fallback
  	    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  	};
  	return classof;
  }

  var toString;
  var hasRequiredToString;

  function requireToString () {
  	if (hasRequiredToString) return toString;
  	hasRequiredToString = 1;
  	var classof = requireClassof();

  	var $String = String;

  	toString = function (argument) {
  	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  	  return $String(argument);
  	};
  	return toString;
  }

  var normalizeStringArgument;
  var hasRequiredNormalizeStringArgument;

  function requireNormalizeStringArgument () {
  	if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  	hasRequiredNormalizeStringArgument = 1;
  	var toString = requireToString();

  	normalizeStringArgument = function (argument, $default) {
  	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
  	};
  	return normalizeStringArgument;
  }

  var installErrorCause;
  var hasRequiredInstallErrorCause;

  function requireInstallErrorCause () {
  	if (hasRequiredInstallErrorCause) return installErrorCause;
  	hasRequiredInstallErrorCause = 1;
  	var isObject = requireIsObject();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  	// `InstallErrorCause` abstract operation
  	// https://tc39.es/ecma262/#sec-installerrorcause
  	installErrorCause = function (O, options) {
  	  if (isObject(options) && 'cause' in options) {
  	    createNonEnumerableProperty(O, 'cause', options.cause);
  	  }
  	};
  	return installErrorCause;
  }

  var errorStackClear;
  var hasRequiredErrorStackClear;

  function requireErrorStackClear () {
  	if (hasRequiredErrorStackClear) return errorStackClear;
  	hasRequiredErrorStackClear = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var $Error = Error;
  	var replace = uncurryThis(''.replace);

  	var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
  	// eslint-disable-next-line redos/no-vulnerable -- safe
  	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  	errorStackClear = function (stack, dropEntries) {
  	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
  	    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  	  } return stack;
  	};
  	return errorStackClear;
  }

  var errorStackInstallable;
  var hasRequiredErrorStackInstallable;

  function requireErrorStackInstallable () {
  	if (hasRequiredErrorStackInstallable) return errorStackInstallable;
  	hasRequiredErrorStackInstallable = 1;
  	var fails = requireFails();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	errorStackInstallable = !fails(function () {
  	  var error = new Error('a');
  	  if (!('stack' in error)) return true;
  	  // eslint-disable-next-line es/no-object-defineproperty -- safe
  	  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  	  return error.stack !== 7;
  	});
  	return errorStackInstallable;
  }

  var errorStackInstall;
  var hasRequiredErrorStackInstall;

  function requireErrorStackInstall () {
  	if (hasRequiredErrorStackInstall) return errorStackInstall;
  	hasRequiredErrorStackInstall = 1;
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var clearErrorStack = requireErrorStackClear();
  	var ERROR_STACK_INSTALLABLE = requireErrorStackInstallable();

  	// non-standard V8
  	// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
  	var captureStackTrace = Error.captureStackTrace;

  	errorStackInstall = function (error, C, stack, dropEntries) {
  	  if (ERROR_STACK_INSTALLABLE) {
  	    if (captureStackTrace) captureStackTrace(error, C);
  	    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  	  }
  	};
  	return errorStackInstall;
  }

  var wrapErrorConstructorWithCause;
  var hasRequiredWrapErrorConstructorWithCause;

  function requireWrapErrorConstructorWithCause () {
  	if (hasRequiredWrapErrorConstructorWithCause) return wrapErrorConstructorWithCause;
  	hasRequiredWrapErrorConstructorWithCause = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var hasOwn = requireHasOwnProperty();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var copyConstructorProperties = requireCopyConstructorProperties();
  	var proxyAccessor = requireProxyAccessor();
  	var inheritIfRequired = requireInheritIfRequired();
  	var normalizeStringArgument = requireNormalizeStringArgument();
  	var installErrorCause = requireInstallErrorCause();
  	var installErrorStack = requireErrorStackInstall();
  	var DESCRIPTORS = requireDescriptors();
  	var IS_PURE = requireIsPure();

  	wrapErrorConstructorWithCause = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  	  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  	  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  	  var path = FULL_NAME.split('.');
  	  var ERROR_NAME = path[path.length - 1];
  	  var OriginalError = getBuiltIn.apply(null, path);

  	  if (!OriginalError) return;

  	  var OriginalErrorPrototype = OriginalError.prototype;

  	  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  	  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  	  if (!FORCED) return OriginalError;

  	  var BaseError = getBuiltIn('Error');

  	  var WrappedError = wrapper(function (a, b) {
  	    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
  	    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
  	    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
  	    installErrorStack(result, WrappedError, result.stack, 2);
  	    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
  	    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
  	    return result;
  	  });

  	  WrappedError.prototype = OriginalErrorPrototype;

  	  if (ERROR_NAME !== 'Error') {
  	    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
  	    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  	  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
  	    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
  	    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  	  }

  	  copyConstructorProperties(WrappedError, OriginalError);

  	  if (!IS_PURE) try {
  	    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
  	    if (OriginalErrorPrototype.name !== ERROR_NAME) {
  	      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
  	    }
  	    OriginalErrorPrototype.constructor = WrappedError;
  	  } catch (error) { /* empty */ }

  	  return WrappedError;
  	};
  	return wrapErrorConstructorWithCause;
  }

  var hasRequiredEs_error_cause;

  function requireEs_error_cause () {
  	if (hasRequiredEs_error_cause) return es_error_cause;
  	hasRequiredEs_error_cause = 1;
  	/* eslint-disable no-unused-vars -- required for functions `.length` */
  	var $ = require_export();
  	var globalThis = requireGlobalThis();
  	var apply = requireFunctionApply();
  	var wrapErrorConstructorWithCause = requireWrapErrorConstructorWithCause();

  	var WEB_ASSEMBLY = 'WebAssembly';
  	var WebAssembly = globalThis[WEB_ASSEMBLY];

  	// eslint-disable-next-line es/no-error-cause -- feature detection
  	var FORCED = new Error('e', { cause: 7 }).cause !== 7;

  	var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  	  var O = {};
  	  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  	  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
  	};

  	var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  	  if (WebAssembly && WebAssembly[ERROR_NAME]) {
  	    var O = {};
  	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
  	    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  	  }
  	};

  	// https://tc39.es/ecma262/#sec-nativeerror
  	exportGlobalErrorCauseWrapper('Error', function (init) {
  	  return function Error(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('EvalError', function (init) {
  	  return function EvalError(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('RangeError', function (init) {
  	  return function RangeError(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  	  return function ReferenceError(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  	  return function SyntaxError(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('TypeError', function (init) {
  	  return function TypeError(message) { return apply(init, this, arguments); };
  	});
  	exportGlobalErrorCauseWrapper('URIError', function (init) {
  	  return function URIError(message) { return apply(init, this, arguments); };
  	});
  	exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  	  return function CompileError(message) { return apply(init, this, arguments); };
  	});
  	exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  	  return function LinkError(message) { return apply(init, this, arguments); };
  	});
  	exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  	  return function RuntimeError(message) { return apply(init, this, arguments); };
  	});
  	return es_error_cause;
  }

  requireEs_error_cause();

  var es_array_concat = {};

  var isArray;
  var hasRequiredIsArray;

  function requireIsArray () {
  	if (hasRequiredIsArray) return isArray;
  	hasRequiredIsArray = 1;
  	var classof = requireClassofRaw();

  	// `IsArray` abstract operation
  	// https://tc39.es/ecma262/#sec-isarray
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	isArray = Array.isArray || function isArray(argument) {
  	  return classof(argument) === 'Array';
  	};
  	return isArray;
  }

  var doesNotExceedSafeInteger;
  var hasRequiredDoesNotExceedSafeInteger;

  function requireDoesNotExceedSafeInteger () {
  	if (hasRequiredDoesNotExceedSafeInteger) return doesNotExceedSafeInteger;
  	hasRequiredDoesNotExceedSafeInteger = 1;
  	var $TypeError = TypeError;
  	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  	doesNotExceedSafeInteger = function (it) {
  	  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  	  return it;
  	};
  	return doesNotExceedSafeInteger;
  }

  var createProperty;
  var hasRequiredCreateProperty;

  function requireCreateProperty () {
  	if (hasRequiredCreateProperty) return createProperty;
  	hasRequiredCreateProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = requireObjectDefineProperty();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	createProperty = function (object, key, value) {
  	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  	  else object[key] = value;
  	};
  	return createProperty;
  }

  var arraySetLength;
  var hasRequiredArraySetLength;

  function requireArraySetLength () {
  	if (hasRequiredArraySetLength) return arraySetLength;
  	hasRequiredArraySetLength = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var isArray = requireIsArray();

  	var $TypeError = TypeError;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Safari < 13 does not throw an error in this case
  	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  	  // makes no sense without proper strict mode support
  	  if (this !== undefined) return true;
  	  try {
  	    // eslint-disable-next-line es/no-object-defineproperty -- safe
  	    Object.defineProperty([], 'length', { writable: false }).length = 1;
  	  } catch (error) {
  	    return error instanceof TypeError;
  	  }
  	}();

  	arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  	  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
  	    throw new $TypeError('Cannot set read only .length');
  	  } return O.length = length;
  	} : function (O, length) {
  	  return O.length = length;
  	};
  	return arraySetLength;
  }

  var isConstructor;
  var hasRequiredIsConstructor;

  function requireIsConstructor () {
  	if (hasRequiredIsConstructor) return isConstructor;
  	hasRequiredIsConstructor = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var classof = requireClassof();
  	var getBuiltIn = requireGetBuiltIn();
  	var inspectSource = requireInspectSource();

  	var noop = function () { /* empty */ };
  	var construct = getBuiltIn('Reflect', 'construct');
  	var constructorRegExp = /^\s*(?:class|function)\b/;
  	var exec = uncurryThis(constructorRegExp.exec);
  	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  	var isConstructorModern = function isConstructor(argument) {
  	  if (!isCallable(argument)) return false;
  	  try {
  	    construct(noop, [], argument);
  	    return true;
  	  } catch (error) {
  	    return false;
  	  }
  	};

  	var isConstructorLegacy = function isConstructor(argument) {
  	  if (!isCallable(argument)) return false;
  	  switch (classof(argument)) {
  	    case 'AsyncFunction':
  	    case 'GeneratorFunction':
  	    case 'AsyncGeneratorFunction': return false;
  	  }
  	  try {
  	    // we can't check .prototype since constructors produced by .bind haven't it
  	    // `Function#toString` throws on some built-it function in some legacy engines
  	    // (for example, `DOMQuad` and similar in FF41-)
  	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  	  } catch (error) {
  	    return true;
  	  }
  	};

  	isConstructorLegacy.sham = true;

  	// `IsConstructor` abstract operation
  	// https://tc39.es/ecma262/#sec-isconstructor
  	isConstructor = !construct || fails(function () {
  	  var called;
  	  return isConstructorModern(isConstructorModern.call)
  	    || !isConstructorModern(Object)
  	    || !isConstructorModern(function () { called = true; })
  	    || called;
  	}) ? isConstructorLegacy : isConstructorModern;
  	return isConstructor;
  }

  var arraySpeciesConstructor;
  var hasRequiredArraySpeciesConstructor;

  function requireArraySpeciesConstructor () {
  	if (hasRequiredArraySpeciesConstructor) return arraySpeciesConstructor;
  	hasRequiredArraySpeciesConstructor = 1;
  	var isArray = requireIsArray();
  	var isConstructor = requireIsConstructor();
  	var isObject = requireIsObject();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var SPECIES = wellKnownSymbol('species');
  	var $Array = Array;

  	// a part of `ArraySpeciesCreate` abstract operation
  	// https://tc39.es/ecma262/#sec-arrayspeciescreate
  	arraySpeciesConstructor = function (originalArray) {
  	  var C;
  	  if (isArray(originalArray)) {
  	    C = originalArray.constructor;
  	    // cross-realm fallback
  	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
  	    else if (isObject(C)) {
  	      C = C[SPECIES];
  	      if (C === null) C = undefined;
  	    }
  	  } return C === undefined ? $Array : C;
  	};
  	return arraySpeciesConstructor;
  }

  var arraySpeciesCreate;
  var hasRequiredArraySpeciesCreate;

  function requireArraySpeciesCreate () {
  	if (hasRequiredArraySpeciesCreate) return arraySpeciesCreate;
  	hasRequiredArraySpeciesCreate = 1;
  	var arraySpeciesConstructor = requireArraySpeciesConstructor();

  	// `ArraySpeciesCreate` abstract operation
  	// https://tc39.es/ecma262/#sec-arrayspeciescreate
  	arraySpeciesCreate = function (originalArray, length) {
  	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  	};
  	return arraySpeciesCreate;
  }

  var arrayMethodHasSpeciesSupport;
  var hasRequiredArrayMethodHasSpeciesSupport;

  function requireArrayMethodHasSpeciesSupport () {
  	if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport;
  	hasRequiredArrayMethodHasSpeciesSupport = 1;
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var SPECIES = wellKnownSymbol('species');

  	arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  	  // We can't use this feature detection in V8 since it causes
  	  // deoptimization and serious performance degradation
  	  // https://github.com/zloirock/core-js/issues/677
  	  return V8_VERSION >= 51 || !fails(function () {
  	    var array = [];
  	    var constructor = array.constructor = {};
  	    constructor[SPECIES] = function () {
  	      return { foo: 1 };
  	    };
  	    return array[METHOD_NAME](Boolean).foo !== 1;
  	  });
  	};
  	return arrayMethodHasSpeciesSupport;
  }

  var hasRequiredEs_array_concat;

  function requireEs_array_concat () {
  	if (hasRequiredEs_array_concat) return es_array_concat;
  	hasRequiredEs_array_concat = 1;
  	var $ = require_export();
  	var fails = requireFails();
  	var isArray = requireIsArray();
  	var isObject = requireIsObject();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var createProperty = requireCreateProperty();
  	var setArrayLength = requireArraySetLength();
  	var arraySpeciesCreate = requireArraySpeciesCreate();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  	// We can't use this feature detection in V8 since it causes
  	// deoptimization and serious performance degradation
  	// https://github.com/zloirock/core-js/issues/679
  	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  	  var array = [];
  	  array[IS_CONCAT_SPREADABLE] = false;
  	  return array.concat()[0] !== array;
  	});

  	var isConcatSpreadable = function (O) {
  	  if (!isObject(O)) return false;
  	  var spreadable = O[IS_CONCAT_SPREADABLE];
  	  return spreadable !== undefined ? !!spreadable : isArray(O);
  	};

  	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  	// `Array.prototype.concat` method
  	// https://tc39.es/ecma262/#sec-array.prototype.concat
  	// with adding support of @@isConcatSpreadable and @@species
  	$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  concat: function concat(arg) {
  	    var O = toObject(this);
  	    var A = arraySpeciesCreate(O, 0);
  	    var n = 0;
  	    var i, k, length, len, E;
  	    for (i = -1, length = arguments.length; i < length; i++) {
  	      E = i === -1 ? O : arguments[i];
  	      if (isConcatSpreadable(E)) {
  	        len = lengthOfArrayLike(E);
  	        doesNotExceedSafeInteger(n + len);
  	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
  	      } else {
  	        doesNotExceedSafeInteger(n + 1);
  	        createProperty(A, n++, E);
  	      }
  	    }
  	    setArrayLength(A, n);
  	    return A;
  	  }
  	});
  	return es_array_concat;
  }

  requireEs_array_concat();

  var es_array_from = {};

  var functionUncurryThisClause;
  var hasRequiredFunctionUncurryThisClause;

  function requireFunctionUncurryThisClause () {
  	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  	hasRequiredFunctionUncurryThisClause = 1;
  	var classofRaw = requireClassofRaw();
  	var uncurryThis = requireFunctionUncurryThis();

  	functionUncurryThisClause = function (fn) {
  	  // Nashorn bug:
  	  //   https://github.com/zloirock/core-js/issues/1128
  	  //   https://github.com/zloirock/core-js/issues/1130
  	  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
  	};
  	return functionUncurryThisClause;
  }

  var functionBindContext;
  var hasRequiredFunctionBindContext;

  function requireFunctionBindContext () {
  	if (hasRequiredFunctionBindContext) return functionBindContext;
  	hasRequiredFunctionBindContext = 1;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var aCallable = requireACallable();
  	var NATIVE_BIND = requireFunctionBindNative();

  	var bind = uncurryThis(uncurryThis.bind);

  	// optional / simple context binding
  	functionBindContext = function (fn, that) {
  	  aCallable(fn);
  	  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
  	    return fn.apply(that, arguments);
  	  };
  	};
  	return functionBindContext;
  }

  var iteratorClose;
  var hasRequiredIteratorClose;

  function requireIteratorClose () {
  	if (hasRequiredIteratorClose) return iteratorClose;
  	hasRequiredIteratorClose = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var getMethod = requireGetMethod();

  	iteratorClose = function (iterator, kind, value) {
  	  var innerResult, innerError;
  	  anObject(iterator);
  	  try {
  	    innerResult = getMethod(iterator, 'return');
  	    if (!innerResult) {
  	      if (kind === 'throw') throw value;
  	      return value;
  	    }
  	    innerResult = call(innerResult, iterator);
  	  } catch (error) {
  	    innerError = true;
  	    innerResult = error;
  	  }
  	  if (kind === 'throw') throw value;
  	  if (innerError) throw innerResult;
  	  anObject(innerResult);
  	  return value;
  	};
  	return iteratorClose;
  }

  var callWithSafeIterationClosing;
  var hasRequiredCallWithSafeIterationClosing;

  function requireCallWithSafeIterationClosing () {
  	if (hasRequiredCallWithSafeIterationClosing) return callWithSafeIterationClosing;
  	hasRequiredCallWithSafeIterationClosing = 1;
  	var anObject = requireAnObject();
  	var iteratorClose = requireIteratorClose();

  	// call something on iterator step with safe closing on error
  	callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  	  try {
  	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  	  } catch (error) {
  	    iteratorClose(iterator, 'throw', error);
  	  }
  	};
  	return callWithSafeIterationClosing;
  }

  var iterators;
  var hasRequiredIterators;

  function requireIterators () {
  	if (hasRequiredIterators) return iterators;
  	hasRequiredIterators = 1;
  	iterators = Object.create ? Object.create(null) : {};
  	return iterators;
  }

  var isArrayIteratorMethod;
  var hasRequiredIsArrayIteratorMethod;

  function requireIsArrayIteratorMethod () {
  	if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
  	hasRequiredIsArrayIteratorMethod = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayPrototype = Array.prototype;

  	// check on default Array iterator
  	isArrayIteratorMethod = function (it) {
  	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  	};
  	return isArrayIteratorMethod;
  }

  var getIteratorMethodInternal;
  var hasRequiredGetIteratorMethodInternal;

  function requireGetIteratorMethodInternal () {
  	if (hasRequiredGetIteratorMethodInternal) return getIteratorMethodInternal;
  	hasRequiredGetIteratorMethodInternal = 1;
  	var classof = requireClassofRaw();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var getMethod = requireGetMethod();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayPrototype = Array.prototype;

  	getIteratorMethodInternal = function (it) {
  	  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
  	    || getMethod(it, '@@iterator')
  	    || (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined);
  	};
  	return getIteratorMethodInternal;
  }

  var getIteratorInternal;
  var hasRequiredGetIteratorInternal;

  function requireGetIteratorInternal () {
  	if (hasRequiredGetIteratorInternal) return getIteratorInternal;
  	hasRequiredGetIteratorInternal = 1;
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var getIteratorMethod = requireGetIteratorMethodInternal();

  	var $TypeError = TypeError;

  	getIteratorInternal = function (argument, usingIterator) {
  	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  	  if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  	  throw new $TypeError(tryToString(argument) + ' is not iterable');
  	};
  	return getIteratorInternal;
  }

  var arrayFrom;
  var hasRequiredArrayFrom;

  function requireArrayFrom () {
  	if (hasRequiredArrayFrom) return arrayFrom;
  	hasRequiredArrayFrom = 1;
  	var bind = requireFunctionBindContext();
  	var call = requireFunctionCall();
  	var toObject = requireToObject();
  	var callWithSafeIterationClosing = requireCallWithSafeIterationClosing();
  	var isArrayIteratorMethod = requireIsArrayIteratorMethod();
  	var isConstructor = requireIsConstructor();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var createProperty = requireCreateProperty();
  	var setArrayLength = requireArraySetLength();
  	var getIterator = requireGetIteratorInternal();
  	var getIteratorMethod = requireGetIteratorMethodInternal();
  	var iteratorClose = requireIteratorClose();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();

  	var $Array = Array;

  	// `Array.from` method implementation
  	// https://tc39.es/ecma262/#sec-array.from
  	arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  	  var IS_CONSTRUCTOR = isConstructor(this);
  	  var argumentsLength = arguments.length;
  	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  	  var mapping = mapfn !== undefined;
  	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  	  var O = toObject(arrayLike);
  	  var iteratorMethod = getIteratorMethod(O);
  	  var index = 0;
  	  var length, result, step, iterator, next, value;
  	  // if the target is not iterable or it's an array with the default iterator - use a simple case
  	  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
  	    result = IS_CONSTRUCTOR ? new this() : [];
  	    iterator = getIterator(O, iteratorMethod);
  	    next = iterator.next;
  	    for (;!(step = call(next, iterator)).done; index++) {
  	      try {
  	        doesNotExceedSafeInteger(index);
  	      } catch (error) {
  	        iteratorClose(iterator, 'throw', error);
  	      }
  	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
  	      try {
  	        createProperty(result, index, value);
  	      } catch (error) {
  	        iteratorClose(iterator, 'throw', error);
  	      }
  	    }
  	  } else {
  	    length = lengthOfArrayLike(O);
  	    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
  	    for (;length > index; index++) {
  	      value = mapping ? mapfn(O[index], index) : O[index];
  	      createProperty(result, index, value);
  	    }
  	  }
  	  setArrayLength(result, index);
  	  return result;
  	};
  	return arrayFrom;
  }

  var checkCorrectnessOfIteration;
  var hasRequiredCheckCorrectnessOfIteration;

  function requireCheckCorrectnessOfIteration () {
  	if (hasRequiredCheckCorrectnessOfIteration) return checkCorrectnessOfIteration;
  	hasRequiredCheckCorrectnessOfIteration = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var SAFE_CLOSING = false;

  	try {
  	  var called = 0;
  	  var iteratorWithReturn = {
  	    next: function () {
  	      return { done: !!called++ };
  	    },
  	    'return': function () {
  	      SAFE_CLOSING = true;
  	    }
  	  };
  	  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	  iteratorWithReturn[ITERATOR] = function () {
  	    return this;
  	  };
  	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  	  Array.from(iteratorWithReturn, function () { throw 2; });
  	} catch (error) { /* empty */ }

  	checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  	  try {
  	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  	  var ITERATION_SUPPORT = false;
  	  try {
  	    var object = {};
  	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	    object[ITERATOR] = function () {
  	      return {
  	        next: function () {
  	          return { done: ITERATION_SUPPORT = true };
  	        }
  	      };
  	    };
  	    exec(object);
  	  } catch (error) { /* empty */ }
  	  return ITERATION_SUPPORT;
  	};
  	return checkCorrectnessOfIteration;
  }

  var hasRequiredEs_array_from;

  function requireEs_array_from () {
  	if (hasRequiredEs_array_from) return es_array_from;
  	hasRequiredEs_array_from = 1;
  	var $ = require_export();
  	var from = requireArrayFrom();
  	var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();

  	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  	  // eslint-disable-next-line es/no-array-from -- required for testing
  	  Array.from(iterable);
  	});

  	// `Array.from` method
  	// https://tc39.es/ecma262/#sec-array.from
  	$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  	  from: from
  	});
  	return es_array_from;
  }

  requireEs_array_from();

  var es_array_includes = {};

  var objectDefineProperties = {};

  var objectKeys;
  var hasRequiredObjectKeys;

  function requireObjectKeys () {
  	if (hasRequiredObjectKeys) return objectKeys;
  	hasRequiredObjectKeys = 1;
  	var internalObjectKeys = requireObjectKeysInternal();
  	var enumBugKeys = requireEnumBugKeys();

  	// `Object.keys` method
  	// https://tc39.es/ecma262/#sec-object.keys
  	// eslint-disable-next-line es/no-object-keys -- safe
  	objectKeys = Object.keys || function keys(O) {
  	  return internalObjectKeys(O, enumBugKeys);
  	};
  	return objectKeys;
  }

  var hasRequiredObjectDefineProperties;

  function requireObjectDefineProperties () {
  	if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  	hasRequiredObjectDefineProperties = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var definePropertyModule = requireObjectDefineProperty();
  	var anObject = requireAnObject();
  	var toIndexedObject = requireToIndexedObject();
  	var objectKeys = requireObjectKeys();

  	// `Object.defineProperties` method
  	// https://tc39.es/ecma262/#sec-object.defineproperties
  	// eslint-disable-next-line es/no-object-defineproperties -- safe
  	objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  	  anObject(O);
  	  var props = toIndexedObject(Properties);
  	  var keys = objectKeys(Properties);
  	  var length = keys.length;
  	  var index = 0;
  	  var key;
  	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  	  return O;
  	};
  	return objectDefineProperties;
  }

  var html;
  var hasRequiredHtml;

  function requireHtml () {
  	if (hasRequiredHtml) return html;
  	hasRequiredHtml = 1;
  	var getBuiltIn = requireGetBuiltIn();

  	html = getBuiltIn('document', 'documentElement');
  	return html;
  }

  var objectCreate;
  var hasRequiredObjectCreate;

  function requireObjectCreate () {
  	if (hasRequiredObjectCreate) return objectCreate;
  	hasRequiredObjectCreate = 1;
  	/* global ActiveXObject -- old IE, WSH */
  	var anObject = requireAnObject();
  	var definePropertiesModule = requireObjectDefineProperties();
  	var enumBugKeys = requireEnumBugKeys();
  	var hiddenKeys = requireHiddenKeys();
  	var html = requireHtml();
  	var documentCreateElement = requireDocumentCreateElement();
  	var sharedKey = requireSharedKey();

  	var GT = '>';
  	var LT = '<';
  	var PROTOTYPE = 'prototype';
  	var SCRIPT = 'script';
  	var IE_PROTO = sharedKey('IE_PROTO');

  	var EmptyConstructor = function () { /* empty */ };

  	var scriptTag = function (content) {
  	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  	};

  	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  	var NullProtoObjectViaActiveX = function (activeXDocument) {
  	  activeXDocument.write(scriptTag(''));
  	  activeXDocument.close();
  	  var temp = activeXDocument.parentWindow.Object;
  	  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  	  activeXDocument = null;
  	  return temp;
  	};

  	// Create object with fake `null` prototype: use iframe Object with cleared prototype
  	var NullProtoObjectViaIFrame = function () {
  	  // Thrash, waste and sodomy: IE GC bug
  	  var iframe = documentCreateElement('iframe');
  	  var JS = 'java' + SCRIPT + ':';
  	  var iframeDocument;
  	  iframe.style.display = 'none';
  	  html.appendChild(iframe);
  	  // https://github.com/zloirock/core-js/issues/475
  	  iframe.src = String(JS);
  	  iframeDocument = iframe.contentWindow.document;
  	  iframeDocument.open();
  	  iframeDocument.write(scriptTag('document.F=Object'));
  	  iframeDocument.close();
  	  return iframeDocument.F;
  	};

  	// Check for document.domain and active x support
  	// No need to use active x approach when document.domain is not set
  	// see https://github.com/es-shims/es5-shim/issues/150
  	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  	// avoid IE GC bug
  	var activeXDocument;
  	var NullProtoObject = function () {
  	  try {
  	    activeXDocument = new ActiveXObject('htmlfile');
  	  } catch (error) { /* ignore */ }
  	  NullProtoObject = typeof document != 'undefined'
  	    ? document.domain && activeXDocument
  	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  	      : NullProtoObjectViaIFrame()
  	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  	  var length = enumBugKeys.length;
  	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  	  return NullProtoObject();
  	};

  	hiddenKeys[IE_PROTO] = true;

  	// `Object.create` method
  	// https://tc39.es/ecma262/#sec-object.create
  	// eslint-disable-next-line es/no-object-create -- safe
  	objectCreate = Object.create || function create(O, Properties) {
  	  var result;
  	  if (O !== null) {
  	    EmptyConstructor[PROTOTYPE] = anObject(O);
  	    result = new EmptyConstructor();
  	    EmptyConstructor[PROTOTYPE] = null;
  	    // add "__proto__" for Object.getPrototypeOf polyfill
  	    result[IE_PROTO] = O;
  	  } else result = NullProtoObject();
  	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  	};
  	return objectCreate;
  }

  var addToUnscopables;
  var hasRequiredAddToUnscopables;

  function requireAddToUnscopables () {
  	if (hasRequiredAddToUnscopables) return addToUnscopables;
  	hasRequiredAddToUnscopables = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var create = requireObjectCreate();
  	var defineProperty = requireObjectDefineProperty().f;

  	var UNSCOPABLES = wellKnownSymbol('unscopables');
  	var ArrayPrototype = Array.prototype;

  	// Array.prototype[@@unscopables]
  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	if (ArrayPrototype[UNSCOPABLES] === undefined) {
  	  defineProperty(ArrayPrototype, UNSCOPABLES, {
  	    configurable: true,
  	    value: create(null)
  	  });
  	}

  	// add a key to Array.prototype[@@unscopables]
  	addToUnscopables = function (key) {
  	  ArrayPrototype[UNSCOPABLES][key] = true;
  	};
  	return addToUnscopables;
  }

  var hasRequiredEs_array_includes;

  function requireEs_array_includes () {
  	if (hasRequiredEs_array_includes) return es_array_includes;
  	hasRequiredEs_array_includes = 1;
  	var $ = require_export();
  	var $includes = requireArrayIncludes().includes;
  	var fails = requireFails();
  	var addToUnscopables = requireAddToUnscopables();

  	// FF99+ bug
  	var BROKEN_ON_SPARSE = fails(function () {
  	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  	  return !Array(1).includes();
  	});

  	// Safari 26.4- bug
  	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function () {
  	  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
  	  return [, 1].includes(undefined, 1);
  	});

  	// `Array.prototype.includes` method
  	// https://tc39.es/ecma262/#sec-array.prototype.includes
  	$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
  	  includes: function includes(el /* , fromIndex = 0 */) {
  	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('includes');
  	return es_array_includes;
  }

  requireEs_array_includes();

  var correctPrototypeGetter;
  var hasRequiredCorrectPrototypeGetter;

  function requireCorrectPrototypeGetter () {
  	if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
  	hasRequiredCorrectPrototypeGetter = 1;
  	var fails = requireFails();

  	correctPrototypeGetter = !fails(function () {
  	  function F() { /* empty */ }
  	  F.prototype.constructor = null;
  	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  	  return Object.getPrototypeOf(new F()) !== F.prototype;
  	});
  	return correctPrototypeGetter;
  }

  var objectGetPrototypeOf;
  var hasRequiredObjectGetPrototypeOf;

  function requireObjectGetPrototypeOf () {
  	if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
  	hasRequiredObjectGetPrototypeOf = 1;
  	var hasOwn = requireHasOwnProperty();
  	var isCallable = requireIsCallable();
  	var toObject = requireToObject();
  	var sharedKey = requireSharedKey();
  	var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();

  	var IE_PROTO = sharedKey('IE_PROTO');
  	var $Object = Object;
  	var ObjectPrototype = $Object.prototype;

  	// `Object.getPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.getprototypeof
  	// eslint-disable-next-line es/no-object-getprototypeof -- safe
  	objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  	  var object = toObject(O);
  	  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  	  var constructor = object.constructor;
  	  if (isCallable(constructor) && object instanceof constructor) {
  	    return constructor.prototype;
  	  } return object instanceof $Object ? ObjectPrototype : null;
  	};
  	return objectGetPrototypeOf;
  }

  var iteratorsCore;
  var hasRequiredIteratorsCore;

  function requireIteratorsCore () {
  	if (hasRequiredIteratorsCore) return iteratorsCore;
  	hasRequiredIteratorsCore = 1;
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var create = requireObjectCreate();
  	var getPrototypeOf = requireObjectGetPrototypeOf();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var IS_PURE = requireIsPure();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var BUGGY_SAFARI_ITERATORS = false;

  	// `%IteratorPrototype%` object
  	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  	/* eslint-disable es/no-array-prototype-keys -- safe */
  	if ([].keys) {
  	  arrayIterator = [].keys();
  	  // Safari 8 has buggy iterators w/o `next`
  	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  	  else {
  	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
  	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  	  }
  	}

  	var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  	  var test = {};
  	  // FF44- legacy iterators case
  	  return IteratorPrototype[ITERATOR].call(test) !== test;
  	});

  	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
  	else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

  	// `%IteratorPrototype%[@@iterator]()` method
  	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  	if (!isCallable(IteratorPrototype[ITERATOR])) {
  	  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
  	    return this;
  	  });
  	}

  	iteratorsCore = {
  	  IteratorPrototype: IteratorPrototype,
  	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  	};
  	return iteratorsCore;
  }

  var setToStringTag;
  var hasRequiredSetToStringTag;

  function requireSetToStringTag () {
  	if (hasRequiredSetToStringTag) return setToStringTag;
  	hasRequiredSetToStringTag = 1;
  	var defineProperty = requireObjectDefineProperty().f;
  	var hasOwn = requireHasOwnProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  	setToStringTag = function (target, TAG, STATIC) {
  	  if (target && !STATIC) target = target.prototype;
  	  if (target && !hasOwn(target, TO_STRING_TAG)) {
  	    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  	  }
  	};
  	return setToStringTag;
  }

  var iteratorCreateConstructor;
  var hasRequiredIteratorCreateConstructor;

  function requireIteratorCreateConstructor () {
  	if (hasRequiredIteratorCreateConstructor) return iteratorCreateConstructor;
  	hasRequiredIteratorCreateConstructor = 1;
  	var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  	var create = requireObjectCreate();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var setToStringTag = requireSetToStringTag();
  	var Iterators = requireIterators();

  	var returnThis = function () { return this; };

  	iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  	  var TO_STRING_TAG = NAME + ' Iterator';
  	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  	  Iterators[TO_STRING_TAG] = returnThis;
  	  return IteratorConstructor;
  	};
  	return iteratorCreateConstructor;
  }

  var iteratorDefine;
  var hasRequiredIteratorDefine;

  function requireIteratorDefine () {
  	if (hasRequiredIteratorDefine) return iteratorDefine;
  	hasRequiredIteratorDefine = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var IS_PURE = requireIsPure();
  	var FunctionName = requireFunctionName();
  	var isCallable = requireIsCallable();
  	var createIteratorConstructor = requireIteratorCreateConstructor();
  	var getPrototypeOf = requireObjectGetPrototypeOf();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var setToStringTag = requireSetToStringTag();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();
  	var IteratorsCore = requireIteratorsCore();

  	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  	var IteratorPrototype = IteratorsCore.IteratorPrototype;
  	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  	var ITERATOR = wellKnownSymbol('iterator');
  	var KEYS = 'keys';
  	var VALUES = 'values';
  	var ENTRIES = 'entries';

  	var returnThis = function () { return this; };

  	iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  	  createIteratorConstructor(IteratorConstructor, NAME, next);

  	  var getIterationMethod = function (KIND) {
  	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
  	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

  	    switch (KIND) {
  	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
  	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
  	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
  	    }

  	    return function () { return new IteratorConstructor(this); };
  	  };

  	  var TO_STRING_TAG = NAME + ' Iterator';
  	  var INCORRECT_VALUES_NAME = false;
  	  var IterablePrototype = Iterable.prototype;
  	  var nativeIterator = IterablePrototype[ITERATOR]
  	    || IterablePrototype['@@iterator']
  	    || DEFAULT && IterablePrototype[DEFAULT];
  	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  	  var CurrentIteratorPrototype, methods, KEY;

  	  // fix native
  	  if (anyNativeIterator) {
  	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
  	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
  	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
  	        if (setPrototypeOf) {
  	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
  	        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
  	          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
  	        }
  	      }
  	      // Set @@toStringTag to native iterators
  	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
  	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
  	    }
  	  }

  	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
  	    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
  	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
  	    } else {
  	      INCORRECT_VALUES_NAME = true;
  	      defaultIterator = function values() { return call(nativeIterator, this); };
  	    }
  	  }

  	  // export additional methods
  	  if (DEFAULT) {
  	    methods = {
  	      values: getIterationMethod(VALUES),
  	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
  	      entries: getIterationMethod(ENTRIES)
  	    };
  	    if (FORCED) for (KEY in methods) {
  	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
  	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
  	      }
  	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  	  }

  	  // define iterator
  	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
  	    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  	  }
  	  Iterators[NAME] = defaultIterator;

  	  return methods;
  	};
  	return iteratorDefine;
  }

  var createIterResultObject;
  var hasRequiredCreateIterResultObject;

  function requireCreateIterResultObject () {
  	if (hasRequiredCreateIterResultObject) return createIterResultObject;
  	hasRequiredCreateIterResultObject = 1;
  	// `CreateIterResultObject` abstract operation
  	// https://tc39.es/ecma262/#sec-createiterresultobject
  	createIterResultObject = function (value, done) {
  	  return { value: value, done: done };
  	};
  	return createIterResultObject;
  }

  var es_array_iterator;
  var hasRequiredEs_array_iterator;

  function requireEs_array_iterator () {
  	if (hasRequiredEs_array_iterator) return es_array_iterator;
  	hasRequiredEs_array_iterator = 1;
  	var toIndexedObject = requireToIndexedObject();
  	var addToUnscopables = requireAddToUnscopables();
  	var Iterators = requireIterators();
  	var InternalStateModule = requireInternalState();
  	var defineProperty = requireObjectDefineProperty().f;
  	var defineIterator = requireIteratorDefine();
  	var createIterResultObject = requireCreateIterResultObject();
  	var IS_PURE = requireIsPure();
  	var DESCRIPTORS = requireDescriptors();

  	var ARRAY_ITERATOR = 'Array Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

  	// `Array.prototype.entries` method
  	// https://tc39.es/ecma262/#sec-array.prototype.entries
  	// `Array.prototype.keys` method
  	// https://tc39.es/ecma262/#sec-array.prototype.keys
  	// `Array.prototype.values` method
  	// https://tc39.es/ecma262/#sec-array.prototype.values
  	// `Array.prototype[@@iterator]` method
  	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  	// `CreateArrayIterator` internal method
  	// https://tc39.es/ecma262/#sec-createarrayiterator
  	es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  	  setInternalState(this, {
  	    type: ARRAY_ITERATOR,
  	    target: toIndexedObject(iterated), // target
  	    index: 0,                          // next index
  	    kind: kind                         // kind
  	  });
  	// `%ArrayIteratorPrototype%.next` method
  	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  	}, function () {
  	  var state = getInternalState(this);
  	  var target = state.target;
  	  var index = state.index++;
  	  if (!target || index >= target.length) {
  	    state.target = null;
  	    return createIterResultObject(undefined, true);
  	  }
  	  switch (state.kind) {
  	    case 'keys': return createIterResultObject(index, false);
  	    case 'values': return createIterResultObject(target[index], false);
  	  } return createIterResultObject([index, target[index]], false);
  	}, 'values');

  	// argumentsList[@@iterator] is %ArrayProto_values%
  	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
  	var values = Iterators.Arguments = Iterators.Array;

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('keys');
  	addToUnscopables('values');
  	addToUnscopables('entries');

  	// V8 ~ Chrome 45- bug
  	if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  	  defineProperty(values, 'name', { value: 'values' });
  	} catch (error) { /* empty */ }
  	return es_array_iterator;
  }

  requireEs_array_iterator();

  var es_iterator_constructor = {};

  var anInstance;
  var hasRequiredAnInstance;

  function requireAnInstance () {
  	if (hasRequiredAnInstance) return anInstance;
  	hasRequiredAnInstance = 1;
  	var isPrototypeOf = requireObjectIsPrototypeOf();

  	var $TypeError = TypeError;

  	anInstance = function (it, Prototype) {
  	  if (isPrototypeOf(Prototype, it)) return it;
  	  throw new $TypeError('Incorrect invocation');
  	};
  	return anInstance;
  }

  var defineBuiltInAccessor;
  var hasRequiredDefineBuiltInAccessor;

  function requireDefineBuiltInAccessor () {
  	if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  	hasRequiredDefineBuiltInAccessor = 1;
  	var makeBuiltIn = requireMakeBuiltIn();
  	var defineProperty = requireObjectDefineProperty();

  	defineBuiltInAccessor = function (target, name, descriptor) {
  	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  	  return defineProperty.f(target, name, descriptor);
  	};
  	return defineBuiltInAccessor;
  }

  var hasRequiredEs_iterator_constructor;

  function requireEs_iterator_constructor () {
  	if (hasRequiredEs_iterator_constructor) return es_iterator_constructor;
  	hasRequiredEs_iterator_constructor = 1;
  	var $ = require_export();
  	var globalThis = requireGlobalThis();
  	var anInstance = requireAnInstance();
  	var anObject = requireAnObject();
  	var isCallable = requireIsCallable();
  	var getPrototypeOf = requireObjectGetPrototypeOf();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var createProperty = requireCreateProperty();
  	var fails = requireFails();
  	var hasOwn = requireHasOwnProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  	var DESCRIPTORS = requireDescriptors();
  	var IS_PURE = requireIsPure();

  	var CONSTRUCTOR = 'constructor';
  	var ITERATOR = 'Iterator';
  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  	var $TypeError = TypeError;
  	var NativeIterator = globalThis[ITERATOR];

  	// FF56- have non-standard global helper `Iterator`
  	var FORCED = IS_PURE
  	  || !isCallable(NativeIterator)
  	  || NativeIterator.prototype !== IteratorPrototype
  	  // FF44- non-standard `Iterator` passes previous tests
  	  || !fails(function () { NativeIterator({}); });

  	var IteratorConstructor = function Iterator() {
  	  anInstance(this, IteratorPrototype);
  	  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
  	};

  	var defineIteratorPrototypeAccessor = function (key, value) {
  	  if (DESCRIPTORS) {
  	    defineBuiltInAccessor(IteratorPrototype, key, {
  	      configurable: true,
  	      get: function () {
  	        return value;
  	      },
  	      set: function (replacement) {
  	        anObject(this);
  	        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
  	        if (hasOwn(this, key)) this[key] = replacement;
  	        else createProperty(this, key, replacement);
  	      }
  	    });
  	  } else IteratorPrototype[key] = value;
  	};

  	if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

  	if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  	  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
  	}

  	IteratorConstructor.prototype = IteratorPrototype;

  	// `Iterator` constructor
  	// https://tc39.es/ecma262/#sec-iterator
  	$({ global: true, constructor: true, forced: FORCED }, {
  	  Iterator: IteratorConstructor
  	});
  	return es_iterator_constructor;
  }

  requireEs_iterator_constructor();

  var es_iterator_forEach = {};

  var iterate;
  var hasRequiredIterate;

  function requireIterate () {
  	if (hasRequiredIterate) return iterate;
  	hasRequiredIterate = 1;
  	var bind = requireFunctionBindContext();
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var isArrayIteratorMethod = requireIsArrayIteratorMethod();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var getIterator = requireGetIteratorInternal();
  	var getIteratorMethod = requireGetIteratorMethodInternal();
  	var iteratorClose = requireIteratorClose();

  	var $TypeError = TypeError;

  	var Result = function (stopped, result) {
  	  this.stopped = stopped;
  	  this.result = result;
  	};

  	var ResultPrototype = Result.prototype;

  	iterate = function (iterable, unboundFunction, options) {
  	  var that = options && options.that;
  	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  	  var IS_RECORD = !!(options && options.IS_RECORD);
  	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  	  var INTERRUPTED = !!(options && options.INTERRUPTED);
  	  var fn = bind(unboundFunction, that);
  	  var iterator, iterFn, index, length, result, next, step;

  	  var stop = function (condition) {
  	    var $iterator = iterator;
  	    iterator = undefined;
  	    if ($iterator) iteratorClose($iterator, 'normal');
  	    return new Result(true, condition);
  	  };

  	  var callFn = function (value) {
  	    if (AS_ENTRIES) {
  	      anObject(value);
  	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
  	    } return INTERRUPTED ? fn(value, stop) : fn(value);
  	  };

  	  if (IS_RECORD) {
  	    iterator = iterable.iterator;
  	  } else if (IS_ITERATOR) {
  	    iterator = iterable;
  	  } else {
  	    iterFn = getIteratorMethod(iterable);
  	    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
  	    // optimisation for array iterators
  	    if (isArrayIteratorMethod(iterFn)) {
  	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
  	        result = callFn(iterable[index]);
  	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
  	      } return new Result(false);
  	    }
  	    iterator = getIterator(iterable, iterFn);
  	  }

  	  next = IS_RECORD ? iterable.next : iterator.next;
  	  while (!(step = call(next, iterator)).done) {
  	    // `IteratorValue` errors should propagate without closing the iterator
  	    var value = step.value;
  	    try {
  	      result = callFn(value);
  	    } catch (error) {
  	      if (iterator) iteratorClose(iterator, 'throw', error);
  	      else throw error;
  	    }
  	    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  	  } return new Result(false);
  	};
  	return iterate;
  }

  var getIteratorDirect;
  var hasRequiredGetIteratorDirect;

  function requireGetIteratorDirect () {
  	if (hasRequiredGetIteratorDirect) return getIteratorDirect;
  	hasRequiredGetIteratorDirect = 1;
  	// `GetIteratorDirect(obj)` abstract operation
  	// https://tc39.es/ecma262/#sec-getiteratordirect
  	getIteratorDirect = function (obj) {
  	  return {
  	    iterator: obj,
  	    next: obj.next,
  	    done: false
  	  };
  	};
  	return getIteratorDirect;
  }

  var iteratorHelperWithoutClosingOnEarlyError;
  var hasRequiredIteratorHelperWithoutClosingOnEarlyError;

  function requireIteratorHelperWithoutClosingOnEarlyError () {
  	if (hasRequiredIteratorHelperWithoutClosingOnEarlyError) return iteratorHelperWithoutClosingOnEarlyError;
  	hasRequiredIteratorHelperWithoutClosingOnEarlyError = 1;
  	var globalThis = requireGlobalThis();

  	// https://github.com/tc39/ecma262/pull/3467
  	iteratorHelperWithoutClosingOnEarlyError = function (METHOD_NAME, ExpectedError) {
  	  var Iterator = globalThis.Iterator;
  	  var IteratorPrototype = Iterator && Iterator.prototype;
  	  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  	  var CLOSED = false;

  	  if (method) try {
  	    method.call({
  	      next: function () { return { done: true }; },
  	      'return': function () { CLOSED = true; }
  	    }, -1);
  	  } catch (error) {
  	    // https://bugs.webkit.org/show_bug.cgi?id=291195
  	    if (!(error instanceof ExpectedError)) CLOSED = false;
  	  }

  	  if (!CLOSED) return method;
  	};
  	return iteratorHelperWithoutClosingOnEarlyError;
  }

  var hasRequiredEs_iterator_forEach;

  function requireEs_iterator_forEach () {
  	if (hasRequiredEs_iterator_forEach) return es_iterator_forEach;
  	hasRequiredEs_iterator_forEach = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var iterate = requireIterate();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

  	// `Iterator.prototype.forEach` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
  	$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  	  forEach: function forEach(fn) {
  	    anObject(this);
  	    try {
  	      aCallable(fn);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

  	    var record = getIteratorDirect(this);
  	    var counter = 0;
  	    iterate(record, function (value) {
  	      fn(value, counter++);
  	    }, { IS_RECORD: true });
  	  }
  	});
  	return es_iterator_forEach;
  }

  requireEs_iterator_forEach();

  var es_json_parse = {};

  var parseJsonString;
  var hasRequiredParseJsonString;

  function requireParseJsonString () {
  	if (hasRequiredParseJsonString) return parseJsonString;
  	hasRequiredParseJsonString = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var hasOwn = requireHasOwnProperty();

  	var $SyntaxError = SyntaxError;
  	var $parseInt = parseInt;
  	var fromCharCode = String.fromCharCode;
  	var at = uncurryThis(''.charAt);
  	var slice = uncurryThis(''.slice);
  	var exec = uncurryThis(/./.exec);

  	var codePoints = {
  	  '\\"': '"',
  	  '\\\\': '\\',
  	  '\\/': '/',
  	  '\\b': '\b',
  	  '\\f': '\f',
  	  '\\n': '\n',
  	  '\\r': '\r',
  	  '\\t': '\t'
  	};

  	var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
  	// eslint-disable-next-line regexp/no-control-character -- safe
  	var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

  	parseJsonString = function (source, i) {
  	  var unterminated = true;
  	  var value = '';
  	  while (i < source.length) {
  	    var chr = at(source, i);
  	    if (chr === '\\') {
  	      var twoChars = slice(source, i, i + 2);
  	      if (hasOwn(codePoints, twoChars)) {
  	        value += codePoints[twoChars];
  	        i += 2;
  	      } else if (twoChars === '\\u') {
  	        i += 2;
  	        var fourHexDigits = slice(source, i, i + 4);
  	        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
  	        value += fromCharCode($parseInt(fourHexDigits, 16));
  	        i += 4;
  	      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
  	    } else if (chr === '"') {
  	      unterminated = false;
  	      i++;
  	      break;
  	    } else {
  	      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
  	      value += chr;
  	      i++;
  	    }
  	  }
  	  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  	  return { value: value, end: i };
  	};
  	return parseJsonString;
  }

  var hasRequiredEs_json_parse;

  function requireEs_json_parse () {
  	if (hasRequiredEs_json_parse) return es_json_parse;
  	hasRequiredEs_json_parse = 1;
  	var $ = require_export();
  	var DESCRIPTORS = requireDescriptors();
  	var globalThis = requireGlobalThis();
  	var getBuiltIn = requireGetBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var isArray = requireIsArray();
  	var hasOwn = requireHasOwnProperty();
  	var toString = requireToString();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var createProperty = requireCreateProperty();
  	var fails = requireFails();
  	var parseJSONString = requireParseJsonString();
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();

  	var JSON = globalThis.JSON;
  	var Number = globalThis.Number;
  	var SyntaxError = globalThis.SyntaxError;
  	var nativeParse = JSON && JSON.parse;
  	var enumerableOwnProperties = getBuiltIn('Object', 'keys');
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var at = uncurryThis(''.charAt);
  	var slice = uncurryThis(''.slice);
  	var exec = uncurryThis(/./.exec);
  	var push = uncurryThis([].push);

  	var IS_DIGIT = /^\d$/;
  	var IS_NON_ZERO_DIGIT = /^[1-9]$/;
  	var IS_NUMBER_START = /^[\d-]$/;
  	var IS_WHITESPACE = /^[\t\n\r ]$/;

  	var PRIMITIVE = 0;
  	var OBJECT = 1;

  	var $parse = function (source, reviver) {
  	  source = toString(source);
  	  var context = new Context(source, 0);
  	  var root = context.parse();
  	  var value = root.value;
  	  var endIndex = context.skip(IS_WHITESPACE, root.end);
  	  if (endIndex < source.length) {
  	    throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
  	  }
  	  return isCallable(reviver) ? internalize({ '': value }, '', reviver, root) : value;
  	};

  	var internalize = function (holder, name, reviver, node) {
  	  var val = holder[name];
  	  var unmodified = node && val === node.value;
  	  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  	  var elementRecordsLen, keys, len, i, P;
  	  if (isObject(val)) {
  	    var nodeIsArray = isArray(val);
  	    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
  	    if (nodeIsArray) {
  	      elementRecordsLen = nodes.length;
  	      len = lengthOfArrayLike(val);
  	      for (i = 0; i < len; i++) {
  	        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
  	      }
  	    } else {
  	      keys = enumerableOwnProperties(val);
  	      len = lengthOfArrayLike(keys);
  	      for (i = 0; i < len; i++) {
  	        P = keys[i];
  	        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : undefined));
  	      }
  	    }
  	  }
  	  return call(reviver, holder, name, val, context);
  	};

  	var internalizeProperty = function (object, key, value) {
  	  if (DESCRIPTORS) {
  	    var descriptor = getOwnPropertyDescriptor(object, key);
  	    if (descriptor && !descriptor.configurable) return;
  	  }
  	  if (value === undefined) delete object[key];
  	  else createProperty(object, key, value);
  	};

  	var Node = function (value, end, source, nodes) {
  	  this.value = value;
  	  this.end = end;
  	  this.source = source;
  	  this.nodes = nodes;
  	};

  	var Context = function (source, index) {
  	  this.source = source;
  	  this.index = index;
  	};

  	// https://www.json.org/json-en.html
  	Context.prototype = {
  	  fork: function (nextIndex) {
  	    return new Context(this.source, nextIndex);
  	  },
  	  parse: function () {
  	    var source = this.source;
  	    var i = this.skip(IS_WHITESPACE, this.index);
  	    var fork = this.fork(i);
  	    var chr = at(source, i);
  	    if (exec(IS_NUMBER_START, chr)) return fork.number();
  	    switch (chr) {
  	      case '{':
  	        return fork.object();
  	      case '[':
  	        return fork.array();
  	      case '"':
  	        return fork.string();
  	      case 't':
  	        return fork.keyword(true);
  	      case 'f':
  	        return fork.keyword(false);
  	      case 'n':
  	        return fork.keyword(null);
  	    } throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  	  },
  	  node: function (type, value, start, end, nodes) {
  	    return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
  	  },
  	  object: function () {
  	    var source = this.source;
  	    var i = this.index + 1;
  	    var expectKeypair = false;
  	    var object = {};
  	    var nodes = {};
  	    var closed = false;
  	    while (i < source.length) {
  	      i = this.until(['"', '}'], i);
  	      if (at(source, i) === '}' && !expectKeypair) {
  	        i++;
  	        closed = true;
  	        break;
  	      }
  	      // Parsing the key
  	      var result = this.fork(i).string();
  	      var key = result.value;
  	      i = result.end;
  	      i = this.until([':'], i) + 1;
  	      // Parsing value
  	      i = this.skip(IS_WHITESPACE, i);
  	      result = this.fork(i).parse();
  	      createProperty(nodes, key, result);
  	      createProperty(object, key, result.value);
  	      i = this.until([',', '}'], result.end);
  	      var chr = at(source, i);
  	      if (chr === ',') {
  	        expectKeypair = true;
  	        i++;
  	      } else if (chr === '}') {
  	        i++;
  	        closed = true;
  	        break;
  	      }
  	    }
  	    if (!closed) throw new SyntaxError('Unterminated object at: ' + i);
  	    return this.node(OBJECT, object, this.index, i, nodes);
  	  },
  	  array: function () {
  	    var source = this.source;
  	    var i = this.index + 1;
  	    var expectElement = false;
  	    var array = [];
  	    var nodes = [];
  	    var closed = false;
  	    while (i < source.length) {
  	      i = this.skip(IS_WHITESPACE, i);
  	      if (at(source, i) === ']' && !expectElement) {
  	        i++;
  	        closed = true;
  	        break;
  	      }
  	      var result = this.fork(i).parse();
  	      push(nodes, result);
  	      push(array, result.value);
  	      i = this.until([',', ']'], result.end);
  	      if (at(source, i) === ',') {
  	        expectElement = true;
  	        i++;
  	      } else if (at(source, i) === ']') {
  	        i++;
  	        closed = true;
  	        break;
  	      }
  	    }
  	    if (!closed) throw new SyntaxError('Unterminated array at: ' + i);
  	    return this.node(OBJECT, array, this.index, i, nodes);
  	  },
  	  string: function () {
  	    var index = this.index;
  	    var parsed = parseJSONString(this.source, this.index + 1);
  	    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  	  },
  	  number: function () {
  	    var source = this.source;
  	    var startIndex = this.index;
  	    var i = startIndex;
  	    if (at(source, i) === '-') i++;
  	    if (at(source, i) === '0') i++;
  	    else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
  	    else throw new SyntaxError('Failed to parse number at: ' + i);
  	    if (at(source, i) === '.') {
  	      var fractionStartIndex = i + 1;
  	      i = this.skip(IS_DIGIT, fractionStartIndex);
  	      if (fractionStartIndex === i) throw new SyntaxError("Failed to parse number's fraction at: " + i);
  	    }
  	    if (at(source, i) === 'e' || at(source, i) === 'E') {
  	      i++;
  	      if (at(source, i) === '+' || at(source, i) === '-') i++;
  	      var exponentStartIndex = i;
  	      i = this.skip(IS_DIGIT, i);
  	      if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
  	    }
  	    return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
  	  },
  	  keyword: function (value) {
  	    var keyword = '' + value;
  	    var index = this.index;
  	    var endIndex = index + keyword.length;
  	    if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError('Failed to parse value at: ' + index);
  	    return this.node(PRIMITIVE, value, index, endIndex);
  	  },
  	  skip: function (regex, i) {
  	    var source = this.source;
  	    for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
  	    return i;
  	  },
  	  until: function (array, i) {
  	    i = this.skip(IS_WHITESPACE, i);
  	    var chr = at(this.source, i);
  	    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
  	    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  	  }
  	};

  	var NO_SOURCE_SUPPORT = fails(function () {
  	  var unsafeInt = '9007199254740993';
  	  var source;
  	  nativeParse(unsafeInt, function (key, value, context) {
  	    source = context.source;
  	  });
  	  return source !== unsafeInt;
  	});

  	var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function () {
  	  // Safari 9 bug
  	  return 1 / nativeParse('-0 \t') !== -Infinity;
  	});

  	// `JSON.parse` method
  	// https://tc39.es/ecma262/#sec-json.parse
  	// https://github.com/tc39/proposal-json-parse-with-source
  	$({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  	  parse: function parse(text, reviver) {
  	    return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
  	  }
  	});
  	return es_json_parse;
  }

  requireEs_json_parse();

  var es_object_assign = {};

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var uncurryThis = requireFunctionUncurryThis();
  	var call = requireFunctionCall();
  	var fails = requireFails();
  	var objectKeys = requireObjectKeys();
  	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  	var toObject = requireToObject();
  	var IndexedObject = requireIndexedObject();

  	// eslint-disable-next-line es/no-object-assign -- safe
  	var $assign = Object.assign;
  	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	var defineProperty = Object.defineProperty;
  	var concat = uncurryThis([].concat);

  	// `Object.assign` method
  	// https://tc39.es/ecma262/#sec-object.assign
  	objectAssign = !$assign || fails(function () {
  	  // should have correct order of operations (Edge bug)
  	  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
  	    enumerable: true,
  	    get: function () {
  	      defineProperty(this, 'b', {
  	        value: 3,
  	        enumerable: false
  	      });
  	    }
  	  }), { b: 2 })).b !== 1) return true;
  	  // should work with symbols and should have deterministic property order (V8 bug)
  	  var A = {};
  	  var B = {};
  	  // eslint-disable-next-line es/no-symbol -- safe
  	  var symbol = Symbol('assign detection');
  	  var alphabet = 'abcdefghijklmnopqrst';
  	  A[symbol] = 7;
  	  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  	  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
  	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  	  var T = toObject(target);
  	  var argumentsLength = arguments.length;
  	  var index = 1;
  	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  	  while (argumentsLength > index) {
  	    var S = IndexedObject(arguments[index++]);
  	    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
  	    var length = keys.length;
  	    var j = 0;
  	    var key;
  	    while (length > j) {
  	      key = keys[j++];
  	      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
  	    }
  	  } return T;
  	} : $assign;
  	return objectAssign;
  }

  var hasRequiredEs_object_assign;

  function requireEs_object_assign () {
  	if (hasRequiredEs_object_assign) return es_object_assign;
  	hasRequiredEs_object_assign = 1;
  	var $ = require_export();
  	var assign = requireObjectAssign();

  	// `Object.assign` method
  	// https://tc39.es/ecma262/#sec-object.assign
  	// eslint-disable-next-line es/no-object-assign -- required for testing
  	$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  	  assign: assign
  	});
  	return es_object_assign;
  }

  requireEs_object_assign();

  var es_object_keys = {};

  var hasRequiredEs_object_keys;

  function requireEs_object_keys () {
  	if (hasRequiredEs_object_keys) return es_object_keys;
  	hasRequiredEs_object_keys = 1;
  	var $ = require_export();
  	var toObject = requireToObject();
  	var nativeKeys = requireObjectKeys();
  	var fails = requireFails();

  	var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

  	// `Object.keys` method
  	// https://tc39.es/ecma262/#sec-object.keys
  	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  	  keys: function keys(it) {
  	    return nativeKeys(toObject(it));
  	  }
  	});
  	return es_object_keys;
  }

  requireEs_object_keys();

  var es_object_toString = {};

  var objectToString;
  var hasRequiredObjectToString;

  function requireObjectToString () {
  	if (hasRequiredObjectToString) return objectToString;
  	hasRequiredObjectToString = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var classof = requireClassof();

  	// `Object.prototype.toString` method implementation
  	// https://tc39.es/ecma262/#sec-object.prototype.tostring
  	objectToString = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  	  return '[object ' + classof(this) + ']';
  	};
  	return objectToString;
  }

  var hasRequiredEs_object_toString;

  function requireEs_object_toString () {
  	if (hasRequiredEs_object_toString) return es_object_toString;
  	hasRequiredEs_object_toString = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var toString = requireObjectToString();

  	// `Object.prototype.toString` method
  	// https://tc39.es/ecma262/#sec-object.prototype.tostring
  	if (!TO_STRING_TAG_SUPPORT) {
  	  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
  	}
  	return es_object_toString;
  }

  requireEs_object_toString();

  var es_regexp_exec = {};

  var regexpFlags;
  var hasRequiredRegexpFlags;

  function requireRegexpFlags () {
  	if (hasRequiredRegexpFlags) return regexpFlags;
  	hasRequiredRegexpFlags = 1;
  	var anObject = requireAnObject();

  	// `RegExp.prototype.flags` getter implementation
  	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  	regexpFlags = function () {
  	  var that = anObject(this);
  	  var result = '';
  	  if (that.hasIndices) result += 'd';
  	  if (that.global) result += 'g';
  	  if (that.ignoreCase) result += 'i';
  	  if (that.multiline) result += 'm';
  	  if (that.dotAll) result += 's';
  	  if (that.unicode) result += 'u';
  	  if (that.unicodeSets) result += 'v';
  	  if (that.sticky) result += 'y';
  	  return result;
  	};
  	return regexpFlags;
  }

  var regexpStickyHelpers;
  var hasRequiredRegexpStickyHelpers;

  function requireRegexpStickyHelpers () {
  	if (hasRequiredRegexpStickyHelpers) return regexpStickyHelpers;
  	hasRequiredRegexpStickyHelpers = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	var UNSUPPORTED_Y = fails(function () {
  	  var re = $RegExp('a', 'y');
  	  re.lastIndex = 2;
  	  return re.exec('abcd') !== null;
  	});

  	// UC Browser bug
  	// https://github.com/zloirock/core-js/issues/1008
  	var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  	  return !$RegExp('a', 'y').sticky;
  	});

  	var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  	  var re = $RegExp('^r', 'gy');
  	  re.lastIndex = 2;
  	  return re.exec('str') !== null;
  	});

  	regexpStickyHelpers = {
  	  BROKEN_CARET: BROKEN_CARET,
  	  MISSED_STICKY: MISSED_STICKY,
  	  UNSUPPORTED_Y: UNSUPPORTED_Y
  	};
  	return regexpStickyHelpers;
  }

  var regexpUnsupportedDotAll;
  var hasRequiredRegexpUnsupportedDotAll;

  function requireRegexpUnsupportedDotAll () {
  	if (hasRequiredRegexpUnsupportedDotAll) return regexpUnsupportedDotAll;
  	hasRequiredRegexpUnsupportedDotAll = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	regexpUnsupportedDotAll = fails(function () {
  	  var re = $RegExp('.', 's');
  	  return !(re.dotAll && re.test('\n') && re.flags === 's');
  	});
  	return regexpUnsupportedDotAll;
  }

  var regexpUnsupportedNcg;
  var hasRequiredRegexpUnsupportedNcg;

  function requireRegexpUnsupportedNcg () {
  	if (hasRequiredRegexpUnsupportedNcg) return regexpUnsupportedNcg;
  	hasRequiredRegexpUnsupportedNcg = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	regexpUnsupportedNcg = fails(function () {
  	  var re = $RegExp('(?<a>b)', 'g');
  	  return re.exec('b').groups.a !== 'b' ||
  	    'b'.replace(re, '$<a>c') !== 'bc';
  	});
  	return regexpUnsupportedNcg;
  }

  var regexpExec;
  var hasRequiredRegexpExec;

  function requireRegexpExec () {
  	if (hasRequiredRegexpExec) return regexpExec;
  	hasRequiredRegexpExec = 1;
  	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  	/* eslint-disable regexp/no-useless-quantifier -- testing */
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toString = requireToString();
  	var regexpFlags = requireRegexpFlags();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var shared = requireShared();
  	var create = requireObjectCreate();
  	var getInternalState = requireInternalState().get;
  	var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  	var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();

  	var nativeReplace = shared('native-string-replace', String.prototype.replace);
  	var nativeExec = RegExp.prototype.exec;
  	var patchedExec = nativeExec;
  	var charAt = uncurryThis(''.charAt);
  	var indexOf = uncurryThis(''.indexOf);
  	var replace = uncurryThis(''.replace);
  	var stringSlice = uncurryThis(''.slice);

  	var UPDATES_LAST_INDEX_WRONG = (function () {
  	  var re1 = /a/;
  	  var re2 = /b*/g;
  	  call(nativeExec, re1, 'a');
  	  call(nativeExec, re2, 'a');
  	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  	})();

  	var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  	// nonparticipating capturing group, copied from es5-shim's String#split patch.
  	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  	var setGroups = function (re, groups) {
  	  var object = re.groups = create(null);
  	  for (var i = 0; i < groups.length; i++) {
  	    var group = groups[i];
  	    object[group[0]] = re[group[1]];
  	  }
  	};

  	if (PATCH) {
  	  patchedExec = function exec(string) {
  	    var re = this;
  	    var state = getInternalState(re);
  	    var str = toString(string);
  	    var raw = state.raw;
  	    var result, reCopy, lastIndex;

  	    if (raw) {
  	      raw.lastIndex = re.lastIndex;
  	      result = call(patchedExec, raw, str);
  	      re.lastIndex = raw.lastIndex;

  	      if (result && state.groups) setGroups(result, state.groups);

  	      return result;
  	    }

  	    var groups = state.groups;
  	    var sticky = UNSUPPORTED_Y && re.sticky;
  	    var flags = call(regexpFlags, re);
  	    var source = re.source;
  	    var charsAdded = 0;
  	    var strCopy = str;

  	    if (sticky) {
  	      flags = replace(flags, 'y', '');
  	      if (indexOf(flags, 'g') === -1) {
  	        flags += 'g';
  	      }

  	      strCopy = stringSlice(str, re.lastIndex);
  	      // Support anchored sticky behavior.
  	      var prevChar = re.lastIndex > 0 && charAt(str, re.lastIndex - 1);
  	      if (re.lastIndex > 0 &&
  	        (!re.multiline || re.multiline && prevChar !== '\n' && prevChar !== '\r' && prevChar !== '\u2028' && prevChar !== '\u2029')) {
  	        source = '(?: (?:' + source + '))';
  	        strCopy = ' ' + strCopy;
  	        charsAdded++;
  	      }
  	      // ^(? + rx + ) is needed, in combination with some str slicing, to
  	      // simulate the 'y' flag.
  	      reCopy = new RegExp('^(?:' + source + ')', flags);
  	    }

  	    if (NPCG_INCLUDED) {
  	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
  	    }
  	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

  	    var match = call(nativeExec, sticky ? reCopy : re, strCopy);

  	    if (sticky) {
  	      if (match) {
  	        match.input = str;
  	        match[0] = stringSlice(match[0], charsAdded);
  	        match.index = re.lastIndex;
  	        re.lastIndex += match[0].length;
  	      } else re.lastIndex = 0;
  	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
  	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
  	    }
  	    if (NPCG_INCLUDED && match && match.length > 1) {
  	      // Fix browsers whose `exec` methods don't consistently return `undefined`
  	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
  	      call(nativeReplace, match[0], reCopy, function () {
  	        for (var i = 1; i < arguments.length - 2; i++) {
  	          if (arguments[i] === undefined) match[i] = undefined;
  	        }
  	      });
  	    }

  	    if (match && groups) setGroups(match, groups);

  	    return match;
  	  };
  	}

  	regexpExec = patchedExec;
  	return regexpExec;
  }

  var hasRequiredEs_regexp_exec;

  function requireEs_regexp_exec () {
  	if (hasRequiredEs_regexp_exec) return es_regexp_exec;
  	hasRequiredEs_regexp_exec = 1;
  	var $ = require_export();
  	var exec = requireRegexpExec();

  	// `RegExp.prototype.exec` method
  	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
  	$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  	  exec: exec
  	});
  	return es_regexp_exec;
  }

  requireEs_regexp_exec();

  var es_regexp_test = {};

  var hasRequiredEs_regexp_test;

  function requireEs_regexp_test () {
  	if (hasRequiredEs_regexp_test) return es_regexp_test;
  	hasRequiredEs_regexp_test = 1;
  	// TODO: Remove from `core-js [at] 4` since it's moved to entry points
  	requireEs_regexp_exec();
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var anObject = requireAnObject();
  	var toString = requireToString();

  	var DELEGATES_TO_EXEC = function () {
  	  var execCalled = false;
  	  var re = /[ac]/;
  	  re.exec = function () {
  	    execCalled = true;
  	    return /./.exec.apply(this, arguments);
  	  };
  	  return re.test('abc') === true && execCalled;
  	}();

  	var nativeTest = /./.test;

  	// `RegExp.prototype.test` method
  	// https://tc39.es/ecma262/#sec-regexp.prototype.test
  	$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  	  test: function (S) {
  	    var R = anObject(this);
  	    var string = toString(S);
  	    var exec = R.exec;
  	    if (!isCallable(exec)) return call(nativeTest, R, string);
  	    var result = call(exec, R, string);
  	    if (result === null) return false;
  	    anObject(result);
  	    return true;
  	  }
  	});
  	return es_regexp_test;
  }

  requireEs_regexp_test();

  var es_string_includes = {};

  var isRegexp;
  var hasRequiredIsRegexp;

  function requireIsRegexp () {
  	if (hasRequiredIsRegexp) return isRegexp;
  	hasRequiredIsRegexp = 1;
  	var isObject = requireIsObject();
  	var classof = requireClassofRaw();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var MATCH = wellKnownSymbol('match');

  	// `IsRegExp` abstract operation
  	// https://tc39.es/ecma262/#sec-isregexp
  	isRegexp = function (it) {
  	  var isRegExp;
  	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
  	};
  	return isRegexp;
  }

  var notARegexp;
  var hasRequiredNotARegexp;

  function requireNotARegexp () {
  	if (hasRequiredNotARegexp) return notARegexp;
  	hasRequiredNotARegexp = 1;
  	var isRegExp = requireIsRegexp();

  	var $TypeError = TypeError;

  	notARegexp = function (it) {
  	  if (isRegExp(it)) {
  	    throw new $TypeError("The method doesn't accept regular expressions");
  	  } return it;
  	};
  	return notARegexp;
  }

  var correctIsRegexpLogic;
  var hasRequiredCorrectIsRegexpLogic;

  function requireCorrectIsRegexpLogic () {
  	if (hasRequiredCorrectIsRegexpLogic) return correctIsRegexpLogic;
  	hasRequiredCorrectIsRegexpLogic = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var MATCH = wellKnownSymbol('match');

  	correctIsRegexpLogic = function (METHOD_NAME) {
  	  var regexp = /./;
  	  try {
  	    '/./'[METHOD_NAME](regexp);
  	  } catch (error1) {
  	    try {
  	      regexp[MATCH] = false;
  	      return '/./'[METHOD_NAME](regexp);
  	    } catch (error2) { /* empty */ }
  	  } return false;
  	};
  	return correctIsRegexpLogic;
  }

  var hasRequiredEs_string_includes;

  function requireEs_string_includes () {
  	if (hasRequiredEs_string_includes) return es_string_includes;
  	hasRequiredEs_string_includes = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var toString = requireToString();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();

  	var stringIndexOf = uncurryThis(''.indexOf);

  	// `String.prototype.includes` method
  	// https://tc39.es/ecma262/#sec-string.prototype.includes
  	$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  	  includes: function includes(searchString /* , position = 0 */) {
  	    return !!~stringIndexOf(
  	      toString(requireObjectCoercible(this)),
  	      toString(notARegExp(searchString)),
  	      arguments.length > 1 ? arguments[1] : undefined
  	    );
  	  }
  	});
  	return es_string_includes;
  }

  requireEs_string_includes();

  var es_string_iterator = {};

  var stringMultibyte;
  var hasRequiredStringMultibyte;

  function requireStringMultibyte () {
  	if (hasRequiredStringMultibyte) return stringMultibyte;
  	hasRequiredStringMultibyte = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	var charAt = uncurryThis(''.charAt);
  	var charCodeAt = uncurryThis(''.charCodeAt);
  	var stringSlice = uncurryThis(''.slice);

  	var createMethod = function (CONVERT_TO_STRING) {
  	  return function ($this, pos) {
  	    var S = toString(requireObjectCoercible($this));
  	    var position = toIntegerOrInfinity(pos);
  	    var size = S.length;
  	    var first, second;
  	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  	    first = charCodeAt(S, position);
  	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
  	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
  	        ? CONVERT_TO_STRING
  	          ? charAt(S, position)
  	          : first
  	        : CONVERT_TO_STRING
  	          ? stringSlice(S, position, position + 2)
  	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  	  };
  	};

  	stringMultibyte = {
  	  // `String.prototype.codePointAt` method
  	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  	  codeAt: createMethod(false),
  	  // `String.prototype.at` method
  	  // https://github.com/mathiasbynens/String.prototype.at
  	  charAt: createMethod(true)
  	};
  	return stringMultibyte;
  }

  var hasRequiredEs_string_iterator;

  function requireEs_string_iterator () {
  	if (hasRequiredEs_string_iterator) return es_string_iterator;
  	hasRequiredEs_string_iterator = 1;
  	var charAt = requireStringMultibyte().charAt;
  	var toString = requireToString();
  	var InternalStateModule = requireInternalState();
  	var defineIterator = requireIteratorDefine();
  	var createIterResultObject = requireCreateIterResultObject();

  	var STRING_ITERATOR = 'String Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  	// `String.prototype[@@iterator]` method
  	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  	defineIterator(String, 'String', function (iterated) {
  	  setInternalState(this, {
  	    type: STRING_ITERATOR,
  	    string: toString(iterated),
  	    index: 0
  	  });
  	// `%StringIteratorPrototype%.next` method
  	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  	}, function next() {
  	  var state = getInternalState(this);
  	  var string = state.string;
  	  var index = state.index;
  	  var point;
  	  if (index >= string.length) return createIterResultObject(undefined, true);
  	  point = charAt(string, index);
  	  state.index += point.length;
  	  return createIterResultObject(point, false);
  	});
  	return es_string_iterator;
  }

  requireEs_string_iterator();

  var es_weakMap = {};

  var es_weakMap_constructor = {};

  var freezing;
  var hasRequiredFreezing;

  function requireFreezing () {
  	if (hasRequiredFreezing) return freezing;
  	hasRequiredFreezing = 1;
  	var fails = requireFails();

  	freezing = !fails(function () {
  	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  	  return Object.isExtensible(Object.preventExtensions({}));
  	});
  	return freezing;
  }

  var defineBuiltIns;
  var hasRequiredDefineBuiltIns;

  function requireDefineBuiltIns () {
  	if (hasRequiredDefineBuiltIns) return defineBuiltIns;
  	hasRequiredDefineBuiltIns = 1;
  	var defineBuiltIn = requireDefineBuiltIn();

  	defineBuiltIns = function (target, src, options) {
  	  for (var key in src) defineBuiltIn(target, key, src[key], options);
  	  return target;
  	};
  	return defineBuiltIns;
  }

  var internalMetadata = {exports: {}};

  var objectGetOwnPropertyNamesExternal = {};

  var arraySlice;
  var hasRequiredArraySlice;

  function requireArraySlice () {
  	if (hasRequiredArraySlice) return arraySlice;
  	hasRequiredArraySlice = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	arraySlice = uncurryThis([].slice);
  	return arraySlice;
  }

  var hasRequiredObjectGetOwnPropertyNamesExternal;

  function requireObjectGetOwnPropertyNamesExternal () {
  	if (hasRequiredObjectGetOwnPropertyNamesExternal) return objectGetOwnPropertyNamesExternal;
  	hasRequiredObjectGetOwnPropertyNamesExternal = 1;
  	/* eslint-disable es/no-object-getownpropertynames -- safe */
  	var classof = requireClassofRaw();
  	var toIndexedObject = requireToIndexedObject();
  	var $getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
  	var arraySlice = requireArraySlice();

  	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  	  ? Object.getOwnPropertyNames(window) : [];

  	var getWindowNames = function (it) {
  	  try {
  	    return $getOwnPropertyNames(it);
  	  } catch (error) {
  	    return arraySlice(windowNames);
  	  }
  	};

  	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  	  return windowNames && classof(it) === 'Window'
  	    ? getWindowNames(it)
  	    : $getOwnPropertyNames(toIndexedObject(it));
  	};
  	return objectGetOwnPropertyNamesExternal;
  }

  var arrayBufferNonExtensible;
  var hasRequiredArrayBufferNonExtensible;

  function requireArrayBufferNonExtensible () {
  	if (hasRequiredArrayBufferNonExtensible) return arrayBufferNonExtensible;
  	hasRequiredArrayBufferNonExtensible = 1;
  	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  	var fails = requireFails();

  	arrayBufferNonExtensible = fails(function () {
  	  if (typeof ArrayBuffer == 'function') {
  	    var buffer = new ArrayBuffer(8);
  	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
  	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  	  }
  	});
  	return arrayBufferNonExtensible;
  }

  var objectIsExtensible;
  var hasRequiredObjectIsExtensible;

  function requireObjectIsExtensible () {
  	if (hasRequiredObjectIsExtensible) return objectIsExtensible;
  	hasRequiredObjectIsExtensible = 1;
  	var fails = requireFails();
  	var isObject = requireIsObject();
  	var classof = requireClassofRaw();
  	var ARRAY_BUFFER_NON_EXTENSIBLE = requireArrayBufferNonExtensible();

  	// eslint-disable-next-line es/no-object-isextensible -- safe
  	var $isExtensible = Object.isExtensible;
  	var FAILS_ON_PRIMITIVES = fails(function () { });

  	// `Object.isExtensible` method
  	// https://tc39.es/ecma262/#sec-object.isextensible
  	objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  	  if (!isObject(it)) return false;
  	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  	  return $isExtensible ? $isExtensible(it) : true;
  	} : $isExtensible;
  	return objectIsExtensible;
  }

  var hasRequiredInternalMetadata;

  function requireInternalMetadata () {
  	if (hasRequiredInternalMetadata) return internalMetadata.exports;
  	hasRequiredInternalMetadata = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var hiddenKeys = requireHiddenKeys();
  	var isObject = requireIsObject();
  	var hasOwn = requireHasOwnProperty();
  	var defineProperty = requireObjectDefineProperty().f;
  	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  	var getOwnPropertyNamesExternalModule = requireObjectGetOwnPropertyNamesExternal();
  	var isExtensible = requireObjectIsExtensible();
  	var uid = requireUid();
  	var FREEZING = requireFreezing();

  	var REQUIRED = false;
  	var METADATA = uid('meta');
  	var id = 0;

  	var setMetadata = function (it) {
  	  defineProperty(it, METADATA, { value: {
  	    objectID: 'O' + id++, // object ID
  	    weakData: {}          // weak collections IDs
  	  } });
  	};

  	var fastKey = function (it, create) {
  	  // return a primitive with prefix
  	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  	  if (!hasOwn(it, METADATA)) {
  	    // can't set metadata to uncaught frozen object
  	    if (!isExtensible(it)) return 'F';
  	    // not necessary to add metadata
  	    if (!create) return 'E';
  	    // add missing metadata
  	    setMetadata(it);
  	  // return object ID
  	  } return it[METADATA].objectID;
  	};

  	var getWeakData = function (it, create) {
  	  if (!hasOwn(it, METADATA)) {
  	    // can't set metadata to uncaught frozen object
  	    if (!isExtensible(it)) return true;
  	    // not necessary to add metadata
  	    if (!create) return false;
  	    // add missing metadata
  	    setMetadata(it);
  	  // return the store of weak collections IDs
  	  } return it[METADATA].weakData;
  	};

  	// add metadata on freeze-family methods calling
  	var onFreeze = function (it) {
  	  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  	  return it;
  	};

  	var enable = function () {
  	  meta.enable = function () { /* empty */ };
  	  REQUIRED = true;
  	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  	  var splice = uncurryThis([].splice);
  	  var test = {};
  	  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	  test[METADATA] = 1;

  	  // prevent exposing of metadata key
  	  if (getOwnPropertyNames(test).length) {
  	    getOwnPropertyNamesModule.f = function (it) {
  	      var result = getOwnPropertyNames(it);
  	      for (var i = 0, length = result.length; i < length; i++) {
  	        if (result[i] === METADATA) {
  	          splice(result, i, 1);
  	          break;
  	        }
  	      } return result;
  	    };

  	    $({ target: 'Object', stat: true, forced: true }, {
  	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
  	    });
  	  }
  	};

  	var meta = internalMetadata.exports = {
  	  enable: enable,
  	  fastKey: fastKey,
  	  getWeakData: getWeakData,
  	  onFreeze: onFreeze
  	};

  	hiddenKeys[METADATA] = true;
  	return internalMetadata.exports;
  }

  var collection;
  var hasRequiredCollection;

  function requireCollection () {
  	if (hasRequiredCollection) return collection;
  	hasRequiredCollection = 1;
  	var $ = require_export();
  	var globalThis = requireGlobalThis();
  	var uncurryThis = requireFunctionUncurryThis();
  	var isForced = requireIsForced();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var InternalMetadataModule = requireInternalMetadata();
  	var iterate = requireIterate();
  	var anInstance = requireAnInstance();
  	var isCallable = requireIsCallable();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var isObject = requireIsObject();
  	var fails = requireFails();
  	var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();
  	var setToStringTag = requireSetToStringTag();
  	var inheritIfRequired = requireInheritIfRequired();

  	collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  	  var ADDER = IS_MAP ? 'set' : 'add';
  	  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  	  var Constructor = NativeConstructor;
  	  var exported = {};

  	  var fixMethod = function (KEY) {
  	    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
  	    defineBuiltIn(NativePrototype, KEY,
  	      KEY === 'add' ? function add(value) {
  	        uncurriedNativeMethod(this, value === 0 ? 0 : value);
  	        return this;
  	      } : KEY === 'delete' ? function (key) {
  	        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
  	      } : KEY === 'get' ? function get(key) {
  	        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
  	      } : KEY === 'has' ? function has(key) {
  	        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
  	      } : function set(key, value) {
  	        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
  	        return this;
  	      }
  	    );
  	  };

  	  var REPLACE = isForced(
  	    CONSTRUCTOR_NAME,
  	    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
  	      new NativeConstructor().entries().next();
  	    }))
  	  );

  	  if (REPLACE) {
  	    // create collection constructor
  	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
  	    InternalMetadataModule.enable();
  	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
  	    var instance = new Constructor();
  	    // early implementations not supports chaining
  	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
  	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
  	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
  	    // most early implementations doesn't supports iterables, most modern - not close it correctly
  	    // eslint-disable-next-line no-new -- required for testing
  	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
  	    // for early implementations -0 and +0 not the same
  	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
  	      // V8 ~ Chromium 42- fails only with 5+ elements
  	      var $instance = new NativeConstructor();
  	      var index = 5;
  	      while (index--) $instance[ADDER](index, index);
  	      return !$instance.has(-0);
  	    });

  	    if (!ACCEPT_ITERABLES) {
  	      Constructor = wrapper(function (dummy, iterable) {
  	        anInstance(dummy, NativePrototype);
  	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
  	        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
  	        return that;
  	      });
  	      Constructor.prototype = NativePrototype;
  	      NativePrototype.constructor = Constructor;
  	    }

  	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
  	      fixMethod('delete');
  	      fixMethod('has');
  	      IS_MAP && fixMethod('get');
  	    }

  	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

  	    // weak collections should not contains .clear method
  	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  	  }

  	  exported[CONSTRUCTOR_NAME] = Constructor;
  	  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  	  return Constructor;
  	};
  	return collection;
  }

  var arrayIteration;
  var hasRequiredArrayIteration;

  function requireArrayIteration () {
  	if (hasRequiredArrayIteration) return arrayIteration;
  	hasRequiredArrayIteration = 1;
  	var bind = requireFunctionBindContext();
  	var IndexedObject = requireIndexedObject();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var arraySpeciesCreate = requireArraySpeciesCreate();
  	var createProperty = requireCreateProperty();

  	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  	var createMethod = function (TYPE) {
  	  var IS_MAP = TYPE === 1;
  	  var IS_FILTER = TYPE === 2;
  	  var IS_SOME = TYPE === 3;
  	  var IS_EVERY = TYPE === 4;
  	  var IS_FIND_INDEX = TYPE === 6;
  	  var IS_FILTER_REJECT = TYPE === 7;
  	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  	  return function ($this, callbackfn, that) {
  	    var O = toObject($this);
  	    var self = IndexedObject(O);
  	    var length = lengthOfArrayLike(self);
  	    var boundFunction = bind(callbackfn, that);
  	    var index = 0;
  	    var resIndex = 0;
  	    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
  	    var value, result;
  	    for (;length > index; index++) if (NO_HOLES || index in self) {
  	      value = self[index];
  	      result = boundFunction(value, index, O);
  	      if (TYPE) {
  	        if (IS_MAP) createProperty(target, index, result);    // map
  	        else if (result) switch (TYPE) {
  	          case 3: return true;                                // some
  	          case 5: return value;                               // find
  	          case 6: return index;                               // findIndex
  	          case 2: createProperty(target, resIndex++, value);  // filter
  	        } else switch (TYPE) {
  	          case 4: return false;                               // every
  	          case 7: createProperty(target, resIndex++, value);  // filterReject
  	        }
  	      }
  	    }
  	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  	  };
  	};

  	arrayIteration = {
  	  // `Array.prototype.forEach` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  	  forEach: createMethod(0),
  	  // `Array.prototype.map` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.map
  	  map: createMethod(1),
  	  // `Array.prototype.filter` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.filter
  	  filter: createMethod(2),
  	  // `Array.prototype.some` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.some
  	  some: createMethod(3),
  	  // `Array.prototype.every` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.every
  	  every: createMethod(4),
  	  // `Array.prototype.find` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.find
  	  find: createMethod(5),
  	  // `Array.prototype.findIndex` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  	  findIndex: createMethod(6),
  	  // `Array.prototype.filterReject` method
  	  // https://github.com/tc39/proposal-array-filtering
  	  filterReject: createMethod(7)
  	};
  	return arrayIteration;
  }

  var collectionWeak;
  var hasRequiredCollectionWeak;

  function requireCollectionWeak () {
  	if (hasRequiredCollectionWeak) return collectionWeak;
  	hasRequiredCollectionWeak = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var defineBuiltIns = requireDefineBuiltIns();
  	var getWeakData = requireInternalMetadata().getWeakData;
  	var anInstance = requireAnInstance();
  	var anObject = requireAnObject();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var isObject = requireIsObject();
  	var iterate = requireIterate();
  	var ArrayIterationModule = requireArrayIteration();
  	var hasOwn = requireHasOwnProperty();
  	var InternalStateModule = requireInternalState();

  	var setInternalState = InternalStateModule.set;
  	var internalStateGetterFor = InternalStateModule.getterFor;
  	var find = ArrayIterationModule.find;
  	var findIndex = ArrayIterationModule.findIndex;
  	var splice = uncurryThis([].splice);
  	var id = 0;

  	// fallback for uncaught frozen keys
  	var uncaughtFrozenStore = function (state) {
  	  return state.frozen || (state.frozen = new UncaughtFrozenStore());
  	};

  	var UncaughtFrozenStore = function () {
  	  this.entries = [];
  	};

  	var findUncaughtFrozen = function (store, key) {
  	  return find(store.entries, function (it) {
  	    return it[0] === key;
  	  });
  	};

  	UncaughtFrozenStore.prototype = {
  	  get: function (key) {
  	    var entry = findUncaughtFrozen(this, key);
  	    if (entry) return entry[1];
  	  },
  	  has: function (key) {
  	    return !!findUncaughtFrozen(this, key);
  	  },
  	  set: function (key, value) {
  	    var entry = findUncaughtFrozen(this, key);
  	    if (entry) entry[1] = value;
  	    else this.entries.push([key, value]);
  	  },
  	  'delete': function (key) {
  	    var index = findIndex(this.entries, function (it) {
  	      return it[0] === key;
  	    });
  	    if (~index) splice(this.entries, index, 1);
  	    return !!~index;
  	  }
  	};

  	collectionWeak = {
  	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
  	    var Constructor = wrapper(function (that, iterable) {
  	      anInstance(that, Prototype);
  	      setInternalState(that, {
  	        type: CONSTRUCTOR_NAME,
  	        id: id++,
  	        frozen: null
  	      });
  	      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
  	    });

  	    var Prototype = Constructor.prototype;

  	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

  	    var define = function (that, key, value) {
  	      var state = getInternalState(that);
  	      var data = getWeakData(anObject(key), true);
  	      if (data === true) uncaughtFrozenStore(state).set(key, value);
  	      else data[state.id] = value;
  	      return that;
  	    };

  	    defineBuiltIns(Prototype, {
  	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
  	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
  	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
  	      'delete': function (key) {
  	        var state = getInternalState(this);
  	        if (!isObject(key)) return false;
  	        var data = getWeakData(key);
  	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
  	        return data && hasOwn(data, state.id) && delete data[state.id];
  	      },
  	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
  	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
  	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
  	      has: function has(key) {
  	        var state = getInternalState(this);
  	        if (!isObject(key)) return false;
  	        var data = getWeakData(key);
  	        if (data === true) return uncaughtFrozenStore(state).has(key);
  	        return data && hasOwn(data, state.id);
  	      }
  	    });

  	    defineBuiltIns(Prototype, IS_MAP ? {
  	      // `WeakMap.prototype.get(key)` method
  	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
  	      get: function get(key) {
  	        var state = getInternalState(this);
  	        if (isObject(key)) {
  	          var data = getWeakData(key);
  	          if (data === true) return uncaughtFrozenStore(state).get(key);
  	          if (data) return data[state.id];
  	        }
  	      },
  	      // `WeakMap.prototype.set(key, value)` method
  	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
  	      set: function set(key, value) {
  	        return define(this, key, value);
  	      }
  	    } : {
  	      // `WeakSet.prototype.add(value)` method
  	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
  	      add: function add(value) {
  	        return define(this, value, true);
  	      }
  	    });

  	    return Constructor;
  	  }
  	};
  	return collectionWeak;
  }

  var hasRequiredEs_weakMap_constructor;

  function requireEs_weakMap_constructor () {
  	if (hasRequiredEs_weakMap_constructor) return es_weakMap_constructor;
  	hasRequiredEs_weakMap_constructor = 1;
  	var FREEZING = requireFreezing();
  	var globalThis = requireGlobalThis();
  	var uncurryThis = requireFunctionUncurryThis();
  	var defineBuiltIns = requireDefineBuiltIns();
  	var InternalMetadataModule = requireInternalMetadata();
  	var collection = requireCollection();
  	var collectionWeak = requireCollectionWeak();
  	var isObject = requireIsObject();
  	var enforceInternalState = requireInternalState().enforce;
  	var fails = requireFails();
  	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();

  	var $Object = Object;
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	var isArray = Array.isArray;
  	// eslint-disable-next-line es/no-object-isextensible -- safe
  	var isExtensible = $Object.isExtensible;
  	// eslint-disable-next-line es/no-object-isfrozen -- safe
  	var isFrozen = $Object.isFrozen;
  	// eslint-disable-next-line es/no-object-issealed -- safe
  	var isSealed = $Object.isSealed;
  	// eslint-disable-next-line es/no-object-freeze -- safe
  	var freeze = $Object.freeze;
  	// eslint-disable-next-line es/no-object-seal -- safe
  	var seal = $Object.seal;

  	var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
  	var InternalWeakMap;

  	var wrapper = function (init) {
  	  return function WeakMap() {
  	    return init(this, arguments.length ? arguments[0] : undefined);
  	  };
  	};

  	// `WeakMap` constructor
  	// https://tc39.es/ecma262/#sec-weakmap-constructor
  	var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
  	var WeakMapPrototype = $WeakMap.prototype;
  	var nativeSet = uncurryThis(WeakMapPrototype.set);

  	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
  	var hasMSEdgeFreezingBug = function () {
  	  return FREEZING && fails(function () {
  	    var frozenArray = freeze([]);
  	    nativeSet(new $WeakMap(), frozenArray, 1);
  	    return !isFrozen(frozenArray);
  	  });
  	};

  	// IE11 WeakMap frozen keys fix
  	// We can't use feature detection because it crash some old IE builds
  	// https://github.com/zloirock/core-js/issues/485
  	if (NATIVE_WEAK_MAP) if (IS_IE11) {
  	  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  	  InternalMetadataModule.enable();
  	  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  	  var nativeHas = uncurryThis(WeakMapPrototype.has);
  	  var nativeGet = uncurryThis(WeakMapPrototype.get);
  	  defineBuiltIns(WeakMapPrototype, {
  	    'delete': function (key) {
  	      if (isObject(key) && !isExtensible(key)) {
  	        var state = enforceInternalState(this);
  	        if (!state.frozen) state.frozen = new InternalWeakMap();
  	        return nativeDelete(this, key) || state.frozen['delete'](key);
  	      } return nativeDelete(this, key);
  	    },
  	    has: function has(key) {
  	      if (isObject(key) && !isExtensible(key)) {
  	        var state = enforceInternalState(this);
  	        if (!state.frozen) state.frozen = new InternalWeakMap();
  	        return nativeHas(this, key) || state.frozen.has(key);
  	      } return nativeHas(this, key);
  	    },
  	    get: function get(key) {
  	      if (isObject(key) && !isExtensible(key)) {
  	        var state = enforceInternalState(this);
  	        if (!state.frozen) state.frozen = new InternalWeakMap();
  	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
  	      } return nativeGet(this, key);
  	    },
  	    set: function set(key, value) {
  	      if (isObject(key) && !isExtensible(key)) {
  	        var state = enforceInternalState(this);
  	        if (!state.frozen) state.frozen = new InternalWeakMap();
  	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
  	      } else nativeSet(this, key, value);
  	      return this;
  	    }
  	  });
  	// Chakra Edge frozen keys fix
  	} else if (hasMSEdgeFreezingBug()) {
  	  defineBuiltIns(WeakMapPrototype, {
  	    set: function set(key, value) {
  	      var arrayIntegrityLevel;
  	      if (isArray(key)) {
  	        if (isFrozen(key)) arrayIntegrityLevel = freeze;
  	        else if (isSealed(key)) arrayIntegrityLevel = seal;
  	      }
  	      nativeSet(this, key, value);
  	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
  	      return this;
  	    }
  	  });
  	}
  	return es_weakMap_constructor;
  }

  var hasRequiredEs_weakMap;

  function requireEs_weakMap () {
  	if (hasRequiredEs_weakMap) return es_weakMap;
  	hasRequiredEs_weakMap = 1;
  	// TODO: Remove this module from `core-js [at] 4` since it's replaced to module below
  	requireEs_weakMap_constructor();
  	return es_weakMap;
  }

  requireEs_weakMap();

  var es_weakMap_getOrInsert = {};

  var weakMapHelpers;
  var hasRequiredWeakMapHelpers;

  function requireWeakMapHelpers () {
  	if (hasRequiredWeakMapHelpers) return weakMapHelpers;
  	hasRequiredWeakMapHelpers = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	// eslint-disable-next-line es/no-weak-map -- safe
  	var WeakMapPrototype = WeakMap.prototype;

  	weakMapHelpers = {
  	  // eslint-disable-next-line es/no-weak-map -- safe
  	  WeakMap: WeakMap,
  	  set: uncurryThis(WeakMapPrototype.set),
  	  get: uncurryThis(WeakMapPrototype.get),
  	  has: uncurryThis(WeakMapPrototype.has),
  	  remove: uncurryThis(WeakMapPrototype['delete'])
  	};
  	return weakMapHelpers;
  }

  var hasRequiredEs_weakMap_getOrInsert;

  function requireEs_weakMap_getOrInsert () {
  	if (hasRequiredEs_weakMap_getOrInsert) return es_weakMap_getOrInsert;
  	hasRequiredEs_weakMap_getOrInsert = 1;
  	var $ = require_export();
  	var WeakMapHelpers = requireWeakMapHelpers();
  	var IS_PURE = requireIsPure();

  	var get = WeakMapHelpers.get;
  	var has = WeakMapHelpers.has;
  	var set = WeakMapHelpers.set;

  	// `WeakMap.prototype.getOrInsert` method
  	// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsert
  	$({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE }, {
  	  getOrInsert: function getOrInsert(key, value) {
  	    if (has(this, key)) return get(this, key);
  	    set(this, key, value);
  	    return value;
  	  }
  	});
  	return es_weakMap_getOrInsert;
  }

  requireEs_weakMap_getOrInsert();

  var es_weakMap_getOrInsertComputed = {};

  var aWeakMap;
  var hasRequiredAWeakMap;

  function requireAWeakMap () {
  	if (hasRequiredAWeakMap) return aWeakMap;
  	hasRequiredAWeakMap = 1;
  	var has = requireWeakMapHelpers().has;

  	// Perform ? RequireInternalSlot(M, [[WeakMapData]])
  	aWeakMap = function (it) {
  	  has(it);
  	  return it;
  	};
  	return aWeakMap;
  }

  var aWeakKey;
  var hasRequiredAWeakKey;

  function requireAWeakKey () {
  	if (hasRequiredAWeakKey) return aWeakKey;
  	hasRequiredAWeakKey = 1;
  	var WeakMapHelpers = requireWeakMapHelpers();

  	var weakmap = new WeakMapHelpers.WeakMap();
  	var set = WeakMapHelpers.set;
  	var remove = WeakMapHelpers.remove;

  	aWeakKey = function (key) {
  	  set(weakmap, key, 1);
  	  remove(weakmap, key);
  	  return key;
  	};
  	return aWeakKey;
  }

  var hasRequiredEs_weakMap_getOrInsertComputed;

  function requireEs_weakMap_getOrInsertComputed () {
  	if (hasRequiredEs_weakMap_getOrInsertComputed) return es_weakMap_getOrInsertComputed;
  	hasRequiredEs_weakMap_getOrInsertComputed = 1;
  	var $ = require_export();
  	var aCallable = requireACallable();
  	var aWeakMap = requireAWeakMap();
  	var aWeakKey = requireAWeakKey();
  	var WeakMapHelpers = requireWeakMapHelpers();
  	var IS_PURE = requireIsPure();

  	var get = WeakMapHelpers.get;
  	var has = WeakMapHelpers.has;
  	var set = WeakMapHelpers.set;

  	var FORCED = IS_PURE || !function () {
  	  try {
  	    // eslint-disable-next-line es/no-weak-map, no-throw-literal -- testing
  	    if (WeakMap.prototype.getOrInsertComputed) new WeakMap().getOrInsertComputed(1, function () { throw 1; });
  	  } catch (error) {
  	    // FF144 Nightly - Beta 3 bug
  	    // https://bugzilla.mozilla.org/show_bug.cgi?id=1988369
  	    return error instanceof TypeError;
  	  }
  	}();

  	// `WeakMap.prototype.getOrInsertComputed` method
  	// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsertcomputed
  	$({ target: 'WeakMap', proto: true, real: true, forced: FORCED }, {
  	  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
  	    if (!IS_PURE) aWeakMap(this);
  	    aWeakKey(key);
  	    aCallable(callbackfn);
  	    if (has(this, key)) return get(this, key);
  	    var value = callbackfn(key);
  	    set(this, key, value);
  	    return value;
  	  }
  	});
  	return es_weakMap_getOrInsertComputed;
  }

  requireEs_weakMap_getOrInsertComputed();

  var web_domCollections_forEach = {};

  var domIterables;
  var hasRequiredDomIterables;

  function requireDomIterables () {
  	if (hasRequiredDomIterables) return domIterables;
  	hasRequiredDomIterables = 1;
  	// iterable DOM collections
  	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  	domIterables = {
  	  CSSRuleList: 0,
  	  CSSStyleDeclaration: 0,
  	  CSSValueList: 0,
  	  ClientRectList: 0,
  	  DOMRectList: 0,
  	  DOMStringList: 0,
  	  DOMTokenList: 1,
  	  DataTransferItemList: 0,
  	  FileList: 0,
  	  HTMLAllCollection: 0,
  	  HTMLCollection: 0,
  	  HTMLFormElement: 0,
  	  HTMLSelectElement: 0,
  	  MediaList: 0,
  	  MimeTypeArray: 0,
  	  NamedNodeMap: 0,
  	  NodeList: 1,
  	  PaintRequestList: 0,
  	  Plugin: 0,
  	  PluginArray: 0,
  	  SVGLengthList: 0,
  	  SVGNumberList: 0,
  	  SVGPathSegList: 0,
  	  SVGPointList: 0,
  	  SVGStringList: 0,
  	  SVGTransformList: 0,
  	  SourceBufferList: 0,
  	  StyleSheetList: 0,
  	  TextTrackCueList: 0,
  	  TextTrackList: 0,
  	  TouchList: 0
  	};
  	return domIterables;
  }

  var domTokenListPrototype;
  var hasRequiredDomTokenListPrototype;

  function requireDomTokenListPrototype () {
  	if (hasRequiredDomTokenListPrototype) return domTokenListPrototype;
  	hasRequiredDomTokenListPrototype = 1;
  	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  	var documentCreateElement = requireDocumentCreateElement();

  	var classList = documentCreateElement('span').classList;
  	var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

  	domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;
  	return domTokenListPrototype;
  }

  var arrayMethodIsStrict;
  var hasRequiredArrayMethodIsStrict;

  function requireArrayMethodIsStrict () {
  	if (hasRequiredArrayMethodIsStrict) return arrayMethodIsStrict;
  	hasRequiredArrayMethodIsStrict = 1;
  	var fails = requireFails();

  	arrayMethodIsStrict = function (METHOD_NAME, argument) {
  	  var method = [][METHOD_NAME];
  	  return !!method && fails(function () {
  	    // eslint-disable-next-line no-useless-call -- required for testing
  	    method.call(null, argument || function () { return 1; }, 1);
  	  });
  	};
  	return arrayMethodIsStrict;
  }

  var arrayForEach;
  var hasRequiredArrayForEach;

  function requireArrayForEach () {
  	if (hasRequiredArrayForEach) return arrayForEach;
  	hasRequiredArrayForEach = 1;
  	var $forEach = requireArrayIteration().forEach;
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();

  	var STRICT_METHOD = arrayMethodIsStrict('forEach');

  	// `Array.prototype.forEach` method implementation
  	// https://tc39.es/ecma262/#sec-array.prototype.foreach
  	arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
  	} : [].forEach;
  	return arrayForEach;
  }

  var hasRequiredWeb_domCollections_forEach;

  function requireWeb_domCollections_forEach () {
  	if (hasRequiredWeb_domCollections_forEach) return web_domCollections_forEach;
  	hasRequiredWeb_domCollections_forEach = 1;
  	var globalThis = requireGlobalThis();
  	var DOMIterables = requireDomIterables();
  	var DOMTokenListPrototype = requireDomTokenListPrototype();
  	var forEach = requireArrayForEach();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  	var handlePrototype = function (CollectionPrototype) {
  	  // some Chrome versions have non-configurable methods on DOMTokenList
  	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
  	    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  	  } catch (error) {
  	    CollectionPrototype.forEach = forEach;
  	  }
  	};

  	for (var COLLECTION_NAME in DOMIterables) {
  	  if (DOMIterables[COLLECTION_NAME]) {
  	    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  	  }
  	}

  	handlePrototype(DOMTokenListPrototype);
  	return web_domCollections_forEach;
  }

  requireWeb_domCollections_forEach();

  var web_domCollections_iterator = {};

  var hasRequiredWeb_domCollections_iterator;

  function requireWeb_domCollections_iterator () {
  	if (hasRequiredWeb_domCollections_iterator) return web_domCollections_iterator;
  	hasRequiredWeb_domCollections_iterator = 1;
  	var globalThis = requireGlobalThis();
  	var DOMIterables = requireDomIterables();
  	var DOMTokenListPrototype = requireDomTokenListPrototype();
  	var ArrayIteratorMethods = requireEs_array_iterator();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var setToStringTag = requireSetToStringTag();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayValues = ArrayIteratorMethods.values;

  	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  	  if (CollectionPrototype) {
  	    // some Chrome versions have non-configurable methods on DOMTokenList
  	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
  	      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
  	    } catch (error) {
  	      CollectionPrototype[ITERATOR] = ArrayValues;
  	    }
  	    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
  	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
  	      // some Chrome versions have non-configurable methods on DOMTokenList
  	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
  	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
  	      } catch (error) {
  	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
  	      }
  	    }
  	  }
  	};

  	for (var COLLECTION_NAME in DOMIterables) {
  	  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
  	}

  	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');
  	return web_domCollections_iterator;
  }

  requireWeb_domCollections_iterator();

  var es_array_filter = {};

  var hasRequiredEs_array_filter;

  function requireEs_array_filter () {
  	if (hasRequiredEs_array_filter) return es_array_filter;
  	hasRequiredEs_array_filter = 1;
  	var $ = require_export();
  	var $filter = requireArrayIteration().filter;
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  	// `Array.prototype.filter` method
  	// https://tc39.es/ecma262/#sec-array.prototype.filter
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  filter: function filter(callbackfn /* , thisArg */) {
  	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});
  	return es_array_filter;
  }

  requireEs_array_filter();

  var es_array_push = {};

  var hasRequiredEs_array_push;

  function requireEs_array_push () {
  	if (hasRequiredEs_array_push) return es_array_push;
  	hasRequiredEs_array_push = 1;
  	var $ = require_export();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var setArrayLength = requireArraySetLength();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var fails = requireFails();

  	var INCORRECT_TO_LENGTH = fails(function () {
  	  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
  	});

  	// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
  	// https://bugs.chromium.org/p/v8/issues/detail?id=12681
  	var properErrorOnNonWritableLength = function () {
  	  try {
  	    // eslint-disable-next-line es/no-object-defineproperty -- safe
  	    Object.defineProperty([], 'length', { writable: false }).push();
  	  } catch (error) {
  	    return error instanceof TypeError;
  	  }
  	};

  	var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

  	// `Array.prototype.push` method
  	// https://tc39.es/ecma262/#sec-array.prototype.push
  	$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  push: function push(item) {
  	    var O = toObject(this);
  	    var len = lengthOfArrayLike(O);
  	    var argCount = arguments.length;
  	    doesNotExceedSafeInteger(len + argCount);
  	    for (var i = 0; i < argCount; i++) {
  	      O[len] = arguments[i];
  	      len++;
  	    }
  	    setArrayLength(O, len);
  	    return len;
  	  }
  	});
  	return es_array_push;
  }

  requireEs_array_push();

  var es_iterator_filter = {};

  var iteratorCloseAll;
  var hasRequiredIteratorCloseAll;

  function requireIteratorCloseAll () {
  	if (hasRequiredIteratorCloseAll) return iteratorCloseAll;
  	hasRequiredIteratorCloseAll = 1;
  	var iteratorClose = requireIteratorClose();

  	iteratorCloseAll = function (iters, kind, value) {
  	  for (var i = iters.length - 1; i >= 0; i--) {
  	    if (iters[i] === undefined) continue;
  	    try {
  	      value = iteratorClose(iters[i].iterator, kind, value);
  	    } catch (error) {
  	      kind = 'throw';
  	      value = error;
  	    }
  	  }
  	  if (kind === 'throw') throw value;
  	  return value;
  	};
  	return iteratorCloseAll;
  }

  var iteratorCleanupState;
  var hasRequiredIteratorCleanupState;

  function requireIteratorCleanupState () {
  	if (hasRequiredIteratorCleanupState) return iteratorCleanupState;
  	hasRequiredIteratorCleanupState = 1;
  	// release references held by exhausted / closed iterator helpers to allow GC of the source chain
  	iteratorCleanupState = function (state) {
  	  state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
  	    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
  	};
  	return iteratorCleanupState;
  }

  var iteratorCreateProxy;
  var hasRequiredIteratorCreateProxy;

  function requireIteratorCreateProxy () {
  	if (hasRequiredIteratorCreateProxy) return iteratorCreateProxy;
  	hasRequiredIteratorCreateProxy = 1;
  	var call = requireFunctionCall();
  	var create = requireObjectCreate();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIns = requireDefineBuiltIns();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var InternalStateModule = requireInternalState();
  	var getMethod = requireGetMethod();
  	var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  	var createIterResultObject = requireCreateIterResultObject();
  	var iteratorClose = requireIteratorClose();
  	var iteratorCloseAll = requireIteratorCloseAll();
  	var cleanupState = requireIteratorCleanupState();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var ITERATOR_HELPER = 'IteratorHelper';
  	var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
  	var NORMAL = 'normal';
  	var THROW = 'throw';
  	var setInternalState = InternalStateModule.set;

  	var createIteratorProxyPrototype = function (IS_ITERATOR) {
  	  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  	  return defineBuiltIns(create(IteratorPrototype), {
  	    next: function next() {
  	      var state = getInternalState(this);
  	      // for simplification:
  	      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
  	      //   for `%IteratorHelperPrototype%.next` - just a value
  	      if (IS_ITERATOR) return state.nextHandler();
  	      if (state.done) return createIterResultObject(undefined, true);
  	      try {
  	        var result = state.nextHandler();
  	        if (state.done) cleanupState(state);
  	        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
  	      } catch (error) {
  	        state.done = true;
  	        cleanupState(state);
  	        throw error;
  	      }
  	    },
  	    'return': function () {
  	      var state = getInternalState(this);
  	      var iterator = state.iterator;
  	      var inner = state.inner;
  	      var openIters = state.openIters;
  	      var done = state.done;
  	      state.done = true;
  	      if (IS_ITERATOR) {
  	        var returnMethod = getMethod(iterator, 'return');
  	        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
  	      }
  	      cleanupState(state);
  	      if (done) return createIterResultObject(undefined, true);
  	      if (inner) try {
  	        iteratorClose(inner.iterator, NORMAL);
  	      } catch (error) {
  	        return iteratorClose(iterator, THROW, error);
  	      }
  	      if (openIters) try {
  	        iteratorCloseAll(openIters, NORMAL);
  	      } catch (error) {
  	        if (iterator) return iteratorClose(iterator, THROW, error);
  	        throw error;
  	      }
  	      if (iterator) iteratorClose(iterator, NORMAL);
  	      return createIterResultObject(undefined, true);
  	    }
  	  });
  	};

  	var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
  	var IteratorHelperPrototype = createIteratorProxyPrototype(false);

  	createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

  	iteratorCreateProxy = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  	  var IteratorProxy = function Iterator(record, state) {
  	    if (state) {
  	      state.iterator = record.iterator;
  	      state.next = record.next;
  	    } else state = record;
  	    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
  	    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
  	    state.nextHandler = nextHandler;
  	    state.counter = 0;
  	    state.done = false;
  	    setInternalState(this, state);
  	  };

  	  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  	  return IteratorProxy;
  	};
  	return iteratorCreateProxy;
  }

  var iteratorHelperThrowsOnInvalidIterator;
  var hasRequiredIteratorHelperThrowsOnInvalidIterator;

  function requireIteratorHelperThrowsOnInvalidIterator () {
  	if (hasRequiredIteratorHelperThrowsOnInvalidIterator) return iteratorHelperThrowsOnInvalidIterator;
  	hasRequiredIteratorHelperThrowsOnInvalidIterator = 1;
  	// Should throw an error on invalid iterator
  	// https://issues.chromium.org/issues/336839115
  	iteratorHelperThrowsOnInvalidIterator = function (methodName, argument) {
  	  // eslint-disable-next-line es/no-iterator -- required for testing
  	  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  	  if (method) try {
  	    method.call({ next: null }, argument).next();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return iteratorHelperThrowsOnInvalidIterator;
  }

  var hasRequiredEs_iterator_filter;

  function requireEs_iterator_filter () {
  	if (hasRequiredEs_iterator_filter) return es_iterator_filter;
  	hasRequiredEs_iterator_filter = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var createIteratorProxy = requireIteratorCreateProxy();
  	var callWithSafeIterationClosing = requireCallWithSafeIterationClosing();
  	var IS_PURE = requireIsPure();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperThrowsOnInvalidIterator = requireIteratorHelperThrowsOnInvalidIterator();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
  	var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  	  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

  	var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

  	var IteratorProxy = createIteratorProxy(function () {
  	  var iterator = this.iterator;
  	  var predicate = this.predicate;
  	  var next = this.next;
  	  var result, done, value;
  	  while (true) {
  	    result = anObject(call(next, iterator));
  	    done = this.done = !!result.done;
  	    if (done) return;
  	    value = result.value;
  	    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  	  }
  	});

  	// `Iterator.prototype.filter` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.filter
  	$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  	  filter: function filter(predicate) {
  	    anObject(this);
  	    try {
  	      aCallable(predicate);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

  	    return new IteratorProxy(getIteratorDirect(this), {
  	      predicate: predicate
  	    });
  	  }
  	});
  	return es_iterator_filter;
  }

  requireEs_iterator_filter();

  var es_object_entries = {};

  var objectToArray;
  var hasRequiredObjectToArray;

  function requireObjectToArray () {
  	if (hasRequiredObjectToArray) return objectToArray;
  	hasRequiredObjectToArray = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();
  	var uncurryThis = requireFunctionUncurryThis();
  	var objectGetPrototypeOf = requireObjectGetPrototypeOf();
  	var objectKeys = requireObjectKeys();
  	var toIndexedObject = requireToIndexedObject();
  	var $propertyIsEnumerable = requireObjectPropertyIsEnumerable().f;

  	var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
  	var push = uncurryThis([].push);

  	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
  	// of `null` prototype objects
  	var IE_BUG = DESCRIPTORS && fails(function () {
  	  // eslint-disable-next-line es/no-object-create -- safe
  	  var O = Object.create(null);
  	  O[2] = 2;
  	  return !propertyIsEnumerable(O, 2);
  	});

  	// `Object.{ entries, values }` methods implementation
  	var createMethod = function (TO_ENTRIES) {
  	  return function (it) {
  	    var O = toIndexedObject(it);
  	    var keys = objectKeys(O);
  	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
  	    var length = keys.length;
  	    var i = 0;
  	    var result = [];
  	    var key;
  	    while (length > i) {
  	      key = keys[i++];
  	      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
  	        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
  	      }
  	    }
  	    return result;
  	  };
  	};

  	objectToArray = {
  	  // `Object.entries` method
  	  // https://tc39.es/ecma262/#sec-object.entries
  	  entries: createMethod(true),
  	  // `Object.values` method
  	  // https://tc39.es/ecma262/#sec-object.values
  	  values: createMethod(false)
  	};
  	return objectToArray;
  }

  var hasRequiredEs_object_entries;

  function requireEs_object_entries () {
  	if (hasRequiredEs_object_entries) return es_object_entries;
  	hasRequiredEs_object_entries = 1;
  	var $ = require_export();
  	var $entries = requireObjectToArray().entries;

  	// `Object.entries` method
  	// https://tc39.es/ecma262/#sec-object.entries
  	$({ target: 'Object', stat: true }, {
  	  entries: function entries(O) {
  	    return $entries(O);
  	  }
  	});
  	return es_object_entries;
  }

  requireEs_object_entries();

  var es_string_split = {};

  var fixRegexpWellKnownSymbolLogic;
  var hasRequiredFixRegexpWellKnownSymbolLogic;

  function requireFixRegexpWellKnownSymbolLogic () {
  	if (hasRequiredFixRegexpWellKnownSymbolLogic) return fixRegexpWellKnownSymbolLogic;
  	hasRequiredFixRegexpWellKnownSymbolLogic = 1;
  	// TODO: Remove from `core-js [at] 4` since it's moved to entry points
  	requireEs_regexp_exec();
  	var call = requireFunctionCall();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var regexpExec = requireRegexpExec();
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  	var SPECIES = wellKnownSymbol('species');
  	var RegExpPrototype = RegExp.prototype;

  	fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  	  var SYMBOL = wellKnownSymbol(KEY);

  	  var DELEGATES_TO_SYMBOL = !fails(function () {
  	    // String methods call symbol-named RegExp methods
  	    var O = {};
  	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	    O[SYMBOL] = function () { return 7; };
  	    return ''[KEY](O) !== 7;
  	  });

  	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
  	    // Symbol-named RegExp methods call .exec
  	    var execCalled = false;
  	    var re = /a/;

  	    if (KEY === 'split') {
  	      // We can't use real regex here since it causes deoptimization
  	      // and serious performance degradation in V8
  	      // https://github.com/zloirock/core-js/issues/306
  	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
  	      // a new one. We need to return the patched regex when creating the new one.
  	      var constructor = {};
  	      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	      constructor[SPECIES] = function () { return re; };
  	      re = { constructor: constructor, flags: '' };
  	      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  	      re[SYMBOL] = /./[SYMBOL];
  	    }

  	    re.exec = function () {
  	      execCalled = true;
  	      return null;
  	    };

  	    re[SYMBOL]('');
  	    return !execCalled;
  	  });

  	  if (
  	    !DELEGATES_TO_SYMBOL ||
  	    !DELEGATES_TO_EXEC ||
  	    FORCED
  	  ) {
  	    var nativeRegExpMethod = /./[SYMBOL];
  	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
  	      var $exec = regexp.exec;
  	      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
  	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
  	          // The native String method already delegates to @@method (this
  	          // polyfilled function), leasing to infinite recursion.
  	          // We avoid it by directly calling the native @@method method.
  	          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
  	        }
  	        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
  	      }
  	      return { done: false };
  	    });

  	    defineBuiltIn(String.prototype, KEY, methods[0]);
  	    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  	  }

  	  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  	};
  	return fixRegexpWellKnownSymbolLogic;
  }

  var aConstructor;
  var hasRequiredAConstructor;

  function requireAConstructor () {
  	if (hasRequiredAConstructor) return aConstructor;
  	hasRequiredAConstructor = 1;
  	var isConstructor = requireIsConstructor();
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	// `Assert: IsConstructor(argument) is true`
  	aConstructor = function (argument) {
  	  if (isConstructor(argument)) return argument;
  	  throw new $TypeError(tryToString(argument) + ' is not a constructor');
  	};
  	return aConstructor;
  }

  var speciesConstructor;
  var hasRequiredSpeciesConstructor;

  function requireSpeciesConstructor () {
  	if (hasRequiredSpeciesConstructor) return speciesConstructor;
  	hasRequiredSpeciesConstructor = 1;
  	var anObject = requireAnObject();
  	var aConstructor = requireAConstructor();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var SPECIES = wellKnownSymbol('species');

  	// `SpeciesConstructor` abstract operation
  	// https://tc39.es/ecma262/#sec-speciesconstructor
  	speciesConstructor = function (O, defaultConstructor) {
  	  var C = anObject(O).constructor;
  	  var S;
  	  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
  	};
  	return speciesConstructor;
  }

  var advanceStringIndex;
  var hasRequiredAdvanceStringIndex;

  function requireAdvanceStringIndex () {
  	if (hasRequiredAdvanceStringIndex) return advanceStringIndex;
  	hasRequiredAdvanceStringIndex = 1;
  	var charAt = requireStringMultibyte().charAt;

  	// `AdvanceStringIndex` abstract operation
  	// https://tc39.es/ecma262/#sec-advancestringindex
  	advanceStringIndex = function (S, index, unicode) {
  	  return index + (unicode ? charAt(S, index).length || 1 : 1);
  	};
  	return advanceStringIndex;
  }

  var regexpFlagsDetection;
  var hasRequiredRegexpFlagsDetection;

  function requireRegexpFlagsDetection () {
  	if (hasRequiredRegexpFlagsDetection) return regexpFlagsDetection;
  	hasRequiredRegexpFlagsDetection = 1;
  	var globalThis = requireGlobalThis();
  	var fails = requireFails();

  	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
  	var RegExp = globalThis.RegExp;

  	var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  	  var INDICES_SUPPORT = true;
  	  try {
  	    RegExp('.', 'd');
  	  } catch (error) {
  	    INDICES_SUPPORT = false;
  	  }

  	  var O = {};
  	  // modern V8 bug
  	  var calls = '';
  	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  	  var addGetter = function (key, chr) {
  	    // eslint-disable-next-line es/no-object-defineproperty -- safe
  	    Object.defineProperty(O, key, { get: function () {
  	      calls += chr;
  	      return true;
  	    } });
  	  };

  	  var pairs = {
  	    dotAll: 's',
  	    global: 'g',
  	    ignoreCase: 'i',
  	    multiline: 'm',
  	    sticky: 'y'
  	  };

  	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  	  for (var key in pairs) addGetter(key, pairs[key]);

  	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  	  return result !== expected || calls !== expected;
  	});

  	regexpFlagsDetection = { correct: FLAGS_GETTER_IS_CORRECT };
  	return regexpFlagsDetection;
  }

  var regexpGetFlags;
  var hasRequiredRegexpGetFlags;

  function requireRegexpGetFlags () {
  	if (hasRequiredRegexpGetFlags) return regexpGetFlags;
  	hasRequiredRegexpGetFlags = 1;
  	var call = requireFunctionCall();
  	var hasOwn = requireHasOwnProperty();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var regExpFlagsDetection = requireRegexpFlagsDetection();
  	var regExpFlagsGetterImplementation = requireRegexpFlags();

  	var RegExpPrototype = RegExp.prototype;

  	regexpGetFlags = regExpFlagsDetection.correct ? function (it) {
  	  return it.flags;
  	} : function (it) {
  	  return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
  	    ? call(regExpFlagsGetterImplementation, it)
  	    : it.flags;
  	};
  	return regexpGetFlags;
  }

  var regexpExecAbstract;
  var hasRequiredRegexpExecAbstract;

  function requireRegexpExecAbstract () {
  	if (hasRequiredRegexpExecAbstract) return regexpExecAbstract;
  	hasRequiredRegexpExecAbstract = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var isCallable = requireIsCallable();
  	var classof = requireClassofRaw();
  	var regexpExec = requireRegexpExec();

  	var $TypeError = TypeError;

  	// `RegExpExec` abstract operation
  	// https://tc39.es/ecma262/#sec-regexpexec
  	regexpExecAbstract = function (R, S) {
  	  var exec = R.exec;
  	  if (isCallable(exec)) {
  	    var result = call(exec, R, S);
  	    if (result !== null) anObject(result);
  	    return result;
  	  }
  	  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  	  throw new $TypeError('RegExp#exec called on incompatible receiver');
  	};
  	return regexpExecAbstract;
  }

  var hasRequiredEs_string_split;

  function requireEs_string_split () {
  	if (hasRequiredEs_string_split) return es_string_split;
  	hasRequiredEs_string_split = 1;
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var speciesConstructor = requireSpeciesConstructor();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var getMethod = requireGetMethod();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var regExpExec = requireRegexpExecAbstract();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var fails = requireFails();

  	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  	var MAX_UINT32 = 0xFFFFFFFF;
  	var min = Math.min;
  	var push = uncurryThis([].push);
  	var stringSlice = uncurryThis(''.slice);
  	var stringIndexOf = uncurryThis(''.indexOf);

  	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
  	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  	  var re = /(?:)/;
  	  var originalExec = re.exec;
  	  re.exec = function () { return originalExec.apply(this, arguments); };
  	  var result = 'ab'.split(re);
  	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  	});

  	var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  	  'test'.split(/(?:)/, -1).length !== 4 ||
  	  'ab'.split(/(?:ab)*/).length !== 2 ||
  	  '.'.split(/(.?)(.?)/).length !== 4 ||
  	  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  	  '.'.split(/()()/).length > 1 ||
  	  ''.split(/.?/).length;

  	// @@split logic
  	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  	  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
  	    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  	  } : nativeSplit;

  	  return [
  	    // `String.prototype.split` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.split
  	    function split(separator, limit) {
  	      var O = requireObjectCoercible(this);
  	      var splitter = isObject(separator) ? getMethod(separator, SPLIT) : undefined;
  	      return splitter
  	        ? call(splitter, separator, O, limit)
  	        : call(internalSplit, toString(O), separator, limit);
  	    },
  	    // `RegExp.prototype[@@split]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  	    //
  	    // NOTE: This cannot be properly polyfilled in engines that don't support
  	    // the 'y' flag.
  	    function (string, limit) {
  	      var rx = anObject(this);
  	      var S = toString(string);

  	      if (!BUGGY) {
  	        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
  	        if (res.done) return res.value;
  	      }

  	      var C = speciesConstructor(rx, RegExp);
  	      var flags = toString(getRegExpFlags(rx));
  	      var unicodeMatching = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
  	      if (UNSUPPORTED_Y) {
  	        if (!~stringIndexOf(flags, 'g')) flags += 'g';
  	      } else if (!~stringIndexOf(flags, 'y')) flags += 'y';
  	      // ^(? + rx + ) is needed, in combination with some S slicing, to
  	      // simulate the 'y' flag.
  	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
  	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
  	      if (lim === 0) return [];
  	      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
  	      var p = 0;
  	      var q = 0;
  	      var A = [];
  	      while (q < S.length) {
  	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
  	        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
  	        var e;
  	        if (
  	          z === null ||
  	          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
  	        ) {
  	          q = advanceStringIndex(S, q, unicodeMatching);
  	        } else {
  	          push(A, stringSlice(S, p, q));
  	          if (A.length === lim) return A;
  	          for (var i = 1; i <= z.length - 1; i++) {
  	            push(A, z[i]);
  	            if (A.length === lim) return A;
  	          }
  	          q = p = e;
  	        }
  	      }
  	      push(A, stringSlice(S, p));
  	      return A;
  	    }
  	  ];
  	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
  	return es_string_split;
  }

  requireEs_string_split();

  var es_string_trim = {};

  var whitespaces;
  var hasRequiredWhitespaces;

  function requireWhitespaces () {
  	if (hasRequiredWhitespaces) return whitespaces;
  	hasRequiredWhitespaces = 1;
  	// a string of all valid unicode whitespaces
  	whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  	return whitespaces;
  }

  var stringTrim;
  var hasRequiredStringTrim;

  function requireStringTrim () {
  	if (hasRequiredStringTrim) return stringTrim;
  	hasRequiredStringTrim = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var toString = requireToString();
  	var whitespaces = requireWhitespaces();

  	var replace = uncurryThis(''.replace);
  	var ltrim = RegExp('^[' + whitespaces + ']+');
  	var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

  	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  	var createMethod = function (TYPE) {
  	  return function ($this) {
  	    var string = toString(requireObjectCoercible($this));
  	    if (TYPE & 1) string = replace(string, ltrim, '');
  	    if (TYPE & 2) string = replace(string, rtrim, '$1');
  	    return string;
  	  };
  	};

  	stringTrim = {
  	  // `String.prototype.{ trimLeft, trimStart }` methods
  	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  	  start: createMethod(1),
  	  // `String.prototype.{ trimRight, trimEnd }` methods
  	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  	  end: createMethod(2),
  	  // `String.prototype.trim` method
  	  // https://tc39.es/ecma262/#sec-string.prototype.trim
  	  trim: createMethod(3)
  	};
  	return stringTrim;
  }

  var stringTrimForced;
  var hasRequiredStringTrimForced;

  function requireStringTrimForced () {
  	if (hasRequiredStringTrimForced) return stringTrimForced;
  	hasRequiredStringTrimForced = 1;
  	var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  	var fails = requireFails();
  	var whitespaces = requireWhitespaces();

  	var non = '\u200B\u0085\u180E';

  	// check that a method works with the correct list
  	// of whitespaces and has a correct name
  	stringTrimForced = function (METHOD_NAME) {
  	  return fails(function () {
  	    return !!whitespaces[METHOD_NAME]()
  	      || non[METHOD_NAME]() !== non
  	      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  	  });
  	};
  	return stringTrimForced;
  }

  var hasRequiredEs_string_trim;

  function requireEs_string_trim () {
  	if (hasRequiredEs_string_trim) return es_string_trim;
  	hasRequiredEs_string_trim = 1;
  	var $ = require_export();
  	var $trim = requireStringTrim().trim;
  	var forcedStringTrimMethod = requireStringTrimForced();

  	// `String.prototype.trim` method
  	// https://tc39.es/ecma262/#sec-string.prototype.trim
  	$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  	  trim: function trim() {
  	    return $trim(this);
  	  }
  	});
  	return es_string_trim;
  }

  requireEs_string_trim();

  /**
   * Framework detection and icon utilities.
   *
   * This module provides utility functions for detecting the Bootstrap framework version
   * and managing icon prefixes and mappings for different CSS frameworks.
   *
   * @module utils/framework
   */

  /**
   * Returns the prefix for the icons based on the theme.
   *
   * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
   * @returns {string} The icons prefix.
   */
  function getIconsPrefix(theme) {
    return {
      bootstrap3: 'glyphicon',
      bootstrap4: 'fa',
      bootstrap5: 'bi',
      'bootstrap-table': 'icon',
      bulma: 'fa',
      foundation: 'fa',
      materialize: 'material-icons',
      semantic: 'fa'
    }[theme] || 'fa';
  }

  /**
   * Gets the icons for a given prefix.
   *
   * @param {Object.<string, Object>} icons - The icons object.
   * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
   * @return {Object} The icons object for the given prefix.
   */
  function getIcons(icons, prefix) {
    return icons[prefix] || {};
  }

  /**
   * Assigns new icons to icons object.
   *
   * @param {Object.<string, Object>} icons - The icons object.
   * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
   * @param {Object.<string, string>} values - The values object.
   */
  function assignIcons(icons, icon, values) {
    for (var _i = 0, _Object$keys = Object.keys(icons); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      icons[key][icon] = values[key];
    }
  }

  /**
   * Gets the Bootstrap version.
   *
   * @returns {number} The Bootstrap version number (3, 4, or 5), defaulting to 5.
   */
  function getBootstrapVersion() {
    var _window$bootstrap, _window$$;
    var bootstrapVersion = 5;
    if (typeof window !== 'undefined' && (_window$bootstrap = window.bootstrap) !== null && _window$bootstrap !== void 0 && (_window$bootstrap = _window$bootstrap.Tooltip) !== null && _window$bootstrap !== void 0 && _window$bootstrap.VERSION) {
      bootstrapVersion = parseInt(window.bootstrap.Tooltip.VERSION, 10);
    } else if (typeof window !== 'undefined' && (_window$$ = window.$) !== null && _window$$ !== void 0 && (_window$$ = _window$$.fn) !== null && _window$$ !== void 0 && (_window$$ = _window$$.tooltip) !== null && _window$$ !== void 0 && (_window$$ = _window$$.Constructor) !== null && _window$$ !== void 0 && _window$$.VERSION) {
      // Bootstrap 3 has no window.bootstrap namespace (it's jQuery-plugin-only),
      // so it's indistinguishable from "no Bootstrap JS at all" above. Its
      // jQuery plugins do expose a version the same way Bootstrap 4's did.
      bootstrapVersion = parseInt(window.$.fn.tooltip.Constructor.VERSION, 10);
    }
    return bootstrapVersion;
  }

  /**
   * Gets the search input element.
   *
   * @param {Object} that - The Bootstrap Table instance.
   * @returns {HTMLElement|null} The search input element, or null if not found.
   */
  function getSearchInput(that) {
    var _that$$toolbar$queryS, _that$$toolbar;
    if (typeof that.options.searchSelector === 'string') {
      return document.querySelector(that.options.searchSelector);
    }
    return (_that$$toolbar$queryS = (_that$$toolbar = that.$toolbar) === null || _that$$toolbar === void 0 ? void 0 : _that$$toolbar.querySelector('.search input')) !== null && _that$$toolbar$queryS !== void 0 ? _that$$toolbar$queryS : null;
  }

  var framework = /*#__PURE__*/Object.freeze({
    __proto__: null,
    assignIcons: assignIcons,
    getBootstrapVersion: getBootstrapVersion,
    getIcons: getIcons,
    getIconsPrefix: getIconsPrefix,
    getSearchInput: getSearchInput
  });

  var es_iterator_every = {};

  var hasRequiredEs_iterator_every;

  function requireEs_iterator_every () {
  	if (hasRequiredEs_iterator_every) return es_iterator_every;
  	hasRequiredEs_iterator_every = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var iterate = requireIterate();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('every', TypeError);

  	// `Iterator.prototype.every` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.every
  	$({ target: 'Iterator', proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
  	  every: function every(predicate) {
  	    anObject(this);
  	    try {
  	      aCallable(predicate);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (everyWithoutClosingOnEarlyError) return call(everyWithoutClosingOnEarlyError, this, predicate);

  	    var record = getIteratorDirect(this);
  	    var counter = 0;
  	    return !iterate(record, function (value, stop) {
  	      if (!predicate(value, counter++)) return stop();
  	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  	  }
  	});
  	return es_iterator_every;
  }

  requireEs_iterator_every();

  var es_object_getPrototypeOf = {};

  var hasRequiredEs_object_getPrototypeOf;

  function requireEs_object_getPrototypeOf () {
  	if (hasRequiredEs_object_getPrototypeOf) return es_object_getPrototypeOf;
  	hasRequiredEs_object_getPrototypeOf = 1;
  	var $ = require_export();
  	var fails = requireFails();
  	var toObject = requireToObject();
  	var nativeGetPrototypeOf = requireObjectGetPrototypeOf();
  	var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();

  	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

  	// `Object.getPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.getprototypeof
  	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  	  getPrototypeOf: function getPrototypeOf(it) {
  	    return nativeGetPrototypeOf(toObject(it));
  	  }
  	});
  	return es_object_getPrototypeOf;
  }

  requireEs_object_getPrototypeOf();

  /**
   * Object manipulation utilities.
   *
   * This module provides utility functions for working with plain JavaScript objects,
   * including deep copying, merging, comparing, and checking object properties.
   *
   * @module utils/object
   */

  /**
   * Checks if a value is a plain object.
   *
   * @param {*} obj - The value to check.
   * @returns {boolean} True if the value is a plain object, false otherwise.
   */
  function isObject(obj) {
    if (_typeof(obj) !== 'object' || obj === null) {
      return false;
    }
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
  }

  // $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
  /**
   * Merges the contents of two or more objects together into the first object.
   * This is a re-implementation of jQuery's extend function.
   *
   * @param {boolean} [deep=false] - If true, the merge becomes recursive (deep copy).
   * @param {Object} target - The object to extend.
   * @param {...Object} objects - The objects to merge into the target.
   * @returns {Object} The extended target object.
   */
  function extend() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var target = args[0] || {};
    var i = 1;
    var deep = false;
    var clone;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target;

      // Skip the boolean and the target
      target = args[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (_typeof(target) !== 'object' && typeof target !== 'function') {
      target = {};
    }
    for (; i < args.length; i++) {
      var options = args[i];

      // Ignore undefined/null values
      if (typeof options === 'undefined' || options === null) {
        continue;
      }

      // Extend the base object
      // eslint-disable-next-line guard-for-in
      for (var name in options) {
        var copy = options[name];

        // Prevent Object.prototype pollution
        // Prevent never-ending loop
        if (name === '__proto__' || target === copy) {
          continue;
        }
        var copyIsArray = Array.isArray(copy);

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isObject(copy) || copyIsArray)) {
          var src = target[name];
          if (copyIsArray && Array.isArray(src)) {
            if (src.every(function (it) {
              return !isObject(it) && !Array.isArray(it);
            })) {
              target[name] = copy;
              continue;
            }
          }
          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !isObject(src)) {
            clone = {};
          } else {
            clone = src;
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
    return target;
  }

  /**
   * Creates a deep copy of a value.
   *
   * @param {*} arg - The value to deep copy.
   * @returns {*} A deep copy of the input value.
   */
  function deepCopy(arg) {
    if (arg === undefined) {
      return arg;
    }
    return extend(true, Array.isArray(arg) ? [] : {}, arg);
  }

  /**
   * Compares two objects for equality.
   *
   * @param {Object} objectA - The first object to compare.
   * @param {Object} objectB - The second object to compare.
   * @param {boolean} [compareLength=false] - If true, also compare the number of keys.
   * @returns {boolean} True if the objects are equal, false otherwise.
   */
  function compareObjects(objectA, objectB, compareLength) {
    var aKeys = Object.keys(objectA);
    var bKeys = Object.keys(objectB);
    if (compareLength && aKeys.length !== bKeys.length) {
      return false;
    }
    for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
      var key = _aKeys[_i];
      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if an object is empty (has no own properties).
   *
   * @param {Object} [obj={}] - The object to check.
   * @returns {boolean} True if the object is empty, false otherwise.
   */
  function isEmptyObject() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  var object = /*#__PURE__*/Object.freeze({
    __proto__: null,
    compareObjects: compareObjects,
    deepCopy: deepCopy,
    extend: extend,
    isEmptyObject: isEmptyObject,
    isObject: isObject
  });

  var es_array_map = {};

  var hasRequiredEs_array_map;

  function requireEs_array_map () {
  	if (hasRequiredEs_array_map) return es_array_map;
  	hasRequiredEs_array_map = 1;
  	var $ = require_export();
  	var $map = requireArrayIteration().map;
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  	// `Array.prototype.map` method
  	// https://tc39.es/ecma262/#sec-array.prototype.map
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  map: function map(callbackfn /* , thisArg */) {
  	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});
  	return es_array_map;
  }

  requireEs_array_map();

  var es_iterator_map = {};

  var hasRequiredEs_iterator_map;

  function requireEs_iterator_map () {
  	if (hasRequiredEs_iterator_map) return es_iterator_map;
  	hasRequiredEs_iterator_map = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var createIteratorProxy = requireIteratorCreateProxy();
  	var callWithSafeIterationClosing = requireCallWithSafeIterationClosing();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperThrowsOnInvalidIterator = requireIteratorHelperThrowsOnInvalidIterator();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();
  	var IS_PURE = requireIsPure();

  	var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
  	var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  	  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

  	var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

  	var IteratorProxy = createIteratorProxy(function () {
  	  var iterator = this.iterator;
  	  var result = anObject(call(this.next, iterator));
  	  var done = this.done = !!result.done;
  	  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
  	});

  	// `Iterator.prototype.map` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.map
  	$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  	  map: function map(mapper) {
  	    anObject(this);
  	    try {
  	      aCallable(mapper);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

  	    return new IteratorProxy(getIteratorDirect(this), {
  	      mapper: mapper
  	    });
  	  }
  	});
  	return es_iterator_map;
  }

  requireEs_iterator_map();

  var es_regexp_constructor = {};

  var setSpecies;
  var hasRequiredSetSpecies;

  function requireSetSpecies () {
  	if (hasRequiredSetSpecies) return setSpecies;
  	hasRequiredSetSpecies = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var DESCRIPTORS = requireDescriptors();

  	var SPECIES = wellKnownSymbol('species');

  	setSpecies = function (CONSTRUCTOR_NAME) {
  	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
  	    defineBuiltInAccessor(Constructor, SPECIES, {
  	      configurable: true,
  	      get: function () { return this; }
  	    });
  	  }
  	};
  	return setSpecies;
  }

  var hasRequiredEs_regexp_constructor;

  function requireEs_regexp_constructor () {
  	if (hasRequiredEs_regexp_constructor) return es_regexp_constructor;
  	hasRequiredEs_regexp_constructor = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var globalThis = requireGlobalThis();
  	var uncurryThis = requireFunctionUncurryThis();
  	var isForced = requireIsForced();
  	var inheritIfRequired = requireInheritIfRequired();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var create = requireObjectCreate();
  	var getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var isRegExp = requireIsRegexp();
  	var toString = requireToString();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var proxyAccessor = requireProxyAccessor();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var fails = requireFails();
  	var hasOwn = requireHasOwnProperty();
  	var enforceInternalState = requireInternalState().enforce;
  	var setSpecies = requireSetSpecies();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  	var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();

  	var MATCH = wellKnownSymbol('match');
  	var NativeRegExp = globalThis.RegExp;
  	var RegExpPrototype = NativeRegExp.prototype;
  	var SyntaxError = globalThis.SyntaxError;
  	var exec = uncurryThis(RegExpPrototype.exec);
  	var charAt = uncurryThis(''.charAt);
  	var replace = uncurryThis(''.replace);
  	var stringIndexOf = uncurryThis(''.indexOf);
  	var stringSlice = uncurryThis(''.slice);
  	// TODO: Use only proper RegExpIdentifierName
  	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  	var re1 = /a/g;
  	var re2 = /a/g;

  	// "new" should create a new object, old webkit bug
  	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  	var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
  	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

  	var BASE_FORCED = DESCRIPTORS &&
  	  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
  	    re2[MATCH] = false;
  	    // RegExp constructor can alter flags and IsRegExp works correct with @@match
  	    // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
  	    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  	  }));

  	var handleDotAll = function (string) {
  	  var length = string.length;
  	  var index = 0;
  	  var result = '';
  	  var brackets = false;
  	  var chr;
  	  for (; index < length; index++) {
  	    chr = charAt(string, index);
  	    if (chr === '\\') {
  	      result += chr + charAt(string, ++index);
  	      continue;
  	    }
  	    if (!brackets && chr === '.') {
  	      result += '[\\s\\S]';
  	    } else {
  	      if (chr === '[') {
  	        brackets = true;
  	      } else if (chr === ']') {
  	        brackets = false;
  	      } result += chr;
  	    }
  	  } return result;
  	};

  	var handleNCG = function (string) {
  	  var length = string.length;
  	  var index = 0;
  	  var result = '';
  	  var named = [];
  	  var names = create(null);
  	  var brackets = false;
  	  var ncg = false;
  	  var groupid = 0;
  	  var groupname = '';
  	  var chr;
  	  for (; index < length; index++) {
  	    chr = charAt(string, index);
  	    if (chr === '\\') {
  	      chr += charAt(string, ++index);
  	      // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
  	      if (!ncg && charAt(chr, 1) === '\\') {
  	        result += '\\x5c';
  	        continue;
  	      }
  	    } else if (chr === ']') {
  	      brackets = false;
  	    } else if (!brackets) switch (true) {
  	      case chr === '[':
  	        brackets = true;
  	        break;
  	      case chr === '(':
  	        result += chr;
  	        if (exec(IS_NCG, stringSlice(string, index + 1))) {
  	          index += 2;
  	          ncg = true;
  	          groupid++;
  	        } else if (charAt(string, index + 1) !== '?') {
  	          groupid++;
  	        }
  	        continue;
  	      case chr === '>' && ncg:
  	        if (groupname === '' || hasOwn(names, groupname)) {
  	          throw new SyntaxError('Invalid capture group name');
  	        }
  	        names[groupname] = true;
  	        named[named.length] = [groupname, groupid];
  	        ncg = false;
  	        groupname = '';
  	        continue;
  	    }
  	    if (ncg) groupname += chr;
  	    else result += chr;
  	  }
  	  // convert `\k<name>` backreferences to numbered backreferences
  	  for (var ni = 0; ni < named.length; ni++) {
  	    var backref = '\\k<' + named[ni][0] + '>';
  	    var numRef = '\\' + named[ni][1];
  	    while (stringIndexOf(result, backref) > -1) {
  	      result = replace(result, backref, numRef);
  	    }
  	  } return [result, named];
  	};

  	// `RegExp` constructor
  	// https://tc39.es/ecma262/#sec-regexp-constructor
  	if (isForced('RegExp', BASE_FORCED)) {
  	  var RegExpWrapper = function RegExp(pattern, flags) {
  	    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
  	    var patternIsRegExp = isRegExp(pattern);
  	    var flagsAreUndefined = flags === undefined;
  	    var groups = [];
  	    var rawPattern = pattern;
  	    var rawFlags, dotAll, sticky, handled, result, state;

  	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
  	      return pattern;
  	    }

  	    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
  	      pattern = pattern.source;
  	      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
  	    }

  	    pattern = pattern === undefined ? '' : toString(pattern);
  	    flags = flags === undefined ? '' : toString(flags);
  	    rawPattern = pattern;

  	    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
  	      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
  	      if (dotAll) flags = replace(flags, /s/g, '');
  	    }

  	    rawFlags = flags;

  	    if (MISSED_STICKY && 'sticky' in re1) {
  	      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
  	      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
  	    }

  	    if (UNSUPPORTED_NCG) {
  	      handled = handleNCG(pattern);
  	      pattern = handled[0];
  	      groups = handled[1];
  	    }

  	    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

  	    if (dotAll || sticky || groups.length) {
  	      state = enforceInternalState(result);
  	      if (dotAll) {
  	        state.dotAll = true;
  	        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
  	      }
  	      if (sticky) state.sticky = true;
  	      if (groups.length) state.groups = groups;
  	    }

  	    if (pattern !== rawPattern) try {
  	      // fails in old engines, but we have no alternatives for unsupported regex syntax
  	      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
  	    } catch (error) { /* empty */ }

  	    return result;
  	  };

  	  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
  	    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  	  }

  	  RegExpPrototype.constructor = RegExpWrapper;
  	  RegExpWrapper.prototype = RegExpPrototype;
  	  defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true });
  	}

  	// https://tc39.es/ecma262/#sec-get-regexp-@@species
  	setSpecies('RegExp');
  	return es_regexp_constructor;
  }

  requireEs_regexp_constructor();

  var es_regexp_dotAll = {};

  var hasRequiredEs_regexp_dotAll;

  function requireEs_regexp_dotAll () {
  	if (hasRequiredEs_regexp_dotAll) return es_regexp_dotAll;
  	hasRequiredEs_regexp_dotAll = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  	var classof = requireClassofRaw();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var getInternalState = requireInternalState().get;

  	var RegExpPrototype = RegExp.prototype;
  	var $TypeError = TypeError;

  	// `RegExp.prototype.dotAll` getter
  	// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
  	if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  	  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
  	    configurable: true,
  	    get: function dotAll() {
  	      if (this === RegExpPrototype) return;
  	      // We can't use InternalStateModule.getterFor because
  	      // we don't add metadata for regexps created by a literal.
  	      if (classof(this) === 'RegExp') {
  	        return !!getInternalState(this).dotAll;
  	      }
  	      throw new $TypeError('Incompatible receiver, RegExp required');
  	    }
  	  });
  	}
  	return es_regexp_dotAll;
  }

  requireEs_regexp_dotAll();

  var es_regexp_sticky = {};

  var hasRequiredEs_regexp_sticky;

  function requireEs_regexp_sticky () {
  	if (hasRequiredEs_regexp_sticky) return es_regexp_sticky;
  	hasRequiredEs_regexp_sticky = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var MISSED_STICKY = requireRegexpStickyHelpers().MISSED_STICKY;
  	var classof = requireClassofRaw();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var getInternalState = requireInternalState().get;

  	var RegExpPrototype = RegExp.prototype;
  	var $TypeError = TypeError;

  	// `RegExp.prototype.sticky` getter
  	// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
  	if (DESCRIPTORS && MISSED_STICKY) {
  	  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
  	    configurable: true,
  	    get: function sticky() {
  	      if (this === RegExpPrototype) return;
  	      // We can't use InternalStateModule.getterFor because
  	      // we don't add metadata for regexps created by a literal.
  	      if (classof(this) === 'RegExp') {
  	        return !!getInternalState(this).sticky;
  	      }
  	      throw new $TypeError('Incompatible receiver, RegExp required');
  	    }
  	  });
  	}
  	return es_regexp_sticky;
  }

  requireEs_regexp_sticky();

  var es_regexp_toString = {};

  var hasRequiredEs_regexp_toString;

  function requireEs_regexp_toString () {
  	if (hasRequiredEs_regexp_toString) return es_regexp_toString;
  	hasRequiredEs_regexp_toString = 1;
  	var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  	var defineBuiltIn = requireDefineBuiltIn();
  	var anObject = requireAnObject();
  	var $toString = requireToString();
  	var fails = requireFails();
  	var getRegExpFlags = requireRegexpGetFlags();

  	var TO_STRING = 'toString';
  	var RegExpPrototype = RegExp.prototype;
  	var nativeToString = RegExpPrototype[TO_STRING];

  	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
  	// FF44- RegExp#toString has a wrong name
  	var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

  	// `RegExp.prototype.toString` method
  	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  	if (NOT_GENERIC || INCORRECT_NAME) {
  	  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
  	    var R = anObject(this);
  	    var pattern = $toString(R.source);
  	    var flags = $toString(getRegExpFlags(R));
  	    return '/' + pattern + '/' + flags;
  	  }, { unsafe: true });
  	}
  	return es_regexp_toString;
  }

  requireEs_regexp_toString();

  var es_string_replace = {};

  var getSubstitution;
  var hasRequiredGetSubstitution;

  function requireGetSubstitution () {
  	if (hasRequiredGetSubstitution) return getSubstitution;
  	hasRequiredGetSubstitution = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toObject = requireToObject();

  	var floor = Math.floor;
  	var charAt = uncurryThis(''.charAt);
  	var replace = uncurryThis(''.replace);
  	var stringSlice = uncurryThis(''.slice);
  	// eslint-disable-next-line redos/no-vulnerable -- safe
  	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  	// `GetSubstitution` abstract operation
  	// https://tc39.es/ecma262/#sec-getsubstitution
  	getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
  	  var tailPos = position + matched.length;
  	  var m = captures.length;
  	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  	  if (namedCaptures !== undefined) {
  	    namedCaptures = toObject(namedCaptures);
  	    symbols = SUBSTITUTION_SYMBOLS;
  	  }
  	  return replace(replacement, symbols, function (match, ch) {
  	    var capture;
  	    switch (charAt(ch, 0)) {
  	      case '$': return '$';
  	      case '&': return matched;
  	      case '`': return stringSlice(str, 0, position);
  	      case "'": return stringSlice(str, tailPos);
  	      case '<':
  	        capture = namedCaptures[stringSlice(ch, 1, -1)];
  	        break;
  	      default: // \d\d?
  	        var n = +ch;
  	        if (n === 0) return match;
  	        if (n > m) {
  	          var f = floor(n / 10);
  	          if (f === 0) return match;
  	          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
  	          return match;
  	        }
  	        capture = captures[n - 1];
  	    }
  	    return capture === undefined ? '' : capture;
  	  });
  	};
  	return getSubstitution;
  }

  var hasRequiredEs_string_replace;

  function requireEs_string_replace () {
  	if (hasRequiredEs_string_replace) return es_string_replace;
  	hasRequiredEs_string_replace = 1;
  	var apply = requireFunctionApply();
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var fails = requireFails();
  	var anObject = requireAnObject();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var getMethod = requireGetMethod();
  	var getSubstitution = requireGetSubstitution();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var regExpExec = requireRegexpExecAbstract();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var REPLACE = wellKnownSymbol('replace');
  	var max = Math.max;
  	var min = Math.min;
  	var concat = uncurryThis([].concat);
  	var push = uncurryThis([].push);
  	var stringIndexOf = uncurryThis(''.indexOf);
  	var stringSlice = uncurryThis(''.slice);

  	var maybeToString = function (it) {
  	  return it === undefined ? it : String(it);
  	};

  	// IE <= 11 replaces $0 with the whole match, as if it was $&
  	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  	var REPLACE_KEEPS_$0 = (function () {
  	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  	  return 'a'.replace(/./, '$0') === '$0';
  	})();

  	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  	  if (/./[REPLACE]) {
  	    return /./[REPLACE]('a', '$0') === '';
  	  }
  	  return false;
  	})();

  	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  	  var re = /./;
  	  re.exec = function () {
  	    var result = [];
  	    result.groups = { a: '7' };
  	    return result;
  	  };
  	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  	  return ''.replace(re, '$<a>') !== '7';
  	});

  	// @@replace logic
  	fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  	  return [
  	    // `String.prototype.replace` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.replace
  	    function replace(searchValue, replaceValue) {
  	      var O = requireObjectCoercible(this);
  	      var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined;
  	      return replacer
  	        ? call(replacer, searchValue, O, replaceValue)
  	        : call(nativeReplace, toString(O), searchValue, replaceValue);
  	    },
  	    // `RegExp.prototype[@@replace]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  	    function (string, replaceValue) {
  	      var rx = anObject(this);
  	      var S = toString(string);

  	      var functionalReplace = isCallable(replaceValue);
  	      if (!functionalReplace) replaceValue = toString(replaceValue);
  	      var flags = toString(getRegExpFlags(rx));

  	      if (
  	        typeof replaceValue == 'string' &&
  	        !~stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) &&
  	        !~stringIndexOf(replaceValue, '$<') &&
  	        !~stringIndexOf(flags, 'y')
  	      ) {
  	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
  	        if (res.done) return res.value;
  	      }

  	      var global = !!~stringIndexOf(flags, 'g');
  	      var fullUnicode;
  	      if (global) {
  	        fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
  	        rx.lastIndex = 0;
  	      }

  	      var results = [];
  	      var result;
  	      while (true) {
  	        result = regExpExec(rx, S);
  	        if (result === null) break;

  	        push(results, result);
  	        if (!global) break;

  	        var matchStr = toString(result[0]);
  	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
  	      }

  	      var accumulatedResult = '';
  	      var nextSourcePosition = 0;
  	      for (var i = 0; i < results.length; i++) {
  	        result = results[i];

  	        var matched = toString(result[0]);
  	        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
  	        var captures = [];
  	        var replacement;
  	        // NOTE: This is equivalent to
  	        //   captures = result.slice(1).map(maybeToString)
  	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
  	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
  	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
  	        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
  	        var namedCaptures = result.groups;
  	        if (functionalReplace) {
  	          var replacerArgs = concat([matched], captures, position, S);
  	          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
  	          replacement = toString(apply(replaceValue, undefined, replacerArgs));
  	        } else {
  	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
  	        }
  	        if (position >= nextSourcePosition) {
  	          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
  	          nextSourcePosition = position + matched.length;
  	        }
  	      }

  	      return accumulatedResult + stringSlice(S, nextSourcePosition);
  	    }
  	  ];
  	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
  	return es_string_replace;
  }

  requireEs_string_replace();

  /**
   * String manipulation utilities.
   *
   * This module provides utility functions for string processing, including:
   * - String formatting (sprintf)
   * - HTML escaping and unescaping
   * - Accent character normalization for search
   * - HTML tag removal
   * - CSS style string normalization
   *
   * @module utils/string
   */

  /**
   * Mapping of accented characters to their non-accented equivalents.
   * Used by normalizeAccent function to convert accented characters.
   *
   * @constant {Object.<string, string>}
   */
  var ACCENT_MAP = {
    // Nordic
    Æ: 'AE',
    æ: 'ae',
    Ø: 'O',
    ø: 'o',
    Å: 'A',
    å: 'a',
    // German
    Ä: 'A',
    ä: 'a',
    Ö: 'O',
    ö: 'o',
    Ü: 'U',
    ü: 'u',
    ẞ: 'SS',
    ß: 'ss',
    // French & others
    Œ: 'OE',
    œ: 'oe',
    // Slavic/Central European
    Č: 'C',
    č: 'c',
    Ć: 'C',
    ć: 'c',
    Š: 'S',
    š: 's',
    Ž: 'Z',
    ž: 'z',
    Ł: 'L',
    ł: 'l',
    Đ: 'Dj',
    đ: 'dj',
    Ń: 'N',
    ń: 'n',
    Ę: 'E',
    ę: 'e',
    Ą: 'A',
    ą: 'a',
    Ŕ: 'R',
    ŕ: 'r',
    // Turkish
    Ğ: 'G',
    ğ: 'g',
    İ: 'I',
    ı: 'i',
    Ş: 'S',
    ş: 's',
    // Romanian
    Ă: 'A',
    ă: 'a',
    Â: 'A',
    â: 'a',
    Î: 'I',
    î: 'i',
    Ș: 'S',
    ș: 's',
    Ț: 'T',
    ț: 't',
    // Greek
    Α: 'A',
    Ά: 'A',
    α: 'a',
    ά: 'a',
    Β: 'V',
    β: 'v',
    Γ: 'G',
    γ: 'g',
    Δ: 'D',
    δ: 'd',
    Ε: 'E',
    Έ: 'E',
    ε: 'e',
    έ: 'e',
    Ζ: 'Z',
    ζ: 'z',
    Η: 'I',
    Ή: 'I',
    η: 'i',
    ή: 'i',
    Ι: 'I',
    Ί: 'I',
    ι: 'i',
    ί: 'i',
    Κ: 'K',
    κ: 'k',
    Λ: 'L',
    λ: 'l',
    Μ: 'M',
    μ: 'm',
    Ν: 'N',
    ν: 'n',
    Ξ: 'X',
    ξ: 'x',
    Ο: 'O',
    Ό: 'O',
    ο: 'o',
    ό: 'o',
    Π: 'P',
    π: 'p',
    Ρ: 'R',
    ρ: 'r',
    Σ: 'S',
    σ: 's',
    ς: 's',
    Τ: 'T',
    τ: 't',
    Υ: 'Y',
    Ύ: 'Y',
    υ: 'y',
    ύ: 'y',
    Φ: 'F',
    φ: 'f',
    Χ: 'CH',
    χ: 'ch',
    Ψ: 'PS',
    ψ: 'ps',
    Ω: 'O',
    Ώ: 'O',
    ω: 'o',
    ώ: 'o'
  };

  /**
   * Simple string formatter that replaces %s placeholders with provided arguments.
   * Only supports %s placeholder. Returns empty string if any argument is undefined.
   *
   * @param {string} _str - The format string containing %s placeholders.
   * @param {...*} args - The values to replace the placeholders with.
   * @returns {string} The formatted string, or empty string if any argument is undefined.
   */
  function sprintf(_str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var flag = true;
    var i = 0;
    var str = _str.replace(/%s/g, function () {
      var arg = args[i++];
      if (typeof arg === 'undefined') {
        flag = false;
        return '';
      }
      return arg;
    });
    return flag ? str : '';
  }

  /**
   * Escapes apostrophes in a string by replacing them with HTML entity.
   *
   * @param {*} value - The value to escape.
   * @returns {string} The string with apostrophes escaped.
   */
  function escapeApostrophe(value) {
    return value.toString().replace(/'/g, '&#39;');
  }

  /**
   * Escapes HTML special characters in a string.
   *
   * @param {*} text - The text to escape.
   * @returns {*} The escaped text, or the original value if falsy.
   */
  function escapeHTML(text) {
    if (!text) {
      return text;
    }
    return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /**
   * Escapes HTML attribute value to prevent XSS attacks.
   * The order of replacements is important for attributes: & must be first,
   * then " and ' to prevent breaking out of the attribute.
   *
   * @param {*} text - The attribute value to escape.
   * @returns {*} The escaped text, or the original value if falsy.
   */
  function escapeAttr(text) {
    if (!text) {
      return text;
    }
    return text.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /**
   * Unescapes HTML entities in a string.
   *
   * @param {*} text - The text to unescape.
   * @returns {*} The unescaped text, or the original value if not a string or falsy.
   */
  function unescapeHTML(text) {
    if (typeof text !== 'string' || !text) {
      return text;
    }
    return text.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
  }

  /**
   * Removes HTML tags and HTML entities from a string.
   *
   * @param {*} text - The text to remove HTML from.
   * @returns {*} The text with HTML removed, or the original value if falsy.
   */
  function removeHTML(text) {
    if (!text) {
      return text;
    }
    return text.toString().replace(/(<([^>]+)>)/ig, '').replace(/&[#A-Za-z0-9]+;/gi, '').trim();
  }

  /**
   * Normalizes accented characters in a string to their non-accented equivalents.
   * Converts to lowercase and removes diacritical marks.
   *
   * @param {*} value - The value to normalize.
   * @returns {*} The normalized string, or the original value if not a string.
   */
  function normalizeAccent(value) {
    if (typeof value !== 'string') {
      return value;
    }
    var pattern = new RegExp("[".concat(Object.keys(ACCENT_MAP).join(''), "]"), 'g');
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(pattern, function (char) {
      return ACCENT_MAP[char];
    }).toLowerCase().trim();
  }

  /**
   * Normalizes a CSS style string by ensuring it ends with '; ' for proper concatenation.
   * Returns undefined if the input is empty or contains only whitespace.
   *
   * @param {string|undefined} style - The style string to normalize.
   * @returns {string|undefined} The normalized style string ending with '; ', or undefined.
   * @example
   * normalizeStyle('color: red')  // returns 'color: red; '
   * normalizeStyle('color: red;') // returns 'color: red; '
   * normalizeStyle('')            // returns undefined
   * normalizeStyle(undefined)     // returns undefined
   */
  function normalizeStyle(style) {
    if (!style) {
      return undefined;
    }
    var trimmed = style.trim();
    if (!trimmed) {
      return undefined;
    }
    return trimmed.replace(/;?\s*$/, '; ');
  }

  /**
   * Serializes a style specification into a CSS string.
   * Handles string, array, and object formats.
   *
   * @param {string|Array|Object.<string, string>} style - The style specification.
   * @returns {string} The CSS style string.
   * @example
   * serializeStyle('color: red')                          // 'color: red'
   * serializeStyle({ color: 'red', 'font-size': '12px' }) // 'color: red; font-size: 12px'
   * serializeStyle(['color: red', { 'font-weight': 'bold' }]) // 'color: red; font-weight: bold'
   */
  function serializeStyle(style) {
    if (typeof style === 'string') {
      return style;
    }
    if (Array.isArray(style)) {
      return style.filter(function (item) {
        return item !== null && item !== undefined;
      }).map(function (item) {
        return serializeStyle(item);
      }).filter(Boolean).join('; ');
    }
    if (_typeof(style) === 'object' && style !== null) {
      return Object.entries(style).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return "".concat(k, ": ").concat(v);
      }).join('; ');
    }
    return '';
  }

  var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    escapeApostrophe: escapeApostrophe,
    escapeAttr: escapeAttr,
    escapeHTML: escapeHTML,
    normalizeAccent: normalizeAccent,
    normalizeStyle: normalizeStyle,
    removeHTML: removeHTML,
    serializeStyle: serializeStyle,
    sprintf: sprintf,
    unescapeHTML: unescapeHTML
  });

  var es_array_indexOf = {};

  var hasRequiredEs_array_indexOf;

  function requireEs_array_indexOf () {
  	if (hasRequiredEs_array_indexOf) return es_array_indexOf;
  	hasRequiredEs_array_indexOf = 1;
  	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var $indexOf = requireArrayIncludes().indexOf;
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();

  	var nativeIndexOf = uncurryThis([].indexOf);

  	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  	var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  	// `Array.prototype.indexOf` method
  	// https://tc39.es/ecma262/#sec-array.prototype.indexof
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
  	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
  	    return NEGATIVE_ZERO
  	      // convert -0 to +0
  	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
  	      : $indexOf(this, searchElement, fromIndex);
  	  }
  	});
  	return es_array_indexOf;
  }

  requireEs_array_indexOf();

  var es_string_startsWith = {};

  var hasRequiredEs_string_startsWith;

  function requireEs_string_startsWith () {
  	if (hasRequiredEs_string_startsWith) return es_string_startsWith;
  	hasRequiredEs_string_startsWith = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  	var IS_PURE = requireIsPure();

  	var stringSlice = uncurryThis(''.slice);
  	var min = Math.min;

  	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  	// https://github.com/zloirock/core-js/pull/702
  	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  	  return descriptor && !descriptor.writable;
  	}();

  	// `String.prototype.startsWith` method
  	// https://tc39.es/ecma262/#sec-string.prototype.startswith
  	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  	  startsWith: function startsWith(searchString /* , position = 0 */) {
  	    var that = toString(requireObjectCoercible(this));
  	    notARegExp(searchString);
  	    var search = toString(searchString);
  	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
  	    return stringSlice(that, index, index + search.length) === search;
  	  }
  	});
  	return es_string_startsWith;
  }

  requireEs_string_startsWith();

  /**
   * Bootstrap Table DOM Manipulation Utility Library
   * Provides jQuery-style DOM manipulation APIs using native JavaScript
   *
   * Security Notice:
   * - The `create()` method uses innerHTML to parse HTML strings. Always sanitize user input
   *   before passing it to create() to prevent XSS attacks.
   * - The `html()` method sets innerHTML directly. Use the `text()` method for user-provided content.
   * - The `attr()` method allows setting arbitrary attributes including event handlers.
   *   Avoid setting event handler attributes (onclick, onerror, etc.) with user-controlled data.
   */
  var DOMHelper = /*#__PURE__*/function () {
    function DOMHelper() {
      _classCallCheck(this, DOMHelper);
    }
    return _createClass(DOMHelper, null, [{
      key: "$",
      value:
      /**
       * Element selector
       * @param {string|Element} selector - CSS selector or DOM element
       * @param {Element} context - Search context, defaults to document
       * @returns {Element|null} First matched element
       */
      function $(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
        if (typeof selector === 'string') {
          return context.querySelector(selector);
        }
        if (selector instanceof Element) {
          return selector;
        }
        return null;
      }

      /**
       * Element selector (multiple)
       * @param {string|Element|NodeList} selector - CSS selector, DOM element, or NodeList
       * @param {Element} context - Search context, defaults to document
       * @returns {Element[]} Array of all matched elements. Note: if selector is an Element, returns [Element]
       */
    }, {
      key: "$$",
      value: function $$(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
        if (typeof selector === 'string') {
          return Array.from(context.querySelectorAll(selector));
        }
        if (selector instanceof NodeList) {
          return Array.from(selector);
        }
        if (selector instanceof Element) {
          return [selector];
        }
        return [];
      }

      /**
       * Create DOM element
       * @param {string} html - HTML string. Note: This method uses innerHTML and can execute scripts.
       *                        Always sanitize user input before passing it to this method.
       * @returns {Element|null} Created DOM element. Returns null if html is empty, not a string,
       *                         or contains only whitespace.
       */
    }, {
      key: "create",
      value: function create(html) {
        if (typeof html !== 'string') return null;
        var trimmed = html.trim();
        if (!trimmed) return null;
        var template = document.createElement('template');
        template.innerHTML = trimmed;
        return template.content.firstChild;
      }

      /**
       * Add CSS class
       * @param {Element|string} element - DOM element or selector
       * @param {string} className - Class name to add (space-separated for multiple classes)
       * @returns {Element|null} The element itself
       */
    }, {
      key: "addClass",
      value: function addClass(element, className) {
        var _element$classList;
        if (typeof element === 'string') element = this.$(element);
        if (!element || !element.classList) return element;
        if (!className) return element;
        var classes = className.split(' ').filter(function (c) {
          return c;
        });
        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));
        return element;
      }

      /**
       * Remove CSS class
       * @param {Element|string} element - DOM element or selector
       * @param {string} className - Class name to remove (space-separated for multiple classes)
       * @returns {Element|null} The element itself
       */
    }, {
      key: "removeClass",
      value: function removeClass(element, className) {
        var _element$classList2;
        if (typeof element === 'string') element = this.$(element);
        if (!element || !element.classList) return element;
        if (!className) return element;
        var classes = className.split(' ').filter(function (c) {
          return c;
        });
        (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(classes));
        return element;
      }

      /**
       * Toggle CSS class
       * @param {Element|string} element - DOM element or selector
       * @param {string} className - Class name to toggle (space-separated for multiple classes)
       * @returns {Element|null} The element itself
       */
    }, {
      key: "toggleClass",
      value: function toggleClass(element, className) {
        if (typeof element === 'string') element = this.$(element);
        if (!element || !element.classList) return element;
        if (!className) return element;
        var classes = className.split(' ').filter(function (c) {
          return c;
        });
        classes.forEach(function (cls) {
          return element.classList.toggle(cls);
        });
        return element;
      }

      /**
       * Check if element has CSS class
       * @param {Element|string} element - DOM element or selector
       * @param {string} className - Class name to check
       * @returns {boolean} Whether the class exists
       */
    }, {
      key: "hasClass",
      value: function hasClass(element, className) {
        if (typeof element === 'string') element = this.$(element);
        if (!element || !element.classList) return false;
        if (!className) return false;
        return element.classList.contains(className);
      }

      /**
       * Get or set attribute
       * @param {Element|string} element - DOM element or selector
       * @param {string} name - Attribute name. Warning: Avoid setting event handler attributes
       *                        (onclick, onerror, etc.) with user-controlled data to prevent XSS.
       * @param {string} [value] - Attribute value (omit to get)
       * @returns {Element|null} Element when setting, or string|null when getting attribute
       */
    }, {
      key: "attr",
      value: function attr(element, name, value) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return value === undefined ? null : element;
        if (value === undefined) {
          return element.getAttribute(name);
        }
        element.setAttribute(name, value);
        return element;
      }

      /**
       * Remove attribute
       * @param {Element|string} element - DOM element or selector
       * @param {string} name - Attribute name
       * @returns {Element|null} The element itself
       */
    }, {
      key: "removeAttr",
      value: function removeAttr(element, name) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return element;
        element.removeAttribute(name);
        return element;
      }

      /**
       * Get or set data attribute
       * @param {Element|string} element - DOM element or selector
       * @param {string} key - Data key name
       * @param {string} [value] - Data value (omit to get)
       * @returns {(string|undefined) when getting (value omitted); (Element|null|undefined) when setting (value provided)}
       * Returns the data attribute value (string or undefined) when getting, or the element (or null/undefined if not found) when setting.
       */
    }, {
      key: "data",
      value: function data(element, key, value) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return value === undefined ? undefined : element;
        if (value === undefined) {
          return element.dataset[key];
        }
        element.dataset[key] = value;
        return element;
      }

      /**
       * Append child element
       * @param {Element|string} parent - Parent element or selector
       * @param {Element|string} child - Child element or HTML string
       * @returns {Element|null} Parent element
       */
    }, {
      key: "append",
      value: function append(parent, child) {
        if (typeof parent === 'string') parent = this.$(parent);
        if (typeof child === 'string') child = this.create(child);
        if (parent && child) {
          parent.appendChild(child);
        }
        return parent;
      }

      /**
       * Prepend child element
       * @param {Element|string} parent - Parent element or selector
       * @param {Element|string} child - Child element or HTML string
       * @returns {Element|null} Parent element
       */
    }, {
      key: "prepend",
      value: function prepend(parent, child) {
        if (typeof parent === 'string') parent = this.$(parent);
        if (typeof child === 'string') child = this.create(child);
        if (parent && child) {
          parent.insertBefore(child, parent.firstChild);
        }
        return parent;
      }

      /**
       * Insert element after target
       * @param {Element|string} newElement - Element to insert
       * @param {Element|string} targetElement - Target element
       * @returns {Element|null} Inserted element
       */
    }, {
      key: "insertAfter",
      value: function insertAfter(newElement, targetElement) {
        if (typeof targetElement === 'string') targetElement = this.$(targetElement);
        if (typeof newElement === 'string') newElement = this.create(newElement);
        if (targetElement && newElement && targetElement.parentNode) {
          targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
        return newElement;
      }

      /**
       * Insert element before target
       * @param {Element|string} newElement - Element to insert
       * @param {Element|string} targetElement - Target element
       * @returns {Element|null} Inserted element
       */
    }, {
      key: "insertBefore",
      value: function insertBefore(newElement, targetElement) {
        if (typeof targetElement === 'string') targetElement = this.$(targetElement);
        if (typeof newElement === 'string') newElement = this.create(newElement);
        if (targetElement && newElement && targetElement.parentNode) {
          targetElement.parentNode.insertBefore(newElement, targetElement);
        }
        return newElement;
      }

      /**
       * Find child elements
       * @param {Element|string} element - Parent element or selector
       * @param {string} selector - CSS selector
       * @returns {Element[]} Array of matched child elements
       */
    }, {
      key: "find",
      value: function find(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return [];
        return Array.from(element.querySelectorAll(selector));
      }

      /**
       * Find first matching child element
       * @param {Element|string} element - Parent element or selector
       * @param {string} selector - CSS selector
       * @returns {Element|null} First matched child element
       */
    }, {
      key: "findFirst",
      value: function findFirst(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return null;
        return element.querySelector(selector);
      }

      /**
       * Get or set style
       * @param {Element|string} element - DOM element or selector
       * @param {string|Object} property - Property name or property object
       * @param {string} [value] - Style value (when property is string)
       * @returns {Element|string|null} Element when setting, style value when getting
       */
    }, {
      key: "css",
      value: function css(element, property, value) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) {
          return null;
        }
        if (_typeof(property) === 'object') {
          // Batch set styles
          Object.assign(element.style, property);
          return element;
        }
        if (value === undefined) {
          // Get style
          return getComputedStyle(element)[property];
        }
        // Set style
        element.style[property] = value;
        return element;
      }

      /**
       * Get element width
       * @param {Element|string} element - DOM element or selector
       * @returns {number} Element width
       */
    }, {
      key: "width",
      value: function width(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return 0;
        return element.offsetWidth;
      }

      /**
       * Get element height
       * @param {Element|string} element - DOM element or selector
       * @returns {number} Element height
       */
    }, {
      key: "height",
      value: function height(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return 0;
        return element.offsetHeight;
      }

      /**
       * Get element outer width (including border, optionally including margin)
       * @param {Element|string} element - DOM element or selector
       * @param {boolean} [includeMargin=false] - Whether to include margin
       * @returns {number} Element outer width
       */
    }, {
      key: "outerWidth",
      value: function outerWidth(element) {
        var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (typeof element === 'string') element = this.$(element);
        if (!element) return 0;
        var width = element.offsetWidth;
        if (includeMargin) {
          var style = getComputedStyle(element);
          var marginLeft = parseInt(style.marginLeft, 10) || 0;
          var marginRight = parseInt(style.marginRight, 10) || 0;
          width += marginLeft + marginRight;
        }
        return width;
      }

      /**
       * Get element outer height (including border, optionally including margin)
       * @param {Element|string} element - DOM element or selector
       * @param {boolean} [includeMargin=false] - Whether to include margin
       * @returns {number} Element outer height
       */
    }, {
      key: "outerHeight",
      value: function outerHeight(element) {
        var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (typeof element === 'string') element = this.$(element);
        if (!element) return 0;
        var height = element.offsetHeight;
        if (includeMargin) {
          var style = getComputedStyle(element);
          var marginTop = parseInt(style.marginTop, 10) || 0;
          var marginBottom = parseInt(style.marginBottom, 10) || 0;
          height += marginTop + marginBottom;
        }
        return height;
      }

      /**
       * Get or set element value
       * @param {Element|string} element - DOM element or selector
       * @param {string} [value] - Value (omit to get)
       * @returns {Element|string|null} Element when setting, current value when getting
       */
    }, {
      key: "val",
      value: function val(element, value) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return value === undefined ? null : element;
        if (value === undefined) {
          return element.value;
        }
        element.value = value;
        return element;
      }

      /**
       * Get or set HTML content
       * @param {Element|string} element - DOM element or selector
       * @param {string} [content] - HTML content (omit to get). Warning: This method uses innerHTML
       *                             and can execute scripts. Use text() for user-provided content.
       * @returns {Element|string|null} Element when setting, HTML content when getting
       */
    }, {
      key: "html",
      value: function html(element, content) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return content === undefined ? null : element;
        if (content === undefined) {
          return element.innerHTML;
        }
        element.innerHTML = content;
        return element;
      }

      /**
       * Get or set text content
       * @param {Element|string} element - DOM element or selector
       * @param {string} [content] - Text content (omit to get)
       * @returns {Element|string|null} Element when setting, text content when getting
       */
    }, {
      key: "text",
      value: function text(element, content) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return content === undefined ? null : element;
        if (content === undefined) {
          return element.textContent;
        }
        element.textContent = content;
        return element;
      }

      /**
       * Remove element
       * @param {Element|string} element - DOM element or selector
       * @returns {Element|null} Removed element
       */
    }, {
      key: "remove",
      value: function remove(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element || !element.parentNode) return element;
        element.parentNode.removeChild(element);
        return element;
      }

      /**
       * Empty element content
       * @param {Element|string} element - DOM element or selector
       * @returns {Element|null} Emptied element
       */
    }, {
      key: "empty",
      value: function empty(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return element;
        element.innerHTML = '';
        return element;
      }

      /**
       * Iterate over element collection
       * @param {Element[]|NodeList|string} elements - Element collection or selector
       * @param {Function} callback - Callback function with params (index, element)
       * @returns {Element[]} Element collection
       */
    }, {
      key: "each",
      value: function each(elements, callback) {
        if (typeof elements === 'string') {
          elements = this.$$(elements);
        } else if (elements instanceof NodeList) {
          elements = Array.from(elements);
        } else if (!Array.isArray(elements)) {
          elements = [elements];
        }
        elements.forEach(function (element, index) {
          callback.call(element, index, element);
        });
        return elements;
      }

      /**
       * Get parent element
       * @param {Element|string} element - DOM element or selector
       * @param {string} [selector] - Parent element selector (optional)
       * @returns {Element|null} Parent element
       */
    }, {
      key: "parent",
      value: function parent(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return null;
        var parent = element.parentElement;
        if (selector) {
          while (parent && !parent.matches(selector)) {
            parent = parent.parentElement;
          }
        }
        return parent;
      }

      /**
       * Get child elements
       * @param {Element|string} element - DOM element or selector
       * @param {string} [selector] - Child element selector (optional)
       * @returns {Element[]} Array of child elements
       */
    }, {
      key: "children",
      value: function children(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return [];
        var children = Array.from(element.children);
        if (selector) {
          children = children.filter(function (child) {
            return child.matches(selector);
          });
        }
        return children;
      }

      /**
       * Get next sibling element
       * @param {Element|string} element - DOM element or selector
       * @param {string} [selector] - Sibling element selector (optional)
       * @returns {Element|null} Next sibling element
       */
    }, {
      key: "next",
      value: function next(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return null;
        var next = element.nextElementSibling;
        if (selector) {
          while (next && !next.matches(selector)) {
            next = next.nextElementSibling;
          }
        }
        return next;
      }

      /**
       * Get previous sibling element
       * @param {Element|string} element - DOM element or selector
       * @param {string} [selector] - Sibling element selector (optional)
       * @returns {Element|null} Previous sibling element
       */
    }, {
      key: "prev",
      value: function prev(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return null;
        var prev = element.previousElementSibling;
        if (selector) {
          while (prev && !prev.matches(selector)) {
            prev = prev.previousElementSibling;
          }
        }
        return prev;
      }

      /**
       * Get element position relative to document
       * @param {Element|string} element - DOM element or selector
       * @returns {Object} Position info {top, left, width, height}
       */
    }, {
      key: "offset",
      value: function offset(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
        var rect = element.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height
        };
      }

      /**
       * Get element position relative to parent
       * @param {Element|string} element - DOM element or selector
       * @returns {Object} Position info {top, left}
       */
    }, {
      key: "position",
      value: function position(element) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return {
          top: 0,
          left: 0
        };
        return {
          top: element.offsetTop,
          left: element.offsetLeft
        };
      }

      /**
       * Check if element matches selector
       * @param {Element|string} element - DOM element or selector
       * @param {string} selector - CSS selector
       * @returns {boolean} Whether it matches
       */
    }, {
      key: "is",
      value: function is(element, selector) {
        if (typeof element === 'string') element = this.$(element);
        if (!element) return false;
        return element.matches(selector);
      }
    }]);
  }(); // Export DOMHelper class

  /**
   * DOM manipulation utility functions.
   *
   * This module provides helper functions for DOM manipulation using native JavaScript,
   * including scrollbar width calculation, class name conversion, style parsing,
   * h() function for element creation, and HTML-to-DOM conversion.
   *
   * Note: For a full jQuery-like DOM manipulation library, see src/helpers/dom.js
   *
   * @module utils/dom
   */

  var cachedWidth;

  /**
   * Gets the width of the browser scrollbar.
   * The result is cached after the first call for performance.
   *
   * @returns {number} The width of the scrollbar in pixels.
   */
  function getScrollBarWidth() {
    if (cachedWidth === undefined) {
      var inner = DOMHelper.create('<div class="fixed-table-scroll-inner"></div>');
      var outer = DOMHelper.create('<div class="fixed-table-scroll-outer"></div>');
      DOMHelper.append(outer, inner);
      DOMHelper.append(document.body, outer);
      var w1 = inner.offsetWidth;
      DOMHelper.css(outer, 'overflow', 'scroll');
      var w2 = inner.offsetWidth;
      if (w1 === w2) {
        w2 = outer.clientWidth;
      }
      DOMHelper.remove(outer);
      cachedWidth = w1 - w2;
    }
    return cachedWidth;
  }

  /**
   * Converts a class specification to a string.
   * Handles string, array, and object formats.
   *
   * @param {string|Array|Object.<string, boolean>} class_ - The class specification.
   * @returns {string} The class names as a space-separated string.
   */
  function classToString(class_) {
    if (typeof class_ === 'string') {
      return class_;
    }
    if (Array.isArray(class_)) {
      return class_.map(function (x) {
        return classToString(x);
      }).filter(function (x) {
        return x;
      }).join(' ');
    }
    if (class_ && _typeof(class_) === 'object') {
      return Object.entries(class_).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return v ? k : '';
      }).filter(function (x) {
        return x;
      }).join(' ');
    }
    return '';
  }

  /**
   * Parses and applies CSS styles to a DOM element.
   * Supports string, array, and object formats. Handles !important priority.
   *
   * @param {HTMLElement} dom - The DOM element to apply styles to.
   * @param {string|Array|Object.<string, string>} style - The style(s) to apply.
   * @returns {HTMLElement} The DOM element with styles applied.
   */
  function parseStyle(dom, style) {
    if (!style) {
      return dom;
    }

    // Helper function to handle !important priority
    var IMPORTANT_PRIORITY_REGEX = /\s*!important\s*$/i;
    var parsePriority = function parsePriority(value) {
      if (typeof value === 'string' && IMPORTANT_PRIORITY_REGEX.test(value)) {
        return {
          value: value.replace(IMPORTANT_PRIORITY_REGEX, ''),
          priority: 'important'
        };
      }
      return {
        value: value,
        priority: ''
      };
    };
    if (typeof style === 'string') {
      style.split(';').forEach(function (i) {
        var index = i.indexOf(':');
        if (index > 0) {
          var k = i.substring(0, index).trim();
          var v = i.substring(index + 1).trim();
          var _parsePriority = parsePriority(v),
            value = _parsePriority.value,
            priority = _parsePriority.priority;
          dom.style.setProperty(k, value, priority);
        }
      });
    } else if (Array.isArray(style)) {
      var _iterator = _createForOfIteratorHelper(style),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          parseStyle(dom, item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (_typeof(style) === 'object') {
      for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];
        var _parsePriority2 = parsePriority(v),
          value = _parsePriority2.value,
          priority = _parsePriority2.priority;
        dom.style.setProperty(k, value, priority);
      }
    }
    return dom;
  }

  /**
   * Creates a DOM element with attributes and children.
   * This function provides a shorthand syntax for creating DOM elements.
   *
   * @param {string|HTMLElement} element - The tag name or existing element.
   * @param {Object.<string, *>} [attrs={}] - The attributes to set on the element.
   * @param {Array.<HTMLElement|string>} [children=[]] - The children to append.
   * @returns {HTMLElement} The created or modified element.
   */
  function h(element, attrs, children) {
    var el = element instanceof HTMLElement ? element : document.createElement(element);
    var _attrs = attrs || {};
    var _children = children || [];

    // default attributes
    if (el.tagName === 'A') {
      el.href = 'javascript:';
    }
    for (var _i2 = 0, _Object$entries2 = Object.entries(_attrs); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        k = _Object$entries2$_i[0],
        v = _Object$entries2$_i[1];
      if (v === undefined) {
        continue;
      }
      if (['text', 'innerText'].includes(k)) {
        el.innerText = v;
      } else if (['html', 'innerHTML'].includes(k)) {
        el.innerHTML = v;
      } else if (k === 'children') {
        _children.push.apply(_children, _toConsumableArray(v));
      } else if (k === 'class') {
        el.setAttribute('class', classToString(v));
      } else if (k === 'style') {
        if (typeof v === 'string') {
          el.setAttribute('style', v);
        } else {
          parseStyle(el, v);
        }
      } else if (k.startsWith('@') || k.startsWith('on')) {
        // event handlers
        var event = k.startsWith('@') ? k.substring(1) : k.substring(2).toLowerCase();
        var args = Array.isArray(v) ? v : [v];
        el.addEventListener.apply(el, [event].concat(_toConsumableArray(args)));
      } else if (k.startsWith('.')) {
        // set property
        el[k.substring(1)] = v;
      } else {
        el.setAttribute(k, v);
      }
    }
    if (_children.length) {
      el.append.apply(el, _toConsumableArray(_children));
    }
    return el;
  }

  /**
   * Checks if a value is a DOM node or a jQuery-like object.
   * Uses duck typing to detect jQuery objects without direct dependency.
   *
   * Note: Strings are not considered DOM nodes. Use {@link htmlToNodes} to
   * convert HTML strings into DOM nodes.
   *
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a Node or jQuery-like object.
   */
  function isDomNode(value) {
    if (value instanceof Node) {
      return true;
    }
    // Duck typing for jQuery-like objects (check for 'jquery' property)
    return Boolean(value && _typeof(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && 'jquery' in value);
  }

  /**
   * Converts HTML to DOM nodes.
   * Uses duck typing to detect jQuery objects without direct dependency.
   *
   * @param {string|Node|Object} html - The HTML to convert. Can be a string, Node, or jQuery-like object.
   * @returns {NodeList|Array<Node>} The DOM nodes.
   */
  function htmlToNodes(html) {
    // Duck typing check for jQuery objects (check for 'jquery' property)
    if (html && _typeof(html) === 'object' && 'jquery' in html) {
      return Array.from(html);
    }
    if (html instanceof Node) {
      return [html];
    }
    if (typeof html !== 'string') {
      html = new String(html).toString();
    }
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.childNodes;
  }

  var dom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    classToString: classToString,
    getScrollBarWidth: getScrollBarWidth,
    h: h,
    htmlToNodes: htmlToNodes,
    isDomNode: isDomNode,
    parseStyle: parseStyle
  });

  var es_json_stringify = {};

  var isRawJson;
  var hasRequiredIsRawJson;

  function requireIsRawJson () {
  	if (hasRequiredIsRawJson) return isRawJson;
  	hasRequiredIsRawJson = 1;
  	var isObject = requireIsObject();
  	var getInternalState = requireInternalState().get;

  	isRawJson = function isRawJSON(O) {
  	  if (!isObject(O)) return false;
  	  var state = getInternalState(O);
  	  return !!state && state.type === 'RawJSON';
  	};
  	return isRawJson;
  }

  var thisNumberValue;
  var hasRequiredThisNumberValue;

  function requireThisNumberValue () {
  	if (hasRequiredThisNumberValue) return thisNumberValue;
  	hasRequiredThisNumberValue = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	// `thisNumberValue` abstract operation
  	// https://tc39.es/ecma262/#sec-thisnumbervalue
  	thisNumberValue = uncurryThis(1.1.valueOf);
  	return thisNumberValue;
  }

  var nativeRawJson;
  var hasRequiredNativeRawJson;

  function requireNativeRawJson () {
  	if (hasRequiredNativeRawJson) return nativeRawJson;
  	hasRequiredNativeRawJson = 1;
  	/* eslint-disable es/no-json -- safe */
  	var fails = requireFails();

  	nativeRawJson = !fails(function () {
  	  var unsafeInt = '9007199254740993';
  	  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  	  var raw = JSON.rawJSON(unsafeInt);
  	  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  	  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
  	});
  	return nativeRawJson;
  }

  var hasRequiredEs_json_stringify;

  function requireEs_json_stringify () {
  	if (hasRequiredEs_json_stringify) return es_json_stringify;
  	hasRequiredEs_json_stringify = 1;
  	var $ = require_export();
  	var getBuiltIn = requireGetBuiltIn();
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isArray = requireIsArray();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var create = requireObjectCreate();
  	var isRawJSON = requireIsRawJson();
  	var isSymbol = requireIsSymbol();
  	var classof = requireClassofRaw();
  	var thisNumberValue = requireThisNumberValue();
  	var includes = requireArrayIncludes().includes;
  	var hasOwn = requireHasOwnProperty();
  	var toString = requireToString();
  	var parseJSONString = requireParseJsonString();
  	var uid = requireUid();
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  	var NATIVE_RAW_JSON = requireNativeRawJson();

  	var $String = String;
  	var $TypeError = TypeError;
  	var $stringify = getBuiltIn('JSON', 'stringify');
  	var $BigInt = getBuiltIn('BigInt');
  	var stringValueOf = uncurryThis(''.valueOf);
  	var booleanValueOf = uncurryThis(true.valueOf);
  	var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
  	var exec = uncurryThis(/./.exec);
  	var charAt = uncurryThis(''.charAt);
  	var charCodeAt = uncurryThis(''.charCodeAt);
  	var replace = uncurryThis(''.replace);
  	var slice = uncurryThis(''.slice);
  	var push = uncurryThis([].push);
  	var pop = uncurryThis([].pop);
  	var numberToString = uncurryThis(1.1.toString);

  	var surrogates = /[\uD800-\uDFFF]/g;
  	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
  	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
  	var digits = /^\d+$/;

  	// a placeholder of a raw JSON value
  	var RAW_MARK = uid();
  	// a prefix of keys of a reordered object, see `createOrderedObject`
  	var KEY_MARK = uid();
  	// the last key of a reordered object, marks the end of its serialization
  	var END_MARK = uid();
  	var RAW_MARK_LENGTH = RAW_MARK.length;
  	var KEY_MARK_LENGTH = KEY_MARK.length;

  	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  	  var symbol = getBuiltIn('Symbol')('stringify detection');
  	  // MS Edge converts symbol values to JSON as {}
  	  return $stringify([symbol]) !== '[null]'
  	    // WebKit converts symbol values to JSON as null
  	    || $stringify({ a: symbol }) !== '{}'
  	    // V8 throws on boxed symbols
  	    || $stringify(Object(symbol)) !== '{}';
  	});

  	// https://github.com/tc39/proposal-well-formed-stringify
  	var ILL_FORMED_UNICODE = fails(function () {
  	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
  	    || $stringify('\uDEAD') !== '"\\udead"';
  	});

  	var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn('JSON', 'isRawJSON') : isRawJSON;

  	var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
  	  return $stringify(it, function (key, value) {
  	    var replaced = call(replacer, this, key, value);
  	    if (!isSymbol(replaced)) return replaced;
  	  }, space);
  	} : $stringify;

  	var fixIllFormedJSON = function (match, offset, string) {
  	  var prev = charAt(string, offset - 1);
  	  var next = charAt(string, offset + 1);
  	  if (
  	    (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next)) ||
  	    (exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev))
  	  ) {
  	    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  	  } return match;
  	};

  	// `PropertyList` of `JSON.stringify`
  	// https://tc39.es/ecma262/#sec-json.stringify
  	var getPropertyList = function (replacer) {
  	  if (!isArray(replacer)) return;
  	  var rawLength = replacer.length;
  	  var propertyList = [];
  	  // a null prototype object is used as a set of already added keys to keep the deduplication linear
  	  var addedKeys = create(null);
  	  for (var i = 0; i < rawLength; i++) {
  	    var element = replacer[i];
  	    var key;
  	    if (typeof element == 'string') key = element;
  	    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') key = toString(element);
  	    else continue;
  	    if (!hasOwn(addedKeys, key)) {
  	      addedKeys[key] = true;
  	      push(propertyList, key);
  	    }
  	  }
  	  return propertyList;
  	};

  	// values with such an internal slot are unwrapped by `SerializeJSONProperty` instead of being serialized as objects
  	var hasInternalSlot = function (valueOf, it) {
  	  try {
  	    valueOf(it);
  	    return true;
  	  } catch (error) {
  	    return false;
  	  }
  	};

  	// the slot check is expensive, so it's performed only for the kind reported by the value itself -
  	// a value lying about its kind via `Symbol.toStringTag` is serialized as an ordinary object
  	var isBoxedPrimitive = function (it) {
  	  var kind = classof(it);
  	  return (kind === 'Number' && hasInternalSlot(thisNumberValue, it))
  	    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
  	    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
  	    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
  	};

  	// only objects serialized by `SerializeJSONObject` are affected by the property list
  	var isSerializedAsObject = function (it) {
  	  if (!isObject(it) || isCallable(it) || isArray(it)) return false;
  	  try {
  	    return !isBoxedPrimitive(it);
  	  // `classof` reads `Symbol.toStringTag`, so a proxy could throw - it has no internal slots anyway
  	  } catch (error) {
  	    return true;
  	  }
  	};

  	// the engine unwraps it in the same order as it would read the original property,
  	// so the property is read lazily and `toJSON` is called once and with the original key
  	var createElementHolder = function (holder, key) {
  	  return {
  	    toJSON: function () {
  	      var element = holder[key];
  	      if (isObject(element) || typeof element == 'bigint') {
  	        var elementToJSON = element.toJSON;
  	        if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
  	      } return element;
  	    }
  	  };
  	};

  	// own keys of objects are sorted - integer-like keys are moved to the beginning,
  	// so such keys should be marked and restored in the serialized string
  	var getKeyPrefix = function (propertyList) {
  	  for (var i = 0, length = propertyList.length; i < length; i++) {
  	    if (exec(digits, propertyList[i])) return KEY_MARK;
  	  } return '';
  	};

  	// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
  	var createOrderedObject = function (value, propertyList, keyPrefix) {
  	  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
  	  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
  	  var ordered = create(null);
  	  for (var i = 0, length = propertyList.length; i < length; i++) {
  	    var key = propertyList[i];
  	    ordered[keyPrefix + key] = createElementHolder(value, key);
  	  }
  	  ordered[END_MARK] = null;
  	  return ordered;
  	};

  	// `JSON.stringify` method
  	// https://tc39.es/ecma262/#sec-json.stringify
  	// https://github.com/tc39/proposal-json-parse-with-source
  	if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  	  stringify: function stringify(text, replacer, space) {
  	    var replacerFunction = isCallable(replacer) ? replacer : undefined;
  	    var propertyList = replacerFunction ? undefined : getPropertyList(replacer);
  	    var keyPrefix = propertyList && getKeyPrefix(propertyList);
  	    var rawStrings = [];
  	    var openObjects = [];
  	    var parentOrdered = [];
  	    var currentOrdered;
  	    var marked = false;
  	    var root = true;

  	    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
  	      // some old implementations (like WebKit) could pass numbers as keys
  	      key = $String(key);

  	      if (propertyList) {
  	        if (key === END_MARK) {
  	          pop(openObjects);
  	          currentOrdered = pop(parentOrdered);
  	          return;
  	        }
  	        if (root) root = false;
  	        // the innermost reordered object already contains only keys of the property list and arrays are not
  	        // affected by it, the rest of objects (like objects with a fake `Symbol.toStringTag`) are filtered here
  	        else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
  	      } else if (replacerFunction) value = call(replacerFunction, this, key, value);

  	      if (isRawJSONValue(value)) {
  	        if (NATIVE_RAW_JSON) return value;
  	        marked = true;
  	        return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
  	      }

  	      if (propertyList && isSerializedAsObject(value)) {
  	        // reordered objects are new each time, so cycles should be detected before the engine does it
  	        if (includes(openObjects, value)) throw new $TypeError('Converting circular structure to JSON');
  	        var ordered = createOrderedObject(value, propertyList, keyPrefix);
  	        push(openObjects, value);
  	        push(parentOrdered, currentOrdered);
  	        currentOrdered = ordered;
  	        if (keyPrefix) marked = true;
  	        return ordered;
  	      }

  	      return value;
  	    }, space);

  	    if (typeof json != 'string') return json;

  	    if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);

  	    if (!marked) return json;

  	    var result = '';
  	    var length = json.length;

  	    for (var i = 0; i < length; i++) {
  	      var chr = charAt(json, i);
  	      if (chr === '"') {
  	        var end = parseJSONString(json, ++i).end - 1;
  	        var string = slice(json, i, end);
  	        if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
  	        else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
  	        else result += '"' + string + '"';
  	        i = end;
  	      } else result += chr;
  	    }

  	    return result;
  	  }
  	});
  	return es_json_stringify;
  }

  requireEs_json_stringify();

  var es_string_endsWith = {};

  var hasRequiredEs_string_endsWith;

  function requireEs_string_endsWith () {
  	if (hasRequiredEs_string_endsWith) return es_string_endsWith;
  	hasRequiredEs_string_endsWith = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  	var IS_PURE = requireIsPure();

  	var slice = uncurryThis(''.slice);
  	var min = Math.min;

  	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
  	// https://github.com/zloirock/core-js/pull/702
  	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  	  return descriptor && !descriptor.writable;
  	}();

  	// `String.prototype.endsWith` method
  	// https://tc39.es/ecma262/#sec-string.prototype.endswith
  	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
  	    var that = toString(requireObjectCoercible(this));
  	    notARegExp(searchString);
  	    var search = toString(searchString);
  	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
  	    var len = that.length;
  	    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
  	    return slice(that, end - search.length, end) === search;
  	  }
  	});
  	return es_string_endsWith;
  }

  requireEs_string_endsWith();

  /**
   * Table column and data processing utilities.
   *
   * This module provides utility functions for working with Bootstrap Table columns and data,
   * including field indexing, data attribute parsing, and conversion between DOM and data formats.
   *
   * @module utils/table-data
   */

  /**
   * Gets the title of a field from a list of column definitions.
   *
   * @param {Array.<Object.<string, *>>} list - The list of column definitions.
   * @param {string} value - The field name to look for.
   * @returns {string} The title of the field, or empty string if not found.
   */
  function getFieldTitle(list, value) {
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (item.field === value) {
          return item.title;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return '';
  }

  /**
   * Sets field indices for columns with colspan/rowspan support.
   * Modifies the column definitions in place to add fieldIndex and colspanIndex properties.
   *
   * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
   */
  function setFieldIndex(columns) {
    var totalCol = 0;
    var flag = [];
    var _iterator2 = _createForOfIteratorHelper(columns[0]),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var column = _step2.value;
        totalCol += +column.colspan || 1;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    for (var i = 0; i < columns.length; i++) {
      flag[i] = [];
      for (var j = 0; j < totalCol; j++) {
        flag[i][j] = false;
      }
    }
    for (var _i = 0; _i < columns.length; _i++) {
      var _iterator3 = _createForOfIteratorHelper(columns[_i]),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var r = _step3.value;
          var rowspan = +r.rowspan || 1;
          var colspan = +r.colspan || 1;
          var index = flag[_i].indexOf(false);
          r.colspanIndex = index;
          if (colspan === 1) {
            r.fieldIndex = index;
            // when field is undefined, use index instead
            if (typeof r.field === 'undefined') {
              r.field = index;
            }
          } else {
            r.colspanGroup = +r.colspan;
          }
          for (var _j = 0; _j < rowspan; _j++) {
            for (var k = 0; k < colspan; k++) {
              flag[_i + _j][index + k] = true;
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }

  /**
   * Updates field groups based on column visibility.
   * Modifies the column definitions in place to update colspan and visible properties.
   *
   * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
   * @param {Array.<Object.<string, *>>} fieldColumns - The field columns to update.
   */
  function updateFieldGroup(columns, fieldColumns) {
    var _ref;
    var allColumns = (_ref = []).concat.apply(_ref, _toConsumableArray(columns));
    var _iterator4 = _createForOfIteratorHelper(columns),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var c = _step4.value;
        var _iterator6 = _createForOfIteratorHelper(c),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var r = _step6.value;
            if (r.colspanGroup > 1) {
              var colspan = 0;
              var _loop = function _loop(i) {
                var underColumns = allColumns.filter(function (col) {
                  return col.fieldIndex === i;
                });
                var column = underColumns[underColumns.length - 1];
                if (!column) {
                  return 1; // continue
                }
                if (underColumns.length > 1) {
                  for (var j = 0; j < underColumns.length - 1; j++) {
                    underColumns[j].visible = column.visible;
                  }
                }
                if (column.visible) {
                  colspan++;
                }
              };
              for (var i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
                if (_loop(i)) continue;
              }
              r.colspan = colspan;
              r.visible = colspan > 0;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (columns.length < 2) {
      return;
    }
    var _iterator5 = _createForOfIteratorHelper(fieldColumns),
      _step5;
    try {
      var _loop2 = function _loop2() {
        var column = _step5.value;
        var sameColumns = allColumns.filter(function (col) {
          return col.fieldIndex === column.fieldIndex;
        });
        if (sameColumns.length > 1) {
          var _iterator7 = _createForOfIteratorHelper(sameColumns),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _c = _step7.value;
              _c.visible = column.visible;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      };
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  /**
   * Converts camelCase data attribute names to kebab-case.
   *
   * @param {Object.<string, *>} dataAttr - The data attributes object.
   * @returns {Object.<string, *>} The data attributes with kebab-case keys.
   */
  function getRealDataAttr(dataAttr) {
    for (var _i2 = 0, _Object$entries = Object.entries(dataAttr); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        attr = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
      if (auxAttr !== attr) {
        dataAttr[auxAttr] = value;
        delete dataAttr[attr];
      }
    }
    return dataAttr;
  }

  /**
   * Gets a field value from an item, supporting nested properties.
   *
   * @param {Object.<string, *>} item - The item to get the field from.
   * @param {string} field - The field name (supports dot notation for nested properties).
   * @param {boolean} escape - Whether to escape HTML in the returned value.
   * @param {boolean} [columnEscape=undefined] - Override for the escape parameter.
   * @returns {*} The field value, escaped if requested.
   */
  function getItemField(item, field, escape) {
    var columnEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    // use column escape if it is defined
    if (typeof columnEscape !== 'undefined') {
      escape = columnEscape;
    }
    if (typeof field !== 'string' || item.hasOwnProperty(field) || !field.includes('.')) {
      return escape ? escapeHTML(item[field]) : item[field];
    }
    var props = field.split('.');
    var value = item;
    var _iterator8 = _createForOfIteratorHelper(props),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var p = _step8.value;
        if (value === null || value === undefined) {
          return; // undefined
        }
        value = value[p];
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return escape ? escapeHTML(value) : value;
  }

  /**
   * Finds the index of an item in an array using deep equality.
   *
   * @param {Array.<*>} items - The array to search in.
   * @param {*} item - The item to find.
   * @returns {number} The index of the item, or -1 if not found.
   */
  function findIndex(items, item) {
    var _iterator9 = _createForOfIteratorHelper(items),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var it = _step9.value;
        if (JSON.stringify(it) === JSON.stringify(item)) {
          return items.indexOf(it);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return -1;
  }

  /**
   * Converts table rows (tr elements) to data array.
   * Preserves row and cell attributes including id, class, style, and data-* attributes.
   *
   * @param {Array.<Object.<string, *>>} columns - The column definitions.
   * @param {HTMLCollection|NodeList|Array<Element>} els - The tr elements.
   * @returns {Array.<Object.<string, *>>} The array of row data objects.
   */
  function trToData(columns, els) {
    var data = [];
    var m = [];
    var elsArray = Array.from(els);
    for (var y = 0; y < elsArray.length; y++) {
      var el = elsArray[y];
      var row = {};

      // save tr's id, class and data-* attributes
      row._id = DOMHelper.attr(el, 'id');
      row._class = DOMHelper.attr(el, 'class');
      row._data = getRealDataAttr(_objectSpread2({}, el.dataset));
      row._style = DOMHelper.attr(el, 'style');
      var cells = DOMHelper.children(el, 'td,th');
      for (var x = 0; x < cells.length; x++) {
        var cell = cells[x];
        var colspan = parseInt(DOMHelper.attr(cell, 'colspan'), 10) || 1;
        var rowspan = parseInt(DOMHelper.attr(cell, 'rowspan'), 10) || 1;
        var currentX = x;

        // skip already occupied cells in current row
        for (; m[y] && m[y][currentX]; currentX++) {
          // ignore
        }

        // mark matrix elements occupied by current cell with true
        for (var tx = currentX; tx < currentX + colspan; tx++) {
          for (var ty = y; ty < y + rowspan; ty++) {
            if (!m[ty]) {
              // fill missing rows
              m[ty] = [];
            }
            m[ty][tx] = true;
          }
        }
        var field = columns[currentX].field;
        row[field] = escapeApostrophe(DOMHelper.html(cell).trim());
        // save td's id, class and data-* attributes
        row["_".concat(field, "_id")] = DOMHelper.attr(cell, 'id');
        row["_".concat(field, "_class")] = DOMHelper.attr(cell, 'class');
        row["_".concat(field, "_rowspan")] = DOMHelper.attr(cell, 'rowspan');
        row["_".concat(field, "_colspan")] = DOMHelper.attr(cell, 'colspan');
        row["_".concat(field, "_title")] = DOMHelper.attr(cell, 'title');
        row["_".concat(field, "_data")] = getRealDataAttr(_objectSpread2({}, cell.dataset));
        row["_".concat(field, "_style")] = DOMHelper.attr(cell, 'style');
      }
      data.push(row);
    }
    return data;
  }

  /**
   * Checks if any row in the data has auto-merge cells (rowspan/colspan).
   *
   * @param {Array.<Object.<string, *>>} data - The data array to check.
   * @returns {boolean} True if any row has auto-merge cells, false otherwise.
   */
  function checkAutoMergeCells(data) {
    var _iterator0 = _createForOfIteratorHelper(data),
      _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
        var row = _step0.value;
        for (var _i3 = 0, _Object$keys = Object.keys(row); _i3 < _Object$keys.length; _i3++) {
          var key = _Object$keys[_i3];
          if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
            return true;
          }
        }
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return false;
  }

  /**
   * Checks if any row in the data has rowspan cells with a span greater than 1.
   *
   * @param {Array.<Object.<string, *>>} data - The data array to check.
   * @returns {boolean} True if any row has real rowspan merges, false otherwise.
   */
  function hasRowspanCells(data) {
    var _iterator1 = _createForOfIteratorHelper(data),
      _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
        var row = _step1.value;
        for (var _i4 = 0, _Object$keys2 = Object.keys(row); _i4 < _Object$keys2.length; _i4++) {
          var key = _Object$keys2[_i4];
          if (key.startsWith('_') && key.endsWith('_rowspan') && (+row[key] || 0) > 1) {
            return true;
          }
        }
      }
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
    return false;
  }

  /**
   * Flattens rowspan cells in the data by copying the cell value from the
   * rowspan parent row into all spanned child rows, so each row becomes
   * independent and can be sorted without breaking the table layout.
   *
   * @param {Array.<Object.<string, *>>} data - The data array to flatten.
   */
  function flattenRowspanCells(data) {
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      for (var _i5 = 0, _Object$keys3 = Object.keys(row); _i5 < _Object$keys3.length; _i5++) {
        var key = _Object$keys3[_i5];
        if (!key.startsWith('_') || !key.endsWith('_rowspan')) {
          continue;
        }
        var field = key.replace(/^_/, '').replace(/_rowspan$/, '');
        var rowspan = +row[key] || 1;
        if (rowspan <= 1) {
          continue;
        }
        var value = getItemField(row, field, false);
        var useFlatKey = row.hasOwnProperty(field);
        for (var j = 1; j < rowspan && i + j < data.length; j++) {
          var childRow = data[i + j];
          if (field.includes('.') && !useFlatKey) {
            var props = field.split('.');
            var target = childRow;
            for (var k = 0; k < props.length - 1; k++) {
              if (_typeof(target[props[k]]) !== 'object' || target[props[k]] === null) {
                target[props[k]] = {};
              }
              target = target[props[k]];
            }
            target[props[props.length - 1]] = value;
          } else {
            childRow[field] = value;
          }
          delete childRow["_".concat(field, "_rowspan")];
        }
        delete row[key];
      }
    }
  }

  var tableData = /*#__PURE__*/Object.freeze({
    __proto__: null,
    checkAutoMergeCells: checkAutoMergeCells,
    findIndex: findIndex,
    flattenRowspanCells: flattenRowspanCells,
    getFieldTitle: getFieldTitle,
    getItemField: getItemField,
    getRealDataAttr: getRealDataAttr,
    hasRowspanCells: hasRowspanCells,
    setFieldIndex: setFieldIndex,
    trToData: trToData,
    updateFieldGroup: updateFieldGroup
  });

  var es_string_match = {};

  var hasRequiredEs_string_match;

  function requireEs_string_match () {
  	if (hasRequiredEs_string_match) return es_string_match;
  	hasRequiredEs_string_match = 1;
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var getMethod = requireGetMethod();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var regExpExec = requireRegexpExecAbstract();

  	var stringIndexOf = uncurryThis(''.indexOf);

  	// @@match logic
  	fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  	  return [
  	    // `String.prototype.match` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.match
  	    function match(regexp) {
  	      var O = requireObjectCoercible(this);
  	      var matcher = isObject(regexp) ? getMethod(regexp, MATCH) : undefined;
  	      if (matcher) return call(matcher, regexp, O);
  	      var S = toString(O);
  	      return new RegExp(regexp)[MATCH](S);
  	    },
  	    // `RegExp.prototype[@@match]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  	    function (string) {
  	      var rx = anObject(this);
  	      var S = toString(string);
  	      var res = maybeCallNative(nativeMatch, rx, S);

  	      if (res.done) return res.value;

  	      var flags = toString(getRegExpFlags(rx));

  	      if (!~stringIndexOf(flags, 'g')) return regExpExec(rx, S);

  	      var fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
  	      rx.lastIndex = 0;
  	      var A = [];
  	      var n = 0;
  	      var result;
  	      while ((result = regExpExec(rx, S)) !== null) {
  	        var matchStr = toString(result[0]);
  	        A[n] = matchStr;
  	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
  	        n++;
  	      }
  	      return n === 0 ? null : A;
  	    }
  	  ];
  	});
  	return es_string_match;
  }

  requireEs_string_match();

  var es_string_search = {};

  var sameValue;
  var hasRequiredSameValue;

  function requireSameValue () {
  	if (hasRequiredSameValue) return sameValue;
  	hasRequiredSameValue = 1;
  	// `SameValue` abstract operation
  	// https://tc39.es/ecma262/#sec-samevalue
  	// eslint-disable-next-line es/no-object-is -- safe
  	sameValue = Object.is || function is(x, y) {
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
  	};
  	return sameValue;
  }

  var hasRequiredEs_string_search;

  function requireEs_string_search () {
  	if (hasRequiredEs_string_search) return es_string_search;
  	hasRequiredEs_string_search = 1;
  	var call = requireFunctionCall();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var sameValue = requireSameValue();
  	var toString = requireToString();
  	var getMethod = requireGetMethod();
  	var regExpExec = requireRegexpExecAbstract();

  	// @@search logic
  	fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  	  return [
  	    // `String.prototype.search` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.search
  	    function search(regexp) {
  	      var O = requireObjectCoercible(this);
  	      var searcher = isObject(regexp) ? getMethod(regexp, SEARCH) : undefined;
  	      if (searcher) return call(searcher, regexp, O);
  	      var S = toString(O);
  	      return new RegExp(regexp)[SEARCH](S);
  	    },
  	    // `RegExp.prototype[@@search]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
  	    function (string) {
  	      var rx = anObject(this);
  	      var S = toString(string);
  	      var res = maybeCallNative(nativeSearch, rx, S);

  	      if (res.done) return res.value;

  	      var previousLastIndex = rx.lastIndex;
  	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
  	      var result = regExpExec(rx, S);
  	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
  	      return result === null ? -1 : result.index;
  	    }
  	  ];
  	});
  	return es_string_search;
  }

  requireEs_string_search();

  var es_array_slice = {};

  var hasRequiredEs_array_slice;

  function requireEs_array_slice () {
  	if (hasRequiredEs_array_slice) return es_array_slice;
  	hasRequiredEs_array_slice = 1;
  	var $ = require_export();
  	var isArray = requireIsArray();
  	var isConstructor = requireIsConstructor();
  	var isObject = requireIsObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var toIndexedObject = requireToIndexedObject();
  	var createProperty = requireCreateProperty();
  	var setArrayLength = requireArraySetLength();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
  	var nativeSlice = requireArraySlice();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

  	var SPECIES = wellKnownSymbol('species');
  	var $Array = Array;
  	var max = Math.max;

  	// `Array.prototype.slice` method
  	// https://tc39.es/ecma262/#sec-array.prototype.slice
  	// fallback for not array-like ES3 strings and DOM objects
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  slice: function slice(start, end) {
  	    var O = toIndexedObject(this);
  	    var length = lengthOfArrayLike(O);
  	    var k = toAbsoluteIndex(start, length);
  	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
  	    var Constructor, result, n;
  	    if (isArray(O)) {
  	      Constructor = O.constructor;
  	      // cross-realm fallback
  	      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
  	        Constructor = undefined;
  	      } else if (isObject(Constructor)) {
  	        Constructor = Constructor[SPECIES];
  	        if (Constructor === null) Constructor = undefined;
  	      }
  	      if (Constructor === $Array || Constructor === undefined) {
  	        return nativeSlice(O, k, fin);
  	      }
  	    }
  	    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
  	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
  	    setArrayLength(result, n);
  	    return result;
  	  }
  	});
  	return es_array_slice;
  }

  requireEs_array_slice();

  var web_urlSearchParams = {};

  var safeGetBuiltIn;
  var hasRequiredSafeGetBuiltIn;

  function requireSafeGetBuiltIn () {
  	if (hasRequiredSafeGetBuiltIn) return safeGetBuiltIn;
  	hasRequiredSafeGetBuiltIn = 1;
  	var globalThis = requireGlobalThis();
  	var DESCRIPTORS = requireDescriptors();

  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Avoid NodeJS experimental warning
  	safeGetBuiltIn = function (name) {
  	  if (!DESCRIPTORS) return globalThis[name];
  	  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  	  return descriptor && descriptor.value;
  	};
  	return safeGetBuiltIn;
  }

  var urlConstructorDetection;
  var hasRequiredUrlConstructorDetection;

  function requireUrlConstructorDetection () {
  	if (hasRequiredUrlConstructorDetection) return urlConstructorDetection;
  	hasRequiredUrlConstructorDetection = 1;
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var DESCRIPTORS = requireDescriptors();
  	var IS_PURE = requireIsPure();

  	var ITERATOR = wellKnownSymbol('iterator');

  	urlConstructorDetection = !fails(function () {
  	  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  	  var url = new URL('b?a=1&b=2&c=3', 'https://a');
  	  var params = url.searchParams;
  	  var params2 = new URLSearchParams('a=1&a=2&b=3');
  	  var result = '';
  	  url.pathname = 'c%20d';
  	  params.forEach(function (value, key) {
  	    params['delete']('b');
  	    result += key + value;
  	  });
  	  params2['delete']('a', 2);
  	  // `undefined` case is a Chromium 117 bug
  	  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  	  params2['delete']('b', undefined);
  	  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
  	    || (!params.size && (IS_PURE || !DESCRIPTORS))
  	    || !params.sort
  	    || url.href !== 'https://a/c%20d?a=1&c=3'
  	    || params.get('c') !== '3'
  	    || String(new URLSearchParams('?a=1')) !== 'a=1'
  	    || !params[ITERATOR]
  	    // throws in Edge
  	    || new URL('https://a@b').username !== 'a'
  	    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
  	    // not punycoded in Edge
  	    || new URL('https://тест').host !== 'xn--e1aybc'
  	    // not escaped in Chrome 62-
  	    || new URL('https://a#б').hash !== '#%D0%B1'
  	    // fails in Chrome 66-
  	    || result !== 'a1c3'
  	    // throws in Safari
  	    || new URL('https://x', undefined).host !== 'x';
  	});
  	return urlConstructorDetection;
  }

  var es_string_fromCodePoint = {};

  var hasRequiredEs_string_fromCodePoint;

  function requireEs_string_fromCodePoint () {
  	if (hasRequiredEs_string_fromCodePoint) return es_string_fromCodePoint;
  	hasRequiredEs_string_fromCodePoint = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toAbsoluteIndex = requireToAbsoluteIndex();

  	var $RangeError = RangeError;
  	var fromCharCode = String.fromCharCode;
  	// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
  	var $fromCodePoint = String.fromCodePoint;
  	var join = uncurryThis([].join);

  	// length should be 1, old FF problem
  	var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

  	// `String.fromCodePoint` method
  	// https://tc39.es/ecma262/#sec-string.fromcodepoint
  	$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  fromCodePoint: function fromCodePoint(x) {
  	    var elements = [];
  	    var length = arguments.length;
  	    var i = 0;
  	    var code;
  	    while (length > i) {
  	      code = +arguments[i];
  	      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');
  	      elements[i++] = code < 0x10000
  	        ? fromCharCode(code)
  	        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
  	    } return join(elements, '');
  	  }
  	});
  	return es_string_fromCodePoint;
  }

  var urlPercentCoding;
  var hasRequiredUrlPercentCoding;

  function requireUrlPercentCoding () {
  	if (hasRequiredUrlPercentCoding) return urlPercentCoding;
  	hasRequiredUrlPercentCoding = 1;
  	// TODO: in core-js [at] 4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
  	requireEs_string_fromCodePoint();
  	var getBuiltIn = requireGetBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();

  	var fromCharCode = String.fromCharCode;
  	var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
  	var $encodeURIComponent = encodeURIComponent;
  	var $parseInt = parseInt;
  	var charAt = uncurryThis(''.charAt);
  	var push = uncurryThis([].push);
  	var replace = uncurryThis(''.replace);
  	var stringSlice = uncurryThis(''.slice);
  	var exec = uncurryThis(/./.exec);

  	var FALLBACK_REPLACER = '\uFFFD';
  	var VALID_HEX = /^[0-9a-f]+$/i;
  	// a surrogate pair is matched first, so a one-unit match is always a lone surrogate
  	var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;

  	var parseHexOctet = function (string, start) {
  	  var substr = stringSlice(string, start, start + 2);
  	  if (!exec(VALID_HEX, substr)) return NaN;

  	  return $parseInt(substr, 16);
  	};

  	var getLeadingOnes = function (octet) {
  	  var count = 0;
  	  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
  	    count++;
  	  }
  	  return count;
  	};

  	var utf8Decode = function (octets) {
  	  var codePoint = null;
  	  var length = octets.length;

  	  switch (length) {
  	    case 1:
  	      codePoint = octets[0];
  	      break;
  	    case 2:
  	      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
  	      break;
  	    case 3:
  	      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
  	      break;
  	    case 4:
  	      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
  	      break;
  	  }

  	  // reject surrogates, overlong encodings, and out-of-range codepoints
  	  if (codePoint === null
  	    || codePoint > 0x10FFFF
  	    || (codePoint >= 0xD800 && codePoint <= 0xDFFF)
  	    || codePoint < (length > 3 ? 0x10000 : length > 2 ? 0x800 : length > 1 ? 0x80 : 0)
  	  ) return null;

  	  return codePoint;
  	};

  	var replaceLoneSurrogate = function (chunk) {
  	  return chunk.length === 2 ? chunk : FALLBACK_REPLACER;
  	};

  	// https://url.spec.whatwg.org/#percent-decode
  	/* eslint-disable max-depth -- ok */
  	var decode = function (input) {
  	  var length = input.length;
  	  var result = '';
  	  var i = 0;

  	  while (i < length) {
  	    var decodedChar = charAt(input, i);

  	    if (decodedChar === '%') {
  	      if (charAt(input, i + 1) === '%' || i + 3 > length) {
  	        result += '%';
  	        i++;
  	        continue;
  	      }

  	      var octet = parseHexOctet(input, i + 1);

  	      // eslint-disable-next-line no-self-compare -- NaN check
  	      if (octet !== octet) {
  	        result += decodedChar;
  	        i++;
  	        continue;
  	      }

  	      i += 2;
  	      var byteSequenceLength = getLeadingOnes(octet);

  	      if (byteSequenceLength === 0) {
  	        decodedChar = fromCharCode(octet);
  	      } else {
  	        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
  	          result += FALLBACK_REPLACER;
  	          i++;
  	          continue;
  	        }

  	        var octets = [octet];
  	        var sequenceIndex = 1;

  	        while (sequenceIndex < byteSequenceLength) {
  	          i++;
  	          if (i + 3 > length || charAt(input, i) !== '%') break;

  	          var nextByte = parseHexOctet(input, i + 1);

  	          // eslint-disable-next-line no-self-compare -- NaN check
  	          if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;

  	          // https://encoding.spec.whatwg.org/#utf-8-decoder - position-specific byte ranges
  	          if (sequenceIndex === 1) {
  	            if (octet === 0xE0 && nextByte < 0xA0) break;
  	            if (octet === 0xED && nextByte > 0x9F) break;
  	            if (octet === 0xF0 && nextByte < 0x90) break;
  	            if (octet === 0xF4 && nextByte > 0x8F) break;
  	          }

  	          push(octets, nextByte);
  	          i += 2;
  	          sequenceIndex++;
  	        }

  	        if (octets.length !== byteSequenceLength) {
  	          result += FALLBACK_REPLACER;
  	          continue;
  	        }

  	        var codePoint = utf8Decode(octets);
  	        if (codePoint === null) {
  	          for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
  	          i++;
  	          continue;
  	        } else {
  	          decodedChar = fromCodePoint(codePoint);
  	        }
  	      }
  	    }

  	    result += decodedChar;
  	    i++;
  	  }

  	  return result;
  	};
  	/* eslint-enable max-depth -- ok */

  	// https://url.spec.whatwg.org/#string-percent-encode-after-encoding
  	// a lone surrogate is the only input `encodeURIComponent` throws on, and the UTF-8
  	// encoder replaces it - so the throw selects the slow path instead of a per-call scan
  	var encode = function (input) {
  	  try {
  	    return $encodeURIComponent(input);
  	  } catch (error) {
  	    return $encodeURIComponent(replace(input, SURROGATE, replaceLoneSurrogate));
  	  }
  	};

  	urlPercentCoding = {
  	  decode: decode,
  	  encode: encode
  	};
  	return urlPercentCoding;
  }

  var validateArgumentsLength;
  var hasRequiredValidateArgumentsLength;

  function requireValidateArgumentsLength () {
  	if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
  	hasRequiredValidateArgumentsLength = 1;
  	var $TypeError = TypeError;

  	validateArgumentsLength = function (passed, required) {
  	  if (passed < required) throw new $TypeError('Not enough arguments');
  	  return passed;
  	};
  	return validateArgumentsLength;
  }

  var arraySort;
  var hasRequiredArraySort;

  function requireArraySort () {
  	if (hasRequiredArraySort) return arraySort;
  	hasRequiredArraySort = 1;
  	var arraySlice = requireArraySlice();

  	var floor = Math.floor;

  	var sort = function (array, comparefn) {
  	  var length = array.length;

  	  if (length < 8) {
  	    // insertion sort
  	    var i = 1;
  	    var element, j;

  	    while (i < length) {
  	      j = i;
  	      element = array[i];
  	      while (j && comparefn(array[j - 1], element) > 0) {
  	        array[j] = array[--j];
  	      }
  	      if (j !== i++) array[j] = element;
  	    }
  	  } else {
  	    // merge sort
  	    var middle = floor(length / 2);
  	    var left = sort(arraySlice(array, 0, middle), comparefn);
  	    var right = sort(arraySlice(array, middle), comparefn);
  	    var llength = left.length;
  	    var rlength = right.length;
  	    var lindex = 0;
  	    var rindex = 0;

  	    while (lindex < llength || rindex < rlength) {
  	      array[lindex + rindex] = (lindex < llength && rindex < rlength)
  	        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
  	        : lindex < llength ? left[lindex++] : right[rindex++];
  	    }
  	  }

  	  return array;
  	};

  	arraySort = sort;
  	return arraySort;
  }

  var web_urlSearchParams_constructor;
  var hasRequiredWeb_urlSearchParams_constructor;

  function requireWeb_urlSearchParams_constructor () {
  	if (hasRequiredWeb_urlSearchParams_constructor) return web_urlSearchParams_constructor;
  	hasRequiredWeb_urlSearchParams_constructor = 1;
  	// TODO: in core-js [at] 4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
  	requireEs_array_iterator();
  	var $ = require_export();
  	var globalThis = requireGlobalThis();
  	var safeGetBuiltIn = requireSafeGetBuiltIn();
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var DESCRIPTORS = requireDescriptors();
  	var USE_NATIVE_URL = requireUrlConstructorDetection();
  	var percentCoding = requireUrlPercentCoding();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var defineBuiltIns = requireDefineBuiltIns();
  	var setToStringTag = requireSetToStringTag();
  	var createIteratorConstructor = requireIteratorCreateConstructor();
  	var InternalStateModule = requireInternalState();
  	var anInstance = requireAnInstance();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var bind = requireFunctionBindContext();
  	var classof = requireClassof();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var $toString = requireToString();
  	var create = requireObjectCreate();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var getIterator = requireGetIteratorInternal();
  	var getIteratorMethod = requireGetIteratorMethodInternal();
  	var createIterResultObject = requireCreateIterResultObject();
  	var validateArgumentsLength = requireValidateArgumentsLength();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var arraySort = requireArraySort();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var URL_SEARCH_PARAMS = 'URLSearchParams';
  	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
  	var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  	var percentDecode = percentCoding.decode;
  	var percentEncode = percentCoding.encode;

  	var nativeFetch = safeGetBuiltIn('fetch');
  	var NativeRequest = safeGetBuiltIn('Request');
  	var Headers = safeGetBuiltIn('Headers');
  	var RequestPrototype = NativeRequest && NativeRequest.prototype;
  	var HeadersPrototype = Headers && Headers.prototype;
  	var TypeError = globalThis.TypeError;
  	var charAt = uncurryThis(''.charAt);
  	var join = uncurryThis([].join);
  	var push = uncurryThis([].push);
  	var replace = uncurryThis(''.replace);
  	var shift = uncurryThis([].shift);
  	var splice = uncurryThis([].splice);
  	var split = uncurryThis(''.split);
  	var stringSlice = uncurryThis(''.slice);

  	var plus = /\+/g;

  	// https://url.spec.whatwg.org/#urlencoded-parsing - `+` decodes to a space
  	var decodeQueryComponent = function (input) {
  	  return percentDecode(replace(input, plus, ' '));
  	};

  	var find = /[!'()~]|%20/g;

  	var replacements = {
  	  '!': '%21',
  	  "'": '%27',
  	  '(': '%28',
  	  ')': '%29',
  	  '~': '%7E',
  	  '%20': '+'
  	};

  	var replacer = function (match) {
  	  return replacements[match];
  	};

  	var serialize = function (it) {
  	  return replace(percentEncode(it), find, replacer);
  	};

  	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  	  setInternalState(this, {
  	    type: URL_SEARCH_PARAMS_ITERATOR,
  	    target: getInternalParamsState(params).entries,
  	    index: 0,
  	    kind: kind
  	  });
  	}, URL_SEARCH_PARAMS, function next() {
  	  var state = getInternalIteratorState(this);
  	  var target = state.target;
  	  var index = state.index++;
  	  if (!target || index >= target.length) {
  	    state.target = null;
  	    return createIterResultObject(undefined, true);
  	  }
  	  var entry = target[index];
  	  switch (state.kind) {
  	    case 'keys': return createIterResultObject(entry.key, false);
  	    case 'values': return createIterResultObject(entry.value, false);
  	  } return createIterResultObject([entry.key, entry.value], false);
  	}, true);

  	var URLSearchParamsState = function (init) {
  	  this.entries = [];
  	  this.url = null;

  	  if (init !== undefined) {
  	    if (isObject(init)) this.parseObject(init);
  	    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  	  }
  	};

  	URLSearchParamsState.prototype = {
  	  type: URL_SEARCH_PARAMS,
  	  bindURL: function (url) {
  	    this.url = url;
  	    this.update();
  	  },
  	  parseObject: function (object) {
  	    var entries = this.entries;
  	    var iteratorMethod = getIteratorMethod(object);
  	    var iterator, next, step, entryIterator, entryNext, first, second;

  	    if (iteratorMethod) {
  	      iterator = getIterator(object, iteratorMethod);
  	      next = iterator.next;
  	      while (!(step = call(next, iterator)).done) {
  	        entryIterator = getIterator(anObject(step.value));
  	        entryNext = entryIterator.next;
  	        if (
  	          (first = call(entryNext, entryIterator)).done ||
  	          (second = call(entryNext, entryIterator)).done ||
  	          !call(entryNext, entryIterator).done
  	        ) throw new TypeError('Expected sequence with length 2');
  	        push(entries, { key: $toString(first.value), value: $toString(second.value) });
  	      }
  	    } else for (var key in object) if (hasOwn(object, key)) {
  	      push(entries, { key: key, value: $toString(object[key]) });
  	    }
  	  },
  	  parseQuery: function (query) {
  	    if (query) {
  	      var entries = this.entries;
  	      var attributes = split(query, '&');
  	      var index = 0;
  	      var attribute, entry;
  	      while (index < attributes.length) {
  	        attribute = attributes[index++];
  	        if (attribute.length) {
  	          entry = split(attribute, '=');
  	          push(entries, {
  	            key: decodeQueryComponent(shift(entry)),
  	            value: decodeQueryComponent(join(entry, '='))
  	          });
  	        }
  	      }
  	    }
  	  },
  	  serialize: function () {
  	    var entries = this.entries;
  	    var result = [];
  	    var index = 0;
  	    var entry;
  	    while (index < entries.length) {
  	      entry = entries[index++];
  	      push(result, serialize(entry.key) + '=' + serialize(entry.value));
  	    } return join(result, '&');
  	  },
  	  update: function () {
  	    this.entries.length = 0;
  	    this.parseQuery(this.url.query);
  	  },
  	  updateURL: function () {
  	    if (this.url) this.url.update();
  	  }
  	};

  	// `URLSearchParams` constructor
  	// https://url.spec.whatwg.org/#interface-urlsearchparams
  	var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  	  anInstance(this, URLSearchParamsPrototype);
  	  var init = arguments.length > 0 ? arguments[0] : undefined;
  	  var state = setInternalState(this, new URLSearchParamsState(init));
  	  if (!DESCRIPTORS) this.size = state.entries.length;
  	};

  	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  	defineBuiltIns(URLSearchParamsPrototype, {
  	  // `URLSearchParams.prototype.append` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  	  append: function append(name, value) {
  	    var state = getInternalParamsState(this);
  	    validateArgumentsLength(arguments.length, 2);
  	    push(state.entries, { key: $toString(name), value: $toString(value) });
  	    if (!DESCRIPTORS) this.size++;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.delete` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  	  'delete': function (name /* , value */) {
  	    var state = getInternalParamsState(this);
  	    var length = validateArgumentsLength(arguments.length, 1);
  	    var entries = state.entries;
  	    var key = $toString(name);
  	    var $value = length < 2 ? undefined : arguments[1];
  	    var value = $value === undefined ? $value : $toString($value);
  	    var index = 0;
  	    while (index < entries.length) {
  	      var entry = entries[index];
  	      if (entry.key === key && (value === undefined || entry.value === value)) {
  	        splice(entries, index, 1);
  	      } else index++;
  	    }
  	    if (!DESCRIPTORS) this.size = entries.length;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.get` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  	  get: function get(name) {
  	    var entries = getInternalParamsState(this).entries;
  	    validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var index = 0;
  	    for (; index < entries.length; index++) {
  	      if (entries[index].key === key) return entries[index].value;
  	    }
  	    return null;
  	  },
  	  // `URLSearchParams.prototype.getAll` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  	  getAll: function getAll(name) {
  	    var entries = getInternalParamsState(this).entries;
  	    validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var result = [];
  	    var index = 0;
  	    for (; index < entries.length; index++) {
  	      if (entries[index].key === key) push(result, entries[index].value);
  	    }
  	    return result;
  	  },
  	  // `URLSearchParams.prototype.has` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  	  has: function has(name /* , value */) {
  	    var entries = getInternalParamsState(this).entries;
  	    var length = validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var $value = length < 2 ? undefined : arguments[1];
  	    var value = $value === undefined ? $value : $toString($value);
  	    var index = 0;
  	    while (index < entries.length) {
  	      var entry = entries[index++];
  	      if (entry.key === key && (value === undefined || entry.value === value)) return true;
  	    }
  	    return false;
  	  },
  	  // `URLSearchParams.prototype.set` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  	  set: function set(name, value) {
  	    var state = getInternalParamsState(this);
  	    validateArgumentsLength(arguments.length, 2);
  	    var entries = state.entries;
  	    var found = false;
  	    var key = $toString(name);
  	    var val = $toString(value);
  	    var index = 0;
  	    var entry;
  	    for (; index < entries.length; index++) {
  	      entry = entries[index];
  	      if (entry.key === key) {
  	        if (found) splice(entries, index--, 1);
  	        else {
  	          found = true;
  	          entry.value = val;
  	        }
  	      }
  	    }
  	    if (!found) push(entries, { key: key, value: val });
  	    if (!DESCRIPTORS) this.size = entries.length;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.sort` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  	  sort: function sort() {
  	    var state = getInternalParamsState(this);
  	    arraySort(state.entries, function (a, b) {
  	      return a.key > b.key ? 1 : -1;
  	    });
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.forEach` method
  	  forEach: function forEach(callback /* , thisArg */) {
  	    var entries = getInternalParamsState(this).entries;
  	    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
  	    var index = 0;
  	    var entry;
  	    while (index < entries.length) {
  	      entry = entries[index++];
  	      boundFunction(entry.value, entry.key, this);
  	    }
  	  },
  	  // `URLSearchParams.prototype.keys` method
  	  keys: function keys() {
  	    return new URLSearchParamsIterator(this, 'keys');
  	  },
  	  // `URLSearchParams.prototype.values` method
  	  values: function values() {
  	    return new URLSearchParamsIterator(this, 'values');
  	  },
  	  // `URLSearchParams.prototype.entries` method
  	  entries: function entries() {
  	    return new URLSearchParamsIterator(this, 'entries');
  	  }
  	}, { enumerable: true });

  	// `URLSearchParams.prototype[@@iterator]` method
  	defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

  	// `URLSearchParams.prototype.toString` method
  	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  	defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  	  return getInternalParamsState(this).serialize();
  	}, { enumerable: true });

  	// `URLSearchParams.prototype.size` getter
  	// https://url.spec.whatwg.org/#dom-urlsearchparams-size
  	if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  	  get: function size() {
  	    return getInternalParamsState(this).entries.length;
  	  },
  	  configurable: true,
  	  enumerable: true
  	});

  	setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  	$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  	  URLSearchParams: URLSearchParamsConstructor
  	});

  	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  	if (!USE_NATIVE_URL && isCallable(Headers)) {
  	  var headersHas = uncurryThis(HeadersPrototype.has);
  	  var headersSet = uncurryThis(HeadersPrototype.set);

  	  var wrapRequestOptions = function (init) {
  	    if (isObject(init)) {
  	      var body = init.body;
  	      var headers;
  	      if (classof(body) === URL_SEARCH_PARAMS) {
  	        headers = init.headers ? new Headers(init.headers) : new Headers();
  	        if (!headersHas(headers, 'content-type')) {
  	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  	        }
  	        return create(init, {
  	          body: createPropertyDescriptor(0, $toString(body)),
  	          headers: createPropertyDescriptor(0, headers)
  	        });
  	      }
  	    } return init;
  	  };

  	  if (isCallable(nativeFetch)) {
  	    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
  	      fetch: function fetch(input /* , init */) {
  	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
  	      }
  	    });
  	  }

  	  if (isCallable(NativeRequest)) {
  	    var RequestConstructor = function Request(input /* , init */) {
  	      anInstance(this, RequestPrototype);
  	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
  	    };

  	    RequestPrototype.constructor = RequestConstructor;
  	    RequestConstructor.prototype = RequestPrototype;

  	    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
  	      Request: RequestConstructor
  	    });
  	  }
  	}

  	web_urlSearchParams_constructor = {
  	  URLSearchParams: URLSearchParamsConstructor,
  	  getState: getInternalParamsState
  	};
  	return web_urlSearchParams_constructor;
  }

  var hasRequiredWeb_urlSearchParams;

  function requireWeb_urlSearchParams () {
  	if (hasRequiredWeb_urlSearchParams) return web_urlSearchParams;
  	hasRequiredWeb_urlSearchParams = 1;
  	// TODO: Remove this module from `core-js [at] 4` since it's replaced to module below
  	requireWeb_urlSearchParams_constructor();
  	return web_urlSearchParams;
  }

  requireWeb_urlSearchParams();

  var web_urlSearchParams_delete = {};

  var hasRequiredWeb_urlSearchParams_delete;

  function requireWeb_urlSearchParams_delete () {
  	if (hasRequiredWeb_urlSearchParams_delete) return web_urlSearchParams_delete;
  	hasRequiredWeb_urlSearchParams_delete = 1;
  	var defineBuiltIn = requireDefineBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toString = requireToString();
  	var validateArgumentsLength = requireValidateArgumentsLength();

  	var $URLSearchParams = URLSearchParams;
  	var URLSearchParamsPrototype = $URLSearchParams.prototype;
  	var append = uncurryThis(URLSearchParamsPrototype.append);
  	var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
  	var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
  	var push = uncurryThis([].push);
  	var params = new $URLSearchParams('a=1&a=2&b=3');

  	params['delete']('a', 1);
  	// `undefined` case is a Chromium 117 bug
  	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
  	params['delete']('b', undefined);

  	if (params + '' !== 'a=2') {
  	  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
  	    var length = arguments.length;
  	    var $value = length < 2 ? undefined : arguments[1];
  	    if (length && $value === undefined) return $delete(this, name);
  	    var entries = [];
  	    forEach(this, function (v, k) { // also validates `this`
  	      push(entries, { key: k, value: v });
  	    });
  	    validateArgumentsLength(length, 1);
  	    var key = toString(name);
  	    var value = toString($value);
  	    var index = 0;
  	    var entriesLength = entries.length;
  	    var entry;
  	    while (index < entriesLength) {
  	      entry = entries[index];
  	      $delete(this, entry.key);
  	      index++;
  	    }
  	    index = 0;
  	    while (index < entriesLength) {
  	      entry = entries[index++];
  	      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
  	    }
  	  }, { enumerable: true, unsafe: true });
  	}
  	return web_urlSearchParams_delete;
  }

  requireWeb_urlSearchParams_delete();

  var web_urlSearchParams_has = {};

  var hasRequiredWeb_urlSearchParams_has;

  function requireWeb_urlSearchParams_has () {
  	if (hasRequiredWeb_urlSearchParams_has) return web_urlSearchParams_has;
  	hasRequiredWeb_urlSearchParams_has = 1;
  	var defineBuiltIn = requireDefineBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toString = requireToString();
  	var validateArgumentsLength = requireValidateArgumentsLength();

  	var $URLSearchParams = URLSearchParams;
  	var URLSearchParamsPrototype = $URLSearchParams.prototype;
  	var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
  	var $has = uncurryThis(URLSearchParamsPrototype.has);
  	var params = new $URLSearchParams('a=1');

  	// `undefined` case is a Chromium 117 bug
  	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
  	if (params.has('a', 2) || !params.has('a', undefined)) {
  	  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
  	    var length = arguments.length;
  	    var $value = length < 2 ? undefined : arguments[1];
  	    if (length && $value === undefined) return $has(this, name);
  	    var values = getAll(this, name); // also validates `this`
  	    validateArgumentsLength(length, 1);
  	    var value = toString($value);
  	    var index = 0;
  	    while (index < values.length) {
  	      if (values[index++] === value) return true;
  	    } return false;
  	  }, { enumerable: true, unsafe: true });
  	}
  	return web_urlSearchParams_has;
  }

  requireWeb_urlSearchParams_has();

  var web_urlSearchParams_size = {};

  var hasRequiredWeb_urlSearchParams_size;

  function requireWeb_urlSearchParams_size () {
  	if (hasRequiredWeb_urlSearchParams_size) return web_urlSearchParams_size;
  	hasRequiredWeb_urlSearchParams_size = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var uncurryThis = requireFunctionUncurryThis();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();

  	var URLSearchParamsPrototype = URLSearchParams.prototype;
  	var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

  	// `URLSearchParams.prototype.size` getter
  	// https://github.com/whatwg/url/pull/734
  	if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  	  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  	    get: function size() {
  	      var count = 0;
  	      forEach(this, function () { count++; });
  	      return count;
  	    },
  	    configurable: true,
  	    enumerable: true
  	  });
  	}
  	return web_urlSearchParams_size;
  }

  requireWeb_urlSearchParams_size();

  /**
   * General helper utilities.
   *
   * This module provides miscellaneous helper functions used throughout Bootstrap Table,
   * including debouncing, event handling, URL manipulation, and browser detection.
   *
   * @module utils/helper
   */

  /**
   * Calculates the value of an object property, supporting function calls and nested properties.
   *
   * @param {Object.<string, *>} self - The context to use when calling functions.
   * @param {string|Function|*} name - The property name, function, or value to calculate.
   * @param {Array.<*>} args - The arguments to pass to the function.
   * @param {*} defaultValue - The default value to return if calculation fails.
   * @returns {*} The calculated value or default value.
   */
  function calculateObjectValue(self, name, args, defaultValue) {
    var func = name;
    if (typeof name === 'string') {
      // support obj.func1.func2
      var names = name.split('.');
      if (names.length > 1) {
        func = window;
        var _iterator = _createForOfIteratorHelper(names),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            func = func[f];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        func = window[name];
      }
    }
    if (func !== null && _typeof(func) === 'object') {
      return func;
    }
    if (typeof func === 'function') {
      return func.apply(self, args || []);
    }
    if (!func && typeof name === 'string' && args && sprintf.apply(void 0, [name].concat(_toConsumableArray(args)))) {
      return sprintf.apply(void 0, [name].concat(_toConsumableArray(args)));
    }
    return defaultValue;
  }

  /**
   * Creates a debounced function that delays invoking func until after wait milliseconds.
   *
   * @param {Function} func - The function to debounce.
   * @param {number} wait - The number of milliseconds to delay.
   * @param {boolean} [immediate=false] - If true, trigger the function on the leading edge.
   * @returns {Function} The debounced function.
   */
  function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
   * Generates a unique event name with a prefix and optional ID.
   *
   * @param {string} eventPrefix - The prefix for the event name.
   * @param {string} [id=''] - The optional ID to append. If not provided, generates a random ID.
   * @returns {string} The generated event name.
   */
  function getEventName(eventPrefix) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
    return "".concat(eventPrefix, "-").concat(id);
  }

  /**
   * Checks if the table has a detail view icon.
   *
   * @param {Object.<string, *>} options - The table options.
   * @returns {boolean} True if the table has a detail view icon, false otherwise.
   */
  function hasDetailViewIcon(options) {
    return options.detailView && options.detailViewIcon && !options.cardView;
  }

  /**
   * Gets the index offset for the detail view column.
   *
   * @param {Object.<string, *>} options - The table options.
   * @returns {number} The index offset (1 if detail view is on the left, 0 otherwise).
   */
  function getDetailViewIndexOffset(options) {
    return hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0;
  }

  /**
   * Adds query parameters to a URL while preserving the hash fragment.
   *
   * @param {string} url - The base URL.
   * @param {Object.<string, string>} query - The query parameters to add.
   * @returns {string} The URL with query parameters added.
   */
  function addQueryToUrl(url, query) {
    var hashArray = url.split('#');
    var _hashArray$0$split = hashArray[0].split('?'),
      _hashArray$0$split2 = _slicedToArray(_hashArray$0$split, 2),
      baseUrl = _hashArray$0$split2[0],
      search = _hashArray$0$split2[1];
    var urlParams = new URLSearchParams(search);
    for (var _i = 0, _Object$entries = Object.entries(query); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      urlParams.set(key, value);
    }
    return "".concat(baseUrl, "?").concat(urlParams.toString(), "#").concat(hashArray.slice(1).join('#'));
  }

  /**
   * Checks if a value is numeric.
   *
   * @param {*} n - The value to check.
   * @returns {boolean} True if the value is numeric, false otherwise.
   */
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Checks if the current browser is Internet Explorer.
   *
   * @returns {boolean} True if the browser is IE, false otherwise.
   */
  function isIEBrowser() {
    return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
  }

  /**
   * Parse a string into an array of strings.
   * @param {string} str - Input string in formats like "['a', 'b']", "[1, 2]", "a,b", or "[]".
   * @returns {string[]} Parsed array of strings.
   */
  function parseStringArray(str) {
    if (!str) {
      return [];
    }
    var normalized = String(str).trim();
    if (!normalized || normalized === '[]') {
      return [];
    }
    if (normalized.startsWith('[') && normalized.endsWith(']')) {
      try {
        var parsed = JSON.parse(normalized);
        if (Array.isArray(parsed)) {
          return parsed.map(function (item) {
            return String(item);
          }).filter(function (item) {
            return item !== '';
          });
        }
      } catch (_unused) {
        // Fall back to delimiter-based parsing for non-JSON array strings.
      }
    }
    return normalized.replace(/\[|\]|['"\s]/g, '').split(',').filter(function (item) {
      return item !== '';
    });
  }

  var helper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addQueryToUrl: addQueryToUrl,
    calculateObjectValue: calculateObjectValue,
    debounce: debounce,
    getDetailViewIndexOffset: getDetailViewIndexOffset,
    getEventName: getEventName,
    hasDetailViewIcon: hasDetailViewIcon,
    isIEBrowser: isIEBrowser,
    isNumeric: isNumeric,
    parseStringArray: parseStringArray
  });

  /**
   * Search and sorting utilities.
   *
   * This module provides utility functions for searching and sorting table data,
   * including regex comparison, custom sorting logic, and search result highlighting.
   *
   * @module utils/search-sort
   */

  /**
   * Normalizes an `orderList` value into a clean array of `'asc'` / `'desc'` tokens.
   *
   * Accepts either an array (e.g. `['desc', 'asc']`) or a comma-separated string
   * (e.g. `'desc, asc'`). Tokens are trimmed and lowercased; anything that is not
   * `'asc'` or `'desc'` is silently dropped. Returns the normalized array, or
   * `undefined` when the input is `undefined`/empty or contains no valid token —
   * in which case callers fall back to the legacy column `order` cycle.
   *
   * @param {undefined|string|string[]} input - The raw `orderList` value.
   * @returns {string[]|undefined} The normalized list, or `undefined`.
   */
  function normalizeOrderList(input) {
    if (input === undefined || input === null) {
      return undefined;
    }
    var tokens = Array.isArray(input) ? input : String(input).split(',');
    var list = [];
    var _iterator = _createForOfIteratorHelper(tokens),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var token = _step.value;
        var normalized = String(token).trim().toLowerCase();
        if (normalized === 'asc' || normalized === 'desc') {
          list.push(normalized);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return list.length ? list : undefined;
  }

  /**
   * Compares a value against a search pattern using regex.
   * Supports both plain text search and regex patterns (e.g., /pattern/flags).
   *
   * @param {*} value - The value to search in.
   * @param {string} search - The search pattern or regex.
   * @returns {boolean} True if the value matches the search pattern, false otherwise.
   */
  function regexCompare(value, search) {
    try {
      var regexpParts = search.match(/^\/(.*?)\/([gim]*)$/);
      if (value.toString().search(regexpParts ? new RegExp(regexpParts[1], regexpParts[2]) : new RegExp(search, 'gim')) !== -1) {
        return true;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
    return false;
  }

  /**
   * Sorts two values with support for numeric, string, and empty value handling.
   *
   * @param {*} a - The first value to compare.
   * @param {*} b - The second value to compare.
   * @param {number} order - The sort order (1 for ascending, -1 for descending).
   * @param {Object.<string, *>} options - Sort options.
   * @param {boolean} [options.sortStable=false] - If true, use position for equal values.
   * @param {boolean} [options.sortEmptyLast=false] - If true, sort empty values last.
   * @param {number} aPosition - The position of the first value.
   * @param {number} bPosition - The position of the second value.
   * @returns {number} Negative if a < b, positive if a > b, 0 if equal.
   */
  function sort(a, b, order, options, aPosition, bPosition) {
    if (a === undefined || a === null) {
      a = '';
    }
    if (b === undefined || b === null) {
      b = '';
    }
    if (options.sortStable && a === b) {
      a = aPosition;
      b = bPosition;
    }

    // If both values are numeric, do a numeric comparison
    if (isNumeric(a) && isNumeric(b)) {
      // Convert numerical values from string to float.
      a = parseFloat(a);
      b = parseFloat(b);
      if (a < b) {
        return order * -1;
      }
      if (a > b) {
        return order;
      }
      return 0;
    }
    if (options.sortEmptyLast) {
      if (a === '') {
        return 1;
      }
      if (b === '') {
        return -1;
      }
    }
    if (a === b) {
      return 0;
    }

    // If value is not a string, convert to string
    if (typeof a !== 'string') {
      a = a.toString();
    }
    if (a.localeCompare(b) === -1) {
      return order * -1;
    }
    return order;
  }

  /**
   * Highlights search text matches in HTML by wrapping them in <mark> tags.
   * Recursively processes all text nodes in the HTML.
   *
   * @param {string|Element} html - The HTML string or DOM element to process.
   * @param {string} searchText - The text to search for and highlight.
   * @returns {string|Element} The HTML with matches highlighted, or the processed element.
   */
  function replaceSearchMark(html, searchText) {
    var isDom = html instanceof Element;
    var node = isDom ? html : document.createElement('div');
    var regExp = new RegExp(searchText, 'gim');
    var replaceTextWithDom = function replaceTextWithDom(text, regExp) {
      var result = [];
      var match;
      var lastIndex = 0;
      while ((match = regExp.exec(text)) !== null) {
        if (lastIndex !== match.index) {
          result.push(document.createTextNode(text.substring(lastIndex, match.index)));
        }
        var mark = document.createElement('mark');
        mark.innerText = match[0];
        result.push(mark);
        lastIndex = match.index + match[0].length;
      }
      if (!result.length) {
        // no match
        return;
      }
      if (lastIndex !== text.length) {
        result.push(document.createTextNode(text.substring(lastIndex)));
      }
      return result;
    };
    var _replaceMark = function replaceMark(node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType === document.TEXT_NODE) {
          var elements = replaceTextWithDom(child.data, regExp);
          if (elements) {
            var _iterator2 = _createForOfIteratorHelper(elements),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var el = _step2.value;
                node.insertBefore(el, child);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            node.removeChild(child);
            i += elements.length - 1;
          }
        }
        if (child.nodeType === document.ELEMENT_NODE) {
          _replaceMark(child);
        }
      }
    };
    if (!isDom) {
      node.innerHTML = html;
    }
    _replaceMark(node);
    return isDom ? node : node.innerHTML;
  }

  var searchSort = /*#__PURE__*/Object.freeze({
    __proto__: null,
    normalizeOrderList: normalizeOrderList,
    regexCompare: regexCompare,
    replaceSearchMark: replaceSearchMark,
    sort: sort
  });

  /**
   * Bootstrap Table Checkbox Utilities
   * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML and virtual DOM config
   *
   * @module utils/checkbox
   */

  /**
   * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML
   * @param {Object} options - Configuration options
   * @param {string} options.name - checkbox name attribute
   * @param {string} [options.value] - checkbox value attribute
   * @param {boolean} [options.checked] - whether checked
   * @param {boolean} [options.disabled] - whether disabled
   * @param {string} [options.label] - display text
   * @param {string} [options.extraClass] - extra CSS classes (must contain only safe CSS characters: letters, digits, hyphens, underscores)
   * @param {boolean} [options.centered=true] - whether centered (for table checkbox)
   * @param {boolean} [options.withLabel=false] - whether include label (for dropdown menu)
   * @returns {string} HTML string
   */
  function getCheckboxHtml(options) {
    var name = options.name,
      _options$value = options.value,
      value = _options$value === void 0 ? '' : _options$value,
      _options$checked = options.checked,
      checked = _options$checked === void 0 ? false : _options$checked,
      _options$disabled = options.disabled,
      disabled = _options$disabled === void 0 ? false : _options$disabled,
      _options$label = options.label,
      label = _options$label === void 0 ? '' : _options$label,
      _options$extraClass = options.extraClass,
      extraClass = _options$extraClass === void 0 ? '' : _options$extraClass,
      _options$centered = options.centered,
      centered = _options$centered === void 0 ? true : _options$centered,
      _options$withLabel = options.withLabel,
      withLabel = _options$withLabel === void 0 ? false : _options$withLabel;
    var checkedAttr = checked ? ' checked="checked"' : '';
    var disabledAttr = disabled ? ' disabled="disabled"' : '';
    var valueAttr = value !== undefined && value !== '' ? " value=\"".concat(escapeAttr(value), "\"") : '';
    var classAttr = extraClass ? " ".concat(extraClass) : '';
    var escapedName = escapeAttr(name);
    if (getBootstrapVersion() === 5) {
      if (withLabel) {
        return "<label class=\"dropdown-item dropdown-item-marker d-flex align-items-center gap-2\">\n        <input class=\"form-check-input m-0".concat(classAttr, "\" type=\"checkbox\" name=\"").concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr, " />\n        <span>").concat(label, "</span>\n      </label>");
      }
      var centerClass = centered ? ' d-flex justify-content-center' : '';
      return "<div class=\"form-check".concat(centerClass, "\">\n      <input class=\"form-check-input").concat(classAttr, "\" type=\"checkbox\" name=\"").concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr, " />\n    </div>");
    }
    if (withLabel) {
      return "<label><input type=\"checkbox\" name=\"".concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr).concat(classAttr, "> <span>").concat(label, "</span></label>");
    }
    return "<label><input type=\"checkbox\" name=\"".concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr).concat(classAttr, " /><span></span></label>");
  }

  /**
   * Generate form-check wrapped checkbox HTML (for table cells)
   * @param {string} inputHtml - input element HTML (must be trusted or pre-escaped, as it is inserted without additional escaping)
   * @param {boolean} [centered=true] - whether centered
   * @returns {string} HTML string
   */
  function wrapCheckbox(inputHtml) {
    var centered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (getBootstrapVersion() === 5) {
      var centerClass = centered ? ' d-flex justify-content-center' : '';
      return "<div class=\"form-check".concat(centerClass, "\">").concat(inputHtml, "</div>");
    }
    return "<label>".concat(inputHtml, "<span></span></label>");
  }

  /**
   * Get checkbox virtual DOM config (for virtual DOM rendering in body.js)
   * @param {Object} options - Configuration options
   * @param {Object} options.inputAttrs - input element attributes object
   * @param {string} options.formCheckClass - form-check CSS class name
   * @param {string} options.formCheckInputClass - form-check-input CSS class name
   * @param {boolean} [options.centered=true] - whether centered
   * @returns {Object} Virtual DOM config object with inputAttrs, wrapperAttrs, wrapperTag and hasSpan
   */
  function getCheckboxVdomConfig(options) {
    var inputAttrs = options.inputAttrs,
      formCheckClass = options.formCheckClass,
      formCheckInputClass = options.formCheckInputClass,
      _options$centered2 = options.centered,
      centered = _options$centered2 === void 0 ? true : _options$centered2;
    if (getBootstrapVersion() === 5) {
      var centerClass = centered ? ' d-flex justify-content-center' : '';
      return {
        inputAttrs: _objectSpread2(_objectSpread2({}, inputAttrs), {}, {
          class: formCheckInputClass
        }),
        wrapperAttrs: {
          class: "".concat(formCheckClass).concat(centerClass)
        },
        wrapperTag: 'div',
        hasSpan: false
      };
    }
    return {
      inputAttrs: inputAttrs,
      wrapperAttrs: {},
      wrapperTag: 'label',
      hasSpan: true
    };
  }

  /**
   * Generate showColumns dropdown menu column selection checkbox HTML
   * Differs from getCheckboxHtml by using data-field instead of name attribute
   * @param {Object} options - Configuration options
   * @param {string} options.dataField - column field name (for data-field attribute)
   * @param {string} options.value - checkbox value attribute
   * @param {boolean} options.checked - whether checked
   * @param {boolean} options.disabled - whether disabled
   * @param {string} options.label - display text
   * @returns {string} HTML string
   */
  function getDropdownColumnCheckboxHtml(options) {
    var dataField = options.dataField,
      value = options.value,
      checked = options.checked,
      disabled = options.disabled,
      label = options.label;
    var checkedAttr = checked ? ' checked="checked"' : '';
    var disabledAttr = disabled ? ' disabled="disabled"' : '';
    if (getBootstrapVersion() === 5) {
      return "<label class=\"dropdown-item dropdown-item-marker d-flex align-items-center gap-2\">\n      <input class=\"form-check-input m-0\" type=\"checkbox\" data-field=\"".concat(escapeAttr(dataField), "\" value=\"").concat(escapeAttr(value), "\"").concat(checkedAttr).concat(disabledAttr, " />\n      <span>").concat(label, "</span>\n    </label>");
    }
    return "<input type=\"checkbox\" data-field=\"".concat(escapeAttr(dataField), "\" value=\"").concat(escapeAttr(value), "\"").concat(checkedAttr).concat(disabledAttr, "> <span>").concat(label, "</span>");
  }

  var checkbox = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getCheckboxHtml: getCheckboxHtml,
    getCheckboxVdomConfig: getCheckboxVdomConfig,
    getDropdownColumnCheckboxHtml: getDropdownColumnCheckboxHtml,
    wrapCheckbox: wrapCheckbox
  });

  var Utils = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, framework), object), string), dom), tableData), searchSort), helper), checkbox);

  var VERSION = '1.27.3';
  var bootstrapVersion = Utils.getBootstrapVersion();
  var CONSTANTS = {
    3: {
      classes: {
        buttonActive: 'active',
        buttons: 'default',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        input: 'form-control',
        inputGroup: 'input-group',
        inputPrefix: 'input-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'pull',
        select: 'form-control'
      },
      html: {
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
        pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
        toolbarDropdownSeparator: '<li class="divider"></li>'
      }
    },
    4: {
      classes: {
        buttonActive: 'active',
        buttons: 'secondary',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        input: 'form-control',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'float',
        select: 'form-control'
      },
      html: {
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
      }
    },
    5: {
      classes: {
        buttonActive: 'active',
        buttons: 'secondary',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        formCheck: 'form-check',
        formCheckInput: 'form-check-input',
        input: 'form-control',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'float',
        select: 'form-select'
      },
      html: {
        dataToggle: 'data-bs-toggle',
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s%s</div>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-end">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
      }
    }
  }[bootstrapVersion || 5];
  var ICONS = {
    glyphicon: {
      clearSearch: 'glyphicon-trash',
      columns: 'glyphicon-th icon-th',
      detailClose: 'glyphicon-minus icon-minus',
      detailOpen: 'glyphicon-plus icon-plus',
      fullscreen: 'glyphicon-fullscreen',
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      search: 'glyphicon-search',
      toggleOff: 'glyphicon-list-alt icon-list-alt',
      toggleOn: 'glyphicon-list-alt icon-list-alt'
    },
    fa: {
      clearSearch: 'fa-trash',
      columns: 'fa-th-list',
      detailClose: 'fa-minus',
      detailOpen: 'fa-plus',
      fullscreen: 'fa-arrows-alt',
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      search: 'fa-search',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on'
    },
    bi: {
      clearSearch: 'bi-trash',
      columns: 'bi-list-ul',
      detailClose: 'bi-dash',
      detailOpen: 'bi-plus',
      fullscreen: 'bi-arrows-move',
      paginationSwitchDown: 'bi-caret-down-square',
      paginationSwitchUp: 'bi-caret-up-square',
      refresh: 'bi-arrow-clockwise',
      search: 'bi-search',
      toggleOff: 'bi-toggle-off',
      toggleOn: 'bi-toggle-on'
    },
    icon: {
      clearSearch: 'icon-trash-2',
      columns: 'icon-list',
      detailClose: 'icon-minus',
      detailOpen: 'icon-plus',
      fullscreen: 'icon-maximize',
      paginationSwitchDown: 'icon-arrow-up-circle',
      paginationSwitchUp: 'icon-arrow-down-circle',
      refresh: 'icon-refresh-cw',
      search: 'icon-search',
      toggleOff: 'icon-toggle-right',
      toggleOn: 'icon-toggle-right'
    },
    'material-icons': {
      clearSearch: 'delete',
      columns: 'view_list',
      detailClose: 'remove',
      detailOpen: 'add',
      fullscreen: 'fullscreen',
      paginationSwitchDown: 'grid_on',
      paginationSwitchUp: 'grid_off',
      refresh: 'refresh',
      search: 'search',
      sort: 'sort',
      toggleOff: 'tablet',
      toggleOn: 'tablet_android'
    }
  };
  var DEFAULTS = {
    ajax: undefined,
    ajaxOptions: {},
    buttons: {},
    buttonsAlign: 'right',
    buttonsAttributeTitle: 'title',
    buttonsClass: CONSTANTS.classes.buttons,
    buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
    buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
    buttonsToolbar: undefined,
    cache: true,
    cardView: false,
    checkboxHeader: true,
    classes: 'table table-bordered table-hover',
    clickToSelect: false,
    columns: [[]],
    contentType: 'application/json',
    customSearch: undefined,
    customSort: undefined,
    data: [],
    dataField: 'rows',
    dataType: 'json',
    detailFilter: function detailFilter(index, row) {
      return true;
    },
    detailFormatter: function detailFormatter(index, row) {
      return '';
    },
    detailView: false,
    detailViewAlign: 'left',
    detailViewByClick: false,
    detailViewIcon: true,
    escape: false,
    escapeTitle: true,
    filterOptions: {
      filterAlgorithm: 'and'
    },
    fixedScroll: false,
    footerField: 'footer',
    footerStyle: function footerStyle(column) {
      return {};
    },
    headerStyle: function headerStyle(column) {
      return {};
    },
    height: undefined,
    icons: {},
    // init in initConstants
    iconSize: undefined,
    iconsPrefix: undefined,
    // init in initConstants
    idField: undefined,
    ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref) {
      var tagName = _ref.tagName;
      return ['A', 'BUTTON'].includes(tagName);
    },
    loadingFontSize: 'auto',
    loadingTemplate: function loadingTemplate(loadingMessage) {
      return "<span class=\"loading-wrap\">\n    <span class=\"loading-text\">".concat(loadingMessage, "</span>\n    <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n    </span>\n  ");
    },
    locale: undefined,
    maintainMetaData: false,
    method: 'get',
    minimumCountColumns: 1,
    multipleSelectRow: false,
    pageList: [10, 25, 50, 100],
    pageNumber: 1,
    pageSize: 10,
    pagination: false,
    paginationDetailHAlign: 'left',
    // right, left
    paginationHAlign: 'right',
    // right, left
    paginationLoadMore: false,
    paginationLoop: true,
    paginationNextText: '&rsaquo;',
    paginationPagesBySide: 1,
    // Number of pages on each side (right, left) of the current page.
    paginationParts: ['pageInfo', 'pageSize', 'pageList'],
    paginationPreText: '&lsaquo;',
    paginationSuccessivelySize: 5,
    // Maximum successively number of pages in a row
    paginationUseIntermediate: false,
    // Calculate intermediate pages for quick access
    paginationVAlign: 'bottom',
    // bottom, top, both
    queryParams: function queryParams(params) {
      return params;
    },
    queryParamsType: 'limit',
    // 'limit', undefined
    regexSearch: false,
    rememberOrder: false,
    responseHandler: function responseHandler(res) {
      return res;
    },
    rowAttributes: function rowAttributes(row, index) {
      return {};
    },
    rowStyle: function rowStyle(row, index) {
      return {};
    },
    rtl: false,
    // false, true, 'ltr', 'rtl', 'auto'
    search: false,
    searchable: false,
    searchAccentNeutralise: false,
    searchAlign: 'right',
    searchHighlight: false,
    searchOnEnterKey: false,
    searchSelector: false,
    searchText: '',
    searchTimeOut: 500,
    selectItemName: 'btSelectItem',
    serverSort: true,
    showButtonIcons: true,
    showButtonText: false,
    showColumns: false,
    showColumnsSearch: false,
    showColumnsToggleAll: false,
    showExtendedPagination: false,
    showFooter: false,
    showFullscreen: false,
    showHeader: true,
    showPaginationSwitch: false,
    showRefresh: false,
    showSearchButton: false,
    showSearchClearButton: false,
    showToggle: false,
    sidePagination: 'client',
    // client or server
    silentSort: true,
    singleSelect: false,
    smartDisplay: true,
    sortable: true,
    sortClass: undefined,
    sortEmptyLast: false,
    orderList: undefined,
    // ['asc','desc'] | ['desc','asc'] | 'asc,desc'; undefined => legacy column `order` fallback
    sortName: undefined,
    sortOrder: undefined,
    sortReset: false,
    sortResetPage: false,
    sortStable: false,
    strictSearch: false,
    theadClasses: '',
    toolbar: undefined,
    toolbarAlign: 'left',
    totalField: 'total',
    totalNotFiltered: 0,
    totalNotFilteredField: 'totalNotFiltered',
    totalRows: 0,
    trimOnSearch: true,
    undefinedText: '-',
    uniqueId: undefined,
    url: undefined,
    virtualScroll: false,
    virtualScrollItemHeight: undefined,
    visibleSearch: false,
    onAll: function onAll(name, args) {
      return false;
    },
    onCheck: function onCheck(row) {
      return false;
    },
    onCheckAll: function onCheckAll(rows) {
      return false;
    },
    onCheckSome: function onCheckSome(rows) {
      return false;
    },
    onClickCell: function onClickCell(field, value, row, $element) {
      return false;
    },
    onClickRow: function onClickRow(item, $element) {
      return false;
    },
    onCollapseRow: function onCollapseRow(index, row) {
      return false;
    },
    onColumnSwitch: function onColumnSwitch(field, checked) {
      return false;
    },
    onColumnSwitchAll: function onColumnSwitchAll(checked) {
      return false;
    },
    onDblClickCell: function onDblClickCell(field, value, row, $element) {
      return false;
    },
    onDblClickRow: function onDblClickRow(item, $element) {
      return false;
    },
    onExpandRow: function onExpandRow(index, row, $detail) {
      return false;
    },
    onLoadError: function onLoadError(status) {
      return false;
    },
    onLoadSuccess: function onLoadSuccess(data) {
      return false;
    },
    onPageChange: function onPageChange(number, size) {
      return false;
    },
    onPostBody: function onPostBody() {
      return false;
    },
    onPostFooter: function onPostFooter() {
      return false;
    },
    onPostHeader: function onPostHeader() {
      return false;
    },
    onPreBody: function onPreBody(data) {
      return false;
    },
    onRefresh: function onRefresh(params) {
      return false;
    },
    onRefreshOptions: function onRefreshOptions(options) {
      return false;
    },
    onResetView: function onResetView() {
      return false;
    },
    onScrollBody: function onScrollBody() {
      return false;
    },
    onSearch: function onSearch(text) {
      return false;
    },
    onSort: function onSort(name, order) {
      return false;
    },
    onToggle: function onToggle(cardView) {
      return false;
    },
    onTogglePagination: function onTogglePagination(newState) {
      return false;
    },
    onUncheck: function onUncheck(row) {
      return false;
    },
    onUncheckAll: function onUncheckAll(rows) {
      return false;
    },
    onUncheckSome: function onUncheckSome(rows) {
      return false;
    },
    onVirtualScroll: function onVirtualScroll(startIndex, endIndex) {
      return false;
    }
  };
  var EN = {
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear Search';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing ".concat(totalRows, " rows");
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " rows per page");
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows");
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page ".concat(page);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    }
  };
  var COLUMN_DEFAULTS = {
    align: undefined,
    // string: left, right, center
    cardVisible: true,
    cellStyle: undefined,
    // function
    checkbox: false,
    checkboxEnabled: true,
    class: undefined,
    // string
    clickToSelect: true,
    colspan: undefined,
    // number
    detailFormatter: undefined,
    // function
    escape: undefined,
    // boolean
    events: undefined,
    falign: undefined,
    // string: left, right, center
    field: undefined,
    // string
    footerFormatter: undefined,
    // function
    footerStyle: undefined,
    // function
    formatter: undefined,
    // function
    halign: undefined,
    // left, right, center
    order: 'asc',
    // asc, desc
    orderList: undefined,
    // overrides the table-level orderList for this column
    radio: false,
    rowspan: undefined,
    // number
    searchable: true,
    searchFormatter: true,
    searchHighlightFormatter: false,
    showSelectTitle: false,
    sortable: false,
    sorter: undefined,
    // function
    sortName: undefined,
    // string
    switchable: true,
    switchableLabel: undefined,
    // string
    title: undefined,
    // string
    titleTooltip: undefined,
    // string
    valign: undefined,
    // top, middle, bottom
    visible: true,
    width: undefined,
    // number
    widthUnit: 'px'
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getFooterData', 'getSelections', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId', 'updateCell', 'updateCellByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'showColumn', 'hideColumn', 'getVisibleColumns', 'getHiddenColumns', 'showAllColumns', 'hideAllColumns', 'mergeCells', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'destroy', 'resetView', 'showLoading', 'hideLoading', 'togglePagination', 'toggleFullscreen', 'toggleView', 'resetSearch', 'filterBy', 'sortBy', 'sortReset', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'toggleDetailView', 'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId', 'expandAllRows', 'collapseAllRows', 'updateColumnTitle', 'updateFormatText'];
  var EVENTS = {
    'all.bs.table': 'onAll',
    'check-all.bs.table': 'onCheckAll',
    'check-some.bs.table': 'onCheckSome',
    'check.bs.table': 'onCheck',
    'click-cell.bs.table': 'onClickCell',
    'click-row.bs.table': 'onClickRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'column-switch-all.bs.table': 'onColumnSwitchAll',
    'column-switch.bs.table': 'onColumnSwitch',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'expand-row.bs.table': 'onExpandRow',
    'load-error.bs.table': 'onLoadError',
    'load-success.bs.table': 'onLoadSuccess',
    'page-change.bs.table': 'onPageChange',
    'post-body.bs.table': 'onPostBody',
    'post-footer.bs.table': 'onPostFooter',
    'post-header.bs.table': 'onPostHeader',
    'pre-body.bs.table': 'onPreBody',
    'refresh-options.bs.table': 'onRefreshOptions',
    'refresh.bs.table': 'onRefresh',
    'reset-view.bs.table': 'onResetView',
    'scroll-body.bs.table': 'onScrollBody',
    'search.bs.table': 'onSearch',
    'sort.bs.table': 'onSort',
    'toggle-pagination.bs.table': 'onTogglePagination',
    'toggle.bs.table': 'onToggle',
    'uncheck-all.bs.table': 'onUncheckAll',
    'uncheck-some.bs.table': 'onUncheckSome',
    'uncheck.bs.table': 'onUncheck',
    'virtual-scroll.bs.table': 'onVirtualScroll'
  };
  Object.assign(DEFAULTS, EN);
  var Constants = {
    COLUMN_DEFAULTS: COLUMN_DEFAULTS,
    CONSTANTS: CONSTANTS,
    DEFAULTS: DEFAULTS,
    EVENTS: EVENTS,
    ICONS: ICONS,
    LOCALES: {
      en: EN,
      'en-US': EN
    },
    METHODS: METHODS,
    THEME: "bootstrap".concat(bootstrapVersion),
    VERSION: VERSION
  };

  var InitializationModule = {
    initConstants: function initConstants() {
      var opts = this.options;
      this.constants = Constants.CONSTANTS;
      this.constants.theme = BootstrapTable.theme;
      this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle';

      // init iconsPrefix and icons
      var iconsPrefix = Utils.getIconsPrefix(BootstrapTable.theme);
      if (typeof opts.icons === 'string') {
        opts.icons = Utils.calculateObjectValue(null, opts.icons);
      }
      opts.iconsPrefix = opts.iconsPrefix || BootstrapTable.iconsPrefix || iconsPrefix;
      // Merge into a fresh object: Constants.ICONS[prefix] is the shared, per-theme
      // icon map (mutated in place by extensions via Utils.assignIcons), so it must
      // not be used as the Object.assign target - that would both leak per-instance
      // opts.icons overrides into shared global state, and (since BootstrapTable.icons
      // is the full multi-theme ICONS map) create a self-reference, e.g. icons.bi = icons.
      opts.icons = Object.assign({}, Utils.getIcons(Constants.ICONS, opts.iconsPrefix), opts.icons);

      // normalize orderList once at init so the click hot path deals only with arrays
      opts.orderList = Utils.normalizeOrderList(opts.orderList);

      // init buttons class
      var buttonsPrefix = opts.buttonsPrefix ? "".concat(opts.buttonsPrefix, "-") : '';
      this.constants.buttonsClass = [opts.buttonsPrefix, buttonsPrefix + opts.buttonsClass, Utils.sprintf("".concat(buttonsPrefix, "%s"), opts.iconSize)].join(' ').trim();
      this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {});
      if (_typeof(this.buttons) !== 'object') {
        this.buttons = {};
      }
    },
    initLocale: function initLocale() {
      if (this.options.locale) {
        var locales = BootstrapTable.LOCALES;
        var parts = this.options.locale.split(/-|_/);
        parts[0] = parts[0].toLowerCase();
        if (parts[1]) {
          parts[1] = parts[1].toUpperCase();
        }
        var localesToExtend = {};
        if (locales[this.options.locale]) {
          localesToExtend = locales[this.options.locale];
        } else if (locales[parts.join('-')]) {
          localesToExtend = locales[parts.join('-')];
        } else if (locales[parts[0]]) {
          localesToExtend = locales[parts[0]];
        }
        this._defaultLocales = this._defaultLocales || {};
        for (var _i = 0, _Object$entries = Object.entries(localesToExtend); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            formatName = _Object$entries$_i[0],
            func = _Object$entries$_i[1];
          var defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ? this._defaultLocales[formatName] : Constants.DEFAULTS[formatName];
          if (this.options[formatName] !== defaultLocale) {
            continue;
          }
          this.options[formatName] = func;
          this._defaultLocales[formatName] = func;
        }
      }
    },
    // Resolve the `rtl` option into a normalized internal value: 'ltr' or 'rtl'.
    // Called during initContainer (after initConstants), before rendering the root container.
    getRtlDirection: function getRtlDirection() {
      var rtl = this.options.rtl;
      if (rtl === 'auto') {
        // Probe priority: the table element ($el) first, then <html>, else ltr.
        var dir = (this.$el.getAttribute('dir') || document.documentElement.getAttribute('dir') || '').toLowerCase();
        return dir === 'rtl' ? 'rtl' : 'ltr';
      }
      if (rtl === true || rtl === 'rtl') {
        return 'rtl';
      }
      return 'ltr';
    },
    initContainer: function initContainer() {
      var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
      var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';
      var loadingTemplate = Utils.calculateObjectValue(this.options, this.options.loadingTemplate, [this.options.formatLoadingMessage()]);

      // Normalize the table direction once; only the root container carries it
      // (inherited by the table/toolbar/pagination). The original <table> dir is
      // left untouched so existing extensions (print, filter-control) keep working.
      var isRtl = this.getRtlDirection() === 'rtl';
      var rtlClass = isRtl ? ' bootstrap-table-rtl' : '';
      var rtlDir = isRtl ? ' dir="rtl"' : '';
      var containerHtml = "\n      <div class=\"bootstrap-table ".concat(this.constants.theme).concat(rtlClass, "\"").concat(rtlDir, ">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(topPagination, "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      ").concat(loadingTemplate, "\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"></div>\n      </div>\n      ").concat(bottomPagination, "\n      </div>\n    ");
      var template = document.createElement('template');
      template.innerHTML = containerHtml.trim();
      this.$container = template.content.firstChild;
      this.$el.after(this.$container);
      this.$tableContainer = this.$container.querySelector('.fixed-table-container');
      this.$tableHeader = this.$container.querySelector('.fixed-table-header');
      this.$tableBody = this.$container.querySelector('.fixed-table-body');
      this.$tableLoading = this.$container.querySelector('.fixed-table-loading');
      this.$tableFooter = this.$el.querySelector('tfoot');
      // checking if custom table-toolbar exists or not
      if (this.options.buttonsToolbar) {
        this.$toolbar = document.querySelector(this.options.buttonsToolbar) || document.body.querySelector(this.options.buttonsToolbar);
      } else {
        this.$toolbar = this.$container.querySelector('.fixed-table-toolbar');
      }
      this.$pagination = Array.from(this.$container.querySelectorAll('.fixed-table-pagination'));
      this.$tableBody.appendChild(this.$el);
      var clearfixDiv = document.createElement('div');
      clearfixDiv.className = 'clearfix';
      this.$container.after(clearfixDiv);
      var _iterator = _createForOfIteratorHelper(this.options.classes.split(' ').filter(function (c) {
          return c;
        })),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cls = _step.value;
          this.$el.classList.add(cls);
          this.$tableLoading.classList.add(cls);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.options.height) {
        this.$tableContainer.classList.add('fixed-height');
        if (this.options.showFooter) {
          this.$tableContainer.classList.add('has-footer');
        }
        if (this.options.classes.split(' ').includes('table-bordered')) {
          var borderDiv = document.createElement('div');
          borderDiv.className = 'fixed-table-border';
          this.$tableBody.appendChild(borderDiv);
          this.$tableBorder = borderDiv;
          this.$tableLoading.classList.add('fixed-table-border');
        }
        this.$tableFooter = this.$container.querySelector('.fixed-table-footer');
      }
    },
    initTable: function initTable() {
      var _this = this;
      var columns = [];
      this.$header = this.$el.querySelector(':scope > thead');
      if (!this.$header) {
        this.$header = document.createElement('thead');
        if (this.options.theadClasses) {
          this.$header.setAttribute('class', this.options.theadClasses);
        }
        this.$el.appendChild(this.$header);
      } else if (this.options.theadClasses) {
        var _iterator2 = _createForOfIteratorHelper(this.options.theadClasses.split(' ').filter(function (c) {
            return c;
          })),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var cls = _step2.value;
            this.$header.classList.add(cls);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      this._headerTrClasses = [];
      this._headerTrStyles = [];
      // eslint-disable-next-line no-unused-vars
      this.$header.querySelectorAll('tr').forEach(function (tr, i) {
        var column = [];

        // eslint-disable-next-line no-unused-vars
        tr.querySelectorAll('th').forEach(function (th, j) {
          // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
          if (typeof th.dataset.field !== 'undefined') {
            th.dataset.field = "".concat(th.dataset.field);
          }

          // eslint-disable-next-line no-use-before-define
          var _data = getThAllData(th);
          for (var key in _data) {
            if (BootstrapTable.COLUMN_DEFAULTS.hasOwnProperty(key)) {
              delete _data[key];
            }
          }
          column.push(Utils.extend({}, {
            _data: Utils.getRealDataAttr(_data),
            title: th.innerHTML,
            class: th.getAttribute('class'),
            titleTooltip: th.getAttribute('title'),
            rowspan: th.getAttribute('rowspan') ? +th.getAttribute('rowspan') : undefined,
            colspan: th.getAttribute('colspan') ? +th.getAttribute('colspan') : undefined,
            scope: th.getAttribute('scope') ? th.getAttribute('scope') : undefined,
            style: Utils.normalizeStyle(th.getAttribute('style'))
            // eslint-disable-next-line no-use-before-define
          }, getThAllData(th)));
        });
        columns.push(column);
        if (tr.getAttribute('class')) {
          _this._headerTrClasses.push(tr.getAttribute('class'));
        }
        if (tr.getAttribute('style')) {
          _this._headerTrStyles.push(tr.getAttribute('style'));
        }
      });
      if (!Array.isArray(this.options.columns[0])) {
        this.options.columns = [this.options.columns];
      }
      this.options.columns = Utils.extend(true, [], columns, this.options.columns);
      this.columns = [];
      this.fieldsColumnsIndex = [];
      if (this.optionsColumnsChanged !== false) {
        Utils.setFieldIndex(this.options.columns);
      }
      this.options.columns.forEach(function (columns, i) {
        columns.forEach(function (_column, j) {
          var column = Utils.extend({}, Constants.COLUMN_DEFAULTS, _column, {
            passed: _column
          });
          column.orderList = Utils.normalizeOrderList(column.orderList);
          if (typeof column.fieldIndex !== 'undefined') {
            _this.columns[column.fieldIndex] = column;
            _this.fieldsColumnsIndex[column.field] = column.fieldIndex;
          }
          _this.options.columns[i][j] = column;
        });
      });

      // if options.data is setting, do not process tbody and tfoot data
      if (!this.options.data.length) {
        var htmlData = Utils.trToData(this.columns, Array.from(this.$el.querySelectorAll(':scope > tbody > tr')));
        if (htmlData.length) {
          this.options.data = htmlData;
          this.fromHtml = true;
        }
      }
      if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
        this.footerData = Utils.trToData(this.columns, Array.from(this.$el.querySelectorAll(':scope > tfoot > tr')));
      }
      if (this.footerData) {
        var tfoot = this.$el.querySelector('tfoot');
        if (tfoot) {
          tfoot.innerHTML = '<tr></tr>';
        }
      }
      if (!this.options.showFooter || this.options.cardView) {
        if (this.$tableFooter) this.$tableFooter.style.display = 'none';
      } else if (this.$tableFooter) this.$tableFooter.style.display = '';
    }
  };
  function getThAllData(th) {
    var data = {};

    // eslint-disable-next-line guard-for-in
    for (var key in th.dataset) {
      var value = th.dataset[key];
      try {
        data[key] = JSON.parse(value);
      } catch (_unused) {
        data[key] = value;
      }
    }
    return data;
  }

  var es_array_find = {};

  var hasRequiredEs_array_find;

  function requireEs_array_find () {
  	if (hasRequiredEs_array_find) return es_array_find;
  	hasRequiredEs_array_find = 1;
  	var $ = require_export();
  	var $find = requireArrayIteration().find;
  	var addToUnscopables = requireAddToUnscopables();

  	var FIND = 'find';
  	var SKIPS_HOLES = true;

  	// Shouldn't skip holes
  	// eslint-disable-next-line es/no-array-prototype-find -- testing
  	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  	// `Array.prototype.find` method
  	// https://tc39.es/ecma262/#sec-array.prototype.find
  	$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  	  find: function find(callbackfn /* , that = undefined */) {
  	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables(FIND);
  	return es_array_find;
  }

  requireEs_array_find();

  var es_array_findIndex = {};

  var hasRequiredEs_array_findIndex;

  function requireEs_array_findIndex () {
  	if (hasRequiredEs_array_findIndex) return es_array_findIndex;
  	hasRequiredEs_array_findIndex = 1;
  	var $ = require_export();
  	var $findIndex = requireArrayIteration().findIndex;
  	var addToUnscopables = requireAddToUnscopables();

  	var FIND_INDEX = 'findIndex';
  	var SKIPS_HOLES = true;

  	// Shouldn't skip holes
  	// eslint-disable-next-line es/no-array-prototype-findindex -- testing
  	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

  	// `Array.prototype.findIndex` method
  	// https://tc39.es/ecma262/#sec-array.prototype.findindex
  	$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
  	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables(FIND_INDEX);
  	return es_array_findIndex;
  }

  requireEs_array_findIndex();

  var es_array_reduce = {};

  var arrayReduce;
  var hasRequiredArrayReduce;

  function requireArrayReduce () {
  	if (hasRequiredArrayReduce) return arrayReduce;
  	hasRequiredArrayReduce = 1;
  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var IndexedObject = requireIndexedObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();

  	var $TypeError = TypeError;

  	var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

  	// `Array.prototype.{ reduce, reduceRight }` methods implementation
  	var createMethod = function (IS_RIGHT) {
  	  return function (that, callbackfn, argumentsLength, memo) {
  	    var O = toObject(that);
  	    var self = IndexedObject(O);
  	    var length = lengthOfArrayLike(O);
  	    aCallable(callbackfn);
  	    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
  	    var index = IS_RIGHT ? length - 1 : 0;
  	    var i = IS_RIGHT ? -1 : 1;
  	    if (argumentsLength < 2) while (true) {
  	      if (index in self) {
  	        memo = self[index];
  	        index += i;
  	        break;
  	      }
  	      index += i;
  	      if (IS_RIGHT ? index < 0 : length <= index) {
  	        throw new $TypeError(REDUCE_EMPTY);
  	      }
  	    }
  	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
  	      memo = callbackfn(memo, self[index], index, O);
  	    }
  	    return memo;
  	  };
  	};

  	arrayReduce = {
  	  // `Array.prototype.reduce` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  	  left: createMethod(false),
  	  // `Array.prototype.reduceRight` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  	  right: createMethod(true)
  	};
  	return arrayReduce;
  }

  var environment;
  var hasRequiredEnvironment;

  function requireEnvironment () {
  	if (hasRequiredEnvironment) return environment;
  	hasRequiredEnvironment = 1;
  	/* global Bun, Deno -- detection */
  	var globalThis = requireGlobalThis();
  	var userAgent = requireEnvironmentUserAgent();
  	var classof = requireClassofRaw();

  	var userAgentStartsWith = function (string) {
  	  return userAgent.slice(0, string.length) === string;
  	};

  	environment = (function () {
  	  if (userAgentStartsWith('Bun/')) return 'BUN';
  	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  	  if (userAgentStartsWith('Deno/')) return 'DENO';
  	  if (userAgentStartsWith('Node.js/')) return 'NODE';
  	  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  	  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  	  if (classof(globalThis.process) === 'process') return 'NODE';
  	  if (globalThis.window && globalThis.document) return 'BROWSER';
  	  return 'REST';
  	})();
  	return environment;
  }

  var environmentIsNode;
  var hasRequiredEnvironmentIsNode;

  function requireEnvironmentIsNode () {
  	if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  	hasRequiredEnvironmentIsNode = 1;
  	var ENVIRONMENT = requireEnvironment();

  	environmentIsNode = ENVIRONMENT === 'NODE';
  	return environmentIsNode;
  }

  var hasRequiredEs_array_reduce;

  function requireEs_array_reduce () {
  	if (hasRequiredEs_array_reduce) return es_array_reduce;
  	hasRequiredEs_array_reduce = 1;
  	var $ = require_export();
  	var $reduce = requireArrayReduce().left;
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();
  	var CHROME_VERSION = requireEnvironmentV8Version();
  	var IS_NODE = requireEnvironmentIsNode();

  	// Chrome 80-82 has a critical bug
  	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  	var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
  	var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

  	// `Array.prototype.reduce` method
  	// https://tc39.es/ecma262/#sec-array.prototype.reduce
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  reduce: function reduce(callbackfn /* , initialValue */) {
  	    var length = arguments.length;
  	    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  	  }
  	});
  	return es_array_reduce;
  }

  requireEs_array_reduce();

  var es_array_splice = {};

  var deletePropertyOrThrow;
  var hasRequiredDeletePropertyOrThrow;

  function requireDeletePropertyOrThrow () {
  	if (hasRequiredDeletePropertyOrThrow) return deletePropertyOrThrow;
  	hasRequiredDeletePropertyOrThrow = 1;
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	deletePropertyOrThrow = function (O, P) {
  	  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  	};
  	return deletePropertyOrThrow;
  }

  var hasRequiredEs_array_splice;

  function requireEs_array_splice () {
  	if (hasRequiredEs_array_splice) return es_array_splice;
  	hasRequiredEs_array_splice = 1;
  	var $ = require_export();
  	var toObject = requireToObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var setArrayLength = requireArraySetLength();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var arraySpeciesCreate = requireArraySpeciesCreate();
  	var createProperty = requireCreateProperty();
  	var deletePropertyOrThrow = requireDeletePropertyOrThrow();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  	var max = Math.max;
  	var min = Math.min;

  	// `Array.prototype.splice` method
  	// https://tc39.es/ecma262/#sec-array.prototype.splice
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  splice: function splice(start, deleteCount /* , ...items */) {
  	    var O = toObject(this);
  	    var len = lengthOfArrayLike(O);
  	    var actualStart = toAbsoluteIndex(start, len);
  	    var argumentsLength = arguments.length;
  	    var insertCount, actualDeleteCount, A, k, from, to;
  	    if (argumentsLength === 0) {
  	      insertCount = actualDeleteCount = 0;
  	    } else if (argumentsLength === 1) {
  	      insertCount = 0;
  	      actualDeleteCount = len - actualStart;
  	    } else {
  	      insertCount = argumentsLength - 2;
  	      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
  	    }
  	    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
  	    A = arraySpeciesCreate(O, actualDeleteCount);
  	    for (k = 0; k < actualDeleteCount; k++) {
  	      from = actualStart + k;
  	      if (from in O) createProperty(A, k, O[from]);
  	    }
  	    setArrayLength(A, actualDeleteCount);
  	    if (insertCount < actualDeleteCount) {
  	      for (k = actualStart; k < len - actualDeleteCount; k++) {
  	        from = k + actualDeleteCount;
  	        to = k + insertCount;
  	        if (from in O) O[to] = O[from];
  	        else deletePropertyOrThrow(O, to);
  	      }
  	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
  	    } else if (insertCount > actualDeleteCount) {
  	      for (k = len - actualDeleteCount; k > actualStart; k--) {
  	        from = k + actualDeleteCount - 1;
  	        to = k + insertCount - 1;
  	        if (from in O) O[to] = O[from];
  	        else deletePropertyOrThrow(O, to);
  	      }
  	    }
  	    for (k = 0; k < insertCount; k++) {
  	      O[k + actualStart] = arguments[k + 2];
  	    }
  	    setArrayLength(O, len - actualDeleteCount + insertCount);
  	    return A;
  	  }
  	});
  	return es_array_splice;
  }

  requireEs_array_splice();

  var es_iterator_find = {};

  var hasRequiredEs_iterator_find;

  function requireEs_iterator_find () {
  	if (hasRequiredEs_iterator_find) return es_iterator_find;
  	hasRequiredEs_iterator_find = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var iterate = requireIterate();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('find', TypeError);

  	// `Iterator.prototype.find` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.find
  	$({ target: 'Iterator', proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
  	  find: function find(predicate) {
  	    anObject(this);
  	    try {
  	      aCallable(predicate);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);

  	    var record = getIteratorDirect(this);
  	    var counter = 0;
  	    return iterate(record, function (value, stop) {
  	      if (predicate(value, counter++)) return stop(value);
  	    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  	  }
  	});
  	return es_iterator_find;
  }

  requireEs_iterator_find();

  var es_iterator_reduce = {};

  var hasRequiredEs_iterator_reduce;

  function requireEs_iterator_reduce () {
  	if (hasRequiredEs_iterator_reduce) return es_iterator_reduce;
  	hasRequiredEs_iterator_reduce = 1;
  	var $ = require_export();
  	var iterate = requireIterate();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();
  	var apply = requireFunctionApply();
  	var fails = requireFails();

  	var $TypeError = TypeError;

  	// https://bugs.webkit.org/show_bug.cgi?id=291651
  	var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  	  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  	  [].keys().reduce(function () { /* empty */ }, undefined);
  	});

  	var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

  	// `Iterator.prototype.reduce` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
  	$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  	  reduce: function reduce(reducer /* , initialValue */) {
  	    anObject(this);
  	    try {
  	      aCallable(reducer);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    var noInitial = arguments.length < 2;
  	    var accumulator = noInitial ? undefined : arguments[1];
  	    if (reduceWithoutClosingOnEarlyError) {
  	      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
  	    }
  	    var record = getIteratorDirect(this);
  	    var counter = 0;
  	    iterate(record, function (value) {
  	      if (noInitial) {
  	        noInitial = false;
  	        accumulator = value;
  	      } else {
  	        accumulator = reducer(accumulator, value, counter);
  	      }
  	      counter++;
  	    }, { IS_RECORD: true });
  	    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
  	    return accumulator;
  	  }
  	});
  	return es_iterator_reduce;
  }

  requireEs_iterator_reduce();

  var BLOCK_ROWS = 50;
  var CLUSTER_BLOCKS = 4;
  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(options) {
      var _this = this;
      _classCallCheck(this, VirtualScroll);
      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.itemHeight = options.itemHeight;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows, options.fixedScroll);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;
      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);
          _this.callback(_this.startIndex, _this.endIndex);
        }
      };
      this.scrollEl.addEventListener('scroll', onScroll, false);
      this.destroy = function () {
        _this.contentEl.innerHtml = '';
        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }
    return _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows, fixedScroll) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.scrollTop = this.scrollEl.scrollTop;
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        } else if (this.blockHeight === 0) {
          this.getRowsHeight(rows);
        }
        var data = this.initData(rows, this.getNum(fixedScroll));
        var thisRows = data.rows.join('');
        var dataChanged = this.checkChanges('data', thisRows);
        var topOffsetChanged = this.checkChanges('top', data.topOffset);
        var bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
        var html = [];
        if (dataChanged && topOffsetChanged) {
          if (data.topOffset) {
            html.push(this.getExtra('top', data.topOffset));
          }
          html.push(thisRows);
          if (data.bottomOffset) {
            html.push(this.getExtra('bottom', data.bottomOffset));
          }
          this.startIndex = data.start;
          this.endIndex = data.end;
          this.contentEl.innerHTML = html.join('');
          if (fixedScroll) {
            this.contentEl.scrollTop = this.cache.scrollTop;
          }
        } else if (bottomOffsetChanged) {
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        if (typeof this.itemHeight === 'undefined' || this.itemHeight === 0) {
          var nodes = this.contentEl.children;
          var node = nodes[Math.floor(nodes.length / 2)];
          this.itemHeight = node.offsetHeight;
        }
        this.blockHeight = this.itemHeight * BLOCK_ROWS;
        this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum(fixedScroll) {
        this.scrollTop = fixedScroll ? this.cache.scrollTop : this.scrollEl.scrollTop;
        return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
      }
    }, {
      key: "initData",
      value: function initData(rows, num) {
        if (rows.length < BLOCK_ROWS) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: rows
          };
        }
        var start = Math.max((this.clusterRows - BLOCK_ROWS) * num, 0);
        var end = start + this.clusterRows;
        var topOffset = Math.max(start * this.itemHeight, 0);
        var bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
        var thisRows = [];
        var rowsAbove = start;
        if (topOffset < 1) {
          rowsAbove++;
        }
        for (var i = start; i < end; i++) {
          rows[i] && thisRows.push(rows[i]);
        }
        return {
          start: start,
          end: end,
          topOffset: topOffset,
          bottomOffset: bottomOffset,
          rowsAbove: rowsAbove,
          rows: thisRows
        };
      }
    }, {
      key: "checkChanges",
      value: function checkChanges(type, value) {
        var changed = value !== this.cache[type];
        this.cache[type] = value;
        return changed;
      }
    }, {
      key: "getExtra",
      value: function getExtra(className, height) {
        var tag = document.createElement('tr');
        tag.className = "virtual-scroll-".concat(className);
        if (height) {
          tag.style.height = "".concat(height, "px");
        }
        return tag.outerHTML;
      }
    }]);
  }();

  var BodyModule = {
    initBodyEvent: function initBodyEvent() {
      var _this = this;
      // Remove old event listeners
      if (this._bodyClickHandler) {
        this.$body.removeEventListener('click', this._bodyClickHandler);
        this.$body.removeEventListener('dblclick', this._bodyClickHandler);
      }
      if (this._bodyMousedownHandler) {
        this.$body.removeEventListener('mousedown', this._bodyMousedownHandler);
      }

      // click to select by column — use event delegation on $body
      this._bodyClickHandler = function (e) {
        var td = e.target.closest('td');
        if (!td || !_this.$body.contains(td)) return;
        var tr = td.parentElement;
        if (!tr || !tr.hasAttribute('data-index') || tr.parentElement !== _this.$body) return;
        if (td.querySelector('.detail-icon') || td.cellIndex - Utils.getDetailViewIndexOffset(_this.options) < 0) {
          return;
        }
        var cardViewsEl = e.target.closest('.card-views');
        var cardViewTarget = e.target.closest('.card-view');
        var rowIndex = +tr.dataset.index;
        var item = _this.data[rowIndex];
        var index;
        if (_this.options.cardView) {
          var cardViewArr = cardViewsEl ? Array.from(cardViewsEl.children) : [];
          index = cardViewArr.indexOf(cardViewTarget);
        } else {
          index = td.cellIndex;
        }
        var fields = _this.getVisibleFields();
        var field = fields[index - Utils.getDetailViewIndexOffset(_this.options)];
        var column = _this.columns[_this.fieldsColumnsIndex[field]];
        var value = Utils.getItemField(item, field, _this.options.escape, column.escape);
        _this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, td);
        _this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, tr, field);

        // if click to select - then trigger the checkbox/radio click
        if (e.type === 'click' && _this.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this.options, _this.options.ignoreClickToSelectOn, [e.target])) {
          var selectItem = tr.querySelector(Utils.sprintf('[name="%s"]', _this.options.selectItemName));
          if (selectItem) {
            selectItem.click();
          }
        }
        if (e.type === 'click' && _this.options.detailViewByClick) {
          _this.toggleDetailView(rowIndex, _this.header.detailFormatters[_this.fieldsColumnsIndex[field]]);
        }
      };

      // https://github.com/jquery/jquery/issues/1741
      this._bodyMousedownHandler = function (e) {
        _this.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey;
        _this.multipleSelectRowShiftKey = e.shiftKey;
      };
      this.$body.addEventListener('click', this._bodyClickHandler);
      this.$body.addEventListener('dblclick', this._bodyClickHandler);
      this.$body.addEventListener('mousedown', this._bodyMousedownHandler);

      // detail icon click — delegation
      if (this._bodyDetailIconHandler) {
        this.$body.removeEventListener('click', this._bodyDetailIconHandler);
      }
      this._bodyDetailIconHandler = function (e) {
        var icon = e.target.closest('.detail-icon');
        if (!icon) return;
        e.preventDefault();
        var td = icon.parentElement;
        var tr = td ? td.parentElement : null;
        if (tr && tr.hasAttribute('data-index')) {
          _this.toggleDetailView(+tr.dataset.index);
        }
      };
      this.$body.addEventListener('click', this._bodyDetailIconHandler);

      // select item click
      this.$selectItem = Array.from(this.$body.querySelectorAll(Utils.sprintf('[name="%s"]', this.options.selectItemName)));
      if (this._selectItemClickHandler) ;
      this._selectItemClickHandler = function (e) {
        e.stopImmediatePropagation();
        var el = e.currentTarget;
        _this._toggleCheck(el.checked, +el.dataset.index);
      };
      this.$selectItem.forEach(function (el) {
        return el.addEventListener('click', _this._selectItemClickHandler);
      });
      this.header.events.forEach(function (_events, i) {
        var events = _events;
        if (!events) {
          return;
        }
        // fix bug, if events is defined with namespace
        if (typeof events === 'string') {
          events = Utils.calculateObjectValue(null, events);
        }
        if (!events) {
          throw new Error("Unknown event in the scope: ".concat(_events));
        }
        var field = _this.header.fields[i];
        var fieldIndex = _this.getVisibleFields().indexOf(field);
        if (fieldIndex === -1) {
          return;
        }
        fieldIndex += Utils.getDetailViewIndexOffset(_this.options);
        var _loop = function _loop(key) {
          if (!events.hasOwnProperty(key)) {
            return 1; // continue
          }
          var event = events[key];
          _this.$body.querySelectorAll(':scope > tr:not(.no-records-found)').forEach(function (tr) {
            var tds = _this.options.cardView ? tr.querySelectorAll('.card-views > .card-view') : tr.querySelectorAll(':scope > td');
            var td = tds[fieldIndex];
            if (!td) return;
            var index = key.indexOf(' ');
            var name = key.substring(0, index);
            var el = key.substring(index + 1);
            td.querySelectorAll(el).forEach(function (target) {
              target.addEventListener(name, function (e) {
                var rowIndex = +tr.dataset.index;
                var row = _this.data[rowIndex];
                var value = row[field];
                event.apply(_this, [e, value, row, rowIndex]);
              });
            });
          });
        };
        for (var key in events) {
          if (_loop(key)) continue;
        }
      });
    },
    initHiddenRows: function initHiddenRows() {
      this.hiddenRows = [];
    },
    // eslint-disable-next-line no-unused-vars
    initRow: function initRow(item, i, data, trFragments) {
      var _this2 = this;
      if (Utils.findIndex(this.hiddenRows, item) > -1) {
        return;
      }
      var style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], {});
      var attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], {});
      var data_ = {};
      if (item._data && !Utils.isEmptyObject(item._data)) {
        for (var _i = 0, _Object$entries = Object.entries(item._data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];
          // ignore data-index
          if (k === 'index') {
            return;
          }
          data_["data-".concat(k)] = _typeof(v) === 'object' ? JSON.stringify(v) : v;
        }
      }
      var tr = Utils.h('tr', _objectSpread2(_objectSpread2({
        id: Array.isArray(item) ? undefined : item._id,
        class: style && style.classes || (Array.isArray(item) ? undefined : item._class),
        style: style && style.css || (Array.isArray(item) ? undefined : item._style),
        'data-index': i,
        'data-uniqueid': Utils.getItemField(item, this.options.uniqueId, false),
        'data-has-detail-view': this.options.detailView && Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined
      }, attributes), data_));
      var trChildren = [];
      var detailViewTemplate = '';
      if (Utils.hasDetailViewIcon(this.options)) {
        detailViewTemplate = Utils.h('td');
        if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
          detailViewTemplate.append(Utils.h('a', {
            class: 'detail-icon',
            href: '#',
            html: Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)
          }));
        }
      }
      if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
        trChildren.push(detailViewTemplate);
      }
      var tds = this.header.fields.map(function (field, j) {
        var column = _this2.columns[j];
        var value_ = Utils.getItemField(item, field, _this2.options.escape, column.escape);
        var value;
        var attrs = {
          class: _this2.header.classes[j] ? [_this2.header.classes[j]] : [],
          style: _this2.header.styles[j] ? [_this2.header.styles[j]] : []
        };
        var cardViewClass = "card-view card-view-field-".concat(field);
        if ((_this2.fromHtml || _this2.autoMergeCells) && typeof value_ === 'undefined') {
          if (!column.checkbox && !column.radio) {
            return;
          }
        }
        if (!column.visible) {
          return;
        }
        if (_this2.options.cardView && !column.cardVisible) {
          return;
        }

        // handle class, style, id, rowspan, colspan and title of td
        for (var _i2 = 0, _arr = ['class', 'style', 'id', 'rowspan', 'colspan', 'title']; _i2 < _arr.length; _i2++) {
          var attr = _arr[_i2];
          var _value = item["_".concat(field, "_").concat(attr)];
          if (!_value) {
            continue;
          }
          if (attrs[attr]) {
            attrs[attr].push(_value);
          } else {
            attrs[attr] = _value;
          }
        }
        var cellStyle = Utils.calculateObjectValue(_this2.header, _this2.header.cellStyles[j], [value_, item, i, field], {});
        if (cellStyle.classes) {
          attrs.class.push(cellStyle.classes);
        }
        if (cellStyle.css) {
          attrs.style.push(cellStyle.css);
        }
        value = Utils.calculateObjectValue(column, _this2.header.formatters[j], [value_, item, i, field], value_);
        if (!(column.checkbox || column.radio)) {
          value = typeof value === 'undefined' || value === null ? _this2.options.undefinedText : value;
        }
        if (column.searchable && _this2.searchText && _this2.options.searchHighlight && !(column.checkbox || column.radio)) {
          var searchText = _this2.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          if (_this2.options.searchAccentNeutralise && typeof value === 'string') {
            var indexRegex = new RegExp("".concat(Utils.normalizeAccent(searchText)), 'gmi');
            var match = indexRegex.exec(Utils.normalizeAccent(value));
            if (match) {
              searchText = value.substring(match.index, match.index + searchText.length);
            }
          }
          var defValue = Utils.replaceSearchMark(value, searchText);
          value = Utils.calculateObjectValue(column, column.searchHighlightFormatter, [value, _this2.searchText], defValue);
        }
        if (item["_".concat(field, "_data")] && !Utils.isEmptyObject(item["_".concat(field, "_data")])) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(item["_".concat(field, "_data")]); _i3 < _Object$entries2.length; _i3++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
              _k = _Object$entries2$_i[0],
              _v = _Object$entries2$_i[1];
            // ignore data-index
            if (_k === 'index') {
              return;
            }
            attrs["data-".concat(_k)] = _v;
          }
        }
        if (column.checkbox || column.radio) {
          var type = column.checkbox ? 'checkbox' : 'radio';
          var isChecked = Utils.isObject(value) && value.hasOwnProperty('checked') ? value.checked : (value === true || value_) && value !== false;
          var isDisabled = !column.checkboxEnabled || value && value.disabled;
          var valueNodes = _this2.header.formatters[j] && (typeof value === 'string' || Utils.isDomNode(value)) ? Utils.htmlToNodes(value) : [];
          item[_this2.header.stateField] = value === true || !!value_ || value && value.checked;
          var inputAttrs = {
            'data-index': i,
            name: _this2.options.selectItemName,
            type: type,
            value: item[_this2.options.idField],
            checked: isChecked ? 'checked' : undefined,
            disabled: isDisabled ? 'disabled' : undefined
          };
          var config = Utils.getCheckboxVdomConfig({
            inputAttrs: inputAttrs,
            formCheckClass: _this2.constants.classes.formCheck,
            formCheckInputClass: _this2.constants.classes.formCheckInput
          });
          var wrapperChildNodes = [Utils.h('input', config.inputAttrs)];
          if (config.hasSpan) {
            wrapperChildNodes.push(Utils.h('span'));
          }
          var children = [Utils.h(config.wrapperTag, config.wrapperAttrs, wrapperChildNodes)].concat(_toConsumableArray(valueNodes));
          return Utils.h(_this2.options.cardView ? 'div' : 'td', {
            class: [_this2.options.cardView ? cardViewClass : 'bs-checkbox', column.class],
            style: _this2.options.cardView ? undefined : attrs.style
          }, children);
        }
        if (_this2.options.cardView) {
          if (_this2.options.smartDisplay && value === '') {
            return Utils.h('div', {
              class: cardViewClass
            });
          }
          var cardTitle = _this2.options.showHeader ? Utils.h('span', {
            class: ['card-view-title', cellStyle.classes],
            style: attrs.style,
            html: Utils.getFieldTitle(_this2.columns, field)
          }) : '';
          return Utils.h('div', {
            class: cardViewClass
          }, [cardTitle, Utils.h('span', {
            class: ['card-view-value', cellStyle.classes],
            style: attrs.style
          }, _toConsumableArray(Utils.htmlToNodes(value)))]);
        }
        return Utils.h('td', attrs, _toConsumableArray(Utils.htmlToNodes(value)));
      }).filter(function (x) {
        return x;
      });
      trChildren.push.apply(trChildren, _toConsumableArray(tds));
      if (detailViewTemplate && this.options.detailViewAlign === 'right') {
        trChildren.push(detailViewTemplate);
      }
      if (this.options.cardView) {
        tr.append(Utils.h('td', {
          colspan: this.header.fields.length
        }, [Utils.h('div', {
          class: 'card-views'
        }, trChildren)]));
      } else {
        tr.append.apply(tr, trChildren);
      }
      return tr;
    },
    initBody: function initBody(fixedScroll, updatedUid) {
      var _this3 = this;
      var data = this.getData();
      this.trigger('pre-body', data);
      this.$body = this.$el.querySelector(':scope > tbody');
      if (!this.$body) {
        this.$body = document.createElement('tbody');
        this.$el.appendChild(this.$body);
      }

      // Fix #389 Bootstrap-table-flatJSON is not working
      if (!this.options.pagination || this.options.sidePagination === 'server') {
        this.pageFrom = 1;
        this.pageTo = data.length;
      }
      var rows = [];
      var trFragments = document.createDocumentFragment();
      var hasTr = false;
      var toExpand = [];
      this.autoMergeCells = Utils.checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo));
      for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
        var item = data[i];
        var tr = this.initRow(item, i, data, trFragments);
        hasTr = hasTr || !!tr;
        if (tr && tr instanceof Node) {
          var uniqueId = this.options.uniqueId;
          var toAppend = [tr];
          if (uniqueId && item.hasOwnProperty(uniqueId)) {
            var itemUniqueId = item[uniqueId];
            var oldTr = this.$body.querySelector(Utils.sprintf(':scope > tr[data-uniqueid="%s"][data-has-detail-view]', itemUniqueId));
            var oldTrNext = oldTr ? oldTr.nextElementSibling : null;
            if (oldTrNext && oldTrNext.classList.contains('detail-view')) {
              toExpand.push(i);
              if (!updatedUid || itemUniqueId !== updatedUid) {
                toAppend.push(oldTrNext);
              }
            }
          }
          if (!this.options.virtualScroll) {
            toAppend.forEach(function (el) {
              return trFragments.appendChild(el);
            });
          } else {
            rows.push(toAppend.map(function (el) {
              return el.outerHTML;
            }).join(''));
          }
        }
      }
      this.$el.removeAttribute('role');

      // show no records
      if (!hasTr) {
        this.$body.innerHTML = Utils.sprintf('<tr class="no-records-found"><td colspan="%s">%s</td></tr>', this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options), this.options.formatNoMatches());
        this.$el.setAttribute('role', 'presentation');
      } else if (!this.options.virtualScroll) {
        this.$body.innerHTML = '';
        this.$body.appendChild(trFragments);
      } else {
        if (this.virtualScroll) {
          this.virtualScroll.destroy();
        }
        this.virtualScroll = new VirtualScroll({
          rows: rows,
          fixedScroll: fixedScroll,
          scrollEl: this.$tableBody,
          contentEl: this.$body,
          itemHeight: this.options.virtualScrollItemHeight,
          callback: function callback(startIndex, endIndex) {
            _this3.fitHeader();
            _this3.initBodyEvent();
            _this3.trigger('virtual-scroll', startIndex, endIndex);
          }
        });
      }
      toExpand.forEach(function (index) {
        _this3.expandRow(index);
      });
      if (!fixedScroll) {
        this.scrollTo(0);
      }
      this.initBodyEvent();
      this.initFooter();
      this.resetView();
      this.updateSelected();
      if (this.options.sidePagination !== 'server') {
        this.options.totalRows = data.length;
      }
      this.trigger('post-body', data);
    },
    resetView: function resetView(params) {
      var _this4 = this;
      var padding = 0;
      if (params && params.height) {
        this.options.height = params.height;
      }
      this.$tableContainer.classList.toggle('has-card-view', this.options.cardView);
      if (this.options.height && !this.$el.offsetWidth && !this.$el.offsetHeight) {
        if (!this._resizeObserver) {
          this._setDelayTimeout('resetView', function () {
            return _this4.resetView();
          }, 100);
        }
        return;
      }
      if (this.options.height) {
        var fixedBody = this.$tableBody;
        this.hasScrollBar = fixedBody.scrollWidth > fixedBody.clientWidth;
      }
      if (!this.options.cardView && this.options.showHeader && this.options.height) {
        this.$tableHeader.style.display = '';
        this.resetHeader();
        padding += this.$header.offsetHeight + 1;
      } else {
        this.$tableHeader.style.display = 'none';
        this.trigger('post-header');
      }
      if (!this.options.cardView && this.options.showFooter) {
        this.$tableFooter.style.display = '';
        this.fitFooter();
        if (this.options.height) {
          padding += this.$tableFooter.offsetHeight;
        }
      }
      if (this.$container.classList.contains('fullscreen')) {
        this.$tableContainer.style.height = '';
        this.$tableContainer.style.width = '';
      } else if (this.options.height) {
        if (this.$tableBorder) {
          this.$tableBorder.style.width = '';
          this.$tableBorder.style.height = '';
        }
        var toolbarHeight = outerHeight(this.$toolbar);
        var paginationHeight = this.$pagination.reduce(function (sum, el) {
          return sum + outerHeight(el);
        }, 0);
        var height = this.options.height - toolbarHeight - paginationHeight;
        var bodyTable = this.$tableBody.querySelector(':scope > table');
        var tableHeight = bodyTable ? bodyTable.offsetHeight : 0;
        this.$tableContainer.style.height = "".concat(height, "px");
        if (this.$tableBorder && bodyTable && bodyTable.offsetParent !== null) {
          var tableBorderHeight = height - tableHeight - 2;
          if (this.hasScrollBar) {
            tableBorderHeight -= Utils.getScrollBarWidth();
          }
          this.$tableBorder.style.width = "".concat(bodyTable.offsetWidth, "px");
          this.$tableBorder.style.height = "".concat(tableBorderHeight, "px");
        }
      }
      if (this.options.cardView) {
        // remove the element css
        this.$el.style.marginTop = '0';
        this.$tableContainer.style.paddingBottom = '0';
        if (this.$tableFooter) this.$tableFooter.style.display = 'none';
      } else {
        // Assign the correct sortable arrow
        this.resetCaret();
        this.$tableContainer.style.paddingBottom = "".concat(padding, "px");
      }
      this.trigger('reset-view');
    },
    showLoading: function showLoading() {
      this.$tableLoading.classList.add('open');
      var fontSize = this.options.loadingFontSize;
      if (this.options.loadingFontSize === 'auto') {
        fontSize = this.$tableLoading.offsetWidth * 0.04;
        fontSize = Math.max(12, fontSize);
        fontSize = Math.min(32, fontSize);
        fontSize = "".concat(fontSize, "px");
      }
      var loadingWrap = this.$tableLoading.querySelector('.loading-wrap');
      if (loadingWrap) {
        loadingWrap.style.fontSize = fontSize;
      } else {
        this.$tableLoading.style.fontSize = fontSize;
      }
      var loadingText = this.$tableLoading.querySelector('.loading-text');
      if (loadingText) loadingText.style.fontSize = fontSize;
    },
    hideLoading: function hideLoading() {
      this.$tableLoading.classList.remove('open');
    },
    scrollTo: function scrollTo(params) {
      var options = {
        unit: 'px',
        value: 0
      };
      if (_typeof(params) === 'object') {
        options = Object.assign(options, params);
      } else if (typeof params === 'string' && params === 'bottom') {
        options.value = this.$tableBody.scrollHeight;
      } else if (typeof params === 'string' || typeof params === 'number') {
        options.value = params;
      }
      var scrollTo = options.value;
      if (options.unit === 'rows') {
        scrollTo = 0;
        var trs = Array.from(this.$body.querySelectorAll(':scope > tr')).slice(0, options.value);
        trs.forEach(function (tr) {
          scrollTo += outerHeight(tr);
        });
      }
      this.$tableBody.scrollTop = scrollTo;
    },
    getScrollPosition: function getScrollPosition() {
      return this.$tableBody.scrollTop;
    },
    showRow: function showRow(params) {
      this._toggleRow(params, true);
    },
    hideRow: function hideRow(params) {
      this._toggleRow(params, false);
    },
    _toggleRow: function _toggleRow(params, visible) {
      var row;
      if (params.hasOwnProperty('index')) {
        row = this.getData()[params.index];
      } else if (params.hasOwnProperty('uniqueId')) {
        row = this.getRowByUniqueId(params.uniqueId);
      }
      if (!row) {
        return;
      }
      var index = Utils.findIndex(this.hiddenRows, row);
      if (!visible && index === -1) {
        this.hiddenRows.push(row);
      } else if (visible && index > -1) {
        this.hiddenRows.splice(index, 1);
      }
      this.initBody(true);
      this.initPagination();
    },
    getHiddenRows: function getHiddenRows(show) {
      if (show) {
        this.initHiddenRows();
        this.initBody(true);
        this.initPagination();
        return;
      }
      var data = this.getData();
      var rows = [];
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          if (this.hiddenRows.includes(row)) {
            rows.push(row);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.hiddenRows = rows;
      return rows;
    },
    showColumn: function showColumn(field) {
      this._toggleColumns(Array.isArray(field) ? field : [field], true, true);
    },
    hideColumn: function hideColumn(field) {
      this._toggleColumns(Array.isArray(field) ? field : [field], false, true);
    },
    _toggleColumnVisibility: function _toggleColumnVisibility(index, checked) {
      if (index === undefined || this.columns[index].visible === checked) {
        return false;
      }
      this.columns[index].visible = checked;
      return true;
    },
    _updateAfterColumnToggle: function _updateAfterColumnToggle(changedIndices, checked, needUpdate) {
      this.initHeader();
      this.initSearch();
      this.initPagination();
      this.initBody();
      if (this.options.showColumns) {
        var items = Array.from(this.$toolbar.querySelectorAll('.keep-open input:not(.toggle-all)'));
        items.forEach(function (el) {
          el.disabled = false;
        });
        if (needUpdate) {
          var _iterator2 = _createForOfIteratorHelper(changedIndices),
            _step2;
          try {
            var _loop2 = function _loop2() {
              var index = _step2.value;
              var item = items.find(function (el) {
                return el.value === String(index);
              });
              if (item) item.checked = checked;
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        var checkedItems = items.filter(function (el) {
          return el.checked;
        });
        if (checkedItems.length <= this.options.minimumCountColumns) {
          checkedItems.forEach(function (el) {
            el.disabled = true;
          });
        }
      }
    },
    _toggleColumns: function _toggleColumns(fields, checked, needUpdate) {
      if (!fields.length) {
        return;
      }
      var changedIndices = [];
      var _iterator3 = _createForOfIteratorHelper(fields),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var field = _step3.value;
          var index = this.fieldsColumnsIndex[field];
          if (this._toggleColumnVisibility(index, checked)) {
            changedIndices.push(index);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (changedIndices.length) {
        this._updateAfterColumnToggle(changedIndices, checked, needUpdate);
      }
    },
    showAllColumns: function showAllColumns() {
      this._toggleAllColumns(true);
    },
    hideAllColumns: function hideAllColumns() {
      this._toggleAllColumns(false);
    },
    _toggleAllColumns: function _toggleAllColumns(visible) {
      var _this5 = this;
      var _iterator4 = _createForOfIteratorHelper(this.columns.slice().reverse()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var column = _step4.value;
          if (column.switchable) {
            if (!visible && this.options.showColumns && this.getVisibleColumns().filter(function (it) {
              return it.switchable;
            }).length === this.options.minimumCountColumns) {
              continue;
            }
            column.visible = visible;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this.initHeader();
      this.initSearch();
      this.initPagination();
      this.initBody();
      if (this.options.showColumns) {
        var items = Array.from(this.$toolbar.querySelectorAll('.keep-open input[type="checkbox"]:not(.toggle-all)'));
        items.forEach(function (el) {
          el.disabled = false;
        });
        if (visible) {
          items.forEach(function (el) {
            el.checked = visible;
          });
        } else {
          items.slice().reverse().forEach(function (item) {
            var checkedItems = items.filter(function (el) {
              return el.checked;
            });
            if (checkedItems.length > _this5.options.minimumCountColumns) {
              item.checked = visible;
            }
          });
        }
        var checkedItems = items.filter(function (el) {
          return el.checked;
        });
        if (checkedItems.length <= this.options.minimumCountColumns) {
          checkedItems.forEach(function (el) {
            el.disabled = true;
          });
        }
      }
    },
    mergeCells: function mergeCells(options) {
      var row = options.index;
      var col = this.getVisibleFields().indexOf(options.field);
      var rowspan = +options.rowspan || 1;
      var colspan = +options.colspan || 1;
      var i;
      var j;
      var trs = Array.from(this.$body.querySelectorAll(':scope > tr[data-index]'));
      col += Utils.getDetailViewIndexOffset(this.options);
      var td = trs[row] ? Array.from(trs[row].querySelectorAll(':scope > td'))[col] : null;
      if (row < 0 || col < 0 || row >= this.data.length) {
        return;
      }
      for (i = row; i < row + rowspan; i++) {
        var rowTds = trs[i] ? Array.from(trs[i].querySelectorAll(':scope > td')) : [];
        for (j = col; j < col + colspan; j++) {
          if (rowTds[j]) rowTds[j].style.display = 'none';
        }
      }
      if (td) {
        td.setAttribute('rowspan', rowspan);
        td.setAttribute('colspan', colspan);
        td.style.display = '';
      }
    },
    getVisibleColumns: function getVisibleColumns() {
      var _this6 = this;
      return this.columns.filter(function (column) {
        return column.visible && !_this6.isSelectionColumn(column);
      });
    },
    getHiddenColumns: function getHiddenColumns() {
      return this.columns.filter(function (_ref) {
        var visible = _ref.visible;
        return !visible;
      });
    }
  };
  function outerHeight(el) {
    if (!el) return 0;
    var style = getComputedStyle(el);
    return el.offsetHeight + (parseInt(style.marginTop) || 0) + (parseInt(style.marginBottom) || 0);
  }

  var CheckModule = {
    updateSelected: function updateSelected() {
      var enabled = this.$selectItem.filter(function (el) {
        return !el.disabled;
      });
      var checkAll = enabled.length > 0 && enabled.length === enabled.filter(function (el) {
        return el.checked;
      }).length;
      [this.$selectAll, this.$selectAll_].filter(Boolean).forEach(function (el) {
        el.checked = checkAll;
      });
      this.$selectItem.forEach(function (el) {
        var _el$closest;
        (_el$closest = el.closest('tr')) === null || _el$closest === void 0 || _el$closest.classList.toggle('selected', el.checked);
      });
    },
    isSelectionColumn: function isSelectionColumn(column) {
      return column.radio || column.checkbox;
    },
    getSelections: function getSelections() {
      var _this = this;
      return (this.options.maintainMetaData ? this.options.data : this.data).filter(function (row) {
        return row[_this.header.stateField] === true;
      });
    },
    updateRows: function updateRows() {
      var _this2 = this;
      this.$selectItem.forEach(function (el) {
        _this2.data[+el.dataset.index][_this2.header.stateField] = el.checked;
      });
    },
    resetRows: function resetRows() {
      if (this.data.length) {
        if (this.$selectAll) this.$selectAll.checked = false;
        this.$selectItem.forEach(function (el) {
          el.checked = false;
        });
      }
      if (this.header.stateField) {
        var _iterator = _createForOfIteratorHelper(this.data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            row[this.header.stateField] = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this.initHiddenRows();
    },
    checkAll: function checkAll() {
      this._toggleCheckAll(true);
    },
    uncheckAll: function uncheckAll() {
      this._toggleCheckAll(false);
    },
    _toggleCheckAll: function _toggleCheckAll(checked) {
      var rowsBefore = this.getSelections();
      [this.$selectAll, this.$selectAll_].filter(Boolean).forEach(function (el) {
        el.checked = checked;
      });
      this.$selectItem.filter(function (el) {
        return !el.disabled;
      }).forEach(function (el) {
        el.checked = checked;
      });
      this.updateRows();
      this.updateSelected();
      var rowsAfter = this.getSelections();
      if (checked) {
        this.trigger('check-all', rowsAfter, rowsBefore);
        return;
      }
      this.trigger('uncheck-all', rowsAfter, rowsBefore);
    },
    checkInvert: function checkInvert() {
      var items = this.$selectItem.filter(function (el) {
        return !el.disabled;
      });
      var checked = items.filter(function (el) {
        return el.checked;
      });
      items.forEach(function (el) {
        el.checked = !el.checked;
      });
      this.updateRows();
      this.updateSelected();
      this.trigger('uncheck-some', checked);
      checked = this.getSelections();
      this.trigger('check-some', checked);
    },
    check: function check(index) {
      this._toggleCheck(true, index);
    },
    uncheck: function uncheck(index) {
      this._toggleCheck(false, index);
    },
    _toggleCheck: function _toggleCheck(checked, index) {
      var _this3 = this;
      var $el = this.$selectItem.filter(function (el) {
        return +el.dataset.index === index;
      });
      var row = this.data[index];
      if ($el.length > 0 && $el[0].type === 'radio' || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
        var _iterator2 = _createForOfIteratorHelper(this.options.data),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            r[this.header.stateField] = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.$selectItem.filter(function (el) {
          return el.checked && !$el.includes(el);
        }).forEach(function (el) {
          el.checked = false;
        });
      }
      row[this.header.stateField] = checked;
      if (this.options.multipleSelectRow) {
        if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
          var _ref = this.multipleSelectRowLastSelectedIndex < index ? [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex],
            _ref2 = _slicedToArray(_ref, 2),
            fromIndex = _ref2[0],
            toIndex = _ref2[1];
          var _loop = function _loop(i) {
            _this3.data[i][_this3.header.stateField] = true;
            _this3.$selectItem.filter(function (el) {
              return +el.dataset.index === i;
            }).forEach(function (el) {
              el.checked = true;
            });
          };
          for (var i = fromIndex + 1; i < toIndex; i++) {
            _loop(i);
          }
        }
        this.multipleSelectRowCtrlKey = false;
        this.multipleSelectRowShiftKey = false;
        this.multipleSelectRowLastSelectedIndex = checked ? index : -1;
      }
      $el.forEach(function (el) {
        el.checked = checked;
      });
      this.updateSelected();
      this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el[0]);
    },
    checkBy: function checkBy(obj) {
      this._toggleCheckBy(true, obj);
    },
    uncheckBy: function uncheckBy(obj) {
      this._toggleCheckBy(false, obj);
    },
    _toggleCheckBy: function _toggleCheckBy(checked, obj) {
      var _this4 = this;
      if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
        return;
      }
      var rows = [];
      this.data.forEach(function (row, i) {
        if (!row.hasOwnProperty(obj.field)) {
          return false;
        }
        if (obj.values.includes(row[obj.field])) {
          var els = _this4.$selectItem.filter(function (el) {
            return !el.disabled;
          }).filter(function (el) {
            return +el.dataset.index === i;
          });
          var onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false;
          els = checked ? els.filter(function (el) {
            return !el.checked;
          }) : els.filter(function (el) {
            return el.checked;
          });
          if (!els.length && onlyCurrentPage) {
            return;
          }
          els.forEach(function (el) {
            el.checked = checked;
          });
          row[_this4.header.stateField] = checked;
          rows.push(row);
          _this4.trigger(checked ? 'check' : 'uncheck', row, els[0]);
        }
      });
      this.updateSelected();
      this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
    }
  };

  var es_array_sort = {};

  var environmentFfVersion;
  var hasRequiredEnvironmentFfVersion;

  function requireEnvironmentFfVersion () {
  	if (hasRequiredEnvironmentFfVersion) return environmentFfVersion;
  	hasRequiredEnvironmentFfVersion = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	var firefox = userAgent.match(/firefox\/(\d+)/i);

  	environmentFfVersion = !!firefox && +firefox[1];
  	return environmentFfVersion;
  }

  var environmentIsIeOrEdge;
  var hasRequiredEnvironmentIsIeOrEdge;

  function requireEnvironmentIsIeOrEdge () {
  	if (hasRequiredEnvironmentIsIeOrEdge) return environmentIsIeOrEdge;
  	hasRequiredEnvironmentIsIeOrEdge = 1;
  	var UA = requireEnvironmentUserAgent();

  	environmentIsIeOrEdge = /MSIE|Trident/.test(UA);
  	return environmentIsIeOrEdge;
  }

  var environmentWebkitVersion;
  var hasRequiredEnvironmentWebkitVersion;

  function requireEnvironmentWebkitVersion () {
  	if (hasRequiredEnvironmentWebkitVersion) return environmentWebkitVersion;
  	hasRequiredEnvironmentWebkitVersion = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  	environmentWebkitVersion = !!webkit && +webkit[1];
  	return environmentWebkitVersion;
  }

  var hasRequiredEs_array_sort;

  function requireEs_array_sort () {
  	if (hasRequiredEs_array_sort) return es_array_sort;
  	hasRequiredEs_array_sort = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var deletePropertyOrThrow = requireDeletePropertyOrThrow();
  	var toString = requireToString();
  	var fails = requireFails();
  	var internalSort = requireArraySort();
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();
  	var FF = requireEnvironmentFfVersion();
  	var IE_OR_EDGE = requireEnvironmentIsIeOrEdge();
  	var V8 = requireEnvironmentV8Version();
  	var WEBKIT = requireEnvironmentWebkitVersion();

  	var test = [];
  	var nativeSort = uncurryThis(test.sort);
  	var push = uncurryThis(test.push);

  	// IE8-
  	var FAILS_ON_UNDEFINED = fails(function () {
  	  test.sort(undefined);
  	});
  	// V8 bug
  	var FAILS_ON_NULL = fails(function () {
  	  test.sort(null);
  	});
  	// Old WebKit
  	var STRICT_METHOD = arrayMethodIsStrict('sort');

  	var STABLE_SORT = !fails(function () {
  	  // feature detection can be too slow, so check engines versions
  	  if (V8) return V8 < 70;
  	  if (FF && FF > 3) return;
  	  if (IE_OR_EDGE) return true;
  	  if (WEBKIT) return WEBKIT < 603;

  	  var result = '';
  	  var code, chr, value, index;

  	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  	  for (code = 65; code < 76; code++) {
  	    chr = String.fromCharCode(code);

  	    switch (code) {
  	      case 66: case 69: case 70: case 72: value = 3; break;
  	      case 68: case 71: value = 4; break;
  	      default: value = 2;
  	    }

  	    for (index = 0; index < 47; index++) {
  	      test.push({ k: chr + index, v: value });
  	    }
  	  }

  	  test.sort(function (a, b) { return b.v - a.v; });

  	  for (index = 0; index < test.length; index++) {
  	    chr = test[index].k.charAt(0);
  	    if (result.charAt(result.length - 1) !== chr) result += chr;
  	  }

  	  return result !== 'DGBEFHACIJK';
  	});

  	var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  	var getSortCompare = function (comparefn) {
  	  return function (x, y) {
  	    if (y === undefined) return -1;
  	    if (x === undefined) return 1;
  	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
  	    var xString = toString(x);
  	    var yString = toString(y);
  	    return xString === yString ? 0 : xString > yString ? 1 : -1;
  	  };
  	};

  	// `Array.prototype.sort` method
  	// https://tc39.es/ecma262/#sec-array.prototype.sort
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  sort: function sort(comparefn) {
  	    if (comparefn !== undefined) aCallable(comparefn);

  	    var array = toObject(this);

  	    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

  	    var items = [];
  	    var arrayLength = lengthOfArrayLike(array);
  	    var itemsLength, index;

  	    for (index = 0; index < arrayLength; index++) {
  	      if (index in array) push(items, array[index]);
  	    }

  	    internalSort(items, getSortCompare(comparefn));

  	    itemsLength = lengthOfArrayLike(items);
  	    index = 0;

  	    while (index < itemsLength) array[index] = items[index++];
  	    while (index < arrayLength) deletePropertyOrThrow(array, index++);

  	    return array;
  	  }
  	});
  	return es_array_sort;
  }

  requireEs_array_sort();

  var es_number_constructor = {};

  var path;
  var hasRequiredPath;

  function requirePath () {
  	if (hasRequiredPath) return path;
  	hasRequiredPath = 1;
  	var globalThis = requireGlobalThis();

  	path = globalThis;
  	return path;
  }

  var hasRequiredEs_number_constructor;

  function requireEs_number_constructor () {
  	if (hasRequiredEs_number_constructor) return es_number_constructor;
  	hasRequiredEs_number_constructor = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var DESCRIPTORS = requireDescriptors();
  	var globalThis = requireGlobalThis();
  	var path = requirePath();
  	var uncurryThis = requireFunctionUncurryThis();
  	var isForced = requireIsForced();
  	var hasOwn = requireHasOwnProperty();
  	var inheritIfRequired = requireInheritIfRequired();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var isSymbol = requireIsSymbol();
  	var toPrimitive = requireToPrimitive();
  	var fails = requireFails();
  	var getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var defineProperty = requireObjectDefineProperty().f;
  	var thisNumberValue = requireThisNumberValue();
  	var trim = requireStringTrim().trim;

  	var NUMBER = 'Number';
  	var NativeNumber = globalThis[NUMBER];
  	var PureNumberNamespace = path[NUMBER];
  	var NumberPrototype = NativeNumber.prototype;
  	var TypeError = globalThis.TypeError;
  	var stringSlice = uncurryThis(''.slice);
  	var charCodeAt = uncurryThis(''.charCodeAt);

  	// `ToNumeric` abstract operation
  	// https://tc39.es/ecma262/#sec-tonumeric
  	var toNumeric = function (value) {
  	  var primValue = toPrimitive(value, 'number');
  	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  	};

  	// `ToNumber` abstract operation
  	// https://tc39.es/ecma262/#sec-tonumber
  	var toNumber = function (argument) {
  	  var it = toPrimitive(argument, 'number');
  	  var first, third, radix, maxCode, digits, length, index, code;
  	  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  	  if (typeof it == 'string' && it.length > 2) {
  	    it = trim(it);
  	    first = charCodeAt(it, 0);
  	    if (first === 43 || first === 45) {
  	      third = charCodeAt(it, 2);
  	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
  	    } else if (first === 48) {
  	      switch (charCodeAt(it, 1)) {
  	        // fast equal of /^0b[01]+$/i
  	        case 66:
  	        case 98:
  	          radix = 2;
  	          maxCode = 49;
  	          break;
  	        // fast equal of /^0o[0-7]+$/i
  	        case 79:
  	        case 111:
  	          radix = 8;
  	          maxCode = 55;
  	          break;
  	        default:
  	          return +it;
  	      }
  	      digits = stringSlice(it, 2);
  	      length = digits.length;
  	      for (index = 0; index < length; index++) {
  	        code = charCodeAt(digits, index);
  	        // parseInt parses a string to a first unavailable symbol
  	        // but ToNumber should return NaN if a string contains unavailable symbols
  	        if (code < 48 || code > maxCode) return NaN;
  	      } return parseInt(digits, radix);
  	    }
  	  } return +it;
  	};

  	var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

  	var calledWithNew = function (dummy) {
  	  // includes check on 1..constructor(foo) case
  	  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
  	};

  	// `Number` constructor
  	// https://tc39.es/ecma262/#sec-number-constructor
  	var NumberWrapper = function Number(value) {
  	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  	  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
  	};

  	NumberWrapper.prototype = NumberPrototype;
  	if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

  	$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  	  Number: NumberWrapper
  	});

  	// Use `internal/copy-constructor-properties` helper in `core-js [at] 4`
  	var copyConstructorProperties = function (target, source) {
  	  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
  	    // ES3:
  	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  	    // ES2015 (in case, if modules with ES2015 Number statics required before):
  	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
  	    // ESNext
  	    'fromString,range'
  	  ).split(','), j = 0, key; keys.length > j; j++) {
  	    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
  	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  	    }
  	  }
  	};

  	if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
  	if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);
  	return es_number_constructor;
  }

  requireEs_number_constructor();

  var es_promise = {};

  var es_promise_constructor = {};

  var environmentIsIos;
  var hasRequiredEnvironmentIsIos;

  function requireEnvironmentIsIos () {
  	if (hasRequiredEnvironmentIsIos) return environmentIsIos;
  	hasRequiredEnvironmentIsIos = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	environmentIsIos = /ipad|iphone|ipod/i.test(userAgent) && /applewebkit/i.test(userAgent);
  	return environmentIsIos;
  }

  var task;
  var hasRequiredTask;

  function requireTask () {
  	if (hasRequiredTask) return task;
  	hasRequiredTask = 1;
  	var globalThis = requireGlobalThis();
  	var apply = requireFunctionApply();
  	var bind = requireFunctionBindContext();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var fails = requireFails();
  	var html = requireHtml();
  	var arraySlice = requireArraySlice();
  	var createElement = requireDocumentCreateElement();
  	var validateArgumentsLength = requireValidateArgumentsLength();
  	var IS_IOS = requireEnvironmentIsIos();
  	var IS_NODE = requireEnvironmentIsNode();

  	var set = globalThis.setImmediate;
  	var clear = globalThis.clearImmediate;
  	var process = globalThis.process;
  	var Dispatch = globalThis.Dispatch;
  	var Function = globalThis.Function;
  	var MessageChannel = globalThis.MessageChannel;
  	var String = globalThis.String;
  	var counter = 0;
  	var queue = {};
  	var ONREADYSTATECHANGE = 'onreadystatechange';
  	var $location, defer, channel, port;

  	fails(function () {
  	  // Deno throws a ReferenceError on `location` access without `--location` flag
  	  $location = globalThis.location;
  	});

  	var run = function (id) {
  	  if (hasOwn(queue, id)) {
  	    var fn = queue[id];
  	    delete queue[id];
  	    fn();
  	  }
  	};

  	var runner = function (id) {
  	  return function () {
  	    run(id);
  	  };
  	};

  	var eventListener = function (event) {
  	  run(event.data);
  	};

  	var globalPostMessageDefer = function (id) {
  	  // old engines have not location.origin
  	  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
  	};

  	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  	if (!set || !clear) {
  	  set = function setImmediate(handler) {
  	    validateArgumentsLength(arguments.length, 1);
  	    var fn = isCallable(handler) ? handler : Function(handler);
  	    var args = arraySlice(arguments, 1);
  	    queue[++counter] = function () {
  	      apply(fn, undefined, args);
  	    };
  	    defer(counter);
  	    return counter;
  	  };
  	  clear = function clearImmediate(id) {
  	    delete queue[id];
  	  };
  	  // Node.js 0.8-
  	  if (IS_NODE) {
  	    defer = function (id) {
  	      process.nextTick(runner(id));
  	    };
  	  // Sphere (JS game engine) Dispatch API
  	  } else if (Dispatch && Dispatch.now) {
  	    defer = function (id) {
  	      Dispatch.now(runner(id));
  	    };
  	  // Browsers with MessageChannel, includes WebWorkers
  	  // except iOS - https://github.com/zloirock/core-js/issues/624
  	  } else if (MessageChannel && !IS_IOS) {
  	    channel = new MessageChannel();
  	    port = channel.port2;
  	    channel.port1.onmessage = eventListener;
  	    defer = bind(port.postMessage, port);
  	  // Browsers with postMessage, skip WebWorkers
  	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  	  } else if (
  	    globalThis.addEventListener &&
  	    isCallable(globalThis.postMessage) &&
  	    !globalThis.importScripts &&
  	    $location && $location.protocol !== 'file:' &&
  	    !fails(globalPostMessageDefer)
  	  ) {
  	    defer = globalPostMessageDefer;
  	    globalThis.addEventListener('message', eventListener, false);
  	  // IE8-
  	  } else if (ONREADYSTATECHANGE in createElement('script')) {
  	    defer = function (id) {
  	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
  	        html.removeChild(this);
  	        run(id);
  	      };
  	    };
  	  // Rest old browsers
  	  } else {
  	    defer = function (id) {
  	      setTimeout(runner(id), 0);
  	    };
  	  }
  	}

  	task = {
  	  set: set,
  	  clear: clear
  	};
  	return task;
  }

  var queue;
  var hasRequiredQueue;

  function requireQueue () {
  	if (hasRequiredQueue) return queue;
  	hasRequiredQueue = 1;
  	var Queue = function () {
  	  this.head = null;
  	  this.tail = null;
  	};

  	Queue.prototype = {
  	  add: function (item) {
  	    var entry = { item: item, next: null };
  	    var tail = this.tail;
  	    if (tail) tail.next = entry;
  	    else this.head = entry;
  	    this.tail = entry;
  	  },
  	  get: function () {
  	    var entry = this.head;
  	    if (entry) {
  	      var next = this.head = entry.next;
  	      if (next === null) this.tail = null;
  	      return entry.item;
  	    }
  	  }
  	};

  	queue = Queue;
  	return queue;
  }

  var environmentIsIosPebble;
  var hasRequiredEnvironmentIsIosPebble;

  function requireEnvironmentIsIosPebble () {
  	if (hasRequiredEnvironmentIsIosPebble) return environmentIsIosPebble;
  	hasRequiredEnvironmentIsIosPebble = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';
  	return environmentIsIosPebble;
  }

  var environmentIsWebosWebkit;
  var hasRequiredEnvironmentIsWebosWebkit;

  function requireEnvironmentIsWebosWebkit () {
  	if (hasRequiredEnvironmentIsWebosWebkit) return environmentIsWebosWebkit;
  	hasRequiredEnvironmentIsWebosWebkit = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
  	return environmentIsWebosWebkit;
  }

  var microtask_1;
  var hasRequiredMicrotask;

  function requireMicrotask () {
  	if (hasRequiredMicrotask) return microtask_1;
  	hasRequiredMicrotask = 1;
  	var globalThis = requireGlobalThis();
  	var safeGetBuiltIn = requireSafeGetBuiltIn();
  	var bind = requireFunctionBindContext();
  	var macrotask = requireTask().set;
  	var Queue = requireQueue();
  	var IS_IOS = requireEnvironmentIsIos();
  	var IS_IOS_PEBBLE = requireEnvironmentIsIosPebble();
  	var IS_WEBOS_WEBKIT = requireEnvironmentIsWebosWebkit();
  	var IS_NODE = requireEnvironmentIsNode();

  	var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
  	var document = globalThis.document;
  	var process = globalThis.process;
  	var Promise = globalThis.Promise;
  	var microtask = safeGetBuiltIn('queueMicrotask');
  	var notify, toggle, node, promise, then;

  	// modern engines have queueMicrotask method
  	if (!microtask) {
  	  var queue = new Queue();

  	  var flush = function () {
  	    var parent, fn;
  	    if (IS_NODE && (parent = process.domain)) parent.exit();
  	    while (fn = queue.get()) try {
  	      fn();
  	    } catch (error) {
  	      if (queue.head) notify();
  	      throw error;
  	    }
  	    if (parent) parent.enter();
  	  };

  	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  	  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
  	    toggle = true;
  	    node = document.createTextNode('');
  	    new MutationObserver(flush).observe(node, { characterData: true });
  	    notify = function () {
  	      node.data = toggle = !toggle;
  	    };
  	  // environments with maybe non-completely correct, but existent Promise
  	  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
  	    // Promise.resolve without an argument throws an error in LG WebOS 2
  	    promise = Promise.resolve(undefined);
  	    // workaround of WebKit ~ iOS Safari 10.1 bug
  	    promise.constructor = Promise;
  	    then = bind(promise.then, promise);
  	    notify = function () {
  	      then(flush);
  	    };
  	  // Node.js without promises
  	  } else if (IS_NODE) {
  	    notify = function () {
  	      process.nextTick(flush);
  	    };
  	  // for other environments - macrotask based on:
  	  // - setImmediate
  	  // - MessageChannel
  	  // - window.postMessage
  	  // - onreadystatechange
  	  // - setTimeout
  	  } else {
  	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
  	    macrotask = bind(macrotask, globalThis);
  	    notify = function () {
  	      macrotask(flush);
  	    };
  	  }

  	  microtask = function (fn) {
  	    if (!queue.head) notify();
  	    queue.add(fn);
  	  };
  	}

  	microtask_1 = microtask;
  	return microtask_1;
  }

  var hostReportErrors;
  var hasRequiredHostReportErrors;

  function requireHostReportErrors () {
  	if (hasRequiredHostReportErrors) return hostReportErrors;
  	hasRequiredHostReportErrors = 1;
  	hostReportErrors = function (a, b) {
  	  try {
  	    // eslint-disable-next-line no-console -- safe
  	    arguments.length === 1 ? console.error(a) : console.error(a, b);
  	  } catch (error) { /* empty */ }
  	};
  	return hostReportErrors;
  }

  var perform;
  var hasRequiredPerform;

  function requirePerform () {
  	if (hasRequiredPerform) return perform;
  	hasRequiredPerform = 1;
  	perform = function (exec) {
  	  try {
  	    return { error: false, value: exec() };
  	  } catch (error) {
  	    return { error: true, value: error };
  	  }
  	};
  	return perform;
  }

  var promiseNativeConstructor;
  var hasRequiredPromiseNativeConstructor;

  function requirePromiseNativeConstructor () {
  	if (hasRequiredPromiseNativeConstructor) return promiseNativeConstructor;
  	hasRequiredPromiseNativeConstructor = 1;
  	var globalThis = requireGlobalThis();

  	promiseNativeConstructor = globalThis.Promise;
  	return promiseNativeConstructor;
  }

  var promiseConstructorDetection;
  var hasRequiredPromiseConstructorDetection;

  function requirePromiseConstructorDetection () {
  	if (hasRequiredPromiseConstructorDetection) return promiseConstructorDetection;
  	hasRequiredPromiseConstructorDetection = 1;
  	var globalThis = requireGlobalThis();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var isCallable = requireIsCallable();
  	var isForced = requireIsForced();
  	var inspectSource = requireInspectSource();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var ENVIRONMENT = requireEnvironment();
  	var IS_PURE = requireIsPure();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  	var SPECIES = wellKnownSymbol('species');
  	var SUBCLASSING = false;
  	var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

  	var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  	  // We can't detect it synchronously, so just check versions
  	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  	  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  	  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  	  // We can't use @@species feature detection in V8 since it causes
  	  // deoptimization and performance degradation
  	  // https://github.com/zloirock/core-js/issues/679
  	  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
  	    // Detect correctness of subclassing with @@species support
  	    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
  	    var FakePromise = function (exec) {
  	      exec(function () { /* empty */ }, function () { /* empty */ });
  	    };
  	    var constructor = promise.constructor = {};
  	    constructor[SPECIES] = FakePromise;
  	    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  	    if (!SUBCLASSING) return true;
  	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  	  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
  	});

  	promiseConstructorDetection = {
  	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  	  SUBCLASSING: SUBCLASSING
  	};
  	return promiseConstructorDetection;
  }

  var newPromiseCapability = {};

  var hasRequiredNewPromiseCapability;

  function requireNewPromiseCapability () {
  	if (hasRequiredNewPromiseCapability) return newPromiseCapability;
  	hasRequiredNewPromiseCapability = 1;
  	var aCallable = requireACallable();

  	var $TypeError = TypeError;

  	var PromiseCapability = function (C) {
  	  var resolve, reject;
  	  this.promise = new C(function ($$resolve, $$reject) {
  	    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
  	    resolve = $$resolve;
  	    reject = $$reject;
  	  });
  	  this.resolve = aCallable(resolve);
  	  this.reject = aCallable(reject);
  	};

  	// `NewPromiseCapability` abstract operation
  	// https://tc39.es/ecma262/#sec-newpromisecapability
  	newPromiseCapability.f = function (C) {
  	  return new PromiseCapability(C);
  	};
  	return newPromiseCapability;
  }

  var hasRequiredEs_promise_constructor;

  function requireEs_promise_constructor () {
  	if (hasRequiredEs_promise_constructor) return es_promise_constructor;
  	hasRequiredEs_promise_constructor = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var IS_NODE = requireEnvironmentIsNode();
  	var globalThis = requireGlobalThis();
  	var path = requirePath();
  	var call = requireFunctionCall();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var setToStringTag = requireSetToStringTag();
  	var setSpecies = requireSetSpecies();
  	var aCallable = requireACallable();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var anInstance = requireAnInstance();
  	var speciesConstructor = requireSpeciesConstructor();
  	var task = requireTask().set;
  	var microtask = requireMicrotask();
  	var hostReportErrors = requireHostReportErrors();
  	var perform = requirePerform();
  	var Queue = requireQueue();
  	var InternalStateModule = requireInternalState();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var PromiseConstructorDetection = requirePromiseConstructorDetection();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();

  	var PROMISE = 'Promise';
  	var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
  	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  	var setInternalState = InternalStateModule.set;
  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  	var PromiseConstructor = NativePromiseConstructor;
  	var PromisePrototype = NativePromisePrototype;
  	var TypeError = globalThis.TypeError;
  	var document = globalThis.document;
  	var process = globalThis.process;
  	var newPromiseCapability = newPromiseCapabilityModule.f;
  	var newGenericPromiseCapability = newPromiseCapability;

  	var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
  	var UNHANDLED_REJECTION = 'unhandledrejection';
  	var REJECTION_HANDLED = 'rejectionhandled';
  	var PENDING = 0;
  	var FULFILLED = 1;
  	var REJECTED = 2;
  	var HANDLED = 1;
  	var UNHANDLED = 2;

  	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  	// helpers
  	var isThenable = function (it) {
  	  var then;
  	  return isObject(it) && isCallable(then = it.then) ? then : false;
  	};

  	var callReaction = function (reaction, state) {
  	  var value = state.value;
  	  var ok = state.state === FULFILLED;
  	  var handler = ok ? reaction.ok : reaction.fail;
  	  var resolve = reaction.resolve;
  	  var reject = reaction.reject;
  	  var domain = reaction.domain;
  	  var result, then, exited;
  	  try {
  	    if (handler) {
  	      if (!ok) {
  	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
  	        state.rejection = HANDLED;
  	      }
  	      if (handler === true) result = value;
  	      else {
  	        if (domain) domain.enter();
  	        result = handler(value); // can throw
  	        if (domain) {
  	          domain.exit();
  	          exited = true;
  	        }
  	      }
  	      if (result === reaction.promise) {
  	        reject(new TypeError('Promise-chain cycle'));
  	      } else if (then = isThenable(result)) {
  	        call(then, result, resolve, reject);
  	      } else resolve(result);
  	    } else reject(value);
  	  } catch (error) {
  	    if (domain && !exited) domain.exit();
  	    reject(error);
  	  }
  	};

  	var notify = function (state, isReject) {
  	  if (state.notified) return;
  	  state.notified = true;
  	  microtask(function () {
  	    var reactions = state.reactions;
  	    var reaction;
  	    while (reaction = reactions.get()) {
  	      callReaction(reaction, state);
  	    }
  	    state.notified = false;
  	    if (isReject && !state.rejection) onUnhandled(state);
  	  });
  	};

  	var dispatchEvent = function (name, promise, reason) {
  	  var event, handler;
  	  if (DISPATCH_EVENT) {
  	    event = document.createEvent('Event');
  	    event.promise = promise;
  	    event.reason = reason;
  	    event.initEvent(name, false, true);
  	    globalThis.dispatchEvent(event);
  	  } else event = { promise: promise, reason: reason };
  	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  	};

  	var onUnhandled = function (state) {
  	  call(task, globalThis, function () {
  	    var promise = state.facade;
  	    var value = state.value;
  	    var IS_UNHANDLED = isUnhandled(state);
  	    var result;
  	    if (IS_UNHANDLED) {
  	      result = perform(function () {
  	        if (IS_NODE) {
  	          process.emit('unhandledRejection', value, promise);
  	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
  	      });
  	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
  	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
  	      if (result.error) throw result.value;
  	    }
  	  });
  	};

  	var isUnhandled = function (state) {
  	  return state.rejection !== HANDLED && !state.parent;
  	};

  	var onHandleUnhandled = function (state) {
  	  call(task, globalThis, function () {
  	    var promise = state.facade;
  	    if (IS_NODE) {
  	      process.emit('rejectionHandled', promise);
  	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  	  });
  	};

  	var bind = function (fn, state, unwrap) {
  	  return function (value) {
  	    fn(state, value, unwrap);
  	  };
  	};

  	var internalReject = function (state, value, unwrap) {
  	  if (state.done) return;
  	  state.done = true;
  	  if (unwrap) state = unwrap;
  	  state.value = value;
  	  state.state = REJECTED;
  	  notify(state, true);
  	};

  	var internalResolve = function (state, value, unwrap) {
  	  if (state.done) return;
  	  state.done = true;
  	  if (unwrap) state = unwrap;
  	  try {
  	    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
  	    var then = isThenable(value);
  	    if (then) {
  	      microtask(function () {
  	        var wrapper = { done: false };
  	        try {
  	          call(then, value,
  	            bind(internalResolve, wrapper, state),
  	            bind(internalReject, wrapper, state)
  	          );
  	        } catch (error) {
  	          internalReject(wrapper, error, state);
  	        }
  	      });
  	    } else {
  	      state.value = value;
  	      state.state = FULFILLED;
  	      notify(state, false);
  	    }
  	  } catch (error) {
  	    internalReject({ done: false }, error, state);
  	  }
  	};

  	// constructor polyfill
  	if (FORCED_PROMISE_CONSTRUCTOR) {
  	  // 25.4.3.1 Promise(executor)
  	  PromiseConstructor = function Promise(executor) {
  	    anInstance(this, PromisePrototype);
  	    aCallable(executor);
  	    call(Internal, this);
  	    var state = getInternalPromiseState(this);
  	    try {
  	      executor(bind(internalResolve, state), bind(internalReject, state));
  	    } catch (error) {
  	      internalReject(state, error);
  	    }
  	  };

  	  PromisePrototype = PromiseConstructor.prototype;

  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  Internal = function Promise(executor) {
  	    setInternalState(this, {
  	      type: PROMISE,
  	      done: false,
  	      notified: false,
  	      parent: false,
  	      reactions: new Queue(),
  	      rejection: false,
  	      state: PENDING,
  	      value: null
  	    });
  	  };

  	  // `Promise.prototype.then` method
  	  // https://tc39.es/ecma262/#sec-promise.prototype.then
  	  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
  	    var state = getInternalPromiseState(this);
  	    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
  	    state.parent = true;
  	    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
  	    reaction.fail = isCallable(onRejected) && onRejected;
  	    reaction.domain = IS_NODE ? process.domain : undefined;
  	    if (state.state === PENDING) state.reactions.add(reaction);
  	    else microtask(function () {
  	      callReaction(reaction, state);
  	    });
  	    return reaction.promise;
  	  });

  	  OwnPromiseCapability = function () {
  	    var promise = new Internal();
  	    var state = getInternalPromiseState(promise);
  	    this.promise = promise;
  	    this.resolve = bind(internalResolve, state);
  	    this.reject = bind(internalReject, state);
  	  };

  	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
  	    return C === PromiseConstructor || C === PromiseWrapper
  	      ? new OwnPromiseCapability(C)
  	      : newGenericPromiseCapability(C);
  	  };

  	  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
  	    nativeThen = NativePromisePrototype.then;

  	    if (!NATIVE_PROMISE_SUBCLASSING) {
  	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
  	      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
  	        var that = this;
  	        return new PromiseConstructor(function (resolve, reject) {
  	          call(nativeThen, that, resolve, reject);
  	        }).then(onFulfilled, onRejected);
  	      // https://github.com/zloirock/core-js/issues/640
  	      }, { unsafe: true });
  	    }

  	    // make `.constructor === Promise` work for native promise-based APIs
  	    try {
  	      delete NativePromisePrototype.constructor;
  	    } catch (error) { /* empty */ }

  	    // make `instanceof Promise` work for native promise-based APIs
  	    if (setPrototypeOf) {
  	      setPrototypeOf(NativePromisePrototype, PromisePrototype);
  	    }
  	  }
  	}

  	// `Promise` constructor
  	// https://tc39.es/ecma262/#sec-promise-executor
  	$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  	  Promise: PromiseConstructor
  	});

  	PromiseWrapper = path.Promise;

  	setToStringTag(PromiseConstructor, PROMISE, false, true);
  	setSpecies(PROMISE);
  	return es_promise_constructor;
  }

  var es_promise_all = {};

  var promiseStaticsIncorrectIteration;
  var hasRequiredPromiseStaticsIncorrectIteration;

  function requirePromiseStaticsIncorrectIteration () {
  	if (hasRequiredPromiseStaticsIncorrectIteration) return promiseStaticsIncorrectIteration;
  	hasRequiredPromiseStaticsIncorrectIteration = 1;
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;

  	promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  	  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
  	});
  	return promiseStaticsIncorrectIteration;
  }

  var hasRequiredEs_promise_all;

  function requireEs_promise_all () {
  	if (hasRequiredEs_promise_all) return es_promise_all;
  	hasRequiredEs_promise_all = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = requireIterate();
  	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

  	// `Promise.all` method
  	// https://tc39.es/ecma262/#sec-promise.all
  	$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  	  all: function all(iterable) {
  	    var C = this;
  	    var capability = newPromiseCapabilityModule.f(C);
  	    var resolve = capability.resolve;
  	    var reject = capability.reject;
  	    var result = perform(function () {
  	      var $promiseResolve = aCallable(C.resolve);
  	      var values = [];
  	      var counter = 0;
  	      var remaining = 1;
  	      iterate(iterable, function (promise) {
  	        var index = counter++;
  	        var alreadyCalled = false;
  	        remaining++;
  	        call($promiseResolve, C, promise).then(function (value) {
  	          if (alreadyCalled) return;
  	          alreadyCalled = true;
  	          values[index] = value;
  	          --remaining || resolve(values);
  	        }, reject);
  	      });
  	      --remaining || resolve(values);
  	    });
  	    if (result.error) reject(result.value);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_all;
  }

  var es_promise_catch = {};

  var hasRequiredEs_promise_catch;

  function requireEs_promise_catch () {
  	if (hasRequiredEs_promise_catch) return es_promise_catch;
  	hasRequiredEs_promise_catch = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var defineBuiltIn = requireDefineBuiltIn();

  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  	// `Promise.prototype.catch` method
  	// https://tc39.es/ecma262/#sec-promise.prototype.catch
  	$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  	  'catch': function (onRejected) {
  	    return this.then(undefined, onRejected);
  	  }
  	});

  	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  	if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  	  var method = getBuiltIn('Promise').prototype['catch'];
  	  if (NativePromisePrototype['catch'] !== method) {
  	    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  	  }
  	}
  	return es_promise_catch;
  }

  var es_promise_race = {};

  var hasRequiredEs_promise_race;

  function requireEs_promise_race () {
  	if (hasRequiredEs_promise_race) return es_promise_race;
  	hasRequiredEs_promise_race = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = requireIterate();
  	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

  	// `Promise.race` method
  	// https://tc39.es/ecma262/#sec-promise.race
  	$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  	  race: function race(iterable) {
  	    var C = this;
  	    var capability = newPromiseCapabilityModule.f(C);
  	    var reject = capability.reject;
  	    var result = perform(function () {
  	      var $promiseResolve = aCallable(C.resolve);
  	      iterate(iterable, function (promise) {
  	        call($promiseResolve, C, promise).then(capability.resolve, reject);
  	      });
  	    });
  	    if (result.error) reject(result.value);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_race;
  }

  var es_promise_reject = {};

  var hasRequiredEs_promise_reject;

  function requireEs_promise_reject () {
  	if (hasRequiredEs_promise_reject) return es_promise_reject;
  	hasRequiredEs_promise_reject = 1;
  	var $ = require_export();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;

  	// `Promise.reject` method
  	// https://tc39.es/ecma262/#sec-promise.reject
  	$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  	  reject: function reject(r) {
  	    var capability = newPromiseCapabilityModule.f(this);
  	    var capabilityReject = capability.reject;
  	    capabilityReject(r);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_reject;
  }

  var es_promise_resolve = {};

  var promiseResolve;
  var hasRequiredPromiseResolve;

  function requirePromiseResolve () {
  	if (hasRequiredPromiseResolve) return promiseResolve;
  	hasRequiredPromiseResolve = 1;
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var newPromiseCapability = requireNewPromiseCapability();

  	promiseResolve = function (C, x) {
  	  anObject(C);
  	  if (isObject(x) && x.constructor === C) return x;
  	  var promiseCapability = newPromiseCapability.f(C);
  	  var resolve = promiseCapability.resolve;
  	  resolve(x);
  	  return promiseCapability.promise;
  	};
  	return promiseResolve;
  }

  var hasRequiredEs_promise_resolve;

  function requireEs_promise_resolve () {
  	if (hasRequiredEs_promise_resolve) return es_promise_resolve;
  	hasRequiredEs_promise_resolve = 1;
  	var $ = require_export();
  	var getBuiltIn = requireGetBuiltIn();
  	var IS_PURE = requireIsPure();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  	var promiseResolve = requirePromiseResolve();

  	var PromiseConstructorWrapper = getBuiltIn('Promise');
  	var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

  	// `Promise.resolve` method
  	// https://tc39.es/ecma262/#sec-promise.resolve
  	$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  	  resolve: function resolve(x) {
  	    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  	  }
  	});
  	return es_promise_resolve;
  }

  var hasRequiredEs_promise;

  function requireEs_promise () {
  	if (hasRequiredEs_promise) return es_promise;
  	hasRequiredEs_promise = 1;
  	// TODO: Remove this module from `core-js [at] 4` since it's split to modules listed below
  	requireEs_promise_constructor();
  	requireEs_promise_all();
  	requireEs_promise_catch();
  	requireEs_promise_race();
  	requireEs_promise_reject();
  	requireEs_promise_resolve();
  	return es_promise;
  }

  requireEs_promise();

  var DataModule = {
    initServer: function initServer(silent, query) {
      var _this = this;
      var data = {};
      var index = this.header.fields.indexOf(this.options.sortName);
      var params = {
        searchText: this.searchText,
        sortName: this.options.sortName,
        sortOrder: this.options.sortOrder
      };
      if (this.header.sortNames[index]) {
        params.sortName = this.header.sortNames[index];
      }
      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
        params.pageNumber = this.options.pageNumber;
      }
      if (!this.options.url && !this.options.ajax) {
        return;
      }
      if (this.options.queryParamsType === 'limit') {
        params = {
          search: params.searchText,
          sort: params.sortName,
          order: params.sortOrder
        };
        if (this.options.pagination && this.options.sidePagination === 'server') {
          params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1);
          params.limit = this.options.pageSize;
          if (params.limit === 0 || this.options.pageSize === this.options.formatAllRows()) {
            delete params.limit;
          }
        }
      }
      if (this.options.search && this.options.sidePagination === 'server' && this.options.searchable && this.columns.filter(function (column) {
        return column.searchable;
      }).length) {
        params.searchable = [];
        var _iterator = _createForOfIteratorHelper(this.columns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var column = _step.value;
            if (!column.checkbox && column.searchable && (this.options.visibleSearch && column.visible || !this.options.visibleSearch)) {
              params.searchable.push(column.field);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!Utils.isEmptyObject(this.filterColumnsPartial)) {
        params.filter = JSON.stringify(this.filterColumnsPartial, null);
      }
      Utils.extend(params, query || {});
      data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);

      // false to stop request
      if (data === false) {
        return;
      }
      if (!silent) {
        this.showLoading();
      }
      var ajaxOptions = Utils.calculateObjectValue(null, this.options.ajaxOptions) || {};
      var request = Utils.extend({}, ajaxOptions, {
        type: this.options.method,
        url: this.options.url,
        data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
        contentType: this.options.contentType,
        dataType: this.options.dataType,
        success: function success(_res, textStatus, response) {
          var res = Utils.calculateObjectValue(_this.options, _this.options.responseHandler, [_res, response], _res);
          if (_this.options.sidePagination === 'client' && _this.options.paginationLoadMore) {
            _this._paginationLoaded = _this.data.length === res.length;
          }
          _this.load(res);
          _this.trigger('load-success', res, response && response.status, response);
          if (!silent) {
            _this.hideLoading();
          }
          if (_this.options.sidePagination === 'server' && _this.options.pageNumber > 1 && res[_this.options.totalField] > 0 && !res[_this.options.dataField].length) {
            _this.updatePagination();
          }
        },
        error: function error(response) {
          var data = [];
          if (_this.options.sidePagination === 'server') {
            data = {};
            data[_this.options.totalField] = 0;
            data[_this.options.dataField] = [];
          }
          _this.load(data);
          _this.trigger('load-error', response && response.status, response);
          if (!silent) {
            _this.hideLoading();
          }
        }
      });
      if (this.options.ajax) {
        Utils.calculateObjectValue(this, this.options.ajax, [request], null);
      } else {
        // Abort previous in-flight request
        if (this._abortController) {
          this._abortController.abort();
          this._abortController = null;
        }
        this._abortController = new AbortController();
        var ctrl = this._abortController;
        var method = (request.type || 'GET').toUpperCase();
        var url = request.url;
        var body;
        var headers = {};
        if (request.contentType) {
          headers['Content-Type'] = request.contentType;
        }
        Object.assign(headers, request.headers);
        if (typeof request.beforeSend === 'function') {
          request.beforeSend({
            setRequestHeader: function setRequestHeader(name, value) {
              headers[name] = value;
            }
          });
        }
        if (method === 'GET') {
          if (request.data && _typeof(request.data) === 'object') {
            var searchParams = new URLSearchParams();
            for (var _i = 0, _Object$entries = Object.entries(request.data); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                k = _Object$entries$_i[0],
                v = _Object$entries$_i[1];
              searchParams.append(k, _typeof(v) === 'object' ? JSON.stringify(v) : v);
            }
            url += (url.includes('?') ? '&' : '?') + searchParams.toString();
          }
        } else if (request.data) {
          body = typeof request.data === 'string' ? request.data : JSON.stringify(request.data);
        }
        fetch(url, {
          method: method,
          headers: headers,
          body: body,
          signal: ctrl.signal
        }).then(function (response) {
          _this._abortController = null;
          if (!response.ok) {
            return request.error(response);
          }
          var ct = response.headers.get('content-type') || '';
          var parseBody = request.dataType === 'json' || ct.includes('json') ? response.json() : response.text();
          return parseBody.then(function (res) {
            return request.success(res, 'success', response);
          });
        }).catch(function (err) {
          if ((err === null || err === void 0 ? void 0 : err.name) !== 'AbortError') {
            request.error(err);
          }
        });
      }
      return data;
    },
    initData: function initData(data, type) {
      if (type === 'append') {
        this.options.data = this.options.data.concat(data);
      } else if (type === 'prepend') {
        this.options.data = [].concat(data).concat(this.options.data);
      } else {
        data = data || Utils.deepCopy(this.options.data);
        this.options.data = Array.isArray(data) ? data : data[this.options.dataField];
      }
      this.data = _toConsumableArray(this.options.data);
      if (this.options.sortReset) {
        this.unsortedData = _toConsumableArray(this.data);
      }
      if (this.options.sidePagination === 'server') {
        return;
      }
      this.initSort();
    },
    initSort: function initSort() {
      var _this2 = this;
      var name = this.options.sortName;
      var order = this.options.sortOrder === 'desc' ? -1 : 1;
      var index = this.header.fields.indexOf(this.options.sortName);
      if (index !== -1) {
        if (this.options.sortStable) {
          this.data.forEach(function (row, i) {
            if (!row.hasOwnProperty('_position')) {
              row._position = i;
            }
          });
        }
        if (Utils.hasRowspanCells(this.data)) {
          Utils.flattenRowspanCells(this.data);
        }
        if (this.options.customSort) {
          Utils.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]);
        } else {
          this.data.sort(function (a, b) {
            if (_this2.header.sortNames[index]) {
              name = _this2.header.sortNames[index];
            }
            var aa = Utils.getItemField(a, name, _this2.options.escape);
            var bb = Utils.getItemField(b, name, _this2.options.escape);
            var value = Utils.calculateObjectValue(_this2.header, _this2.header.sorters[index], [aa, bb, a, b]);
            if (value !== undefined) {
              if (_this2.options.sortStable && value === 0) {
                return order * (a._position - b._position);
              }
              return order * value;
            }
            return Utils.sort(aa, bb, order, _this2.options, a._position, b._position);
          });
        }
        if (this.options.sortClass !== undefined) {
          setTimeout(function () {
            var _th$parentElement;
            _this2.$el.classList.remove(_this2.options.sortClass);
            var th = _this2.$header.querySelector("[data-field=\"".concat(_this2.options.sortName, "\"]"));
            var colIndex = th ? Array.from(((_th$parentElement = th.parentElement) === null || _th$parentElement === void 0 ? void 0 : _th$parentElement.children) || []).indexOf(th) : -1;
            if (colIndex !== -1) {
              _this2.$el.querySelectorAll("tr td:nth-child(".concat(colIndex + 1, ")")).forEach(function (td) {
                return td.classList.add(_this2.options.sortClass);
              });
            }
          }, 250);
        }
      } else if (this.options.sortReset) {
        this.data = _toConsumableArray(this.unsortedData);
      }
    },
    onSort: function onSort(_ref) {
      var _this$options$sortOrd;
      var type = _ref.type,
        currentTarget = _ref.currentTarget;
      var thEl = type === 'keypress' ? currentTarget : currentTarget.parentElement;
      var field = thEl.dataset.field;
      var headers = [this.$header, this.$header_].filter(Boolean);
      var column = this.columns[this.fieldsColumnsIndex[field]];
      headers.forEach(function (h) {
        return h.querySelectorAll('span.order').forEach(function (s) {
          return s.remove();
        });
      });

      // Resolve the effective sort-direction cycle for this column:
      //   column orderList  >  global orderList  >  legacy [order, opposite(order)]
      // orderList values are normalized to arrays at init time; an unset/invalid
      // value stays undefined so the legacy column `order` fallback takes over.
      // The only deliberate change vs. the old cycle: order 'desc' with sortReset
      // previously got stuck (asc <-> undefined) and now cycles
      // desc -> asc -> undefined -> desc.
      var orderList = column.orderList || this.options.orderList;
      if (!orderList) {
        var order = column.sortOrder || column.order || 'asc';
        orderList = [order, order === 'asc' ? 'desc' : 'asc'];
      }
      if (this.options.sortName === field) {
        // Same column clicked again: advance one step through the cycle. With
        // sortReset, a trailing "unsorted" state (handled inline to avoid an
        // array allocation) clears the sort entirely.
        var len = orderList.length;
        var nextIndex = (orderList.indexOf(this.options.sortOrder) + 1) % (this.options.sortReset ? len + 1 : len);
        this.options.sortOrder = nextIndex === len ? undefined : orderList[nextIndex];
        if (this.options.sortOrder === undefined) {
          this.options.sortName = undefined;
        }
      } else {
        // New column: start at the first direction, or — under rememberOrder —
        // advance one step from the column's last direction (legacy behavior,
        // now respecting a custom orderList too).
        this.options.sortName = field;
        if (this.options.rememberOrder) {
          this.options.sortOrder = orderList[(orderList.indexOf(thEl.dataset.order) + 1) % orderList.length];
        } else {
          this.options.sortOrder = orderList[0];
        }
      }
      var orderVal = (_this$options$sortOrd = this.options.sortOrder) !== null && _this$options$sortOrd !== void 0 ? _this$options$sortOrd : '';
      headers.forEach(function (h) {
        var th = h.querySelector("th[data-field=\"".concat(field, "\"]"));
        if (th) th.dataset.order = orderVal;
      });

      // Assign the correct sortable arrow
      this.resetCaret();
      this._sort();
    },
    _sort: function _sort() {
      if (this.options.sidePagination === 'server' && this.options.serverSort) {
        this.options.pageNumber = 1;
        this.trigger('sort', this.options.sortName, this.options.sortOrder);
        this.initServer(this.options.silentSort);
        return;
      }
      if (this.options.pagination && this.options.sortResetPage) {
        this.options.pageNumber = 1;
        this.initPagination();
      }
      this.trigger('sort', this.options.sortName, this.options.sortOrder);
      this.initSort();
      this.initBody();
    },
    sortReset: function sortReset() {
      this.options.sortName = undefined;
      this.options.sortOrder = undefined;
      this._sort();
    },
    sortBy: function sortBy(params) {
      this.options.sortName = params.field;
      this.options.sortOrder = params.hasOwnProperty('sortOrder') ? params.sortOrder : 'asc';
      this._sort();
    },
    getData: function getData(params) {
      var _this3 = this;
      var data = this.options.data;
      if ((this.searchText || this.options.customSearch || this.options.sortName !== undefined || this.enableCustomSort ||
      // Fix #4616: this.enableCustomSort is for extensions
      !Utils.isEmptyObject(this.filterColumns) || typeof this.options.filterOptions.filterAlgorithm === 'function' || !Utils.isEmptyObject(this.filterColumnsPartial)) && (!params || !params.unfiltered)) {
        data = this.data;
      }
      if (params && !params.includeHiddenRows) {
        var hiddenRows = this.getHiddenRows();
        data = data.filter(function (row) {
          return Utils.findIndex(hiddenRows, row) === -1;
        });
      }
      if (params && params.useCurrentPage) {
        data = data.slice(this.pageFrom - 1, this.pageTo);
      }
      if (params && params.formatted) {
        return data.map(function (row) {
          var formattedColumns = {};
          for (var _i2 = 0, _Object$entries2 = Object.entries(row); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            var column = _this3.columns[_this3.fieldsColumnsIndex[key]];
            if (!column) {
              continue;
            }
            formattedColumns[key] = Utils.calculateObjectValue(column, _this3.header.formatters[column.fieldIndex], [value, row, row.index, column.field], value);
          }
          return formattedColumns;
        });
      }
      return data;
    },
    getFooterData: function getFooterData() {
      var _this$footerData;
      return (_this$footerData = this.footerData) !== null && _this$footerData !== void 0 ? _this$footerData : [];
    },
    load: function load(_data) {
      var data = _data;

      // #431: support pagination
      if (this.options.pagination && this.options.sidePagination === 'server') {
        this.options.totalRows = data[this.options.totalField];
        this.options.totalNotFiltered = data[this.options.totalNotFilteredField];
        this.footerData = data[this.options.footerField] ? [data[this.options.footerField]] : undefined;
      }
      var fixedScroll = this.options.fixedScroll || data.fixedScroll;
      data = Array.isArray(data) ? data : data[this.options.dataField];
      this.initData(data);
      this.initSearch();
      this.initPagination();
      this.initBody(fixedScroll);
    },
    append: function append(data) {
      this.initData(data, 'append');
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    prepend: function prepend(data) {
      this.initData(data, 'prepend');
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    remove: function remove(params) {
      var removed = 0;
      for (var i = this.options.data.length - 1; i >= 0; i--) {
        var row = this.options.data[i];
        var value = Utils.getItemField(row, params.field, this.options.escape, row.escape);
        if (value === undefined && params.field !== '$index') {
          continue;
        }
        if (!row.hasOwnProperty(params.field) && params.field === '$index' && params.values.includes(i) || params.values.includes(value)) {
          removed++;
          this.options.data.splice(i, 1);
        }
      }
      if (!removed) {
        return;
      }
      if (this.options.sidePagination === 'server') {
        this.options.totalRows -= removed;
        this.data = _toConsumableArray(this.options.data);
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    removeAll: function removeAll() {
      if (this.options.data.length > 0) {
        this.data.splice(0, this.data.length);
        this.options.data.splice(0, this.options.data.length);
        this.initSearch();
        this.initPagination();
        this.initBody(true);
      }
    },
    insertRow: function insertRow(params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        return;
      }
      var row = this.data[params.index];
      var originalIndex = this.options.data.indexOf(row);
      if (originalIndex === -1) {
        this.append([params.row]);
        return;
      }
      this.data.splice(params.index, 0, params.row);
      this.options.data.splice(originalIndex, 0, params.row);
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    updateRow: function updateRow(params) {
      var allParams = Array.isArray(params) ? params : [params];
      var _iterator2 = _createForOfIteratorHelper(allParams),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _params = _step2.value;
          if (!_params.hasOwnProperty('index') || !_params.hasOwnProperty('row')) {
            continue;
          }
          var row = this.data[_params.index];
          var originalIndex = this.options.data.indexOf(row);
          if (_params.hasOwnProperty('replace') && _params.replace) {
            this.data[_params.index] = _params.row;
            this.options.data[originalIndex] = _params.row;
          } else {
            Utils.extend(this.data[_params.index], _params.row);
            Utils.extend(this.options.data[originalIndex], _params.row);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    getRowByUniqueId: function getRowByUniqueId(_id) {
      var uniqueId = this.options.uniqueId;
      var len = this.options.data.length;
      var id = _id;
      var dataRow = null;
      var i;
      var row;
      for (i = len - 1; i >= 0; i--) {
        row = this.options.data[i];
        var rowUniqueId = Utils.getItemField(row, uniqueId, this.options.escape, row.escape);
        if (rowUniqueId === undefined) {
          continue;
        }
        if (typeof rowUniqueId === 'string') {
          id = _id.toString();
        } else if (typeof rowUniqueId === 'number') {
          if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
            id = parseInt(_id, 10);
          } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
            id = parseFloat(_id);
          }
        }
        if (rowUniqueId === id) {
          dataRow = row;
          break;
        }
      }
      return dataRow;
    },
    updateByUniqueId: function updateByUniqueId(params) {
      var allParams = Array.isArray(params) ? params : [params];
      var updatedUid = null;
      var _iterator3 = _createForOfIteratorHelper(allParams),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _params2 = _step3.value;
          if (!_params2.hasOwnProperty('id') || !_params2.hasOwnProperty('row')) {
            continue;
          }
          var rowId = this.options.data.indexOf(this.getRowByUniqueId(_params2.id));
          if (rowId === -1) {
            continue;
          }
          if (_params2.hasOwnProperty('replace') && _params2.replace) {
            this.options.data[rowId] = _params2.row;
          } else {
            Utils.extend(this.options.data[rowId], _params2.row);
          }
          updatedUid = _params2.id;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true, updatedUid);
    },
    removeByUniqueId: function removeByUniqueId(id) {
      var len = this.options.data.length;
      var row = this.getRowByUniqueId(id);
      if (row) {
        this.options.data.splice(this.options.data.indexOf(row), 1);
      }
      if (len === this.options.data.length) {
        return;
      }
      if (this.options.sidePagination === 'server') {
        this.options.totalRows -= 1;
        this.data = _toConsumableArray(this.options.data);
      }
      this.initSearch();
      this.initPagination();
      this.initBody(true);
    },
    _updateCellOnly: function _updateCellOnly(field, index) {
      if (index === -1) {
        return;
      }
      var rowHtml = this.initRow(this.data[index], index);
      var fieldIndex = this.getVisibleFields().indexOf(field);
      if (fieldIndex === -1) {
        return;
      }
      fieldIndex += Utils.getDetailViewIndexOffset(this.options);
      var rowEl = this.$body.querySelector(":scope > tr[data-index=\"".concat(index, "\"]"));
      if (!rowEl) return;
      var targetTd = rowEl.querySelectorAll(':scope > td')[fieldIndex];
      if (!targetTd) return;
      var div = document.createElement('div');
      div.innerHTML = rowHtml;
      var newRow = div.querySelector('tr');
      var newTd = newRow === null || newRow === void 0 ? void 0 : newRow.querySelectorAll(':scope > td')[fieldIndex];
      if (newTd && targetTd.parentNode) {
        targetTd.parentNode.replaceChild(newTd, targetTd);
      }
      this.initBodyEvent();
      this.initFooter();
      this.resetView();
      this.updateSelected();
    },
    updateCell: function updateCell(params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
        return;
      }
      var row = this.data[params.index];
      var originalIndex = this.options.data.indexOf(row);
      this.data[params.index][params.field] = params.value;
      this.options.data[originalIndex][params.field] = params.value;
      if (params.reinit === false) {
        this._updateCellOnly(params.field, params.index);
        return;
      }
      this.initSort();
      this.initBody(true);
    },
    updateCellByUniqueId: function updateCellByUniqueId(params) {
      var _this4 = this;
      var allParams = Array.isArray(params) ? params : [params];
      allParams.forEach(function (_ref2) {
        var id = _ref2.id,
          field = _ref2.field,
          value = _ref2.value;
        var row = _this4.getRowByUniqueId(id);
        var index = _this4.data.indexOf(row);
        var originalIndex = _this4.options.data.indexOf(row);
        if (!row || index === -1) {
          return;
        }
        _this4.data[index][field] = value;
        _this4.options.data[originalIndex][field] = value;
      });
      if (params.reinit === false) {
        this._updateCellOnly(params.field, this.data.indexOf(this.getRowByUniqueId(params.id)));
        return;
      }
      this.initSort();
      this.initBody(true);
    }
  };

  var DetailModule = {
    toggleDetailView: function toggleDetailView(index, _columnDetailFormatter) {
      var _tr$nextElementSiblin;
      var tr = this.$body.querySelector(":scope > tr[data-index=\"".concat(index, "\"]"));
      if (tr !== null && tr !== void 0 && (_tr$nextElementSiblin = tr.nextElementSibling) !== null && _tr$nextElementSiblin !== void 0 && _tr$nextElementSiblin.classList.contains('detail-view')) {
        this.collapseRow(index);
      } else {
        this.expandRow(index, _columnDetailFormatter);
      }
      this.resetView();
    },
    expandRow: function expandRow(index, _columnDetailFormatter) {
      var _tr$nextElementSiblin2;
      var row = this.data[index];
      var tr = this.$body.querySelector(":scope > tr[data-index=\"".concat(index, "\"][data-has-detail-view]"));
      if (!tr) return;
      if (this.options.detailViewIcon) {
        var iconEl = tr.querySelector('a.detail-icon');
        if (iconEl) {
          iconEl.innerHTML = Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose);
        }
      }
      if ((_tr$nextElementSiblin2 = tr.nextElementSibling) !== null && _tr$nextElementSiblin2 !== void 0 && _tr$nextElementSiblin2.classList.contains('detail-view')) {
        return;
      }
      var colCount = tr.querySelectorAll(':scope > td').length;
      var detailTr = document.createElement('tr');
      detailTr.className = 'detail-view';
      detailTr.innerHTML = "<td colspan=\"".concat(colCount, "\"></td>");
      tr.after(detailTr);
      var tdEl = detailTr.querySelector('td');
      var detailFormatter = _columnDetailFormatter || this.options.detailFormatter;
      var content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, tdEl], '');
      if (content !== undefined && content !== '') {
        if (typeof content === 'string') {
          tdEl.insertAdjacentHTML('beforeend', content);
        } else if (content instanceof Node) {
          tdEl.appendChild(content);
        }
      }
      this.trigger('expand-row', index, row, tdEl);
    },
    expandRowByUniqueId: function expandRowByUniqueId(uniqueId) {
      var row = this.getRowByUniqueId(uniqueId);
      if (!row) {
        return;
      }
      this.expandRow(this.data.indexOf(row));
    },
    collapseRow: function collapseRow(index) {
      var row = this.data[index];
      var tr = this.$body.querySelector(":scope > tr[data-index=\"".concat(index, "\"][data-has-detail-view]"));
      if (!tr) return;
      var nextTr = tr.nextElementSibling;
      if (!(nextTr !== null && nextTr !== void 0 && nextTr.classList.contains('detail-view'))) {
        return;
      }
      if (this.options.detailViewIcon) {
        var iconEl = tr.querySelector('a.detail-icon');
        if (iconEl) {
          iconEl.innerHTML = Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen);
        }
      }
      this.trigger('collapse-row', index, row, nextTr);
      nextTr.remove();
    },
    collapseRowByUniqueId: function collapseRowByUniqueId(uniqueId) {
      var row = this.getRowByUniqueId(uniqueId);
      if (!row) {
        return;
      }
      this.collapseRow(this.data.indexOf(row));
    },
    expandAllRows: function expandAllRows() {
      var _this = this;
      this.$body.querySelectorAll(':scope > tr[data-index][data-has-detail-view]').forEach(function (tr) {
        return _this.expandRow(+tr.dataset.index);
      });
    },
    collapseAllRows: function collapseAllRows() {
      var _this2 = this;
      this.$body.querySelectorAll(':scope > tr[data-index][data-has-detail-view]').forEach(function (tr) {
        return _this2.collapseRow(+tr.dataset.index);
      });
    }
  };

  var HeaderModule = {
    initHeader: function initHeader() {
      var _this = this;
      var visibleColumns = {};
      var headerHtml = [];
      this.header = {
        fields: [],
        styles: [],
        classes: [],
        formatters: [],
        detailFormatters: [],
        events: [],
        sorters: [],
        sortNames: [],
        cellStyles: [],
        searchables: []
      };
      Utils.updateFieldGroup(this.options.columns, this.columns);
      this.options.columns.forEach(function (columns, i) {
        var html = [];
        html.push("<tr".concat(Utils.sprintf(' class="%s"', _this._headerTrClasses[i]), " ").concat(Utils.sprintf(' style="%s"', _this._headerTrStyles[i]), ">"));
        var detailViewTemplate = '';
        if (i === 0 && Utils.hasDetailViewIcon(_this.options)) {
          var rowspan = _this.options.columns.length > 1 ? " rowspan=\"".concat(_this.options.columns.length, "\"") : '';
          detailViewTemplate = "<th class=\"detail\"".concat(rowspan, ">\n          <div class=\"fht-cell\"></div>\n          </th>");
        }
        if (detailViewTemplate && _this.options.detailViewAlign !== 'right') {
          html.push(detailViewTemplate);
        }
        columns.forEach(function (column, j) {
          var class_ = Utils.sprintf(' class="%s"', column.class);
          var unitWidth = column.widthUnit;
          var width = parseFloat(column.width);
          var columnHalign = column.halign ? column.halign : column.align;
          var halign = Utils.sprintf('text-align: %s; ', columnHalign);
          var align = Utils.sprintf('text-align: %s; ', column.align);
          var style = Utils.sprintf('vertical-align: %s; ', column.valign);
          style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);
          if (typeof column.fieldIndex === 'undefined' && !column.visible) {
            return;
          }
          var headerStyle = Utils.calculateObjectValue(null, _this.options.headerStyle, [column]);
          var csses = [];
          var data_ = [];
          var classes = '';
          if (headerStyle && headerStyle.css) {
            for (var _i = 0, _Object$entries = Object.entries(headerStyle.css); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              csses.push("".concat(key, ": ").concat(value));
            }
          }
          if (headerStyle && headerStyle.classes) {
            classes = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], headerStyle.classes].join(' ') : headerStyle.classes);
          }
          if (typeof column.fieldIndex !== 'undefined') {
            _this.header.fields[column.fieldIndex] = column.field;
            _this.header.styles[column.fieldIndex] = align + style;
            _this.header.classes[column.fieldIndex] = column.class;
            _this.header.formatters[column.fieldIndex] = column.formatter;
            _this.header.detailFormatters[column.fieldIndex] = column.detailFormatter;
            _this.header.events[column.fieldIndex] = column.events;
            _this.header.sorters[column.fieldIndex] = column.sorter;
            _this.header.sortNames[column.fieldIndex] = column.sortName;
            _this.header.cellStyles[column.fieldIndex] = column.cellStyle;
            _this.header.searchables[column.fieldIndex] = column.searchable;
            if (!column.visible) {
              return;
            }
            if (_this.options.cardView && !column.cardVisible) {
              return;
            }
            visibleColumns[column.field] = column;
          }
          if (Object.keys(column._data || {}).length > 0) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(column._data); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                k = _Object$entries2$_i[0],
                v = _Object$entries2$_i[1];
              data_.push("data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'"));
            }
          }
          html.push("<th".concat(Utils.sprintf(' title="%s"', column.titleTooltip)), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : classes || class_, Utils.sprintf(' style="%s"', (column.style || '') + halign + style + csses.join('; ') || undefined), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' scope="%s"', column.scope), Utils.sprintf(' data-field="%s"', column.field),
          // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
          j === 0 && i > 0 ? ' data-not-first-th' : '', data_.length > 0 ? data_.join(' ') : '', '>');
          html.push(Utils.sprintf('<div class="th-inner %s">', _this.options.sortable && column.sortable ? "sortable".concat(columnHalign === 'center' ? ' sortable-center' : '', " both") : ''));
          var text = _this.options.escape && _this.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title;
          var title = text;
          if (column.checkbox) {
            text = '';
            if (!_this.options.singleSelect && _this.options.checkboxHeader) {
              text = Utils.getCheckboxHtml({
                name: 'btSelectAll',
                centered: true,
                withLabel: false
              });
            }
            _this.header.stateField = column.field;
          }
          if (column.radio) {
            text = '';
            _this.header.stateField = column.field;
          }
          if (!text && column.showSelectTitle) {
            text += title;
          }
          html.push(text);
          html.push('</div>');
          html.push('<div class="fht-cell"></div>');
          html.push('</div>');
          html.push('</th>');
        });
        if (detailViewTemplate && _this.options.detailViewAlign === 'right') {
          html.push(detailViewTemplate);
        }
        html.push('</tr>');
        if (html.length > 3) {
          headerHtml.push(html.join(''));
        }
      });
      this.$header.innerHTML = headerHtml.join('');

      // Store column data on each th using WeakMap instead of jQuery .data()
      this.$header.querySelectorAll('th[data-field]').forEach(function (el) {
        _this._thDataMap.set(el, visibleColumns[el.dataset.field]);
      });

      // Event delegation for th-inner clicks (sorting)
      if (this._thInnerClickHandler) {
        this.$container.removeEventListener('click', this._thInnerClickHandler);
      }
      this._thInnerClickHandler = function (e) {
        var _this$_thDataMap$get;
        var thInner = e.target.closest('.th-inner');
        if (!thInner) return;
        var thEl = thInner.parentElement;
        if (_this.options.detailView && !(thEl !== null && thEl !== void 0 && thEl.classList.contains('bs-checkbox'))) {
          if (thInner.closest('.bootstrap-table') !== _this.$container) {
            return;
          }
        }
        if (_this.options.sortable && (_this$_thDataMap$get = _this._thDataMap.get(thEl)) !== null && _this$_thDataMap$get !== void 0 && _this$_thDataMap$get.sortable) {
          _this.onSort({
            type: e.type,
            currentTarget: thInner
          });
        }
      };
      this.$container.addEventListener('click', this._thInnerClickHandler);

      // Remove previous resize handler before potentially adding a new one
      if (this._resizeHandler) {
        window.removeEventListener('resize', this._resizeHandler);
        this._resizeHandler = null;
      }
      if (!this.options.showHeader || this.options.cardView) {
        this.$header.style.display = 'none';
        this.$tableHeader.style.display = 'none';
        this.$tableLoading.style.top = '0';
      } else {
        this.$header.style.display = '';
        this.$tableHeader.style.display = '';
        this.$tableLoading.style.top = "".concat(this.$header.offsetHeight + 1, "px");
        // Assign the correct sortable arrow
        this.resetCaret();
        this._resizeHandler = function () {
          return _this.resetView();
        };
        window.addEventListener('resize', this._resizeHandler);
      }
      this.$selectAll = this.$header.querySelector('[name="btSelectAll"]');
      if (this.$selectAll) {
        this.$selectAll.addEventListener('click', function (e) {
          e.stopPropagation();
          _this[e.currentTarget.checked ? 'checkAll' : 'uncheckAll']();
          _this.updateSelected();
        });
      }
      if (this.options.height && typeof ResizeObserver !== 'undefined') {
        if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
          if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = null;
          }
          var observer = new ResizeObserver(function (entries) {
            var _iterator = _createForOfIteratorHelper(entries),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var entry = _step.value;
                if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                  observer.disconnect();
                  if (_this._resizeObserver === observer) {
                    _this._resizeObserver = null;
                  }
                  _this.resetView();
                  return;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          this._resizeObserver = observer;
          observer.observe(this.$el);
        }
      }
    },
    getVisibleFields: function getVisibleFields() {
      var visibleFields = [];
      var _iterator2 = _createForOfIteratorHelper(this.header.fields),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;
          var column = this.columns[this.fieldsColumnsIndex[field]];
          if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
            continue;
          }
          visibleFields.push(field);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return visibleFields;
    },
    resetHeader: function resetHeader() {
      var _this2 = this;
      // Fix #61: the hidden table reset header bug.
      var isHidden = !this.$el.offsetWidth && !this.$el.offsetHeight;
      this._setDelayTimeout('header', function () {
        return _this2.fitHeader();
      }, isHidden ? 100 : 0);
    },
    fitHeader: function fitHeader() {
      var _this3 = this;
      if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
        this._setDelayTimeout('header', function () {
          return _this3.fitHeader();
        }, 100);
        return;
      }
      var fixedBody = this.$tableBody;
      var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.offsetHeight ? Utils.getScrollBarWidth() : 0;
      this.$el.style.marginTop = "-".concat(this.$header.offsetHeight, "px");
      var focused = this.$tableHeader.querySelector(':focus');
      if (focused) {
        var thEl = focused.closest('th');
        if (thEl) {
          var dataField = thEl.getAttribute('data-field');
          if (dataField !== undefined) {
            var inputs = this.$header.querySelectorAll("[data-field='".concat(dataField, "'] input, [data-field='").concat(dataField, "'] select, [data-field='").concat(dataField, "'] textarea"));
            inputs.forEach(function (el) {
              return el.classList.add('focus-temp');
            });
          }
        }
      }
      this.$header_ = this.$header.cloneNode(true);
      this.$selectAll_ = this.$header_.querySelector('[name="btSelectAll"]');

      // Copy _thDataMap entries to cloned header ths
      this.$header.querySelectorAll('th[data-field]').forEach(function (origTh) {
        var data = _this3._thDataMap.get(origTh);
        if (data) {
          var clonedTh = _this3.$header_.querySelector("th[data-field=\"".concat(origTh.dataset.field, "\"]"));
          if (clonedTh) _this3._thDataMap.set(clonedTh, data);
        }
      });
      var captionEl = this.$el.querySelector('caption');
      var fixedHeaderTable = this.$tableHeader.querySelector('table');
      this.$tableHeader.style.marginRight = "".concat(scrollWidth, "px");
      fixedHeaderTable.style.width = "".concat(this.$el.offsetWidth, "px");
      fixedHeaderTable.innerHTML = '';
      fixedHeaderTable.className = this.$el.className;
      if (captionEl) {
        fixedHeaderTable.appendChild(captionEl.cloneNode(true));
      }
      fixedHeaderTable.appendChild(this.$header_);
      this.$tableLoading.style.width = "".concat(this.$el.offsetWidth, "px");
      var focusedTempEl = document.querySelector('.focus-temp');
      if (focusedTempEl && focusedTempEl.offsetParent !== null) {
        focusedTempEl.focus();
        this.$header.querySelectorAll('.focus-temp').forEach(function (el) {
          return el.classList.remove('focus-temp');
        });
      }
      var visibleFields = this.getVisibleFields();
      var ths = Array.from(this.$header_.querySelectorAll('th'));
      var bodyRows = this.$body.querySelectorAll(':scope > tr:not(.no-records-found):not(.virtual-scroll-top)');
      var trEl = bodyRows[0] || null;
      while (trEl && trEl.querySelector(':scope > td[colspan]:not([colspan="1"])')) {
        trEl = trEl.nextElementSibling;
        while (trEl && (trEl.classList.contains('no-records-found') || trEl.classList.contains('virtual-scroll-top'))) {
          trEl = trEl.nextElementSibling;
        }
      }
      if (trEl) {
        var cells = Array.from(trEl.querySelectorAll(':scope > *'));
        var trLength = cells.length;
        cells.forEach(function (el, i) {
          if (Utils.hasDetailViewIcon(_this3.options)) {
            if (i === 0 && _this3.options.detailViewAlign !== 'right' || i === trLength - 1 && _this3.options.detailViewAlign === 'right') {
              var thDetail = ths.find(function (th) {
                return th.classList.contains('detail');
              });
              if (thDetail) {
                var fhtCell = thDetail.querySelector('.fht-cell');
                var zoomWidth = thDetail.clientWidth - (fhtCell ? fhtCell.clientWidth : 0);
                if (fhtCell) fhtCell.style.width = "".concat(el.clientWidth - zoomWidth, "px");
              }
              return;
            }
          }
          var index = i - Utils.getDetailViewIndexOffset(_this3.options);
          var matchingThs = _this3.$header_.querySelectorAll("th[data-field=\"".concat(visibleFields[index], "\"]"));
          var th = matchingThs[0];
          if (matchingThs.length > 1) {
            th = ths[el.cellIndex];
          }
          if (th) {
            var _fhtCell = th.querySelector('.fht-cell');
            var _zoomWidth = th.clientWidth - (_fhtCell ? _fhtCell.clientWidth : 0);
            if (_fhtCell) _fhtCell.style.width = "".concat(el.clientWidth - _zoomWidth, "px");
          }
        });
      }
      this.horizontalScroll();
      this.trigger('post-header');
    },
    resetCaret: function resetCaret() {
      var _this$options = this.options,
        sortName = _this$options.sortName,
        sortOrder = _this$options.sortOrder;
      var ariaSort = sortOrder === 'asc' ? 'ascending' : 'descending';
      this.$header.querySelectorAll('th').forEach(function (th) {
        var isActive = th.dataset.field === sortName;
        if (isActive) {
          th.setAttribute('aria-sort', ariaSort);
        } else {
          th.removeAttribute('aria-sort');
        }
        th.querySelectorAll('.sortable').forEach(function (el) {
          el.classList.remove('desc', 'asc');
          el.classList.add(isActive ? sortOrder : 'both');
        });
      });
    },
    initFooter: function initFooter() {
      var _this$$tableFooter;
      if (!this.options.showFooter || this.options.cardView) {
        // do nothing
        return;
      }
      var data = this.getData();
      var html = [];
      var detailTemplate = null;
      if (Utils.hasDetailViewIcon(this.options)) {
        detailTemplate = Utils.h('th', {
          class: 'detail'
        }, [Utils.h('div', {
          class: 'th-inner'
        }), Utils.h('div', {
          class: 'fht-cell'
        })]);
      }
      if (detailTemplate && this.options.detailViewAlign !== 'right') {
        html.push(detailTemplate);
      }
      var _iterator3 = _createForOfIteratorHelper(this.columns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var column = _step3.value;
          var hasData = this.footerData && this.footerData.length > 0;
          if (!column.visible || hasData && !(column.field in this.footerData[0])) {
            continue;
          }
          if (this.options.cardView && !column.cardVisible) {
            return;
          }
          var style = Utils.calculateObjectValue(null, column.footerStyle || this.options.footerStyle, [column]);
          var csses = style && style.css || {};
          var colspan = hasData && this.footerData[0]["_".concat(column.field, "_colspan")] || 0;
          var value = hasData && this.footerData[0][column.field] || '';
          value = Utils.calculateObjectValue(column, column.footerFormatter, [data, value], value);
          html.push(Utils.h('th', {
            class: [column['class'], style && style.classes],
            style: _objectSpread2({
              'text-align': column.falign ? column.falign : column.align,
              'vertical-align': column.valign
            }, csses),
            colspan: colspan || undefined
          }, [Utils.h('div', {
            class: 'th-inner'
          }, _toConsumableArray(Utils.htmlToNodes(value))), Utils.h('div', {
            class: 'fht-cell'
          })]));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (detailTemplate && this.options.detailViewAlign === 'right') {
        html.push(detailTemplate);
      }
      if (!this.options.height && !this.$tableFooter) {
        this.$el.insertAdjacentHTML('beforeend', '<tfoot><tr></tr></tfoot>');
        this.$tableFooter = this.$el.querySelector('tfoot');
      }
      if (this.$tableFooter && !this.$tableFooter.querySelector('tr')) {
        this.$tableFooter.innerHTML = '<table><thead><tr></tr></thead></table>';
      }
      var trEl = (_this$$tableFooter = this.$tableFooter) === null || _this$$tableFooter === void 0 ? void 0 : _this$$tableFooter.querySelector('tr');
      if (trEl) {
        trEl.innerHTML = '';
        var _iterator4 = _createForOfIteratorHelper(html),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var node = _step4.value;
            if (node instanceof Node) {
              trEl.appendChild(node);
            } else if (typeof node === 'string') {
              trEl.insertAdjacentHTML('beforeend', node);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      this.trigger('post-footer', this.$tableFooter);
    },
    fitFooter: function fitFooter() {
      var _this4 = this;
      if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
        this._setDelayTimeout('footer', function () {
          return _this4.fitFooter();
        }, 100);
        return;
      }
      var fixedBody = this.$tableBody;
      var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.offsetHeight ? Utils.getScrollBarWidth() : 0;
      this.$tableFooter.style.marginRight = "".concat(scrollWidth, "px");
      var footerTable = this.$tableFooter.querySelector('table');
      if (footerTable) {
        footerTable.style.width = "".concat(this.$el.offsetWidth, "px");
        footerTable.className = this.$el.className;
      }
      var ths = Array.from(this.$tableFooter.querySelectorAll('th'));
      ths.forEach(function (th) {
        var fhtCell = th.querySelector('.fht-cell');
        if (fhtCell) fhtCell.style.width = 'auto';
      });
      var bodyRows = this.$body.querySelectorAll(':scope > tr:not(.no-records-found)');
      var trEl = bodyRows[0] || null;
      while (trEl && trEl.querySelector(':scope > td[colspan]:not([colspan="1"])')) {
        trEl = trEl.nextElementSibling;
      }
      if (trEl) {
        var cells = Array.from(trEl.querySelectorAll(':scope > *'));
        var trLength = cells.length;
        cells.forEach(function (el, i) {
          if (Utils.hasDetailViewIcon(_this4.options)) {
            if (i === 0 && _this4.options.detailViewAlign === 'left' || i === trLength - 1 && _this4.options.detailViewAlign === 'right') {
              var thDetail = ths.find(function (th) {
                return th.classList.contains('detail');
              });
              if (thDetail) {
                var fhtCell = thDetail.querySelector('.fht-cell');
                var zoomWidth = thDetail.clientWidth - (fhtCell ? fhtCell.clientWidth : 0);
                if (fhtCell) fhtCell.style.width = "".concat(el.clientWidth - zoomWidth, "px");
              }
              return;
            }
          }
          var th = ths[i];
          if (th) {
            var _fhtCell2 = th.querySelector('.fht-cell');
            var _zoomWidth2 = th.clientWidth - (_fhtCell2 ? _fhtCell2.clientWidth : 0);
            if (_fhtCell2) _fhtCell2.style.width = "".concat(el.clientWidth - _zoomWidth2, "px");
          }
        });
      }
      this.horizontalScroll();
    },
    horizontalScroll: function horizontalScroll() {
      var _this5 = this;
      if (this._scrollHandler) {
        this.$tableBody.removeEventListener('scroll', this._scrollHandler);
      }
      this._scrollHandler = function () {
        var scrollLeft = _this5.$tableBody.scrollLeft;
        if (_this5.options.showHeader && _this5.options.height) {
          _this5.$tableHeader.scrollLeft = scrollLeft;
        }
        if (_this5.options.showFooter && !_this5.options.cardView) {
          _this5.$tableFooter.scrollLeft = scrollLeft;
        }
        _this5.trigger('scroll-body', _this5.$tableBody);
      };
      this.$tableBody.addEventListener('scroll', this._scrollHandler);
    },
    updateColumnTitle: function updateColumnTitle(params) {
      if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
        return;
      }
      this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title;
      if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
        var _iterator5 = _createForOfIteratorHelper(this.$header.querySelectorAll('th[data-field]')),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var el = _step5.value;
            if (el.dataset.field === params.field) {
              var thInner = el.querySelector('.th-inner');
              if (thInner) thInner.innerHTML = params.title;
              break;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.resetView();
      }
    }
  };

  var es_array_flatMap = {};

  var flattenIntoArray_1;
  var hasRequiredFlattenIntoArray;

  function requireFlattenIntoArray () {
  	if (hasRequiredFlattenIntoArray) return flattenIntoArray_1;
  	hasRequiredFlattenIntoArray = 1;
  	var isArray = requireIsArray();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var bind = requireFunctionBindContext();
  	var createProperty = requireCreateProperty();

  	// `FlattenIntoArray` abstract operation
  	// https://tc39.es/ecma262/#sec-flattenintoarray
  	var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  	  var targetIndex = start;
  	  var sourceIndex = 0;
  	  var mapFn = mapper ? bind(mapper, thisArg) : false;
  	  var element, elementLen;

  	  while (sourceIndex < sourceLen) {
  	    if (sourceIndex in source) {
  	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

  	      if (depth > 0 && isArray(element)) {
  	        elementLen = lengthOfArrayLike(element);
  	        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
  	      } else {
  	        doesNotExceedSafeInteger(targetIndex + 1);
  	        createProperty(target, targetIndex, element);
  	      }

  	      targetIndex++;
  	    }
  	    sourceIndex++;
  	  }
  	  return targetIndex;
  	};

  	flattenIntoArray_1 = flattenIntoArray;
  	return flattenIntoArray_1;
  }

  var hasRequiredEs_array_flatMap;

  function requireEs_array_flatMap () {
  	if (hasRequiredEs_array_flatMap) return es_array_flatMap;
  	hasRequiredEs_array_flatMap = 1;
  	var $ = require_export();
  	var flattenIntoArray = requireFlattenIntoArray();
  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var arraySpeciesCreate = requireArraySpeciesCreate();

  	// `Array.prototype.flatMap` method
  	// https://tc39.es/ecma262/#sec-array.prototype.flatmap
  	$({ target: 'Array', proto: true }, {
  	  flatMap: function flatMap(callbackfn /* , thisArg */) {
  	    var O = toObject(this);
  	    var sourceLen = lengthOfArrayLike(O);
  	    var A;
  	    aCallable(callbackfn);
  	    A = arraySpeciesCreate(O, 0);
  	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return A;
  	  }
  	});
  	return es_array_flatMap;
  }

  requireEs_array_flatMap();

  var es_array_unscopables_flatMap = {};

  var hasRequiredEs_array_unscopables_flatMap;

  function requireEs_array_unscopables_flatMap () {
  	if (hasRequiredEs_array_unscopables_flatMap) return es_array_unscopables_flatMap;
  	hasRequiredEs_array_unscopables_flatMap = 1;
  	// this method was added to unscopables after implementation
  	// in popular engines, so it's moved to a separate module
  	var addToUnscopables = requireAddToUnscopables();

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('flatMap');
  	return es_array_unscopables_flatMap;
  }

  requireEs_array_unscopables_flatMap();

  var es_iterator_flatMap = {};

  var getIteratorFlattenable;
  var hasRequiredGetIteratorFlattenable;

  function requireGetIteratorFlattenable () {
  	if (hasRequiredGetIteratorFlattenable) return getIteratorFlattenable;
  	hasRequiredGetIteratorFlattenable = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var getIteratorMethod = requireGetIteratorMethodInternal();

  	getIteratorFlattenable = function (obj, stringHandling) {
  	  if (!stringHandling || typeof obj !== 'string') anObject(obj);
  	  var method = getIteratorMethod(obj);
  	  return getIteratorDirect(anObject(method !== undefined ? call(method, obj) : obj));
  	};
  	return getIteratorFlattenable;
  }

  var hasRequiredEs_iterator_flatMap;

  function requireEs_iterator_flatMap () {
  	if (hasRequiredEs_iterator_flatMap) return es_iterator_flatMap;
  	hasRequiredEs_iterator_flatMap = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var getIteratorFlattenable = requireGetIteratorFlattenable();
  	var createIteratorProxy = requireIteratorCreateProxy();
  	var iteratorClose = requireIteratorClose();
  	var fails = requireFails();
  	var IS_PURE = requireIsPure();
  	var iteratorHelperThrowsOnInvalidIterator = requireIteratorHelperThrowsOnInvalidIterator();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	// Should not throw an error for an iterator without `return` method. Fixed in Safari 26.2
  	// https://bugs.webkit.org/show_bug.cgi?id=297532
  	var THROWS_ON_ITERATOR_WITHOUT_RETURN = !IS_PURE && fails(function () {
  	  // eslint-disable-next-line es/no-array-prototype-values, es/no-iterator-prototype-flatmap, es/no-iterator-prototype-find -- testing
  	  return [1].values()
  	    .flatMap(function () { return [1]; })
  	    .find(function () { return true; }) !== 1;
  	});

  	var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN
  	  && !iteratorHelperThrowsOnInvalidIterator('flatMap', function () { /* empty */ });

  	var flatMapWithoutClosingOnEarlyError = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  	  && iteratorHelperWithoutClosingOnEarlyError('flatMap', TypeError);

  	var FORCED = IS_PURE || THROWS_ON_ITERATOR_WITHOUT_RETURN || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  	  || flatMapWithoutClosingOnEarlyError;

  	var IteratorProxy = createIteratorProxy(function () {
  	  var iterator = this.iterator;
  	  var mapper = this.mapper;
  	  var result, inner;

  	  while (true) {
  	    if (inner = this.inner) try {
  	      result = anObject(call(inner.next, inner.iterator));
  	      if (!result.done) return result.value;
  	      this.inner = null;
  	    } catch (error) { iteratorClose(iterator, 'throw', error); }

  	    result = anObject(call(this.next, iterator));

  	    if (this.done = !!result.done) return;

  	    try {
  	      this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
  	    } catch (error) { iteratorClose(iterator, 'throw', error); }
  	  }
  	});

  	// `Iterator.prototype.flatMap` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.flatmap
  	$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  	  flatMap: function flatMap(mapper) {
  	    anObject(this);
  	    try {
  	      aCallable(mapper);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (flatMapWithoutClosingOnEarlyError) return call(flatMapWithoutClosingOnEarlyError, this, mapper);

  	    return new IteratorProxy(getIteratorDirect(this), {
  	      mapper: mapper,
  	      inner: null
  	    });
  	  }
  	});
  	return es_iterator_flatMap;
  }

  requireEs_iterator_flatMap();

  var PaginationModule = {
    initPagination: function initPagination() {
      var _this = this;
      var opts = this.options;
      if (!opts.pagination) {
        this.$pagination.forEach(function (el) {
          el.style.display = 'none';
        });
        return;
      }
      this.$pagination.forEach(function (el) {
        el.style.display = '';
      });
      var html = [];
      var allSelected = false;
      var i;
      var from;
      var to;
      var data = this.getData({
        includeHiddenRows: false
      });
      var pageList = opts.pageList;
      if (typeof pageList === 'string') {
        pageList = pageList.replace(/\[|\]| /g, '').toLowerCase().split(',');
      }
      pageList = pageList.map(function (value) {
        if (typeof value === 'string') {
          return value.toLowerCase() === opts.formatAllRows().toLowerCase() || ['all', 'unlimited'].includes(value.toLowerCase()) ? opts.formatAllRows() : +value;
        }
        return value;
      });
      this.paginationParts = opts.paginationParts;
      if (typeof this.paginationParts === 'string') {
        this.paginationParts = Utils.parseStringArray(this.paginationParts);
      }
      if (opts.sidePagination !== 'server') {
        opts.totalRows = data.length;
      }
      this.totalPages = 0;
      if (opts.pageSize <= 0) {
        console.warn('pageSize must be a positive number, falling back to show all rows.');
        opts.pageSize = opts.totalRows || 1;
        allSelected = true;
      }
      if (opts.totalRows) {
        if (opts.pageSize === opts.formatAllRows()) {
          opts.pageSize = opts.totalRows;
          allSelected = true;
        }
        this.totalPages = ~~((opts.totalRows - 1) / opts.pageSize) + 1;
        opts.totalPages = this.totalPages;
      }
      if (this.totalPages > 0 && opts.pageNumber > this.totalPages) {
        opts.pageNumber = this.totalPages;
      }
      this.pageFrom = (opts.pageNumber - 1) * opts.pageSize + 1;
      this.pageTo = opts.pageNumber * opts.pageSize;
      if (this.pageTo > opts.totalRows) {
        this.pageTo = opts.totalRows;
      }
      if (this.options.pagination && this.options.sidePagination !== 'server') {
        this.options.totalNotFiltered = this.options.data.length;
      }
      if (!this.options.showExtendedPagination) {
        this.options.totalNotFiltered = undefined;
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
        html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationDetailHAlign, " pagination-detail\">"));
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort')) {
        var totalRows = this.options.totalRows;
        if (this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded && this.totalPages > 1) {
          totalRows += ' +';
        }
        var paginationInfo = this.paginationParts.includes('pageInfoShort') ? opts.formatDetailPagination(totalRows) : opts.formatShowingRows(this.pageFrom, this.pageTo, totalRows, opts.totalNotFiltered);
        html.push("<span class=\"pagination-info\">\n      ".concat(paginationInfo, "\n      </span>"));
      }
      if (this.paginationParts.includes('pageSize')) {
        html.push('<div class="page-list">');
        var pageNumber = ["<div class=\"".concat(this.constants.classes.paginationDropdown, "\">\n        <button class=\"").concat(this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(this.constants.dataToggle, "=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat(allSelected ? opts.formatAllRows() : opts.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];
        pageList.forEach(function (page, i) {
          if (!opts.smartDisplay || i === 0 || pageList[i - 1] < opts.totalRows || page === opts.formatAllRows()) {
            var active;
            if (allSelected) {
              active = page === opts.formatAllRows() ? _this.constants.classes.dropdownActive : '';
            } else {
              active = page === opts.pageSize ? _this.constants.classes.dropdownActive : '';
            }
            pageNumber.push(Utils.sprintf(_this.constants.html.pageDropdownItem, active, page));
          }
        });
        pageNumber.push("".concat(this.constants.html.pageDropdown[1], "</div>"));
        html.push(opts.formatRecordsPerPage(pageNumber.join('')));
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
        html.push('</div></div>');
      }
      if (this.paginationParts.includes('pageList')) {
        html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationHAlign, " pagination\">"), Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', opts.iconSize)), Utils.sprintf(this.constants.html.paginationItem, ' page-pre', opts.formatSRPaginationPreText(), opts.paginationPreText));
        if (this.totalPages < opts.paginationSuccessivelySize) {
          from = 1;
          to = this.totalPages;
        } else {
          from = opts.pageNumber - opts.paginationPagesBySide;
          to = from + opts.paginationPagesBySide * 2;
        }
        if (opts.pageNumber < opts.paginationSuccessivelySize - 1) {
          to = opts.paginationSuccessivelySize;
        }
        if (opts.paginationSuccessivelySize > this.totalPages - from) {
          from = from - (opts.paginationSuccessivelySize - (this.totalPages - from)) + 1;
        }
        if (from < 1) {
          from = 1;
        }
        if (to > this.totalPages) {
          to = this.totalPages;
        }
        var middleSize = Math.round(opts.paginationPagesBySide / 2);
        var pageItem = function pageItem(i) {
          var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return Utils.sprintf(_this.constants.html.paginationItem, classes + (i === opts.pageNumber ? " ".concat(_this.constants.classes.paginationActive) : ''), opts.formatSRPaginationPageText(i), i);
        };
        if (from > 1) {
          var max = opts.paginationPagesBySide;
          if (max >= from) max = from - 1;
          for (i = 1; i <= max; i++) {
            html.push(pageItem(i));
          }
          if (from - 1 === max + 1) {
            i = from - 1;
            html.push(pageItem(i));
          } else if (from - 1 > max) {
            if (from - opts.paginationPagesBySide * 2 > opts.paginationPagesBySide && opts.paginationUseIntermediate) {
              i = Math.round((from - middleSize) / 2 + middleSize);
              html.push(pageItem(i, ' page-intermediate'));
            } else {
              html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '', '...'));
            }
          }
        }
        for (i = from; i <= to; i++) {
          html.push(pageItem(i));
        }
        if (this.totalPages > to) {
          var min = this.totalPages - (opts.paginationPagesBySide - 1);
          if (to >= min) min = to + 1;
          if (to + 1 === min - 1) {
            i = to + 1;
            html.push(pageItem(i));
          } else if (min > to + 1) {
            if (this.totalPages - to > opts.paginationPagesBySide * 2 && opts.paginationUseIntermediate) {
              i = Math.round((this.totalPages - middleSize - to) / 2 + to);
              html.push(pageItem(i, ' page-intermediate'));
            } else {
              html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '', '...'));
            }
          }
          for (i = min; i <= this.totalPages; i++) {
            html.push(pageItem(i));
          }
        }
        html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', opts.formatSRPaginationNextText(), opts.paginationNextText));
        html.push(this.constants.html.pagination[1], '</div>');
      }
      var htmlStr = html.join('');
      this.$pagination.forEach(function (el) {
        el.innerHTML = htmlStr;
      });
      var dropupClass = ['bottom', 'both'].includes(opts.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : '';
      var lastPag = this.$pagination[this.$pagination.length - 1];
      if (lastPag && dropupClass.trim()) {
        lastPag.querySelectorAll('.page-list > div').forEach(function (el) {
          return el.classList.add(dropupClass.trim());
        });
      }
      if (!opts.onlyInfoPagination) {
        var $pageList = this.$pagination.flatMap(function (el) {
          return _toConsumableArray(el.querySelectorAll('.page-list a'));
        });
        var $pre = this.$pagination.flatMap(function (el) {
          return _toConsumableArray(el.querySelectorAll('.page-pre'));
        });
        var $next = this.$pagination.flatMap(function (el) {
          return _toConsumableArray(el.querySelectorAll('.page-next'));
        });
        var $number = this.$pagination.flatMap(function (el) {
          return _toConsumableArray(el.querySelectorAll('.page-item:not(.page-next):not(.page-pre):not(.page-last-separator):not(.page-first-separator)'));
        });
        if (this.totalPages <= 1) {
          this.$pagination.forEach(function (el) {
            return el.querySelectorAll('div.pagination').forEach(function (p) {
              p.style.display = 'none';
            });
          });
        }
        if (opts.smartDisplay) {
          if (pageList.length < 2 || opts.totalRows <= pageList[0]) {
            this.$pagination.forEach(function (el) {
              return el.querySelectorAll('div.page-list').forEach(function (p) {
                p.style.display = 'none';
              });
            });
          }
        }

        // when data is empty, hide the pagination
        var hasData = this.getData().length > 0;
        this.$pagination.forEach(function (el) {
          el.style.display = hasData ? '' : 'none';
        });
        if (!opts.paginationLoop) {
          if (opts.pageNumber === 1) {
            $pre.forEach(function (el) {
              return el.classList.add('disabled');
            });
          }
          if (opts.pageNumber === this.totalPages) {
            $next.forEach(function (el) {
              return el.classList.add('disabled');
            });
          }
        }
        if (allSelected) {
          opts.pageSize = opts.formatAllRows();
        }
        $pageList.forEach(function (el) {
          return el.addEventListener('click', function (e) {
            return _this.onPageListChange(e);
          });
        });
        $pre.forEach(function (el) {
          return el.addEventListener('click', function (e) {
            return _this.onPagePre(e);
          });
        });
        $next.forEach(function (el) {
          return el.addEventListener('click', function (e) {
            return _this.onPageNext(e);
          });
        });
        $number.forEach(function (el) {
          return el.addEventListener('click', function (e) {
            return _this.onPageNumber(e);
          });
        });
      }
    },
    updatePagination: function updatePagination(event) {
      var _event$currentTarget;
      // Fix #171: IE disabled button can be clicked bug.
      if (event && (_event$currentTarget = event.currentTarget) !== null && _event$currentTarget !== void 0 && _event$currentTarget.classList.contains('disabled')) {
        return;
      }
      if (!this.options.maintainMetaData) {
        this.resetRows();
      }
      this.initPagination();
      this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
      if (this.options.sidePagination === 'server' || this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded && this.options.pageNumber === this.totalPages) {
        this.initServer();
      } else {
        this.initBody();
      }
    },
    onPageListChange: function onPageListChange(event) {
      var _parent$parentElement,
        _this2 = this;
      event.preventDefault();
      var el = event.currentTarget;
      var parent = el.parentElement;
      parent === null || parent === void 0 || parent.classList.add(this.constants.classes.dropdownActive);
      Array.from((parent === null || parent === void 0 || (_parent$parentElement = parent.parentElement) === null || _parent$parentElement === void 0 ? void 0 : _parent$parentElement.children) || []).filter(function (c) {
        return c !== parent;
      }).forEach(function (c) {
        return c.classList.remove(_this2.constants.classes.dropdownActive);
      });
      this.options.pageSize = el.textContent.toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +el.textContent;
      var pageSizeEl = this.$toolbar.querySelector('.page-size');
      if (pageSizeEl) pageSizeEl.textContent = this.options.pageSize;
      this.updatePagination(event);
      return false;
    },
    onPagePre: function onPagePre(event) {
      if (event.currentTarget.classList.contains('disabled')) {
        return;
      }
      event.preventDefault();
      if (this.options.pageNumber - 1 === 0) {
        this.options.pageNumber = this.options.totalPages;
      } else {
        this.options.pageNumber--;
      }
      this.updatePagination(event);
      return false;
    },
    onPageNext: function onPageNext(event) {
      if (event.currentTarget.classList.contains('disabled')) {
        return;
      }
      event.preventDefault();
      if (this.options.pageNumber + 1 > this.options.totalPages) {
        this.options.pageNumber = 1;
      } else {
        this.options.pageNumber++;
      }
      this.updatePagination(event);
      return false;
    },
    onPageNumber: function onPageNumber(event) {
      event.preventDefault();
      if (this.options.pageNumber === +event.currentTarget.textContent) {
        return;
      }
      this.options.pageNumber = +event.currentTarget.textContent;
      this.updatePagination(event);
      return false;
    },
    selectPage: function selectPage(page) {
      if (page > 0 && page <= this.options.totalPages) {
        this.options.pageNumber = page;
        this.updatePagination();
      }
    },
    prevPage: function prevPage() {
      if (this.options.pageNumber > 1) {
        this.options.pageNumber--;
        this.updatePagination();
      }
    },
    nextPage: function nextPage() {
      if (this.options.pageNumber < this.options.totalPages) {
        this.options.pageNumber++;
        this.updatePagination();
      }
    },
    togglePagination: function togglePagination() {
      this.options.pagination = !this.options.pagination;
      var icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : '';
      var text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : '';
      var btn = this.$toolbar.querySelector('button[name="paginationSwitch"]');
      if (btn) btn.innerHTML = "".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text);
      this.updatePagination();
      this.trigger('toggle-pagination', this.options.pagination);
    }
  };

  var SearchModule = {
    initSearchText: function initSearchText() {
      if (this.options.search) {
        this.searchText = '';
        if (this.options.searchText !== '') {
          var search = Utils.getSearchInput(this);
          if (search) search.value = this.options.searchText;
          this.onSearch({
            currentTarget: search,
            firedByInitSearchText: true
          });
        }
      }
    },
    initSearch: function initSearch() {
      var _this = this;
      this.filterOptions = this.filterOptions || this.options.filterOptions;
      if (this.options.sidePagination !== 'server') {
        if (this.options.customSearch) {
          this.data = Utils.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText, this.filterColumns]);
          if (this.options.sortReset) {
            this.unsortedData = _toConsumableArray(this.data);
          }
          this.initSort();
          return;
        }
        var rawSearchText = this.searchText && (this.fromHtml ? Utils.escapeHTML(this.searchText) : this.searchText);
        var searchText = rawSearchText ? rawSearchText.toLowerCase() : '';
        var f = Utils.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
        if (this.options.searchAccentNeutralise) {
          searchText = Utils.normalizeAccent(searchText);
        }

        // Check filter
        if (typeof this.filterOptions.filterAlgorithm === 'function') {
          this.data = this.options.data.filter(function (item) {
            return _this.filterOptions.filterAlgorithm.apply(null, [item, f]);
          });
        } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
          this.data = f ? this.options.data.filter(function (item) {
            var filterAlgorithm = _this.filterOptions.filterAlgorithm;
            if (!['and', 'or'].includes(filterAlgorithm)) {
              return true;
            }
            for (var key in f) {
              if (!Object.prototype.hasOwnProperty.call(f, key)) {
                continue;
              }
              var value = Utils.getItemField(item, key, false);
              var isArray = Array.isArray(f[key]);
              var match = !isArray && f[key] === value || isArray && f[key].includes(value);
              if (match && filterAlgorithm === 'or') {
                return true;
              }
              if (!match && filterAlgorithm === 'and') {
                return false;
              }
            }
            return filterAlgorithm === 'and';
          }) : _toConsumableArray(this.options.data);
        }
        var visibleFields = this.getVisibleFields();
        this.data = searchText ? this.data.filter(function (item, i) {
          for (var j = 0; j < _this.header.fields.length; j++) {
            if (!_this.header.searchables[j] || _this.options.visibleSearch && visibleFields.indexOf(_this.header.fields[j]) === -1) {
              continue;
            }
            var key = Utils.isNumeric(_this.header.fields[j]) ? parseInt(_this.header.fields[j], 10) : _this.header.fields[j];
            var column = _this.columns[_this.fieldsColumnsIndex[key]];
            var value = Utils.getItemField(item, key, false);
            if (_this.options.searchAccentNeutralise) {
              value = Utils.normalizeAccent(value);
            }

            // Fix #142: respect searchFormatter boolean
            if (column && column.searchFormatter) {
              value = Utils.calculateObjectValue(column, _this.header.formatters[j], [value, item, i, column.field], value);
              if (_this.header.formatters[j] && typeof value !== 'number') {
                // search innerText
                var div = document.createElement('div');
                div.innerHTML = value;
                value = div.textContent;
              }
            }
            if (typeof value === 'string' || typeof value === 'number') {
              if (_this.options.strictSearch) {
                if ("".concat(value).toLowerCase() === searchText) {
                  return true;
                }
              } else if (_this.options.regexSearch) {
                if (Utils.regexCompare(value, rawSearchText)) {
                  return true;
                }
              } else {
                var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
                var matches = largerSmallerEqualsRegex.exec(_this.searchText);
                var comparisonCheck = false;
                if (matches) {
                  var operator = matches[1] || "".concat(matches[5], "l");
                  var comparisonValue = matches[2] || matches[3];
                  var int = parseInt(value, 10);
                  var comparisonInt = parseInt(comparisonValue, 10);
                  switch (operator) {
                    case '>':
                    case '<l':
                      comparisonCheck = int > comparisonInt;
                      break;
                    case '<':
                    case '>l':
                      comparisonCheck = int < comparisonInt;
                      break;
                    case '<=':
                    case '=<':
                    case '>=l':
                    case '=>l':
                      comparisonCheck = int <= comparisonInt;
                      break;
                    case '>=':
                    case '=>':
                    case '<=l':
                    case '=<l':
                      comparisonCheck = int >= comparisonInt;
                      break;
                  }
                }
                if (comparisonCheck || "".concat(value).toLowerCase().includes(searchText)) {
                  return true;
                }
              }
            }
          }
          return false;
        }) : this.data;
        if (this.options.sortReset) {
          this.unsortedData = _toConsumableArray(this.data);
        }
        this.initSort();
      }
    },
    onSearch: function onSearch() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        currentTarget = _ref.currentTarget,
        firedByInitSearchText = _ref.firedByInitSearchText;
      var overwriteSearchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (currentTarget !== undefined && currentTarget && overwriteSearchText) {
        var _currentTarget$value, _currentTarget$classL;
        var text = ((_currentTarget$value = currentTarget.value) !== null && _currentTarget$value !== void 0 ? _currentTarget$value : '').trim();
        if (this.options.trimOnSearch && currentTarget.value !== text) {
          currentTarget.value = text;
        }
        if (this.searchText === text) {
          return;
        }
        var searchInput = Utils.getSearchInput(this);
        if (currentTarget === searchInput || (_currentTarget$classL = currentTarget.classList) !== null && _currentTarget$classL !== void 0 && _currentTarget$classL.contains('search-input')) {
          this.searchText = text;
          this.options.searchText = text;
        }
      }
      if (!firedByInitSearchText) {
        this.options.pageNumber = 1;
      }
      this.initSearch();
      if (firedByInitSearchText) {
        if (this.options.sidePagination === 'client') {
          this.updatePagination();
        }
      } else {
        this.updatePagination();
      }
      this.trigger('search', this.searchText);
    },
    resetSearch: function resetSearch(text) {
      var search = Utils.getSearchInput(this);
      var textToUse = text || '';
      if (search) search.value = textToUse;
      this.searchText = textToUse;
      this.options.searchText = textToUse;
      this.onSearch({
        currentTarget: search
      }, false);
    },
    filterBy: function filterBy(columns, options) {
      this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions : Utils.extend({}, this.options.filterOptions, options);
      this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns;
      this.options.pageNumber = 1;
      this.initSearch();
      this.updatePagination();
    }
  };

  var es_iterator_some = {};

  var hasRequiredEs_iterator_some;

  function requireEs_iterator_some () {
  	if (hasRequiredEs_iterator_some) return es_iterator_some;
  	hasRequiredEs_iterator_some = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var iterate = requireIterate();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var getIteratorDirect = requireGetIteratorDirect();
  	var iteratorClose = requireIteratorClose();
  	var iteratorHelperWithoutClosingOnEarlyError = requireIteratorHelperWithoutClosingOnEarlyError();

  	var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

  	// `Iterator.prototype.some` method
  	// https://tc39.es/ecma262/#sec-iterator.prototype.some
  	$({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
  	  some: function some(predicate) {
  	    anObject(this);
  	    try {
  	      aCallable(predicate);
  	    } catch (error) {
  	      iteratorClose(this, 'throw', error);
  	    }

  	    if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);

  	    var record = getIteratorDirect(this);
  	    var counter = 0;
  	    return iterate(record, function (value, stop) {
  	      if (predicate(value, counter++)) return stop();
  	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  	  }
  	});
  	return es_iterator_some;
  }

  requireEs_iterator_some();

  var ToolbarModule = {
    renderButton: function renderButton(buttonName, buttonConfig) {
      var opts = this.options;
      var buttonHtml;
      if (buttonConfig.hasOwnProperty('html')) {
        if (typeof buttonConfig.html === 'function') {
          buttonHtml = buttonConfig.html();
        } else {
          buttonHtml = buttonConfig.html;
        }
      } else {
        var buttonClass = this.constants.buttonsClass;
        if (buttonConfig.hasOwnProperty('attributes') && buttonConfig.attributes.class) {
          buttonClass += " ".concat(buttonConfig.attributes.class);
        }
        buttonHtml = "<button class=\"".concat(buttonClass, "\" type=\"button\" name=\"").concat(buttonName, "\"");
        if (buttonConfig.hasOwnProperty('attributes')) {
          for (var _i = 0, _Object$entries = Object.entries(buttonConfig.attributes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              attributeName = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (attributeName === 'class') {
              continue;
            }
            var attribute = attributeName === 'title' ? opts.buttonsAttributeTitle : attributeName;
            buttonHtml += " ".concat(attribute, "=\"").concat(value, "\"");
          }
        }
        buttonHtml += '>';
        if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
          buttonHtml += "".concat(Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon), " ");
        }
        if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
          buttonHtml += buttonConfig.text;
        }
        buttonHtml += '</button>';
      }
      return buttonHtml;
    },
    initToolbar: function initToolbar() {
      var _this$$toolbar$queryS,
        _this = this;
      var opts = this.options;
      var html;
      var timeoutId;
      var switchableCount = 0;
      if ((_this$$toolbar$queryS = this.$toolbar.querySelector('.bs-bars')) !== null && _this$$toolbar$queryS !== void 0 && _this$$toolbar$queryS.children.length) {
        var toolbarEl = typeof opts.toolbar === 'string' ? document.querySelector(opts.toolbar) : opts.toolbar instanceof Element ? opts.toolbar : null;
        if (toolbarEl) document.body.appendChild(toolbarEl);
      }
      this.$toolbar.innerHTML = '';
      if (typeof opts.toolbar === 'string' || _typeof(opts.toolbar) === 'object') {
        var bsBarsDiv = document.createElement('div');
        bsBarsDiv.className = "bs-bars ".concat(this.constants.classes.pull, "-").concat(opts.toolbarAlign);
        var toolbarContent = typeof opts.toolbar === 'string' ? document.querySelector(opts.toolbar) : opts.toolbar instanceof Element ? opts.toolbar : null;
        if (toolbarContent) bsBarsDiv.appendChild(toolbarContent);
        this.$toolbar.appendChild(bsBarsDiv);
      }

      // showColumns, showToggle, showRefresh
      html = ["<div class=\"".concat(['columns', "columns-".concat(opts.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(opts.buttonsAlign)].join(' '), "\">")];
      if (typeof opts.buttonsOrder === 'string') {
        opts.buttonsOrder = Utils.parseStringArray(opts.buttonsOrder);
      }
      this.buttons = Object.assign(this.buttons, {
        paginationSwitch: {
          text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
          icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
          render: false,
          event: this.togglePagination,
          attributes: {
            'aria-label': opts.formatPaginationSwitch(),
            title: opts.formatPaginationSwitch()
          }
        },
        refresh: {
          text: opts.formatRefresh(),
          icon: opts.icons.refresh,
          render: false,
          event: this.refresh,
          attributes: {
            'aria-label': opts.formatRefresh(),
            title: opts.formatRefresh()
          }
        },
        toggle: {
          text: opts.formatToggleOn(),
          icon: opts.icons.toggleOff,
          render: false,
          event: this.toggleView,
          attributes: {
            'aria-label': opts.formatToggleOn(),
            title: opts.formatToggleOn()
          }
        },
        fullscreen: {
          text: opts.formatFullscreen(),
          icon: opts.icons.fullscreen,
          render: false,
          event: this.toggleFullscreen,
          attributes: {
            'aria-label': opts.formatFullscreen(),
            title: opts.formatFullscreen()
          }
        },
        columns: {
          render: false,
          html: function html() {
            var html = [];
            html.push("<div class=\"keep-open ".concat(_this.constants.classes.buttonsDropdown, "\">\n            <button class=\"").concat(_this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(_this.constants.dataToggle, "=\"dropdown\"\n            aria-label=\"").concat(opts.formatColumns(), "\" ").concat(opts.buttonsAttributeTitle, "=\"").concat(opts.formatColumns(), "\">\n            ").concat(opts.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : '', "\n            ").concat(opts.showButtonText ? opts.formatColumns() : '', "\n            ").concat(_this.constants.html.dropdownCaret, "\n            </button>\n            ").concat(_this.constants.html.toolbarDropdown[0]));
            if (opts.showColumnsSearch) {
              html.push(Utils.sprintf(_this.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', _this.constants.classes.input, opts.formatSearch())));
              html.push(_this.constants.html.toolbarDropdownSeparator);
            }
            if (opts.showColumnsToggleAll) {
              var allFieldsVisible = _this.getVisibleColumns().length === _this.columns.filter(function (column) {
                return !_this.isSelectionColumn(column);
              }).length;
              html.push(Utils.getCheckboxHtml({
                name: 'toggle-all',
                checked: allFieldsVisible,
                label: opts.formatColumnsToggleAll(),
                extraClass: 'toggle-all',
                centered: false,
                withLabel: true
              }));
              html.push(_this.constants.html.toolbarDropdownSeparator);
            }
            var visibleColumns = 0;
            _this.columns.forEach(function (column) {
              if (column.visible) {
                visibleColumns++;
              }
            });
            _this.columns.forEach(function (column, i) {
              if (_this.isSelectionColumn(column)) {
                return;
              }
              if (opts.cardView && !column.cardVisible) {
                return;
              }
              var checked = column.visible ? ' checked="checked"' : '';
              var disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : '';
              if (column.switchable) {
                var checkboxHtml = Utils.getDropdownColumnCheckboxHtml({
                  dataField: column.field,
                  value: i,
                  checked: !!checked,
                  disabled: !!disabled,
                  label: column.switchableLabel || column.title
                });

                // Bootstrap 3/4 needs to be wrapped with toolbarDropdownItem
                if (Utils.getBootstrapVersion() === 5) {
                  html.push(checkboxHtml);
                } else {
                  html.push(Utils.sprintf(_this.constants.html.toolbarDropdownItem, checkboxHtml));
                }
                switchableCount++;
              }
            });
            html.push(_this.constants.html.toolbarDropdown[1], '</div>');
            return html.join('');
          }
        }
      });
      var buttonsHtml = {};
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.buttons); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          buttonName = _Object$entries2$_i[0],
          buttonConfig = _Object$entries2$_i[1];
        buttonsHtml[buttonName] = this.renderButton(buttonName, buttonConfig);
        var optionName = "show".concat(buttonName.charAt(0).toUpperCase()).concat(buttonName.substring(1));
        var showOption = opts[optionName];
        if ((!buttonConfig.hasOwnProperty('render') || buttonConfig.hasOwnProperty('render') && buttonConfig.render) && (showOption === undefined || showOption === true)) {
          opts[optionName] = true;
        }
        if (!opts.buttonsOrder.includes(buttonName)) {
          opts.buttonsOrder.push(buttonName);
        }
      }

      // Adding the button html to the final toolbar html when the showOption is true
      var _iterator = _createForOfIteratorHelper(opts.buttonsOrder),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var button = _step.value;
          var _showOption = opts["show".concat(button.charAt(0).toUpperCase()).concat(button.substring(1))];
          if (_showOption) {
            html.push(buttonsHtml[button]);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      html.push('</div>');

      // Fix #188: this.showToolbar is for extensions
      if (this.showToolbar || html.length > 2) {
        if (html.some(function (item) {
          return Utils.isDomNode(item);
        })) {
          // When there are DOM nodes, build the structure manually
          var template = document.createElement('template');
          template.innerHTML = html[0] + html[html.length - 1];
          var wrapper = template.content.firstChild;

          // Skip html[0] (opening div) and html[html.length-1] (closing div)
          var _iterator2 = _createForOfIteratorHelper(html.slice(1, -1)),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              var _iterator3 = _createForOfIteratorHelper(Utils.htmlToNodes(item)),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var node = _step3.value;
                  wrapper.appendChild(node);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this.$toolbar.appendChild(wrapper);
        } else {
          this.$toolbar.insertAdjacentHTML('beforeend', html.join(''));
        }
      }
      var _loop = function _loop() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          buttonName = _Object$entries3$_i[0],
          buttonConfig = _Object$entries3$_i[1];
        if (buttonConfig.hasOwnProperty('event')) {
          if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
            var event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event;
            var btn = _this.$toolbar.querySelector("button[name=\"".concat(buttonName, "\"]"));
            if (btn) btn.addEventListener('click', function () {
              return event.call(_this);
            });
            return 1; // continue
          }
          var _loop2 = function _loop2() {
            var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
              eventType = _Object$entries4$_i[0],
              eventFunction = _Object$entries4$_i[1];
            var event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction;
            var btn = _this.$toolbar.querySelector("button[name=\"".concat(buttonName, "\"]"));
            if (btn) btn.addEventListener(eventType, function () {
              return event.call(_this);
            });
          };
          for (var _i4 = 0, _Object$entries4 = Object.entries(buttonConfig.event); _i4 < _Object$entries4.length; _i4++) {
            _loop2();
          }
        }
      };
      for (var _i3 = 0, _Object$entries3 = Object.entries(this.buttons); _i3 < _Object$entries3.length; _i3++) {
        if (_loop()) continue;
      }
      if (opts.showColumns) {
        var keepOpen = this.$toolbar.querySelector('.keep-open');
        var checkboxes = keepOpen ? Array.from(keepOpen.querySelectorAll('input[type="checkbox"]:not(.toggle-all)')) : [];
        var toggleAllEl = keepOpen === null || keepOpen === void 0 ? void 0 : keepOpen.querySelector('input[type="checkbox"].toggle-all');
        if (switchableCount <= opts.minimumCountColumns) {
          keepOpen === null || keepOpen === void 0 || keepOpen.querySelectorAll('input').forEach(function (el) {
            el.disabled = true;
          });
        }
        keepOpen === null || keepOpen === void 0 || keepOpen.querySelectorAll('li, label').forEach(function (el) {
          el.addEventListener('click', function (e) {
            return e.stopImmediatePropagation();
          });
        });
        checkboxes.forEach(function (cb) {
          cb.addEventListener('click', function (_ref) {
            var currentTarget = _ref.currentTarget;
            _this._toggleColumns([currentTarget.dataset.field], currentTarget.checked, false);
            _this.trigger('column-switch', currentTarget.dataset.field, currentTarget.checked);
            if (toggleAllEl) {
              toggleAllEl.checked = checkboxes.filter(function (c) {
                return c.checked;
              }).length === _this.columns.filter(function (column) {
                return !_this.isSelectionColumn(column);
              }).length;
            }
          });
        });
        toggleAllEl === null || toggleAllEl === void 0 || toggleAllEl.addEventListener('click', function (_ref2) {
          var currentTarget = _ref2.currentTarget;
          _this._toggleAllColumns(currentTarget.checked);
          _this.trigger('column-switch-all', currentTarget.checked);
        });
        if (opts.showColumnsSearch) {
          var columnsSearchEl = keepOpen === null || keepOpen === void 0 ? void 0 : keepOpen.querySelector('[name="columnsSearch"]');
          var listItems = keepOpen ? Array.from(keepOpen.querySelectorAll('.dropdown-item-marker')) : [];
          columnsSearchEl === null || columnsSearchEl === void 0 || columnsSearchEl.addEventListener('input', function (_ref3) {
            var currentTarget = _ref3.currentTarget;
            var searchValue = currentTarget.value.toLowerCase();
            listItems.forEach(function (el) {
              el.style.removeProperty('display');
            });
            checkboxes.forEach(function (cb) {
              var listItem = cb.closest('.dropdown-item-marker');
              if (listItem && !listItem.textContent.toLowerCase().includes(searchValue)) {
                listItem.style.setProperty('display', 'none', 'important');
              }
            });
          });
        }
      }
      var handleInputEvent = function handleInputEvent(searchInput) {
        if (!searchInput) return;
        var events = searchInput.tagName === 'SELECT' ? ['change'] : ['keyup', 'drop', 'blur', 'mouseup'];
        for (var _i5 = 0, _events = events; _i5 < _events.length; _i5++) {
          var evt = _events[_i5];
          searchInput.addEventListener(evt, function (event) {
            if (opts.searchOnEnterKey && event.keyCode !== 13) {
              return;
            }
            if ([37, 38, 39, 40].includes(event.keyCode)) {
              return;
            }
            clearTimeout(timeoutId); // doesn't matter if it's 0
            timeoutId = setTimeout(function () {
              _this.onSearch({
                currentTarget: event.currentTarget
              });
            }, opts.searchTimeOut);
          });
        }
      };

      // Fix #4516: this.showSearchClearButton is for extensions
      if ((opts.search || this.showSearchClearButton) && typeof opts.searchSelector !== 'string') {
        html = [];
        var showSearchButton = Utils.sprintf(this.constants.html.searchButton, this.constants.buttonsClass, opts.formatSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '', opts.showButtonText ? opts.formatSearch() : '');
        var showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton, this.constants.buttonsClass, opts.formatClearSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '', opts.showButtonText ? opts.formatClearSearch() : '');
        var searchInputHtml = "<input class=\"".concat(this.constants.classes.input, "\n        ").concat(Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize), "\n        search-input\" type=\"search\" aria-label=\"").concat(opts.formatSearch(), "\" placeholder=\"").concat(opts.formatSearch(), "\" autocomplete=\"off\">");
        var searchInputFinalHtml = searchInputHtml;
        if (opts.showSearchButton || opts.showSearchClearButton) {
          var _buttonsHtml = (opts.showSearchButton ? showSearchButton : '') + (opts.showSearchClearButton ? showSearchClearButton : '');
          searchInputFinalHtml = opts.search ? Utils.sprintf(this.constants.html.inputGroup, searchInputHtml, _buttonsHtml) : _buttonsHtml;
        }
        html.push(Utils.sprintf("\n        <div class=\"".concat(this.constants.classes.pull, "-").concat(opts.searchAlign, " search ").concat(this.constants.classes.inputGroup, "\">\n          %s\n        </div>\n      "), searchInputFinalHtml));
        this.$toolbar.insertAdjacentHTML('beforeend', html.join(''));
        var searchInput = Utils.getSearchInput(this);
        if (opts.showSearchButton) {
          var searchBtn = this.$toolbar.querySelector('.search button[name="search"]');
          searchBtn === null || searchBtn === void 0 || searchBtn.addEventListener('click', function () {
            clearTimeout(timeoutId); // doesn't matter if it's 0
            timeoutId = setTimeout(function () {
              _this.onSearch({
                currentTarget: searchInput
              });
            }, opts.searchTimeOut);
          });
          if (opts.searchOnEnterKey) {
            handleInputEvent(searchInput);
          }
        } else {
          handleInputEvent(searchInput);
        }
        if (opts.showSearchClearButton) {
          var clearBtn = this.$toolbar.querySelector('.search button[name="clearSearch"]');
          clearBtn === null || clearBtn === void 0 || clearBtn.addEventListener('click', function () {
            return _this.resetSearch();
          });
        }
      } else if (typeof opts.searchSelector === 'string') {
        handleInputEvent(Utils.getSearchInput(this));
      }
    },
    refresh: function refresh(params) {
      if (params && params.url) {
        this.options.url = params.url;
      }
      if (params && params.pageNumber) {
        this.options.pageNumber = params.pageNumber;
      }
      if (params && params.pageSize) {
        this.options.pageSize = params.pageSize;
      }
      if (params && params.query) {
        this.options.url = Utils.addQueryToUrl(this.options.url, params.query);
      }
      this.trigger('refresh', this.initServer(params && params.silent));
    },
    toggleView: function toggleView() {
      this.options.cardView = !this.options.cardView;
      this.initHeader();
      var icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : '';
      var text = this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn();
      var btn = this.$toolbar.querySelector('button[name="toggle"]');
      if (btn) {
        btn.innerHTML = "".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(this.options.showButtonText ? text : '');
        btn.setAttribute('aria-label', text);
        btn.setAttribute(this.options.buttonsAttributeTitle, text);
      }
      this.initBody();
      this.trigger('toggle', this.options.cardView);
    },
    toggleFullscreen: function toggleFullscreen() {
      var _this$$el$closest;
      (_this$$el$closest = this.$el.closest('.bootstrap-table')) === null || _this$$el$closest === void 0 || _this$$el$closest.classList.toggle('fullscreen');
      this.resetView();
    }
  };

  var _instanceMap = new WeakMap();
  function getDataAttrs(el) {
    var data = {};
    for (var key in el.dataset) {
      var value = el.dataset[key];
      try {
        data[key] = JSON.parse(value);
      } catch (_unused) {
        data[key] = value;
      }
    }
    return data;
  }
  var BootstrapTable$1 = /*#__PURE__*/function () {
    function BootstrapTable(el, options) {
      _classCallCheck(this, BootstrapTable);
      this.options = options;
      this.$el = typeof el === 'string' ? document.querySelector(el) : el;
      this.$el_ = this.$el.cloneNode(true);
      this._timeoutId = {
        header: 0,
        footer: 0,
        resetView: 0
      };
      this._resizeHandler = null;
      this._thDataMap = new WeakMap();
    }
    return _createClass(BootstrapTable, [{
      key: "init",
      value: function init() {
        this.initConstants();
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initHiddenRows();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer();
      }
    }, {
      key: "trigger",
      value: function trigger(_name) {
        var _this$options, _this$options2;
        var name = "".concat(_name, ".bs.table");
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_this$options = this.options)[BootstrapTable.EVENTS[name]].apply(_this$options, [].concat(args, [this]));
        this.$el.dispatchEvent(new CustomEvent(name, {
          bubbles: true,
          detail: args
        }));
        (_this$options2 = this.options).onAll.apply(_this$options2, [name].concat([].concat(args, [this])));
        this.$el.dispatchEvent(new CustomEvent('all.bs.table', {
          bubbles: true,
          detail: [name, args]
        }));
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        var options = Utils.extend({}, this.options);
        delete options.data;
        return Utils.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        if (Utils.compareObjects(this.options, options, true)) {
          return;
        }
        this.optionsColumnsChanged = !!options.columns;
        this.options = Utils.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
      }
    }, {
      key: "_setDelayTimeout",
      value: function _setDelayTimeout(type, callback, delay) {
        clearTimeout(this._timeoutId[type]);
        this._timeoutId[type] = setTimeout(callback, delay);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        for (var _i = 0, _Object$keys = Object.keys(this._timeoutId); _i < _Object$keys.length; _i++) {
          var type = _Object$keys[_i];
          clearTimeout(this._timeoutId[type]);
        }
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
          this._resizeObserver = null;
        }
        if (this.$container && this.$container.parentNode) {
          this.$container.parentNode.insertBefore(this.$el, this.$container);
        }
        if (this.options.toolbar) {
          var toolbarEl = typeof this.options.toolbar === 'string' ? document.querySelector(this.options.toolbar) : this.options.toolbar;
          if (toolbarEl && this.$el.parentNode) {
            this.$el.parentNode.insertBefore(toolbarEl, this.$el);
          }
        }
        var nextSibling = this.$container && this.$container.nextElementSibling;
        if (nextSibling) {
          nextSibling.remove();
        }
        if (this.$container) {
          this.$container.remove();
        }
        this.$el.innerHTML = this.$el_.innerHTML;
        this.$el.style.marginTop = '0';
        this.$el.setAttribute('class', this.$el_.getAttribute('class') || '');
        if (this._resizeHandler) {
          window.removeEventListener('resize', this._resizeHandler);
          this._resizeHandler = null;
        }
      }
    }, {
      key: "updateFormatText",
      value: function updateFormatText(formatName, text) {
        if (!/^format/.test(formatName) || !this.options[formatName]) {
          return;
        }
        if (typeof text === 'string') {
          this.options[formatName] = function () {
            return text;
          };
        } else if (typeof text === 'function') {
          this.options[formatName] = text;
        }
        this.initToolbar();
        this.initPagination();
        this.initBody();
      }
    }]);
  }();
  Object.assign(BootstrapTable$1.prototype, InitializationModule);
  Object.assign(BootstrapTable$1.prototype, HeaderModule);
  Object.assign(BootstrapTable$1.prototype, DataModule);
  Object.assign(BootstrapTable$1.prototype, ToolbarModule);
  Object.assign(BootstrapTable$1.prototype, SearchModule);
  Object.assign(BootstrapTable$1.prototype, PaginationModule);
  Object.assign(BootstrapTable$1.prototype, BodyModule);
  Object.assign(BootstrapTable$1.prototype, CheckModule);
  Object.assign(BootstrapTable$1.prototype, DetailModule);
  BootstrapTable$1.VERSION = Constants.VERSION;
  BootstrapTable$1.DEFAULTS = Constants.DEFAULTS;
  BootstrapTable$1.LOCALES = Constants.LOCALES;
  BootstrapTable$1.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS;
  BootstrapTable$1.METHODS = Constants.METHODS;
  BootstrapTable$1.EVENTS = Constants.EVENTS;
  // Convenience aliases used by extensions and locale files
  BootstrapTable$1.defaults = BootstrapTable$1.DEFAULTS;
  BootstrapTable$1.locales = BootstrapTable$1.LOCALES;
  BootstrapTable$1.columnDefaults = BootstrapTable$1.COLUMN_DEFAULTS;
  BootstrapTable$1.events = BootstrapTable$1.EVENTS;
  BootstrapTable$1.methods = BootstrapTable$1.METHODS;
  BootstrapTable$1.utils = Utils;
  BootstrapTable$1.icons = Constants.ICONS;
  BootstrapTable$1.theme = Constants.THEME;

  // BOOTSTRAP TABLE PUBLIC API
  // =======================

  // Extensions are UMD bundles that replace window.BootstrapTable with a
  // subclass (`class extends BootstrapTable`) when their <script> tag loads.
  // That reassignment only changes the window property - it can't reach back
  // into this module's own closure-captured `BootstrapTable` binding. So the
  // dispatcher must resolve the constructor to use at call time, once all
  // extension scripts have had a chance to load, rather than capturing it
  // once up front - otherwise loaded extensions would never actually apply.
  function getConstructor() {
    return typeof window !== 'undefined' && window.BootstrapTable || BootstrapTable$1;
  }
  function initBootstrapTable(elements, option) {
    var els = typeof elements === 'string' ? Array.from(document.querySelectorAll(elements)) : Array.isArray(elements) ? elements : [elements];
    var value;
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    var _iterator = _createForOfIteratorHelper(els),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;
        var data = _instanceMap.get(el);
        if (typeof option === 'string') {
          var _data;
          if (!Constants.METHODS.includes(option)) {
            throw new Error("Unknown method: ".concat(option));
          }
          if (!data) {
            continue;
          }
          value = (_data = data)[option].apply(_data, args);
          if (option === 'destroy') {
            _instanceMap.delete(el);
          }
          continue;
        }
        if (data) {
          console.warn('You cannot initialize the table more than once!');
          continue;
        }
        var options = Utils.extend(true, {}, BootstrapTable$1.DEFAULTS, getDataAttrs(el), _typeof(option) === 'object' && option);
        data = new (getConstructor())(el, options);
        _instanceMap.set(el, data);
        data.init();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return typeof value === 'undefined' ? els.length === 1 ? els[0] : els : value;
  }
  function getInstance(el) {
    return _instanceMap.get(typeof el === 'string' ? document.querySelector(el) : el);
  }
  BootstrapTable$1.init = initBootstrapTable;
  BootstrapTable$1.getInstance = getInstance;

  // BOOTSTRAP TABLE INIT
  // =======================

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-toggle="table"]').forEach(function (el) {
      initBootstrapTable(el);
    });
  });

  return BootstrapTable$1;

}));
