import { unref, renderSlot, resolveDynamicComponent, createVNode, h, defineComponent, computed, mergeProps, isVNode, resolveComponent, ref, watch, getCurrentScope, onScopeDispose, getCurrentInstance, onMounted, nextTick, openBlock, createElementBlock, createElementVNode, warn, inject, toRef, onUnmounted, isRef, onBeforeUnmount, onBeforeMount, provide, useAttrs as useAttrs$1, useSlots, shallowRef, withDirectives, createCommentVNode, Fragment, normalizeClass, createBlock, withCtx, withModifiers, toDisplayString, normalizeStyle, vShow, Transition, reactive, onUpdated, cloneVNode, Text, Comment, Teleport, readonly, onDeactivated, toRaw, vModelCheckbox, createTextVNode, toRefs, vModelRadio, toHandlers, watchEffect, triggerRef, resolveDirective, renderList, withKeys, vModelText, createSlots } from "vue";
import { useRoute } from "vue-router";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module2, exports2) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE2 = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT2 = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE2 = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG2 = 1, CLONE_FLAT_FLAG2 = 2, CLONE_SYMBOLS_FLAG2 = 4;
    var COMPARE_PARTIAL_FLAG2 = 1, COMPARE_UNORDERED_FLAG2 = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT2 = 800, HOT_SPAN2 = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY2 = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN2 = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp2 = /^\w*$/, rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar2.source);
    var reTrimStart2 = /^\s+/;
    var reWhitespace2 = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar2 = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags2 = /\w*$/;
    var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary2 = /^0b[01]+$/i;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsOctal2 = /^0o[0-7]+$/i;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
    typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
    var cloneableTags2 = {};
    cloneableTags2[argsTag2] = cloneableTags2[arrayTag2] = cloneableTags2[arrayBufferTag2] = cloneableTags2[dataViewTag2] = cloneableTags2[boolTag2] = cloneableTags2[dateTag2] = cloneableTags2[float32Tag2] = cloneableTags2[float64Tag2] = cloneableTags2[int8Tag2] = cloneableTags2[int16Tag2] = cloneableTags2[int32Tag2] = cloneableTags2[mapTag2] = cloneableTags2[numberTag2] = cloneableTags2[objectTag2] = cloneableTags2[regexpTag2] = cloneableTags2[setTag2] = cloneableTags2[stringTag2] = cloneableTags2[symbolTag2] = cloneableTags2[uint8Tag2] = cloneableTags2[uint8ClampedTag2] = cloneableTags2[uint16Tag2] = cloneableTags2[uint32Tag2] = true;
    cloneableTags2[errorTag2] = cloneableTags2[funcTag2] = cloneableTags2[weakMapTag2] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt2 = parseInt;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports2 = exports2 && !exports2.nodeType && exports2;
    var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
    var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    var freeProcess2 = moduleExports2 && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types2 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types2) {
          return types2;
        }
        return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap2 = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet2 = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function apply2(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array4, setter, iteratee, accumulator) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      while (++index < length) {
        var value = array4[index];
        setter(accumulator, value, iteratee(value), array4);
      }
      return accumulator;
    }
    function arrayEach2(array4, iteratee) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      while (++index < length) {
        if (iteratee(array4[index], index, array4) === false) {
          break;
        }
      }
      return array4;
    }
    function arrayEachRight(array4, iteratee) {
      var length = array4 == null ? 0 : array4.length;
      while (length--) {
        if (iteratee(array4[length], length, array4) === false) {
          break;
        }
      }
      return array4;
    }
    function arrayEvery(array4, predicate) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      while (++index < length) {
        if (!predicate(array4[index], index, array4)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter2(array4, predicate) {
      var index = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array4[index];
        if (predicate(value, index, array4)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array4, value) {
      var length = array4 == null ? 0 : array4.length;
      return !!length && baseIndexOf(array4, value, 0) > -1;
    }
    function arrayIncludesWith(array4, value, comparator) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      while (++index < length) {
        if (comparator(value, array4[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap2(array4, iteratee) {
      var index = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array4[index], index, array4);
      }
      return result;
    }
    function arrayPush2(array4, values) {
      var index = -1, length = values.length, offset = array4.length;
      while (++index < length) {
        array4[offset + index] = values[index];
      }
      return array4;
    }
    function arrayReduce(array4, iteratee, accumulator, initAccum) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      if (initAccum && length) {
        accumulator = array4[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array4[index], index, array4);
      }
      return accumulator;
    }
    function arrayReduceRight(array4, iteratee, accumulator, initAccum) {
      var length = array4 == null ? 0 : array4.length;
      if (initAccum && length) {
        accumulator = array4[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array4[length], length, array4);
      }
      return accumulator;
    }
    function arraySome2(array4, predicate) {
      var index = -1, length = array4 == null ? 0 : array4.length;
      while (++index < length) {
        if (predicate(array4[index], index, array4)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string3) {
      return string3.split("");
    }
    function asciiWords(string3) {
      return string3.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array4, predicate, fromIndex, fromRight) {
      var length = array4.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array4[index], index, array4)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array4, value, fromIndex) {
      return value === value ? strictIndexOf(array4, value, fromIndex) : baseFindIndex(array4, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array4, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array4.length;
      while (++index < length) {
        if (comparator(array4[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array4, iteratee) {
      var length = array4 == null ? 0 : array4.length;
      return length ? baseSum(array4, iteratee) / length : NAN2;
    }
    function baseProperty(key) {
      return function(object4) {
        return object4 == null ? undefined$1 : object4[key];
      };
    }
    function basePropertyOf(object4) {
      return function(key) {
        return object4 == null ? undefined$1 : object4[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array4, comparer) {
      var length = array4.length;
      array4.sort(comparer);
      while (length--) {
        array4[length] = array4[length].value;
      }
      return array4;
    }
    function baseSum(array4, iteratee) {
      var result, index = -1, length = array4.length;
      while (++index < length) {
        var current = iteratee(array4[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes2(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object4, props) {
      return arrayMap2(props, function(key) {
        return [key, object4[key]];
      });
    }
    function baseTrim2(string3) {
      return string3 ? string3.slice(0, trimmedEndIndex2(string3) + 1).replace(reTrimStart2, "") : string3;
    }
    function baseUnary2(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object4, props) {
      return arrayMap2(props, function(key) {
        return object4[key];
      });
    }
    function cacheHas2(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array4, placeholder) {
      var length = array4.length, result = 0;
      while (length--) {
        if (array4[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue2(object4, key) {
      return object4 == null ? undefined$1 : object4[key];
    }
    function hasUnicode(string3) {
      return reHasUnicode.test(string3);
    }
    function hasUnicodeWord(string3) {
      return reHasUnicodeWord.test(string3);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray2(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array4, placeholder) {
      var index = -1, length = array4.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array4[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array4[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray2(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array4, value, fromIndex) {
      var index = fromIndex - 1, length = array4.length;
      while (++index < length) {
        if (array4[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array4, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array4[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string3) {
      return hasUnicode(string3) ? unicodeSize(string3) : asciiSize(string3);
    }
    function stringToArray(string3) {
      return hasUnicode(string3) ? unicodeToArray(string3) : asciiToArray(string3);
    }
    function trimmedEndIndex2(string3) {
      var index = string3.length;
      while (index-- && reWhitespace2.test(string3.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string3) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string3)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string3) {
      return string3.match(reUnicode) || [];
    }
    function unicodeWords(string3) {
      return string3.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto2 = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
      var coreJsData2 = context["__core-js_shared__"];
      var funcToString2 = funcProto2.toString;
      var hasOwnProperty2 = objectProto2.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey2 = function() {
        var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString2 = objectProto2.toString;
      var objectCtorString = funcToString2.call(Object2);
      var oldDash = root2._;
      var reIsNative2 = RegExp2(
        "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports2 ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe2 = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype2 = overArg2(Object2.getPrototypeOf, Object2), objectCreate2 = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice, spreadableSymbol2 = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty2 = function() {
        try {
          var func = getNative2(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols2 = Object2.getOwnPropertySymbols, nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto2.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax2 = Math2.max, nativeMin2 = Math2.min, nativeNow2 = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto2.reverse;
      var DataView2 = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap2 = getNative2(context, "WeakMap"), nativeCreate2 = getNative2(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
      var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : undefined$1, symbolToString2 = symbolProto2 ? symbolProto2.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate2 = function() {
        function object4() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate2) {
            return objectCreate2(proto);
          }
          object4.prototype = proto;
          var result2 = new object4();
          object4.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate2(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray2(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray2(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray2(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array4 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array4), isRight = dir < 0, arrLength = isArr ? array4.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin2(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array4, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array4[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type4 = data.type, computed2 = iteratee2(value);
              if (type4 == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type4 == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate2(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear2() {
        this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
        this.size = 0;
      }
      function hashDelete2(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet2(key) {
        var data = this.__data__;
        if (nativeCreate2) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED2 ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas2(key) {
        var data = this.__data__;
        return nativeCreate2 ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet2(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate2 && value === undefined$1 ? HASH_UNDEFINED2 : value;
        return this;
      }
      Hash2.prototype.clear = hashClear2;
      Hash2.prototype["delete"] = hashDelete2;
      Hash2.prototype.get = hashGet2;
      Hash2.prototype.has = hashHas2;
      Hash2.prototype.set = hashSet2;
      function ListCache2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear2() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete2(key) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice2.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet2(key) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas2(key) {
        return assocIndexOf2(this.__data__, key) > -1;
      }
      function listCacheSet2(key, value) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache2.prototype.clear = listCacheClear2;
      ListCache2.prototype["delete"] = listCacheDelete2;
      ListCache2.prototype.get = listCacheGet2;
      ListCache2.prototype.has = listCacheHas2;
      ListCache2.prototype.set = listCacheSet2;
      function MapCache2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear2() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash2(),
          "map": new (Map2 || ListCache2)(),
          "string": new Hash2()
        };
      }
      function mapCacheDelete2(key) {
        var result2 = getMapData2(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet2(key) {
        return getMapData2(this, key).get(key);
      }
      function mapCacheHas2(key) {
        return getMapData2(this, key).has(key);
      }
      function mapCacheSet2(key, value) {
        var data = getMapData2(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache2.prototype.clear = mapCacheClear2;
      MapCache2.prototype["delete"] = mapCacheDelete2;
      MapCache2.prototype.get = mapCacheGet2;
      MapCache2.prototype.has = mapCacheHas2;
      MapCache2.prototype.set = mapCacheSet2;
      function SetCache2(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache2();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd2(value) {
        this.__data__.set(value, HASH_UNDEFINED2);
        return this;
      }
      function setCacheHas2(value) {
        return this.__data__.has(value);
      }
      SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
      SetCache2.prototype.has = setCacheHas2;
      function Stack2(entries) {
        var data = this.__data__ = new ListCache2(entries);
        this.size = data.size;
      }
      function stackClear2() {
        this.__data__ = new ListCache2();
        this.size = 0;
      }
      function stackDelete2(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet2(key) {
        return this.__data__.get(key);
      }
      function stackHas2(key) {
        return this.__data__.has(key);
      }
      function stackSet2(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache2) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache2(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack2.prototype.clear = stackClear2;
      Stack2.prototype["delete"] = stackDelete2;
      Stack2.prototype.get = stackGet2;
      Stack2.prototype.has = stackHas2;
      Stack2.prototype.set = stackSet2;
      function arrayLikeKeys2(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex2(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array4) {
        var length = array4.length;
        return length ? array4[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array4, n) {
        return shuffleSelf(copyArray2(array4), baseClamp(n, 0, array4.length));
      }
      function arrayShuffle(array4) {
        return shuffleSelf(copyArray2(array4));
      }
      function assignMergeValue(object4, key, value) {
        if (value !== undefined$1 && !eq2(object4[key], value) || value === undefined$1 && !(key in object4)) {
          baseAssignValue2(object4, key, value);
        }
      }
      function assignValue2(object4, key, value) {
        var objValue = object4[key];
        if (!(hasOwnProperty2.call(object4, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object4)) {
          baseAssignValue2(object4, key, value);
        }
      }
      function assocIndexOf2(array4, key) {
        var length = array4.length;
        while (length--) {
          if (eq2(array4[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign2(object4, source) {
        return object4 && copyObject2(source, keys2(source), object4);
      }
      function baseAssignIn2(object4, source) {
        return object4 && copyObject2(source, keysIn2(source), object4);
      }
      function baseAssignValue2(object4, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object4, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object4[key] = value;
        }
      }
      function baseAt(object4, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object4 == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get2(object4, paths[index]);
        }
        return result2;
      }
      function baseClamp(number4, lower, upper) {
        if (number4 === number4) {
          if (upper !== undefined$1) {
            number4 = number4 <= upper ? number4 : upper;
          }
          if (lower !== undefined$1) {
            number4 = number4 >= lower ? number4 : lower;
          }
        }
        return number4;
      }
      function baseClone2(value, bitmask, customizer, key, object4, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG2, isFlat = bitmask & CLONE_FLAT_FLAG2, isFull = bitmask & CLONE_SYMBOLS_FLAG2;
        if (customizer) {
          result2 = object4 ? customizer(value, key, object4, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray2(value);
          if (!isDeep) {
            return copyArray2(value, result2);
          }
        } else {
          var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
          if (isBuffer2(value)) {
            return cloneBuffer2(value, isDeep);
          }
          if (tag == objectTag2 || tag == argsTag2 || isFunc && !object4) {
            result2 = isFlat || isFunc ? {} : initCloneObject2(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn2(value, baseAssignIn2(result2, value)) : copySymbols2(value, baseAssign2(result2, value));
            }
          } else {
            if (!cloneableTags2[tag]) {
              return object4 ? value : {};
            }
            result2 = initCloneByTag2(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack2());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet2(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone2(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap2(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn2 : getAllKeys2 : isFlat ? keysIn2 : keys2;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach2(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue2(result2, key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys2(source);
        return function(object4) {
          return baseConformsTo(object4, source, props);
        };
      }
      function baseConformsTo(object4, source, props) {
        var length = props.length;
        if (object4 == null) {
          return !length;
        }
        object4 = Object2(object4);
        while (length--) {
          var key = props[length], predicate = source[key], value = object4[key];
          if (value === undefined$1 && !(key in object4) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array4, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array4.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap2(values2, baseUnary2(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE2) {
          includes2 = cacheHas2;
          isCommon = false;
          values2 = new SetCache2(values2);
        }
        outer:
          while (++index < length) {
            var value = array4[index], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array4, iteratee2, comparator) {
        var index = -1, length = array4.length;
        while (++index < length) {
          var value = array4[index], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array4, value, start, end) {
        var length = array4.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array4[start++] = value;
        }
        return array4;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten2(array4, depth, predicate, isStrict, result2) {
        var index = -1, length = array4.length;
        predicate || (predicate = isFlattenable2);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array4[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten2(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush2(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object4, iteratee2) {
        return object4 && baseFor(object4, iteratee2, keys2);
      }
      function baseForOwnRight(object4, iteratee2) {
        return object4 && baseForRight(object4, iteratee2, keys2);
      }
      function baseFunctions(object4, props) {
        return arrayFilter2(props, function(key) {
          return isFunction2(object4[key]);
        });
      }
      function baseGet2(object4, path) {
        path = castPath2(path, object4);
        var index = 0, length = path.length;
        while (object4 != null && index < length) {
          object4 = object4[toKey2(path[index++])];
        }
        return index && index == length ? object4 : undefined$1;
      }
      function baseGetAllKeys2(object4, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object4);
        return isArray2(object4) ? result2 : arrayPush2(result2, symbolsFunc(object4));
      }
      function baseGetTag2(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag2 : nullTag2;
        }
        return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object4, key) {
        return object4 != null && hasOwnProperty2.call(object4, key);
      }
      function baseHasIn2(object4, key) {
        return object4 != null && key in Object2(object4);
      }
      function baseInRange(number4, start, end) {
        return number4 >= nativeMin2(start, end) && number4 < nativeMax2(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array4 = arrays[othIndex];
          if (othIndex && iteratee2) {
            array4 = arrayMap2(array4, baseUnary2(iteratee2));
          }
          maxLength = nativeMin2(array4.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array4.length >= 120) ? new SetCache2(othIndex && array4) : undefined$1;
        }
        array4 = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array4[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas2(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas2(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object4, setter, iteratee2, accumulator) {
        baseForOwn(object4, function(value, key, object5) {
          setter(accumulator, iteratee2(value), key, object5);
        });
        return accumulator;
      }
      function baseInvoke(object4, path, args) {
        path = castPath2(path, object4);
        object4 = parent(object4, path);
        var func = object4 == null ? object4 : object4[toKey2(last(path))];
        return func == null ? undefined$1 : apply2(func, object4, args);
      }
      function baseIsArguments2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
      }
      function baseIsDate(value) {
        return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
      }
      function baseIsEqual2(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep2(value, other, bitmask, customizer, baseIsEqual2, stack);
      }
      function baseIsEqualDeep2(object4, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object4), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag2(object4), othTag = othIsArr ? arrayTag2 : getTag2(other);
        objTag = objTag == argsTag2 ? objectTag2 : objTag;
        othTag = othTag == argsTag2 ? objectTag2 : othTag;
        var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object4)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack2());
          return objIsArr || isTypedArray2(object4) ? equalArrays2(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag2(object4, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG2)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack2());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack2());
        return equalObjects2(object4, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap2(value) {
        return isObjectLike2(value) && getTag2(value) == mapTag2;
      }
      function baseIsMatch(object4, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object4 == null) {
          return !length;
        }
        object4 = Object2(object4);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object4[data[0]] : !(data[0] in object4)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object4[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object4)) {
              return false;
            }
          } else {
            var stack = new Stack2();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object4, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative2(value) {
        if (!isObject2(value) || isMasked2(value)) {
          return false;
        }
        var pattern4 = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
        return pattern4.test(toSource2(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
      }
      function baseIsSet2(value) {
        return isObjectLike2(value) && getTag2(value) == setTag2;
      }
      function baseIsTypedArray2(value) {
        return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys2(object4) {
        if (!isPrototype2(object4)) {
          return nativeKeys2(object4);
        }
        var result2 = [];
        for (var key in Object2(object4)) {
          if (hasOwnProperty2.call(object4, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn2(object4) {
        if (!isObject2(object4)) {
          return nativeKeysIn2(object4);
        }
        var isProto = isPrototype2(object4), result2 = [];
        for (var key in object4) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object4, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object4) {
          return object4 === source || baseIsMatch(object4, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey2(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey2(path), srcValue);
        }
        return function(object4) {
          var objValue = get2(object4, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn2(object4, path) : baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2);
        };
      }
      function baseMerge(object4, source, srcIndex, customizer, stack) {
        if (object4 === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack2());
          if (isObject2(srcValue)) {
            baseMergeDeep(object4, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object4, key), srcValue, key + "", object4, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object4, key, newValue);
          }
        }, keysIn2);
      }
      function baseMergeDeep(object4, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object4, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object4, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object4, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray2(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer2(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray2(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments2(srcValue)) {
            newValue = objValue;
            if (isArguments2(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject2(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object4, key, newValue);
      }
      function baseNth(array4, n) {
        var length = array4.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex2(n, length) ? array4[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap2(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet2(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity2];
        }
        var index = -1;
        iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap2(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object4, other) {
          return compareMultiple(object4, other, orders);
        });
      }
      function basePick2(object4, paths) {
        return basePickBy2(object4, paths, function(value, path) {
          return hasIn2(object4, path);
        });
      }
      function basePickBy2(object4, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet2(object4, path);
          if (predicate(value, path)) {
            baseSet2(result2, castPath2(path, object4), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object4) {
          return baseGet2(object4, path);
        };
      }
      function basePullAll(array4, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array4;
        if (array4 === values2) {
          values2 = copyArray2(values2);
        }
        if (iteratee2) {
          seen = arrayMap2(array4, baseUnary2(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array4) {
              splice2.call(seen, fromIndex, 1);
            }
            splice2.call(array4, fromIndex, 1);
          }
        }
        return array4;
      }
      function basePullAt(array4, indexes) {
        var length = array4 ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex2(index)) {
              splice2.call(array4, index, 1);
            } else {
              baseUnset(array4, index);
            }
          }
        }
        return array4;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax2(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string3, n) {
        var result2 = "";
        if (!string3 || n < 1 || n > MAX_SAFE_INTEGER2) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string3;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string3 += string3;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString2(overRest2(func, start, identity2), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array4 = values(collection);
        return shuffleSelf(array4, baseClamp(n, 0, array4.length));
      }
      function baseSet2(object4, path, value, customizer) {
        if (!isObject2(object4)) {
          return object4;
        }
        path = castPath2(path, object4);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object4;
        while (nested != null && ++index < length) {
          var key = toKey2(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object4;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex2(path[index + 1]) ? [] : {};
            }
          }
          assignValue2(nested, key, newValue);
          nested = nested[key];
        }
        return object4;
      }
      var baseSetData = !metaMap ? identity2 : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString2 = !defineProperty2 ? identity2 : function(func, string3) {
        return defineProperty2(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string3),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array4, start, end) {
        var index = -1, length = array4.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array4[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array4, value, retHighest) {
        var low = 0, high = array4 == null ? low : array4.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array4[mid];
            if (computed2 !== null && !isSymbol2(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array4, value, identity2, retHighest);
      }
      function baseSortedIndexBy(array4, value, iteratee2, retHighest) {
        var low = 0, high = array4 == null ? 0 : array4.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array4[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol2(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin2(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array4, iteratee2) {
        var index = -1, length = array4.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array4[index], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq2(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        return +value;
      }
      function baseToString2(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap2(value, baseToString2) + "";
        }
        if (isSymbol2(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function baseUniq(array4, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array4.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE2) {
          var set3 = iteratee2 ? null : createSet(array4);
          if (set3) {
            return setToArray2(set3);
          }
          isCommon = false;
          includes2 = cacheHas2;
          seen = new SetCache2();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array4[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object4, path) {
        path = castPath2(path, object4);
        object4 = parent(object4, path);
        return object4 == null || delete object4[toKey2(last(path))];
      }
      function baseUpdate(object4, path, updater, customizer) {
        return baseSet2(object4, path, updater(baseGet2(object4, path)), customizer);
      }
      function baseWhile(array4, predicate, isDrop, fromRight) {
        var length = array4.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array4[index], index, array4)) {
        }
        return isDrop ? baseSlice(array4, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array4, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush2([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array4 = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array4, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten2(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      function castPath2(value, object4) {
        if (isArray2(value)) {
          return value;
        }
        return isKey2(value, object4) ? [value] : stringToPath2(toString2(value));
      }
      var castRest = baseRest;
      function castSlice(array4, start, end) {
        var length = array4.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array4 : baseSlice(array4, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root2.clearTimeout(id);
      };
      function cloneBuffer2(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer2(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView2(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp2(regexp4) {
        var result2 = new regexp4.constructor(regexp4.source, reFlags2.exec(regexp4));
        result2.lastIndex = regexp4.lastIndex;
        return result2;
      }
      function cloneSymbol2(symbol) {
        return symbolValueOf2 ? Object2(symbolValueOf2.call(symbol)) : {};
      }
      function cloneTypedArray2(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object4, other, orders) {
        var index = -1, objCriteria = object4.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object4.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray2(source, array4) {
        var index = -1, length = source.length;
        array4 || (array4 = Array2(length));
        while (++index < length) {
          array4[index] = source[index];
        }
        return array4;
      }
      function copyObject2(source, props, object4, customizer) {
        var isNew = !object4;
        object4 || (object4 = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue2(object4, key, newValue);
          } else {
            assignValue2(object4, key, newValue);
          }
        }
        return object4;
      }
      function copySymbols2(source, object4) {
        return copyObject2(source, getSymbols2(source), object4);
      }
      function copySymbolsIn2(source, object4) {
        return copyObject2(source, getSymbolsIn2(source), object4);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object4, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object4 = Object2(object4);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object4, source, index, customizer);
            }
          }
          return object4;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike2(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object4, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object4), props = keysFunc(object4), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object4;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn2.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string3) {
          string3 = toString2(string3);
          var strSymbols = hasUnicode(string3) ? stringToArray(string3) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string3.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string3.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string3) {
          return arrayReduce(words(deburr(string3).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate2(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              undefined$1,
              args,
              holders,
              undefined$1,
              undefined$1,
              arity - length
            );
          }
          var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply2(fn2, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike2(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys2(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest2(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT2);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              thisArg,
              args,
              newHolders,
              argPos,
              ary2,
              arity - length
            );
          }
          var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn2 = Ctor || createCtor(fn2);
          }
          return fn2.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object4, iteratee2) {
          return baseInverter(object4, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString2(value);
              other = baseToString2(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest2(function(iteratees) {
          iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply2(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString2(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply2(fn2, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber2(value);
            other = toNumber2(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number4, precision) {
          number4 = toNumber2(number4);
          precision = precision == null ? 0 : nativeMin2(toInteger(precision), 292);
          if (precision && nativeIsFinite(number4)) {
            var pair = (toString2(number4) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString2(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number4);
        };
      }
      var createSet = !(Set2 && 1 / setToArray2(new Set2([, -0]))[1] == INFINITY2) ? noop2 : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object4) {
          var tag = getTag2(object4);
          if (tag == mapTag2) {
            return mapToArray2(object4);
          }
          if (tag == setTag2) {
            return setToPairs(object4);
          }
          return baseToPairs(object4, keysFunc(object4));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax2(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax2(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object4) {
        if (objValue === undefined$1 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object4, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object4, source, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays2(array4, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, arrLength = array4.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array4);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array4;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG2 ? new SetCache2() : undefined$1;
        stack.set(array4, other);
        stack.set(other, array4);
        while (++index < arrLength) {
          var arrValue = array4[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array4, stack) : customizer(arrValue, othValue, index, array4, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome2(other, function(othValue2, othIndex) {
              if (!cacheHas2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array4);
        stack["delete"](other);
        return result2;
      }
      function equalByTag2(object4, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag2:
            if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
              return false;
            }
            object4 = object4.buffer;
            other = other.buffer;
          case arrayBufferTag2:
            if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object4), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag2:
          case dateTag2:
          case numberTag2:
            return eq2(+object4, +other);
          case errorTag2:
            return object4.name == other.name && object4.message == other.message;
          case regexpTag2:
          case stringTag2:
            return object4 == other + "";
          case mapTag2:
            var convert = mapToArray2;
          case setTag2:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
            convert || (convert = setToArray2);
            if (object4.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object4);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG2;
            stack.set(object4, other);
            var result2 = equalArrays2(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object4);
            return result2;
          case symbolTag2:
            if (symbolValueOf2) {
              return symbolValueOf2.call(object4) == symbolValueOf2.call(other);
            }
        }
        return false;
      }
      function equalObjects2(object4, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, objProps = getAllKeys2(object4), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object4);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object4;
        }
        var result2 = true;
        stack.set(object4, other);
        stack.set(other, object4);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object4[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object4.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object4);
        stack["delete"](other);
        return result2;
      }
      function flatRest2(func) {
        return setToString2(overRest2(func, undefined$1, flatten2), func + "");
      }
      function getAllKeys2(object4) {
        return baseGetAllKeys2(object4, keys2, getSymbols2);
      }
      function getAllKeysIn2(object4) {
        return baseGetAllKeys2(object4, keysIn2, getSymbolsIn2);
      }
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array4 = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array4.length : 0;
        while (length--) {
          var data = array4[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object4 = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object4.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData2(map2, key) {
        var data = map2.__data__;
        return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object4) {
        var result2 = keys2(object4), length = result2.length;
        while (length--) {
          var key = result2[length], value = object4[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative2(object4, key) {
        var value = getValue2(object4, key);
        return baseIsNative2(value) ? value : undefined$1;
      }
      function getRawTag2(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
        try {
          value[symToStringTag2] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString2.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag2] = tag;
          } else {
            delete value[symToStringTag2];
          }
        }
        return result2;
      }
      var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object4) {
        if (object4 == null) {
          return [];
        }
        object4 = Object2(object4);
        return arrayFilter2(nativeGetSymbols2(object4), function(symbol) {
          return propertyIsEnumerable2.call(object4, symbol);
        });
      };
      var getSymbolsIn2 = !nativeGetSymbols2 ? stubArray2 : function(object4) {
        var result2 = [];
        while (object4) {
          arrayPush2(result2, getSymbols2(object4));
          object4 = getPrototype2(object4);
        }
        return result2;
      };
      var getTag2 = baseGetTag2;
      if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
        getTag2 = function(value) {
          var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined$1, ctorString = Ctor ? toSource2(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString2:
                return dataViewTag2;
              case mapCtorString2:
                return mapTag2;
              case promiseCtorString2:
                return promiseTag2;
              case setCtorString2:
                return setTag2;
              case weakMapCtorString2:
                return weakMapTag2;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin2(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax2(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath2(object4, path, hasFunc) {
        path = castPath2(path, object4);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey2(path[index]);
          if (!(result2 = object4 != null && hasFunc(object4, key))) {
            break;
          }
          object4 = object4[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object4 == null ? 0 : object4.length;
        return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object4) || isArguments2(object4));
      }
      function initCloneArray2(array4) {
        var length = array4.length, result2 = new array4.constructor(length);
        if (length && typeof array4[0] == "string" && hasOwnProperty2.call(array4, "index")) {
          result2.index = array4.index;
          result2.input = array4.input;
        }
        return result2;
      }
      function initCloneObject2(object4) {
        return typeof object4.constructor == "function" && !isPrototype2(object4) ? baseCreate2(getPrototype2(object4)) : {};
      }
      function initCloneByTag2(object4, tag, isDeep) {
        var Ctor = object4.constructor;
        switch (tag) {
          case arrayBufferTag2:
            return cloneArrayBuffer2(object4);
          case boolTag2:
          case dateTag2:
            return new Ctor(+object4);
          case dataViewTag2:
            return cloneDataView2(object4, isDeep);
          case float32Tag2:
          case float64Tag2:
          case int8Tag2:
          case int16Tag2:
          case int32Tag2:
          case uint8Tag2:
          case uint8ClampedTag2:
          case uint16Tag2:
          case uint32Tag2:
            return cloneTypedArray2(object4, isDeep);
          case mapTag2:
            return new Ctor();
          case numberTag2:
          case stringTag2:
            return new Ctor(object4);
          case regexpTag2:
            return cloneRegExp2(object4);
          case setTag2:
            return new Ctor();
          case symbolTag2:
            return cloneSymbol2(object4);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable2(value) {
        return isArray2(value) || isArguments2(value) || !!(spreadableSymbol2 && value && value[spreadableSymbol2]);
      }
      function isIndex2(value, length) {
        var type4 = typeof value;
        length = length == null ? MAX_SAFE_INTEGER2 : length;
        return !!length && (type4 == "number" || type4 != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object4) {
        if (!isObject2(object4)) {
          return false;
        }
        var type4 = typeof index;
        if (type4 == "number" ? isArrayLike2(object4) && isIndex2(index, object4.length) : type4 == "string" && index in object4) {
          return eq2(object4[index], value);
        }
        return false;
      }
      function isKey2(value, object4) {
        if (isArray2(value)) {
          return false;
        }
        var type4 = typeof value;
        if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol2(value)) {
          return true;
        }
        return reIsPlainProp2.test(value) || !reIsDeepProp2.test(value) || object4 != null && value in Object2(object4);
      }
      function isKeyable2(value) {
        var type4 = typeof value;
        return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked2(func) {
        return !!maskSrcKey2 && maskSrcKey2 in func;
      }
      var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
      function isPrototype2(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object4) {
          if (object4 == null) {
            return false;
          }
          return object4[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object4));
        };
      }
      function memoizeCapped2(func) {
        var result2 = memoize2(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE2) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin2(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn2(object4) {
        var result2 = [];
        if (object4 != null) {
          for (var key in Object2(object4)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString2(value) {
        return nativeObjectToString2.call(value);
      }
      function overRest2(func, start, transform2) {
        start = nativeMax2(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax2(args.length - start, 0), array4 = Array2(length);
          while (++index < length) {
            array4[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array4);
          return apply2(func, this, otherArgs);
        };
      }
      function parent(object4, path) {
        return path.length < 2 ? object4 : baseGet2(object4, baseSlice(path, 0, -1));
      }
      function reorder(array4, indexes) {
        var arrLength = array4.length, length = nativeMin2(indexes.length, arrLength), oldArray = copyArray2(array4);
        while (length--) {
          var index = indexes[length];
          array4[length] = isIndex2(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array4;
      }
      function safeGet(object4, key) {
        if (key === "constructor" && typeof object4[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object4[key];
      }
      var setData = shortOut2(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString2 = shortOut2(baseSetToString2);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString2(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut2(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow2(), remaining = HOT_SPAN2 - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT2) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array4, size2) {
        var index = -1, length = array4.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array4[rand];
          array4[rand] = array4[index];
          array4[index] = value;
        }
        array4.length = size2;
        return array4;
      }
      var stringToPath2 = memoizeCapped2(function(string3) {
        var result2 = [];
        if (string3.charCodeAt(0) === 46) {
          result2.push("");
        }
        string3.replace(rePropName2, function(match, number4, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar2, "$1") : number4 || match);
        });
        return result2;
      });
      function toKey2(value) {
        if (typeof value == "string" || isSymbol2(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function toSource2(func) {
        if (func != null) {
          try {
            return funcToString2.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach2(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray2(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array4, size2, guard) {
        if (guard ? isIterateeCall(array4, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax2(toInteger(size2), 0);
        }
        var length = array4 == null ? 0 : array4.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array4, index, index += size2);
        }
        return result2;
      }
      function compact(array4) {
        var index = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array4[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array4 = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush2(isArray2(array4) ? copyArray2(array4) : [array4], baseFlatten2(args, 1));
      }
      var difference = baseRest(function(array4, values2) {
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten2(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array4, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten2(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array4, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten2(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array4, n < 0 ? 0 : n, length);
      }
      function dropRight(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array4, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), true) : [];
      }
      function fill(array4, value, start, end) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array4, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array4, value, start, end);
      }
      function findIndex(array4, predicate, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax2(length + index, 0);
        }
        return baseFindIndex(array4, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array4, predicate, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax2(length + index, 0) : nativeMin2(index, length - 1);
        }
        return baseFindIndex(array4, getIteratee(predicate, 3), index, true);
      }
      function flatten2(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseFlatten2(array4, 1) : [];
      }
      function flattenDeep(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseFlatten2(array4, INFINITY2) : [];
      }
      function flattenDepth(array4, depth) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten2(array4, depth);
      }
      function fromPairs2(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array4) {
        return array4 && array4.length ? array4[0] : undefined$1;
      }
      function indexOf(array4, value, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax2(length + index, 0);
        }
        return baseIndexOf(array4, value, index);
      }
      function initial(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseSlice(array4, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap2(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array4, separator) {
        return array4 == null ? "" : nativeJoin.call(array4, separator);
      }
      function last(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? array4[length - 1] : undefined$1;
      }
      function lastIndexOf(array4, value, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax2(length + index, 0) : nativeMin2(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array4, value, index) : baseFindIndex(array4, baseIsNaN, index, true);
      }
      function nth(array4, n) {
        return array4 && array4.length ? baseNth(array4, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array4, values2) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2) : array4;
      }
      function pullAllBy(array4, values2, iteratee2) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2, getIteratee(iteratee2, 2)) : array4;
      }
      function pullAllWith(array4, values2, comparator) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2, undefined$1, comparator) : array4;
      }
      var pullAt = flatRest2(function(array4, indexes) {
        var length = array4 == null ? 0 : array4.length, result2 = baseAt(array4, indexes);
        basePullAt(array4, arrayMap2(indexes, function(index) {
          return isIndex2(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array4, predicate) {
        var result2 = [];
        if (!(array4 && array4.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array4.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array4[index];
          if (predicate(value, index, array4)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array4, indexes);
        return result2;
      }
      function reverse(array4) {
        return array4 == null ? array4 : nativeReverse.call(array4);
      }
      function slice(array4, start, end) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array4, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array4, start, end);
      }
      function sortedIndex(array4, value) {
        return baseSortedIndex(array4, value);
      }
      function sortedIndexBy(array4, value, iteratee2) {
        return baseSortedIndexBy(array4, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array4, value) {
        var length = array4 == null ? 0 : array4.length;
        if (length) {
          var index = baseSortedIndex(array4, value);
          if (index < length && eq2(array4[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array4, value) {
        return baseSortedIndex(array4, value, true);
      }
      function sortedLastIndexBy(array4, value, iteratee2) {
        return baseSortedIndexBy(array4, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array4, value) {
        var length = array4 == null ? 0 : array4.length;
        if (length) {
          var index = baseSortedIndex(array4, value, true) - 1;
          if (eq2(array4[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array4) {
        return array4 && array4.length ? baseSortedUniq(array4) : [];
      }
      function sortedUniqBy(array4, iteratee2) {
        return array4 && array4.length ? baseSortedUniq(array4, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseSlice(array4, 1, length) : [];
      }
      function take(array4, n, guard) {
        if (!(array4 && array4.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array4, 0, n < 0 ? 0 : n);
      }
      function takeRight(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array4, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten2(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array4) {
        return array4 && array4.length ? baseUniq(array4) : [];
      }
      function uniqBy(array4, iteratee2) {
        return array4 && array4.length ? baseUniq(array4, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array4, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array4 && array4.length ? baseUniq(array4, undefined$1, comparator) : [];
      }
      function unzip(array4) {
        if (!(array4 && array4.length)) {
          return [];
        }
        var length = 0;
        array4 = arrayFilter2(array4, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax2(group.length, length);
            return true;
          }
        });
        return baseTimes2(length, function(index) {
          return arrayMap2(array4, baseProperty(index));
        });
      }
      function unzipWith(array4, iteratee2) {
        if (!(array4 && array4.length)) {
          return [];
        }
        var result2 = unzip(array4);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap2(result2, function(group) {
          return apply2(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array4, values2) {
        return isArrayLikeObject(array4) ? baseDifference(array4, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter2(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue2);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet2);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest2(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object4) {
          return baseAt(object4, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array4) {
          if (length && !array4.length) {
            array4.push(undefined$1);
          }
          return array4;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone3 = wrapperClone(parent2);
          clone3.__index__ = 0;
          clone3.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone3;
          } else {
            result2 = clone3;
          }
          var previous = clone3;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue2(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten2(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten2(map(collection, iteratee2), INFINITY2);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten2(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach2 : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue2(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike2(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax2(length + fromIndex, 0);
        }
        return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply2(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue2(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap2 : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike2(collection)) {
          return isString2(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag2(collection);
        if (tag == mapTag2 || tag == setTag2) {
          return collection.size;
        }
        return baseKeys2(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome2 : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten2(iteratees, 1), []);
      });
      var now2 = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object4, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object4, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        wait = toNumber2(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin2(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now2();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now2());
        }
        function debounced() {
          var time = now2(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber2(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize2(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize2.Cache || MapCache2)();
        return memoized;
      }
      memoize2.Cache = MapCache2;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap2(transforms[0], baseUnary2(getIteratee())) : arrayMap2(baseFlatten2(transforms, 1), baseUnary2(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin2(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply2(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest2(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start == null ? 0 : nativeMax2(toInteger(start), 0);
        return baseRest(function(args) {
          var array4 = args[start], otherArgs = castSlice(args, 0, start);
          if (array4) {
            arrayPush2(otherArgs, array4);
          }
          return apply2(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray2() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone2(value) {
        return baseClone2(value, CLONE_SYMBOLS_FLAG2);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_SYMBOLS_FLAG2, customizer);
      }
      function cloneDeep(value) {
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2, customizer);
      }
      function conformsTo(object4, source) {
        return source == null || baseConformsTo(object4, source, keys2(source));
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt2 = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments2 = baseIsArguments2(function() {
        return arguments;
      }()) ? baseIsArguments2 : function(value) {
        return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike2(value) {
        return value != null && isLength2(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike2(value) && isArrayLike2(value);
      }
      function isBoolean2(value) {
        return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
      }
      var isBuffer2 = nativeIsBuffer2 || stubFalse2;
      var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
      function isElement2(value) {
        return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
          return !value.length;
        }
        var tag = getTag2(value);
        if (tag == mapTag2 || tag == setTag2) {
          return !value.size;
        }
        if (isPrototype2(value)) {
          return !baseKeys2(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual2(value, other) {
        return baseIsEqual2(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual2(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
      }
      function isObject2(value) {
        var type4 = typeof value;
        return value != null && (type4 == "object" || type4 == "function");
      }
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      var isMap2 = nodeIsMap2 ? baseUnary2(nodeIsMap2) : baseIsMap2;
      function isMatch(object4, source) {
        return object4 === source || baseIsMatch(object4, source, getMatchData(source));
      }
      function isMatchWith(object4, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object4, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber2(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative2(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil2(value) {
        return value == null;
      }
      function isNumber2(value) {
        return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
      }
      function isPlainObject(value) {
        if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
          return false;
        }
        var proto = getPrototype2(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary2(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
      }
      var isSet2 = nodeIsSet2 ? baseUnary2(nodeIsSet2) : baseIsSet2;
      function isString2(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
      }
      function isSymbol2(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
      }
      var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
      function isUndefined2(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike2(value) && getTag2(value) == weakMapTag2;
      }
      function isWeakSet(value) {
        return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
      }
      var lt2 = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike2(value)) {
          return isString2(value) ? stringToArray(value) : copyArray2(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag2(value), func = tag == mapTag2 ? mapToArray2 : tag == setTag2 ? setToArray2 : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber2(value);
        if (value === INFINITY2 || value === -INFINITY2) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber2(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim2(value);
        var isBinary = reIsBinary2.test(value);
        return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
      }
      function toPlainObject(value) {
        return copyObject2(value, keysIn2(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
      }
      function toString2(value) {
        return value == null ? "" : baseToString2(value);
      }
      var assign = createAssigner(function(object4, source) {
        if (isPrototype2(source) || isArrayLike2(source)) {
          copyObject2(source, keys2(source), object4);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            assignValue2(object4, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object4, source) {
        copyObject2(source, keysIn2(source), object4);
      });
      var assignInWith = createAssigner(function(object4, source, srcIndex, customizer) {
        copyObject2(source, keysIn2(source), object4, customizer);
      });
      var assignWith = createAssigner(function(object4, source, srcIndex, customizer) {
        copyObject2(source, keys2(source), object4, customizer);
      });
      var at2 = flatRest2(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate2(prototype);
        return properties == null ? result2 : baseAssign2(result2, properties);
      }
      var defaults = baseRest(function(object4, sources) {
        object4 = Object2(object4);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn2(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object4[key];
            if (value === undefined$1 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object4, key)) {
              object4[key] = source[key];
            }
          }
        }
        return object4;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply2(mergeWith, undefined$1, args);
      });
      function findKey(object4, predicate) {
        return baseFindKey(object4, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object4, predicate) {
        return baseFindKey(object4, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object4, iteratee2) {
        return object4 == null ? object4 : baseFor(object4, getIteratee(iteratee2, 3), keysIn2);
      }
      function forInRight(object4, iteratee2) {
        return object4 == null ? object4 : baseForRight(object4, getIteratee(iteratee2, 3), keysIn2);
      }
      function forOwn(object4, iteratee2) {
        return object4 && baseForOwn(object4, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object4, iteratee2) {
        return object4 && baseForOwnRight(object4, getIteratee(iteratee2, 3));
      }
      function functions(object4) {
        return object4 == null ? [] : baseFunctions(object4, keys2(object4));
      }
      function functionsIn(object4) {
        return object4 == null ? [] : baseFunctions(object4, keysIn2(object4));
      }
      function get2(object4, path, defaultValue) {
        var result2 = object4 == null ? undefined$1 : baseGet2(object4, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object4, path) {
        return object4 != null && hasPath2(object4, path, baseHas);
      }
      function hasIn2(object4, path) {
        return object4 != null && hasPath2(object4, path, baseHasIn2);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        result2[value] = key;
      }, constant2(identity2));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys2(object4) {
        return isArrayLike2(object4) ? arrayLikeKeys2(object4) : baseKeys2(object4);
      }
      function keysIn2(object4) {
        return isArrayLike2(object4) ? arrayLikeKeys2(object4, true) : baseKeysIn2(object4);
      }
      function mapKeys(object4, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object4, function(value, key, object5) {
          baseAssignValue2(result2, iteratee2(value, key, object5), value);
        });
        return result2;
      }
      function mapValues(object4, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object4, function(value, key, object5) {
          baseAssignValue2(result2, key, iteratee2(value, key, object5));
        });
        return result2;
      }
      var merge = createAssigner(function(object4, source, srcIndex) {
        baseMerge(object4, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object4, source, srcIndex, customizer) {
        baseMerge(object4, source, srcIndex, customizer);
      });
      var omit = flatRest2(function(object4, paths) {
        var result2 = {};
        if (object4 == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap2(paths, function(path) {
          path = castPath2(path, object4);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject2(object4, getAllKeysIn2(object4), result2);
        if (isDeep) {
          result2 = baseClone2(result2, CLONE_DEEP_FLAG2 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG2, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object4, predicate) {
        return pickBy(object4, negate(getIteratee(predicate)));
      }
      var pick2 = flatRest2(function(object4, paths) {
        return object4 == null ? {} : basePick2(object4, paths);
      });
      function pickBy(object4, predicate) {
        if (object4 == null) {
          return {};
        }
        var props = arrayMap2(getAllKeysIn2(object4), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy2(object4, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object4, path, defaultValue) {
        path = castPath2(path, object4);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object4 = undefined$1;
        }
        while (++index < length) {
          var value = object4 == null ? undefined$1 : object4[toKey2(path[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object4 = isFunction2(value) ? value.call(object4) : value;
        }
        return object4;
      }
      function set2(object4, path, value) {
        return object4 == null ? object4 : baseSet2(object4, path, value);
      }
      function setWith(object4, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object4 == null ? object4 : baseSet2(object4, path, value, customizer);
      }
      var toPairs = createToPairs(keys2);
      var toPairsIn = createToPairs(keysIn2);
      function transform(object4, iteratee2, accumulator) {
        var isArr = isArray2(object4), isArrLike = isArr || isBuffer2(object4) || isTypedArray2(object4);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object4 && object4.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object4)) {
            accumulator = isFunction2(Ctor) ? baseCreate2(getPrototype2(object4)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach2 : baseForOwn)(object4, function(value, index, object5) {
          return iteratee2(accumulator, value, index, object5);
        });
        return accumulator;
      }
      function unset(object4, path) {
        return object4 == null ? true : baseUnset(object4, path);
      }
      function update(object4, path, updater) {
        return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater));
      }
      function updateWith(object4, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater), customizer);
      }
      function values(object4) {
        return object4 == null ? [] : baseValues(object4, keys2(object4));
      }
      function valuesIn(object4) {
        return object4 == null ? [] : baseValues(object4, keysIn2(object4));
      }
      function clamp(number4, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber2(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber2(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber2(number4), lower, upper);
      }
      function inRange(number4, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number4 = toNumber2(number4);
        return baseInRange(number4, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin2(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string3) {
        return upperFirst(toString2(string3).toLowerCase());
      }
      function deburr(string3) {
        string3 = toString2(string3);
        return string3 && string3.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string3, target, position) {
        string3 = toString2(string3);
        target = baseToString2(target);
        var length = string3.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string3.slice(position, end) == target;
      }
      function escape(string3) {
        string3 = toString2(string3);
        return string3 && reHasUnescapedHtml.test(string3) ? string3.replace(reUnescapedHtml, escapeHtmlChar) : string3;
      }
      function escapeRegExp(string3) {
        string3 = toString2(string3);
        return string3 && reHasRegExpChar.test(string3) ? string3.replace(reRegExpChar2, "\\$&") : string3;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        if (!length || strLength >= length) {
          return string3;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string3 + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        return length && strLength < length ? string3 + createPadding(length - strLength, chars) : string3;
      }
      function padStart(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string3 : string3;
      }
      function parseInt2(string3, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString2(string3).replace(reTrimStart2, ""), radix || 0);
      }
      function repeat(string3, n, guard) {
        if (guard ? isIterateeCall(string3, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString2(string3), n);
      }
      function replace() {
        var args = arguments, string3 = toString2(args[0]);
        return args.length < 3 ? string3 : string3.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string3, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string3, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string3 = toString2(string3);
        if (string3 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString2(separator);
          if (!separator && hasUnicode(string3)) {
            return castSlice(stringToArray(string3), 0, limit);
          }
        }
        return string3.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string3, target, position) {
        string3 = toString2(string3);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string3.length);
        target = baseToString2(target);
        return string3.slice(position, position + target.length) == target;
      }
      function template(string3, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string3, options, guard)) {
          options = undefined$1;
        }
        string3 = toString2(string3);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2(
          (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
          "g"
        );
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string3.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string3.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty2.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString2(value).toLowerCase();
      }
      function toUpper(value) {
        return toString2(value).toUpperCase();
      }
      function trim(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return baseTrim2(string3);
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return string3.slice(0, trimmedEndIndex2(string3) + 1);
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return string3.replace(reTrimStart2, "");
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string3, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString2(options.omission) : omission;
        }
        string3 = toString2(string3);
        var strLength = string3.length;
        if (hasUnicode(string3)) {
          var strSymbols = stringToArray(string3);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string3;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string3.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string3.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString2(reFlags2.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string3.indexOf(baseToString2(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape(string3) {
        string3 = toString2(string3);
        return string3 && reHasEscapedHtml.test(string3) ? string3.replace(reEscapedHtml, unescapeHtmlChar) : string3;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string3, pattern4, guard) {
        string3 = toString2(string3);
        pattern4 = guard ? undefined$1 : pattern4;
        if (pattern4 === undefined$1) {
          return hasUnicodeWord(string3) ? unicodeWords(string3) : asciiWords(string3);
        }
        return string3.match(pattern4) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply2(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest2(function(object4, methodNames) {
        arrayEach2(methodNames, function(key) {
          key = toKey2(key);
          baseAssignValue2(object4, key, bind(object4[key], object4));
        });
        return object4;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap2(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply2(pair[0], this, args)) {
              return apply2(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function constant2(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity2(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone2(func, CLONE_DEEP_FLAG2));
      }
      function matches(source) {
        return baseMatches(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone2(srcValue, CLONE_DEEP_FLAG2));
      }
      var method4 = baseRest(function(path, args) {
        return function(object4) {
          return baseInvoke(object4, path, args);
        };
      });
      var methodOf = baseRest(function(object4, args) {
        return function(path) {
          return baseInvoke(object4, path, args);
        };
      });
      function mixin(object4, source, options) {
        var props = keys2(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object4;
          object4 = this;
          methodNames = baseFunctions(source, keys2(source));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object4);
        arrayEach2(methodNames, function(methodName) {
          var func = source[methodName];
          object4[methodName] = func;
          if (isFunc) {
            object4.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object4(this.__wrapped__), actions = result2.__actions__ = copyArray2(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object4 });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object4, arrayPush2([this.value()], arguments));
            };
          }
        });
        return object4;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop2() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap2);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome2);
      function property(path) {
        return isKey2(path) ? baseProperty(toKey2(path)) : basePropertyDeep(path);
      }
      function propertyOf(object4) {
        return function(path) {
          return object4 == null ? undefined$1 : baseGet2(object4, path);
        };
      }
      var range3 = createRange();
      var rangeRight = createRange(true);
      function stubArray2() {
        return [];
      }
      function stubFalse2() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER2) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin2(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes2(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap2(value, toKey2);
        }
        return isSymbol2(value) ? [value] : copyArray2(stringToPath2(toString2(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString2(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array4) {
        return array4 && array4.length ? baseExtremum(array4, identity2, baseGt) : undefined$1;
      }
      function maxBy(array4, iteratee2) {
        return array4 && array4.length ? baseExtremum(array4, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array4) {
        return baseMean(array4, identity2);
      }
      function meanBy(array4, iteratee2) {
        return baseMean(array4, getIteratee(iteratee2, 2));
      }
      function min(array4) {
        return array4 && array4.length ? baseExtremum(array4, identity2, baseLt) : undefined$1;
      }
      function minBy(array4, iteratee2) {
        return array4 && array4.length ? baseExtremum(array4, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array4) {
        return array4 && array4.length ? baseSum(array4, identity2) : 0;
      }
      function sumBy(array4, iteratee2) {
        return array4 && array4.length ? baseSum(array4, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at2;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray2;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant2;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce2;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten2;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs2;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys2;
      lodash2.keysIn = keysIn2;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize2;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method4;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick2;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range3;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set2;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone2;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq2;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get2;
      lodash2.gt = gt2;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn2;
      lodash2.head = head;
      lodash2.identity = identity2;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments2;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike2;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean2;
      lodash2.isBuffer = isBuffer2;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement2;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual2;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength2;
      lodash2.isMap = isMap2;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil2;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike2;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet2;
      lodash2.isString = isString2;
      lodash2.isSymbol = isSymbol2;
      lodash2.isTypedArray = isTypedArray2;
      lodash2.isUndefined = isUndefined2;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt2;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray2;
      lodash2.stubFalse = stubFalse2;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop2;
      lodash2.now = now2;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber2;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString2;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach2(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax2(toInteger(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin2(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin2(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach2(["filter", "map", "takeWhile"], function(methodName, index) {
        var type4 = index + 1, isFilter = type4 == LAZY_FILTER_FLAG || type4 == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type4
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach2(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach2(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity2);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush2([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach2(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto2[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule2) {
      (freeModule2.exports = _)._ = _;
      freeExports2._ = _;
    } else {
      root2._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
const REG_IS_VUE = /^\s*v-([\w-]+)\s*$/;
const REG_SLOT = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/;
const REG_BIND = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/;
const REG_ON = /^\s*(?:v-on:|@)([\w:]+)\s*$/;
const ROOT_KEYS = [
  "tag",
  "setup",
  "hooks",
  "cls",
  "children",
  "contextKeys",
  "excludeKeys",
  "this",
  "slot-scope",
  "slot",
  "render",
  "beforeRender"
];
const HTML_TAGS = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
const isHtmlTag = (tag) => HTML_TAGS.includes(tag);
const getElemAttrs = (elem, context) => {
  const keys2 = Object.keys(elem);
  const res = { root: {}, directive: {}, prop: {} };
  keys2.forEach((k) => {
    var _a2, _b;
    const v = elem[k];
    const b = REG_IS_VUE.test(k) || REG_BIND.test(k) || REG_ON.test(k);
    const ctxKeys = new Array().concat(
      elem.contextKeys || [],
      context.contextKeys || []
    );
    new Array().concat(
      elem.excludeKeys || [],
      context.excludeKeys || []
    );
    const cb = ctxKeys.includes(k);
    if (REG_SLOT.test(k)) {
      res.root["slot-scope"] = v;
      res.root["slot"] = (_b = (_a2 = REG_SLOT.exec(k)) == null ? void 0 : _a2[1]) != null ? _b : "default";
    } else if (b) {
      res.directive[k] = v;
    } else if (ROOT_KEYS.includes(k) && !cb) {
      res.root[k] = v;
    } else {
      res.prop[k] = v;
    }
  });
  return res;
};
const getSlotName = (elem) => {
  var _a2;
  const keys2 = Object.keys(elem).filter((k) => REG_SLOT.test(k));
  if (keys2.length > 0) {
    return ((_a2 = REG_SLOT.exec(keys2[0])) == null ? void 0 : _a2[1]) || "default";
  }
  return "default";
};
const doEval = (s = "", obj = {}, isGetRefValue = false) => {
  try {
    const keys2 = Object.keys(obj).filter((k) => !ExtKeys.includes(k));
    const vals = keys2.map((k) => isGetRefValue ? unref(obj[k]) : obj[k]);
    const str = "return " + s;
    return new Function(...keys2, str)(...vals);
  } catch (e) {
    console.error(e);
  }
  return void 0;
};
const ExtKeys = ["this"];
const EventKeys = ["pointerevent"];
const parseDirective = (directive, scope) => {
  const keys2 = Object.keys(directive);
  const res = { "v-bind": {}, "v-on": {} };
  keys2.forEach((k) => {
    var _a2, _b;
    let v = directive[k];
    if (typeof v === "string") {
      v = doEval(v, scope, true);
    } else {
      v = unref(v);
    }
    if (REG_BIND.test(k)) {
      const bk = (_a2 = REG_BIND.exec(k)) != null ? _a2 : [];
      if (bk[1] == void 0) {
        if (lodash.exports.isMap(v)) {
          for (const [tk, tv] of v) {
            if (REG_IS_VUE.test(tk)) {
              res[tk] = tv;
            } else {
              res["v-bind"][tk] = tv;
            }
          }
        } else if (lodash.exports.isObject(v)) {
          Object.keys(v).forEach((tk) => {
            if (REG_IS_VUE.test(tk)) {
              res[tk] = v[tk];
            } else {
              res["v-bind"][tk] = v[tk];
            }
          });
        }
      } else {
        res["v-bind"][bk[1]] = v;
      }
    } else if (REG_ON.test(k)) {
      const ek = (_b = REG_ON.exec(k)) != null ? _b : [];
      if (ek[1]) {
        const tk = "on" + lodash.exports.upperFirst(ek[1]);
        res["v-on"][tk] = typeof v === "function" ? (e, ...args) => {
          const t = Object.prototype.toString.call(e).split(" ")[1].replace("]", "").toLowerCase();
          const params = { ...scope };
          if (EventKeys.includes(t)) {
            params.$event = e;
          } else {
            args = [e, ...args];
          }
          if (args.length > 0) {
            params.$ = args;
          }
          return v.apply(scope, [params]);
        } : v;
      }
    } else {
      res[k] = v;
    }
  });
  return res;
};
const loopExec$1 = (reg, str, call) => {
  let t;
  while ((t = reg.exec(str)) !== null) {
    call(t);
  }
};
const REG_EXP = /\{\{\s*(.*?)\s*\}\}/g;
const getExpValue = (str, scope = {}) => {
  if (!str) {
    return "";
  }
  let res = str;
  loopExec$1(REG_EXP, str, ([s, exp]) => {
    try {
      const v = doEval(exp, scope, true);
      res = res.replace(s, v);
    } catch (e) {
      console.error("=====\u5B57\u7B26\u4E32\u6A21\u677F\u89E3\u6790\u5F02\u5E38\uFF01=====", exp, scope);
    }
  });
  return res;
};
const REG_ISARRAY = /^\s*\[(.*)\]\s*$/;
const REG_ISOBJECT = /^\s*\{(.*)\}\s*$/;
const getDestruct = (str, scope = {}) => {
  const s = unref(scope);
  if (!str) {
    return s;
  }
  const res = {};
  if (lodash.exports.isArray(s) && REG_ISARRAY.test(str)) {
    const as = REG_ISARRAY.exec(str);
    const ks = (as == null ? void 0 : as[1]) ? as[1].split(",").map((k) => k.trim()) : [];
    ks.forEach((k, i) => {
      res[k] = s == null ? void 0 : s[i];
    });
  } else if (lodash.exports.isObject(s) && REG_ISOBJECT.test(str)) {
    const as = REG_ISOBJECT.exec(str);
    const ks = (as == null ? void 0 : as[1]) ? as[1].split(",").map((k) => k.trim()) : [];
    ks.forEach((k) => {
      const [sk, tk] = k.split(":").map((s2) => s2.trim());
      res[tk || sk] = lodash.exports.get(s, sk);
    });
  } else {
    res[str] = s;
  }
  return res;
};
const specialRender = {
  template({ children }) {
    return children == null ? void 0 : children.default();
  },
  slot({ props, children, slots }) {
    var _a2;
    const name = props.name || "default";
    delete props.name;
    const childs = (_a2 = children == null ? void 0 : children[name]) != null ? _a2 : () => [];
    return renderSlot(slots, name, props, () => childs());
  },
  component({ props, children }) {
    const name = props.is;
    delete props.is;
    const c = resolveDynamicComponent(name);
    return createVNode(c, props, children);
  }
};
const defaultRender = (config) => {
  const tagname = config.tagname;
  if (specialRender[tagname]) {
    return specialRender[tagname](config);
  }
  const directives = config.directives;
  const children = config.children;
  const tag = config.tag;
  const props = config.props;
  if (directives["v-text"]) {
    return h(tag, props, directives["v-text"]);
  }
  return h(tag, props, children);
};
const propsFilter = (props, extKeys) => {
  return lodash.exports.omit(props, extKeys);
};
const ElsElem = defineComponent({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(props, ctx) {
    const elem = props.elem || {};
    const context = props.context || {};
    const parent = props.parent;
    const params = props.params || {};
    const slots = lodash.exports.assign(
      {},
      context.slots || {},
      props.slots || ctx.slots
    );
    const tag = computed(() => {
      var _a2, _b;
      const t = (_b = (_a2 = unref(elem == null ? void 0 : elem.tag)) != null ? _a2 : unref(context == null ? void 0 : context.tag)) != null ? _b : "div";
      if (typeof t == "function" && t.name === "tag") {
        return t(props, ctx);
      }
      return t;
    });
    const tagname = computed(
      () => typeof tag.value === "string" ? tag.value : lodash.exports.kebabCase(tag.value.name)
    );
    const isHtml = computed(() => isHtmlTag(unref(tagname)));
    let elemSetupRes = {};
    let ctxSetupRes = {};
    const setupRes = { prop: {} };
    if (context.setup) {
      ctxSetupRes = context.setup(props, { tag: unref(tag), tagname: unref(tagname), isHtml: unref(isHtml) }, ctx) || {};
      lodash.exports.merge(setupRes, ctxSetupRes);
    }
    if (elem.setup) {
      elemSetupRes = elem.setup(props, { tag: unref(tag), tagname: unref(tagname), isHtml: unref(isHtml) }, ctx) || {};
      lodash.exports.merge(setupRes, elemSetupRes);
    }
    const attrs = getElemAttrs(mergeProps(elem, setupRes.prop || {}), context);
    const root2 = attrs.root;
    const prop = attrs.prop;
    const directive = attrs.directive;
    const excludeKeys = new Array().concat(
      setupRes.excludeKeys || [],
      elem.excludeKeys || [],
      context.excludeKeys || []
    );
    const _scopeA = { ...params, ...prop, ...setupRes };
    const _scopeB = {
      $tag: unref(tag),
      $tagname: unref(tagname),
      $isHtml: unref(isHtml),
      $slots: slots,
      $elem: elem,
      $context: context,
      $root: root2,
      $prop: prop,
      $directive: directive,
      $elemSetupRes: elemSetupRes,
      $ctxSetupRes: ctxSetupRes,
      $setupRes: setupRes,
      $parent: parent,
      $params: params
    };
    const childs = computed(() => new Array().concat(unref(root2.children), unref(root2.cls)).filter((v) => v != void 0));
    const createChildren = (params2) => {
      const cls = unref(childs);
      if (cls.length === 0) {
        return void 0;
      }
      const temp = {
        default: []
      };
      cls.forEach((c) => {
        const tc = unref(c);
        if (isVNode(tc)) {
          temp.default.push(() => tc);
        } else if (lodash.exports.isFunction(tc)) {
          temp.default.push((_s) => tc(params2, _s, _scopeB));
        } else if (lodash.exports.isObject(tc)) {
          const sn2 = getSlotName(tc);
          if (!temp[sn2]) {
            temp[sn2] = [];
          }
          temp[sn2].push(
            (slotParams) => h(resolveComponent("els-elem"), {
              elem: tc,
              context,
              parent: { elem, tagname: unref(tagname), setupRes },
              params: params2,
              slotParams,
              slots
            })
          );
        } else {
          temp.default.push((_s) => getExpValue(String(tc), params2));
        }
      });
      const res = {};
      Object.keys(temp).forEach((k) => {
        res[k] = (p) => temp[k].map((f) => f(p));
      });
      return res;
    };
    const render = () => {
      const name = unref(tagname);
      const ss = getDestruct(root2["slot-scope"], props.slotParams);
      const scope = { ..._scopeA, ...ss };
      const directives = parseDirective(directive, scope);
      if (directives["v-if"] === false) {
        return void 0;
      }
      const elemProps = lodash.exports.omit(mergeProps(
        prop,
        directives["v-bind"],
        directives["v-on"]
      ), excludeKeys);
      const children = createChildren(scope);
      const config = {
        tag: tag.value,
        tagname: name,
        isHtml: scope.$isHtml,
        props: elemProps,
        children,
        context,
        elem,
        slots,
        parent,
        directives,
        setupRes
      };
      const _render = (elemSetupRes == null ? void 0 : elemSetupRes.render) || (root2 == null ? void 0 : root2.render) || (ctxSetupRes == null ? void 0 : ctxSetupRes.render) || (context == null ? void 0 : context.render);
      if (_render) {
        if (lodash.exports.isFunction(_render)) {
          return _render(config);
        }
        if (_render[name] != void 0) {
          return _render[name](config);
        }
      }
      return defaultRender(config);
    };
    return render;
  }
});
const ElsElemPlugin = {
  install(app) {
    app.component("els-elem", ElsElem);
  }
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array4, iteratee) {
  var index = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array4[index], index, array4);
  }
  return result;
}
var isArray$1 = Array.isArray;
const isArray$2 = isArray$1;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string3) {
  var index = string3.length;
  while (index-- && reWhitespace.test(string3.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}
function isObject$1(value) {
  var type4 = typeof value;
  return value != null && (type4 == "object" || type4 == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity$1(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern4 = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern4.test(toSource(value));
}
function getValue$1(object4, key) {
  return object4 == null ? void 0 : object4[key];
}
function getNative(object4, key) {
  var value = getValue$1(object4, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
const WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object4() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object4.prototype = proto;
    var result = new object4();
    object4.prototype = void 0;
    return result;
  };
}();
const baseCreate$1 = baseCreate;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array4) {
  var index = -1, length = source.length;
  array4 || (array4 = Array(length));
  while (++index < length) {
    array4[index] = source[index];
  }
  return array4;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity$1 : function(func, string3) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string3),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
function arrayEach(array4, iteratee) {
  var index = -1, length = array4 == null ? 0 : array4.length;
  while (++index < length) {
    if (iteratee(array4[index], index, array4) === false) {
      break;
    }
  }
  return array4;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type4 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object4, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object4, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object4[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$a = objectProto$b.hasOwnProperty;
function assignValue(object4, key, value) {
  var objValue = object4[key];
  if (!(hasOwnProperty$a.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
    baseAssignValue(object4, key, value);
  }
}
function copyObject(source, props, object4, customizer) {
  var isNew = !object4;
  object4 || (object4 = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object4, key, newValue);
    } else {
      assignValue(object4, key, newValue);
    }
  }
  return object4;
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array4 = Array(length);
    while (++index < length) {
      array4[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array4);
    return apply(func, this, otherArgs);
  };
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function baseKeys(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys$1(object4);
  }
  var result = [];
  for (var key in Object(object4)) {
    if (hasOwnProperty$7.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}
function nativeKeysIn(object4) {
  var result = [];
  if (object4 != null) {
    for (var key in Object(object4)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function baseKeysIn(object4) {
  if (!isObject$1(object4)) {
    return nativeKeysIn(object4);
  }
  var isProto = isPrototype(object4), result = [];
  for (var key in object4) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object4, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object4) {
  if (isArray$2(value)) {
    return false;
  }
  var type4 = typeof value;
  if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array4, key) {
  var length = array4.length;
  while (length--) {
    if (eq(array4[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type4 = typeof value;
  return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string3) {
  var result = [];
  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }
  string3.replace(rePropName, function(match, number4, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object4) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object4) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object4, path) {
  path = castPath(path, object4);
  var index = 0, length = path.length;
  while (object4 != null && index < length) {
    object4 = object4[toKey(path[index++])];
  }
  return index && index == length ? object4 : void 0;
}
function get(object4, path, defaultValue) {
  var result = object4 == null ? void 0 : baseGet(object4, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array4, values) {
  var index = -1, length = values.length, offset = array4.length;
  while (++index < length) {
    array4[offset + index] = values[index];
  }
  return array4;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$2(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array4, depth, predicate, isStrict, result) {
  var index = -1, length = array4.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array4[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array4) {
  var length = array4 == null ? 0 : array4.length;
  return length ? baseFlatten(array4, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray$2(value) ? value : [value];
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object4, source) {
  return object4 && copyObject(source, keys(source), object4);
}
function baseAssignIn(object4, source) {
  return object4 && copyObject(source, keysIn(source), object4);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array4[index];
    if (predicate(value, index, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object4) {
  if (object4 == null) {
    return [];
  }
  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols$1(object4), function(symbol) {
    return propertyIsEnumerable.call(object4, symbol);
  });
};
const getSymbols$1 = getSymbols;
function copySymbols(source, object4) {
  return copyObject(source, getSymbols$1(source), object4);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object4) {
  var result = [];
  while (object4) {
    arrayPush(result, getSymbols$1(object4));
    object4 = getPrototype$1(object4);
  }
  return result;
};
const getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object4) {
  return copyObject(source, getSymbolsIn$1(source), object4);
}
function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray$2(object4) ? result : arrayPush(result, symbolsFunc(object4));
}
function getAllKeys(object4) {
  return baseGetAllKeys(object4, keys, getSymbols$1);
}
function getAllKeysIn(object4) {
  return baseGetAllKeys(object4, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
function initCloneArray(array4) {
  var length = array4.length, result = new array4.constructor(length);
  if (length && typeof array4[0] == "string" && hasOwnProperty$3.call(array4, "index")) {
    result.index = array4.index;
    result.input = array4.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp4) {
  var result = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
  result.lastIndex = regexp4.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object4, tag, isDeep) {
  var Ctor = object4.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object4);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object4);
    case dataViewTag$2:
      return cloneDataView(object4, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object4, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object4);
    case regexpTag$2:
      return cloneRegExp(object4);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object4);
  }
}
function initCloneObject(object4) {
  return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate$1(getPrototype$1(object4)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
const isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
const isSet$1 = isSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object4, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object4 ? customizer(value, key, object4, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object4) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object4 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length;
  while (++index < length) {
    if (predicate(array4[index], index, array4)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array4.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array4);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array4, other);
  stack.set(other, array4);
  while (++index < arrLength) {
    var arrValue = array4[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array4, stack) : customizer(arrValue, othValue, index, array4, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array4);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
        return false;
      }
      object4 = object4.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object4), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object4, +other);
    case errorTag:
      return object4.name == other.name && object4.message == other.message;
    case regexpTag:
    case stringTag:
      return object4 == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object4.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object4);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object4, other);
      var result = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object4);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object4) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object4), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object4);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object4;
  }
  var result = true;
  stack.set(object4, other);
  stack.set(other, object4);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object4[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object4.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object4);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$2(object4), othIsArr = isArray$2(other), objTag = objIsArr ? arrayTag : getTag$1(object4), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object4)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function baseHasIn(object4, key) {
  return object4 != null && key in Object(object4);
}
function hasPath(object4, path, hasFunc) {
  path = castPath(path, object4);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object4 != null && hasFunc(object4, key))) {
      break;
    }
    object4 = object4[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object4 == null ? 0 : object4.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$2(object4) || isArguments$1(object4));
}
function hasIn(object4, path) {
  return object4 != null && hasPath(object4, path, baseHasIn);
}
var now = function() {
  return root$1.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function isNil(value) {
  return value == null;
}
function baseSet(object4, path, value, customizer) {
  if (!isObject$1(object4)) {
    return object4;
  }
  path = castPath(path, object4);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object4;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object4;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object4;
}
function basePickBy(object4, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object4, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object4), value);
    }
  }
  return result;
}
function basePick(object4, paths) {
  return basePickBy(object4, paths, function(value, path) {
    return hasIn(object4, path);
  });
}
var pick = flatRest(function(object4, paths) {
  return object4 == null ? {} : basePick(object4, paths);
});
const pick$1 = pick;
function set(object4, path, value) {
  return object4 == null ? object4 : baseSet(object4, path, value);
}
const triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) {
    eventName = "MouseEvents";
  } else if (name.includes("key")) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
var _a;
const isClient = typeof window !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn2);
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function tryOnMounted(fn2, sync = true) {
  if (getCurrentInstance())
    onMounted(fn2);
  else if (sync)
    fn2();
  else
    nextTick(fn2);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  let fallback;
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el) || !shouldListen.value)
      return;
    handler(event);
  };
  const shouldIgnore = (event) => {
    return ignore && ignore.some((target2) => {
      const el = unrefElement(target2);
      return el && (event.target === el || event.composedPath().includes(el));
    });
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn2) => fn2());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const NOOP = () => {
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isUndefined = (val) => val === void 0;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const escapeStringRegexp = (string3 = "") => string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
const SCOPE$2 = "utils/dom/style";
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
  debugWarn(SCOPE$2, "binding value must be a string or number");
}
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
/*! Element Plus Icons Vue v2.0.10 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var arrow_down_vue_vue_type_script_lang_default = {
  name: "ArrowDown"
};
var _hoisted_16 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_26 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), _hoisted_36 = [
  _hoisted_26
];
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_16, _hoisted_36);
}
var arrow_down_default = /* @__PURE__ */ export_helper_default(arrow_down_vue_vue_type_script_lang_default, [["render", _sfc_render6], ["__file", "arrow-down.vue"]]);
var arrow_right_vue_vue_type_script_lang_default = {
  name: "ArrowRight"
};
var _hoisted_110 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_210 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_310 = [
  _hoisted_210
];
function _sfc_render10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_110, _hoisted_310);
}
var arrow_right_default = /* @__PURE__ */ export_helper_default(arrow_right_vue_vue_type_script_lang_default, [["render", _sfc_render10], ["__file", "arrow-right.vue"]]);
var circle_check_vue_vue_type_script_lang_default = {
  name: "CircleCheck"
};
var _hoisted_149 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_249 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_348 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), _hoisted_415 = [
  _hoisted_249,
  _hoisted_348
];
function _sfc_render49(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_149, _hoisted_415);
}
var circle_check_default = /* @__PURE__ */ export_helper_default(circle_check_vue_vue_type_script_lang_default, [["render", _sfc_render49], ["__file", "circle-check.vue"]]);
var circle_close_vue_vue_type_script_lang_default = {
  name: "CircleClose"
};
var _hoisted_151 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_251 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), _hoisted_350 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_416 = [
  _hoisted_251,
  _hoisted_350
];
function _sfc_render51(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_151, _hoisted_416);
}
var circle_close_default = /* @__PURE__ */ export_helper_default(circle_close_vue_vue_type_script_lang_default, [["render", _sfc_render51], ["__file", "circle-close.vue"]]);
var close_vue_vue_type_script_lang_default = {
  name: "Close"
};
var _hoisted_156 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_256 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_156, _hoisted_355);
}
var close_default = /* @__PURE__ */ export_helper_default(close_vue_vue_type_script_lang_default, [["render", _sfc_render56], ["__file", "close.vue"]]);
var hide_vue_vue_type_script_lang_default = {
  name: "Hide"
};
var _hoisted_1133 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2133 = /* @__PURE__ */ createElementVNode("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), _hoisted_3132 = /* @__PURE__ */ createElementVNode("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), _hoisted_438 = [
  _hoisted_2133,
  _hoisted_3132
];
function _sfc_render133(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1133, _hoisted_438);
}
var hide_default = /* @__PURE__ */ export_helper_default(hide_vue_vue_type_script_lang_default, [["render", _sfc_render133], ["__file", "hide.vue"]]);
var loading_vue_vue_type_script_lang_default = {
  name: "Loading"
};
var _hoisted_1150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2150 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), _hoisted_3149 = [
  _hoisted_2150
];
function _sfc_render150(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1150, _hoisted_3149);
}
var loading_default = /* @__PURE__ */ export_helper_default(loading_vue_vue_type_script_lang_default, [["render", _sfc_render150], ["__file", "loading.vue"]]);
var more_vue_vue_type_script_lang_default = {
  name: "More"
};
var _hoisted_1175 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2175 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), _hoisted_3174 = [
  _hoisted_2175
];
function _sfc_render175(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1175, _hoisted_3174);
}
var more_default = /* @__PURE__ */ export_helper_default(more_vue_vue_type_script_lang_default, [["render", _sfc_render175], ["__file", "more.vue"]]);
var view_vue_vue_type_script_lang_default = {
  name: "View"
};
var _hoisted_1283 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2283 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), _hoisted_3282 = [
  _hoisted_2283
];
function _sfc_render283(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1283, _hoisted_3282);
}
var view_default = /* @__PURE__ */ export_helper_default(view_vue_vue_type_script_lang_default, [["render", _sfc_render283], ["__file", "view.vue"]]);
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required: required4, default: defaultValue, type: type4, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type: type4,
    required: !!required4,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};
const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
    }
  });
  return result;
};
const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
const generateId = () => Math.floor(Math.random() * 1e4);
const mutable = (val) => val;
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return computed(() => ({}));
  }
  return computed(() => {
    var _a2;
    return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const configProviderContextKey = Symbol();
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const radioGroupKey = Symbol("radioGroupKey");
const scrollbarContextKey = Symbol("scrollbarContextKey");
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b;
    return (_b = ((_a2 = vm.proxy) == null ? void 0 : _a2.$props)[name]) != null ? _b : void 0;
  });
};
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type: type4 = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
    if (val) {
      debugWarn(scope, `[${type4}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref2}
`);
    }
  }, {
    immediate: true
  });
};
const useFocus = (el) => {
  return {
    focus: () => {
      var _a2, _b;
      (_b = (_a2 = el.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    }
  };
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace2, block, blockSuffix, element, modifier) => {
  let cls = `${namespace2}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const namespace2 = useGlobalConfig("namespace", defaultNamespace);
  const b = (blockSuffix = "") => _bem(namespace2.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace2.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace2.value, block, "", "", modifier) : "";
  const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(namespace2.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace2.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace2.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace2.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object4) => {
    const styles = {};
    for (const key in object4) {
      if (object4[key]) {
        styles[`--${namespace2.value}-${key}`] = object4[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object4) => {
    const styles = {};
    for (const key in object4) {
      if (object4[key]) {
        styles[`--${namespace2.value}-${block}-${key}`] = object4[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace2.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace2.value}-${block}-${name}`;
  return {
    namespace: namespace2,
    b,
    e,
    m,
    be: be2,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const namespace2 = useGlobalConfig("namespace", defaultNamespace);
  const idRef = computed(() => unref(deterministicId) || `${namespace2.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  let idUnwatch = void 0;
  const isLabeledByFormItem = computed(() => {
    var _a2;
    return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
  });
  onMounted(() => {
    idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  onUnmounted(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed(() => locale.value || English));
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
let registeredEscapeHandlers = [];
const cachedHandler = (e) => {
  const event = e;
  if (event.key === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient)
      registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};
let cachedContainer;
const namespace = useGlobalConfig("namespace", defaultNamespace);
const POPPER_CONTAINER_ID = `${namespace.value}-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (process.env.NODE_ENV === "test" || !cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
    }, unref(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionRef.value == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$n = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns2).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a2;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType
  },
  prefixIcon: {
    type: iconPropType
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  }
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  input: (value) => isString(value),
  change: (value) => isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const _hoisted_1$e = ["role"];
const _hoisted_2$6 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"];
const _hoisted_3$2 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"];
const __default__$m = defineComponent({
  name: "ElInput",
  inheritAttrs: false
});
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const rawAttrs = useAttrs$1();
    const slots = useSlots();
    const containerAttrs = computed(() => {
      const comboBoxAttrs = {};
      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }
      return comboBoxAttrs;
    });
    const attrs = useAttrs({
      excludeKeys: computed(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const { form, formItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const inputSize = useSize();
    const inputDisabled = useDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input.value || textarea.value);
    const needStatusIcon = computed(() => {
      var _a2;
      return (_a2 = form == null ? void 0 : form.statusIcon) != null ? _a2 : false;
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed(() => [
      rawAttrs.style,
      props.inputStyle
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries) => {
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry = entries[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      const { type: type4, autosize } = props;
      if (!isClient || type4 !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
        value = props.formatter(value);
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value) {
        setNativeInputValue();
        return;
      }
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a2;
      emit("compositionupdate", event);
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a2;
      await nextTick();
      (_a2 = _ref.value) == null ? void 0 : _a2.focus();
    };
    const blur = () => {
      var _a2;
      return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a2;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur").catch((err) => debugWarn(err));
      }
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a2;
      (_a2 = _ref.value) == null ? void 0 : _a2.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    watch(() => props.modelValue, () => {
      var _a2;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn(err));
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
    });
    onMounted(() => {
      if (!props.formatter && props.parser) {
        debugWarn("ElInput", "If you set the parser, you also need to set the formatter.");
      }
      setNativeInputValue();
      nextTick(resizeTextarea);
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
        class: [
          _ctx.type === "textarea" ? unref(nsTextarea).b() : unref(nsInput).b(),
          unref(nsInput).m(unref(inputSize)),
          unref(nsInput).is("disabled", unref(inputDisabled)),
          unref(nsInput).is("exceed", unref(inputExceed)),
          {
            [unref(nsInput).b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
            [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend,
            [unref(nsInput).m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
            [unref(nsInput).m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
            [unref(nsInput).bm("suffix", "password-clear")]: unref(showClear) && unref(showPwdVisible)
          },
          _ctx.$attrs.class
        ],
        style: unref(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(nsInput).e("wrapper"), unref(nsInput).is("focus", focused.value)])
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              id: unref(inputId),
              ref_key: "input",
              ref: input,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              formatter: _ctx.formatter,
              parser: _ctx.parser,
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              form: props.form,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_2$6),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true),
                unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 4,
                  class: normalizeClass([
                    unref(nsInput).e("icon"),
                    unref(nsInput).e("validateIcon"),
                    unref(nsInput).is("loading", unref(validateState) === "validating")
                  ])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            id: unref(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: unref(nsTextarea).e("inner")
          }, unref(attrs), {
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.label,
            placeholder: _ctx.placeholder,
            form: props.form,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3$2),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(countStyle.value),
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 7)) : createCommentVNode("v-if", true)
        ], 64))
      ], 16, _hoisted_1$e)), [
        [vShow, _ctx.type !== "hidden"]
      ]);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ElInput = withInstall(Input);
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME$6 = "Thumb";
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const scrollbar = inject(scrollbarContextKey);
    const ns2 = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME$6, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a2;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns2).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns2).e("bar"), unref(ns2).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createElementVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns2).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
const SCOPE$1 = "ElScrollbar";
const __default__$l = defineComponent({
  name: "ElScrollbar"
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns2 = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = ref();
    const wrap$ = ref();
    const resize$ = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const ratioY = ref(1);
    const ratioX = ref(1);
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      var _a2;
      if (wrap$.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject(arg1)) {
        wrap$.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrap$.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE$1, "value must be a number");
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE$1, "value must be a number");
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a2;
          update();
          if (wrap$.value) {
            (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    expose({
      wrap$,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbar$",
        ref: scrollbar$,
        class: normalizeClass(unref(ns2).b())
      }, [
        createElementVNode("div", {
          ref_key: "wrap$",
          ref: wrap$,
          class: normalizeClass([
            _ctx.wrapClass,
            unref(ns2).e("wrap"),
            { [unref(ns2).em("wrap", "hidden-default")]: !_ctx.native }
          ]),
          style: normalizeStyle(unref(style)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            ref_key: "resize$",
            ref: resize$,
            class: normalizeClass([unref(ns2).e("view"), _ctx.viewClass]),
            style: normalizeStyle(_ctx.viewStyle)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: sizeHeight.value,
          width: sizeWidth.value,
          always: _ctx.always,
          "ratio-x": ratioX.value,
          "ratio-y": ratioY.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$k = defineComponent({
  name: "ElPopperRoot",
  inheritAttrs: false
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef2 = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef: triggerRef2,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$j = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("popper");
    const { arrowOffset, arrowRef } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns2).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a2;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return () => {
      var _a22;
      const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        debugWarn(NAME, "requires exact only one valid child.");
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        debugWarn(NAME, "no valid child node found");
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns2 = useNamespace("only-child");
  return createVNode("span", {
    "class": ns2.e("content")
  }, [s]);
}
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const __default__$i = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef: triggerRef2 } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef2);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef2.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(triggerRef2, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a2;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a2 = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a2.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var E = "top", R = "bottom", W = "right", P = "left", me = "auto", G = [E, R, W, P], U = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t, e) {
  return t.concat([e + "-" + U, e + "-" + J]);
}, []), Ee = [].concat(G, [me]).reduce(function(t, e) {
  return t.concat([e, e + "-" + U, e + "-" + J]);
}, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
function C(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function H(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Q(t) {
  var e = H(t).Element;
  return t instanceof e || t instanceof Element;
}
function B(t) {
  var e = H(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Pe(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = H(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Mt(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !B(i) || !C(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === false ? i.removeAttribute(a) : i.setAttribute(a, s === true ? "" : s);
    }));
  });
}
function Rt(t) {
  var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s = a.reduce(function(f, c) {
        return f[c] = "", f;
      }, {});
      !B(o) || !C(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(f) {
        o.removeAttribute(f);
      }));
    });
  };
}
var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
function q(t) {
  return t.split("-")[0];
}
var X = Math.max, ve = Math.min, Z = Math.round;
function ee(t, e) {
  e === void 0 && (e = false);
  var n = t.getBoundingClientRect(), r = 1, o = 1;
  if (B(t) && e) {
    var i = t.offsetHeight, a = t.offsetWidth;
    a > 0 && (r = Z(n.width) / a || 1), i > 0 && (o = Z(n.height) / i || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function ke(t) {
  var e = ee(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: r };
}
function it(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return true;
  if (n && Pe(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function N(t) {
  return H(t).getComputedStyle(t);
}
function Wt(t) {
  return ["table", "td", "th"].indexOf(C(t)) >= 0;
}
function I(t) {
  return ((Q(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return C(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe(t) ? t.host : null) || I(t);
}
function at(t) {
  return !B(t) || N(t).position === "fixed" ? null : t.offsetParent;
}
function Bt(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && B(t)) {
    var r = N(t);
    if (r.position === "fixed")
      return null;
  }
  var o = ge(t);
  for (Pe(o) && (o = o.host); B(o) && ["html", "body"].indexOf(C(o)) < 0; ) {
    var i = N(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function se(t) {
  for (var e = H(t), n = at(t); n && Wt(n) && N(n).position === "static"; )
    n = at(n);
  return n && (C(n) === "html" || C(n) === "body" && N(n).position === "static") ? e : n || Bt(t) || e;
}
function Le(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function fe(t, e, n) {
  return X(t, ve(e, n));
}
function St(t, e, n) {
  var r = fe(t, e, n);
  return r > n ? n : r;
}
function st() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(t) {
  return Object.assign({}, st(), t);
}
function ct(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Tt = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ft(typeof t != "number" ? t : ct(t, G));
};
function Ht(t) {
  var e, n = t.state, r = t.name, o = t.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = q(n.placement), f = Le(s), c = [P, W].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !a)) {
    var m = Tt(o.padding, n), v = ke(i), l = f === "y" ? E : P, h2 = f === "y" ? R : W, p = n.rects.reference[u] + n.rects.reference[f] - a[f] - n.rects.popper[u], g = a[f] - n.rects.reference[f], x = se(i), y = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, $ = p / 2 - g / 2, d = m[l], b = y - v[u] - m[h2], w = y / 2 - v[u] / 2 + $, O = fe(d, w, b), j = f;
    n.modifiersData[r] = (e = {}, e[j] = O, e.centerOffset = O - w, e);
  }
}
function Ct(t) {
  var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || !it(e.elements.popper, o) || (e.elements.arrow = o));
}
var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function te(t) {
  return t.split("-")[1];
}
var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vt(t) {
  var e = t.x, n = t.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Z(e * o) / o || 0, y: Z(n * o) / o || 0 };
}
function ut(t) {
  var e, n = t.popper, r = t.popperRect, o = t.placement, i = t.variation, a = t.offsets, s = t.position, f = t.gpuAcceleration, c = t.adaptive, u = t.roundOffsets, m = t.isFixed, v = a.x, l = v === void 0 ? 0 : v, h2 = a.y, p = h2 === void 0 ? 0 : h2, g = typeof u == "function" ? u({ x: l, y: p }) : { x: l, y: p };
  l = g.x, p = g.y;
  var x = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), $ = P, d = E, b = window;
  if (c) {
    var w = se(n), O = "clientHeight", j = "clientWidth";
    if (w === H(n) && (w = I(n), N(w).position !== "static" && s === "absolute" && (O = "scrollHeight", j = "scrollWidth")), w = w, o === E || (o === P || o === W) && i === J) {
      d = R;
      var A = m && w === b && b.visualViewport ? b.visualViewport.height : w[O];
      p -= A - r.height, p *= f ? 1 : -1;
    }
    if (o === P || (o === E || o === R) && i === J) {
      $ = W;
      var k = m && w === b && b.visualViewport ? b.visualViewport.width : w[j];
      l -= k - r.width, l *= f ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, c && qt), S = u === true ? Vt({ x: l, y: p }) : { x: l, y: p };
  if (l = S.x, p = S.y, f) {
    var L;
    return Object.assign({}, D, (L = {}, L[d] = y ? "0" : "", L[$] = x ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p + "px)" : "translate3d(" + l + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, D, (e = {}, e[d] = y ? p + "px" : "", e[$] = x ? l + "px" : "", e.transform = "", e));
}
function Nt(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i = n.adaptive, a = i === void 0 ? true : i, s = n.roundOffsets, f = s === void 0 ? true : s, c = { placement: q(e.placement), variation: te(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a, roundOffsets: f })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
function It(t) {
  var e = t.state, n = t.instance, r = t.options, o = r.scroll, i = o === void 0 ? true : o, a = r.resize, s = a === void 0 ? true : a, f = H(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, ye);
  }), s && f.addEventListener("resize", n.update, ye), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ye);
    }), s && f.removeEventListener("resize", n.update, ye);
  };
}
var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return _t[e];
  });
}
var zt = { start: "end", end: "start" };
function lt(t) {
  return t.replace(/start|end/g, function(e) {
    return zt[e];
  });
}
function We(t) {
  var e = H(t), n = e.pageXOffset, r = e.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Be(t) {
  return ee(I(t)).left + We(t).scrollLeft;
}
function Ft(t) {
  var e = H(t), n = I(t), r = e.visualViewport, o = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), { width: o, height: i, x: a + Be(t), y: s };
}
function Ut(t) {
  var e, n = I(t), r = We(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = X(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = X(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Be(t), f = -r.scrollTop;
  return N(o || n).direction === "rtl" && (s += X(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: a, x: s, y: f };
}
function Se(t) {
  var e = N(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function dt(t) {
  return ["html", "body", "#document"].indexOf(C(t)) >= 0 ? t.ownerDocument.body : B(t) && Se(t) ? t : dt(ge(t));
}
function ce(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = dt(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = H(r), a = o ? [i].concat(i.visualViewport || [], Se(r) ? r : []) : r, s = e.concat(a);
  return o ? s : s.concat(ce(ge(a)));
}
function Te(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function Xt(t) {
  var e = ee(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
function ht(t, e) {
  return e === je ? Te(Ft(t)) : Q(e) ? Xt(e) : Te(Ut(I(t)));
}
function Yt(t) {
  var e = ce(ge(t)), n = ["absolute", "fixed"].indexOf(N(t).position) >= 0, r = n && B(t) ? se(t) : t;
  return Q(r) ? e.filter(function(o) {
    return Q(o) && it(o, r) && C(o) !== "body";
  }) : [];
}
function Gt(t, e, n) {
  var r = e === "clippingParents" ? Yt(t) : [].concat(e), o = [].concat(r, [n]), i = o[0], a = o.reduce(function(s, f) {
    var c = ht(t, f);
    return s.top = X(c.top, s.top), s.right = ve(c.right, s.right), s.bottom = ve(c.bottom, s.bottom), s.left = X(c.left, s.left), s;
  }, ht(t, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function mt(t) {
  var e = t.reference, n = t.element, r = t.placement, o = r ? q(r) : null, i = r ? te(r) : null, a = e.x + e.width / 2 - n.width / 2, s = e.y + e.height / 2 - n.height / 2, f;
  switch (o) {
    case E:
      f = { x: a, y: e.y - n.height };
      break;
    case R:
      f = { x: a, y: e.y + e.height };
      break;
    case W:
      f = { x: e.x + e.width, y: s };
      break;
    case P:
      f = { x: e.x - n.width, y: s };
      break;
    default:
      f = { x: e.x, y: e.y };
  }
  var c = o ? Le(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case U:
        f[c] = f[c] - (e[u] / 2 - n[u] / 2);
        break;
      case J:
        f[c] = f[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return f;
}
function ne(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i = n.boundary, a = i === void 0 ? Xe : i, s = n.rootBoundary, f = s === void 0 ? je : s, c = n.elementContext, u = c === void 0 ? K : c, m = n.altBoundary, v = m === void 0 ? false : m, l = n.padding, h2 = l === void 0 ? 0 : l, p = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g = u === K ? Ye : K, x = t.rects.popper, y = t.elements[v ? g : u], $ = Gt(Q(y) ? y : y.contextElement || I(t.elements.popper), a, f), d = ee(t.elements.reference), b = mt({ reference: d, element: x, strategy: "absolute", placement: o }), w = Te(Object.assign({}, x, b)), O = u === K ? w : d, j = { top: $.top - O.top + p.top, bottom: O.bottom - $.bottom + p.bottom, left: $.left - O.left + p.left, right: O.right - $.right + p.right }, A = t.modifiersData.offset;
  if (u === K && A) {
    var k = A[o];
    Object.keys(j).forEach(function(D) {
      var S = [W, R].indexOf(D) >= 0 ? 1 : -1, L = [E, R].indexOf(D) >= 0 ? "y" : "x";
      j[D] += k[L] * S;
    });
  }
  return j;
}
function Jt(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, f = n.allowedAutoPlacements, c = f === void 0 ? Ee : f, u = te(r), m = u ? s ? De : De.filter(function(h2) {
    return te(h2) === u;
  }) : G, v = m.filter(function(h2) {
    return c.indexOf(h2) >= 0;
  });
  v.length === 0 && (v = m);
  var l = v.reduce(function(h2, p) {
    return h2[p] = ne(t, { placement: p, boundary: o, rootBoundary: i, padding: a })[q(p)], h2;
  }, {});
  return Object.keys(l).sort(function(h2, p) {
    return l[h2] - l[p];
  });
}
function Kt(t) {
  if (q(t) === me)
    return [];
  var e = be(t);
  return [lt(t), e, lt(e)];
}
function Qt(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? true : a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, l = n.flipVariations, h2 = l === void 0 ? true : l, p = n.allowedAutoPlacements, g = e.options.placement, x = q(g), y = x === g, $ = f || (y || !h2 ? [be(g)] : Kt(g)), d = [g].concat($).reduce(function(z, V) {
      return z.concat(q(V) === me ? Jt(e, { placement: V, boundary: u, rootBoundary: m, padding: c, flipVariations: h2, allowedAutoPlacements: p }) : V);
    }, []), b = e.rects.reference, w = e.rects.popper, O = /* @__PURE__ */ new Map(), j = true, A = d[0], k = 0; k < d.length; k++) {
      var D = d[k], S = q(D), L = te(D) === U, re = [E, R].indexOf(S) >= 0, oe = re ? "width" : "height", M = ne(e, { placement: D, boundary: u, rootBoundary: m, altBoundary: v, padding: c }), T = re ? L ? W : P : L ? R : E;
      b[oe] > w[oe] && (T = be(T));
      var pe = be(T), _ = [];
      if (i && _.push(M[S] <= 0), s && _.push(M[T] <= 0, M[pe] <= 0), _.every(function(z) {
        return z;
      })) {
        A = D, j = false;
        break;
      }
      O.set(D, _);
    }
    if (j)
      for (var ue = h2 ? 3 : 1, xe = function(z) {
        var V = d.find(function(de) {
          var ae = O.get(de);
          if (ae)
            return ae.slice(0, z).every(function(Y) {
              return Y;
            });
        });
        if (V)
          return A = V, "break";
      }, ie = ue; ie > 0; ie--) {
        var le = xe(ie);
        if (le === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = true, e.placement = A, e.reset = true);
  }
}
var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
function gt(t, e, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
}
function yt(t) {
  return [E, W, R, P].some(function(e) {
    return t[e] >= 0;
  });
}
function Zt(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, a = ne(e, { elementContext: "reference" }), s = ne(e, { altBoundary: true }), f = gt(a, r), c = gt(s, o, i), u = yt(f), m = yt(c);
  e.modifiersData[n] = { referenceClippingOffsets: f, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: m }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": m });
}
var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
function en(t, e, n) {
  var r = q(t), o = [P, E].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [P, W].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function tn(t) {
  var e = t.state, n = t.options, r = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Ee.reduce(function(u, m) {
    return u[m] = en(m, e.rects, i), u;
  }, {}), s = a[e.placement], f = s.x, c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = a;
}
var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
function nn(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = mt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
function rn(t) {
  return t === "x" ? "y" : "x";
}
function on(t) {
  var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? false : a, f = n.boundary, c = n.rootBoundary, u = n.altBoundary, m = n.padding, v = n.tether, l = v === void 0 ? true : v, h2 = n.tetherOffset, p = h2 === void 0 ? 0 : h2, g = ne(e, { boundary: f, rootBoundary: c, padding: m, altBoundary: u }), x = q(e.placement), y = te(e.placement), $ = !y, d = Le(x), b = rn(d), w = e.modifiersData.popperOffsets, O = e.rects.reference, j = e.rects.popper, A = typeof p == "function" ? p(Object.assign({}, e.rects, { placement: e.placement })) : p, k = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S = { x: 0, y: 0 };
  if (w) {
    if (i) {
      var L, re = d === "y" ? E : P, oe = d === "y" ? R : W, M = d === "y" ? "height" : "width", T = w[d], pe = T + g[re], _ = T - g[oe], ue = l ? -j[M] / 2 : 0, xe = y === U ? O[M] : j[M], ie = y === U ? -j[M] : -O[M], le = e.elements.arrow, z = l && le ? ke(le) : { width: 0, height: 0 }, V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st(), de = V[re], ae = V[oe], Y = fe(0, O[M], z[M]), jt = $ ? O[M] / 2 - ue - Y - de - k.mainAxis : xe - Y - de - k.mainAxis, Dt = $ ? -O[M] / 2 + ue + Y + ae + k.mainAxis : ie + Y + ae + k.mainAxis, Oe = e.elements.arrow && se(e.elements.arrow), Et = Oe ? d === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L = D == null ? void 0 : D[d]) != null ? L : 0, Pt = T + jt - Ce - Et, At = T + Dt - Ce, qe = fe(l ? ve(pe, Pt) : pe, T, l ? X(_, At) : _);
      w[d] = qe, S[d] = qe - T;
    }
    if (s) {
      var Ve, kt = d === "x" ? E : P, Lt = d === "x" ? R : W, F = w[b], he = b === "y" ? "height" : "width", Ne = F + g[kt], Ie = F - g[Lt], $e = [E, P].indexOf(x) !== -1, _e = (Ve = D == null ? void 0 : D[b]) != null ? Ve : 0, ze = $e ? Ne : F - O[he] - j[he] - _e + k.altAxis, Fe = $e ? F + O[he] + j[he] - _e - k.altAxis : Ie, Ue = l && $e ? St(ze, F, Fe) : fe(l ? ze : Ne, F, l ? Fe : Ie);
      w[b] = Ue, S[b] = Ue - F;
    }
    e.modifiersData[r] = S;
  }
}
var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
function an(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function sn(t) {
  return t === H(t) || !B(t) ? We(t) : an(t);
}
function fn(t) {
  var e = t.getBoundingClientRect(), n = Z(e.width) / t.offsetWidth || 1, r = Z(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cn(t, e, n) {
  n === void 0 && (n = false);
  var r = B(e), o = B(e) && fn(e), i = I(e), a = ee(t, o), s = { scrollLeft: 0, scrollTop: 0 }, f = { x: 0, y: 0 };
  return (r || !r && !n) && ((C(e) !== "body" || Se(i)) && (s = sn(e)), B(e) ? (f = ee(e, true), f.x += e.clientLeft, f.y += e.clientTop) : i && (f.x = Be(i))), { x: a.left + s.scrollLeft - f.x, y: a.top + s.scrollTop - f.y, width: a.width, height: a.height };
}
function pn(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var f = e.get(s);
        f && o(f);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function un(t) {
  var e = pn(t);
  return ot.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ln(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function dn(t) {
  var e = t.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $t() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function we(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? Ot : o;
  return function(a, s, f) {
    f === void 0 && (f = i);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, u = [], m = false, v = { state: c, setOptions: function(p) {
      var g = typeof p == "function" ? p(c.options) : p;
      h2(), c.options = Object.assign({}, i, c.options, g), c.scrollParents = { reference: Q(a) ? ce(a) : a.contextElement ? ce(a.contextElement) : [], popper: ce(s) };
      var x = un(dn([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = x.filter(function(y) {
        return y.enabled;
      }), l(), v.update();
    }, forceUpdate: function() {
      if (!m) {
        var p = c.elements, g = p.reference, x = p.popper;
        if ($t(g, x)) {
          c.rects = { reference: cn(g, se(x), c.options.strategy === "fixed"), popper: ke(x) }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(j) {
            return c.modifiersData[j.name] = Object.assign({}, j.data);
          });
          for (var y = 0; y < c.orderedModifiers.length; y++) {
            if (c.reset === true) {
              c.reset = false, y = -1;
              continue;
            }
            var $ = c.orderedModifiers[y], d = $.fn, b = $.options, w = b === void 0 ? {} : b, O = $.name;
            typeof d == "function" && (c = d({ state: c, options: w, name: O, instance: v }) || c);
          }
        }
      }
    }, update: ln(function() {
      return new Promise(function(p) {
        v.forceUpdate(), p(c);
      });
    }), destroy: function() {
      h2(), m = true;
    } };
    if (!$t(a, s))
      return v;
    v.setOptions(f).then(function(p) {
      !m && f.onFirstUpdate && f.onFirstUpdate(p);
    });
    function l() {
      c.orderedModifiers.forEach(function(p) {
        var g = p.name, x = p.options, y = x === void 0 ? {} : x, $ = p.effect;
        if (typeof $ == "function") {
          var d = $({ state: c, name: g, instance: v, options: y }), b = function() {
          };
          u.push(d || b);
        }
      });
    }
    function h2() {
      u.forEach(function(p) {
        return p();
      }), u = [];
    }
    return v;
  };
}
we();
var mn = [Re, He, Me, Ae];
we({ defaultModifiers: mn });
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
let focusReasonUserCount = 0;
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (process.env.NODE_ENV === "test")
    return false;
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a2, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();
const isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
const notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
const notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
const useFocusReason = () => {
  onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  onBeforeUnmount(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$r = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
        if (!isPrevFocusedInTrap) {
          lastFocusBeforeTrapped = relatedTarget;
        }
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    async function startTrap() {
      await nextTick();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason2.value
          }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent())) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body, true);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    onMounted(() => {
      if (props.trapped) {
        startTrap();
      }
      watch(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const __default__$h = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef: triggerRef2, role } = inject(POPPER_INJECTION_KEY, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const { nextZIndex } = useZIndex();
    const ns2 = useNamespace("popper");
    const popperContentRef = ref();
    const focusStartRef = ref("first");
    const arrowRef = ref();
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const trapped = ref(false);
    let triggerTargetAriaStopWatch = void 0;
    const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef2));
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      ns2.b(),
      ns2.is("pure", props.pure),
      ns2.is(props.effect),
      props.popperClass
    ]);
    const ariaModal = computed(() => {
      return role && role.value === "dialog" ? "false" : void 0;
    });
    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return yn(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a2;
      (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a2, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.setOptions) == null ? void 0 : _b.call(_a2, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    const onFocusAfterTrapped = () => {
      emit("focus");
    };
    const onFocusAfterReleased = (event) => {
      var _a2;
      if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) !== "pointer") {
        focusStartRef.value = "first";
        emit("blur");
      }
    };
    const onFocusInTrap = (event) => {
      if (props.visible && !trapped.value) {
        if (event.target) {
          focusStartRef.value = event.target;
        }
        trapped.value = true;
      }
    };
    const onFocusoutPrevented = (event) => {
      if (!props.trapping) {
        if (event.detail.focusReason === "pointer") {
          event.preventDefault();
        }
        trapped.value = false;
      }
    };
    const onReleaseRequested = () => {
      trapped.value = false;
      emit("close");
    };
    onMounted(() => {
      let updateHandle;
      watch(computedReference, (referenceEl) => {
        var _a2;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = unref(popperInstanceRef);
        (_a2 = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a2.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: unref(arrowRef)
          });
          updateHandle = watch(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = unref(triggerTargetEl || popperContentRef.value);
        const prevEl = unref(prevTriggerTargetEl || popperContentRef.value);
        if (isElement(el)) {
          triggerTargetAriaStopWatch = watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (prevEl !== el && isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      watch(() => props.visible, togglePopperAlive, { immediate: true });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option) => {
        var _a2;
        return (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.setOptions(option);
      });
    });
    onBeforeUnmount(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: normalizeStyle(unref(contentStyle)),
        class: normalizeClass(unref(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        createVNode(unref(ElFocusTrap), {
          trapped: trapped.value,
          "trap-on-focus-in": true,
          "focus-trap-el": popperContentRef.value,
          "focus-start-el": focusStartRef.value,
          onFocusAfterTrapped,
          onFocusAfterReleased,
          onFocusin: onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const ElPopper = withInstall(Popper);
const ns = useNamespace("tooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type4) => {
  if (isArray(trigger)) {
    return trigger.includes(type4);
  }
  return trigger === type4;
};
const whenTrigger = (trigger, type4, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type4) && handler(e);
  };
};
const __default__$g = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef2 = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns2).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const __default__$f = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const contentRef = ref(null);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      if (process.env.NODE_ENV === "test") {
        return true;
      }
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a2;
      return (_a2 = props.style) != null ? _a2 : {};
    });
    const ariaHidden = computed(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a2, _b;
      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a2;
        return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a2, _b;
      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    });
    expose({
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: _ctx.appendTo
      }, [
        createVNode(Transition, {
          name: _ctx.transition,
          onAfterLeave: onTransitionLeave,
          onBeforeEnter,
          onAfterEnter: onAfterShow,
          onBeforeLeave
        }, {
          default: withCtx(() => [
            unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
              key: 0,
              id: unref(id),
              ref_key: "contentRef",
              ref: contentRef
            }, _ctx.$attrs, {
              "aria-label": _ctx.ariaLabel,
              "aria-hidden": unref(ariaHidden),
              "boundaries-padding": _ctx.boundariesPadding,
              "fallback-placements": _ctx.fallbackPlacements,
              "gpu-acceleration": _ctx.gpuAcceleration,
              offset: _ctx.offset,
              placement: _ctx.placement,
              "popper-options": _ctx.popperOptions,
              strategy: _ctx.strategy,
              effect: _ctx.effect,
              enterable: _ctx.enterable,
              pure: _ctx.pure,
              "popper-class": _ctx.popperClass,
              "popper-style": [_ctx.popperStyle, unref(contentStyle)],
              "reference-el": _ctx.referenceEl,
              "trigger-target-el": _ctx.triggerTargetEl,
              visible: unref(shouldShow),
              "z-index": _ctx.zIndex,
              onMouseenter: unref(onContentEnter),
              onMouseleave: unref(onContentLeave),
              onBlur,
              onClose: unref(onClose)
            }), {
              default: withCtx(() => [
                createCommentVNode(" Workaround bug #6378 "),
                !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(shouldShow)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const _hoisted_1$d = ["innerHTML"];
const _hoisted_2$5 = { key: 1 };
const __default__$e = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const compatShowAfter = computed(() => {
      if (!isUndefined(props.openDelay)) {
        debugWarn("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed(() => {
      if (!isUndefined(props.visibleArrow)) {
        debugWarn("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a2;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a2, _b;
      const popperContent = (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    onDeactivated(() => open.value && hide());
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": unref(compatShowAfter),
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_1$d)) : (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(_ctx.content), 1))
              ]),
              unref(compatShowArrow) ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l };
}
function hue2rgb(p, q2, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q2 - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q2;
  }
  if (t < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h2, s, l) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q2;
    r = hue2rgb(p, q2, h2 + 1 / 3);
    g = hue2rgb(p, q2, h2);
    b = hue2rgb(p, q2, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}
function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p = v * (1 - s);
  var q2 = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q2, p, p, t, v][mod];
  var g = [t, v, v, q2, p, p][mod];
  var b = [p, p, t, v, v, q2][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b = _a2[_i], key = _b[0], value = _b[1];
      if (hex2 === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a2, _b;
    const max = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a2, _b;
    return value === props.trueLabel || value === true ? (_a2 = props.trueLabel) != null ? _a2 : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a2, _b;
      return isGroup.value ? (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a2.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a2, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value);
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      return value.map(toRaw).includes(props.label);
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useSize(computed(() => {
    var _a2;
    return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
  }), {
    prop: true
  });
  const checkboxSize = useSize(computed(() => {
    var _a2;
    return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$c = ["tabindex", "role", "aria-checked"];
const _hoisted_2$4 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3$1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
const __default__$d = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns2 = useNamespace("checkbox");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).m(unref(checkboxSize)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(isChecked))
        ]),
        "aria-controls": _ctx.indeterminate ? _ctx.controls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass([
              unref(ns2).e("input"),
              unref(ns2).is("disabled", unref(isDisabled)),
              unref(ns2).is("checked", unref(isChecked)),
              unref(ns2).is("indeterminate", _ctx.indeterminate),
              unref(ns2).is("focus", unref(isFocused))
            ]),
            tabindex: _ctx.indeterminate ? 0 : void 0,
            role: _ctx.indeterminate ? "checkbox" : void 0,
            "aria-checked": _ctx.indeterminate ? "mixed" : void 0
          }, [
            _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              disabled: unref(isDisabled),
              "true-value": _ctx.trueLabel,
              "false-value": _ctx.falseLabel,
              onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
              onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_2$4)), [
              [vModelCheckbox, unref(model)]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              disabled: unref(isDisabled),
              value: _ctx.label,
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
              onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_3$1)), [
              [vModelCheckbox, unref(model)]
            ]),
            createElementVNode("span", {
              class: normalizeClass(unref(ns2).e("inner"))
            }, null, 2)
          ], 10, _hoisted_1$c),
          unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(ns2).e("label"))
          }, [
            renderSlot(_ctx.$slots, "default"),
            !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const _hoisted_1$b = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$3 = ["name", "tabindex", "disabled", "value"];
const __default__$c = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns2 = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a2, _b, _c, _d;
      const fillValue = (_b = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a2.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).bm("button", unref(checkboxButtonSize)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("checked", unref(isChecked)),
          unref(ns2).is("focus", unref(isFocused))
        ])
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_1$b)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_2$3)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__$b = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick$1(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns2).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a2 = unref(formItem)) == null ? void 0 : _a2.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};
const _hoisted_1$a = ["value", "name", "disabled"];
const __default__$a = defineComponent({
  name: "ElRadio"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(modelValue) === _ctx.label),
          unref(ns2).m(unref(size))
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([
            unref(ns2).e("input"),
            unref(ns2).is("disabled", unref(disabled)),
            unref(ns2).is("checked", unref(modelValue) === _ctx.label)
          ])
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns2).e("original")),
            value: _ctx.label,
            name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1$a), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns2).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).e("label")),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});
const _hoisted_1$9 = ["value", "name", "disabled"];
const __default__$9 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).is("active", unref(modelValue) === _ctx.label),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).bm("button", unref(size))
        ])
      }, [
        withDirectives(createElementVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original-radio")),
          value: _ctx.label,
          type: "radio",
          name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
          disabled: unref(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1$9), [
          [vModelRadio, unref(modelValue)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const radioGroupEmits = radioEmits;
const _hoisted_1$8 = ["id", "aria-label", "aria-labelledby"];
const __default__$8 = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns2).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$8);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$7 = defineComponent({
  name: "ElTag"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns2 = useNamespace("tag");
    const classes = computed(() => {
      const { type: type4, hit, effect, closable, round } = props;
      return [
        ns2.b(),
        ns2.is("closable", closable),
        ns2.m(type4),
        ns2.m(tagSize.value),
        ns2.m(effect),
        ns2.is("hit", hit),
        ns2.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns2).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns2).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns2).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns2).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ElTag = withInstall(Tag);
const __default__$6 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const ns2 = useNamespace("collapse-transition");
    const on2 = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.maxHeight = 0;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = "hidden";
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns2).b()
      }, toHandlers(on2)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  scrollToError: Boolean
});
const formEmits = {
  validate: (prop, isValid, message) => (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message)
};
const SCOPE = "ElForm";
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1 && autoLabelWidth.value === "0") {
      debugWarn(SCOPE, `unexpected width ${width}`);
    }
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    if (index > -1) {
      potentialLabelWidthArr.value.splice(index, 1);
    }
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const filterFields = (fields, props) => {
  const normalized = castArray(props);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};
const COMPONENT_NAME$5 = "ElForm";
const __default__$5 = defineComponent({
  name: COMPONENT_NAME$5
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: formProps,
  emits: formEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const fields = [];
    const formSize = useSize();
    const ns2 = useNamespace("form");
    const formClasses = computed(() => {
      const { labelPosition, inline } = props;
      return [
        ns2.b(),
        ns2.m(formSize.value || "default"),
        {
          [ns2.m(`label-${labelPosition}`)]: labelPosition,
          [ns2.m("inline")]: inline
        }
      ];
    });
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props.model) {
        debugWarn(COMPONENT_NAME$5, "model is required for resetFields to work.");
        return;
      }
      filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props2 = []) => {
      filterFields(fields, props2).forEach((field) => field.clearValidate());
    };
    const isValidatable = computed(() => {
      const hasModel = !!props.model;
      if (!hasModel) {
        debugWarn(COMPONENT_NAME$5, "model is required for validate to work.");
      }
      return hasModel;
    });
    const obtainValidateFields = (props2) => {
      if (fields.length === 0)
        return [];
      const filteredFields = filterFields(fields, props2);
      if (!filteredFields.length) {
        debugWarn(COMPONENT_NAME$5, "please pass correct props!");
        return [];
      }
      return filteredFields;
    };
    const validate = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props2 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !isFunction(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          callback == null ? void 0 : callback(result);
        }
        return result;
      } catch (e) {
        const invalidFields = e;
        if (props.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        callback == null ? void 0 : callback(false, invalidFields);
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a2;
      const field = filterFields(fields, prop)[0];
      if (field) {
        (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView();
      }
    };
    watch(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validate().catch((err) => debugWarn(err));
      }
    }, { deep: true });
    provide(formContextKey, reactive({
      ...toRefs(props),
      emit,
      resetFields,
      clearValidate,
      validateField,
      addField,
      removeField,
      ...useFormLabelWidth()
    }));
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(unref(formClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn2) {
  return Function.toString.call(fn2).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production" && typeof window !== "undefined" && typeof document !== "undefined") {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone2() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  }
});
const COMPONENT_NAME$4 = "ElLabelWrap";
var FormLabelWrap = defineComponent({
  name: COMPONENT_NAME$4,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, {
    slots
  }) {
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey);
    if (!formItemContext)
      throwError(COMPONENT_NAME$4, "usage: <el-form-item><label-wrap /></el-form-item>");
    const ns2 = useNamespace("form");
    const el = ref();
    const computedWidth = ref(0);
    const getLabelWidth = () => {
      var _a2;
      if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      updateLabelWidthFn();
    });
    onBeforeUnmount(() => {
      updateLabelWidth("remove");
    });
    onUpdated(() => updateLabelWidthFn());
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver(computed(() => {
      var _a2, _b;
      return (_b = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b : null;
    }), updateLabelWidthFn);
    return () => {
      var _a2, _b;
      if (!slots)
        return null;
      const {
        isAutoWidth
      } = props;
      if (isAutoWidth) {
        const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        const hasLabel = formItemContext == null ? void 0 : formItemContext.hasLabel;
        const style = {};
        if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = formContext.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return createVNode("div", {
          "ref": el,
          "class": [ns2.be("item", "label-wrap")],
          "style": style
        }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
      } else {
        return createVNode(Fragment, {
          "ref": el
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
      }
    };
  }
});
const _hoisted_1$7 = ["role", "aria-labelledby"];
const __default__$4 = defineComponent({
  name: "ElFormItem"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: formItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const formContext = inject(formContextKey, void 0);
    const parentFormItemContext = inject(formItemContextKey, void 0);
    const _size = useSize(void 0, { formItem: false });
    const ns2 = useNamespace("form-item");
    const labelId = useId().value;
    const inputIds = ref([]);
    const validateState = ref("");
    const validateStateDebounced = refDebounced(validateState, 100);
    const validateMessage = ref("");
    const formItemRef = ref();
    let initialValue = void 0;
    let isResettingField = false;
    const labelStyle = computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = computed(() => [
      ns2.b(),
      ns2.m(_size.value),
      ns2.is("error", validateState.value === "error"),
      ns2.is("validating", validateState.value === "validating"),
      ns2.is("success", validateState.value === "success"),
      ns2.is("required", isRequired.value || props.required),
      ns2.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [ns2.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon }
    ]);
    const _inlineMessage = computed(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = computed(() => [
      ns2.e("error"),
      { [ns2.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = computed(() => {
      if (!props.prop)
        return "";
      return isString(props.prop) ? props.prop : props.prop.join(".");
    });
    const hasLabel = computed(() => {
      return !!(props.label || slots.label);
    });
    const labelFor = computed(() => {
      return props.for || inputIds.value.length === 1 ? inputIds.value[0] : void 0;
    });
    const isGroup = computed(() => {
      return !labelFor.value && hasLabel.value;
    });
    const isNested = !!parentFormItemContext;
    const fieldValue = computed(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop) {
        return;
      }
      return getProp(model, props.prop).value;
    });
    const normalizedRules = computed(() => {
      const { required: required4 } = props;
      const rules2 = [];
      if (props.rules) {
        rules2.push(...castArray(props.rules));
      }
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props.prop) {
        const _rules = getProp(formRules, props.prop).value;
        if (_rules) {
          rules2.push(...castArray(_rules));
        }
      }
      if (required4 !== void 0) {
        const requiredRules = rules2.map((rule, i) => [rule, i]).filter(([rule]) => Object.keys(rule).includes("required"));
        if (requiredRules.length > 0) {
          for (const [rule, i] of requiredRules) {
            if (rule.required === required4)
              continue;
            rules2[i] = { ...rule, required: required4 };
          }
        } else {
          rules2.push({ required: required4 });
        }
      }
      return rules2;
    });
    const validateEnabled = computed(() => normalizedRules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules2 = normalizedRules.value;
      return rules2.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = computed(() => normalizedRules.value.some((rule) => rule.required));
    const shouldShowError = computed(() => {
      var _a2;
      return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
    });
    const currentLabel = computed(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error) => {
      var _a2, _b;
      const { errors, fields } = error;
      if (!errors || !fields) {
        console.error(error);
      }
      setValidationState("error");
      validateMessage.value = errors ? (_b = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b : `${props.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };
    const doValidate = async (rules2) => {
      const modelName = propString.value;
      const validator = new Schema({
        [modelName]: rules2
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate = async (trigger, callback) => {
      if (isResettingField || !props.prop) {
        return false;
      }
      const hasCallback = isFunction(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules2 = getFilteredRule(trigger);
      if (rules2.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules2).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
      isResettingField = false;
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = getProp(model, props.prop);
      isResettingField = true;
      computedValue.value = clone(initialValue);
      await nextTick();
      clearValidate();
      isResettingField = false;
    };
    const addInputId = (id) => {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };
    const removeInputId = (id) => {
      inputIds.value = inputIds.value.filter((listId) => listId !== id);
    };
    watch(() => props.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    watch(() => props.validateStatus, (val) => setValidationState(val || ""));
    const context = reactive({
      ...toRefs(props),
      $el: formItemRef,
      size: _size,
      validateState,
      labelId,
      inputIds,
      isGroup,
      hasLabel,
      addInputId,
      removeInputId,
      resetField,
      clearValidate,
      validate
    });
    provide(formItemContextKey, context);
    onMounted(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = clone(fieldValue.value);
      }
    });
    onBeforeUnmount(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size,
      validateMessage,
      validateState,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: normalizeClass(unref(formItemClasses)),
        role: unref(isGroup) ? "group" : void 0,
        "aria-labelledby": unref(isGroup) ? unref(labelId) : void 0
      }, [
        createVNode(unref(FormLabelWrap), {
          "is-auto-width": unref(labelStyle).width === "auto",
          "update-all": ((_a2 = unref(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(hasLabel) ? (openBlock(), createBlock(resolveDynamicComponent(unref(labelFor) ? "label" : "div"), {
              key: 0,
              id: unref(labelId),
              for: unref(labelFor),
              class: normalizeClass(unref(ns2).e("label")),
              style: normalizeStyle(unref(labelStyle))
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "label", { label: unref(currentLabel) }, () => [
                  createTextVNode(toDisplayString(unref(currentLabel)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createElementVNode("div", {
          class: normalizeClass(unref(ns2).e("content")),
          style: normalizeStyle(unref(contentStyle))
        }, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(Transition, {
            name: `${unref(ns2).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(shouldShowError) ? renderSlot(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                createElementVNode("div", {
                  class: normalizeClass(unref(validateClasses))
                }, toDisplayString(validateMessage.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, _hoisted_1$7);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);
class SubMenu$1 {
  constructor(parent, domNode) {
    this.parent = parent;
    this.domNode = domNode;
    this.subIndex = 0;
    this.subIndex = 0;
    this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li");
    this.addListeners();
  }
  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1;
    }
    this.subMenuItems[idx].focus();
    this.subIndex = idx;
  }
  addListeners() {
    const parentNode = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener("keydown", (event) => {
        let prevDef = false;
        switch (event.code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode, "mouseleave");
            break;
          }
          case EVENT_CODE.enter:
          case EVENT_CODE.space: {
            prevDef = true;
            event.currentTarget.click();
            break;
          }
        }
        if (prevDef) {
          event.preventDefault();
          event.stopPropagation();
        }
        return false;
      });
    });
  }
}
class MenuItem$1 {
  constructor(domNode, namespace2) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init(namespace2);
  }
  init(namespace2) {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(`.${namespace2}-menu`);
    if (menuChild) {
      this.submenu = new SubMenu$1(this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
}
class Menu$1 {
  constructor(domNode, namespace2) {
    this.domNode = domNode;
    this.init(namespace2);
  }
  init(namespace2) {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem$1(child, namespace2);
      }
    });
  }
}
const _sfc_main$c = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns2 = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns2.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns2.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns2.m("collapse"))) {
          removeClass(el, ns2.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns2.m("collapse"));
        } else {
          addClass(el, ns2.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns2.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns2 = useNamespace("menu");
  return computed(() => {
    return ns2.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$3 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$3,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError(COMPONENT_NAME$3, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$3, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => {
      return subMenu.level === 0;
    });
    const appendToBody = computed(() => {
      return props.popperAppendToBody === void 0 ? isFirstLevel.value : Boolean(props.popperAppendToBody);
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = computed(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = computed(() => rootMenu.props.activeTextColor || "");
    const textColor = computed(() => rootMenu.props.textColor || "");
    const mode = computed(() => rootMenu.props.mode);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = vPopper.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a2;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a2 = parentMenu.value.vnode.el) == null ? void 0 : _a2.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a2, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a2 = instance.parent) == null ? void 0 : _a2.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a2;
      const titleTag = [
        (_a2 = slots.title) == null ? void 0 : _a2.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: props.popperOffset,
        showArrow: false,
        persistent: true,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a22;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              props.popperClass
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a22 = slots.default) == null ? void 0 : _a22.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(_CollapseTransition, {}, {
          default: () => {
            var _a22;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a22 = slots.default) == null ? void 0 : _a22.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu2 = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const closeMenu = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcSliceIndex = () => {
      var _a2, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a2 = menu.value) == null ? void 0 : _a2.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
      const moreItemWidth = 64;
      const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
      const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += item.offsetWidth || 0;
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const debounce2 = (fn2, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn2();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce2(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu2);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false),
        level: 0
      });
    }
    onMounted(() => {
      if (props.mode === "horizontal") {
        new Menu$1(instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    return () => {
      var _a2, _b;
      let slot = (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => h(more_default) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props, 0);
      const vMenu = h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && Array.isArray(item.indexPath)
};
const COMPONENT_NAME$2 = "ElMenuItem";
const _sfc_main$b = defineComponent({
  name: COMPONENT_NAME$2,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME$2, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$2, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect,
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 2);
}
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const COMPONENT_NAME$1 = "ElMenuItemGroup";
const _sfc_main$a = defineComponent({
  name: COMPONENT_NAME$1,
  props: menuItemGroupProps,
  setup() {
    const ns2 = useNamespace("menu-item-group");
    return {
      ns: ns2
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 2),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
const ElMenuItemGroup = withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);
const selectGroupKey = "ElSelectGroup";
const selectKey = "ElSelect";
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const isEqual2 = (a, b) => {
    if (!isObject2.value) {
      return a === b;
    } else {
      const { valueKey } = select.props;
      return get(a, valueKey) === get(b, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!Object.is(val, oldVal)) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw(select);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp4 = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp4.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$9 = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.cachedOptions.get(key) === vm && !doesSelected) {
          select.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      ns: ns2,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$8 = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns2 = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a2;
      minWidth.value = `${(_a2 = select.selectWrapper) == null ? void 0 : _a2.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectWrapper, updateMinWidth);
    });
    return {
      ns: ns2,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function useSelectStates(props) {
  const { t } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false,
    mouseEnter: false
  });
}
const useSelect = (props, states, ctx) => {
  const { t } = useLocale();
  const ns2 = useNamespace("select");
  useDeprecated({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => props.suffixTransition === false));
  const reference = ref(null);
  const input = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const { form, formItem } = useFormItem();
  const readonly2 = computed(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => ns2.is("reverse", iconComponent.value && states.visible && props.suffixTransition));
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed(() => Array.from(states.options.values()));
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch([() => selectDisabled.value, () => selectSize.value, () => form == null ? void 0 : form.size], () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a2, _b, _c;
    if (!val) {
      if (props.filterable) {
        if (isFunction(props.filterMethod)) {
          props.filterMethod();
        }
        if (isFunction(props.remoteMethod)) {
          props.remoteMethod();
        }
      }
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a2, _b, _c;
    if (!isClient)
      return;
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (typeof val === "number" && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable)
      return;
    nextTick(() => {
      var _a2, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      const _tags = tags.value;
      const sizeInMap = getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
      input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`;
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      }
    });
  };
  const handleQueryChange = async (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (typeof props.filterMethod === "function" || typeof props.remoteMethod === "function")) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a2, _b;
      if (states.visible)
        (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && typeof props.remoteMethod === "function") {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (typeof props.filterMethod === "function") {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      await nextTick();
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a2;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a2 = option.props) == null ? void 0 : _a2.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a2, _b;
    resetInputWidth();
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    if (props.multiple && !props.filterable)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a2;
    states.inputWidth = (_a2 = reference.value) == null ? void 0 : _a2.$el.getBoundingClientRect().width;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (typeof value !== "string") {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoverIndex = -1;
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option, byClick) => {
    var _a2;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a2 = input.value) == null ? void 0 : _a2.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a2, _b, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns2.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a2;
    states.visible = false;
    (_a2 = reference.value) == null ? void 0 : _a2.blur();
  };
  const handleBlur = (event) => {
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = (e) => {
    var _a2;
    if (e && !states.mouseEnter) {
      return;
    }
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
          states.visible = !states.visible;
        }
      }
      if (states.visible) {
        (_a2 = input.value || reference.value) == null ? void 0 : _a2.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const handleMouseEnter = () => {
    states.mouseEnter = true;
  };
  const handleMouseLeave = () => {
    states.mouseEnter = false;
  };
  return {
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly: readonly2,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar,
    handleMouseEnter,
    handleMouseLeave
  };
};
const COMPONENT_NAME = "ElSelect";
const _sfc_main$7 = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: iconPropType,
      default: circle_close_default
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: iconPropType,
      default: arrow_down_default
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    suffixTransition: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      values: Ee,
      default: "bottom-start"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    const tagTextStyle = computed(() => {
      const maxWidth = unref(inputWidth) > 123 ? unref(inputWidth) - 123 : unref(inputWidth) - 75;
      return { maxWidth: `${maxWidth}px` };
    });
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      useResizeObserver(selectWrapper, handleResize);
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        const refEl = reference.value && reference.value.$el;
        if (!refEl)
          return;
        inputWidth.value = refEl.getBoundingClientRect().width;
        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
        }
      });
      setSelected();
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
const _hoisted_1$6 = ["disabled", "autocomplete"];
const _hoisted_2$2 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onMouseenter: _cache[22] || (_cache[22] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[23] || (_cache[23] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onClick: _cache[24] || (_cache[24] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createElementVNode("div", {
          class: "select-trigger",
          onMouseenter: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = true),
          onMouseleave: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = false)
        }, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass(_ctx.nsSelect.e("tags")),
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([
                _ctx.nsSelect.b("tags-wrapper"),
                { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
              ])
            }, [
              createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: withCtx(() => [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                    style: normalizeStyle(_ctx.tagTextStyle)
                  }, toDisplayString(_ctx.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: withCtx(() => [
                  _ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
                    key: 0,
                    disabled: _ctx.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: _ctx.effect,
                    placement: "bottom",
                    teleported: _ctx.teleported
                  }, {
                    default: withCtx(() => [
                      createElementVNode("span", {
                        class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(_ctx.selected.length - 1), 3)
                    ]),
                    content: withCtx(() => [
                      createElementVNode("div", {
                        class: normalizeClass(_ctx.nsSelect.e("collapse-tags"))
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected.slice(1), (item, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
                          }, [
                            (openBlock(), createBlock(_component_el_tag, {
                              key: _ctx.getValueKey(item),
                              class: "in-tooltip",
                              closable: !_ctx.selectDisabled && !item.isDisabled,
                              size: _ctx.collapseTagSize,
                              hit: item.hitState,
                              type: _ctx.tagType,
                              "disable-transitions": "",
                              style: { margin: "2px" },
                              onClose: ($event) => _ctx.deleteTag($event, item)
                            }, {
                              default: withCtx(() => [
                                createElementVNode("span", {
                                  class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                                  style: normalizeStyle({
                                    maxWidth: _ctx.inputWidth - 75 + "px"
                                  })
                                }, toDisplayString(item.currentLabel), 7)
                              ]),
                              _: 2
                            }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                          ], 2);
                        }), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                  }, "+ " + toDisplayString(_ctx.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true),
            createCommentVNode(" <div> "),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            createCommentVNode(" </div> "),
            _ctx.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_1$6)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(_ctx.handleKeydownEscape, ["esc"]),
              _cache[19] || (_cache[19] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ]
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createElementVNode("div", _hoisted_2$2, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(_ctx.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const _sfc_main$6 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const visible = ref(true);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select = inject(selectKey);
    onMounted(() => {
      children.value = flattedChildren2(instance.subTree);
    });
    const flattedChildren2 = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a2;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a2 = child.children) == null ? void 0 : _a2.length) {
            children2.push(...flattedChildren2(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = toRaw(select);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    }, { flush: "post" });
    return {
      visible,
      ns: ns2
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const loopExec = (reg, str, call) => {
  let t;
  while ((t = reg.exec(str)) !== null) {
    call(t);
  }
};
const DEFAULT_TEMP_REG = /\{\{\s*(\w+)\s*\}\}/g;
const getTempValue = (str, ctx = {}, reg = DEFAULT_TEMP_REG) => {
  let res = str;
  loopExec(reg, str, ([s, k]) => {
    if (lodash.exports.has(ctx, k)) {
      res = res.replace(s, lodash.exports.get(ctx, k));
    }
  });
  return res;
};
const useElForm = (props, cfg, ext) => {
  const size = unref(props.size) || "default";
  const attrs = useAttrs$1();
  const formData = cfg.formData;
  const emitChange = cfg.emitChange;
  const formProps2 = cfg.formProps;
  const defaultElFormProps = lodash.exports.merge(
    { validateOnRuleChange: false, size },
    attrs.elForm || {}
  );
  const tag = ({ parent }) => {
    if (parent && lodash.exports.has(EL_FORM_DEFAULT_CHILD, lodash.exports.camelCase(parent.tagname))) {
      return EL_FORM_DEFAULT_CHILD[lodash.exports.camelCase(parent.tagname)];
    }
    return ElInput;
  };
  const setup = (props2, params) => {
    var _a2, _b;
    const elem2 = props2.elem;
    const parent = props2.parent;
    const tagname = lodash.exports.camelCase(params.tagname);
    const parentname = lodash.exports.camelCase(parent == null ? void 0 : parent.tagname);
    const setupRes = parent == null ? void 0 : parent.setupRes;
    const tp = unref(elem2.prop);
    const ep = typeof tp === "function" ? tp(props2) : tp;
    const fp = unref(setupRes == null ? void 0 : setupRes.formProp) || [];
    const p = new Array().concat(fp, ep || []);
    const formProp = p.join(".");
    const res = { isFormElem: false };
    if (p.length > 0) {
      res.formProp = formProp;
    }
    if (isFormElem(elem2, tagname, parentname)) {
      formProps2.add(formProp);
      res.isFormElem = true;
      const defaultValue = (_b = unref((_a2 = elem2.modelValue) != null ? _a2 : elem2.value)) != null ? _b : void 0;
      const context2 = props2.context;
      const modelValue = context2.modelValue;
      if (lodash.exports.get(unref(modelValue), formProp) == void 0) {
        lodash.exports.set(unref(modelValue), formProp, defaultValue);
      }
      res.prop = { "onUpdate:modelValue": (v) => {
        lodash.exports.set(unref(modelValue), formProp, v != null ? v : defaultValue);
        emitChange(formProp, v);
      } };
      res.excludeKeys = ["value"];
      res.isFormItem = true;
      res.isNeedElFormItem = isNeedElFormItem(elem2, tagname);
      onUnmounted(() => {
        formProps2.delete(formProp);
      });
    }
    return res;
  };
  const render = (config) => {
    const props2 = config.props;
    const context2 = config.context;
    const setupRes = config.setupRes;
    if (setupRes.isFormElem) {
      const modelValue = context2.modelValue;
      const prop = setupRes.formProp;
      lodash.exports.unset(props2, "value");
      props2.modelValue = lodash.exports.get(unref(modelValue), prop);
      if (setupRes.isNeedElFormItem) {
        const elFormItemProps = {
          ...buildElFormItemProps(props2),
          prop
        };
        elFormItemProps.rules = buildRules(elFormItemProps);
        return h(ElFormItem, elFormItemProps, { default: () => defaultRender(config) });
      }
    }
    return defaultRender(config);
  };
  const elFormRef = ref();
  const elem = {
    ...defaultElFormProps,
    tag: ElForm,
    ref: (e) => elFormRef.value = e,
    cls: toRef(props, "column"),
    model: formData
  };
  const elFormApi = (name, ...args) => {
    const f = lodash.exports.get(unref(elFormRef), name);
    if (f && lodash.exports.isFunction(f)) {
      return f(...args);
    }
  };
  const context = {
    ...ext,
    modelValue: formData,
    tag,
    setup,
    render
  };
  return {
    elem,
    context,
    formRef: elFormRef,
    formApi: elFormApi,
    refresh: () => {
    },
    validate: (...args) => elFormApi("validate", args)
  };
};
const EL_FORM_ELEM_TAGS = [
  "elInput",
  "elInputNumber",
  "elSelect",
  "elSelectV2",
  "elDatePicker",
  "elRadio",
  "elRadioGroup",
  "elCheckbox",
  "elCheckboxGroup",
  "elCascader",
  "elCascaderPanel",
  "elColorPicker",
  "elRate",
  "elSlider",
  "elSwitch",
  "elTimePicker",
  "elTimeSelect",
  "elTransfer",
  "elAutocomplete"
];
const EL_FORM_DEFAULT_CHILD = {
  elCheckboxGroup: ElCheckbox,
  elRadioGroup: ElRadio,
  elSelect: ElOption
};
const isFormElem = (e, en2, pn2) => {
  if (unref(e.isFormElem) === true) {
    return true;
  }
  if (!EL_FORM_ELEM_TAGS.includes(en2)) {
    return false;
  }
  if (pn2 && lodash.exports.has(EL_FORM_DEFAULT_CHILD, pn2)) {
    return lodash.exports.camelCase(EL_FORM_DEFAULT_CHILD[pn2].name) !== en2;
  }
  return true;
};
const isNeedElFormItem = (e, en2) => {
  var _a2, _b;
  const elFormItem = (_a2 = unref(e.elFormItem)) != null ? _a2 : EL_FORM_ELEM_TAGS.includes(en2);
  if (lodash.exports.isBoolean(elFormItem)) {
    return elFormItem;
  }
  return (_b = elFormItem.enabled) != null ? _b : true;
};
const RULE_MESSAGE_TEMPLATE = {
  required: "\u8BF7\u8F93\u5165 [ {{label}} ] \uFF01",
  pattern: "\u8BF7\u6309\u7167\u8981\u6C42\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F! \u683C\u5F0F\uFF1A{{ pattern }}",
  common: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F!"
};
const buildRules = (props) => {
  var _a2, _b;
  const required4 = (_a2 = unref(props.required)) != null ? _a2 : false;
  const trigger = (_b = unref(props.trigger)) != null ? _b : "blur";
  const message = lodash.exports.has(props, "message") ? getTempValue(unref(props.message), props) : getTempValue(RULE_MESSAGE_TEMPLATE.required, props);
  const rules2 = lodash.exports.isArray(unref(props.rules)) ? [...unref(props.rules)] : [];
  const tks = Object.keys(RULE_MESSAGE_TEMPLATE);
  const res = [];
  let hasRequired = false;
  rules2.forEach((rule) => {
    var _a3;
    const d = { ...unref(rule) };
    const k = ((_a3 = tks.filter((k2) => lodash.exports.has(d, k2))) == null ? void 0 : _a3[0]) || "common";
    const t = d.message || unref(props.message) || lodash.exports.get(RULE_MESSAGE_TEMPLATE, k);
    d.message = getTempValue(t, { ...props, ...d });
    if (lodash.exports.has(d, "required")) {
      hasRequired = true;
    }
    if (!lodash.exports.has(d, "trigger")) {
      d.trigger = trigger;
    }
    res.push(d);
  });
  if (!hasRequired && required4) {
    res.push({ required: required4, message, trigger });
  }
  delete props.required;
  delete props.trigger;
  delete props.message;
  return res;
};
const EL_FORM_ITEM_PROPS_KEYS = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message"
];
const buildElFormItemProps = (props) => {
  const elFormItem = unref(lodash.exports.get(props, "elFormItem"));
  const keys2 = lodash.exports.isArray(elFormItem) ? elFormItem : lodash.exports.isObject(elFormItem) ? Object.keys(elFormItem) : [];
  const res = lodash.exports.isObject(elFormItem) ? { ...elFormItem } : {};
  EL_FORM_ITEM_PROPS_KEYS.forEach((k) => {
    if (lodash.exports.has(props, k) && !keys2.includes(k)) {
      res[k] = lodash.exports.get(props, k);
      lodash.exports.unset(props, k);
    }
  });
  lodash.exports.unset(props, "elFormItem");
  return res;
};
const _hoisted_1$5 = { class: "els-form" };
const __default__$3 = {
  name: "ElsForm"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    modelValue: null,
    column: null,
    size: { default: "small" },
    UIPluging: null,
    autoClean: { default: true }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const slots = useSlots();
    const formData = ref({});
    const emitChange = (prop, val) => {
      emits("change", prop, val);
      emits("update:modelValue", unref(formData));
    };
    onMounted(() => {
      emits("update:modelValue", unref(formData));
    });
    watch(toRef(props, "modelValue"), (v) => {
      formData.value = v;
    });
    const formProps2 = reactive(/* @__PURE__ */ new Set());
    const UIConfig = { formProps: formProps2, formData, emitChange };
    const pluging = props.UIPluging || useElForm;
    const formUI = pluging(props, UIConfig, { slots });
    if (props.autoClean) {
      let formPropsCache = [];
      onMounted(() => {
        formPropsCache = Array.from(formProps2);
      });
      onBeforeUnmount(() => {
        formPropsCache = [];
        formProps2.clear();
      });
      watch(formProps2, (v) => {
        const arr = Array.from(v);
        const da = lodash.exports.difference(formPropsCache, arr);
        if (da.length > 0) {
          da.forEach((p) => lodash.exports.unset(unref(formData), p));
          formPropsCache = arr;
          emits("update:modelValue", unref(formData));
        }
      });
    }
    const submit = async (call = (k, v) => v == void 0 ? void 0 : [k, v]) => {
      try {
        await formUI.validate();
      } catch (e) {
        console.error("\u8868\u5355\u6821\u9A8C\u5931\u8D25\uFF01====>", e);
      }
      const res = {};
      for (const k in formProps2) {
        const v = lodash.exports.get(unref(formData), k);
        const r = call(k, v);
        if (r != void 0) {
          const [key, val] = r;
          lodash.exports.set(res, key, val);
        }
      }
      return res;
    };
    expose({ ...formUI, formProps: formProps2, submit });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(unref(ElsElem), {
          elem: unref(formUI).elem,
          context: unref(formUI).context
        }, null, 8, ["elem", "context"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const ElsFormPlugin = {
  install(app) {
    app.component("els-form", _sfc_main$5);
  }
};
const _hoisted_1$4 = { class: "els-exp-box" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "els-cursor"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "els-cursor"
};
const __default__$2 = {
  name: "ElsExpBox"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    modelValue: { default: "" },
    isEdit: { type: Boolean, default: true },
    mode: { default: "text" },
    init: null
  },
  emits: ["init", "update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const boxRef = ref();
    const { modelValue, isEdit, mode } = toRefs(props);
    const isFocus = ref(false);
    let cacheValue = "";
    const leftText = ref([]);
    const rightText = ref([]);
    const cursorMove = (d) => {
      if (!boxRef.value) {
        return;
      }
      const { children } = boxRef.value;
      const index = unref(leftText).length;
      const target = children[index];
      const {
        offsetLeft: x,
        offsetTop: y,
        offsetHeight: h2,
        offsetWidth: w,
        tagName
      } = target;
      const my = d == "up" ? y - h2 / 2 : y + h2 + h2 / 2;
      const mx = x;
      my > 0 && resetByPos(mx, my);
    };
    const resetLeftText = (index) => {
      const t = [...leftText.value, ...rightText.value];
      const ml = t.length;
      if (index > ml) {
        index = ml;
      } else if (index < 0) {
        index = ml + 1 - index;
      }
      const l = t.slice(0, index);
      const r = t.slice(index);
      leftText.value = l;
      rightText.value = r;
    };
    const resetByPos = (mx, my) => {
      if (!boxRef.value) {
        return;
      }
      const { children } = boxRef.value;
      let dis = -1;
      let pos = -1;
      let cd = 0;
      for (let i = 0, l = children.length; i < l; i++) {
        const elem = children[i];
        const {
          tagName,
          offsetLeft: x,
          offsetTop: y,
          offsetWidth: w,
          offsetHeight: h2
        } = elem;
        if (tagName == "SPAN") {
          cd = i;
        }
        if (tagName == "KBD" && my >= y && my <= y + h2) {
          const d = mx - x;
          const td = Math.abs(d);
          if (dis == -1) {
            dis = td;
            pos = d > w / 2 ? i + 1 : i;
          } else if (td < dis) {
            dis = td;
            pos = d > w / 2 ? i + 1 : i;
          }
        }
      }
      if (pos == -1) {
        let dh = 0;
        let di = 0;
        for (let i = 0, l = children.length; i < l; i++) {
          const elem = children[i];
          const { tagName, offsetTop: y, offsetHeight: h2 } = elem;
          if (h2 > 0) {
            di = i;
            dh = h2;
            dis = y + h2;
          } else if (i - di > 1) {
            dis = dis + dh;
          }
          if (my >= dis) {
            pos = i + 1;
          } else {
            break;
          }
        }
      }
      if (pos >= 0 && cd < pos) {
        pos--;
      }
      resetLeftText(pos);
    };
    const handleDivClick = (e) => {
      const { offsetX: mx, offsetY: my } = e;
      resetByPos(mx, my);
    };
    const handleClick = (i, e) => {
      const { offsetX } = e;
      const kbd = e.target;
      let cd = 1;
      if (offsetX && kbd) {
        const { offsetWidth } = kbd;
        if (offsetX < offsetWidth / 2) {
          cd = 0;
        }
      }
      console.log(i);
      resetLeftText(i + cd);
    };
    const handleKeyup = (e) => {
      if (!isEdit.value) {
        return;
      }
      const key = e.key;
      addValue(key);
    };
    const addValue = (val) => {
      console.log("===addValue===>", val);
      switch (val) {
        case "Enter":
          leftText.value.push("\n");
          break;
        case "Space":
          leftText.value.push(" ");
          break;
        case "Backspace":
          leftText.value.pop();
          break;
        case "Delete":
          leftText.value.pop();
          break;
        case "Home":
          resetLeftText(0);
          break;
        case "End":
          resetLeftText(-1);
          break;
        case "ArrowLeft":
          resetLeftText(leftText.value.length - 1);
          break;
        case "ArrowRight":
          resetLeftText(leftText.value.length + 1);
          break;
        case "ArrowUp":
          cursorMove("up");
          break;
        case "ArrowDown":
          cursorMove("down");
          break;
        default:
          leftText.value.push(val);
      }
      emitUpdateModelValue();
    };
    const emitUpdateModelValue = () => {
      const val = [...unref(leftText), ...unref(rightText)].join("");
      cacheValue = val;
      emits("update:modelValue", cacheValue);
    };
    document.onkeydown = (e) => {
      const code = e.code;
      console.log(code);
      const ex = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"];
      if (ex.includes(code)) {
        return false;
      }
    };
    watch(modelValue, (v) => {
      if (v == cacheValue) {
        return;
      }
      cacheValue = v;
      leftText.value = v.split("");
    });
    const params = {
      input: addValue,
      resetPos: resetLeftText
    };
    onMounted(() => {
      emits("init", params);
      if (props.init) {
        props.init(params);
      }
    });
    expose(params);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createElementVNode("div", {
          ref_key: "boxRef",
          ref: boxRef,
          class: normalizeClass([`_mode-${unref(mode)}`, { "is-focus": isFocus.value }]),
          tabindex: "1",
          onKeydown: handleKeyup,
          onClick: withModifiers(handleDivClick, ["stop"]),
          onFocus: _cache[0] || (_cache[0] = () => isFocus.value = true),
          onFocusout: _cache[1] || (_cache[1] = () => isFocus.value = false)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([...leftText.value, ...rightText.value], (v, i) => {
            return openBlock(), createElementBlock(Fragment, null, [
              i == leftText.value.length ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true),
              v != "\n" ? (openBlock(), createElementBlock("kbd", {
                key: 1,
                onClick: withModifiers((e) => handleClick(i, e), ["stop"]),
                class: normalizeClass(i + "")
              }, toDisplayString(v), 11, _hoisted_4)) : (openBlock(), createElementBlock("br", {
                key: 2,
                class: normalizeClass(i + "")
              }, null, 2))
            ], 64);
          }), 256)),
          rightText.value.length == 0 ? (openBlock(), createElementBlock("span", _hoisted_5)) : createCommentVNode("", true)
        ], 42, _hoisted_2$1)
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c7d48fc8_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const ElsExpBox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c7d48fc8"]]);
const ElsExpBoxPlugin = {
  install(app) {
    app.component("els-exp-box", ElsExpBox);
  }
};
const _hoisted_1$3 = { class: "_track" };
const __default__$1 = {
  name: "ElsScrollBar"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    direction: { default: "vertical" }
  },
  setup(__props) {
    const props = __props;
    const { direction } = props;
    const elsScrollBarRef = ref();
    const parentElem = computed(() => {
      if (elsScrollBarRef.value) {
        return elsScrollBarRef.value.parentElement;
      }
      return void 0;
    });
    const parentSize = computed(() => {
      const res = { width: 0, height: 0 };
      if (parentElem.value) {
        const { offsetWidth, offsetHeight } = parentElem.value;
        res.width = offsetWidth;
        res.height = offsetHeight;
      }
      return res;
    });
    computed(() => {
      if (!parentElem.value) {
        return [];
      }
      const { children } = parentElem.value;
      Array.from(children).filter((e) => !e.className.includes("els-scroll-bar"));
    });
    const contentSize = computed(() => {
      if (!parentElem.value) {
        return { width: 0, height: 0 };
      }
      let ws = [];
      let hs = [];
      const { children } = parentElem.value;
      const elements = Array.from(children);
      ws = elements.map((e) => e.offsetWidth);
      hs = elements.map((e) => e.offsetHeight);
      console.log(elements, ws, hs);
      return { width: lodash.exports.sum(ws), height: lodash.exports.sum(hs) };
    });
    const isShow = computed(() => {
      const { width: bw, height: bh } = unref(parentSize);
      const { width: cw, height: ch } = unref(contentSize);
      if (direction == "vertical") {
        return ch > bh;
      }
      return cw > bw;
    });
    const handleMouseDown = (e) => {
    };
    const handleMouseMove = (e) => {
    };
    const handleMouseUp = (e) => {
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "elsScrollBarRef",
        ref: elsScrollBarRef,
        class: normalizeClass(["els-scroll-bar", `direction-${unref(direction)}`]),
        style: normalizeStyle(
          unref(direction) == "vertical" ? `height:${unref(parentSize).height}px` : `width:${unref(parentSize).width}px`
        )
      }, [
        createElementVNode("div", _hoisted_1$3, [
          createElementVNode("div", {
            class: "_thumb",
            onMousedown: handleMouseDown,
            onMouseup: handleMouseUp,
            onMousemove: handleMouseMove
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 32)
        ])
      ], 6)), [
        [vShow, unref(isShow)]
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0d77f244_lang = "";
const ElsScrollBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0d77f244"]]);
const ElsScrollBarPlugin = {
  install(app) {
    app.component("els-scroll-bar", ElsScrollBar);
  }
};
const _sfc_main$2 = {
  name: "ElsPage"
};
const index_vue_vue_type_style_index_0_scoped_2aa4e32d_lang = "";
const _hoisted_1$2 = { class: "els-page" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, " \u6211\u662F\u62BD\u8C61\u9875\u9762\u7EC4\u4EF6 ");
}
const ElsPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-2aa4e32d"]]);
const ElsPagePlugin = {
  install(app) {
    app.component("els-page", ElsPage);
  }
};
const initMenu = (route, menus) => {
  const { path, fullPath, name } = route;
  let ms = menus;
  let ct2 = ms.length;
  while (lodash.exports.isArray(ms) && ms.length > 0 && ct2 > 0) {
    for (let i = 0, l = ms.length; i < l; i++) {
      const e = ms[i];
      const p = e.path;
      if (p) {
        let bool = false;
        let tp = p;
        let tn2 = "";
        if (typeof p !== "string") {
          tp = p.path || "";
          tn2 = p.name || "";
        }
        bool = name && name === tn2 || path.includes(tp) || fullPath.includes(tp);
        if (bool) {
          ms = e.children || e;
          ct2 = lodash.exports.isArray(ms) ? ms.length : 0;
          break;
        }
      }
      ct2--;
    }
  }
  console.log(ms, menus);
  return !lodash.exports.isArray(ms) ? String(ms.id) : "";
};
const _hoisted_1$1 = {
  key: 0,
  "aria-hidden": "true",
  class: "svg-icon"
};
const _hoisted_2 = ["href", "fill"];
const __default__ = {
  name: "ElsSvg"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    id: null,
    color: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { id, color } = toRefs(props);
    return (_ctx, _cache) => {
      return typeof unref(id) === "string" ? (openBlock(), createElementBlock("svg", _hoisted_1$1, [
        createElementVNode("use", {
          href: `#${unref(id)}`,
          fill: unref(color)
        }, null, 8, _hoisted_2)
      ])) : (openBlock(), createBlock(resolveDynamicComponent(unref(id)), { key: 1 }));
    };
  }
});
const ElsSvgPlugin = {
  install(app) {
    app.component("els-svg", _sfc_main$1);
  }
};
const useElMenu = (props, cfg) => {
  const attrs = useAttrs$1();
  const elMenuAttrs = (attrs == null ? void 0 : attrs.elMenu) || {};
  const menus = props.menus;
  const collapse = toRef(props, "collapse");
  const currentId = cfg.currentId;
  const tag = (props2) => {
    const elem2 = props2.elem;
    const type4 = elem2.type || "item";
    switch (type4) {
      case "group":
        return ElMenuItemGroup;
      case "sub":
        return ElSubMenu;
      case "item":
        return ElMenuItem;
    }
    return ElMenuItem;
  };
  const elMenuRef = ref();
  const elem = {
    ...elMenuAttrs,
    ref: (e) => elMenuRef.value = e,
    ":collapse": collapse,
    ":defaultActive": currentId,
    tag: ElMenu,
    cls: menus
  };
  const setup = (props2, { tagname }) => {
    const name = lodash.exports.camelCase(tagname);
    if (!["elMenuItem", "elSubMenu", "elMenuItemGroup"].includes(name)) {
      return {};
    }
    const elem2 = props2.elem;
    const icon = elem2 == null ? void 0 : elem2.icon;
    const title = elem2.title || elem2.label;
    const path = elem2.path;
    const index = String(elem2.id);
    const prop = { index };
    const tcls = [
      { tag: ElIcon, "v-if": icon != void 0, cls: { tag: _sfc_main$1, id: icon } },
      { tag: "span", cls: title }
    ];
    if (name === "elMenuItem") {
      prop.cls = tcls;
      prop["@click"] = () => cfg.handleSelect(elem2);
    } else {
      prop.cls = {
        tag: "div",
        class: "_title-slot",
        "#title": true,
        cls: tcls
      };
    }
    return {
      prop,
      excludeKeys: ["id", "type", "title", "icon", "path"],
      path
    };
  };
  const context = {
    tag,
    setup
  };
  return {
    elem,
    context,
    menuRef: elMenuRef
  };
};
const _hoisted_1 = { class: "els-menu" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    menus: { default: () => [] },
    collapse: { default: false },
    context: { default: () => ({}) },
    initMenu: null,
    UIPluging: null
  },
  emits: ["init-menu", "change", "select"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const currentId = ref("");
    const route = useRoute();
    const initMenuFun = props.initMenu || initMenu;
    if (route) {
      currentId.value = initMenuFun(route, props.menus);
    }
    const handleSelect = (menu) => {
      emits("select", menu);
      if (currentId.value !== String(menu.id)) {
        currentId.value = String(menu.id);
        emits("change", menu);
      }
    };
    const UIPluging = props.UIPluging || useElMenu;
    const menuUI = UIPluging(props, { currentId, handleSelect });
    expose({ ...menuUI, currentId, handleSelect });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElsElem), {
          elem: unref(menuUI).elem,
          context: unref(menuUI).context
        }, null, 8, ["elem", "context"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_fd8cb7d8_lang = "";
const ElsMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd8cb7d8"]]);
const ElsMenuPlugin = {
  install(app) {
    app.component("els-menu", ElsMenu);
  }
};
const MYLibPlugin = {
  install(app) {
    var _a2, _b, _c, _d, _e, _f, _g;
    (_a2 = ElsElemPlugin.install) == null ? void 0 : _a2.call(ElsElemPlugin, app);
    (_b = ElsFormPlugin.install) == null ? void 0 : _b.call(ElsFormPlugin, app);
    (_c = ElsExpBoxPlugin.install) == null ? void 0 : _c.call(ElsExpBoxPlugin, app);
    (_d = ElsScrollBarPlugin.install) == null ? void 0 : _d.call(ElsScrollBarPlugin, app);
    (_e = ElsPagePlugin.install) == null ? void 0 : _e.call(ElsPagePlugin, app);
    (_f = ElsMenuPlugin.install) == null ? void 0 : _f.call(ElsMenuPlugin, app);
    (_g = ElsSvgPlugin.install) == null ? void 0 : _g.call(ElsSvgPlugin, app);
  }
};
export {
  ElsElem,
  ElsElemPlugin,
  ElsExpBox,
  ElsExpBoxPlugin,
  _sfc_main$5 as ElsForm,
  ElsFormPlugin,
  ElsMenu,
  ElsMenuPlugin,
  ElsPage,
  ElsPagePlugin,
  ElsScrollBar,
  ElsScrollBarPlugin,
  _sfc_main$1 as ElsSvg,
  ElsSvgPlugin,
  MYLibPlugin as default,
  defaultRender,
  getDestruct,
  getElemAttrs,
  getExpValue,
  getSlotName,
  isHtmlTag,
  parseDirective,
  propsFilter,
  specialRender
};
