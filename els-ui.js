import { unref as v, renderSlot as Ce, resolveDynamicComponent as xn, createVNode as ut, h as vt, defineComponent as le, computed as B, mergeProps as Xn, isVNode as uv, resolveComponent as mr, ref as J, watch as pe, getCurrentScope as Cw, onScopeDispose as Aw, getCurrentInstance as dn, onMounted as at, nextTick as He, openBlock as G, createElementBlock as re, createElementVNode as de, warn as Iw, inject as De, toRef as Wn, onUnmounted as cv, isRef as so, onBeforeUnmount as Jt, onBeforeMount as $w, provide as Lt, useAttrs as bu, useSlots as $i, shallowRef as hi, withDirectives as It, createCommentVNode as we, Fragment as Ht, normalizeClass as ee, createBlock as Pe, withCtx as Te, withModifiers as Wt, toDisplayString as ht, normalizeStyle as Ot, vShow as qr, Transition as co, reactive as $n, onUpdated as fv, cloneVNode as Mw, Text as Pw, Comment as Rw, Teleport as Lw, readonly as Fw, onDeactivated as Bw, toRaw as _i, vModelCheckbox as Ga, createTextVNode as Ho, toRefs as Er, vModelRadio as dv, toHandlers as kw, watchEffect as Nw, triggerRef as ci, resolveDirective as Dw, renderList as Xl, withKeys as Bn, vModelText as Ww, createSlots as zw } from "vue";
var fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, n) {
  (function() {
    var r, i = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", g = 500, y = "__lodash_placeholder__", _ = 1, E = 2, S = 4, h = 1, w = 2, O = 1, A = 2, L = 4, C = 8, F = 16, $ = 32, P = 64, R = 128, z = 256, Z = 512, j = 30, K = "...", U = 800, D = 16, X = 1, ie = 2, ce = 3, ne = 1 / 0, fe = 9007199254740991, he = 17976931348623157e292, Se = 0 / 0, xe = 4294967295, bt = xe - 1, nt = xe >>> 1, Je = [
      ["ary", R],
      ["bind", O],
      ["bindKey", A],
      ["curry", C],
      ["curryRight", F],
      ["flip", Z],
      ["partial", $],
      ["partialRight", P],
      ["rearg", z]
    ], qe = "[object Arguments]", gt = "[object Array]", ae = "[object AsyncFunction]", ve = "[object Boolean]", We = "[object Date]", Ue = "[object DOMException]", Ye = "[object Error]", rt = "[object Function]", pn = "[object GeneratorFunction]", mt = "[object Map]", Qt = "[object Number]", vn = "[object Null]", yt = "[object Object]", Vn = "[object Promise]", Ft = "[object Proxy]", V = "[object RegExp]", _e = "[object Set]", st = "[object String]", Bt = "[object Symbol]", or = "[object Undefined]", en = "[object WeakMap]", ir = "[object WeakSet]", qt = "[object ArrayBuffer]", tn = "[object DataView]", Kn = "[object Float32Array]", vo = "[object Float64Array]", ho = "[object Int8Array]", N = "[object Int16Array]", Q = "[object Int32Array]", me = "[object Uint8Array]", Ie = "[object Uint8ClampedArray]", ft = "[object Uint16Array]", hn = "[object Uint32Array]", jn = /\b__p \+= '';/g, Mn = /\b(__p \+=) '' \+/g, Ut = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Vr = /&(?:amp|lt|gt|quot|#39);/g, Vt = /[&<>"']/g, ar = RegExp(Vr.source), Jh = RegExp(Vt.source), Qh = /<%-([\s\S]+?)%>/g, eg = /<%([\s\S]+?)%>/g, rc = /<%=([\s\S]+?)%>/g, tg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ng = /^\w*$/, rg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _s = /[\\^$.*+?()[\]{}|]/g, og = RegExp(_s.source), ws = /^\s+/, ig = /\s/, ag = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sg = /\{\n\/\* \[wrapped with (.+)\] \*/, lg = /,? & /, ug = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cg = /[()=,{}\[\]\/\s]/, fg = /\\(\\)?/g, dg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, oc = /\w*$/, pg = /^[-+]0x[0-9a-f]+$/i, vg = /^0b[01]+$/i, hg = /^\[object .+?Constructor\]$/, gg = /^0o[0-7]+$/i, mg = /^(?:0|[1-9]\d*)$/, bg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bi = /($^)/, yg = /['\n\r\u2028\u2029\\]/g, ki = "\\ud800-\\udfff", _g = "\\u0300-\\u036f", wg = "\\ufe20-\\ufe2f", Eg = "\\u20d0-\\u20ff", ic = _g + wg + Eg, ac = "\\u2700-\\u27bf", sc = "a-z\\xdf-\\xf6\\xf8-\\xff", Sg = "\\xac\\xb1\\xd7\\xf7", xg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Og = "\\u2000-\\u206f", Tg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lc = "A-Z\\xc0-\\xd6\\xd8-\\xde", uc = "\\ufe0e\\ufe0f", cc = Sg + xg + Og + Tg, Es = "['\u2019]", Cg = "[" + ki + "]", fc = "[" + cc + "]", Ni = "[" + ic + "]", dc = "\\d+", Ag = "[" + ac + "]", pc = "[" + sc + "]", vc = "[^" + ki + cc + dc + ac + sc + lc + "]", Ss = "\\ud83c[\\udffb-\\udfff]", Ig = "(?:" + Ni + "|" + Ss + ")", hc = "[^" + ki + "]", xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Os = "[\\ud800-\\udbff][\\udc00-\\udfff]", go = "[" + lc + "]", gc = "\\u200d", mc = "(?:" + pc + "|" + vc + ")", $g = "(?:" + go + "|" + vc + ")", bc = "(?:" + Es + "(?:d|ll|m|re|s|t|ve))?", yc = "(?:" + Es + "(?:D|LL|M|RE|S|T|VE))?", _c = Ig + "?", wc = "[" + uc + "]?", Mg = "(?:" + gc + "(?:" + [hc, xs, Os].join("|") + ")" + wc + _c + ")*", Pg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Rg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ec = wc + _c + Mg, Lg = "(?:" + [Ag, xs, Os].join("|") + ")" + Ec, Fg = "(?:" + [hc + Ni + "?", Ni, xs, Os, Cg].join("|") + ")", Bg = RegExp(Es, "g"), kg = RegExp(Ni, "g"), Ts = RegExp(Ss + "(?=" + Ss + ")|" + Fg + Ec, "g"), Ng = RegExp([
      go + "?" + pc + "+" + bc + "(?=" + [fc, go, "$"].join("|") + ")",
      $g + "+" + yc + "(?=" + [fc, go + mc, "$"].join("|") + ")",
      go + "?" + mc + "+" + bc,
      go + "+" + yc,
      Rg,
      Pg,
      dc,
      Lg
    ].join("|"), "g"), Dg = RegExp("[" + gc + ki + ic + uc + "]"), Wg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zg = [
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
    ], Hg = -1, Qe = {};
    Qe[Kn] = Qe[vo] = Qe[ho] = Qe[N] = Qe[Q] = Qe[me] = Qe[Ie] = Qe[ft] = Qe[hn] = !0, Qe[qe] = Qe[gt] = Qe[qt] = Qe[ve] = Qe[tn] = Qe[We] = Qe[Ye] = Qe[rt] = Qe[mt] = Qe[Qt] = Qe[yt] = Qe[V] = Qe[_e] = Qe[st] = Qe[en] = !1;
    var Ze = {};
    Ze[qe] = Ze[gt] = Ze[qt] = Ze[tn] = Ze[ve] = Ze[We] = Ze[Kn] = Ze[vo] = Ze[ho] = Ze[N] = Ze[Q] = Ze[mt] = Ze[Qt] = Ze[yt] = Ze[V] = Ze[_e] = Ze[st] = Ze[Bt] = Ze[me] = Ze[Ie] = Ze[ft] = Ze[hn] = !0, Ze[Ye] = Ze[rt] = Ze[en] = !1;
    var qg = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, Ug = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Vg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Kg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, jg = parseFloat, Gg = parseInt, Sc = typeof fi == "object" && fi && fi.Object === Object && fi, Yg = typeof self == "object" && self && self.Object === Object && self, Ct = Sc || Yg || Function("return this")(), Cs = n && !n.nodeType && n, Kr = Cs && !0 && e && !e.nodeType && e, xc = Kr && Kr.exports === Cs, As = xc && Sc.process, gn = function() {
      try {
        var I = Kr && Kr.require && Kr.require("util").types;
        return I || As && As.binding && As.binding("util");
      } catch {
      }
    }(), Oc = gn && gn.isArrayBuffer, Tc = gn && gn.isDate, Cc = gn && gn.isMap, Ac = gn && gn.isRegExp, Ic = gn && gn.isSet, $c = gn && gn.isTypedArray;
    function nn(I, W, k) {
      switch (k.length) {
        case 0:
          return I.call(W);
        case 1:
          return I.call(W, k[0]);
        case 2:
          return I.call(W, k[0], k[1]);
        case 3:
          return I.call(W, k[0], k[1], k[2]);
      }
      return I.apply(W, k);
    }
    function Zg(I, W, k, oe) {
      for (var Ee = -1, ze = I == null ? 0 : I.length; ++Ee < ze; ) {
        var _t = I[Ee];
        W(oe, _t, k(_t), I);
      }
      return oe;
    }
    function mn(I, W) {
      for (var k = -1, oe = I == null ? 0 : I.length; ++k < oe && W(I[k], k, I) !== !1; )
        ;
      return I;
    }
    function Xg(I, W) {
      for (var k = I == null ? 0 : I.length; k-- && W(I[k], k, I) !== !1; )
        ;
      return I;
    }
    function Mc(I, W) {
      for (var k = -1, oe = I == null ? 0 : I.length; ++k < oe; )
        if (!W(I[k], k, I))
          return !1;
      return !0;
    }
    function Tr(I, W) {
      for (var k = -1, oe = I == null ? 0 : I.length, Ee = 0, ze = []; ++k < oe; ) {
        var _t = I[k];
        W(_t, k, I) && (ze[Ee++] = _t);
      }
      return ze;
    }
    function Di(I, W) {
      var k = I == null ? 0 : I.length;
      return !!k && mo(I, W, 0) > -1;
    }
    function Is(I, W, k) {
      for (var oe = -1, Ee = I == null ? 0 : I.length; ++oe < Ee; )
        if (k(W, I[oe]))
          return !0;
      return !1;
    }
    function ot(I, W) {
      for (var k = -1, oe = I == null ? 0 : I.length, Ee = Array(oe); ++k < oe; )
        Ee[k] = W(I[k], k, I);
      return Ee;
    }
    function Cr(I, W) {
      for (var k = -1, oe = W.length, Ee = I.length; ++k < oe; )
        I[Ee + k] = W[k];
      return I;
    }
    function $s(I, W, k, oe) {
      var Ee = -1, ze = I == null ? 0 : I.length;
      for (oe && ze && (k = I[++Ee]); ++Ee < ze; )
        k = W(k, I[Ee], Ee, I);
      return k;
    }
    function Jg(I, W, k, oe) {
      var Ee = I == null ? 0 : I.length;
      for (oe && Ee && (k = I[--Ee]); Ee--; )
        k = W(k, I[Ee], Ee, I);
      return k;
    }
    function Ms(I, W) {
      for (var k = -1, oe = I == null ? 0 : I.length; ++k < oe; )
        if (W(I[k], k, I))
          return !0;
      return !1;
    }
    var Qg = Ps("length");
    function em(I) {
      return I.split("");
    }
    function tm(I) {
      return I.match(ug) || [];
    }
    function Pc(I, W, k) {
      var oe;
      return k(I, function(Ee, ze, _t) {
        if (W(Ee, ze, _t))
          return oe = ze, !1;
      }), oe;
    }
    function Wi(I, W, k, oe) {
      for (var Ee = I.length, ze = k + (oe ? 1 : -1); oe ? ze-- : ++ze < Ee; )
        if (W(I[ze], ze, I))
          return ze;
      return -1;
    }
    function mo(I, W, k) {
      return W === W ? pm(I, W, k) : Wi(I, Rc, k);
    }
    function nm(I, W, k, oe) {
      for (var Ee = k - 1, ze = I.length; ++Ee < ze; )
        if (oe(I[Ee], W))
          return Ee;
      return -1;
    }
    function Rc(I) {
      return I !== I;
    }
    function Lc(I, W) {
      var k = I == null ? 0 : I.length;
      return k ? Ls(I, W) / k : Se;
    }
    function Ps(I) {
      return function(W) {
        return W == null ? r : W[I];
      };
    }
    function Rs(I) {
      return function(W) {
        return I == null ? r : I[W];
      };
    }
    function Fc(I, W, k, oe, Ee) {
      return Ee(I, function(ze, _t, Ge) {
        k = oe ? (oe = !1, ze) : W(k, ze, _t, Ge);
      }), k;
    }
    function rm(I, W) {
      var k = I.length;
      for (I.sort(W); k--; )
        I[k] = I[k].value;
      return I;
    }
    function Ls(I, W) {
      for (var k, oe = -1, Ee = I.length; ++oe < Ee; ) {
        var ze = W(I[oe]);
        ze !== r && (k = k === r ? ze : k + ze);
      }
      return k;
    }
    function Fs(I, W) {
      for (var k = -1, oe = Array(I); ++k < I; )
        oe[k] = W(k);
      return oe;
    }
    function om(I, W) {
      return ot(W, function(k) {
        return [k, I[k]];
      });
    }
    function Bc(I) {
      return I && I.slice(0, Wc(I) + 1).replace(ws, "");
    }
    function rn(I) {
      return function(W) {
        return I(W);
      };
    }
    function Bs(I, W) {
      return ot(W, function(k) {
        return I[k];
      });
    }
    function Yo(I, W) {
      return I.has(W);
    }
    function kc(I, W) {
      for (var k = -1, oe = I.length; ++k < oe && mo(W, I[k], 0) > -1; )
        ;
      return k;
    }
    function Nc(I, W) {
      for (var k = I.length; k-- && mo(W, I[k], 0) > -1; )
        ;
      return k;
    }
    function im(I, W) {
      for (var k = I.length, oe = 0; k--; )
        I[k] === W && ++oe;
      return oe;
    }
    var am = Rs(qg), sm = Rs(Ug);
    function lm(I) {
      return "\\" + Kg[I];
    }
    function um(I, W) {
      return I == null ? r : I[W];
    }
    function bo(I) {
      return Dg.test(I);
    }
    function cm(I) {
      return Wg.test(I);
    }
    function fm(I) {
      for (var W, k = []; !(W = I.next()).done; )
        k.push(W.value);
      return k;
    }
    function ks(I) {
      var W = -1, k = Array(I.size);
      return I.forEach(function(oe, Ee) {
        k[++W] = [Ee, oe];
      }), k;
    }
    function Dc(I, W) {
      return function(k) {
        return I(W(k));
      };
    }
    function Ar(I, W) {
      for (var k = -1, oe = I.length, Ee = 0, ze = []; ++k < oe; ) {
        var _t = I[k];
        (_t === W || _t === y) && (I[k] = y, ze[Ee++] = k);
      }
      return ze;
    }
    function zi(I) {
      var W = -1, k = Array(I.size);
      return I.forEach(function(oe) {
        k[++W] = oe;
      }), k;
    }
    function dm(I) {
      var W = -1, k = Array(I.size);
      return I.forEach(function(oe) {
        k[++W] = [oe, oe];
      }), k;
    }
    function pm(I, W, k) {
      for (var oe = k - 1, Ee = I.length; ++oe < Ee; )
        if (I[oe] === W)
          return oe;
      return -1;
    }
    function vm(I, W, k) {
      for (var oe = k + 1; oe--; )
        if (I[oe] === W)
          return oe;
      return oe;
    }
    function yo(I) {
      return bo(I) ? gm(I) : Qg(I);
    }
    function Pn(I) {
      return bo(I) ? mm(I) : em(I);
    }
    function Wc(I) {
      for (var W = I.length; W-- && ig.test(I.charAt(W)); )
        ;
      return W;
    }
    var hm = Rs(Vg);
    function gm(I) {
      for (var W = Ts.lastIndex = 0; Ts.test(I); )
        ++W;
      return W;
    }
    function mm(I) {
      return I.match(Ts) || [];
    }
    function bm(I) {
      return I.match(Ng) || [];
    }
    var ym = function I(W) {
      W = W == null ? Ct : _o.defaults(Ct.Object(), W, _o.pick(Ct, zg));
      var k = W.Array, oe = W.Date, Ee = W.Error, ze = W.Function, _t = W.Math, Ge = W.Object, Ns = W.RegExp, _m = W.String, bn = W.TypeError, Hi = k.prototype, wm = ze.prototype, wo = Ge.prototype, qi = W["__core-js_shared__"], Ui = wm.toString, je = wo.hasOwnProperty, Em = 0, zc = function() {
        var t = /[^.]+$/.exec(qi && qi.keys && qi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Vi = wo.toString, Sm = Ui.call(Ge), xm = Ct._, Om = Ns(
        "^" + Ui.call(je).replace(_s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ki = xc ? W.Buffer : r, Ir = W.Symbol, ji = W.Uint8Array, Hc = Ki ? Ki.allocUnsafe : r, Gi = Dc(Ge.getPrototypeOf, Ge), qc = Ge.create, Uc = wo.propertyIsEnumerable, Yi = Hi.splice, Vc = Ir ? Ir.isConcatSpreadable : r, Zo = Ir ? Ir.iterator : r, jr = Ir ? Ir.toStringTag : r, Zi = function() {
        try {
          var t = Jr(Ge, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Tm = W.clearTimeout !== Ct.clearTimeout && W.clearTimeout, Cm = oe && oe.now !== Ct.Date.now && oe.now, Am = W.setTimeout !== Ct.setTimeout && W.setTimeout, Xi = _t.ceil, Ji = _t.floor, Ds = Ge.getOwnPropertySymbols, Im = Ki ? Ki.isBuffer : r, Kc = W.isFinite, $m = Hi.join, Mm = Dc(Ge.keys, Ge), wt = _t.max, Mt = _t.min, Pm = oe.now, Rm = W.parseInt, jc = _t.random, Lm = Hi.reverse, Ws = Jr(W, "DataView"), Xo = Jr(W, "Map"), zs = Jr(W, "Promise"), Eo = Jr(W, "Set"), Jo = Jr(W, "WeakMap"), Qo = Jr(Ge, "create"), Qi = Jo && new Jo(), So = {}, Fm = Qr(Ws), Bm = Qr(Xo), km = Qr(zs), Nm = Qr(Eo), Dm = Qr(Jo), ea = Ir ? Ir.prototype : r, ei = ea ? ea.valueOf : r, Gc = ea ? ea.toString : r;
      function m(t) {
        if (lt(t) && !Oe(t) && !(t instanceof Le)) {
          if (t instanceof yn)
            return t;
          if (je.call(t, "__wrapped__"))
            return Zf(t);
        }
        return new yn(t);
      }
      var xo = function() {
        function t() {
        }
        return function(o) {
          if (!it(o))
            return {};
          if (qc)
            return qc(o);
          t.prototype = o;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function ta() {
      }
      function yn(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      m.templateSettings = {
        escape: Qh,
        evaluate: eg,
        interpolate: rc,
        variable: "",
        imports: {
          _: m
        }
      }, m.prototype = ta.prototype, m.prototype.constructor = m, yn.prototype = xo(ta.prototype), yn.prototype.constructor = yn;
      function Le(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = xe, this.__views__ = [];
      }
      function Wm() {
        var t = new Le(this.__wrapped__);
        return t.__actions__ = Kt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Kt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Kt(this.__views__), t;
      }
      function zm() {
        if (this.__filtered__) {
          var t = new Le(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Hm() {
        var t = this.__wrapped__.value(), o = this.__dir__, a = Oe(t), u = o < 0, p = a ? t.length : 0, b = eb(0, p, this.__views__), x = b.start, T = b.end, M = T - x, H = u ? T : x - 1, q = this.__iteratees__, Y = q.length, te = 0, se = Mt(M, this.__takeCount__);
        if (!a || !u && p == M && se == M)
          return yf(t, this.__actions__);
        var be = [];
        e:
          for (; M-- && te < se; ) {
            H += o;
            for (var $e = -1, ye = t[H]; ++$e < Y; ) {
              var Re = q[$e], ke = Re.iteratee, sn = Re.type, Dt = ke(ye);
              if (sn == ie)
                ye = Dt;
              else if (!Dt) {
                if (sn == X)
                  continue e;
                break e;
              }
            }
            be[te++] = ye;
          }
        return be;
      }
      Le.prototype = xo(ta.prototype), Le.prototype.constructor = Le;
      function Gr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function qm() {
        this.__data__ = Qo ? Qo(null) : {}, this.size = 0;
      }
      function Um(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function Vm(t) {
        var o = this.__data__;
        if (Qo) {
          var a = o[t];
          return a === d ? r : a;
        }
        return je.call(o, t) ? o[t] : r;
      }
      function Km(t) {
        var o = this.__data__;
        return Qo ? o[t] !== r : je.call(o, t);
      }
      function jm(t, o) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Qo && o === r ? d : o, this;
      }
      Gr.prototype.clear = qm, Gr.prototype.delete = Um, Gr.prototype.get = Vm, Gr.prototype.has = Km, Gr.prototype.set = jm;
      function sr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function Gm() {
        this.__data__ = [], this.size = 0;
      }
      function Ym(t) {
        var o = this.__data__, a = na(o, t);
        if (a < 0)
          return !1;
        var u = o.length - 1;
        return a == u ? o.pop() : Yi.call(o, a, 1), --this.size, !0;
      }
      function Zm(t) {
        var o = this.__data__, a = na(o, t);
        return a < 0 ? r : o[a][1];
      }
      function Xm(t) {
        return na(this.__data__, t) > -1;
      }
      function Jm(t, o) {
        var a = this.__data__, u = na(a, t);
        return u < 0 ? (++this.size, a.push([t, o])) : a[u][1] = o, this;
      }
      sr.prototype.clear = Gm, sr.prototype.delete = Ym, sr.prototype.get = Zm, sr.prototype.has = Xm, sr.prototype.set = Jm;
      function lr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function Qm() {
        this.size = 0, this.__data__ = {
          hash: new Gr(),
          map: new (Xo || sr)(),
          string: new Gr()
        };
      }
      function e0(t) {
        var o = va(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function t0(t) {
        return va(this, t).get(t);
      }
      function n0(t) {
        return va(this, t).has(t);
      }
      function r0(t, o) {
        var a = va(this, t), u = a.size;
        return a.set(t, o), this.size += a.size == u ? 0 : 1, this;
      }
      lr.prototype.clear = Qm, lr.prototype.delete = e0, lr.prototype.get = t0, lr.prototype.has = n0, lr.prototype.set = r0;
      function Yr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new lr(); ++o < a; )
          this.add(t[o]);
      }
      function o0(t) {
        return this.__data__.set(t, d), this;
      }
      function i0(t) {
        return this.__data__.has(t);
      }
      Yr.prototype.add = Yr.prototype.push = o0, Yr.prototype.has = i0;
      function Rn(t) {
        var o = this.__data__ = new sr(t);
        this.size = o.size;
      }
      function a0() {
        this.__data__ = new sr(), this.size = 0;
      }
      function s0(t) {
        var o = this.__data__, a = o.delete(t);
        return this.size = o.size, a;
      }
      function l0(t) {
        return this.__data__.get(t);
      }
      function u0(t) {
        return this.__data__.has(t);
      }
      function c0(t, o) {
        var a = this.__data__;
        if (a instanceof sr) {
          var u = a.__data__;
          if (!Xo || u.length < s - 1)
            return u.push([t, o]), this.size = ++a.size, this;
          a = this.__data__ = new lr(u);
        }
        return a.set(t, o), this.size = a.size, this;
      }
      Rn.prototype.clear = a0, Rn.prototype.delete = s0, Rn.prototype.get = l0, Rn.prototype.has = u0, Rn.prototype.set = c0;
      function Yc(t, o) {
        var a = Oe(t), u = !a && eo(t), p = !a && !u && Lr(t), b = !a && !u && !p && Ao(t), x = a || u || p || b, T = x ? Fs(t.length, _m) : [], M = T.length;
        for (var H in t)
          (o || je.call(t, H)) && !(x && (H == "length" || p && (H == "offset" || H == "parent") || b && (H == "buffer" || H == "byteLength" || H == "byteOffset") || dr(H, M))) && T.push(H);
        return T;
      }
      function Zc(t) {
        var o = t.length;
        return o ? t[Js(0, o - 1)] : r;
      }
      function f0(t, o) {
        return ha(Kt(t), Zr(o, 0, t.length));
      }
      function d0(t) {
        return ha(Kt(t));
      }
      function Hs(t, o, a) {
        (a !== r && !Ln(t[o], a) || a === r && !(o in t)) && ur(t, o, a);
      }
      function ti(t, o, a) {
        var u = t[o];
        (!(je.call(t, o) && Ln(u, a)) || a === r && !(o in t)) && ur(t, o, a);
      }
      function na(t, o) {
        for (var a = t.length; a--; )
          if (Ln(t[a][0], o))
            return a;
        return -1;
      }
      function p0(t, o, a, u) {
        return $r(t, function(p, b, x) {
          o(u, p, a(p), x);
        }), u;
      }
      function Xc(t, o) {
        return t && Yn(o, xt(o), t);
      }
      function v0(t, o) {
        return t && Yn(o, Gt(o), t);
      }
      function ur(t, o, a) {
        o == "__proto__" && Zi ? Zi(t, o, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[o] = a;
      }
      function qs(t, o) {
        for (var a = -1, u = o.length, p = k(u), b = t == null; ++a < u; )
          p[a] = b ? r : Sl(t, o[a]);
        return p;
      }
      function Zr(t, o, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), o !== r && (t = t >= o ? t : o)), t;
      }
      function _n(t, o, a, u, p, b) {
        var x, T = o & _, M = o & E, H = o & S;
        if (a && (x = p ? a(t, u, p, b) : a(t)), x !== r)
          return x;
        if (!it(t))
          return t;
        var q = Oe(t);
        if (q) {
          if (x = nb(t), !T)
            return Kt(t, x);
        } else {
          var Y = Pt(t), te = Y == rt || Y == pn;
          if (Lr(t))
            return Ef(t, T);
          if (Y == yt || Y == qe || te && !p) {
            if (x = M || te ? {} : zf(t), !T)
              return M ? V0(t, v0(x, t)) : U0(t, Xc(x, t));
          } else {
            if (!Ze[Y])
              return p ? t : {};
            x = rb(t, Y, T);
          }
        }
        b || (b = new Rn());
        var se = b.get(t);
        if (se)
          return se;
        b.set(t, x), gd(t) ? t.forEach(function(ye) {
          x.add(_n(ye, o, a, ye, t, b));
        }) : vd(t) && t.forEach(function(ye, Re) {
          x.set(Re, _n(ye, o, a, Re, t, b));
        });
        var be = H ? M ? ul : ll : M ? Gt : xt, $e = q ? r : be(t);
        return mn($e || t, function(ye, Re) {
          $e && (Re = ye, ye = t[Re]), ti(x, Re, _n(ye, o, a, Re, t, b));
        }), x;
      }
      function h0(t) {
        var o = xt(t);
        return function(a) {
          return Jc(a, t, o);
        };
      }
      function Jc(t, o, a) {
        var u = a.length;
        if (t == null)
          return !u;
        for (t = Ge(t); u--; ) {
          var p = a[u], b = o[p], x = t[p];
          if (x === r && !(p in t) || !b(x))
            return !1;
        }
        return !0;
      }
      function Qc(t, o, a) {
        if (typeof t != "function")
          throw new bn(c);
        return li(function() {
          t.apply(r, a);
        }, o);
      }
      function ni(t, o, a, u) {
        var p = -1, b = Di, x = !0, T = t.length, M = [], H = o.length;
        if (!T)
          return M;
        a && (o = ot(o, rn(a))), u ? (b = Is, x = !1) : o.length >= s && (b = Yo, x = !1, o = new Yr(o));
        e:
          for (; ++p < T; ) {
            var q = t[p], Y = a == null ? q : a(q);
            if (q = u || q !== 0 ? q : 0, x && Y === Y) {
              for (var te = H; te--; )
                if (o[te] === Y)
                  continue e;
              M.push(q);
            } else
              b(o, Y, u) || M.push(q);
          }
        return M;
      }
      var $r = Cf(Gn), ef = Cf(Vs, !0);
      function g0(t, o) {
        var a = !0;
        return $r(t, function(u, p, b) {
          return a = !!o(u, p, b), a;
        }), a;
      }
      function ra(t, o, a) {
        for (var u = -1, p = t.length; ++u < p; ) {
          var b = t[u], x = o(b);
          if (x != null && (T === r ? x === x && !an(x) : a(x, T)))
            var T = x, M = b;
        }
        return M;
      }
      function m0(t, o, a, u) {
        var p = t.length;
        for (a = Ae(a), a < 0 && (a = -a > p ? 0 : p + a), u = u === r || u > p ? p : Ae(u), u < 0 && (u += p), u = a > u ? 0 : bd(u); a < u; )
          t[a++] = o;
        return t;
      }
      function tf(t, o) {
        var a = [];
        return $r(t, function(u, p, b) {
          o(u, p, b) && a.push(u);
        }), a;
      }
      function At(t, o, a, u, p) {
        var b = -1, x = t.length;
        for (a || (a = ib), p || (p = []); ++b < x; ) {
          var T = t[b];
          o > 0 && a(T) ? o > 1 ? At(T, o - 1, a, u, p) : Cr(p, T) : u || (p[p.length] = T);
        }
        return p;
      }
      var Us = Af(), nf = Af(!0);
      function Gn(t, o) {
        return t && Us(t, o, xt);
      }
      function Vs(t, o) {
        return t && nf(t, o, xt);
      }
      function oa(t, o) {
        return Tr(o, function(a) {
          return pr(t[a]);
        });
      }
      function Xr(t, o) {
        o = Pr(o, t);
        for (var a = 0, u = o.length; t != null && a < u; )
          t = t[Zn(o[a++])];
        return a && a == u ? t : r;
      }
      function rf(t, o, a) {
        var u = o(t);
        return Oe(t) ? u : Cr(u, a(t));
      }
      function kt(t) {
        return t == null ? t === r ? or : vn : jr && jr in Ge(t) ? Q0(t) : db(t);
      }
      function Ks(t, o) {
        return t > o;
      }
      function b0(t, o) {
        return t != null && je.call(t, o);
      }
      function y0(t, o) {
        return t != null && o in Ge(t);
      }
      function _0(t, o, a) {
        return t >= Mt(o, a) && t < wt(o, a);
      }
      function js(t, o, a) {
        for (var u = a ? Is : Di, p = t[0].length, b = t.length, x = b, T = k(b), M = 1 / 0, H = []; x--; ) {
          var q = t[x];
          x && o && (q = ot(q, rn(o))), M = Mt(q.length, M), T[x] = !a && (o || p >= 120 && q.length >= 120) ? new Yr(x && q) : r;
        }
        q = t[0];
        var Y = -1, te = T[0];
        e:
          for (; ++Y < p && H.length < M; ) {
            var se = q[Y], be = o ? o(se) : se;
            if (se = a || se !== 0 ? se : 0, !(te ? Yo(te, be) : u(H, be, a))) {
              for (x = b; --x; ) {
                var $e = T[x];
                if (!($e ? Yo($e, be) : u(t[x], be, a)))
                  continue e;
              }
              te && te.push(be), H.push(se);
            }
          }
        return H;
      }
      function w0(t, o, a, u) {
        return Gn(t, function(p, b, x) {
          o(u, a(p), b, x);
        }), u;
      }
      function ri(t, o, a) {
        o = Pr(o, t), t = Vf(t, o);
        var u = t == null ? t : t[Zn(En(o))];
        return u == null ? r : nn(u, t, a);
      }
      function of(t) {
        return lt(t) && kt(t) == qe;
      }
      function E0(t) {
        return lt(t) && kt(t) == qt;
      }
      function S0(t) {
        return lt(t) && kt(t) == We;
      }
      function oi(t, o, a, u, p) {
        return t === o ? !0 : t == null || o == null || !lt(t) && !lt(o) ? t !== t && o !== o : x0(t, o, a, u, oi, p);
      }
      function x0(t, o, a, u, p, b) {
        var x = Oe(t), T = Oe(o), M = x ? gt : Pt(t), H = T ? gt : Pt(o);
        M = M == qe ? yt : M, H = H == qe ? yt : H;
        var q = M == yt, Y = H == yt, te = M == H;
        if (te && Lr(t)) {
          if (!Lr(o))
            return !1;
          x = !0, q = !1;
        }
        if (te && !q)
          return b || (b = new Rn()), x || Ao(t) ? Nf(t, o, a, u, p, b) : X0(t, o, M, a, u, p, b);
        if (!(a & h)) {
          var se = q && je.call(t, "__wrapped__"), be = Y && je.call(o, "__wrapped__");
          if (se || be) {
            var $e = se ? t.value() : t, ye = be ? o.value() : o;
            return b || (b = new Rn()), p($e, ye, a, u, b);
          }
        }
        return te ? (b || (b = new Rn()), J0(t, o, a, u, p, b)) : !1;
      }
      function O0(t) {
        return lt(t) && Pt(t) == mt;
      }
      function Gs(t, o, a, u) {
        var p = a.length, b = p, x = !u;
        if (t == null)
          return !b;
        for (t = Ge(t); p--; ) {
          var T = a[p];
          if (x && T[2] ? T[1] !== t[T[0]] : !(T[0] in t))
            return !1;
        }
        for (; ++p < b; ) {
          T = a[p];
          var M = T[0], H = t[M], q = T[1];
          if (x && T[2]) {
            if (H === r && !(M in t))
              return !1;
          } else {
            var Y = new Rn();
            if (u)
              var te = u(H, q, M, t, o, Y);
            if (!(te === r ? oi(q, H, h | w, u, Y) : te))
              return !1;
          }
        }
        return !0;
      }
      function af(t) {
        if (!it(t) || sb(t))
          return !1;
        var o = pr(t) ? Om : hg;
        return o.test(Qr(t));
      }
      function T0(t) {
        return lt(t) && kt(t) == V;
      }
      function C0(t) {
        return lt(t) && Pt(t) == _e;
      }
      function A0(t) {
        return lt(t) && wa(t.length) && !!Qe[kt(t)];
      }
      function sf(t) {
        return typeof t == "function" ? t : t == null ? Yt : typeof t == "object" ? Oe(t) ? cf(t[0], t[1]) : uf(t) : Id(t);
      }
      function Ys(t) {
        if (!si(t))
          return Mm(t);
        var o = [];
        for (var a in Ge(t))
          je.call(t, a) && a != "constructor" && o.push(a);
        return o;
      }
      function I0(t) {
        if (!it(t))
          return fb(t);
        var o = si(t), a = [];
        for (var u in t)
          u == "constructor" && (o || !je.call(t, u)) || a.push(u);
        return a;
      }
      function Zs(t, o) {
        return t < o;
      }
      function lf(t, o) {
        var a = -1, u = jt(t) ? k(t.length) : [];
        return $r(t, function(p, b, x) {
          u[++a] = o(p, b, x);
        }), u;
      }
      function uf(t) {
        var o = fl(t);
        return o.length == 1 && o[0][2] ? qf(o[0][0], o[0][1]) : function(a) {
          return a === t || Gs(a, t, o);
        };
      }
      function cf(t, o) {
        return pl(t) && Hf(o) ? qf(Zn(t), o) : function(a) {
          var u = Sl(a, t);
          return u === r && u === o ? xl(a, t) : oi(o, u, h | w);
        };
      }
      function ia(t, o, a, u, p) {
        t !== o && Us(o, function(b, x) {
          if (p || (p = new Rn()), it(b))
            $0(t, o, x, a, ia, u, p);
          else {
            var T = u ? u(hl(t, x), b, x + "", t, o, p) : r;
            T === r && (T = b), Hs(t, x, T);
          }
        }, Gt);
      }
      function $0(t, o, a, u, p, b, x) {
        var T = hl(t, a), M = hl(o, a), H = x.get(M);
        if (H) {
          Hs(t, a, H);
          return;
        }
        var q = b ? b(T, M, a + "", t, o, x) : r, Y = q === r;
        if (Y) {
          var te = Oe(M), se = !te && Lr(M), be = !te && !se && Ao(M);
          q = M, te || se || be ? Oe(T) ? q = T : dt(T) ? q = Kt(T) : se ? (Y = !1, q = Ef(M, !0)) : be ? (Y = !1, q = Sf(M, !0)) : q = [] : ui(M) || eo(M) ? (q = T, eo(T) ? q = yd(T) : (!it(T) || pr(T)) && (q = zf(M))) : Y = !1;
        }
        Y && (x.set(M, q), p(q, M, u, b, x), x.delete(M)), Hs(t, a, q);
      }
      function ff(t, o) {
        var a = t.length;
        if (!!a)
          return o += o < 0 ? a : 0, dr(o, a) ? t[o] : r;
      }
      function df(t, o, a) {
        o.length ? o = ot(o, function(b) {
          return Oe(b) ? function(x) {
            return Xr(x, b.length === 1 ? b[0] : b);
          } : b;
        }) : o = [Yt];
        var u = -1;
        o = ot(o, rn(ge()));
        var p = lf(t, function(b, x, T) {
          var M = ot(o, function(H) {
            return H(b);
          });
          return { criteria: M, index: ++u, value: b };
        });
        return rm(p, function(b, x) {
          return q0(b, x, a);
        });
      }
      function M0(t, o) {
        return pf(t, o, function(a, u) {
          return xl(t, u);
        });
      }
      function pf(t, o, a) {
        for (var u = -1, p = o.length, b = {}; ++u < p; ) {
          var x = o[u], T = Xr(t, x);
          a(T, x) && ii(b, Pr(x, t), T);
        }
        return b;
      }
      function P0(t) {
        return function(o) {
          return Xr(o, t);
        };
      }
      function Xs(t, o, a, u) {
        var p = u ? nm : mo, b = -1, x = o.length, T = t;
        for (t === o && (o = Kt(o)), a && (T = ot(t, rn(a))); ++b < x; )
          for (var M = 0, H = o[b], q = a ? a(H) : H; (M = p(T, q, M, u)) > -1; )
            T !== t && Yi.call(T, M, 1), Yi.call(t, M, 1);
        return t;
      }
      function vf(t, o) {
        for (var a = t ? o.length : 0, u = a - 1; a--; ) {
          var p = o[a];
          if (a == u || p !== b) {
            var b = p;
            dr(p) ? Yi.call(t, p, 1) : tl(t, p);
          }
        }
        return t;
      }
      function Js(t, o) {
        return t + Ji(jc() * (o - t + 1));
      }
      function R0(t, o, a, u) {
        for (var p = -1, b = wt(Xi((o - t) / (a || 1)), 0), x = k(b); b--; )
          x[u ? b : ++p] = t, t += a;
        return x;
      }
      function Qs(t, o) {
        var a = "";
        if (!t || o < 1 || o > fe)
          return a;
        do
          o % 2 && (a += t), o = Ji(o / 2), o && (t += t);
        while (o);
        return a;
      }
      function Me(t, o) {
        return gl(Uf(t, o, Yt), t + "");
      }
      function L0(t) {
        return Zc(Io(t));
      }
      function F0(t, o) {
        var a = Io(t);
        return ha(a, Zr(o, 0, a.length));
      }
      function ii(t, o, a, u) {
        if (!it(t))
          return t;
        o = Pr(o, t);
        for (var p = -1, b = o.length, x = b - 1, T = t; T != null && ++p < b; ) {
          var M = Zn(o[p]), H = a;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return t;
          if (p != x) {
            var q = T[M];
            H = u ? u(q, M, T) : r, H === r && (H = it(q) ? q : dr(o[p + 1]) ? [] : {});
          }
          ti(T, M, H), T = T[M];
        }
        return t;
      }
      var hf = Qi ? function(t, o) {
        return Qi.set(t, o), t;
      } : Yt, B0 = Zi ? function(t, o) {
        return Zi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Tl(o),
          writable: !0
        });
      } : Yt;
      function k0(t) {
        return ha(Io(t));
      }
      function wn(t, o, a) {
        var u = -1, p = t.length;
        o < 0 && (o = -o > p ? 0 : p + o), a = a > p ? p : a, a < 0 && (a += p), p = o > a ? 0 : a - o >>> 0, o >>>= 0;
        for (var b = k(p); ++u < p; )
          b[u] = t[u + o];
        return b;
      }
      function N0(t, o) {
        var a;
        return $r(t, function(u, p, b) {
          return a = o(u, p, b), !a;
        }), !!a;
      }
      function aa(t, o, a) {
        var u = 0, p = t == null ? u : t.length;
        if (typeof o == "number" && o === o && p <= nt) {
          for (; u < p; ) {
            var b = u + p >>> 1, x = t[b];
            x !== null && !an(x) && (a ? x <= o : x < o) ? u = b + 1 : p = b;
          }
          return p;
        }
        return el(t, o, Yt, a);
      }
      function el(t, o, a, u) {
        var p = 0, b = t == null ? 0 : t.length;
        if (b === 0)
          return 0;
        o = a(o);
        for (var x = o !== o, T = o === null, M = an(o), H = o === r; p < b; ) {
          var q = Ji((p + b) / 2), Y = a(t[q]), te = Y !== r, se = Y === null, be = Y === Y, $e = an(Y);
          if (x)
            var ye = u || be;
          else
            H ? ye = be && (u || te) : T ? ye = be && te && (u || !se) : M ? ye = be && te && !se && (u || !$e) : se || $e ? ye = !1 : ye = u ? Y <= o : Y < o;
          ye ? p = q + 1 : b = q;
        }
        return Mt(b, bt);
      }
      function gf(t, o) {
        for (var a = -1, u = t.length, p = 0, b = []; ++a < u; ) {
          var x = t[a], T = o ? o(x) : x;
          if (!a || !Ln(T, M)) {
            var M = T;
            b[p++] = x === 0 ? 0 : x;
          }
        }
        return b;
      }
      function mf(t) {
        return typeof t == "number" ? t : an(t) ? Se : +t;
      }
      function on(t) {
        if (typeof t == "string")
          return t;
        if (Oe(t))
          return ot(t, on) + "";
        if (an(t))
          return Gc ? Gc.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -ne ? "-0" : o;
      }
      function Mr(t, o, a) {
        var u = -1, p = Di, b = t.length, x = !0, T = [], M = T;
        if (a)
          x = !1, p = Is;
        else if (b >= s) {
          var H = o ? null : Y0(t);
          if (H)
            return zi(H);
          x = !1, p = Yo, M = new Yr();
        } else
          M = o ? [] : T;
        e:
          for (; ++u < b; ) {
            var q = t[u], Y = o ? o(q) : q;
            if (q = a || q !== 0 ? q : 0, x && Y === Y) {
              for (var te = M.length; te--; )
                if (M[te] === Y)
                  continue e;
              o && M.push(Y), T.push(q);
            } else
              p(M, Y, a) || (M !== T && M.push(Y), T.push(q));
          }
        return T;
      }
      function tl(t, o) {
        return o = Pr(o, t), t = Vf(t, o), t == null || delete t[Zn(En(o))];
      }
      function bf(t, o, a, u) {
        return ii(t, o, a(Xr(t, o)), u);
      }
      function sa(t, o, a, u) {
        for (var p = t.length, b = u ? p : -1; (u ? b-- : ++b < p) && o(t[b], b, t); )
          ;
        return a ? wn(t, u ? 0 : b, u ? b + 1 : p) : wn(t, u ? b + 1 : 0, u ? p : b);
      }
      function yf(t, o) {
        var a = t;
        return a instanceof Le && (a = a.value()), $s(o, function(u, p) {
          return p.func.apply(p.thisArg, Cr([u], p.args));
        }, a);
      }
      function nl(t, o, a) {
        var u = t.length;
        if (u < 2)
          return u ? Mr(t[0]) : [];
        for (var p = -1, b = k(u); ++p < u; )
          for (var x = t[p], T = -1; ++T < u; )
            T != p && (b[p] = ni(b[p] || x, t[T], o, a));
        return Mr(At(b, 1), o, a);
      }
      function _f(t, o, a) {
        for (var u = -1, p = t.length, b = o.length, x = {}; ++u < p; ) {
          var T = u < b ? o[u] : r;
          a(x, t[u], T);
        }
        return x;
      }
      function rl(t) {
        return dt(t) ? t : [];
      }
      function ol(t) {
        return typeof t == "function" ? t : Yt;
      }
      function Pr(t, o) {
        return Oe(t) ? t : pl(t, o) ? [t] : Yf(Ve(t));
      }
      var D0 = Me;
      function Rr(t, o, a) {
        var u = t.length;
        return a = a === r ? u : a, !o && a >= u ? t : wn(t, o, a);
      }
      var wf = Tm || function(t) {
        return Ct.clearTimeout(t);
      };
      function Ef(t, o) {
        if (o)
          return t.slice();
        var a = t.length, u = Hc ? Hc(a) : new t.constructor(a);
        return t.copy(u), u;
      }
      function il(t) {
        var o = new t.constructor(t.byteLength);
        return new ji(o).set(new ji(t)), o;
      }
      function W0(t, o) {
        var a = o ? il(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function z0(t) {
        var o = new t.constructor(t.source, oc.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function H0(t) {
        return ei ? Ge(ei.call(t)) : {};
      }
      function Sf(t, o) {
        var a = o ? il(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function xf(t, o) {
        if (t !== o) {
          var a = t !== r, u = t === null, p = t === t, b = an(t), x = o !== r, T = o === null, M = o === o, H = an(o);
          if (!T && !H && !b && t > o || b && x && M && !T && !H || u && x && M || !a && M || !p)
            return 1;
          if (!u && !b && !H && t < o || H && a && p && !u && !b || T && a && p || !x && p || !M)
            return -1;
        }
        return 0;
      }
      function q0(t, o, a) {
        for (var u = -1, p = t.criteria, b = o.criteria, x = p.length, T = a.length; ++u < x; ) {
          var M = xf(p[u], b[u]);
          if (M) {
            if (u >= T)
              return M;
            var H = a[u];
            return M * (H == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function Of(t, o, a, u) {
        for (var p = -1, b = t.length, x = a.length, T = -1, M = o.length, H = wt(b - x, 0), q = k(M + H), Y = !u; ++T < M; )
          q[T] = o[T];
        for (; ++p < x; )
          (Y || p < b) && (q[a[p]] = t[p]);
        for (; H--; )
          q[T++] = t[p++];
        return q;
      }
      function Tf(t, o, a, u) {
        for (var p = -1, b = t.length, x = -1, T = a.length, M = -1, H = o.length, q = wt(b - T, 0), Y = k(q + H), te = !u; ++p < q; )
          Y[p] = t[p];
        for (var se = p; ++M < H; )
          Y[se + M] = o[M];
        for (; ++x < T; )
          (te || p < b) && (Y[se + a[x]] = t[p++]);
        return Y;
      }
      function Kt(t, o) {
        var a = -1, u = t.length;
        for (o || (o = k(u)); ++a < u; )
          o[a] = t[a];
        return o;
      }
      function Yn(t, o, a, u) {
        var p = !a;
        a || (a = {});
        for (var b = -1, x = o.length; ++b < x; ) {
          var T = o[b], M = u ? u(a[T], t[T], T, a, t) : r;
          M === r && (M = t[T]), p ? ur(a, T, M) : ti(a, T, M);
        }
        return a;
      }
      function U0(t, o) {
        return Yn(t, dl(t), o);
      }
      function V0(t, o) {
        return Yn(t, Df(t), o);
      }
      function la(t, o) {
        return function(a, u) {
          var p = Oe(a) ? Zg : p0, b = o ? o() : {};
          return p(a, t, ge(u, 2), b);
        };
      }
      function Oo(t) {
        return Me(function(o, a) {
          var u = -1, p = a.length, b = p > 1 ? a[p - 1] : r, x = p > 2 ? a[2] : r;
          for (b = t.length > 3 && typeof b == "function" ? (p--, b) : r, x && Nt(a[0], a[1], x) && (b = p < 3 ? r : b, p = 1), o = Ge(o); ++u < p; ) {
            var T = a[u];
            T && t(o, T, u, b);
          }
          return o;
        });
      }
      function Cf(t, o) {
        return function(a, u) {
          if (a == null)
            return a;
          if (!jt(a))
            return t(a, u);
          for (var p = a.length, b = o ? p : -1, x = Ge(a); (o ? b-- : ++b < p) && u(x[b], b, x) !== !1; )
            ;
          return a;
        };
      }
      function Af(t) {
        return function(o, a, u) {
          for (var p = -1, b = Ge(o), x = u(o), T = x.length; T--; ) {
            var M = x[t ? T : ++p];
            if (a(b[M], M, b) === !1)
              break;
          }
          return o;
        };
      }
      function K0(t, o, a) {
        var u = o & O, p = ai(t);
        function b() {
          var x = this && this !== Ct && this instanceof b ? p : t;
          return x.apply(u ? a : this, arguments);
        }
        return b;
      }
      function If(t) {
        return function(o) {
          o = Ve(o);
          var a = bo(o) ? Pn(o) : r, u = a ? a[0] : o.charAt(0), p = a ? Rr(a, 1).join("") : o.slice(1);
          return u[t]() + p;
        };
      }
      function To(t) {
        return function(o) {
          return $s(Cd(Td(o).replace(Bg, "")), t, "");
        };
      }
      function ai(t) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new t();
            case 1:
              return new t(o[0]);
            case 2:
              return new t(o[0], o[1]);
            case 3:
              return new t(o[0], o[1], o[2]);
            case 4:
              return new t(o[0], o[1], o[2], o[3]);
            case 5:
              return new t(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var a = xo(t.prototype), u = t.apply(a, o);
          return it(u) ? u : a;
        };
      }
      function j0(t, o, a) {
        var u = ai(t);
        function p() {
          for (var b = arguments.length, x = k(b), T = b, M = Co(p); T--; )
            x[T] = arguments[T];
          var H = b < 3 && x[0] !== M && x[b - 1] !== M ? [] : Ar(x, M);
          if (b -= H.length, b < a)
            return Lf(
              t,
              o,
              ua,
              p.placeholder,
              r,
              x,
              H,
              r,
              r,
              a - b
            );
          var q = this && this !== Ct && this instanceof p ? u : t;
          return nn(q, this, x);
        }
        return p;
      }
      function $f(t) {
        return function(o, a, u) {
          var p = Ge(o);
          if (!jt(o)) {
            var b = ge(a, 3);
            o = xt(o), a = function(T) {
              return b(p[T], T, p);
            };
          }
          var x = t(o, a, u);
          return x > -1 ? p[b ? o[x] : x] : r;
        };
      }
      function Mf(t) {
        return fr(function(o) {
          var a = o.length, u = a, p = yn.prototype.thru;
          for (t && o.reverse(); u--; ) {
            var b = o[u];
            if (typeof b != "function")
              throw new bn(c);
            if (p && !x && pa(b) == "wrapper")
              var x = new yn([], !0);
          }
          for (u = x ? u : a; ++u < a; ) {
            b = o[u];
            var T = pa(b), M = T == "wrapper" ? cl(b) : r;
            M && vl(M[0]) && M[1] == (R | C | $ | z) && !M[4].length && M[9] == 1 ? x = x[pa(M[0])].apply(x, M[3]) : x = b.length == 1 && vl(b) ? x[T]() : x.thru(b);
          }
          return function() {
            var H = arguments, q = H[0];
            if (x && H.length == 1 && Oe(q))
              return x.plant(q).value();
            for (var Y = 0, te = a ? o[Y].apply(this, H) : q; ++Y < a; )
              te = o[Y].call(this, te);
            return te;
          };
        });
      }
      function ua(t, o, a, u, p, b, x, T, M, H) {
        var q = o & R, Y = o & O, te = o & A, se = o & (C | F), be = o & Z, $e = te ? r : ai(t);
        function ye() {
          for (var Re = arguments.length, ke = k(Re), sn = Re; sn--; )
            ke[sn] = arguments[sn];
          if (se)
            var Dt = Co(ye), ln = im(ke, Dt);
          if (u && (ke = Of(ke, u, p, se)), b && (ke = Tf(ke, b, x, se)), Re -= ln, se && Re < H) {
            var pt = Ar(ke, Dt);
            return Lf(
              t,
              o,
              ua,
              ye.placeholder,
              a,
              ke,
              pt,
              T,
              M,
              H - Re
            );
          }
          var Fn = Y ? a : this, hr = te ? Fn[t] : t;
          return Re = ke.length, T ? ke = pb(ke, T) : be && Re > 1 && ke.reverse(), q && M < Re && (ke.length = M), this && this !== Ct && this instanceof ye && (hr = $e || ai(hr)), hr.apply(Fn, ke);
        }
        return ye;
      }
      function Pf(t, o) {
        return function(a, u) {
          return w0(a, t, o(u), {});
        };
      }
      function ca(t, o) {
        return function(a, u) {
          var p;
          if (a === r && u === r)
            return o;
          if (a !== r && (p = a), u !== r) {
            if (p === r)
              return u;
            typeof a == "string" || typeof u == "string" ? (a = on(a), u = on(u)) : (a = mf(a), u = mf(u)), p = t(a, u);
          }
          return p;
        };
      }
      function al(t) {
        return fr(function(o) {
          return o = ot(o, rn(ge())), Me(function(a) {
            var u = this;
            return t(o, function(p) {
              return nn(p, u, a);
            });
          });
        });
      }
      function fa(t, o) {
        o = o === r ? " " : on(o);
        var a = o.length;
        if (a < 2)
          return a ? Qs(o, t) : o;
        var u = Qs(o, Xi(t / yo(o)));
        return bo(o) ? Rr(Pn(u), 0, t).join("") : u.slice(0, t);
      }
      function G0(t, o, a, u) {
        var p = o & O, b = ai(t);
        function x() {
          for (var T = -1, M = arguments.length, H = -1, q = u.length, Y = k(q + M), te = this && this !== Ct && this instanceof x ? b : t; ++H < q; )
            Y[H] = u[H];
          for (; M--; )
            Y[H++] = arguments[++T];
          return nn(te, p ? a : this, Y);
        }
        return x;
      }
      function Rf(t) {
        return function(o, a, u) {
          return u && typeof u != "number" && Nt(o, a, u) && (a = u = r), o = vr(o), a === r ? (a = o, o = 0) : a = vr(a), u = u === r ? o < a ? 1 : -1 : vr(u), R0(o, a, u, t);
        };
      }
      function da(t) {
        return function(o, a) {
          return typeof o == "string" && typeof a == "string" || (o = Sn(o), a = Sn(a)), t(o, a);
        };
      }
      function Lf(t, o, a, u, p, b, x, T, M, H) {
        var q = o & C, Y = q ? x : r, te = q ? r : x, se = q ? b : r, be = q ? r : b;
        o |= q ? $ : P, o &= ~(q ? P : $), o & L || (o &= ~(O | A));
        var $e = [
          t,
          o,
          p,
          se,
          Y,
          be,
          te,
          T,
          M,
          H
        ], ye = a.apply(r, $e);
        return vl(t) && Kf(ye, $e), ye.placeholder = u, jf(ye, t, o);
      }
      function sl(t) {
        var o = _t[t];
        return function(a, u) {
          if (a = Sn(a), u = u == null ? 0 : Mt(Ae(u), 292), u && Kc(a)) {
            var p = (Ve(a) + "e").split("e"), b = o(p[0] + "e" + (+p[1] + u));
            return p = (Ve(b) + "e").split("e"), +(p[0] + "e" + (+p[1] - u));
          }
          return o(a);
        };
      }
      var Y0 = Eo && 1 / zi(new Eo([, -0]))[1] == ne ? function(t) {
        return new Eo(t);
      } : Il;
      function Ff(t) {
        return function(o) {
          var a = Pt(o);
          return a == mt ? ks(o) : a == _e ? dm(o) : om(o, t(o));
        };
      }
      function cr(t, o, a, u, p, b, x, T) {
        var M = o & A;
        if (!M && typeof t != "function")
          throw new bn(c);
        var H = u ? u.length : 0;
        if (H || (o &= ~($ | P), u = p = r), x = x === r ? x : wt(Ae(x), 0), T = T === r ? T : Ae(T), H -= p ? p.length : 0, o & P) {
          var q = u, Y = p;
          u = p = r;
        }
        var te = M ? r : cl(t), se = [
          t,
          o,
          a,
          u,
          p,
          q,
          Y,
          b,
          x,
          T
        ];
        if (te && cb(se, te), t = se[0], o = se[1], a = se[2], u = se[3], p = se[4], T = se[9] = se[9] === r ? M ? 0 : t.length : wt(se[9] - H, 0), !T && o & (C | F) && (o &= ~(C | F)), !o || o == O)
          var be = K0(t, o, a);
        else
          o == C || o == F ? be = j0(t, o, T) : (o == $ || o == (O | $)) && !p.length ? be = G0(t, o, a, u) : be = ua.apply(r, se);
        var $e = te ? hf : Kf;
        return jf($e(be, se), t, o);
      }
      function Bf(t, o, a, u) {
        return t === r || Ln(t, wo[a]) && !je.call(u, a) ? o : t;
      }
      function kf(t, o, a, u, p, b) {
        return it(t) && it(o) && (b.set(o, t), ia(t, o, r, kf, b), b.delete(o)), t;
      }
      function Z0(t) {
        return ui(t) ? r : t;
      }
      function Nf(t, o, a, u, p, b) {
        var x = a & h, T = t.length, M = o.length;
        if (T != M && !(x && M > T))
          return !1;
        var H = b.get(t), q = b.get(o);
        if (H && q)
          return H == o && q == t;
        var Y = -1, te = !0, se = a & w ? new Yr() : r;
        for (b.set(t, o), b.set(o, t); ++Y < T; ) {
          var be = t[Y], $e = o[Y];
          if (u)
            var ye = x ? u($e, be, Y, o, t, b) : u(be, $e, Y, t, o, b);
          if (ye !== r) {
            if (ye)
              continue;
            te = !1;
            break;
          }
          if (se) {
            if (!Ms(o, function(Re, ke) {
              if (!Yo(se, ke) && (be === Re || p(be, Re, a, u, b)))
                return se.push(ke);
            })) {
              te = !1;
              break;
            }
          } else if (!(be === $e || p(be, $e, a, u, b))) {
            te = !1;
            break;
          }
        }
        return b.delete(t), b.delete(o), te;
      }
      function X0(t, o, a, u, p, b, x) {
        switch (a) {
          case tn:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case qt:
            return !(t.byteLength != o.byteLength || !b(new ji(t), new ji(o)));
          case ve:
          case We:
          case Qt:
            return Ln(+t, +o);
          case Ye:
            return t.name == o.name && t.message == o.message;
          case V:
          case st:
            return t == o + "";
          case mt:
            var T = ks;
          case _e:
            var M = u & h;
            if (T || (T = zi), t.size != o.size && !M)
              return !1;
            var H = x.get(t);
            if (H)
              return H == o;
            u |= w, x.set(t, o);
            var q = Nf(T(t), T(o), u, p, b, x);
            return x.delete(t), q;
          case Bt:
            if (ei)
              return ei.call(t) == ei.call(o);
        }
        return !1;
      }
      function J0(t, o, a, u, p, b) {
        var x = a & h, T = ll(t), M = T.length, H = ll(o), q = H.length;
        if (M != q && !x)
          return !1;
        for (var Y = M; Y--; ) {
          var te = T[Y];
          if (!(x ? te in o : je.call(o, te)))
            return !1;
        }
        var se = b.get(t), be = b.get(o);
        if (se && be)
          return se == o && be == t;
        var $e = !0;
        b.set(t, o), b.set(o, t);
        for (var ye = x; ++Y < M; ) {
          te = T[Y];
          var Re = t[te], ke = o[te];
          if (u)
            var sn = x ? u(ke, Re, te, o, t, b) : u(Re, ke, te, t, o, b);
          if (!(sn === r ? Re === ke || p(Re, ke, a, u, b) : sn)) {
            $e = !1;
            break;
          }
          ye || (ye = te == "constructor");
        }
        if ($e && !ye) {
          var Dt = t.constructor, ln = o.constructor;
          Dt != ln && "constructor" in t && "constructor" in o && !(typeof Dt == "function" && Dt instanceof Dt && typeof ln == "function" && ln instanceof ln) && ($e = !1);
        }
        return b.delete(t), b.delete(o), $e;
      }
      function fr(t) {
        return gl(Uf(t, r, Qf), t + "");
      }
      function ll(t) {
        return rf(t, xt, dl);
      }
      function ul(t) {
        return rf(t, Gt, Df);
      }
      var cl = Qi ? function(t) {
        return Qi.get(t);
      } : Il;
      function pa(t) {
        for (var o = t.name + "", a = So[o], u = je.call(So, o) ? a.length : 0; u--; ) {
          var p = a[u], b = p.func;
          if (b == null || b == t)
            return p.name;
        }
        return o;
      }
      function Co(t) {
        var o = je.call(m, "placeholder") ? m : t;
        return o.placeholder;
      }
      function ge() {
        var t = m.iteratee || Cl;
        return t = t === Cl ? sf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function va(t, o) {
        var a = t.__data__;
        return ab(o) ? a[typeof o == "string" ? "string" : "hash"] : a.map;
      }
      function fl(t) {
        for (var o = xt(t), a = o.length; a--; ) {
          var u = o[a], p = t[u];
          o[a] = [u, p, Hf(p)];
        }
        return o;
      }
      function Jr(t, o) {
        var a = um(t, o);
        return af(a) ? a : r;
      }
      function Q0(t) {
        var o = je.call(t, jr), a = t[jr];
        try {
          t[jr] = r;
          var u = !0;
        } catch {
        }
        var p = Vi.call(t);
        return u && (o ? t[jr] = a : delete t[jr]), p;
      }
      var dl = Ds ? function(t) {
        return t == null ? [] : (t = Ge(t), Tr(Ds(t), function(o) {
          return Uc.call(t, o);
        }));
      } : $l, Df = Ds ? function(t) {
        for (var o = []; t; )
          Cr(o, dl(t)), t = Gi(t);
        return o;
      } : $l, Pt = kt;
      (Ws && Pt(new Ws(new ArrayBuffer(1))) != tn || Xo && Pt(new Xo()) != mt || zs && Pt(zs.resolve()) != Vn || Eo && Pt(new Eo()) != _e || Jo && Pt(new Jo()) != en) && (Pt = function(t) {
        var o = kt(t), a = o == yt ? t.constructor : r, u = a ? Qr(a) : "";
        if (u)
          switch (u) {
            case Fm:
              return tn;
            case Bm:
              return mt;
            case km:
              return Vn;
            case Nm:
              return _e;
            case Dm:
              return en;
          }
        return o;
      });
      function eb(t, o, a) {
        for (var u = -1, p = a.length; ++u < p; ) {
          var b = a[u], x = b.size;
          switch (b.type) {
            case "drop":
              t += x;
              break;
            case "dropRight":
              o -= x;
              break;
            case "take":
              o = Mt(o, t + x);
              break;
            case "takeRight":
              t = wt(t, o - x);
              break;
          }
        }
        return { start: t, end: o };
      }
      function tb(t) {
        var o = t.match(sg);
        return o ? o[1].split(lg) : [];
      }
      function Wf(t, o, a) {
        o = Pr(o, t);
        for (var u = -1, p = o.length, b = !1; ++u < p; ) {
          var x = Zn(o[u]);
          if (!(b = t != null && a(t, x)))
            break;
          t = t[x];
        }
        return b || ++u != p ? b : (p = t == null ? 0 : t.length, !!p && wa(p) && dr(x, p) && (Oe(t) || eo(t)));
      }
      function nb(t) {
        var o = t.length, a = new t.constructor(o);
        return o && typeof t[0] == "string" && je.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function zf(t) {
        return typeof t.constructor == "function" && !si(t) ? xo(Gi(t)) : {};
      }
      function rb(t, o, a) {
        var u = t.constructor;
        switch (o) {
          case qt:
            return il(t);
          case ve:
          case We:
            return new u(+t);
          case tn:
            return W0(t, a);
          case Kn:
          case vo:
          case ho:
          case N:
          case Q:
          case me:
          case Ie:
          case ft:
          case hn:
            return Sf(t, a);
          case mt:
            return new u();
          case Qt:
          case st:
            return new u(t);
          case V:
            return z0(t);
          case _e:
            return new u();
          case Bt:
            return H0(t);
        }
      }
      function ob(t, o) {
        var a = o.length;
        if (!a)
          return t;
        var u = a - 1;
        return o[u] = (a > 1 ? "& " : "") + o[u], o = o.join(a > 2 ? ", " : " "), t.replace(ag, `{
/* [wrapped with ` + o + `] */
`);
      }
      function ib(t) {
        return Oe(t) || eo(t) || !!(Vc && t && t[Vc]);
      }
      function dr(t, o) {
        var a = typeof t;
        return o = o == null ? fe : o, !!o && (a == "number" || a != "symbol" && mg.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function Nt(t, o, a) {
        if (!it(a))
          return !1;
        var u = typeof o;
        return (u == "number" ? jt(a) && dr(o, a.length) : u == "string" && o in a) ? Ln(a[o], t) : !1;
      }
      function pl(t, o) {
        if (Oe(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || an(t) ? !0 : ng.test(t) || !tg.test(t) || o != null && t in Ge(o);
      }
      function ab(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function vl(t) {
        var o = pa(t), a = m[o];
        if (typeof a != "function" || !(o in Le.prototype))
          return !1;
        if (t === a)
          return !0;
        var u = cl(a);
        return !!u && t === u[0];
      }
      function sb(t) {
        return !!zc && zc in t;
      }
      var lb = qi ? pr : Ml;
      function si(t) {
        var o = t && t.constructor, a = typeof o == "function" && o.prototype || wo;
        return t === a;
      }
      function Hf(t) {
        return t === t && !it(t);
      }
      function qf(t, o) {
        return function(a) {
          return a == null ? !1 : a[t] === o && (o !== r || t in Ge(a));
        };
      }
      function ub(t) {
        var o = ya(t, function(u) {
          return a.size === g && a.clear(), u;
        }), a = o.cache;
        return o;
      }
      function cb(t, o) {
        var a = t[1], u = o[1], p = a | u, b = p < (O | A | R), x = u == R && a == C || u == R && a == z && t[7].length <= o[8] || u == (R | z) && o[7].length <= o[8] && a == C;
        if (!(b || x))
          return t;
        u & O && (t[2] = o[2], p |= a & O ? 0 : L);
        var T = o[3];
        if (T) {
          var M = t[3];
          t[3] = M ? Of(M, T, o[4]) : T, t[4] = M ? Ar(t[3], y) : o[4];
        }
        return T = o[5], T && (M = t[5], t[5] = M ? Tf(M, T, o[6]) : T, t[6] = M ? Ar(t[5], y) : o[6]), T = o[7], T && (t[7] = T), u & R && (t[8] = t[8] == null ? o[8] : Mt(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = p, t;
      }
      function fb(t) {
        var o = [];
        if (t != null)
          for (var a in Ge(t))
            o.push(a);
        return o;
      }
      function db(t) {
        return Vi.call(t);
      }
      function Uf(t, o, a) {
        return o = wt(o === r ? t.length - 1 : o, 0), function() {
          for (var u = arguments, p = -1, b = wt(u.length - o, 0), x = k(b); ++p < b; )
            x[p] = u[o + p];
          p = -1;
          for (var T = k(o + 1); ++p < o; )
            T[p] = u[p];
          return T[o] = a(x), nn(t, this, T);
        };
      }
      function Vf(t, o) {
        return o.length < 2 ? t : Xr(t, wn(o, 0, -1));
      }
      function pb(t, o) {
        for (var a = t.length, u = Mt(o.length, a), p = Kt(t); u--; ) {
          var b = o[u];
          t[u] = dr(b, a) ? p[b] : r;
        }
        return t;
      }
      function hl(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var Kf = Gf(hf), li = Am || function(t, o) {
        return Ct.setTimeout(t, o);
      }, gl = Gf(B0);
      function jf(t, o, a) {
        var u = o + "";
        return gl(t, ob(u, vb(tb(u), a)));
      }
      function Gf(t) {
        var o = 0, a = 0;
        return function() {
          var u = Pm(), p = D - (u - a);
          if (a = u, p > 0) {
            if (++o >= U)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function ha(t, o) {
        var a = -1, u = t.length, p = u - 1;
        for (o = o === r ? u : o; ++a < o; ) {
          var b = Js(a, p), x = t[b];
          t[b] = t[a], t[a] = x;
        }
        return t.length = o, t;
      }
      var Yf = ub(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(rg, function(a, u, p, b) {
          o.push(p ? b.replace(fg, "$1") : u || a);
        }), o;
      });
      function Zn(t) {
        if (typeof t == "string" || an(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -ne ? "-0" : o;
      }
      function Qr(t) {
        if (t != null) {
          try {
            return Ui.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function vb(t, o) {
        return mn(Je, function(a) {
          var u = "_." + a[0];
          o & a[1] && !Di(t, u) && t.push(u);
        }), t.sort();
      }
      function Zf(t) {
        if (t instanceof Le)
          return t.clone();
        var o = new yn(t.__wrapped__, t.__chain__);
        return o.__actions__ = Kt(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function hb(t, o, a) {
        (a ? Nt(t, o, a) : o === r) ? o = 1 : o = wt(Ae(o), 0);
        var u = t == null ? 0 : t.length;
        if (!u || o < 1)
          return [];
        for (var p = 0, b = 0, x = k(Xi(u / o)); p < u; )
          x[b++] = wn(t, p, p += o);
        return x;
      }
      function gb(t) {
        for (var o = -1, a = t == null ? 0 : t.length, u = 0, p = []; ++o < a; ) {
          var b = t[o];
          b && (p[u++] = b);
        }
        return p;
      }
      function mb() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = k(t - 1), a = arguments[0], u = t; u--; )
          o[u - 1] = arguments[u];
        return Cr(Oe(a) ? Kt(a) : [a], At(o, 1));
      }
      var bb = Me(function(t, o) {
        return dt(t) ? ni(t, At(o, 1, dt, !0)) : [];
      }), yb = Me(function(t, o) {
        var a = En(o);
        return dt(a) && (a = r), dt(t) ? ni(t, At(o, 1, dt, !0), ge(a, 2)) : [];
      }), _b = Me(function(t, o) {
        var a = En(o);
        return dt(a) && (a = r), dt(t) ? ni(t, At(o, 1, dt, !0), r, a) : [];
      });
      function wb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ae(o), wn(t, o < 0 ? 0 : o, u)) : [];
      }
      function Eb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ae(o), o = u - o, wn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function Sb(t, o) {
        return t && t.length ? sa(t, ge(o, 3), !0, !0) : [];
      }
      function xb(t, o) {
        return t && t.length ? sa(t, ge(o, 3), !0) : [];
      }
      function Ob(t, o, a, u) {
        var p = t == null ? 0 : t.length;
        return p ? (a && typeof a != "number" && Nt(t, o, a) && (a = 0, u = p), m0(t, o, a, u)) : [];
      }
      function Xf(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = a == null ? 0 : Ae(a);
        return p < 0 && (p = wt(u + p, 0)), Wi(t, ge(o, 3), p);
      }
      function Jf(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = u - 1;
        return a !== r && (p = Ae(a), p = a < 0 ? wt(u + p, 0) : Mt(p, u - 1)), Wi(t, ge(o, 3), p, !0);
      }
      function Qf(t) {
        var o = t == null ? 0 : t.length;
        return o ? At(t, 1) : [];
      }
      function Tb(t) {
        var o = t == null ? 0 : t.length;
        return o ? At(t, ne) : [];
      }
      function Cb(t, o) {
        var a = t == null ? 0 : t.length;
        return a ? (o = o === r ? 1 : Ae(o), At(t, o)) : [];
      }
      function Ab(t) {
        for (var o = -1, a = t == null ? 0 : t.length, u = {}; ++o < a; ) {
          var p = t[o];
          u[p[0]] = p[1];
        }
        return u;
      }
      function ed(t) {
        return t && t.length ? t[0] : r;
      }
      function Ib(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = a == null ? 0 : Ae(a);
        return p < 0 && (p = wt(u + p, 0)), mo(t, o, p);
      }
      function $b(t) {
        var o = t == null ? 0 : t.length;
        return o ? wn(t, 0, -1) : [];
      }
      var Mb = Me(function(t) {
        var o = ot(t, rl);
        return o.length && o[0] === t[0] ? js(o) : [];
      }), Pb = Me(function(t) {
        var o = En(t), a = ot(t, rl);
        return o === En(a) ? o = r : a.pop(), a.length && a[0] === t[0] ? js(a, ge(o, 2)) : [];
      }), Rb = Me(function(t) {
        var o = En(t), a = ot(t, rl);
        return o = typeof o == "function" ? o : r, o && a.pop(), a.length && a[0] === t[0] ? js(a, r, o) : [];
      });
      function Lb(t, o) {
        return t == null ? "" : $m.call(t, o);
      }
      function En(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function Fb(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = u;
        return a !== r && (p = Ae(a), p = p < 0 ? wt(u + p, 0) : Mt(p, u - 1)), o === o ? vm(t, o, p) : Wi(t, Rc, p, !0);
      }
      function Bb(t, o) {
        return t && t.length ? ff(t, Ae(o)) : r;
      }
      var kb = Me(td);
      function td(t, o) {
        return t && t.length && o && o.length ? Xs(t, o) : t;
      }
      function Nb(t, o, a) {
        return t && t.length && o && o.length ? Xs(t, o, ge(a, 2)) : t;
      }
      function Db(t, o, a) {
        return t && t.length && o && o.length ? Xs(t, o, r, a) : t;
      }
      var Wb = fr(function(t, o) {
        var a = t == null ? 0 : t.length, u = qs(t, o);
        return vf(t, ot(o, function(p) {
          return dr(p, a) ? +p : p;
        }).sort(xf)), u;
      });
      function zb(t, o) {
        var a = [];
        if (!(t && t.length))
          return a;
        var u = -1, p = [], b = t.length;
        for (o = ge(o, 3); ++u < b; ) {
          var x = t[u];
          o(x, u, t) && (a.push(x), p.push(u));
        }
        return vf(t, p), a;
      }
      function ml(t) {
        return t == null ? t : Lm.call(t);
      }
      function Hb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && Nt(t, o, a) ? (o = 0, a = u) : (o = o == null ? 0 : Ae(o), a = a === r ? u : Ae(a)), wn(t, o, a)) : [];
      }
      function qb(t, o) {
        return aa(t, o);
      }
      function Ub(t, o, a) {
        return el(t, o, ge(a, 2));
      }
      function Vb(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var u = aa(t, o);
          if (u < a && Ln(t[u], o))
            return u;
        }
        return -1;
      }
      function Kb(t, o) {
        return aa(t, o, !0);
      }
      function jb(t, o, a) {
        return el(t, o, ge(a, 2), !0);
      }
      function Gb(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var u = aa(t, o, !0) - 1;
          if (Ln(t[u], o))
            return u;
        }
        return -1;
      }
      function Yb(t) {
        return t && t.length ? gf(t) : [];
      }
      function Zb(t, o) {
        return t && t.length ? gf(t, ge(o, 2)) : [];
      }
      function Xb(t) {
        var o = t == null ? 0 : t.length;
        return o ? wn(t, 1, o) : [];
      }
      function Jb(t, o, a) {
        return t && t.length ? (o = a || o === r ? 1 : Ae(o), wn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function Qb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ae(o), o = u - o, wn(t, o < 0 ? 0 : o, u)) : [];
      }
      function ey(t, o) {
        return t && t.length ? sa(t, ge(o, 3), !1, !0) : [];
      }
      function ty(t, o) {
        return t && t.length ? sa(t, ge(o, 3)) : [];
      }
      var ny = Me(function(t) {
        return Mr(At(t, 1, dt, !0));
      }), ry = Me(function(t) {
        var o = En(t);
        return dt(o) && (o = r), Mr(At(t, 1, dt, !0), ge(o, 2));
      }), oy = Me(function(t) {
        var o = En(t);
        return o = typeof o == "function" ? o : r, Mr(At(t, 1, dt, !0), r, o);
      });
      function iy(t) {
        return t && t.length ? Mr(t) : [];
      }
      function ay(t, o) {
        return t && t.length ? Mr(t, ge(o, 2)) : [];
      }
      function sy(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? Mr(t, r, o) : [];
      }
      function bl(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = Tr(t, function(a) {
          if (dt(a))
            return o = wt(a.length, o), !0;
        }), Fs(o, function(a) {
          return ot(t, Ps(a));
        });
      }
      function nd(t, o) {
        if (!(t && t.length))
          return [];
        var a = bl(t);
        return o == null ? a : ot(a, function(u) {
          return nn(o, r, u);
        });
      }
      var ly = Me(function(t, o) {
        return dt(t) ? ni(t, o) : [];
      }), uy = Me(function(t) {
        return nl(Tr(t, dt));
      }), cy = Me(function(t) {
        var o = En(t);
        return dt(o) && (o = r), nl(Tr(t, dt), ge(o, 2));
      }), fy = Me(function(t) {
        var o = En(t);
        return o = typeof o == "function" ? o : r, nl(Tr(t, dt), r, o);
      }), dy = Me(bl);
      function py(t, o) {
        return _f(t || [], o || [], ti);
      }
      function vy(t, o) {
        return _f(t || [], o || [], ii);
      }
      var hy = Me(function(t) {
        var o = t.length, a = o > 1 ? t[o - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, nd(t, a);
      });
      function rd(t) {
        var o = m(t);
        return o.__chain__ = !0, o;
      }
      function gy(t, o) {
        return o(t), t;
      }
      function ga(t, o) {
        return o(t);
      }
      var my = fr(function(t) {
        var o = t.length, a = o ? t[0] : 0, u = this.__wrapped__, p = function(b) {
          return qs(b, t);
        };
        return o > 1 || this.__actions__.length || !(u instanceof Le) || !dr(a) ? this.thru(p) : (u = u.slice(a, +a + (o ? 1 : 0)), u.__actions__.push({
          func: ga,
          args: [p],
          thisArg: r
        }), new yn(u, this.__chain__).thru(function(b) {
          return o && !b.length && b.push(r), b;
        }));
      });
      function by() {
        return rd(this);
      }
      function yy() {
        return new yn(this.value(), this.__chain__);
      }
      function _y() {
        this.__values__ === r && (this.__values__ = md(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function wy() {
        return this;
      }
      function Ey(t) {
        for (var o, a = this; a instanceof ta; ) {
          var u = Zf(a);
          u.__index__ = 0, u.__values__ = r, o ? p.__wrapped__ = u : o = u;
          var p = u;
          a = a.__wrapped__;
        }
        return p.__wrapped__ = t, o;
      }
      function Sy() {
        var t = this.__wrapped__;
        if (t instanceof Le) {
          var o = t;
          return this.__actions__.length && (o = new Le(this)), o = o.reverse(), o.__actions__.push({
            func: ga,
            args: [ml],
            thisArg: r
          }), new yn(o, this.__chain__);
        }
        return this.thru(ml);
      }
      function xy() {
        return yf(this.__wrapped__, this.__actions__);
      }
      var Oy = la(function(t, o, a) {
        je.call(t, a) ? ++t[a] : ur(t, a, 1);
      });
      function Ty(t, o, a) {
        var u = Oe(t) ? Mc : g0;
        return a && Nt(t, o, a) && (o = r), u(t, ge(o, 3));
      }
      function Cy(t, o) {
        var a = Oe(t) ? Tr : tf;
        return a(t, ge(o, 3));
      }
      var Ay = $f(Xf), Iy = $f(Jf);
      function $y(t, o) {
        return At(ma(t, o), 1);
      }
      function My(t, o) {
        return At(ma(t, o), ne);
      }
      function Py(t, o, a) {
        return a = a === r ? 1 : Ae(a), At(ma(t, o), a);
      }
      function od(t, o) {
        var a = Oe(t) ? mn : $r;
        return a(t, ge(o, 3));
      }
      function id(t, o) {
        var a = Oe(t) ? Xg : ef;
        return a(t, ge(o, 3));
      }
      var Ry = la(function(t, o, a) {
        je.call(t, a) ? t[a].push(o) : ur(t, a, [o]);
      });
      function Ly(t, o, a, u) {
        t = jt(t) ? t : Io(t), a = a && !u ? Ae(a) : 0;
        var p = t.length;
        return a < 0 && (a = wt(p + a, 0)), Ea(t) ? a <= p && t.indexOf(o, a) > -1 : !!p && mo(t, o, a) > -1;
      }
      var Fy = Me(function(t, o, a) {
        var u = -1, p = typeof o == "function", b = jt(t) ? k(t.length) : [];
        return $r(t, function(x) {
          b[++u] = p ? nn(o, x, a) : ri(x, o, a);
        }), b;
      }), By = la(function(t, o, a) {
        ur(t, a, o);
      });
      function ma(t, o) {
        var a = Oe(t) ? ot : lf;
        return a(t, ge(o, 3));
      }
      function ky(t, o, a, u) {
        return t == null ? [] : (Oe(o) || (o = o == null ? [] : [o]), a = u ? r : a, Oe(a) || (a = a == null ? [] : [a]), df(t, o, a));
      }
      var Ny = la(function(t, o, a) {
        t[a ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function Dy(t, o, a) {
        var u = Oe(t) ? $s : Fc, p = arguments.length < 3;
        return u(t, ge(o, 4), a, p, $r);
      }
      function Wy(t, o, a) {
        var u = Oe(t) ? Jg : Fc, p = arguments.length < 3;
        return u(t, ge(o, 4), a, p, ef);
      }
      function zy(t, o) {
        var a = Oe(t) ? Tr : tf;
        return a(t, _a(ge(o, 3)));
      }
      function Hy(t) {
        var o = Oe(t) ? Zc : L0;
        return o(t);
      }
      function qy(t, o, a) {
        (a ? Nt(t, o, a) : o === r) ? o = 1 : o = Ae(o);
        var u = Oe(t) ? f0 : F0;
        return u(t, o);
      }
      function Uy(t) {
        var o = Oe(t) ? d0 : k0;
        return o(t);
      }
      function Vy(t) {
        if (t == null)
          return 0;
        if (jt(t))
          return Ea(t) ? yo(t) : t.length;
        var o = Pt(t);
        return o == mt || o == _e ? t.size : Ys(t).length;
      }
      function Ky(t, o, a) {
        var u = Oe(t) ? Ms : N0;
        return a && Nt(t, o, a) && (o = r), u(t, ge(o, 3));
      }
      var jy = Me(function(t, o) {
        if (t == null)
          return [];
        var a = o.length;
        return a > 1 && Nt(t, o[0], o[1]) ? o = [] : a > 2 && Nt(o[0], o[1], o[2]) && (o = [o[0]]), df(t, At(o, 1), []);
      }), ba = Cm || function() {
        return Ct.Date.now();
      };
      function Gy(t, o) {
        if (typeof o != "function")
          throw new bn(c);
        return t = Ae(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function ad(t, o, a) {
        return o = a ? r : o, o = t && o == null ? t.length : o, cr(t, R, r, r, r, r, o);
      }
      function sd(t, o) {
        var a;
        if (typeof o != "function")
          throw new bn(c);
        return t = Ae(t), function() {
          return --t > 0 && (a = o.apply(this, arguments)), t <= 1 && (o = r), a;
        };
      }
      var yl = Me(function(t, o, a) {
        var u = O;
        if (a.length) {
          var p = Ar(a, Co(yl));
          u |= $;
        }
        return cr(t, u, o, a, p);
      }), ld = Me(function(t, o, a) {
        var u = O | A;
        if (a.length) {
          var p = Ar(a, Co(ld));
          u |= $;
        }
        return cr(o, u, t, a, p);
      });
      function ud(t, o, a) {
        o = a ? r : o;
        var u = cr(t, C, r, r, r, r, r, o);
        return u.placeholder = ud.placeholder, u;
      }
      function cd(t, o, a) {
        o = a ? r : o;
        var u = cr(t, F, r, r, r, r, r, o);
        return u.placeholder = cd.placeholder, u;
      }
      function fd(t, o, a) {
        var u, p, b, x, T, M, H = 0, q = !1, Y = !1, te = !0;
        if (typeof t != "function")
          throw new bn(c);
        o = Sn(o) || 0, it(a) && (q = !!a.leading, Y = "maxWait" in a, b = Y ? wt(Sn(a.maxWait) || 0, o) : b, te = "trailing" in a ? !!a.trailing : te);
        function se(pt) {
          var Fn = u, hr = p;
          return u = p = r, H = pt, x = t.apply(hr, Fn), x;
        }
        function be(pt) {
          return H = pt, T = li(Re, o), q ? se(pt) : x;
        }
        function $e(pt) {
          var Fn = pt - M, hr = pt - H, $d = o - Fn;
          return Y ? Mt($d, b - hr) : $d;
        }
        function ye(pt) {
          var Fn = pt - M, hr = pt - H;
          return M === r || Fn >= o || Fn < 0 || Y && hr >= b;
        }
        function Re() {
          var pt = ba();
          if (ye(pt))
            return ke(pt);
          T = li(Re, $e(pt));
        }
        function ke(pt) {
          return T = r, te && u ? se(pt) : (u = p = r, x);
        }
        function sn() {
          T !== r && wf(T), H = 0, u = M = p = T = r;
        }
        function Dt() {
          return T === r ? x : ke(ba());
        }
        function ln() {
          var pt = ba(), Fn = ye(pt);
          if (u = arguments, p = this, M = pt, Fn) {
            if (T === r)
              return be(M);
            if (Y)
              return wf(T), T = li(Re, o), se(M);
          }
          return T === r && (T = li(Re, o)), x;
        }
        return ln.cancel = sn, ln.flush = Dt, ln;
      }
      var Yy = Me(function(t, o) {
        return Qc(t, 1, o);
      }), Zy = Me(function(t, o, a) {
        return Qc(t, Sn(o) || 0, a);
      });
      function Xy(t) {
        return cr(t, Z);
      }
      function ya(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new bn(c);
        var a = function() {
          var u = arguments, p = o ? o.apply(this, u) : u[0], b = a.cache;
          if (b.has(p))
            return b.get(p);
          var x = t.apply(this, u);
          return a.cache = b.set(p, x) || b, x;
        };
        return a.cache = new (ya.Cache || lr)(), a;
      }
      ya.Cache = lr;
      function _a(t) {
        if (typeof t != "function")
          throw new bn(c);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, o[0]);
            case 2:
              return !t.call(this, o[0], o[1]);
            case 3:
              return !t.call(this, o[0], o[1], o[2]);
          }
          return !t.apply(this, o);
        };
      }
      function Jy(t) {
        return sd(2, t);
      }
      var Qy = D0(function(t, o) {
        o = o.length == 1 && Oe(o[0]) ? ot(o[0], rn(ge())) : ot(At(o, 1), rn(ge()));
        var a = o.length;
        return Me(function(u) {
          for (var p = -1, b = Mt(u.length, a); ++p < b; )
            u[p] = o[p].call(this, u[p]);
          return nn(t, this, u);
        });
      }), _l = Me(function(t, o) {
        var a = Ar(o, Co(_l));
        return cr(t, $, r, o, a);
      }), dd = Me(function(t, o) {
        var a = Ar(o, Co(dd));
        return cr(t, P, r, o, a);
      }), e1 = fr(function(t, o) {
        return cr(t, z, r, r, r, o);
      });
      function t1(t, o) {
        if (typeof t != "function")
          throw new bn(c);
        return o = o === r ? o : Ae(o), Me(t, o);
      }
      function n1(t, o) {
        if (typeof t != "function")
          throw new bn(c);
        return o = o == null ? 0 : wt(Ae(o), 0), Me(function(a) {
          var u = a[o], p = Rr(a, 0, o);
          return u && Cr(p, u), nn(t, this, p);
        });
      }
      function r1(t, o, a) {
        var u = !0, p = !0;
        if (typeof t != "function")
          throw new bn(c);
        return it(a) && (u = "leading" in a ? !!a.leading : u, p = "trailing" in a ? !!a.trailing : p), fd(t, o, {
          leading: u,
          maxWait: o,
          trailing: p
        });
      }
      function o1(t) {
        return ad(t, 1);
      }
      function i1(t, o) {
        return _l(ol(o), t);
      }
      function a1() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Oe(t) ? t : [t];
      }
      function s1(t) {
        return _n(t, S);
      }
      function l1(t, o) {
        return o = typeof o == "function" ? o : r, _n(t, S, o);
      }
      function u1(t) {
        return _n(t, _ | S);
      }
      function c1(t, o) {
        return o = typeof o == "function" ? o : r, _n(t, _ | S, o);
      }
      function f1(t, o) {
        return o == null || Jc(t, o, xt(o));
      }
      function Ln(t, o) {
        return t === o || t !== t && o !== o;
      }
      var d1 = da(Ks), p1 = da(function(t, o) {
        return t >= o;
      }), eo = of(function() {
        return arguments;
      }()) ? of : function(t) {
        return lt(t) && je.call(t, "callee") && !Uc.call(t, "callee");
      }, Oe = k.isArray, v1 = Oc ? rn(Oc) : E0;
      function jt(t) {
        return t != null && wa(t.length) && !pr(t);
      }
      function dt(t) {
        return lt(t) && jt(t);
      }
      function h1(t) {
        return t === !0 || t === !1 || lt(t) && kt(t) == ve;
      }
      var Lr = Im || Ml, g1 = Tc ? rn(Tc) : S0;
      function m1(t) {
        return lt(t) && t.nodeType === 1 && !ui(t);
      }
      function b1(t) {
        if (t == null)
          return !0;
        if (jt(t) && (Oe(t) || typeof t == "string" || typeof t.splice == "function" || Lr(t) || Ao(t) || eo(t)))
          return !t.length;
        var o = Pt(t);
        if (o == mt || o == _e)
          return !t.size;
        if (si(t))
          return !Ys(t).length;
        for (var a in t)
          if (je.call(t, a))
            return !1;
        return !0;
      }
      function y1(t, o) {
        return oi(t, o);
      }
      function _1(t, o, a) {
        a = typeof a == "function" ? a : r;
        var u = a ? a(t, o) : r;
        return u === r ? oi(t, o, r, a) : !!u;
      }
      function wl(t) {
        if (!lt(t))
          return !1;
        var o = kt(t);
        return o == Ye || o == Ue || typeof t.message == "string" && typeof t.name == "string" && !ui(t);
      }
      function w1(t) {
        return typeof t == "number" && Kc(t);
      }
      function pr(t) {
        if (!it(t))
          return !1;
        var o = kt(t);
        return o == rt || o == pn || o == ae || o == Ft;
      }
      function pd(t) {
        return typeof t == "number" && t == Ae(t);
      }
      function wa(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fe;
      }
      function it(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function lt(t) {
        return t != null && typeof t == "object";
      }
      var vd = Cc ? rn(Cc) : O0;
      function E1(t, o) {
        return t === o || Gs(t, o, fl(o));
      }
      function S1(t, o, a) {
        return a = typeof a == "function" ? a : r, Gs(t, o, fl(o), a);
      }
      function x1(t) {
        return hd(t) && t != +t;
      }
      function O1(t) {
        if (lb(t))
          throw new Ee(l);
        return af(t);
      }
      function T1(t) {
        return t === null;
      }
      function C1(t) {
        return t == null;
      }
      function hd(t) {
        return typeof t == "number" || lt(t) && kt(t) == Qt;
      }
      function ui(t) {
        if (!lt(t) || kt(t) != yt)
          return !1;
        var o = Gi(t);
        if (o === null)
          return !0;
        var a = je.call(o, "constructor") && o.constructor;
        return typeof a == "function" && a instanceof a && Ui.call(a) == Sm;
      }
      var El = Ac ? rn(Ac) : T0;
      function A1(t) {
        return pd(t) && t >= -fe && t <= fe;
      }
      var gd = Ic ? rn(Ic) : C0;
      function Ea(t) {
        return typeof t == "string" || !Oe(t) && lt(t) && kt(t) == st;
      }
      function an(t) {
        return typeof t == "symbol" || lt(t) && kt(t) == Bt;
      }
      var Ao = $c ? rn($c) : A0;
      function I1(t) {
        return t === r;
      }
      function $1(t) {
        return lt(t) && Pt(t) == en;
      }
      function M1(t) {
        return lt(t) && kt(t) == ir;
      }
      var P1 = da(Zs), R1 = da(function(t, o) {
        return t <= o;
      });
      function md(t) {
        if (!t)
          return [];
        if (jt(t))
          return Ea(t) ? Pn(t) : Kt(t);
        if (Zo && t[Zo])
          return fm(t[Zo]());
        var o = Pt(t), a = o == mt ? ks : o == _e ? zi : Io;
        return a(t);
      }
      function vr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Sn(t), t === ne || t === -ne) {
          var o = t < 0 ? -1 : 1;
          return o * he;
        }
        return t === t ? t : 0;
      }
      function Ae(t) {
        var o = vr(t), a = o % 1;
        return o === o ? a ? o - a : o : 0;
      }
      function bd(t) {
        return t ? Zr(Ae(t), 0, xe) : 0;
      }
      function Sn(t) {
        if (typeof t == "number")
          return t;
        if (an(t))
          return Se;
        if (it(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = it(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Bc(t);
        var a = vg.test(t);
        return a || gg.test(t) ? Gg(t.slice(2), a ? 2 : 8) : pg.test(t) ? Se : +t;
      }
      function yd(t) {
        return Yn(t, Gt(t));
      }
      function L1(t) {
        return t ? Zr(Ae(t), -fe, fe) : t === 0 ? t : 0;
      }
      function Ve(t) {
        return t == null ? "" : on(t);
      }
      var F1 = Oo(function(t, o) {
        if (si(o) || jt(o)) {
          Yn(o, xt(o), t);
          return;
        }
        for (var a in o)
          je.call(o, a) && ti(t, a, o[a]);
      }), _d = Oo(function(t, o) {
        Yn(o, Gt(o), t);
      }), Sa = Oo(function(t, o, a, u) {
        Yn(o, Gt(o), t, u);
      }), B1 = Oo(function(t, o, a, u) {
        Yn(o, xt(o), t, u);
      }), k1 = fr(qs);
      function N1(t, o) {
        var a = xo(t);
        return o == null ? a : Xc(a, o);
      }
      var D1 = Me(function(t, o) {
        t = Ge(t);
        var a = -1, u = o.length, p = u > 2 ? o[2] : r;
        for (p && Nt(o[0], o[1], p) && (u = 1); ++a < u; )
          for (var b = o[a], x = Gt(b), T = -1, M = x.length; ++T < M; ) {
            var H = x[T], q = t[H];
            (q === r || Ln(q, wo[H]) && !je.call(t, H)) && (t[H] = b[H]);
          }
        return t;
      }), W1 = Me(function(t) {
        return t.push(r, kf), nn(wd, r, t);
      });
      function z1(t, o) {
        return Pc(t, ge(o, 3), Gn);
      }
      function H1(t, o) {
        return Pc(t, ge(o, 3), Vs);
      }
      function q1(t, o) {
        return t == null ? t : Us(t, ge(o, 3), Gt);
      }
      function U1(t, o) {
        return t == null ? t : nf(t, ge(o, 3), Gt);
      }
      function V1(t, o) {
        return t && Gn(t, ge(o, 3));
      }
      function K1(t, o) {
        return t && Vs(t, ge(o, 3));
      }
      function j1(t) {
        return t == null ? [] : oa(t, xt(t));
      }
      function G1(t) {
        return t == null ? [] : oa(t, Gt(t));
      }
      function Sl(t, o, a) {
        var u = t == null ? r : Xr(t, o);
        return u === r ? a : u;
      }
      function Y1(t, o) {
        return t != null && Wf(t, o, b0);
      }
      function xl(t, o) {
        return t != null && Wf(t, o, y0);
      }
      var Z1 = Pf(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Vi.call(o)), t[o] = a;
      }, Tl(Yt)), X1 = Pf(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Vi.call(o)), je.call(t, o) ? t[o].push(a) : t[o] = [a];
      }, ge), J1 = Me(ri);
      function xt(t) {
        return jt(t) ? Yc(t) : Ys(t);
      }
      function Gt(t) {
        return jt(t) ? Yc(t, !0) : I0(t);
      }
      function Q1(t, o) {
        var a = {};
        return o = ge(o, 3), Gn(t, function(u, p, b) {
          ur(a, o(u, p, b), u);
        }), a;
      }
      function e_(t, o) {
        var a = {};
        return o = ge(o, 3), Gn(t, function(u, p, b) {
          ur(a, p, o(u, p, b));
        }), a;
      }
      var t_ = Oo(function(t, o, a) {
        ia(t, o, a);
      }), wd = Oo(function(t, o, a, u) {
        ia(t, o, a, u);
      }), n_ = fr(function(t, o) {
        var a = {};
        if (t == null)
          return a;
        var u = !1;
        o = ot(o, function(b) {
          return b = Pr(b, t), u || (u = b.length > 1), b;
        }), Yn(t, ul(t), a), u && (a = _n(a, _ | E | S, Z0));
        for (var p = o.length; p--; )
          tl(a, o[p]);
        return a;
      });
      function r_(t, o) {
        return Ed(t, _a(ge(o)));
      }
      var o_ = fr(function(t, o) {
        return t == null ? {} : M0(t, o);
      });
      function Ed(t, o) {
        if (t == null)
          return {};
        var a = ot(ul(t), function(u) {
          return [u];
        });
        return o = ge(o), pf(t, a, function(u, p) {
          return o(u, p[0]);
        });
      }
      function i_(t, o, a) {
        o = Pr(o, t);
        var u = -1, p = o.length;
        for (p || (p = 1, t = r); ++u < p; ) {
          var b = t == null ? r : t[Zn(o[u])];
          b === r && (u = p, b = a), t = pr(b) ? b.call(t) : b;
        }
        return t;
      }
      function a_(t, o, a) {
        return t == null ? t : ii(t, o, a);
      }
      function s_(t, o, a, u) {
        return u = typeof u == "function" ? u : r, t == null ? t : ii(t, o, a, u);
      }
      var Sd = Ff(xt), xd = Ff(Gt);
      function l_(t, o, a) {
        var u = Oe(t), p = u || Lr(t) || Ao(t);
        if (o = ge(o, 4), a == null) {
          var b = t && t.constructor;
          p ? a = u ? new b() : [] : it(t) ? a = pr(b) ? xo(Gi(t)) : {} : a = {};
        }
        return (p ? mn : Gn)(t, function(x, T, M) {
          return o(a, x, T, M);
        }), a;
      }
      function u_(t, o) {
        return t == null ? !0 : tl(t, o);
      }
      function c_(t, o, a) {
        return t == null ? t : bf(t, o, ol(a));
      }
      function f_(t, o, a, u) {
        return u = typeof u == "function" ? u : r, t == null ? t : bf(t, o, ol(a), u);
      }
      function Io(t) {
        return t == null ? [] : Bs(t, xt(t));
      }
      function d_(t) {
        return t == null ? [] : Bs(t, Gt(t));
      }
      function p_(t, o, a) {
        return a === r && (a = o, o = r), a !== r && (a = Sn(a), a = a === a ? a : 0), o !== r && (o = Sn(o), o = o === o ? o : 0), Zr(Sn(t), o, a);
      }
      function v_(t, o, a) {
        return o = vr(o), a === r ? (a = o, o = 0) : a = vr(a), t = Sn(t), _0(t, o, a);
      }
      function h_(t, o, a) {
        if (a && typeof a != "boolean" && Nt(t, o, a) && (o = a = r), a === r && (typeof o == "boolean" ? (a = o, o = r) : typeof t == "boolean" && (a = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = vr(t), o === r ? (o = t, t = 0) : o = vr(o)), t > o) {
          var u = t;
          t = o, o = u;
        }
        if (a || t % 1 || o % 1) {
          var p = jc();
          return Mt(t + p * (o - t + jg("1e-" + ((p + "").length - 1))), o);
        }
        return Js(t, o);
      }
      var g_ = To(function(t, o, a) {
        return o = o.toLowerCase(), t + (a ? Od(o) : o);
      });
      function Od(t) {
        return Ol(Ve(t).toLowerCase());
      }
      function Td(t) {
        return t = Ve(t), t && t.replace(bg, am).replace(kg, "");
      }
      function m_(t, o, a) {
        t = Ve(t), o = on(o);
        var u = t.length;
        a = a === r ? u : Zr(Ae(a), 0, u);
        var p = a;
        return a -= o.length, a >= 0 && t.slice(a, p) == o;
      }
      function b_(t) {
        return t = Ve(t), t && Jh.test(t) ? t.replace(Vt, sm) : t;
      }
      function y_(t) {
        return t = Ve(t), t && og.test(t) ? t.replace(_s, "\\$&") : t;
      }
      var __ = To(function(t, o, a) {
        return t + (a ? "-" : "") + o.toLowerCase();
      }), w_ = To(function(t, o, a) {
        return t + (a ? " " : "") + o.toLowerCase();
      }), E_ = If("toLowerCase");
      function S_(t, o, a) {
        t = Ve(t), o = Ae(o);
        var u = o ? yo(t) : 0;
        if (!o || u >= o)
          return t;
        var p = (o - u) / 2;
        return fa(Ji(p), a) + t + fa(Xi(p), a);
      }
      function x_(t, o, a) {
        t = Ve(t), o = Ae(o);
        var u = o ? yo(t) : 0;
        return o && u < o ? t + fa(o - u, a) : t;
      }
      function O_(t, o, a) {
        t = Ve(t), o = Ae(o);
        var u = o ? yo(t) : 0;
        return o && u < o ? fa(o - u, a) + t : t;
      }
      function T_(t, o, a) {
        return a || o == null ? o = 0 : o && (o = +o), Rm(Ve(t).replace(ws, ""), o || 0);
      }
      function C_(t, o, a) {
        return (a ? Nt(t, o, a) : o === r) ? o = 1 : o = Ae(o), Qs(Ve(t), o);
      }
      function A_() {
        var t = arguments, o = Ve(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var I_ = To(function(t, o, a) {
        return t + (a ? "_" : "") + o.toLowerCase();
      });
      function $_(t, o, a) {
        return a && typeof a != "number" && Nt(t, o, a) && (o = a = r), a = a === r ? xe : a >>> 0, a ? (t = Ve(t), t && (typeof o == "string" || o != null && !El(o)) && (o = on(o), !o && bo(t)) ? Rr(Pn(t), 0, a) : t.split(o, a)) : [];
      }
      var M_ = To(function(t, o, a) {
        return t + (a ? " " : "") + Ol(o);
      });
      function P_(t, o, a) {
        return t = Ve(t), a = a == null ? 0 : Zr(Ae(a), 0, t.length), o = on(o), t.slice(a, a + o.length) == o;
      }
      function R_(t, o, a) {
        var u = m.templateSettings;
        a && Nt(t, o, a) && (o = r), t = Ve(t), o = Sa({}, o, u, Bf);
        var p = Sa({}, o.imports, u.imports, Bf), b = xt(p), x = Bs(p, b), T, M, H = 0, q = o.interpolate || Bi, Y = "__p += '", te = Ns(
          (o.escape || Bi).source + "|" + q.source + "|" + (q === rc ? dg : Bi).source + "|" + (o.evaluate || Bi).source + "|$",
          "g"
        ), se = "//# sourceURL=" + (je.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Hg + "]") + `
`;
        t.replace(te, function(ye, Re, ke, sn, Dt, ln) {
          return ke || (ke = sn), Y += t.slice(H, ln).replace(yg, lm), Re && (T = !0, Y += `' +
__e(` + Re + `) +
'`), Dt && (M = !0, Y += `';
` + Dt + `;
__p += '`), ke && (Y += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), H = ln + ye.length, ye;
        }), Y += `';
`;
        var be = je.call(o, "variable") && o.variable;
        if (!be)
          Y = `with (obj) {
` + Y + `
}
`;
        else if (cg.test(be))
          throw new Ee(f);
        Y = (M ? Y.replace(jn, "") : Y).replace(Mn, "$1").replace(Ut, "$1;"), Y = "function(" + (be || "obj") + `) {
` + (be ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
        var $e = Ad(function() {
          return ze(b, se + "return " + Y).apply(r, x);
        });
        if ($e.source = Y, wl($e))
          throw $e;
        return $e;
      }
      function L_(t) {
        return Ve(t).toLowerCase();
      }
      function F_(t) {
        return Ve(t).toUpperCase();
      }
      function B_(t, o, a) {
        if (t = Ve(t), t && (a || o === r))
          return Bc(t);
        if (!t || !(o = on(o)))
          return t;
        var u = Pn(t), p = Pn(o), b = kc(u, p), x = Nc(u, p) + 1;
        return Rr(u, b, x).join("");
      }
      function k_(t, o, a) {
        if (t = Ve(t), t && (a || o === r))
          return t.slice(0, Wc(t) + 1);
        if (!t || !(o = on(o)))
          return t;
        var u = Pn(t), p = Nc(u, Pn(o)) + 1;
        return Rr(u, 0, p).join("");
      }
      function N_(t, o, a) {
        if (t = Ve(t), t && (a || o === r))
          return t.replace(ws, "");
        if (!t || !(o = on(o)))
          return t;
        var u = Pn(t), p = kc(u, Pn(o));
        return Rr(u, p).join("");
      }
      function D_(t, o) {
        var a = j, u = K;
        if (it(o)) {
          var p = "separator" in o ? o.separator : p;
          a = "length" in o ? Ae(o.length) : a, u = "omission" in o ? on(o.omission) : u;
        }
        t = Ve(t);
        var b = t.length;
        if (bo(t)) {
          var x = Pn(t);
          b = x.length;
        }
        if (a >= b)
          return t;
        var T = a - yo(u);
        if (T < 1)
          return u;
        var M = x ? Rr(x, 0, T).join("") : t.slice(0, T);
        if (p === r)
          return M + u;
        if (x && (T += M.length - T), El(p)) {
          if (t.slice(T).search(p)) {
            var H, q = M;
            for (p.global || (p = Ns(p.source, Ve(oc.exec(p)) + "g")), p.lastIndex = 0; H = p.exec(q); )
              var Y = H.index;
            M = M.slice(0, Y === r ? T : Y);
          }
        } else if (t.indexOf(on(p), T) != T) {
          var te = M.lastIndexOf(p);
          te > -1 && (M = M.slice(0, te));
        }
        return M + u;
      }
      function W_(t) {
        return t = Ve(t), t && ar.test(t) ? t.replace(Vr, hm) : t;
      }
      var z_ = To(function(t, o, a) {
        return t + (a ? " " : "") + o.toUpperCase();
      }), Ol = If("toUpperCase");
      function Cd(t, o, a) {
        return t = Ve(t), o = a ? r : o, o === r ? cm(t) ? bm(t) : tm(t) : t.match(o) || [];
      }
      var Ad = Me(function(t, o) {
        try {
          return nn(t, r, o);
        } catch (a) {
          return wl(a) ? a : new Ee(a);
        }
      }), H_ = fr(function(t, o) {
        return mn(o, function(a) {
          a = Zn(a), ur(t, a, yl(t[a], t));
        }), t;
      });
      function q_(t) {
        var o = t == null ? 0 : t.length, a = ge();
        return t = o ? ot(t, function(u) {
          if (typeof u[1] != "function")
            throw new bn(c);
          return [a(u[0]), u[1]];
        }) : [], Me(function(u) {
          for (var p = -1; ++p < o; ) {
            var b = t[p];
            if (nn(b[0], this, u))
              return nn(b[1], this, u);
          }
        });
      }
      function U_(t) {
        return h0(_n(t, _));
      }
      function Tl(t) {
        return function() {
          return t;
        };
      }
      function V_(t, o) {
        return t == null || t !== t ? o : t;
      }
      var K_ = Mf(), j_ = Mf(!0);
      function Yt(t) {
        return t;
      }
      function Cl(t) {
        return sf(typeof t == "function" ? t : _n(t, _));
      }
      function G_(t) {
        return uf(_n(t, _));
      }
      function Y_(t, o) {
        return cf(t, _n(o, _));
      }
      var Z_ = Me(function(t, o) {
        return function(a) {
          return ri(a, t, o);
        };
      }), X_ = Me(function(t, o) {
        return function(a) {
          return ri(t, a, o);
        };
      });
      function Al(t, o, a) {
        var u = xt(o), p = oa(o, u);
        a == null && !(it(o) && (p.length || !u.length)) && (a = o, o = t, t = this, p = oa(o, xt(o)));
        var b = !(it(a) && "chain" in a) || !!a.chain, x = pr(t);
        return mn(p, function(T) {
          var M = o[T];
          t[T] = M, x && (t.prototype[T] = function() {
            var H = this.__chain__;
            if (b || H) {
              var q = t(this.__wrapped__), Y = q.__actions__ = Kt(this.__actions__);
              return Y.push({ func: M, args: arguments, thisArg: t }), q.__chain__ = H, q;
            }
            return M.apply(t, Cr([this.value()], arguments));
          });
        }), t;
      }
      function J_() {
        return Ct._ === this && (Ct._ = xm), this;
      }
      function Il() {
      }
      function Q_(t) {
        return t = Ae(t), Me(function(o) {
          return ff(o, t);
        });
      }
      var ew = al(ot), tw = al(Mc), nw = al(Ms);
      function Id(t) {
        return pl(t) ? Ps(Zn(t)) : P0(t);
      }
      function rw(t) {
        return function(o) {
          return t == null ? r : Xr(t, o);
        };
      }
      var ow = Rf(), iw = Rf(!0);
      function $l() {
        return [];
      }
      function Ml() {
        return !1;
      }
      function aw() {
        return {};
      }
      function sw() {
        return "";
      }
      function lw() {
        return !0;
      }
      function uw(t, o) {
        if (t = Ae(t), t < 1 || t > fe)
          return [];
        var a = xe, u = Mt(t, xe);
        o = ge(o), t -= xe;
        for (var p = Fs(u, o); ++a < t; )
          o(a);
        return p;
      }
      function cw(t) {
        return Oe(t) ? ot(t, Zn) : an(t) ? [t] : Kt(Yf(Ve(t)));
      }
      function fw(t) {
        var o = ++Em;
        return Ve(t) + o;
      }
      var dw = ca(function(t, o) {
        return t + o;
      }, 0), pw = sl("ceil"), vw = ca(function(t, o) {
        return t / o;
      }, 1), hw = sl("floor");
      function gw(t) {
        return t && t.length ? ra(t, Yt, Ks) : r;
      }
      function mw(t, o) {
        return t && t.length ? ra(t, ge(o, 2), Ks) : r;
      }
      function bw(t) {
        return Lc(t, Yt);
      }
      function yw(t, o) {
        return Lc(t, ge(o, 2));
      }
      function _w(t) {
        return t && t.length ? ra(t, Yt, Zs) : r;
      }
      function ww(t, o) {
        return t && t.length ? ra(t, ge(o, 2), Zs) : r;
      }
      var Ew = ca(function(t, o) {
        return t * o;
      }, 1), Sw = sl("round"), xw = ca(function(t, o) {
        return t - o;
      }, 0);
      function Ow(t) {
        return t && t.length ? Ls(t, Yt) : 0;
      }
      function Tw(t, o) {
        return t && t.length ? Ls(t, ge(o, 2)) : 0;
      }
      return m.after = Gy, m.ary = ad, m.assign = F1, m.assignIn = _d, m.assignInWith = Sa, m.assignWith = B1, m.at = k1, m.before = sd, m.bind = yl, m.bindAll = H_, m.bindKey = ld, m.castArray = a1, m.chain = rd, m.chunk = hb, m.compact = gb, m.concat = mb, m.cond = q_, m.conforms = U_, m.constant = Tl, m.countBy = Oy, m.create = N1, m.curry = ud, m.curryRight = cd, m.debounce = fd, m.defaults = D1, m.defaultsDeep = W1, m.defer = Yy, m.delay = Zy, m.difference = bb, m.differenceBy = yb, m.differenceWith = _b, m.drop = wb, m.dropRight = Eb, m.dropRightWhile = Sb, m.dropWhile = xb, m.fill = Ob, m.filter = Cy, m.flatMap = $y, m.flatMapDeep = My, m.flatMapDepth = Py, m.flatten = Qf, m.flattenDeep = Tb, m.flattenDepth = Cb, m.flip = Xy, m.flow = K_, m.flowRight = j_, m.fromPairs = Ab, m.functions = j1, m.functionsIn = G1, m.groupBy = Ry, m.initial = $b, m.intersection = Mb, m.intersectionBy = Pb, m.intersectionWith = Rb, m.invert = Z1, m.invertBy = X1, m.invokeMap = Fy, m.iteratee = Cl, m.keyBy = By, m.keys = xt, m.keysIn = Gt, m.map = ma, m.mapKeys = Q1, m.mapValues = e_, m.matches = G_, m.matchesProperty = Y_, m.memoize = ya, m.merge = t_, m.mergeWith = wd, m.method = Z_, m.methodOf = X_, m.mixin = Al, m.negate = _a, m.nthArg = Q_, m.omit = n_, m.omitBy = r_, m.once = Jy, m.orderBy = ky, m.over = ew, m.overArgs = Qy, m.overEvery = tw, m.overSome = nw, m.partial = _l, m.partialRight = dd, m.partition = Ny, m.pick = o_, m.pickBy = Ed, m.property = Id, m.propertyOf = rw, m.pull = kb, m.pullAll = td, m.pullAllBy = Nb, m.pullAllWith = Db, m.pullAt = Wb, m.range = ow, m.rangeRight = iw, m.rearg = e1, m.reject = zy, m.remove = zb, m.rest = t1, m.reverse = ml, m.sampleSize = qy, m.set = a_, m.setWith = s_, m.shuffle = Uy, m.slice = Hb, m.sortBy = jy, m.sortedUniq = Yb, m.sortedUniqBy = Zb, m.split = $_, m.spread = n1, m.tail = Xb, m.take = Jb, m.takeRight = Qb, m.takeRightWhile = ey, m.takeWhile = ty, m.tap = gy, m.throttle = r1, m.thru = ga, m.toArray = md, m.toPairs = Sd, m.toPairsIn = xd, m.toPath = cw, m.toPlainObject = yd, m.transform = l_, m.unary = o1, m.union = ny, m.unionBy = ry, m.unionWith = oy, m.uniq = iy, m.uniqBy = ay, m.uniqWith = sy, m.unset = u_, m.unzip = bl, m.unzipWith = nd, m.update = c_, m.updateWith = f_, m.values = Io, m.valuesIn = d_, m.without = ly, m.words = Cd, m.wrap = i1, m.xor = uy, m.xorBy = cy, m.xorWith = fy, m.zip = dy, m.zipObject = py, m.zipObjectDeep = vy, m.zipWith = hy, m.entries = Sd, m.entriesIn = xd, m.extend = _d, m.extendWith = Sa, Al(m, m), m.add = dw, m.attempt = Ad, m.camelCase = g_, m.capitalize = Od, m.ceil = pw, m.clamp = p_, m.clone = s1, m.cloneDeep = u1, m.cloneDeepWith = c1, m.cloneWith = l1, m.conformsTo = f1, m.deburr = Td, m.defaultTo = V_, m.divide = vw, m.endsWith = m_, m.eq = Ln, m.escape = b_, m.escapeRegExp = y_, m.every = Ty, m.find = Ay, m.findIndex = Xf, m.findKey = z1, m.findLast = Iy, m.findLastIndex = Jf, m.findLastKey = H1, m.floor = hw, m.forEach = od, m.forEachRight = id, m.forIn = q1, m.forInRight = U1, m.forOwn = V1, m.forOwnRight = K1, m.get = Sl, m.gt = d1, m.gte = p1, m.has = Y1, m.hasIn = xl, m.head = ed, m.identity = Yt, m.includes = Ly, m.indexOf = Ib, m.inRange = v_, m.invoke = J1, m.isArguments = eo, m.isArray = Oe, m.isArrayBuffer = v1, m.isArrayLike = jt, m.isArrayLikeObject = dt, m.isBoolean = h1, m.isBuffer = Lr, m.isDate = g1, m.isElement = m1, m.isEmpty = b1, m.isEqual = y1, m.isEqualWith = _1, m.isError = wl, m.isFinite = w1, m.isFunction = pr, m.isInteger = pd, m.isLength = wa, m.isMap = vd, m.isMatch = E1, m.isMatchWith = S1, m.isNaN = x1, m.isNative = O1, m.isNil = C1, m.isNull = T1, m.isNumber = hd, m.isObject = it, m.isObjectLike = lt, m.isPlainObject = ui, m.isRegExp = El, m.isSafeInteger = A1, m.isSet = gd, m.isString = Ea, m.isSymbol = an, m.isTypedArray = Ao, m.isUndefined = I1, m.isWeakMap = $1, m.isWeakSet = M1, m.join = Lb, m.kebabCase = __, m.last = En, m.lastIndexOf = Fb, m.lowerCase = w_, m.lowerFirst = E_, m.lt = P1, m.lte = R1, m.max = gw, m.maxBy = mw, m.mean = bw, m.meanBy = yw, m.min = _w, m.minBy = ww, m.stubArray = $l, m.stubFalse = Ml, m.stubObject = aw, m.stubString = sw, m.stubTrue = lw, m.multiply = Ew, m.nth = Bb, m.noConflict = J_, m.noop = Il, m.now = ba, m.pad = S_, m.padEnd = x_, m.padStart = O_, m.parseInt = T_, m.random = h_, m.reduce = Dy, m.reduceRight = Wy, m.repeat = C_, m.replace = A_, m.result = i_, m.round = Sw, m.runInContext = I, m.sample = Hy, m.size = Vy, m.snakeCase = I_, m.some = Ky, m.sortedIndex = qb, m.sortedIndexBy = Ub, m.sortedIndexOf = Vb, m.sortedLastIndex = Kb, m.sortedLastIndexBy = jb, m.sortedLastIndexOf = Gb, m.startCase = M_, m.startsWith = P_, m.subtract = xw, m.sum = Ow, m.sumBy = Tw, m.template = R_, m.times = uw, m.toFinite = vr, m.toInteger = Ae, m.toLength = bd, m.toLower = L_, m.toNumber = Sn, m.toSafeInteger = L1, m.toString = Ve, m.toUpper = F_, m.trim = B_, m.trimEnd = k_, m.trimStart = N_, m.truncate = D_, m.unescape = W_, m.uniqueId = fw, m.upperCase = z_, m.upperFirst = Ol, m.each = od, m.eachRight = id, m.first = ed, Al(m, function() {
        var t = {};
        return Gn(m, function(o, a) {
          je.call(m.prototype, a) || (t[a] = o);
        }), t;
      }(), { chain: !1 }), m.VERSION = i, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        m[t].placeholder = m;
      }), mn(["drop", "take"], function(t, o) {
        Le.prototype[t] = function(a) {
          a = a === r ? 1 : wt(Ae(a), 0);
          var u = this.__filtered__ && !o ? new Le(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = Mt(a, u.__takeCount__) : u.__views__.push({
            size: Mt(a, xe),
            type: t + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, Le.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(t, o) {
        var a = o + 1, u = a == X || a == ce;
        Le.prototype[t] = function(p) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ge(p, 3),
            type: a
          }), b.__filtered__ = b.__filtered__ || u, b;
        };
      }), mn(["head", "last"], function(t, o) {
        var a = "take" + (o ? "Right" : "");
        Le.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), mn(["initial", "tail"], function(t, o) {
        var a = "drop" + (o ? "" : "Right");
        Le.prototype[t] = function() {
          return this.__filtered__ ? new Le(this) : this[a](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(Yt);
      }, Le.prototype.find = function(t) {
        return this.filter(t).head();
      }, Le.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Le.prototype.invokeMap = Me(function(t, o) {
        return typeof t == "function" ? new Le(this) : this.map(function(a) {
          return ri(a, t, o);
        });
      }), Le.prototype.reject = function(t) {
        return this.filter(_a(ge(t)));
      }, Le.prototype.slice = function(t, o) {
        t = Ae(t);
        var a = this;
        return a.__filtered__ && (t > 0 || o < 0) ? new Le(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), o !== r && (o = Ae(o), a = o < 0 ? a.dropRight(-o) : a.take(o - t)), a);
      }, Le.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(xe);
      }, Gn(Le.prototype, function(t, o) {
        var a = /^(?:filter|find|map|reject)|While$/.test(o), u = /^(?:head|last)$/.test(o), p = m[u ? "take" + (o == "last" ? "Right" : "") : o], b = u || /^find/.test(o);
        !p || (m.prototype[o] = function() {
          var x = this.__wrapped__, T = u ? [1] : arguments, M = x instanceof Le, H = T[0], q = M || Oe(x), Y = function(Re) {
            var ke = p.apply(m, Cr([Re], T));
            return u && te ? ke[0] : ke;
          };
          q && a && typeof H == "function" && H.length != 1 && (M = q = !1);
          var te = this.__chain__, se = !!this.__actions__.length, be = b && !te, $e = M && !se;
          if (!b && q) {
            x = $e ? x : new Le(this);
            var ye = t.apply(x, T);
            return ye.__actions__.push({ func: ga, args: [Y], thisArg: r }), new yn(ye, te);
          }
          return be && $e ? t.apply(this, T) : (ye = this.thru(Y), be ? u ? ye.value()[0] : ye.value() : ye);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = Hi[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(t);
        m.prototype[t] = function() {
          var p = arguments;
          if (u && !this.__chain__) {
            var b = this.value();
            return o.apply(Oe(b) ? b : [], p);
          }
          return this[a](function(x) {
            return o.apply(Oe(x) ? x : [], p);
          });
        };
      }), Gn(Le.prototype, function(t, o) {
        var a = m[o];
        if (a) {
          var u = a.name + "";
          je.call(So, u) || (So[u] = []), So[u].push({ name: o, func: a });
        }
      }), So[ua(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Le.prototype.clone = Wm, Le.prototype.reverse = zm, Le.prototype.value = Hm, m.prototype.at = my, m.prototype.chain = by, m.prototype.commit = yy, m.prototype.next = _y, m.prototype.plant = Ey, m.prototype.reverse = Sy, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = xy, m.prototype.first = m.prototype.head, Zo && (m.prototype[Zo] = wy), m;
    }, _o = ym();
    Kr ? ((Kr.exports = _o)._ = _o, Cs._ = _o) : Ct._ = _o;
  }).call(fi);
})(ue, ue.exports);
const Jl = /^\s*v-([\w-]+)\s*$/, Ya = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, Ql = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, eu = /^\s*(?:v-on:|@)([\w:]+)\s*$/, Hw = [
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
], qw = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"], pv = (e) => qw.includes(e), vv = (e, n) => {
  const r = Object.keys(e), i = { root: {}, directive: {}, prop: {} };
  return r.forEach((s) => {
    var g, y;
    const l = e[s], c = Jl.test(s) || Ql.test(s) || eu.test(s), f = new Array().concat(
      e.contextKeys || [],
      n.contextKeys || []
    );
    new Array().concat(
      e.excludeKeys || [],
      n.excludeKeys || []
    );
    const d = f.includes(s);
    Ya.test(s) ? (i.root["slot-scope"] = l, i.root.slot = (y = (g = Ya.exec(s)) == null ? void 0 : g[1]) != null ? y : "default") : c ? i.directive[s] = l : Hw.includes(s) && !d ? i.root[s] = l : i.prop[s] = l;
  }), i;
}, hv = (e) => {
  var r;
  const n = Object.keys(e).filter((i) => Ya.test(i));
  return n.length > 0 && ((r = Ya.exec(n[0])) == null ? void 0 : r[1]) || "default";
}, gv = (e = "", n = {}, r = !1) => {
  try {
    const i = Object.keys(n).filter((c) => !Uw.includes(c)), s = i.map((c) => r ? v(n[c]) : n[c]), l = "return " + e;
    return new Function(...i, l)(...s);
  } catch (i) {
    console.error(i);
  }
}, Uw = ["this"], Vw = ["pointerevent"], mv = (e, n) => {
  const r = Object.keys(e), i = { "v-bind": {}, "v-on": {} };
  return r.forEach((s) => {
    var c, f;
    let l = e[s];
    if (typeof l == "string" ? l = gv(l, n, !0) : l = v(l), Ql.test(s)) {
      const d = (c = Ql.exec(s)) != null ? c : [];
      if (d[1] == null)
        if (ue.exports.isMap(l))
          for (const [g, y] of l)
            Jl.test(g) ? i[g] = y : i["v-bind"][g] = y;
        else
          ue.exports.isObject(l) && Object.keys(l).forEach((g) => {
            Jl.test(g) ? i[g] = l[g] : i["v-bind"][g] = l[g];
          });
      else
        i["v-bind"][d[1]] = l;
    } else if (eu.test(s)) {
      const d = (f = eu.exec(s)) != null ? f : [];
      if (d[1]) {
        const g = "on" + ue.exports.upperFirst(d[1]);
        i["v-on"][g] = typeof l == "function" ? (y, ..._) => {
          const E = Object.prototype.toString.call(y).split(" ")[1].replace("]", "").toLowerCase(), S = { ...n };
          return Vw.includes(E) ? S.$event = y : _ = [y, ..._], _.length > 0 && (S.$ = _), l.apply(n, [S]);
        } : l;
      }
    } else
      i[s] = l;
  }), i;
}, Kw = (e, n, r) => {
  let i;
  for (; (i = e.exec(n)) !== null; )
    r(i);
}, jw = /\{\{\s*(.*?)\s*\}\}/g, bv = (e, n = {}) => {
  if (!e)
    return "";
  let r = e;
  return Kw(jw, e, ([i, s]) => {
    try {
      const l = gv(s, n, !0);
      r = r.replace(i, l);
    } catch {
      console.error("=====\u5B57\u7B26\u4E32\u6A21\u677F\u89E3\u6790\u5F02\u5E38\uFF01=====", s, n);
    }
  }), r;
}, Md = /^\s*\[(.*)\]\s*$/, Pd = /^\s*\{(.*)\}\s*$/, yv = (e, n = {}) => {
  const r = v(n);
  if (!e)
    return r;
  const i = {};
  if (ue.exports.isArray(r) && Md.test(e)) {
    const s = Md.exec(e);
    (s != null && s[1] ? s[1].split(",").map((c) => c.trim()) : []).forEach((c, f) => {
      i[c] = r == null ? void 0 : r[f];
    });
  } else if (ue.exports.isObject(r) && Pd.test(e)) {
    const s = Pd.exec(e);
    (s != null && s[1] ? s[1].split(",").map((c) => c.trim()) : []).forEach((c) => {
      const [f, d] = c.split(":").map((g) => g.trim());
      i[d || f] = ue.exports.get(r, f);
    });
  } else
    i[e] = r;
  return i;
}, tu = {
  template({ children: e }) {
    return e == null ? void 0 : e.default();
  },
  slot({ props: e, children: n, slots: r }) {
    var l;
    const i = e.name || "default";
    delete e.name;
    const s = (l = n == null ? void 0 : n[i]) != null ? l : () => [];
    return Ce(r, i, e, () => s());
  },
  component({ props: e, children: n }) {
    const r = e.is;
    delete e.is;
    const i = xn(r);
    return ut(i, e, n);
  }
}, Za = (e) => {
  const n = e.tagname;
  if (tu[n])
    return tu[n](e);
  const r = e.directives, i = e.children, s = e.tag, l = e.props;
  return r["v-text"] ? vt(s, l, r["v-text"]) : vt(s, l, i);
}, Gw = (e, n) => ue.exports.omit(e, n), os = le({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(e, n) {
    const r = e.elem || {}, i = e.context || {}, s = e.parent, l = e.params || {}, c = ue.exports.assign(
      {},
      i.slots || {},
      e.slots || n.slots
    ), f = B(() => {
      var z, Z;
      const R = (Z = (z = v(r == null ? void 0 : r.tag)) != null ? z : v(i == null ? void 0 : i.tag)) != null ? Z : "div";
      return typeof R == "function" && R.name === "tag" ? R(e, n) : R;
    }), d = B(
      () => typeof f.value == "string" ? f.value : ue.exports.kebabCase(f.value.name)
    ), g = B(() => pv(v(d)));
    let y = {}, _ = {};
    const E = { prop: {} };
    i.setup && (_ = i.setup(e, { tag: v(f), tagname: v(d), isHtml: v(g) }, n) || {}, ue.exports.merge(E, _)), r.setup && (y = r.setup(e, { tag: v(f), tagname: v(d), isHtml: v(g) }, n) || {}, ue.exports.merge(E, y));
    const S = vv(Xn(r, E.prop || {}), i), h = S.root, w = S.prop, O = S.directive, A = new Array().concat(
      E.excludeKeys || [],
      r.excludeKeys || [],
      i.excludeKeys || []
    ), L = { ...l, ...w, ...E }, C = {
      $tag: v(f),
      $tagname: v(d),
      $isHtml: v(g),
      $slots: c,
      $elem: r,
      $context: i,
      $root: h,
      $prop: w,
      $directive: O,
      $elemSetupRes: y,
      $ctxSetupRes: _,
      $setupRes: E,
      $parent: s,
      $params: l
    }, F = B(() => new Array().concat(v(h.children), v(h.cls)).filter((R) => R != null)), $ = (R) => {
      const z = v(F);
      if (z.length === 0)
        return;
      const Z = {
        default: []
      };
      z.forEach((K) => {
        const U = v(K);
        if (uv(U))
          Z.default.push(() => U);
        else if (ue.exports.isFunction(U))
          Z.default.push((D) => U(R, D, C));
        else if (ue.exports.isObject(U)) {
          const D = hv(U);
          Z[D] || (Z[D] = []), Z[D].push(
            (X) => vt(mr("els-elem"), {
              elem: U,
              context: i,
              parent: { elem: r, tagname: v(d), setupRes: E },
              params: R,
              slotParams: X,
              slots: c
            })
          );
        } else
          Z.default.push((D) => bv(String(U), R));
      });
      const j = {};
      return Object.keys(Z).forEach((K) => {
        j[K] = (U) => Z[K].map((D) => D(U));
      }), j;
    };
    return () => {
      const R = v(d), z = yv(h["slot-scope"], e.slotParams), Z = { ...L, ...z }, j = mv(O, Z);
      if (j["v-if"] === !1)
        return;
      const K = ue.exports.omit(Xn(
        w,
        j["v-bind"],
        j["v-on"]
      ), A), U = $(Z), D = {
        tag: f.value,
        tagname: R,
        isHtml: Z.$isHtml,
        props: K,
        children: U,
        context: i,
        elem: r,
        slots: c,
        parent: s,
        directives: j,
        setupRes: E
      }, X = (y == null ? void 0 : y.render) || (h == null ? void 0 : h.render) || (_ == null ? void 0 : _.render) || (i == null ? void 0 : i.render);
      if (X) {
        if (ue.exports.isFunction(X))
          return X(D);
        if (X[R] != null)
          return X[R](D);
      }
      return Za(D);
    };
  }
}), La = {
  install(e) {
    e.component("els-elem", os);
  }
}, uP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsElemPlugin: La,
  ElsElem: os,
  isHtmlTag: pv,
  getElemAttrs: vv,
  getSlotName: hv,
  parseDirective: mv,
  getExpValue: bv,
  getDestruct: yv,
  specialRender: tu,
  defaultRender: Za,
  propsFilter: Gw
}, Symbol.toStringTag, { value: "Module" }));
var Yw = typeof global == "object" && global && global.Object === Object && global;
const _v = Yw;
var Zw = typeof self == "object" && self && self.Object === Object && self, Xw = _v || Zw || Function("return this")();
const Hn = Xw;
var Jw = Hn.Symbol;
const Cn = Jw;
var wv = Object.prototype, Qw = wv.hasOwnProperty, e2 = wv.toString, di = Cn ? Cn.toStringTag : void 0;
function t2(e) {
  var n = Qw.call(e, di), r = e[di];
  try {
    e[di] = void 0;
    var i = !0;
  } catch {
  }
  var s = e2.call(e);
  return i && (n ? e[di] = r : delete e[di]), s;
}
var n2 = Object.prototype, r2 = n2.toString;
function o2(e) {
  return r2.call(e);
}
var i2 = "[object Null]", a2 = "[object Undefined]", Rd = Cn ? Cn.toStringTag : void 0;
function qo(e) {
  return e == null ? e === void 0 ? a2 : i2 : Rd && Rd in Object(e) ? t2(e) : o2(e);
}
function zr(e) {
  return e != null && typeof e == "object";
}
var s2 = "[object Symbol]";
function is(e) {
  return typeof e == "symbol" || zr(e) && qo(e) == s2;
}
function l2(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i; )
    s[r] = n(e[r], r, e);
  return s;
}
var u2 = Array.isArray;
const zn = u2;
var c2 = 1 / 0, Ld = Cn ? Cn.prototype : void 0, Fd = Ld ? Ld.toString : void 0;
function Ev(e) {
  if (typeof e == "string")
    return e;
  if (zn(e))
    return l2(e, Ev) + "";
  if (is(e))
    return Fd ? Fd.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -c2 ? "-0" : n;
}
var f2 = /\s/;
function d2(e) {
  for (var n = e.length; n-- && f2.test(e.charAt(n)); )
    ;
  return n;
}
var p2 = /^\s+/;
function v2(e) {
  return e && e.slice(0, d2(e) + 1).replace(p2, "");
}
function er(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Bd = 0 / 0, h2 = /^[-+]0x[0-9a-f]+$/i, g2 = /^0b[01]+$/i, m2 = /^0o[0-7]+$/i, b2 = parseInt;
function kd(e) {
  if (typeof e == "number")
    return e;
  if (is(e))
    return Bd;
  if (er(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = er(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = v2(e);
  var r = g2.test(e);
  return r || m2.test(e) ? b2(e.slice(2), r ? 2 : 8) : h2.test(e) ? Bd : +e;
}
function y2(e) {
  return e;
}
var _2 = "[object AsyncFunction]", w2 = "[object Function]", E2 = "[object GeneratorFunction]", S2 = "[object Proxy]";
function Sv(e) {
  if (!er(e))
    return !1;
  var n = qo(e);
  return n == w2 || n == E2 || n == _2 || n == S2;
}
var x2 = Hn["__core-js_shared__"];
const Pl = x2;
var Nd = function() {
  var e = /[^.]+$/.exec(Pl && Pl.keys && Pl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function O2(e) {
  return !!Nd && Nd in e;
}
var T2 = Function.prototype, C2 = T2.toString;
function fo(e) {
  if (e != null) {
    try {
      return C2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var A2 = /[\\^$.*+?()[\]{}|]/g, I2 = /^\[object .+?Constructor\]$/, $2 = Function.prototype, M2 = Object.prototype, P2 = $2.toString, R2 = M2.hasOwnProperty, L2 = RegExp(
  "^" + P2.call(R2).replace(A2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function F2(e) {
  if (!er(e) || O2(e))
    return !1;
  var n = Sv(e) ? L2 : I2;
  return n.test(fo(e));
}
function B2(e, n) {
  return e == null ? void 0 : e[n];
}
function po(e, n) {
  var r = B2(e, n);
  return F2(r) ? r : void 0;
}
var k2 = po(Hn, "WeakMap");
const nu = k2;
var Dd = Object.create, N2 = function() {
  function e() {
  }
  return function(n) {
    if (!er(n))
      return {};
    if (Dd)
      return Dd(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const D2 = N2;
function W2(e, n, r) {
  switch (r.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, r[0]);
    case 2:
      return e.call(n, r[0], r[1]);
    case 3:
      return e.call(n, r[0], r[1], r[2]);
  }
  return e.apply(n, r);
}
function z2(e, n) {
  var r = -1, i = e.length;
  for (n || (n = Array(i)); ++r < i; )
    n[r] = e[r];
  return n;
}
var H2 = 800, q2 = 16, U2 = Date.now;
function V2(e) {
  var n = 0, r = 0;
  return function() {
    var i = U2(), s = q2 - (i - r);
    if (r = i, s > 0) {
      if (++n >= H2)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function K2(e) {
  return function() {
    return e;
  };
}
var j2 = function() {
  try {
    var e = po(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Xa = j2;
var G2 = Xa ? function(e, n) {
  return Xa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: K2(n),
    writable: !0
  });
} : y2;
const Y2 = G2;
var Z2 = V2(Y2);
const X2 = Z2;
function J2(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i && n(e[r], r, e) !== !1; )
    ;
  return e;
}
var Q2 = 9007199254740991, eE = /^(?:0|[1-9]\d*)$/;
function yu(e, n) {
  var r = typeof e;
  return n = n == null ? Q2 : n, !!n && (r == "number" || r != "symbol" && eE.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function xv(e, n, r) {
  n == "__proto__" && Xa ? Xa(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function _u(e, n) {
  return e === n || e !== e && n !== n;
}
var tE = Object.prototype, nE = tE.hasOwnProperty;
function wu(e, n, r) {
  var i = e[n];
  (!(nE.call(e, n) && _u(i, r)) || r === void 0 && !(n in e)) && xv(e, n, r);
}
function as(e, n, r, i) {
  var s = !r;
  r || (r = {});
  for (var l = -1, c = n.length; ++l < c; ) {
    var f = n[l], d = i ? i(r[f], e[f], f, r, e) : void 0;
    d === void 0 && (d = e[f]), s ? xv(r, f, d) : wu(r, f, d);
  }
  return r;
}
var Wd = Math.max;
function rE(e, n, r) {
  return n = Wd(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var i = arguments, s = -1, l = Wd(i.length - n, 0), c = Array(l); ++s < l; )
      c[s] = i[n + s];
    s = -1;
    for (var f = Array(n + 1); ++s < n; )
      f[s] = i[s];
    return f[n] = r(c), W2(e, this, f);
  };
}
var oE = 9007199254740991;
function Eu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oE;
}
function Ov(e) {
  return e != null && Eu(e.length) && !Sv(e);
}
var iE = Object.prototype;
function Su(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || iE;
  return e === r;
}
function aE(e, n) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = n(r);
  return i;
}
var sE = "[object Arguments]";
function zd(e) {
  return zr(e) && qo(e) == sE;
}
var Tv = Object.prototype, lE = Tv.hasOwnProperty, uE = Tv.propertyIsEnumerable, cE = zd(function() {
  return arguments;
}()) ? zd : function(e) {
  return zr(e) && lE.call(e, "callee") && !uE.call(e, "callee");
};
const xu = cE;
function fE() {
  return !1;
}
var Cv = typeof exports == "object" && exports && !exports.nodeType && exports, Hd = Cv && typeof module == "object" && module && !module.nodeType && module, dE = Hd && Hd.exports === Cv, qd = dE ? Hn.Buffer : void 0, pE = qd ? qd.isBuffer : void 0, vE = pE || fE;
const Ja = vE;
var hE = "[object Arguments]", gE = "[object Array]", mE = "[object Boolean]", bE = "[object Date]", yE = "[object Error]", _E = "[object Function]", wE = "[object Map]", EE = "[object Number]", SE = "[object Object]", xE = "[object RegExp]", OE = "[object Set]", TE = "[object String]", CE = "[object WeakMap]", AE = "[object ArrayBuffer]", IE = "[object DataView]", $E = "[object Float32Array]", ME = "[object Float64Array]", PE = "[object Int8Array]", RE = "[object Int16Array]", LE = "[object Int32Array]", FE = "[object Uint8Array]", BE = "[object Uint8ClampedArray]", kE = "[object Uint16Array]", NE = "[object Uint32Array]", et = {};
et[$E] = et[ME] = et[PE] = et[RE] = et[LE] = et[FE] = et[BE] = et[kE] = et[NE] = !0;
et[hE] = et[gE] = et[AE] = et[mE] = et[IE] = et[bE] = et[yE] = et[_E] = et[wE] = et[EE] = et[SE] = et[xE] = et[OE] = et[TE] = et[CE] = !1;
function DE(e) {
  return zr(e) && Eu(e.length) && !!et[qo(e)];
}
function Ou(e) {
  return function(n) {
    return e(n);
  };
}
var Av = typeof exports == "object" && exports && !exports.nodeType && exports, gi = Av && typeof module == "object" && module && !module.nodeType && module, WE = gi && gi.exports === Av, Rl = WE && _v.process, zE = function() {
  try {
    var e = gi && gi.require && gi.require("util").types;
    return e || Rl && Rl.binding && Rl.binding("util");
  } catch {
  }
}();
const Lo = zE;
var Ud = Lo && Lo.isTypedArray, HE = Ud ? Ou(Ud) : DE;
const Iv = HE;
var qE = Object.prototype, UE = qE.hasOwnProperty;
function $v(e, n) {
  var r = zn(e), i = !r && xu(e), s = !r && !i && Ja(e), l = !r && !i && !s && Iv(e), c = r || i || s || l, f = c ? aE(e.length, String) : [], d = f.length;
  for (var g in e)
    (n || UE.call(e, g)) && !(c && (g == "length" || s && (g == "offset" || g == "parent") || l && (g == "buffer" || g == "byteLength" || g == "byteOffset") || yu(g, d))) && f.push(g);
  return f;
}
function Mv(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var VE = Mv(Object.keys, Object);
const KE = VE;
var jE = Object.prototype, GE = jE.hasOwnProperty;
function YE(e) {
  if (!Su(e))
    return KE(e);
  var n = [];
  for (var r in Object(e))
    GE.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function Tu(e) {
  return Ov(e) ? $v(e) : YE(e);
}
function ZE(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var XE = Object.prototype, JE = XE.hasOwnProperty;
function QE(e) {
  if (!er(e))
    return ZE(e);
  var n = Su(e), r = [];
  for (var i in e)
    i == "constructor" && (n || !JE.call(e, i)) || r.push(i);
  return r;
}
function Cu(e) {
  return Ov(e) ? $v(e, !0) : QE(e);
}
var eS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tS = /^\w*$/;
function nS(e, n) {
  if (zn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || is(e) ? !0 : tS.test(e) || !eS.test(e) || n != null && e in Object(n);
}
var rS = po(Object, "create");
const wi = rS;
function oS() {
  this.__data__ = wi ? wi(null) : {}, this.size = 0;
}
function iS(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var aS = "__lodash_hash_undefined__", sS = Object.prototype, lS = sS.hasOwnProperty;
function uS(e) {
  var n = this.__data__;
  if (wi) {
    var r = n[e];
    return r === aS ? void 0 : r;
  }
  return lS.call(n, e) ? n[e] : void 0;
}
var cS = Object.prototype, fS = cS.hasOwnProperty;
function dS(e) {
  var n = this.__data__;
  return wi ? n[e] !== void 0 : fS.call(n, e);
}
var pS = "__lodash_hash_undefined__";
function vS(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wi && n === void 0 ? pS : n, this;
}
function lo(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
lo.prototype.clear = oS;
lo.prototype.delete = iS;
lo.prototype.get = uS;
lo.prototype.has = dS;
lo.prototype.set = vS;
function hS() {
  this.__data__ = [], this.size = 0;
}
function ss(e, n) {
  for (var r = e.length; r--; )
    if (_u(e[r][0], n))
      return r;
  return -1;
}
var gS = Array.prototype, mS = gS.splice;
function bS(e) {
  var n = this.__data__, r = ss(n, e);
  if (r < 0)
    return !1;
  var i = n.length - 1;
  return r == i ? n.pop() : mS.call(n, r, 1), --this.size, !0;
}
function yS(e) {
  var n = this.__data__, r = ss(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function _S(e) {
  return ss(this.__data__, e) > -1;
}
function wS(e, n) {
  var r = this.__data__, i = ss(r, e);
  return i < 0 ? (++this.size, r.push([e, n])) : r[i][1] = n, this;
}
function Sr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
Sr.prototype.clear = hS;
Sr.prototype.delete = bS;
Sr.prototype.get = yS;
Sr.prototype.has = _S;
Sr.prototype.set = wS;
var ES = po(Hn, "Map");
const Ei = ES;
function SS() {
  this.size = 0, this.__data__ = {
    hash: new lo(),
    map: new (Ei || Sr)(),
    string: new lo()
  };
}
function xS(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function ls(e, n) {
  var r = e.__data__;
  return xS(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function OS(e) {
  var n = ls(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function TS(e) {
  return ls(this, e).get(e);
}
function CS(e) {
  return ls(this, e).has(e);
}
function AS(e, n) {
  var r = ls(this, e), i = r.size;
  return r.set(e, n), this.size += r.size == i ? 0 : 1, this;
}
function xr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
xr.prototype.clear = SS;
xr.prototype.delete = OS;
xr.prototype.get = TS;
xr.prototype.has = CS;
xr.prototype.set = AS;
var IS = "Expected a function";
function Au(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(IS);
  var r = function() {
    var i = arguments, s = n ? n.apply(this, i) : i[0], l = r.cache;
    if (l.has(s))
      return l.get(s);
    var c = e.apply(this, i);
    return r.cache = l.set(s, c) || l, c;
  };
  return r.cache = new (Au.Cache || xr)(), r;
}
Au.Cache = xr;
var $S = 500;
function MS(e) {
  var n = Au(e, function(i) {
    return r.size === $S && r.clear(), i;
  }), r = n.cache;
  return n;
}
var PS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, RS = /\\(\\)?/g, LS = MS(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(PS, function(r, i, s, l) {
    n.push(s ? l.replace(RS, "$1") : i || r);
  }), n;
});
const FS = LS;
function BS(e) {
  return e == null ? "" : Ev(e);
}
function us(e, n) {
  return zn(e) ? e : nS(e, n) ? [e] : FS(BS(e));
}
var kS = 1 / 0;
function Iu(e) {
  if (typeof e == "string" || is(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -kS ? "-0" : n;
}
function Pv(e, n) {
  n = us(n, e);
  for (var r = 0, i = n.length; e != null && r < i; )
    e = e[Iu(n[r++])];
  return r && r == i ? e : void 0;
}
function cn(e, n, r) {
  var i = e == null ? void 0 : Pv(e, n);
  return i === void 0 ? r : i;
}
function $u(e, n) {
  for (var r = -1, i = n.length, s = e.length; ++r < i; )
    e[s + r] = n[r];
  return e;
}
var Vd = Cn ? Cn.isConcatSpreadable : void 0;
function NS(e) {
  return zn(e) || xu(e) || !!(Vd && e && e[Vd]);
}
function Rv(e, n, r, i, s) {
  var l = -1, c = e.length;
  for (r || (r = NS), s || (s = []); ++l < c; ) {
    var f = e[l];
    n > 0 && r(f) ? n > 1 ? Rv(f, n - 1, r, i, s) : $u(s, f) : i || (s[s.length] = f);
  }
  return s;
}
function DS(e) {
  var n = e == null ? 0 : e.length;
  return n ? Rv(e, 1) : [];
}
function WS(e) {
  return X2(rE(e, void 0, DS), e + "");
}
var zS = Mv(Object.getPrototypeOf, Object);
const Lv = zS;
function ru() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return zn(e) ? e : [e];
}
function HS() {
  this.__data__ = new Sr(), this.size = 0;
}
function qS(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function US(e) {
  return this.__data__.get(e);
}
function VS(e) {
  return this.__data__.has(e);
}
var KS = 200;
function jS(e, n) {
  var r = this.__data__;
  if (r instanceof Sr) {
    var i = r.__data__;
    if (!Ei || i.length < KS - 1)
      return i.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new xr(i);
  }
  return r.set(e, n), this.size = r.size, this;
}
function yr(e) {
  var n = this.__data__ = new Sr(e);
  this.size = n.size;
}
yr.prototype.clear = HS;
yr.prototype.delete = qS;
yr.prototype.get = US;
yr.prototype.has = VS;
yr.prototype.set = jS;
function GS(e, n) {
  return e && as(n, Tu(n), e);
}
function YS(e, n) {
  return e && as(n, Cu(n), e);
}
var Fv = typeof exports == "object" && exports && !exports.nodeType && exports, Kd = Fv && typeof module == "object" && module && !module.nodeType && module, ZS = Kd && Kd.exports === Fv, jd = ZS ? Hn.Buffer : void 0, Gd = jd ? jd.allocUnsafe : void 0;
function XS(e, n) {
  if (n)
    return e.slice();
  var r = e.length, i = Gd ? Gd(r) : new e.constructor(r);
  return e.copy(i), i;
}
function JS(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length, s = 0, l = []; ++r < i; ) {
    var c = e[r];
    n(c, r, e) && (l[s++] = c);
  }
  return l;
}
function Bv() {
  return [];
}
var QS = Object.prototype, ex = QS.propertyIsEnumerable, Yd = Object.getOwnPropertySymbols, tx = Yd ? function(e) {
  return e == null ? [] : (e = Object(e), JS(Yd(e), function(n) {
    return ex.call(e, n);
  }));
} : Bv;
const Mu = tx;
function nx(e, n) {
  return as(e, Mu(e), n);
}
var rx = Object.getOwnPropertySymbols, ox = rx ? function(e) {
  for (var n = []; e; )
    $u(n, Mu(e)), e = Lv(e);
  return n;
} : Bv;
const kv = ox;
function ix(e, n) {
  return as(e, kv(e), n);
}
function Nv(e, n, r) {
  var i = n(e);
  return zn(e) ? i : $u(i, r(e));
}
function ou(e) {
  return Nv(e, Tu, Mu);
}
function ax(e) {
  return Nv(e, Cu, kv);
}
var sx = po(Hn, "DataView");
const iu = sx;
var lx = po(Hn, "Promise");
const au = lx;
var ux = po(Hn, "Set");
const su = ux;
var Zd = "[object Map]", cx = "[object Object]", Xd = "[object Promise]", Jd = "[object Set]", Qd = "[object WeakMap]", ep = "[object DataView]", fx = fo(iu), dx = fo(Ei), px = fo(au), vx = fo(su), hx = fo(nu), no = qo;
(iu && no(new iu(new ArrayBuffer(1))) != ep || Ei && no(new Ei()) != Zd || au && no(au.resolve()) != Xd || su && no(new su()) != Jd || nu && no(new nu()) != Qd) && (no = function(e) {
  var n = qo(e), r = n == cx ? e.constructor : void 0, i = r ? fo(r) : "";
  if (i)
    switch (i) {
      case fx:
        return ep;
      case dx:
        return Zd;
      case px:
        return Xd;
      case vx:
        return Jd;
      case hx:
        return Qd;
    }
  return n;
});
const Si = no;
var gx = Object.prototype, mx = gx.hasOwnProperty;
function bx(e) {
  var n = e.length, r = new e.constructor(n);
  return n && typeof e[0] == "string" && mx.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var yx = Hn.Uint8Array;
const Qa = yx;
function Pu(e) {
  var n = new e.constructor(e.byteLength);
  return new Qa(n).set(new Qa(e)), n;
}
function _x(e, n) {
  var r = n ? Pu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var wx = /\w*$/;
function Ex(e) {
  var n = new e.constructor(e.source, wx.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var tp = Cn ? Cn.prototype : void 0, np = tp ? tp.valueOf : void 0;
function Sx(e) {
  return np ? Object(np.call(e)) : {};
}
function xx(e, n) {
  var r = n ? Pu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Ox = "[object Boolean]", Tx = "[object Date]", Cx = "[object Map]", Ax = "[object Number]", Ix = "[object RegExp]", $x = "[object Set]", Mx = "[object String]", Px = "[object Symbol]", Rx = "[object ArrayBuffer]", Lx = "[object DataView]", Fx = "[object Float32Array]", Bx = "[object Float64Array]", kx = "[object Int8Array]", Nx = "[object Int16Array]", Dx = "[object Int32Array]", Wx = "[object Uint8Array]", zx = "[object Uint8ClampedArray]", Hx = "[object Uint16Array]", qx = "[object Uint32Array]";
function Ux(e, n, r) {
  var i = e.constructor;
  switch (n) {
    case Rx:
      return Pu(e);
    case Ox:
    case Tx:
      return new i(+e);
    case Lx:
      return _x(e, r);
    case Fx:
    case Bx:
    case kx:
    case Nx:
    case Dx:
    case Wx:
    case zx:
    case Hx:
    case qx:
      return xx(e, r);
    case Cx:
      return new i();
    case Ax:
    case Mx:
      return new i(e);
    case Ix:
      return Ex(e);
    case $x:
      return new i();
    case Px:
      return Sx(e);
  }
}
function Vx(e) {
  return typeof e.constructor == "function" && !Su(e) ? D2(Lv(e)) : {};
}
var Kx = "[object Map]";
function jx(e) {
  return zr(e) && Si(e) == Kx;
}
var rp = Lo && Lo.isMap, Gx = rp ? Ou(rp) : jx;
const Yx = Gx;
var Zx = "[object Set]";
function Xx(e) {
  return zr(e) && Si(e) == Zx;
}
var op = Lo && Lo.isSet, Jx = op ? Ou(op) : Xx;
const Qx = Jx;
var eO = 1, tO = 2, nO = 4, Dv = "[object Arguments]", rO = "[object Array]", oO = "[object Boolean]", iO = "[object Date]", aO = "[object Error]", Wv = "[object Function]", sO = "[object GeneratorFunction]", lO = "[object Map]", uO = "[object Number]", zv = "[object Object]", cO = "[object RegExp]", fO = "[object Set]", dO = "[object String]", pO = "[object Symbol]", vO = "[object WeakMap]", hO = "[object ArrayBuffer]", gO = "[object DataView]", mO = "[object Float32Array]", bO = "[object Float64Array]", yO = "[object Int8Array]", _O = "[object Int16Array]", wO = "[object Int32Array]", EO = "[object Uint8Array]", SO = "[object Uint8ClampedArray]", xO = "[object Uint16Array]", OO = "[object Uint32Array]", Xe = {};
Xe[Dv] = Xe[rO] = Xe[hO] = Xe[gO] = Xe[oO] = Xe[iO] = Xe[mO] = Xe[bO] = Xe[yO] = Xe[_O] = Xe[wO] = Xe[lO] = Xe[uO] = Xe[zv] = Xe[cO] = Xe[fO] = Xe[dO] = Xe[pO] = Xe[EO] = Xe[SO] = Xe[xO] = Xe[OO] = !0;
Xe[aO] = Xe[Wv] = Xe[vO] = !1;
function Fa(e, n, r, i, s, l) {
  var c, f = n & eO, d = n & tO, g = n & nO;
  if (r && (c = s ? r(e, i, s, l) : r(e)), c !== void 0)
    return c;
  if (!er(e))
    return e;
  var y = zn(e);
  if (y) {
    if (c = bx(e), !f)
      return z2(e, c);
  } else {
    var _ = Si(e), E = _ == Wv || _ == sO;
    if (Ja(e))
      return XS(e, f);
    if (_ == zv || _ == Dv || E && !s) {
      if (c = d || E ? {} : Vx(e), !f)
        return d ? ix(e, YS(c, e)) : nx(e, GS(c, e));
    } else {
      if (!Xe[_])
        return s ? e : {};
      c = Ux(e, _, f);
    }
  }
  l || (l = new yr());
  var S = l.get(e);
  if (S)
    return S;
  l.set(e, c), Qx(e) ? e.forEach(function(O) {
    c.add(Fa(O, n, r, O, e, l));
  }) : Yx(e) && e.forEach(function(O, A) {
    c.set(A, Fa(O, n, r, A, e, l));
  });
  var h = g ? d ? ax : ou : d ? Cu : Tu, w = y ? void 0 : h(e);
  return J2(w || e, function(O, A) {
    w && (A = O, O = e[A]), wu(c, A, Fa(O, n, r, A, e, l));
  }), c;
}
var TO = 4;
function ip(e) {
  return Fa(e, TO);
}
var CO = "__lodash_hash_undefined__";
function AO(e) {
  return this.__data__.set(e, CO), this;
}
function IO(e) {
  return this.__data__.has(e);
}
function es(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new xr(); ++n < r; )
    this.add(e[n]);
}
es.prototype.add = es.prototype.push = AO;
es.prototype.has = IO;
function $O(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function MO(e, n) {
  return e.has(n);
}
var PO = 1, RO = 2;
function Hv(e, n, r, i, s, l) {
  var c = r & PO, f = e.length, d = n.length;
  if (f != d && !(c && d > f))
    return !1;
  var g = l.get(e), y = l.get(n);
  if (g && y)
    return g == n && y == e;
  var _ = -1, E = !0, S = r & RO ? new es() : void 0;
  for (l.set(e, n), l.set(n, e); ++_ < f; ) {
    var h = e[_], w = n[_];
    if (i)
      var O = c ? i(w, h, _, n, e, l) : i(h, w, _, e, n, l);
    if (O !== void 0) {
      if (O)
        continue;
      E = !1;
      break;
    }
    if (S) {
      if (!$O(n, function(A, L) {
        if (!MO(S, L) && (h === A || s(h, A, r, i, l)))
          return S.push(L);
      })) {
        E = !1;
        break;
      }
    } else if (!(h === w || s(h, w, r, i, l))) {
      E = !1;
      break;
    }
  }
  return l.delete(e), l.delete(n), E;
}
function LO(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(i, s) {
    r[++n] = [s, i];
  }), r;
}
function FO(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++n] = i;
  }), r;
}
var BO = 1, kO = 2, NO = "[object Boolean]", DO = "[object Date]", WO = "[object Error]", zO = "[object Map]", HO = "[object Number]", qO = "[object RegExp]", UO = "[object Set]", VO = "[object String]", KO = "[object Symbol]", jO = "[object ArrayBuffer]", GO = "[object DataView]", ap = Cn ? Cn.prototype : void 0, Ll = ap ? ap.valueOf : void 0;
function YO(e, n, r, i, s, l, c) {
  switch (r) {
    case GO:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case jO:
      return !(e.byteLength != n.byteLength || !l(new Qa(e), new Qa(n)));
    case NO:
    case DO:
    case HO:
      return _u(+e, +n);
    case WO:
      return e.name == n.name && e.message == n.message;
    case qO:
    case VO:
      return e == n + "";
    case zO:
      var f = LO;
    case UO:
      var d = i & BO;
      if (f || (f = FO), e.size != n.size && !d)
        return !1;
      var g = c.get(e);
      if (g)
        return g == n;
      i |= kO, c.set(e, n);
      var y = Hv(f(e), f(n), i, s, l, c);
      return c.delete(e), y;
    case KO:
      if (Ll)
        return Ll.call(e) == Ll.call(n);
  }
  return !1;
}
var ZO = 1, XO = Object.prototype, JO = XO.hasOwnProperty;
function QO(e, n, r, i, s, l) {
  var c = r & ZO, f = ou(e), d = f.length, g = ou(n), y = g.length;
  if (d != y && !c)
    return !1;
  for (var _ = d; _--; ) {
    var E = f[_];
    if (!(c ? E in n : JO.call(n, E)))
      return !1;
  }
  var S = l.get(e), h = l.get(n);
  if (S && h)
    return S == n && h == e;
  var w = !0;
  l.set(e, n), l.set(n, e);
  for (var O = c; ++_ < d; ) {
    E = f[_];
    var A = e[E], L = n[E];
    if (i)
      var C = c ? i(L, A, E, n, e, l) : i(A, L, E, e, n, l);
    if (!(C === void 0 ? A === L || s(A, L, r, i, l) : C)) {
      w = !1;
      break;
    }
    O || (O = E == "constructor");
  }
  if (w && !O) {
    var F = e.constructor, $ = n.constructor;
    F != $ && "constructor" in e && "constructor" in n && !(typeof F == "function" && F instanceof F && typeof $ == "function" && $ instanceof $) && (w = !1);
  }
  return l.delete(e), l.delete(n), w;
}
var eT = 1, sp = "[object Arguments]", lp = "[object Array]", xa = "[object Object]", tT = Object.prototype, up = tT.hasOwnProperty;
function nT(e, n, r, i, s, l) {
  var c = zn(e), f = zn(n), d = c ? lp : Si(e), g = f ? lp : Si(n);
  d = d == sp ? xa : d, g = g == sp ? xa : g;
  var y = d == xa, _ = g == xa, E = d == g;
  if (E && Ja(e)) {
    if (!Ja(n))
      return !1;
    c = !0, y = !1;
  }
  if (E && !y)
    return l || (l = new yr()), c || Iv(e) ? Hv(e, n, r, i, s, l) : YO(e, n, d, r, i, s, l);
  if (!(r & eT)) {
    var S = y && up.call(e, "__wrapped__"), h = _ && up.call(n, "__wrapped__");
    if (S || h) {
      var w = S ? e.value() : e, O = h ? n.value() : n;
      return l || (l = new yr()), s(w, O, r, i, l);
    }
  }
  return E ? (l || (l = new yr()), QO(e, n, r, i, s, l)) : !1;
}
function qv(e, n, r, i, s) {
  return e === n ? !0 : e == null || n == null || !zr(e) && !zr(n) ? e !== e && n !== n : nT(e, n, r, i, qv, s);
}
function rT(e, n) {
  return e != null && n in Object(e);
}
function oT(e, n, r) {
  n = us(n, e);
  for (var i = -1, s = n.length, l = !1; ++i < s; ) {
    var c = Iu(n[i]);
    if (!(l = e != null && r(e, c)))
      break;
    e = e[c];
  }
  return l || ++i != s ? l : (s = e == null ? 0 : e.length, !!s && Eu(s) && yu(c, s) && (zn(e) || xu(e)));
}
function iT(e, n) {
  return e != null && oT(e, n, rT);
}
var aT = function() {
  return Hn.Date.now();
};
const Fl = aT;
var sT = "Expected a function", lT = Math.max, uT = Math.min;
function cp(e, n, r) {
  var i, s, l, c, f, d, g = 0, y = !1, _ = !1, E = !0;
  if (typeof e != "function")
    throw new TypeError(sT);
  n = kd(n) || 0, er(r) && (y = !!r.leading, _ = "maxWait" in r, l = _ ? lT(kd(r.maxWait) || 0, n) : l, E = "trailing" in r ? !!r.trailing : E);
  function S(P) {
    var R = i, z = s;
    return i = s = void 0, g = P, c = e.apply(z, R), c;
  }
  function h(P) {
    return g = P, f = setTimeout(A, n), y ? S(P) : c;
  }
  function w(P) {
    var R = P - d, z = P - g, Z = n - R;
    return _ ? uT(Z, l - z) : Z;
  }
  function O(P) {
    var R = P - d, z = P - g;
    return d === void 0 || R >= n || R < 0 || _ && z >= l;
  }
  function A() {
    var P = Fl();
    if (O(P))
      return L(P);
    f = setTimeout(A, w(P));
  }
  function L(P) {
    return f = void 0, E && i ? S(P) : (i = s = void 0, c);
  }
  function C() {
    f !== void 0 && clearTimeout(f), g = 0, i = d = s = f = void 0;
  }
  function F() {
    return f === void 0 ? c : L(Fl());
  }
  function $() {
    var P = Fl(), R = O(P);
    if (i = arguments, s = this, d = P, R) {
      if (f === void 0)
        return h(d);
      if (_)
        return clearTimeout(f), f = setTimeout(A, n), S(d);
    }
    return f === void 0 && (f = setTimeout(A, n)), c;
  }
  return $.cancel = C, $.flush = F, $;
}
function Uv(e) {
  for (var n = -1, r = e == null ? 0 : e.length, i = {}; ++n < r; ) {
    var s = e[n];
    i[s[0]] = s[1];
  }
  return i;
}
function fp(e, n) {
  return qv(e, n);
}
function cs(e) {
  return e == null;
}
function Vv(e, n, r, i) {
  if (!er(e))
    return e;
  n = us(n, e);
  for (var s = -1, l = n.length, c = l - 1, f = e; f != null && ++s < l; ) {
    var d = Iu(n[s]), g = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (s != c) {
      var y = f[d];
      g = i ? i(y, d, f) : void 0, g === void 0 && (g = er(y) ? y : yu(n[s + 1]) ? [] : {});
    }
    wu(f, d, g), f = f[d];
  }
  return e;
}
function cT(e, n, r) {
  for (var i = -1, s = n.length, l = {}; ++i < s; ) {
    var c = n[i], f = Pv(e, c);
    r(f, c) && Vv(l, us(c, e), f);
  }
  return l;
}
function fT(e, n) {
  return cT(e, n, function(r, i) {
    return iT(e, i);
  });
}
var dT = WS(function(e, n) {
  return e == null ? {} : fT(e, n);
});
const pT = dT;
function vT(e, n, r) {
  return e == null ? e : Vv(e, n, r);
}
const Ba = function(e, n, ...r) {
  let i;
  n.includes("mouse") || n.includes("click") ? i = "MouseEvents" : n.includes("key") ? i = "KeyboardEvent" : i = "HTMLEvents";
  const s = document.createEvent(i);
  return s.initEvent(n, ...r), e.dispatchEvent(s), e;
}, br = (e, n, { checkForDefaultPrevented: r = !0 } = {}) => (s) => {
  const l = e == null ? void 0 : e(s);
  if (r === !1 || !l)
    return n == null ? void 0 : n(s);
};
var dp;
const Rt = typeof window < "u", tr = (e) => typeof e == "boolean", On = (e) => typeof e == "number", hT = (e) => typeof e == "string", Bl = () => {
};
Rt && ((dp = window == null ? void 0 : window.navigator) == null ? void 0 : dp.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ts(e) {
  return typeof e == "function" ? e() : v(e);
}
function gT(e, n) {
  function r(...i) {
    e(() => n.apply(this, i), { fn: n, thisArg: this, args: i });
  }
  return r;
}
function mT(e, n = {}) {
  let r, i;
  return (l) => {
    const c = ts(e), f = ts(n.maxWait);
    if (r && clearTimeout(r), c <= 0 || f !== void 0 && f <= 0)
      return i && (clearTimeout(i), i = null), l();
    f && !i && (i = setTimeout(() => {
      r && clearTimeout(r), i = null, l();
    }, f)), r = setTimeout(() => {
      i && clearTimeout(i), i = null, l();
    }, c);
  };
}
function bT(e) {
  return e;
}
function fs(e) {
  return Cw() ? (Aw(e), !0) : !1;
}
function yT(e, n = 200, r = {}) {
  return gT(mT(n, r), e);
}
function _T(e, n = 200, r = {}) {
  if (n <= 0)
    return e;
  const i = J(e.value), s = yT(() => {
    i.value = e.value;
  }, n, r);
  return pe(e, () => s()), i;
}
function wT(e, n = !0) {
  dn() ? at(e) : n ? e() : He(e);
}
function pp(e, n, r = {}) {
  const {
    immediate: i = !0
  } = r, s = J(!1);
  let l = null;
  function c() {
    l && (clearTimeout(l), l = null);
  }
  function f() {
    s.value = !1, c();
  }
  function d(...g) {
    c(), s.value = !0, l = setTimeout(() => {
      s.value = !1, l = null, e(...g);
    }, ts(n));
  }
  return i && (s.value = !0, Rt && d()), fs(f), {
    isPending: s,
    start: d,
    stop: f
  };
}
function kr(e) {
  var n;
  const r = ts(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const Ru = Rt ? window : void 0;
function ro(...e) {
  let n, r, i, s;
  if (hT(e[0]) ? ([r, i, s] = e, n = Ru) : [n, r, i, s] = e, !n)
    return Bl;
  let l = Bl;
  const c = pe(() => kr(n), (d) => {
    l(), d && (d.addEventListener(r, i, s), l = () => {
      d.removeEventListener(r, i, s), l = Bl;
    });
  }, { immediate: !0, flush: "post" }), f = () => {
    c(), l();
  };
  return fs(f), f;
}
function ET(e, n, r = {}) {
  const { window: i = Ru, ignore: s, capture: l = !0, detectIframe: c = !1 } = r;
  if (!i)
    return;
  const f = J(!0);
  let d;
  const g = (E) => {
    i.clearTimeout(d);
    const S = kr(e), h = E.composedPath();
    !S || S === E.target || h.includes(S) || !f.value || s && s.length > 0 && s.some((w) => {
      const O = kr(w);
      return O && (E.target === O || h.includes(O));
    }) || n(E);
  }, y = [
    ro(i, "click", g, { passive: !0, capture: l }),
    ro(i, "pointerdown", (E) => {
      const S = kr(e);
      f.value = !!S && !E.composedPath().includes(S);
    }, { passive: !0 }),
    ro(i, "pointerup", (E) => {
      if (E.button === 0) {
        const S = E.composedPath();
        E.composedPath = () => S, d = i.setTimeout(() => g(E), 50);
      }
    }, { passive: !0 }),
    c && ro(i, "blur", (E) => {
      var S;
      const h = kr(e);
      ((S = document.activeElement) == null ? void 0 : S.tagName) === "IFRAME" && !(h != null && h.contains(document.activeElement)) && n(E);
    })
  ].filter(Boolean);
  return () => y.forEach((E) => E());
}
function ST(e, n = !1) {
  const r = J(), i = () => r.value = Boolean(e());
  return i(), wT(i, n), r;
}
const lu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, uu = "__vueuse_ssr_handlers__";
lu[uu] = lu[uu] || {};
lu[uu];
var vp = Object.getOwnPropertySymbols, xT = Object.prototype.hasOwnProperty, OT = Object.prototype.propertyIsEnumerable, TT = (e, n) => {
  var r = {};
  for (var i in e)
    xT.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && vp)
    for (var i of vp(e))
      n.indexOf(i) < 0 && OT.call(e, i) && (r[i] = e[i]);
  return r;
};
function Uo(e, n, r = {}) {
  const i = r, { window: s = Ru } = i, l = TT(i, ["window"]);
  let c;
  const f = ST(() => s && "ResizeObserver" in s), d = () => {
    c && (c.disconnect(), c = void 0);
  }, g = pe(() => kr(e), (_) => {
    d(), f.value && s && _ && (c = new ResizeObserver(n), c.observe(_, l));
  }, { immediate: !0, flush: "post" }), y = () => {
    d(), g();
  };
  return fs(y), {
    isSupported: f,
    stop: y
  };
}
var hp;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hp || (hp = {}));
var CT = Object.defineProperty, gp = Object.getOwnPropertySymbols, AT = Object.prototype.hasOwnProperty, IT = Object.prototype.propertyIsEnumerable, mp = (e, n, r) => n in e ? CT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, $T = (e, n) => {
  for (var r in n || (n = {}))
    AT.call(n, r) && mp(e, r, n[r]);
  if (gp)
    for (var r of gp(n))
      IT.call(n, r) && mp(e, r, n[r]);
  return e;
};
const MT = {
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
$T({
  linear: bT
}, MT);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const xi = () => {
}, PT = Object.prototype.hasOwnProperty, bp = (e, n) => PT.call(e, n), Jn = Array.isArray, Nr = (e) => typeof e == "function", Et = (e) => typeof e == "string", _r = (e) => e !== null && typeof e == "object", RT = Object.prototype.toString, LT = (e) => RT.call(e), kl = (e) => LT(e).slice(8, -1), Fo = (e) => e === void 0, Oi = (e) => typeof Element > "u" ? !1 : e instanceof Element, FT = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Nl = (e, n, r) => ({
  get value() {
    return cn(e, n, r);
  },
  set value(i) {
    vT(e, n, i);
  }
});
class Kv extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Bo(e, n) {
  throw new Kv(`[${e}] ${n}`);
}
function ct(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const r = Et(e) ? new Kv(`[${e}] ${n}`) : e;
    console.warn(r);
  }
}
const BT = "utils/dom/style", jv = (e = "") => e.split(" ").filter((n) => !!n.trim()), kT = (e, n) => {
  if (!e || !n)
    return !1;
  if (n.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(n);
}, Oa = (e, n) => {
  !e || !n.trim() || e.classList.add(...jv(n));
}, Dl = (e, n) => {
  !e || !n.trim() || e.classList.remove(...jv(n));
};
function Ti(e, n = "px") {
  if (!e)
    return "";
  if (Et(e))
    return e;
  if (On(e))
    return `${e}${n}`;
  ct(BT, "binding value must be a string or number");
}
function NT(e, n) {
  if (!Rt)
    return;
  if (!n) {
    e.scrollTop = 0;
    return;
  }
  const r = [];
  let i = n.offsetParent;
  for (; i !== null && e !== i && e.contains(i); )
    r.push(i), i = i.offsetParent;
  const s = n.offsetTop + r.reduce((d, g) => d + g.offsetTop, 0), l = s + n.offsetHeight, c = e.scrollTop, f = c + e.clientHeight;
  s < c ? e.scrollTop = s : l > f && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.9 */
var Or = (e, n) => {
  let r = e.__vccOpts || e;
  for (let [i, s] of n)
    r[i] = s;
  return r;
}, DT = {
  name: "ArrowDown"
}, WT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zT = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), HT = [
  zT
];
function qT(e, n, r, i, s, l) {
  return G(), re("svg", WT, HT);
}
var Gv = /* @__PURE__ */ Or(DT, [["render", qT], ["__file", "arrow-down.vue"]]), UT = {
  name: "ArrowRight"
}, VT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, KT = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), jT = [
  KT
];
function GT(e, n, r, i, s, l) {
  return G(), re("svg", VT, jT);
}
var YT = /* @__PURE__ */ Or(UT, [["render", GT], ["__file", "arrow-right.vue"]]), ZT = {
  name: "CircleCheck"
}, XT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, JT = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), QT = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), eC = [
  JT,
  QT
];
function tC(e, n, r, i, s, l) {
  return G(), re("svg", XT, eC);
}
var nC = /* @__PURE__ */ Or(ZT, [["render", tC], ["__file", "circle-check.vue"]]), rC = {
  name: "CircleClose"
}, oC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, iC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), aC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), sC = [
  iC,
  aC
];
function lC(e, n, r, i, s, l) {
  return G(), re("svg", oC, sC);
}
var Lu = /* @__PURE__ */ Or(rC, [["render", lC], ["__file", "circle-close.vue"]]), uC = {
  name: "Close"
}, cC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), dC = [
  fC
];
function pC(e, n, r, i, s, l) {
  return G(), re("svg", cC, dC);
}
var yp = /* @__PURE__ */ Or(uC, [["render", pC], ["__file", "close.vue"]]), vC = {
  name: "Hide"
}, hC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gC = /* @__PURE__ */ de("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), mC = /* @__PURE__ */ de("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), bC = [
  gC,
  mC
];
function yC(e, n, r, i, s, l) {
  return G(), re("svg", hC, bC);
}
var _C = /* @__PURE__ */ Or(vC, [["render", yC], ["__file", "hide.vue"]]), wC = {
  name: "Loading"
}, EC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, SC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), xC = [
  SC
];
function OC(e, n, r, i, s, l) {
  return G(), re("svg", EC, xC);
}
var TC = /* @__PURE__ */ Or(wC, [["render", OC], ["__file", "loading.vue"]]), CC = {
  name: "More"
}, AC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, IC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), $C = [
  IC
];
function MC(e, n, r, i, s, l) {
  return G(), re("svg", AC, $C);
}
var PC = /* @__PURE__ */ Or(CC, [["render", MC], ["__file", "more.vue"]]), RC = {
  name: "View"
}, LC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, FC = /* @__PURE__ */ de("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), BC = [
  FC
];
function kC(e, n, r, i, s, l) {
  return G(), re("svg", LC, BC);
}
var NC = /* @__PURE__ */ Or(RC, [["render", kC], ["__file", "view.vue"]]);
const Yv = "__epPropKey", Ne = (e) => e, DC = (e) => _r(e) && !!e[Yv], ds = (e, n) => {
  if (!_r(e) || DC(e))
    return e;
  const { values: r, required: i, default: s, type: l, validator: c } = e, d = {
    type: l,
    required: !!i,
    validator: r || c ? (g) => {
      let y = !1, _ = [];
      if (r && (_ = Array.from(r), bp(e, "default") && _.push(s), y || (y = _.includes(g))), c && (y || (y = c(g))), !y && _.length > 0) {
        const E = [...new Set(_)].map((S) => JSON.stringify(S)).join(", ");
        Iw(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${E}], got value ${JSON.stringify(g)}.`);
      }
      return y;
    } : void 0,
    [Yv]: !0
  };
  return bp(e, "default") && (d.default = s), d;
}, tt = (e) => Uv(Object.entries(e).map(([n, r]) => [
  n,
  ds(r, n)
])), Dr = Ne([
  String,
  Object,
  Function
]), WC = {
  validating: TC,
  success: nC,
  error: Lu
}, qn = (e, n) => {
  if (e.install = (r) => {
    for (const i of [e, ...Object.values(n != null ? n : {})])
      r.component(i.name, i);
  }, n)
    for (const [r, i] of Object.entries(n))
      e[r] = i;
  return e;
}, rr = (e) => (e.install = xi, e), zt = {
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
}, Tt = "update:modelValue", Fu = "change", Mi = ["", "default", "small", "large"], zC = {
  large: 40,
  default: 32,
  small: 24
}, HC = (e) => zC[e || "default"], qC = (e) => ["", ...Mi].includes(e), cu = (e) => {
  const n = Jn(e) ? e : [e], r = [];
  return n.forEach((i) => {
    Jn(i) ? r.push(...cu(i)) : uv(i) && Jn(i.children) ? r.push(...cu(i.children)) : r.push(i);
  }), r;
}, Zv = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), UC = () => Math.floor(Math.random() * 1e4), Xv = (e) => e, VC = ["class", "style"], KC = /^on[A-Z]/, jC = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: r } = e, i = B(() => ((r == null ? void 0 : r.value) || []).concat(VC)), s = dn();
  return s ? B(() => {
    var l;
    return Uv(Object.entries((l = s.proxy) == null ? void 0 : l.$attrs).filter(([c]) => !i.value.includes(c) && !(n && KC.test(c))));
  }) : (ct("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), B(() => ({})));
}, Vo = Symbol("checkboxGroupContextKey"), GC = Symbol(), Ko = Symbol("formContextKey"), uo = Symbol("formItemContextKey"), Jv = Symbol("radioGroupKey"), Qv = Symbol("scrollbarContextKey"), Bu = Symbol("popper"), eh = Symbol("popperContent"), ku = Symbol("elTooltip"), th = (e) => {
  const n = dn();
  return B(() => {
    var r, i;
    return (i = ((r = n.proxy) == null ? void 0 : r.$props)[e]) != null ? i : void 0;
  });
}, _p = J();
function jo(e, n = void 0) {
  const r = dn() ? De(GC, _p) : _p;
  return e ? B(() => {
    var i, s;
    return (s = (i = r.value) == null ? void 0 : i[e]) != null ? s : n;
  }) : r;
}
const Pi = ds({
  type: String,
  values: Mi,
  required: !1
}), Hr = (e, n = {}) => {
  const r = J(void 0), i = n.prop ? r : th("size"), s = n.global ? r : jo("size"), l = n.form ? { size: void 0 } : De(Ko, void 0), c = n.formItem ? { size: void 0 } : De(uo, void 0);
  return B(() => i.value || v(e) || (c == null ? void 0 : c.size) || (l == null ? void 0 : l.size) || s.value || "");
}, Nu = (e) => {
  const n = th("disabled"), r = De(Ko, void 0);
  return B(() => n.value || v(e) || (r == null ? void 0 : r.disabled) || !1);
}, YC = ({ from: e, replacement: n, scope: r, version: i, ref: s, type: l = "API" }, c) => {
  pe(() => v(c), (f) => {
    f && ct(r, `[${l}] ${e} is about to be deprecated in version ${i}, please use ${n} instead.
For more detail, please visit: ${s}
`);
  }, {
    immediate: !0
  });
}, ZC = (e) => ({
  focus: () => {
    var n, r;
    (r = (n = e.value) == null ? void 0 : n.focus) == null || r.call(n);
  }
}), Du = "el", XC = "is-", to = (e, n, r, i, s) => {
  let l = `${e}-${n}`;
  return r && (l += `-${r}`), i && (l += `__${i}`), s && (l += `--${s}`), l;
}, Be = (e) => {
  const n = jo("namespace", Du);
  return {
    namespace: n,
    b: (h = "") => to(n.value, e, h, "", ""),
    e: (h) => h ? to(n.value, e, "", h, "") : "",
    m: (h) => h ? to(n.value, e, "", "", h) : "",
    be: (h, w) => h && w ? to(n.value, e, h, w, "") : "",
    em: (h, w) => h && w ? to(n.value, e, "", h, w) : "",
    bm: (h, w) => h && w ? to(n.value, e, h, "", w) : "",
    bem: (h, w, O) => h && w && O ? to(n.value, e, h, w, O) : "",
    is: (h, ...w) => {
      const O = w.length >= 1 ? w[0] : !0;
      return h && O ? `${XC}${h}` : "";
    },
    cssVar: (h) => {
      const w = {};
      for (const O in h)
        h[O] && (w[`--${n.value}-${O}`] = h[O]);
      return w;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const w = {};
      for (const O in h)
        h[O] && (w[`--${n.value}-${e}-${O}`] = h[O]);
      return w;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
}, wp = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, JC = Symbol("elIdInjection"), ps = (e) => {
  const n = De(JC, wp);
  !Rt && n === wp && ct("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const r = jo("namespace", Du);
  return B(() => v(e) || `${r.value}-id-${n.prefix}-${n.current++}`);
}, Go = () => {
  const e = De(Ko, void 0), n = De(uo, void 0);
  return {
    form: e,
    formItem: n
  };
}, vs = (e, {
  formItemContext: n,
  disableIdGeneration: r,
  disableIdManagement: i
}) => {
  r || (r = J(!1)), i || (i = J(!1));
  const s = J();
  let l;
  const c = B(() => {
    var f;
    return !!(!e.label && n && n.inputIds && ((f = n.inputIds) == null ? void 0 : f.length) <= 1);
  });
  return at(() => {
    l = pe([Wn(e, "id"), r], ([f, d]) => {
      const g = f != null ? f : d ? void 0 : ps().value;
      g !== s.value && (n != null && n.removeInputId && (s.value && n.removeInputId(s.value), !(i != null && i.value) && !d && g && n.addInputId(g)), s.value = g);
    }, { immediate: !0 });
  }), cv(() => {
    l && l(), n != null && n.removeInputId && s.value && n.removeInputId(s.value);
  }), {
    isLabeledByFormItem: c,
    inputId: s
  };
};
var QC = {
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
const eA = (e) => (n, r) => tA(n, r, v(e)), tA = (e, n, r) => cn(r, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var l;
  return `${(l = n == null ? void 0 : n[s]) != null ? l : `{${s}}`}`;
}), nA = (e) => {
  const n = B(() => v(e).name), r = so(e) ? e : J(e);
  return {
    lang: n,
    locale: r,
    t: eA(e)
  };
}, Wu = () => {
  const e = jo("locale");
  return nA(B(() => e.value || QC));
}, rA = ds({
  type: Ne(Boolean),
  default: null
}), oA = ds({
  type: Ne(Function)
}), iA = (e) => {
  const n = `update:${e}`, r = `onUpdate:${e}`, i = [n], s = {
    [e]: rA,
    [r]: oA
  };
  return {
    useModelToggle: ({
      indicator: c,
      toggleReason: f,
      shouldHideWhenRouteChanges: d,
      shouldProceed: g,
      onShow: y,
      onHide: _
    }) => {
      const E = dn(), { emit: S } = E, h = E.props, w = B(() => Nr(h[r])), O = B(() => h[e] === null), A = (R) => {
        c.value !== !0 && (c.value = !0, f && (f.value = R), Nr(y) && y(R));
      }, L = (R) => {
        c.value !== !1 && (c.value = !1, f && (f.value = R), Nr(_) && _(R));
      }, C = (R) => {
        if (h.disabled === !0 || Nr(g) && !g())
          return;
        const z = w.value && Rt;
        z && S(n, !0), (O.value || !z) && A(R);
      }, F = (R) => {
        if (h.disabled === !0 || !Rt)
          return;
        const z = w.value && Rt;
        z && S(n, !1), (O.value || !z) && L(R);
      }, $ = (R) => {
        !tr(R) || (h.disabled && R ? w.value && S(n, !1) : c.value !== R && (R ? A() : L()));
      }, P = () => {
        c.value ? F() : C();
      };
      return pe(() => h[e], $), d && E.appContext.config.globalProperties.$route !== void 0 && pe(() => ({
        ...E.proxy.$route
      }), () => {
        d.value && c.value && F();
      }), at(() => {
        $(h[e]);
      }), {
        hide: F,
        show: C,
        toggle: P,
        hasUpdateHandler: w
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: i
  };
};
function aA() {
  let e;
  const n = (i, s) => {
    r(), e = window.setTimeout(i, s);
  }, r = () => window.clearTimeout(e);
  return fs(() => r()), {
    registerTimeout: n,
    cancelTimeout: r
  };
}
let Po = [];
const Ep = (e) => {
  const n = e;
  n.key === zt.esc && Po.forEach((r) => r(n));
}, sA = (e) => {
  at(() => {
    Po.length === 0 && document.addEventListener("keydown", Ep), Rt && Po.push(e);
  }), Jt(() => {
    Po = Po.filter((n) => n !== e), Po.length === 0 && Rt && document.removeEventListener("keydown", Ep);
  });
};
let Sp;
const lA = jo("namespace", Du), nh = `${lA.value}-popper-container-${UC()}`, rh = `#${nh}`, uA = () => {
  const e = document.createElement("div");
  return e.id = nh, document.body.appendChild(e), e;
}, cA = () => {
  $w(() => {
    !Rt || (process.env.NODE_ENV === "test" || !Sp || !document.body.querySelector(rh)) && (Sp = uA());
  });
}, fA = tt({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), dA = ({
  showAfter: e,
  hideAfter: n,
  open: r,
  close: i
}) => {
  const { registerTimeout: s } = aA();
  return {
    onOpen: (f) => {
      s(() => {
        r(f);
      }, v(e));
    },
    onClose: (f) => {
      s(() => {
        i(f);
      }, v(n));
    }
  };
}, oh = Symbol("elForwardRef"), pA = (e) => {
  Lt(oh, {
    setForwardRef: (r) => {
      e.value = r;
    }
  });
}, vA = (e) => ({
  mounted(n) {
    e(n);
  },
  updated(n) {
    e(n);
  },
  unmounted() {
    e(null);
  }
}), xp = J(0), hA = () => {
  const e = jo("zIndex", 2e3), n = B(() => e.value + xp.value);
  return {
    initialZIndex: e,
    currentZIndex: n,
    nextZIndex: () => (xp.value++, n.value)
  };
};
function gA(e) {
  const n = J();
  function r() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: l, value: c } = e.value;
    if (s == null || l == null)
      return;
    const f = c.slice(0, Math.max(0, s)), d = c.slice(Math.max(0, l));
    n.value = {
      selectionStart: s,
      selectionEnd: l,
      value: c,
      beforeTxt: f,
      afterTxt: d
    };
  }
  function i() {
    if (e.value == null || n.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: l, afterTxt: c, selectionStart: f } = n.value;
    if (l == null || c == null || f == null)
      return;
    let d = s.length;
    if (s.endsWith(c))
      d = s.length - c.length;
    else if (s.startsWith(l))
      d = l.length;
    else {
      const g = l[f - 1], y = s.indexOf(g, f - 1);
      y !== -1 && (d = y + 1);
    }
    e.value.setSelectionRange(d, d);
  }
  return [r, i];
}
var Ke = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [i, s] of n)
    r[i] = s;
  return r;
};
const mA = tt({
  size: {
    type: Ne([Number, String])
  },
  color: {
    type: String
  }
}), bA = le({
  name: "ElIcon",
  inheritAttrs: !1
}), yA = /* @__PURE__ */ le({
  ...bA,
  props: mA,
  setup(e) {
    const n = e, r = Be("icon"), i = B(() => {
      const { size: s, color: l } = n;
      return !s && !l ? {} : {
        fontSize: Fo(s) ? void 0 : Ti(s),
        "--color": l
      };
    });
    return (s, l) => (G(), re("i", Xn({
      class: v(r).b(),
      style: v(i)
    }, s.$attrs), [
      Ce(s.$slots, "default")
    ], 16));
  }
});
var _A = /* @__PURE__ */ Ke(yA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Dn = qn(_A);
let kn;
const wA = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, EA = [
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
function SA(e) {
  const n = window.getComputedStyle(e), r = n.getPropertyValue("box-sizing"), i = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), s = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: EA.map((c) => `${c}:${n.getPropertyValue(c)}`).join(";"), paddingSize: i, borderSize: s, boxSizing: r };
}
function Op(e, n = 1, r) {
  var i;
  kn || (kn = document.createElement("textarea"), document.body.appendChild(kn));
  const { paddingSize: s, borderSize: l, boxSizing: c, contextStyle: f } = SA(e);
  kn.setAttribute("style", `${f};${wA}`), kn.value = e.value || e.placeholder || "";
  let d = kn.scrollHeight;
  const g = {};
  c === "border-box" ? d = d + l : c === "content-box" && (d = d - s), kn.value = "";
  const y = kn.scrollHeight - s;
  if (On(n)) {
    let _ = y * n;
    c === "border-box" && (_ = _ + s + l), d = Math.max(_, d), g.minHeight = `${_}px`;
  }
  if (On(r)) {
    let _ = y * r;
    c === "border-box" && (_ = _ + s + l), d = Math.min(_, d);
  }
  return g.height = `${d}px`, (i = kn.parentNode) == null || i.removeChild(kn), kn = void 0, g;
}
const xA = tt({
  id: {
    type: String,
    default: void 0
  },
  size: Pi,
  disabled: Boolean,
  modelValue: {
    type: Ne([
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
    type: Ne([Boolean, Object]),
    default: !1
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
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Dr
  },
  prefixIcon: {
    type: Dr
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
    default: !0
  },
  inputStyle: {
    type: Ne([Object, Array, String]),
    default: () => Xv({})
  }
}), OA = {
  [Tt]: (e) => Et(e),
  input: (e) => Et(e),
  change: (e) => Et(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, TA = ["role"], CA = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], AA = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], IA = le({
  name: "ElInput",
  inheritAttrs: !1
}), $A = /* @__PURE__ */ le({
  ...IA,
  props: xA,
  emits: OA,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = bu(), l = $i(), c = B(() => {
      const V = {};
      return i.containerRole === "combobox" && (V["aria-haspopup"] = s["aria-haspopup"], V["aria-owns"] = s["aria-owns"], V["aria-expanded"] = s["aria-expanded"]), V;
    }), f = jC({
      excludeKeys: B(() => Object.keys(c.value))
    }), { form: d, formItem: g } = Go(), { inputId: y } = vs(i, {
      formItemContext: g
    }), _ = Hr(), E = Nu(), S = Be("input"), h = Be("textarea"), w = hi(), O = hi(), A = J(!1), L = J(!1), C = J(!1), F = J(!1), $ = J(), P = hi(i.inputStyle), R = B(() => w.value || O.value), z = B(() => {
      var V;
      return (V = d == null ? void 0 : d.statusIcon) != null ? V : !1;
    }), Z = B(() => (g == null ? void 0 : g.validateState) || ""), j = B(() => Z.value && WC[Z.value]), K = B(() => F.value ? NC : _C), U = B(() => [
      s.style,
      i.inputStyle
    ]), D = B(() => [
      i.inputStyle,
      P.value,
      { resize: i.resize }
    ]), X = B(() => cs(i.modelValue) ? "" : String(i.modelValue)), ie = B(() => i.clearable && !E.value && !i.readonly && !!X.value && (A.value || L.value)), ce = B(() => i.showPassword && !E.value && !i.readonly && !!X.value && (!!X.value || A.value)), ne = B(() => i.showWordLimit && !!f.value.maxlength && (i.type === "text" || i.type === "textarea") && !E.value && !i.readonly && !i.showPassword), fe = B(() => Array.from(X.value).length), he = B(() => !!ne.value && fe.value > Number(f.value.maxlength)), Se = B(() => !!l.suffix || !!i.suffixIcon || ie.value || i.showPassword || ne.value || !!Z.value && z.value), [xe, bt] = gA(w);
    Uo(O, (V) => {
      if (!ne.value || i.resize !== "both")
        return;
      const _e = V[0], { width: st } = _e.contentRect;
      $.value = {
        right: `calc(100% - ${st + 15 + 6}px)`
      };
    });
    const nt = () => {
      const { type: V, autosize: _e } = i;
      if (!(!Rt || V !== "textarea"))
        if (_e) {
          const st = _r(_e) ? _e.minRows : void 0, Bt = _r(_e) ? _e.maxRows : void 0;
          P.value = {
            ...Op(O.value, st, Bt)
          };
        } else
          P.value = {
            minHeight: Op(O.value).minHeight
          };
    }, Je = () => {
      const V = R.value;
      !V || V.value === X.value || (V.value = X.value);
    }, qe = async (V) => {
      xe();
      let { value: _e } = V.target;
      if (i.formatter && (_e = i.parser ? i.parser(_e) : _e, _e = i.formatter(_e)), !C.value) {
        if (_e === X.value) {
          Je();
          return;
        }
        r(Tt, _e), r("input", _e), await He(), Je(), bt();
      }
    }, gt = (V) => {
      r("change", V.target.value);
    }, ae = (V) => {
      r("compositionstart", V), C.value = !0;
    }, ve = (V) => {
      var _e;
      r("compositionupdate", V);
      const st = (_e = V.target) == null ? void 0 : _e.value, Bt = st[st.length - 1] || "";
      C.value = !Zv(Bt);
    }, We = (V) => {
      r("compositionend", V), C.value && (C.value = !1, qe(V));
    }, Ue = () => {
      F.value = !F.value, Ye();
    }, Ye = async () => {
      var V;
      await He(), (V = R.value) == null || V.focus();
    }, rt = () => {
      var V;
      return (V = R.value) == null ? void 0 : V.blur();
    }, pn = (V) => {
      A.value = !0, r("focus", V);
    }, mt = (V) => {
      var _e;
      A.value = !1, r("blur", V), i.validateEvent && ((_e = g == null ? void 0 : g.validate) == null || _e.call(g, "blur").catch((st) => ct(st)));
    }, Qt = (V) => {
      L.value = !1, r("mouseleave", V);
    }, vn = (V) => {
      L.value = !0, r("mouseenter", V);
    }, yt = (V) => {
      r("keydown", V);
    }, Vn = () => {
      var V;
      (V = R.value) == null || V.select();
    }, Ft = () => {
      r(Tt, ""), r("change", ""), r("clear"), r("input", "");
    };
    return pe(() => i.modelValue, () => {
      var V;
      He(() => nt()), i.validateEvent && ((V = g == null ? void 0 : g.validate) == null || V.call(g, "change").catch((_e) => ct(_e)));
    }), pe(X, () => Je()), pe(() => i.type, async () => {
      await He(), Je(), nt();
    }), at(() => {
      !i.formatter && i.parser && ct("ElInput", "If you set the parser, you also need to set the formatter."), Je(), He(nt);
    }), n({
      input: w,
      textarea: O,
      ref: R,
      textareaStyle: D,
      autosize: Wn(i, "autosize"),
      focus: Ye,
      blur: rt,
      select: Vn,
      clear: Ft,
      resizeTextarea: nt
    }), (V, _e) => It((G(), re("div", Xn(v(c), {
      class: [
        V.type === "textarea" ? v(h).b() : v(S).b(),
        v(S).m(v(_)),
        v(S).is("disabled", v(E)),
        v(S).is("exceed", v(he)),
        {
          [v(S).b("group")]: V.$slots.prepend || V.$slots.append,
          [v(S).bm("group", "append")]: V.$slots.append,
          [v(S).bm("group", "prepend")]: V.$slots.prepend,
          [v(S).m("prefix")]: V.$slots.prefix || V.prefixIcon,
          [v(S).m("suffix")]: V.$slots.suffix || V.suffixIcon || V.clearable || V.showPassword,
          [v(S).bm("suffix", "password-clear")]: v(ie) && v(ce)
        },
        V.$attrs.class
      ],
      style: v(U),
      role: V.containerRole,
      onMouseenter: vn,
      onMouseleave: Qt
    }), [
      we(" input "),
      V.type !== "textarea" ? (G(), re(Ht, { key: 0 }, [
        we(" prepend slot "),
        V.$slots.prepend ? (G(), re("div", {
          key: 0,
          class: ee(v(S).be("group", "prepend"))
        }, [
          Ce(V.$slots, "prepend")
        ], 2)) : we("v-if", !0),
        de("div", {
          class: ee([v(S).e("wrapper"), v(S).is("focus", A.value)])
        }, [
          we(" prefix slot "),
          V.$slots.prefix || V.prefixIcon ? (G(), re("span", {
            key: 0,
            class: ee(v(S).e("prefix"))
          }, [
            de("span", {
              class: ee(v(S).e("prefix-inner"))
            }, [
              Ce(V.$slots, "prefix"),
              V.prefixIcon ? (G(), Pe(v(Dn), {
                key: 0,
                class: ee(v(S).e("icon"))
              }, {
                default: Te(() => [
                  (G(), Pe(xn(V.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0)
            ], 2)
          ], 2)) : we("v-if", !0),
          de("input", Xn({
            id: v(y),
            ref_key: "input",
            ref: w,
            class: v(S).e("inner")
          }, v(f), {
            type: V.showPassword ? F.value ? "text" : "password" : V.type,
            disabled: v(E),
            formatter: V.formatter,
            parser: V.parser,
            readonly: V.readonly,
            autocomplete: V.autocomplete,
            tabindex: V.tabindex,
            "aria-label": V.label,
            placeholder: V.placeholder,
            style: V.inputStyle,
            form: i.form,
            onCompositionstart: ae,
            onCompositionupdate: ve,
            onCompositionend: We,
            onInput: qe,
            onFocus: pn,
            onBlur: mt,
            onChange: gt,
            onKeydown: yt
          }), null, 16, CA),
          we(" suffix slot "),
          v(Se) ? (G(), re("span", {
            key: 1,
            class: ee(v(S).e("suffix"))
          }, [
            de("span", {
              class: ee(v(S).e("suffix-inner"))
            }, [
              !v(ie) || !v(ce) || !v(ne) ? (G(), re(Ht, { key: 0 }, [
                Ce(V.$slots, "suffix"),
                V.suffixIcon ? (G(), Pe(v(Dn), {
                  key: 0,
                  class: ee(v(S).e("icon"))
                }, {
                  default: Te(() => [
                    (G(), Pe(xn(V.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : we("v-if", !0)
              ], 64)) : we("v-if", !0),
              v(ie) ? (G(), Pe(v(Dn), {
                key: 1,
                class: ee([v(S).e("icon"), v(S).e("clear")]),
                onMousedown: Wt(v(xi), ["prevent"]),
                onClick: Ft
              }, {
                default: Te(() => [
                  ut(v(Lu))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : we("v-if", !0),
              v(ce) ? (G(), Pe(v(Dn), {
                key: 2,
                class: ee([v(S).e("icon"), v(S).e("password")]),
                onClick: Ue
              }, {
                default: Te(() => [
                  (G(), Pe(xn(v(K))))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0),
              v(ne) ? (G(), re("span", {
                key: 3,
                class: ee(v(S).e("count"))
              }, [
                de("span", {
                  class: ee(v(S).e("count-inner"))
                }, ht(v(fe)) + " / " + ht(v(f).maxlength), 3)
              ], 2)) : we("v-if", !0),
              v(Z) && v(j) && v(z) ? (G(), Pe(v(Dn), {
                key: 4,
                class: ee([
                  v(S).e("icon"),
                  v(S).e("validateIcon"),
                  v(S).is("loading", v(Z) === "validating")
                ])
              }, {
                default: Te(() => [
                  (G(), Pe(xn(v(j))))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0)
            ], 2)
          ], 2)) : we("v-if", !0)
        ], 2),
        we(" append slot "),
        V.$slots.append ? (G(), re("div", {
          key: 1,
          class: ee(v(S).be("group", "append"))
        }, [
          Ce(V.$slots, "append")
        ], 2)) : we("v-if", !0)
      ], 64)) : (G(), re(Ht, { key: 1 }, [
        we(" textarea "),
        de("textarea", Xn({
          id: v(y),
          ref_key: "textarea",
          ref: O,
          class: v(h).e("inner")
        }, v(f), {
          tabindex: V.tabindex,
          disabled: v(E),
          readonly: V.readonly,
          autocomplete: V.autocomplete,
          style: v(D),
          "aria-label": V.label,
          placeholder: V.placeholder,
          form: i.form,
          onCompositionstart: ae,
          onCompositionupdate: ve,
          onCompositionend: We,
          onInput: qe,
          onFocus: pn,
          onBlur: mt,
          onChange: gt,
          onKeydown: yt
        }), null, 16, AA),
        v(ne) ? (G(), re("span", {
          key: 0,
          style: Ot($.value),
          class: ee(v(S).e("count"))
        }, ht(v(fe)) + " / " + ht(v(f).maxlength), 7)) : we("v-if", !0)
      ], 64))
    ], 16, TA)), [
      [qr, V.type !== "hidden"]
    ]);
  }
});
var MA = /* @__PURE__ */ Ke($A, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ih = qn(MA), Ro = 4, PA = {
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
}, RA = ({
  move: e,
  size: n,
  bar: r
}) => ({
  [r.size]: n,
  transform: `translate${r.axis}(${e}%)`
}), LA = tt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), FA = "Thumb", BA = /* @__PURE__ */ le({
  __name: "thumb",
  props: LA,
  setup(e) {
    const n = e, r = De(Qv), i = Be("scrollbar");
    r || Bo(FA, "can not inject scrollbar context");
    const s = J(), l = J(), c = J({}), f = J(!1);
    let d = !1, g = !1, y = Rt ? document.onselectstart : null;
    const _ = B(() => PA[n.vertical ? "vertical" : "horizontal"]), E = B(() => RA({
      size: n.size,
      move: n.move,
      bar: _.value
    })), S = B(() => s.value[_.value.offset] ** 2 / r.wrapElement[_.value.scrollSize] / n.ratio / l.value[_.value.offset]), h = (P) => {
      var R;
      if (P.stopPropagation(), P.ctrlKey || [1, 2].includes(P.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), O(P);
      const z = P.currentTarget;
      !z || (c.value[_.value.axis] = z[_.value.offset] - (P[_.value.client] - z.getBoundingClientRect()[_.value.direction]));
    }, w = (P) => {
      if (!l.value || !s.value || !r.wrapElement)
        return;
      const R = Math.abs(P.target.getBoundingClientRect()[_.value.direction] - P[_.value.client]), z = l.value[_.value.offset] / 2, Z = (R - z) * 100 * S.value / s.value[_.value.offset];
      r.wrapElement[_.value.scroll] = Z * r.wrapElement[_.value.scrollSize] / 100;
    }, O = (P) => {
      P.stopImmediatePropagation(), d = !0, document.addEventListener("mousemove", A), document.addEventListener("mouseup", L), y = document.onselectstart, document.onselectstart = () => !1;
    }, A = (P) => {
      if (!s.value || !l.value || d === !1)
        return;
      const R = c.value[_.value.axis];
      if (!R)
        return;
      const z = (s.value.getBoundingClientRect()[_.value.direction] - P[_.value.client]) * -1, Z = l.value[_.value.offset] - R, j = (z - Z) * 100 * S.value / s.value[_.value.offset];
      r.wrapElement[_.value.scroll] = j * r.wrapElement[_.value.scrollSize] / 100;
    }, L = () => {
      d = !1, c.value[_.value.axis] = 0, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", L), $(), g && (f.value = !1);
    }, C = () => {
      g = !1, f.value = !!n.size;
    }, F = () => {
      g = !0, f.value = d;
    };
    Jt(() => {
      $(), document.removeEventListener("mouseup", L);
    });
    const $ = () => {
      document.onselectstart !== y && (document.onselectstart = y);
    };
    return ro(Wn(r, "scrollbarElement"), "mousemove", C), ro(Wn(r, "scrollbarElement"), "mouseleave", F), (P, R) => (G(), Pe(co, {
      name: v(i).b("fade"),
      persisted: ""
    }, {
      default: Te(() => [
        It(de("div", {
          ref_key: "instance",
          ref: s,
          class: ee([v(i).e("bar"), v(i).is(v(_).key)]),
          onMousedown: w
        }, [
          de("div", {
            ref_key: "thumb",
            ref: l,
            class: ee(v(i).e("thumb")),
            style: Ot(v(E)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [qr, P.always || f.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Tp = /* @__PURE__ */ Ke(BA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const kA = tt({
  always: {
    type: Boolean,
    default: !0
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
}), NA = /* @__PURE__ */ le({
  __name: "bar",
  props: kA,
  setup(e, { expose: n }) {
    const r = e, i = J(0), s = J(0);
    return n({
      handleScroll: (c) => {
        if (c) {
          const f = c.offsetHeight - Ro, d = c.offsetWidth - Ro;
          s.value = c.scrollTop * 100 / f * r.ratioY, i.value = c.scrollLeft * 100 / d * r.ratioX;
        }
      }
    }), (c, f) => (G(), re(Ht, null, [
      ut(Tp, {
        move: i.value,
        ratio: c.ratioX,
        size: c.width,
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ut(Tp, {
        move: s.value,
        ratio: c.ratioY,
        size: c.height,
        vertical: "",
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var DA = /* @__PURE__ */ Ke(NA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const WA = tt({
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
    type: Ne([String, Object, Array]),
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
}), zA = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(On)
}, Cp = "ElScrollbar", HA = le({
  name: "ElScrollbar"
}), qA = /* @__PURE__ */ le({
  ...HA,
  props: WA,
  emits: zA,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = Be("scrollbar");
    let l, c;
    const f = J(), d = J(), g = J(), y = J("0"), _ = J("0"), E = J(), S = J(1), h = J(1), w = B(() => {
      const $ = {};
      return i.height && ($.height = Ti(i.height)), i.maxHeight && ($.maxHeight = Ti(i.maxHeight)), [i.wrapStyle, $];
    }), O = () => {
      var $;
      d.value && (($ = E.value) == null || $.handleScroll(d.value), r("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function A($, P) {
      _r($) ? d.value.scrollTo($) : On($) && On(P) && d.value.scrollTo($, P);
    }
    const L = ($) => {
      if (!On($)) {
        ct(Cp, "value must be a number");
        return;
      }
      d.value.scrollTop = $;
    }, C = ($) => {
      if (!On($)) {
        ct(Cp, "value must be a number");
        return;
      }
      d.value.scrollLeft = $;
    }, F = () => {
      if (!d.value)
        return;
      const $ = d.value.offsetHeight - Ro, P = d.value.offsetWidth - Ro, R = $ ** 2 / d.value.scrollHeight, z = P ** 2 / d.value.scrollWidth, Z = Math.max(R, i.minSize), j = Math.max(z, i.minSize);
      S.value = R / ($ - R) / (Z / ($ - Z)), h.value = z / (P - z) / (j / (P - j)), _.value = Z + Ro < $ ? `${Z}px` : "", y.value = j + Ro < P ? `${j}px` : "";
    };
    return pe(() => i.noresize, ($) => {
      $ ? (l == null || l(), c == null || c()) : ({ stop: l } = Uo(g, F), c = ro("resize", F));
    }, { immediate: !0 }), pe(() => [i.maxHeight, i.height], () => {
      i.native || He(() => {
        var $;
        F(), d.value && (($ = E.value) == null || $.handleScroll(d.value));
      });
    }), Lt(Qv, $n({
      scrollbarElement: f,
      wrapElement: d
    })), at(() => {
      i.native || He(() => {
        F();
      });
    }), fv(() => F()), n({
      wrap$: d,
      update: F,
      scrollTo: A,
      setScrollTop: L,
      setScrollLeft: C,
      handleScroll: O
    }), ($, P) => (G(), re("div", {
      ref_key: "scrollbar$",
      ref: f,
      class: ee(v(s).b())
    }, [
      de("div", {
        ref_key: "wrap$",
        ref: d,
        class: ee([
          $.wrapClass,
          v(s).e("wrap"),
          { [v(s).em("wrap", "hidden-default")]: !$.native }
        ]),
        style: Ot(v(w)),
        onScroll: O
      }, [
        (G(), Pe(xn($.tag), {
          ref_key: "resize$",
          ref: g,
          class: ee([v(s).e("view"), $.viewClass]),
          style: Ot($.viewStyle)
        }, {
          default: Te(() => [
            Ce($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? we("v-if", !0) : (G(), Pe(DA, {
        key: 0,
        ref_key: "barRef",
        ref: E,
        height: _.value,
        width: y.value,
        always: $.always,
        "ratio-x": h.value,
        "ratio-y": S.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var UA = /* @__PURE__ */ Ke(qA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const VA = qn(UA), KA = {
  LIGHT: "light",
  DARK: "dark"
}, jA = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ah = tt({
  role: {
    type: String,
    values: jA,
    default: "tooltip"
  }
}), GA = le({
  name: "ElPopperRoot",
  inheritAttrs: !1
}), YA = /* @__PURE__ */ le({
  ...GA,
  props: ah,
  setup(e, { expose: n }) {
    const r = e, i = J(), s = J(), l = J(), c = J(), f = B(() => r.role), d = {
      triggerRef: i,
      popperInstanceRef: s,
      contentRef: l,
      referenceRef: c,
      role: f
    };
    return n(d), Lt(Bu, d), (g, y) => Ce(g.$slots, "default");
  }
});
var ZA = /* @__PURE__ */ Ke(YA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const sh = tt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), XA = le({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), JA = /* @__PURE__ */ le({
  ...XA,
  props: sh,
  setup(e, { expose: n }) {
    const r = e, i = Be("popper"), { arrowOffset: s, arrowRef: l } = De(eh, void 0);
    return pe(() => r.arrowOffset, (c) => {
      s.value = c;
    }), Jt(() => {
      l.value = void 0;
    }), n({
      arrowRef: l
    }), (c, f) => (G(), re("span", {
      ref_key: "arrowRef",
      ref: l,
      class: ee(v(i).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var QA = /* @__PURE__ */ Ke(JA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Wl = "ElOnlyChild", eI = le({
  name: Wl,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    var i;
    const s = De(oh), l = vA((i = s == null ? void 0 : s.setForwardRef) != null ? i : xi);
    return () => {
      var c;
      const f = (c = n.default) == null ? void 0 : c.call(n, r);
      if (!f)
        return null;
      if (f.length > 1)
        return ct(Wl, "requires exact only one valid child."), null;
      const d = lh(f);
      return d ? It(Mw(d, r), [[l]]) : (ct(Wl, "no valid child node found"), null);
    };
  }
});
function lh(e) {
  if (!e)
    return null;
  const n = e;
  for (const r of n) {
    if (_r(r))
      switch (r.type) {
        case Rw:
          continue;
        case Pw:
        case "svg":
          return Ap(r);
        case Ht:
          return lh(r.children);
        default:
          return r;
      }
    return Ap(r);
  }
  return null;
}
function Ap(e) {
  const n = Be("only-child");
  return ut("span", {
    class: n.e("content")
  }, [e]);
}
const uh = tt({
  virtualRef: {
    type: Ne(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Ne(Function)
  },
  onMouseleave: {
    type: Ne(Function)
  },
  onClick: {
    type: Ne(Function)
  },
  onKeydown: {
    type: Ne(Function)
  },
  onFocus: {
    type: Ne(Function)
  },
  onBlur: {
    type: Ne(Function)
  },
  onContextmenu: {
    type: Ne(Function)
  },
  id: String,
  open: Boolean
}), tI = le({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), nI = /* @__PURE__ */ le({
  ...tI,
  props: uh,
  setup(e, { expose: n }) {
    const r = e, { role: i, triggerRef: s } = De(Bu, void 0);
    pA(s);
    const l = B(() => f.value ? r.id : void 0), c = B(() => {
      if (i && i.value === "tooltip")
        return r.open && r.id ? r.id : void 0;
    }), f = B(() => {
      if (i && i.value !== "tooltip")
        return i.value;
    }), d = B(() => f.value ? `${r.open}` : void 0);
    let g;
    return at(() => {
      pe(() => r.virtualRef, (y) => {
        y && (s.value = kr(y));
      }, {
        immediate: !0
      }), pe(s, (y, _) => {
        g == null || g(), g = void 0, Oi(y) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((E) => {
          var S;
          const h = r[E];
          h && (y.addEventListener(E.slice(2).toLowerCase(), h), (S = _ == null ? void 0 : _.removeEventListener) == null || S.call(_, E.slice(2).toLowerCase(), h));
        }), g = pe([l, c, f, d], (E) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((S, h) => {
            cs(E[h]) ? y.removeAttribute(S) : y.setAttribute(S, E[h]);
          });
        }, { immediate: !0 })), Oi(_) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((E) => _.removeAttribute(E));
      }, {
        immediate: !0
      });
    }), Jt(() => {
      g == null || g(), g = void 0;
    }), n({
      triggerRef: s
    }), (y, _) => y.virtualTriggering ? we("v-if", !0) : (G(), Pe(v(eI), Xn({ key: 0 }, y.$attrs, {
      "aria-controls": v(l),
      "aria-describedby": v(c),
      "aria-expanded": v(d),
      "aria-haspopup": v(f)
    }), {
      default: Te(() => [
        Ce(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var rI = /* @__PURE__ */ Ke(nI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), Zt = "top", An = "bottom", In = "right", Xt = "left", zu = "auto", Ri = [Zt, An, In, Xt], ko = "start", Ci = "end", oI = "clippingParents", ch = "viewport", pi = "popper", iI = "reference", Ip = Ri.reduce(function(e, n) {
  return e.concat([n + "-" + ko, n + "-" + Ci]);
}, []), hs = [].concat(Ri, [zu]).reduce(function(e, n) {
  return e.concat([n, n + "-" + ko, n + "-" + Ci]);
}, []), aI = "beforeRead", sI = "read", lI = "afterRead", uI = "beforeMain", cI = "main", fI = "afterMain", dI = "beforeWrite", pI = "write", vI = "afterWrite", hI = [aI, sI, lI, uI, cI, fI, dI, pI, vI];
function nr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Un(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function No(e) {
  var n = Un(e).Element;
  return e instanceof n || e instanceof Element;
}
function Tn(e) {
  var n = Un(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Hu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Un(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gI(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var i = n.styles[r] || {}, s = n.attributes[r] || {}, l = n.elements[r];
    !Tn(l) || !nr(l) || (Object.assign(l.style, i), Object.keys(s).forEach(function(c) {
      var f = s[c];
      f === !1 ? l.removeAttribute(c) : l.setAttribute(c, f === !0 ? "" : f);
    }));
  });
}
function mI(e) {
  var n = e.state, r = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(i) {
      var s = n.elements[i], l = n.attributes[i] || {}, c = Object.keys(n.styles.hasOwnProperty(i) ? n.styles[i] : r[i]), f = c.reduce(function(d, g) {
        return d[g] = "", d;
      }, {});
      !Tn(s) || !nr(s) || (Object.assign(s.style, f), Object.keys(l).forEach(function(d) {
        s.removeAttribute(d);
      }));
    });
  };
}
var fh = { name: "applyStyles", enabled: !0, phase: "write", fn: gI, effect: mI, requires: ["computeStyles"] };
function Qn(e) {
  return e.split("-")[0];
}
var ao = Math.max, ns = Math.min, Do = Math.round;
function Wo(e, n) {
  n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  if (Tn(e) && n) {
    var l = e.offsetHeight, c = e.offsetWidth;
    c > 0 && (i = Do(r.width) / c || 1), l > 0 && (s = Do(r.height) / l || 1);
  }
  return { width: r.width / i, height: r.height / s, top: r.top / s, right: r.right / i, bottom: r.bottom / s, left: r.left / i, x: r.left / i, y: r.top / s };
}
function qu(e) {
  var n = Wo(e), r = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - i) <= 1 && (i = n.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: i };
}
function dh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Hu(r)) {
    var i = n;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function wr(e) {
  return Un(e).getComputedStyle(e);
}
function bI(e) {
  return ["table", "td", "th"].indexOf(nr(e)) >= 0;
}
function Ur(e) {
  return ((No(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function gs(e) {
  return nr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hu(e) ? e.host : null) || Ur(e);
}
function $p(e) {
  return !Tn(e) || wr(e).position === "fixed" ? null : e.offsetParent;
}
function yI(e) {
  var n = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && Tn(e)) {
    var i = wr(e);
    if (i.position === "fixed")
      return null;
  }
  var s = gs(e);
  for (Hu(s) && (s = s.host); Tn(s) && ["html", "body"].indexOf(nr(s)) < 0; ) {
    var l = wr(s);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || n && l.willChange === "filter" || n && l.filter && l.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Li(e) {
  for (var n = Un(e), r = $p(e); r && bI(r) && wr(r).position === "static"; )
    r = $p(r);
  return r && (nr(r) === "html" || nr(r) === "body" && wr(r).position === "static") ? n : r || yI(e) || n;
}
function Uu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mi(e, n, r) {
  return ao(e, ns(n, r));
}
function _I(e, n, r) {
  var i = mi(e, n, r);
  return i > r ? r : i;
}
function ph() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function vh(e) {
  return Object.assign({}, ph(), e);
}
function hh(e, n) {
  return n.reduce(function(r, i) {
    return r[i] = e, r;
  }, {});
}
var wI = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, { placement: n.placement })) : e, vh(typeof e != "number" ? e : hh(e, Ri));
};
function EI(e) {
  var n, r = e.state, i = e.name, s = e.options, l = r.elements.arrow, c = r.modifiersData.popperOffsets, f = Qn(r.placement), d = Uu(f), g = [Xt, In].indexOf(f) >= 0, y = g ? "height" : "width";
  if (!(!l || !c)) {
    var _ = wI(s.padding, r), E = qu(l), S = d === "y" ? Zt : Xt, h = d === "y" ? An : In, w = r.rects.reference[y] + r.rects.reference[d] - c[d] - r.rects.popper[y], O = c[d] - r.rects.reference[d], A = Li(l), L = A ? d === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, C = w / 2 - O / 2, F = _[S], $ = L - E[y] - _[h], P = L / 2 - E[y] / 2 + C, R = mi(F, P, $), z = d;
    r.modifiersData[i] = (n = {}, n[z] = R, n.centerOffset = R - P, n);
  }
}
function SI(e) {
  var n = e.state, r = e.options, i = r.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = n.elements.popper.querySelector(s), !s) || !dh(n.elements.popper, s) || (n.elements.arrow = s));
}
var xI = { name: "arrow", enabled: !0, phase: "main", fn: EI, effect: SI, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function zo(e) {
  return e.split("-")[1];
}
var OI = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function TI(e) {
  var n = e.x, r = e.y, i = window, s = i.devicePixelRatio || 1;
  return { x: Do(n * s) / s || 0, y: Do(r * s) / s || 0 };
}
function Mp(e) {
  var n, r = e.popper, i = e.popperRect, s = e.placement, l = e.variation, c = e.offsets, f = e.position, d = e.gpuAcceleration, g = e.adaptive, y = e.roundOffsets, _ = e.isFixed, E = c.x, S = E === void 0 ? 0 : E, h = c.y, w = h === void 0 ? 0 : h, O = typeof y == "function" ? y({ x: S, y: w }) : { x: S, y: w };
  S = O.x, w = O.y;
  var A = c.hasOwnProperty("x"), L = c.hasOwnProperty("y"), C = Xt, F = Zt, $ = window;
  if (g) {
    var P = Li(r), R = "clientHeight", z = "clientWidth";
    if (P === Un(r) && (P = Ur(r), wr(P).position !== "static" && f === "absolute" && (R = "scrollHeight", z = "scrollWidth")), P = P, s === Zt || (s === Xt || s === In) && l === Ci) {
      F = An;
      var Z = _ && P === $ && $.visualViewport ? $.visualViewport.height : P[R];
      w -= Z - i.height, w *= d ? 1 : -1;
    }
    if (s === Xt || (s === Zt || s === An) && l === Ci) {
      C = In;
      var j = _ && P === $ && $.visualViewport ? $.visualViewport.width : P[z];
      S -= j - i.width, S *= d ? 1 : -1;
    }
  }
  var K = Object.assign({ position: f }, g && OI), U = y === !0 ? TI({ x: S, y: w }) : { x: S, y: w };
  if (S = U.x, w = U.y, d) {
    var D;
    return Object.assign({}, K, (D = {}, D[F] = L ? "0" : "", D[C] = A ? "0" : "", D.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + w + "px)" : "translate3d(" + S + "px, " + w + "px, 0)", D));
  }
  return Object.assign({}, K, (n = {}, n[F] = L ? w + "px" : "", n[C] = A ? S + "px" : "", n.transform = "", n));
}
function CI(e) {
  var n = e.state, r = e.options, i = r.gpuAcceleration, s = i === void 0 ? !0 : i, l = r.adaptive, c = l === void 0 ? !0 : l, f = r.roundOffsets, d = f === void 0 ? !0 : f, g = { placement: Qn(n.placement), variation: zo(n.placement), popper: n.elements.popper, popperRect: n.rects.popper, gpuAcceleration: s, isFixed: n.options.strategy === "fixed" };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Mp(Object.assign({}, g, { offsets: n.modifiersData.popperOffsets, position: n.options.strategy, adaptive: c, roundOffsets: d })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Mp(Object.assign({}, g, { offsets: n.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: d })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var gh = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: CI, data: {} }, Ta = { passive: !0 };
function AI(e) {
  var n = e.state, r = e.instance, i = e.options, s = i.scroll, l = s === void 0 ? !0 : s, c = i.resize, f = c === void 0 ? !0 : c, d = Un(n.elements.popper), g = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return l && g.forEach(function(y) {
    y.addEventListener("scroll", r.update, Ta);
  }), f && d.addEventListener("resize", r.update, Ta), function() {
    l && g.forEach(function(y) {
      y.removeEventListener("scroll", r.update, Ta);
    }), f && d.removeEventListener("resize", r.update, Ta);
  };
}
var mh = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: AI, data: {} }, II = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ka(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return II[n];
  });
}
var $I = { start: "end", end: "start" };
function Pp(e) {
  return e.replace(/start|end/g, function(n) {
    return $I[n];
  });
}
function Vu(e) {
  var n = Un(e), r = n.pageXOffset, i = n.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function Ku(e) {
  return Wo(Ur(e)).left + Vu(e).scrollLeft;
}
function MI(e) {
  var n = Un(e), r = Ur(e), i = n.visualViewport, s = r.clientWidth, l = r.clientHeight, c = 0, f = 0;
  return i && (s = i.width, l = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c = i.offsetLeft, f = i.offsetTop)), { width: s, height: l, x: c + Ku(e), y: f };
}
function PI(e) {
  var n, r = Ur(e), i = Vu(e), s = (n = e.ownerDocument) == null ? void 0 : n.body, l = ao(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), c = ao(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), f = -i.scrollLeft + Ku(e), d = -i.scrollTop;
  return wr(s || r).direction === "rtl" && (f += ao(r.clientWidth, s ? s.clientWidth : 0) - l), { width: l, height: c, x: f, y: d };
}
function ju(e) {
  var n = wr(e), r = n.overflow, i = n.overflowX, s = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + s + i);
}
function bh(e) {
  return ["html", "body", "#document"].indexOf(nr(e)) >= 0 ? e.ownerDocument.body : Tn(e) && ju(e) ? e : bh(gs(e));
}
function bi(e, n) {
  var r;
  n === void 0 && (n = []);
  var i = bh(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Un(i), c = s ? [l].concat(l.visualViewport || [], ju(i) ? i : []) : i, f = n.concat(c);
  return s ? f : f.concat(bi(gs(c)));
}
function fu(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function RI(e) {
  var n = Wo(e);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Rp(e, n) {
  return n === ch ? fu(MI(e)) : No(n) ? RI(n) : fu(PI(Ur(e)));
}
function LI(e) {
  var n = bi(gs(e)), r = ["absolute", "fixed"].indexOf(wr(e).position) >= 0, i = r && Tn(e) ? Li(e) : e;
  return No(i) ? n.filter(function(s) {
    return No(s) && dh(s, i) && nr(s) !== "body";
  }) : [];
}
function FI(e, n, r) {
  var i = n === "clippingParents" ? LI(e) : [].concat(n), s = [].concat(i, [r]), l = s[0], c = s.reduce(function(f, d) {
    var g = Rp(e, d);
    return f.top = ao(g.top, f.top), f.right = ns(g.right, f.right), f.bottom = ns(g.bottom, f.bottom), f.left = ao(g.left, f.left), f;
  }, Rp(e, l));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function yh(e) {
  var n = e.reference, r = e.element, i = e.placement, s = i ? Qn(i) : null, l = i ? zo(i) : null, c = n.x + n.width / 2 - r.width / 2, f = n.y + n.height / 2 - r.height / 2, d;
  switch (s) {
    case Zt:
      d = { x: c, y: n.y - r.height };
      break;
    case An:
      d = { x: c, y: n.y + n.height };
      break;
    case In:
      d = { x: n.x + n.width, y: f };
      break;
    case Xt:
      d = { x: n.x - r.width, y: f };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  var g = s ? Uu(s) : null;
  if (g != null) {
    var y = g === "y" ? "height" : "width";
    switch (l) {
      case ko:
        d[g] = d[g] - (n[y] / 2 - r[y] / 2);
        break;
      case Ci:
        d[g] = d[g] + (n[y] / 2 - r[y] / 2);
        break;
    }
  }
  return d;
}
function Ai(e, n) {
  n === void 0 && (n = {});
  var r = n, i = r.placement, s = i === void 0 ? e.placement : i, l = r.boundary, c = l === void 0 ? oI : l, f = r.rootBoundary, d = f === void 0 ? ch : f, g = r.elementContext, y = g === void 0 ? pi : g, _ = r.altBoundary, E = _ === void 0 ? !1 : _, S = r.padding, h = S === void 0 ? 0 : S, w = vh(typeof h != "number" ? h : hh(h, Ri)), O = y === pi ? iI : pi, A = e.rects.popper, L = e.elements[E ? O : y], C = FI(No(L) ? L : L.contextElement || Ur(e.elements.popper), c, d), F = Wo(e.elements.reference), $ = yh({ reference: F, element: A, strategy: "absolute", placement: s }), P = fu(Object.assign({}, A, $)), R = y === pi ? P : F, z = { top: C.top - R.top + w.top, bottom: R.bottom - C.bottom + w.bottom, left: C.left - R.left + w.left, right: R.right - C.right + w.right }, Z = e.modifiersData.offset;
  if (y === pi && Z) {
    var j = Z[s];
    Object.keys(z).forEach(function(K) {
      var U = [In, An].indexOf(K) >= 0 ? 1 : -1, D = [Zt, An].indexOf(K) >= 0 ? "y" : "x";
      z[K] += j[D] * U;
    });
  }
  return z;
}
function BI(e, n) {
  n === void 0 && (n = {});
  var r = n, i = r.placement, s = r.boundary, l = r.rootBoundary, c = r.padding, f = r.flipVariations, d = r.allowedAutoPlacements, g = d === void 0 ? hs : d, y = zo(i), _ = y ? f ? Ip : Ip.filter(function(h) {
    return zo(h) === y;
  }) : Ri, E = _.filter(function(h) {
    return g.indexOf(h) >= 0;
  });
  E.length === 0 && (E = _);
  var S = E.reduce(function(h, w) {
    return h[w] = Ai(e, { placement: w, boundary: s, rootBoundary: l, padding: c })[Qn(w)], h;
  }, {});
  return Object.keys(S).sort(function(h, w) {
    return S[h] - S[w];
  });
}
function kI(e) {
  if (Qn(e) === zu)
    return [];
  var n = ka(e);
  return [Pp(e), n, Pp(n)];
}
function NI(e) {
  var n = e.state, r = e.options, i = e.name;
  if (!n.modifiersData[i]._skip) {
    for (var s = r.mainAxis, l = s === void 0 ? !0 : s, c = r.altAxis, f = c === void 0 ? !0 : c, d = r.fallbackPlacements, g = r.padding, y = r.boundary, _ = r.rootBoundary, E = r.altBoundary, S = r.flipVariations, h = S === void 0 ? !0 : S, w = r.allowedAutoPlacements, O = n.options.placement, A = Qn(O), L = A === O, C = d || (L || !h ? [ka(O)] : kI(O)), F = [O].concat(C).reduce(function(Je, qe) {
      return Je.concat(Qn(qe) === zu ? BI(n, { placement: qe, boundary: y, rootBoundary: _, padding: g, flipVariations: h, allowedAutoPlacements: w }) : qe);
    }, []), $ = n.rects.reference, P = n.rects.popper, R = /* @__PURE__ */ new Map(), z = !0, Z = F[0], j = 0; j < F.length; j++) {
      var K = F[j], U = Qn(K), D = zo(K) === ko, X = [Zt, An].indexOf(U) >= 0, ie = X ? "width" : "height", ce = Ai(n, { placement: K, boundary: y, rootBoundary: _, altBoundary: E, padding: g }), ne = X ? D ? In : Xt : D ? An : Zt;
      $[ie] > P[ie] && (ne = ka(ne));
      var fe = ka(ne), he = [];
      if (l && he.push(ce[U] <= 0), f && he.push(ce[ne] <= 0, ce[fe] <= 0), he.every(function(Je) {
        return Je;
      })) {
        Z = K, z = !1;
        break;
      }
      R.set(K, he);
    }
    if (z)
      for (var Se = h ? 3 : 1, xe = function(Je) {
        var qe = F.find(function(gt) {
          var ae = R.get(gt);
          if (ae)
            return ae.slice(0, Je).every(function(ve) {
              return ve;
            });
        });
        if (qe)
          return Z = qe, "break";
      }, bt = Se; bt > 0; bt--) {
        var nt = xe(bt);
        if (nt === "break")
          break;
      }
    n.placement !== Z && (n.modifiersData[i]._skip = !0, n.placement = Z, n.reset = !0);
  }
}
var DI = { name: "flip", enabled: !0, phase: "main", fn: NI, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Lp(e, n, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - n.height - r.y, right: e.right - n.width + r.x, bottom: e.bottom - n.height + r.y, left: e.left - n.width - r.x };
}
function Fp(e) {
  return [Zt, In, An, Xt].some(function(n) {
    return e[n] >= 0;
  });
}
function WI(e) {
  var n = e.state, r = e.name, i = n.rects.reference, s = n.rects.popper, l = n.modifiersData.preventOverflow, c = Ai(n, { elementContext: "reference" }), f = Ai(n, { altBoundary: !0 }), d = Lp(c, i), g = Lp(f, s, l), y = Fp(d), _ = Fp(g);
  n.modifiersData[r] = { referenceClippingOffsets: d, popperEscapeOffsets: g, isReferenceHidden: y, hasPopperEscaped: _ }, n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-reference-hidden": y, "data-popper-escaped": _ });
}
var zI = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: WI };
function HI(e, n, r) {
  var i = Qn(e), s = [Xt, Zt].indexOf(i) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, c = l[0], f = l[1];
  return c = c || 0, f = (f || 0) * s, [Xt, In].indexOf(i) >= 0 ? { x: f, y: c } : { x: c, y: f };
}
function qI(e) {
  var n = e.state, r = e.options, i = e.name, s = r.offset, l = s === void 0 ? [0, 0] : s, c = hs.reduce(function(y, _) {
    return y[_] = HI(_, n.rects, l), y;
  }, {}), f = c[n.placement], d = f.x, g = f.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += d, n.modifiersData.popperOffsets.y += g), n.modifiersData[i] = c;
}
var UI = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: qI };
function VI(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = yh({ reference: n.rects.reference, element: n.rects.popper, strategy: "absolute", placement: n.placement });
}
var _h = { name: "popperOffsets", enabled: !0, phase: "read", fn: VI, data: {} };
function KI(e) {
  return e === "x" ? "y" : "x";
}
function jI(e) {
  var n = e.state, r = e.options, i = e.name, s = r.mainAxis, l = s === void 0 ? !0 : s, c = r.altAxis, f = c === void 0 ? !1 : c, d = r.boundary, g = r.rootBoundary, y = r.altBoundary, _ = r.padding, E = r.tether, S = E === void 0 ? !0 : E, h = r.tetherOffset, w = h === void 0 ? 0 : h, O = Ai(n, { boundary: d, rootBoundary: g, padding: _, altBoundary: y }), A = Qn(n.placement), L = zo(n.placement), C = !L, F = Uu(A), $ = KI(F), P = n.modifiersData.popperOffsets, R = n.rects.reference, z = n.rects.popper, Z = typeof w == "function" ? w(Object.assign({}, n.rects, { placement: n.placement })) : w, j = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), K = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, U = { x: 0, y: 0 };
  if (P) {
    if (l) {
      var D, X = F === "y" ? Zt : Xt, ie = F === "y" ? An : In, ce = F === "y" ? "height" : "width", ne = P[F], fe = ne + O[X], he = ne - O[ie], Se = S ? -z[ce] / 2 : 0, xe = L === ko ? R[ce] : z[ce], bt = L === ko ? -z[ce] : -R[ce], nt = n.elements.arrow, Je = S && nt ? qu(nt) : { width: 0, height: 0 }, qe = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : ph(), gt = qe[X], ae = qe[ie], ve = mi(0, R[ce], Je[ce]), We = C ? R[ce] / 2 - Se - ve - gt - j.mainAxis : xe - ve - gt - j.mainAxis, Ue = C ? -R[ce] / 2 + Se + ve + ae + j.mainAxis : bt + ve + ae + j.mainAxis, Ye = n.elements.arrow && Li(n.elements.arrow), rt = Ye ? F === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, pn = (D = K == null ? void 0 : K[F]) != null ? D : 0, mt = ne + We - pn - rt, Qt = ne + Ue - pn, vn = mi(S ? ns(fe, mt) : fe, ne, S ? ao(he, Qt) : he);
      P[F] = vn, U[F] = vn - ne;
    }
    if (f) {
      var yt, Vn = F === "x" ? Zt : Xt, Ft = F === "x" ? An : In, V = P[$], _e = $ === "y" ? "height" : "width", st = V + O[Vn], Bt = V - O[Ft], or = [Zt, Xt].indexOf(A) !== -1, en = (yt = K == null ? void 0 : K[$]) != null ? yt : 0, ir = or ? st : V - R[_e] - z[_e] - en + j.altAxis, qt = or ? V + R[_e] + z[_e] - en - j.altAxis : Bt, tn = S && or ? _I(ir, V, qt) : mi(S ? ir : st, V, S ? qt : Bt);
      P[$] = tn, U[$] = tn - V;
    }
    n.modifiersData[i] = U;
  }
}
var GI = { name: "preventOverflow", enabled: !0, phase: "main", fn: jI, requiresIfExists: ["offset"] };
function YI(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ZI(e) {
  return e === Un(e) || !Tn(e) ? Vu(e) : YI(e);
}
function XI(e) {
  var n = e.getBoundingClientRect(), r = Do(n.width) / e.offsetWidth || 1, i = Do(n.height) / e.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function JI(e, n, r) {
  r === void 0 && (r = !1);
  var i = Tn(n), s = Tn(n) && XI(n), l = Ur(n), c = Wo(e, s), f = { scrollLeft: 0, scrollTop: 0 }, d = { x: 0, y: 0 };
  return (i || !i && !r) && ((nr(n) !== "body" || ju(l)) && (f = ZI(n)), Tn(n) ? (d = Wo(n, !0), d.x += n.clientLeft, d.y += n.clientTop) : l && (d.x = Ku(l))), { x: c.left + f.scrollLeft - d.x, y: c.top + f.scrollTop - d.y, width: c.width, height: c.height };
}
function QI(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(l) {
    n.set(l.name, l);
  });
  function s(l) {
    r.add(l.name);
    var c = [].concat(l.requires || [], l.requiresIfExists || []);
    c.forEach(function(f) {
      if (!r.has(f)) {
        var d = n.get(f);
        d && s(d);
      }
    }), i.push(l);
  }
  return e.forEach(function(l) {
    r.has(l.name) || s(l);
  }), i;
}
function e$(e) {
  var n = QI(e);
  return hI.reduce(function(r, i) {
    return r.concat(n.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function t$(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function n$(e) {
  var n = e.reduce(function(r, i) {
    var s = r[i.name];
    return r[i.name] = s ? Object.assign({}, s, i, { options: Object.assign({}, s.options, i.options), data: Object.assign({}, s.data, i.data) }) : i, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var Bp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function kp() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Gu(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, i = r === void 0 ? [] : r, s = n.defaultOptions, l = s === void 0 ? Bp : s;
  return function(c, f, d) {
    d === void 0 && (d = l);
    var g = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Bp, l), modifiersData: {}, elements: { reference: c, popper: f }, attributes: {}, styles: {} }, y = [], _ = !1, E = { state: g, setOptions: function(w) {
      var O = typeof w == "function" ? w(g.options) : w;
      h(), g.options = Object.assign({}, l, g.options, O), g.scrollParents = { reference: No(c) ? bi(c) : c.contextElement ? bi(c.contextElement) : [], popper: bi(f) };
      var A = e$(n$([].concat(i, g.options.modifiers)));
      return g.orderedModifiers = A.filter(function(L) {
        return L.enabled;
      }), S(), E.update();
    }, forceUpdate: function() {
      if (!_) {
        var w = g.elements, O = w.reference, A = w.popper;
        if (kp(O, A)) {
          g.rects = { reference: JI(O, Li(A), g.options.strategy === "fixed"), popper: qu(A) }, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function(z) {
            return g.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var L = 0; L < g.orderedModifiers.length; L++) {
            if (g.reset === !0) {
              g.reset = !1, L = -1;
              continue;
            }
            var C = g.orderedModifiers[L], F = C.fn, $ = C.options, P = $ === void 0 ? {} : $, R = C.name;
            typeof F == "function" && (g = F({ state: g, options: P, name: R, instance: E }) || g);
          }
        }
      }
    }, update: t$(function() {
      return new Promise(function(w) {
        E.forceUpdate(), w(g);
      });
    }), destroy: function() {
      h(), _ = !0;
    } };
    if (!kp(c, f))
      return E;
    E.setOptions(d).then(function(w) {
      !_ && d.onFirstUpdate && d.onFirstUpdate(w);
    });
    function S() {
      g.orderedModifiers.forEach(function(w) {
        var O = w.name, A = w.options, L = A === void 0 ? {} : A, C = w.effect;
        if (typeof C == "function") {
          var F = C({ state: g, name: O, instance: E, options: L }), $ = function() {
          };
          y.push(F || $);
        }
      });
    }
    function h() {
      y.forEach(function(w) {
        return w();
      }), y = [];
    }
    return E;
  };
}
Gu();
var r$ = [mh, _h, gh, fh];
Gu({ defaultModifiers: r$ });
var o$ = [mh, _h, gh, fh, UI, DI, GI, xI, zI], i$ = Gu({ defaultModifiers: o$ });
const zl = "focus-trap.focus-after-trapped", Hl = "focus-trap.focus-after-released", a$ = "focus-trap.focusout-prevented", Np = {
  cancelable: !0,
  bubbles: !1
}, s$ = {
  cancelable: !0,
  bubbles: !1
}, Dp = "focusAfterTrapped", Wp = "focusAfterReleased", l$ = Symbol("elFocusTrap"), Yu = J(), ms = J(0), Zu = J(0);
let Ca = 0;
const wh = (e) => {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 || i === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}, zp = (e, n) => {
  for (const r of e)
    if (!u$(r, n))
      return r;
}, u$ = (e, n) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, c$ = (e) => {
  const n = wh(e), r = zp(n, e), i = zp(n.reverse(), e);
  return [r, i];
}, f$ = (e) => e instanceof HTMLInputElement && "select" in e, Fr = (e, n) => {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), Zu.value = window.performance.now(), e !== r && f$(e) && n && e.select();
  }
};
function Hp(e, n) {
  const r = [...e], i = e.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
const d$ = () => {
  let e = [];
  return {
    push: (i) => {
      const s = e[0];
      s && i !== s && s.pause(), e = Hp(e, i), e.unshift(i);
    },
    remove: (i) => {
      var s, l;
      e = Hp(e, i), (l = (s = e[0]) == null ? void 0 : s.resume) == null || l.call(s);
    }
  };
}, p$ = (e, n = !1) => {
  const r = document.activeElement;
  for (const i of e)
    if (Fr(i, n), document.activeElement !== r)
      return;
}, qp = d$(), v$ = () => ms.value > Zu.value, Aa = () => {
  Yu.value = "pointer", ms.value = window.performance.now();
}, Up = () => {
  Yu.value = "keyboard", ms.value = window.performance.now();
}, h$ = () => (at(() => {
  Ca === 0 && (document.addEventListener("mousedown", Aa), document.addEventListener("touchstart", Aa), document.addEventListener("keydown", Up)), Ca++;
}), Jt(() => {
  Ca--, Ca <= 0 && (document.removeEventListener("mousedown", Aa), document.removeEventListener("touchstart", Aa), document.removeEventListener("keydown", Up));
}), {
  focusReason: Yu,
  lastUserFocusTimestamp: ms,
  lastAutomatedFocusTimestamp: Zu
}), Ia = (e) => new CustomEvent(a$, {
  ...s$,
  detail: e
}), g$ = le({
  name: "ElFocusTrap",
  inheritAttrs: !1,
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
    Dp,
    Wp,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const r = J();
    let i, s;
    const { focusReason: l } = h$();
    sA((h) => {
      e.trapped && !c.paused && n("release-requested", h);
    });
    const c = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, f = (h) => {
      if (!e.loop && !e.trapped || c.paused)
        return;
      const { key: w, altKey: O, ctrlKey: A, metaKey: L, currentTarget: C, shiftKey: F } = h, { loop: $ } = e, P = w === zt.tab && !O && !A && !L, R = document.activeElement;
      if (P && R) {
        const z = C, [Z, j] = c$(z);
        if (Z && j) {
          if (!F && R === j) {
            const U = Ia({
              focusReason: l.value
            });
            n("focusout-prevented", U), U.defaultPrevented || (h.preventDefault(), $ && Fr(Z, !0));
          } else if (F && [Z, z].includes(R)) {
            const U = Ia({
              focusReason: l.value
            });
            n("focusout-prevented", U), U.defaultPrevented || (h.preventDefault(), $ && Fr(j, !0));
          }
        } else if (R === z) {
          const U = Ia({
            focusReason: l.value
          });
          n("focusout-prevented", U), U.defaultPrevented || h.preventDefault();
        }
      }
    };
    Lt(l$, {
      focusTrapRef: r,
      onKeydown: f
    }), pe(() => e.focusTrapEl, (h) => {
      h && (r.value = h);
    }, { immediate: !0 }), pe([r], ([h], [w]) => {
      h && (h.addEventListener("keydown", f), h.addEventListener("focusin", y), h.addEventListener("focusout", _)), w && (w.removeEventListener("keydown", f), w.removeEventListener("focusin", y), w.removeEventListener("focusout", _));
    });
    const d = (h) => {
      n(Dp, h);
    }, g = (h) => n(Wp, h), y = (h) => {
      const w = v(r);
      if (!w)
        return;
      const O = h.target, A = h.relatedTarget, L = O && w.contains(O);
      e.trapped || A && w.contains(A) || (i = A), L && n("focusin", h), !c.paused && e.trapped && (L ? s = O : Fr(s, !0));
    }, _ = (h) => {
      const w = v(r);
      if (!(c.paused || !w))
        if (e.trapped) {
          const O = h.relatedTarget;
          !cs(O) && !w.contains(O) && setTimeout(() => {
            if (!c.paused && e.trapped) {
              const A = Ia({
                focusReason: l.value
              });
              n("focusout-prevented", A), A.defaultPrevented || Fr(s, !0);
            }
          }, 0);
        } else {
          const O = h.target;
          O && w.contains(O) || n("focusout", h);
        }
    };
    async function E() {
      await He();
      const h = v(r);
      if (h) {
        qp.push(c);
        const w = h.contains(document.activeElement) ? i : document.activeElement;
        if (i = w, !h.contains(w)) {
          const A = new Event(zl, Np);
          h.addEventListener(zl, d), h.dispatchEvent(A), A.defaultPrevented || He(() => {
            let L = e.focusStartEl;
            Et(L) || (Fr(L), document.activeElement !== L && (L = "first")), L === "first" && p$(wh(h), !0), (document.activeElement === w || L === "container") && Fr(h);
          });
        }
      }
    }
    function S() {
      const h = v(r);
      if (h) {
        h.removeEventListener(zl, d);
        const w = new CustomEvent(Hl, {
          ...Np,
          detail: {
            focusReason: l.value
          }
        });
        h.addEventListener(Hl, g), h.dispatchEvent(w), !w.defaultPrevented && (l.value == "keyboard" || !v$()) && Fr(i != null ? i : document.body, !0), h.removeEventListener(Hl, d), qp.remove(c);
      }
    }
    return at(() => {
      e.trapped && E(), pe(() => e.trapped, (h) => {
        h ? E() : S();
      });
    }), Jt(() => {
      e.trapped && S();
    }), {
      onKeydown: f
    };
  }
});
function m$(e, n, r, i, s, l) {
  return Ce(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var b$ = /* @__PURE__ */ Ke(g$, [["render", m$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const y$ = ["fixed", "absolute"], _$ = tt({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ne(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: hs,
    default: "bottom"
  },
  popperOptions: {
    type: Ne(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: y$,
    default: "absolute"
  }
}), Eh = tt({
  ..._$,
  id: String,
  style: {
    type: Ne([String, Array, Object])
  },
  className: {
    type: Ne([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Ne([String, Array, Object])
  },
  popperStyle: {
    type: Ne([String, Array, Object])
  },
  referenceEl: {
    type: Ne(Object)
  },
  triggerTargetEl: {
    type: Ne(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), w$ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Vp = (e, n) => {
  const { placement: r, strategy: i, popperOptions: s } = e, l = {
    placement: r,
    strategy: i,
    ...s,
    modifiers: S$(e)
  };
  return x$(l, n), O$(l, s == null ? void 0 : s.modifiers), l;
}, E$ = (e) => {
  if (!!Rt)
    return kr(e);
};
function S$(e) {
  const { offset: n, gpuAcceleration: r, fallbackPlacements: i } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, n != null ? n : 12]
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
        fallbackPlacements: i
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: r,
        adaptive: r
      }
    }
  ];
}
function x$(e, { arrowEl: n, arrowOffset: r }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: n,
      padding: r != null ? r : 5
    }
  });
}
function O$(e, n) {
  n && (e.modifiers = [...e.modifiers, ...n != null ? n : []]);
}
const T$ = le({
  name: "ElPopperContent"
}), C$ = /* @__PURE__ */ le({
  ...T$,
  props: Eh,
  emits: w$,
  setup(e, { expose: n, emit: r }) {
    const i = e, { popperInstanceRef: s, contentRef: l, triggerRef: c, role: f } = De(Bu, void 0), d = De(uo, void 0), { nextZIndex: g } = hA(), y = Be("popper"), _ = J(), E = J("first"), S = J(), h = J();
    Lt(eh, {
      arrowRef: S,
      arrowOffset: h
    }), d && (d.addInputId || d.removeInputId) && Lt(uo, {
      ...d,
      addInputId: xi,
      removeInputId: xi
    });
    const w = J(i.zIndex || g()), O = J(!1);
    let A;
    const L = B(() => E$(i.referenceEl) || v(c)), C = B(() => [{ zIndex: v(w) }, i.popperStyle]), F = B(() => [
      y.b(),
      y.is("pure", i.pure),
      y.is(i.effect),
      i.popperClass
    ]), $ = B(() => f && f.value === "dialog" ? "false" : void 0), P = ({
      referenceEl: X,
      popperContentEl: ie,
      arrowEl: ce
    }) => {
      const ne = Vp(i, {
        arrowEl: ce,
        arrowOffset: v(h)
      });
      return i$(X, ie, ne);
    }, R = (X = !0) => {
      var ie;
      (ie = v(s)) == null || ie.update(), X && (w.value = i.zIndex || g());
    }, z = () => {
      var X, ie;
      const ce = { name: "eventListeners", enabled: i.visible };
      (ie = (X = v(s)) == null ? void 0 : X.setOptions) == null || ie.call(X, (ne) => ({
        ...ne,
        modifiers: [...ne.modifiers || [], ce]
      })), R(!1), i.visible && i.focusOnShow ? O.value = !0 : i.visible === !1 && (O.value = !1);
    }, Z = () => {
      r("focus");
    }, j = (X) => {
      var ie;
      ((ie = X.detail) == null ? void 0 : ie.focusReason) !== "pointer" && (E.value = "first", r("blur"));
    }, K = (X) => {
      i.visible && !O.value && (X.target && (E.value = X.target), O.value = !0);
    }, U = (X) => {
      i.trapping || (X.detail.focusReason === "pointer" && X.preventDefault(), O.value = !1);
    }, D = () => {
      O.value = !1, r("close");
    };
    return at(() => {
      let X;
      pe(L, (ie) => {
        var ce;
        X == null || X();
        const ne = v(s);
        if ((ce = ne == null ? void 0 : ne.destroy) == null || ce.call(ne), ie) {
          const fe = v(_);
          l.value = fe, s.value = P({
            referenceEl: ie,
            popperContentEl: fe,
            arrowEl: v(S)
          }), X = pe(() => ie.getBoundingClientRect(), () => R(), {
            immediate: !0
          });
        } else
          s.value = void 0;
      }, {
        immediate: !0
      }), pe(() => i.triggerTargetEl, (ie, ce) => {
        A == null || A(), A = void 0;
        const ne = v(ie || _.value), fe = v(ce || _.value);
        Oi(ne) && (A = pe([f, () => i.ariaLabel, $, () => i.id], (he) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((Se, xe) => {
            cs(he[xe]) ? ne.removeAttribute(Se) : ne.setAttribute(Se, he[xe]);
          });
        }, { immediate: !0 })), fe !== ne && Oi(fe) && ["role", "aria-label", "aria-modal", "id"].forEach((he) => {
          fe.removeAttribute(he);
        });
      }, { immediate: !0 }), pe(() => i.visible, z, { immediate: !0 }), pe(() => Vp(i, {
        arrowEl: v(S),
        arrowOffset: v(h)
      }), (ie) => {
        var ce;
        return (ce = s.value) == null ? void 0 : ce.setOptions(ie);
      });
    }), Jt(() => {
      A == null || A(), A = void 0;
    }), n({
      popperContentRef: _,
      popperInstanceRef: s,
      updatePopper: R,
      contentStyle: C
    }), (X, ie) => (G(), re("div", {
      ref_key: "popperContentRef",
      ref: _,
      style: Ot(v(C)),
      class: ee(v(F)),
      tabindex: "-1",
      onMouseenter: ie[0] || (ie[0] = (ce) => X.$emit("mouseenter", ce)),
      onMouseleave: ie[1] || (ie[1] = (ce) => X.$emit("mouseleave", ce))
    }, [
      ut(v(b$), {
        trapped: O.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": _.value,
        "focus-start-el": E.value,
        onFocusAfterTrapped: Z,
        onFocusAfterReleased: j,
        onFocusin: K,
        onFocusoutPrevented: U,
        onReleaseRequested: D
      }, {
        default: Te(() => [
          Ce(X.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var A$ = /* @__PURE__ */ Ke(C$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const I$ = qn(ZA), $$ = Be("tooltip"), Xu = tt({
  ...fA,
  ...Eh,
  appendTo: {
    type: Ne([String, Object]),
    default: rh
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Ne(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${$$.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Sh = tt({
  ...uh,
  disabled: Boolean,
  trigger: {
    type: Ne([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ne(Array),
    default: () => [zt.enter, zt.space]
  }
}), {
  useModelToggleProps: M$,
  useModelToggleEmits: P$,
  useModelToggle: R$
} = iA("visible"), L$ = tt({
  ...ah,
  ...M$,
  ...Xu,
  ...Sh,
  ...sh,
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), F$ = [
  ...P$,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], B$ = (e, n) => Jn(e) ? e.includes(n) : e === n, $o = (e, n, r) => (i) => {
  B$(v(e), n) && r(i);
}, k$ = le({
  name: "ElTooltipTrigger"
}), N$ = /* @__PURE__ */ le({
  ...k$,
  props: Sh,
  setup(e, { expose: n }) {
    const r = e, i = Be("tooltip"), { controlled: s, id: l, open: c, onOpen: f, onClose: d, onToggle: g } = De(ku, void 0), y = J(null), _ = () => {
      if (v(s) || r.disabled)
        return !0;
    }, E = Wn(r, "trigger"), S = br(_, $o(E, "hover", f)), h = br(_, $o(E, "hover", d)), w = br(_, $o(E, "click", (F) => {
      F.button === 0 && g(F);
    })), O = br(_, $o(E, "focus", f)), A = br(_, $o(E, "focus", d)), L = br(_, $o(E, "contextmenu", (F) => {
      F.preventDefault(), g(F);
    })), C = br(_, (F) => {
      const { code: $ } = F;
      r.triggerKeys.includes($) && (F.preventDefault(), g(F));
    });
    return n({
      triggerRef: y
    }), (F, $) => (G(), Pe(v(rI), {
      id: v(l),
      "virtual-ref": F.virtualRef,
      open: v(c),
      "virtual-triggering": F.virtualTriggering,
      class: ee(v(i).e("trigger")),
      onBlur: v(A),
      onClick: v(w),
      onContextmenu: v(L),
      onFocus: v(O),
      onMouseenter: v(S),
      onMouseleave: v(h),
      onKeydown: v(C)
    }, {
      default: Te(() => [
        Ce(F.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var D$ = /* @__PURE__ */ Ke(N$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const W$ = le({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), z$ = /* @__PURE__ */ le({
  ...W$,
  props: Xu,
  setup(e, { expose: n }) {
    const r = e, i = J(null), s = J(!1), {
      controlled: l,
      id: c,
      open: f,
      trigger: d,
      onClose: g,
      onOpen: y,
      onShow: _,
      onHide: E,
      onBeforeShow: S,
      onBeforeHide: h
    } = De(ku, void 0), w = B(() => process.env.NODE_ENV === "test" ? !0 : r.persistent);
    Jt(() => {
      s.value = !0;
    });
    const O = B(() => v(w) ? !0 : v(f)), A = B(() => r.disabled ? !1 : v(f)), L = B(() => {
      var D;
      return (D = r.style) != null ? D : {};
    }), C = B(() => !v(f)), F = () => {
      E();
    }, $ = () => {
      if (v(l))
        return !0;
    }, P = br($, () => {
      r.enterable && v(d) === "hover" && y();
    }), R = br($, () => {
      v(d) === "hover" && g();
    }), z = () => {
      var D, X;
      (X = (D = i.value) == null ? void 0 : D.updatePopper) == null || X.call(D), S == null || S();
    }, Z = () => {
      h == null || h();
    }, j = () => {
      _(), U = ET(B(() => {
        var D;
        return (D = i.value) == null ? void 0 : D.popperContentRef;
      }), () => {
        if (v(l))
          return;
        v(d) !== "hover" && g();
      });
    }, K = () => {
      r.virtualTriggering || g();
    };
    let U;
    return pe(() => v(f), (D) => {
      D || U == null || U();
    }, {
      flush: "post"
    }), pe(() => r.content, () => {
      var D, X;
      (X = (D = i.value) == null ? void 0 : D.updatePopper) == null || X.call(D);
    }), n({
      contentRef: i
    }), (D, X) => (G(), Pe(Lw, {
      disabled: !D.teleported,
      to: D.appendTo
    }, [
      ut(co, {
        name: D.transition,
        onAfterLeave: F,
        onBeforeEnter: z,
        onAfterEnter: j,
        onBeforeLeave: Z
      }, {
        default: Te(() => [
          v(O) ? It((G(), Pe(v(A$), Xn({
            key: 0,
            id: v(c),
            ref_key: "contentRef",
            ref: i
          }, D.$attrs, {
            "aria-label": D.ariaLabel,
            "aria-hidden": v(C),
            "boundaries-padding": D.boundariesPadding,
            "fallback-placements": D.fallbackPlacements,
            "gpu-acceleration": D.gpuAcceleration,
            offset: D.offset,
            placement: D.placement,
            "popper-options": D.popperOptions,
            strategy: D.strategy,
            effect: D.effect,
            enterable: D.enterable,
            pure: D.pure,
            "popper-class": D.popperClass,
            "popper-style": [D.popperStyle, v(L)],
            "reference-el": D.referenceEl,
            "trigger-target-el": D.triggerTargetEl,
            visible: v(A),
            "z-index": D.zIndex,
            onMouseenter: v(P),
            onMouseleave: v(R),
            onBlur: K,
            onClose: v(g)
          }), {
            default: Te(() => [
              we(" Workaround bug #6378 "),
              s.value ? we("v-if", !0) : Ce(D.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [qr, v(A)]
          ]) : we("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var H$ = /* @__PURE__ */ Ke(z$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const q$ = ["innerHTML"], U$ = { key: 1 }, V$ = le({
  name: "ElTooltip"
}), K$ = /* @__PURE__ */ le({
  ...V$,
  props: L$,
  emits: F$,
  setup(e, { expose: n, emit: r }) {
    const i = e;
    cA();
    const s = B(() => (Fo(i.openDelay) || ct("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), i.openDelay || i.showAfter)), l = B(() => (Fo(i.visibleArrow) || ct("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), tr(i.visibleArrow) ? i.visibleArrow : i.showArrow)), c = ps(), f = J(), d = J(), g = () => {
      var C;
      const F = v(f);
      F && ((C = F.popperInstanceRef) == null || C.update());
    }, y = J(!1), _ = J(), { show: E, hide: S, hasUpdateHandler: h } = R$({
      indicator: y,
      toggleReason: _
    }), { onOpen: w, onClose: O } = dA({
      showAfter: s,
      hideAfter: Wn(i, "hideAfter"),
      open: E,
      close: S
    }), A = B(() => tr(i.visible) && !h.value);
    Lt(ku, {
      controlled: A,
      id: c,
      open: Fw(y),
      trigger: Wn(i, "trigger"),
      onOpen: (C) => {
        w(C);
      },
      onClose: (C) => {
        O(C);
      },
      onToggle: (C) => {
        v(y) ? O(C) : w(C);
      },
      onShow: () => {
        r("show", _.value);
      },
      onHide: () => {
        r("hide", _.value);
      },
      onBeforeShow: () => {
        r("before-show", _.value);
      },
      onBeforeHide: () => {
        r("before-hide", _.value);
      },
      updatePopper: g
    }), pe(() => i.disabled, (C) => {
      C && y.value && (y.value = !1);
    });
    const L = () => {
      var C, F;
      const $ = (F = (C = d.value) == null ? void 0 : C.contentRef) == null ? void 0 : F.popperContentRef;
      return $ && $.contains(document.activeElement);
    };
    return Bw(() => y.value && S()), n({
      popperRef: f,
      contentRef: d,
      isFocusInsideContent: L,
      updatePopper: g,
      onOpen: w,
      onClose: O,
      hide: S
    }), (C, F) => (G(), Pe(v(I$), {
      ref_key: "popperRef",
      ref: f,
      role: C.role
    }, {
      default: Te(() => [
        ut(D$, {
          disabled: C.disabled,
          trigger: C.trigger,
          "trigger-keys": C.triggerKeys,
          "virtual-ref": C.virtualRef,
          "virtual-triggering": C.virtualTriggering
        }, {
          default: Te(() => [
            C.$slots.default ? Ce(C.$slots, "default", { key: 0 }) : we("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ut(H$, {
          ref_key: "contentRef",
          ref: d,
          "aria-label": C.ariaLabel,
          "boundaries-padding": C.boundariesPadding,
          content: C.content,
          disabled: C.disabled,
          effect: C.effect,
          enterable: C.enterable,
          "fallback-placements": C.fallbackPlacements,
          "hide-after": C.hideAfter,
          "gpu-acceleration": C.gpuAcceleration,
          offset: C.offset,
          persistent: C.persistent,
          "popper-class": C.popperClass,
          "popper-style": C.popperStyle,
          placement: C.placement,
          "popper-options": C.popperOptions,
          pure: C.pure,
          "raw-content": C.rawContent,
          "reference-el": C.referenceEl,
          "trigger-target-el": C.triggerTargetEl,
          "show-after": v(s),
          strategy: C.strategy,
          teleported: C.teleported,
          transition: C.transition,
          "virtual-triggering": C.virtualTriggering,
          "z-index": C.zIndex,
          "append-to": C.appendTo
        }, {
          default: Te(() => [
            Ce(C.$slots, "content", {}, () => [
              C.rawContent ? (G(), re("span", {
                key: 0,
                innerHTML: C.content
              }, null, 8, q$)) : (G(), re("span", U$, ht(C.content), 1))
            ]),
            v(l) ? (G(), Pe(v(QA), {
              key: 0,
              "arrow-offset": C.arrowOffset
            }, null, 8, ["arrow-offset"])) : we("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var j$ = /* @__PURE__ */ Ke(K$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Ju = qn(j$);
function $t(e, n) {
  G$(e) && (e = "100%");
  var r = Y$(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function $a(e) {
  return Math.min(1, Math.max(0, e));
}
function G$(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Y$(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function xh(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ma(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function oo(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Z$(e, n, r) {
  return {
    r: $t(e, 255) * 255,
    g: $t(n, 255) * 255,
    b: $t(r, 255) * 255
  };
}
function Kp(e, n, r) {
  e = $t(e, 255), n = $t(n, 255), r = $t(r, 255);
  var i = Math.max(e, n, r), s = Math.min(e, n, r), l = 0, c = 0, f = (i + s) / 2;
  if (i === s)
    c = 0, l = 0;
  else {
    var d = i - s;
    switch (c = f > 0.5 ? d / (2 - i - s) : d / (i + s), i) {
      case e:
        l = (n - r) / d + (n < r ? 6 : 0);
        break;
      case n:
        l = (r - e) / d + 2;
        break;
      case r:
        l = (e - n) / d + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: c, l: f };
}
function ql(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * (6 * r) : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function X$(e, n, r) {
  var i, s, l;
  if (e = $t(e, 360), n = $t(n, 100), r = $t(r, 100), n === 0)
    s = r, l = r, i = r;
  else {
    var c = r < 0.5 ? r * (1 + n) : r + n - r * n, f = 2 * r - c;
    i = ql(f, c, e + 1 / 3), s = ql(f, c, e), l = ql(f, c, e - 1 / 3);
  }
  return { r: i * 255, g: s * 255, b: l * 255 };
}
function jp(e, n, r) {
  e = $t(e, 255), n = $t(n, 255), r = $t(r, 255);
  var i = Math.max(e, n, r), s = Math.min(e, n, r), l = 0, c = i, f = i - s, d = i === 0 ? 0 : f / i;
  if (i === s)
    l = 0;
  else {
    switch (i) {
      case e:
        l = (n - r) / f + (n < r ? 6 : 0);
        break;
      case n:
        l = (r - e) / f + 2;
        break;
      case r:
        l = (e - n) / f + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: d, v: c };
}
function J$(e, n, r) {
  e = $t(e, 360) * 6, n = $t(n, 100), r = $t(r, 100);
  var i = Math.floor(e), s = e - i, l = r * (1 - n), c = r * (1 - s * n), f = r * (1 - (1 - s) * n), d = i % 6, g = [r, c, l, l, f, r][d], y = [f, r, r, c, l, l][d], _ = [l, l, f, r, r, c][d];
  return { r: g * 255, g: y * 255, b: _ * 255 };
}
function Gp(e, n, r, i) {
  var s = [
    oo(Math.round(e).toString(16)),
    oo(Math.round(n).toString(16)),
    oo(Math.round(r).toString(16))
  ];
  return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function Q$(e, n, r, i, s) {
  var l = [
    oo(Math.round(e).toString(16)),
    oo(Math.round(n).toString(16)),
    oo(Math.round(r).toString(16)),
    oo(e3(i))
  ];
  return s && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function e3(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Yp(e) {
  return un(e) / 255;
}
function un(e) {
  return parseInt(e, 16);
}
function t3(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var du = {
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
function n3(e) {
  var n = { r: 0, g: 0, b: 0 }, r = 1, i = null, s = null, l = null, c = !1, f = !1;
  return typeof e == "string" && (e = i3(e)), typeof e == "object" && (gr(e.r) && gr(e.g) && gr(e.b) ? (n = Z$(e.r, e.g, e.b), c = !0, f = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : gr(e.h) && gr(e.s) && gr(e.v) ? (i = Ma(e.s), s = Ma(e.v), n = J$(e.h, i, s), c = !0, f = "hsv") : gr(e.h) && gr(e.s) && gr(e.l) && (i = Ma(e.s), l = Ma(e.l), n = X$(e.h, i, l), c = !0, f = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = xh(r), {
    ok: c,
    format: e.format || f,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
var r3 = "[-\\+]?\\d+%?", o3 = "[-\\+]?\\d*\\.\\d+%?", Wr = "(?:".concat(o3, ")|(?:").concat(r3, ")"), Ul = "[\\s|\\(]+(".concat(Wr, ")[,|\\s]+(").concat(Wr, ")[,|\\s]+(").concat(Wr, ")\\s*\\)?"), Vl = "[\\s|\\(]+(".concat(Wr, ")[,|\\s]+(").concat(Wr, ")[,|\\s]+(").concat(Wr, ")[,|\\s]+(").concat(Wr, ")\\s*\\)?"), Nn = {
  CSS_UNIT: new RegExp(Wr),
  rgb: new RegExp("rgb" + Ul),
  rgba: new RegExp("rgba" + Vl),
  hsl: new RegExp("hsl" + Ul),
  hsla: new RegExp("hsla" + Vl),
  hsv: new RegExp("hsv" + Ul),
  hsva: new RegExp("hsva" + Vl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function i3(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (du[e])
    e = du[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Nn.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Nn.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Nn.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Nn.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Nn.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Nn.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Nn.hex8.exec(e), r ? {
    r: un(r[1]),
    g: un(r[2]),
    b: un(r[3]),
    a: Yp(r[4]),
    format: n ? "name" : "hex8"
  } : (r = Nn.hex6.exec(e), r ? {
    r: un(r[1]),
    g: un(r[2]),
    b: un(r[3]),
    format: n ? "name" : "hex"
  } : (r = Nn.hex4.exec(e), r ? {
    r: un(r[1] + r[1]),
    g: un(r[2] + r[2]),
    b: un(r[3] + r[3]),
    a: Yp(r[4] + r[4]),
    format: n ? "name" : "hex8"
  } : (r = Nn.hex3.exec(e), r ? {
    r: un(r[1] + r[1]),
    g: un(r[2] + r[2]),
    b: un(r[3] + r[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function gr(e) {
  return Boolean(Nn.CSS_UNIT.exec(String(e)));
}
var a3 = function() {
  function e(n, r) {
    n === void 0 && (n = ""), r === void 0 && (r = {});
    var i;
    if (n instanceof e)
      return n;
    typeof n == "number" && (n = t3(n)), this.originalInput = n;
    var s = n3(n);
    this.originalInput = n, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (i = r.format) !== null && i !== void 0 ? i : s.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
  }
  return e.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, e.prototype.isLight = function() {
    return !this.isDark();
  }, e.prototype.getBrightness = function() {
    var n = this.toRgb();
    return (n.r * 299 + n.g * 587 + n.b * 114) / 1e3;
  }, e.prototype.getLuminance = function() {
    var n = this.toRgb(), r, i, s, l = n.r / 255, c = n.g / 255, f = n.b / 255;
    return l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), c <= 0.03928 ? i = c / 12.92 : i = Math.pow((c + 0.055) / 1.055, 2.4), f <= 0.03928 ? s = f / 12.92 : s = Math.pow((f + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * i + 0.0722 * s;
  }, e.prototype.getAlpha = function() {
    return this.a;
  }, e.prototype.setAlpha = function(n) {
    return this.a = xh(n), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var n = jp(this.r, this.g, this.b);
    return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var n = jp(this.r, this.g, this.b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), s = Math.round(n.v * 100);
    return this.a === 1 ? "hsv(".concat(r, ", ").concat(i, "%, ").concat(s, "%)") : "hsva(".concat(r, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var n = Kp(this.r, this.g, this.b);
    return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var n = Kp(this.r, this.g, this.b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), s = Math.round(n.l * 100);
    return this.a === 1 ? "hsl(".concat(r, ", ").concat(i, "%, ").concat(s, "%)") : "hsla(".concat(r, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(n) {
    return n === void 0 && (n = !1), Gp(this.r, this.g, this.b, n);
  }, e.prototype.toHexString = function(n) {
    return n === void 0 && (n = !1), "#" + this.toHex(n);
  }, e.prototype.toHex8 = function(n) {
    return n === void 0 && (n = !1), Q$(this.r, this.g, this.b, this.a, n);
  }, e.prototype.toHex8String = function(n) {
    return n === void 0 && (n = !1), "#" + this.toHex8(n);
  }, e.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, e.prototype.toRgbString = function() {
    var n = Math.round(this.r), r = Math.round(this.g), i = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(n, ", ").concat(r, ", ").concat(i, ")") : "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(this.roundA, ")");
  }, e.prototype.toPercentageRgb = function() {
    var n = function(r) {
      return "".concat(Math.round($t(r, 255) * 100), "%");
    };
    return {
      r: n(this.r),
      g: n(this.g),
      b: n(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var n = function(r) {
      return Math.round($t(r, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%)") : "rgba(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var n = "#" + Gp(this.r, this.g, this.b, !1), r = 0, i = Object.entries(du); r < i.length; r++) {
      var s = i[r], l = s[0], c = s[1];
      if (n === c)
        return l;
    }
    return !1;
  }, e.prototype.toString = function(n) {
    var r = Boolean(n);
    n = n != null ? n : this.format;
    var i = !1, s = this.a < 1 && this.a >= 0, l = !r && s && (n.startsWith("hex") || n === "name");
    return l ? n === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (n === "rgb" && (i = this.toRgbString()), n === "prgb" && (i = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (i = this.toHexString()), n === "hex3" && (i = this.toHexString(!0)), n === "hex4" && (i = this.toHex8String(!0)), n === "hex8" && (i = this.toHex8String()), n === "name" && (i = this.toName()), n === "hsl" && (i = this.toHslString()), n === "hsv" && (i = this.toHsvString()), i || this.toHexString());
  }, e.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, e.prototype.clone = function() {
    return new e(this.toString());
  }, e.prototype.lighten = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.l += n / 100, r.l = $a(r.l), new e(r);
  }, e.prototype.brighten = function(n) {
    n === void 0 && (n = 10);
    var r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))), new e(r);
  }, e.prototype.darken = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.l -= n / 100, r.l = $a(r.l), new e(r);
  }, e.prototype.tint = function(n) {
    return n === void 0 && (n = 10), this.mix("white", n);
  }, e.prototype.shade = function(n) {
    return n === void 0 && (n = 10), this.mix("black", n);
  }, e.prototype.desaturate = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.s -= n / 100, r.s = $a(r.s), new e(r);
  }, e.prototype.saturate = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.s += n / 100, r.s = $a(r.s), new e(r);
  }, e.prototype.greyscale = function() {
    return this.desaturate(100);
  }, e.prototype.spin = function(n) {
    var r = this.toHsl(), i = (r.h + n) % 360;
    return r.h = i < 0 ? 360 + i : i, new e(r);
  }, e.prototype.mix = function(n, r) {
    r === void 0 && (r = 50);
    var i = this.toRgb(), s = new e(n).toRgb(), l = r / 100, c = {
      r: (s.r - i.r) * l + i.r,
      g: (s.g - i.g) * l + i.g,
      b: (s.b - i.b) * l + i.b,
      a: (s.a - i.a) * l + i.a
    };
    return new e(c);
  }, e.prototype.analogous = function(n, r) {
    n === void 0 && (n = 6), r === void 0 && (r = 30);
    var i = this.toHsl(), s = 360 / r, l = [this];
    for (i.h = (i.h - (s * n >> 1) + 720) % 360; --n; )
      i.h = (i.h + s) % 360, l.push(new e(i));
    return l;
  }, e.prototype.complement = function() {
    var n = this.toHsl();
    return n.h = (n.h + 180) % 360, new e(n);
  }, e.prototype.monochromatic = function(n) {
    n === void 0 && (n = 6);
    for (var r = this.toHsv(), i = r.h, s = r.s, l = r.v, c = [], f = 1 / n; n--; )
      c.push(new e({ h: i, s, v: l })), l = (l + f) % 1;
    return c;
  }, e.prototype.splitcomplement = function() {
    var n = this.toHsl(), r = n.h;
    return [
      this,
      new e({ h: (r + 72) % 360, s: n.s, l: n.l }),
      new e({ h: (r + 216) % 360, s: n.s, l: n.l })
    ];
  }, e.prototype.onBackground = function(n) {
    var r = this.toRgb(), i = new e(n).toRgb();
    return new e({
      r: i.r + (r.r - i.r) * r.a,
      g: i.g + (r.g - i.g) * r.a,
      b: i.b + (r.b - i.b) * r.a
    });
  }, e.prototype.triad = function() {
    return this.polyad(3);
  }, e.prototype.tetrad = function() {
    return this.polyad(4);
  }, e.prototype.polyad = function(n) {
    for (var r = this.toHsl(), i = r.h, s = [this], l = 360 / n, c = 1; c < n; c++)
      s.push(new e({ h: (i + c * l) % 360, s: r.s, l: r.l }));
    return s;
  }, e.prototype.equals = function(n) {
    return this.toRgbString() === new e(n).toRgbString();
  }, e;
}();
const Br = /* @__PURE__ */ new Map();
let Zp;
Rt && (document.addEventListener("mousedown", (e) => Zp = e), document.addEventListener("mouseup", (e) => {
  for (const n of Br.values())
    for (const { documentHandler: r } of n)
      r(e, Zp);
}));
function Xp(e, n) {
  let r = [];
  return Array.isArray(n.arg) ? r = n.arg : Oi(n.arg) && r.push(n.arg), function(i, s) {
    const l = n.instance.popperRef, c = i.target, f = s == null ? void 0 : s.target, d = !n || !n.instance, g = !c || !f, y = e.contains(c) || e.contains(f), _ = e === c, E = r.length && r.some((h) => h == null ? void 0 : h.contains(c)) || r.length && r.includes(f), S = l && (l.contains(c) || l.contains(f));
    d || g || y || _ || E || S || n.value(i, s);
  };
}
const s3 = {
  beforeMount(e, n) {
    Br.has(e) || Br.set(e, []), Br.get(e).push({
      documentHandler: Xp(e, n),
      bindingFn: n.value
    });
  },
  updated(e, n) {
    Br.has(e) || Br.set(e, []);
    const r = Br.get(e), i = r.findIndex((l) => l.bindingFn === n.oldValue), s = {
      documentHandler: Xp(e, n),
      bindingFn: n.value
    };
    i >= 0 ? r.splice(i, 1, s) : r.push(s);
  },
  unmounted(e) {
    Br.delete(e);
  }
}, Oh = {
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
  size: Pi,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Th = {
  [Tt]: (e) => Et(e) || On(e) || tr(e),
  change: (e) => Et(e) || On(e) || tr(e)
}, l3 = ({
  model: e,
  isChecked: n
}) => {
  const r = De(Vo, void 0), i = B(() => {
    var l, c;
    const f = (l = r == null ? void 0 : r.max) == null ? void 0 : l.value, d = (c = r == null ? void 0 : r.min) == null ? void 0 : c.value;
    return !Fo(f) && e.value.length >= f && !n.value || !Fo(d) && e.value.length <= d && n.value;
  });
  return {
    isDisabled: Nu(B(() => (r == null ? void 0 : r.disabled.value) || i.value)),
    isLimitDisabled: i
  };
}, u3 = (e, {
  model: n,
  isLimitExceeded: r,
  hasOwnLabel: i,
  isDisabled: s,
  isLabeledByFormItem: l
}) => {
  const c = De(Vo, void 0), { formItem: f } = Go(), { emit: d } = dn();
  function g(h) {
    var w, O;
    return h === e.trueLabel || h === !0 ? (w = e.trueLabel) != null ? w : !0 : (O = e.falseLabel) != null ? O : !1;
  }
  function y(h, w) {
    d("change", g(h), w);
  }
  function _(h) {
    if (r.value)
      return;
    const w = h.target;
    d("change", g(w.checked), h);
  }
  async function E(h) {
    r.value || !i.value && !s.value && l.value && (h.composedPath().some((A) => A.tagName === "LABEL") || (n.value = g([!1, e.falseLabel].includes(n.value)), await He(), y(n.value, h)));
  }
  const S = B(() => (c == null ? void 0 : c.validateEvent) || e.validateEvent);
  return pe(() => e.modelValue, () => {
    S.value && (f == null || f.validate("change").catch((h) => ct(h)));
  }), {
    handleChange: _,
    onClickRoot: E
  };
}, c3 = (e) => {
  const n = J(!1), { emit: r } = dn(), i = De(Vo, void 0), s = B(() => Fo(i) === !1), l = J(!1);
  return {
    model: B({
      get() {
        var f, d;
        return s.value ? (f = i == null ? void 0 : i.modelValue) == null ? void 0 : f.value : (d = e.modelValue) != null ? d : n.value;
      },
      set(f) {
        var d, g;
        s.value && Jn(f) ? (l.value = ((d = i == null ? void 0 : i.max) == null ? void 0 : d.value) !== void 0 && f.length > (i == null ? void 0 : i.max.value), l.value === !1 && ((g = i == null ? void 0 : i.changeEvent) == null || g.call(i, f))) : (r(Tt, f), n.value = f);
      }
    }),
    isGroup: s,
    isLimitExceeded: l
  };
}, f3 = (e, n, { model: r }) => {
  const i = De(Vo, void 0), s = J(!1), l = B(() => {
    const g = r.value;
    return tr(g) ? g : Jn(g) ? g.map(_i).includes(e.label) : g != null ? g === e.trueLabel : !!g;
  }), c = Hr(B(() => {
    var g;
    return (g = i == null ? void 0 : i.size) == null ? void 0 : g.value;
  }), {
    prop: !0
  }), f = Hr(B(() => {
    var g;
    return (g = i == null ? void 0 : i.size) == null ? void 0 : g.value;
  })), d = B(() => !!(n.default || e.label));
  return {
    checkboxButtonSize: c,
    isChecked: l,
    isFocused: s,
    checkboxSize: f,
    hasOwnLabel: d
  };
}, d3 = (e, { model: n }) => {
  function r() {
    Jn(n.value) && !n.value.includes(e.label) ? n.value.push(e.label) : n.value = e.trueLabel || !0;
  }
  e.checked && r();
}, Ch = (e, n) => {
  const { formItem: r } = Go(), { model: i, isGroup: s, isLimitExceeded: l } = c3(e), {
    isFocused: c,
    isChecked: f,
    checkboxButtonSize: d,
    checkboxSize: g,
    hasOwnLabel: y
  } = f3(e, n, { model: i }), { isDisabled: _ } = l3({ model: i, isChecked: f }), { inputId: E, isLabeledByFormItem: S } = vs(e, {
    formItemContext: r,
    disableIdGeneration: y,
    disableIdManagement: s
  }), { handleChange: h, onClickRoot: w } = u3(e, {
    model: i,
    isLimitExceeded: l,
    hasOwnLabel: y,
    isDisabled: _,
    isLabeledByFormItem: S
  });
  return d3(e, { model: i }), {
    inputId: E,
    isLabeledByFormItem: S,
    isChecked: f,
    isDisabled: _,
    isFocused: c,
    checkboxButtonSize: d,
    checkboxSize: g,
    hasOwnLabel: y,
    model: i,
    handleChange: h,
    onClickRoot: w
  };
}, p3 = ["tabindex", "role", "aria-checked"], v3 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], h3 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], g3 = le({
  name: "ElCheckbox"
}), m3 = /* @__PURE__ */ le({
  ...g3,
  props: Oh,
  emits: Th,
  setup(e) {
    const n = e, r = $i(), {
      inputId: i,
      isLabeledByFormItem: s,
      isChecked: l,
      isDisabled: c,
      isFocused: f,
      checkboxSize: d,
      hasOwnLabel: g,
      model: y,
      handleChange: _,
      onClickRoot: E
    } = Ch(n, r), S = Be("checkbox");
    return (h, w) => (G(), Pe(xn(!v(g) && v(s) ? "span" : "label"), {
      class: ee([
        v(S).b(),
        v(S).m(v(d)),
        v(S).is("disabled", v(c)),
        v(S).is("bordered", h.border),
        v(S).is("checked", v(l))
      ]),
      "aria-controls": h.indeterminate ? h.controls : null,
      onClick: v(E)
    }, {
      default: Te(() => [
        de("span", {
          class: ee([
            v(S).e("input"),
            v(S).is("disabled", v(c)),
            v(S).is("checked", v(l)),
            v(S).is("indeterminate", h.indeterminate),
            v(S).is("focus", v(f))
          ]),
          tabindex: h.indeterminate ? 0 : void 0,
          role: h.indeterminate ? "checkbox" : void 0,
          "aria-checked": h.indeterminate ? "mixed" : void 0
        }, [
          h.trueLabel || h.falseLabel ? It((G(), re("input", {
            key: 0,
            id: v(i),
            "onUpdate:modelValue": w[0] || (w[0] = (O) => so(y) ? y.value = O : null),
            class: ee(v(S).e("original")),
            type: "checkbox",
            "aria-hidden": h.indeterminate ? "true" : "false",
            name: h.name,
            tabindex: h.tabindex,
            disabled: v(c),
            "true-value": h.trueLabel,
            "false-value": h.falseLabel,
            onChange: w[1] || (w[1] = (...O) => v(_) && v(_)(...O)),
            onFocus: w[2] || (w[2] = (O) => f.value = !0),
            onBlur: w[3] || (w[3] = (O) => f.value = !1)
          }, null, 42, v3)), [
            [Ga, v(y)]
          ]) : It((G(), re("input", {
            key: 1,
            id: v(i),
            "onUpdate:modelValue": w[4] || (w[4] = (O) => so(y) ? y.value = O : null),
            class: ee(v(S).e("original")),
            type: "checkbox",
            "aria-hidden": h.indeterminate ? "true" : "false",
            disabled: v(c),
            value: h.label,
            name: h.name,
            tabindex: h.tabindex,
            onChange: w[5] || (w[5] = (...O) => v(_) && v(_)(...O)),
            onFocus: w[6] || (w[6] = (O) => f.value = !0),
            onBlur: w[7] || (w[7] = (O) => f.value = !1)
          }, null, 42, h3)), [
            [Ga, v(y)]
          ]),
          de("span", {
            class: ee(v(S).e("inner"))
          }, null, 2)
        ], 10, p3),
        v(g) ? (G(), re("span", {
          key: 0,
          class: ee(v(S).e("label"))
        }, [
          Ce(h.$slots, "default"),
          h.$slots.default ? we("v-if", !0) : (G(), re(Ht, { key: 0 }, [
            Ho(ht(h.label), 1)
          ], 64))
        ], 2)) : we("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var b3 = /* @__PURE__ */ Ke(m3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const y3 = ["name", "tabindex", "disabled", "true-value", "false-value"], _3 = ["name", "tabindex", "disabled", "value"], w3 = le({
  name: "ElCheckboxButton"
}), E3 = /* @__PURE__ */ le({
  ...w3,
  props: Oh,
  emits: Th,
  setup(e) {
    const n = e, r = $i(), {
      isFocused: i,
      isChecked: s,
      isDisabled: l,
      checkboxButtonSize: c,
      model: f,
      handleChange: d
    } = Ch(n, r), g = De(Vo, void 0), y = Be("checkbox"), _ = B(() => {
      var E, S, h, w;
      const O = (S = (E = g == null ? void 0 : g.fill) == null ? void 0 : E.value) != null ? S : "";
      return {
        backgroundColor: O,
        borderColor: O,
        color: (w = (h = g == null ? void 0 : g.textColor) == null ? void 0 : h.value) != null ? w : "",
        boxShadow: O ? `-1px 0 0 0 ${O}` : void 0
      };
    });
    return (E, S) => (G(), re("label", {
      class: ee([
        v(y).b("button"),
        v(y).bm("button", v(c)),
        v(y).is("disabled", v(l)),
        v(y).is("checked", v(s)),
        v(y).is("focus", v(i))
      ])
    }, [
      E.trueLabel || E.falseLabel ? It((G(), re("input", {
        key: 0,
        "onUpdate:modelValue": S[0] || (S[0] = (h) => so(f) ? f.value = h : null),
        class: ee(v(y).be("button", "original")),
        type: "checkbox",
        name: E.name,
        tabindex: E.tabindex,
        disabled: v(l),
        "true-value": E.trueLabel,
        "false-value": E.falseLabel,
        onChange: S[1] || (S[1] = (...h) => v(d) && v(d)(...h)),
        onFocus: S[2] || (S[2] = (h) => i.value = !0),
        onBlur: S[3] || (S[3] = (h) => i.value = !1)
      }, null, 42, y3)), [
        [Ga, v(f)]
      ]) : It((G(), re("input", {
        key: 1,
        "onUpdate:modelValue": S[4] || (S[4] = (h) => so(f) ? f.value = h : null),
        class: ee(v(y).be("button", "original")),
        type: "checkbox",
        name: E.name,
        tabindex: E.tabindex,
        disabled: v(l),
        value: E.label,
        onChange: S[5] || (S[5] = (...h) => v(d) && v(d)(...h)),
        onFocus: S[6] || (S[6] = (h) => i.value = !0),
        onBlur: S[7] || (S[7] = (h) => i.value = !1)
      }, null, 42, _3)), [
        [Ga, v(f)]
      ]),
      E.$slots.default || E.label ? (G(), re("span", {
        key: 2,
        class: ee(v(y).be("button", "inner")),
        style: Ot(v(s) ? v(_) : void 0)
      }, [
        Ce(E.$slots, "default", {}, () => [
          Ho(ht(E.label), 1)
        ])
      ], 6)) : we("v-if", !0)
    ], 2));
  }
});
var Ah = /* @__PURE__ */ Ke(E3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const S3 = tt({
  modelValue: {
    type: Ne(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Pi,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), x3 = {
  [Tt]: (e) => Jn(e),
  change: (e) => Jn(e)
}, O3 = le({
  name: "ElCheckboxGroup"
}), T3 = /* @__PURE__ */ le({
  ...O3,
  props: S3,
  emits: x3,
  setup(e, { emit: n }) {
    const r = e, i = Be("checkbox"), { formItem: s } = Go(), { inputId: l, isLabeledByFormItem: c } = vs(r, {
      formItemContext: s
    }), f = async (g) => {
      n(Tt, g), await He(), n("change", g);
    }, d = B({
      get() {
        return r.modelValue;
      },
      set(g) {
        f(g);
      }
    });
    return Lt(Vo, {
      ...pT(Er(r), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: d,
      changeEvent: f
    }), pe(() => r.modelValue, () => {
      r.validateEvent && (s == null || s.validate("change").catch((g) => ct(g)));
    }), (g, y) => {
      var _;
      return G(), Pe(xn(g.tag), {
        id: v(l),
        class: ee(v(i).b("group")),
        role: "group",
        "aria-label": v(c) ? void 0 : g.label || "checkbox-group",
        "aria-labelledby": v(c) ? (_ = v(s)) == null ? void 0 : _.labelId : void 0
      }, {
        default: Te(() => [
          Ce(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ih = /* @__PURE__ */ Ke(T3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const C3 = qn(b3, {
  CheckboxButton: Ah,
  CheckboxGroup: Ih
});
rr(Ah);
rr(Ih);
const $h = tt({
  size: Pi,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), A3 = tt({
  ...$h,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), Mh = {
  [Tt]: (e) => Et(e) || On(e) || tr(e),
  [Fu]: (e) => Et(e) || On(e) || tr(e)
}, Ph = (e, n) => {
  const r = J(), i = De(Jv, void 0), s = B(() => !!i), l = B({
    get() {
      return s.value ? i.modelValue : e.modelValue;
    },
    set(y) {
      s.value ? i.changeEvent(y) : n && n(Tt, y), r.value.checked = e.modelValue === e.label;
    }
  }), c = Hr(B(() => i == null ? void 0 : i.size)), f = Nu(B(() => i == null ? void 0 : i.disabled)), d = J(!1), g = B(() => f.value || s.value && l.value !== e.label ? -1 : 0);
  return {
    radioRef: r,
    isGroup: s,
    radioGroup: i,
    focus: d,
    size: c,
    disabled: f,
    tabIndex: g,
    modelValue: l
  };
}, I3 = ["value", "name", "disabled"], $3 = le({
  name: "ElRadio"
}), M3 = /* @__PURE__ */ le({
  ...$3,
  props: A3,
  emits: Mh,
  setup(e, { emit: n }) {
    const r = e, i = Be("radio"), { radioRef: s, radioGroup: l, focus: c, size: f, disabled: d, modelValue: g } = Ph(r, n);
    function y() {
      He(() => n("change", g.value));
    }
    return (_, E) => {
      var S;
      return G(), re("label", {
        class: ee([
          v(i).b(),
          v(i).is("disabled", v(d)),
          v(i).is("focus", v(c)),
          v(i).is("bordered", _.border),
          v(i).is("checked", v(g) === _.label),
          v(i).m(v(f))
        ])
      }, [
        de("span", {
          class: ee([
            v(i).e("input"),
            v(i).is("disabled", v(d)),
            v(i).is("checked", v(g) === _.label)
          ])
        }, [
          It(de("input", {
            ref_key: "radioRef",
            ref: s,
            "onUpdate:modelValue": E[0] || (E[0] = (h) => so(g) ? g.value = h : null),
            class: ee(v(i).e("original")),
            value: _.label,
            name: _.name || ((S = v(l)) == null ? void 0 : S.name),
            disabled: v(d),
            type: "radio",
            onFocus: E[1] || (E[1] = (h) => c.value = !0),
            onBlur: E[2] || (E[2] = (h) => c.value = !1),
            onChange: y
          }, null, 42, I3), [
            [dv, v(g)]
          ]),
          de("span", {
            class: ee(v(i).e("inner"))
          }, null, 2)
        ], 2),
        de("span", {
          class: ee(v(i).e("label")),
          onKeydown: E[3] || (E[3] = Wt(() => {
          }, ["stop"]))
        }, [
          Ce(_.$slots, "default", {}, () => [
            Ho(ht(_.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var P3 = /* @__PURE__ */ Ke(M3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const R3 = tt({
  ...$h,
  name: {
    type: String,
    default: ""
  }
}), L3 = ["value", "name", "disabled"], F3 = le({
  name: "ElRadioButton"
}), B3 = /* @__PURE__ */ le({
  ...F3,
  props: R3,
  setup(e) {
    const n = e, r = Be("radio"), { radioRef: i, focus: s, size: l, disabled: c, modelValue: f, radioGroup: d } = Ph(n), g = B(() => ({
      backgroundColor: (d == null ? void 0 : d.fill) || "",
      borderColor: (d == null ? void 0 : d.fill) || "",
      boxShadow: d != null && d.fill ? `-1px 0 0 0 ${d.fill}` : "",
      color: (d == null ? void 0 : d.textColor) || ""
    }));
    return (y, _) => {
      var E;
      return G(), re("label", {
        class: ee([
          v(r).b("button"),
          v(r).is("active", v(f) === y.label),
          v(r).is("disabled", v(c)),
          v(r).is("focus", v(s)),
          v(r).bm("button", v(l))
        ])
      }, [
        It(de("input", {
          ref_key: "radioRef",
          ref: i,
          "onUpdate:modelValue": _[0] || (_[0] = (S) => so(f) ? f.value = S : null),
          class: ee(v(r).be("button", "original-radio")),
          value: y.label,
          type: "radio",
          name: y.name || ((E = v(d)) == null ? void 0 : E.name),
          disabled: v(c),
          onFocus: _[1] || (_[1] = (S) => s.value = !0),
          onBlur: _[2] || (_[2] = (S) => s.value = !1)
        }, null, 42, L3), [
          [dv, v(f)]
        ]),
        de("span", {
          class: ee(v(r).be("button", "inner")),
          style: Ot(v(f) === y.label ? v(g) : {}),
          onKeydown: _[3] || (_[3] = Wt(() => {
          }, ["stop"]))
        }, [
          Ce(y.$slots, "default", {}, () => [
            Ho(ht(y.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Rh = /* @__PURE__ */ Ke(B3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const k3 = tt({
  id: {
    type: String,
    default: void 0
  },
  size: Pi,
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
    default: !0
  }
}), N3 = Mh, D3 = ["id", "aria-label", "aria-labelledby"], W3 = le({
  name: "ElRadioGroup"
}), z3 = /* @__PURE__ */ le({
  ...W3,
  props: k3,
  emits: N3,
  setup(e, { emit: n }) {
    const r = e, i = Be("radio"), s = ps(), l = J(), { formItem: c } = Go(), { inputId: f, isLabeledByFormItem: d } = vs(r, {
      formItemContext: c
    }), g = (_) => {
      n(Tt, _), He(() => n("change", _));
    };
    at(() => {
      const _ = l.value.querySelectorAll("[type=radio]"), E = _[0];
      !Array.from(_).some((S) => S.checked) && E && (E.tabIndex = 0);
    });
    const y = B(() => r.name || s.value);
    return Lt(Jv, $n({
      ...Er(r),
      changeEvent: g,
      name: y
    })), pe(() => r.modelValue, () => {
      r.validateEvent && (c == null || c.validate("change").catch((_) => ct(_)));
    }), (_, E) => (G(), re("div", {
      id: v(f),
      ref_key: "radioGroupRef",
      ref: l,
      class: ee(v(i).b("group")),
      role: "radiogroup",
      "aria-label": v(d) ? void 0 : _.label || "radio-group",
      "aria-labelledby": v(d) ? v(c).labelId : void 0
    }, [
      Ce(_.$slots, "default")
    ], 10, D3));
  }
});
var Lh = /* @__PURE__ */ Ke(z3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const H3 = qn(P3, {
  RadioButton: Rh,
  RadioGroup: Lh
});
rr(Lh);
rr(Rh);
const Fh = tt({
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
    values: Mi,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), q3 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, U3 = le({
  name: "ElTag"
}), V3 = /* @__PURE__ */ le({
  ...U3,
  props: Fh,
  emits: q3,
  setup(e, { emit: n }) {
    const r = e, i = Hr(), s = Be("tag"), l = B(() => {
      const { type: d, hit: g, effect: y, closable: _, round: E } = r;
      return [
        s.b(),
        s.is("closable", _),
        s.m(d),
        s.m(i.value),
        s.m(y),
        s.is("hit", g),
        s.is("round", E)
      ];
    }), c = (d) => {
      n("close", d);
    }, f = (d) => {
      n("click", d);
    };
    return (d, g) => d.disableTransitions ? (G(), re("span", {
      key: 0,
      class: ee(v(l)),
      style: Ot({ backgroundColor: d.color }),
      onClick: f
    }, [
      de("span", {
        class: ee(v(s).e("content"))
      }, [
        Ce(d.$slots, "default")
      ], 2),
      d.closable ? (G(), Pe(v(Dn), {
        key: 0,
        class: ee(v(s).e("close")),
        onClick: Wt(c, ["stop"])
      }, {
        default: Te(() => [
          ut(v(yp))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : we("v-if", !0)
    ], 6)) : (G(), Pe(co, {
      key: 1,
      name: `${v(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Te(() => [
        de("span", {
          class: ee(v(l)),
          style: Ot({ backgroundColor: d.color }),
          onClick: f
        }, [
          de("span", {
            class: ee(v(s).e("content"))
          }, [
            Ce(d.$slots, "default")
          ], 2),
          d.closable ? (G(), Pe(v(Dn), {
            key: 0,
            class: ee(v(s).e("close")),
            onClick: Wt(c, ["stop"])
          }, {
            default: Te(() => [
              ut(v(yp))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : we("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var K3 = /* @__PURE__ */ Ke(V3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const j3 = qn(K3), G3 = le({
  name: "ElCollapseTransition"
}), Y3 = /* @__PURE__ */ le({
  ...G3,
  setup(e) {
    const n = Be("collapse-transition"), r = {
      beforeEnter(i) {
        i.dataset || (i.dataset = {}), i.dataset.oldPaddingTop = i.style.paddingTop, i.dataset.oldPaddingBottom = i.style.paddingBottom, i.style.maxHeight = 0, i.style.paddingTop = 0, i.style.paddingBottom = 0;
      },
      enter(i) {
        i.dataset.oldOverflow = i.style.overflow, i.scrollHeight !== 0 ? (i.style.maxHeight = `${i.scrollHeight}px`, i.style.paddingTop = i.dataset.oldPaddingTop, i.style.paddingBottom = i.dataset.oldPaddingBottom) : (i.style.maxHeight = 0, i.style.paddingTop = i.dataset.oldPaddingTop, i.style.paddingBottom = i.dataset.oldPaddingBottom), i.style.overflow = "hidden";
      },
      afterEnter(i) {
        i.style.maxHeight = "", i.style.overflow = i.dataset.oldOverflow;
      },
      beforeLeave(i) {
        i.dataset || (i.dataset = {}), i.dataset.oldPaddingTop = i.style.paddingTop, i.dataset.oldPaddingBottom = i.style.paddingBottom, i.dataset.oldOverflow = i.style.overflow, i.style.maxHeight = `${i.scrollHeight}px`, i.style.overflow = "hidden";
      },
      leave(i) {
        i.scrollHeight !== 0 && (i.style.maxHeight = 0, i.style.paddingTop = 0, i.style.paddingBottom = 0);
      },
      afterLeave(i) {
        i.style.maxHeight = "", i.style.overflow = i.dataset.oldOverflow, i.style.paddingTop = i.dataset.oldPaddingTop, i.style.paddingBottom = i.dataset.oldPaddingBottom;
      }
    };
    return (i, s) => (G(), Pe(co, Xn({
      name: v(n).b()
    }, kw(r)), {
      default: Te(() => [
        Ce(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Na = /* @__PURE__ */ Ke(Y3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Na.install = (e) => {
  e.component(Na.name, Na);
};
const Z3 = Na, X3 = tt({
  model: Object,
  rules: {
    type: Ne(Object)
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
    default: !0
  },
  size: {
    type: String,
    values: Mi
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: !1
  },
  scrollToError: Boolean
}), J3 = {
  validate: (e, n, r) => (Jn(e) || Et(e)) && tr(n) && Et(r)
}, Q3 = "ElForm";
function e4() {
  const e = J([]), n = B(() => {
    if (!e.value.length)
      return "0";
    const l = Math.max(...e.value);
    return l ? `${l}px` : "";
  });
  function r(l) {
    const c = e.value.indexOf(l);
    return c === -1 && n.value === "0" && ct(Q3, `unexpected width ${l}`), c;
  }
  function i(l, c) {
    if (l && c) {
      const f = r(c);
      e.value.splice(f, 1, l);
    } else
      l && e.value.push(l);
  }
  function s(l) {
    const c = r(l);
    c > -1 && e.value.splice(c, 1);
  }
  return {
    autoLabelWidth: n,
    registerLabelWidth: i,
    deregisterLabelWidth: s
  };
}
const Pa = (e, n) => {
  const r = ru(n);
  return r.length > 0 ? e.filter((i) => i.prop && r.includes(i.prop)) : e;
}, Da = "ElForm", t4 = le({
  name: Da
}), n4 = /* @__PURE__ */ le({
  ...t4,
  props: X3,
  emits: J3,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = [], l = Hr(), c = Be("form"), f = B(() => {
      const { labelPosition: L, inline: C } = i;
      return [
        c.b(),
        c.m(l.value || "default"),
        {
          [c.m(`label-${L}`)]: L,
          [c.m("inline")]: C
        }
      ];
    }), d = (L) => {
      s.push(L);
    }, g = (L) => {
      L.prop && s.splice(s.indexOf(L), 1);
    }, y = (L = []) => {
      if (!i.model) {
        ct(Da, "model is required for resetFields to work.");
        return;
      }
      Pa(s, L).forEach((C) => C.resetField());
    }, _ = (L = []) => {
      Pa(s, L).forEach((C) => C.clearValidate());
    }, E = B(() => {
      const L = !!i.model;
      return L || ct(Da, "model is required for validate to work."), L;
    }), S = (L) => {
      if (s.length === 0)
        return [];
      const C = Pa(s, L);
      return C.length ? C : (ct(Da, "please pass correct props!"), []);
    }, h = async (L) => O(void 0, L), w = async (L = []) => {
      if (!E.value)
        return !1;
      const C = S(L);
      if (C.length === 0)
        return !0;
      let F = {};
      for (const $ of C)
        try {
          await $.validate("");
        } catch (P) {
          F = {
            ...F,
            ...P
          };
        }
      return Object.keys(F).length === 0 ? !0 : Promise.reject(F);
    }, O = async (L = [], C) => {
      const F = !Nr(C);
      try {
        const $ = await w(L);
        return $ === !0 && (C == null || C($)), $;
      } catch ($) {
        const P = $;
        return i.scrollToError && A(Object.keys(P)[0]), C == null || C(!1, P), F && Promise.reject(P);
      }
    }, A = (L) => {
      var C;
      const F = Pa(s, L)[0];
      F && ((C = F.$el) == null || C.scrollIntoView());
    };
    return pe(() => i.rules, () => {
      i.validateOnRuleChange && h().catch((L) => ct(L));
    }, { deep: !0 }), Lt(Ko, $n({
      ...Er(i),
      emit: r,
      resetFields: y,
      clearValidate: _,
      validateField: O,
      addField: d,
      removeField: g,
      ...e4()
    })), n({
      validate: h,
      validateField: O,
      resetFields: y,
      clearValidate: _,
      scrollToField: A
    }), (L, C) => (G(), re("form", {
      class: ee(v(f))
    }, [
      Ce(L.$slots, "default")
    ], 2));
  }
});
var r4 = /* @__PURE__ */ Ke(n4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, io.apply(this, arguments);
}
function o4(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Ii(e, n);
}
function pu(e) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e);
}
function Ii(e, n) {
  return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, Ii(e, n);
}
function i4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Wa(e, n, r) {
  return i4() ? Wa = Reflect.construct.bind() : Wa = function(s, l, c) {
    var f = [null];
    f.push.apply(f, l);
    var d = Function.bind.apply(s, f), g = new d();
    return c && Ii(g, c.prototype), g;
  }, Wa.apply(null, arguments);
}
function a4(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function vu(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vu = function(i) {
    if (i === null || !a4(i))
      return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(i))
        return n.get(i);
      n.set(i, s);
    }
    function s() {
      return Wa(i, arguments, pu(this).constructor);
    }
    return s.prototype = Object.create(i.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ii(s, i);
  }, vu(e);
}
var s4 = /%[sdj%]/g, Bh = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Bh = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(i) {
    return typeof i == "string";
  }) && console.warn(n, r);
});
function hu(e) {
  if (!e || !e.length)
    return null;
  var n = {};
  return e.forEach(function(r) {
    var i = r.field;
    n[i] = n[i] || [], n[i].push(r);
  }), n;
}
function fn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  var s = 0, l = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var c = e.replace(s4, function(f) {
      if (f === "%%")
        return "%";
      if (s >= l)
        return f;
      switch (f) {
        case "%s":
          return String(r[s++]);
        case "%d":
          return Number(r[s++]);
        case "%j":
          try {
            return JSON.stringify(r[s++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return f;
      }
    });
    return c;
  }
  return e;
}
function l4(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function St(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || l4(n) && typeof e == "string" && !e);
}
function u4(e, n, r) {
  var i = [], s = 0, l = e.length;
  function c(f) {
    i.push.apply(i, f || []), s++, s === l && r(i);
  }
  e.forEach(function(f) {
    n(f, c);
  });
}
function Jp(e, n, r) {
  var i = 0, s = e.length;
  function l(c) {
    if (c && c.length) {
      r(c);
      return;
    }
    var f = i;
    i = i + 1, f < s ? n(e[f], l) : r([]);
  }
  l([]);
}
function c4(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var Qp = /* @__PURE__ */ function(e) {
  o4(n, e);
  function n(r, i) {
    var s;
    return s = e.call(this, "Async Validation Error") || this, s.errors = r, s.fields = i, s;
  }
  return n;
}(/* @__PURE__ */ vu(Error));
function f4(e, n, r, i, s) {
  if (n.first) {
    var l = new Promise(function(E, S) {
      var h = function(A) {
        return i(A), A.length ? S(new Qp(A, hu(A))) : E(s);
      }, w = c4(e);
      Jp(w, r, h);
    });
    return l.catch(function(E) {
      return E;
    }), l;
  }
  var c = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], f = Object.keys(e), d = f.length, g = 0, y = [], _ = new Promise(function(E, S) {
    var h = function(O) {
      if (y.push.apply(y, O), g++, g === d)
        return i(y), y.length ? S(new Qp(y, hu(y))) : E(s);
    };
    f.length || (i(y), E(s)), f.forEach(function(w) {
      var O = e[w];
      c.indexOf(w) !== -1 ? Jp(O, r, h) : u4(O, r, h);
    });
  });
  return _.catch(function(E) {
    return E;
  }), _;
}
function d4(e) {
  return !!(e && e.message !== void 0);
}
function p4(e, n) {
  for (var r = e, i = 0; i < n.length; i++) {
    if (r == null)
      return r;
    r = r[n[i]];
  }
  return r;
}
function ev(e, n) {
  return function(r) {
    var i;
    return e.fullFields ? i = p4(n, e.fullFields) : i = n[r.field || e.fullField], d4(r) ? (r.field = r.field || e.fullField, r.fieldValue = i, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: i,
      field: r.field || e.fullField
    };
  };
}
function tv(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var i = n[r];
        typeof i == "object" && typeof e[r] == "object" ? e[r] = io({}, e[r], i) : e[r] = i;
      }
  }
  return e;
}
var kh = function(n, r, i, s, l, c) {
  n.required && (!i.hasOwnProperty(n.field) || St(r, c || n.type)) && s.push(fn(l.messages.required, n.fullField));
}, v4 = function(n, r, i, s, l) {
  (/^\s+$/.test(r) || r === "") && s.push(fn(l.messages.whitespace, n.fullField));
}, Ra, h4 = function() {
  if (Ra)
    return Ra;
  var e = "[a-fA-F\\d:]", n = function(F) {
    return F && F.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", i = "[a-fA-F\\d]{1,4}", s = (`
(?:
(?:` + i + ":){7}(?:" + i + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + i + ":){6}(?:" + r + "|:" + i + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + i + ":){5}(?::" + r + "|(?::" + i + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + i + ":){4}(?:(?::" + i + "){0,1}:" + r + "|(?::" + i + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + i + ":){3}(?:(?::" + i + "){0,2}:" + r + "|(?::" + i + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + i + ":){2}(?:(?::" + i + "){0,3}:" + r + "|(?::" + i + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + i + ":){1}(?:(?::" + i + "){0,4}:" + r + "|(?::" + i + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + i + "){0,5}:" + r + "|(?::" + i + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), l = new RegExp("(?:^" + r + "$)|(?:^" + s + "$)"), c = new RegExp("^" + r + "$"), f = new RegExp("^" + s + "$"), d = function(F) {
    return F && F.exact ? l : new RegExp("(?:" + n(F) + r + n(F) + ")|(?:" + n(F) + s + n(F) + ")", "g");
  };
  d.v4 = function(C) {
    return C && C.exact ? c : new RegExp("" + n(C) + r + n(C), "g");
  }, d.v6 = function(C) {
    return C && C.exact ? f : new RegExp("" + n(C) + s + n(C), "g");
  };
  var g = "(?:(?:[a-z]+:)?//)", y = "(?:\\S+(?::\\S*)?@)?", _ = d.v4().source, E = d.v6().source, S = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", w = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", O = "(?::\\d{2,5})?", A = '(?:[/?#][^\\s"]*)?', L = "(?:" + g + "|www\\.)" + y + "(?:localhost|" + _ + "|" + E + "|" + S + h + w + ")" + O + A;
  return Ra = new RegExp("(?:^" + L + "$)", "i"), Ra;
}, nv = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, vi = {
  integer: function(n) {
    return vi.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return vi.number(n) && !vi.integer(n);
  },
  array: function(n) {
    return Array.isArray(n);
  },
  regexp: function(n) {
    if (n instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(n);
    } catch {
      return !1;
    }
  },
  date: function(n) {
    return typeof n.getTime == "function" && typeof n.getMonth == "function" && typeof n.getYear == "function" && !isNaN(n.getTime());
  },
  number: function(n) {
    return isNaN(n) ? !1 : typeof n == "number";
  },
  object: function(n) {
    return typeof n == "object" && !vi.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(nv.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(h4());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(nv.hex);
  }
}, g4 = function(n, r, i, s, l) {
  if (n.required && r === void 0) {
    kh(n, r, i, s, l);
    return;
  }
  var c = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], f = n.type;
  c.indexOf(f) > -1 ? vi[f](r) || s.push(fn(l.messages.types[f], n.fullField, n.type)) : f && typeof r !== n.type && s.push(fn(l.messages.types[f], n.fullField, n.type));
}, m4 = function(n, r, i, s, l) {
  var c = typeof n.len == "number", f = typeof n.min == "number", d = typeof n.max == "number", g = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, y = r, _ = null, E = typeof r == "number", S = typeof r == "string", h = Array.isArray(r);
  if (E ? _ = "number" : S ? _ = "string" : h && (_ = "array"), !_)
    return !1;
  h && (y = r.length), S && (y = r.replace(g, "_").length), c ? y !== n.len && s.push(fn(l.messages[_].len, n.fullField, n.len)) : f && !d && y < n.min ? s.push(fn(l.messages[_].min, n.fullField, n.min)) : d && !f && y > n.max ? s.push(fn(l.messages[_].max, n.fullField, n.max)) : f && d && (y < n.min || y > n.max) && s.push(fn(l.messages[_].range, n.fullField, n.min, n.max));
}, Mo = "enum", b4 = function(n, r, i, s, l) {
  n[Mo] = Array.isArray(n[Mo]) ? n[Mo] : [], n[Mo].indexOf(r) === -1 && s.push(fn(l.messages[Mo], n.fullField, n[Mo].join(", ")));
}, y4 = function(n, r, i, s, l) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || s.push(fn(l.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var c = new RegExp(n.pattern);
      c.test(r) || s.push(fn(l.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, Fe = {
  required: kh,
  whitespace: v4,
  type: g4,
  range: m4,
  enum: b4,
  pattern: y4
}, _4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r, "string") && !n.required)
      return i();
    Fe.required(n, r, s, c, l, "string"), St(r, "string") || (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l), Fe.pattern(n, r, s, c, l), n.whitespace === !0 && Fe.whitespace(n, r, s, c, l));
  }
  i(c);
}, w4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, E4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (r === "" && (r = void 0), St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, S4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, x4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), St(r) || Fe.type(n, r, s, c, l);
  }
  i(c);
}, O4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, T4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, C4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (r == null && !n.required)
      return i();
    Fe.required(n, r, s, c, l, "array"), r != null && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, A4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, I4 = "enum", $4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe[I4](n, r, s, c, l);
  }
  i(c);
}, M4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r, "string") && !n.required)
      return i();
    Fe.required(n, r, s, c, l), St(r, "string") || Fe.pattern(n, r, s, c, l);
  }
  i(c);
}, P4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r, "date") && !n.required)
      return i();
    if (Fe.required(n, r, s, c, l), !St(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Fe.type(n, d, s, c, l), d && Fe.range(n, d.getTime(), s, c, l);
    }
  }
  i(c);
}, R4 = function(n, r, i, s, l) {
  var c = [], f = Array.isArray(r) ? "array" : typeof r;
  Fe.required(n, r, s, c, l, f), i(c);
}, Kl = function(n, r, i, s, l) {
  var c = n.type, f = [], d = n.required || !n.required && s.hasOwnProperty(n.field);
  if (d) {
    if (St(r, c) && !n.required)
      return i();
    Fe.required(n, r, s, f, l, c), St(r, c) || Fe.type(n, r, s, f, l);
  }
  i(f);
}, L4 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (St(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l);
  }
  i(c);
}, yi = {
  string: _4,
  method: w4,
  number: E4,
  boolean: S4,
  regexp: x4,
  integer: O4,
  float: T4,
  array: C4,
  object: A4,
  enum: $4,
  pattern: M4,
  date: P4,
  url: Kl,
  hex: Kl,
  email: Kl,
  required: R4,
  any: L4
};
function gu() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
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
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
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
    clone: function() {
      var n = JSON.parse(JSON.stringify(this));
      return n.clone = this.clone, n;
    }
  };
}
var mu = gu(), Fi = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = mu, this.define(r);
  }
  var n = e.prototype;
  return n.define = function(i) {
    var s = this;
    if (!i)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof i != "object" || Array.isArray(i))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(i).forEach(function(l) {
      var c = i[l];
      s.rules[l] = Array.isArray(c) ? c : [c];
    });
  }, n.messages = function(i) {
    return i && (this._messages = tv(gu(), i)), this._messages;
  }, n.validate = function(i, s, l) {
    var c = this;
    s === void 0 && (s = {}), l === void 0 && (l = function() {
    });
    var f = i, d = s, g = l;
    if (typeof d == "function" && (g = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return g && g(null, f), Promise.resolve(f);
    function y(w) {
      var O = [], A = {};
      function L(F) {
        if (Array.isArray(F)) {
          var $;
          O = ($ = O).concat.apply($, F);
        } else
          O.push(F);
      }
      for (var C = 0; C < w.length; C++)
        L(w[C]);
      O.length ? (A = hu(O), g(O, A)) : g(null, f);
    }
    if (d.messages) {
      var _ = this.messages();
      _ === mu && (_ = gu()), tv(_, d.messages), d.messages = _;
    } else
      d.messages = this.messages();
    var E = {}, S = d.keys || Object.keys(this.rules);
    S.forEach(function(w) {
      var O = c.rules[w], A = f[w];
      O.forEach(function(L) {
        var C = L;
        typeof C.transform == "function" && (f === i && (f = io({}, f)), A = f[w] = C.transform(A)), typeof C == "function" ? C = {
          validator: C
        } : C = io({}, C), C.validator = c.getValidationMethod(C), C.validator && (C.field = w, C.fullField = C.fullField || w, C.type = c.getType(C), E[w] = E[w] || [], E[w].push({
          rule: C,
          value: A,
          source: f,
          field: w
        }));
      });
    });
    var h = {};
    return f4(E, d, function(w, O) {
      var A = w.rule, L = (A.type === "object" || A.type === "array") && (typeof A.fields == "object" || typeof A.defaultField == "object");
      L = L && (A.required || !A.required && w.value), A.field = w.field;
      function C(P, R) {
        return io({}, R, {
          fullField: A.fullField + "." + P,
          fullFields: A.fullFields ? [].concat(A.fullFields, [P]) : [P]
        });
      }
      function F(P) {
        P === void 0 && (P = []);
        var R = Array.isArray(P) ? P : [P];
        !d.suppressWarning && R.length && e.warning("async-validator:", R), R.length && A.message !== void 0 && (R = [].concat(A.message));
        var z = R.map(ev(A, f));
        if (d.first && z.length)
          return h[A.field] = 1, O(z);
        if (!L)
          O(z);
        else {
          if (A.required && !w.value)
            return A.message !== void 0 ? z = [].concat(A.message).map(ev(A, f)) : d.error && (z = [d.error(A, fn(d.messages.required, A.field))]), O(z);
          var Z = {};
          A.defaultField && Object.keys(w.value).map(function(U) {
            Z[U] = A.defaultField;
          }), Z = io({}, Z, w.rule.fields);
          var j = {};
          Object.keys(Z).forEach(function(U) {
            var D = Z[U], X = Array.isArray(D) ? D : [D];
            j[U] = X.map(C.bind(null, U));
          });
          var K = new e(j);
          K.messages(d.messages), w.rule.options && (w.rule.options.messages = d.messages, w.rule.options.error = d.error), K.validate(w.value, w.rule.options || d, function(U) {
            var D = [];
            z && z.length && D.push.apply(D, z), U && U.length && D.push.apply(D, U), O(D.length ? D : null);
          });
        }
      }
      var $;
      if (A.asyncValidator)
        $ = A.asyncValidator(A, w.value, F, w.source, d);
      else if (A.validator) {
        try {
          $ = A.validator(A, w.value, F, w.source, d);
        } catch (P) {
          console.error == null || console.error(P), d.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), F(P.message);
        }
        $ === !0 ? F() : $ === !1 ? F(typeof A.message == "function" ? A.message(A.fullField || A.field) : A.message || (A.fullField || A.field) + " fails") : $ instanceof Array ? F($) : $ instanceof Error && F($.message);
      }
      $ && $.then && $.then(function() {
        return F();
      }, function(P) {
        return F(P);
      });
    }, function(w) {
      y(w);
    }, f);
  }, n.getType = function(i) {
    if (i.type === void 0 && i.pattern instanceof RegExp && (i.type = "pattern"), typeof i.validator != "function" && i.type && !yi.hasOwnProperty(i.type))
      throw new Error(fn("Unknown rule type %s", i.type));
    return i.type || "string";
  }, n.getValidationMethod = function(i) {
    if (typeof i.validator == "function")
      return i.validator;
    var s = Object.keys(i), l = s.indexOf("message");
    return l !== -1 && s.splice(l, 1), s.length === 1 && s[0] === "required" ? yi.required : yi[this.getType(i)] || void 0;
  }, e;
}();
Fi.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  yi[n] = r;
};
Fi.warning = Bh;
Fi.messages = mu;
Fi.validators = yi;
const F4 = [
  "",
  "error",
  "validating",
  "success"
], B4 = tt({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: Ne([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: Ne([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: F4
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: Mi
  }
}), rv = "ElLabelWrap";
var k4 = le({
  name: rv,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: n
  }) {
    const r = De(Ko, void 0), i = De(uo);
    i || Bo(rv, "usage: <el-form-item><label-wrap /></el-form-item>");
    const s = Be("form"), l = J(), c = J(0), f = () => {
      var y;
      if ((y = l.value) != null && y.firstElementChild) {
        const _ = window.getComputedStyle(l.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(_));
      } else
        return 0;
    }, d = (y = "update") => {
      He(() => {
        n.default && e.isAutoWidth && (y === "update" ? c.value = f() : y === "remove" && (r == null || r.deregisterLabelWidth(c.value)));
      });
    }, g = () => d("update");
    return at(() => {
      g();
    }), Jt(() => {
      d("remove");
    }), fv(() => g()), pe(c, (y, _) => {
      e.updateAll && (r == null || r.registerLabelWidth(y, _));
    }), Uo(B(() => {
      var y, _;
      return (_ = (y = l.value) == null ? void 0 : y.firstElementChild) != null ? _ : null;
    }), g), () => {
      var y, _;
      if (!n)
        return null;
      const {
        isAutoWidth: E
      } = e;
      if (E) {
        const S = r == null ? void 0 : r.autoLabelWidth, h = i == null ? void 0 : i.hasLabel, w = {};
        if (h && S && S !== "auto") {
          const O = Math.max(0, Number.parseInt(S, 10) - c.value), A = r.labelPosition === "left" ? "marginRight" : "marginLeft";
          O && (w[A] = `${O}px`);
        }
        return ut("div", {
          ref: l,
          class: [s.be("item", "label-wrap")],
          style: w
        }, [(y = n.default) == null ? void 0 : y.call(n)]);
      } else
        return ut(Ht, {
          ref: l
        }, [(_ = n.default) == null ? void 0 : _.call(n)]);
    };
  }
});
const N4 = ["role", "aria-labelledby"], D4 = le({
  name: "ElFormItem"
}), W4 = /* @__PURE__ */ le({
  ...D4,
  props: B4,
  setup(e, { expose: n }) {
    const r = e, i = $i(), s = De(Ko, void 0), l = De(uo, void 0), c = Hr(void 0, { formItem: !1 }), f = Be("form-item"), d = ps().value, g = J([]), y = J(""), _ = _T(y, 100), E = J(""), S = J();
    let h, w = !1;
    const O = B(() => {
      if ((s == null ? void 0 : s.labelPosition) === "top")
        return {};
      const ae = Ti(r.labelWidth || (s == null ? void 0 : s.labelWidth) || "");
      return ae ? { width: ae } : {};
    }), A = B(() => {
      if ((s == null ? void 0 : s.labelPosition) === "top" || (s == null ? void 0 : s.inline))
        return {};
      if (!r.label && !r.labelWidth && Z)
        return {};
      const ae = Ti(r.labelWidth || (s == null ? void 0 : s.labelWidth) || "");
      return !r.label && !i.label ? { marginLeft: ae } : {};
    }), L = B(() => [
      f.b(),
      f.m(c.value),
      f.is("error", y.value === "error"),
      f.is("validating", y.value === "validating"),
      f.is("success", y.value === "success"),
      f.is("required", X.value || r.required),
      f.is("no-asterisk", s == null ? void 0 : s.hideRequiredAsterisk),
      (s == null ? void 0 : s.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [f.m("feedback")]: s == null ? void 0 : s.statusIcon }
    ]), C = B(() => tr(r.inlineMessage) ? r.inlineMessage : (s == null ? void 0 : s.inlineMessage) || !1), F = B(() => [
      f.e("error"),
      { [f.em("error", "inline")]: C.value }
    ]), $ = B(() => r.prop ? Et(r.prop) ? r.prop : r.prop.join(".") : ""), P = B(() => !!(r.label || i.label)), R = B(() => r.for || g.value.length === 1 ? g.value[0] : void 0), z = B(() => !R.value && P.value), Z = !!l, j = B(() => {
      const ae = s == null ? void 0 : s.model;
      if (!(!ae || !r.prop))
        return Nl(ae, r.prop).value;
    }), K = B(() => {
      const { required: ae } = r, ve = [];
      r.rules && ve.push(...ru(r.rules));
      const We = s == null ? void 0 : s.rules;
      if (We && r.prop) {
        const Ue = Nl(We, r.prop).value;
        Ue && ve.push(...ru(Ue));
      }
      if (ae !== void 0) {
        const Ue = ve.map((Ye, rt) => [Ye, rt]).filter(([Ye]) => Object.keys(Ye).includes("required"));
        if (Ue.length > 0)
          for (const [Ye, rt] of Ue)
            Ye.required !== ae && (ve[rt] = { ...Ye, required: ae });
        else
          ve.push({ required: ae });
      }
      return ve;
    }), U = B(() => K.value.length > 0), D = (ae) => K.value.filter((We) => !We.trigger || !ae ? !0 : Array.isArray(We.trigger) ? We.trigger.includes(ae) : We.trigger === ae).map(({ trigger: We, ...Ue }) => Ue), X = B(() => K.value.some((ae) => ae.required)), ie = B(() => {
      var ae;
      return _.value === "error" && r.showMessage && ((ae = s == null ? void 0 : s.showMessage) != null ? ae : !0);
    }), ce = B(() => `${r.label || ""}${(s == null ? void 0 : s.labelSuffix) || ""}`), ne = (ae) => {
      y.value = ae;
    }, fe = (ae) => {
      var ve, We;
      const { errors: Ue, fields: Ye } = ae;
      (!Ue || !Ye) && console.error(ae), ne("error"), E.value = Ue ? (We = (ve = Ue == null ? void 0 : Ue[0]) == null ? void 0 : ve.message) != null ? We : `${r.prop} is required` : "", s == null || s.emit("validate", r.prop, !1, E.value);
    }, he = () => {
      ne("success"), s == null || s.emit("validate", r.prop, !0, "");
    }, Se = async (ae) => {
      const ve = $.value;
      return new Fi({
        [ve]: ae
      }).validate({ [ve]: j.value }, { firstFields: !0 }).then(() => (he(), !0)).catch((Ue) => (fe(Ue), Promise.reject(Ue)));
    }, xe = async (ae, ve) => {
      if (w || !r.prop)
        return !1;
      const We = Nr(ve);
      if (!U.value)
        return ve == null || ve(!1), !1;
      const Ue = D(ae);
      return Ue.length === 0 ? (ve == null || ve(!0), !0) : (ne("validating"), Se(Ue).then(() => (ve == null || ve(!0), !0)).catch((Ye) => {
        const { fields: rt } = Ye;
        return ve == null || ve(!1, rt), We ? !1 : Promise.reject(rt);
      }));
    }, bt = () => {
      ne(""), E.value = "", w = !1;
    }, nt = async () => {
      const ae = s == null ? void 0 : s.model;
      if (!ae || !r.prop)
        return;
      const ve = Nl(ae, r.prop);
      w = !0, ve.value = ip(h), await He(), bt(), w = !1;
    }, Je = (ae) => {
      g.value.includes(ae) || g.value.push(ae);
    }, qe = (ae) => {
      g.value = g.value.filter((ve) => ve !== ae);
    };
    pe(() => r.error, (ae) => {
      E.value = ae || "", ne(ae ? "error" : "");
    }, { immediate: !0 }), pe(() => r.validateStatus, (ae) => ne(ae || ""));
    const gt = $n({
      ...Er(r),
      $el: S,
      size: c,
      validateState: y,
      labelId: d,
      inputIds: g,
      isGroup: z,
      hasLabel: P,
      addInputId: Je,
      removeInputId: qe,
      resetField: nt,
      clearValidate: bt,
      validate: xe
    });
    return Lt(uo, gt), at(() => {
      r.prop && (s == null || s.addField(gt), h = ip(j.value));
    }), Jt(() => {
      s == null || s.removeField(gt);
    }), n({
      size: c,
      validateMessage: E,
      validateState: y,
      validate: xe,
      clearValidate: bt,
      resetField: nt
    }), (ae, ve) => {
      var We;
      return G(), re("div", {
        ref_key: "formItemRef",
        ref: S,
        class: ee(v(L)),
        role: v(z) ? "group" : void 0,
        "aria-labelledby": v(z) ? v(d) : void 0
      }, [
        ut(v(k4), {
          "is-auto-width": v(O).width === "auto",
          "update-all": ((We = v(s)) == null ? void 0 : We.labelWidth) === "auto"
        }, {
          default: Te(() => [
            v(P) ? (G(), Pe(xn(v(R) ? "label" : "div"), {
              key: 0,
              id: v(d),
              for: v(R),
              class: ee(v(f).e("label")),
              style: Ot(v(O))
            }, {
              default: Te(() => [
                Ce(ae.$slots, "label", { label: v(ce) }, () => [
                  Ho(ht(v(ce)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : we("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        de("div", {
          class: ee(v(f).e("content")),
          style: Ot(v(A))
        }, [
          Ce(ae.$slots, "default"),
          ut(co, {
            name: `${v(f).namespace.value}-zoom-in-top`
          }, {
            default: Te(() => [
              v(ie) ? Ce(ae.$slots, "error", {
                key: 0,
                error: E.value
              }, () => [
                de("div", {
                  class: ee(v(F))
                }, ht(E.value), 3)
              ]) : we("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, N4);
    };
  }
});
var Nh = /* @__PURE__ */ Ke(W4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const z4 = qn(r4, {
  FormItem: Nh
}), H4 = rr(Nh);
class q4 {
  constructor(n, r) {
    this.parent = n, this.domNode = r, this.subIndex = 0, this.subIndex = 0, this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
  }
  gotoSubIndex(n) {
    n === this.subMenuItems.length ? n = 0 : n < 0 && (n = this.subMenuItems.length - 1), this.subMenuItems[n].focus(), this.subIndex = n;
  }
  addListeners() {
    const n = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (r) => {
      r.addEventListener("keydown", (i) => {
        let s = !1;
        switch (i.code) {
          case zt.down: {
            this.gotoSubIndex(this.subIndex + 1), s = !0;
            break;
          }
          case zt.up: {
            this.gotoSubIndex(this.subIndex - 1), s = !0;
            break;
          }
          case zt.tab: {
            Ba(n, "mouseleave");
            break;
          }
          case zt.enter:
          case zt.space: {
            s = !0, i.currentTarget.click();
            break;
          }
        }
        return s && (i.preventDefault(), i.stopPropagation()), !1;
      });
    });
  }
}
class U4 {
  constructor(n, r) {
    this.domNode = n, this.submenu = null, this.submenu = null, this.init(r);
  }
  init(n) {
    this.domNode.setAttribute("tabindex", "0");
    const r = this.domNode.querySelector(`.${n}-menu`);
    r && (this.submenu = new q4(this, r)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (n) => {
      let r = !1;
      switch (n.code) {
        case zt.down: {
          Ba(n.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), r = !0;
          break;
        }
        case zt.up: {
          Ba(n.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), r = !0;
          break;
        }
        case zt.tab: {
          Ba(n.currentTarget, "mouseleave");
          break;
        }
        case zt.enter:
        case zt.space: {
          r = !0, n.currentTarget.click();
          break;
        }
      }
      r && n.preventDefault();
    });
  }
}
class V4 {
  constructor(n, r) {
    this.domNode = n, this.init(r);
  }
  init(n) {
    const r = this.domNode.childNodes;
    Array.from(r).forEach((i) => {
      i.nodeType === 1 && new U4(i, n);
    });
  }
}
const K4 = le({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = Be("menu");
    return {
      listeners: {
        onBeforeEnter: (r) => r.style.opacity = "0.2",
        onEnter(r, i) {
          Oa(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "1", i();
        },
        onAfterEnter(r) {
          Dl(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "";
        },
        onBeforeLeave(r) {
          r.dataset || (r.dataset = {}), kT(r, e.m("collapse")) ? (Dl(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), Oa(r, e.m("collapse"))) : (Oa(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), Dl(r, e.m("collapse"))), r.style.width = `${r.scrollWidth}px`, r.style.overflow = "hidden";
        },
        onLeave(r) {
          Oa(r, "horizontal-collapse-transition"), r.style.width = `${r.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function j4(e, n, r, i, s, l) {
  return G(), Pe(co, Xn({ mode: "out-in" }, e.listeners), {
    default: Te(() => [
      Ce(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var G4 = /* @__PURE__ */ Ke(K4, [["render", j4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function Dh(e, n) {
  const r = B(() => {
    let s = e.parent;
    const l = [n.value];
    for (; s.type.name !== "ElMenu"; )
      s.props.index && l.unshift(s.props.index), s = s.parent;
    return l;
  });
  return {
    parentMenu: B(() => {
      let s = e.parent;
      for (; s && !["ElMenu", "ElSubMenu"].includes(s.type.name); )
        s = s.parent;
      return s;
    }),
    indexPath: r
  };
}
function Y4(e) {
  return B(() => {
    const r = e.backgroundColor;
    return r ? new a3(r).shade(20).toString() : "";
  });
}
const Wh = (e, n) => {
  const r = Be("menu");
  return B(() => r.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": Y4(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${n}`
  }));
}, Z4 = tt({
  index: {
    type: String,
    required: !0
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
    type: Dr
  },
  expandOpenIcon: {
    type: Dr
  },
  collapseCloseIcon: {
    type: Dr
  },
  collapseOpenIcon: {
    type: Dr
  }
}), jl = "ElSubMenu";
var Qu = le({
  name: jl,
  props: Z4,
  setup(e, { slots: n, expose: r }) {
    const i = dn(), { indexPath: s, parentMenu: l } = Dh(i, B(() => e.index)), c = Be("menu"), f = Be("sub-menu"), d = De("rootMenu");
    d || Bo(jl, "can not inject root menu");
    const g = De(`subMenu:${l.value.uid}`);
    g || Bo(jl, "can not inject sub menu");
    const y = J({}), _ = J({});
    let E;
    const S = J(!1), h = J(), w = J(null), O = B(() => K.value === "horizontal" && L.value ? "bottom-start" : "right-start"), A = B(() => K.value === "horizontal" && L.value || K.value === "vertical" && !d.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? P.value ? e.expandOpenIcon : e.expandCloseIcon : Gv : e.collapseCloseIcon && e.collapseOpenIcon ? P.value ? e.collapseOpenIcon : e.collapseCloseIcon : YT), L = B(() => g.level === 0), C = B(() => e.popperAppendToBody === void 0 ? L.value : Boolean(e.popperAppendToBody)), F = B(() => d.props.collapse ? `${c.namespace.value}-zoom-in-left` : `${c.namespace.value}-zoom-in-top`), $ = B(() => K.value === "horizontal" && L.value ? [
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
    ]), P = B(() => d.openedMenus.includes(e.index)), R = B(() => {
      let he = !1;
      return Object.values(y.value).forEach((Se) => {
        Se.active && (he = !0);
      }), Object.values(_.value).forEach((Se) => {
        Se.active && (he = !0);
      }), he;
    }), z = B(() => d.props.backgroundColor || ""), Z = B(() => d.props.activeTextColor || ""), j = B(() => d.props.textColor || ""), K = B(() => d.props.mode), U = $n({
      index: e.index,
      indexPath: s,
      active: R
    }), D = B(() => K.value !== "horizontal" ? {
      color: j.value
    } : {
      borderBottomColor: R.value ? d.props.activeTextColor ? Z.value : "" : "transparent",
      color: R.value ? Z.value : j.value
    }), X = () => {
      var he, Se, xe;
      return (xe = (Se = (he = w.value) == null ? void 0 : he.popperRef) == null ? void 0 : Se.popperInstanceRef) == null ? void 0 : xe.destroy();
    }, ie = (he) => {
      he || X();
    }, ce = () => {
      d.props.menuTrigger === "hover" && d.props.mode === "horizontal" || d.props.collapse && d.props.mode === "vertical" || e.disabled || d.handleSubMenuClick({
        index: e.index,
        indexPath: s.value,
        active: R.value
      });
    }, ne = (he, Se = e.showTimeout) => {
      var xe;
      he.type !== "focus" && (d.props.menuTrigger === "click" && d.props.mode === "horizontal" || !d.props.collapse && d.props.mode === "vertical" || e.disabled || (g.mouseInChild.value = !0, E == null || E(), { stop: E } = pp(() => {
        d.openMenu(e.index, s.value);
      }, Se), C.value && ((xe = l.value.vnode.el) == null || xe.dispatchEvent(new MouseEvent("mouseenter")))));
    }, fe = (he = !1) => {
      var Se, xe;
      d.props.menuTrigger === "click" && d.props.mode === "horizontal" || !d.props.collapse && d.props.mode === "vertical" || (E == null || E(), g.mouseInChild.value = !1, { stop: E } = pp(() => !S.value && d.closeMenu(e.index, s.value), e.hideTimeout), C.value && he && ((Se = i.parent) == null ? void 0 : Se.type.name) === "ElSubMenu" && ((xe = g.handleMouseleave) == null || xe.call(g, !0)));
    };
    pe(() => d.props.collapse, (he) => ie(Boolean(he)));
    {
      const he = (xe) => {
        _.value[xe.index] = xe;
      }, Se = (xe) => {
        delete _.value[xe.index];
      };
      Lt(`subMenu:${i.uid}`, {
        addSubMenu: he,
        removeSubMenu: Se,
        handleMouseleave: fe,
        mouseInChild: S,
        level: g.level + 1
      });
    }
    return r({
      opened: P
    }), at(() => {
      d.addSubMenu(U), g.addSubMenu(U);
    }), Jt(() => {
      g.removeSubMenu(U), d.removeSubMenu(U);
    }), () => {
      var he;
      const Se = [
        (he = n.title) == null ? void 0 : he.call(n),
        vt(Dn, {
          class: f.e("icon-arrow"),
          style: {
            transform: P.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && d.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => Et(A.value) ? vt(i.appContext.components[A.value]) : vt(A.value)
        })
      ], xe = Wh(d.props, g.level + 1), bt = d.isMenuPopup ? vt(Ju, {
        ref: w,
        visible: P.value,
        effect: "light",
        pure: !0,
        offset: e.popperOffset,
        showArrow: !1,
        persistent: !0,
        popperClass: e.popperClass,
        placement: O.value,
        teleported: C.value,
        fallbackPlacements: $.value,
        transition: F.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var nt;
          return vt("div", {
            class: [
              c.m(K.value),
              c.m("popup-container"),
              e.popperClass
            ],
            onMouseenter: (Je) => ne(Je, 100),
            onMouseleave: () => fe(!0),
            onFocus: (Je) => ne(Je, 100)
          }, [
            vt("ul", {
              class: [
                c.b(),
                c.m("popup"),
                c.m(`popup-${O.value}`)
              ],
              style: xe.value
            }, [(nt = n.default) == null ? void 0 : nt.call(n)])
          ]);
        },
        default: () => vt("div", {
          class: f.e("title"),
          style: [
            D.value,
            { backgroundColor: z.value }
          ],
          onClick: ce
        }, Se)
      }) : vt(Ht, {}, [
        vt("div", {
          class: f.e("title"),
          style: [
            D.value,
            { backgroundColor: z.value }
          ],
          ref: h,
          onClick: ce
        }, Se),
        vt(Z3, {}, {
          default: () => {
            var nt;
            return It(vt("ul", {
              role: "menu",
              class: [c.b(), c.m("inline")],
              style: xe.value
            }, [(nt = n.default) == null ? void 0 : nt.call(n)]), [[qr, P.value]]);
          }
        })
      ]);
      return vt("li", {
        class: [
          f.b(),
          f.is("active", R.value),
          f.is("opened", P.value),
          f.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: P.value,
        onMouseenter: ne,
        onMouseleave: () => fe(!0),
        onFocus: ne
      }, [bt]);
    };
  }
});
const X4 = tt({
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
    type: Ne(Array),
    default: () => Xv([])
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
    default: !0
  },
  ellipsis: {
    type: Boolean,
    default: !0
  }
}), Gl = (e) => Array.isArray(e) && e.every((n) => Et(n)), J4 = {
  close: (e, n) => Et(e) && Gl(n),
  open: (e, n) => Et(e) && Gl(n),
  select: (e, n, r, i) => Et(e) && Gl(n) && _r(r) && (i === void 0 || i instanceof Promise)
};
var Q4 = le({
  name: "ElMenu",
  props: X4,
  emits: J4,
  setup(e, { emit: n, slots: r, expose: i }) {
    const s = dn(), l = s.appContext.config.globalProperties.$router, c = J(), f = Be("menu"), d = Be("sub-menu"), g = J(-1), y = J(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), _ = J(e.defaultActive), E = J({}), S = J({}), h = B(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), w = () => {
      const j = _.value && E.value[_.value];
      if (!j || e.mode === "horizontal" || e.collapse)
        return;
      j.indexPath.forEach((U) => {
        const D = S.value[U];
        D && O(U, D.indexPath);
      });
    }, O = (j, K) => {
      y.value.includes(j) || (e.uniqueOpened && (y.value = y.value.filter((U) => K.includes(U))), y.value.push(j), n("open", j, K));
    }, A = (j, K) => {
      const U = y.value.indexOf(j);
      U !== -1 && y.value.splice(U, 1), n("close", j, K);
    }, L = ({
      index: j,
      indexPath: K
    }) => {
      y.value.includes(j) ? A(j, K) : O(j, K);
    }, C = (j) => {
      (e.mode === "horizontal" || e.collapse) && (y.value = []);
      const { index: K, indexPath: U } = j;
      if (!(K === void 0 || U === void 0))
        if (e.router && l) {
          const D = j.route || K, X = l.push(D).then((ie) => (ie || (_.value = K), ie));
          n("select", K, U, { index: K, indexPath: U, route: D }, X);
        } else
          _.value = K, n("select", K, U, { index: K, indexPath: U });
    }, F = (j) => {
      const K = E.value, U = K[j] || _.value && K[_.value] || K[e.defaultActive];
      U ? _.value = U.index : _.value = j;
    }, $ = () => {
      var j, K;
      if (!c.value)
        return -1;
      const U = Array.from((K = (j = c.value) == null ? void 0 : j.childNodes) != null ? K : []).filter((he) => he.nodeName !== "#text" || he.nodeValue), D = 64, X = Number.parseInt(getComputedStyle(c.value).paddingLeft, 10), ie = Number.parseInt(getComputedStyle(c.value).paddingRight, 10), ce = c.value.clientWidth - X - ie;
      let ne = 0, fe = 0;
      return U.forEach((he, Se) => {
        ne += he.offsetWidth || 0, ne <= ce - D && (fe = Se + 1);
      }), fe === U.length ? -1 : fe;
    }, P = (j, K = 33.34) => {
      let U;
      return () => {
        U && clearTimeout(U), U = setTimeout(() => {
          j();
        }, K);
      };
    };
    let R = !0;
    const z = () => {
      const j = () => {
        g.value = -1, He(() => {
          g.value = $();
        });
      };
      R ? j() : P(j)(), R = !1;
    };
    pe(() => e.defaultActive, (j) => {
      E.value[j] || (_.value = ""), F(j);
    }), pe(() => e.collapse, (j) => {
      j && (y.value = []);
    }), pe(E.value, w);
    let Z;
    Nw(() => {
      e.mode === "horizontal" && e.ellipsis ? Z = Uo(c, z).stop : Z == null || Z();
    });
    {
      const j = (X) => {
        S.value[X.index] = X;
      }, K = (X) => {
        delete S.value[X.index];
      };
      Lt("rootMenu", $n({
        props: e,
        openedMenus: y,
        items: E,
        subMenus: S,
        activeIndex: _,
        isMenuPopup: h,
        addMenuItem: (X) => {
          E.value[X.index] = X;
        },
        removeMenuItem: (X) => {
          delete E.value[X.index];
        },
        addSubMenu: j,
        removeSubMenu: K,
        openMenu: O,
        closeMenu: A,
        handleMenuItemClick: C,
        handleSubMenuClick: L
      })), Lt(`subMenu:${s.uid}`, {
        addSubMenu: j,
        removeSubMenu: K,
        mouseInChild: J(!1),
        level: 0
      });
    }
    return at(() => {
      e.mode === "horizontal" && new V4(s.vnode.el, f.namespace.value);
    }), i({
      open: (K) => {
        const { indexPath: U } = S.value[K];
        U.forEach((D) => O(D, U));
      },
      close: A,
      handleResize: z
    }), () => {
      var j, K;
      let U = (K = (j = r.default) == null ? void 0 : j.call(r)) != null ? K : [];
      const D = [];
      if (e.mode === "horizontal" && c.value) {
        const ce = cu(U), ne = g.value === -1 ? ce : ce.slice(0, g.value), fe = g.value === -1 ? [] : ce.slice(g.value);
        (fe == null ? void 0 : fe.length) && e.ellipsis && (U = ne, D.push(vt(Qu, {
          index: "sub-menu-more",
          class: d.e("hide-arrow")
        }, {
          title: () => vt(Dn, {
            class: d.e("icon-more")
          }, { default: () => vt(PC) }),
          default: () => fe
        })));
      }
      const X = Wh(e, 0), ie = vt("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: c,
        style: X.value,
        class: {
          [f.b()]: !0,
          [f.m(e.mode)]: !0,
          [f.m("collapse")]: e.collapse
        }
      }, [...U, ...D]);
      return e.collapseTransition && e.mode === "vertical" ? vt(G4, () => ie) : ie;
    };
  }
});
const eM = tt({
  index: {
    type: Ne([String, null]),
    default: null
  },
  route: {
    type: Ne([String, Object])
  },
  disabled: Boolean
}), tM = {
  click: (e) => Et(e.index) && Array.isArray(e.indexPath)
}, Yl = "ElMenuItem", nM = le({
  name: Yl,
  components: {
    ElTooltip: Ju
  },
  props: eM,
  emits: tM,
  setup(e, { emit: n }) {
    const r = dn(), i = De("rootMenu"), s = Be("menu"), l = Be("menu-item");
    i || Bo(Yl, "can not inject root menu");
    const { parentMenu: c, indexPath: f } = Dh(r, Wn(e, "index")), d = De(`subMenu:${c.value.uid}`);
    d || Bo(Yl, "can not inject sub menu");
    const g = B(() => e.index === i.activeIndex), y = $n({
      index: e.index,
      indexPath: f,
      active: g
    }), _ = () => {
      e.disabled || (i.handleMenuItemClick({
        index: e.index,
        indexPath: f.value,
        route: e.route
      }), n("click", y));
    };
    return at(() => {
      d.addSubMenu(y), i.addMenuItem(y);
    }), Jt(() => {
      d.removeSubMenu(y), i.removeMenuItem(y);
    }), {
      Effect: KA,
      parentMenu: c,
      rootMenu: i,
      active: g,
      nsMenu: s,
      nsMenuItem: l,
      handleClick: _
    };
  }
});
function rM(e, n, r, i, s, l) {
  const c = mr("el-tooltip");
  return G(), re("li", {
    class: ee([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: n[0] || (n[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (G(), Pe(c, {
      key: 0,
      effect: e.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: Te(() => [
        Ce(e.$slots, "title")
      ]),
      default: Te(() => [
        de("div", {
          class: ee(e.nsMenu.be("tooltip", "trigger"))
        }, [
          Ce(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (G(), re(Ht, { key: 1 }, [
      Ce(e.$slots, "default"),
      Ce(e.$slots, "title")
    ], 64))
  ], 2);
}
var zh = /* @__PURE__ */ Ke(nM, [["render", rM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const oM = {
  title: String
}, iM = "ElMenuItemGroup", aM = le({
  name: iM,
  props: oM,
  setup() {
    return {
      ns: Be("menu-item-group")
    };
  }
});
function sM(e, n, r, i, s, l) {
  return G(), re("li", {
    class: ee(e.ns.b())
  }, [
    de("div", {
      class: ee(e.ns.e("title"))
    }, [
      e.$slots.title ? Ce(e.$slots, "title", { key: 1 }) : (G(), re(Ht, { key: 0 }, [
        Ho(ht(e.title), 1)
      ], 64))
    ], 2),
    de("ul", null, [
      Ce(e.$slots, "default")
    ])
  ], 2);
}
var Hh = /* @__PURE__ */ Ke(aM, [["render", sM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const lM = qn(Q4, {
  MenuItem: zh,
  MenuItemGroup: Hh,
  SubMenu: Qu
}), ov = rr(zh), uM = rr(Hh), cM = rr(Qu), qh = "ElSelectGroup", bs = "ElSelect";
function fM(e, n) {
  const r = De(bs), i = De(qh, { disabled: !1 }), s = B(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = B(() => r.props.multiple ? _(r.props.modelValue, e.value) : E(e.value, r.props.modelValue)), c = B(() => {
    if (r.props.multiple) {
      const w = r.props.modelValue || [];
      return !l.value && w.length >= r.props.multipleLimit && r.props.multipleLimit > 0;
    } else
      return !1;
  }), f = B(() => e.label || (s.value ? "" : e.value)), d = B(() => e.value || e.label || ""), g = B(() => e.disabled || n.groupDisabled || c.value), y = dn(), _ = (w = [], O) => {
    if (s.value) {
      const A = r.props.valueKey;
      return w && w.some((L) => _i(cn(L, A)) === cn(O, A));
    } else
      return w && w.includes(O);
  }, E = (w, O) => {
    if (s.value) {
      const { valueKey: A } = r.props;
      return cn(w, A) === cn(O, A);
    } else
      return w === O;
  }, S = () => {
    !e.disabled && !i.disabled && (r.hoverIndex = r.optionsArray.indexOf(y.proxy));
  };
  pe(() => f.value, () => {
    !e.created && !r.props.remote && r.setSelected();
  }), pe(() => e.value, (w, O) => {
    const { remote: A, valueKey: L } = r.props;
    if (Object.is(w, O) || (r.onOptionDestroy(O, y.proxy), r.onOptionCreate(y.proxy)), !e.created && !A) {
      if (L && typeof w == "object" && typeof O == "object" && w[L] === O[L])
        return;
      r.setSelected();
    }
  }), pe(() => i.disabled, () => {
    n.groupDisabled = i.disabled;
  }, { immediate: !0 });
  const { queryChange: h } = _i(r);
  return pe(h, (w) => {
    const { query: O } = v(w), A = new RegExp(FT(O), "i");
    n.visible = A.test(f.value) || e.created, n.visible || r.filteredOptionsCount--;
  }), {
    select: r,
    currentLabel: f,
    currentValue: d,
    itemSelected: l,
    isDisabled: g,
    hoverItem: S
  };
}
const dM = le({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = Be("select"), r = $n({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: i, itemSelected: s, isDisabled: l, select: c, hoverItem: f } = fM(e, r), { visible: d, hover: g } = Er(r), y = dn().proxy;
    c.onOptionCreate(y), Jt(() => {
      const E = y.value, { selected: S } = c, w = (c.props.multiple ? S : [S]).some((O) => O.value === y.value);
      He(() => {
        c.cachedOptions.get(E) === y && !w && c.cachedOptions.delete(E);
      }), c.onOptionDestroy(E, y);
    });
    function _() {
      e.disabled !== !0 && r.groupDisabled !== !0 && c.handleOptionSelect(y, !0);
    }
    return {
      ns: n,
      currentLabel: i,
      itemSelected: s,
      isDisabled: l,
      select: c,
      hoverItem: f,
      visible: d,
      hover: g,
      selectOptionClick: _,
      states: r
    };
  }
});
function pM(e, n, r, i, s, l) {
  return It((G(), re("li", {
    class: ee([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: n[0] || (n[0] = (...c) => e.hoverItem && e.hoverItem(...c)),
    onClick: n[1] || (n[1] = Wt((...c) => e.selectOptionClick && e.selectOptionClick(...c), ["stop"]))
  }, [
    Ce(e.$slots, "default", {}, () => [
      de("span", null, ht(e.currentLabel), 1)
    ])
  ], 34)), [
    [qr, e.visible]
  ]);
}
var ec = /* @__PURE__ */ Ke(dM, [["render", pM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const vM = le({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = De(bs), n = Be("select"), r = B(() => e.props.popperClass), i = B(() => e.props.multiple), s = B(() => e.props.fitInputWidth), l = J("");
    function c() {
      var f;
      l.value = `${(f = e.selectWrapper) == null ? void 0 : f.offsetWidth}px`;
    }
    return at(() => {
      c(), Uo(e.selectWrapper, c);
    }), {
      ns: n,
      minWidth: l,
      popperClass: r,
      isMultiple: i,
      isFitInputWidth: s
    };
  }
});
function hM(e, n, r, i, s, l) {
  return G(), re("div", {
    class: ee([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ot({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Ce(e.$slots, "default")
  ], 6);
}
var gM = /* @__PURE__ */ Ke(vM, [["render", hM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function mM(e) {
  const { t: n } = Wu();
  return $n({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: n("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const bM = (e, n, r) => {
  const { t: i } = Wu(), s = Be("select");
  YC({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, B(() => e.suffixTransition === !1));
  const l = J(null), c = J(null), f = J(null), d = J(null), g = J(null), y = J(null), _ = J(-1), E = hi({ query: "" }), S = hi(""), { form: h, formItem: w } = Go(), O = B(() => !e.filterable || e.multiple || !n.visible), A = B(() => e.disabled || (h == null ? void 0 : h.disabled)), L = B(() => {
    const N = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !A.value && n.inputHovering && N;
  }), C = B(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), F = B(() => s.is("reverse", C.value && n.visible && e.suffixTransition)), $ = B(() => e.remote ? 300 : 0), P = B(() => e.loading ? e.loadingText || i("el.select.loading") : e.remote && n.query === "" && n.options.size === 0 ? !1 : e.filterable && n.query && n.options.size > 0 && n.filteredOptionsCount === 0 ? e.noMatchText || i("el.select.noMatch") : n.options.size === 0 ? e.noDataText || i("el.select.noData") : null), R = B(() => Array.from(n.options.values())), z = B(() => Array.from(n.cachedOptions.values())), Z = B(() => {
    const N = R.value.filter((Q) => !Q.created).some((Q) => Q.currentLabel === n.query);
    return e.filterable && e.allowCreate && n.query !== "" && !N;
  }), j = Hr(), K = B(() => ["small"].includes(j.value) ? "small" : "default"), U = B({
    get() {
      return n.visible && P.value !== !1;
    },
    set(N) {
      n.visible = N;
    }
  });
  pe([() => A.value, () => j.value, () => h == null ? void 0 : h.size], () => {
    He(() => {
      D();
    });
  }), pe(() => e.placeholder, (N) => {
    n.cachedPlaceHolder = n.currentPlaceholder = N;
  }), pe(() => e.modelValue, (N, Q) => {
    e.multiple && (D(), N && N.length > 0 || c.value && n.query !== "" ? n.currentPlaceholder = "" : n.currentPlaceholder = n.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (n.query = "", X(n.query))), ne(), e.filterable && !e.multiple && (n.inputLength = 20), !fp(N, Q) && e.validateEvent && (w == null || w.validate("change").catch((me) => ct(me)));
  }, {
    flush: "post",
    deep: !0
  }), pe(() => n.visible, (N) => {
    var Q, me, Ie;
    N ? ((me = (Q = f.value) == null ? void 0 : Q.updatePopper) == null || me.call(Q), e.filterable && (n.filteredOptionsCount = n.optionsCount, n.query = e.remote ? "" : n.selectedLabel, e.multiple ? (Ie = c.value) == null || Ie.focus() : n.selectedLabel && (n.currentPlaceholder = `${n.selectedLabel}`, n.selectedLabel = ""), X(n.query), !e.multiple && !e.remote && (E.value.query = "", ci(E), ci(S)))) : (e.filterable && (Nr(e.filterMethod) && e.filterMethod(), Nr(e.remoteMethod) && e.remoteMethod()), c.value && c.value.blur(), n.query = "", n.previousQuery = null, n.selectedLabel = "", n.inputLength = 20, n.menuVisibleOnFocus = !1, he(), He(() => {
      c.value && c.value.value === "" && n.selected.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
    }), e.multiple || (n.selected && (e.filterable && e.allowCreate && n.createdSelected && n.createdLabel ? n.selectedLabel = n.createdLabel : n.selectedLabel = n.selected.currentLabel, e.filterable && (n.query = n.selectedLabel)), e.filterable && (n.currentPlaceholder = n.cachedPlaceHolder))), r.emit("visible-change", N);
  }), pe(() => n.options.entries(), () => {
    var N, Q, me;
    if (!Rt)
      return;
    (Q = (N = f.value) == null ? void 0 : N.updatePopper) == null || Q.call(N), e.multiple && D();
    const Ie = ((me = g.value) == null ? void 0 : me.querySelectorAll("input")) || [];
    Array.from(Ie).includes(document.activeElement) || ne(), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && ce();
  }, {
    flush: "post"
  }), pe(() => n.hoverIndex, (N) => {
    typeof N == "number" && N > -1 ? _.value = R.value[N] || {} : _.value = {}, R.value.forEach((Q) => {
      Q.hover = _.value === Q;
    });
  });
  const D = () => {
    e.collapseTags && !e.filterable || He(() => {
      var N, Q;
      if (!l.value)
        return;
      const me = l.value.$el.querySelector("input"), Ie = d.value, ft = HC(j.value || (h == null ? void 0 : h.size));
      me.style.height = `${(n.selected.length === 0 ? ft : Math.max(Ie ? Ie.clientHeight + (Ie.clientHeight > ft ? 6 : 0) : 0, ft)) - 2}px`, n.tagInMultiLine = Number.parseFloat(me.style.height) >= ft, n.visible && P.value !== !1 && ((Q = (N = f.value) == null ? void 0 : N.updatePopper) == null || Q.call(N));
    });
  }, X = async (N) => {
    if (!(n.previousQuery === N || n.isOnComposition)) {
      if (n.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        n.previousQuery = N;
        return;
      }
      n.previousQuery = N, He(() => {
        var Q, me;
        n.visible && ((me = (Q = f.value) == null ? void 0 : Q.updatePopper) == null || me.call(Q));
      }), n.hoverIndex = -1, e.multiple && e.filterable && He(() => {
        const Q = c.value.value.length * 15 + 20;
        n.inputLength = e.collapseTags ? Math.min(50, Q) : Q, ie(), D();
      }), e.remote && typeof e.remoteMethod == "function" ? (n.hoverIndex = -1, e.remoteMethod(N)) : typeof e.filterMethod == "function" ? (e.filterMethod(N), ci(S)) : (n.filteredOptionsCount = n.optionsCount, E.value.query = N, ci(E), ci(S)), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && (await He(), ce());
    }
  }, ie = () => {
    n.currentPlaceholder !== "" && (n.currentPlaceholder = c.value.value ? "" : n.cachedPlaceHolder);
  }, ce = () => {
    const N = R.value.filter((Ie) => Ie.visible && !Ie.disabled && !Ie.states.groupDisabled), Q = N.find((Ie) => Ie.created), me = N[0];
    n.hoverIndex = Ue(R.value, Q || me);
  }, ne = () => {
    var N;
    if (e.multiple)
      n.selectedLabel = "";
    else {
      const me = fe(e.modelValue);
      (N = me.props) != null && N.created ? (n.createdLabel = me.props.value, n.createdSelected = !0) : n.createdSelected = !1, n.selectedLabel = me.currentLabel, n.selected = me, e.filterable && (n.query = n.selectedLabel);
      return;
    }
    const Q = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((me) => {
      Q.push(fe(me));
    }), n.selected = Q, He(() => {
      D();
    });
  }, fe = (N) => {
    let Q;
    const me = kl(N).toLowerCase() === "object", Ie = kl(N).toLowerCase() === "null", ft = kl(N).toLowerCase() === "undefined";
    for (let Mn = n.cachedOptions.size - 1; Mn >= 0; Mn--) {
      const Ut = z.value[Mn];
      if (me ? cn(Ut.value, e.valueKey) === cn(N, e.valueKey) : Ut.value === N) {
        Q = {
          value: N,
          currentLabel: Ut.currentLabel,
          isDisabled: Ut.isDisabled
        };
        break;
      }
    }
    if (Q)
      return Q;
    const hn = me ? N.label : !Ie && !ft ? N : "", jn = {
      value: N,
      currentLabel: hn
    };
    return e.multiple && (jn.hitState = !1), jn;
  }, he = () => {
    setTimeout(() => {
      const N = e.valueKey;
      e.multiple ? n.selected.length > 0 ? n.hoverIndex = Math.min.apply(null, n.selected.map((Q) => R.value.findIndex((me) => cn(me, N) === cn(Q, N)))) : n.hoverIndex = -1 : n.hoverIndex = R.value.findIndex((Q) => qt(Q) === qt(n.selected));
    }, 300);
  }, Se = () => {
    var N, Q;
    xe(), (Q = (N = f.value) == null ? void 0 : N.updatePopper) == null || Q.call(N), e.multiple && !e.filterable && D();
  }, xe = () => {
    var N;
    n.inputWidth = (N = l.value) == null ? void 0 : N.$el.getBoundingClientRect().width;
  }, bt = () => {
    e.filterable && n.query !== n.selectedLabel && (n.query = n.selectedLabel, X(n.query));
  }, nt = cp(() => {
    bt();
  }, $.value), Je = cp((N) => {
    X(N.target.value);
  }, $.value), qe = (N) => {
    fp(e.modelValue, N) || r.emit(Fu, N);
  }, gt = (N) => {
    if (N.target.value.length <= 0 && !vn()) {
      const Q = e.modelValue.slice();
      Q.pop(), r.emit(Tt, Q), qe(Q);
    }
    N.target.value.length === 1 && e.modelValue.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
  }, ae = (N, Q) => {
    const me = n.selected.indexOf(Q);
    if (me > -1 && !A.value) {
      const Ie = e.modelValue.slice();
      Ie.splice(me, 1), r.emit(Tt, Ie), qe(Ie), r.emit("remove-tag", Q.value);
    }
    N.stopPropagation();
  }, ve = (N) => {
    N.stopPropagation();
    const Q = e.multiple ? [] : "";
    if (typeof Q != "string")
      for (const me of n.selected)
        me.isDisabled && Q.push(me.value);
    r.emit(Tt, Q), qe(Q), n.hoverIndex = -1, n.visible = !1, r.emit("clear");
  }, We = (N, Q) => {
    var me;
    if (e.multiple) {
      const Ie = (e.modelValue || []).slice(), ft = Ue(Ie, N.value);
      ft > -1 ? Ie.splice(ft, 1) : (e.multipleLimit <= 0 || Ie.length < e.multipleLimit) && Ie.push(N.value), r.emit(Tt, Ie), qe(Ie), N.created && (n.query = "", X(""), n.inputLength = 20), e.filterable && ((me = c.value) == null || me.focus());
    } else
      r.emit(Tt, N.value), qe(N.value), n.visible = !1;
    n.isSilentBlur = Q, Ye(), !n.visible && He(() => {
      rt(N);
    });
  }, Ue = (N = [], Q) => {
    if (!_r(Q))
      return N.indexOf(Q);
    const me = e.valueKey;
    let Ie = -1;
    return N.some((ft, hn) => _i(cn(ft, me)) === cn(Q, me) ? (Ie = hn, !0) : !1), Ie;
  }, Ye = () => {
    n.softFocus = !0;
    const N = c.value || l.value;
    N && (N == null || N.focus());
  }, rt = (N) => {
    var Q, me, Ie, ft, hn;
    const jn = Array.isArray(N) ? N[0] : N;
    let Mn = null;
    if (jn != null && jn.value) {
      const Ut = R.value.filter((Vr) => Vr.value === jn.value);
      Ut.length > 0 && (Mn = Ut[0].$el);
    }
    if (f.value && Mn) {
      const Ut = (ft = (Ie = (me = (Q = f.value) == null ? void 0 : Q.popperRef) == null ? void 0 : me.contentRef) == null ? void 0 : Ie.querySelector) == null ? void 0 : ft.call(Ie, `.${s.be("dropdown", "wrap")}`);
      Ut && NT(Ut, Mn);
    }
    (hn = y.value) == null || hn.handleScroll();
  }, pn = (N) => {
    n.optionsCount++, n.filteredOptionsCount++, n.options.set(N.value, N), n.cachedOptions.set(N.value, N);
  }, mt = (N, Q) => {
    n.options.get(N) === Q && (n.optionsCount--, n.filteredOptionsCount--, n.options.delete(N));
  }, Qt = (N) => {
    N.code !== zt.backspace && vn(!1), n.inputLength = c.value.value.length * 15 + 20, D();
  }, vn = (N) => {
    if (!Array.isArray(n.selected))
      return;
    const Q = n.selected[n.selected.length - 1];
    if (!!Q)
      return N === !0 || N === !1 ? (Q.hitState = N, N) : (Q.hitState = !Q.hitState, Q.hitState);
  }, yt = (N) => {
    const Q = N.target.value;
    if (N.type === "compositionend")
      n.isOnComposition = !1, He(() => X(Q));
    else {
      const me = Q[Q.length - 1] || "";
      n.isOnComposition = !Zv(me);
    }
  }, Vn = () => {
    He(() => rt(n.selected));
  }, Ft = (N) => {
    n.softFocus ? n.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !n.visible && (n.menuVisibleOnFocus = !0), n.visible = !0), r.emit("focus", N));
  }, V = () => {
    var N;
    n.visible = !1, (N = l.value) == null || N.blur();
  }, _e = (N) => {
    He(() => {
      n.isSilentBlur ? n.isSilentBlur = !1 : r.emit("blur", N);
    }), n.softFocus = !1;
  }, st = (N) => {
    ve(N);
  }, Bt = () => {
    n.visible = !1;
  }, or = (N) => {
    n.visible && (N.preventDefault(), N.stopPropagation(), n.visible = !1);
  }, en = (N) => {
    var Q;
    N && !n.mouseEnter || A.value || (n.menuVisibleOnFocus ? n.menuVisibleOnFocus = !1 : (!f.value || !f.value.isFocusInsideContent()) && (n.visible = !n.visible), n.visible && ((Q = c.value || l.value) == null || Q.focus()));
  }, ir = () => {
    n.visible ? R.value[n.hoverIndex] && We(R.value[n.hoverIndex], void 0) : en();
  }, qt = (N) => _r(N.value) ? cn(N.value, e.valueKey) : N.value, tn = B(() => R.value.filter((N) => N.visible).every((N) => N.disabled)), Kn = (N) => {
    if (!n.visible) {
      n.visible = !0;
      return;
    }
    if (!(n.options.size === 0 || n.filteredOptionsCount === 0) && !n.isOnComposition && !tn.value) {
      N === "next" ? (n.hoverIndex++, n.hoverIndex === n.options.size && (n.hoverIndex = 0)) : N === "prev" && (n.hoverIndex--, n.hoverIndex < 0 && (n.hoverIndex = n.options.size - 1));
      const Q = R.value[n.hoverIndex];
      (Q.disabled === !0 || Q.states.groupDisabled === !0 || !Q.visible) && Kn(N), He(() => rt(_.value));
    }
  };
  return {
    optionsArray: R,
    selectSize: j,
    handleResize: Se,
    debouncedOnInputChange: nt,
    debouncedQueryChange: Je,
    deletePrevTag: gt,
    deleteTag: ae,
    deleteSelected: ve,
    handleOptionSelect: We,
    scrollToOption: rt,
    readonly: O,
    resetInputHeight: D,
    showClose: L,
    iconComponent: C,
    iconReverse: F,
    showNewOption: Z,
    collapseTagSize: K,
    setSelected: ne,
    managePlaceholder: ie,
    selectDisabled: A,
    emptyText: P,
    toggleLastOptionHitState: vn,
    resetInputState: Qt,
    handleComposition: yt,
    onOptionCreate: pn,
    onOptionDestroy: mt,
    handleMenuEnter: Vn,
    handleFocus: Ft,
    blur: V,
    handleBlur: _e,
    handleClearClick: st,
    handleClose: Bt,
    handleKeydownEscape: or,
    toggleMenu: en,
    selectOption: ir,
    getValueKey: qt,
    navigateOptions: Kn,
    dropMenuVisible: U,
    queryChange: E,
    groupQueryChange: S,
    reference: l,
    input: c,
    tooltipRef: f,
    tags: d,
    selectWrapper: g,
    scrollbar: y,
    handleMouseEnter: () => {
      n.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      n.mouseEnter = !1;
    }
  };
}, iv = "ElSelect", yM = le({
  name: iv,
  componentName: iv,
  components: {
    ElInput: ih,
    ElSelectMenu: gM,
    ElOption: ec,
    ElTag: j3,
    ElScrollbar: VA,
    ElTooltip: Ju,
    ElIcon: Dn
  },
  directives: { ClickOutside: s3 },
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
      validator: qC
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
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: Xu.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Dr,
      default: Lu
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Dr,
      default: Gv
    },
    tagType: { ...Fh.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: hs,
      default: "bottom-start"
    }
  },
  emits: [
    Tt,
    Fu,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, n) {
    const r = Be("select"), i = Be("input"), { t: s } = Wu(), l = mM(e), {
      optionsArray: c,
      selectSize: f,
      readonly: d,
      handleResize: g,
      collapseTagSize: y,
      debouncedOnInputChange: _,
      debouncedQueryChange: E,
      deletePrevTag: S,
      deleteTag: h,
      deleteSelected: w,
      handleOptionSelect: O,
      scrollToOption: A,
      setSelected: L,
      resetInputHeight: C,
      managePlaceholder: F,
      showClose: $,
      selectDisabled: P,
      iconComponent: R,
      iconReverse: z,
      showNewOption: Z,
      emptyText: j,
      toggleLastOptionHitState: K,
      resetInputState: U,
      handleComposition: D,
      onOptionCreate: X,
      onOptionDestroy: ie,
      handleMenuEnter: ce,
      handleFocus: ne,
      blur: fe,
      handleBlur: he,
      handleClearClick: Se,
      handleClose: xe,
      handleKeydownEscape: bt,
      toggleMenu: nt,
      selectOption: Je,
      getValueKey: qe,
      navigateOptions: gt,
      dropMenuVisible: ae,
      reference: ve,
      input: We,
      tooltipRef: Ue,
      tags: Ye,
      selectWrapper: rt,
      scrollbar: pn,
      queryChange: mt,
      groupQueryChange: Qt,
      handleMouseEnter: vn,
      handleMouseLeave: yt
    } = bM(e, l, n), { focus: Vn } = ZC(ve), {
      inputWidth: Ft,
      selected: V,
      inputLength: _e,
      filteredOptionsCount: st,
      visible: Bt,
      softFocus: or,
      selectedLabel: en,
      hoverIndex: ir,
      query: qt,
      inputHovering: tn,
      currentPlaceholder: Kn,
      menuVisibleOnFocus: vo,
      isOnComposition: ho,
      isSilentBlur: N,
      options: Q,
      cachedOptions: me,
      optionsCount: Ie,
      prefixWidth: ft,
      tagInMultiLine: hn
    } = Er(l), jn = B(() => {
      const Vt = [r.b()], ar = v(f);
      return ar && Vt.push(r.m(ar)), e.disabled && Vt.push(r.m("disabled")), Vt;
    }), Mn = B(() => ({
      maxWidth: `${v(Ft) - 32}px`,
      width: "100%"
    })), Ut = B(() => ({ maxWidth: `${v(Ft) > 123 ? v(Ft) - 123 : v(Ft) - 75}px` }));
    Lt(bs, $n({
      props: e,
      options: Q,
      optionsArray: c,
      cachedOptions: me,
      optionsCount: Ie,
      filteredOptionsCount: st,
      hoverIndex: ir,
      handleOptionSelect: O,
      onOptionCreate: X,
      onOptionDestroy: ie,
      selectWrapper: rt,
      selected: V,
      setSelected: L,
      queryChange: mt,
      groupQueryChange: Qt
    })), at(() => {
      l.cachedPlaceHolder = Kn.value = e.placeholder || s("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Kn.value = ""), Uo(rt, g), e.remote && e.multiple && C(), He(() => {
        const Vt = ve.value && ve.value.$el;
        if (!!Vt && (Ft.value = Vt.getBoundingClientRect().width, n.slots.prefix)) {
          const ar = Vt.querySelector(`.${i.e("prefix")}`);
          ft.value = Math.max(ar.getBoundingClientRect().width + 5, 30);
        }
      }), L();
    }), e.multiple && !Array.isArray(e.modelValue) && n.emit(Tt, []), !e.multiple && Array.isArray(e.modelValue) && n.emit(Tt, "");
    const Vr = B(() => {
      var Vt, ar;
      return (ar = (Vt = Ue.value) == null ? void 0 : Vt.popperRef) == null ? void 0 : ar.contentRef;
    });
    return {
      tagInMultiLine: hn,
      prefixWidth: ft,
      selectSize: f,
      readonly: d,
      handleResize: g,
      collapseTagSize: y,
      debouncedOnInputChange: _,
      debouncedQueryChange: E,
      deletePrevTag: S,
      deleteTag: h,
      deleteSelected: w,
      handleOptionSelect: O,
      scrollToOption: A,
      inputWidth: Ft,
      selected: V,
      inputLength: _e,
      filteredOptionsCount: st,
      visible: Bt,
      softFocus: or,
      selectedLabel: en,
      hoverIndex: ir,
      query: qt,
      inputHovering: tn,
      currentPlaceholder: Kn,
      menuVisibleOnFocus: vo,
      isOnComposition: ho,
      isSilentBlur: N,
      options: Q,
      resetInputHeight: C,
      managePlaceholder: F,
      showClose: $,
      selectDisabled: P,
      iconComponent: R,
      iconReverse: z,
      showNewOption: Z,
      emptyText: j,
      toggleLastOptionHitState: K,
      resetInputState: U,
      handleComposition: D,
      handleMenuEnter: ce,
      handleFocus: ne,
      blur: fe,
      handleBlur: he,
      handleClearClick: Se,
      handleClose: xe,
      handleKeydownEscape: bt,
      toggleMenu: nt,
      selectOption: Je,
      getValueKey: qe,
      navigateOptions: gt,
      dropMenuVisible: ae,
      focus: Vn,
      reference: ve,
      input: We,
      tooltipRef: Ue,
      popperPaneRef: Vr,
      tags: Ye,
      selectWrapper: rt,
      scrollbar: pn,
      wrapperKls: jn,
      selectTagsStyle: Mn,
      nsSelect: r,
      tagTextStyle: Ut,
      handleMouseEnter: vn,
      handleMouseLeave: yt
    };
  }
}), _M = ["disabled", "autocomplete"], wM = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function EM(e, n, r, i, s, l) {
  const c = mr("el-tag"), f = mr("el-tooltip"), d = mr("el-icon"), g = mr("el-input"), y = mr("el-option"), _ = mr("el-scrollbar"), E = mr("el-select-menu"), S = Dw("click-outside");
  return It((G(), re("div", {
    ref: "selectWrapper",
    class: ee(e.wrapperKls),
    onMouseenter: n[22] || (n[22] = (...h) => e.handleMouseEnter && e.handleMouseEnter(...h)),
    onMouseleave: n[23] || (n[23] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h)),
    onClick: n[24] || (n[24] = Wt((...h) => e.toggleMenu && e.toggleMenu(...h), ["stop"]))
  }, [
    ut(f, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: Te(() => [
        de("div", {
          class: "select-trigger",
          onMouseenter: n[20] || (n[20] = (h) => e.inputHovering = !0),
          onMouseleave: n[21] || (n[21] = (h) => e.inputHovering = !1)
        }, [
          e.multiple ? (G(), re("div", {
            key: 0,
            ref: "tags",
            class: ee(e.nsSelect.e("tags")),
            style: Ot(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (G(), re("span", {
              key: 0,
              class: ee([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              ut(c, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: n[0] || (n[0] = (h) => e.deleteTag(h, e.selected[0]))
              }, {
                default: Te(() => [
                  de("span", {
                    class: ee(e.nsSelect.e("tags-text")),
                    style: Ot(e.tagTextStyle)
                  }, ht(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (G(), Pe(c, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Te(() => [
                  e.collapseTagsTooltip ? (G(), Pe(f, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Te(() => [
                      de("span", {
                        class: ee(e.nsSelect.e("tags-text"))
                      }, "+ " + ht(e.selected.length - 1), 3)
                    ]),
                    content: Te(() => [
                      de("div", {
                        class: ee(e.nsSelect.e("collapse-tags"))
                      }, [
                        (G(!0), re(Ht, null, Xl(e.selected.slice(1), (h, w) => (G(), re("div", {
                          key: w,
                          class: ee(e.nsSelect.e("collapse-tag"))
                        }, [
                          (G(), Pe(c, {
                            key: e.getValueKey(h),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !h.isDisabled,
                            size: e.collapseTagSize,
                            hit: h.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (O) => e.deleteTag(O, h)
                          }, {
                            default: Te(() => [
                              de("span", {
                                class: ee(e.nsSelect.e("tags-text")),
                                style: Ot({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ht(h.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (G(), re("span", {
                    key: 1,
                    class: ee(e.nsSelect.e("tags-text"))
                  }, "+ " + ht(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : we("v-if", !0)
            ], 2)) : we("v-if", !0),
            we(" <div> "),
            e.collapseTags ? we("v-if", !0) : (G(), Pe(co, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Te(() => [
                de("span", {
                  class: ee([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (G(!0), re(Ht, null, Xl(e.selected, (h) => (G(), Pe(c, {
                    key: e.getValueKey(h),
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    hit: h.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (w) => e.deleteTag(w, h)
                  }, {
                    default: Te(() => [
                      de("span", {
                        class: ee(e.nsSelect.e("tags-text")),
                        style: Ot({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ht(h.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            we(" </div> "),
            e.filterable ? It((G(), re("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": n[1] || (n[1] = (h) => e.query = h),
              type: "text",
              class: ee([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Ot({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: n[2] || (n[2] = (...h) => e.handleFocus && e.handleFocus(...h)),
              onBlur: n[3] || (n[3] = (...h) => e.handleBlur && e.handleBlur(...h)),
              onKeyup: n[4] || (n[4] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
              onKeydown: [
                n[5] || (n[5] = (...h) => e.resetInputState && e.resetInputState(...h)),
                n[6] || (n[6] = Bn(Wt((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                n[7] || (n[7] = Bn(Wt((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                n[8] || (n[8] = Bn((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                n[9] || (n[9] = Bn(Wt((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                n[10] || (n[10] = Bn((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                n[11] || (n[11] = Bn((h) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: n[12] || (n[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onCompositionupdate: n[13] || (n[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onCompositionend: n[14] || (n[14] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onInput: n[15] || (n[15] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
            }, null, 46, _M)), [
              [Ww, e.query]
            ]) : we("v-if", !0)
          ], 6)) : we("v-if", !0),
          ut(g, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": n[16] || (n[16] = (h) => e.selectedLabel = h),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: ee([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              n[17] || (n[17] = Bn(Wt((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              n[18] || (n[18] = Bn(Wt((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Bn(Wt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Bn(e.handleKeydownEscape, ["esc"]),
              n[19] || (n[19] = Bn((h) => e.visible = !1, ["tab"]))
            ]
          }, zw({
            suffix: Te(() => [
              e.iconComponent && !e.showClose ? (G(), Pe(d, {
                key: 0,
                class: ee([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Te(() => [
                  (G(), Pe(xn(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0),
              e.showClose && e.clearIcon ? (G(), Pe(d, {
                key: 1,
                class: ee([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Te(() => [
                  (G(), Pe(xn(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : we("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Te(() => [
                de("div", wM, [
                  Ce(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: Te(() => [
        ut(E, null, {
          default: Te(() => [
            It(ut(_, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: ee([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Te(() => [
                e.showNewOption ? (G(), Pe(y, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : we("v-if", !0),
                Ce(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [qr, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (G(), re(Ht, { key: 0 }, [
              e.$slots.empty ? Ce(e.$slots, "empty", { key: 0 }) : (G(), re("p", {
                key: 1,
                class: ee(e.nsSelect.be("dropdown", "empty"))
              }, ht(e.emptyText), 3))
            ], 64)) : we("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [S, e.handleClose, e.popperPaneRef]
  ]);
}
var SM = /* @__PURE__ */ Ke(yM, [["render", EM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const xM = le({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = Be("select"), r = J(!0), i = dn(), s = J([]);
    Lt(qh, $n({
      ...Er(e)
    }));
    const l = De(bs);
    at(() => {
      s.value = c(i.subTree);
    });
    const c = (d) => {
      const g = [];
      return Array.isArray(d.children) && d.children.forEach((y) => {
        var _;
        y.type && y.type.name === "ElOption" && y.component && y.component.proxy ? g.push(y.component.proxy) : (_ = y.children) != null && _.length && g.push(...c(y));
      }), g;
    }, { groupQueryChange: f } = _i(l);
    return pe(f, () => {
      r.value = s.value.some((d) => d.visible === !0);
    }, { flush: "post" }), {
      visible: r,
      ns: n
    };
  }
});
function OM(e, n, r, i, s, l) {
  return It((G(), re("ul", {
    class: ee(e.ns.be("group", "wrap"))
  }, [
    de("li", {
      class: ee(e.ns.be("group", "title"))
    }, ht(e.label), 3),
    de("li", null, [
      de("ul", {
        class: ee(e.ns.b("group"))
      }, [
        Ce(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [qr, e.visible]
  ]);
}
var Uh = /* @__PURE__ */ Ke(xM, [["render", OM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
qn(SM, {
  Option: ec,
  OptionGroup: Uh
});
const TM = rr(ec);
rr(Uh);
const CM = (e, n, r) => {
  let i;
  for (; (i = e.exec(n)) !== null; )
    r(i);
}, AM = /\{\{\s*(\w+)\s*\}\}/g, za = (e, n = {}, r = AM) => {
  let i = e;
  return CM(r, e, ([s, l]) => {
    ue.exports.has(n, l) && (i = i.replace(s, ue.exports.get(n, l)));
  }), i;
}, IM = (e, n, r) => {
  const i = v(e.size) || "default", s = bu(), l = n.formData, c = n.emitChange, f = n.formProps, d = ue.exports.merge(
    { validateOnRuleChange: !1, size: i },
    s.elForm || {}
  ), g = ({ parent: O }) => O && ue.exports.has(rs, ue.exports.camelCase(O.tagname)) ? rs[ue.exports.camelCase(O.tagname)] : ih, y = (O, A) => {
    var D, X;
    const L = O.elem, C = O.parent, F = ue.exports.camelCase(A.tagname), $ = ue.exports.camelCase(C == null ? void 0 : C.tagname), P = C == null ? void 0 : C.setupRes, R = v(L.prop), z = typeof R == "function" ? R(O) : R, Z = v(P == null ? void 0 : P.formProp) || [], j = new Array().concat(Z, z || []), K = j.join("."), U = { isFormElem: !1 };
    if (j.length > 0 && (U.formProp = K), $M(L, F, $)) {
      f.add(K), U.isFormElem = !0;
      const ie = (X = v((D = L.modelValue) != null ? D : L.value)) != null ? X : void 0, ne = O.context.modelValue;
      ue.exports.get(v(ne), K) == null && ue.exports.set(v(ne), K, ie), U.prop = { "onUpdate:modelValue": (fe) => {
        ue.exports.set(v(ne), K, fe != null ? fe : ie), c(K, fe);
      } }, U.excludeKeys = ["value"], U.isFormItem = !0, U.isNeedElFormItem = MM(L, F), cv(() => {
        f.delete(K);
      });
    }
    return U;
  }, _ = (O) => {
    const A = O.props, L = O.context, C = O.setupRes;
    if (C.isFormElem) {
      const F = L.modelValue, $ = C.formProp;
      if (ue.exports.unset(A, "value"), A.modelValue = ue.exports.get(v(F), $), C.isNeedElFormItem) {
        const P = {
          ...LM(A),
          prop: $
        };
        return P.rules = PM(P), vt(H4, P, { default: () => Za(O) });
      }
    }
    return Za(O);
  }, E = J(), S = {
    ...d,
    tag: z4,
    ref: (O) => E.value = O,
    cls: Wn(e, "column"),
    model: l
  }, h = (O, ...A) => {
    const L = ue.exports.get(v(E), O);
    if (L && ue.exports.isFunction(L))
      return L(...A);
  }, w = {
    ...r,
    modelValue: l,
    tag: g,
    setup: y,
    render: _
  };
  return {
    elem: S,
    context: w,
    formRef: E,
    formApi: h,
    refresh: () => {
    },
    validate: (...O) => h("validate", O)
  };
}, Vh = [
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
], rs = {
  elCheckboxGroup: C3,
  elRadioGroup: H3,
  elSelect: TM
}, $M = (e, n, r) => v(e.isFormElem) === !0 ? !0 : Vh.includes(n) ? r && ue.exports.has(rs, r) ? ue.exports.camelCase(rs[r].name) !== n : !0 : !1, MM = (e, n) => {
  var i, s;
  const r = (i = v(e.elFormItem)) != null ? i : Vh.includes(n);
  return ue.exports.isBoolean(r) ? r : (s = r.enabled) != null ? s : !0;
}, Zl = {
  required: "\u8BF7\u8F93\u5165 [ {{label}} ] \uFF01",
  pattern: "\u8BF7\u6309\u7167\u8981\u6C42\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F! \u683C\u5F0F\uFF1A{{ pattern }}",
  common: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F!"
}, PM = (e) => {
  var d, g;
  const n = (d = v(e.required)) != null ? d : !1, r = (g = v(e.trigger)) != null ? g : "blur", i = ue.exports.has(e, "message") ? za(v(e.message), e) : za(Zl.required, e), s = ue.exports.isArray(v(e.rules)) ? [...v(e.rules)] : [], l = Object.keys(Zl), c = [];
  let f = !1;
  return s.forEach((y) => {
    var h;
    const _ = { ...v(y) }, E = ((h = l.filter((w) => ue.exports.has(_, w))) == null ? void 0 : h[0]) || "common", S = _.message || v(e.message) || ue.exports.get(Zl, E);
    _.message = za(S, { ...e, ..._ }), ue.exports.has(_, "required") && (f = !0), ue.exports.has(_, "trigger") || (_.trigger = r), c.push(_);
  }), !f && n && c.push({ required: n, message: i, trigger: r }), delete e.required, delete e.trigger, delete e.message, c;
}, RM = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message"
], LM = (e) => {
  const n = v(ue.exports.get(e, "elFormItem")), r = ue.exports.isArray(n) ? n : ue.exports.isObject(n) ? Object.keys(n) : [], i = ue.exports.isObject(n) ? { ...n } : {};
  return RM.forEach((s) => {
    ue.exports.has(e, s) && !r.includes(s) && (i[s] = ue.exports.get(e, s), ue.exports.unset(e, s));
  }), ue.exports.unset(e, "elFormItem"), i;
}, FM = { class: "els-form" }, BM = {
  name: "ElsForm"
}, Kh = /* @__PURE__ */ le({
  ...BM,
  props: {
    modelValue: null,
    column: null,
    size: { default: "small" },
    UIPluging: null,
    autoClean: { default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = $i(), l = J({}), c = (E, S) => {
      r("change", E, S), r("update:modelValue", v(l));
    };
    at(() => {
      r("update:modelValue", v(l));
    }), pe(Wn(i, "modelValue"), (E) => {
      l.value = E;
    });
    const f = $n(/* @__PURE__ */ new Set()), d = { formProps: f, formData: l, emitChange: c }, y = (i.UIPluging || IM)(i, d, { slots: s });
    if (i.autoClean) {
      let E = [];
      at(() => {
        E = Array.from(f);
      }), Jt(() => {
        E = [], f.clear();
      }), pe(f, (S) => {
        const h = Array.from(S), w = ue.exports.difference(E, h);
        w.length > 0 && (w.forEach((O) => ue.exports.unset(v(l), O)), E = h, r("update:modelValue", v(l)));
      });
    }
    return n({ ...y, formProps: f, submit: async (E = (S, h) => h == null ? void 0 : [S, h]) => {
      try {
        await y.validate();
      } catch (h) {
        console.error("\u8868\u5355\u6821\u9A8C\u5931\u8D25\uFF01====>", h);
      }
      const S = {};
      for (const h in f) {
        const w = ue.exports.get(v(l), h), O = E(h, w);
        if (O != null) {
          const [A, L] = O;
          ue.exports.set(S, A, L);
        }
      }
      return S;
    } }), (E, S) => (G(), re("div", FM, [
      ut(v(os), {
        elem: v(y).elem,
        context: v(y).context
      }, null, 8, ["elem", "context"])
    ]));
  }
});
const Ha = {
  install(e) {
    e.component("els-form", Kh);
  }
}, cP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsFormPlugin: Ha,
  ElsForm: Kh
}, Symbol.toStringTag, { value: "Module" })), kM = { class: "els-exp-box" }, NM = ["onClick"], DM = {
  key: 0,
  class: "els-cursor"
}, WM = ["onClick"], zM = {
  key: 0,
  class: "els-cursor"
}, HM = {
  name: "ElsExpBox"
}, qM = /* @__PURE__ */ le({
  ...HM,
  props: {
    modelValue: { default: "" },
    isEdit: { type: Boolean, default: !0 },
    mode: { default: "text" },
    init: null
  },
  emits: ["init", "update:modelValue"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = J(), { modelValue: l, isEdit: c, mode: f } = Er(i), d = J(!1);
    let g = "";
    const y = J([]), _ = J([]), E = ($) => {
      if (!s.value)
        return;
      const { children: P } = s.value, R = v(y).length, z = P[R], {
        offsetLeft: Z,
        offsetTop: j,
        offsetHeight: K,
        offsetWidth: U,
        tagName: D
      } = z, X = $ == "up" ? j - K / 2 : j + K + K / 2, ie = Z;
      X > 0 && h(ie, X);
    }, S = ($) => {
      const P = [...y.value, ..._.value], R = P.length;
      $ > R ? $ = R : $ < 0 && ($ = R + 1 - $);
      const z = P.slice(0, $), Z = P.slice($);
      y.value = z, _.value = Z;
    }, h = ($, P) => {
      if (!s.value)
        return;
      const { children: R } = s.value;
      let z = -1, Z = -1, j = 0;
      for (let K = 0, U = R.length; K < U; K++) {
        const D = R[K], {
          tagName: X,
          offsetLeft: ie,
          offsetTop: ce,
          offsetWidth: ne,
          offsetHeight: fe
        } = D;
        if (X == "SPAN" && (j = K), X == "KBD" && P >= ce && P <= ce + fe) {
          const he = $ - ie, Se = Math.abs(he);
          (z == -1 || Se < z) && (z = Se, Z = he > ne / 2 ? K + 1 : K);
        }
      }
      if (Z == -1) {
        let K = 0, U = 0;
        for (let D = 0, X = R.length; D < X; D++) {
          const ie = R[D], { tagName: ce, offsetTop: ne, offsetHeight: fe } = ie;
          if (fe > 0 ? (U = D, K = fe, z = ne + fe) : D - U > 1 && (z = z + K), P >= z)
            Z = D + 1;
          else
            break;
        }
      }
      Z >= 0 && j < Z && Z--, S(Z);
    }, w = ($) => {
      const { offsetX: P, offsetY: R } = $;
      h(P, R);
    }, O = ($, P) => {
      const { offsetX: R } = P, z = P.target;
      let Z = 1;
      if (R && z) {
        const { offsetWidth: j } = z;
        R < j / 2 && (Z = 0);
      }
      console.log($), S($ + Z);
    }, A = ($) => {
      if (!c.value)
        return;
      const P = $.key;
      L(P);
    }, L = ($) => {
      switch (console.log("===addValue===>", $), $) {
        case "Enter":
          y.value.push(`
`);
          break;
        case "Space":
          y.value.push(" ");
          break;
        case "Backspace":
          y.value.pop();
          break;
        case "Delete":
          y.value.pop();
          break;
        case "Home":
          S(0);
          break;
        case "End":
          S(-1);
          break;
        case "ArrowLeft":
          S(y.value.length - 1);
          break;
        case "ArrowRight":
          S(y.value.length + 1);
          break;
        case "ArrowUp":
          E("up");
          break;
        case "ArrowDown":
          E("down");
          break;
        default:
          y.value.push($);
      }
      C();
    }, C = () => {
      g = [...v(y), ...v(_)].join(""), r("update:modelValue", g);
    };
    document.onkeydown = ($) => {
      const P = $.code;
      if (console.log(P), ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(P))
        return !1;
    }, pe(l, ($) => {
      $ != g && (g = $, y.value = $.split(""));
    });
    const F = {
      input: L,
      resetPos: S
    };
    return at(() => {
      r("init", F), i.init && i.init(F);
    }), n(F), ($, P) => (G(), re("div", kM, [
      de("div", {
        ref_key: "boxRef",
        ref: s,
        class: ee([`_mode-${v(f)}`, { "is-focus": d.value }]),
        tabindex: "1",
        onKeydown: A,
        onClick: Wt(w, ["stop"]),
        onFocus: P[0] || (P[0] = () => d.value = !0),
        onFocusout: P[1] || (P[1] = () => d.value = !1)
      }, [
        (G(!0), re(Ht, null, Xl([...y.value, ..._.value], (R, z) => (G(), re(Ht, null, [
          z == y.value.length ? (G(), re("span", DM)) : we("", !0),
          R != `
` ? (G(), re("kbd", {
            key: 1,
            onClick: Wt((Z) => O(z, Z), ["stop"]),
            class: ee(z + "")
          }, ht(R), 11, WM)) : (G(), re("br", {
            key: 2,
            class: ee(z + "")
          }, null, 2))
        ], 64))), 256)),
        _.value.length == 0 ? (G(), re("span", zM)) : we("", !0)
      ], 42, NM)
    ]));
  }
});
const ys = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [i, s] of n)
    r[i] = s;
  return r;
}, jh = /* @__PURE__ */ ys(qM, [["__scopeId", "data-v-c7d48fc8"]]), qa = {
  install(e) {
    e.component("els-exp-box", jh);
  }
}, fP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsExpBoxPlugin: qa,
  ElsExpBox: jh
}, Symbol.toStringTag, { value: "Module" })), UM = { class: "_track" }, VM = {
  name: "ElsScrollBar"
}, KM = /* @__PURE__ */ le({
  ...VM,
  props: {
    direction: { default: "vertical" }
  },
  setup(e) {
    const n = e, { direction: r } = n, i = J(), s = B(() => {
      if (i.value)
        return i.value.parentElement;
    }), l = B(() => {
      const _ = { width: 0, height: 0 };
      if (s.value) {
        const { offsetWidth: E, offsetHeight: S } = s.value;
        _.width = E, _.height = S;
      }
      return _;
    });
    B(() => {
      if (!s.value)
        return [];
      const { children: _ } = s.value;
      Array.from(_).filter((E) => !E.className.includes("els-scroll-bar"));
    });
    const c = B(() => {
      if (!s.value)
        return { width: 0, height: 0 };
      let _ = [], E = [];
      const { children: S } = s.value, h = Array.from(S);
      return _ = h.map((w) => w.offsetWidth), E = h.map((w) => w.offsetHeight), console.log(h, _, E), { width: ue.exports.sum(_), height: ue.exports.sum(E) };
    }), f = B(() => {
      const { width: _, height: E } = v(l), { width: S, height: h } = v(c);
      return r == "vertical" ? h > E : S > _;
    }), d = (_) => {
    }, g = (_) => {
    }, y = (_) => {
    };
    return at(() => {
    }), (_, E) => It((G(), re("div", {
      ref_key: "elsScrollBarRef",
      ref: i,
      class: ee(["els-scroll-bar", `direction-${v(r)}`]),
      style: Ot(
        v(r) == "vertical" ? `height:${v(l).height}px` : `width:${v(l).width}px`
      )
    }, [
      de("div", UM, [
        de("div", {
          class: "_thumb",
          onMousedown: d,
          onMouseup: y,
          onMousemove: g
        }, [
          Ce(_.$slots, "default", {}, void 0, !0)
        ], 32)
      ])
    ], 6)), [
      [qr, v(f)]
    ]);
  }
});
const Gh = /* @__PURE__ */ ys(KM, [["__scopeId", "data-v-0d77f244"]]), Ua = {
  install(e) {
    e.component("els-scroll-bar", Gh);
  }
}, dP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsScrollBarPlugin: Ua,
  ElsScrollBar: Gh
}, Symbol.toStringTag, { value: "Module" })), jM = {
  name: "ElsPage"
};
const GM = { class: "els-page" };
function YM(e, n, r, i, s, l) {
  return G(), re("div", GM, " \u6211\u662F\u62BD\u8C61\u9875\u9762\u7EC4\u4EF6 ");
}
const Yh = /* @__PURE__ */ ys(jM, [["render", YM], ["__scopeId", "data-v-2aa4e32d"]]), Va = {
  install(e) {
    e.component("els-page", Yh);
  }
}, pP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsPagePlugin: Va,
  ElsPage: Yh
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var av;
(function(e) {
  e.pop = "pop", e.push = "push";
})(av || (av = {}));
var sv;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(sv || (sv = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var lv;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(lv || (lv = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const ZM = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function XM() {
  return De(ZM);
}
const JM = /^\s*http/, tc = (e, n, r) => {
  typeof e == "string" && JM.test(e) ? window.open(e, (r == null ? void 0 : r.target) || "_blank") : n == null || n.push(e);
}, QM = (e, n, r, i) => {
  tc(typeof e == "string" ? za(e, n) : e, r, i);
}, eP = (e, n) => {
  e.handle ? e.handle(e) : e.path && tc(e.path, n, e);
}, Zh = (e, n) => {
  const { path: r, fullPath: i } = e;
  let s = n, l = s.length;
  for (; ue.exports.isArray(s) && s.length > 0 && l > 0; )
    for (let c = 0, f = s.length; c < f; c++) {
      const d = s[c], g = d.path;
      if (g) {
        const y = typeof g == "string" ? g : g.path;
        if (r.includes(y) || i.includes(y)) {
          s = d.children || d, l = ue.exports.isArray(s) ? s.length : 0;
          break;
        }
      }
      l--;
    }
  return console.log(s, n), ue.exports.isArray(s) ? "" : String(s.id);
}, tP = {
  key: 0,
  "aria-hidden": "true",
  class: "svg-icon"
}, nP = ["href", "fill"], rP = {
  name: "ElsSvg"
}, nc = /* @__PURE__ */ le({
  ...rP,
  props: {
    id: null,
    color: { default: "" }
  },
  setup(e) {
    const n = e, { id: r, color: i } = Er(n);
    return (s, l) => typeof v(r) == "string" ? (G(), re("svg", tP, [
      de("use", {
        href: `#${v(r)}`,
        fill: v(i)
      }, null, 8, nP)
    ])) : (G(), Pe(xn(v(r)), { key: 1 }));
  }
}), Ka = {
  install(e) {
    e.component("els-svg", nc);
  }
}, vP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsSvgPlugin: Ka,
  ElsSvg: nc
}, Symbol.toStringTag, { value: "Module" })), oP = (e, n) => {
  const r = bu(), i = (r == null ? void 0 : r.elMenu) || {}, s = e.menus, l = Wn(e, "collapse"), c = n.currentId, f = (E) => {
    switch (E.elem.type || "item") {
      case "group":
        return uM;
      case "sub":
        return cM;
      case "item":
        return ov;
    }
    return ov;
  }, d = J();
  return {
    elem: {
      ...i,
      ref: (E) => d.value = E,
      ":collapse": l,
      ":defaultActive": c,
      tag: lM,
      cls: s
    },
    context: {
      tag: f,
      setup: (E, { tagname: S }) => {
        const h = ue.exports.camelCase(S);
        if (!["elMenuItem", "elSubMenu", "elMenuItemGroup"].includes(h))
          return {};
        const w = E.elem, O = w == null ? void 0 : w.icon, A = w.title || w.label, L = w.path, F = { index: String(w.id) }, $ = [
          { tag: Dn, "v-if": O != null, cls: { tag: nc, id: O } },
          { tag: "span", cls: A }
        ];
        return h === "elMenuItem" ? (F.cls = $, F["@click"] = () => n.handleSelect(w)) : F.cls = {
          tag: "div",
          class: "_title-slot",
          "#title": !0,
          cls: $
        }, {
          prop: F,
          excludeKeys: ["id", "type", "title", "icon", "path"],
          path: L
        };
      }
    },
    menuRef: d
  };
}, iP = { class: "els-menu" }, aP = {
  name: "ElsMenuElem"
}, sP = /* @__PURE__ */ le({
  ...aP,
  props: {
    menus: { default: () => [] },
    collapse: { default: !1 },
    context: { default: () => ({}) },
    initMenu: null,
    UIPluging: null
  },
  emits: ["init-menu", "change", "select"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = J(""), l = XM(), c = i.initMenu || Zh;
    l && (s.value = c(l, i.menus));
    const f = (y) => {
      r("select", y), s.value !== String(y.id) && (s.value = String(y.id), r("change", y));
    }, g = (i.UIPluging || oP)(i, { currentId: s, handleSelect: f });
    return n({ ...g, currentId: s, handleSelect: f }), (y, _) => (G(), re("div", iP, [
      ut(v(os), {
        elem: v(g).elem,
        context: v(g).context
      }, null, 8, ["elem", "context"])
    ]));
  }
});
const Xh = /* @__PURE__ */ ys(sP, [["__scopeId", "data-v-729177ca"]]), ja = {
  install(e) {
    e.component("els-menu", Xh);
  }
}, hP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElsMenuPlugin: ja,
  ElsMenu: Xh,
  jump: tc,
  jumpFromTempalte: QM,
  menuJump: eP,
  initMenu: Zh
}, Symbol.toStringTag, { value: "Module" })), gP = {
  install(e) {
    var n, r, i, s, l, c, f;
    (n = La.install) == null || n.call(La, e), (r = Ha.install) == null || r.call(Ha, e), (i = qa.install) == null || i.call(qa, e), (s = Ua.install) == null || s.call(Ua, e), (l = Va.install) == null || l.call(Va, e), (c = ja.install) == null || c.call(ja, e), (f = Ka.install) == null || f.call(Ka, e);
  }
};
export {
  uP as ElsElem,
  fP as ElsExpBox,
  cP as ElsForm,
  hP as ElsMenu,
  pP as ElsPage,
  dP as ElsScrollBar,
  vP as ElsSvg,
  gP as default
};
