'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Nerv = require('nervjs');
var Nerv__default = _interopDefault(Nerv);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var i = 0; i < descs.length; i++) {
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
    }

    return obj;
  };
}

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */


function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof qa !== 'undefined' && qa.getSystemInfo) {
    _env = ENV_TYPE.QUICKAPP;
    return ENV_TYPE.QUICKAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this, args);

        _this.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

var RefsArray =
/*#__PURE__*/
function (_Array) {
  _inherits(RefsArray, _Array);

  /**
   * @param {Array} initList
   */
  function RefsArray() {
    var _getPrototypeOf2;

    var _this;

    var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, RefsArray);

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefsArray)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(initList))));
    _this.inited = false;
    return _this;
  }

  _createClass(RefsArray, [{
    key: "pushRefs",
    value: function pushRefs($$refs) {
      var _this2 = this;

      if (this.inited) return;
      $$refs.forEach(function (ref) {
        return _this2.pushRef(ref);
      });
      this.inited = true;
    }
  }, {
    key: "pushRef",
    value: function pushRef(ref) {
      var isExist = this.find(function (item) {
        return item.id === ref.id;
      });
      !isExist && this.push(ref);
    }
  }]);

  return RefsArray;
}(_wrapNativeSuper(Array));

var Chain =
/*#__PURE__*/
function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link =
/*#__PURE__*/
function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url;
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

var defer = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

var Current;

if (process.env.TARO_ENV === 'alipay') {
  if (!my.Current) {
    my.Current = {
      current: null,
      index: 0
    };
  }

  Current = my.Current;
} else {
  Current = {
    current: null,
    index: 0
  };
}

/* eslint-disable camelcase */


if (process.env.TARO_ENV === 'alipay') {
  if (!my.taroEventCenter) {
    my.taroEventCenter = new Events();
  }

  exports.eventCenter = my.taroEventCenter;
} else {
  exports.eventCenter = new Events();
}

function shouleBeObject(target) {
  if (target && _typeof(target) === 'object') return {
    res: true
  };
  return {
    res: false,
    msg: getParameterError({
      correct: 'Object',
      wrong: target
    })
  };
}

function getParameterError(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      para = _ref.para,
      correct = _ref.correct,
      wrong = _ref.wrong;
  var parameter = para ? "parameter.".concat(para) : 'parameter';
  var errorType = upperCaseFirstLetter(wrong === null ? 'Null' : _typeof(wrong));
  return "".concat(name, ":fail parameter error: ").concat(parameter, " should be ").concat(correct, " instead of ").concat(errorType);
}

function upperCaseFirstLetter(string) {
  if (typeof string !== 'string') return string;
  string = string.replace(/^./, function (match) {
    return match.toUpperCase();
  });
  return string;
}

function inlineStyle(style) {
  var res = '';

  for (var attr in style) {
    res += "".concat(attr, ": ").concat(style[attr], ";");
  }

  if (res.indexOf('display: flex;') >= 0) res += 'display: -webkit-box;display: -webkit-flex;';
  res = res.replace(/transform:(.+?);/g, function (s, $1) {
    return "".concat(s, "-webkit-transform:").concat($1, ";");
  });
  res = res.replace(/flex-direction:(.+?);/g, function (s, $1) {
    return "".concat(s, "-webkit-flex-direction:").concat($1, ";");
  });
  return res;
}

function setTransform(el, val) {
  el.style.transform = val;
  el.style.OTransform = val;
  el.style.msTransform = val;
  el.style.MozTransform = val;
  el.style.WebkitTransform = val;
}

function isFunction$1(obj) {
  return typeof obj === 'function';
}

function successHandler(success, complete) {
  return function (res) {
    isFunction$1(success) && success(res);
    isFunction$1(complete) && complete(res);
    return Promise.resolve(res);
  };
}

function errorHandler(fail, complete) {
  return function (res) {
    isFunction$1(fail) && fail(res);
    isFunction$1(complete) && complete(res);
    return Promise.reject(res);
  };
}

function serializeParams(params) {
  if (!params) {
    return '';
  }

  return Object.keys(params).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(_typeof(params[key]) === 'object' ? encodeURIComponent(JSON.stringify(params[key])) : encodeURIComponent(params[key]));
  }).join('&');
}

function temporarilyNotSupport(apiName) {
  return function () {
    var errMsg = "\u6682\u65F6\u4E0D\u652F\u6301 API ".concat(apiName);
    console.error(errMsg);
    return Promise.reject({
      errMsg: errMsg
    });
  };
}

function weixinCorpSupport(apiName) {
  return function () {
    var errMsg = "h5\u7AEF\u4EC5\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7\u4E2D\u652F\u6301 API ".concat(apiName);
    console.error(errMsg);
    return Promise.reject({
      errMsg: errMsg
    });
  };
}

function permanentlyNotSupport(apiName) {
  return function () {
    var errMsg = "\u4E0D\u652F\u6301 API ".concat(apiName);
    console.error(errMsg);
    return Promise.reject({
      errMsg: errMsg
    });
  };
}

var VALID_COLOR_REG = /^#[0-9a-fA-F]{6}$/;

var isValidColor = function isValidColor(color) {
  return VALID_COLOR_REG.test(color);
};

var createCallbackManager = function createCallbackManager() {
  var callbacks = [];
  /**
   * 添加回调
   * @param {{ callback: function, ctx: any } | function} opt
   */

  var add = function add(opt) {
    callbacks.push(opt);
  };
  /**
   * 移除回调
   * @param {{ callback: function, ctx: any } | function} opt
   */


  var remove = function remove(opt) {
    var pos = -1;
    callbacks.forEach(function (callback, k) {
      if (callback === opt) {
        pos = k;
      }
    });

    if (pos > -1) {
      callbacks.splice(pos, 1);
    }
  };
  /**
   * 获取回调函数数量
   * @return {number}
   */


  var count = function count() {
    return callbacks.length;
  };
  /**
   * 触发回调
   * @param  {...any} args 回调的调用参数
   */


  var trigger = function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callbacks.forEach(function (opt) {
      if (typeof opt === 'function') {
        opt.apply(void 0, args);
      } else {
        var callback = opt.callback,
            ctx = opt.ctx;
        callback.call.apply(callback, [ctx].concat(args));
      }
    });
  };

  return {
    add: add,
    remove: remove,
    count: count,
    trigger: trigger
  };
};

var createScroller = function createScroller() {
  var el = document.querySelector('.taro-tabbar__panel') || window;
  var getScrollHeight = el === window ? function () {
    return document.documentElement.scrollHeight;
  } : function () {
    return el.scrollHeight;
  };
  var getPos = el === window ? function () {
    return window.pageYOffset;
  } : function () {
    return el.scrollTop;
  };
  var getClientHeight = el === window ? function () {
    return window.screen.height;
  } : function () {
    return el.clientHeight;
  };

  var listen = function listen(callback) {
    el.addEventListener('scroll', callback);
    document.body.addEventListener('touchmove', callback);
  };

  var unlisten = function unlisten(callback) {
    el.removeEventListener('scroll', callback);
    document.body.removeEventListener('touchmove', callback);
  };

  var isReachBottom = function isReachBottom() {
    var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return getScrollHeight() - getPos() - getClientHeight() < distance;
  };

  return {
    listen: listen,
    unlisten: unlisten,
    getPos: getPos,
    isReachBottom: isReachBottom
  };
};

function processOpenapi(apiName, defaultOptions) {
  var formatResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (res) {
    return res;
  };
  var formatParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (options) {
    return options;
  };

  if (!window.wx) {
    return weixinCorpSupport(apiName);
  }

  return function (options) {
    options = options || {};
    var obj = Object.assign({}, defaultOptions, options);
    var p = new Promise(function (resolve, reject) {
      ['fail', 'success', 'complete'].forEach(function (k) {
        obj[k] = function (oriRes) {
          var res = formatResult(oriRes);
          options[k] && options[k](res);

          if (k === 'success') {
            resolve(res);
          } else if (k === 'fail') {
            reject(res);
          }
        };
      });
      wx[apiName](formatParams(obj));
    });
    return p;
  };
}

var findRef = function findRef(refId, componentInstance) {
  if (componentInstance.isRoute) return;
  return componentInstance[refId] || findRef(refId, componentInstance.vnode._owner);
};
/**
 * ease-in-out的函数
 * @param {number} t 0-1的数字
 */


var easeInOut = function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

var getTimingFunc = function getTimingFunc(easeFunc, frameCnt) {
  return function (x) {
    var t = x / (frameCnt - 1);
    return easeFunc(t);
  };
};
/**
 * use closure function to store document.body.style in memory when loaded
 */


var bodyStatusClosure = function () {
  var hasCalculated;
  var bodyStyle; // use object copy to prevent document.body style read issue

  var bodyCopy = Object.assign({}, document.body.style);

  if (!hasCalculated) {
    bodyStyle = bodyCopy;
  }

  hasCalculated = true;
  return {
    getInlineStyle: function getInlineStyle() {
      return bodyStyle && bodyStyle.cssText;
    },
    hasCalculated: hasCalculated
  };
}();
/**
 * get scrollTop and compact for all possible browser
 *
 * @returns scrollTop
 */


function getScrollTop() {
  if (document.scrollingElement) {
    return document.scrollingElement.scrollTop;
  } else {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
/**
 * compact for scrollTop
 *
 * for more info @see: https://www.zhangxinxu.com/wordpress/2019/02/document-scrollingelement/
 * @param scrollTop scrollTop which needs to be reset
 */


function setScrollTop(scrollTop) {
  if (document.scrollingElement) {
    document.scrollingElement.scrollTop = scrollTop;
  } else {
    document.documentElement.scrollTop = scrollTop;
    document.body.scrollTop = scrollTop;
  }
}

var scrollTop = 0;
/**
 * interactive helper to provide position fixed when modal/toast/actionSheet open.
 * And reset body style as default when close.
 */

var interactiveHelper = function interactiveHelper() {
  return {
    handleAfterCreate: function handleAfterCreate() {
      scrollTop = getScrollTop();
      var bodyFixStyle = {
        'position': 'fixed',
        'width': '100%',
        'overflow': 'hidden',
        'top': "".concat(-scrollTop, "px")
      };
      document.body.setAttribute('style', inlineStyle(bodyFixStyle));
    },
    handleBeforeDestroy: function handleBeforeDestroy() {
      var bodyInlineStyle = bodyStatusClosure.getInlineStyle() || {};
      document.body.style = bodyInlineStyle;
      setScrollTop(scrollTop);
    }
  };
};

var onPageScroll = function onPageScroll(opt) {
  var callbackManager = createCallbackManager();
  var scroller = createScroller(opt.ctx);
  var lastPos = 0;

  var onScroll = function onScroll() {
    var newPos = scroller.getPos();
    if (newPos === lastPos) return;
    lastPos = newPos;
    callbackManager.trigger({
      scrollTop: newPos
    });
  };

  callbackManager.add(opt);
  scroller.listen(onScroll);
  return function () {
    callbackManager.remove(opt);

    if (callbackManager.count() === 0) {
      scroller.unlisten(onScroll);
    }
  };
};

/**
 * @typedef {Object} ReachBottomParam
 * @property {Function} callback
 * @property {*} ctx
 * @property {Number|undefined} onReachBottomDistance
 */

/**
 * @param {ReachBottomParam} opt 
 */

var onReachBottom = function onReachBottom(opt) {
  var callbackManager = createCallbackManager();
  var scroller = createScroller(opt.ctx);
  var distance = typeof opt.onReachBottomDistance === 'number' ? opt.onReachBottomDistance : 50;
  var canTrigger = true;

  var onScroll = function onScroll() {
    if (scroller.isReachBottom(distance)) {
      canTrigger && callbackManager.trigger();
      canTrigger = false;
    } else {
      canTrigger = true;
    }
  };

  callbackManager.add(opt);
  scroller.listen(onScroll);
  return function () {
    callbackManager.remove(opt);

    if (callbackManager.count() === 0) {
      scroller.unlisten(onScroll);
    }
  };
};

var taro = {
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Events: Events,
  eventCenter: exports.eventCenter,
  render: render,
  internal_safe_set: set,
  internal_safe_get: get,
  Children: Nerv.Children,
  createElement: Nerv.createElement,
  cloneElement: Nerv.cloneElement,
  nextTick: Nerv.nextTick,
  options: Nerv.options,
  findDOMNode: Nerv.findDOMNode,
  isValidElement: Nerv.isValidElement,
  unmountComponentAtNode: Nerv.unmountComponentAtNode,
  createPortal: Nerv.createPortal,

  /* eslint-disable-next-line camelcase */
  unstable_renderSubtreeIntoContainer: Nerv.unstable_renderSubtreeIntoContainer,
  hydrate: Nerv.hydrate,
  createFactory: Nerv.createFactory,

  /* eslint-disable-next-line camelcase */
  unstable_batchedUpdates: Nerv.unstable_batchedUpdates,
  version: Nerv.version,
  PropTypes: Nerv.PropTypes,
  createRef: Nerv.createRef,
  forwardRef: Nerv.forwardRef,
  memo: Nerv.memo,
  createContext: Nerv.createContext,
  useEffect: Nerv.useEffect,
  useLayoutEffect: Nerv.useLayoutEffect,
  useReducer: Nerv.useReducer,
  useState: Nerv.useState,
  useRef: Nerv.useRef,
  useCallback: Nerv.useCallback,
  useMemo: Nerv.useMemo,
  useImperativeHandle: Nerv.useImperativeHandle,
  useContext: Nerv.useContext
};

var Component =
/*#__PURE__*/
function (_Nerv$Component) {
  _inherits(Component, _Nerv$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "$router",
    get: function get() {
      return getRouter();
    },
    set: function set(args) {
      console.warn('Property "$router" is read-only.');
    }
  }, {
    key: "$app",
    get: function get() {
      return taro.getApp();
    },
    set: function set(app) {
      console.warn('Property "$app" is read-only.');
    }
  }, {
    key: "$component",
    get: function get() {
      return this;
    },
    set: function set(app) {
      console.warn('Property "$component" is read-only.');
    }
  }]);

  return Component;
}(Nerv__default.Component);

var PureComponent =
/*#__PURE__*/
function (_Nerv$PureComponent) {
  _inherits(PureComponent, _Nerv$PureComponent);

  function PureComponent() {
    _classCallCheck(this, PureComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PureComponent).apply(this, arguments));
  }

  _createClass(PureComponent, [{
    key: "$router",
    get: function get() {
      return getRouter();
    },
    set: function set(args) {
      console.warn('Property "$router" is read-only.');
    }
  }, {
    key: "$app",
    get: function get() {
      return taro.getApp();
    },
    set: function set(app) {
      console.warn('Property "$app" is read-only.');
    }
  }, {
    key: "$component",
    get: function get() {
      return this;
    },
    set: function set(app) {
      console.warn('Property "$component" is read-only.');
    }
  }]);

  return PureComponent;
}(Nerv__default.PureComponent);

var initPxTransform$1 = initPxTransform.bind(taro);
var requirePlugin = permanentlyNotSupport('requirePlugin');

var getApp = function getApp() {
  return taro._$app;
};
/**
 * RouterParams
 *
 * @typedef {Object} RouterParams
 * @property {string} path 小程序切前台的路径
 * @property {number} scene 小程序切前台的场景值
 * @property {Object} query 小程序切前台的 query 参数
 * @property {string} shareTicket shareTicket，详见获取更多转发信息
 * @property {Object} referrerInfo 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。(参见后文注意)
 */

/**
 * getRouter
 *
 * @returns {RouterParams} router router参数
 */


var getRouter = function getRouter() {
  var _taro$_$router = taro._$router,
      path = _taro$_$router.path,
      params = _taro$_$router.params;
  return {
    path: path,
    scene: 1000,
    params: params,
    shareTicket: '',
    referrerInfo: {}
  };
};

var pxTransform = function pxTransform(size) {
  var designWidth = taro.config.designWidth;
  return Math.ceil(parseInt(size, 10) / 40 * 640 / designWidth * 10000) / 10000 + 'rem';
};

var canIUseWebp = function canIUseWebp() {
  var canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

function usePageLifecycle(callback, lifecycle) {
  var hook = Nerv.getHooks(Nerv.Current.index++);
  var originalLifecycle;
  hook.component = Nerv.Current.current;

  if (!hook.marked) {
    hook.marked = true;
    originalLifecycle = hook.component[lifecycle];
  }

  hook.component[lifecycle] = function () {
    var _originalLifecycle;

    originalLifecycle && (_originalLifecycle = originalLifecycle).call.apply(_originalLifecycle, [hook.component].concat(Array.prototype.slice.call(arguments)));
    callback && callback.call.apply(callback, [hook.component].concat(Array.prototype.slice.call(arguments)));
  };
}

function useSpecialPageLifecycle(_callback, lifecycle, lifeFn) {
  var hook = Nerv.getHooks(Nerv.Current.index++);
  var originalLifecycle;
  hook.component = Nerv.Current.current;

  if (!hook.marked) {
    hook.marked = true;
    originalLifecycle = hook.component[lifecycle];
    var originalDidShow = hook.component['componentDidShow'];
    var originalDidHide = hook.component['componentDidHide'];

    hook.component['componentDidShow'] = function () {
      originalDidShow && originalDidShow.call.apply(originalDidShow, [hook.component].concat(Array.prototype.slice.call(arguments)));
      hook.component._offFn = lifeFn({
        callback: function callback() {
          var _originalLifecycle2;

          originalLifecycle && (_originalLifecycle2 = originalLifecycle).call.apply(_originalLifecycle2, [hook.component].concat(Array.prototype.slice.call(arguments)));
          _callback && _callback.call.apply(_callback, [hook.component].concat(Array.prototype.slice.call(arguments)));
        },
        ctx: hook.component
      });
    };

    hook.component['componentDidHide'] = function () {
      originalDidHide && originalDidHide.call.apply(originalDidHide, [hook.component].concat(Array.prototype.slice.call(arguments)));
      hook.component._offFn && hook.component._offFn();
    };
  } else {
    hook.component._offFn && hook.component._offFn();
    hook.component._offFn = lifeFn({
      callback: function callback() {
        var _originalLifecycle3;

        originalLifecycle && (_originalLifecycle3 = originalLifecycle).call.apply(_originalLifecycle3, [hook.component].concat(Array.prototype.slice.call(arguments)));
        _callback && _callback.call.apply(_callback, [hook.component].concat(Array.prototype.slice.call(arguments)));
      },
      ctx: hook.component
    });
  }
}

function useDidShow(callback) {
  usePageLifecycle(callback, 'componentDidShow');
}

function useDidHide(callback) {
  usePageLifecycle(callback, 'componentDidHide');
}

function usePullDownRefresh(callback) {
  usePageLifecycle(callback, 'onPullDownRefresh');
}

function useReachBottom(callback) {
  useSpecialPageLifecycle(callback, 'onReachBottom', onReachBottom);
}

function usePageScroll(callback) {
  useSpecialPageLifecycle(callback, 'onPageScroll', onPageScroll);
}

function useRouter() {
  var hook = Nerv.getHooks(Nerv.Current.index++);

  if (!hook.router) {
    hook.component = Nerv.Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}

taro.Component = Component;
taro.PureComponent = PureComponent;
taro.initPxTransform = initPxTransform$1;
taro.requirePlugin = requirePlugin;
taro.getApp = getApp;
taro.pxTransform = pxTransform;
taro.canIUseWebp = canIUseWebp;
taro.interceptors = interceptors;
taro.useDidShow = useDidShow;
taro.useDidHide = useDidHide;
taro.usePullDownRefresh = usePullDownRefresh;
taro.useReachBottom = useReachBottom;
taro.usePageScroll = usePageScroll;
taro.useRouter = useRouter;

// export const onSocketOpen = temporarilyNotSupport('onSocketOpen')
// export const onSocketError = temporarilyNotSupport('onSocketError')
// export const onSocketMessage = temporarilyNotSupport('onSocketMessage')
// export const onSocketClose = temporarilyNotSupport('onSocketClose')

var onBackgroundAudioPlay = temporarilyNotSupport('onBackgroundAudioPlay');
var onBackgroundAudioPause = temporarilyNotSupport('onBackgroundAudioPause');
var onBackgroundAudioStop = temporarilyNotSupport('onBackgroundAudioStop'); // export const onNetworkStatusChange = temporarilyNotSupport('onNetworkStatusChange')
// export const onAccelerometerChange = temporarilyNotSupport('onAccelerometerChange')
// export const onCompassChange = temporarilyNotSupport('onCompassChange')
// export const onDeviceMotionChange = temporarilyNotSupport('onDeviceMotionChange')

var onBluetoothAdapterStateChange = temporarilyNotSupport('onBluetoothAdapterStateChange');
var onBluetoothDeviceFound = temporarilyNotSupport('onBluetoothDeviceFound');
var onBLEConnectionStateChange = temporarilyNotSupport('onBLEConnectionStateChange');
var onBLECharacteristicValueChange = temporarilyNotSupport('onBLECharacteristicValueChange');
var onBeaconUpdate = temporarilyNotSupport('onBeaconUpdate');
var onBeaconServiceChange = temporarilyNotSupport('onBeaconServiceChange');
var onUserCaptureScreen = temporarilyNotSupport('onUserCaptureScreen');
var onHCEMessage = temporarilyNotSupport('onHCEMessage');
var onGetWifiList = temporarilyNotSupport('onGetWifiList');
var onWifiConnected = temporarilyNotSupport('onWifiConnected');
var offWifiConnected = temporarilyNotSupport('offWifiConnected');
var offGetWifiList = temporarilyNotSupport('offGetWifiList'); // export const setStorageSync = temporarilyNotSupport('setStorageSync')
// export const getStorageSync = temporarilyNotSupport('getStorageSync')
// export const getStorageInfoSync = temporarilyNotSupport('getStorageInfoSync')
// export const removeStorageSync = temporarilyNotSupport('removeStorageSync')
// export const clearStorageSync = temporarilyNotSupport('clearStorageSync')
// export const getSystemInfoSync = temporarilyNotSupport('getSystemInfoSync')

var getExtConfigSync = temporarilyNotSupport('getExtConfigSync');
var getLogManager = temporarilyNotSupport('getLogManager');
var onMemoryWarning = temporarilyNotSupport('onMemoryWarning');
var reportAnalytics = temporarilyNotSupport('reportAnalytics');
var navigateToSmartGameProgram = temporarilyNotSupport('navigateToSmartGameProgram'); // 文件

var getFileSystemManager = temporarilyNotSupport('getFileSystemManager'); // noPromiseApis
// 媒体

var stopRecord = temporarilyNotSupport('stopRecord');
var getRecorderManager = temporarilyNotSupport('getRecorderManager');
var pauseVoice = temporarilyNotSupport('pauseVoice');
var stopVoice = temporarilyNotSupport('stopVoice');
var pauseBackgroundAudio = temporarilyNotSupport('pauseBackgroundAudio');
var stopBackgroundAudio = temporarilyNotSupport('stopBackgroundAudio');
var getBackgroundAudioManager = temporarilyNotSupport('getBackgroundAudioManager');
var createAudioContext = temporarilyNotSupport('createAudioContext'); // export const createInnerAudioContext = temporarilyNotSupport('createInnerAudioContext')
// export const createVideoContext = temporarilyNotSupport('createVideoContext')

var createCameraContext = temporarilyNotSupport('createCameraContext');
var createLivePlayerContext = temporarilyNotSupport('createLivePlayerContext');
var createLivePusherContext = temporarilyNotSupport('createLivePusherContext'); // 位置

var createMapContext = temporarilyNotSupport('createMapContext'); // 设备

var canIUse = temporarilyNotSupport('canIUse'); // export const startAccelerometer = temporarilyNotSupport('startAccelerometer')
// export const stopAccelerometer = temporarilyNotSupport('stopAccelerometer')
// export const startCompass = temporarilyNotSupport('startCompass')
// export const stopCompass = temporarilyNotSupport('stopCompass')
// export const startDeviceMotionListening = temporarilyNotSupport('startDeviceMotionListening')
// export const stopDeviceMotionListening = temporarilyNotSupport('stopDeviceMotionListening')
// 界面
// export const hideToast = temporarilyNotSupport('hideToast')
// export const hideLoading = temporarilyNotSupport('hideLoading')

var showNavigationBarLoading = temporarilyNotSupport('showNavigationBarLoading');
var hideNavigationBarLoading = temporarilyNotSupport('hideNavigationBarLoading'); // export const createAnimation = temporarilyNotSupport('createAnimation')
// export const pageScrollTo = temporarilyNotSupport('pageScrollTo')
// export const createSelectorQuery = temporarilyNotSupport('createSelectorQuery')
// export const createCanvasContext = temporarilyNotSupport('createCanvasContext')
// export const createContext = temporarilyNotSupport('createContext')

var drawCanvas = temporarilyNotSupport('drawCanvas');
var hideKeyboard = temporarilyNotSupport('hideKeyboard'); // export const stopPullDownRefresh = temporarilyNotSupport('stopPullDownRefresh')

var createIntersectionObserver = temporarilyNotSupport('createIntersectionObserver'); // 自定义组件
// export const nextTick = temporarilyNotSupport('nextTick')
// 菜单

var getMenuButtonBoundingClientRect = temporarilyNotSupport('getMenuButtonBoundingClientRect'); // 窗口
// export const onWindowResize = temporarilyNotSupport('onWindowResize')
// export const offWindowResize = temporarilyNotSupport('offWindowResize')
// 拓展接口
// export const arrayBufferToBase64 = temporarilyNotSupport('arrayBufferToBase64')
// export const base64ToArrayBuffer = temporarilyNotSupport('base64ToArrayBuffer')

var getAccountInfoSync = temporarilyNotSupport('getAccountInfoSync');
var getUpdateManager = temporarilyNotSupport('getUpdateManager');
var createWorker = temporarilyNotSupport('createWorker'); // otherApis
// 网络
// export const uploadFile = temporarilyNotSupport('uploadFile')
// export const downloadFile = temporarilyNotSupport('downloadFile')
// export const connectSocket = temporarilyNotSupport('connectSocket')
// export const sendSocketMessage = temporarilyNotSupport('sendSocketMessage')
// export const closeSocket = temporarilyNotSupport('closeSocket')
// 媒体
// export const chooseImage = temporarilyNotSupport('chooseImage')
// export const previewImage = temporarilyNotSupport('previewImage')
// export const getImageInfo = temporarilyNotSupport('getImageInfo')

var saveImageToPhotosAlbum = temporarilyNotSupport('saveImageToPhotosAlbum');
var startRecord = temporarilyNotSupport('startRecord');
var playVoice = temporarilyNotSupport('playVoice');
var setInnerAudioOption = temporarilyNotSupport('setInnerAudioOption');
var getAvailableAudioSources = temporarilyNotSupport('getAvailableAudioSources');
var getBackgroundAudioPlayerState = temporarilyNotSupport('getBackgroundAudioPlayerState');
var playBackgroundAudio = temporarilyNotSupport('playBackgroundAudio');
var seekBackgroundAudio = temporarilyNotSupport('seekBackgroundAudio'); // export const chooseVideo = temporarilyNotSupport('chooseVideo')

var saveVideoToPhotosAlbum = temporarilyNotSupport('saveVideoToPhotosAlbum');
var loadFontFace = temporarilyNotSupport('loadFontFace'); // 文件

var saveFile = temporarilyNotSupport('saveFile');
var getFileInfo = temporarilyNotSupport('getFileInfo');
var getSavedFileList = temporarilyNotSupport('getSavedFileList');
var getSavedFileInfo = temporarilyNotSupport('getSavedFileInfo');
var removeSavedFile = temporarilyNotSupport('removeSavedFile');
var openDocument = temporarilyNotSupport('openDocument'); // 数据缓存
// export const setStorage = temporarilyNotSupport('setStorage')
// export const getStorage = temporarilyNotSupport('getStorage')
// export const getStorageInfo = temporarilyNotSupport('getStorageInfo')
// export const removeStorage = temporarilyNotSupport('removeStorage')
// export const clearStorage = temporarilyNotSupport('clearStorage')
// 导航
// export const navigateBack = temporarilyNotSupport('navigateBack')
// export const navigateTo = temporarilyNotSupport('navigateTo')
// export const redirectTo = temporarilyNotSupport('redirectTo')
// export const switchTab = temporarilyNotSupport('switchTab')
// export const reLaunch = temporarilyNotSupport('reLaunch')
// 位置
// export const getLocation = temporarilyNotSupport('getLocation')
// export const chooseLocation = temporarilyNotSupport('chooseLocation')
// export const openLocation = temporarilyNotSupport('openLocation')
// 设备
// export const getSystemInfo = temporarilyNotSupport('getSystemInfo')
// export const getNetworkType = temporarilyNotSupport('getNetworkType')
// export const makePhoneCall = temporarilyNotSupport('makePhoneCall')
// export const scanCode = temporarilyNotSupport('scanCode')
// export const setClipboardData = temporarilyNotSupport('setClipboardData')
// export const getClipboardData = temporarilyNotSupport('getClipboardData')

var openBluetoothAdapter = temporarilyNotSupport('openBluetoothAdapter');
var closeBluetoothAdapter = temporarilyNotSupport('closeBluetoothAdapter');
var getBluetoothAdapterState = temporarilyNotSupport('getBluetoothAdapterState');
var startBluetoothDevicesDiscovery = temporarilyNotSupport('startBluetoothDevicesDiscovery');
var stopBluetoothDevicesDiscovery = temporarilyNotSupport('stopBluetoothDevicesDiscovery');
var getBluetoothDevices = temporarilyNotSupport('getBluetoothDevices');
var getConnectedBluetoothDevices = temporarilyNotSupport('getConnectedBluetoothDevices');
var createBLEConnection = temporarilyNotSupport('createBLEConnection');
var closeBLEConnection = temporarilyNotSupport('closeBLEConnection');
var getBLEDeviceServices = temporarilyNotSupport('getBLEDeviceServices');
var getBLEDeviceCharacteristics = temporarilyNotSupport('getBLEDeviceCharacteristics');
var readBLECharacteristicValue = temporarilyNotSupport('readBLECharacteristicValue');
var writeBLECharacteristicValue = temporarilyNotSupport('writeBLECharacteristicValue');
var notifyBLECharacteristicValueChange = temporarilyNotSupport('notifyBLECharacteristicValueChange');
var startBeaconDiscovery = temporarilyNotSupport('startBeaconDiscovery');
var stopBeaconDiscovery = temporarilyNotSupport('stopBeaconDiscovery');
var getBeacons = temporarilyNotSupport('getBeacons');
var setScreenBrightness = temporarilyNotSupport('setScreenBrightness');
var getScreenBrightness = temporarilyNotSupport('getScreenBrightness');
var setKeepScreenOn = temporarilyNotSupport('setKeepScreenOn'); // export const vibrateLong = temporarilyNotSupport('vibrateLong')
// export const vibrateShort = temporarilyNotSupport('vibrateShort')

var addPhoneContact = temporarilyNotSupport('addPhoneContact');
var getHCEState = temporarilyNotSupport('getHCEState');
var startHCE = temporarilyNotSupport('startHCE');
var stopHCE = temporarilyNotSupport('stopHCE');
var sendHCEMessage = temporarilyNotSupport('sendHCEMessage');
var startWifi = temporarilyNotSupport('startWifi');
var stopWifi = temporarilyNotSupport('stopWifi');
var connectWifi = temporarilyNotSupport('connectWifi');
var getWifiList = temporarilyNotSupport('getWifiList');
var setWifiList = temporarilyNotSupport('setWifiList');
var getConnectedWifi = temporarilyNotSupport('getConnectedWifi'); // 界面
// export const showToast = temporarilyNotSupport('showToast')
// export const showLoading = temporarilyNotSupport('showLoading')
// export const showModal = temporarilyNotSupport('showModal')
// export const showActionSheet = temporarilyNotSupport('showActionSheet')
// export const setNavigationBarTitle = temporarilyNotSupport('setNavigationBarTitle')
// export const setNavigationBarColor = temporarilyNotSupport('setNavigationBarColor')
// export const setTabBarBadge = temporarilyNotSupport('setTabBarBadge')
// export const removeTabBarBadge = temporarilyNotSupport('removeTabBarBadge')
// export const showTabBarRedDot = temporarilyNotSupport('showTabBarRedDot')
// export const hideTabBarRedDot = temporarilyNotSupport('hideTabBarRedDot')
// export const setTabBarStyle = temporarilyNotSupport('setTabBarStyle')
// export const setTabBarItem = temporarilyNotSupport('setTabBarItem')
// export const showTabBar = temporarilyNotSupport('showTabBar')
// export const hideTabBar = temporarilyNotSupport('hideTabBar')

var setTopBarText = temporarilyNotSupport('setTopBarText'); // export const startPullDownRefresh = temporarilyNotSupport('startPullDownRefresh')
// export const canvasToTempFilePath = temporarilyNotSupport('canvasToTempFilePath')
// export const canvasGetImageData = temporarilyNotSupport('canvasGetImageData')
// export const canvasPutImageData = temporarilyNotSupport('canvasPutImageData')

var setBackgroundColor = temporarilyNotSupport('setBackgroundColor');
var setBackgroundTextStyle = temporarilyNotSupport('setBackgroundTextStyle'); // 第三方平台

var getExtConfig = temporarilyNotSupport('getExtConfig'); // 开放接口

var login = temporarilyNotSupport('login');
var checkSession = temporarilyNotSupport('checkSession');
var authorize = temporarilyNotSupport('authorize');
var getUserInfo = temporarilyNotSupport('getUserInfo');
var checkIsSupportFacialRecognition = temporarilyNotSupport('checkIsSupportFacialRecognition');
var startFacialRecognitionVerify = temporarilyNotSupport('startFacialRecognitionVerify');
var startFacialRecognitionVerifyAndUploadVideo = temporarilyNotSupport('startFacialRecognitionVerifyAndUploadVideo');
var faceVerifyForPay = temporarilyNotSupport('faceVerifyForPay'); // export const requestPayment = temporarilyNotSupport('requestPayment')

var showShareMenu = temporarilyNotSupport('showShareMenu');
var hideShareMenu = temporarilyNotSupport('hideShareMenu');
var updateShareMenu = temporarilyNotSupport('updateShareMenu');
var getShareInfo = temporarilyNotSupport('getShareInfo');
var chooseAddress = temporarilyNotSupport('chooseAddress');
var addCard = temporarilyNotSupport('addCard');
var openCard = temporarilyNotSupport('openCard');
var openSetting = temporarilyNotSupport('openSetting');
var getSetting = temporarilyNotSupport('getSetting');
var getWeRunData = temporarilyNotSupport('getWeRunData');
var navigateToMiniProgram = temporarilyNotSupport('navigateToMiniProgram');
var navigateBackMiniProgram = temporarilyNotSupport('navigateBackMiniProgram');
var chooseInvoice = temporarilyNotSupport('chooseInvoice');
var chooseInvoiceTitle = temporarilyNotSupport('chooseInvoiceTitle');
var checkIsSupportSoterAuthentication = temporarilyNotSupport('checkIsSupportSoterAuthentication');
var startSoterAuthentication = temporarilyNotSupport('startSoterAuthentication');
var checkIsSoterEnrolledInDevice = temporarilyNotSupport('checkIsSoterEnrolledInDevice');
var setEnableDebug = temporarilyNotSupport('setEnableDebug'); // 百度小程序专有 API
// 百度小程序 AI 相关

var ocrIdCard = temporarilyNotSupport('ocrIdCard');
var ocrBankCard = temporarilyNotSupport('ocrBankCard');
var ocrDrivingLicense = temporarilyNotSupport('ocrDrivingLicense');
var ocrVehicleLicense = temporarilyNotSupport('ocrVehicleLicense');
var textReview = temporarilyNotSupport('textReview');
var textToAudio = temporarilyNotSupport('textToAudio');
var imageAudit = temporarilyNotSupport('imageAudit');
var advancedGeneralIdentify = temporarilyNotSupport('advancedGeneralIdentify');
var objectDetectIdentify = temporarilyNotSupport('objectDetectIdentify');
var carClassify = temporarilyNotSupport('carClassify');
var dishClassify = temporarilyNotSupport('dishClassify');
var logoClassify = temporarilyNotSupport('logoClassify');
var animalClassify = temporarilyNotSupport('animalClassify');
var plantClassify = temporarilyNotSupport('plantClassify'); // 用户信息

var getSwanId = temporarilyNotSupport('getSwanId'); // 百度收银台支付

var requestPolymerPayment = temporarilyNotSupport('requestPolymerPayment'); // 打开小程序

var navigateToSmartProgram = temporarilyNotSupport('navigateToSmartProgram');
var navigateBackSmartProgram = temporarilyNotSupport('navigateBackSmartProgram');
var preloadSubPackage = temporarilyNotSupport('preloadSubPackage');

var callbackManager = createCallbackManager();
var devicemotionListener;
/**
 * 停止监听加速度数据。
 * @param {Object} [object] 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var stopAccelerometer = function stopAccelerometer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  var res = {};

  try {
    window.removeEventListener('devicemotion', devicemotionListener, true);
    res.errMsg = 'stopAccelerometer:ok';
    return successHandler(success, complete)(res);
  } catch (e) {
    res.errMsg = "stopAccelerometer:fail ".concat(e.message);
    return errorHandler(fail, complete)(res);
  }
};

var INTERVALMAP = {
  game: {
    interval: 20,
    frequency: 50
  },
  ui: {
    interval: 60,
    frequency: 16.67
  },
  normal: {
    interval: 200,
    frequency: 5
  }
};

var getDevicemotionListener = function getDevicemotionListener(interval) {
  var lock;
  var timer;
  return function (evt) {
    if (lock) return;
    lock = true;
    timer && clearTimeout(timer);
    callbackManager.trigger({
      x: evt.acceleration.x || 0,
      y: evt.acceleration.y || 0,
      z: evt.acceleration.z || 0
    });
    timer = setTimeout(function () {
      lock = false;
    }, interval);
  };
};
/**
 * 开始监听加速度数据。
 * @param {Object} [object] 参数
 * @param {'game' | 'ui' | 'normal'} [object.interval=normal] 监听加速度数据回调函数的执行频率
 * game 适用于更新游戏的回调频率，在 20ms/次 左右
 * ui 适用于更新 UI 的回调频率，在 60ms/次 左右
 * normal 普通的回调频率，在 200ms/次 左右
 * @param {function} [object.success]  接口调用成功的回调函数
 * @param {function} [object.fail]  接口调用失败的回调函数
 * @param {function} [object.complete]  接口调用结束的回调函数（调用成功、失败都会执行）
 */


var startAccelerometer = function startAccelerometer() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 'normal' : _ref2$interval,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  try {
    if (window.DeviceMotionEvent) {
      var intervalObj = INTERVALMAP[interval];

      if (devicemotionListener) {
        stopAccelerometer();
      }

      devicemotionListener = getDevicemotionListener(intervalObj.interval);
      window.addEventListener('devicemotion', devicemotionListener, true);
    } else {
      throw new Error('accelerometer is not supported');
    }

    return successHandler(success, complete)({
      errMsg: 'startAccelerometer:ok'
    });
  } catch (e) {
    return errorHandler(fail, complete)({
      errMsg: "startAccelerometer:fail ".concat(e.message)
    });
  }
};
/**
 * 加速度数据事件的回调函数的参数
 * @typedef {object} AccelerometerParam
 * @property {number} x X 轴
 * @property {number} y Y 轴
 * @property {number} z Z 轴
 */

/**
 * 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数。可使用 wx.stopAccelerometer() 停止监听。
 * @param {(res: AccelerometerParam) => void} callback 加速度数据事件的回调函数
 */


var onAccelerometerChange = function onAccelerometerChange(callback) {
  callbackManager.add(callback);
};

/**
 * @typedef {object} InnerAudioContext
 * @property {string} src 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID
 * @property {number} [startTime=0] 开始播放的位置（单位：s），默认为 0
 * @property {boolean} [autoplay=false] 是否自动开始播放，默认为 false
 * @property {boolean} [loop=false] 是否循环播放，默认为 false
 * @property {boolean} [obeyMuteSwitch=true] 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 wx.setInnerAudioOption 接口统一设置。
 * @property {number} [volume=1] 音量。范围 0~1。默认为 1
 * @property {number} duration 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）
 * @property {number} currentTime 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读）
 * @property {boolean} paused 当前是是否暂停或停止状态（只读）
 * @property {number} buffered 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
 * @property {() => void} play() 播放
 * @property {() => void} pause() 暂停。暂停后的音频再播放会从暂停处开始播放
 * @property {() => void} stop() 停止。停止后的音频再播放会从头开始播放。
 * @property {(position: number) => void} seek(number position) 跳转到指定位置
 * @property {() => void} destroy() 销毁当前实例
 * @property {(callback: function) => void} offCanplay(function callback) 取消监听音频进入可以播放状态的事件
 * @property {(callback: function) => void} offEnded(function callback) 取消监听音频自然播放至结束的事件
 * @property {(callback: function) => void} offError(function callback) 取消监听音频播放错误事件
 * @property {(callback: function) => void} offPause(function callback) 取消监听音频暂停事件
 * @property {(callback: function) => void} offPlay(function callback) 取消监听音频播放事件
 * @property {(callback: function) => void} offSeeked(function callback) 取消监听音频完成跳转操作的事件
 * @property {(callback: function) => void} offSeeking(function callback) 取消监听音频进行跳转操作的事件
 * @property {(callback: function) => void} offStop(function callback) 取消监听音频停止事件
 * @property {(callback: function) => void} offTimeUpdate(function callback) 取消监听音频播放进度更新事件
 * @property {(callback: function) => void} offWaiting(function callback) 取消监听音频加载中事件
 * @property {(callback: function) => void} onCanplay(function callback) 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
 * @property {(callback: function) => void} onEnded(function callback) 监听音频自然播放至结束的事件
 * @property {(callback: function) => void} onError(function callback) 监听音频播放错误事件
 * @property {(callback: function) => void} onPause(function callback) 监听音频暂停事件
 * @property {(callback: function) => void} onPlay(function callback) 监听音频播放事件
 * @property {(callback: function) => void} onSeeked(function callback) 监听音频完成跳转操作的事件
 * @property {(callback: function) => void} onSeeking(function callback) 监听音频进行跳转操作的事件
 * @property {(callback: function) => void} onStop(function callback) 监听音频停止事件
 * @property {(callback: function) => void} onTimeUpdate(function callback) 监听音频播放进度更新事件
 * @property {(callback: function) => void} onWaiting(function callback) 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
 */

/**
 * 创建内部 audio 上下文 InnerAudioContext 对象。
 * @returns {InnerAudioContext}
 */

var createInnerAudioContext = function createInnerAudioContext() {
  /** @type {HTMLAudioElement} */
  var audioEl = new Audio();
  /** @type {InnerAudioContext} */

  var iac = {};
  var callbackManagers = {
    error: createCallbackManager(),
    stop: createCallbackManager()
  };

  iac.play = function () {
    return audioEl.play();
  };

  iac.pause = function () {
    return audioEl.pause();
  };

  iac.stop = function () {
    iac.pause();
    iac.seek(0);
    callbackManagers.stop.trigger();
  };

  iac.seek = function (position) {
    audioEl.currentTime = position;
  };
  /**
   * @todo destroy得并不干净
   */


  iac.destroy = function () {
    iac.stop();
    document.body.removeChild(audioEl);
    audioEl = null;
  };

  var simpleProperties = ['src', 'autoplay', 'loop', 'volume', 'duration', 'currentTime', 'buffered', 'paused'];
  simpleProperties.forEach(function (propertyName) {
    Object.defineProperty(iac, propertyName, {
      get: function get() {
        return audioEl[propertyName];
      },
      set: function set(value) {
        audioEl[propertyName] = value;
      }
    });
  });
  Object.defineProperty(iac, 'startTime', {
    value: 0
  });
  Object.defineProperty(iac, 'obeyMuteSwitch', {
    value: true
  });
  var simpleEvents = ['Canplay', 'Ended', 'Pause', 'Play', 'Seeked', 'Seeking', 'TimeUpdate', 'Waiting'];
  var simpleListenerTuples = [['on', audioEl.addEventListener], ['off', audioEl.removeEventListener]];
  simpleEvents.forEach(function (eventName) {
    simpleListenerTuples.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          eventNamePrefix = _ref2[0],
          listenerFunc = _ref2[1];

      Object.defineProperty(iac, "".concat(eventNamePrefix).concat(eventName), {
        get: function get() {
          return function (callback) {
            return listenerFunc.call(audioEl, eventName.toLowerCase(), callback);
          };
        }
      });
    });
  });
  var customEvents = ['Stop', 'Error'];
  var customListenerTuples = [['on', 'add'], ['off', 'remove']];
  customEvents.forEach(function (eventName) {
    customListenerTuples.forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          eventNamePrefix = _ref4[0],
          actionName = _ref4[1];

      Object.defineProperty(iac, "".concat(eventNamePrefix).concat(eventName), {
        get: function get() {
          return function (callback) {
            return callbackManagers[eventName.toLowerCase()][actionName](callback);
          };
        }
      });
    });
  });
  taro.eventCenter.on('__taroRouterChange', function () {
    iac.stop();
  });
  return iac;
};
/**
 * @typedef {object} AudioContext
 * @property {(src: string) => void} setSrc 设置音频地址
 * @property {() => void} play 播放音频。
 * @property {() => void} pause 暂停音频。
 * @property {(position: number) => void} seek(number position) 跳转到指定位置。
 */

/**
 * 创建 audio 上下文 AudioContext 对象。
 * @param {string} id <audio> 组件的 id
 * @param {Object} this 在自定义组件下，当前组件实例的this，以操作组件内 <audio> 组件
 * @returns {AudioContext}
 */
// export const createAudioContext = (id, componentInstance) => {
//   const refId = `__taroref_${id}`
//   const audioComponent = findRef(refId, componentInstance)
//   return audioComponent
//   /** @type {AudioContext} */
//   // const audioContext = {}
// }

/**
 * @typedef {Object} Param
 * @property {String} canvasId 画布标识，传入 <canvas> 组件的 canvas-id 属性。
 * @property {Number} x 将要被提取的图像数据矩形区域的左上角横坐标
 * @property {Number} y 将要被提取的图像数据矩形区域的左上角纵坐标
 * @property {Number} width 将要被提取的图像数据矩形区域的宽度
 * @property {Number} height 将要被提取的图像数据矩形区域的高度
 * @property {Function} [success] 接口调用成功的回调函数
 * @property {Function} [fail] 接口调用失败的回调函数
 * @property {Function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

/**
 * 获取 canvas 区域隐含的像素数据。
 * @param {Param} object 参数
 * @param {Object} componentInstance 在自定义组件下，当前组件实例的this，以操作组件内 <canvas> 组件
 */

var canvasGetImageData = function canvasGetImageData(_ref, componentInstance) {
  var canvasId = _ref.canvasId,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height;
  var refId = "__taroref_".concat(canvasId);
  var component = findRef(refId, componentInstance);
  var canvasDom = Nerv.findDOMNode(component);

  try {
    /** @type {HTMLCanvasElement} */
    var canvas = canvasDom.querySelector("[canvasId=".concat(canvasId, "]"));
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(x, y, width, height);
    var res = {
      width: width,
      height: height,
      data: data
    };
    success && success(res);
    complete && complete();
    return Promise.resolve(res);
  } catch (e) {
    var _res = {
      errMsg: e.message
    };
    fail && fail(_res);
    complete && complete();
    return Promise.reject(_res);
  }
};

/**
 * @typedef {Object} Param
 * @property {String} canvasId 画布标识，传入 <canvas> 组件的 canvas-id 属性。
 * @property {Uint8ClampedArray} data 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
 * @property {Number} x 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
 * @property {Number} y 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
 * @property {Number} width 源图像数据矩形区域的宽度
 * @property {Number} height 源图像数据矩形区域的高度
 * @property {Function} [success] 接口调用成功的回调函数
 * @property {Function} [fail] 接口调用失败的回调函数
 * @property {Function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

/**
 * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
 * @param {Param} object 参数
 * @param {Object} componentInstance 在自定义组件下，当前组件实例的this，以操作组件内 <canvas> 组件
 * @todo 暂未支持尺寸相关功能
 */

var canvasPutImageData = function canvasPutImageData(_ref, componentInstance) {
  var canvasId = _ref.canvasId,
      data = _ref.data,
      x = _ref.x,
      y = _ref.y,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;
  var refId = "__taroref_".concat(canvasId);
  var component = findRef(refId, componentInstance);
  var canvasDom = Nerv.findDOMNode(component);

  try {
    /** @type {HTMLCanvasElement} */
    var canvas = canvasDom.querySelector("[canvasId=".concat(canvasId, "]"));
    var ctx = canvas.getContext('2d');
    ctx.putImageData(data, x, y);
    var res = {
      errMsg: 'canvasPutImageData:ok'
    };
    success && success(res);
    complete && complete();
    return Promise.resolve(res);
  } catch (e) {
    var _res = {
      errMsg: e.message
    };
    fail && fail(_res);
    complete && complete();
    return Promise.reject(_res);
  }
};

/**
 * @typedef {Object} Param
 * @property {Number} [x] 指定的画布区域的左上角横坐标，默认值 0
 * @property {Number} [y] 指定的画布区域的左上角纵坐标，默认值 0
 * @property {Number} [width] 指定的画布区域的宽度，默认值 canvas宽度-x
 * @property {Number} [height] 指定的画布区域的高度，默认值 canvas宽度-y
 * @property {Number} [destWidth] 输出的图片的宽度，默认值 width*屏幕像素密度
 * @property {Number} [destHeight] 输出的图片的高度，默认值 height*屏幕像素密度
 * @property {String} canvasId 画布标识，传入 <canvas> 组件的 canvas-id
 * @property {String} [fileType] 目标文件的类型，默认值 png
 * @property {Number} quality 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
 * @property {Function} [success] 接口调用成功的回调函数
 * @property {Function} [fail] 接口调用失败的回调函数
 * @property {Function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

/**
 * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。
 * @param {Param} object 参数
 * @param {Object} componentInstance 在自定义组件下，当前组件实例的this，以操作组件内 <canvas> 组件
 * @todo 暂未支持尺寸相关功能
 */

var canvasToTempFilePath = function canvasToTempFilePath(_ref, componentInstance) {
  var canvasId = _ref.canvasId,
      fileType = _ref.fileType,
      quality = _ref.quality,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;
  var refId = "__taroref_".concat(canvasId);
  var component = findRef(refId, componentInstance);
  var canvasDom = Nerv.findDOMNode(component);

  try {
    /** @type {HTMLCanvasElement} */
    var canvas = canvasDom.querySelector("[canvasId=".concat(canvasId, "]")); // /** @type {CanvasRenderingContext2D} */

    var dataURL = canvas.toDataURL("image/".concat(fileType || 'png'), quality);
    var res = {
      tempFilePath: dataURL,
      res: 'canvasToTempFilePath:ok'
    };
    success && success(res);
    complete && complete();
    return Promise.resolve(res);
  } catch (e) {
    var _res = {
      errMsg: e.message
    };
    fail && fail(_res);
    complete && complete();
    return Promise.reject(_res);
  }
};

/**
* 创建 canvas 的绘图上下文 CanvasContext 对象
* @param {string} canvasId 要获取上下文的 <canvas> 组件 canvas-id 属性
* @param {Object} componentInstance 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 <canvas> ，如果省略则不在任何自定义组件内查找
*/

var createCanvasContext = function createCanvasContext(canvasId, componentInstance) {
  var refId = "__taroref_".concat(canvasId);
  var component = findRef(refId, componentInstance);
  var canvasDom = Nerv.findDOMNode(component);
  /** @type {HTMLCanvasElement} */

  var canvas = canvasDom.querySelector("[canvasId=".concat(canvasId, "]"));
  /** @type {CanvasRenderingContext2D} */

  var ctx = canvas.getContext('2d');
  /**
   * @typedef {Object} Action
   * @property {Function} func
   * @property {any[]} args
   */

  /**
   * 操作队列
   * @type {Action[]}
   */

  var actions = [];

  var enqueueActions = function enqueueActions(func) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      actions.push({
        func: func,
        args: args
      });
    };
  };

  var emptyActions = function emptyActions() {
    actions.length = 0;
  };
  /**
   * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
   * @param {Boolean} [reserve=false] 本次绘制是否接着上一次绘制。
   * 即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；
   * 若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，
   * 默认 false。
   * @param {Function} [callback] 绘制完成后执行的回调函数
   * @todo 每次draw都会读取width和height
   */


  var draw = function draw() {
    var reserve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    try {
      if (!reserve) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      actions.forEach(function (_ref) {
        var func = _ref.func,
            args = _ref.args;
        func.apply(ctx, args);
      });
      emptyActions();
      callback && callback();
      return Promise.resolve();
    } catch (e) {
      /* eslint-disable prefer-promise-reject-errors */
      return Promise.reject({
        errMsg: e.message
      });
    }
  };

  var customProperties = [
  /**
   * 设置填充色。
   * @param {String} color 填充的颜色，默认颜色为 black。
   */
  ['setFillStyle', function (color) {
    ctx.fillStyle = color;
  }],
  /**
  * 设置字体的字号。
  * @param {Number} fontSize 字体的字号
  */
  ['setFontSize', function (fontSize) {
    ctx.font = fontSize;
  }],
  /**
  * 设置全局画笔透明度。
  * @param {Number} alpha 透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。
  */
  ['setGlobalAlpha', function (alpha) {
    ctx.globalAlpha = alpha;
  }],
  /**
  * 设置虚线样式。
  * @param {Number[]} pattern 一组描述交替绘制线段和间距（坐标空间单位）长度的数字
  * @param {Number} offset 虚线偏移量
  */
  ['setLineDash', function (pattern, offset) {
    ctx.setLineDash(pattern);
    ctx.lineDashOffset = offset;
  }],
  /**
  * 设置线条的端点样式ind
  * @param {String} lineCap 线条的结束端点样式
  */
  ['setLineCap', function (lineCap) {
    ctx.lineCap = lineCap;
  }],
  /**
  * 设置线条的交点样式
  * @param {String} lineJoin 线条的结束交点样式
  */
  ['setLineJoin', function (lineJoin) {
    ctx.lineJoin = lineJoin;
  }],
  /**
  * 设置线条的宽度
  * @param {number} lineWidth 线条的宽度，单位px
  */
  ['setLineWidth', function (lineWidth) {
    ctx.lineWidth = lineWidth;
  }],
  /**
  * 设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 CanvasContext.setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
  * @param {number} miterLimit 最大斜接长度
  */
  ['setMiterLimit', function (miterLimit) {
    ctx.miterLimit = miterLimit;
  }],
  /**
  * 设定阴影样式。
  * @param {number} offsetX 阴影相对于形状在水平方向的偏移，默认值为 0。
  * @param {number} offsetY 阴影相对于形状在竖直方向的偏移，默认值为 0。
  * @param {number} blur 阴影的模糊级别，数值越大越模糊。范围 0- 100。，默认值为 0。
  * @param {string} color 阴影的颜色。默认值为 black。
  */
  ['setShadow', function (offsetX, offsetY, blur, color) {
    ctx.shadowOffsetX = offsetX;
    ctx.shadowOffsetY = offsetY;
    ctx.shadowColor = blur;
    ctx.shadowBlur = color;
  }],
  /**
  * 设置描边颜色。
  * @param {String} color 描边的颜色，默认颜色为 black。
  */
  ['setStrokeStyle', function (color) {
    ctx.strokeStyle = color;
  }],
  /**
  * 设置文字的对齐
  * @param {String} align 文字的对齐方式
  */
  ['setTextAlign', function (align) {
    ctx.textAlign = align;
  }],
  /**
  * 设置文字的竖直对齐
  * @param {string} textBaseline 文字的竖直对齐方式
  */
  ['setTextBaseline', function (textBaseline) {
    ctx.textBaseline = textBaseline;
  }]];
  var functionProperties = [['arc'], ['arcTo'], ['beginPath'], ['bezierCurveTo'], ['clearRect'], ['clip'], ['closePath'], ['createCircularGradient'], ['createLinearGradient'], ['createPattern'], ['drawImage'], ['fill'], ['fillRect'], ['fillText'], ['lineTo'], ['measureText', true], ['moveTo'], ['quadraticCurveTo'], ['rect'], ['restore'], ['rotate'], ['save'], ['scale'], ['setTransform'], ['stroke'], ['strokeRect'], ['strokeText'], ['transform'], ['translate']];
  var valueProperties = ['fillStyle', 'font', 'globalAlpha', 'lineCap', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY', 'shadowColor', 'shadowBlur', 'strokeStyle', 'textAlign', 'textBaseline', 'direction', 'globalCompositeOperation', 'imageSmoothingEnabled ', 'imageSmoothingQuality', 'filter'];
  var CanvasContext = {};
  customProperties.forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        funcName = _ref3[0],
        func = _ref3[1];

    Object.defineProperty(CanvasContext, funcName, {
      get: function get() {
        return enqueueActions(func);
      },
      enumerable: true
    });
  });
  functionProperties.forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        funcName = _ref5[0],
        isSync = _ref5[1];

    Object.defineProperty(CanvasContext, funcName, {
      get: isSync ? function () {
        return ctx[funcName].bind(ctx);
      } : function () {
        return enqueueActions(ctx[funcName]);
      },
      enumerable: true
    });
  });
  valueProperties.forEach(function (propertyName) {
    Object.defineProperty(CanvasContext, propertyName, {
      get: function get() {
        return ctx[propertyName];
      },
      set: function set(value) {
        enqueueActions(function () {
          ctx[propertyName] = value;
        })();
        return true;
      }
    });
  });
  Object.defineProperty(CanvasContext, 'draw', {
    value: draw
  });
  return CanvasContext;
};

function setStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "setStorage".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var key = options.key,
      data = options.data,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'setStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  setStorageSync(key, data);
  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

function setStorageSync(key) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'setStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  var type = _typeof(data);

  var obj = {};

  if (type === 'symbol') {
    obj = {
      data: ''
    };
  } else {
    obj = {
      data: data
    };
  }

  localStorage.setItem(key, JSON.stringify(obj));
}

function getStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res2 = {
      errMsg: "getStorage".concat(isObject.msg)
    };
    console.error(_res2.errMsg);
    return Promise.reject(_res2);
  }

  var key = options.key,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'getStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  var _getItem = getItem(key),
      result = _getItem.result,
      data = _getItem.data;

  if (result) {
    res.data = data;
  } else {
    res.errMsg = 'getStorage:fail data not found';
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

function getStorageSync(key) {
  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'getStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  var res = getItem(key);
  if (res.result) return res.data;
  return '';
}

function getItem(key) {
  var item;

  try {
    item = JSON.parse(localStorage.getItem(key));
  } catch (e) {} // 只返回使用 Taro.setStorage API 存储的数据


  if (item && _typeof(item) === 'object' && item.hasOwnProperty('data')) {
    return {
      result: true,
      data: item.data
    };
  } else {
    return {
      result: false
    };
  }
}

function getStorageInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = options.success,
      complete = options.complete;
  var res = {
    errMsg: 'getStorageInfo:ok'
  };
  var info = getStorageInfoSync();
  Object.assign(res, info);
  success && success(res);
  complete && complete(res);
  return Promise.resolve(res);
}

function getStorageInfoSync() {
  var res = {};
  res.keys = Object.keys(localStorage);
  res.limitSize = null;
  res.currentSize = null;
  return res;
}

function removeStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res3 = {
      errMsg: "removeStorage".concat(isObject.msg)
    };
    console.error(_res3.errMsg);
    return Promise.reject(_res3);
  }

  var key = options.key,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'removeStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'removeStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  removeStorageSync(key);
  success && success(res);
  complete && complete(res);
  return Promise.resolve(res);
}

function removeStorageSync(key) {
  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'removeStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  localStorage.removeItem(key);
}

function clearStorage() {
  localStorage.clear();
}

/**
 * 剪贴板部分的api参考了Chameleon项目的实现：
 *
 * setClipboardData: https://github.com/chameleon-team/chameleon-api/tree/master/src/interfaces/setClipBoardData
 * getClipboardData: https://github.com/chameleon-team/chameleon-api/tree/master/src/interfaces/getClipBoardData
 */
var CLIPBOARD_STORAGE_NAME = 'taro_clipboard';
document.addEventListener('copy', function () {
  setStorage({
    key: CLIPBOARD_STORAGE_NAME,
    data: window.getSelection().toString()
  })["catch"](function (e) {
    console.error(e);
  });
});
/**
 * 成功回调
 * @callback SuccessCallback
 * @param {{ errMsg: string, data: string }}
 */

/**
 * 失败回调
 * @callback FailCallback
 * @param {{ errMsg: string }}
 */

/**
 * 完成回调
 * @callback CompleteCallback
 */

/**
 * 设置系统剪贴板的内容
 * @param {{ data: string, success: SuccessCallback, fail: FailCallback, complete: CompleteCallback }} object 参数
 * @returns {Promise<{ errMsg: string, data: string }>}
 */

var setClipboardData = function setClipboardData(_ref) {
  var data = _ref.data,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;
  return new Promise(function (resolve, reject) {
    setStorage({
      key: CLIPBOARD_STORAGE_NAME,
      data: data
    }).then(function () {
      /**
       * 已于 iPhone 6s Plus iOS 13.1.3 上的 Safari 测试通过
       * iOS < 10 的系统可能无法使用编程方式访问剪贴板，参考：
       * https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios/34046084
       */
      if (typeof document.execCommand === 'function') {
        var input = document.createElement('input');
        input.readOnly = true;
        input.value = data;
        input.style.position = 'absolute';
        input.style.width = '100px';
        input.style.left = '-10000px';
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length);
        document.execCommand('copy');
        document.body.removeChild(input);
      } else {
        throw new Error("Unsupported Function: 'document.execCommand'.");
      }

      var res = {
        errMsg: 'setClipboardData:ok',
        data: data
      };
      success && success(res);
      complete && complete();
      resolve(res);
    })["catch"](function (e) {
      var res = {
        errMsg: "setClipboardData:fail ".concat(e.message)
      };
      fail && fail(res);
      complete && complete();
      reject(res);
    });
  });
};
/**
 * 获取系统剪贴板的内容
 * @param {{ success: SuccessCallback, fail: FailCallback, complete: CompleteCallback  }} object 参数
 * @returns {Promise<{ errMsg: string, data: string }>}
 */

var getClipboardData = function getClipboardData() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  return new Promise(function (resolve, reject) {
    getStorage({
      key: CLIPBOARD_STORAGE_NAME
    }).then(function (data) {
      var res = {
        errMsg: 'getClipboardData:ok',
        data: data
      };
      success && success(res);
      complete && complete();
      resolve(res);
    })["catch"](function (e) {
      var res = {
        errMsg: "getClipboardData:fail ".concat(e.message)
      };
      fail && fail(res);
      complete && complete();
      reject(res);
    });
  });
};

var compassListener;
var callbackManager$1 = createCallbackManager();
/**
 * 停止监听罗盘数据
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var stopCompass = function stopCompass() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  try {
    window.removeEventListener('deviceorientation', compassListener, true);
    return successHandler(success, complete)({
      errMsg: 'stopCompass:ok'
    });
  } catch (e) {
    return errorHandler(fail, complete)({
      errMsg: "stopCompass:fail ".concat(e.message)
    });
  }
};

var getDeviceOrientationListener = function getDeviceOrientationListener(interval) {
  var lock;
  var timer;
  return function (evt) {
    if (lock) return;
    lock = true;
    timer && clearTimeout(timer);
    callbackManager$1.trigger({
      direction: 360 - evt.alpha
    });
    timer = setTimeout(function () {
      lock = false;
    }, interval);
  };
};
/**
 * 开始监听罗盘数据
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */


var startCompass = function startCompass() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  try {
    if (window.DeviceOrientationEvent) {
      if (compassListener) {
        stopCompass();
      }

      compassListener = getDeviceOrientationListener(200);
      window.addEventListener('deviceorientation', compassListener, true);
    } else {
      throw new Error('compass is not supported');
    }

    return successHandler(success, complete)({
      errMsg: 'startCompass:ok'
    });
  } catch (e) {
    return errorHandler(fail, complete)({
      errMsg: "startCompass:fail ".concat(e.message)
    });
  }
};
/**
 * @typedef CompassParam 回调参数
 * @property {number} direction 面对的方向度数
 * @property {Accuracy} [accuracy] 精度
 */

/**
 * @typedef {'high'|'medium'|'low'|'no-contact'|'unreliable'|'unknow'|number} Accuracy
 * 由于平台差异，accuracy 在 iOS/Android 的值不同。
 * iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
 * Android：accuracy 是一个 string 类型的枚举值。
 * high 高精度
 * medium 中等精度
 * low 低精度
 * no-contact 不可信，传感器失去连接
 * unreliable 不可信，原因未知
 * unknow ${value} 未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值
 */

/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 * @param {(obj: CompassParam) => void} callback 罗盘数据变化事件的回调函数
 */


var onCompassChange = function onCompassChange(callback) {
  callbackManager$1.add(callback);
};

/**
 * H5 下的 styleSheet 操作
 * @author leeenx
 */
var StyleSheet = function StyleSheet() {
  var _this = this;

  _classCallCheck(this, StyleSheet);

  _defineProperty(this, "$style", null);

  _defineProperty(this, "sheet", null);

  _defineProperty(this, "appendStyleSheet", function () {
    _this.$style.setAttribute('type', 'text/css');

    _this.$style.setAttribute('data-type', 'Taro');

    document.getElementsByTagName('head')[0].appendChild(_this.$style);
    _this.sheet = _this.$style.sheet;

    if (!('insertRule' in _this.sheet)) {
      console.warn('当前浏览器不支持 stylesheet.insertRule 接口');
    }
  });

  _defineProperty(this, "add", function (cssText) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (_this.sheet === null) {
      // $style 未插入到 DOM
      _this.appendStyleSheet();
    }

    _this.sheet.insertRule(cssText, index);
  });

  this.$style = document.createElement('style');
};

var styleSheet = new StyleSheet(); // 监听事件

var TRANSITION_END = 'transitionend';
var TRANSFORM = 'transform';
var $detect = document.createElement('div');
$detect.style.cssText = "\n  -webkit-animation-name: webkit;\n  -moz-animation-name: moz;\n  -ms-animation-name: ms;\n  animation-name: standard;\n";

if ($detect.style['animation-name'] === 'standard') {
  // 支持标准写法
  TRANSITION_END = 'transitionend';
  TRANSFORM = 'transform';
} else if ($detect.style['-webkit-animation-name'] === 'webkit') {
  // webkit 前缀
  TRANSITION_END = 'webkitTransionEnd';
  TRANSFORM = '-webkit-transform';
} else if ($detect.style['-moz-animation-name'] === 'moz') {
  // webkit 前缀
  TRANSITION_END = 'mozTransionEnd';
  TRANSFORM = '-moz-transform';
} else if ($detect.style['-ms-animation-name'] === 'ms') {
  // webkit 前缀
  TRANSITION_END = 'MSTransionEnd';
  TRANSFORM = '-ms-transform';
}

var animId = 0; // Animation 类

var Animation =
/*#__PURE__*/
function () {
  function Animation() {
    var _this2 = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 400 : _ref$duration,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$timingFunction = _ref.timingFunction,
        timingFunction = _ref$timingFunction === void 0 ? 'linear' : _ref$timingFunction,
        _ref$transformOrigin = _ref.transformOrigin,
        transformOrigin = _ref$transformOrigin === void 0 ? '50% 50% 0' : _ref$transformOrigin,
        _ref$unit = _ref.unit,
        unit = _ref$unit === void 0 ? 'px' : _ref$unit;

    _classCallCheck(this, Animation);

    _defineProperty(this, "rules", []);

    _defineProperty(this, "transform", ["".concat(TRANSFORM, ":")]);

    _defineProperty(this, "steps", []);

    _defineProperty(this, "animationMap", {});

    _defineProperty(this, "animationMapCount", 0);

    // 默认值
    this.setDefault(duration, delay, timingFunction, transformOrigin);
    this.unit = unit; // atom 环境下，animation 属性不会显示，所以要改成 data-animation

    var animAttr = 'animation'; // 动画 id

    this.id = ++animId; // 监听事件

    document.body.addEventListener(TRANSITION_END, function (e) {
      var target = e.target;

      if (target.getAttribute(animAttr) === null) {
        animAttr = 'data-animation';
      }

      var animData = target.getAttribute(animAttr); // 没有动画存在

      if (animData === null) return;

      var _animData$split = animData.split('__'),
          _animData$split2 = _slicedToArray(_animData$split, 2),
          animName = _animData$split2[0],
          animPath = _animData$split2[1];

      if (animName === "taro-h5-poly-fill/".concat(_this2.id, "/create-animation")) {
        var _animPath$split = animPath.split('--'),
            _animPath$split2 = _slicedToArray(_animPath$split, 2),
            animIndex = _animPath$split2[0],
            _animPath$split2$ = _animPath$split2[1],
            stepIndex = _animPath$split2$ === void 0 ? 0 : _animPath$split2$; // 动画总的关键帧


        var animStepsCount = _this2.animationMap["".concat(animName, "__").concat(animIndex)];

        var animStepsMaxIndex = animStepsCount - 1;

        if (stepIndex < animStepsMaxIndex) {
          // 播放下一个关键帧（因为 nevr 和 react 有差异所以 animation & data-animation 都需要写）
          target.setAttribute(animAttr, "".concat(animName, "__").concat(animIndex, "--").concat(stepIndex + 1));

          if (animAttr === 'animation') {
            // Nerv 环境，animation & data-animation 双重保险
            target.setAttribute('data-animation', "".concat(animName, "__").concat(animIndex, "--").concat(stepIndex + 1));
          }
        }
      }
    });
  }

  _createClass(Animation, [{
    key: "transformUnit",
    value: function transformUnit() {
      var _this3 = this;

      var ret = [];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (each) {
        ret.push(isNaN(each) ? each : "".concat(each).concat(_this3.unit));
      });
      return ret;
    } // 设置默认值

  }, {
    key: "setDefault",
    value: function setDefault(duration, delay, timingFunction, transformOrigin) {
      this.DEFAULT = {
        duration: duration,
        delay: delay,
        timingFunction: timingFunction,
        transformOrigin: transformOrigin
      };
    } // 属性组合

  }, {
    key: "matrix",
    value: function matrix(a, b, c, d, e, f) {
      this.transform.push("matrix(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ", ").concat(e, ", ").concat(f, ")"));
      return this;
    }
  }, {
    key: "matrix3d",
    value: function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
      this.transform.push("matrix3d(".concat(a1, ", ").concat(b1, ", ").concat(c1, ", ").concat(d1, ", ").concat(a2, ", ").concat(b2, ", ").concat(c2, ", ").concat(d2, ", ").concat(a3, ", ").concat(b3, ", ").concat(c3, ", ").concat(d3, ", ").concat(a4, ", ").concat(b4, ", ").concat(c4, ", ").concat(d4, ")"));
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      this.transform.push("rotate(".concat(angle, "deg)"));
      return this;
    }
  }, {
    key: "rotate3d",
    value: function rotate3d(x, y, z, angle) {
      this.transform.push("rotate3d(".concat(x, ", ").concat(y, ", ").concat(z, ", ").concat(angle, "deg)"));
      return this;
    }
  }, {
    key: "rotateX",
    value: function rotateX(angle) {
      this.transform.push("rotateX(".concat(angle, "deg)"));
      return this;
    }
  }, {
    key: "rotateY",
    value: function rotateY(angle) {
      this.transform.push("rotateY(".concat(angle, "deg)"));
      return this;
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(angle) {
      this.transform.push("rotateZ(".concat(angle, "deg)"));
      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      this.transform.push("scale(".concat(x, ", ").concat(y, ")"));
      return this;
    }
  }, {
    key: "scale3d",
    value: function scale3d(x, y, z) {
      this.transform.push("scale3d(".concat(x, ", ").concat(y, ", ").concat(z, ")"));
      return this;
    }
  }, {
    key: "scaleX",
    value: function scaleX(scale) {
      this.transform.push("scaleX(".concat(scale, ")"));
      return this;
    }
  }, {
    key: "scaleY",
    value: function scaleY(scale) {
      this.transform.push("scaleY(".concat(scale, ")"));
      return this;
    }
  }, {
    key: "scaleZ",
    value: function scaleZ(scale) {
      this.transform.push("scaleZ(".concat(scale, ")"));
      return this;
    }
  }, {
    key: "skew",
    value: function skew(x, y) {
      this.transform.push("skew(".concat(x, ", ").concat(y, ")"));
      return this;
    }
  }, {
    key: "skewX",
    value: function skewX(angle) {
      this.transform.push("skewX(".concat(angle, ")"));
      return this;
    }
  }, {
    key: "skewY",
    value: function skewY(angle) {
      this.transform.push("skewY(".concat(angle, ")"));
      return this;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var _this$transformUnit = this.transformUnit(x, y);

      var _this$transformUnit2 = _slicedToArray(_this$transformUnit, 2);

      x = _this$transformUnit2[0];
      y = _this$transformUnit2[1];
      this.transform.push("translate(".concat(x, ", ").concat(y, ")"));
      return this;
    }
  }, {
    key: "translate3d",
    value: function translate3d(x, y, z) {
      var _this$transformUnit3 = this.transformUnit(x, y, z);

      var _this$transformUnit4 = _slicedToArray(_this$transformUnit3, 3);

      x = _this$transformUnit4[0];
      y = _this$transformUnit4[1];
      z = _this$transformUnit4[2];
      this.transform.push("translate3d(".concat(x, ", ").concat(y, ", ").concat(z, ")"));
      return this;
    }
  }, {
    key: "translateX",
    value: function translateX(translate) {
      var _this$transformUnit5 = this.transformUnit(translate);

      var _this$transformUnit6 = _slicedToArray(_this$transformUnit5, 1);

      translate = _this$transformUnit6[0];
      this.transform.push("translateX(".concat(translate, ")"));
      return this;
    }
  }, {
    key: "translateY",
    value: function translateY(translate) {
      var _this$transformUnit7 = this.transformUnit(translate);

      var _this$transformUnit8 = _slicedToArray(_this$transformUnit7, 1);

      translate = _this$transformUnit8[0];
      this.transform.push("translateY(".concat(translate, ")"));
      return this;
    }
  }, {
    key: "translateZ",
    value: function translateZ(translate) {
      var _this$transformUnit9 = this.transformUnit(translate);

      var _this$transformUnit10 = _slicedToArray(_this$transformUnit9, 1);

      translate = _this$transformUnit10[0];
      this.transform.push("translateZ(".concat(translate, ")"));
      return this;
    }
  }, {
    key: "opacity",
    value: function opacity(value) {
      this.rules.push("opacity: ".concat(value));
      return this;
    }
  }, {
    key: "backgroundColor",
    value: function backgroundColor(value) {
      this.rules.push("background-color: ".concat(value));
      return this;
    }
  }, {
    key: "width",
    value: function width(value) {
      var _this$transformUnit11 = this.transformUnit(value);

      var _this$transformUnit12 = _slicedToArray(_this$transformUnit11, 1);

      value = _this$transformUnit12[0];
      this.rules.push("width: ".concat(value));
      return this;
    }
  }, {
    key: "height",
    value: function height(value) {
      var _this$transformUnit13 = this.transformUnit(value);

      var _this$transformUnit14 = _slicedToArray(_this$transformUnit13, 1);

      value = _this$transformUnit14[0];
      this.rules.push("height: ".concat(value));
      return this;
    }
  }, {
    key: "top",
    value: function top(value) {
      var _this$transformUnit15 = this.transformUnit(value);

      var _this$transformUnit16 = _slicedToArray(_this$transformUnit15, 1);

      value = _this$transformUnit16[0];
      this.rules.push("top: ".concat(value));
      return this;
    }
  }, {
    key: "right",
    value: function right(value) {
      var _this$transformUnit17 = this.transformUnit(value);

      var _this$transformUnit18 = _slicedToArray(_this$transformUnit17, 1);

      value = _this$transformUnit18[0];
      this.rules.push("right: ".concat(value));
      return this;
    }
  }, {
    key: "bottom",
    value: function bottom(value) {
      var _this$transformUnit19 = this.transformUnit(value);

      var _this$transformUnit20 = _slicedToArray(_this$transformUnit19, 1);

      value = _this$transformUnit20[0];
      this.rules.push("bottom: ".concat(value));
      return this;
    }
  }, {
    key: "left",
    value: function left(value) {
      var _this$transformUnit21 = this.transformUnit(value);

      var _this$transformUnit22 = _slicedToArray(_this$transformUnit21, 1);

      value = _this$transformUnit22[0];
      this.rules.push("left: ".concat(value));
      return this;
    } // 关键帧载入

  }, {
    key: "step",
    value: function step() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var DEFAULT = this.DEFAULT;
      var _arg$duration = arg.duration,
          duration = _arg$duration === void 0 ? DEFAULT.duration : _arg$duration,
          _arg$delay = arg.delay,
          delay = _arg$delay === void 0 ? DEFAULT.delay : _arg$delay,
          _arg$timingFunction = arg.timingFunction,
          timingFunction = _arg$timingFunction === void 0 ? DEFAULT.timingFunction : _arg$timingFunction,
          _arg$transformOrigin = arg.transformOrigin,
          transformOrigin = _arg$transformOrigin === void 0 ? DEFAULT.transformOrigin : _arg$transformOrigin; // 生成一条 transition 动画

      this.steps.push([this.rules.join(';'), this.transform.join(' '), "".concat(TRANSFORM, "-origin: ").concat(transformOrigin), "transition: all ".concat(duration, "ms ").concat(timingFunction, " ").concat(delay, "ms")].filter(function (item) {
        return item !== '' && item !== "".concat(TRANSFORM, ":");
      }).join(';')); // 清空 rules 和 transform

      this.rules = [];
      this.transform = ["".concat(TRANSFORM, ":")];
      return this;
    } // 创建底层数据

  }, {
    key: "createAnimationData",
    value: function createAnimationData() {
      var animIndex = "taro-h5-poly-fill/".concat(this.id, "/create-animation__").concat(this.animationMapCount++); // 记录动画分几个 step

      this.animationMap[animIndex] = this.steps.length; // 吐出 step

      this.steps.forEach(function (step, index) {
        var selector = index === 0 ? "[animation=\"".concat(animIndex, "\"], [data-animation=\"").concat(animIndex, "\"]") : "[animation=\"".concat(animIndex, "--").concat(index, "\"], [data-animation=\"").concat(animIndex, "--").concat(index, "\"]");
        styleSheet.add("".concat(selector, " { ").concat(step, " }"));
      }); // 清空 steps

      this.steps = [];
      return animIndex;
    } // 动画数据产出

  }, {
    key: "export",
    value: function _export() {
      return this.createAnimationData();
    }
  }]);

  return Animation;
}(); // h5 的 createAnimation


function createAnimation() {
  for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arg[_key2] = arguments[_key2];
  }

  return _construct(Animation, arg);
}

/**
 * WXML节点信息API
 * @return {Object} SelectorQuery 对象实例
 */

function queryBat(queue, cb) {
  var res = [];
  queue.forEach(function (item) {
    var selector = item.selector,
        single = item.single,
        fields = item.fields,
        component = item.component; // selector 的容器节点

    /* eslint-disable */

    var container = component !== null ? Nerv__default.findDOMNode(component) || document : document;
    /* eslint-enable */
    // 特殊处理 ---- 选自己

    var selectSelf = false;

    if (container !== document) {
      var $nodeList = container.parentNode.querySelectorAll(selector);

      for (var i = 0, len = $nodeList.length; i < len; ++i) {
        if (container === $nodeList[i]) {
          selectSelf = true;
          break;
        }
      }
    }

    if (single) {
      var el = selectSelf === true ? container : container.querySelector(selector);
      res.push(filter(fields, el, selector));
    } else {
      var $children = container.querySelectorAll(selector);
      var children = [];
      selectSelf === true && children.push(container);

      for (var _i = 0, _len = $children.length; _i < _len; ++_i) {
        children.push($children[_i]);
      }

      res.push(children.map(function (dom) {
        return filter(fields, dom);
      }));
    }
  });
  cb(res);
}

function filter(fields, dom, selector) {
  if (!dom) return null;
  var id = fields.id,
      dataset = fields.dataset,
      rect = fields.rect,
      size = fields.size,
      scrollOffset = fields.scrollOffset,
      _fields$properties = fields.properties,
      properties = _fields$properties === void 0 ? [] : _fields$properties,
      _fields$computedStyle = fields.computedStyle,
      computedStyle = _fields$computedStyle === void 0 ? [] : _fields$computedStyle;

  var _dom$getBoundingClien = dom.getBoundingClientRect(),
      left = _dom$getBoundingClien.left,
      right = _dom$getBoundingClien.right,
      top = _dom$getBoundingClien.top,
      bottom = _dom$getBoundingClien.bottom,
      width = _dom$getBoundingClien.width,
      height = _dom$getBoundingClien.height;

  var isViewport = selector === 'html';
  var res = {};
  if (id) res.id = dom.id;
  if (dataset) res.dataset = Object.assign({}, dom.dataset);

  if (rect) {
    if (!isViewport) {
      res.left = left;
      res.right = right;
      res.top = top;
      res.bottom = bottom;
    } else {
      res.left = 0;
      res.right = 0;
      res.top = 0;
      res.bottom = 0;
    }
  }

  if (size) {
    if (!isViewport) {
      res.width = width;
      res.height = height;
    } else {
      res.width = dom.clientWidth;
      res.height = dom.clientHeight;
    }
  }

  if (scrollOffset) {
    res.scrollLeft = dom.scrollLeft;
    res.scrollTop = dom.scrollTop;
    res.scrollHeight = dom.scrollHeight;
    res.scrollWidth = dom.scrollWidth;
  }

  if (properties.length) {
    properties.forEach(function (prop) {
      var attr = dom.getAttribute(prop);
      if (attr) res[prop] = attr;
    });
  }

  if (computedStyle.length) {
    var styles = window.getComputedStyle(dom);
    computedStyle.forEach(function (key) {
      var value = styles.getPropertyValue(key);
      if (value) res[key] = value;
    });
  }

  return res;
}

var Query =
/*#__PURE__*/
function () {
  function Query() {
    _classCallCheck(this, Query);

    this._defaultWebviewId = null;
    this._webviewId = null;
    this._queue = [];
    this._queueCb = [];
    this._component = null;
  }

  _createClass(Query, [{
    key: "in",
    value: function _in(component) {
      this._component = component;
      return this;
    }
  }, {
    key: "select",
    value: function select(selector) {
      // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
      if (typeof selector === 'string') selector = selector.replace('>>>', '>');
      return new NodesRef(selector, this, true);
    }
  }, {
    key: "selectAll",
    value: function selectAll(selector) {
      // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
      if (typeof selector === 'string') selector = selector.replace('>>>', '>');
      return new NodesRef(selector, this, false);
    }
  }, {
    key: "selectViewport",
    value: function selectViewport() {
      return new NodesRef('html', this, true);
    }
  }, {
    key: "exec",
    value: function exec(cb) {
      var _this = this;

      queryBat(this._queue, function (res) {
        var _queueCb = _this._queueCb;
        res.forEach(function (item, index) {
          typeof _queueCb[index] === 'function' && _queueCb[index].call(_this, item);
        });
        typeof cb === 'function' && cb.call(_this, res);
      });
    }
  }, {
    key: "_push",
    value: function _push(selector, component, single, fields) {
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      this._queue.push({
        component: component,
        selector: selector,
        single: single,
        fields: fields
      });

      this._queueCb.push(callback);
    }
  }]);

  return Query;
}();

var NodesRef =
/*#__PURE__*/
function () {
  function NodesRef(selector, querySelectorQuery, single) {
    _classCallCheck(this, NodesRef);

    this._component = querySelectorQuery._component;
    this._selector = selector;
    this._selectorQuery = querySelectorQuery;
    this._single = single;
  }

  _createClass(NodesRef, [{
    key: "boundingClientRect",
    value: function boundingClientRect(cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;

      _selectorQuery._push(_selector, _component, _single, {
        id: !0,
        dataset: !0,
        rect: !0,
        size: !0
      }, cb);

      return _selectorQuery;
    }
  }, {
    key: "scrollOffset",
    value: function scrollOffset(cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;

      _selectorQuery._push(_selector, _component, _single, {
        id: !0,
        dataset: !0,
        scrollOffset: !0
      }, cb);

      return _selectorQuery;
    }
  }, {
    key: "fields",
    value: function fields(_fields, cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;
      var id = _fields.id,
          dataset = _fields.dataset,
          rect = _fields.rect,
          size = _fields.size,
          scrollOffset = _fields.scrollOffset,
          _fields$properties2 = _fields.properties,
          properties = _fields$properties2 === void 0 ? [] : _fields$properties2,
          _fields$computedStyle2 = _fields.computedStyle,
          computedStyle = _fields$computedStyle2 === void 0 ? [] : _fields$computedStyle2;

      _selectorQuery._push(_selector, _component, _single, {
        id: id,
        dataset: dataset,
        rect: rect,
        size: size,
        scrollOffset: scrollOffset,
        properties: properties,
        computedStyle: computedStyle
      }, cb);

      return _selectorQuery;
    }
  }]);

  return NodesRef;
}();

function createSelectorQuery() {
  return new Query();
}

var deviceMotionListener;
var callbackManager$2 = createCallbackManager();
var INTERVALMAP$1 = {
  game: {
    interval: 20,
    frequency: 50
  },
  ui: {
    interval: 60,
    frequency: 16.67
  },
  normal: {
    interval: 200,
    frequency: 5
  }
};
/**
 * 停止监听设备方向的变化。
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var stopDeviceMotionListening = function stopDeviceMotionListening(_ref) {
  var success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  try {
    window.removeEventListener('deviceorientation', deviceMotionListener, true);
    return successHandler(success, complete)({
      errMsg: 'stopDeviceMotionListening:ok'
    });
  } catch (e) {
    return errorHandler(fail, complete)({
      errMsg: "stopDeviceMotionListening:fail ".concat(e.message)
    });
  }
};

var getDeviceOrientationListener$1 = function getDeviceOrientationListener(interval) {
  var lock;
  var timer;
  return function (evt) {
    if (lock) return;
    lock = true;
    timer && clearTimeout(timer);
    callbackManager$2.trigger({
      alpha: evt.alpha,
      beta: evt.beta,
      gamma: evt.gamma
    });
    timer = setTimeout(function () {
      lock = false;
    }, interval);
  };
};
/**
 * 开始监听设备方向的变化。
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */


var startDeviceMotionListening = function startDeviceMotionListening() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 'normal' : _ref2$interval,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  try {
    var intervalObj = INTERVALMAP$1[interval];

    if (window.DeviceOrientationEvent) {
      if (deviceMotionListener) {
        stopDeviceMotionListening();
      }

      deviceMotionListener = getDeviceOrientationListener$1(intervalObj.interval);
      window.addEventListener('deviceorientation', deviceMotionListener, true);
    } else {
      throw new Error('deviceMotion is not supported');
    }

    return successHandler(success, complete)({
      errMsg: 'startDeviceMotionListening:ok'
    });
  } catch (e) {
    return errorHandler(fail, complete)({
      errMsg: "startDeviceMotionListening:fail ".concat(e.message)
    });
  }
};
/**
 * @typedef DeviceMotionParam 回调参数
 * @property {number} alpha 当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。
 * @property {number} beta 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。
 * @property {number} gamma 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。
 */

/**
 * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListeningListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListeningListening() 停止监听。
 * @param {(obj: DeviceMotionParam) => void} callback 罗盘数据变化事件的回调函数
 */


var onDeviceMotionChange = function onDeviceMotionChange(callback) {
  callbackManager$2.add(callback);
};

/**
 * HTTP Response Header 事件回调函数的参数
 * @typedef {Object} HeadersReceivedParam
 * @property {Object} header 开发者服务器返回的 HTTP Response Header
 */

/**
 * HTTP Response Header 事件的回调函数
 * @callback HeadersReceivedCallback
 * @param {HeadersReceivedParam} res 参数
 */

/**
 * 进度变化回调函数的参数
 * @typedef {Object} ProgressUpdateParam
 * @property {number} progress 进度百分比
 * @property {number} [totalBytesWritten] 已经下载的数据长度，单位 Bytes
 * @property {number} [totalBytesSent] 已经上传的数据长度，单位 Bytes
 * @property {number} [totalBytesExpectedToWrite] 预期需要下载的数据总长度，单位 Bytes
 * @property {number} [totalBytesExpectedToSend] 预期需要上传的数据总长度，单位 Bytes
 */

/**
 * 进度变化事件的回调函数
 * @callback ProgressUpdateCallback
 * @param {ProgressUpdateParam} res 参数
 */
var NETWORK_TIMEOUT = 60000;
var XHR_STATS = {
  UNSENT: 0,
  // Client has been created. open() not called yet.
  OPENED: 1,
  // open() has been called.
  HEADERS_RECEIVED: 2,
  // send() has been called, and headers and status are available.
  LOADING: 3,
  // Downloading; responseText holds partial data.
  DONE: 4 // The operation is complete.

};
/**
 * 设置xhr的header
 * @param {XMLHttpRequest} xhr
 * @param {Object} header
 */

var setHeader = function setHeader(xhr, header) {
  var headerKey;

  for (headerKey in header) {
    xhr.setRequestHeader(headerKey, header[headerKey]);
  }
};
/**
 * 将 blob url 转化为文件
 * @param {string} url 要转换的 blob url
 * @returns {Promise<File>}
 */

var convertObjectUrlToBlob = function convertObjectUrlToBlob(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function (e) {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        /* eslint-disable prefer-promise-reject-errors */
        reject({
          status: this.status
        });
      }
    };

    xhr.send();
  });
};

var createDownloadTask = function createDownloadTask(_ref) {
  var url = _ref.url,
      header = _ref.header,
      success = _ref.success,
      error = _ref.error;
  var timeout;
  var apiName = 'downloadFile';
  var xhr = new XMLHttpRequest();
  var callbackManager = {
    headersReceived: createCallbackManager(),
    progressUpdate: createCallbackManager()
  };
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  setHeader(xhr, header);

  xhr.onprogress = function (e) {
    var loaded = e.loaded,
        total = e.total;
    callbackManager.progressUpdate.trigger({
      progress: Math.round(loaded / total * 100),
      totalBytesWritten: loaded,
      totalBytesExpectedToWrite: total
    });
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XHR_STATS.HEADERS_RECEIVED) return;
    callbackManager.headersReceived.trigger({
      header: xhr.getAllResponseHeaders()
    });
  };

  xhr.onload = function () {
    var response = xhr.response;
    var status = xhr.status;
    success({
      errMsg: "".concat(apiName, ":ok"),
      statusCode: status,
      tempFilePath: window.URL.createObjectURL(response)
    });
  };

  xhr.onabort = function () {
    clearTimeout(timeout);
    error({
      errMsg: "".concat(apiName, ":fail abort")
    });
  };

  xhr.onerror = function (e) {
    error({
      errMsg: "".concat(apiName, ":fail ").concat(e.message)
    });
  };

  var send = function send() {
    xhr.send();
    timeout = setTimeout(function () {
      xhr.onabort = null;
      xhr.onload = null;
      xhr.onprogress = null;
      xhr.onreadystatechange = null;
      xhr.onerror = null;
      abort();
      error({
        errMsg: "".concat(apiName, ":fail timeout")
      });
    }, NETWORK_TIMEOUT);
  };

  send();
  /**
   * 中断任务
   */

  var abort = function abort() {
    xhr.abort();
  };
  /**
   * 监听 HTTP Response Header 事件。会比请求完成事件更早
   * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
   */


  var onHeadersReceived = callbackManager.headersReceived.add;
  /**
   * 取消监听 HTTP Response Header 事件
   * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
   */

  var offHeadersReceived = callbackManager.headersReceived.remove;
  /**
   * 监听进度变化事件
   * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
   */

  var onProgressUpdate = callbackManager.progressUpdate.add;
  /**
   * 取消监听进度变化事件
   * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
   */

  var offProgressUpdate = callbackManager.progressUpdate.remove;
  return {
    abort: abort,
    onHeadersReceived: onHeadersReceived,
    offHeadersReceived: offHeadersReceived,
    onProgressUpdate: onProgressUpdate,
    offProgressUpdate: offProgressUpdate
  };
};
/**
 * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读相关说明。
 * 注意：请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
 * @todo 未挂载 task.offHeadersReceived
 * @todo 未挂载 task.offProgressUpdate
 * @param {Object} object 参数
 * @param {string} object.url 下载资源的 url
 * @param {Object} [object.header] HTTP 请求的 Header，Header 中不能设置 Referer
 * @param {string} [object.filePath] *指定文件下载后存储的路径
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 * @returns {DownloadTask}
 */


var downloadFile = function downloadFile(_ref2) {
  var url = _ref2.url,
      header = _ref2.header,
      _success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;
  var task;
  var promise = new Promise(function (resolve, reject) {
    task = createDownloadTask({
      url: url,
      header: header,
      success: function success(res) {
        _success && _success(res);
        complete && complete();
        resolve(res);
      },
      error: function error(res) {
        fail && fail(res);
        complete && complete();
        reject(res);
      }
    });
  });
  promise.headersReceive = task.onHeadersReceived;
  promise.progress = task.onProgressUpdate;
  promise.abort = task.abort;
  return promise;
};

var createUploadTask = function createUploadTask(_ref) {
  var url = _ref.url,
      filePath = _ref.filePath,
      fileName = _ref.fileName,
      formData = _ref.formData,
      name = _ref.name,
      header = _ref.header,
      success = _ref.success,
      error = _ref.error;
  var timeout;
  var formKey;
  var apiName = 'uploadFile';
  var xhr = new XMLHttpRequest();
  var form = new FormData();
  var callbackManager = {
    headersReceived: createCallbackManager(),
    progressUpdate: createCallbackManager()
  };
  xhr.open('POST', url);
  setHeader(xhr, header);

  for (formKey in formData) {
    form.append(formKey, formData[formKey]);
  }

  xhr.upload.onprogress = function (e) {
    var loaded = e.loaded,
        total = e.total;
    callbackManager.progressUpdate.trigger({
      progress: Math.round(loaded / total * 100),
      totalBytesSent: loaded,
      totalBytesExpectedToSent: total
    });
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XHR_STATS.HEADERS_RECEIVED) return;
    callbackManager.headersReceived.trigger({
      header: xhr.getAllResponseHeaders()
    });
  };

  xhr.onload = function () {
    var status = xhr.status;
    success({
      errMsg: "".concat(apiName, ":ok"),
      statusCode: status,
      data: xhr.responseText || xhr.response
    });
  };

  xhr.onabort = function () {
    clearTimeout(timeout);
    error({
      errMsg: "".concat(apiName, ":fail abort")
    });
  };

  xhr.onerror = function (e) {
    error({
      errMsg: "".concat(apiName, ":fail ").concat(e.message)
    });
  };

  var send = function send() {
    xhr.send(form);
    timeout = setTimeout(function () {
      xhr.onabort = null;
      xhr.onload = null;
      xhr.upload.onprogress = null;
      xhr.onreadystatechange = null;
      xhr.onerror = null;
      abort();
      error({
        errMsg: "".concat(apiName, ":fail timeout")
      });
    }, NETWORK_TIMEOUT);
  };

  convertObjectUrlToBlob(filePath).then(function (fileObj) {
    form.append(name, fileObj, fileName || fileObj.name || "file-".concat(Date.now()));
    send();
  })["catch"](function (e) {
    error({
      errMsg: "".concat(apiName, ":fail ").concat(e.message)
    });
  });
  /**
   * 中断任务
   */

  var abort = function abort() {
    xhr.abort();
  };
  /**
   * 监听 HTTP Response Header 事件。会比请求完成事件更早
   * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
   */


  var onHeadersReceived = callbackManager.headersReceived.add;
  /**
   * 取消监听 HTTP Response Header 事件
   * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
   */

  var offHeadersReceived = callbackManager.headersReceived.remove;
  /**
   * 监听进度变化事件
   * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
   */

  var onProgressUpdate = callbackManager.progressUpdate.add;
  /**
   * 取消监听进度变化事件
   * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
   */

  var offProgressUpdate = callbackManager.progressUpdate.remove;
  return {
    abort: abort,
    onHeadersReceived: onHeadersReceived,
    offHeadersReceived: offHeadersReceived,
    onProgressUpdate: onProgressUpdate,
    offProgressUpdate: offProgressUpdate
  };
};
/**
 * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
 * @param {Object} object 参数
 * @param {string} object.url 开发者服务器地址
 * @param {string} object.filePath 要上传文件资源的路径
 * @param {string} object.name 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
 * @param {string} [object.fileName] （仅H5）上传的文件名
 * @param {Object} [object.header] HTTP 请求 Header，Header 中不能设置 Referer
 * @param {Object} [object.formData] HTTP 请求中其他额外的 form data
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 * @returns {UploadTask}
 */


var uploadFile = function uploadFile(_ref2) {
  var url = _ref2.url,
      filePath = _ref2.filePath,
      fileName = _ref2.fileName,
      name = _ref2.name,
      header = _ref2.header,
      formData = _ref2.formData,
      _success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;
  var task;
  var promise = new Promise(function (resolve, reject) {
    task = createUploadTask({
      url: url,
      header: header,
      name: name,
      filePath: filePath,
      formData: formData,
      fileName: fileName,
      success: function success(res) {
        _success && _success(res);
        complete && complete();
        resolve(res);
      },
      error: function error(res) {
        fail && fail(res);
        complete && complete();
        reject(res);
      }
    });
  });
  promise.headersReceive = task.onHeadersReceived;
  promise.progress = task.onProgressUpdate;
  promise.abort = task.abort;
  return promise;
};

/**
 * 从本地相册选择图片或使用相机拍照。
 * @param {Object} object 参数
 * @param {string[]} [object.sourceType=['album', 'camera']] 选择图片的来源，h5允许传入 `user/environment/camera/`
 * @param {string[]} [object.sizeType=['original', 'compressed']] 所选的图片的尺寸（h5端未实现）
 * @param {number} [object.count=9] 最多可以选择的图片张数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 * @param {string} [object.imageId] 用来上传的input元素ID（仅h5端）
 */

var chooseImage = function chooseImage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "chooseImage".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var _options$count = options.count,
      count = _options$count === void 0 ? 1 : _options$count,
      success = options.success,
      fail = options.fail,
      complete = options.complete,
      _options$imageId = options.imageId,
      imageId = _options$imageId === void 0 ? 'taroChooseImage' : _options$imageId,
      _options$sourceType = options.sourceType,
      sourceType = _options$sourceType === void 0 ? ['album', 'camera'] : _options$sourceType;
  var res = {
    errMsg: 'chooseImage:ok',
    tempFilePaths: [],
    tempFiles: []
  };

  if (count && typeof count !== 'number') {
    res.errMsg = getParameterError({
      name: 'chooseImage',
      para: 'count',
      correct: 'Number',
      wrong: count
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  var taroChooseImageId = document.getElementById(imageId);

  if (!taroChooseImageId) {
    var obj = document.createElement('input');
    var sourceTypeString = sourceType && sourceType.toString();
    var acceptableSourceType = ['user', 'environment', 'camera'];
    obj.setAttribute('type', 'file');
    obj.setAttribute('id', imageId);

    if (count > 1) {
      obj.setAttribute('multiple', 'multiple');
    }

    if (acceptableSourceType.indexOf(sourceTypeString) > -1) {
      obj.setAttribute('capture', sourceTypeString);
    }

    obj.setAttribute('accept', 'image/*');
    obj.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;');
    document.body.appendChild(obj);
    taroChooseImageId = document.getElementById(imageId);
  }

  var taroChooseImageCallback;
  var taroChooseImagePromise = new Promise(function (resolve) {
    taroChooseImageCallback = resolve;
  });
  var TaroMouseEvents = document.createEvent('MouseEvents');
  TaroMouseEvents.initEvent('click', true, true);
  taroChooseImageId.dispatchEvent(TaroMouseEvents);

  taroChooseImageId.onchange = function (e) {
    var arr = _toConsumableArray(e.target.files);

    arr && arr.forEach(function (item) {
      var blob = new Blob([item], {
        type: item.type
      });
      var url = URL.createObjectURL(blob);
      res.tempFilePaths.push(url);
      res.tempFiles.push({
        path: url,
        size: item.size,
        type: item.type,
        originalFileObj: item
      });
    });
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    taroChooseImageCallback(res);
    e.target.value = '';
  };

  return taroChooseImagePromise;
};

// const ORIENTATION_MAP = {
//   // up 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
//   1: 'up',
//   // up-mirrored 同 up，但镜像翻转，对应 Exif 中的 2
//   2: 'up-mirrored',
//   // down 旋转180度，对应 Exif 中的 3
//   3: 'down',
//   // down-mirrored 同 down，但镜像翻转，对应 Exif 中的 4
//   4: 'down-mirrored',
//   // left-mirrored 同 left，但镜像翻转，对应 Exif 中的 5
//   5: 'left-mirrored',
//   // right 顺时针旋转90度，对应 Exif 中的 6
//   6: 'right',
//   // right-mirrored 同 right，但镜像翻转，对应 Exif 中的 7
//   7: 'right-mirrored',
//   // left 逆时针旋转90度，对应 Exif 中的 8
//   8: 'left'
// }

/**
 * @typedef {'up'|'up-mirrored'|'down'|'down-mirrored'|'left-mirrored'|'right'|'right-mirrored'|'left'} Orientation
 * @typedef ImageInfo object.success 回调函数的参数
 * @property {number} width 图片原始宽度，单位px。不考虑旋转。
 * @property {number} height 图片原始高度，单位px。不考虑旋转。
 * @property {string} path 图片的本地路径
 * @property {Orientation} orientation 拍照时设备方向
 * @property {string} type 图片格式
 */

/**
 * 获取图片信息。网络图片需先配置download域名才能生效。
 * @param {Object} object 参数
 * @param {string} object.src 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
 * @param {(res: ImageInfo) => void} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */
var getImageInfo = function getImageInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      src = _ref.src,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  return new Promise(function (resolve, reject) {
    var onSuccess = function onSuccess(res) {
      success && success(res);
      complete && complete();
      resolve(res);
    };

    var onError = function onError(res) {
      fail && fail(res);
      complete && complete();
      reject(res);
    };

    var image = new Image();

    image.onload = function () {
      onSuccess({
        errMsg: 'getImageInfo:ok',
        width: image.naturalWidth,
        height: image.naturalHeight
      });
    };

    image.onerror = function (e) {
      onError({
        errMsg: "getImageInfo:fail ".concat(e.message)
      });
    };

    image.src = src;
  });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };

    hrtime = process.hrtime;

    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };

    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
}).call(commonjsGlobal);
});

var root$1 = typeof window === 'undefined' ? commonjsGlobal : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root$1['request' + suffix],
    caf = root$1['cancel' + suffix] || root$1['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root$1[vendors[i] + 'Request' + suffix];
  caf = root$1[vendors[i] + 'Cancel' + suffix] || root$1[vendors[i] + 'CancelRequest' + suffix];
} // Some versions of FF have rAF but not cAF


if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = performanceNow(),
          next = Math.max(0, frameDuration - (_now - last));

      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0); // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue

        queue.length = 0;

        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }

    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root$1, fn);
};

var cancel = function () {
  caf.apply(root$1, arguments);
};

var polyfill = function (object) {
  if (!object) {
    object = root$1;
  }

  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var Loading = function Loading(props) {
  return Nerv__default.createElement("div", {
    className: "viewer-image-loading"
  });
};

/**
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * _c: final value (最后值)
 * d: duration（持续时间）。
 */

var easeOutQuart = function easeOutQuart(t, b, _c, d) {
  var c = _c - b;
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */


function setScope(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function getDistanceBetweenTouches(e) {
  if (e.touches.length < 2) return 1;
  var x1 = e.touches[0].clientX;
  var y1 = e.touches[0].clientY;
  var x2 = e.touches[1].clientX;
  var y2 = e.touches[1].clientY;
  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
} // const msPerFrame = 1000 / 60;


var maxAnimateTime = 1000;
var minTapMoveValue = 5;
var maxTapTimeValue = 300;
/**
 * 图片默认展示模式：宽度等于屏幕宽度，高度等比缩放；水平居中，垂直居中或者居顶（当高度大于屏幕高度时）
 * 图片实际尺寸： actualWith, actualHeight
 * 图片初始尺寸： originWidth, originHeight
 * 坐标位置：left, top
 * 放大倍数：zoom
 * 最大放大倍数：maxZoomNum
 * 坐标关系：-(maxZoomNum - 1) * originWidth / 2 < left < 0
 *         -(maxZoomNum - 1) * originHeight / 2 < top < 0
 * 尺寸关系：width = zoom * originWidth
 *         heigth = zoom * originHeight
 *
 * 放大点位置关系：
 * 初始点位置：oldPointLeft, oldPointTop
 * 放大后位置：newPointLeft, newPointTop
 * 对应关系： newPointLeft = zoom * oldPointLeft
 *          newPointTop = zoom * oldPointTop
 *
 * 坐标位置：-1*left = -1*startLeft + (newPointLeft - oldPointLeft) =-1*startLeft (zoom - 1) * oldPointLeft
 *         -1*top = -1*startTop + (newPointTop - oldPointTop) =-1*startLeft (zoom - 1) * oldPointTop
 * =>
 * left = startLeft + (1 - zoom) * oldPointLeft
 * top = startTop + (1 - zoom) * oldPointTop
 */

var ImageContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ImageContainer, _PureComponent);

  function ImageContainer(_props, context) {
    var _this;

    _classCallCheck(this, ImageContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageContainer).call(this, _props, context));

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: 0,
      height: 0,
      scale: 1,
      left: 0,
      top: 0,
      isLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "onLoad", function () {
      _this.actualWith = _this.img.width;
      _this.actualHeight = _this.img.height;
      var _this$props = _this.props,
          screenHeight = _this$props.screenHeight,
          screenWidth = _this$props.screenWidth;
      var left = 0;
      var top = 0;
      _this.originWidth = screenWidth;
      _this.originHeight = _this.actualHeight / _this.actualWith * screenWidth;
      _this.originScale = 1;

      if (_this.actualHeight / _this.actualWith < screenHeight / screenWidth) {
        top = parseInt((screenHeight - _this.originHeight) / 2, 10);
      }

      _this.originTop = top;

      _this.setState({
        width: _this.originWidth,
        height: _this.originHeight,
        scale: 1,
        left: left,
        top: top,
        isLoaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      _this.setState({
        isLoaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadImg", function (url) {
      _this.img = new Image();
      _this.img.src = url;
      _this.img.onload = _this.onLoad;
      _this.img.onerror = _this.onError;

      _this.setState({
        isLoaded: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unloadImg", function () {
      delete _this.img.onerror;
      delete _this.img.onload;
      delete _this.img.src;
      delete _this.img;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (event) {
      // console.info('handleTouchStart')
      // event.preventDefault();
      event.stopPropagation();

      if (_this.animationID) {
        raf_1.cancel(_this.animationID);
      }

      switch (event.touches.length) {
        case 1:
          {
            var targetEvent = event.touches[0];
            _this.startX = targetEvent.clientX;
            _this.startY = targetEvent.clientY;
            _this.diffX = 0;
            _this.diffY = 0;
            _this.startLeft = _this.state.left;
            _this.startTop = _this.state.top; // console.info('handleTouchStart this.startX = %s, this.startY = %s, this.startLeft = %s, this.startTop = %s', this.startX, this.startY, this.startLeft, this.startTop)

            _this.onTouchStartTime = new Date().getTime();
            _this.haveCallMoveFn = false;
            break;
          }

        case 2:
          {
            // 两个手指
            // 设置手双指模式
            _this.isTwoFingerMode = true; // 计算两个手指中间点屏幕上的坐标

            var middlePointClientLeft = Math.abs(Math.round((event.touches[0].clientX + event.touches[1].clientX) / 2));
            var middlePointClientTop = Math.abs(Math.round((event.touches[0].clientY + event.touches[1].clientY) / 2)); // 保存图片初始位置和尺寸

            _this.startLeft = _this.state.left;
            _this.startTop = _this.state.top;
            _this.startScale = _this.state.scale; // 计算手指中间点在图片上的位置（坐标值）

            _this.oldPointLeft = middlePointClientLeft - _this.startLeft;
            _this.oldPointTop = middlePointClientTop - _this.startTop;
            _this._touchZoomDistanceStart = getDistanceBetweenTouches(event);
            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (event) {
      event.preventDefault();
      event.stopPropagation();

      switch (event.touches.length) {
        case 1:
          {
            var targetEvent = event.touches[0];
            var diffX = targetEvent.clientX - _this.startX;
            var diffY = targetEvent.clientY - _this.startY;
            _this.diffX = diffX;
            _this.diffY = diffY; // console.info('handleTouchMove one diffX=%s, diffY=%s', diffX, diffY)
            // 判断是否为点击

            if (Math.abs(diffX) < minTapMoveValue && Math.abs(diffY) < minTapMoveValue) {
              return;
            }

            var scale = _this.state.scale;
            var width = scale * _this.originWidth;

            if (Math.abs(diffX) > Math.abs(diffY)) {
              // 水平移动
              if (_this.state.scale === _this.originScale && Math.abs(diffX) > minTapMoveValue) {
                _this.haveCallMoveFn = true;

                _this.callHandleMove(diffX);

                return;
              } // console.info('handleMove one left=%s, this.startLeft=%s,this.originWidth=%s, width=%s', left, this.startLeft, this.originWidth, width)


              if (diffX < 0 && _this.startLeft <= _this.originWidth - width) {
                _this.haveCallMoveFn = true;

                _this.callHandleMove(diffX);

                return;
              }

              if (diffX > 0 && _this.startLeft >= 0) {
                _this.haveCallMoveFn = true;

                _this.callHandleMove(diffX);

                return;
              }
            }

            var screenHeight = _this.props.screenHeight;
            var height = scale * _this.originHeight;
            var newTop = (screenHeight - height) / 2;
            var newLeft = _this.startLeft + diffX;

            if (height > screenHeight || _this.state.scale === _this.originScale) {
              newTop = _this.startTop + diffY;
            } // console.info('handleTouchMove one newLeft=%s, newTop=%s', newLeft, newTop)


            _this.setState({
              left: newLeft,
              top: newTop
            });

            break;
          }

        case 2:
          {
            // 两个手指
            _this._touchZoomDistanceEnd = getDistanceBetweenTouches(event);
            var zoom = Math.sqrt(_this._touchZoomDistanceEnd / _this._touchZoomDistanceStart);

            var _scale = zoom * _this.startScale;

            var left = _this.startLeft + (1 - zoom) * _this.oldPointLeft;
            var top = _this.startTop + (1 - zoom) * _this.oldPointTop;

            _this.setState({
              left: left,
              top: top,
              scale: _scale
            });

            break;
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function (event) {
      // console.info('handleTouchEnd', event.touches.length)
      event.preventDefault();

      if (_this.isTwoFingerMode) {
        // 双指操作结束
        var touchLen = event.touches.length;
        _this.isTwoFingerMode = false;

        if (touchLen === 1) {
          var targetEvent = event.touches[0];
          _this.startX = targetEvent.clientX;
          _this.startY = targetEvent.clientY;
          _this.diffX = 0;
          _this.diffY = 0;
        }

        _this.setState(function (prevState, props) {
          var scale = setScope(prevState.scale, 1, props.maxZoomNum);
          var width = scale * _this.originWidth;
          var height = scale * _this.originHeight;
          var zoom = scale / _this.startScale;
          var left = setScope(_this.startLeft + (1 - zoom) * _this.oldPointLeft, _this.originWidth - width, 0);
          var top;

          if (height > props.screenHeight) {
            top = setScope(_this.startTop + (1 - zoom) * _this.oldPointTop, props.screenHeight - height, 0);
          } else {
            top = (props.screenHeight - height) / 2;
          }

          if (touchLen === 1) {
            _this.startLeft = left;
            _this.startTop = top;
            _this.startScale = scale; // console.info('this.startX = %s, this.startY = %s, this.startLeft = %s, this.startTop = %s', this.startX, this.startY, this.startLeft, this.startTop)
          } // console.info('zoom = %s, left = %s, top = %s, width=%s, height= %s', zoom, left, top, width, height)


          return {
            left: left,
            top: top,
            scale: scale
          };
        });
      } else {
        // 单指结束（ontouchend）
        var diffTime = new Date().getTime() - _this.onTouchStartTime;

        var _assertThisInitialize = _assertThisInitialized(_this),
            diffX = _assertThisInitialize.diffX,
            diffY = _assertThisInitialize.diffY; // console.info('handleTouchEnd one diffTime = %s, diffX = %s, diffy = %s', diffTime, diffX, diffY)
        // 判断为点击则关闭图片浏览组件


        if (diffTime < maxTapTimeValue && Math.abs(diffX) < minTapMoveValue && Math.abs(diffY) < minTapMoveValue) {
          setTimeout(_this.context.onClose, 300);
          return;
        } // 水平移动


        if (_this.haveCallMoveFn) {
          var isChangeImage = _this.callHandleEnd(diffY < 30);

          if (isChangeImage) {
            // 如果切换图片则重置当前图片状态
            setTimeout(function () {
              _this.setState({
                scale: _this.originScale,
                left: 0,
                top: _this.originTop
              });
            }, maxAnimateTime / 3);
            return;
          }
        } // TODO 下拉移动距离超过屏幕高度的 1/3 则关闭
        // console.info(Math.abs(diffY) > (this.props.screenHeight / 2), this.startTop, this.originTop);
        // if (Math.abs(diffX) < Math.abs(diffY) && Math.abs(diffY) > (this.props.screenHeight / 3) && this.startTop === this.originTop) {
        //   this.context.onClose();
        //   return;
        // }


        var x;
        var y;
        var scale = _this.state.scale; // const width = scale * this.originWidth;

        var height = scale * _this.originHeight; // 使用相同速度算法

        x = diffX * maxAnimateTime / diffTime + _this.startLeft;
        y = diffY * maxAnimateTime / diffTime + _this.startTop;

        if (_this.state.scale === _this.originScale) {
          x = 0;

          if (height > _this.props.screenHeight) {
            y = setScope(y, _this.props.screenHeight - height, 0);
          } else {
            y = _this.originTop;
          }
        } // x = setScope(x, this.originWidth - width, 0);
        // if (height > this.props.screenHeight) {
        // y = setScope(y, this.props.screenHeight - height, 0);
        // } else {
        //   y = this.state.top;
        // }


        _this.animateStartValue = {
          x: _this.state.left,
          y: _this.state.top
        };
        _this.animateFinalValue = {
          x: x,
          y: y
        };
        _this.animateStartTime = Date.now();

        _this.startAnimate();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "startAnimate", function () {
      _this.animationID = raf_1(function () {
        // calculate current time
        var curTime = Date.now() - _this.animateStartTime;

        var left;
        var top; // animate complete

        if (curTime > maxAnimateTime) {
          _this.setState(function (prevState, props) {
            var width = prevState.scale * _this.originWidth;
            var height = prevState.scale * _this.originHeight;
            left = setScope(prevState.left, _this.originWidth - width, 0);

            if (height > props.screenHeight) {
              top = setScope(prevState.top, props.screenHeight - height, 0);
            } else {
              top = (props.screenHeight - height) / 2;
            } // console.info('end animate left= %s, top = %s', left, top)


            return {
              left: left,
              top: top
            };
          });
        } else {
          left = easeOutQuart(curTime, _this.animateStartValue.x, _this.animateFinalValue.x, maxAnimateTime);
          top = easeOutQuart(curTime, _this.animateStartValue.y, _this.animateFinalValue.y, maxAnimateTime); // console.info('startAnimate left= %s, top = %s, curTime = %s', left, top, curTime)

          _this.setState({
            left: left,
            top: top
          });

          _this.startAnimate();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "callHandleMove", function (diffX) {
      if (!_this.isCalledHandleStart) {
        _this.isCalledHandleStart = true;

        if (_this.props.handleStart) {
          _this.props.handleStart();
        }
      }

      _this.props.handleMove(diffX);
    });

    _defineProperty(_assertThisInitialized(_this), "callHandleEnd", function (isAllowChange) {
      if (_this.isCalledHandleStart) {
        _this.isCalledHandleStart = false;

        if (_this.props.handleEnd) {
          return _this.props.handleEnd(isAllowChange);
        }
      }
    });

    _this.actualHeight = 0; // 图片实际高度

    _this.actualWith = 0; // 图片实际宽度

    _this.originHeight = 0; // 图片默认展示模式下高度

    _this.originWidth = 0; // 图片默认展示模式下宽度

    _this.originScale = 1; // 图片初始缩放比例

    _this.startLeft = 0; // 开始触摸操作时的 left 值

    _this.startTop = 0; // 开始触摸操作时的 top 值

    _this.startScale = 1; // 开始缩放操作时的 scale 值

    _this.onTouchStartTime = 0; // 单指触摸开始时间

    _this.isTwoFingerMode = false; // 是否为双指模式

    _this.oldPointLeft = 0; // 计算手指中间点在图片上的位置（坐标值）

    _this.oldPointTop = 0; // 计算手指中间点在图片上的位置（坐标值）

    _this._touchZoomDistanceStart = 0; // 用于记录双指距离

    _this.haveCallMoveFn = false;
    _this.diffX = 0; // 记录最后 move 事件 移动距离

    _this.diffY = 0; // 记录最后 move 事件 移动距离

    _this.animationID = 0;
    _this.animateStartTime = 0;
    _this.animateStartValue = {
      x: 0,
      y: 0
    };
    _this.animateFinalValue = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(ImageContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadImg(this.props.src);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unloadImg();

      if (this.animationID) {
        raf_1.cancel(this.animationID);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          screenWidth = _this$props2.screenWidth,
          screenHeight = _this$props2.screenHeight,
          src = _this$props2.src,
          divLeft = _this$props2.left;
      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          left = _this$state.left,
          top = _this$state.top,
          scale = _this$state.scale,
          width = _this$state.width,
          height = _this$state.height;
      var ImageStyle = {
        width: width,
        height: height
      };
      var translate = "translate3d(".concat(left, "px, ").concat(top, "px, 0) scale(").concat(scale, ")");
      ImageStyle.WebkitTransform = translate;
      ImageStyle.transform = translate;
      var defaultStyle = {
        left: divLeft,
        width: screenWidth,
        height: screenHeight
      }; // console.info('ImageContainer render');

      return Nerv__default.createElement("div", {
        className: "viewer-image-container",
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        style: defaultStyle
      }, isLoaded ? Nerv__default.createElement("img", {
        src: src,
        style: ImageStyle,
        alt: ""
      }) : Nerv__default.createElement(Loading, null));
    }
  }]);

  return ImageContainer;
}(Nerv.PureComponent);

_defineProperty(ImageContainer, "propTypes", {
  maxZoomNum: Nerv.PropTypes.number.isRequired,
  handleStart: Nerv.PropTypes.func.isRequired,
  handleMove: Nerv.PropTypes.func.isRequired,
  handleEnd: Nerv.PropTypes.func.isRequired
});

_defineProperty(ImageContainer, "contextTypes", {
  onClose: Nerv.PropTypes.func
});

var DEFAULT_TIME_DIFF = 200;

var ListContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ListContainer, _PureComponent);

  function ListContainer(props, context) {
    var _this;

    _classCallCheck(this, ListContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListContainer).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "state", {
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "easing", function (distance) {
      var t = distance;
      var b = 0;
      var d = _this.props.screenWidth; // 允许拖拽的最大距离

      var c = d / 2.5; // 提示标签最大有效拖拽距离

      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      _this.startLeft = _this.state.left;
      _this.startTime = new Date().getTime();
      _this.isNeedSpring = false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMove", function (diffX) {
      var nDiffx = diffX; // 限制最大 diffx 值

      if (Math.abs(nDiffx) > _this.props.screenWidth) {
        if (nDiffx < 0) {
          nDiffx = -_this.props.screenWidth;
        }

        if (nDiffx > 0) {
          nDiffx = _this.props.screenWidth;
        }
      }

      if (_this.state.left >= 0 && nDiffx > 0) {
        nDiffx = _this.easing(nDiffx);
      } else if (_this.state.left <= -_this.maxLeft && nDiffx < 0) {
        nDiffx = -_this.easing(-nDiffx);
      }

      _this.setState({
        left: _this.startLeft + nDiffx
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function (isAllowChange) {
      var index;

      var diffTime = new Date().getTime() - _this.startTime; // console.info('handleEnd %s', isAllowChange, diffTime, this.state.left, this.startLeft, this.props.index)
      // 快速拖动情况下切换图片


      if (isAllowChange && diffTime < DEFAULT_TIME_DIFF) {
        if (_this.state.left < _this.startLeft) {
          index = _this.props.index + 1;
        } else {
          index = _this.props.index - 1;
        }
      } else {
        index = Math.abs(Math.round(_this.state.left / _this.perDistance));
      } // 处理边界情况


      if (index < 0) {
        index = 0;
      } else if (index > _this.length - 1) {
        index = _this.length - 1;
      }

      _this.setState({
        left: -_this.perDistance * index
      });

      _this.isNeedSpring = true;

      if (index !== _this.props.index) {
        _this.props.changeIndex(index);

        return true;
      }

      return false;
    });

    _this.isNeedSpring = false;
    return _this;
  }

  _createClass(ListContainer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return _objectSpread2({}, this.context);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          screenWidth = _this$props.screenWidth,
          urls = _this$props.urls,
          index = _this$props.index,
          gap = _this$props.gap;
      this.length = urls.length;
      this.perDistance = screenWidth + gap;
      this.maxLeft = this.perDistance * (this.length - 1);
      this.isNeedSpring = false;
      this.setState({
        left: -this.perDistance * index
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.index !== nextProps.index) {
        this.isNeedSpring = true;
        this.setState({
          left: -this.perDistance * nextProps.index
        });
      }
    }
    /**
     * 拖拽的缓动公式 - easeOutSine
     * Link http://easings.net/zh-cn#
     * t: current time（当前时间）；
     * b: beginning value（初始值）；
     * c: change in value（变化量）；
     * d: duration（持续时间）。
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          maxZoomNum = _this$props2.maxZoomNum,
          screenWidth = _this$props2.screenWidth,
          screenHeight = _this$props2.screenHeight,
          urls = _this$props2.urls,
          speed = _this$props2.speed;
      var left = this.state.left;
      var defaultStyle = {};

      if (this.isNeedSpring) {
        var duration = "".concat(speed, "ms");
        defaultStyle.WebkitTransitionDuration = duration;
        defaultStyle.transitionDuration = duration;
      }

      var translate = "translate3d(".concat(left, "px, 0, 0)");
      defaultStyle.WebkitTransform = translate;
      defaultStyle.transform = translate;
      return Nerv__default.createElement("div", {
        className: "viewer-list-container",
        style: defaultStyle
      }, urls.map(function (item, i) {
        return Nerv__default.createElement(ImageContainer, {
          key: i // eslint-disable-line
          ,
          src: item,
          maxZoomNum: maxZoomNum,
          handleStart: _this2.handleStart,
          handleMove: _this2.handleMove,
          handleEnd: _this2.handleEnd,
          left: _this2.perDistance * i,
          screenWidth: screenWidth,
          screenHeight: screenHeight
        });
      }));
    }
  }]);

  return ListContainer;
}(Nerv.PureComponent);

_defineProperty(ListContainer, "propTypes", {
  maxZoomNum: Nerv.PropTypes.number.isRequired,
  changeIndex: Nerv.PropTypes.func.isRequired,
  gap: Nerv.PropTypes.number.isRequired,
  speed: Nerv.PropTypes.number.isRequired // Duration of transition between slides (in ms)

});

var screenWidth = typeof document !== 'undefined' && document.documentElement.clientWidth;
var screenHeight = typeof document !== 'undefined' && document.documentElement.clientHeight;

var WrapViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(WrapViewer, _Component);

  function WrapViewer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WrapViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WrapViewer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      index: 0
    });

    _defineProperty(_assertThisInitialized(_this), "changeIndex", function (index) {
      // console.info('changeIndex index = ', index)
      _this.setState({
        index: index
      });
    });

    return _this;
  }

  _createClass(WrapViewer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return _objectSpread2({}, this.context);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var index = this.props.index;
      this.setState({
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          zIndex = _this$props.zIndex,
          urls = _this$props.urls,
          maxZoomNum = _this$props.maxZoomNum,
          gap = _this$props.gap,
          speed = _this$props.speed;
      var index = this.state.index;
      return Nerv__default.createElement("div", {
        className: "wx-image-viewer",
        style: {
          zIndex: zIndex
        }
      }, Nerv__default.createElement("div", {
        className: "viewer-cover"
      }), Nerv__default.createElement(ListContainer, {
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        changeIndex: this.changeIndex,
        urls: urls,
        maxZoomNum: maxZoomNum,
        gap: gap,
        speed: speed,
        index: index
      }));
    }
  }]);

  return WrapViewer;
}(Nerv.Component);

_defineProperty(WrapViewer, "propTypes", {
  index: Nerv.PropTypes.number.isRequired,
  // 当前显示图片的http链接
  urls: Nerv.PropTypes.array.isRequired,
  // 需要预览的图片http链接列表
  maxZoomNum: Nerv.PropTypes.number.isRequired,
  // 最大放大倍数
  zIndex: Nerv.PropTypes.number.isRequired,
  // 组件图层深度
  gap: Nerv.PropTypes.number.isRequired,
  // 间隙
  speed: Nerv.PropTypes.number.isRequired // Duration of transition between slides (in ms)

});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".wx-image-viewer {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  -ms-touch-action: none;\n  /* touch-action: pan-y pinch-zoom; */\n}\n.wx-image-viewer .viewer-cover {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n}\n.wx-image-viewer .viewer-list-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform,-webkit-transform;\n}\n.wx-image-viewer .viewer-image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.wx-image-viewer .viewer-image-container img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform-origin: left top;\n  -webkit-transform-origin: left top;\n  -moz-transform-origin: left top;\n  -o-transform-origin: left top;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform,-webkit-transform;\n}\n.wx-image-viewer .viewer-image-pointer {\n  position: fixed;\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.wx-image-viewer .viewer-image-pointer .pointer {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  margin: 0 5px;\n  border-radius: 100%;\n  background-color: #333;\n}\n.wx-image-viewer .viewer-image-pointer .pointer.on {\n  background-color: #fff;\n}\n.wx-image-viewer .viewer-image-loading {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n  height: 32px;\n  box-sizing: border-box;\n  border-radius: 100%;\n  border-width: 4px;\n  border-style: solid;\n  border-color: #333;\n  border-bottom-color: #FFF;\n  -webkit-animation: roll 1s linear infinite;\n  animation: roll 1s linear infinite;\n}\n@-webkit-keyframes roll {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n";
styleInject(css);

var WxImageViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(WxImageViewer, _Component);

  function WxImageViewer() {
    _classCallCheck(this, WxImageViewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WxImageViewer).apply(this, arguments));
  }

  _createClass(WxImageViewer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onClose: this.props.onClose
      };
    }
  }, {
    key: "render",
    value: function render() {
      return Nerv__default.createPortal(Nerv__default.createElement(WrapViewer, this.props), document.body);
    }
  }]);

  return WxImageViewer;
}(Nerv.Component);

_defineProperty(WxImageViewer, "propTypes", {
  maxZoomNum: Nerv.PropTypes.number,
  // 最大放大倍数
  zIndex: Nerv.PropTypes.number,
  // 组件图层深度
  index: Nerv.PropTypes.number,
  // 当前显示图片的http链接
  urls: Nerv.PropTypes.array.isRequired,
  // 需要预览的图片http链接列表
  gap: Nerv.PropTypes.number,
  // 间隙
  speed: Nerv.PropTypes.number,
  // Duration of transition between slides (in ms)
  onClose: Nerv.PropTypes.func.isRequired // 关闭组件回调

});

_defineProperty(WxImageViewer, "childContextTypes", {
  onClose: Nerv.PropTypes.func
});

_defineProperty(WxImageViewer, "defaultProps", {
  maxZoomNum: 4,
  zIndex: 510,
  index: 0,
  gap: 10,
  speed: 300
});

/**
 * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
 * @param {Object} object
 * @param {Array.<string>} object.urls 需要预览的图片链接列表。2.2.3 起支持云文件ID。
 * @param {string} [object.current=object.urls[0]]  urls的第一张 当前显示图片的链接
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var previewImage = function previewImage() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      urls = _ref.urls,
      current = _ref.current,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  var div = document.createElement('div');
  var currentIndex = urls.reduce(function (prev, curr, index) {
    return curr === current ? index : prev;
  }, -1);

  var onSuccess = function onSuccess(res) {
    success && success(res);
    complete && complete();
  };

  var props = {
    urls: urls,
    onClose: function onClose() {
      Nerv.unmountComponentAtNode(div);
    }
  };

  if (currentIndex > -1) {
    props.index = currentIndex;
  }

  Nerv__default.render(Nerv__default.createElement(WxImageViewer, props), div);
  return onSuccess({
    errMsg: 'previewImage:ok'
  });
};

var noop = function noop() {};

var Toast =
/*#__PURE__*/
function () {
  function Toast() {
    _classCallCheck(this, Toast);

    _defineProperty(this, "options", {
      title: '',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: noop,
      fail: noop,
      complete: noop
    });

    _defineProperty(this, "style", {
      maskStyle: {
        'position': 'fixed',
        'z-index': '1000',
        'top': '0',
        'right': '0',
        'left': '0',
        'bottom': '0'
      },
      toastStyle: {
        'z-index': '5000',
        'box-sizing': 'border-box',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        '-webkit-justify-content': 'center',
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'min-width': '120px',
        'max-width': '200px',
        'min-height': '120px',
        'padding': '15px',
        'transform': 'translate(-50%, -50%)',
        'border-radius': '5px',
        'text-align': 'center',
        'line-height': '1.6',
        'color': '#FFFFFF',
        'background': 'rgba(17, 17, 17, 0.7)'
      },
      successStyle: {
        'margin': '0',
        'vertical-align': 'middle',
        'font-family': 'taro',
        '-webkit-font-smoothing': 'antialiased',
        'color': '#FFFFFF',
        'font-size': '55px',
        'line-height': '1'
      },
      loadingStyle: {
        'margin': '6px auto',
        'width': '38px',
        'height': '38px',
        '-webkit-animation': 'taroLoading 1s steps(12, end) infinite',
        'animation': 'taroLoading 1s steps(12, end) infinite',
        'background': 'transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat',
        'background-size': '100%'
      },
      imageStyle: {
        'margin': '6px auto',
        'width': '40px',
        'height': '40px',
        'background': 'transparent no-repeat',
        'background-size': '100%'
      },
      textStyle: {
        'margin': '0',
        'font-size': '16px'
      }
    });
  }

  _createClass(Toast, [{
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // style
      var _this$style = this.style,
          maskStyle = _this$style.maskStyle,
          toastStyle = _this$style.toastStyle,
          successStyle = _this$style.successStyle,
          loadingStyle = _this$style.loadingStyle,
          imageStyle = _this$style.imageStyle,
          textStyle = _this$style.textStyle; // configuration

      var config = _objectSpread2({}, this.options, {}, options); // wrapper


      this.el = document.createElement('div');
      this.el.className = 'taro__toast';
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.1s linear'; // mask

      this.mask = document.createElement('div');
      this.mask.setAttribute('style', inlineStyle(maskStyle));
      this.mask.style.display = config.mask ? 'block' : 'none'; // icon

      this.icon = document.createElement('p');

      if (config.image) {
        this.icon.setAttribute('style', inlineStyle(_objectSpread2({}, imageStyle, {
          'background-image': "url(".concat(config.image, ")")
        })));
      } else {
        var iconStyle = config.icon === 'loading' ? loadingStyle : successStyle;
        this.icon.setAttribute('style', inlineStyle(_objectSpread2({}, iconStyle, {}, config.icon === 'none' ? {
          'display': 'none'
        } : {})));
        if (config.icon !== 'loading') this.icon.textContent = '';
      } // toast


      this.toast = document.createElement('div');
      this.toast.setAttribute('style', inlineStyle(_objectSpread2({}, toastStyle, {}, config.icon === 'none' ? {
        'min-height': '0',
        'padding': '10px 15px'
      } : {}))); // title

      this.title = document.createElement('p');
      this.title.setAttribute('style', inlineStyle(textStyle));
      this.title.textContent = config.title; // result

      this.toast.appendChild(this.icon);
      this.toast.appendChild(this.title);
      this.el.appendChild(this.mask);
      this.el.appendChild(this.toast); // show immediately

      document.body.appendChild(this.el); // set body position fixed style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this.el.style.opacity = '1';
      }, 0);
      this.type = config._type; // disappear after duration

      config.duration >= 0 && this.hide(config.duration, this.type);
      var errMsg = this.type === 'loading' ? 'showLoading:ok' : 'showToast:ok';
      config.success && config.success({
        errMsg: errMsg
      });
      config.complete && config.complete({
        errMsg: errMsg
      });
      return Promise.resolve({
        errMsg: errMsg
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var config = _objectSpread2({}, this.options, {}, options);

      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer); // title

      this.title.textContent = config.title || ''; // mask

      this.mask.style.display = config.mask ? 'block' : 'none'; // image

      var _this$style2 = this.style,
          toastStyle = _this$style2.toastStyle,
          successStyle = _this$style2.successStyle,
          loadingStyle = _this$style2.loadingStyle,
          imageStyle = _this$style2.imageStyle;

      if (config.image) {
        this.icon.setAttribute('style', inlineStyle(_objectSpread2({}, imageStyle, {
          'background-image': "url(".concat(config.image, ")")
        })));
        this.icon.textContent = '';
      } else {
        if (!config.image && config.icon) {
          var iconStyle = config.icon === 'loading' ? loadingStyle : successStyle;
          this.icon.setAttribute('style', inlineStyle(_objectSpread2({}, iconStyle, {}, config.icon === 'none' ? {
            'display': 'none'
          } : {})));
          this.icon.textContent = config.icon === 'loading' ? '' : '';
        }
      } // toast


      this.toast.setAttribute('style', inlineStyle(_objectSpread2({}, toastStyle, {}, config.icon === 'none' ? {
        'min-height': '0',
        'padding': '10px 15px'
      } : {}))); // show

      this.el.style.display = 'block'; // set body position fixed style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this2.el.style.opacity = '1';
      }, 0);
      this.type = config._type; // disappear after duration

      config.duration >= 0 && this.hide(config.duration, this.type);
      var errMsg = this.type === 'loading' ? 'showLoading:ok' : 'showToast:ok';
      config.success && config.success({
        errMsg: errMsg
      });
      config.complete && config.complete({
        errMsg: errMsg
      });
      return Promise.resolve({
        errMsg: errMsg
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var type = arguments.length > 1 ? arguments[1] : undefined;
      if (this.type !== type) return;
      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer);
      this.hideOpacityTimer = setTimeout(function () {
        _this3.el.style.opacity = '0'; // reset body style as default

        interactiveHelper().handleBeforeDestroy();
        _this3.hideDisplayTimer = setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 100);
      }, duration);
    }
  }]);

  return Toast;
}();

var noop$1 = function noop() {};

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);

    _defineProperty(this, "options", {
      title: '',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: noop$1,
      fail: noop$1,
      complete: noop$1
    });

    _defineProperty(this, "style", {
      maskStyle: {
        'position': 'fixed',
        'z-index': '1000',
        'top': '0',
        'right': '0',
        'left': '0',
        'bottom': '0',
        'background': 'rgba(0,0,0,0.6)'
      },
      modalStyle: {
        'z-index': '4999',
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'width': '80%',
        'max-width': '300px',
        'border-radius': '3px',
        'text-align': 'center',
        'line-height': '1.6',
        'overflow': 'hidden',
        'background': '#FFFFFF'
      },
      titleStyle: {
        'padding': '20px 24px 9px',
        'font-size': '18px'
      },
      textStyle: {
        'padding': '0 24px 12px',
        'min-height': '40px',
        'font-size': '15px',
        'line-height': '1.3',
        'color': '#808080',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'space-around'
      },
      footStyle: {
        'position': 'relative',
        'line-height': '48px',
        'font-size': '18px',
        'display': 'flex'
      },
      btnStyle: {
        'position': 'relative',
        '-webkit-box-flex': '1',
        '-webkit-flex': '1',
        'flex': '1'
      }
    });
  }

  _createClass(Modal, [{
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // style
      var _this$style = this.style,
          maskStyle = _this$style.maskStyle,
          modalStyle = _this$style.modalStyle,
          titleStyle = _this$style.titleStyle,
          textStyle = _this$style.textStyle,
          footStyle = _this$style.footStyle,
          btnStyle = _this$style.btnStyle; // configuration

      var config = _objectSpread2({}, this.options, {}, options); // wrapper


      this.el = document.createElement('div');
      this.el.className = 'taro__modal';
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.2s linear'; // mask

      var mask = document.createElement('div');
      mask.setAttribute('style', inlineStyle(maskStyle)); // modal

      var modal = document.createElement('div');
      modal.setAttribute('style', inlineStyle(modalStyle)); // title

      var titleCSS = config.title ? titleStyle : _objectSpread2({}, titleStyle, {
        display: 'none'
      });
      this.title = document.createElement('div');
      this.title.setAttribute('style', inlineStyle(titleCSS));
      this.title.textContent = config.title; // text

      var textCSS = config.title ? textStyle : _objectSpread2({}, textStyle, {
        padding: '40px 20px 26px',
        color: '#353535'
      });
      this.text = document.createElement('div');
      this.text.setAttribute('style', inlineStyle(textCSS));
      this.text.textContent = config.content; // foot

      var foot = document.createElement('div');
      foot.className = 'taro-modal__foot';
      foot.setAttribute('style', inlineStyle(footStyle)); // cancel button

      var cancelCSS = _objectSpread2({}, btnStyle, {
        color: config.cancelColor,
        display: config.showCancel ? 'block' : 'none'
      });

      this.cancel = document.createElement('div');
      this.cancel.className = 'taro-model__btn';
      this.cancel.setAttribute('style', inlineStyle(cancelCSS));
      this.cancel.textContent = config.cancelText;

      this.cancel.onclick = function () {
        _this.hide();

        var res = _this.getRes('cancel');

        config.success(res);
        config.complete(res);

        _this.resolveHandler(res);
      }; // confirm button


      this.confirm = document.createElement('div');
      this.confirm.className = 'taro-model__btn';
      this.confirm.setAttribute('style', inlineStyle(btnStyle));
      this.confirm.style.color = config.confirmColor;
      this.confirm.textContent = config.confirmText;

      this.confirm.onclick = function () {
        _this.hide();

        var res = _this.getRes('confirm');

        config.success(res);
        config.complete(res);

        _this.resolveHandler(res);
      }; // result


      foot.appendChild(this.cancel);
      foot.appendChild(this.confirm);
      modal.appendChild(this.title);
      modal.appendChild(this.text);
      modal.appendChild(foot);
      this.el.appendChild(mask);
      this.el.appendChild(modal); // show immediately

      document.body.appendChild(this.el); // set body fix style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this.el.style.opacity = '1';
      }, 0);
      return new Promise(function (resolve) {
        return _this.resolveHandler = resolve;
      });
    }
  }, {
    key: "getRes",
    value: function getRes(type) {
      var res = {
        errMsg: 'showModal:ok',
        cancel: false,
        confirm: false
      };
      res[type] = true;
      return res;
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var config = _objectSpread2({}, this.options, {}, options);

      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer); // title & text

      var textStyle = this.style.textStyle;

      if (config.title) {
        this.title.textContent = config.title; // none => block

        this.title.style.display = 'block';
        this.text.setAttribute('style', inlineStyle(textStyle));
      } else {
        // block => none
        this.title.style.display = 'none';

        var textCSS = _objectSpread2({}, textStyle, {
          padding: '40px 20px 26px',
          color: '#353535'
        });

        this.text.setAttribute('style', inlineStyle(textCSS));
      }

      this.text.textContent = config.content || ''; // showCancel

      this.cancel.style.display = config.showCancel ? 'block' : 'none'; // cancelText

      this.cancel.textContent = config.cancelText || ''; // cancelColor

      this.cancel.style.color = config.cancelColor || undefined; // confirmText

      this.confirm.textContent = config.confirmText || ''; // confirmColor

      this.confirm.style.color = config.confirmColor || undefined; // cbs

      this.cancel.onclick = function () {
        _this2.hide();

        var res = _this2.getRes('cancel');

        config.success(res);
        config.complete(res);

        _this2.resolveHandler(res);
      };

      this.confirm.onclick = function () {
        _this2.hide();

        var res = _this2.getRes('confirm');

        config.success(res);
        config.complete(res);

        _this2.resolveHandler(res);
      }; // show


      this.el.style.display = 'block'; // set body position fixed style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this2.el.style.opacity = '1';
      }, 0);
      return new Promise(function (resolve) {
        return _this2.resolveHandler = resolve;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer);
      this.hideOpacityTimer = setTimeout(function () {
        _this3.el.style.opacity = '0'; // reset body style as default

        interactiveHelper().handleBeforeDestroy();
        _this3.hideDisplayTimer = setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 200);
      }, 0);
    }
  }]);

  return Modal;
}();

var noop$2 = function noop() {};

var ActionSheet =
/*#__PURE__*/
function () {
  function ActionSheet() {
    _classCallCheck(this, ActionSheet);

    _defineProperty(this, "options", {
      itemList: [],
      itemColor: '#000000',
      success: noop$2,
      fail: noop$2,
      complete: noop$2
    });

    _defineProperty(this, "style", {
      maskStyle: {
        'position': 'fixed',
        'z-index': '1000',
        'top': '0',
        'right': '0',
        'left': '0',
        'bottom': '0',
        'background': 'rgba(0,0,0,0.6)'
      },
      actionSheetStyle: {
        'z-index': '4999',
        'position': 'fixed',
        'left': '0',
        'bottom': '0',
        '-webkit-transform': 'translate(0, 100%)',
        'transform': 'translate(0, 100%)',
        'width': '100%',
        'line-height': '1.6',
        'background': '#EFEFF4',
        '-webkit-transition': '-webkit-transform .3s',
        'transition': 'transform .3s'
      },
      menuStyle: {
        'background-color': '#FCFCFD'
      },
      cellStyle: {
        'position': 'relative',
        'padding': '10px 0',
        'text-align': 'center',
        'font-size': '18px'
      },
      cancelStyle: {
        'margin-top': '6px',
        'padding': '10px 0',
        'text-align': 'center',
        'font-size': '18px',
        'color': '#000000',
        'background-color': '#FCFCFD'
      }
    });

    _defineProperty(this, "lastConfig", {});
  }

  _createClass(ActionSheet, [{
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // style
      var _this$style = this.style,
          maskStyle = _this$style.maskStyle,
          actionSheetStyle = _this$style.actionSheetStyle,
          menuStyle = _this$style.menuStyle,
          cellStyle = _this$style.cellStyle,
          cancelStyle = _this$style.cancelStyle; // configuration

      var config = _objectSpread2({}, this.options, {}, options);

      this.lastConfig = config; // wrapper

      this.el = document.createElement('div');
      this.el.className = 'taro__actionSheet';
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.2s linear'; // mask

      var mask = document.createElement('div');
      mask.setAttribute('style', inlineStyle(maskStyle)); // actionSheet

      this.actionSheet = document.createElement('div');
      this.actionSheet.setAttribute('style', inlineStyle(actionSheetStyle)); // menu

      this.menu = document.createElement('div');
      this.menu.setAttribute('style', inlineStyle(_objectSpread2({}, menuStyle, {
        color: config.itemColor
      }))); // cells

      this.cells = config.itemList.map(function (item, index) {
        var cell = document.createElement('div');
        cell.className = 'taro-actionsheet__cell';
        cell.setAttribute('style', inlineStyle(cellStyle));
        cell.textContent = item;
        cell.dataset.tapIndex = index;

        cell.onclick = function (e) {
          return _this.onCellClick(e);
        };

        return cell;
      }); // cancel

      this.cancel = document.createElement('div');
      this.cancel.setAttribute('style', inlineStyle(cancelStyle));
      this.cancel.textContent = '取消'; // result

      this.cells.forEach(function (item) {
        return _this.menu.appendChild(item);
      });
      this.actionSheet.appendChild(this.menu);
      this.actionSheet.appendChild(this.cancel);
      this.el.appendChild(mask);
      this.el.appendChild(this.actionSheet); // callbacks

      var cb = function cb() {
        _this.hide();

        var res = {
          errMsg: 'showActionSheet:fail cancel'
        };
        config.fail(res);
        config.complete(res);

        _this.rejectHandler(res);
      };

      mask.onclick = cb;
      this.cancel.onclick = cb; // show immediately

      document.body.appendChild(this.el); // set body position fixed style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this.el.style.opacity = '1';
        setTransform(_this.actionSheet, 'translate(0, 0)');
      }, 0);
      return new Promise(function (resolve, reject) {
        _this.resolveHandler = resolve;
        _this.rejectHandler = reject;
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var config = _objectSpread2({}, this.options, {}, options);

      this.lastConfig = config;
      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer); // itemColor

      if (config.itemColor) this.menu.style.color = config.itemColor; // cells

      var cellStyle = this.style.cellStyle;
      config.itemList.forEach(function (item, index) {
        var cell;

        if (_this2.cells[index]) {
          // assign new content
          cell = _this2.cells[index];
        } else {
          // create new cell
          cell = document.createElement('div');
          cell.className = 'taro-actionsheet__cell';
          cell.setAttribute('style', inlineStyle(cellStyle));
          cell.dataset.tapIndex = index;

          _this2.cells.push(cell);

          _this2.menu.appendChild(cell);
        }

        cell.textContent = item;

        cell.onclick = function (e) {
          return _this2.onCellClick(e);
        };
      });
      var cellsLen = this.cells.length;
      var itemListLen = config.itemList.length;

      if (cellsLen > itemListLen) {
        for (var i = itemListLen; i < cellsLen; i++) {
          this.menu.removeChild(this.cells[i]);
        }

        this.cells.splice(itemListLen);
      } // show


      this.el.style.display = 'block'; // set body position fixed style

      interactiveHelper().handleAfterCreate();
      setTimeout(function () {
        _this2.el.style.opacity = '1';
        setTransform(_this2.actionSheet, 'translate(0, 0)');
      }, 0);
      return new Promise(function (resolve, reject) {
        _this2.resolveHandler = resolve;
        _this2.rejectHandler = reject;
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(e) {
      this.hide();
      console.log('click');
      var res = {
        errMsg: 'showActionSheet:ok',
        tapIndex: +e.currentTarget.dataset.tapIndex
      };
      this.lastConfig.success && this.lastConfig.success(res);
      this.lastConfig.complete && this.lastConfig.complete(res);
      this.resolveHandler(res);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      if (this.hideOpacityTimer) clearTimeout(this.hideOpacityTimer);
      if (this.hideDisplayTimer) clearTimeout(this.hideDisplayTimer);
      this.hideOpacityTimer = setTimeout(function () {
        _this3.el.style.opacity = '0'; // reset body style as default

        interactiveHelper().handleBeforeDestroy();
        setTransform(_this3.actionSheet, 'translate(0, 100%)');
        _this3.hideDisplayTimer = setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 200);
      }, 0);
    }
  }]);

  return ActionSheet;
}();

var status = 'default'; // inject necessary style

function init(doc) {
  if (status === 'ready') return;
  var taroStyle = doc.createElement('style');
  taroStyle.textContent = '@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJWs0t/AAABfAAAAFZjbWFwqVgGvgAAAeAAAAGGZ2x5Zph7qG0AAANwAAAAdGhlYWQRFoGhAAAA4AAAADZoaGVhCCsD7AAAALwAAAAkaG10eAg0AAAAAAHUAAAADGxvY2EADAA6AAADaAAAAAhtYXhwAQ4AJAAAARgAAAAgbmFtZYrphEEAAAPkAAACVXBvc3S3shtSAAAGPAAAADUAAQAAA+gAAABaA+gAAAAAA+gAAQAAAAAAAAAAAAAAAAAAAAMAAQAAAAEAAADih+FfDzz1AAsD6AAAAADXB57LAAAAANcHnssAAP/sA+gDOgAAAAgAAgAAAAAAAAABAAAAAwAYAAEAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQK8AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjqCAPoAAAAWgPoABQAAAABAAAAAAAAA+gAAABkAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAV4AAQAAAAAAWAADAAEAAAAsAAMACgAAAV4ABAAsAAAABgAEAAEAAgB46gj//wAAAHjqCP//AAAAAAABAAYABgAAAAEAAgAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAKAAAAAAAAAACAAAAeAAAAHgAAAABAADqCAAA6ggAAAACAAAAAAAAAAwAOgABAAD/7AAyABQAAgAANzMVFB4UKAAAAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAAAEgDeAAEAAAAAAAAAHQAAAAEAAAAAAAEABAAdAAEAAAAAAAIABwAhAAEAAAAAAAMABAAoAAEAAAAAAAQABAAsAAEAAAAAAAUACwAwAAEAAAAAAAYABAA7AAEAAAAAAAoAKwA/AAEAAAAAAAsAEwBqAAMAAQQJAAAAOgB9AAMAAQQJAAEACAC3AAMAAQQJAAIADgC/AAMAAQQJAAMACADNAAMAAQQJAAQACADVAAMAAQQJAAUAFgDdAAMAAQQJAAYACADzAAMAAQQJAAoAVgD7AAMAAQQJAAsAJgFRCiAgQ3JlYXRlZCBieSBmb250LWNhcnJpZXIKICB3ZXVpUmVndWxhcndldWl3ZXVpVmVyc2lvbiAxLjB3ZXVpR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgAgACAAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGYAbwBuAHQALQBjAGEAcgByAGkAZQByAAoAIAAgAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAABeAd1bmlFQTA4AAAAAAA=") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}';
  doc.querySelector('head').appendChild(taroStyle);
  status = 'ready';
}

var toast = new Toast();
var modal = new Modal();
var actionSheet = new ActionSheet();

function showToast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    icon: 'success',
    image: '',
    duration: 1500,
    mask: false
  };
  options = Object.assign({}, _default, options);
  options._type = 'toast'; // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showToast',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  if (typeof options.duration !== 'number') {
    return handler({
      errMsg: getParameterError({
        name: 'showToast',
        para: 'duration',
        correct: 'Number',
        wrong: options.duration
      })
    });
  }

  if (options.image && typeof options.image !== 'string') options.image = '';
  options.mask = !!options.mask;
  if (!toast.el) return toast.create(options);
  return toast.show(options);
}

function hideToast() {
  if (!toast.el) return;
  toast.hide(0, 'toast');
}

function showLoading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    mask: false
  };
  var config = {
    icon: 'loading',
    image: '',
    duration: -1
  };
  options = Object.assign({}, _default, options, config);
  options._type = 'loading'; // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showLoading',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  options.mask = !!options.mask;
  if (!toast.el) return toast.create(options);
  return toast.show(options);
}

function hideLoading() {
  if (!toast.el) return;
  toast.hide(0, 'loading');
}

function showModal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    content: '',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#000000',
    confirmText: '确定',
    confirmColor: '#3CC51F'
  };
  options = Object.assign({}, _default, options); // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  if (typeof options.content !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'content',
        correct: 'String',
        wrong: options.content
      })
    });
  }

  if (typeof options.cancelText !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'cancelText',
        correct: 'String',
        wrong: options.cancelText
      })
    });
  }

  if (options.cancelText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
    return handler({
      errMsg: 'showModal:fail cancelText length should not larger then 4 Chinese characters'
    });
  }

  if (typeof options.confirmText !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'confirmText',
        correct: 'String',
        wrong: options.confirmText
      })
    });
  }

  if (options.confirmText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
    return handler({
      errMsg: 'showModal:fail confirmText length should not larger then 4 Chinese characters'
    });
  }

  if (typeof options.cancelColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'cancelColor',
        correct: 'String',
        wrong: options.cancelColor
      })
    });
  }

  if (typeof options.confirmColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'confirmColor',
        correct: 'String',
        wrong: options.confirmColor
      })
    });
  }

  options.showCancel = !!options.showCancel;
  if (!modal.el) return modal.create(options);
  return modal.show(options);
}

function hideModal() {
  if (!modal.el) return;
  modal.hide();
}

function showActionSheet() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    itemColor: '#000000'
  };
  options = Object.assign({}, _default, options); // verify options

  var handler = errorHandler(options.fail, options.complete); // list item String

  if (!Array.isArray(options.itemList)) {
    return handler({
      errMsg: getParameterError({
        name: 'showActionSheet',
        para: 'itemList',
        correct: 'Array',
        wrong: options.itemList
      })
    });
  }

  if (options.itemList.length < 1) {
    return handler({
      errMsg: 'showActionSheet:fail parameter error: parameter.itemList should have at least 1 item'
    });
  }

  if (options.itemList.length > 6) {
    return handler({
      errMsg: 'showActionSheet:fail parameter error: parameter.itemList should not be large than 6'
    });
  }

  for (var i = 0; i < options.itemList.length; i++) {
    if (typeof options.itemList[i] !== 'string') {
      return handler({
        errMsg: getParameterError({
          name: 'showActionSheet',
          para: "itemList[".concat(i, "]"),
          correct: 'String',
          wrong: options.itemList[i]
        })
      });
    }
  }

  if (typeof options.itemColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showActionSheet',
        para: 'itemColor',
        correct: 'String',
        wrong: options.itemColor
      })
    });
  }

  if (!actionSheet.el) return actionSheet.create(options);
  return actionSheet.show(options);
}

taro.eventCenter.on('__taroRouterChange', function () {
  hideToast();
  hideLoading();
  hideModal();
});

var css$1 = ".taro_chooselocation {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 100%;\r\n  background-color: #fff;\r\n  transition: ease top .3s;\r\n}\r\n\r\n.taro_chooselocation_bar {\r\n  display: flex;\r\n  flex: 0 95px;\r\n  height: 95px;\r\n  background-color: #ededed;\r\n  color: #090909;\r\n}\r\n\r\n.taro_chooselocation_back {\r\n  flex: 0 45px;\r\n  position: relative;\r\n  width: 33px;\r\n  height: 30px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.taro_chooselocation_back::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border: solid 15px;\r\n  border-top-color: transparent;\r\n  border-right-color: #090909;\r\n  border-bottom-color: transparent;\r\n  border-left-color: transparent;\r\n}\r\n\r\n.taro_chooselocation_back::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  top: 0;\r\n  left: 3px;\r\n  border: solid 15px;\r\n  border-top-color: transparent;\r\n  border-right-color: #ededed;\r\n  border-bottom-color: transparent;\r\n  border-left-color: transparent;\r\n}\r\n\r\n.taro_chooselocation_title {\r\n  flex: 1;\r\n  line-height: 95px;\r\n  padding-left: 30px;\r\n}\r\n\r\n.taro_chooselocation_submit {\r\n  width: 110px;\r\n  height: 60px;\r\n  color: #fff;\r\n  background-color: #08bf62;\r\n  border: none;\r\n  font-size: 28px;\r\n  line-height: 60px;\r\n  padding: 0;\r\n  margin: 18px 30px 0 0;\r\n}\r\n\r\n.taro_chooselocation_frame {\r\n  flex: 1;\r\n}";
styleInject(css$1);

/** @type {LocationChooser} */

var locationChooser;

var LocationChooser =
/*#__PURE__*/
function (_Taro$Component) {
  _inherits(LocationChooser, _Taro$Component);

  function LocationChooser(props, context) {
    var _this;

    _classCallCheck(this, LocationChooser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationChooser).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "getWrapRef", function (ref) {
      if (ref) _this.wrapRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "show", function () {
      setTimeout(function () {
        _this.wrapRef.style.top = '0';
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.wrapRef.style.top = '100%';
    });

    _defineProperty(_assertThisInitialized(_this), "onBack", function () {
      _this.props.handler({
        errMsg: 'chooseLOcation:fail cancel'
      });

      _this.hide();
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      _this.props.handler();

      _this.hide();
    });

    locationChooser = _assertThisInitialized(_this);
    window.addEventListener('popstate', _this.onBack);
    return _this;
  }

  _createClass(LocationChooser, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('popstate', this.onBack);
    }
  }, {
    key: "render",
    value: function render() {
      return Nerv__default.createPortal(Nerv__default.createElement("div", {
        className: "taro_chooselocation",
        ref: this.getWrapRef
      }, Nerv__default.createElement("div", {
        className: "taro_chooselocation_bar"
      }, Nerv__default.createElement("div", {
        className: "taro_chooselocation_back",
        onClick: this.onBack
      }), Nerv__default.createElement("p", {
        className: "taro_chooselocation_title"
      }, "\u4F4D\u7F6E"), Nerv__default.createElement("button", {
        className: "taro_chooselocation_submit",
        onClick: this.onSubmit
      }, "\u5B8C\u6210")), Nerv__default.createElement("iframe", {
        className: "taro_chooselocation_frame",
        frameborder: "0",
        src: "https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=".concat(LOCATION_APIKEY, "&referer=myapp")
      })), document.body);
    }
  }]);

  return LocationChooser;
}(taro.Component);
/**
 * @typedef {Object} OriginalLocationObject
 * @property {string} module
 * @property {{ lat: number, lng: number }} latlng
 * @property {string} poiaddress
 * @property {string} poiname
 * @property {string} cityname
 */

/**
 * @typedef {Object} LocationObject
 * @property {string} errMsg 信息
 * @property {string} name 位置名称
 * @property {string} address 详细地址
 * @property {string} latitude 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
 * @property {string} longitude 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
 */

/**
 * 打开地图选择位置。
 * @param {Object} object 参数
 * @param {(obj: LocationObject) => void} [object.success] 接口调用成功的回调函数
 * @param {Function} [object.fail] 接口调用失败的回调函数
 * @param {Function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */


var chooseLocation = function chooseLocation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  return new Promise(function (resolve, reject) {
    var div = document.createElement('div');
    var choosenLocation = {};

    var onSuccess = function onSuccess(res) {
      success && success(res);
      complete && complete();
      resolve(res);
    };

    var onError = function onError(res) {
      fail && fail(res);
      complete && complete();
      reject(res);
    };

    if (!LOCATION_APIKEY) {
      var errMsg = "chooseLocation:fail LOCATION_APIKEY needed";
      console.warn('chooseLocation api 依赖腾讯地图定位api，需要在defineConstants中配置LOCATION_APIKEY');
      return onError({
        errMsg: errMsg
      });
    }

    Nerv__default.render(Nerv__default.createElement(LocationChooser, {
      handler: function handler(res) {
        if (res) {
          onError(res);
        } else {
          if (choosenLocation.latitude && choosenLocation.longitude) {
            onSuccess(_objectSpread2({
              errMsg: 'chooseLocation:ok'
            }, choosenLocation));
          } else {
            onError({
              errMsg: 'chooseLocation:fail'
            });
          }
        }

        window.removeEventListener('message', onMessage, false);
        setTimeout(function () {
          Nerv__default.unmountComponentAtNode(div);
        }, 300);
      }
    }), div);

    var onMessage = function onMessage(event) {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息

      /** @type {OriginalLocationObject} */
      var loc = event.data; // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'

      if (!loc || loc.module !== 'locationPicker') return;
      choosenLocation.name = loc.poiname;
      choosenLocation.address = loc.poiaddress;
      choosenLocation.latitude = loc.latlng.lat;
      choosenLocation.longitude = loc.latlng.lng;
    };

    window.addEventListener('message', onMessage, false);
    locationChooser.show();
  });
};

var getLocation = processOpenapi('getLocation');
var openLocation = processOpenapi('openLocation', {
  scale: 18
});

function setNavigationBarTitle(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "setNavigationBarTitle".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var title = options.title,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setNavigationBarTitle:ok'
  };

  if (!title || typeof title !== 'string') {
    res.errMsg = getParameterError({
      name: 'setNavigationBarTitle',
      para: 'title',
      correct: 'String',
      wrong: title
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  if (document.title !== title) {
    document.title = title;
  }

  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}
/**
 * @typedef {Object} NavigationBarColorParam
 * @property {string} frontColor 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
 * @property {string} backgroundColor 背景颜色值，有效值为十六进制颜色
 * @property {{duration: number, timingFunc: string}} animation 动画效果
 * @property {function} [success] 接口调用成功的回调函数
 * @property {function} [fail] 接口调用失败的回调函数
 * @property {function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

/**
 * 设置页面导航条颜色
 * @param {NavigationBarColorParam} options 
 */

function setNavigationBarColor(options) {
  var meta = document.createElement('meta');
  meta.setAttribute('name', 'theme-color');
  meta.setAttribute('content', options.backgroundColor);
  document.head.appendChild(meta);
}

var requestPayment = processOpenapi('chooseWXPay', undefined, undefined, function (options) {
  return Object.assign(options, {
    timestamp: Number.parseInt(options.timeStamp, 10)
  });
});

var toByteArray_1 = toByteArray;
var fromByteArray_1 = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i$1 = 0, len = code.length; i$1 < len; ++i$1) {
  lookup[i$1] = code[i$1];
  revLookup[code.charCodeAt(i$1)] = i$1;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

function arrayBufferToBase64(arrayBuffer) {
  return fromByteArray_1(arrayBuffer);
}
function base64ToArrayBuffer(base64) {
  return toByteArray_1(base64);
}
function makePhoneCall(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "makePhoneCall".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var phoneNumber = options.phoneNumber,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'makePhoneCall:ok'
  };

  if (typeof phoneNumber !== 'string') {
    res.errMsg = getParameterError({
      name: 'makePhoneCall',
      para: 'phoneNumber',
      correct: 'String',
      wrong: phoneNumber
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  window.location.href = "tel:".concat(phoneNumber);
  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

/**
 * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * @param {Object} object 参数
 */

var startPullDownRefresh = function startPullDownRefresh() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var success = object.success,
        fail = object.fail,
        complete = object.complete;
    var res = {};
    taro.eventCenter.trigger('__taroStartPullDownRefresh', {
      successHandler: function successHandler() {
        success && success(res);
        complete && complete();
        resolve(res);
      },
      errorHandler: function errorHandler() {
        fail && fail(res);
        complete && complete();
        reject(res);
      }
    });
  });
};
/**
 * 停止当前页面下拉刷新。
 * @param {Object} object 参数
 */


var stopPullDownRefresh = function stopPullDownRefresh() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var success = object.success,
        fail = object.fail,
        complete = object.complete;
    var res = {};
    taro.eventCenter.trigger('__taroStopPullDownRefresh', {
      successHandler: function successHandler() {
        success && success(res);
        complete && complete();
        resolve(res);
      },
      errorHandler: function errorHandler() {
        fail && fail(res);
        complete && complete();
        reject(res);
      }
    });
  });
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
var enc = encodeURIComponent;

function serializeParams$1(params) {
  if (!params) {
    return '';
  }

  return Object.keys(params).map(function (item) {
    return item + '=' + enc(params[item]);
  }).join('&');
}

function isFunction$2(fn) {
  return typeof fn === 'function';
}

function getUrlQueryParamByName(url, name) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function updateQueryStringParamByName(url, name, value) {
  var re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i');
  var separator = url.indexOf('?') !== -1 ? '&' : '?';

  if (url.match(re)) {
    return url.replace(re, '$1' + name + '=' + value + '$2');
  }

  return url + separator + name + '=' + value;
}

var win$1 = typeof window !== 'undefined' ? window : global;
var localStorageName = 'localStorage';
var storage = win$1[localStorageName];
var store = {
  disabled: false,
  set: function set(key, val) {
    if (val === void 666) {
      return store.remove(key);
    }

    storage.setItem(key, store.serialize(val));
    return val;
  },
  get: function get(key, defaultVal) {
    var val = store.deserialize(storage.getItem(key));
    return val === undefined ? defaultVal : val;
  },
  remove: function remove(key) {
    storage.removeItem(key);
  },
  clear: function clear() {
    storage.clear();
  },
  has: function has(key) {
    return store.get(key) !== void 666;
  },
  forEach: function forEach(callback) {
    for (var i = 0; i < storage.length; i++) {
      var key = storage.key(i);
      callback(key, store.get(key));
    }
  },
  getAll: function getAll() {
    var ret = {};
    store.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  serialize: function serialize(value) {
    return JSON.stringify(value);
  },
  deserialize: function deserialize(value) {
    if (typeof value !== 'string') {
      return;
    }

    try {
      return JSON.parse(value);
    } catch (err) {
      return value || void 666;
    }
  }
};

try {
  var testKey = '__store__';
  store.set(testKey, testKey);

  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }

  store.remove(testKey);
} catch (err) {
  store.disabled = true;
}

store.enabled = !store.disabled;

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
};

var win = typeof window !== 'undefined' ? window : global;

var canUsePromise = function () {
  return 'Promise' in win && _typeof$1(isFunction$2(Promise));
}();

var noop$3 = function noop() {};

var encodeC = encodeURIComponent;
var doc = win.document;
var head = doc ? doc.head || doc.getElementsByTagName('head')[0] : null;
var TIMEOUT_CONST = 2000;
var defaultConfig = {
  timeout: TIMEOUT_CONST,
  retryTimes: 2,
  backup: null,
  params: {},
  jsonp: 'callback',
  name: null,
  cache: false,
  useStore: false,
  storeCheck: null,
  storeSign: null,
  storeCheckKey: null,
  dataCheck: null,
  charset: 'UTF-8'
};
var timestamp = new Date().getTime();

function jsonp$1(url, opts, cb) {
  if (isFunction$2(url)) {
    cb = url;
    opts = {};
  } else if (url && (typeof url === 'undefined' ? 'undefined' : _typeof$1(url)) === 'object') {
    cb = opts;
    opts = url || {};
    url = opts.url;
  }

  if (isFunction$2(opts)) {
    cb = opts;
    opts = {};
  }

  if (!opts) {
    opts = {};
  }

  opts = objectAssign$1({}, defaultConfig, opts);
  url = url || opts.url;
  cb = cb || noop$3;

  if (!url || typeof url !== 'string') {
    cb(new Error('Param url is needed!'));

    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve, reject) {
        return reject(new Error('Param url is needed!'));
      });
    }

    return;
  }

  var urlWithParams = generateJsonpUrlWithParams(url, opts.params); // first get data from store

  var datafromStore = getDataFromStore({
    useStore: opts.useStore,
    storeKey: urlWithParams,
    storeCheck: opts.storeCheck,
    storeCheckKey: opts.storeCheckKey,
    storeSign: opts.storeSign,
    dataCheck: opts.dataCheck
  });

  if (datafromStore) {
    cb(null, datafromStore);

    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve) {
        return resolve(datafromStore);
      });
    }

    return;
  }

  opts.originalUrl = urlWithParams;

  if (!jsonp$1.promiseClose && canUsePromise) {
    return new Promise(function (resolve, reject) {
      fetchData(urlWithParams, opts, function (err, data) {
        if (err) {
          cb(err);
          return reject(err);
        }

        cb(null, data);
        resolve(data);
      });
    });
  }

  fetchData(urlWithParams, opts, cb);
}

function generateJsonpUrlWithParams(url, params) {
  params = typeof params === 'string' ? params : serializeParams$1(params);
  url += (~url.indexOf('?') ? '&' : '?') + ('' + params);
  url = url.replace('?&', '?');
  return url;
}

function fetchData(url, opts, cb) {
  var originalUrl = opts.originalUrl;
  var charset = opts.charset;
  var jsonpUrlQueryParam = getUrlQueryParamByName(url, opts.jsonp);
  var funcId = (jsonpUrlQueryParam === '?' ? false : jsonpUrlQueryParam) || opts.name || '__jsonp' + timestamp++;
  var gotoBackupInfo = arguments[3] || null;

  if (jsonpUrlQueryParam) {
    if (jsonpUrlQueryParam === '?') {
      url = updateQueryStringParamByName(url, opts.jsonp, encodeC(funcId));
    }
  } else {
    url += (url.split('').pop() === '&' ? '' : '&') + (opts.jsonp + '=' + encodeC(funcId));
  }

  if (!opts.cache) {
    url += (url.split('').pop() === '&' ? '' : '&') + ('_=' + new Date().getTime());
  } // move prev callback into next when fetch parallel with same funcId


  clearTimeout(win['timer_' + funcId]);
  var prevFunc = win[funcId];

  win[funcId] = function (data) {
    prevFunc && prevFunc(data);
    cleanup(funcId);

    if (gotoBackupInfo) {
      data.__$$backupCall = gotoBackupInfo;
    }

    if (opts.dataCheck) {
      if (opts.dataCheck(data) !== false) {
        // write data to store
        setDataToStore({
          useStore: opts.useStore,
          storeKey: originalUrl,
          data: data
        });
        return cb(null, data);
      }

      if (fallback(originalUrl, opts, cb) === false) {
        cb(new Error('Data check error, and no fallback'));
      }
    } else {
      // write data to store
      setDataToStore({
        useStore: opts.useStore,
        storeKey: originalUrl,
        data: data
      });
      cb(null, data);
    }
  };

  var script = appendScriptTagToHead({
    url: url,
    charset: charset
  });
  var timeout = opts.timeout != null ? opts.timeout : TIMEOUT_CONST; // when timeout, will try to retry

  win['timer_' + funcId] = setTimeout(function () {
    cleanup(funcId); // no retryTimes left, go to backup

    if (typeof opts.retryTimes === 'number' && opts.retryTimes > 0) {
      opts.retryTimes--;
      return fetchData(originalUrl, opts, cb);
    }

    if (fallback(originalUrl, opts, cb) === false) {
      return cb(new Error('Timeout and no data return'));
    }
  }, timeout);

  function cleanup(funcId) {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }

    win[funcId] = noop$3;
    clearTimeout(win['timer_' + funcId]);
  }
}

function storeCheckFn(storeData, storeCheckKey, storeSign) {
  if (storeData && storeCheckKey && storeSign) {
    return storeData[storeCheckKey] && storeData[storeCheckKey] === storeSign;
  }

  return false;
}

function getDataFromStore(_ref) {
  var useStore = _ref.useStore,
      storeKey = _ref.storeKey,
      storeCheck = _ref.storeCheck,
      storeCheckKey = _ref.storeCheckKey,
      storeSign = _ref.storeSign,
      dataCheck = _ref.dataCheck;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    var storeData = store.get(storeKey);
    storeCheck = storeCheck || storeCheckFn;

    if (storeCheck(storeData, storeCheckKey, storeSign)) {
      if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
        return storeData;
      }
    }
  }

  return null;
}

function getDataFromStoreWithoutCheck(_ref2) {
  var useStore = _ref2.useStore,
      storeKey = _ref2.storeKey,
      dataCheck = _ref2.dataCheck;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    var storeData = store.get(storeKey);

    if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
      return storeData;
    }
  }

  return null;
}

function setDataToStore(_ref3) {
  var useStore = _ref3.useStore,
      storeKey = _ref3.storeKey,
      data = _ref3.data;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    store.set(storeKey, data);
  }
}

function fallback(url, opts, cb) {
  var backup = opts.backup;
  var backupWithParams = void 0;

  if (backup) {
    if (typeof backup === 'string') {
      delete opts.backup;
      backupWithParams = generateJsonpUrlWithParams(backup, opts.params);
      return fetchData(backupWithParams, opts, cb, {
        backup: backup
      });
    } else if (Array.isArray(backup)) {
      if (backup.length) {
        var backupUrl = backup.shift();
        backupWithParams = generateJsonpUrlWithParams(backupUrl, opts.params);
        return fetchData(backupWithParams, opts, cb, {
          backup: backupUrl
        });
      }
    }
  } // no backup to use, try to get data from store


  var dataFromStoreWithoutCheck = getDataFromStoreWithoutCheck({
    useStore: opts.useStore,
    storeKey: url,
    dataCheck: opts.dataCheck
  });

  if (dataFromStoreWithoutCheck) {
    cb(null, dataFromStoreWithoutCheck);
    return true;
  }

  return false;
}

function appendScriptTagToHead(_ref4) {
  var url = _ref4.url,
      charset = _ref4.charset;

  if (!doc) {
    return;
  }

  var script = doc.createElement('script');
  script.type = 'text/javascript';

  if (charset) {
    script.charset = charset;
  }

  script.src = url;
  head.appendChild(script);
  return script;
}

(function (self) {

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

function generateRequestUrlWithParams(url, params) {
  params = typeof params === 'string' ? params : serializeParams(params);

  if (params) {
    url += (~url.indexOf('?') ? '&' : '?') + params;
  }

  url = url.replace('?&', '?');
  return url;
}

function _request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var _options = options,
      success = _options.success,
      complete = _options.complete,
      fail = _options.fail;
  var url = options.url;
  var params = {};
  var res = {};

  if (options.jsonp) {
    Object.assign(params, options);
    params.params = options.data;
    params.cache = options.jsonpCache;

    if (typeof options.jsonp === 'string') {
      params.name = options.jsonp;
    }

    delete params.jsonp;
    return jsonp$1(url, params).then(function (data) {
      res.statusCode = 200;
      res.data = data;
      typeof success === 'function' && success(res);
      typeof complete === 'function' && complete(res);
      return res;
    })["catch"](function (err) {
      typeof fail === 'function' && fail(err);
      typeof complete === 'function' && complete(res);
      return Promise.reject(err);
    });
  }

  params.method = options.method || 'GET';
  var methodUpper = params.method.toUpperCase();
  params.cache = options.cache || 'default';

  if (methodUpper === 'GET' || methodUpper === 'HEAD') {
    url = generateRequestUrlWithParams(url, options.data);
  } else if (_typeof(options.data) === 'object') {
    var contentType = options.header && (options.header['Content-Type'] || options.header['content-type']);

    if (contentType && contentType.indexOf('application/json') >= 0) {
      params.body = JSON.stringify(options.data);
    } else if (contentType && contentType.indexOf('application/x-www-form-urlencoded') >= 0) {
      params.body = serializeParams(options.data);
    } else {
      params.body = options.data;
    }
  } else {
    params.body = options.data;
  }

  if (options.header) {
    params.headers = options.header;
  }

  if (options.mode) {
    params.mode = options.mode;
  }

  if (options.signal) {
    params.signal = options.signal;
  }

  params.credentials = options.credentials;
  return fetch(url, params).then(function (response) {
    res.statusCode = response.status;
    res.header = {};
    response.headers.forEach(function (val, key) {
      res.header[key] = val;
    });

    if (!response.ok) {
      throw response;
    }

    if (options.responseType === 'arraybuffer') {
      return response.arrayBuffer();
    }

    if (options.dataType === 'json' || typeof options.dataType === 'undefined') {
      return response.json();
    }

    if (options.responseType === 'text') {
      return response.text();
    }

    return Promise.resolve(null);
  }).then(function (data) {
    res.data = data;
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    return res;
  })["catch"](function (err) {
    typeof fail === 'function' && fail(err);
    typeof complete === 'function' && complete(res);
    return Promise.reject(err);
  });
}

function taroInterceptor(chain) {
  return _request(chain.requestParams);
}

var link = new Link(taroInterceptor);
/** @type {TaroH5.request} */

var request = link.request.bind(link);
var addInterceptor = link.addInterceptor.bind(link);

/**
 * @typedef {object} PageScrollToParam pageScrollTo参数
 * @property {number} scrollTop 滚动到页面的目标位置，单位 px
 * @property {number} [duration=300] 滚动动画的时长，单位 ms
 * @property {function} [success] 接口调用成功的回调函数
 * @property {function} [fail] 接口调用失败的回调函数
 * @property {function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var scrollFunc;
var timer;
var FRAME_DURATION = 17;
/**
 * 将页面滚动到目标位置
 * @param {PageScrollToParam} object 参数
 */

var pageScrollTo = function pageScrollTo(_ref) {
  var scrollTop = _ref.scrollTop,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 300 : _ref$duration,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;
  return new Promise(function (resolve, reject) {
    try {
      if (scrollTop === undefined) {
        throw Error('"scrollTop" is required');
      }

      var el = document.querySelector('.taro-tabbar__panel') || window;

      if (!scrollFunc) {
        if (el === window) {
          scrollFunc = function scrollFunc(pos) {
            if (pos === undefined) {
              return window.pageYOffset;
            } else {
              window.scrollTo(0, pos);
            }
          };
        } else {
          scrollFunc = function scrollFunc(pos) {
            if (pos === undefined) {
              return el.scrollTop;
            } else {
              el.scrollTop = pos;
            }
          };
        }
      }

      var from = scrollFunc();
      var to = scrollTop;
      var delta = to - from;
var frameCnt = duration / FRAME_DURATION - 1;
      var easeFunc = getTimingFunc(easeInOut, frameCnt);

      var scroll = function scroll() {
        var frame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var dest = from + delta * easeFunc(frame);
;(frame<frameCnt)&&scrollFunc(dest);

        if (frame < frameCnt) {
          timer && clearTimeout(timer);
          timer = setTimeout(function () {
            scroll(frame + 1);
          }, FRAME_DURATION);
        } else {
          var res = {
            errMsg: 'pageScrollTo:ok'
          };
scrollFunc(to);success && success(res);
          complete && complete();
          resolve(res);
        }
      };

      scroll();
    } catch (e) {
      var res = {
        errMsg: "pageScrollTo:fail ".concat(e.message)
      };
      fail && fail(res);
      complete && complete();
      reject(res);
    }
  });
};

var mobileDetect = createCommonjsModule(function (module) {
// THIS FILE IS GENERATED - DO NOT EDIT!

/*!mobile-detect v1.4.4 2019-09-21*/

/*global module:false, define:false*/

/*jshint latedef:false*/

/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined$1) {
  define(function () {

    var impl = {};
    impl.mobileDetectRules = {
      "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "OnePlus": "ONEPLUS",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
      },
      "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
      },
      "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "iPadOS": "CPU OS 13",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
      },
      "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
      },
      "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
        "Coast": ["Coast\/[VER]"],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": ["UCWEB[VER]", "UC.*Browser\/[VER]"],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": ["Version\/[VER]", "Safari\/[VER]"],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
        "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
      },
      "utils": {
        "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
      }
    }; // following patterns come from http://detectmobilebrowsers.com/

    impl.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };
    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;
    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';
    isArray = 'isArray' in Array ? Array.isArray : function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };

    function equalIC(a, b) {
      return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
      var valueLC,
          i,
          len = array.length;

      if (!len || !value) {
        return false;
      }

      valueLC = value.toLowerCase();

      for (i = 0; i < len; ++i) {
        if (valueLC === array[i].toLowerCase()) {
          return true;
        }
      }

      return false;
    }

    function convertPropsToRegExp(object) {
      for (var key in object) {
        if (hasOwnProp.call(object, key)) {
          object[key] = new RegExp(object[key], 'i');
        }
      }
    }

    function prepareUserAgent(userAgent) {
      return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
      var key,
          values,
          value,
          i,
          len,
          verPos,
          mobileDetectRules = impl.mobileDetectRules;

      for (key in mobileDetectRules.props) {
        if (hasOwnProp.call(mobileDetectRules.props, key)) {
          values = mobileDetectRules.props[key];

          if (!isArray(values)) {
            values = [values];
          }

          len = values.length;

          for (i = 0; i < len; ++i) {
            value = values[i];
            verPos = value.indexOf('[VER]');

            if (verPos >= 0) {
              value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
            }

            values[i] = new RegExp(value, 'i');
          }

          mobileDetectRules.props[key] = values;
        }
      }

      convertPropsToRegExp(mobileDetectRules.oss);
      convertPropsToRegExp(mobileDetectRules.phones);
      convertPropsToRegExp(mobileDetectRules.tablets);
      convertPropsToRegExp(mobileDetectRules.uas);
      convertPropsToRegExp(mobileDetectRules.utils); // copy some patterns to oss0 which are tested first (see issue#15)

      mobileDetectRules.oss0 = {
        WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
        WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
      };
    })();
    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */


    impl.findMatch = function (rules, userAgent) {
      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            return key;
          }
        }
      }

      return null;
    };
    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */


    impl.findMatches = function (rules, userAgent) {
      var result = [];

      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            result.push(key);
          }
        }
      }

      return result;
    };
    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */


    impl.getVersionStr = function (propertyName, userAgent) {
      var props = impl.mobileDetectRules.props,
          patterns,
          i,
          len,
          match;

      if (hasOwnProp.call(props, propertyName)) {
        patterns = props[propertyName];
        len = patterns.length;

        for (i = 0; i < len; ++i) {
          match = patterns[i].exec(userAgent);

          if (match !== null) {
            return match[1];
          }
        }
      }

      return null;
    };
    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */


    impl.getVersion = function (propertyName, userAgent) {
      var version = impl.getVersionStr(propertyName, userAgent);
      return version ? impl.prepareVersionNo(version) : NaN;
    };
    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */


    impl.prepareVersionNo = function (version) {
      var numbers;
      numbers = version.split(/[a-z._ \/\-]/i);

      if (numbers.length === 1) {
        version = numbers[0];
      }

      if (numbers.length > 1) {
        version = numbers[0] + '.';
        numbers.shift();
        version += numbers.join('');
      }

      return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
      return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
    };

    impl.isTabletFallback = function (userAgent) {
      return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
      if (cache.mobile !== undefined$1) {
        return;
      }

      var phone, tablet, phoneSized; // first check for stronger tablet rules, then phone (see issue#5)

      tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);

      if (tablet) {
        cache.mobile = cache.tablet = tablet;
        cache.phone = null;
        return; // unambiguously identified as tablet
      }

      phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);

      if (phone) {
        cache.mobile = cache.phone = phone;
        cache.tablet = null;
        return; // unambiguously identified as phone
      } // our rules haven't found a match -> try more general fallback rules


      if (impl.isMobileFallback(userAgent)) {
        phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);

        if (phoneSized === undefined$1) {
          cache.mobile = impl.FALLBACK_MOBILE;
          cache.tablet = cache.phone = null;
        } else if (phoneSized) {
          cache.mobile = cache.phone = impl.FALLBACK_PHONE;
          cache.tablet = null;
        } else {
          cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
          cache.phone = null;
        }
      } else if (impl.isTabletFallback(userAgent)) {
        cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
        cache.phone = null;
      } else {
        // not mobile at all!
        cache.mobile = cache.tablet = cache.phone = null;
      }
    }; // t is a reference to a MobileDetect instance


    impl.mobileGrade = function (t) {
      // impl note:
      // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
      // When changes are made in Mobile_Detect.php, copy this method and replace:
      //     $this-> / t.
      //     self::MOBILE_GRADE_(.) / '$1'
      //     , self::VERSION_TYPE_FLOAT / (nothing)
      //     isIOS() / os('iOS')
      //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
      var $isMobile = t.mobile() !== null;

      if ( // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
      t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 || // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
      // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
      // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
      // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
      t.version('Android') > 2.1 && t.is('Webkit') || // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
      t.version('Windows Phone OS') >= 7.0 || // Blackberry 7 - Tested on BlackBerry Torch 9810
      // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
      t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 || // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
      t.match('Playbook.*Tablet') || // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
      t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') || // Palm WebOS 3.0  - Tested on HP TouchPad
      t.match('hp.*TouchPad') || // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
      t.is('Firefox') && t.version('Firefox') >= 12 || // Chrome for Android - Tested on Android 4.0, 4.1 device
      t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 || // Skyfire 4.1 - Tested on Android 2.3 device
      t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 || // Opera Mobile 11.5-12: Tested on Android 2.3
      t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') || // Meego 1.2 - Tested on Nokia 950 and N9
      t.is('MeeGoOS') || // Tizen (pre-release) - Tested on early hardware
      t.is('Tizen') || // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
      // @todo: more tests here!
      t.is('Dolfin') && t.version('Bada') >= 2.0 || // UC Browser - Tested on Android 2.3 device
      (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 || // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
      t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 || // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
      t.is('AndroidOS') && t.is('NookTablet') || // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
      t.version('Chrome') >= 11 && !$isMobile || // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
      t.version('Safari') >= 5.0 && !$isMobile || // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
      t.version('Firefox') >= 4.0 && !$isMobile || // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
      t.version('MSIE') >= 7.0 && !$isMobile || // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
      // @reference: http://my.opera.com/community/openweb/idopera/
      t.version('Opera') >= 10 && !$isMobile) {
        return 'A';
      }

      if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 || // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
      t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 || //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
      t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) || // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
      t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') || // @todo: report this (tested on Nokia N71)
      t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
        return 'B';
      }

      if ( // Blackberry 4.x - Tested on the Curve 8330
      t.version('BlackBerry') < 5.0 || // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
      t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
        return 'C';
      } //All older smartphone platforms and featurephones - Any device that doesn't support media queries
      //will receive the basic, C grade experience.


      return 'C';
    };

    impl.detectOS = function (ua) {
      return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    };
    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */


    function MobileDetect(userAgent, maxPhoneWidth) {
      this.ua = prepareUserAgent(userAgent);
      this._cache = {}; //600dp is typical 7" tablet minimum width

      this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
      constructor: MobileDetect,

      /**
       * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
       * <br>
       * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
       * <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
       * @function MobileDetect#mobile
       */
      mobile: function mobile() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },

      /**
       * Returns the detected phone type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
       * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
       * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the phone family or producer, e.g. "iPhone"
       * @function MobileDetect#phone
       */
      phone: function phone() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },

      /**
       * Returns the detected tablet type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
       * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
       * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
       * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
       * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
       * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
       * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
       * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
       * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
       * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
       * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
       * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
       * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
       * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
       * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
       * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
       * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
       * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
       * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
       * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
       * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
       * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
       * GenericTablet</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
       * @function MobileDetect#tablet
       */
      tablet: function tablet() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },

      /**
       * Returns the (first) detected user-agent string or <tt>null</tt>.
       * <br>
       * The returned user-agent is one of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {String} the key for the detected user-agent or <tt>null</tt>
       * @function MobileDetect#userAgent
       */
      userAgent: function userAgent() {
        if (this._cache.userAgent === undefined$1) {
          this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
        }

        return this._cache.userAgent;
      },

      /**
       * Returns all detected user-agent strings.
       * <br>
       * The array is empty or contains one or more of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
       * @function MobileDetect#userAgents
       */
      userAgents: function userAgents() {
        if (this._cache.userAgents === undefined$1) {
          this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
        }

        return this._cache.userAgents;
      },

      /**
       * Returns the detected operating system string or <tt>null</tt>.
       * <br>
       * The operating system is one of following keys:<br>
       * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
       * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
       *
       * @returns {String} the key for the detected operating system.
       * @function MobileDetect#os
       */
      os: function os() {
        if (this._cache.os === undefined$1) {
          this._cache.os = impl.detectOS(this.ua);
        }

        return this._cache.os;
      },

      /**
       * Get the version (as Number) of the given property in the User-Agent.
       * <br>
       * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
       * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
       * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
       *
       * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
       *          Be careful when comparing this value with '==' operator!
       * @function MobileDetect#version
       */
      version: function version(key) {
        return impl.getVersion(key, this.ua);
      },

      /**
       * Get the version (as String) of the given property in the User-Agent.
       * <br>
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
       * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
       * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
       *
       * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
       *
       * @function MobileDetect#versionStr
       */
      versionStr: function versionStr(key) {
        return impl.getVersionStr(key, this.ua);
      },

      /**
       * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
       *
       * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
       *        tablet family.<br>
       *        For a complete list of possible values, see {@link MobileDetect#userAgent},
       *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
       *        Additionally you have following keys:<br>
       * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
       *
       * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
       *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
       * @function MobileDetect#is
       */
      is: function is(key) {
        return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
      },

      /**
       * Do a quick test against navigator::userAgent.
       *
       * @param {String|RegExp} pattern the pattern, either as String or RegExp
       *                        (a string will be converted to a case-insensitive RegExp).
       * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
       * @function MobileDetect#match
       */
      match: function match(pattern) {
        if (!(pattern instanceof RegExp)) {
          pattern = new RegExp(pattern, 'i');
        }

        return pattern.test(this.ua);
      },

      /**
       * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
       * <br>
       * Obviously this method makes sense in browser environments only (not for Node.js)!
       * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
       *        The argument is optional and if not present or falsy, the value of the constructor is taken.
       * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
       *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
       *          Will always return <code>undefined</code> server-side.
       */
      isPhoneSized: function isPhoneSized(maxPhoneWidth) {
        return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
      },

      /**
       * Returns the mobile grade ('A', 'B', 'C').
       *
       * @returns {String} one of the mobile grades ('A', 'B', 'C').
       * @function MobileDetect#mobileGrade
       */
      mobileGrade: function mobileGrade() {
        if (this._cache.grade === undefined$1) {
          this._cache.grade = impl.mobileGrade(this);
        }

        return this._cache.grade;
      }
    }; // environment-dependent

    if (typeof window !== 'undefined' && window.screen) {
      MobileDetect.isPhoneSized = function (maxPhoneWidth) {
        return maxPhoneWidth < 0 ? undefined$1 : impl.getDeviceSmallerSide() <= maxPhoneWidth;
      };
    } else {
      MobileDetect.isPhoneSized = function () {};
    } // should not be replaced by a completely new object - just overwrite existing methods


    MobileDetect._impl = impl;
    MobileDetect.version = '1.4.4 2019-09-21';
    return MobileDetect;
  }); // end of call of define()
})(function (undefined$1) {
  if ( module.exports) {
    return function (factory) {
      module.exports = factory();
    };
  } else if (typeof undefined$1 === 'function' && undefined$1.amd) {
    return undefined$1;
  } else if (typeof window !== 'undefined') {
    return function (factory) {
      window.MobileDetect = factory();
    };
  } else {
    // please file a bug if you get this error!
    throw new Error('unknown environment');
  }
}());
});

function getSystemInfoSync() {
  var md = new mobileDetect(navigator.userAgent);
  var info = {
    brand: md.mobile(),
    // 手机品牌
    model: md.mobile(),
    // 手机型号
    system: md.os(),
    // 操作系统版本
    pixelRatio: window.devicePixelRatio,
    // 设备像素比
    screenWidth: window.screen.width,
    // 屏幕宽度
    screenHeight: window.screen.height,
    // 屏幕高度
    windowWidth: document.documentElement.clientWidth,
    // 可使用窗口宽度
    windowHeight: document.documentElement.clientHeight,
    // 可使用窗口高度
    version: '',
    // 微信版本号
    statusBarHeight: '',
    // 状态栏的高度
    platform: navigator.platform,
    // 客户端平台
    language: navigator.language,
    // 微信设置的语言
    fontSizeSetting: '',
    // 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px
    SDKVersion: '' // 客户端基础库版本

  };
  return info;
}

function getSystemInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = options.success,
      complete = options.complete;
  return new Promise(function (resolve) {
    var info = getSystemInfoSync();
    typeof success === 'function' && success(info);
    typeof complete === 'function' && complete(info);
    resolve(info);
  });
}

function getConnection() {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection;
}

function getNetworkType() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var connection = getConnection();
  var success = options.success,
      complete = options.complete;
  var res = {
    errMsg: 'getNetworkType:ok'
  }; // 浏览器不支持获取网络状态

  if (!connection) {
    res.networkType = 'unknown';
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    return Promise.resolve(res);
  }

  var type = 'unknown'; // Supports only the navigator.connection.type value which doesn't match the latest spec.
  // https://www.davidbcalhoun.com/2010/using-navigator-connection-android/

  if (!isNaN(Number(connection.type))) {
    switch (connection.type) {
      case connection.WIFI:
        type = 'wifi';
        break;

      case connection.CELL_3G:
        type = '3g';
        break;

      case connection.CELL_2G:
        type = '2g';
        break;

      default:
        // ETHERNET, UNKNOWN
        type = 'unknown';
    }
  } else if (connection.type) {
    // Only supports the type value.
    type = connection.type;
  } else if (connection.effectiveType) {
    //  effectiveType
    type = connection.effectiveType;
  }

  res.networkType = type;
  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

function onNetworkStatusChange(cb) {
  var connection = getConnection();

  if (connection) {
    connection.addEventListener('change', function () {
      getNetworkType().then(function (res) {
        var networkType = res.networkType;
        var isConnected = networkType !== 'none';
        var obj = {
          isConnected: isConnected,
          networkType: networkType
        };
        cb(obj);
      });
    });
  }
}

var scanCode = processOpenapi('scanQRCode', {
  needResult: 1
}, function (res) {
  return {
    errMsg: res.errMsg === 'scanQRCode:ok' ? 'scanCode:ok' : res.errMsg,
    result: res.resultStr
  };
});

var tabConf;
var App;
function initTabBarApis() {
  var _App = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  tabConf = _App.state.__tabs;
  App = _App;
}
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param {Object} options
 * @param {string} options.url 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function switchTab() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var res = {
      errMsg: "showTabBarRedDot".concat(isObject.msg)
    };
    console.error(res.errMsg);
    return Promise.reject(res);
  }

  var url = options.url,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  return new Promise(function (resolve, reject) {
    taro.eventCenter.trigger('__taroSwitchTab', {
      url: url,
      successHandler: function successHandler(res) {
        success && success(res);
        complete && complete(res);
        resolve(res);
      },
      errorHandler: function errorHandler(res) {
        fail && fail(res);
        complete && complete(res);
        reject(res);
      }
    });
  });
}
/**
 * 为 tabBar 某一项的右上角添加文本
 * @param {Object} options
 * @param {number} options.index tabBar 的哪一项，从左边算起
 * @param {string} options.text 显示的文本，超过 4 个字符则显示成 ...
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function setTabBarBadge() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "setTabBarBadge".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var index = options.index,
      text = options.text,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setTabBarBadge:ok'
  };

  if (typeof index !== 'number') {
    res.errMsg = getParameterError({
      name: 'setTabBarBadge',
      para: 'index',
      correct: 'Number',
      wrong: index
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  if (typeof text !== 'string') {
    res.errMsg = getParameterError({
      name: 'setTabBarBadge',
      para: 'text',
      correct: 'String',
      wrong: text
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroSetTabBarBadge', {
    index: index,
    text: text,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(fail, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 移除 tabBar 某一项右上角的文本
 * @param {Object} options
 * @param {number} options.index tabBar 的哪一项，从左边算起
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function removeTabBarBadge() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res2 = {
      errMsg: "removeTabBarBadge".concat(isObject.msg)
    };
    console.error(_res2.errMsg);
    return Promise.reject(_res2);
  }

  var index = options.index,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'removeTabBarBadge:ok'
  };

  if (typeof index !== 'number') {
    res.errMsg = getParameterError({
      name: 'removeTabBarBadge',
      para: 'index',
      correct: 'Number',
      wrong: index
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroRemoveTabBarBadge', {
    index: index,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(fail, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 显示 tabBar 某一项的右上角的红点
 * @param {Object} options
 * @param {number} options.index tabBar 的哪一项，从左边算起
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function showTabBarRedDot() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res3 = {
      errMsg: "showTabBarRedDot".concat(isObject.msg)
    };
    console.error(_res3.errMsg);
    return Promise.reject(_res3);
  }

  var index = options.index,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'showTabBarRedDot:ok'
  };

  if (typeof index !== 'number') {
    res.errMsg = getParameterError({
      name: 'showTabBarRedDot',
      para: 'index',
      correct: 'Number',
      wrong: index
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroShowTabBarRedDotHandler', {
    index: index,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(fail, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 隐藏 tabBar 某一项的右上角的红点
 * @param {Object} options
 * @param {number} options.index tabBar 的哪一项，从左边算起
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function hideTabBarRedDot() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res4 = {
      errMsg: "hideTabBarRedDot".concat(isObject.msg)
    };
    console.error(_res4.errMsg);
    return Promise.reject(_res4);
  }

  var index = options.index,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'hideTabBarRedDot:ok'
  };

  if (typeof index !== 'number') {
    res.errMsg = getParameterError({
      name: 'hideTabBarRedDot',
      para: 'index',
      correct: 'Number',
      wrong: index
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroHideTabBarRedDotHandler', {
    index: index,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(fail, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 显示 tabBar
 * @param {Object} options
 * @param {boolean} [options.animation=false] 是否需要动画效果
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function showTabBar() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res5 = {
      errMsg: "showTabBar".concat(isObject.msg)
    };
    console.error(_res5.errMsg);
    return Promise.reject(_res5);
  }

  var animation = options.animation,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'showTabBar:ok'
  };

  if (options.hasOwnProperty('animation') && typeof animation !== 'boolean') {
    res.errMsg = getParameterError({
      name: 'showTabBar',
      para: 'animation',
      correct: 'Boolean',
      wrong: animation
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroShowTabBar', {
    animation: animation,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(success, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 隐藏 tabBar
 * @param {Object} options
 * @param {boolean} [options.animation=false] 是否需要动画效果
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function hideTabBar() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res6 = {
      errMsg: "hideTabBar".concat(isObject.msg)
    };
    console.error(_res6.errMsg);
    return Promise.reject(_res6);
  }

  var animation = options.animation,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'hideTabBar:ok'
  };

  if (options.hasOwnProperty('animation') && typeof animation !== 'boolean') {
    res.errMsg = getParameterError({
      name: 'hideTabBar',
      para: 'animation',
      correct: 'Boolean',
      wrong: animation
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  taro.eventCenter.trigger('__taroHideTabBar', {
    animation: animation,
    successHandler: successHandler(success, complete),
    errorHandler: errorHandler(success, complete)
  });
  return successHandler(success, complete)(res);
}
/**
 * 动态设置 tabBar 的整体样式
 * @param {Object} options 
 * @param {string} options.color tab 上的文字默认颜色，HexColor
 * @param {string} options.selectedColor tab 上的文字选中时的颜色，HexColor
 * @param {string} options.backgroundColor tab 的背景色，HexColor
 * @param {'black'|'white'} options.borderStyle tabBar上边框的颜色， 仅支持 black/white
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function setTabBarStyle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res7 = {
      errMsg: "setTabBarStyle".concat(isObject.msg)
    };
    console.error(_res7.errMsg);
    return Promise.reject(_res7);
  }

  var color = options.color,
      selectedColor = options.selectedColor,
      backgroundColor = options.backgroundColor,
      borderStyle = options.borderStyle,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setTabBarStyle:ok'
  };
  var errMsg;

  if (color && !isValidColor(color)) {
    errMsg = 'color';
  } else if (selectedColor && !isValidColor(selectedColor)) {
    errMsg = 'selectedColor';
  } else if (backgroundColor && !isValidColor(backgroundColor)) {
    errMsg = 'backgroundColor';
  } else if (borderStyle && !/^(black|white)$/.test(borderStyle)) {
    errMsg = 'borderStyle';
  }

  if (errMsg) {
    res.errMsg = "setTabBarStyle:fail invalid ".concat(errMsg);
    return errorHandler(fail, complete)(res);
  }

  if (!tabConf) {
    res.errMsg = 'setTabBarStyle:fail';
    return Promise.reject(res);
  }

  var obj = {};
  if (color) obj.color = color;
  if (selectedColor) obj.selectedColor = selectedColor;
  if (backgroundColor) obj.backgroundColor = backgroundColor;
  if (borderStyle) obj.borderStyle = borderStyle;
  var temp = Object.assign({}, tabConf, obj);
  App.setState && App.setState({
    __tabs: temp
  });
  return successHandler(success, complete)(res);
}
/**
 * 动态设置 tabBar 某一项的内容
 * @param {Object} options 
 * @param {number} options.index tabBar 的哪一项，从左边算起
 * @param {string} [options.text] tab 上的按钮文字
 * @param {string} [options.iconPath] 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
 * @param {string} [options.selectedIconPath] 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
 * @param {function} [options.success] 接口调用成功的回调函数
 * @param {function} [options.fail] 接口调用失败的回调函数
 * @param {function} [options.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

function setTabBarItem() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res8 = {
      errMsg: "setTabBarItem".concat(isObject.msg)
    };
    console.error(_res8.errMsg);
    return Promise.reject(_res8);
  }

  var index = options.index,
      text = options.text,
      iconPath = options.iconPath,
      selectedIconPath = options.selectedIconPath,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setTabBarItem:ok'
  };

  if (typeof index !== 'number') {
    res.errMsg = getParameterError({
      name: 'setTabBarItem',
      para: 'index',
      correct: 'Number',
      wrong: index
    });
    console.error(res.errMsg);
    return errorHandler(fail, complete)(res);
  }

  if (!tabConf || !tabConf.list || !tabConf.list[index]) {
    res.errMsg = 'setTabBarItem:fail tabbar item not found';
    return errorHandler(fail, complete)(res);
  }

  var obj = {};
  if (text) obj.text = text;
  if (iconPath) obj.iconPath = iconPath;
  if (selectedIconPath) obj.selectedIconPath = selectedIconPath;
  var temp = Object.assign({}, tabConf);
  temp.list[index] = Object.assign({}, temp.list[index], obj);
  App.setState && App.setState({
    __tabs: temp
  });
  return successHandler(success, complete)(res);
}

var vibrator = function vibrator(mm) {
  try {
    return window.navigator.vibrate(mm);
  } catch (e) {
    console.log('当前浏览器不支持vibrate');
  }
};
/**
 * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */


var vibrateShort = function vibrateShort() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  if (vibrator) {
    vibrator(15);
    return successHandler(success, complete)({
      errMsg: 'vibrateShort:ok'
    });
  } else {
    return errorHandler(fail, complete)({
      errMsg: 'vibrateShort:fail'
    });
  }
};
/**
 * 使手机发生较长时间的振动（400 ms)
 * @param {Object} object 参数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

var vibrateLong = function vibrateLong() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  if (vibrator) {
    vibrator(400);
    return successHandler(success, complete)({
      errMsg: 'vibrateLong:ok'
    });
  } else {
    return errorHandler(fail, complete)({
      errMsg: 'vibrateLong:fail'
    });
  }
};

/**
 * @typedef {Object} ChooseVideoParam
 * @property {Array.<string>} [sourceType=['album', 'camera']] 视频选择的来源
 * @property {boolean} [compressed=true] 是否压缩所选择的视频文件
 * @property {number} [maxDuration=60] 拍摄视频最长拍摄时间，单位秒
 * @property {string} [camera=back] 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
 * @property {function} [success] 接口调用成功的回调函数
 * @property {function} [fail] 接口调用失败的回调函数
 * @property {function} [complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 */

/**
 * 拍摄视频或从手机相册中选视频。
 * @param {ChooseVideoParam} options
 */

function chooseVideo(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "chooseVideo".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var _options$count = options.count,
      count = _options$count === void 0 ? 1 : _options$count,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'chooseVideo:ok',
    tempFilePaths: [],
    tempFiles: []
  };

  if (count && typeof count !== 'number') {
    res.errMsg = getParameterError({
      name: 'chooseVideo',
      para: 'count',
      correct: 'Number',
      wrong: count
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  var taroChooseVideo = document.createElement('input');
  taroChooseVideo.setAttribute('type', 'file');
  taroChooseVideo.setAttribute('multiple', 'multiple');
  taroChooseVideo.setAttribute('accept', 'video/*');
  taroChooseVideo.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;');
  document.body.appendChild(taroChooseVideo);
  var taroChooseVideoCallback;
  var taroChooseVideoPromise = new Promise(function (resolve) {
    taroChooseVideoCallback = resolve;
  });
  var TaroMouseEvents = document.createEvent('MouseEvents');
  TaroMouseEvents.initEvent('click', true, true);
  taroChooseVideo.dispatchEvent(TaroMouseEvents);

  taroChooseVideo.onchange = function (e) {
    var arr = _toConsumableArray(e.target.files);

    arr && arr.forEach(function (item) {
      var blob = new Blob([item], {
        type: item.type
      });
      var url = URL.createObjectURL(blob);
      res.tempFilePaths.push(url);
      res.tempFiles.push({
        path: url,
        size: item.size,
        type: item.type
      });
    });
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    taroChooseVideoCallback(res);
  };

  taroChooseVideoPromise["finally"](function () {
    document.body.removeChild(taroChooseVideo);
  });
  return taroChooseVideoPromise;
}
/**
 * 创建 video 上下文 VideoContext 对象。
 * @param {string} id <video> 组件的 id
 * @param {object} componentInstance 在自定义组件下，当前组件实例的this，以操作组件内 <video> 组件
 */

function createVideoContext(id, componentInstance) {
  var refId = "__taroref_".concat(id);
  return findRef(refId, componentInstance);
}

var SocketTask =
/*#__PURE__*/
function () {
  function SocketTask(url, protocols) {
    _classCallCheck(this, SocketTask);

    if (protocols && protocols.length) {
      this.ws = new WebSocket(url, protocols);
    } else {
      this.ws = new WebSocket(url);
    }

    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSING = 2;
    this.CLOSED = 3;
  }

  _createClass(SocketTask, [{
    key: "send",
    value: function send() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (_typeof(obj) !== 'object' || !obj) obj = {};
      var _obj = obj,
          _obj$data = _obj.data,
          data = _obj$data === void 0 ? '' : _obj$data,
          success = _obj.success,
          fail = _obj.fail,
          complete = _obj.complete;

      if (this.readyState !== 1) {
        var _res = {
          errMsg: 'SocketTask.send:fail SocketTask.readState is not OPEN'
        };
        console.error(_res.errMsg);
        typeof fail === 'function' && fail(_res);
        typeof complete === 'function' && complete(_res);
        return Promise.reject(_res);
      }

      this.ws.send(data);
      var res = {
        errMsg: 'sendSocketMessage:ok'
      };
      typeof success === 'function' && success(res);
      typeof complete === 'function' && complete(res);
      return Promise.resolve(res);
    }
  }, {
    key: "close",
    value: function close() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (_typeof(obj) !== 'object' || !obj) obj = {};
      var _obj2 = obj,
          _obj2$code = _obj2.code,
          code = _obj2$code === void 0 ? 1000 : _obj2$code,
          _obj2$reason = _obj2.reason,
          reason = _obj2$reason === void 0 ? 'server complete,close' : _obj2$reason,
          success = _obj2.success,
          complete = _obj2.complete;
      this.closeDetail = {
        code: code,
        reason: reason
      }; // 主动断开时需要重置链接数

      this._destroyWhenClose && this._destroyWhenClose();
      this.ws.close();
      var res = {
        errMsg: 'closeSocket:ok'
      };
      typeof success === 'function' && success(res);
      typeof complete === 'function' && complete(res);
      return Promise.resolve(res);
    }
  }, {
    key: "onOpen",
    value: function onOpen(func) {
      this.ws.onopen = func;
    }
  }, {
    key: "onMessage",
    value: function onMessage(func) {
      this.ws.onmessage = func;
    }
  }, {
    key: "onClose",
    value: function onClose(func) {
      var _this = this;

      this.ws.onclose = function () {
        // 若服务器方断掉也需要重置链接数
        _this._destroyWhenClose && _this._destroyWhenClose();
        func(_this.closeDetail || {
          code: 1006,
          reason: 'abnormal closure'
        });
      };
    }
  }, {
    key: "onError",
    value: function onError(func) {
      this.ws.onerror = func;
    }
  }, {
    key: "readyState",
    get: function get() {
      return this.ws.readyState;
    }
  }]);

  return SocketTask;
}();

var socketTasks = [];
var socketsCounter = 1;

function connectSocket(options) {
  var name = 'connectSocket';
  return new Promise(function (resolve, reject) {
    // options must be an Object
    var isObject = shouleBeObject(options);

    if (!isObject.res) {
      var _res = {
        errMsg: "".concat(name).concat(isObject.msg)
      };
      console.error(_res.errMsg);
      return reject(_res);
    }

    var url = options.url,
        protocols = options.protocols,
        success = options.success,
        fail = options.fail,
        complete = options.complete;
    var res = {
      errMsg: 'connectSocket:ok'
    }; // options.url must be String

    if (typeof url !== 'string') {
      res.errMsg = getParameterError({
        name: name,
        para: 'url',
        correct: 'String',
        wrong: url
      });
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    } // options.url must be invalid


    if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
      res.errMsg = "request:fail invalid url \"".concat(url, "\"");
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    } // protocols must be array


    var _protocols = Array.isArray(protocols) ? protocols : null; // 2 connection at most


    if (socketTasks.length > 1) {
      res.errMsg = '同时最多发起 2 个 socket 请求，更多请参考文档。';
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    }

    var task = new SocketTask(url, _protocols);

    task._destroyWhenClose = function () {
      var _this = this;

      socketTasks = socketTasks.filter(function (socketTask) {
        return socketTask !== _this;
      });
    };

    socketTasks.push(task);
    res.socketTaskId = socketsCounter++;
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    return resolve(task);
  });
}

function onSocketOpen() {
  console.warn('Deprecated.Please use socketTask.onOpen instead.');
}

function onSocketError() {
  console.warn('Deprecated.Please use socketTask.onError instead.');
}

function sendSocketMessage() {
  console.warn('Deprecated.Please use socketTask.send instead.');
}

function onSocketMessage() {
  console.warn('Deprecated.Please use socketTask.onMessage instead.');
}

function closeSocket() {
  console.warn('Deprecated.Please use socketTask.close instead.');
}

function onSocketClose() {
  console.warn('Deprecated.Please use socketTask.onClose instead.');
}

var callbackManager$3 = createCallbackManager();

var resizeListener = function resizeListener() {
  callbackManager$3.trigger({
    windowWidth: window.screen.width,
    windowHeight: window.screen.height
  });
};
/**
 * @typedef {Object} WindowResizeParam
 * @property {number} windowWidth 变化后的窗口宽度，单位 px
 * @property {number} windowHeight 变化后的窗口高度，单位 px
 */

/**
 * 监听窗口尺寸变化事件
 * @param {(size: WindowResizeParam) => void} callback 窗口尺寸变化事件的回调函数
 */


var onWindowResize = function onWindowResize(callback) {
  callbackManager$3.add(callback);

  if (callbackManager$3.count() === 1) {
    window.addEventListener('resize', resizeListener);
  }
};
/**
 * 取消监听窗口尺寸变化事件
 * @param {(size: WindowResizeParam) => void} callback 窗口尺寸变化事件的回调函数
 */

var offWindowResize = function offWindowResize(callback) {
  callbackManager$3.remove(callback);

  if (callbackManager$3.count() === 0) {
    window.removeEventListener('resize', resizeListener);
  }
};

/* 未支持的api */

var TaroApis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  onBackgroundAudioPlay: onBackgroundAudioPlay,
  onBackgroundAudioPause: onBackgroundAudioPause,
  onBackgroundAudioStop: onBackgroundAudioStop,
  onBluetoothAdapterStateChange: onBluetoothAdapterStateChange,
  onBluetoothDeviceFound: onBluetoothDeviceFound,
  onBLEConnectionStateChange: onBLEConnectionStateChange,
  onBLECharacteristicValueChange: onBLECharacteristicValueChange,
  onBeaconUpdate: onBeaconUpdate,
  onBeaconServiceChange: onBeaconServiceChange,
  onUserCaptureScreen: onUserCaptureScreen,
  onHCEMessage: onHCEMessage,
  onGetWifiList: onGetWifiList,
  onWifiConnected: onWifiConnected,
  offWifiConnected: offWifiConnected,
  offGetWifiList: offGetWifiList,
  getExtConfigSync: getExtConfigSync,
  getLogManager: getLogManager,
  onMemoryWarning: onMemoryWarning,
  reportAnalytics: reportAnalytics,
  navigateToSmartGameProgram: navigateToSmartGameProgram,
  getFileSystemManager: getFileSystemManager,
  stopRecord: stopRecord,
  getRecorderManager: getRecorderManager,
  pauseVoice: pauseVoice,
  stopVoice: stopVoice,
  pauseBackgroundAudio: pauseBackgroundAudio,
  stopBackgroundAudio: stopBackgroundAudio,
  getBackgroundAudioManager: getBackgroundAudioManager,
  createAudioContext: createAudioContext,
  createCameraContext: createCameraContext,
  createLivePlayerContext: createLivePlayerContext,
  createLivePusherContext: createLivePusherContext,
  createMapContext: createMapContext,
  canIUse: canIUse,
  showNavigationBarLoading: showNavigationBarLoading,
  hideNavigationBarLoading: hideNavigationBarLoading,
  drawCanvas: drawCanvas,
  hideKeyboard: hideKeyboard,
  createIntersectionObserver: createIntersectionObserver,
  getMenuButtonBoundingClientRect: getMenuButtonBoundingClientRect,
  getAccountInfoSync: getAccountInfoSync,
  getUpdateManager: getUpdateManager,
  createWorker: createWorker,
  saveImageToPhotosAlbum: saveImageToPhotosAlbum,
  startRecord: startRecord,
  playVoice: playVoice,
  setInnerAudioOption: setInnerAudioOption,
  getAvailableAudioSources: getAvailableAudioSources,
  getBackgroundAudioPlayerState: getBackgroundAudioPlayerState,
  playBackgroundAudio: playBackgroundAudio,
  seekBackgroundAudio: seekBackgroundAudio,
  saveVideoToPhotosAlbum: saveVideoToPhotosAlbum,
  loadFontFace: loadFontFace,
  saveFile: saveFile,
  getFileInfo: getFileInfo,
  getSavedFileList: getSavedFileList,
  getSavedFileInfo: getSavedFileInfo,
  removeSavedFile: removeSavedFile,
  openDocument: openDocument,
  openBluetoothAdapter: openBluetoothAdapter,
  closeBluetoothAdapter: closeBluetoothAdapter,
  getBluetoothAdapterState: getBluetoothAdapterState,
  startBluetoothDevicesDiscovery: startBluetoothDevicesDiscovery,
  stopBluetoothDevicesDiscovery: stopBluetoothDevicesDiscovery,
  getBluetoothDevices: getBluetoothDevices,
  getConnectedBluetoothDevices: getConnectedBluetoothDevices,
  createBLEConnection: createBLEConnection,
  closeBLEConnection: closeBLEConnection,
  getBLEDeviceServices: getBLEDeviceServices,
  getBLEDeviceCharacteristics: getBLEDeviceCharacteristics,
  readBLECharacteristicValue: readBLECharacteristicValue,
  writeBLECharacteristicValue: writeBLECharacteristicValue,
  notifyBLECharacteristicValueChange: notifyBLECharacteristicValueChange,
  startBeaconDiscovery: startBeaconDiscovery,
  stopBeaconDiscovery: stopBeaconDiscovery,
  getBeacons: getBeacons,
  setScreenBrightness: setScreenBrightness,
  getScreenBrightness: getScreenBrightness,
  setKeepScreenOn: setKeepScreenOn,
  addPhoneContact: addPhoneContact,
  getHCEState: getHCEState,
  startHCE: startHCE,
  stopHCE: stopHCE,
  sendHCEMessage: sendHCEMessage,
  startWifi: startWifi,
  stopWifi: stopWifi,
  connectWifi: connectWifi,
  getWifiList: getWifiList,
  setWifiList: setWifiList,
  getConnectedWifi: getConnectedWifi,
  setTopBarText: setTopBarText,
  setBackgroundColor: setBackgroundColor,
  setBackgroundTextStyle: setBackgroundTextStyle,
  getExtConfig: getExtConfig,
  login: login,
  checkSession: checkSession,
  authorize: authorize,
  getUserInfo: getUserInfo,
  checkIsSupportFacialRecognition: checkIsSupportFacialRecognition,
  startFacialRecognitionVerify: startFacialRecognitionVerify,
  startFacialRecognitionVerifyAndUploadVideo: startFacialRecognitionVerifyAndUploadVideo,
  faceVerifyForPay: faceVerifyForPay,
  showShareMenu: showShareMenu,
  hideShareMenu: hideShareMenu,
  updateShareMenu: updateShareMenu,
  getShareInfo: getShareInfo,
  chooseAddress: chooseAddress,
  addCard: addCard,
  openCard: openCard,
  openSetting: openSetting,
  getSetting: getSetting,
  getWeRunData: getWeRunData,
  navigateToMiniProgram: navigateToMiniProgram,
  navigateBackMiniProgram: navigateBackMiniProgram,
  chooseInvoice: chooseInvoice,
  chooseInvoiceTitle: chooseInvoiceTitle,
  checkIsSupportSoterAuthentication: checkIsSupportSoterAuthentication,
  startSoterAuthentication: startSoterAuthentication,
  checkIsSoterEnrolledInDevice: checkIsSoterEnrolledInDevice,
  setEnableDebug: setEnableDebug,
  ocrIdCard: ocrIdCard,
  ocrBankCard: ocrBankCard,
  ocrDrivingLicense: ocrDrivingLicense,
  ocrVehicleLicense: ocrVehicleLicense,
  textReview: textReview,
  textToAudio: textToAudio,
  imageAudit: imageAudit,
  advancedGeneralIdentify: advancedGeneralIdentify,
  objectDetectIdentify: objectDetectIdentify,
  carClassify: carClassify,
  dishClassify: dishClassify,
  logoClassify: logoClassify,
  animalClassify: animalClassify,
  plantClassify: plantClassify,
  getSwanId: getSwanId,
  requestPolymerPayment: requestPolymerPayment,
  navigateToSmartProgram: navigateToSmartProgram,
  navigateBackSmartProgram: navigateBackSmartProgram,
  preloadSubPackage: preloadSubPackage,
  stopAccelerometer: stopAccelerometer,
  startAccelerometer: startAccelerometer,
  onAccelerometerChange: onAccelerometerChange,
  createInnerAudioContext: createInnerAudioContext,
  canvasGetImageData: canvasGetImageData,
  canvasPutImageData: canvasPutImageData,
  canvasToTempFilePath: canvasToTempFilePath,
  createCanvasContext: createCanvasContext,
  setClipboardData: setClipboardData,
  getClipboardData: getClipboardData,
  stopCompass: stopCompass,
  startCompass: startCompass,
  onCompassChange: onCompassChange,
  createAnimation: createAnimation,
  createSelectorQuery: createSelectorQuery,
  nextTick: Nerv.nextTick,
  stopDeviceMotionListening: stopDeviceMotionListening,
  startDeviceMotionListening: startDeviceMotionListening,
  onDeviceMotionChange: onDeviceMotionChange,
  downloadFile: downloadFile,
  uploadFile: uploadFile,
  chooseImage: chooseImage,
  getImageInfo: getImageInfo,
  previewImage: previewImage,
  showToast: showToast,
  hideToast: hideToast,
  showLoading: showLoading,
  hideLoading: hideLoading,
  showModal: showModal,
  showActionSheet: showActionSheet,
  getLocation: getLocation,
  openLocation: openLocation,
  chooseLocation: chooseLocation,
  setNavigationBarTitle: setNavigationBarTitle,
  setNavigationBarColor: setNavigationBarColor,
  requestPayment: requestPayment,
  arrayBufferToBase64: arrayBufferToBase64,
  base64ToArrayBuffer: base64ToArrayBuffer,
  makePhoneCall: makePhoneCall,
  startPullDownRefresh: startPullDownRefresh,
  stopPullDownRefresh: stopPullDownRefresh,
  request: request,
  addInterceptor: addInterceptor,
  pageScrollTo: pageScrollTo,
  setStorage: setStorage,
  setStorageSync: setStorageSync,
  getStorage: getStorage,
  getStorageSync: getStorageSync,
  getStorageInfo: getStorageInfo,
  getStorageInfoSync: getStorageInfoSync,
  removeStorage: removeStorage,
  removeStorageSync: removeStorageSync,
  clearStorage: clearStorage,
  clearStorageSync: clearStorage,
  scanCode: scanCode,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfoSync,
  getNetworkType: getNetworkType,
  onNetworkStatusChange: onNetworkStatusChange,
  initTabBarApis: initTabBarApis,
  switchTab: switchTab,
  setTabBarBadge: setTabBarBadge,
  removeTabBarBadge: removeTabBarBadge,
  showTabBarRedDot: showTabBarRedDot,
  hideTabBarRedDot: hideTabBarRedDot,
  showTabBar: showTabBar,
  hideTabBar: hideTabBar,
  setTabBarStyle: setTabBarStyle,
  setTabBarItem: setTabBarItem,
  vibrateShort: vibrateShort,
  vibrateLong: vibrateLong,
  chooseVideo: chooseVideo,
  createVideoContext: createVideoContext,
  connectSocket: connectSocket,
  onSocketOpen: onSocketOpen,
  onSocketError: onSocketError,
  sendSocketMessage: sendSocketMessage,
  onSocketMessage: onSocketMessage,
  closeSocket: closeSocket,
  onSocketClose: onSocketClose,
  onWindowResize: onWindowResize,
  offWindowResize: offWindowResize,
  onPageScroll: onPageScroll,
  onReachBottom: onReachBottom
});

/* 这个入口提供给使用require的用户 */
Object.assign(taro, TaroApis);

Object.defineProperty(exports, 'Children', {
  enumerable: true,
  get: function () {
    return Nerv.Children;
  }
});
Object.defineProperty(exports, 'PropTypes', {
  enumerable: true,
  get: function () {
    return Nerv.PropTypes;
  }
});
Object.defineProperty(exports, 'cloneElement', {
  enumerable: true,
  get: function () {
    return Nerv.cloneElement;
  }
});
Object.defineProperty(exports, 'createContext', {
  enumerable: true,
  get: function () {
    return Nerv.createContext;
  }
});
Object.defineProperty(exports, 'createElement', {
  enumerable: true,
  get: function () {
    return Nerv.createElement;
  }
});
Object.defineProperty(exports, 'createFactory', {
  enumerable: true,
  get: function () {
    return Nerv.createFactory;
  }
});
Object.defineProperty(exports, 'createPortal', {
  enumerable: true,
  get: function () {
    return Nerv.createPortal;
  }
});
Object.defineProperty(exports, 'createRef', {
  enumerable: true,
  get: function () {
    return Nerv.createRef;
  }
});
Object.defineProperty(exports, 'findDOMNode', {
  enumerable: true,
  get: function () {
    return Nerv.findDOMNode;
  }
});
Object.defineProperty(exports, 'forwardRef', {
  enumerable: true,
  get: function () {
    return Nerv.forwardRef;
  }
});
Object.defineProperty(exports, 'hydrate', {
  enumerable: true,
  get: function () {
    return Nerv.hydrate;
  }
});
Object.defineProperty(exports, 'isValidElement', {
  enumerable: true,
  get: function () {
    return Nerv.isValidElement;
  }
});
Object.defineProperty(exports, 'memo', {
  enumerable: true,
  get: function () {
    return Nerv.memo;
  }
});
Object.defineProperty(exports, 'nextTick', {
  enumerable: true,
  get: function () {
    return Nerv.nextTick;
  }
});
Object.defineProperty(exports, 'options', {
  enumerable: true,
  get: function () {
    return Nerv.options;
  }
});
Object.defineProperty(exports, 'unmountComponentAtNode', {
  enumerable: true,
  get: function () {
    return Nerv.unmountComponentAtNode;
  }
});
Object.defineProperty(exports, 'unstable_batchedUpdates', {
  enumerable: true,
  get: function () {
    return Nerv.unstable_batchedUpdates;
  }
});
Object.defineProperty(exports, 'unstable_renderSubtreeIntoContainer', {
  enumerable: true,
  get: function () {
    return Nerv.unstable_renderSubtreeIntoContainer;
  }
});
Object.defineProperty(exports, 'useCallback', {
  enumerable: true,
  get: function () {
    return Nerv.useCallback;
  }
});
Object.defineProperty(exports, 'useContext', {
  enumerable: true,
  get: function () {
    return Nerv.useContext;
  }
});
Object.defineProperty(exports, 'useEffect', {
  enumerable: true,
  get: function () {
    return Nerv.useEffect;
  }
});
Object.defineProperty(exports, 'useImperativeHandle', {
  enumerable: true,
  get: function () {
    return Nerv.useImperativeHandle;
  }
});
Object.defineProperty(exports, 'useLayoutEffect', {
  enumerable: true,
  get: function () {
    return Nerv.useLayoutEffect;
  }
});
Object.defineProperty(exports, 'useMemo', {
  enumerable: true,
  get: function () {
    return Nerv.useMemo;
  }
});
Object.defineProperty(exports, 'useReducer', {
  enumerable: true,
  get: function () {
    return Nerv.useReducer;
  }
});
Object.defineProperty(exports, 'useRef', {
  enumerable: true,
  get: function () {
    return Nerv.useRef;
  }
});
Object.defineProperty(exports, 'useState', {
  enumerable: true,
  get: function () {
    return Nerv.useState;
  }
});
Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function () {
    return Nerv.version;
  }
});
exports.Component = Component;
exports.ENV_TYPE = ENV_TYPE;
exports.Events = Events;
exports.PureComponent = PureComponent;
exports.addCard = addCard;
exports.addInterceptor = addInterceptor;
exports.addPhoneContact = addPhoneContact;
exports.advancedGeneralIdentify = advancedGeneralIdentify;
exports.animalClassify = animalClassify;
exports.arrayBufferToBase64 = arrayBufferToBase64;
exports.authorize = authorize;
exports.base64ToArrayBuffer = base64ToArrayBuffer;
exports.canIUse = canIUse;
exports.canIUseWebp = canIUseWebp;
exports.canvasGetImageData = canvasGetImageData;
exports.canvasPutImageData = canvasPutImageData;
exports.canvasToTempFilePath = canvasToTempFilePath;
exports.carClassify = carClassify;
exports.checkIsSoterEnrolledInDevice = checkIsSoterEnrolledInDevice;
exports.checkIsSupportFacialRecognition = checkIsSupportFacialRecognition;
exports.checkIsSupportSoterAuthentication = checkIsSupportSoterAuthentication;
exports.checkSession = checkSession;
exports.chooseAddress = chooseAddress;
exports.chooseImage = chooseImage;
exports.chooseInvoice = chooseInvoice;
exports.chooseInvoiceTitle = chooseInvoiceTitle;
exports.chooseLocation = chooseLocation;
exports.chooseVideo = chooseVideo;
exports.clearStorage = clearStorage;
exports.clearStorageSync = clearStorage;
exports.closeBLEConnection = closeBLEConnection;
exports.closeBluetoothAdapter = closeBluetoothAdapter;
exports.closeSocket = closeSocket;
exports.connectSocket = connectSocket;
exports.connectWifi = connectWifi;
exports.createAnimation = createAnimation;
exports.createAudioContext = createAudioContext;
exports.createBLEConnection = createBLEConnection;
exports.createCameraContext = createCameraContext;
exports.createCanvasContext = createCanvasContext;
exports.createInnerAudioContext = createInnerAudioContext;
exports.createIntersectionObserver = createIntersectionObserver;
exports.createLivePlayerContext = createLivePlayerContext;
exports.createLivePusherContext = createLivePusherContext;
exports.createMapContext = createMapContext;
exports.createSelectorQuery = createSelectorQuery;
exports.createVideoContext = createVideoContext;
exports.createWorker = createWorker;
exports.default = taro;
exports.dishClassify = dishClassify;
exports.downloadFile = downloadFile;
exports.drawCanvas = drawCanvas;
exports.faceVerifyForPay = faceVerifyForPay;
exports.getAccountInfoSync = getAccountInfoSync;
exports.getApp = getApp;
exports.getAvailableAudioSources = getAvailableAudioSources;
exports.getBLEDeviceCharacteristics = getBLEDeviceCharacteristics;
exports.getBLEDeviceServices = getBLEDeviceServices;
exports.getBackgroundAudioManager = getBackgroundAudioManager;
exports.getBackgroundAudioPlayerState = getBackgroundAudioPlayerState;
exports.getBeacons = getBeacons;
exports.getBluetoothAdapterState = getBluetoothAdapterState;
exports.getBluetoothDevices = getBluetoothDevices;
exports.getClipboardData = getClipboardData;
exports.getConnectedBluetoothDevices = getConnectedBluetoothDevices;
exports.getConnectedWifi = getConnectedWifi;
exports.getEnv = getEnv;
exports.getExtConfig = getExtConfig;
exports.getExtConfigSync = getExtConfigSync;
exports.getFileInfo = getFileInfo;
exports.getFileSystemManager = getFileSystemManager;
exports.getHCEState = getHCEState;
exports.getImageInfo = getImageInfo;
exports.getLocation = getLocation;
exports.getLogManager = getLogManager;
exports.getMenuButtonBoundingClientRect = getMenuButtonBoundingClientRect;
exports.getNetworkType = getNetworkType;
exports.getRecorderManager = getRecorderManager;
exports.getSavedFileInfo = getSavedFileInfo;
exports.getSavedFileList = getSavedFileList;
exports.getScreenBrightness = getScreenBrightness;
exports.getSetting = getSetting;
exports.getShareInfo = getShareInfo;
exports.getStorage = getStorage;
exports.getStorageInfo = getStorageInfo;
exports.getStorageInfoSync = getStorageInfoSync;
exports.getStorageSync = getStorageSync;
exports.getSwanId = getSwanId;
exports.getSystemInfo = getSystemInfo;
exports.getSystemInfoSync = getSystemInfoSync;
exports.getUpdateManager = getUpdateManager;
exports.getUserInfo = getUserInfo;
exports.getWeRunData = getWeRunData;
exports.getWifiList = getWifiList;
exports.hideKeyboard = hideKeyboard;
exports.hideLoading = hideLoading;
exports.hideNavigationBarLoading = hideNavigationBarLoading;
exports.hideShareMenu = hideShareMenu;
exports.hideTabBar = hideTabBar;
exports.hideTabBarRedDot = hideTabBarRedDot;
exports.hideToast = hideToast;
exports.imageAudit = imageAudit;
exports.initPxTransform = initPxTransform$1;
exports.initTabBarApis = initTabBarApis;
exports.interceptors = interceptors;
exports.internal_safe_get = get;
exports.internal_safe_set = set;
exports.loadFontFace = loadFontFace;
exports.login = login;
exports.logoClassify = logoClassify;
exports.makePhoneCall = makePhoneCall;
exports.navigateBackMiniProgram = navigateBackMiniProgram;
exports.navigateBackSmartProgram = navigateBackSmartProgram;
exports.navigateToMiniProgram = navigateToMiniProgram;
exports.navigateToSmartGameProgram = navigateToSmartGameProgram;
exports.navigateToSmartProgram = navigateToSmartProgram;
exports.notifyBLECharacteristicValueChange = notifyBLECharacteristicValueChange;
exports.objectDetectIdentify = objectDetectIdentify;
exports.ocrBankCard = ocrBankCard;
exports.ocrDrivingLicense = ocrDrivingLicense;
exports.ocrIdCard = ocrIdCard;
exports.ocrVehicleLicense = ocrVehicleLicense;
exports.offGetWifiList = offGetWifiList;
exports.offWifiConnected = offWifiConnected;
exports.offWindowResize = offWindowResize;
exports.onAccelerometerChange = onAccelerometerChange;
exports.onBLECharacteristicValueChange = onBLECharacteristicValueChange;
exports.onBLEConnectionStateChange = onBLEConnectionStateChange;
exports.onBackgroundAudioPause = onBackgroundAudioPause;
exports.onBackgroundAudioPlay = onBackgroundAudioPlay;
exports.onBackgroundAudioStop = onBackgroundAudioStop;
exports.onBeaconServiceChange = onBeaconServiceChange;
exports.onBeaconUpdate = onBeaconUpdate;
exports.onBluetoothAdapterStateChange = onBluetoothAdapterStateChange;
exports.onBluetoothDeviceFound = onBluetoothDeviceFound;
exports.onCompassChange = onCompassChange;
exports.onDeviceMotionChange = onDeviceMotionChange;
exports.onGetWifiList = onGetWifiList;
exports.onHCEMessage = onHCEMessage;
exports.onMemoryWarning = onMemoryWarning;
exports.onNetworkStatusChange = onNetworkStatusChange;
exports.onPageScroll = onPageScroll;
exports.onReachBottom = onReachBottom;
exports.onSocketClose = onSocketClose;
exports.onSocketError = onSocketError;
exports.onSocketMessage = onSocketMessage;
exports.onSocketOpen = onSocketOpen;
exports.onUserCaptureScreen = onUserCaptureScreen;
exports.onWifiConnected = onWifiConnected;
exports.onWindowResize = onWindowResize;
exports.openBluetoothAdapter = openBluetoothAdapter;
exports.openCard = openCard;
exports.openDocument = openDocument;
exports.openLocation = openLocation;
exports.openSetting = openSetting;
exports.pageScrollTo = pageScrollTo;
exports.pauseBackgroundAudio = pauseBackgroundAudio;
exports.pauseVoice = pauseVoice;
exports.plantClassify = plantClassify;
exports.playBackgroundAudio = playBackgroundAudio;
exports.playVoice = playVoice;
exports.preloadSubPackage = preloadSubPackage;
exports.previewImage = previewImage;
exports.pxTransform = pxTransform;
exports.readBLECharacteristicValue = readBLECharacteristicValue;
exports.removeSavedFile = removeSavedFile;
exports.removeStorage = removeStorage;
exports.removeStorageSync = removeStorageSync;
exports.removeTabBarBadge = removeTabBarBadge;
exports.render = render;
exports.reportAnalytics = reportAnalytics;
exports.request = request;
exports.requestPayment = requestPayment;
exports.requestPolymerPayment = requestPolymerPayment;
exports.requirePlugin = requirePlugin;
exports.saveFile = saveFile;
exports.saveImageToPhotosAlbum = saveImageToPhotosAlbum;
exports.saveVideoToPhotosAlbum = saveVideoToPhotosAlbum;
exports.scanCode = scanCode;
exports.seekBackgroundAudio = seekBackgroundAudio;
exports.sendHCEMessage = sendHCEMessage;
exports.sendSocketMessage = sendSocketMessage;
exports.setBackgroundColor = setBackgroundColor;
exports.setBackgroundTextStyle = setBackgroundTextStyle;
exports.setClipboardData = setClipboardData;
exports.setEnableDebug = setEnableDebug;
exports.setInnerAudioOption = setInnerAudioOption;
exports.setKeepScreenOn = setKeepScreenOn;
exports.setNavigationBarColor = setNavigationBarColor;
exports.setNavigationBarTitle = setNavigationBarTitle;
exports.setScreenBrightness = setScreenBrightness;
exports.setStorage = setStorage;
exports.setStorageSync = setStorageSync;
exports.setTabBarBadge = setTabBarBadge;
exports.setTabBarItem = setTabBarItem;
exports.setTabBarStyle = setTabBarStyle;
exports.setTopBarText = setTopBarText;
exports.setWifiList = setWifiList;
exports.showActionSheet = showActionSheet;
exports.showLoading = showLoading;
exports.showModal = showModal;
exports.showNavigationBarLoading = showNavigationBarLoading;
exports.showShareMenu = showShareMenu;
exports.showTabBar = showTabBar;
exports.showTabBarRedDot = showTabBarRedDot;
exports.showToast = showToast;
exports.startAccelerometer = startAccelerometer;
exports.startBeaconDiscovery = startBeaconDiscovery;
exports.startBluetoothDevicesDiscovery = startBluetoothDevicesDiscovery;
exports.startCompass = startCompass;
exports.startDeviceMotionListening = startDeviceMotionListening;
exports.startFacialRecognitionVerify = startFacialRecognitionVerify;
exports.startFacialRecognitionVerifyAndUploadVideo = startFacialRecognitionVerifyAndUploadVideo;
exports.startHCE = startHCE;
exports.startPullDownRefresh = startPullDownRefresh;
exports.startRecord = startRecord;
exports.startSoterAuthentication = startSoterAuthentication;
exports.startWifi = startWifi;
exports.stopAccelerometer = stopAccelerometer;
exports.stopBackgroundAudio = stopBackgroundAudio;
exports.stopBeaconDiscovery = stopBeaconDiscovery;
exports.stopBluetoothDevicesDiscovery = stopBluetoothDevicesDiscovery;
exports.stopCompass = stopCompass;
exports.stopDeviceMotionListening = stopDeviceMotionListening;
exports.stopHCE = stopHCE;
exports.stopPullDownRefresh = stopPullDownRefresh;
exports.stopRecord = stopRecord;
exports.stopVoice = stopVoice;
exports.stopWifi = stopWifi;
exports.switchTab = switchTab;
exports.textReview = textReview;
exports.textToAudio = textToAudio;
exports.updateShareMenu = updateShareMenu;
exports.uploadFile = uploadFile;
exports.useDidHide = useDidHide;
exports.useDidShow = useDidShow;
exports.usePageScroll = usePageScroll;
exports.usePullDownRefresh = usePullDownRefresh;
exports.useReachBottom = useReachBottom;
exports.useRouter = useRouter;
exports.vibrateLong = vibrateLong;
exports.vibrateShort = vibrateShort;
exports.writeBLECharacteristicValue = writeBLECharacteristicValue;
