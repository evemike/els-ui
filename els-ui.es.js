import { unref as b, renderSlot as Te, resolveDynamicComponent as In, createVNode as lt, h as gt, defineComponent as $e, computed as L, mergeProps as Xn, isVNode as J_, resolveComponent as qt, ref as X, watch as pe, getCurrentScope as Q_, onScopeDispose as ew, getCurrentInstance as rn, onMounted as ut, nextTick as De, openBlock as V, createElementBlock as oe, createElementVNode as fe, warn as tw, inject as qe, toRef as qn, onUnmounted as zp, isRef as ro, onBeforeUnmount as vn, onBeforeMount as nw, provide as Nt, useAttrs as ru, useSlots as Ei, shallowRef as li, onUpdated as ou, withDirectives as Mt, createCommentVNode as we, Fragment as Kt, normalizeClass as Q, createBlock as Me, withCtx as Oe, withModifiers as Ut, toDisplayString as mt, normalizeStyle as At, vShow as Wr, Transition as ao, reactive as Ln, cloneVNode as rw, Text as ow, Comment as iw, toRefs as nr, Teleport as aw, readonly as sw, onDeactivated as lw, toRaw as pi, vModelCheckbox as Pa, createTextVNode as ko, vModelRadio as Hp, toHandlers as uw, watchEffect as cw, triggerRef as ri, resolveDirective as fw, renderList as Bl, withKeys as Dn, vModelText as dw, createSlots as pw } from "vue";
var oi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = { exports: {} };
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
    var r, i = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", h = 500, v = "__lodash_placeholder__", S = 1, w = 2, E = 4, m = 1, _ = 2, O = 1, C = 2, N = 4, M = 8, k = 16, R = 32, A = 64, $ = 128, z = 256, Y = 512, te = 30, D = "...", G = 800, U = 16, Z = 1, ne = 2, ae = 3, re = 1 / 0, he = 9007199254740991, ce = 17976931348623157e292, ye = 0 / 0, _e = 4294967295, at = _e - 1, Qe = _e >>> 1, ct = [
      ["ary", $],
      ["bind", O],
      ["bindKey", C],
      ["curry", M],
      ["curryRight", k],
      ["flip", Y],
      ["partial", R],
      ["partialRight", A],
      ["rearg", z]
    ], We = "[object Arguments]", rt = "[object Array]", se = "[object AsyncFunction]", be = "[object Boolean]", Ne = "[object Date]", Ze = "[object DOMException]", _t = "[object Error]", ft = "[object Function]", gn = "[object GeneratorFunction]", wt = "[object Map]", Gt = "[object Number]", mn = "[object Null]", dt = "[object Object]", bn = "[object Promise]", ir = "[object Proxy]", yt = "[object RegExp]", ot = "[object Set]", jt = "[object String]", Yt = "[object Symbol]", K = "[object Undefined]", Se = "[object WeakMap]", Tt = "[object WeakSet]", et = "[object ArrayBuffer]", Lt = "[object DataView]", Gn = "[object Float32Array]", B = "[object Float64Array]", J = "[object Int8Array]", ve = "[object Int16Array]", Ae = "[object Int32Array]", pt = "[object Uint8Array]", yn = "[object Uint8ClampedArray]", _n = "[object Uint16Array]", on = "[object Uint32Array]", Zt = /\b__p \+= '';/g, Dt = /\b(__p \+=) '' \+/g, ar = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Fu = /&(?:amp|lt|gt|quot|#39);/g, Bu = /[&<>"']/g, Sv = RegExp(Fu.source), Ev = RegExp(Bu.source), xv = /<%-([\s\S]+?)%>/g, Ov = /<%([\s\S]+?)%>/g, ku = /<%=([\s\S]+?)%>/g, Tv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cv = /^\w*$/, Av = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ja = /[\\^$.*+?()[\]{}|]/g, Iv = RegExp(Ja.source), Qa = /^\s+/, $v = /\s/, Pv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Mv = /\{\n\/\* \[wrapped with (.+)\] \*/, Rv = /,? & /, Lv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Fv = /[()=,{}\[\]\/\s]/, Bv = /\\(\\)?/g, kv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nu = /\w*$/, Nv = /^[-+]0x[0-9a-f]+$/i, Dv = /^0b[01]+$/i, Wv = /^\[object .+?Constructor\]$/, zv = /^0o[0-7]+$/i, Hv = /^(?:0|[1-9]\d*)$/, qv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $i = /($^)/, Uv = /['\n\r\u2028\u2029\\]/g, Pi = "\\ud800-\\udfff", Vv = "\\u0300-\\u036f", Kv = "\\ufe20-\\ufe2f", Gv = "\\u20d0-\\u20ff", Du = Vv + Kv + Gv, Wu = "\\u2700-\\u27bf", zu = "a-z\\xdf-\\xf6\\xf8-\\xff", jv = "\\xac\\xb1\\xd7\\xf7", Yv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zv = "\\u2000-\\u206f", Xv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hu = "A-Z\\xc0-\\xd6\\xd8-\\xde", qu = "\\ufe0e\\ufe0f", Uu = jv + Yv + Zv + Xv, es = "['\u2019]", Jv = "[" + Pi + "]", Vu = "[" + Uu + "]", Mi = "[" + Du + "]", Ku = "\\d+", Qv = "[" + Wu + "]", Gu = "[" + zu + "]", ju = "[^" + Pi + Uu + Ku + Wu + zu + Hu + "]", ts = "\\ud83c[\\udffb-\\udfff]", eg = "(?:" + Mi + "|" + ts + ")", Yu = "[^" + Pi + "]", ns = "(?:\\ud83c[\\udde6-\\uddff]){2}", rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", uo = "[" + Hu + "]", Zu = "\\u200d", Xu = "(?:" + Gu + "|" + ju + ")", tg = "(?:" + uo + "|" + ju + ")", Ju = "(?:" + es + "(?:d|ll|m|re|s|t|ve))?", Qu = "(?:" + es + "(?:D|LL|M|RE|S|T|VE))?", ec = eg + "?", tc = "[" + qu + "]?", ng = "(?:" + Zu + "(?:" + [Yu, ns, rs].join("|") + ")" + tc + ec + ")*", rg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", og = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nc = tc + ec + ng, ig = "(?:" + [Qv, ns, rs].join("|") + ")" + nc, ag = "(?:" + [Yu + Mi + "?", Mi, ns, rs, Jv].join("|") + ")", sg = RegExp(es, "g"), lg = RegExp(Mi, "g"), os = RegExp(ts + "(?=" + ts + ")|" + ag + nc, "g"), ug = RegExp([
      uo + "?" + Gu + "+" + Ju + "(?=" + [Vu, uo, "$"].join("|") + ")",
      tg + "+" + Qu + "(?=" + [Vu, uo + Xu, "$"].join("|") + ")",
      uo + "?" + Xu + "+" + Ju,
      uo + "+" + Qu,
      og,
      rg,
      Ku,
      ig
    ].join("|"), "g"), cg = RegExp("[" + Zu + Pi + Du + qu + "]"), fg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, dg = [
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
    ], pg = -1, Xe = {};
    Xe[Gn] = Xe[B] = Xe[J] = Xe[ve] = Xe[Ae] = Xe[pt] = Xe[yn] = Xe[_n] = Xe[on] = !0, Xe[We] = Xe[rt] = Xe[et] = Xe[be] = Xe[Lt] = Xe[Ne] = Xe[_t] = Xe[ft] = Xe[wt] = Xe[Gt] = Xe[dt] = Xe[yt] = Xe[ot] = Xe[jt] = Xe[Se] = !1;
    var je = {};
    je[We] = je[rt] = je[et] = je[Lt] = je[be] = je[Ne] = je[Gn] = je[B] = je[J] = je[ve] = je[Ae] = je[wt] = je[Gt] = je[dt] = je[yt] = je[ot] = je[jt] = je[Yt] = je[pt] = je[yn] = je[_n] = je[on] = !0, je[_t] = je[ft] = je[Se] = !1;
    var hg = {
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
    }, vg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, gg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, mg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, bg = parseFloat, yg = parseInt, rc = typeof oi == "object" && oi && oi.Object === Object && oi, _g = typeof self == "object" && self && self.Object === Object && self, $t = rc || _g || Function("return this")(), is = n && !n.nodeType && n, Hr = is && !0 && e && !e.nodeType && e, oc = Hr && Hr.exports === is, as = oc && rc.process, wn = function() {
      try {
        var I = Hr && Hr.require && Hr.require("util").types;
        return I || as && as.binding && as.binding("util");
      } catch {
      }
    }(), ic = wn && wn.isArrayBuffer, ac = wn && wn.isDate, sc = wn && wn.isMap, lc = wn && wn.isRegExp, uc = wn && wn.isSet, cc = wn && wn.isTypedArray;
    function an(I, W, F) {
      switch (F.length) {
        case 0:
          return I.call(W);
        case 1:
          return I.call(W, F[0]);
        case 2:
          return I.call(W, F[0], F[1]);
        case 3:
          return I.call(W, F[0], F[1], F[2]);
      }
      return I.apply(W, F);
    }
    function wg(I, W, F, ie) {
      for (var Ee = -1, ze = I == null ? 0 : I.length; ++Ee < ze; ) {
        var St = I[Ee];
        W(ie, St, F(St), I);
      }
      return ie;
    }
    function Sn(I, W) {
      for (var F = -1, ie = I == null ? 0 : I.length; ++F < ie && W(I[F], F, I) !== !1; )
        ;
      return I;
    }
    function Sg(I, W) {
      for (var F = I == null ? 0 : I.length; F-- && W(I[F], F, I) !== !1; )
        ;
      return I;
    }
    function fc(I, W) {
      for (var F = -1, ie = I == null ? 0 : I.length; ++F < ie; )
        if (!W(I[F], F, I))
          return !1;
      return !0;
    }
    function Tr(I, W) {
      for (var F = -1, ie = I == null ? 0 : I.length, Ee = 0, ze = []; ++F < ie; ) {
        var St = I[F];
        W(St, F, I) && (ze[Ee++] = St);
      }
      return ze;
    }
    function Ri(I, W) {
      var F = I == null ? 0 : I.length;
      return !!F && co(I, W, 0) > -1;
    }
    function ss(I, W, F) {
      for (var ie = -1, Ee = I == null ? 0 : I.length; ++ie < Ee; )
        if (F(W, I[ie]))
          return !0;
      return !1;
    }
    function tt(I, W) {
      for (var F = -1, ie = I == null ? 0 : I.length, Ee = Array(ie); ++F < ie; )
        Ee[F] = W(I[F], F, I);
      return Ee;
    }
    function Cr(I, W) {
      for (var F = -1, ie = W.length, Ee = I.length; ++F < ie; )
        I[Ee + F] = W[F];
      return I;
    }
    function ls(I, W, F, ie) {
      var Ee = -1, ze = I == null ? 0 : I.length;
      for (ie && ze && (F = I[++Ee]); ++Ee < ze; )
        F = W(F, I[Ee], Ee, I);
      return F;
    }
    function Eg(I, W, F, ie) {
      var Ee = I == null ? 0 : I.length;
      for (ie && Ee && (F = I[--Ee]); Ee--; )
        F = W(F, I[Ee], Ee, I);
      return F;
    }
    function us(I, W) {
      for (var F = -1, ie = I == null ? 0 : I.length; ++F < ie; )
        if (W(I[F], F, I))
          return !0;
      return !1;
    }
    var xg = cs("length");
    function Og(I) {
      return I.split("");
    }
    function Tg(I) {
      return I.match(Lv) || [];
    }
    function dc(I, W, F) {
      var ie;
      return F(I, function(Ee, ze, St) {
        if (W(Ee, ze, St))
          return ie = ze, !1;
      }), ie;
    }
    function Li(I, W, F, ie) {
      for (var Ee = I.length, ze = F + (ie ? 1 : -1); ie ? ze-- : ++ze < Ee; )
        if (W(I[ze], ze, I))
          return ze;
      return -1;
    }
    function co(I, W, F) {
      return W === W ? Ng(I, W, F) : Li(I, pc, F);
    }
    function Cg(I, W, F, ie) {
      for (var Ee = F - 1, ze = I.length; ++Ee < ze; )
        if (ie(I[Ee], W))
          return Ee;
      return -1;
    }
    function pc(I) {
      return I !== I;
    }
    function hc(I, W) {
      var F = I == null ? 0 : I.length;
      return F ? ds(I, W) / F : ye;
    }
    function cs(I) {
      return function(W) {
        return W == null ? r : W[I];
      };
    }
    function fs(I) {
      return function(W) {
        return I == null ? r : I[W];
      };
    }
    function vc(I, W, F, ie, Ee) {
      return Ee(I, function(ze, St, Ke) {
        F = ie ? (ie = !1, ze) : W(F, ze, St, Ke);
      }), F;
    }
    function Ag(I, W) {
      var F = I.length;
      for (I.sort(W); F--; )
        I[F] = I[F].value;
      return I;
    }
    function ds(I, W) {
      for (var F, ie = -1, Ee = I.length; ++ie < Ee; ) {
        var ze = W(I[ie]);
        ze !== r && (F = F === r ? ze : F + ze);
      }
      return F;
    }
    function ps(I, W) {
      for (var F = -1, ie = Array(I); ++F < I; )
        ie[F] = W(F);
      return ie;
    }
    function Ig(I, W) {
      return tt(W, function(F) {
        return [F, I[F]];
      });
    }
    function gc(I) {
      return I && I.slice(0, _c(I) + 1).replace(Qa, "");
    }
    function sn(I) {
      return function(W) {
        return I(W);
      };
    }
    function hs(I, W) {
      return tt(W, function(F) {
        return I[F];
      });
    }
    function Ho(I, W) {
      return I.has(W);
    }
    function mc(I, W) {
      for (var F = -1, ie = I.length; ++F < ie && co(W, I[F], 0) > -1; )
        ;
      return F;
    }
    function bc(I, W) {
      for (var F = I.length; F-- && co(W, I[F], 0) > -1; )
        ;
      return F;
    }
    function $g(I, W) {
      for (var F = I.length, ie = 0; F--; )
        I[F] === W && ++ie;
      return ie;
    }
    var Pg = fs(hg), Mg = fs(vg);
    function Rg(I) {
      return "\\" + mg[I];
    }
    function Lg(I, W) {
      return I == null ? r : I[W];
    }
    function fo(I) {
      return cg.test(I);
    }
    function Fg(I) {
      return fg.test(I);
    }
    function Bg(I) {
      for (var W, F = []; !(W = I.next()).done; )
        F.push(W.value);
      return F;
    }
    function vs(I) {
      var W = -1, F = Array(I.size);
      return I.forEach(function(ie, Ee) {
        F[++W] = [Ee, ie];
      }), F;
    }
    function yc(I, W) {
      return function(F) {
        return I(W(F));
      };
    }
    function Ar(I, W) {
      for (var F = -1, ie = I.length, Ee = 0, ze = []; ++F < ie; ) {
        var St = I[F];
        (St === W || St === v) && (I[F] = v, ze[Ee++] = F);
      }
      return ze;
    }
    function Fi(I) {
      var W = -1, F = Array(I.size);
      return I.forEach(function(ie) {
        F[++W] = ie;
      }), F;
    }
    function kg(I) {
      var W = -1, F = Array(I.size);
      return I.forEach(function(ie) {
        F[++W] = [ie, ie];
      }), F;
    }
    function Ng(I, W, F) {
      for (var ie = F - 1, Ee = I.length; ++ie < Ee; )
        if (I[ie] === W)
          return ie;
      return -1;
    }
    function Dg(I, W, F) {
      for (var ie = F + 1; ie--; )
        if (I[ie] === W)
          return ie;
      return ie;
    }
    function po(I) {
      return fo(I) ? zg(I) : xg(I);
    }
    function Fn(I) {
      return fo(I) ? Hg(I) : Og(I);
    }
    function _c(I) {
      for (var W = I.length; W-- && $v.test(I.charAt(W)); )
        ;
      return W;
    }
    var Wg = fs(gg);
    function zg(I) {
      for (var W = os.lastIndex = 0; os.test(I); )
        ++W;
      return W;
    }
    function Hg(I) {
      return I.match(os) || [];
    }
    function qg(I) {
      return I.match(ug) || [];
    }
    var Ug = function I(W) {
      W = W == null ? $t : ho.defaults($t.Object(), W, ho.pick($t, dg));
      var F = W.Array, ie = W.Date, Ee = W.Error, ze = W.Function, St = W.Math, Ke = W.Object, gs = W.RegExp, Vg = W.String, En = W.TypeError, Bi = F.prototype, Kg = ze.prototype, vo = Ke.prototype, ki = W["__core-js_shared__"], Ni = Kg.toString, Ve = vo.hasOwnProperty, Gg = 0, wc = function() {
        var t = /[^.]+$/.exec(ki && ki.keys && ki.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Di = vo.toString, jg = Ni.call(Ke), Yg = $t._, Zg = gs(
        "^" + Ni.call(Ve).replace(Ja, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Wi = oc ? W.Buffer : r, Ir = W.Symbol, zi = W.Uint8Array, Sc = Wi ? Wi.allocUnsafe : r, Hi = yc(Ke.getPrototypeOf, Ke), Ec = Ke.create, xc = vo.propertyIsEnumerable, qi = Bi.splice, Oc = Ir ? Ir.isConcatSpreadable : r, qo = Ir ? Ir.iterator : r, qr = Ir ? Ir.toStringTag : r, Ui = function() {
        try {
          var t = jr(Ke, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Xg = W.clearTimeout !== $t.clearTimeout && W.clearTimeout, Jg = ie && ie.now !== $t.Date.now && ie.now, Qg = W.setTimeout !== $t.setTimeout && W.setTimeout, Vi = St.ceil, Ki = St.floor, ms = Ke.getOwnPropertySymbols, em = Wi ? Wi.isBuffer : r, Tc = W.isFinite, tm = Bi.join, nm = yc(Ke.keys, Ke), Et = St.max, Ft = St.min, rm = ie.now, om = W.parseInt, Cc = St.random, im = Bi.reverse, bs = jr(W, "DataView"), Uo = jr(W, "Map"), ys = jr(W, "Promise"), go = jr(W, "Set"), Vo = jr(W, "WeakMap"), Ko = jr(Ke, "create"), Gi = Vo && new Vo(), mo = {}, am = Yr(bs), sm = Yr(Uo), lm = Yr(ys), um = Yr(go), cm = Yr(Vo), ji = Ir ? Ir.prototype : r, Go = ji ? ji.valueOf : r, Ac = ji ? ji.toString : r;
      function g(t) {
        if (st(t) && !xe(t) && !(t instanceof Le)) {
          if (t instanceof xn)
            return t;
          if (Ve.call(t, "__wrapped__"))
            return $f(t);
        }
        return new xn(t);
      }
      var bo = function() {
        function t() {
        }
        return function(o) {
          if (!it(o))
            return {};
          if (Ec)
            return Ec(o);
          t.prototype = o;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function Yi() {
      }
      function xn(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      g.templateSettings = {
        escape: xv,
        evaluate: Ov,
        interpolate: ku,
        variable: "",
        imports: {
          _: g
        }
      }, g.prototype = Yi.prototype, g.prototype.constructor = g, xn.prototype = bo(Yi.prototype), xn.prototype.constructor = xn;
      function Le(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _e, this.__views__ = [];
      }
      function fm() {
        var t = new Le(this.__wrapped__);
        return t.__actions__ = Xt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Xt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Xt(this.__views__), t;
      }
      function dm() {
        if (this.__filtered__) {
          var t = new Le(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function pm() {
        var t = this.__wrapped__.value(), o = this.__dir__, a = xe(t), u = o < 0, p = a ? t.length : 0, y = O0(0, p, this.__views__), x = y.start, T = y.end, P = T - x, H = u ? T : x - 1, q = this.__iteratees__, j = q.length, ee = 0, le = Ft(P, this.__takeCount__);
        if (!a || !u && p == P && le == P)
          return Jc(t, this.__actions__);
        var ge = [];
        e:
          for (; P-- && ee < le; ) {
            H += o;
            for (var Ie = -1, me = t[H]; ++Ie < j; ) {
              var Re = q[Ie], ke = Re.iteratee, cn = Re.type, Ht = ke(me);
              if (cn == ne)
                me = Ht;
              else if (!Ht) {
                if (cn == Z)
                  continue e;
                break e;
              }
            }
            ge[ee++] = me;
          }
        return ge;
      }
      Le.prototype = bo(Yi.prototype), Le.prototype.constructor = Le;
      function Ur(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function hm() {
        this.__data__ = Ko ? Ko(null) : {}, this.size = 0;
      }
      function vm(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function gm(t) {
        var o = this.__data__;
        if (Ko) {
          var a = o[t];
          return a === d ? r : a;
        }
        return Ve.call(o, t) ? o[t] : r;
      }
      function mm(t) {
        var o = this.__data__;
        return Ko ? o[t] !== r : Ve.call(o, t);
      }
      function bm(t, o) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Ko && o === r ? d : o, this;
      }
      Ur.prototype.clear = hm, Ur.prototype.delete = vm, Ur.prototype.get = gm, Ur.prototype.has = mm, Ur.prototype.set = bm;
      function sr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function ym() {
        this.__data__ = [], this.size = 0;
      }
      function _m(t) {
        var o = this.__data__, a = Zi(o, t);
        if (a < 0)
          return !1;
        var u = o.length - 1;
        return a == u ? o.pop() : qi.call(o, a, 1), --this.size, !0;
      }
      function wm(t) {
        var o = this.__data__, a = Zi(o, t);
        return a < 0 ? r : o[a][1];
      }
      function Sm(t) {
        return Zi(this.__data__, t) > -1;
      }
      function Em(t, o) {
        var a = this.__data__, u = Zi(a, t);
        return u < 0 ? (++this.size, a.push([t, o])) : a[u][1] = o, this;
      }
      sr.prototype.clear = ym, sr.prototype.delete = _m, sr.prototype.get = wm, sr.prototype.has = Sm, sr.prototype.set = Em;
      function lr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var u = t[o];
          this.set(u[0], u[1]);
        }
      }
      function xm() {
        this.size = 0, this.__data__ = {
          hash: new Ur(),
          map: new (Uo || sr)(),
          string: new Ur()
        };
      }
      function Om(t) {
        var o = la(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function Tm(t) {
        return la(this, t).get(t);
      }
      function Cm(t) {
        return la(this, t).has(t);
      }
      function Am(t, o) {
        var a = la(this, t), u = a.size;
        return a.set(t, o), this.size += a.size == u ? 0 : 1, this;
      }
      lr.prototype.clear = xm, lr.prototype.delete = Om, lr.prototype.get = Tm, lr.prototype.has = Cm, lr.prototype.set = Am;
      function Vr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new lr(); ++o < a; )
          this.add(t[o]);
      }
      function Im(t) {
        return this.__data__.set(t, d), this;
      }
      function $m(t) {
        return this.__data__.has(t);
      }
      Vr.prototype.add = Vr.prototype.push = Im, Vr.prototype.has = $m;
      function Bn(t) {
        var o = this.__data__ = new sr(t);
        this.size = o.size;
      }
      function Pm() {
        this.__data__ = new sr(), this.size = 0;
      }
      function Mm(t) {
        var o = this.__data__, a = o.delete(t);
        return this.size = o.size, a;
      }
      function Rm(t) {
        return this.__data__.get(t);
      }
      function Lm(t) {
        return this.__data__.has(t);
      }
      function Fm(t, o) {
        var a = this.__data__;
        if (a instanceof sr) {
          var u = a.__data__;
          if (!Uo || u.length < s - 1)
            return u.push([t, o]), this.size = ++a.size, this;
          a = this.__data__ = new lr(u);
        }
        return a.set(t, o), this.size = a.size, this;
      }
      Bn.prototype.clear = Pm, Bn.prototype.delete = Mm, Bn.prototype.get = Rm, Bn.prototype.has = Lm, Bn.prototype.set = Fm;
      function Ic(t, o) {
        var a = xe(t), u = !a && Zr(t), p = !a && !u && Lr(t), y = !a && !u && !p && So(t), x = a || u || p || y, T = x ? ps(t.length, Vg) : [], P = T.length;
        for (var H in t)
          (o || Ve.call(t, H)) && !(x && (H == "length" || p && (H == "offset" || H == "parent") || y && (H == "buffer" || H == "byteLength" || H == "byteOffset") || dr(H, P))) && T.push(H);
        return T;
      }
      function $c(t) {
        var o = t.length;
        return o ? t[$s(0, o - 1)] : r;
      }
      function Bm(t, o) {
        return ua(Xt(t), Kr(o, 0, t.length));
      }
      function km(t) {
        return ua(Xt(t));
      }
      function _s(t, o, a) {
        (a !== r && !kn(t[o], a) || a === r && !(o in t)) && ur(t, o, a);
      }
      function jo(t, o, a) {
        var u = t[o];
        (!(Ve.call(t, o) && kn(u, a)) || a === r && !(o in t)) && ur(t, o, a);
      }
      function Zi(t, o) {
        for (var a = t.length; a--; )
          if (kn(t[a][0], o))
            return a;
        return -1;
      }
      function Nm(t, o, a, u) {
        return $r(t, function(p, y, x) {
          o(u, p, a(p), x);
        }), u;
      }
      function Pc(t, o) {
        return t && Yn(o, Ct(o), t);
      }
      function Dm(t, o) {
        return t && Yn(o, Qt(o), t);
      }
      function ur(t, o, a) {
        o == "__proto__" && Ui ? Ui(t, o, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[o] = a;
      }
      function ws(t, o) {
        for (var a = -1, u = o.length, p = F(u), y = t == null; ++a < u; )
          p[a] = y ? r : tl(t, o[a]);
        return p;
      }
      function Kr(t, o, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), o !== r && (t = t >= o ? t : o)), t;
      }
      function On(t, o, a, u, p, y) {
        var x, T = o & S, P = o & w, H = o & E;
        if (a && (x = p ? a(t, u, p, y) : a(t)), x !== r)
          return x;
        if (!it(t))
          return t;
        var q = xe(t);
        if (q) {
          if (x = C0(t), !T)
            return Xt(t, x);
        } else {
          var j = Bt(t), ee = j == ft || j == gn;
          if (Lr(t))
            return tf(t, T);
          if (j == dt || j == We || ee && !p) {
            if (x = P || ee ? {} : wf(t), !T)
              return P ? g0(t, Dm(x, t)) : v0(t, Pc(x, t));
          } else {
            if (!je[j])
              return p ? t : {};
            x = A0(t, j, T);
          }
        }
        y || (y = new Bn());
        var le = y.get(t);
        if (le)
          return le;
        y.set(t, x), Zf(t) ? t.forEach(function(me) {
          x.add(On(me, o, a, me, t, y));
        }) : jf(t) && t.forEach(function(me, Re) {
          x.set(Re, On(me, o, a, Re, t, y));
        });
        var ge = H ? P ? zs : Ws : P ? Qt : Ct, Ie = q ? r : ge(t);
        return Sn(Ie || t, function(me, Re) {
          Ie && (Re = me, me = t[Re]), jo(x, Re, On(me, o, a, Re, t, y));
        }), x;
      }
      function Wm(t) {
        var o = Ct(t);
        return function(a) {
          return Mc(a, t, o);
        };
      }
      function Mc(t, o, a) {
        var u = a.length;
        if (t == null)
          return !u;
        for (t = Ke(t); u--; ) {
          var p = a[u], y = o[p], x = t[p];
          if (x === r && !(p in t) || !y(x))
            return !1;
        }
        return !0;
      }
      function Rc(t, o, a) {
        if (typeof t != "function")
          throw new En(c);
        return ti(function() {
          t.apply(r, a);
        }, o);
      }
      function Yo(t, o, a, u) {
        var p = -1, y = Ri, x = !0, T = t.length, P = [], H = o.length;
        if (!T)
          return P;
        a && (o = tt(o, sn(a))), u ? (y = ss, x = !1) : o.length >= s && (y = Ho, x = !1, o = new Vr(o));
        e:
          for (; ++p < T; ) {
            var q = t[p], j = a == null ? q : a(q);
            if (q = u || q !== 0 ? q : 0, x && j === j) {
              for (var ee = H; ee--; )
                if (o[ee] === j)
                  continue e;
              P.push(q);
            } else
              y(o, j, u) || P.push(q);
          }
        return P;
      }
      var $r = sf(jn), Lc = sf(Es, !0);
      function zm(t, o) {
        var a = !0;
        return $r(t, function(u, p, y) {
          return a = !!o(u, p, y), a;
        }), a;
      }
      function Xi(t, o, a) {
        for (var u = -1, p = t.length; ++u < p; ) {
          var y = t[u], x = o(y);
          if (x != null && (T === r ? x === x && !un(x) : a(x, T)))
            var T = x, P = y;
        }
        return P;
      }
      function Hm(t, o, a, u) {
        var p = t.length;
        for (a = Ce(a), a < 0 && (a = -a > p ? 0 : p + a), u = u === r || u > p ? p : Ce(u), u < 0 && (u += p), u = a > u ? 0 : Jf(u); a < u; )
          t[a++] = o;
        return t;
      }
      function Fc(t, o) {
        var a = [];
        return $r(t, function(u, p, y) {
          o(u, p, y) && a.push(u);
        }), a;
      }
      function Pt(t, o, a, u, p) {
        var y = -1, x = t.length;
        for (a || (a = $0), p || (p = []); ++y < x; ) {
          var T = t[y];
          o > 0 && a(T) ? o > 1 ? Pt(T, o - 1, a, u, p) : Cr(p, T) : u || (p[p.length] = T);
        }
        return p;
      }
      var Ss = lf(), Bc = lf(!0);
      function jn(t, o) {
        return t && Ss(t, o, Ct);
      }
      function Es(t, o) {
        return t && Bc(t, o, Ct);
      }
      function Ji(t, o) {
        return Tr(o, function(a) {
          return pr(t[a]);
        });
      }
      function Gr(t, o) {
        o = Mr(o, t);
        for (var a = 0, u = o.length; t != null && a < u; )
          t = t[Zn(o[a++])];
        return a && a == u ? t : r;
      }
      function kc(t, o, a) {
        var u = o(t);
        return xe(t) ? u : Cr(u, a(t));
      }
      function Wt(t) {
        return t == null ? t === r ? K : mn : qr && qr in Ke(t) ? x0(t) : k0(t);
      }
      function xs(t, o) {
        return t > o;
      }
      function qm(t, o) {
        return t != null && Ve.call(t, o);
      }
      function Um(t, o) {
        return t != null && o in Ke(t);
      }
      function Vm(t, o, a) {
        return t >= Ft(o, a) && t < Et(o, a);
      }
      function Os(t, o, a) {
        for (var u = a ? ss : Ri, p = t[0].length, y = t.length, x = y, T = F(y), P = 1 / 0, H = []; x--; ) {
          var q = t[x];
          x && o && (q = tt(q, sn(o))), P = Ft(q.length, P), T[x] = !a && (o || p >= 120 && q.length >= 120) ? new Vr(x && q) : r;
        }
        q = t[0];
        var j = -1, ee = T[0];
        e:
          for (; ++j < p && H.length < P; ) {
            var le = q[j], ge = o ? o(le) : le;
            if (le = a || le !== 0 ? le : 0, !(ee ? Ho(ee, ge) : u(H, ge, a))) {
              for (x = y; --x; ) {
                var Ie = T[x];
                if (!(Ie ? Ho(Ie, ge) : u(t[x], ge, a)))
                  continue e;
              }
              ee && ee.push(ge), H.push(le);
            }
          }
        return H;
      }
      function Km(t, o, a, u) {
        return jn(t, function(p, y, x) {
          o(u, a(p), y, x);
        }), u;
      }
      function Zo(t, o, a) {
        o = Mr(o, t), t = Of(t, o);
        var u = t == null ? t : t[Zn(Cn(o))];
        return u == null ? r : an(u, t, a);
      }
      function Nc(t) {
        return st(t) && Wt(t) == We;
      }
      function Gm(t) {
        return st(t) && Wt(t) == et;
      }
      function jm(t) {
        return st(t) && Wt(t) == Ne;
      }
      function Xo(t, o, a, u, p) {
        return t === o ? !0 : t == null || o == null || !st(t) && !st(o) ? t !== t && o !== o : Ym(t, o, a, u, Xo, p);
      }
      function Ym(t, o, a, u, p, y) {
        var x = xe(t), T = xe(o), P = x ? rt : Bt(t), H = T ? rt : Bt(o);
        P = P == We ? dt : P, H = H == We ? dt : H;
        var q = P == dt, j = H == dt, ee = P == H;
        if (ee && Lr(t)) {
          if (!Lr(o))
            return !1;
          x = !0, q = !1;
        }
        if (ee && !q)
          return y || (y = new Bn()), x || So(t) ? bf(t, o, a, u, p, y) : S0(t, o, P, a, u, p, y);
        if (!(a & m)) {
          var le = q && Ve.call(t, "__wrapped__"), ge = j && Ve.call(o, "__wrapped__");
          if (le || ge) {
            var Ie = le ? t.value() : t, me = ge ? o.value() : o;
            return y || (y = new Bn()), p(Ie, me, a, u, y);
          }
        }
        return ee ? (y || (y = new Bn()), E0(t, o, a, u, p, y)) : !1;
      }
      function Zm(t) {
        return st(t) && Bt(t) == wt;
      }
      function Ts(t, o, a, u) {
        var p = a.length, y = p, x = !u;
        if (t == null)
          return !y;
        for (t = Ke(t); p--; ) {
          var T = a[p];
          if (x && T[2] ? T[1] !== t[T[0]] : !(T[0] in t))
            return !1;
        }
        for (; ++p < y; ) {
          T = a[p];
          var P = T[0], H = t[P], q = T[1];
          if (x && T[2]) {
            if (H === r && !(P in t))
              return !1;
          } else {
            var j = new Bn();
            if (u)
              var ee = u(H, q, P, t, o, j);
            if (!(ee === r ? Xo(q, H, m | _, u, j) : ee))
              return !1;
          }
        }
        return !0;
      }
      function Dc(t) {
        if (!it(t) || M0(t))
          return !1;
        var o = pr(t) ? Zg : Wv;
        return o.test(Yr(t));
      }
      function Xm(t) {
        return st(t) && Wt(t) == yt;
      }
      function Jm(t) {
        return st(t) && Bt(t) == ot;
      }
      function Qm(t) {
        return st(t) && va(t.length) && !!Xe[Wt(t)];
      }
      function Wc(t) {
        return typeof t == "function" ? t : t == null ? en : typeof t == "object" ? xe(t) ? qc(t[0], t[1]) : Hc(t) : ud(t);
      }
      function Cs(t) {
        if (!ei(t))
          return nm(t);
        var o = [];
        for (var a in Ke(t))
          Ve.call(t, a) && a != "constructor" && o.push(a);
        return o;
      }
      function e0(t) {
        if (!it(t))
          return B0(t);
        var o = ei(t), a = [];
        for (var u in t)
          u == "constructor" && (o || !Ve.call(t, u)) || a.push(u);
        return a;
      }
      function As(t, o) {
        return t < o;
      }
      function zc(t, o) {
        var a = -1, u = Jt(t) ? F(t.length) : [];
        return $r(t, function(p, y, x) {
          u[++a] = o(p, y, x);
        }), u;
      }
      function Hc(t) {
        var o = qs(t);
        return o.length == 1 && o[0][2] ? Ef(o[0][0], o[0][1]) : function(a) {
          return a === t || Ts(a, t, o);
        };
      }
      function qc(t, o) {
        return Vs(t) && Sf(o) ? Ef(Zn(t), o) : function(a) {
          var u = tl(a, t);
          return u === r && u === o ? nl(a, t) : Xo(o, u, m | _);
        };
      }
      function Qi(t, o, a, u, p) {
        t !== o && Ss(o, function(y, x) {
          if (p || (p = new Bn()), it(y))
            t0(t, o, x, a, Qi, u, p);
          else {
            var T = u ? u(Gs(t, x), y, x + "", t, o, p) : r;
            T === r && (T = y), _s(t, x, T);
          }
        }, Qt);
      }
      function t0(t, o, a, u, p, y, x) {
        var T = Gs(t, a), P = Gs(o, a), H = x.get(P);
        if (H) {
          _s(t, a, H);
          return;
        }
        var q = y ? y(T, P, a + "", t, o, x) : r, j = q === r;
        if (j) {
          var ee = xe(P), le = !ee && Lr(P), ge = !ee && !le && So(P);
          q = P, ee || le || ge ? xe(T) ? q = T : ht(T) ? q = Xt(T) : le ? (j = !1, q = tf(P, !0)) : ge ? (j = !1, q = nf(P, !0)) : q = [] : ni(P) || Zr(P) ? (q = T, Zr(T) ? q = Qf(T) : (!it(T) || pr(T)) && (q = wf(P))) : j = !1;
        }
        j && (x.set(P, q), p(q, P, u, y, x), x.delete(P)), _s(t, a, q);
      }
      function Uc(t, o) {
        var a = t.length;
        if (!!a)
          return o += o < 0 ? a : 0, dr(o, a) ? t[o] : r;
      }
      function Vc(t, o, a) {
        o.length ? o = tt(o, function(y) {
          return xe(y) ? function(x) {
            return Gr(x, y.length === 1 ? y[0] : y);
          } : y;
        }) : o = [en];
        var u = -1;
        o = tt(o, sn(de()));
        var p = zc(t, function(y, x, T) {
          var P = tt(o, function(H) {
            return H(y);
          });
          return { criteria: P, index: ++u, value: y };
        });
        return Ag(p, function(y, x) {
          return h0(y, x, a);
        });
      }
      function n0(t, o) {
        return Kc(t, o, function(a, u) {
          return nl(t, u);
        });
      }
      function Kc(t, o, a) {
        for (var u = -1, p = o.length, y = {}; ++u < p; ) {
          var x = o[u], T = Gr(t, x);
          a(T, x) && Jo(y, Mr(x, t), T);
        }
        return y;
      }
      function r0(t) {
        return function(o) {
          return Gr(o, t);
        };
      }
      function Is(t, o, a, u) {
        var p = u ? Cg : co, y = -1, x = o.length, T = t;
        for (t === o && (o = Xt(o)), a && (T = tt(t, sn(a))); ++y < x; )
          for (var P = 0, H = o[y], q = a ? a(H) : H; (P = p(T, q, P, u)) > -1; )
            T !== t && qi.call(T, P, 1), qi.call(t, P, 1);
        return t;
      }
      function Gc(t, o) {
        for (var a = t ? o.length : 0, u = a - 1; a--; ) {
          var p = o[a];
          if (a == u || p !== y) {
            var y = p;
            dr(p) ? qi.call(t, p, 1) : Rs(t, p);
          }
        }
        return t;
      }
      function $s(t, o) {
        return t + Ki(Cc() * (o - t + 1));
      }
      function o0(t, o, a, u) {
        for (var p = -1, y = Et(Vi((o - t) / (a || 1)), 0), x = F(y); y--; )
          x[u ? y : ++p] = t, t += a;
        return x;
      }
      function Ps(t, o) {
        var a = "";
        if (!t || o < 1 || o > he)
          return a;
        do
          o % 2 && (a += t), o = Ki(o / 2), o && (t += t);
        while (o);
        return a;
      }
      function Pe(t, o) {
        return js(xf(t, o, en), t + "");
      }
      function i0(t) {
        return $c(Eo(t));
      }
      function a0(t, o) {
        var a = Eo(t);
        return ua(a, Kr(o, 0, a.length));
      }
      function Jo(t, o, a, u) {
        if (!it(t))
          return t;
        o = Mr(o, t);
        for (var p = -1, y = o.length, x = y - 1, T = t; T != null && ++p < y; ) {
          var P = Zn(o[p]), H = a;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return t;
          if (p != x) {
            var q = T[P];
            H = u ? u(q, P, T) : r, H === r && (H = it(q) ? q : dr(o[p + 1]) ? [] : {});
          }
          jo(T, P, H), T = T[P];
        }
        return t;
      }
      var jc = Gi ? function(t, o) {
        return Gi.set(t, o), t;
      } : en, s0 = Ui ? function(t, o) {
        return Ui(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ol(o),
          writable: !0
        });
      } : en;
      function l0(t) {
        return ua(Eo(t));
      }
      function Tn(t, o, a) {
        var u = -1, p = t.length;
        o < 0 && (o = -o > p ? 0 : p + o), a = a > p ? p : a, a < 0 && (a += p), p = o > a ? 0 : a - o >>> 0, o >>>= 0;
        for (var y = F(p); ++u < p; )
          y[u] = t[u + o];
        return y;
      }
      function u0(t, o) {
        var a;
        return $r(t, function(u, p, y) {
          return a = o(u, p, y), !a;
        }), !!a;
      }
      function ea(t, o, a) {
        var u = 0, p = t == null ? u : t.length;
        if (typeof o == "number" && o === o && p <= Qe) {
          for (; u < p; ) {
            var y = u + p >>> 1, x = t[y];
            x !== null && !un(x) && (a ? x <= o : x < o) ? u = y + 1 : p = y;
          }
          return p;
        }
        return Ms(t, o, en, a);
      }
      function Ms(t, o, a, u) {
        var p = 0, y = t == null ? 0 : t.length;
        if (y === 0)
          return 0;
        o = a(o);
        for (var x = o !== o, T = o === null, P = un(o), H = o === r; p < y; ) {
          var q = Ki((p + y) / 2), j = a(t[q]), ee = j !== r, le = j === null, ge = j === j, Ie = un(j);
          if (x)
            var me = u || ge;
          else
            H ? me = ge && (u || ee) : T ? me = ge && ee && (u || !le) : P ? me = ge && ee && !le && (u || !Ie) : le || Ie ? me = !1 : me = u ? j <= o : j < o;
          me ? p = q + 1 : y = q;
        }
        return Ft(y, at);
      }
      function Yc(t, o) {
        for (var a = -1, u = t.length, p = 0, y = []; ++a < u; ) {
          var x = t[a], T = o ? o(x) : x;
          if (!a || !kn(T, P)) {
            var P = T;
            y[p++] = x === 0 ? 0 : x;
          }
        }
        return y;
      }
      function Zc(t) {
        return typeof t == "number" ? t : un(t) ? ye : +t;
      }
      function ln(t) {
        if (typeof t == "string")
          return t;
        if (xe(t))
          return tt(t, ln) + "";
        if (un(t))
          return Ac ? Ac.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -re ? "-0" : o;
      }
      function Pr(t, o, a) {
        var u = -1, p = Ri, y = t.length, x = !0, T = [], P = T;
        if (a)
          x = !1, p = ss;
        else if (y >= s) {
          var H = o ? null : _0(t);
          if (H)
            return Fi(H);
          x = !1, p = Ho, P = new Vr();
        } else
          P = o ? [] : T;
        e:
          for (; ++u < y; ) {
            var q = t[u], j = o ? o(q) : q;
            if (q = a || q !== 0 ? q : 0, x && j === j) {
              for (var ee = P.length; ee--; )
                if (P[ee] === j)
                  continue e;
              o && P.push(j), T.push(q);
            } else
              p(P, j, a) || (P !== T && P.push(j), T.push(q));
          }
        return T;
      }
      function Rs(t, o) {
        return o = Mr(o, t), t = Of(t, o), t == null || delete t[Zn(Cn(o))];
      }
      function Xc(t, o, a, u) {
        return Jo(t, o, a(Gr(t, o)), u);
      }
      function ta(t, o, a, u) {
        for (var p = t.length, y = u ? p : -1; (u ? y-- : ++y < p) && o(t[y], y, t); )
          ;
        return a ? Tn(t, u ? 0 : y, u ? y + 1 : p) : Tn(t, u ? y + 1 : 0, u ? p : y);
      }
      function Jc(t, o) {
        var a = t;
        return a instanceof Le && (a = a.value()), ls(o, function(u, p) {
          return p.func.apply(p.thisArg, Cr([u], p.args));
        }, a);
      }
      function Ls(t, o, a) {
        var u = t.length;
        if (u < 2)
          return u ? Pr(t[0]) : [];
        for (var p = -1, y = F(u); ++p < u; )
          for (var x = t[p], T = -1; ++T < u; )
            T != p && (y[p] = Yo(y[p] || x, t[T], o, a));
        return Pr(Pt(y, 1), o, a);
      }
      function Qc(t, o, a) {
        for (var u = -1, p = t.length, y = o.length, x = {}; ++u < p; ) {
          var T = u < y ? o[u] : r;
          a(x, t[u], T);
        }
        return x;
      }
      function Fs(t) {
        return ht(t) ? t : [];
      }
      function Bs(t) {
        return typeof t == "function" ? t : en;
      }
      function Mr(t, o) {
        return xe(t) ? t : Vs(t, o) ? [t] : If(He(t));
      }
      var c0 = Pe;
      function Rr(t, o, a) {
        var u = t.length;
        return a = a === r ? u : a, !o && a >= u ? t : Tn(t, o, a);
      }
      var ef = Xg || function(t) {
        return $t.clearTimeout(t);
      };
      function tf(t, o) {
        if (o)
          return t.slice();
        var a = t.length, u = Sc ? Sc(a) : new t.constructor(a);
        return t.copy(u), u;
      }
      function ks(t) {
        var o = new t.constructor(t.byteLength);
        return new zi(o).set(new zi(t)), o;
      }
      function f0(t, o) {
        var a = o ? ks(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function d0(t) {
        var o = new t.constructor(t.source, Nu.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function p0(t) {
        return Go ? Ke(Go.call(t)) : {};
      }
      function nf(t, o) {
        var a = o ? ks(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function rf(t, o) {
        if (t !== o) {
          var a = t !== r, u = t === null, p = t === t, y = un(t), x = o !== r, T = o === null, P = o === o, H = un(o);
          if (!T && !H && !y && t > o || y && x && P && !T && !H || u && x && P || !a && P || !p)
            return 1;
          if (!u && !y && !H && t < o || H && a && p && !u && !y || T && a && p || !x && p || !P)
            return -1;
        }
        return 0;
      }
      function h0(t, o, a) {
        for (var u = -1, p = t.criteria, y = o.criteria, x = p.length, T = a.length; ++u < x; ) {
          var P = rf(p[u], y[u]);
          if (P) {
            if (u >= T)
              return P;
            var H = a[u];
            return P * (H == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function of(t, o, a, u) {
        for (var p = -1, y = t.length, x = a.length, T = -1, P = o.length, H = Et(y - x, 0), q = F(P + H), j = !u; ++T < P; )
          q[T] = o[T];
        for (; ++p < x; )
          (j || p < y) && (q[a[p]] = t[p]);
        for (; H--; )
          q[T++] = t[p++];
        return q;
      }
      function af(t, o, a, u) {
        for (var p = -1, y = t.length, x = -1, T = a.length, P = -1, H = o.length, q = Et(y - T, 0), j = F(q + H), ee = !u; ++p < q; )
          j[p] = t[p];
        for (var le = p; ++P < H; )
          j[le + P] = o[P];
        for (; ++x < T; )
          (ee || p < y) && (j[le + a[x]] = t[p++]);
        return j;
      }
      function Xt(t, o) {
        var a = -1, u = t.length;
        for (o || (o = F(u)); ++a < u; )
          o[a] = t[a];
        return o;
      }
      function Yn(t, o, a, u) {
        var p = !a;
        a || (a = {});
        for (var y = -1, x = o.length; ++y < x; ) {
          var T = o[y], P = u ? u(a[T], t[T], T, a, t) : r;
          P === r && (P = t[T]), p ? ur(a, T, P) : jo(a, T, P);
        }
        return a;
      }
      function v0(t, o) {
        return Yn(t, Us(t), o);
      }
      function g0(t, o) {
        return Yn(t, yf(t), o);
      }
      function na(t, o) {
        return function(a, u) {
          var p = xe(a) ? wg : Nm, y = o ? o() : {};
          return p(a, t, de(u, 2), y);
        };
      }
      function yo(t) {
        return Pe(function(o, a) {
          var u = -1, p = a.length, y = p > 1 ? a[p - 1] : r, x = p > 2 ? a[2] : r;
          for (y = t.length > 3 && typeof y == "function" ? (p--, y) : r, x && zt(a[0], a[1], x) && (y = p < 3 ? r : y, p = 1), o = Ke(o); ++u < p; ) {
            var T = a[u];
            T && t(o, T, u, y);
          }
          return o;
        });
      }
      function sf(t, o) {
        return function(a, u) {
          if (a == null)
            return a;
          if (!Jt(a))
            return t(a, u);
          for (var p = a.length, y = o ? p : -1, x = Ke(a); (o ? y-- : ++y < p) && u(x[y], y, x) !== !1; )
            ;
          return a;
        };
      }
      function lf(t) {
        return function(o, a, u) {
          for (var p = -1, y = Ke(o), x = u(o), T = x.length; T--; ) {
            var P = x[t ? T : ++p];
            if (a(y[P], P, y) === !1)
              break;
          }
          return o;
        };
      }
      function m0(t, o, a) {
        var u = o & O, p = Qo(t);
        function y() {
          var x = this && this !== $t && this instanceof y ? p : t;
          return x.apply(u ? a : this, arguments);
        }
        return y;
      }
      function uf(t) {
        return function(o) {
          o = He(o);
          var a = fo(o) ? Fn(o) : r, u = a ? a[0] : o.charAt(0), p = a ? Rr(a, 1).join("") : o.slice(1);
          return u[t]() + p;
        };
      }
      function _o(t) {
        return function(o) {
          return ls(sd(ad(o).replace(sg, "")), t, "");
        };
      }
      function Qo(t) {
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
          var a = bo(t.prototype), u = t.apply(a, o);
          return it(u) ? u : a;
        };
      }
      function b0(t, o, a) {
        var u = Qo(t);
        function p() {
          for (var y = arguments.length, x = F(y), T = y, P = wo(p); T--; )
            x[T] = arguments[T];
          var H = y < 3 && x[0] !== P && x[y - 1] !== P ? [] : Ar(x, P);
          if (y -= H.length, y < a)
            return hf(
              t,
              o,
              ra,
              p.placeholder,
              r,
              x,
              H,
              r,
              r,
              a - y
            );
          var q = this && this !== $t && this instanceof p ? u : t;
          return an(q, this, x);
        }
        return p;
      }
      function cf(t) {
        return function(o, a, u) {
          var p = Ke(o);
          if (!Jt(o)) {
            var y = de(a, 3);
            o = Ct(o), a = function(T) {
              return y(p[T], T, p);
            };
          }
          var x = t(o, a, u);
          return x > -1 ? p[y ? o[x] : x] : r;
        };
      }
      function ff(t) {
        return fr(function(o) {
          var a = o.length, u = a, p = xn.prototype.thru;
          for (t && o.reverse(); u--; ) {
            var y = o[u];
            if (typeof y != "function")
              throw new En(c);
            if (p && !x && sa(y) == "wrapper")
              var x = new xn([], !0);
          }
          for (u = x ? u : a; ++u < a; ) {
            y = o[u];
            var T = sa(y), P = T == "wrapper" ? Hs(y) : r;
            P && Ks(P[0]) && P[1] == ($ | M | R | z) && !P[4].length && P[9] == 1 ? x = x[sa(P[0])].apply(x, P[3]) : x = y.length == 1 && Ks(y) ? x[T]() : x.thru(y);
          }
          return function() {
            var H = arguments, q = H[0];
            if (x && H.length == 1 && xe(q))
              return x.plant(q).value();
            for (var j = 0, ee = a ? o[j].apply(this, H) : q; ++j < a; )
              ee = o[j].call(this, ee);
            return ee;
          };
        });
      }
      function ra(t, o, a, u, p, y, x, T, P, H) {
        var q = o & $, j = o & O, ee = o & C, le = o & (M | k), ge = o & Y, Ie = ee ? r : Qo(t);
        function me() {
          for (var Re = arguments.length, ke = F(Re), cn = Re; cn--; )
            ke[cn] = arguments[cn];
          if (le)
            var Ht = wo(me), fn = $g(ke, Ht);
          if (u && (ke = of(ke, u, p, le)), y && (ke = af(ke, y, x, le)), Re -= fn, le && Re < H) {
            var vt = Ar(ke, Ht);
            return hf(
              t,
              o,
              ra,
              me.placeholder,
              a,
              ke,
              vt,
              T,
              P,
              H - Re
            );
          }
          var Nn = j ? a : this, vr = ee ? Nn[t] : t;
          return Re = ke.length, T ? ke = N0(ke, T) : ge && Re > 1 && ke.reverse(), q && P < Re && (ke.length = P), this && this !== $t && this instanceof me && (vr = Ie || Qo(vr)), vr.apply(Nn, ke);
        }
        return me;
      }
      function df(t, o) {
        return function(a, u) {
          return Km(a, t, o(u), {});
        };
      }
      function oa(t, o) {
        return function(a, u) {
          var p;
          if (a === r && u === r)
            return o;
          if (a !== r && (p = a), u !== r) {
            if (p === r)
              return u;
            typeof a == "string" || typeof u == "string" ? (a = ln(a), u = ln(u)) : (a = Zc(a), u = Zc(u)), p = t(a, u);
          }
          return p;
        };
      }
      function Ns(t) {
        return fr(function(o) {
          return o = tt(o, sn(de())), Pe(function(a) {
            var u = this;
            return t(o, function(p) {
              return an(p, u, a);
            });
          });
        });
      }
      function ia(t, o) {
        o = o === r ? " " : ln(o);
        var a = o.length;
        if (a < 2)
          return a ? Ps(o, t) : o;
        var u = Ps(o, Vi(t / po(o)));
        return fo(o) ? Rr(Fn(u), 0, t).join("") : u.slice(0, t);
      }
      function y0(t, o, a, u) {
        var p = o & O, y = Qo(t);
        function x() {
          for (var T = -1, P = arguments.length, H = -1, q = u.length, j = F(q + P), ee = this && this !== $t && this instanceof x ? y : t; ++H < q; )
            j[H] = u[H];
          for (; P--; )
            j[H++] = arguments[++T];
          return an(ee, p ? a : this, j);
        }
        return x;
      }
      function pf(t) {
        return function(o, a, u) {
          return u && typeof u != "number" && zt(o, a, u) && (a = u = r), o = hr(o), a === r ? (a = o, o = 0) : a = hr(a), u = u === r ? o < a ? 1 : -1 : hr(u), o0(o, a, u, t);
        };
      }
      function aa(t) {
        return function(o, a) {
          return typeof o == "string" && typeof a == "string" || (o = An(o), a = An(a)), t(o, a);
        };
      }
      function hf(t, o, a, u, p, y, x, T, P, H) {
        var q = o & M, j = q ? x : r, ee = q ? r : x, le = q ? y : r, ge = q ? r : y;
        o |= q ? R : A, o &= ~(q ? A : R), o & N || (o &= ~(O | C));
        var Ie = [
          t,
          o,
          p,
          le,
          j,
          ge,
          ee,
          T,
          P,
          H
        ], me = a.apply(r, Ie);
        return Ks(t) && Tf(me, Ie), me.placeholder = u, Cf(me, t, o);
      }
      function Ds(t) {
        var o = St[t];
        return function(a, u) {
          if (a = An(a), u = u == null ? 0 : Ft(Ce(u), 292), u && Tc(a)) {
            var p = (He(a) + "e").split("e"), y = o(p[0] + "e" + (+p[1] + u));
            return p = (He(y) + "e").split("e"), +(p[0] + "e" + (+p[1] - u));
          }
          return o(a);
        };
      }
      var _0 = go && 1 / Fi(new go([, -0]))[1] == re ? function(t) {
        return new go(t);
      } : sl;
      function vf(t) {
        return function(o) {
          var a = Bt(o);
          return a == wt ? vs(o) : a == ot ? kg(o) : Ig(o, t(o));
        };
      }
      function cr(t, o, a, u, p, y, x, T) {
        var P = o & C;
        if (!P && typeof t != "function")
          throw new En(c);
        var H = u ? u.length : 0;
        if (H || (o &= ~(R | A), u = p = r), x = x === r ? x : Et(Ce(x), 0), T = T === r ? T : Ce(T), H -= p ? p.length : 0, o & A) {
          var q = u, j = p;
          u = p = r;
        }
        var ee = P ? r : Hs(t), le = [
          t,
          o,
          a,
          u,
          p,
          q,
          j,
          y,
          x,
          T
        ];
        if (ee && F0(le, ee), t = le[0], o = le[1], a = le[2], u = le[3], p = le[4], T = le[9] = le[9] === r ? P ? 0 : t.length : Et(le[9] - H, 0), !T && o & (M | k) && (o &= ~(M | k)), !o || o == O)
          var ge = m0(t, o, a);
        else
          o == M || o == k ? ge = b0(t, o, T) : (o == R || o == (O | R)) && !p.length ? ge = y0(t, o, a, u) : ge = ra.apply(r, le);
        var Ie = ee ? jc : Tf;
        return Cf(Ie(ge, le), t, o);
      }
      function gf(t, o, a, u) {
        return t === r || kn(t, vo[a]) && !Ve.call(u, a) ? o : t;
      }
      function mf(t, o, a, u, p, y) {
        return it(t) && it(o) && (y.set(o, t), Qi(t, o, r, mf, y), y.delete(o)), t;
      }
      function w0(t) {
        return ni(t) ? r : t;
      }
      function bf(t, o, a, u, p, y) {
        var x = a & m, T = t.length, P = o.length;
        if (T != P && !(x && P > T))
          return !1;
        var H = y.get(t), q = y.get(o);
        if (H && q)
          return H == o && q == t;
        var j = -1, ee = !0, le = a & _ ? new Vr() : r;
        for (y.set(t, o), y.set(o, t); ++j < T; ) {
          var ge = t[j], Ie = o[j];
          if (u)
            var me = x ? u(Ie, ge, j, o, t, y) : u(ge, Ie, j, t, o, y);
          if (me !== r) {
            if (me)
              continue;
            ee = !1;
            break;
          }
          if (le) {
            if (!us(o, function(Re, ke) {
              if (!Ho(le, ke) && (ge === Re || p(ge, Re, a, u, y)))
                return le.push(ke);
            })) {
              ee = !1;
              break;
            }
          } else if (!(ge === Ie || p(ge, Ie, a, u, y))) {
            ee = !1;
            break;
          }
        }
        return y.delete(t), y.delete(o), ee;
      }
      function S0(t, o, a, u, p, y, x) {
        switch (a) {
          case Lt:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case et:
            return !(t.byteLength != o.byteLength || !y(new zi(t), new zi(o)));
          case be:
          case Ne:
          case Gt:
            return kn(+t, +o);
          case _t:
            return t.name == o.name && t.message == o.message;
          case yt:
          case jt:
            return t == o + "";
          case wt:
            var T = vs;
          case ot:
            var P = u & m;
            if (T || (T = Fi), t.size != o.size && !P)
              return !1;
            var H = x.get(t);
            if (H)
              return H == o;
            u |= _, x.set(t, o);
            var q = bf(T(t), T(o), u, p, y, x);
            return x.delete(t), q;
          case Yt:
            if (Go)
              return Go.call(t) == Go.call(o);
        }
        return !1;
      }
      function E0(t, o, a, u, p, y) {
        var x = a & m, T = Ws(t), P = T.length, H = Ws(o), q = H.length;
        if (P != q && !x)
          return !1;
        for (var j = P; j--; ) {
          var ee = T[j];
          if (!(x ? ee in o : Ve.call(o, ee)))
            return !1;
        }
        var le = y.get(t), ge = y.get(o);
        if (le && ge)
          return le == o && ge == t;
        var Ie = !0;
        y.set(t, o), y.set(o, t);
        for (var me = x; ++j < P; ) {
          ee = T[j];
          var Re = t[ee], ke = o[ee];
          if (u)
            var cn = x ? u(ke, Re, ee, o, t, y) : u(Re, ke, ee, t, o, y);
          if (!(cn === r ? Re === ke || p(Re, ke, a, u, y) : cn)) {
            Ie = !1;
            break;
          }
          me || (me = ee == "constructor");
        }
        if (Ie && !me) {
          var Ht = t.constructor, fn = o.constructor;
          Ht != fn && "constructor" in t && "constructor" in o && !(typeof Ht == "function" && Ht instanceof Ht && typeof fn == "function" && fn instanceof fn) && (Ie = !1);
        }
        return y.delete(t), y.delete(o), Ie;
      }
      function fr(t) {
        return js(xf(t, r, Rf), t + "");
      }
      function Ws(t) {
        return kc(t, Ct, Us);
      }
      function zs(t) {
        return kc(t, Qt, yf);
      }
      var Hs = Gi ? function(t) {
        return Gi.get(t);
      } : sl;
      function sa(t) {
        for (var o = t.name + "", a = mo[o], u = Ve.call(mo, o) ? a.length : 0; u--; ) {
          var p = a[u], y = p.func;
          if (y == null || y == t)
            return p.name;
        }
        return o;
      }
      function wo(t) {
        var o = Ve.call(g, "placeholder") ? g : t;
        return o.placeholder;
      }
      function de() {
        var t = g.iteratee || il;
        return t = t === il ? Wc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function la(t, o) {
        var a = t.__data__;
        return P0(o) ? a[typeof o == "string" ? "string" : "hash"] : a.map;
      }
      function qs(t) {
        for (var o = Ct(t), a = o.length; a--; ) {
          var u = o[a], p = t[u];
          o[a] = [u, p, Sf(p)];
        }
        return o;
      }
      function jr(t, o) {
        var a = Lg(t, o);
        return Dc(a) ? a : r;
      }
      function x0(t) {
        var o = Ve.call(t, qr), a = t[qr];
        try {
          t[qr] = r;
          var u = !0;
        } catch {
        }
        var p = Di.call(t);
        return u && (o ? t[qr] = a : delete t[qr]), p;
      }
      var Us = ms ? function(t) {
        return t == null ? [] : (t = Ke(t), Tr(ms(t), function(o) {
          return xc.call(t, o);
        }));
      } : ll, yf = ms ? function(t) {
        for (var o = []; t; )
          Cr(o, Us(t)), t = Hi(t);
        return o;
      } : ll, Bt = Wt;
      (bs && Bt(new bs(new ArrayBuffer(1))) != Lt || Uo && Bt(new Uo()) != wt || ys && Bt(ys.resolve()) != bn || go && Bt(new go()) != ot || Vo && Bt(new Vo()) != Se) && (Bt = function(t) {
        var o = Wt(t), a = o == dt ? t.constructor : r, u = a ? Yr(a) : "";
        if (u)
          switch (u) {
            case am:
              return Lt;
            case sm:
              return wt;
            case lm:
              return bn;
            case um:
              return ot;
            case cm:
              return Se;
          }
        return o;
      });
      function O0(t, o, a) {
        for (var u = -1, p = a.length; ++u < p; ) {
          var y = a[u], x = y.size;
          switch (y.type) {
            case "drop":
              t += x;
              break;
            case "dropRight":
              o -= x;
              break;
            case "take":
              o = Ft(o, t + x);
              break;
            case "takeRight":
              t = Et(t, o - x);
              break;
          }
        }
        return { start: t, end: o };
      }
      function T0(t) {
        var o = t.match(Mv);
        return o ? o[1].split(Rv) : [];
      }
      function _f(t, o, a) {
        o = Mr(o, t);
        for (var u = -1, p = o.length, y = !1; ++u < p; ) {
          var x = Zn(o[u]);
          if (!(y = t != null && a(t, x)))
            break;
          t = t[x];
        }
        return y || ++u != p ? y : (p = t == null ? 0 : t.length, !!p && va(p) && dr(x, p) && (xe(t) || Zr(t)));
      }
      function C0(t) {
        var o = t.length, a = new t.constructor(o);
        return o && typeof t[0] == "string" && Ve.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function wf(t) {
        return typeof t.constructor == "function" && !ei(t) ? bo(Hi(t)) : {};
      }
      function A0(t, o, a) {
        var u = t.constructor;
        switch (o) {
          case et:
            return ks(t);
          case be:
          case Ne:
            return new u(+t);
          case Lt:
            return f0(t, a);
          case Gn:
          case B:
          case J:
          case ve:
          case Ae:
          case pt:
          case yn:
          case _n:
          case on:
            return nf(t, a);
          case wt:
            return new u();
          case Gt:
          case jt:
            return new u(t);
          case yt:
            return d0(t);
          case ot:
            return new u();
          case Yt:
            return p0(t);
        }
      }
      function I0(t, o) {
        var a = o.length;
        if (!a)
          return t;
        var u = a - 1;
        return o[u] = (a > 1 ? "& " : "") + o[u], o = o.join(a > 2 ? ", " : " "), t.replace(Pv, `{
/* [wrapped with ` + o + `] */
`);
      }
      function $0(t) {
        return xe(t) || Zr(t) || !!(Oc && t && t[Oc]);
      }
      function dr(t, o) {
        var a = typeof t;
        return o = o == null ? he : o, !!o && (a == "number" || a != "symbol" && Hv.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function zt(t, o, a) {
        if (!it(a))
          return !1;
        var u = typeof o;
        return (u == "number" ? Jt(a) && dr(o, a.length) : u == "string" && o in a) ? kn(a[o], t) : !1;
      }
      function Vs(t, o) {
        if (xe(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || un(t) ? !0 : Cv.test(t) || !Tv.test(t) || o != null && t in Ke(o);
      }
      function P0(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ks(t) {
        var o = sa(t), a = g[o];
        if (typeof a != "function" || !(o in Le.prototype))
          return !1;
        if (t === a)
          return !0;
        var u = Hs(a);
        return !!u && t === u[0];
      }
      function M0(t) {
        return !!wc && wc in t;
      }
      var R0 = ki ? pr : ul;
      function ei(t) {
        var o = t && t.constructor, a = typeof o == "function" && o.prototype || vo;
        return t === a;
      }
      function Sf(t) {
        return t === t && !it(t);
      }
      function Ef(t, o) {
        return function(a) {
          return a == null ? !1 : a[t] === o && (o !== r || t in Ke(a));
        };
      }
      function L0(t) {
        var o = pa(t, function(u) {
          return a.size === h && a.clear(), u;
        }), a = o.cache;
        return o;
      }
      function F0(t, o) {
        var a = t[1], u = o[1], p = a | u, y = p < (O | C | $), x = u == $ && a == M || u == $ && a == z && t[7].length <= o[8] || u == ($ | z) && o[7].length <= o[8] && a == M;
        if (!(y || x))
          return t;
        u & O && (t[2] = o[2], p |= a & O ? 0 : N);
        var T = o[3];
        if (T) {
          var P = t[3];
          t[3] = P ? of(P, T, o[4]) : T, t[4] = P ? Ar(t[3], v) : o[4];
        }
        return T = o[5], T && (P = t[5], t[5] = P ? af(P, T, o[6]) : T, t[6] = P ? Ar(t[5], v) : o[6]), T = o[7], T && (t[7] = T), u & $ && (t[8] = t[8] == null ? o[8] : Ft(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = p, t;
      }
      function B0(t) {
        var o = [];
        if (t != null)
          for (var a in Ke(t))
            o.push(a);
        return o;
      }
      function k0(t) {
        return Di.call(t);
      }
      function xf(t, o, a) {
        return o = Et(o === r ? t.length - 1 : o, 0), function() {
          for (var u = arguments, p = -1, y = Et(u.length - o, 0), x = F(y); ++p < y; )
            x[p] = u[o + p];
          p = -1;
          for (var T = F(o + 1); ++p < o; )
            T[p] = u[p];
          return T[o] = a(x), an(t, this, T);
        };
      }
      function Of(t, o) {
        return o.length < 2 ? t : Gr(t, Tn(o, 0, -1));
      }
      function N0(t, o) {
        for (var a = t.length, u = Ft(o.length, a), p = Xt(t); u--; ) {
          var y = o[u];
          t[u] = dr(y, a) ? p[y] : r;
        }
        return t;
      }
      function Gs(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var Tf = Af(jc), ti = Qg || function(t, o) {
        return $t.setTimeout(t, o);
      }, js = Af(s0);
      function Cf(t, o, a) {
        var u = o + "";
        return js(t, I0(u, D0(T0(u), a)));
      }
      function Af(t) {
        var o = 0, a = 0;
        return function() {
          var u = rm(), p = U - (u - a);
          if (a = u, p > 0) {
            if (++o >= G)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function ua(t, o) {
        var a = -1, u = t.length, p = u - 1;
        for (o = o === r ? u : o; ++a < o; ) {
          var y = $s(a, p), x = t[y];
          t[y] = t[a], t[a] = x;
        }
        return t.length = o, t;
      }
      var If = L0(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(Av, function(a, u, p, y) {
          o.push(p ? y.replace(Bv, "$1") : u || a);
        }), o;
      });
      function Zn(t) {
        if (typeof t == "string" || un(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -re ? "-0" : o;
      }
      function Yr(t) {
        if (t != null) {
          try {
            return Ni.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function D0(t, o) {
        return Sn(ct, function(a) {
          var u = "_." + a[0];
          o & a[1] && !Ri(t, u) && t.push(u);
        }), t.sort();
      }
      function $f(t) {
        if (t instanceof Le)
          return t.clone();
        var o = new xn(t.__wrapped__, t.__chain__);
        return o.__actions__ = Xt(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function W0(t, o, a) {
        (a ? zt(t, o, a) : o === r) ? o = 1 : o = Et(Ce(o), 0);
        var u = t == null ? 0 : t.length;
        if (!u || o < 1)
          return [];
        for (var p = 0, y = 0, x = F(Vi(u / o)); p < u; )
          x[y++] = Tn(t, p, p += o);
        return x;
      }
      function z0(t) {
        for (var o = -1, a = t == null ? 0 : t.length, u = 0, p = []; ++o < a; ) {
          var y = t[o];
          y && (p[u++] = y);
        }
        return p;
      }
      function H0() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = F(t - 1), a = arguments[0], u = t; u--; )
          o[u - 1] = arguments[u];
        return Cr(xe(a) ? Xt(a) : [a], Pt(o, 1));
      }
      var q0 = Pe(function(t, o) {
        return ht(t) ? Yo(t, Pt(o, 1, ht, !0)) : [];
      }), U0 = Pe(function(t, o) {
        var a = Cn(o);
        return ht(a) && (a = r), ht(t) ? Yo(t, Pt(o, 1, ht, !0), de(a, 2)) : [];
      }), V0 = Pe(function(t, o) {
        var a = Cn(o);
        return ht(a) && (a = r), ht(t) ? Yo(t, Pt(o, 1, ht, !0), r, a) : [];
      });
      function K0(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ce(o), Tn(t, o < 0 ? 0 : o, u)) : [];
      }
      function G0(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ce(o), o = u - o, Tn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function j0(t, o) {
        return t && t.length ? ta(t, de(o, 3), !0, !0) : [];
      }
      function Y0(t, o) {
        return t && t.length ? ta(t, de(o, 3), !0) : [];
      }
      function Z0(t, o, a, u) {
        var p = t == null ? 0 : t.length;
        return p ? (a && typeof a != "number" && zt(t, o, a) && (a = 0, u = p), Hm(t, o, a, u)) : [];
      }
      function Pf(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = a == null ? 0 : Ce(a);
        return p < 0 && (p = Et(u + p, 0)), Li(t, de(o, 3), p);
      }
      function Mf(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = u - 1;
        return a !== r && (p = Ce(a), p = a < 0 ? Et(u + p, 0) : Ft(p, u - 1)), Li(t, de(o, 3), p, !0);
      }
      function Rf(t) {
        var o = t == null ? 0 : t.length;
        return o ? Pt(t, 1) : [];
      }
      function X0(t) {
        var o = t == null ? 0 : t.length;
        return o ? Pt(t, re) : [];
      }
      function J0(t, o) {
        var a = t == null ? 0 : t.length;
        return a ? (o = o === r ? 1 : Ce(o), Pt(t, o)) : [];
      }
      function Q0(t) {
        for (var o = -1, a = t == null ? 0 : t.length, u = {}; ++o < a; ) {
          var p = t[o];
          u[p[0]] = p[1];
        }
        return u;
      }
      function Lf(t) {
        return t && t.length ? t[0] : r;
      }
      function eb(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = a == null ? 0 : Ce(a);
        return p < 0 && (p = Et(u + p, 0)), co(t, o, p);
      }
      function tb(t) {
        var o = t == null ? 0 : t.length;
        return o ? Tn(t, 0, -1) : [];
      }
      var nb = Pe(function(t) {
        var o = tt(t, Fs);
        return o.length && o[0] === t[0] ? Os(o) : [];
      }), rb = Pe(function(t) {
        var o = Cn(t), a = tt(t, Fs);
        return o === Cn(a) ? o = r : a.pop(), a.length && a[0] === t[0] ? Os(a, de(o, 2)) : [];
      }), ob = Pe(function(t) {
        var o = Cn(t), a = tt(t, Fs);
        return o = typeof o == "function" ? o : r, o && a.pop(), a.length && a[0] === t[0] ? Os(a, r, o) : [];
      });
      function ib(t, o) {
        return t == null ? "" : tm.call(t, o);
      }
      function Cn(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function ab(t, o, a) {
        var u = t == null ? 0 : t.length;
        if (!u)
          return -1;
        var p = u;
        return a !== r && (p = Ce(a), p = p < 0 ? Et(u + p, 0) : Ft(p, u - 1)), o === o ? Dg(t, o, p) : Li(t, pc, p, !0);
      }
      function sb(t, o) {
        return t && t.length ? Uc(t, Ce(o)) : r;
      }
      var lb = Pe(Ff);
      function Ff(t, o) {
        return t && t.length && o && o.length ? Is(t, o) : t;
      }
      function ub(t, o, a) {
        return t && t.length && o && o.length ? Is(t, o, de(a, 2)) : t;
      }
      function cb(t, o, a) {
        return t && t.length && o && o.length ? Is(t, o, r, a) : t;
      }
      var fb = fr(function(t, o) {
        var a = t == null ? 0 : t.length, u = ws(t, o);
        return Gc(t, tt(o, function(p) {
          return dr(p, a) ? +p : p;
        }).sort(rf)), u;
      });
      function db(t, o) {
        var a = [];
        if (!(t && t.length))
          return a;
        var u = -1, p = [], y = t.length;
        for (o = de(o, 3); ++u < y; ) {
          var x = t[u];
          o(x, u, t) && (a.push(x), p.push(u));
        }
        return Gc(t, p), a;
      }
      function Ys(t) {
        return t == null ? t : im.call(t);
      }
      function pb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && zt(t, o, a) ? (o = 0, a = u) : (o = o == null ? 0 : Ce(o), a = a === r ? u : Ce(a)), Tn(t, o, a)) : [];
      }
      function hb(t, o) {
        return ea(t, o);
      }
      function vb(t, o, a) {
        return Ms(t, o, de(a, 2));
      }
      function gb(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var u = ea(t, o);
          if (u < a && kn(t[u], o))
            return u;
        }
        return -1;
      }
      function mb(t, o) {
        return ea(t, o, !0);
      }
      function bb(t, o, a) {
        return Ms(t, o, de(a, 2), !0);
      }
      function yb(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var u = ea(t, o, !0) - 1;
          if (kn(t[u], o))
            return u;
        }
        return -1;
      }
      function _b(t) {
        return t && t.length ? Yc(t) : [];
      }
      function wb(t, o) {
        return t && t.length ? Yc(t, de(o, 2)) : [];
      }
      function Sb(t) {
        var o = t == null ? 0 : t.length;
        return o ? Tn(t, 1, o) : [];
      }
      function Eb(t, o, a) {
        return t && t.length ? (o = a || o === r ? 1 : Ce(o), Tn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function xb(t, o, a) {
        var u = t == null ? 0 : t.length;
        return u ? (o = a || o === r ? 1 : Ce(o), o = u - o, Tn(t, o < 0 ? 0 : o, u)) : [];
      }
      function Ob(t, o) {
        return t && t.length ? ta(t, de(o, 3), !1, !0) : [];
      }
      function Tb(t, o) {
        return t && t.length ? ta(t, de(o, 3)) : [];
      }
      var Cb = Pe(function(t) {
        return Pr(Pt(t, 1, ht, !0));
      }), Ab = Pe(function(t) {
        var o = Cn(t);
        return ht(o) && (o = r), Pr(Pt(t, 1, ht, !0), de(o, 2));
      }), Ib = Pe(function(t) {
        var o = Cn(t);
        return o = typeof o == "function" ? o : r, Pr(Pt(t, 1, ht, !0), r, o);
      });
      function $b(t) {
        return t && t.length ? Pr(t) : [];
      }
      function Pb(t, o) {
        return t && t.length ? Pr(t, de(o, 2)) : [];
      }
      function Mb(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? Pr(t, r, o) : [];
      }
      function Zs(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = Tr(t, function(a) {
          if (ht(a))
            return o = Et(a.length, o), !0;
        }), ps(o, function(a) {
          return tt(t, cs(a));
        });
      }
      function Bf(t, o) {
        if (!(t && t.length))
          return [];
        var a = Zs(t);
        return o == null ? a : tt(a, function(u) {
          return an(o, r, u);
        });
      }
      var Rb = Pe(function(t, o) {
        return ht(t) ? Yo(t, o) : [];
      }), Lb = Pe(function(t) {
        return Ls(Tr(t, ht));
      }), Fb = Pe(function(t) {
        var o = Cn(t);
        return ht(o) && (o = r), Ls(Tr(t, ht), de(o, 2));
      }), Bb = Pe(function(t) {
        var o = Cn(t);
        return o = typeof o == "function" ? o : r, Ls(Tr(t, ht), r, o);
      }), kb = Pe(Zs);
      function Nb(t, o) {
        return Qc(t || [], o || [], jo);
      }
      function Db(t, o) {
        return Qc(t || [], o || [], Jo);
      }
      var Wb = Pe(function(t) {
        var o = t.length, a = o > 1 ? t[o - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, Bf(t, a);
      });
      function kf(t) {
        var o = g(t);
        return o.__chain__ = !0, o;
      }
      function zb(t, o) {
        return o(t), t;
      }
      function ca(t, o) {
        return o(t);
      }
      var Hb = fr(function(t) {
        var o = t.length, a = o ? t[0] : 0, u = this.__wrapped__, p = function(y) {
          return ws(y, t);
        };
        return o > 1 || this.__actions__.length || !(u instanceof Le) || !dr(a) ? this.thru(p) : (u = u.slice(a, +a + (o ? 1 : 0)), u.__actions__.push({
          func: ca,
          args: [p],
          thisArg: r
        }), new xn(u, this.__chain__).thru(function(y) {
          return o && !y.length && y.push(r), y;
        }));
      });
      function qb() {
        return kf(this);
      }
      function Ub() {
        return new xn(this.value(), this.__chain__);
      }
      function Vb() {
        this.__values__ === r && (this.__values__ = Xf(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function Kb() {
        return this;
      }
      function Gb(t) {
        for (var o, a = this; a instanceof Yi; ) {
          var u = $f(a);
          u.__index__ = 0, u.__values__ = r, o ? p.__wrapped__ = u : o = u;
          var p = u;
          a = a.__wrapped__;
        }
        return p.__wrapped__ = t, o;
      }
      function jb() {
        var t = this.__wrapped__;
        if (t instanceof Le) {
          var o = t;
          return this.__actions__.length && (o = new Le(this)), o = o.reverse(), o.__actions__.push({
            func: ca,
            args: [Ys],
            thisArg: r
          }), new xn(o, this.__chain__);
        }
        return this.thru(Ys);
      }
      function Yb() {
        return Jc(this.__wrapped__, this.__actions__);
      }
      var Zb = na(function(t, o, a) {
        Ve.call(t, a) ? ++t[a] : ur(t, a, 1);
      });
      function Xb(t, o, a) {
        var u = xe(t) ? fc : zm;
        return a && zt(t, o, a) && (o = r), u(t, de(o, 3));
      }
      function Jb(t, o) {
        var a = xe(t) ? Tr : Fc;
        return a(t, de(o, 3));
      }
      var Qb = cf(Pf), ey = cf(Mf);
      function ty(t, o) {
        return Pt(fa(t, o), 1);
      }
      function ny(t, o) {
        return Pt(fa(t, o), re);
      }
      function ry(t, o, a) {
        return a = a === r ? 1 : Ce(a), Pt(fa(t, o), a);
      }
      function Nf(t, o) {
        var a = xe(t) ? Sn : $r;
        return a(t, de(o, 3));
      }
      function Df(t, o) {
        var a = xe(t) ? Sg : Lc;
        return a(t, de(o, 3));
      }
      var oy = na(function(t, o, a) {
        Ve.call(t, a) ? t[a].push(o) : ur(t, a, [o]);
      });
      function iy(t, o, a, u) {
        t = Jt(t) ? t : Eo(t), a = a && !u ? Ce(a) : 0;
        var p = t.length;
        return a < 0 && (a = Et(p + a, 0)), ga(t) ? a <= p && t.indexOf(o, a) > -1 : !!p && co(t, o, a) > -1;
      }
      var ay = Pe(function(t, o, a) {
        var u = -1, p = typeof o == "function", y = Jt(t) ? F(t.length) : [];
        return $r(t, function(x) {
          y[++u] = p ? an(o, x, a) : Zo(x, o, a);
        }), y;
      }), sy = na(function(t, o, a) {
        ur(t, a, o);
      });
      function fa(t, o) {
        var a = xe(t) ? tt : zc;
        return a(t, de(o, 3));
      }
      function ly(t, o, a, u) {
        return t == null ? [] : (xe(o) || (o = o == null ? [] : [o]), a = u ? r : a, xe(a) || (a = a == null ? [] : [a]), Vc(t, o, a));
      }
      var uy = na(function(t, o, a) {
        t[a ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function cy(t, o, a) {
        var u = xe(t) ? ls : vc, p = arguments.length < 3;
        return u(t, de(o, 4), a, p, $r);
      }
      function fy(t, o, a) {
        var u = xe(t) ? Eg : vc, p = arguments.length < 3;
        return u(t, de(o, 4), a, p, Lc);
      }
      function dy(t, o) {
        var a = xe(t) ? Tr : Fc;
        return a(t, ha(de(o, 3)));
      }
      function py(t) {
        var o = xe(t) ? $c : i0;
        return o(t);
      }
      function hy(t, o, a) {
        (a ? zt(t, o, a) : o === r) ? o = 1 : o = Ce(o);
        var u = xe(t) ? Bm : a0;
        return u(t, o);
      }
      function vy(t) {
        var o = xe(t) ? km : l0;
        return o(t);
      }
      function gy(t) {
        if (t == null)
          return 0;
        if (Jt(t))
          return ga(t) ? po(t) : t.length;
        var o = Bt(t);
        return o == wt || o == ot ? t.size : Cs(t).length;
      }
      function my(t, o, a) {
        var u = xe(t) ? us : u0;
        return a && zt(t, o, a) && (o = r), u(t, de(o, 3));
      }
      var by = Pe(function(t, o) {
        if (t == null)
          return [];
        var a = o.length;
        return a > 1 && zt(t, o[0], o[1]) ? o = [] : a > 2 && zt(o[0], o[1], o[2]) && (o = [o[0]]), Vc(t, Pt(o, 1), []);
      }), da = Jg || function() {
        return $t.Date.now();
      };
      function yy(t, o) {
        if (typeof o != "function")
          throw new En(c);
        return t = Ce(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function Wf(t, o, a) {
        return o = a ? r : o, o = t && o == null ? t.length : o, cr(t, $, r, r, r, r, o);
      }
      function zf(t, o) {
        var a;
        if (typeof o != "function")
          throw new En(c);
        return t = Ce(t), function() {
          return --t > 0 && (a = o.apply(this, arguments)), t <= 1 && (o = r), a;
        };
      }
      var Xs = Pe(function(t, o, a) {
        var u = O;
        if (a.length) {
          var p = Ar(a, wo(Xs));
          u |= R;
        }
        return cr(t, u, o, a, p);
      }), Hf = Pe(function(t, o, a) {
        var u = O | C;
        if (a.length) {
          var p = Ar(a, wo(Hf));
          u |= R;
        }
        return cr(o, u, t, a, p);
      });
      function qf(t, o, a) {
        o = a ? r : o;
        var u = cr(t, M, r, r, r, r, r, o);
        return u.placeholder = qf.placeholder, u;
      }
      function Uf(t, o, a) {
        o = a ? r : o;
        var u = cr(t, k, r, r, r, r, r, o);
        return u.placeholder = Uf.placeholder, u;
      }
      function Vf(t, o, a) {
        var u, p, y, x, T, P, H = 0, q = !1, j = !1, ee = !0;
        if (typeof t != "function")
          throw new En(c);
        o = An(o) || 0, it(a) && (q = !!a.leading, j = "maxWait" in a, y = j ? Et(An(a.maxWait) || 0, o) : y, ee = "trailing" in a ? !!a.trailing : ee);
        function le(vt) {
          var Nn = u, vr = p;
          return u = p = r, H = vt, x = t.apply(vr, Nn), x;
        }
        function ge(vt) {
          return H = vt, T = ti(Re, o), q ? le(vt) : x;
        }
        function Ie(vt) {
          var Nn = vt - P, vr = vt - H, cd = o - Nn;
          return j ? Ft(cd, y - vr) : cd;
        }
        function me(vt) {
          var Nn = vt - P, vr = vt - H;
          return P === r || Nn >= o || Nn < 0 || j && vr >= y;
        }
        function Re() {
          var vt = da();
          if (me(vt))
            return ke(vt);
          T = ti(Re, Ie(vt));
        }
        function ke(vt) {
          return T = r, ee && u ? le(vt) : (u = p = r, x);
        }
        function cn() {
          T !== r && ef(T), H = 0, u = P = p = T = r;
        }
        function Ht() {
          return T === r ? x : ke(da());
        }
        function fn() {
          var vt = da(), Nn = me(vt);
          if (u = arguments, p = this, P = vt, Nn) {
            if (T === r)
              return ge(P);
            if (j)
              return ef(T), T = ti(Re, o), le(P);
          }
          return T === r && (T = ti(Re, o)), x;
        }
        return fn.cancel = cn, fn.flush = Ht, fn;
      }
      var _y = Pe(function(t, o) {
        return Rc(t, 1, o);
      }), wy = Pe(function(t, o, a) {
        return Rc(t, An(o) || 0, a);
      });
      function Sy(t) {
        return cr(t, Y);
      }
      function pa(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new En(c);
        var a = function() {
          var u = arguments, p = o ? o.apply(this, u) : u[0], y = a.cache;
          if (y.has(p))
            return y.get(p);
          var x = t.apply(this, u);
          return a.cache = y.set(p, x) || y, x;
        };
        return a.cache = new (pa.Cache || lr)(), a;
      }
      pa.Cache = lr;
      function ha(t) {
        if (typeof t != "function")
          throw new En(c);
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
      function Ey(t) {
        return zf(2, t);
      }
      var xy = c0(function(t, o) {
        o = o.length == 1 && xe(o[0]) ? tt(o[0], sn(de())) : tt(Pt(o, 1), sn(de()));
        var a = o.length;
        return Pe(function(u) {
          for (var p = -1, y = Ft(u.length, a); ++p < y; )
            u[p] = o[p].call(this, u[p]);
          return an(t, this, u);
        });
      }), Js = Pe(function(t, o) {
        var a = Ar(o, wo(Js));
        return cr(t, R, r, o, a);
      }), Kf = Pe(function(t, o) {
        var a = Ar(o, wo(Kf));
        return cr(t, A, r, o, a);
      }), Oy = fr(function(t, o) {
        return cr(t, z, r, r, r, o);
      });
      function Ty(t, o) {
        if (typeof t != "function")
          throw new En(c);
        return o = o === r ? o : Ce(o), Pe(t, o);
      }
      function Cy(t, o) {
        if (typeof t != "function")
          throw new En(c);
        return o = o == null ? 0 : Et(Ce(o), 0), Pe(function(a) {
          var u = a[o], p = Rr(a, 0, o);
          return u && Cr(p, u), an(t, this, p);
        });
      }
      function Ay(t, o, a) {
        var u = !0, p = !0;
        if (typeof t != "function")
          throw new En(c);
        return it(a) && (u = "leading" in a ? !!a.leading : u, p = "trailing" in a ? !!a.trailing : p), Vf(t, o, {
          leading: u,
          maxWait: o,
          trailing: p
        });
      }
      function Iy(t) {
        return Wf(t, 1);
      }
      function $y(t, o) {
        return Js(Bs(o), t);
      }
      function Py() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return xe(t) ? t : [t];
      }
      function My(t) {
        return On(t, E);
      }
      function Ry(t, o) {
        return o = typeof o == "function" ? o : r, On(t, E, o);
      }
      function Ly(t) {
        return On(t, S | E);
      }
      function Fy(t, o) {
        return o = typeof o == "function" ? o : r, On(t, S | E, o);
      }
      function By(t, o) {
        return o == null || Mc(t, o, Ct(o));
      }
      function kn(t, o) {
        return t === o || t !== t && o !== o;
      }
      var ky = aa(xs), Ny = aa(function(t, o) {
        return t >= o;
      }), Zr = Nc(function() {
        return arguments;
      }()) ? Nc : function(t) {
        return st(t) && Ve.call(t, "callee") && !xc.call(t, "callee");
      }, xe = F.isArray, Dy = ic ? sn(ic) : Gm;
      function Jt(t) {
        return t != null && va(t.length) && !pr(t);
      }
      function ht(t) {
        return st(t) && Jt(t);
      }
      function Wy(t) {
        return t === !0 || t === !1 || st(t) && Wt(t) == be;
      }
      var Lr = em || ul, zy = ac ? sn(ac) : jm;
      function Hy(t) {
        return st(t) && t.nodeType === 1 && !ni(t);
      }
      function qy(t) {
        if (t == null)
          return !0;
        if (Jt(t) && (xe(t) || typeof t == "string" || typeof t.splice == "function" || Lr(t) || So(t) || Zr(t)))
          return !t.length;
        var o = Bt(t);
        if (o == wt || o == ot)
          return !t.size;
        if (ei(t))
          return !Cs(t).length;
        for (var a in t)
          if (Ve.call(t, a))
            return !1;
        return !0;
      }
      function Uy(t, o) {
        return Xo(t, o);
      }
      function Vy(t, o, a) {
        a = typeof a == "function" ? a : r;
        var u = a ? a(t, o) : r;
        return u === r ? Xo(t, o, r, a) : !!u;
      }
      function Qs(t) {
        if (!st(t))
          return !1;
        var o = Wt(t);
        return o == _t || o == Ze || typeof t.message == "string" && typeof t.name == "string" && !ni(t);
      }
      function Ky(t) {
        return typeof t == "number" && Tc(t);
      }
      function pr(t) {
        if (!it(t))
          return !1;
        var o = Wt(t);
        return o == ft || o == gn || o == se || o == ir;
      }
      function Gf(t) {
        return typeof t == "number" && t == Ce(t);
      }
      function va(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= he;
      }
      function it(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function st(t) {
        return t != null && typeof t == "object";
      }
      var jf = sc ? sn(sc) : Zm;
      function Gy(t, o) {
        return t === o || Ts(t, o, qs(o));
      }
      function jy(t, o, a) {
        return a = typeof a == "function" ? a : r, Ts(t, o, qs(o), a);
      }
      function Yy(t) {
        return Yf(t) && t != +t;
      }
      function Zy(t) {
        if (R0(t))
          throw new Ee(l);
        return Dc(t);
      }
      function Xy(t) {
        return t === null;
      }
      function Jy(t) {
        return t == null;
      }
      function Yf(t) {
        return typeof t == "number" || st(t) && Wt(t) == Gt;
      }
      function ni(t) {
        if (!st(t) || Wt(t) != dt)
          return !1;
        var o = Hi(t);
        if (o === null)
          return !0;
        var a = Ve.call(o, "constructor") && o.constructor;
        return typeof a == "function" && a instanceof a && Ni.call(a) == jg;
      }
      var el = lc ? sn(lc) : Xm;
      function Qy(t) {
        return Gf(t) && t >= -he && t <= he;
      }
      var Zf = uc ? sn(uc) : Jm;
      function ga(t) {
        return typeof t == "string" || !xe(t) && st(t) && Wt(t) == jt;
      }
      function un(t) {
        return typeof t == "symbol" || st(t) && Wt(t) == Yt;
      }
      var So = cc ? sn(cc) : Qm;
      function e1(t) {
        return t === r;
      }
      function t1(t) {
        return st(t) && Bt(t) == Se;
      }
      function n1(t) {
        return st(t) && Wt(t) == Tt;
      }
      var r1 = aa(As), o1 = aa(function(t, o) {
        return t <= o;
      });
      function Xf(t) {
        if (!t)
          return [];
        if (Jt(t))
          return ga(t) ? Fn(t) : Xt(t);
        if (qo && t[qo])
          return Bg(t[qo]());
        var o = Bt(t), a = o == wt ? vs : o == ot ? Fi : Eo;
        return a(t);
      }
      function hr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = An(t), t === re || t === -re) {
          var o = t < 0 ? -1 : 1;
          return o * ce;
        }
        return t === t ? t : 0;
      }
      function Ce(t) {
        var o = hr(t), a = o % 1;
        return o === o ? a ? o - a : o : 0;
      }
      function Jf(t) {
        return t ? Kr(Ce(t), 0, _e) : 0;
      }
      function An(t) {
        if (typeof t == "number")
          return t;
        if (un(t))
          return ye;
        if (it(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = it(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = gc(t);
        var a = Dv.test(t);
        return a || zv.test(t) ? yg(t.slice(2), a ? 2 : 8) : Nv.test(t) ? ye : +t;
      }
      function Qf(t) {
        return Yn(t, Qt(t));
      }
      function i1(t) {
        return t ? Kr(Ce(t), -he, he) : t === 0 ? t : 0;
      }
      function He(t) {
        return t == null ? "" : ln(t);
      }
      var a1 = yo(function(t, o) {
        if (ei(o) || Jt(o)) {
          Yn(o, Ct(o), t);
          return;
        }
        for (var a in o)
          Ve.call(o, a) && jo(t, a, o[a]);
      }), ed = yo(function(t, o) {
        Yn(o, Qt(o), t);
      }), ma = yo(function(t, o, a, u) {
        Yn(o, Qt(o), t, u);
      }), s1 = yo(function(t, o, a, u) {
        Yn(o, Ct(o), t, u);
      }), l1 = fr(ws);
      function u1(t, o) {
        var a = bo(t);
        return o == null ? a : Pc(a, o);
      }
      var c1 = Pe(function(t, o) {
        t = Ke(t);
        var a = -1, u = o.length, p = u > 2 ? o[2] : r;
        for (p && zt(o[0], o[1], p) && (u = 1); ++a < u; )
          for (var y = o[a], x = Qt(y), T = -1, P = x.length; ++T < P; ) {
            var H = x[T], q = t[H];
            (q === r || kn(q, vo[H]) && !Ve.call(t, H)) && (t[H] = y[H]);
          }
        return t;
      }), f1 = Pe(function(t) {
        return t.push(r, mf), an(td, r, t);
      });
      function d1(t, o) {
        return dc(t, de(o, 3), jn);
      }
      function p1(t, o) {
        return dc(t, de(o, 3), Es);
      }
      function h1(t, o) {
        return t == null ? t : Ss(t, de(o, 3), Qt);
      }
      function v1(t, o) {
        return t == null ? t : Bc(t, de(o, 3), Qt);
      }
      function g1(t, o) {
        return t && jn(t, de(o, 3));
      }
      function m1(t, o) {
        return t && Es(t, de(o, 3));
      }
      function b1(t) {
        return t == null ? [] : Ji(t, Ct(t));
      }
      function y1(t) {
        return t == null ? [] : Ji(t, Qt(t));
      }
      function tl(t, o, a) {
        var u = t == null ? r : Gr(t, o);
        return u === r ? a : u;
      }
      function _1(t, o) {
        return t != null && _f(t, o, qm);
      }
      function nl(t, o) {
        return t != null && _f(t, o, Um);
      }
      var w1 = df(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Di.call(o)), t[o] = a;
      }, ol(en)), S1 = df(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Di.call(o)), Ve.call(t, o) ? t[o].push(a) : t[o] = [a];
      }, de), E1 = Pe(Zo);
      function Ct(t) {
        return Jt(t) ? Ic(t) : Cs(t);
      }
      function Qt(t) {
        return Jt(t) ? Ic(t, !0) : e0(t);
      }
      function x1(t, o) {
        var a = {};
        return o = de(o, 3), jn(t, function(u, p, y) {
          ur(a, o(u, p, y), u);
        }), a;
      }
      function O1(t, o) {
        var a = {};
        return o = de(o, 3), jn(t, function(u, p, y) {
          ur(a, p, o(u, p, y));
        }), a;
      }
      var T1 = yo(function(t, o, a) {
        Qi(t, o, a);
      }), td = yo(function(t, o, a, u) {
        Qi(t, o, a, u);
      }), C1 = fr(function(t, o) {
        var a = {};
        if (t == null)
          return a;
        var u = !1;
        o = tt(o, function(y) {
          return y = Mr(y, t), u || (u = y.length > 1), y;
        }), Yn(t, zs(t), a), u && (a = On(a, S | w | E, w0));
        for (var p = o.length; p--; )
          Rs(a, o[p]);
        return a;
      });
      function A1(t, o) {
        return nd(t, ha(de(o)));
      }
      var I1 = fr(function(t, o) {
        return t == null ? {} : n0(t, o);
      });
      function nd(t, o) {
        if (t == null)
          return {};
        var a = tt(zs(t), function(u) {
          return [u];
        });
        return o = de(o), Kc(t, a, function(u, p) {
          return o(u, p[0]);
        });
      }
      function $1(t, o, a) {
        o = Mr(o, t);
        var u = -1, p = o.length;
        for (p || (p = 1, t = r); ++u < p; ) {
          var y = t == null ? r : t[Zn(o[u])];
          y === r && (u = p, y = a), t = pr(y) ? y.call(t) : y;
        }
        return t;
      }
      function P1(t, o, a) {
        return t == null ? t : Jo(t, o, a);
      }
      function M1(t, o, a, u) {
        return u = typeof u == "function" ? u : r, t == null ? t : Jo(t, o, a, u);
      }
      var rd = vf(Ct), od = vf(Qt);
      function R1(t, o, a) {
        var u = xe(t), p = u || Lr(t) || So(t);
        if (o = de(o, 4), a == null) {
          var y = t && t.constructor;
          p ? a = u ? new y() : [] : it(t) ? a = pr(y) ? bo(Hi(t)) : {} : a = {};
        }
        return (p ? Sn : jn)(t, function(x, T, P) {
          return o(a, x, T, P);
        }), a;
      }
      function L1(t, o) {
        return t == null ? !0 : Rs(t, o);
      }
      function F1(t, o, a) {
        return t == null ? t : Xc(t, o, Bs(a));
      }
      function B1(t, o, a, u) {
        return u = typeof u == "function" ? u : r, t == null ? t : Xc(t, o, Bs(a), u);
      }
      function Eo(t) {
        return t == null ? [] : hs(t, Ct(t));
      }
      function k1(t) {
        return t == null ? [] : hs(t, Qt(t));
      }
      function N1(t, o, a) {
        return a === r && (a = o, o = r), a !== r && (a = An(a), a = a === a ? a : 0), o !== r && (o = An(o), o = o === o ? o : 0), Kr(An(t), o, a);
      }
      function D1(t, o, a) {
        return o = hr(o), a === r ? (a = o, o = 0) : a = hr(a), t = An(t), Vm(t, o, a);
      }
      function W1(t, o, a) {
        if (a && typeof a != "boolean" && zt(t, o, a) && (o = a = r), a === r && (typeof o == "boolean" ? (a = o, o = r) : typeof t == "boolean" && (a = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = hr(t), o === r ? (o = t, t = 0) : o = hr(o)), t > o) {
          var u = t;
          t = o, o = u;
        }
        if (a || t % 1 || o % 1) {
          var p = Cc();
          return Ft(t + p * (o - t + bg("1e-" + ((p + "").length - 1))), o);
        }
        return $s(t, o);
      }
      var z1 = _o(function(t, o, a) {
        return o = o.toLowerCase(), t + (a ? id(o) : o);
      });
      function id(t) {
        return rl(He(t).toLowerCase());
      }
      function ad(t) {
        return t = He(t), t && t.replace(qv, Pg).replace(lg, "");
      }
      function H1(t, o, a) {
        t = He(t), o = ln(o);
        var u = t.length;
        a = a === r ? u : Kr(Ce(a), 0, u);
        var p = a;
        return a -= o.length, a >= 0 && t.slice(a, p) == o;
      }
      function q1(t) {
        return t = He(t), t && Ev.test(t) ? t.replace(Bu, Mg) : t;
      }
      function U1(t) {
        return t = He(t), t && Iv.test(t) ? t.replace(Ja, "\\$&") : t;
      }
      var V1 = _o(function(t, o, a) {
        return t + (a ? "-" : "") + o.toLowerCase();
      }), K1 = _o(function(t, o, a) {
        return t + (a ? " " : "") + o.toLowerCase();
      }), G1 = uf("toLowerCase");
      function j1(t, o, a) {
        t = He(t), o = Ce(o);
        var u = o ? po(t) : 0;
        if (!o || u >= o)
          return t;
        var p = (o - u) / 2;
        return ia(Ki(p), a) + t + ia(Vi(p), a);
      }
      function Y1(t, o, a) {
        t = He(t), o = Ce(o);
        var u = o ? po(t) : 0;
        return o && u < o ? t + ia(o - u, a) : t;
      }
      function Z1(t, o, a) {
        t = He(t), o = Ce(o);
        var u = o ? po(t) : 0;
        return o && u < o ? ia(o - u, a) + t : t;
      }
      function X1(t, o, a) {
        return a || o == null ? o = 0 : o && (o = +o), om(He(t).replace(Qa, ""), o || 0);
      }
      function J1(t, o, a) {
        return (a ? zt(t, o, a) : o === r) ? o = 1 : o = Ce(o), Ps(He(t), o);
      }
      function Q1() {
        var t = arguments, o = He(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var e_ = _o(function(t, o, a) {
        return t + (a ? "_" : "") + o.toLowerCase();
      });
      function t_(t, o, a) {
        return a && typeof a != "number" && zt(t, o, a) && (o = a = r), a = a === r ? _e : a >>> 0, a ? (t = He(t), t && (typeof o == "string" || o != null && !el(o)) && (o = ln(o), !o && fo(t)) ? Rr(Fn(t), 0, a) : t.split(o, a)) : [];
      }
      var n_ = _o(function(t, o, a) {
        return t + (a ? " " : "") + rl(o);
      });
      function r_(t, o, a) {
        return t = He(t), a = a == null ? 0 : Kr(Ce(a), 0, t.length), o = ln(o), t.slice(a, a + o.length) == o;
      }
      function o_(t, o, a) {
        var u = g.templateSettings;
        a && zt(t, o, a) && (o = r), t = He(t), o = ma({}, o, u, gf);
        var p = ma({}, o.imports, u.imports, gf), y = Ct(p), x = hs(p, y), T, P, H = 0, q = o.interpolate || $i, j = "__p += '", ee = gs(
          (o.escape || $i).source + "|" + q.source + "|" + (q === ku ? kv : $i).source + "|" + (o.evaluate || $i).source + "|$",
          "g"
        ), le = "//# sourceURL=" + (Ve.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++pg + "]") + `
`;
        t.replace(ee, function(me, Re, ke, cn, Ht, fn) {
          return ke || (ke = cn), j += t.slice(H, fn).replace(Uv, Rg), Re && (T = !0, j += `' +
__e(` + Re + `) +
'`), Ht && (P = !0, j += `';
` + Ht + `;
__p += '`), ke && (j += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), H = fn + me.length, me;
        }), j += `';
`;
        var ge = Ve.call(o, "variable") && o.variable;
        if (!ge)
          j = `with (obj) {
` + j + `
}
`;
        else if (Fv.test(ge))
          throw new Ee(f);
        j = (P ? j.replace(Zt, "") : j).replace(Dt, "$1").replace(ar, "$1;"), j = "function(" + (ge || "obj") + `) {
` + (ge ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + j + `return __p
}`;
        var Ie = ld(function() {
          return ze(y, le + "return " + j).apply(r, x);
        });
        if (Ie.source = j, Qs(Ie))
          throw Ie;
        return Ie;
      }
      function i_(t) {
        return He(t).toLowerCase();
      }
      function a_(t) {
        return He(t).toUpperCase();
      }
      function s_(t, o, a) {
        if (t = He(t), t && (a || o === r))
          return gc(t);
        if (!t || !(o = ln(o)))
          return t;
        var u = Fn(t), p = Fn(o), y = mc(u, p), x = bc(u, p) + 1;
        return Rr(u, y, x).join("");
      }
      function l_(t, o, a) {
        if (t = He(t), t && (a || o === r))
          return t.slice(0, _c(t) + 1);
        if (!t || !(o = ln(o)))
          return t;
        var u = Fn(t), p = bc(u, Fn(o)) + 1;
        return Rr(u, 0, p).join("");
      }
      function u_(t, o, a) {
        if (t = He(t), t && (a || o === r))
          return t.replace(Qa, "");
        if (!t || !(o = ln(o)))
          return t;
        var u = Fn(t), p = mc(u, Fn(o));
        return Rr(u, p).join("");
      }
      function c_(t, o) {
        var a = te, u = D;
        if (it(o)) {
          var p = "separator" in o ? o.separator : p;
          a = "length" in o ? Ce(o.length) : a, u = "omission" in o ? ln(o.omission) : u;
        }
        t = He(t);
        var y = t.length;
        if (fo(t)) {
          var x = Fn(t);
          y = x.length;
        }
        if (a >= y)
          return t;
        var T = a - po(u);
        if (T < 1)
          return u;
        var P = x ? Rr(x, 0, T).join("") : t.slice(0, T);
        if (p === r)
          return P + u;
        if (x && (T += P.length - T), el(p)) {
          if (t.slice(T).search(p)) {
            var H, q = P;
            for (p.global || (p = gs(p.source, He(Nu.exec(p)) + "g")), p.lastIndex = 0; H = p.exec(q); )
              var j = H.index;
            P = P.slice(0, j === r ? T : j);
          }
        } else if (t.indexOf(ln(p), T) != T) {
          var ee = P.lastIndexOf(p);
          ee > -1 && (P = P.slice(0, ee));
        }
        return P + u;
      }
      function f_(t) {
        return t = He(t), t && Sv.test(t) ? t.replace(Fu, Wg) : t;
      }
      var d_ = _o(function(t, o, a) {
        return t + (a ? " " : "") + o.toUpperCase();
      }), rl = uf("toUpperCase");
      function sd(t, o, a) {
        return t = He(t), o = a ? r : o, o === r ? Fg(t) ? qg(t) : Tg(t) : t.match(o) || [];
      }
      var ld = Pe(function(t, o) {
        try {
          return an(t, r, o);
        } catch (a) {
          return Qs(a) ? a : new Ee(a);
        }
      }), p_ = fr(function(t, o) {
        return Sn(o, function(a) {
          a = Zn(a), ur(t, a, Xs(t[a], t));
        }), t;
      });
      function h_(t) {
        var o = t == null ? 0 : t.length, a = de();
        return t = o ? tt(t, function(u) {
          if (typeof u[1] != "function")
            throw new En(c);
          return [a(u[0]), u[1]];
        }) : [], Pe(function(u) {
          for (var p = -1; ++p < o; ) {
            var y = t[p];
            if (an(y[0], this, u))
              return an(y[1], this, u);
          }
        });
      }
      function v_(t) {
        return Wm(On(t, S));
      }
      function ol(t) {
        return function() {
          return t;
        };
      }
      function g_(t, o) {
        return t == null || t !== t ? o : t;
      }
      var m_ = ff(), b_ = ff(!0);
      function en(t) {
        return t;
      }
      function il(t) {
        return Wc(typeof t == "function" ? t : On(t, S));
      }
      function y_(t) {
        return Hc(On(t, S));
      }
      function __(t, o) {
        return qc(t, On(o, S));
      }
      var w_ = Pe(function(t, o) {
        return function(a) {
          return Zo(a, t, o);
        };
      }), S_ = Pe(function(t, o) {
        return function(a) {
          return Zo(t, a, o);
        };
      });
      function al(t, o, a) {
        var u = Ct(o), p = Ji(o, u);
        a == null && !(it(o) && (p.length || !u.length)) && (a = o, o = t, t = this, p = Ji(o, Ct(o)));
        var y = !(it(a) && "chain" in a) || !!a.chain, x = pr(t);
        return Sn(p, function(T) {
          var P = o[T];
          t[T] = P, x && (t.prototype[T] = function() {
            var H = this.__chain__;
            if (y || H) {
              var q = t(this.__wrapped__), j = q.__actions__ = Xt(this.__actions__);
              return j.push({ func: P, args: arguments, thisArg: t }), q.__chain__ = H, q;
            }
            return P.apply(t, Cr([this.value()], arguments));
          });
        }), t;
      }
      function E_() {
        return $t._ === this && ($t._ = Yg), this;
      }
      function sl() {
      }
      function x_(t) {
        return t = Ce(t), Pe(function(o) {
          return Uc(o, t);
        });
      }
      var O_ = Ns(tt), T_ = Ns(fc), C_ = Ns(us);
      function ud(t) {
        return Vs(t) ? cs(Zn(t)) : r0(t);
      }
      function A_(t) {
        return function(o) {
          return t == null ? r : Gr(t, o);
        };
      }
      var I_ = pf(), $_ = pf(!0);
      function ll() {
        return [];
      }
      function ul() {
        return !1;
      }
      function P_() {
        return {};
      }
      function M_() {
        return "";
      }
      function R_() {
        return !0;
      }
      function L_(t, o) {
        if (t = Ce(t), t < 1 || t > he)
          return [];
        var a = _e, u = Ft(t, _e);
        o = de(o), t -= _e;
        for (var p = ps(u, o); ++a < t; )
          o(a);
        return p;
      }
      function F_(t) {
        return xe(t) ? tt(t, Zn) : un(t) ? [t] : Xt(If(He(t)));
      }
      function B_(t) {
        var o = ++Gg;
        return He(t) + o;
      }
      var k_ = oa(function(t, o) {
        return t + o;
      }, 0), N_ = Ds("ceil"), D_ = oa(function(t, o) {
        return t / o;
      }, 1), W_ = Ds("floor");
      function z_(t) {
        return t && t.length ? Xi(t, en, xs) : r;
      }
      function H_(t, o) {
        return t && t.length ? Xi(t, de(o, 2), xs) : r;
      }
      function q_(t) {
        return hc(t, en);
      }
      function U_(t, o) {
        return hc(t, de(o, 2));
      }
      function V_(t) {
        return t && t.length ? Xi(t, en, As) : r;
      }
      function K_(t, o) {
        return t && t.length ? Xi(t, de(o, 2), As) : r;
      }
      var G_ = oa(function(t, o) {
        return t * o;
      }, 1), j_ = Ds("round"), Y_ = oa(function(t, o) {
        return t - o;
      }, 0);
      function Z_(t) {
        return t && t.length ? ds(t, en) : 0;
      }
      function X_(t, o) {
        return t && t.length ? ds(t, de(o, 2)) : 0;
      }
      return g.after = yy, g.ary = Wf, g.assign = a1, g.assignIn = ed, g.assignInWith = ma, g.assignWith = s1, g.at = l1, g.before = zf, g.bind = Xs, g.bindAll = p_, g.bindKey = Hf, g.castArray = Py, g.chain = kf, g.chunk = W0, g.compact = z0, g.concat = H0, g.cond = h_, g.conforms = v_, g.constant = ol, g.countBy = Zb, g.create = u1, g.curry = qf, g.curryRight = Uf, g.debounce = Vf, g.defaults = c1, g.defaultsDeep = f1, g.defer = _y, g.delay = wy, g.difference = q0, g.differenceBy = U0, g.differenceWith = V0, g.drop = K0, g.dropRight = G0, g.dropRightWhile = j0, g.dropWhile = Y0, g.fill = Z0, g.filter = Jb, g.flatMap = ty, g.flatMapDeep = ny, g.flatMapDepth = ry, g.flatten = Rf, g.flattenDeep = X0, g.flattenDepth = J0, g.flip = Sy, g.flow = m_, g.flowRight = b_, g.fromPairs = Q0, g.functions = b1, g.functionsIn = y1, g.groupBy = oy, g.initial = tb, g.intersection = nb, g.intersectionBy = rb, g.intersectionWith = ob, g.invert = w1, g.invertBy = S1, g.invokeMap = ay, g.iteratee = il, g.keyBy = sy, g.keys = Ct, g.keysIn = Qt, g.map = fa, g.mapKeys = x1, g.mapValues = O1, g.matches = y_, g.matchesProperty = __, g.memoize = pa, g.merge = T1, g.mergeWith = td, g.method = w_, g.methodOf = S_, g.mixin = al, g.negate = ha, g.nthArg = x_, g.omit = C1, g.omitBy = A1, g.once = Ey, g.orderBy = ly, g.over = O_, g.overArgs = xy, g.overEvery = T_, g.overSome = C_, g.partial = Js, g.partialRight = Kf, g.partition = uy, g.pick = I1, g.pickBy = nd, g.property = ud, g.propertyOf = A_, g.pull = lb, g.pullAll = Ff, g.pullAllBy = ub, g.pullAllWith = cb, g.pullAt = fb, g.range = I_, g.rangeRight = $_, g.rearg = Oy, g.reject = dy, g.remove = db, g.rest = Ty, g.reverse = Ys, g.sampleSize = hy, g.set = P1, g.setWith = M1, g.shuffle = vy, g.slice = pb, g.sortBy = by, g.sortedUniq = _b, g.sortedUniqBy = wb, g.split = t_, g.spread = Cy, g.tail = Sb, g.take = Eb, g.takeRight = xb, g.takeRightWhile = Ob, g.takeWhile = Tb, g.tap = zb, g.throttle = Ay, g.thru = ca, g.toArray = Xf, g.toPairs = rd, g.toPairsIn = od, g.toPath = F_, g.toPlainObject = Qf, g.transform = R1, g.unary = Iy, g.union = Cb, g.unionBy = Ab, g.unionWith = Ib, g.uniq = $b, g.uniqBy = Pb, g.uniqWith = Mb, g.unset = L1, g.unzip = Zs, g.unzipWith = Bf, g.update = F1, g.updateWith = B1, g.values = Eo, g.valuesIn = k1, g.without = Rb, g.words = sd, g.wrap = $y, g.xor = Lb, g.xorBy = Fb, g.xorWith = Bb, g.zip = kb, g.zipObject = Nb, g.zipObjectDeep = Db, g.zipWith = Wb, g.entries = rd, g.entriesIn = od, g.extend = ed, g.extendWith = ma, al(g, g), g.add = k_, g.attempt = ld, g.camelCase = z1, g.capitalize = id, g.ceil = N_, g.clamp = N1, g.clone = My, g.cloneDeep = Ly, g.cloneDeepWith = Fy, g.cloneWith = Ry, g.conformsTo = By, g.deburr = ad, g.defaultTo = g_, g.divide = D_, g.endsWith = H1, g.eq = kn, g.escape = q1, g.escapeRegExp = U1, g.every = Xb, g.find = Qb, g.findIndex = Pf, g.findKey = d1, g.findLast = ey, g.findLastIndex = Mf, g.findLastKey = p1, g.floor = W_, g.forEach = Nf, g.forEachRight = Df, g.forIn = h1, g.forInRight = v1, g.forOwn = g1, g.forOwnRight = m1, g.get = tl, g.gt = ky, g.gte = Ny, g.has = _1, g.hasIn = nl, g.head = Lf, g.identity = en, g.includes = iy, g.indexOf = eb, g.inRange = D1, g.invoke = E1, g.isArguments = Zr, g.isArray = xe, g.isArrayBuffer = Dy, g.isArrayLike = Jt, g.isArrayLikeObject = ht, g.isBoolean = Wy, g.isBuffer = Lr, g.isDate = zy, g.isElement = Hy, g.isEmpty = qy, g.isEqual = Uy, g.isEqualWith = Vy, g.isError = Qs, g.isFinite = Ky, g.isFunction = pr, g.isInteger = Gf, g.isLength = va, g.isMap = jf, g.isMatch = Gy, g.isMatchWith = jy, g.isNaN = Yy, g.isNative = Zy, g.isNil = Jy, g.isNull = Xy, g.isNumber = Yf, g.isObject = it, g.isObjectLike = st, g.isPlainObject = ni, g.isRegExp = el, g.isSafeInteger = Qy, g.isSet = Zf, g.isString = ga, g.isSymbol = un, g.isTypedArray = So, g.isUndefined = e1, g.isWeakMap = t1, g.isWeakSet = n1, g.join = ib, g.kebabCase = V1, g.last = Cn, g.lastIndexOf = ab, g.lowerCase = K1, g.lowerFirst = G1, g.lt = r1, g.lte = o1, g.max = z_, g.maxBy = H_, g.mean = q_, g.meanBy = U_, g.min = V_, g.minBy = K_, g.stubArray = ll, g.stubFalse = ul, g.stubObject = P_, g.stubString = M_, g.stubTrue = R_, g.multiply = G_, g.nth = sb, g.noConflict = E_, g.noop = sl, g.now = da, g.pad = j1, g.padEnd = Y1, g.padStart = Z1, g.parseInt = X1, g.random = W1, g.reduce = cy, g.reduceRight = fy, g.repeat = J1, g.replace = Q1, g.result = $1, g.round = j_, g.runInContext = I, g.sample = py, g.size = gy, g.snakeCase = e_, g.some = my, g.sortedIndex = hb, g.sortedIndexBy = vb, g.sortedIndexOf = gb, g.sortedLastIndex = mb, g.sortedLastIndexBy = bb, g.sortedLastIndexOf = yb, g.startCase = n_, g.startsWith = r_, g.subtract = Y_, g.sum = Z_, g.sumBy = X_, g.template = o_, g.times = L_, g.toFinite = hr, g.toInteger = Ce, g.toLength = Jf, g.toLower = i_, g.toNumber = An, g.toSafeInteger = i1, g.toString = He, g.toUpper = a_, g.trim = s_, g.trimEnd = l_, g.trimStart = u_, g.truncate = c_, g.unescape = f_, g.uniqueId = B_, g.upperCase = d_, g.upperFirst = rl, g.each = Nf, g.eachRight = Df, g.first = Lf, al(g, function() {
        var t = {};
        return jn(g, function(o, a) {
          Ve.call(g.prototype, a) || (t[a] = o);
        }), t;
      }(), { chain: !1 }), g.VERSION = i, Sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        g[t].placeholder = g;
      }), Sn(["drop", "take"], function(t, o) {
        Le.prototype[t] = function(a) {
          a = a === r ? 1 : Et(Ce(a), 0);
          var u = this.__filtered__ && !o ? new Le(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = Ft(a, u.__takeCount__) : u.__views__.push({
            size: Ft(a, _e),
            type: t + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, Le.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), Sn(["filter", "map", "takeWhile"], function(t, o) {
        var a = o + 1, u = a == Z || a == ae;
        Le.prototype[t] = function(p) {
          var y = this.clone();
          return y.__iteratees__.push({
            iteratee: de(p, 3),
            type: a
          }), y.__filtered__ = y.__filtered__ || u, y;
        };
      }), Sn(["head", "last"], function(t, o) {
        var a = "take" + (o ? "Right" : "");
        Le.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), Sn(["initial", "tail"], function(t, o) {
        var a = "drop" + (o ? "" : "Right");
        Le.prototype[t] = function() {
          return this.__filtered__ ? new Le(this) : this[a](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(en);
      }, Le.prototype.find = function(t) {
        return this.filter(t).head();
      }, Le.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Le.prototype.invokeMap = Pe(function(t, o) {
        return typeof t == "function" ? new Le(this) : this.map(function(a) {
          return Zo(a, t, o);
        });
      }), Le.prototype.reject = function(t) {
        return this.filter(ha(de(t)));
      }, Le.prototype.slice = function(t, o) {
        t = Ce(t);
        var a = this;
        return a.__filtered__ && (t > 0 || o < 0) ? new Le(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), o !== r && (o = Ce(o), a = o < 0 ? a.dropRight(-o) : a.take(o - t)), a);
      }, Le.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(_e);
      }, jn(Le.prototype, function(t, o) {
        var a = /^(?:filter|find|map|reject)|While$/.test(o), u = /^(?:head|last)$/.test(o), p = g[u ? "take" + (o == "last" ? "Right" : "") : o], y = u || /^find/.test(o);
        !p || (g.prototype[o] = function() {
          var x = this.__wrapped__, T = u ? [1] : arguments, P = x instanceof Le, H = T[0], q = P || xe(x), j = function(Re) {
            var ke = p.apply(g, Cr([Re], T));
            return u && ee ? ke[0] : ke;
          };
          q && a && typeof H == "function" && H.length != 1 && (P = q = !1);
          var ee = this.__chain__, le = !!this.__actions__.length, ge = y && !ee, Ie = P && !le;
          if (!y && q) {
            x = Ie ? x : new Le(this);
            var me = t.apply(x, T);
            return me.__actions__.push({ func: ca, args: [j], thisArg: r }), new xn(me, ee);
          }
          return ge && Ie ? t.apply(this, T) : (me = this.thru(j), ge ? u ? me.value()[0] : me.value() : me);
        });
      }), Sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = Bi[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(t);
        g.prototype[t] = function() {
          var p = arguments;
          if (u && !this.__chain__) {
            var y = this.value();
            return o.apply(xe(y) ? y : [], p);
          }
          return this[a](function(x) {
            return o.apply(xe(x) ? x : [], p);
          });
        };
      }), jn(Le.prototype, function(t, o) {
        var a = g[o];
        if (a) {
          var u = a.name + "";
          Ve.call(mo, u) || (mo[u] = []), mo[u].push({ name: o, func: a });
        }
      }), mo[ra(r, C).name] = [{
        name: "wrapper",
        func: r
      }], Le.prototype.clone = fm, Le.prototype.reverse = dm, Le.prototype.value = pm, g.prototype.at = Hb, g.prototype.chain = qb, g.prototype.commit = Ub, g.prototype.next = Vb, g.prototype.plant = Gb, g.prototype.reverse = jb, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = Yb, g.prototype.first = g.prototype.head, qo && (g.prototype[qo] = Kb), g;
    }, ho = Ug();
    Hr ? ((Hr.exports = ho)._ = ho, is._ = ho) : $t._ = ho;
  }).call(oi);
})(ue, ue.exports);
const kl = /^\s*v-([\w-]+)\s*$/, Ma = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, Nl = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, Dl = /^\s*(?:v-on:|@)([\w:]+)\s*$/, hw = [
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
], vw = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"], gw = (e) => vw.includes(e), mw = (e, n) => {
  const r = Object.keys(e), i = { root: {}, directive: {}, prop: {} };
  return r.forEach((s) => {
    var h, v;
    const l = e[s], c = kl.test(s) || Nl.test(s) || Dl.test(s), f = new Array().concat(
      e.contextKeys || [],
      n.contextKeys || []
    );
    new Array().concat(
      e.excludeKeys || [],
      n.excludeKeys || []
    );
    const d = f.includes(s);
    Ma.test(s) ? (i.root["slot-scope"] = l, i.root.slot = (v = (h = Ma.exec(s)) == null ? void 0 : h[1]) != null ? v : "default") : c ? i.directive[s] = l : hw.includes(s) && !d ? i.root[s] = l : i.prop[s] = l;
  }), i;
}, bw = (e) => {
  var r;
  const n = Object.keys(e).filter((i) => Ma.test(i));
  return n.length > 0 && ((r = Ma.exec(n[0])) == null ? void 0 : r[1]) || "default";
}, qp = (e = "", n = {}, r = !1) => {
  try {
    const i = Object.keys(n).filter((c) => !yw.includes(c)), s = i.map((c) => r ? b(n[c]) : n[c]), l = "return " + e;
    return new Function(...i, l)(...s);
  } catch (i) {
    console.error(i);
  }
}, yw = ["this"], _w = ["pointerevent"], ww = (e, n) => {
  const r = Object.keys(e), i = { "v-bind": {}, "v-on": {} };
  return r.forEach((s) => {
    var c, f;
    let l = e[s];
    if (typeof l == "string" ? l = qp(l, n, !0) : l = b(l), Nl.test(s)) {
      const d = (c = Nl.exec(s)) != null ? c : [];
      if (d[1] == null)
        if (ue.exports.isMap(l))
          for (const [h, v] of l)
            kl.test(h) ? i[h] = v : i["v-bind"][h] = v;
        else
          ue.exports.isObject(l) && Object.keys(l).forEach((h) => {
            kl.test(h) ? i[h] = l[h] : i["v-bind"][h] = l[h];
          });
      else
        i["v-bind"][d[1]] = l;
    } else if (Dl.test(s)) {
      const d = (f = Dl.exec(s)) != null ? f : [];
      if (d[1]) {
        const h = "on" + ue.exports.upperFirst(d[1]);
        i["v-on"][h] = typeof l == "function" ? (v, ...S) => {
          const w = Object.prototype.toString.call(v).split(" ")[1].replace("]", "").toLowerCase(), E = { ...n };
          return _w.includes(w) ? E.$event = v : S = [v, ...S], S.length > 0 && (E.$ = S), l.apply(n, [E]);
        } : l;
      }
    } else
      i[s] = l;
  }), i;
}, Sw = (e, n, r) => {
  let i;
  for (; (i = e.exec(n)) !== null; )
    r(i);
}, Ew = /\{\{\s*(.*?)\s*\}\}/g, xw = (e, n = {}) => {
  if (!e)
    return "";
  let r = e;
  return Sw(Ew, e, ([i, s]) => {
    try {
      const l = qp(s, n, !0);
      r = r.replace(i, l);
    } catch {
      console.error("=====\u5B57\u7B26\u4E32\u6A21\u677F\u89E3\u6790\u5F02\u5E38\uFF01=====", s, n);
    }
  }), r;
}, fd = /^\s*\[(.*)\]\s*$/, dd = /^\s*\{(.*)\}\s*$/, Ow = (e, n = {}) => {
  const r = b(n);
  if (!e)
    return r;
  const i = {};
  if (ue.exports.isArray(r) && fd.test(e)) {
    const s = fd.exec(e);
    (s != null && s[1] ? s[1].split(",").map((c) => c.trim()) : []).forEach((c, f) => {
      i[c] = r == null ? void 0 : r[f];
    });
  } else if (ue.exports.isObject(r) && dd.test(e)) {
    const s = dd.exec(e);
    (s != null && s[1] ? s[1].split(",").map((c) => c.trim()) : []).forEach((c) => {
      const [f, d] = c.split(":").map((h) => h.trim());
      i[d || f] = ue.exports.get(r, f);
    });
  } else
    i[e] = r;
  return i;
}, pd = {
  template({ children: e }) {
    return e == null ? void 0 : e.default();
  },
  slot({ props: e, children: n, slots: r }) {
    var l;
    const i = e.name || "default";
    delete e.name;
    const s = (l = n == null ? void 0 : n[i]) != null ? l : () => [];
    return Te(r, i, e, () => s());
  },
  component({ props: e, children: n }) {
    const r = e.is;
    delete e.is;
    const i = In(r);
    return lt(i, e, n);
  }
}, Wl = (e) => {
  const n = e.tagname;
  if (pd[n])
    return pd[n](e);
  const r = e.directives, i = e.children, s = e.tag, l = e.props;
  return r["v-text"] ? gt(s, l, r["v-text"]) : gt(s, l, i);
}, E8 = (e, n) => ue.exports.omit(e, n), iu = $e({
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
    ), f = L(() => {
      var z, Y;
      const $ = (Y = (z = b(r == null ? void 0 : r.tag)) != null ? z : b(i == null ? void 0 : i.tag)) != null ? Y : "div";
      return typeof $ == "function" && $.name === "tag" ? $(e, n) : $;
    }), d = L(
      () => typeof f.value == "string" ? f.value : ue.exports.kebabCase(f.value.name)
    ), h = L(() => gw(b(d)));
    let v = {}, S = {};
    const w = { prop: {} };
    i.setup && (S = i.setup(e, { tag: b(f), tagname: b(d), isHtml: b(h) }, n) || {}, ue.exports.merge(w, S)), r.setup && (v = r.setup(e, { tag: b(f), tagname: b(d), isHtml: b(h) }, n) || {}, ue.exports.merge(w, v));
    const E = mw(Xn(r, w.prop || {}), i), m = E.root, _ = E.prop, O = E.directive, C = new Array().concat(
      w.excludeKeys || [],
      r.excludeKeys || [],
      i.excludeKeys || []
    ), N = { ...l, ..._, ...w }, M = {
      $tag: b(f),
      $tagname: b(d),
      $isHtml: b(h),
      $slots: c,
      $elem: r,
      $context: i,
      $root: m,
      $prop: _,
      $directive: O,
      $elemSetupRes: v,
      $ctxSetupRes: S,
      $setupRes: w,
      $parent: s,
      $params: l
    }, k = L(() => new Array().concat(b(m.children), b(m.cls)).filter(($) => $ != null)), R = ($) => {
      const z = b(k);
      if (z.length === 0)
        return;
      const Y = {
        default: []
      };
      z.forEach((D) => {
        const G = b(D);
        if (J_(G))
          Y.default.push(() => G);
        else if (ue.exports.isFunction(G))
          Y.default.push((U) => G($, U, M));
        else if (ue.exports.isObject(G)) {
          const U = bw(G);
          Y[U] || (Y[U] = []), Y[U].push(
            (Z) => gt(qt("els-elem"), {
              elem: G,
              context: i,
              parent: { elem: r, tagname: b(d), setupRes: w },
              params: $,
              slotParams: Z,
              slots: c
            })
          );
        } else
          Y.default.push((U) => xw(String(G), $));
      });
      const te = {};
      return Object.keys(Y).forEach((D) => {
        te[D] = (G) => Y[D].map((U) => U(G));
      }), te;
    };
    return () => {
      const $ = b(d), z = Ow(m["slot-scope"], e.slotParams), Y = { ...N, ...z }, te = ww(O, Y);
      if (te["v-if"] === !1)
        return;
      const D = ue.exports.omit(Xn(
        _,
        te["v-bind"],
        te["v-on"]
      ), C), G = R(Y), U = {
        tag: f.value,
        tagname: $,
        isHtml: Y.$isHtml,
        props: D,
        children: G,
        context: i,
        elem: r,
        slots: c,
        parent: s,
        directives: te,
        setupRes: w
      }, Z = (v == null ? void 0 : v.render) || (m == null ? void 0 : m.render) || (S == null ? void 0 : S.render) || (i == null ? void 0 : i.render);
      if (Z) {
        if (ue.exports.isFunction(Z))
          return Z(U);
        if (Z[$] != null)
          return Z[$](U);
      }
      return Wl(U);
    };
  }
}), cl = {
  install(e) {
    e.component("els-elem", iu);
  }
};
var Tw = typeof global == "object" && global && global.Object === Object && global;
const Up = Tw;
var Cw = typeof self == "object" && self && self.Object === Object && self, Aw = Up || Cw || Function("return this")();
const Un = Aw;
var Iw = Un.Symbol;
const Qn = Iw;
var Vp = Object.prototype, $w = Vp.hasOwnProperty, Pw = Vp.toString, ii = Qn ? Qn.toStringTag : void 0;
function Mw(e) {
  var n = $w.call(e, ii), r = e[ii];
  try {
    e[ii] = void 0;
    var i = !0;
  } catch {
  }
  var s = Pw.call(e);
  return i && (n ? e[ii] = r : delete e[ii]), s;
}
var Rw = Object.prototype, Lw = Rw.toString;
function Fw(e) {
  return Lw.call(e);
}
var Bw = "[object Null]", kw = "[object Undefined]", hd = Qn ? Qn.toStringTag : void 0;
function No(e) {
  return e == null ? e === void 0 ? kw : Bw : hd && hd in Object(e) ? Mw(e) : Fw(e);
}
function Dr(e) {
  return e != null && typeof e == "object";
}
var Nw = "[object Symbol]";
function Wa(e) {
  return typeof e == "symbol" || Dr(e) && No(e) == Nw;
}
function Dw(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i; )
    s[r] = n(e[r], r, e);
  return s;
}
var Ww = Array.isArray;
const yr = Ww;
var zw = 1 / 0, vd = Qn ? Qn.prototype : void 0, gd = vd ? vd.toString : void 0;
function Kp(e) {
  if (typeof e == "string")
    return e;
  if (yr(e))
    return Dw(e, Kp) + "";
  if (Wa(e))
    return gd ? gd.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -zw ? "-0" : n;
}
var Hw = /\s/;
function qw(e) {
  for (var n = e.length; n-- && Hw.test(e.charAt(n)); )
    ;
  return n;
}
var Uw = /^\s+/;
function Vw(e) {
  return e && e.slice(0, qw(e) + 1).replace(Uw, "");
}
function er(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var md = 0 / 0, Kw = /^[-+]0x[0-9a-f]+$/i, Gw = /^0b[01]+$/i, jw = /^0o[0-7]+$/i, Yw = parseInt;
function bd(e) {
  if (typeof e == "number")
    return e;
  if (Wa(e))
    return md;
  if (er(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = er(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Vw(e);
  var r = Gw.test(e);
  return r || jw.test(e) ? Yw(e.slice(2), r ? 2 : 8) : Kw.test(e) ? md : +e;
}
var Zw = "[object AsyncFunction]", Xw = "[object Function]", Jw = "[object GeneratorFunction]", Qw = "[object Proxy]";
function Gp(e) {
  if (!er(e))
    return !1;
  var n = No(e);
  return n == Xw || n == Jw || n == Zw || n == Qw;
}
var e2 = Un["__core-js_shared__"];
const fl = e2;
var yd = function() {
  var e = /[^.]+$/.exec(fl && fl.keys && fl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function t2(e) {
  return !!yd && yd in e;
}
var n2 = Function.prototype, r2 = n2.toString;
function so(e) {
  if (e != null) {
    try {
      return r2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var o2 = /[\\^$.*+?()[\]{}|]/g, i2 = /^\[object .+?Constructor\]$/, a2 = Function.prototype, s2 = Object.prototype, l2 = a2.toString, u2 = s2.hasOwnProperty, c2 = RegExp(
  "^" + l2.call(u2).replace(o2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function f2(e) {
  if (!er(e) || t2(e))
    return !1;
  var n = Gp(e) ? c2 : i2;
  return n.test(so(e));
}
function d2(e, n) {
  return e == null ? void 0 : e[n];
}
function lo(e, n) {
  var r = d2(e, n);
  return f2(r) ? r : void 0;
}
var p2 = lo(Un, "WeakMap");
const zl = p2;
var _d = Object.create, h2 = function() {
  function e() {
  }
  return function(n) {
    if (!er(n))
      return {};
    if (_d)
      return _d(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const v2 = h2;
function g2(e, n) {
  var r = -1, i = e.length;
  for (n || (n = Array(i)); ++r < i; )
    n[r] = e[r];
  return n;
}
var m2 = function() {
  try {
    var e = lo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const wd = m2;
function b2(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i && n(e[r], r, e) !== !1; )
    ;
  return e;
}
var y2 = 9007199254740991, _2 = /^(?:0|[1-9]\d*)$/;
function jp(e, n) {
  var r = typeof e;
  return n = n == null ? y2 : n, !!n && (r == "number" || r != "symbol" && _2.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Yp(e, n, r) {
  n == "__proto__" && wd ? wd(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function au(e, n) {
  return e === n || e !== e && n !== n;
}
var w2 = Object.prototype, S2 = w2.hasOwnProperty;
function su(e, n, r) {
  var i = e[n];
  (!(S2.call(e, n) && au(i, r)) || r === void 0 && !(n in e)) && Yp(e, n, r);
}
function za(e, n, r, i) {
  var s = !r;
  r || (r = {});
  for (var l = -1, c = n.length; ++l < c; ) {
    var f = n[l], d = i ? i(r[f], e[f], f, r, e) : void 0;
    d === void 0 && (d = e[f]), s ? Yp(r, f, d) : su(r, f, d);
  }
  return r;
}
var E2 = 9007199254740991;
function Zp(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= E2;
}
function Xp(e) {
  return e != null && Zp(e.length) && !Gp(e);
}
var x2 = Object.prototype;
function lu(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || x2;
  return e === r;
}
function O2(e, n) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = n(r);
  return i;
}
var T2 = "[object Arguments]";
function Sd(e) {
  return Dr(e) && No(e) == T2;
}
var Jp = Object.prototype, C2 = Jp.hasOwnProperty, A2 = Jp.propertyIsEnumerable, I2 = Sd(function() {
  return arguments;
}()) ? Sd : function(e) {
  return Dr(e) && C2.call(e, "callee") && !A2.call(e, "callee");
};
const $2 = I2;
function P2() {
  return !1;
}
var Qp = typeof exports == "object" && exports && !exports.nodeType && exports, Ed = Qp && typeof module == "object" && module && !module.nodeType && module, M2 = Ed && Ed.exports === Qp, xd = M2 ? Un.Buffer : void 0, R2 = xd ? xd.isBuffer : void 0, L2 = R2 || P2;
const Ra = L2;
var F2 = "[object Arguments]", B2 = "[object Array]", k2 = "[object Boolean]", N2 = "[object Date]", D2 = "[object Error]", W2 = "[object Function]", z2 = "[object Map]", H2 = "[object Number]", q2 = "[object Object]", U2 = "[object RegExp]", V2 = "[object Set]", K2 = "[object String]", G2 = "[object WeakMap]", j2 = "[object ArrayBuffer]", Y2 = "[object DataView]", Z2 = "[object Float32Array]", X2 = "[object Float64Array]", J2 = "[object Int8Array]", Q2 = "[object Int16Array]", eS = "[object Int32Array]", tS = "[object Uint8Array]", nS = "[object Uint8ClampedArray]", rS = "[object Uint16Array]", oS = "[object Uint32Array]", Je = {};
Je[Z2] = Je[X2] = Je[J2] = Je[Q2] = Je[eS] = Je[tS] = Je[nS] = Je[rS] = Je[oS] = !0;
Je[F2] = Je[B2] = Je[j2] = Je[k2] = Je[Y2] = Je[N2] = Je[D2] = Je[W2] = Je[z2] = Je[H2] = Je[q2] = Je[U2] = Je[V2] = Je[K2] = Je[G2] = !1;
function iS(e) {
  return Dr(e) && Zp(e.length) && !!Je[No(e)];
}
function uu(e) {
  return function(n) {
    return e(n);
  };
}
var eh = typeof exports == "object" && exports && !exports.nodeType && exports, ui = eh && typeof module == "object" && module && !module.nodeType && module, aS = ui && ui.exports === eh, dl = aS && Up.process, sS = function() {
  try {
    var e = ui && ui.require && ui.require("util").types;
    return e || dl && dl.binding && dl.binding("util");
  } catch {
  }
}();
const $o = sS;
var Od = $o && $o.isTypedArray, lS = Od ? uu(Od) : iS;
const th = lS;
var uS = Object.prototype, cS = uS.hasOwnProperty;
function nh(e, n) {
  var r = yr(e), i = !r && $2(e), s = !r && !i && Ra(e), l = !r && !i && !s && th(e), c = r || i || s || l, f = c ? O2(e.length, String) : [], d = f.length;
  for (var h in e)
    (n || cS.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || jp(h, d))) && f.push(h);
  return f;
}
function rh(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var fS = rh(Object.keys, Object);
const dS = fS;
var pS = Object.prototype, hS = pS.hasOwnProperty;
function vS(e) {
  if (!lu(e))
    return dS(e);
  var n = [];
  for (var r in Object(e))
    hS.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function cu(e) {
  return Xp(e) ? nh(e) : vS(e);
}
function gS(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var mS = Object.prototype, bS = mS.hasOwnProperty;
function yS(e) {
  if (!er(e))
    return gS(e);
  var n = lu(e), r = [];
  for (var i in e)
    i == "constructor" && (n || !bS.call(e, i)) || r.push(i);
  return r;
}
function fu(e) {
  return Xp(e) ? nh(e, !0) : yS(e);
}
var _S = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wS = /^\w*$/;
function SS(e, n) {
  if (yr(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Wa(e) ? !0 : wS.test(e) || !_S.test(e) || n != null && e in Object(n);
}
var ES = lo(Object, "create");
const hi = ES;
function xS() {
  this.__data__ = hi ? hi(null) : {}, this.size = 0;
}
function OS(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var TS = "__lodash_hash_undefined__", CS = Object.prototype, AS = CS.hasOwnProperty;
function IS(e) {
  var n = this.__data__;
  if (hi) {
    var r = n[e];
    return r === TS ? void 0 : r;
  }
  return AS.call(n, e) ? n[e] : void 0;
}
var $S = Object.prototype, PS = $S.hasOwnProperty;
function MS(e) {
  var n = this.__data__;
  return hi ? n[e] !== void 0 : PS.call(n, e);
}
var RS = "__lodash_hash_undefined__";
function LS(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = hi && n === void 0 ? RS : n, this;
}
function oo(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
oo.prototype.clear = xS;
oo.prototype.delete = OS;
oo.prototype.get = IS;
oo.prototype.has = MS;
oo.prototype.set = LS;
function FS() {
  this.__data__ = [], this.size = 0;
}
function Ha(e, n) {
  for (var r = e.length; r--; )
    if (au(e[r][0], n))
      return r;
  return -1;
}
var BS = Array.prototype, kS = BS.splice;
function NS(e) {
  var n = this.__data__, r = Ha(n, e);
  if (r < 0)
    return !1;
  var i = n.length - 1;
  return r == i ? n.pop() : kS.call(n, r, 1), --this.size, !0;
}
function DS(e) {
  var n = this.__data__, r = Ha(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function WS(e) {
  return Ha(this.__data__, e) > -1;
}
function zS(e, n) {
  var r = this.__data__, i = Ha(r, e);
  return i < 0 ? (++this.size, r.push([e, n])) : r[i][1] = n, this;
}
function xr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
xr.prototype.clear = FS;
xr.prototype.delete = NS;
xr.prototype.get = DS;
xr.prototype.has = WS;
xr.prototype.set = zS;
var HS = lo(Un, "Map");
const vi = HS;
function qS() {
  this.size = 0, this.__data__ = {
    hash: new oo(),
    map: new (vi || xr)(),
    string: new oo()
  };
}
function US(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function qa(e, n) {
  var r = e.__data__;
  return US(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function VS(e) {
  var n = qa(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function KS(e) {
  return qa(this, e).get(e);
}
function GS(e) {
  return qa(this, e).has(e);
}
function jS(e, n) {
  var r = qa(this, e), i = r.size;
  return r.set(e, n), this.size += r.size == i ? 0 : 1, this;
}
function Or(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var i = e[n];
    this.set(i[0], i[1]);
  }
}
Or.prototype.clear = qS;
Or.prototype.delete = VS;
Or.prototype.get = KS;
Or.prototype.has = GS;
Or.prototype.set = jS;
var YS = "Expected a function";
function du(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(YS);
  var r = function() {
    var i = arguments, s = n ? n.apply(this, i) : i[0], l = r.cache;
    if (l.has(s))
      return l.get(s);
    var c = e.apply(this, i);
    return r.cache = l.set(s, c) || l, c;
  };
  return r.cache = new (du.Cache || Or)(), r;
}
du.Cache = Or;
var ZS = 500;
function XS(e) {
  var n = du(e, function(i) {
    return r.size === ZS && r.clear(), i;
  }), r = n.cache;
  return n;
}
var JS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, QS = /\\(\\)?/g, eE = XS(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(JS, function(r, i, s, l) {
    n.push(s ? l.replace(QS, "$1") : i || r);
  }), n;
});
const tE = eE;
function nE(e) {
  return e == null ? "" : Kp(e);
}
function oh(e, n) {
  return yr(e) ? e : SS(e, n) ? [e] : tE(nE(e));
}
var rE = 1 / 0;
function ih(e) {
  if (typeof e == "string" || Wa(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -rE ? "-0" : n;
}
function oE(e, n) {
  n = oh(n, e);
  for (var r = 0, i = n.length; e != null && r < i; )
    e = e[ih(n[r++])];
  return r && r == i ? e : void 0;
}
function pn(e, n, r) {
  var i = e == null ? void 0 : oE(e, n);
  return i === void 0 ? r : i;
}
function ah(e, n) {
  for (var r = -1, i = n.length, s = e.length; ++r < i; )
    e[s + r] = n[r];
  return e;
}
var iE = rh(Object.getPrototypeOf, Object);
const sh = iE;
function Hl() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return yr(e) ? e : [e];
}
function aE() {
  this.__data__ = new xr(), this.size = 0;
}
function sE(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function lE(e) {
  return this.__data__.get(e);
}
function uE(e) {
  return this.__data__.has(e);
}
var cE = 200;
function fE(e, n) {
  var r = this.__data__;
  if (r instanceof xr) {
    var i = r.__data__;
    if (!vi || i.length < cE - 1)
      return i.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new Or(i);
  }
  return r.set(e, n), this.size = r.size, this;
}
function br(e) {
  var n = this.__data__ = new xr(e);
  this.size = n.size;
}
br.prototype.clear = aE;
br.prototype.delete = sE;
br.prototype.get = lE;
br.prototype.has = uE;
br.prototype.set = fE;
function dE(e, n) {
  return e && za(n, cu(n), e);
}
function pE(e, n) {
  return e && za(n, fu(n), e);
}
var lh = typeof exports == "object" && exports && !exports.nodeType && exports, Td = lh && typeof module == "object" && module && !module.nodeType && module, hE = Td && Td.exports === lh, Cd = hE ? Un.Buffer : void 0, Ad = Cd ? Cd.allocUnsafe : void 0;
function vE(e, n) {
  if (n)
    return e.slice();
  var r = e.length, i = Ad ? Ad(r) : new e.constructor(r);
  return e.copy(i), i;
}
function gE(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length, s = 0, l = []; ++r < i; ) {
    var c = e[r];
    n(c, r, e) && (l[s++] = c);
  }
  return l;
}
function uh() {
  return [];
}
var mE = Object.prototype, bE = mE.propertyIsEnumerable, Id = Object.getOwnPropertySymbols, yE = Id ? function(e) {
  return e == null ? [] : (e = Object(e), gE(Id(e), function(n) {
    return bE.call(e, n);
  }));
} : uh;
const pu = yE;
function _E(e, n) {
  return za(e, pu(e), n);
}
var wE = Object.getOwnPropertySymbols, SE = wE ? function(e) {
  for (var n = []; e; )
    ah(n, pu(e)), e = sh(e);
  return n;
} : uh;
const ch = SE;
function EE(e, n) {
  return za(e, ch(e), n);
}
function fh(e, n, r) {
  var i = n(e);
  return yr(e) ? i : ah(i, r(e));
}
function ql(e) {
  return fh(e, cu, pu);
}
function xE(e) {
  return fh(e, fu, ch);
}
var OE = lo(Un, "DataView");
const Ul = OE;
var TE = lo(Un, "Promise");
const Vl = TE;
var CE = lo(Un, "Set");
const Kl = CE;
var $d = "[object Map]", AE = "[object Object]", Pd = "[object Promise]", Md = "[object Set]", Rd = "[object WeakMap]", Ld = "[object DataView]", IE = so(Ul), $E = so(vi), PE = so(Vl), ME = so(Kl), RE = so(zl), Jr = No;
(Ul && Jr(new Ul(new ArrayBuffer(1))) != Ld || vi && Jr(new vi()) != $d || Vl && Jr(Vl.resolve()) != Pd || Kl && Jr(new Kl()) != Md || zl && Jr(new zl()) != Rd) && (Jr = function(e) {
  var n = No(e), r = n == AE ? e.constructor : void 0, i = r ? so(r) : "";
  if (i)
    switch (i) {
      case IE:
        return Ld;
      case $E:
        return $d;
      case PE:
        return Pd;
      case ME:
        return Md;
      case RE:
        return Rd;
    }
  return n;
});
const gi = Jr;
var LE = Object.prototype, FE = LE.hasOwnProperty;
function BE(e) {
  var n = e.length, r = new e.constructor(n);
  return n && typeof e[0] == "string" && FE.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var kE = Un.Uint8Array;
const La = kE;
function hu(e) {
  var n = new e.constructor(e.byteLength);
  return new La(n).set(new La(e)), n;
}
function NE(e, n) {
  var r = n ? hu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var DE = /\w*$/;
function WE(e) {
  var n = new e.constructor(e.source, DE.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Fd = Qn ? Qn.prototype : void 0, Bd = Fd ? Fd.valueOf : void 0;
function zE(e) {
  return Bd ? Object(Bd.call(e)) : {};
}
function HE(e, n) {
  var r = n ? hu(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var qE = "[object Boolean]", UE = "[object Date]", VE = "[object Map]", KE = "[object Number]", GE = "[object RegExp]", jE = "[object Set]", YE = "[object String]", ZE = "[object Symbol]", XE = "[object ArrayBuffer]", JE = "[object DataView]", QE = "[object Float32Array]", ex = "[object Float64Array]", tx = "[object Int8Array]", nx = "[object Int16Array]", rx = "[object Int32Array]", ox = "[object Uint8Array]", ix = "[object Uint8ClampedArray]", ax = "[object Uint16Array]", sx = "[object Uint32Array]";
function lx(e, n, r) {
  var i = e.constructor;
  switch (n) {
    case XE:
      return hu(e);
    case qE:
    case UE:
      return new i(+e);
    case JE:
      return NE(e, r);
    case QE:
    case ex:
    case tx:
    case nx:
    case rx:
    case ox:
    case ix:
    case ax:
    case sx:
      return HE(e, r);
    case VE:
      return new i();
    case KE:
    case YE:
      return new i(e);
    case GE:
      return WE(e);
    case jE:
      return new i();
    case ZE:
      return zE(e);
  }
}
function ux(e) {
  return typeof e.constructor == "function" && !lu(e) ? v2(sh(e)) : {};
}
var cx = "[object Map]";
function fx(e) {
  return Dr(e) && gi(e) == cx;
}
var kd = $o && $o.isMap, dx = kd ? uu(kd) : fx;
const px = dx;
var hx = "[object Set]";
function vx(e) {
  return Dr(e) && gi(e) == hx;
}
var Nd = $o && $o.isSet, gx = Nd ? uu(Nd) : vx;
const mx = gx;
var bx = 1, yx = 2, _x = 4, dh = "[object Arguments]", wx = "[object Array]", Sx = "[object Boolean]", Ex = "[object Date]", xx = "[object Error]", ph = "[object Function]", Ox = "[object GeneratorFunction]", Tx = "[object Map]", Cx = "[object Number]", hh = "[object Object]", Ax = "[object RegExp]", Ix = "[object Set]", $x = "[object String]", Px = "[object Symbol]", Mx = "[object WeakMap]", Rx = "[object ArrayBuffer]", Lx = "[object DataView]", Fx = "[object Float32Array]", Bx = "[object Float64Array]", kx = "[object Int8Array]", Nx = "[object Int16Array]", Dx = "[object Int32Array]", Wx = "[object Uint8Array]", zx = "[object Uint8ClampedArray]", Hx = "[object Uint16Array]", qx = "[object Uint32Array]", Ye = {};
Ye[dh] = Ye[wx] = Ye[Rx] = Ye[Lx] = Ye[Sx] = Ye[Ex] = Ye[Fx] = Ye[Bx] = Ye[kx] = Ye[Nx] = Ye[Dx] = Ye[Tx] = Ye[Cx] = Ye[hh] = Ye[Ax] = Ye[Ix] = Ye[$x] = Ye[Px] = Ye[Wx] = Ye[zx] = Ye[Hx] = Ye[qx] = !0;
Ye[xx] = Ye[ph] = Ye[Mx] = !1;
function Oa(e, n, r, i, s, l) {
  var c, f = n & bx, d = n & yx, h = n & _x;
  if (r && (c = s ? r(e, i, s, l) : r(e)), c !== void 0)
    return c;
  if (!er(e))
    return e;
  var v = yr(e);
  if (v) {
    if (c = BE(e), !f)
      return g2(e, c);
  } else {
    var S = gi(e), w = S == ph || S == Ox;
    if (Ra(e))
      return vE(e, f);
    if (S == hh || S == dh || w && !s) {
      if (c = d || w ? {} : ux(e), !f)
        return d ? EE(e, pE(c, e)) : _E(e, dE(c, e));
    } else {
      if (!Ye[S])
        return s ? e : {};
      c = lx(e, S, f);
    }
  }
  l || (l = new br());
  var E = l.get(e);
  if (E)
    return E;
  l.set(e, c), mx(e) ? e.forEach(function(O) {
    c.add(Oa(O, n, r, O, e, l));
  }) : px(e) && e.forEach(function(O, C) {
    c.set(C, Oa(O, n, r, C, e, l));
  });
  var m = h ? d ? xE : ql : d ? fu : cu, _ = v ? void 0 : m(e);
  return b2(_ || e, function(O, C) {
    _ && (C = O, O = e[C]), su(c, C, Oa(O, n, r, C, e, l));
  }), c;
}
var Ux = 4;
function Dd(e) {
  return Oa(e, Ux);
}
var Vx = "__lodash_hash_undefined__";
function Kx(e) {
  return this.__data__.set(e, Vx), this;
}
function Gx(e) {
  return this.__data__.has(e);
}
function Fa(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Or(); ++n < r; )
    this.add(e[n]);
}
Fa.prototype.add = Fa.prototype.push = Kx;
Fa.prototype.has = Gx;
function jx(e, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function Yx(e, n) {
  return e.has(n);
}
var Zx = 1, Xx = 2;
function vh(e, n, r, i, s, l) {
  var c = r & Zx, f = e.length, d = n.length;
  if (f != d && !(c && d > f))
    return !1;
  var h = l.get(e), v = l.get(n);
  if (h && v)
    return h == n && v == e;
  var S = -1, w = !0, E = r & Xx ? new Fa() : void 0;
  for (l.set(e, n), l.set(n, e); ++S < f; ) {
    var m = e[S], _ = n[S];
    if (i)
      var O = c ? i(_, m, S, n, e, l) : i(m, _, S, e, n, l);
    if (O !== void 0) {
      if (O)
        continue;
      w = !1;
      break;
    }
    if (E) {
      if (!jx(n, function(C, N) {
        if (!Yx(E, N) && (m === C || s(m, C, r, i, l)))
          return E.push(N);
      })) {
        w = !1;
        break;
      }
    } else if (!(m === _ || s(m, _, r, i, l))) {
      w = !1;
      break;
    }
  }
  return l.delete(e), l.delete(n), w;
}
function Jx(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(i, s) {
    r[++n] = [s, i];
  }), r;
}
function Qx(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++n] = i;
  }), r;
}
var eO = 1, tO = 2, nO = "[object Boolean]", rO = "[object Date]", oO = "[object Error]", iO = "[object Map]", aO = "[object Number]", sO = "[object RegExp]", lO = "[object Set]", uO = "[object String]", cO = "[object Symbol]", fO = "[object ArrayBuffer]", dO = "[object DataView]", Wd = Qn ? Qn.prototype : void 0, pl = Wd ? Wd.valueOf : void 0;
function pO(e, n, r, i, s, l, c) {
  switch (r) {
    case dO:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case fO:
      return !(e.byteLength != n.byteLength || !l(new La(e), new La(n)));
    case nO:
    case rO:
    case aO:
      return au(+e, +n);
    case oO:
      return e.name == n.name && e.message == n.message;
    case sO:
    case uO:
      return e == n + "";
    case iO:
      var f = Jx;
    case lO:
      var d = i & eO;
      if (f || (f = Qx), e.size != n.size && !d)
        return !1;
      var h = c.get(e);
      if (h)
        return h == n;
      i |= tO, c.set(e, n);
      var v = vh(f(e), f(n), i, s, l, c);
      return c.delete(e), v;
    case cO:
      if (pl)
        return pl.call(e) == pl.call(n);
  }
  return !1;
}
var hO = 1, vO = Object.prototype, gO = vO.hasOwnProperty;
function mO(e, n, r, i, s, l) {
  var c = r & hO, f = ql(e), d = f.length, h = ql(n), v = h.length;
  if (d != v && !c)
    return !1;
  for (var S = d; S--; ) {
    var w = f[S];
    if (!(c ? w in n : gO.call(n, w)))
      return !1;
  }
  var E = l.get(e), m = l.get(n);
  if (E && m)
    return E == n && m == e;
  var _ = !0;
  l.set(e, n), l.set(n, e);
  for (var O = c; ++S < d; ) {
    w = f[S];
    var C = e[w], N = n[w];
    if (i)
      var M = c ? i(N, C, w, n, e, l) : i(C, N, w, e, n, l);
    if (!(M === void 0 ? C === N || s(C, N, r, i, l) : M)) {
      _ = !1;
      break;
    }
    O || (O = w == "constructor");
  }
  if (_ && !O) {
    var k = e.constructor, R = n.constructor;
    k != R && "constructor" in e && "constructor" in n && !(typeof k == "function" && k instanceof k && typeof R == "function" && R instanceof R) && (_ = !1);
  }
  return l.delete(e), l.delete(n), _;
}
var bO = 1, zd = "[object Arguments]", Hd = "[object Array]", ba = "[object Object]", yO = Object.prototype, qd = yO.hasOwnProperty;
function _O(e, n, r, i, s, l) {
  var c = yr(e), f = yr(n), d = c ? Hd : gi(e), h = f ? Hd : gi(n);
  d = d == zd ? ba : d, h = h == zd ? ba : h;
  var v = d == ba, S = h == ba, w = d == h;
  if (w && Ra(e)) {
    if (!Ra(n))
      return !1;
    c = !0, v = !1;
  }
  if (w && !v)
    return l || (l = new br()), c || th(e) ? vh(e, n, r, i, s, l) : pO(e, n, d, r, i, s, l);
  if (!(r & bO)) {
    var E = v && qd.call(e, "__wrapped__"), m = S && qd.call(n, "__wrapped__");
    if (E || m) {
      var _ = E ? e.value() : e, O = m ? n.value() : n;
      return l || (l = new br()), s(_, O, r, i, l);
    }
  }
  return w ? (l || (l = new br()), mO(e, n, r, i, s, l)) : !1;
}
function gh(e, n, r, i, s) {
  return e === n ? !0 : e == null || n == null || !Dr(e) && !Dr(n) ? e !== e && n !== n : _O(e, n, r, i, gh, s);
}
var wO = function() {
  return Un.Date.now();
};
const hl = wO;
var SO = "Expected a function", EO = Math.max, xO = Math.min;
function Ud(e, n, r) {
  var i, s, l, c, f, d, h = 0, v = !1, S = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(SO);
  n = bd(n) || 0, er(r) && (v = !!r.leading, S = "maxWait" in r, l = S ? EO(bd(r.maxWait) || 0, n) : l, w = "trailing" in r ? !!r.trailing : w);
  function E(A) {
    var $ = i, z = s;
    return i = s = void 0, h = A, c = e.apply(z, $), c;
  }
  function m(A) {
    return h = A, f = setTimeout(C, n), v ? E(A) : c;
  }
  function _(A) {
    var $ = A - d, z = A - h, Y = n - $;
    return S ? xO(Y, l - z) : Y;
  }
  function O(A) {
    var $ = A - d, z = A - h;
    return d === void 0 || $ >= n || $ < 0 || S && z >= l;
  }
  function C() {
    var A = hl();
    if (O(A))
      return N(A);
    f = setTimeout(C, _(A));
  }
  function N(A) {
    return f = void 0, w && i ? E(A) : (i = s = void 0, c);
  }
  function M() {
    f !== void 0 && clearTimeout(f), h = 0, i = d = s = f = void 0;
  }
  function k() {
    return f === void 0 ? c : N(hl());
  }
  function R() {
    var A = hl(), $ = O(A);
    if (i = arguments, s = this, d = A, $) {
      if (f === void 0)
        return m(d);
      if (S)
        return clearTimeout(f), f = setTimeout(C, n), E(d);
    }
    return f === void 0 && (f = setTimeout(C, n)), c;
  }
  return R.cancel = M, R.flush = k, R;
}
function mh(e) {
  for (var n = -1, r = e == null ? 0 : e.length, i = {}; ++n < r; ) {
    var s = e[n];
    i[s[0]] = s[1];
  }
  return i;
}
function Vd(e, n) {
  return gh(e, n);
}
function Ua(e) {
  return e == null;
}
function OO(e, n, r, i) {
  if (!er(e))
    return e;
  n = oh(n, e);
  for (var s = -1, l = n.length, c = l - 1, f = e; f != null && ++s < l; ) {
    var d = ih(n[s]), h = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (s != c) {
      var v = f[d];
      h = i ? i(v, d, f) : void 0, h === void 0 && (h = er(v) ? v : jp(n[s + 1]) ? [] : {});
    }
    su(f, d, h), f = f[d];
  }
  return e;
}
function TO(e, n, r) {
  return e == null ? e : OO(e, n, r);
}
const Ta = function(e, n, ...r) {
  let i;
  n.includes("mouse") || n.includes("click") ? i = "MouseEvents" : n.includes("key") ? i = "KeyboardEvent" : i = "HTMLEvents";
  const s = document.createEvent(i);
  return s.initEvent(n, ...r), e.dispatchEvent(s), e;
}, mr = (e, n, { checkForDefaultPrevented: r = !0 } = {}) => (s) => {
  const l = e == null ? void 0 : e(s);
  if (r === !1 || !l)
    return n == null ? void 0 : n(s);
};
var Kd;
const kt = typeof window < "u", _r = (e) => typeof e == "boolean", $n = (e) => typeof e == "number", CO = (e) => typeof e == "string", vl = () => {
};
kt && ((Kd = window == null ? void 0 : window.navigator) == null ? void 0 : Kd.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ba(e) {
  return typeof e == "function" ? e() : b(e);
}
function AO(e, n) {
  function r(...i) {
    e(() => n.apply(this, i), { fn: n, thisArg: this, args: i });
  }
  return r;
}
function IO(e, n = {}) {
  let r, i;
  return (l) => {
    const c = Ba(e), f = Ba(n.maxWait);
    if (r && clearTimeout(r), c <= 0 || f !== void 0 && f <= 0)
      return i && (clearTimeout(i), i = null), l();
    f && !i && (i = setTimeout(() => {
      r && clearTimeout(r), i = null, l();
    }, f)), r = setTimeout(() => {
      i && clearTimeout(i), i = null, l();
    }, c);
  };
}
function $O(e) {
  return e;
}
function Va(e) {
  return Q_() ? (ew(e), !0) : !1;
}
function PO(e, n = 200, r = {}) {
  return AO(IO(n, r), e);
}
function MO(e, n = 200, r = {}) {
  if (n <= 0)
    return e;
  const i = X(e.value), s = PO(() => {
    i.value = e.value;
  }, n, r);
  return pe(e, () => s()), i;
}
function RO(e, n = !0) {
  rn() ? ut(e) : n ? e() : De(e);
}
function Gd(e, n, r = {}) {
  const {
    immediate: i = !0
  } = r, s = X(!1);
  let l = null;
  function c() {
    l && (clearTimeout(l), l = null);
  }
  function f() {
    s.value = !1, c();
  }
  function d(...h) {
    c(), s.value = !0, l = setTimeout(() => {
      s.value = !1, l = null, e(...h);
    }, Ba(n));
  }
  return i && (s.value = !0, kt && d()), Va(f), {
    isPending: s,
    start: d,
    stop: f
  };
}
function kr(e) {
  var n;
  const r = Ba(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const vu = kt ? window : void 0;
function Qr(...e) {
  let n, r, i, s;
  if (CO(e[0]) ? ([r, i, s] = e, n = vu) : [n, r, i, s] = e, !n)
    return vl;
  let l = vl;
  const c = pe(() => kr(n), (d) => {
    l(), d && (d.addEventListener(r, i, s), l = () => {
      d.removeEventListener(r, i, s), l = vl;
    });
  }, { immediate: !0, flush: "post" }), f = () => {
    c(), l();
  };
  return Va(f), f;
}
function LO(e, n, r = {}) {
  const { window: i = vu, ignore: s, capture: l = !0, detectIframe: c = !1 } = r;
  if (!i)
    return;
  const f = X(!0);
  let d;
  const h = (w) => {
    i.clearTimeout(d);
    const E = kr(e), m = w.composedPath();
    !E || E === w.target || m.includes(E) || !f.value || s && s.length > 0 && s.some((_) => {
      const O = kr(_);
      return O && (w.target === O || m.includes(O));
    }) || n(w);
  }, v = [
    Qr(i, "click", h, { passive: !0, capture: l }),
    Qr(i, "pointerdown", (w) => {
      const E = kr(e);
      f.value = !!E && !w.composedPath().includes(E);
    }, { passive: !0 }),
    Qr(i, "pointerup", (w) => {
      if (w.button === 0) {
        const E = w.composedPath();
        w.composedPath = () => E, d = i.setTimeout(() => h(w), 50);
      }
    }, { passive: !0 }),
    c && Qr(i, "blur", (w) => {
      var E;
      const m = kr(e);
      ((E = document.activeElement) == null ? void 0 : E.tagName) === "IFRAME" && !(m != null && m.contains(document.activeElement)) && n(w);
    })
  ].filter(Boolean);
  return () => v.forEach((w) => w());
}
function FO(e, n = !1) {
  const r = X(), i = () => r.value = Boolean(e());
  return i(), RO(i, n), r;
}
const Gl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jl = "__vueuse_ssr_handlers__";
Gl[jl] = Gl[jl] || {};
Gl[jl];
var jd = Object.getOwnPropertySymbols, BO = Object.prototype.hasOwnProperty, kO = Object.prototype.propertyIsEnumerable, NO = (e, n) => {
  var r = {};
  for (var i in e)
    BO.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && jd)
    for (var i of jd(e))
      n.indexOf(i) < 0 && kO.call(e, i) && (r[i] = e[i]);
  return r;
};
function Do(e, n, r = {}) {
  const i = r, { window: s = vu } = i, l = NO(i, ["window"]);
  let c;
  const f = FO(() => s && "ResizeObserver" in s), d = () => {
    c && (c.disconnect(), c = void 0);
  }, h = pe(() => kr(e), (S) => {
    d(), f.value && s && S && (c = new ResizeObserver(n), c.observe(S, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    d(), h();
  };
  return Va(v), {
    isSupported: f,
    stop: v
  };
}
var Yd;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yd || (Yd = {}));
var DO = Object.defineProperty, Zd = Object.getOwnPropertySymbols, WO = Object.prototype.hasOwnProperty, zO = Object.prototype.propertyIsEnumerable, Xd = (e, n, r) => n in e ? DO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, HO = (e, n) => {
  for (var r in n || (n = {}))
    WO.call(n, r) && Xd(e, r, n[r]);
  if (Zd)
    for (var r of Zd(n))
      zO.call(n, r) && Xd(e, r, n[r]);
  return e;
};
const qO = {
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
HO({
  linear: $O
}, qO);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const mi = () => {
}, UO = Object.prototype.hasOwnProperty, Jd = (e, n) => UO.call(e, n), ka = Array.isArray, Co = (e) => typeof e == "function", xt = (e) => typeof e == "string", wr = (e) => e !== null && typeof e == "object", VO = Object.prototype.toString, bh = (e) => VO.call(e), gl = (e) => bh(e).slice(8, -1), Yl = (e) => e === void 0, bi = (e) => typeof Element > "u" ? !1 : e instanceof Element, KO = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ml = (e, n, r) => ({
  get value() {
    return pn(e, n, r);
  },
  set value(i) {
    TO(e, n, i);
  }
});
class yh extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Po(e, n) {
  throw new yh(`[${e}] ${n}`);
}
function bt(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const r = xt(e) ? new yh(`[${e}] ${n}`) : e;
    console.warn(r);
  }
}
const GO = "utils/dom/style", _h = (e = "") => e.split(" ").filter((n) => !!n.trim()), jO = (e, n) => {
  if (!e || !n)
    return !1;
  if (n.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(n);
}, ya = (e, n) => {
  !e || !n.trim() || e.classList.add(..._h(n));
}, bl = (e, n) => {
  !e || !n.trim() || e.classList.remove(..._h(n));
};
function yi(e, n = "px") {
  if (!e)
    return "";
  if (xt(e))
    return e;
  if ($n(e))
    return `${e}${n}`;
  bt(GO, "binding value must be a string or number");
}
function YO(e, n) {
  if (!kt)
    return;
  if (!n) {
    e.scrollTop = 0;
    return;
  }
  const r = [];
  let i = n.offsetParent;
  for (; i !== null && e !== i && e.contains(i); )
    r.push(i), i = i.offsetParent;
  const s = n.offsetTop + r.reduce((d, h) => d + h.offsetTop, 0), l = s + n.offsetHeight, c = e.scrollTop, f = c + e.clientHeight;
  s < c ? e.scrollTop = s : l > f && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.9 */
var rr = (e, n) => {
  let r = e.__vccOpts || e;
  for (let [i, s] of n)
    r[i] = s;
  return r;
}, ZO = {
  name: "ArrowDown"
}, XO = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, JO = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), QO = [
  JO
];
function eT(e, n, r, i, s, l) {
  return V(), oe("svg", XO, QO);
}
var tT = /* @__PURE__ */ rr(ZO, [["render", eT], ["__file", "arrow-down.vue"]]), nT = {
  name: "ArrowRight"
}, rT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), iT = [
  oT
];
function aT(e, n, r, i, s, l) {
  return V(), oe("svg", rT, iT);
}
var sT = /* @__PURE__ */ rr(nT, [["render", aT], ["__file", "arrow-right.vue"]]), lT = {
  name: "ArrowUp"
}, uT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), fT = [
  cT
];
function dT(e, n, r, i, s, l) {
  return V(), oe("svg", uT, fT);
}
var pT = /* @__PURE__ */ rr(lT, [["render", dT], ["__file", "arrow-up.vue"]]), hT = {
  name: "CircleCheck"
}, vT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), mT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), bT = [
  gT,
  mT
];
function yT(e, n, r, i, s, l) {
  return V(), oe("svg", vT, bT);
}
var _T = /* @__PURE__ */ rr(hT, [["render", yT], ["__file", "circle-check.vue"]]), wT = {
  name: "CircleClose"
}, ST = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ET = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), xT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), OT = [
  ET,
  xT
];
function TT(e, n, r, i, s, l) {
  return V(), oe("svg", ST, OT);
}
var gu = /* @__PURE__ */ rr(wT, [["render", TT], ["__file", "circle-close.vue"]]), CT = {
  name: "Close"
}, AT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, IT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), $T = [
  IT
];
function PT(e, n, r, i, s, l) {
  return V(), oe("svg", AT, $T);
}
var Qd = /* @__PURE__ */ rr(CT, [["render", PT], ["__file", "close.vue"]]), MT = {
  name: "Hide"
}, RT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, LT = /* @__PURE__ */ fe("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), FT = /* @__PURE__ */ fe("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), BT = [
  LT,
  FT
];
function kT(e, n, r, i, s, l) {
  return V(), oe("svg", RT, BT);
}
var NT = /* @__PURE__ */ rr(MT, [["render", kT], ["__file", "hide.vue"]]), DT = {
  name: "Loading"
}, WT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), HT = [
  zT
];
function qT(e, n, r, i, s, l) {
  return V(), oe("svg", WT, HT);
}
var UT = /* @__PURE__ */ rr(DT, [["render", qT], ["__file", "loading.vue"]]), VT = {
  name: "More"
}, KT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), jT = [
  GT
];
function YT(e, n, r, i, s, l) {
  return V(), oe("svg", KT, jT);
}
var ZT = /* @__PURE__ */ rr(VT, [["render", YT], ["__file", "more.vue"]]), XT = {
  name: "View"
}, JT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, QT = /* @__PURE__ */ fe("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), eC = [
  QT
];
function tC(e, n, r, i, s, l) {
  return V(), oe("svg", JT, eC);
}
var nC = /* @__PURE__ */ rr(XT, [["render", tC], ["__file", "view.vue"]]);
const wh = "__epPropKey", Ge = (e) => e, rC = (e) => wr(e) && !!e[wh], Ka = (e, n) => {
  if (!wr(e) || rC(e))
    return e;
  const { values: r, required: i, default: s, type: l, validator: c } = e, d = {
    type: l,
    required: !!i,
    validator: r || c ? (h) => {
      let v = !1, S = [];
      if (r && (S = Array.from(r), Jd(e, "default") && S.push(s), v || (v = S.includes(h))), c && (v || (v = c(h))), !v && S.length > 0) {
        const w = [...new Set(S)].map((E) => JSON.stringify(E)).join(", ");
        tw(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(h)}.`);
      }
      return v;
    } : void 0,
    [wh]: !0
  };
  return Jd(e, "default") && (d.default = s), d;
}, nt = (e) => mh(Object.entries(e).map(([n, r]) => [
  n,
  Ka(r, n)
])), Ao = Ge([
  String,
  Object,
  Function
]), oC = {
  validating: UT,
  success: _T,
  error: gu
}, Vn = (e, n) => {
  if (e.install = (r) => {
    for (const i of [e, ...Object.values(n != null ? n : {})])
      r.component(i.name, i);
  }, n)
    for (const [r, i] of Object.entries(n))
      e[r] = i;
  return e;
}, or = (e) => (e.install = mi, e), Vt = {
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
}, It = "update:modelValue", mu = "change", xi = ["", "default", "small", "large"], iC = {
  large: 40,
  default: 32,
  small: 24
}, aC = (e) => iC[e || "default"], sC = (e) => ["", ...xi].includes(e), Sh = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), lC = () => Math.floor(Math.random() * 1e4), Eh = (e) => e, uC = ["class", "style"], cC = /^on[A-Z]/, fC = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: r } = e, i = L(() => ((r == null ? void 0 : r.value) || []).concat(uC)), s = rn();
  return s ? L(() => {
    var l;
    return mh(Object.entries((l = s.proxy) == null ? void 0 : l.$attrs).filter(([c]) => !i.value.includes(c) && !(n && cC.test(c))));
  }) : (bt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), L(() => ({})));
}, dC = Symbol(), Wo = Symbol("formContextKey"), io = Symbol("formItemContextKey"), xh = Symbol("radioGroupKey"), Oh = Symbol("scrollbarContextKey"), bu = Symbol("popper"), Th = Symbol("popperContent"), Ch = (e) => {
  const n = rn();
  return L(() => {
    var r, i;
    return (i = ((r = n.proxy) == null ? void 0 : r.$props)[e]) != null ? i : void 0;
  });
}, ep = X();
function Oi(e, n = void 0) {
  const r = rn() ? qe(dC, ep) : ep;
  return e ? L(() => {
    var i, s;
    return (s = (i = r.value) == null ? void 0 : i[e]) != null ? s : n;
  }) : r;
}
const Ti = Ka({
  type: String,
  values: xi,
  required: !1
}), Sr = (e, n = {}) => {
  const r = X(void 0), i = n.prop ? r : Ch("size"), s = n.global ? r : Oi("size"), l = n.form ? { size: void 0 } : qe(Wo, void 0), c = n.formItem ? { size: void 0 } : qe(io, void 0);
  return L(() => i.value || b(e) || (c == null ? void 0 : c.size) || (l == null ? void 0 : l.size) || s.value || "");
}, Ah = (e) => {
  const n = Ch("disabled"), r = qe(Wo, void 0);
  return L(() => n.value || b(e) || (r == null ? void 0 : r.disabled) || !1);
}, pC = (e) => ({
  focus: () => {
    var n, r;
    (r = (n = e.value) == null ? void 0 : n.focus) == null || r.call(n);
  }
}), Ih = "el", hC = "is-", Xr = (e, n, r, i, s) => {
  let l = `${e}-${n}`;
  return r && (l += `-${r}`), i && (l += `__${i}`), s && (l += `--${s}`), l;
}, Be = (e) => {
  const n = Oi("namespace", Ih);
  return {
    namespace: n,
    b: (m = "") => Xr(n.value, e, m, "", ""),
    e: (m) => m ? Xr(n.value, e, "", m, "") : "",
    m: (m) => m ? Xr(n.value, e, "", "", m) : "",
    be: (m, _) => m && _ ? Xr(n.value, e, m, _, "") : "",
    em: (m, _) => m && _ ? Xr(n.value, e, "", m, _) : "",
    bm: (m, _) => m && _ ? Xr(n.value, e, m, "", _) : "",
    bem: (m, _, O) => m && _ && O ? Xr(n.value, e, m, _, O) : "",
    is: (m, ..._) => {
      const O = _.length >= 1 ? _[0] : !0;
      return m && O ? `${hC}${m}` : "";
    },
    cssVar: (m) => {
      const _ = {};
      for (const O in m)
        m[O] && (_[`--${n.value}-${O}`] = m[O]);
      return _;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const _ = {};
      for (const O in m)
        m[O] && (_[`--${n.value}-${e}-${O}`] = m[O]);
      return _;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
}, tp = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, vC = Symbol("elIdInjection"), Ga = (e) => {
  const n = qe(vC, tp);
  !kt && n === tp && bt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const r = Oi("namespace", Ih);
  return L(() => b(e) || `${r.value}-id-${n.prefix}-${n.current++}`);
}, ja = () => {
  const e = qe(Wo, void 0), n = qe(io, void 0);
  return {
    form: e,
    formItem: n
  };
}, Ya = (e, {
  formItemContext: n,
  disableIdGeneration: r,
  disableIdManagement: i
}) => {
  r || (r = X(!1)), i || (i = X(!1));
  const s = X();
  let l;
  const c = L(() => {
    var f;
    return !!(!e.label && n && n.inputIds && ((f = n.inputIds) == null ? void 0 : f.length) <= 1);
  });
  return ut(() => {
    l = pe([qn(e, "id"), r], ([f, d]) => {
      const h = f != null ? f : d ? void 0 : Ga().value;
      h !== s.value && (n != null && n.removeInputId && (s.value && n.removeInputId(s.value), !(i != null && i.value) && !d && h && n.addInputId(h)), s.value = h);
    }, { immediate: !0 });
  }), zp(() => {
    l && l(), n != null && n.removeInputId && s.value && n.removeInputId(s.value);
  }), {
    isLabeledByFormItem: c,
    inputId: s
  };
};
var gC = {
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
const mC = (e) => (n, r) => bC(n, r, b(e)), bC = (e, n, r) => pn(r, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var l;
  return `${(l = n == null ? void 0 : n[s]) != null ? l : `{${s}}`}`;
}), yC = (e) => {
  const n = L(() => b(e).name), r = ro(e) ? e : X(e);
  return {
    lang: n,
    locale: r,
    t: mC(e)
  };
}, yu = () => {
  const e = Oi("locale");
  return yC(L(() => e.value || gC));
}, _C = Ka({
  type: Ge(Boolean),
  default: null
}), wC = Ka({
  type: Ge(Function)
}), SC = (e) => {
  const n = `update:${e}`, r = `onUpdate:${e}`, i = [n], s = {
    [e]: _C,
    [r]: wC
  };
  return {
    useModelToggle: ({
      indicator: c,
      toggleReason: f,
      shouldHideWhenRouteChanges: d,
      shouldProceed: h,
      onShow: v,
      onHide: S
    }) => {
      const w = rn(), { emit: E } = w, m = w.props, _ = L(() => Co(m[r])), O = L(() => m[e] === null), C = ($) => {
        c.value !== !0 && (c.value = !0, f && (f.value = $), Co(v) && v($));
      }, N = ($) => {
        c.value !== !1 && (c.value = !1, f && (f.value = $), Co(S) && S($));
      }, M = ($) => {
        if (m.disabled === !0 || Co(h) && !h())
          return;
        const z = _.value && kt;
        z && E(n, !0), (O.value || !z) && C($);
      }, k = ($) => {
        if (m.disabled === !0 || !kt)
          return;
        const z = _.value && kt;
        z && E(n, !1), (O.value || !z) && N($);
      }, R = ($) => {
        !_r($) || (m.disabled && $ ? _.value && E(n, !1) : c.value !== $ && ($ ? C() : N()));
      }, A = () => {
        c.value ? k() : M();
      };
      return pe(() => m[e], R), d && w.appContext.config.globalProperties.$route !== void 0 && pe(() => ({
        ...w.proxy.$route
      }), () => {
        d.value && c.value && k();
      }), ut(() => {
        R(m[e]);
      }), {
        hide: k,
        show: M,
        toggle: A,
        hasUpdateHandler: _
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: i
  };
};
function EC() {
  let e;
  const n = (i, s) => {
    r(), e = window.setTimeout(i, s);
  }, r = () => window.clearTimeout(e);
  return Va(() => r()), {
    registerTimeout: n,
    cancelTimeout: r
  };
}
let To = [];
const np = (e) => {
  const n = e;
  n.key === Vt.esc && To.forEach((r) => r(n));
}, xC = (e) => {
  ut(() => {
    To.length === 0 && document.addEventListener("keydown", np), kt && To.push(e);
  }), vn(() => {
    To = To.filter((n) => n !== e), To.length === 0 && kt && document.removeEventListener("keydown", np);
  });
};
let rp;
const $h = `el-popper-container-${lC()}`, Ph = `#${$h}`, OC = () => {
  const e = document.createElement("div");
  return e.id = $h, document.body.appendChild(e), e;
}, TC = () => {
  nw(() => {
    !kt || (process.env.NODE_ENV === "test" || !rp || !document.body.querySelector(Ph)) && (rp = OC());
  });
}, CC = nt({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), AC = ({
  showAfter: e,
  hideAfter: n,
  open: r,
  close: i
}) => {
  const { registerTimeout: s } = EC();
  return {
    onOpen: (f) => {
      s(() => {
        r(f);
      }, b(e));
    },
    onClose: (f) => {
      s(() => {
        i(f);
      }, b(n));
    }
  };
}, Mh = Symbol("elForwardRef"), IC = (e) => {
  Nt(Mh, {
    setForwardRef: (r) => {
      e.value = r;
    }
  });
}, $C = (e) => ({
  mounted(n) {
    e(n);
  },
  updated(n) {
    e(n);
  },
  unmounted() {
    e(null);
  }
}), op = X(0), PC = () => {
  const e = Oi("zIndex", 2e3), n = L(() => e.value + op.value);
  return {
    initialZIndex: e,
    currentZIndex: n,
    nextZIndex: () => (op.value++, n.value)
  };
};
function MC(e) {
  const n = X();
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
      const h = l[f - 1], v = s.indexOf(h, f - 1);
      v !== -1 && (d = v + 1);
    }
    e.value.setSelectionRange(d, d);
  }
  return [r, i];
}
var Ue = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [i, s] of n)
    r[i] = s;
  return r;
};
const RC = nt({
  size: {
    type: Ge([Number, String])
  },
  color: {
    type: String
  }
}), LC = {
  name: "ElIcon",
  inheritAttrs: !1
}, FC = /* @__PURE__ */ $e({
  ...LC,
  props: RC,
  setup(e) {
    const n = e, r = Be("icon"), i = L(() => {
      const { size: s, color: l } = n;
      return !s && !l ? {} : {
        fontSize: Yl(s) ? void 0 : yi(s),
        "--color": l
      };
    });
    return (s, l) => (V(), oe("i", Xn({
      class: b(r).b(),
      style: b(i)
    }, s.$attrs), [
      Te(s.$slots, "default")
    ], 16));
  }
});
var BC = /* @__PURE__ */ Ue(FC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Hn = Vn(BC);
let Wn;
const kC = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, NC = [
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
function DC(e) {
  const n = window.getComputedStyle(e), r = n.getPropertyValue("box-sizing"), i = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), s = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: NC.map((c) => `${c}:${n.getPropertyValue(c)}`).join(";"), paddingSize: i, borderSize: s, boxSizing: r };
}
function ip(e, n = 1, r) {
  var i;
  Wn || (Wn = document.createElement("textarea"), document.body.appendChild(Wn));
  const { paddingSize: s, borderSize: l, boxSizing: c, contextStyle: f } = DC(e);
  Wn.setAttribute("style", `${f};${kC}`), Wn.value = e.value || e.placeholder || "";
  let d = Wn.scrollHeight;
  const h = {};
  c === "border-box" ? d = d + l : c === "content-box" && (d = d - s), Wn.value = "";
  const v = Wn.scrollHeight - s;
  if ($n(n)) {
    let S = v * n;
    c === "border-box" && (S = S + s + l), d = Math.max(S, d), h.minHeight = `${S}px`;
  }
  if ($n(r)) {
    let S = v * r;
    c === "border-box" && (S = S + s + l), d = Math.min(S, d);
  }
  return h.height = `${d}px`, (i = Wn.parentNode) == null || i.removeChild(Wn), Wn = void 0, h;
}
const WC = nt({
  id: {
    type: String,
    default: void 0
  },
  size: Ti,
  disabled: Boolean,
  modelValue: {
    type: Ge([
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
    type: Ge([Boolean, Object]),
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
    type: String,
    default: ""
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
    type: Ao
  },
  prefixIcon: {
    type: Ao
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
    type: Ge([Object, Array, String]),
    default: () => Eh({})
  }
}), zC = {
  [It]: (e) => xt(e),
  input: (e) => xt(e),
  change: (e) => xt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, HC = ["role"], qC = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], UC = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], VC = {
  name: "ElInput",
  inheritAttrs: !1
}, KC = /* @__PURE__ */ $e({
  ...VC,
  props: WC,
  emits: zC,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = {
      suffix: "append",
      prefix: "prepend"
    }, l = rn(), c = ru(), f = Ei(), d = L(() => {
      const K = {};
      return i.containerRole === "combobox" && (K["aria-haspopup"] = c["aria-haspopup"], K["aria-owns"] = c["aria-owns"], K["aria-expanded"] = c["aria-expanded"]), K;
    }), h = fC({
      excludeKeys: L(() => Object.keys(d.value))
    }), { form: v, formItem: S } = ja(), { inputId: w } = Ya(i, {
      formItemContext: S
    }), E = Sr(), m = Ah(), _ = Be("input"), O = Be("textarea"), C = li(), N = li(), M = X(!1), k = X(!1), R = X(!1), A = X(!1), $ = X(), z = li(i.inputStyle), Y = L(() => C.value || N.value), te = L(() => {
      var K;
      return (K = v == null ? void 0 : v.statusIcon) != null ? K : !1;
    }), D = L(() => (S == null ? void 0 : S.validateState) || ""), G = L(() => D.value && oC[D.value]), U = L(() => A.value ? nC : NT), Z = L(() => [
      c.style,
      i.inputStyle
    ]), ne = L(() => [
      i.inputStyle,
      z.value,
      { resize: i.resize }
    ]), ae = L(() => Ua(i.modelValue) ? "" : String(i.modelValue)), re = L(() => i.clearable && !m.value && !i.readonly && !!ae.value && (M.value || k.value)), he = L(() => i.showPassword && !m.value && !i.readonly && !!ae.value && (!!ae.value || M.value)), ce = L(() => i.showWordLimit && !!h.value.maxlength && (i.type === "text" || i.type === "textarea") && !m.value && !i.readonly && !i.showPassword), ye = L(() => Array.from(ae.value).length), _e = L(() => !!ce.value && ye.value > Number(h.value.maxlength)), at = L(() => !!f.suffix || !!i.suffixIcon || re.value || i.showPassword || ce.value || !!D.value && te.value), [Qe, ct] = MC(C);
    Do(N, (K) => {
      if (!ce.value || i.resize !== "both")
        return;
      const Se = K[0], { width: Tt } = Se.contentRect;
      $.value = {
        right: `calc(100% - ${Tt + 15 + 6}px)`
      };
    });
    const We = () => {
      const { type: K, autosize: Se } = i;
      if (!(!kt || K !== "textarea"))
        if (Se) {
          const Tt = wr(Se) ? Se.minRows : void 0, et = wr(Se) ? Se.maxRows : void 0;
          z.value = {
            ...ip(N.value, Tt, et)
          };
        } else
          z.value = {
            minHeight: ip(N.value).minHeight
          };
    }, rt = () => {
      const K = Y.value;
      !K || K.value === ae.value || (K.value = ae.value);
    }, se = (K) => {
      const { el: Se } = l.vnode;
      if (!Se)
        return;
      const et = Array.from(Se.querySelectorAll(`.${_.e(K)}`)).find((Gn) => Gn.parentNode === Se);
      if (!et)
        return;
      const Lt = s[K];
      f[Lt] ? et.style.transform = `translateX(${K === "suffix" ? "-" : ""}${Se.querySelector(`.${_.be("group", Lt)}`).offsetWidth}px)` : et.removeAttribute("style");
    }, be = () => {
      se("prefix"), se("suffix");
    }, Ne = async (K) => {
      Qe();
      let { value: Se } = K.target;
      if (i.formatter && (Se = i.parser ? i.parser(Se) : Se, Se = i.formatter(Se)), !R.value) {
        if (Se === ae.value) {
          rt();
          return;
        }
        r(It, Se), r("input", Se), await De(), rt(), ct();
      }
    }, Ze = (K) => {
      r("change", K.target.value);
    }, _t = (K) => {
      r("compositionstart", K), R.value = !0;
    }, ft = (K) => {
      var Se;
      r("compositionupdate", K);
      const Tt = (Se = K.target) == null ? void 0 : Se.value, et = Tt[Tt.length - 1] || "";
      R.value = !Sh(et);
    }, gn = (K) => {
      r("compositionend", K), R.value && (R.value = !1, Ne(K));
    }, wt = () => {
      A.value = !A.value, Gt();
    }, Gt = async () => {
      var K;
      await De(), (K = Y.value) == null || K.focus();
    }, mn = () => {
      var K;
      return (K = Y.value) == null ? void 0 : K.blur();
    }, dt = (K) => {
      M.value = !0, r("focus", K);
    }, bn = (K) => {
      var Se;
      M.value = !1, r("blur", K), i.validateEvent && ((Se = S == null ? void 0 : S.validate) == null || Se.call(S, "blur").catch((Tt) => bt(Tt)));
    }, ir = (K) => {
      k.value = !1, r("mouseleave", K);
    }, yt = (K) => {
      k.value = !0, r("mouseenter", K);
    }, ot = (K) => {
      r("keydown", K);
    }, jt = () => {
      var K;
      (K = Y.value) == null || K.select();
    }, Yt = () => {
      r(It, ""), r("change", ""), r("clear"), r("input", "");
    };
    return pe(() => i.modelValue, () => {
      var K;
      De(() => We()), i.validateEvent && ((K = S == null ? void 0 : S.validate) == null || K.call(S, "change").catch((Se) => bt(Se)));
    }), pe(ae, () => rt()), pe(() => i.type, async () => {
      await De(), rt(), We(), be();
    }), ut(async () => {
      !i.formatter && i.parser && bt("ElInput", "If you set the parser, you also need to set the formatter."), rt(), be(), await De(), We();
    }), ou(async () => {
      await De(), be();
    }), n({
      input: C,
      textarea: N,
      ref: Y,
      textareaStyle: ne,
      autosize: qn(i, "autosize"),
      focus: Gt,
      blur: mn,
      select: jt,
      clear: Yt,
      resizeTextarea: We
    }), (K, Se) => Mt((V(), oe("div", Xn(b(d), {
      class: [
        K.type === "textarea" ? b(O).b() : b(_).b(),
        b(_).m(b(E)),
        b(_).is("disabled", b(m)),
        b(_).is("exceed", b(_e)),
        {
          [b(_).b("group")]: K.$slots.prepend || K.$slots.append,
          [b(_).bm("group", "append")]: K.$slots.append,
          [b(_).bm("group", "prepend")]: K.$slots.prepend,
          [b(_).m("prefix")]: K.$slots.prefix || K.prefixIcon,
          [b(_).m("suffix")]: K.$slots.suffix || K.suffixIcon || K.clearable || K.showPassword,
          [b(_).bm("suffix", "password-clear")]: b(re) && b(he)
        },
        K.$attrs.class
      ],
      style: b(Z),
      role: K.containerRole,
      onMouseenter: yt,
      onMouseleave: ir
    }), [
      we(" input "),
      K.type !== "textarea" ? (V(), oe(Kt, { key: 0 }, [
        we(" prepend slot "),
        K.$slots.prepend ? (V(), oe("div", {
          key: 0,
          class: Q(b(_).be("group", "prepend"))
        }, [
          Te(K.$slots, "prepend")
        ], 2)) : we("v-if", !0),
        fe("div", {
          class: Q([b(_).e("wrapper"), b(_).is("focus", M.value)])
        }, [
          we(" prefix slot "),
          K.$slots.prefix || K.prefixIcon ? (V(), oe("span", {
            key: 0,
            class: Q(b(_).e("prefix"))
          }, [
            fe("span", {
              class: Q(b(_).e("prefix-inner"))
            }, [
              Te(K.$slots, "prefix"),
              K.prefixIcon ? (V(), Me(b(Hn), {
                key: 0,
                class: Q(b(_).e("icon"))
              }, {
                default: Oe(() => [
                  (V(), Me(In(K.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0)
            ], 2)
          ], 2)) : we("v-if", !0),
          fe("input", Xn({
            id: b(w),
            ref_key: "input",
            ref: C,
            class: b(_).e("inner")
          }, b(h), {
            type: K.showPassword ? A.value ? "text" : "password" : K.type,
            disabled: b(m),
            formatter: K.formatter,
            parser: K.parser,
            readonly: K.readonly,
            autocomplete: K.autocomplete,
            tabindex: K.tabindex,
            "aria-label": K.label,
            placeholder: K.placeholder,
            style: K.inputStyle,
            onCompositionstart: _t,
            onCompositionupdate: ft,
            onCompositionend: gn,
            onInput: Ne,
            onFocus: dt,
            onBlur: bn,
            onChange: Ze,
            onKeydown: ot
          }), null, 16, qC),
          we(" suffix slot "),
          b(at) ? (V(), oe("span", {
            key: 1,
            class: Q(b(_).e("suffix"))
          }, [
            fe("span", {
              class: Q(b(_).e("suffix-inner"))
            }, [
              !b(re) || !b(he) || !b(ce) ? (V(), oe(Kt, { key: 0 }, [
                Te(K.$slots, "suffix"),
                K.suffixIcon ? (V(), Me(b(Hn), {
                  key: 0,
                  class: Q(b(_).e("icon"))
                }, {
                  default: Oe(() => [
                    (V(), Me(In(K.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : we("v-if", !0)
              ], 64)) : we("v-if", !0),
              b(re) ? (V(), Me(b(Hn), {
                key: 1,
                class: Q([b(_).e("icon"), b(_).e("clear")]),
                onMousedown: Ut(b(mi), ["prevent"]),
                onClick: Yt
              }, {
                default: Oe(() => [
                  lt(b(gu))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : we("v-if", !0),
              b(he) ? (V(), Me(b(Hn), {
                key: 2,
                class: Q([b(_).e("icon"), b(_).e("password")]),
                onClick: wt
              }, {
                default: Oe(() => [
                  (V(), Me(In(b(U))))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0),
              b(ce) ? (V(), oe("span", {
                key: 3,
                class: Q(b(_).e("count"))
              }, [
                fe("span", {
                  class: Q(b(_).e("count-inner"))
                }, mt(b(ye)) + " / " + mt(b(h).maxlength), 3)
              ], 2)) : we("v-if", !0),
              b(D) && b(G) && b(te) ? (V(), Me(b(Hn), {
                key: 4,
                class: Q([
                  b(_).e("icon"),
                  b(_).e("validateIcon"),
                  b(_).is("loading", b(D) === "validating")
                ])
              }, {
                default: Oe(() => [
                  (V(), Me(In(b(G))))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0)
            ], 2)
          ], 2)) : we("v-if", !0)
        ], 2),
        we(" append slot "),
        K.$slots.append ? (V(), oe("div", {
          key: 1,
          class: Q(b(_).be("group", "append"))
        }, [
          Te(K.$slots, "append")
        ], 2)) : we("v-if", !0)
      ], 64)) : (V(), oe(Kt, { key: 1 }, [
        we(" textarea "),
        fe("textarea", Xn({
          id: b(w),
          ref_key: "textarea",
          ref: N,
          class: b(O).e("inner")
        }, b(h), {
          tabindex: K.tabindex,
          disabled: b(m),
          readonly: K.readonly,
          autocomplete: K.autocomplete,
          style: b(ne),
          "aria-label": K.label,
          placeholder: K.placeholder,
          onCompositionstart: _t,
          onCompositionupdate: ft,
          onCompositionend: gn,
          onInput: Ne,
          onFocus: dt,
          onBlur: bn,
          onChange: Ze,
          onKeydown: ot
        }), null, 16, UC),
        b(ce) ? (V(), oe("span", {
          key: 0,
          style: At($.value),
          class: Q(b(_).e("count"))
        }, mt(b(ye)) + " / " + mt(b(h).maxlength), 7)) : we("v-if", !0)
      ], 64))
    ], 16, HC)), [
      [Wr, K.type !== "hidden"]
    ]);
  }
});
var GC = /* @__PURE__ */ Ue(KC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Rh = Vn(GC), Io = 4, jC = {
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
}, YC = ({
  move: e,
  size: n,
  bar: r
}) => ({
  [r.size]: n,
  transform: `translate${r.axis}(${e}%)`
}), ZC = nt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), XC = /* @__PURE__ */ $e({
  __name: "thumb",
  props: ZC,
  setup(e) {
    const n = e, r = "Thumb", i = qe(Oh), s = Be("scrollbar");
    i || Po(r, "can not inject scrollbar context");
    const l = X(), c = X(), f = X({}), d = X(!1);
    let h = !1, v = !1, S = kt ? document.onselectstart : null;
    const w = L(() => jC[n.vertical ? "vertical" : "horizontal"]), E = L(() => YC({
      size: n.size,
      move: n.move,
      bar: w.value
    })), m = L(() => l.value[w.value.offset] ** 2 / i.wrapElement[w.value.scrollSize] / n.ratio / c.value[w.value.offset]), _ = ($) => {
      var z;
      if ($.stopPropagation(), $.ctrlKey || [1, 2].includes($.button))
        return;
      (z = window.getSelection()) == null || z.removeAllRanges(), C($);
      const Y = $.currentTarget;
      !Y || (f.value[w.value.axis] = Y[w.value.offset] - ($[w.value.client] - Y.getBoundingClientRect()[w.value.direction]));
    }, O = ($) => {
      if (!c.value || !l.value || !i.wrapElement)
        return;
      const z = Math.abs($.target.getBoundingClientRect()[w.value.direction] - $[w.value.client]), Y = c.value[w.value.offset] / 2, te = (z - Y) * 100 * m.value / l.value[w.value.offset];
      i.wrapElement[w.value.scroll] = te * i.wrapElement[w.value.scrollSize] / 100;
    }, C = ($) => {
      $.stopImmediatePropagation(), h = !0, document.addEventListener("mousemove", N), document.addEventListener("mouseup", M), S = document.onselectstart, document.onselectstart = () => !1;
    }, N = ($) => {
      if (!l.value || !c.value || h === !1)
        return;
      const z = f.value[w.value.axis];
      if (!z)
        return;
      const Y = (l.value.getBoundingClientRect()[w.value.direction] - $[w.value.client]) * -1, te = c.value[w.value.offset] - z, D = (Y - te) * 100 * m.value / l.value[w.value.offset];
      i.wrapElement[w.value.scroll] = D * i.wrapElement[w.value.scrollSize] / 100;
    }, M = () => {
      h = !1, f.value[w.value.axis] = 0, document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", M), A(), v && (d.value = !1);
    }, k = () => {
      v = !1, d.value = !!n.size;
    }, R = () => {
      v = !0, d.value = h;
    };
    vn(() => {
      A(), document.removeEventListener("mouseup", M);
    });
    const A = () => {
      document.onselectstart !== S && (document.onselectstart = S);
    };
    return Qr(qn(i, "scrollbarElement"), "mousemove", k), Qr(qn(i, "scrollbarElement"), "mouseleave", R), ($, z) => (V(), Me(ao, {
      name: b(s).b("fade"),
      persisted: ""
    }, {
      default: Oe(() => [
        Mt(fe("div", {
          ref_key: "instance",
          ref: l,
          class: Q([b(s).e("bar"), b(s).is(b(w).key)]),
          onMousedown: O
        }, [
          fe("div", {
            ref_key: "thumb",
            ref: c,
            class: Q(b(s).e("thumb")),
            style: At(b(E)),
            onMousedown: _
          }, null, 38)
        ], 34), [
          [Wr, $.always || d.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ap = /* @__PURE__ */ Ue(XC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const JC = nt({
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
}), QC = /* @__PURE__ */ $e({
  __name: "bar",
  props: JC,
  setup(e, { expose: n }) {
    const r = e, i = X(0), s = X(0);
    return n({
      handleScroll: (c) => {
        if (c) {
          const f = c.offsetHeight - Io, d = c.offsetWidth - Io;
          s.value = c.scrollTop * 100 / f * r.ratioY, i.value = c.scrollLeft * 100 / d * r.ratioX;
        }
      }
    }), (c, f) => (V(), oe(Kt, null, [
      lt(ap, {
        move: i.value,
        ratio: c.ratioX,
        size: c.width,
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      lt(ap, {
        move: s.value,
        ratio: c.ratioY,
        size: c.height,
        vertical: "",
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var eA = /* @__PURE__ */ Ue(QC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const tA = nt({
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
    type: Ge([String, Object, Array]),
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
}), nA = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every($n)
}, rA = {
  name: "ElScrollbar"
}, oA = /* @__PURE__ */ $e({
  ...rA,
  props: tA,
  emits: nA,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = Be("scrollbar");
    let l, c;
    const f = X(), d = X(), h = X(), v = X("0"), S = X("0"), w = X(), E = X(1), m = X(1), _ = "ElScrollbar", O = L(() => {
      const A = {};
      return i.height && (A.height = yi(i.height)), i.maxHeight && (A.maxHeight = yi(i.maxHeight)), [i.wrapStyle, A];
    }), C = () => {
      var A;
      d.value && ((A = w.value) == null || A.handleScroll(d.value), r("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function N(A, $) {
      wr(A) ? d.value.scrollTo(A) : $n(A) && $n($) && d.value.scrollTo(A, $);
    }
    const M = (A) => {
      if (!$n(A)) {
        bt(_, "value must be a number");
        return;
      }
      d.value.scrollTop = A;
    }, k = (A) => {
      if (!$n(A)) {
        bt(_, "value must be a number");
        return;
      }
      d.value.scrollLeft = A;
    }, R = () => {
      if (!d.value)
        return;
      const A = d.value.offsetHeight - Io, $ = d.value.offsetWidth - Io, z = A ** 2 / d.value.scrollHeight, Y = $ ** 2 / d.value.scrollWidth, te = Math.max(z, i.minSize), D = Math.max(Y, i.minSize);
      E.value = z / (A - z) / (te / (A - te)), m.value = Y / ($ - Y) / (D / ($ - D)), S.value = te + Io < A ? `${te}px` : "", v.value = D + Io < $ ? `${D}px` : "";
    };
    return pe(() => i.noresize, (A) => {
      A ? (l == null || l(), c == null || c()) : ({ stop: l } = Do(h, R), c = Qr("resize", R));
    }, { immediate: !0 }), pe(() => [i.maxHeight, i.height], () => {
      i.native || De(() => {
        var A;
        R(), d.value && ((A = w.value) == null || A.handleScroll(d.value));
      });
    }), Nt(Oh, Ln({
      scrollbarElement: f,
      wrapElement: d
    })), ut(() => {
      i.native || De(() => {
        R();
      });
    }), ou(() => R()), n({
      wrap$: d,
      update: R,
      scrollTo: N,
      setScrollTop: M,
      setScrollLeft: k,
      handleScroll: C
    }), (A, $) => (V(), oe("div", {
      ref_key: "scrollbar$",
      ref: f,
      class: Q(b(s).b())
    }, [
      fe("div", {
        ref_key: "wrap$",
        ref: d,
        class: Q([
          A.wrapClass,
          b(s).e("wrap"),
          { [b(s).em("wrap", "hidden-default")]: !A.native }
        ]),
        style: At(b(O)),
        onScroll: C
      }, [
        (V(), Me(In(A.tag), {
          ref_key: "resize$",
          ref: h,
          class: Q([b(s).e("view"), A.viewClass]),
          style: At(A.viewStyle)
        }, {
          default: Oe(() => [
            Te(A.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      A.native ? we("v-if", !0) : (V(), Me(eA, {
        key: 0,
        ref_key: "barRef",
        ref: w,
        height: S.value,
        width: v.value,
        always: A.always,
        "ratio-x": m.value,
        "ratio-y": E.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var iA = /* @__PURE__ */ Ue(oA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const aA = Vn(iA), sA = {
  LIGHT: "light",
  DARK: "dark"
}, lA = [
  "dialog",
  "grid",
  "listbox",
  "menu",
  "tooltip",
  "tree"
], Lh = nt({
  role: {
    type: String,
    values: lA,
    default: "tooltip"
  }
}), uA = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, cA = /* @__PURE__ */ $e({
  ...uA,
  props: Lh,
  setup(e, { expose: n }) {
    const r = e, i = X(), s = X(), l = X(), c = X(), f = L(() => r.role), d = {
      triggerRef: i,
      popperInstanceRef: s,
      contentRef: l,
      referenceRef: c,
      role: f
    };
    return n(d), Nt(bu, d), (h, v) => Te(h.$slots, "default");
  }
});
var fA = /* @__PURE__ */ Ue(cA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Fh = nt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), dA = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, pA = /* @__PURE__ */ $e({
  ...dA,
  props: Fh,
  setup(e, { expose: n }) {
    const r = e, i = Be("popper"), { arrowOffset: s, arrowRef: l } = qe(Th, void 0);
    return pe(() => r.arrowOffset, (c) => {
      s.value = c;
    }), vn(() => {
      l.value = void 0;
    }), n({
      arrowRef: l
    }), (c, f) => (V(), oe("span", {
      ref_key: "arrowRef",
      ref: l,
      class: Q(b(i).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var hA = /* @__PURE__ */ Ue(pA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const yl = "ElOnlyChild", vA = $e({
  name: yl,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    var i;
    const s = qe(Mh), l = $C((i = s == null ? void 0 : s.setForwardRef) != null ? i : mi);
    return () => {
      var c;
      const f = (c = n.default) == null ? void 0 : c.call(n, r);
      if (!f)
        return null;
      if (f.length > 1)
        return bt(yl, "requires exact only one valid child."), null;
      const d = Bh(f);
      return d ? Mt(rw(d, r), [[l]]) : (bt(yl, "no valid child node found"), null);
    };
  }
});
function Bh(e) {
  if (!e)
    return null;
  const n = e;
  for (const r of n) {
    if (wr(r))
      switch (r.type) {
        case iw:
          continue;
        case ow:
        case "svg":
          return sp(r);
        case Kt:
          return Bh(r.children);
        default:
          return r;
      }
    return sp(r);
  }
  return null;
}
function sp(e) {
  const n = Be("only-child");
  return lt("span", {
    class: n.e("content")
  }, [e]);
}
const kh = nt({
  virtualRef: {
    type: Ge(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), gA = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, mA = /* @__PURE__ */ $e({
  ...gA,
  props: kh,
  setup(e, { expose: n }) {
    const r = e, { role: i, triggerRef: s } = qe(bu, void 0);
    IC(s);
    const l = L(() => f.value ? r.id : void 0), c = L(() => {
      if (i && i.value === "tooltip")
        return r.open && r.id ? r.id : void 0;
    }), f = L(() => {
      if (i && i.value !== "tooltip")
        return i.value;
    }), d = L(() => f.value ? `${r.open}` : void 0);
    let h;
    return ut(() => {
      pe(() => r.virtualRef, (v) => {
        v && (s.value = kr(v));
      }, {
        immediate: !0
      }), pe(() => s.value, (v, S) => {
        h == null || h(), h = void 0, bi(v) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((w) => {
          var E;
          const m = r[w];
          m && (v.addEventListener(w.slice(2).toLowerCase(), m), (E = S == null ? void 0 : S.removeEventListener) == null || E.call(S, w.slice(2).toLowerCase(), m));
        }), h = pe([l, c, f, d], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((E, m) => {
            Ua(w[m]) ? v.removeAttribute(E) : v.setAttribute(E, w[m]);
          });
        }, { immediate: !0 })), bi(S) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => S.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), vn(() => {
      h == null || h(), h = void 0;
    }), n({
      triggerRef: s
    }), (v, S) => v.virtualTriggering ? we("v-if", !0) : (V(), Me(b(vA), Xn({ key: 0 }, v.$attrs, {
      "aria-controls": b(l),
      "aria-describedby": b(c),
      "aria-expanded": b(d),
      "aria-haspopup": b(f)
    }), {
      default: Oe(() => [
        Te(v.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var bA = /* @__PURE__ */ Ue(mA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), tn = "top", Mn = "bottom", Rn = "right", nn = "left", _u = "auto", Ci = [tn, Mn, Rn, nn], Mo = "start", _i = "end", yA = "clippingParents", Nh = "viewport", ai = "popper", _A = "reference", lp = Ci.reduce(function(e, n) {
  return e.concat([n + "-" + Mo, n + "-" + _i]);
}, []), wu = [].concat(Ci, [_u]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Mo, n + "-" + _i]);
}, []), wA = "beforeRead", SA = "read", EA = "afterRead", xA = "beforeMain", OA = "main", TA = "afterMain", CA = "beforeWrite", AA = "write", IA = "afterWrite", $A = [wA, SA, EA, xA, OA, TA, CA, AA, IA];
function tr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Kn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ro(e) {
  var n = Kn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Pn(e) {
  var n = Kn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Su(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Kn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function PA(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var i = n.styles[r] || {}, s = n.attributes[r] || {}, l = n.elements[r];
    !Pn(l) || !tr(l) || (Object.assign(l.style, i), Object.keys(s).forEach(function(c) {
      var f = s[c];
      f === !1 ? l.removeAttribute(c) : l.setAttribute(c, f === !0 ? "" : f);
    }));
  });
}
function MA(e) {
  var n = e.state, r = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(i) {
      var s = n.elements[i], l = n.attributes[i] || {}, c = Object.keys(n.styles.hasOwnProperty(i) ? n.styles[i] : r[i]), f = c.reduce(function(d, h) {
        return d[h] = "", d;
      }, {});
      !Pn(s) || !tr(s) || (Object.assign(s.style, f), Object.keys(l).forEach(function(d) {
        s.removeAttribute(d);
      }));
    });
  };
}
var Dh = { name: "applyStyles", enabled: !0, phase: "write", fn: PA, effect: MA, requires: ["computeStyles"] };
function Jn(e) {
  return e.split("-")[0];
}
var no = Math.max, Na = Math.min, Lo = Math.round;
function Fo(e, n) {
  n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  if (Pn(e) && n) {
    var l = e.offsetHeight, c = e.offsetWidth;
    c > 0 && (i = Lo(r.width) / c || 1), l > 0 && (s = Lo(r.height) / l || 1);
  }
  return { width: r.width / i, height: r.height / s, top: r.top / s, right: r.right / i, bottom: r.bottom / s, left: r.left / i, x: r.left / i, y: r.top / s };
}
function Eu(e) {
  var n = Fo(e), r = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - i) <= 1 && (i = n.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: i };
}
function Wh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Su(r)) {
    var i = n;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Er(e) {
  return Kn(e).getComputedStyle(e);
}
function RA(e) {
  return ["table", "td", "th"].indexOf(tr(e)) >= 0;
}
function zr(e) {
  return ((Ro(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Za(e) {
  return tr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Su(e) ? e.host : null) || zr(e);
}
function up(e) {
  return !Pn(e) || Er(e).position === "fixed" ? null : e.offsetParent;
}
function LA(e) {
  var n = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && Pn(e)) {
    var i = Er(e);
    if (i.position === "fixed")
      return null;
  }
  var s = Za(e);
  for (Su(s) && (s = s.host); Pn(s) && ["html", "body"].indexOf(tr(s)) < 0; ) {
    var l = Er(s);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || n && l.willChange === "filter" || n && l.filter && l.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ai(e) {
  for (var n = Kn(e), r = up(e); r && RA(r) && Er(r).position === "static"; )
    r = up(r);
  return r && (tr(r) === "html" || tr(r) === "body" && Er(r).position === "static") ? n : r || LA(e) || n;
}
function xu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ci(e, n, r) {
  return no(e, Na(n, r));
}
function FA(e, n, r) {
  var i = ci(e, n, r);
  return i > r ? r : i;
}
function zh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hh(e) {
  return Object.assign({}, zh(), e);
}
function qh(e, n) {
  return n.reduce(function(r, i) {
    return r[i] = e, r;
  }, {});
}
var BA = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, { placement: n.placement })) : e, Hh(typeof e != "number" ? e : qh(e, Ci));
};
function kA(e) {
  var n, r = e.state, i = e.name, s = e.options, l = r.elements.arrow, c = r.modifiersData.popperOffsets, f = Jn(r.placement), d = xu(f), h = [nn, Rn].indexOf(f) >= 0, v = h ? "height" : "width";
  if (!(!l || !c)) {
    var S = BA(s.padding, r), w = Eu(l), E = d === "y" ? tn : nn, m = d === "y" ? Mn : Rn, _ = r.rects.reference[v] + r.rects.reference[d] - c[d] - r.rects.popper[v], O = c[d] - r.rects.reference[d], C = Ai(l), N = C ? d === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, M = _ / 2 - O / 2, k = S[E], R = N - w[v] - S[m], A = N / 2 - w[v] / 2 + M, $ = ci(k, A, R), z = d;
    r.modifiersData[i] = (n = {}, n[z] = $, n.centerOffset = $ - A, n);
  }
}
function NA(e) {
  var n = e.state, r = e.options, i = r.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = n.elements.popper.querySelector(s), !s) || !Wh(n.elements.popper, s) || (n.elements.arrow = s));
}
var DA = { name: "arrow", enabled: !0, phase: "main", fn: kA, effect: NA, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Bo(e) {
  return e.split("-")[1];
}
var WA = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function zA(e) {
  var n = e.x, r = e.y, i = window, s = i.devicePixelRatio || 1;
  return { x: Lo(n * s) / s || 0, y: Lo(r * s) / s || 0 };
}
function cp(e) {
  var n, r = e.popper, i = e.popperRect, s = e.placement, l = e.variation, c = e.offsets, f = e.position, d = e.gpuAcceleration, h = e.adaptive, v = e.roundOffsets, S = e.isFixed, w = c.x, E = w === void 0 ? 0 : w, m = c.y, _ = m === void 0 ? 0 : m, O = typeof v == "function" ? v({ x: E, y: _ }) : { x: E, y: _ };
  E = O.x, _ = O.y;
  var C = c.hasOwnProperty("x"), N = c.hasOwnProperty("y"), M = nn, k = tn, R = window;
  if (h) {
    var A = Ai(r), $ = "clientHeight", z = "clientWidth";
    if (A === Kn(r) && (A = zr(r), Er(A).position !== "static" && f === "absolute" && ($ = "scrollHeight", z = "scrollWidth")), A = A, s === tn || (s === nn || s === Rn) && l === _i) {
      k = Mn;
      var Y = S && A === R && R.visualViewport ? R.visualViewport.height : A[$];
      _ -= Y - i.height, _ *= d ? 1 : -1;
    }
    if (s === nn || (s === tn || s === Mn) && l === _i) {
      M = Rn;
      var te = S && A === R && R.visualViewport ? R.visualViewport.width : A[z];
      E -= te - i.width, E *= d ? 1 : -1;
    }
  }
  var D = Object.assign({ position: f }, h && WA), G = v === !0 ? zA({ x: E, y: _ }) : { x: E, y: _ };
  if (E = G.x, _ = G.y, d) {
    var U;
    return Object.assign({}, D, (U = {}, U[k] = N ? "0" : "", U[M] = C ? "0" : "", U.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + _ + "px)" : "translate3d(" + E + "px, " + _ + "px, 0)", U));
  }
  return Object.assign({}, D, (n = {}, n[k] = N ? _ + "px" : "", n[M] = C ? E + "px" : "", n.transform = "", n));
}
function HA(e) {
  var n = e.state, r = e.options, i = r.gpuAcceleration, s = i === void 0 ? !0 : i, l = r.adaptive, c = l === void 0 ? !0 : l, f = r.roundOffsets, d = f === void 0 ? !0 : f, h = { placement: Jn(n.placement), variation: Bo(n.placement), popper: n.elements.popper, popperRect: n.rects.popper, gpuAcceleration: s, isFixed: n.options.strategy === "fixed" };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, cp(Object.assign({}, h, { offsets: n.modifiersData.popperOffsets, position: n.options.strategy, adaptive: c, roundOffsets: d })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, cp(Object.assign({}, h, { offsets: n.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: d })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Uh = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: HA, data: {} }, _a = { passive: !0 };
function qA(e) {
  var n = e.state, r = e.instance, i = e.options, s = i.scroll, l = s === void 0 ? !0 : s, c = i.resize, f = c === void 0 ? !0 : c, d = Kn(n.elements.popper), h = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return l && h.forEach(function(v) {
    v.addEventListener("scroll", r.update, _a);
  }), f && d.addEventListener("resize", r.update, _a), function() {
    l && h.forEach(function(v) {
      v.removeEventListener("scroll", r.update, _a);
    }), f && d.removeEventListener("resize", r.update, _a);
  };
}
var Vh = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: qA, data: {} }, UA = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return UA[n];
  });
}
var VA = { start: "end", end: "start" };
function fp(e) {
  return e.replace(/start|end/g, function(n) {
    return VA[n];
  });
}
function Ou(e) {
  var n = Kn(e), r = n.pageXOffset, i = n.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function Tu(e) {
  return Fo(zr(e)).left + Ou(e).scrollLeft;
}
function KA(e) {
  var n = Kn(e), r = zr(e), i = n.visualViewport, s = r.clientWidth, l = r.clientHeight, c = 0, f = 0;
  return i && (s = i.width, l = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c = i.offsetLeft, f = i.offsetTop)), { width: s, height: l, x: c + Tu(e), y: f };
}
function GA(e) {
  var n, r = zr(e), i = Ou(e), s = (n = e.ownerDocument) == null ? void 0 : n.body, l = no(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), c = no(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), f = -i.scrollLeft + Tu(e), d = -i.scrollTop;
  return Er(s || r).direction === "rtl" && (f += no(r.clientWidth, s ? s.clientWidth : 0) - l), { width: l, height: c, x: f, y: d };
}
function Cu(e) {
  var n = Er(e), r = n.overflow, i = n.overflowX, s = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + s + i);
}
function Kh(e) {
  return ["html", "body", "#document"].indexOf(tr(e)) >= 0 ? e.ownerDocument.body : Pn(e) && Cu(e) ? e : Kh(Za(e));
}
function fi(e, n) {
  var r;
  n === void 0 && (n = []);
  var i = Kh(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Kn(i), c = s ? [l].concat(l.visualViewport || [], Cu(i) ? i : []) : i, f = n.concat(c);
  return s ? f : f.concat(fi(Za(c)));
}
function Zl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function jA(e) {
  var n = Fo(e);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function dp(e, n) {
  return n === Nh ? Zl(KA(e)) : Ro(n) ? jA(n) : Zl(GA(zr(e)));
}
function YA(e) {
  var n = fi(Za(e)), r = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, i = r && Pn(e) ? Ai(e) : e;
  return Ro(i) ? n.filter(function(s) {
    return Ro(s) && Wh(s, i) && tr(s) !== "body";
  }) : [];
}
function ZA(e, n, r) {
  var i = n === "clippingParents" ? YA(e) : [].concat(n), s = [].concat(i, [r]), l = s[0], c = s.reduce(function(f, d) {
    var h = dp(e, d);
    return f.top = no(h.top, f.top), f.right = Na(h.right, f.right), f.bottom = Na(h.bottom, f.bottom), f.left = no(h.left, f.left), f;
  }, dp(e, l));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Gh(e) {
  var n = e.reference, r = e.element, i = e.placement, s = i ? Jn(i) : null, l = i ? Bo(i) : null, c = n.x + n.width / 2 - r.width / 2, f = n.y + n.height / 2 - r.height / 2, d;
  switch (s) {
    case tn:
      d = { x: c, y: n.y - r.height };
      break;
    case Mn:
      d = { x: c, y: n.y + n.height };
      break;
    case Rn:
      d = { x: n.x + n.width, y: f };
      break;
    case nn:
      d = { x: n.x - r.width, y: f };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  var h = s ? xu(s) : null;
  if (h != null) {
    var v = h === "y" ? "height" : "width";
    switch (l) {
      case Mo:
        d[h] = d[h] - (n[v] / 2 - r[v] / 2);
        break;
      case _i:
        d[h] = d[h] + (n[v] / 2 - r[v] / 2);
        break;
    }
  }
  return d;
}
function wi(e, n) {
  n === void 0 && (n = {});
  var r = n, i = r.placement, s = i === void 0 ? e.placement : i, l = r.boundary, c = l === void 0 ? yA : l, f = r.rootBoundary, d = f === void 0 ? Nh : f, h = r.elementContext, v = h === void 0 ? ai : h, S = r.altBoundary, w = S === void 0 ? !1 : S, E = r.padding, m = E === void 0 ? 0 : E, _ = Hh(typeof m != "number" ? m : qh(m, Ci)), O = v === ai ? _A : ai, C = e.rects.popper, N = e.elements[w ? O : v], M = ZA(Ro(N) ? N : N.contextElement || zr(e.elements.popper), c, d), k = Fo(e.elements.reference), R = Gh({ reference: k, element: C, strategy: "absolute", placement: s }), A = Zl(Object.assign({}, C, R)), $ = v === ai ? A : k, z = { top: M.top - $.top + _.top, bottom: $.bottom - M.bottom + _.bottom, left: M.left - $.left + _.left, right: $.right - M.right + _.right }, Y = e.modifiersData.offset;
  if (v === ai && Y) {
    var te = Y[s];
    Object.keys(z).forEach(function(D) {
      var G = [Rn, Mn].indexOf(D) >= 0 ? 1 : -1, U = [tn, Mn].indexOf(D) >= 0 ? "y" : "x";
      z[D] += te[U] * G;
    });
  }
  return z;
}
function XA(e, n) {
  n === void 0 && (n = {});
  var r = n, i = r.placement, s = r.boundary, l = r.rootBoundary, c = r.padding, f = r.flipVariations, d = r.allowedAutoPlacements, h = d === void 0 ? wu : d, v = Bo(i), S = v ? f ? lp : lp.filter(function(m) {
    return Bo(m) === v;
  }) : Ci, w = S.filter(function(m) {
    return h.indexOf(m) >= 0;
  });
  w.length === 0 && (w = S);
  var E = w.reduce(function(m, _) {
    return m[_] = wi(e, { placement: _, boundary: s, rootBoundary: l, padding: c })[Jn(_)], m;
  }, {});
  return Object.keys(E).sort(function(m, _) {
    return E[m] - E[_];
  });
}
function JA(e) {
  if (Jn(e) === _u)
    return [];
  var n = Ca(e);
  return [fp(e), n, fp(n)];
}
function QA(e) {
  var n = e.state, r = e.options, i = e.name;
  if (!n.modifiersData[i]._skip) {
    for (var s = r.mainAxis, l = s === void 0 ? !0 : s, c = r.altAxis, f = c === void 0 ? !0 : c, d = r.fallbackPlacements, h = r.padding, v = r.boundary, S = r.rootBoundary, w = r.altBoundary, E = r.flipVariations, m = E === void 0 ? !0 : E, _ = r.allowedAutoPlacements, O = n.options.placement, C = Jn(O), N = C === O, M = d || (N || !m ? [Ca(O)] : JA(O)), k = [O].concat(M).reduce(function(ct, We) {
      return ct.concat(Jn(We) === _u ? XA(n, { placement: We, boundary: v, rootBoundary: S, padding: h, flipVariations: m, allowedAutoPlacements: _ }) : We);
    }, []), R = n.rects.reference, A = n.rects.popper, $ = /* @__PURE__ */ new Map(), z = !0, Y = k[0], te = 0; te < k.length; te++) {
      var D = k[te], G = Jn(D), U = Bo(D) === Mo, Z = [tn, Mn].indexOf(G) >= 0, ne = Z ? "width" : "height", ae = wi(n, { placement: D, boundary: v, rootBoundary: S, altBoundary: w, padding: h }), re = Z ? U ? Rn : nn : U ? Mn : tn;
      R[ne] > A[ne] && (re = Ca(re));
      var he = Ca(re), ce = [];
      if (l && ce.push(ae[G] <= 0), f && ce.push(ae[re] <= 0, ae[he] <= 0), ce.every(function(ct) {
        return ct;
      })) {
        Y = D, z = !1;
        break;
      }
      $.set(D, ce);
    }
    if (z)
      for (var ye = m ? 3 : 1, _e = function(ct) {
        var We = k.find(function(rt) {
          var se = $.get(rt);
          if (se)
            return se.slice(0, ct).every(function(be) {
              return be;
            });
        });
        if (We)
          return Y = We, "break";
      }, at = ye; at > 0; at--) {
        var Qe = _e(at);
        if (Qe === "break")
          break;
      }
    n.placement !== Y && (n.modifiersData[i]._skip = !0, n.placement = Y, n.reset = !0);
  }
}
var eI = { name: "flip", enabled: !0, phase: "main", fn: QA, requiresIfExists: ["offset"], data: { _skip: !1 } };
function pp(e, n, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - n.height - r.y, right: e.right - n.width + r.x, bottom: e.bottom - n.height + r.y, left: e.left - n.width - r.x };
}
function hp(e) {
  return [tn, Rn, Mn, nn].some(function(n) {
    return e[n] >= 0;
  });
}
function tI(e) {
  var n = e.state, r = e.name, i = n.rects.reference, s = n.rects.popper, l = n.modifiersData.preventOverflow, c = wi(n, { elementContext: "reference" }), f = wi(n, { altBoundary: !0 }), d = pp(c, i), h = pp(f, s, l), v = hp(d), S = hp(h);
  n.modifiersData[r] = { referenceClippingOffsets: d, popperEscapeOffsets: h, isReferenceHidden: v, hasPopperEscaped: S }, n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": S });
}
var nI = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: tI };
function rI(e, n, r) {
  var i = Jn(e), s = [nn, tn].indexOf(i) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, c = l[0], f = l[1];
  return c = c || 0, f = (f || 0) * s, [nn, Rn].indexOf(i) >= 0 ? { x: f, y: c } : { x: c, y: f };
}
function oI(e) {
  var n = e.state, r = e.options, i = e.name, s = r.offset, l = s === void 0 ? [0, 0] : s, c = wu.reduce(function(v, S) {
    return v[S] = rI(S, n.rects, l), v;
  }, {}), f = c[n.placement], d = f.x, h = f.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += d, n.modifiersData.popperOffsets.y += h), n.modifiersData[i] = c;
}
var iI = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: oI };
function aI(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Gh({ reference: n.rects.reference, element: n.rects.popper, strategy: "absolute", placement: n.placement });
}
var jh = { name: "popperOffsets", enabled: !0, phase: "read", fn: aI, data: {} };
function sI(e) {
  return e === "x" ? "y" : "x";
}
function lI(e) {
  var n = e.state, r = e.options, i = e.name, s = r.mainAxis, l = s === void 0 ? !0 : s, c = r.altAxis, f = c === void 0 ? !1 : c, d = r.boundary, h = r.rootBoundary, v = r.altBoundary, S = r.padding, w = r.tether, E = w === void 0 ? !0 : w, m = r.tetherOffset, _ = m === void 0 ? 0 : m, O = wi(n, { boundary: d, rootBoundary: h, padding: S, altBoundary: v }), C = Jn(n.placement), N = Bo(n.placement), M = !N, k = xu(C), R = sI(k), A = n.modifiersData.popperOffsets, $ = n.rects.reference, z = n.rects.popper, Y = typeof _ == "function" ? _(Object.assign({}, n.rects, { placement: n.placement })) : _, te = typeof Y == "number" ? { mainAxis: Y, altAxis: Y } : Object.assign({ mainAxis: 0, altAxis: 0 }, Y), D = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, G = { x: 0, y: 0 };
  if (A) {
    if (l) {
      var U, Z = k === "y" ? tn : nn, ne = k === "y" ? Mn : Rn, ae = k === "y" ? "height" : "width", re = A[k], he = re + O[Z], ce = re - O[ne], ye = E ? -z[ae] / 2 : 0, _e = N === Mo ? $[ae] : z[ae], at = N === Mo ? -z[ae] : -$[ae], Qe = n.elements.arrow, ct = E && Qe ? Eu(Qe) : { width: 0, height: 0 }, We = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : zh(), rt = We[Z], se = We[ne], be = ci(0, $[ae], ct[ae]), Ne = M ? $[ae] / 2 - ye - be - rt - te.mainAxis : _e - be - rt - te.mainAxis, Ze = M ? -$[ae] / 2 + ye + be + se + te.mainAxis : at + be + se + te.mainAxis, _t = n.elements.arrow && Ai(n.elements.arrow), ft = _t ? k === "y" ? _t.clientTop || 0 : _t.clientLeft || 0 : 0, gn = (U = D == null ? void 0 : D[k]) != null ? U : 0, wt = re + Ne - gn - ft, Gt = re + Ze - gn, mn = ci(E ? Na(he, wt) : he, re, E ? no(ce, Gt) : ce);
      A[k] = mn, G[k] = mn - re;
    }
    if (f) {
      var dt, bn = k === "x" ? tn : nn, ir = k === "x" ? Mn : Rn, yt = A[R], ot = R === "y" ? "height" : "width", jt = yt + O[bn], Yt = yt - O[ir], K = [tn, nn].indexOf(C) !== -1, Se = (dt = D == null ? void 0 : D[R]) != null ? dt : 0, Tt = K ? jt : yt - $[ot] - z[ot] - Se + te.altAxis, et = K ? yt + $[ot] + z[ot] - Se - te.altAxis : Yt, Lt = E && K ? FA(Tt, yt, et) : ci(E ? Tt : jt, yt, E ? et : Yt);
      A[R] = Lt, G[R] = Lt - yt;
    }
    n.modifiersData[i] = G;
  }
}
var uI = { name: "preventOverflow", enabled: !0, phase: "main", fn: lI, requiresIfExists: ["offset"] };
function cI(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function fI(e) {
  return e === Kn(e) || !Pn(e) ? Ou(e) : cI(e);
}
function dI(e) {
  var n = e.getBoundingClientRect(), r = Lo(n.width) / e.offsetWidth || 1, i = Lo(n.height) / e.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function pI(e, n, r) {
  r === void 0 && (r = !1);
  var i = Pn(n), s = Pn(n) && dI(n), l = zr(n), c = Fo(e, s), f = { scrollLeft: 0, scrollTop: 0 }, d = { x: 0, y: 0 };
  return (i || !i && !r) && ((tr(n) !== "body" || Cu(l)) && (f = fI(n)), Pn(n) ? (d = Fo(n, !0), d.x += n.clientLeft, d.y += n.clientTop) : l && (d.x = Tu(l))), { x: c.left + f.scrollLeft - d.x, y: c.top + f.scrollTop - d.y, width: c.width, height: c.height };
}
function hI(e) {
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
function vI(e) {
  var n = hI(e);
  return $A.reduce(function(r, i) {
    return r.concat(n.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function gI(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function mI(e) {
  var n = e.reduce(function(r, i) {
    var s = r[i.name];
    return r[i.name] = s ? Object.assign({}, s, i, { options: Object.assign({}, s.options, i.options), data: Object.assign({}, s.data, i.data) }) : i, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var vp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function gp() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Au(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, i = r === void 0 ? [] : r, s = n.defaultOptions, l = s === void 0 ? vp : s;
  return function(c, f, d) {
    d === void 0 && (d = l);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, vp, l), modifiersData: {}, elements: { reference: c, popper: f }, attributes: {}, styles: {} }, v = [], S = !1, w = { state: h, setOptions: function(_) {
      var O = typeof _ == "function" ? _(h.options) : _;
      m(), h.options = Object.assign({}, l, h.options, O), h.scrollParents = { reference: Ro(c) ? fi(c) : c.contextElement ? fi(c.contextElement) : [], popper: fi(f) };
      var C = vI(mI([].concat(i, h.options.modifiers)));
      return h.orderedModifiers = C.filter(function(N) {
        return N.enabled;
      }), E(), w.update();
    }, forceUpdate: function() {
      if (!S) {
        var _ = h.elements, O = _.reference, C = _.popper;
        if (gp(O, C)) {
          h.rects = { reference: pI(O, Ai(C), h.options.strategy === "fixed"), popper: Eu(C) }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(z) {
            return h.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var N = 0; N < h.orderedModifiers.length; N++) {
            if (h.reset === !0) {
              h.reset = !1, N = -1;
              continue;
            }
            var M = h.orderedModifiers[N], k = M.fn, R = M.options, A = R === void 0 ? {} : R, $ = M.name;
            typeof k == "function" && (h = k({ state: h, options: A, name: $, instance: w }) || h);
          }
        }
      }
    }, update: gI(function() {
      return new Promise(function(_) {
        w.forceUpdate(), _(h);
      });
    }), destroy: function() {
      m(), S = !0;
    } };
    if (!gp(c, f))
      return w;
    w.setOptions(d).then(function(_) {
      !S && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function E() {
      h.orderedModifiers.forEach(function(_) {
        var O = _.name, C = _.options, N = C === void 0 ? {} : C, M = _.effect;
        if (typeof M == "function") {
          var k = M({ state: h, name: O, instance: w, options: N }), R = function() {
          };
          v.push(k || R);
        }
      });
    }
    function m() {
      v.forEach(function(_) {
        return _();
      }), v = [];
    }
    return w;
  };
}
Au();
var bI = [Vh, jh, Uh, Dh];
Au({ defaultModifiers: bI });
var yI = [Vh, jh, Uh, Dh, iI, eI, uI, DA, nI], _I = Au({ defaultModifiers: yI });
const Yh = (e) => {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 || i === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}, mp = (e, n) => {
  for (const r of e)
    if (!wI(r, n))
      return r;
}, wI = (e, n) => {
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
}, SI = (e) => {
  const n = Yh(e), r = mp(n, e), i = mp(n.reverse(), e);
  return [r, i];
}, EI = (e) => e instanceof HTMLInputElement && "select" in e, Fr = (e, n) => {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && EI(e) && n && e.select();
  }
};
function bp(e, n) {
  const r = [...e], i = e.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
const xI = () => {
  let e = [];
  return {
    push: (i) => {
      const s = e[0];
      s && i !== s && s.pause(), e = bp(e, i), e.unshift(i);
    },
    remove: (i) => {
      var s, l;
      e = bp(e, i), (l = (s = e[0]) == null ? void 0 : s.resume) == null || l.call(s);
    }
  };
}, OI = (e, n = !1) => {
  const r = document.activeElement;
  for (const i of e)
    if (Fr(i, n), document.activeElement !== r)
      return;
}, yp = xI(), _l = "focus-trap.focus-after-trapped", wl = "focus-trap.focus-after-released", _p = {
  cancelable: !0,
  bubbles: !1
}, wp = "focusAfterTrapped", Sp = "focusAfterReleased", TI = Symbol("elFocusTrap"), CI = $e({
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
    wp,
    Sp,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const r = X();
    let i, s;
    xC((E) => {
      e.trapped && !l.paused && n("release-requested", E);
    });
    const l = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, c = (E) => {
      if (!e.loop && !e.trapped || l.paused)
        return;
      const { key: m, altKey: _, ctrlKey: O, metaKey: C, currentTarget: N, shiftKey: M } = E, { loop: k } = e, R = m === Vt.tab && !_ && !O && !C, A = document.activeElement;
      if (R && A) {
        const $ = N, [z, Y] = SI($);
        z && Y ? !M && A === Y ? (E.preventDefault(), k && Fr(z, !0), n("focusout-prevented")) : M && [z, $].includes(A) && (E.preventDefault(), k && Fr(Y, !0), n("focusout-prevented")) : A === $ && (E.preventDefault(), n("focusout-prevented"));
      }
    };
    Nt(TI, {
      focusTrapRef: r,
      onKeydown: c
    }), pe(() => e.focusTrapEl, (E) => {
      E && (r.value = E);
    }, { immediate: !0 }), pe([r], ([E], [m]) => {
      E && (E.addEventListener("keydown", c), E.addEventListener("focusin", h), E.addEventListener("focusout", v)), m && (m.removeEventListener("keydown", c), m.removeEventListener("focusin", h), m.removeEventListener("focusout", v));
    });
    const f = (E) => {
      n(wp, E);
    }, d = (E) => n(Sp, E), h = (E) => {
      const m = b(r);
      if (!m)
        return;
      const _ = E.target, O = _ && m.contains(_);
      O && n("focusin", E), !l.paused && e.trapped && (O ? s = _ : Fr(s, !0));
    }, v = (E) => {
      const m = b(r);
      if (!(l.paused || !m))
        if (e.trapped) {
          const _ = E.relatedTarget;
          !Ua(_) && !m.contains(_) && setTimeout(() => {
            !l.paused && e.trapped && Fr(s, !0);
          }, 0);
        } else {
          const _ = E.target;
          _ && m.contains(_) || n("focusout", E);
        }
    };
    async function S() {
      await De();
      const E = b(r);
      if (E) {
        yp.push(l);
        const m = document.activeElement;
        if (i = m, !E.contains(m)) {
          const O = new Event(_l, _p);
          E.addEventListener(_l, f), E.dispatchEvent(O), O.defaultPrevented || De(() => {
            let C = e.focusStartEl;
            xt(C) || (Fr(C), document.activeElement !== C && (C = "first")), C === "first" && OI(Yh(E), !0), (document.activeElement === m || C === "container") && Fr(E);
          });
        }
      }
    }
    function w() {
      const E = b(r);
      if (E) {
        E.removeEventListener(_l, f);
        const m = new Event(wl, _p);
        E.addEventListener(wl, d), E.dispatchEvent(m), m.defaultPrevented || Fr(i != null ? i : document.body, !0), E.removeEventListener(wl, f), yp.remove(l);
      }
    }
    return ut(() => {
      e.trapped && S(), pe(() => e.trapped, (E) => {
        E ? S() : w();
      });
    }), vn(() => {
      e.trapped && w();
    }), {
      onKeydown: c
    };
  }
});
function AI(e, n, r, i, s, l) {
  return Te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var II = /* @__PURE__ */ Ue(CI, [["render", AI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const $I = ["fixed", "absolute"], PI = nt({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ge(Array),
    default: () => []
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
    values: wu,
    default: "bottom"
  },
  popperOptions: {
    type: Ge(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: $I,
    default: "absolute"
  }
}), Zh = nt({
  ...PI,
  id: String,
  style: { type: Ge([String, Array, Object]) },
  className: { type: Ge([String, Array, Object]) },
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
    type: Ge([String, Array, Object])
  },
  popperStyle: {
    type: Ge([String, Array, Object])
  },
  referenceEl: {
    type: Ge(Object)
  },
  triggerTargetEl: {
    type: Ge(Object)
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
}), MI = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], Ep = (e, n) => {
  const { placement: r, strategy: i, popperOptions: s } = e, l = {
    placement: r,
    strategy: i,
    ...s,
    modifiers: LI(e)
  };
  return FI(l, n), BI(l, s == null ? void 0 : s.modifiers), l;
}, RI = (e) => {
  if (!!kt)
    return kr(e);
};
function LI(e) {
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
        fallbackPlacements: i != null ? i : []
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
function FI(e, { arrowEl: n, arrowOffset: r }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: n,
      padding: r != null ? r : 5
    }
  });
}
function BI(e, n) {
  n && (e.modifiers = [...e.modifiers, ...n != null ? n : []]);
}
const kI = {
  name: "ElPopperContent"
}, NI = /* @__PURE__ */ $e({
  ...kI,
  props: Zh,
  emits: MI,
  setup(e, { expose: n, emit: r }) {
    const i = e, { popperInstanceRef: s, contentRef: l, triggerRef: c, role: f } = qe(bu, void 0), d = qe(io, void 0), { nextZIndex: h } = PC(), v = Be("popper"), S = X(), w = X("first"), E = X(), m = X();
    Nt(Th, {
      arrowRef: E,
      arrowOffset: m
    }), d && (d.addInputId || d.removeInputId) && Nt(io, {
      ...d,
      addInputId: mi,
      removeInputId: mi
    });
    const _ = X(i.zIndex || h()), O = X(!1);
    let C;
    const N = L(() => RI(i.referenceEl) || b(c)), M = L(() => [{ zIndex: b(_) }, i.popperStyle]), k = L(() => [
      v.b(),
      v.is("pure", i.pure),
      v.is(i.effect),
      i.popperClass
    ]), R = L(() => f && f.value === "dialog" ? "false" : void 0), A = ({ referenceEl: Z, popperContentEl: ne, arrowEl: ae }) => {
      const re = Ep(i, {
        arrowEl: ae,
        arrowOffset: b(m)
      });
      return _I(Z, ne, re);
    }, $ = (Z = !0) => {
      var ne;
      (ne = b(s)) == null || ne.update(), Z && (_.value = i.zIndex || h());
    }, z = () => {
      var Z, ne;
      const ae = { name: "eventListeners", enabled: i.visible };
      (ne = (Z = b(s)) == null ? void 0 : Z.setOptions) == null || ne.call(Z, (re) => ({
        ...re,
        modifiers: [...re.modifiers || [], ae]
      })), $(!1), i.visible && i.focusOnShow ? O.value = !0 : i.visible === !1 && (O.value = !1);
    }, Y = () => {
      r("focus");
    }, te = () => {
      w.value = "first", r("blur");
    }, D = (Z) => {
      var ne;
      i.visible && !O.value && (Z.target && (w.value = Z.target), O.value = !0, Z.relatedTarget && ((ne = Z.relatedTarget) == null || ne.focus()));
    }, G = () => {
      i.trapping || (O.value = !1);
    }, U = () => {
      O.value = !1, r("close");
    };
    return ut(() => {
      let Z;
      pe(N, (ne) => {
        var ae;
        Z == null || Z();
        const re = b(s);
        if ((ae = re == null ? void 0 : re.destroy) == null || ae.call(re), ne) {
          const he = b(S);
          l.value = he, s.value = A({
            referenceEl: ne,
            popperContentEl: he,
            arrowEl: b(E)
          }), Z = pe(() => ne.getBoundingClientRect(), () => $(), {
            immediate: !0
          });
        } else
          s.value = void 0;
      }, {
        immediate: !0
      }), pe(() => i.triggerTargetEl, (ne, ae) => {
        C == null || C(), C = void 0;
        const re = b(ne || S.value), he = b(ae || S.value);
        if (bi(re)) {
          const { ariaLabel: ce, id: ye } = nr(i);
          C = pe([f, ce, R, ye], (_e) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((at, Qe) => {
              Ua(_e[Qe]) ? re.removeAttribute(at) : re.setAttribute(at, _e[Qe]);
            });
          }, { immediate: !0 });
        }
        bi(he) && ["role", "aria-label", "aria-modal", "id"].forEach((ce) => {
          he.removeAttribute(ce);
        });
      }, { immediate: !0 }), pe(() => i.visible, z, { immediate: !0 }), pe(() => Ep(i, {
        arrowEl: b(E),
        arrowOffset: b(m)
      }), (ne) => {
        var ae;
        return (ae = s.value) == null ? void 0 : ae.setOptions(ne);
      });
    }), vn(() => {
      C == null || C(), C = void 0;
    }), n({
      popperContentRef: S,
      popperInstanceRef: s,
      updatePopper: $,
      contentStyle: M
    }), (Z, ne) => (V(), oe("div", {
      ref_key: "popperContentRef",
      ref: S,
      style: At(b(M)),
      class: Q(b(k)),
      tabindex: "-1",
      onMouseenter: ne[0] || (ne[0] = (ae) => Z.$emit("mouseenter", ae)),
      onMouseleave: ne[1] || (ne[1] = (ae) => Z.$emit("mouseleave", ae))
    }, [
      lt(b(II), {
        trapped: O.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": S.value,
        "focus-start-el": w.value,
        onFocusAfterTrapped: Y,
        onFocusAfterReleased: te,
        onFocusin: D,
        onFocusoutPrevented: G,
        onReleaseRequested: U
      }, {
        default: Oe(() => [
          Te(Z.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var DI = /* @__PURE__ */ Ue(NI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const WI = Vn(fA), zI = Be("tooltip"), Iu = nt({
  ...CC,
  ...Zh,
  appendTo: {
    type: Ge([String, Object]),
    default: Ph
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
    type: Ge(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${zI.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Xh = nt({
  ...kh,
  disabled: Boolean,
  trigger: {
    type: Ge([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ge(Array),
    default: () => [Vt.enter, Vt.space]
  }
}), HI = nt({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), $u = Symbol("elTooltip"), qI = $e({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: DI
  },
  inheritAttrs: !1,
  props: Iu,
  setup(e) {
    const n = X(null), r = X(!1), i = X(!1), s = X(!1), l = X(!1), {
      controlled: c,
      id: f,
      open: d,
      trigger: h,
      onClose: v,
      onOpen: S,
      onShow: w,
      onHide: E,
      onBeforeShow: m,
      onBeforeHide: _
    } = qe($u, void 0), O = L(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    vn(() => {
      l.value = !0;
    });
    const C = L(() => b(O) ? !0 : b(d)), N = L(() => e.disabled ? !1 : b(d)), M = L(() => {
      var Z;
      return (Z = e.style) != null ? Z : {};
    }), k = L(() => !b(d)), R = () => {
      E();
    }, A = () => {
      if (b(c))
        return !0;
    }, $ = mr(A, () => {
      e.enterable && b(h) === "hover" && S();
    }), z = mr(A, () => {
      b(h) === "hover" && v();
    }), Y = () => {
      var Z, ne;
      (ne = (Z = n.value) == null ? void 0 : Z.updatePopper) == null || ne.call(Z), m == null || m();
    }, te = () => {
      _ == null || _();
    }, D = () => {
      w(), U = LO(L(() => {
        var Z;
        return (Z = n.value) == null ? void 0 : Z.popperContentRef;
      }), () => {
        if (b(c))
          return;
        b(h) !== "hover" && v();
      });
    }, G = () => {
      e.virtualTriggering || v();
    };
    let U;
    return pe(() => b(d), (Z) => {
      Z || U == null || U();
    }, {
      flush: "post"
    }), {
      ariaHidden: k,
      entering: i,
      leaving: s,
      id: f,
      intermediateOpen: r,
      contentStyle: M,
      contentRef: n,
      destroyed: l,
      shouldRender: C,
      shouldShow: N,
      onClose: v,
      open: d,
      onAfterShow: D,
      onBeforeEnter: Y,
      onBeforeLeave: te,
      onContentEnter: $,
      onContentLeave: z,
      onTransitionLeave: R,
      onBlur: G
    };
  }
});
function UI(e, n, r, i, s, l) {
  const c = qt("el-popper-content");
  return V(), Me(aw, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    lt(ao, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: Oe(() => [
        e.shouldRender ? Mt((V(), Me(c, Xn({
          key: 0,
          id: e.id,
          ref: "contentRef"
        }, e.$attrs, {
          "aria-label": e.ariaLabel,
          "aria-hidden": e.ariaHidden,
          "boundaries-padding": e.boundariesPadding,
          "fallback-placements": e.fallbackPlacements,
          "gpu-acceleration": e.gpuAcceleration,
          offset: e.offset,
          placement: e.placement,
          "popper-options": e.popperOptions,
          strategy: e.strategy,
          effect: e.effect,
          enterable: e.enterable,
          pure: e.pure,
          "popper-class": e.popperClass,
          "popper-style": [e.popperStyle, e.contentStyle],
          "reference-el": e.referenceEl,
          "trigger-target-el": e.triggerTargetEl,
          visible: e.shouldShow,
          "z-index": e.zIndex,
          onMouseenter: e.onContentEnter,
          onMouseleave: e.onContentLeave,
          onBlur: e.onBlur,
          onClose: e.onClose
        }), {
          default: Oe(() => [
            we(" Workaround bug #6378 "),
            e.destroyed ? we("v-if", !0) : Te(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [Wr, e.shouldShow]
        ]) : we("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var VI = /* @__PURE__ */ Ue(qI, [["render", UI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const KI = (e, n) => ka(e) ? e.includes(n) : e === n, xo = (e, n, r) => (i) => {
  KI(b(e), n) && r(i);
}, GI = $e({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: bA
  },
  props: Xh,
  setup(e) {
    const n = Be("tooltip"), { controlled: r, id: i, open: s, onOpen: l, onClose: c, onToggle: f } = qe($u, void 0), d = X(null), h = () => {
      if (b(r) || e.disabled)
        return !0;
    }, v = qn(e, "trigger"), S = mr(h, xo(v, "hover", l)), w = mr(h, xo(v, "hover", c)), E = mr(h, xo(v, "click", (N) => {
      N.button === 0 && f(N);
    })), m = mr(h, xo(v, "focus", l)), _ = mr(h, xo(v, "focus", c)), O = mr(h, xo(v, "contextmenu", (N) => {
      N.preventDefault(), f(N);
    })), C = mr(h, (N) => {
      const { code: M } = N;
      e.triggerKeys.includes(M) && (N.preventDefault(), f(N));
    });
    return {
      onBlur: _,
      onContextMenu: O,
      onFocus: m,
      onMouseenter: S,
      onMouseleave: w,
      onClick: E,
      onKeydown: C,
      open: s,
      id: i,
      triggerRef: d,
      ns: n
    };
  }
});
function jI(e, n, r, i, s, l) {
  const c = qt("el-popper-trigger");
  return V(), Me(c, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: Q(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: Oe(() => [
      Te(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var YI = /* @__PURE__ */ Ue(GI, [["render", jI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: ZI, useModelToggle: XI, useModelToggleEmits: JI } = SC("visible"), QI = $e({
  name: "ElTooltip",
  components: {
    ElPopper: WI,
    ElPopperArrow: hA,
    ElTooltipContent: VI,
    ElTooltipTrigger: YI
  },
  props: {
    ...Lh,
    ...ZI,
    ...Iu,
    ...Xh,
    ...Fh,
    ...HI
  },
  emits: [
    ...JI,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: n }) {
    TC();
    const r = L(() => (Yl(e.openDelay) || bt("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), i = L(() => (Yl(e.visibleArrow) || bt("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), _r(e.visibleArrow) ? e.visibleArrow : e.showArrow)), s = Ga(), l = X(null), c = X(null), f = () => {
      var C;
      const N = b(l);
      N && ((C = N.popperInstanceRef) == null || C.update());
    }, d = X(!1), h = X(void 0), { show: v, hide: S, hasUpdateHandler: w } = XI({
      indicator: d,
      toggleReason: h
    }), { onOpen: E, onClose: m } = AC({
      showAfter: r,
      hideAfter: qn(e, "hideAfter"),
      open: v,
      close: S
    }), _ = L(() => _r(e.visible) && !w.value);
    Nt($u, {
      controlled: _,
      id: s,
      open: sw(d),
      trigger: qn(e, "trigger"),
      onOpen: (C) => {
        E(C);
      },
      onClose: (C) => {
        m(C);
      },
      onToggle: (C) => {
        b(d) ? m(C) : E(C);
      },
      onShow: () => {
        n("show", h.value);
      },
      onHide: () => {
        n("hide", h.value);
      },
      onBeforeShow: () => {
        n("before-show", h.value);
      },
      onBeforeHide: () => {
        n("before-hide", h.value);
      },
      updatePopper: f
    }), pe(() => e.disabled, (C) => {
      C && d.value && (d.value = !1);
    });
    const O = () => {
      var C, N;
      const M = (N = (C = c.value) == null ? void 0 : C.contentRef) == null ? void 0 : N.popperContentRef;
      return M && M.contains(document.activeElement);
    };
    return lw(() => d.value && S()), {
      compatShowAfter: r,
      compatShowArrow: i,
      popperRef: l,
      contentRef: c,
      open: d,
      hide: S,
      isFocusInsideContent: O,
      updatePopper: f,
      onOpen: E,
      onClose: m
    };
  }
}), e$ = ["innerHTML"], t$ = { key: 1 };
function n$(e, n, r, i, s, l) {
  const c = qt("el-tooltip-trigger"), f = qt("el-popper-arrow"), d = qt("el-tooltip-content"), h = qt("el-popper");
  return V(), Me(h, {
    ref: "popperRef",
    role: e.role
  }, {
    default: Oe(() => [
      lt(c, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: Oe(() => [
          e.$slots.default ? Te(e.$slots, "default", { key: 0 }) : we("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      lt(d, {
        ref: "contentRef",
        "aria-label": e.ariaLabel,
        "boundaries-padding": e.boundariesPadding,
        content: e.content,
        disabled: e.disabled,
        effect: e.effect,
        enterable: e.enterable,
        "fallback-placements": e.fallbackPlacements,
        "hide-after": e.hideAfter,
        "gpu-acceleration": e.gpuAcceleration,
        offset: e.offset,
        persistent: e.persistent,
        "popper-class": e.popperClass,
        "popper-style": e.popperStyle,
        placement: e.placement,
        "popper-options": e.popperOptions,
        pure: e.pure,
        "raw-content": e.rawContent,
        "reference-el": e.referenceEl,
        "trigger-target-el": e.triggerTargetEl,
        "show-after": e.compatShowAfter,
        strategy: e.strategy,
        teleported: e.teleported,
        transition: e.transition,
        "virtual-triggering": e.virtualTriggering,
        "z-index": e.zIndex,
        "append-to": e.appendTo
      }, {
        default: Oe(() => [
          Te(e.$slots, "content", {}, () => [
            e.rawContent ? (V(), oe("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, e$)) : (V(), oe("span", t$, mt(e.content), 1))
          ]),
          e.compatShowArrow ? (V(), Me(f, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : we("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var r$ = /* @__PURE__ */ Ue(QI, [["render", n$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Pu = Vn(r$);
function Rt(e, n) {
  o$(e) && (e = "100%");
  var r = i$(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function wa(e) {
  return Math.min(1, Math.max(0, e));
}
function o$(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function i$(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Jh(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Sa(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function eo(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function a$(e, n, r) {
  return {
    r: Rt(e, 255) * 255,
    g: Rt(n, 255) * 255,
    b: Rt(r, 255) * 255
  };
}
function xp(e, n, r) {
  e = Rt(e, 255), n = Rt(n, 255), r = Rt(r, 255);
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
function Sl(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * (6 * r) : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function s$(e, n, r) {
  var i, s, l;
  if (e = Rt(e, 360), n = Rt(n, 100), r = Rt(r, 100), n === 0)
    s = r, l = r, i = r;
  else {
    var c = r < 0.5 ? r * (1 + n) : r + n - r * n, f = 2 * r - c;
    i = Sl(f, c, e + 1 / 3), s = Sl(f, c, e), l = Sl(f, c, e - 1 / 3);
  }
  return { r: i * 255, g: s * 255, b: l * 255 };
}
function Op(e, n, r) {
  e = Rt(e, 255), n = Rt(n, 255), r = Rt(r, 255);
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
function l$(e, n, r) {
  e = Rt(e, 360) * 6, n = Rt(n, 100), r = Rt(r, 100);
  var i = Math.floor(e), s = e - i, l = r * (1 - n), c = r * (1 - s * n), f = r * (1 - (1 - s) * n), d = i % 6, h = [r, c, l, l, f, r][d], v = [f, r, r, c, l, l][d], S = [l, l, f, r, r, c][d];
  return { r: h * 255, g: v * 255, b: S * 255 };
}
function Tp(e, n, r, i) {
  var s = [
    eo(Math.round(e).toString(16)),
    eo(Math.round(n).toString(16)),
    eo(Math.round(r).toString(16))
  ];
  return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function u$(e, n, r, i, s) {
  var l = [
    eo(Math.round(e).toString(16)),
    eo(Math.round(n).toString(16)),
    eo(Math.round(r).toString(16)),
    eo(c$(i))
  ];
  return s && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function c$(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Cp(e) {
  return dn(e) / 255;
}
function dn(e) {
  return parseInt(e, 16);
}
function f$(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Xl = {
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
function d$(e) {
  var n = { r: 0, g: 0, b: 0 }, r = 1, i = null, s = null, l = null, c = !1, f = !1;
  return typeof e == "string" && (e = v$(e)), typeof e == "object" && (gr(e.r) && gr(e.g) && gr(e.b) ? (n = a$(e.r, e.g, e.b), c = !0, f = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : gr(e.h) && gr(e.s) && gr(e.v) ? (i = Sa(e.s), s = Sa(e.v), n = l$(e.h, i, s), c = !0, f = "hsv") : gr(e.h) && gr(e.s) && gr(e.l) && (i = Sa(e.s), l = Sa(e.l), n = s$(e.h, i, l), c = !0, f = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Jh(r), {
    ok: c,
    format: e.format || f,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
var p$ = "[-\\+]?\\d+%?", h$ = "[-\\+]?\\d*\\.\\d+%?", Nr = "(?:".concat(h$, ")|(?:").concat(p$, ")"), El = "[\\s|\\(]+(".concat(Nr, ")[,|\\s]+(").concat(Nr, ")[,|\\s]+(").concat(Nr, ")\\s*\\)?"), xl = "[\\s|\\(]+(".concat(Nr, ")[,|\\s]+(").concat(Nr, ")[,|\\s]+(").concat(Nr, ")[,|\\s]+(").concat(Nr, ")\\s*\\)?"), zn = {
  CSS_UNIT: new RegExp(Nr),
  rgb: new RegExp("rgb" + El),
  rgba: new RegExp("rgba" + xl),
  hsl: new RegExp("hsl" + El),
  hsla: new RegExp("hsla" + xl),
  hsv: new RegExp("hsv" + El),
  hsva: new RegExp("hsva" + xl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function v$(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (Xl[e])
    e = Xl[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = zn.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = zn.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = zn.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = zn.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = zn.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = zn.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = zn.hex8.exec(e), r ? {
    r: dn(r[1]),
    g: dn(r[2]),
    b: dn(r[3]),
    a: Cp(r[4]),
    format: n ? "name" : "hex8"
  } : (r = zn.hex6.exec(e), r ? {
    r: dn(r[1]),
    g: dn(r[2]),
    b: dn(r[3]),
    format: n ? "name" : "hex"
  } : (r = zn.hex4.exec(e), r ? {
    r: dn(r[1] + r[1]),
    g: dn(r[2] + r[2]),
    b: dn(r[3] + r[3]),
    a: Cp(r[4] + r[4]),
    format: n ? "name" : "hex8"
  } : (r = zn.hex3.exec(e), r ? {
    r: dn(r[1] + r[1]),
    g: dn(r[2] + r[2]),
    b: dn(r[3] + r[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function gr(e) {
  return Boolean(zn.CSS_UNIT.exec(String(e)));
}
var g$ = function() {
  function e(n, r) {
    n === void 0 && (n = ""), r === void 0 && (r = {});
    var i;
    if (n instanceof e)
      return n;
    typeof n == "number" && (n = f$(n)), this.originalInput = n;
    var s = d$(n);
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
    return this.a = Jh(n), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var n = Op(this.r, this.g, this.b);
    return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var n = Op(this.r, this.g, this.b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), s = Math.round(n.v * 100);
    return this.a === 1 ? "hsv(".concat(r, ", ").concat(i, "%, ").concat(s, "%)") : "hsva(".concat(r, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var n = xp(this.r, this.g, this.b);
    return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var n = xp(this.r, this.g, this.b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), s = Math.round(n.l * 100);
    return this.a === 1 ? "hsl(".concat(r, ", ").concat(i, "%, ").concat(s, "%)") : "hsla(".concat(r, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(n) {
    return n === void 0 && (n = !1), Tp(this.r, this.g, this.b, n);
  }, e.prototype.toHexString = function(n) {
    return n === void 0 && (n = !1), "#" + this.toHex(n);
  }, e.prototype.toHex8 = function(n) {
    return n === void 0 && (n = !1), u$(this.r, this.g, this.b, this.a, n);
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
      return "".concat(Math.round(Rt(r, 255) * 100), "%");
    };
    return {
      r: n(this.r),
      g: n(this.g),
      b: n(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var n = function(r) {
      return Math.round(Rt(r, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%)") : "rgba(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var n = "#" + Tp(this.r, this.g, this.b, !1), r = 0, i = Object.entries(Xl); r < i.length; r++) {
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
    return r.l += n / 100, r.l = wa(r.l), new e(r);
  }, e.prototype.brighten = function(n) {
    n === void 0 && (n = 10);
    var r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))), new e(r);
  }, e.prototype.darken = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.l -= n / 100, r.l = wa(r.l), new e(r);
  }, e.prototype.tint = function(n) {
    return n === void 0 && (n = 10), this.mix("white", n);
  }, e.prototype.shade = function(n) {
    return n === void 0 && (n = 10), this.mix("black", n);
  }, e.prototype.desaturate = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.s -= n / 100, r.s = wa(r.s), new e(r);
  }, e.prototype.saturate = function(n) {
    n === void 0 && (n = 10);
    var r = this.toHsl();
    return r.s += n / 100, r.s = wa(r.s), new e(r);
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
let Ap;
kt && (document.addEventListener("mousedown", (e) => Ap = e), document.addEventListener("mouseup", (e) => {
  for (const n of Br.values())
    for (const { documentHandler: r } of n)
      r(e, Ap);
}));
function Ip(e, n) {
  let r = [];
  return Array.isArray(n.arg) ? r = n.arg : bi(n.arg) && r.push(n.arg), function(i, s) {
    const l = n.instance.popperRef, c = i.target, f = s == null ? void 0 : s.target, d = !n || !n.instance, h = !c || !f, v = e.contains(c) || e.contains(f), S = e === c, w = r.length && r.some((m) => m == null ? void 0 : m.contains(c)) || r.length && r.includes(f), E = l && (l.contains(c) || l.contains(f));
    d || h || v || S || w || E || n.value(i, s);
  };
}
const m$ = {
  beforeMount(e, n) {
    Br.has(e) || Br.set(e, []), Br.get(e).push({
      documentHandler: Ip(e, n),
      bindingFn: n.value
    });
  },
  updated(e, n) {
    Br.has(e) || Br.set(e, []);
    const r = Br.get(e), i = r.findIndex((l) => l.bindingFn === n.oldValue), s = {
      documentHandler: Ip(e, n),
      bindingFn: n.value
    };
    i >= 0 ? r.splice(i, 1, s) : r.push(s);
  },
  unmounted(e) {
    Br.delete(e);
  }
}, b$ = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: Ti,
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Qh = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => {
    }
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
  size: Ti,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, zo = () => {
  const { form: e, formItem: n } = ja(), r = qe("CheckboxGroup", {}), i = L(() => r && (r == null ? void 0 : r.name) === "ElCheckboxGroup"), s = L(() => n == null ? void 0 : n.size);
  return {
    isGroup: i,
    checkboxGroup: r,
    elForm: e,
    elFormItemSize: s,
    elFormItem: n
  };
}, y$ = (e, { elFormItem: n }) => {
  const { inputId: r, isLabeledByFormItem: i } = Ya(e, {
    formItemContext: n
  });
  return {
    isLabeledByFormItem: i,
    groupId: r
  };
}, _$ = (e) => {
  const n = X(!1), { emit: r } = rn(), { isGroup: i, checkboxGroup: s, elFormItem: l } = zo(), c = X(!1);
  return {
    model: L({
      get() {
        var d, h;
        return i.value ? (d = s.modelValue) == null ? void 0 : d.value : (h = e.modelValue) != null ? h : n.value;
      },
      set(d) {
        var h;
        i.value && Array.isArray(d) ? (c.value = s.max !== void 0 && d.length > s.max.value, c.value === !1 && ((h = s == null ? void 0 : s.changeEvent) == null || h.call(s, d))) : (r(It, d), n.value = d);
      }
    }),
    isGroup: i,
    isLimitExceeded: c,
    elFormItem: l
  };
}, w$ = (e, n, { model: r }) => {
  const { isGroup: i, checkboxGroup: s } = zo(), l = X(!1), c = Sr(s == null ? void 0 : s.checkboxGroupSize, { prop: !0 }), f = L(() => {
    const v = r.value;
    return bh(v) === "[object Boolean]" ? v : Array.isArray(v) ? v.map(pi).includes(e.label) : v != null ? v === e.trueLabel : !!v;
  }), d = Sr(L(() => {
    var v;
    return i.value ? (v = s == null ? void 0 : s.checkboxGroupSize) == null ? void 0 : v.value : void 0;
  })), h = L(() => !!(n.default || e.label));
  return {
    isChecked: f,
    focus: l,
    size: c,
    checkboxSize: d,
    hasOwnLabel: h
  };
}, S$ = (e, {
  model: n,
  isChecked: r
}) => {
  const { elForm: i, isGroup: s, checkboxGroup: l } = zo(), c = L(() => {
    var d, h;
    const v = (d = l.max) == null ? void 0 : d.value, S = (h = l.min) == null ? void 0 : h.value;
    return !!(v || S) && n.value.length >= v && !r.value || n.value.length <= S && r.value;
  });
  return {
    isDisabled: L(() => {
      var d, h;
      const v = e.disabled || (i == null ? void 0 : i.disabled);
      return (h = s.value ? ((d = l.disabled) == null ? void 0 : d.value) || v || c.value : v) != null ? h : !1;
    }),
    isLimitDisabled: c
  };
}, E$ = (e, { model: n }) => {
  function r() {
    Array.isArray(n.value) && !n.value.includes(e.label) ? n.value.push(e.label) : n.value = e.trueLabel || !0;
  }
  e.checked && r();
}, x$ = (e, {
  model: n,
  isLimitExceeded: r,
  hasOwnLabel: i,
  isDisabled: s,
  isLabeledByFormItem: l
}) => {
  const { elFormItem: c, checkboxGroup: f } = zo(), { emit: d } = rn();
  function h(m) {
    var _, O;
    return m === e.trueLabel || m === !0 ? (_ = e.trueLabel) != null ? _ : !0 : (O = e.falseLabel) != null ? O : !1;
  }
  function v(m, _) {
    d("change", h(m), _);
  }
  function S(m) {
    if (r.value)
      return;
    const _ = m.target;
    d("change", h(_.checked), m);
  }
  async function w(m) {
    r.value || !i.value && !s.value && l.value && (n.value = h([!1, e.falseLabel].includes(n.value)), await De(), v(n.value, m));
  }
  const E = L(() => {
    var m;
    return ((m = f.validateEvent) == null ? void 0 : m.value) || e.validateEvent;
  });
  return pe(() => e.modelValue, () => {
    E.value && (c == null || c.validate("change").catch((m) => bt(m)));
  }), {
    handleChange: S,
    onClickRoot: w
  };
}, ev = {
  [It]: (e) => xt(e) || $n(e) || _r(e),
  change: (e) => xt(e) || $n(e) || _r(e)
}, O$ = {
  [It]: (e) => ka(e),
  change: (e) => ka(e)
}, tv = (e, n) => {
  const { model: r, isGroup: i, isLimitExceeded: s, elFormItem: l } = _$(e), { focus: c, size: f, isChecked: d, checkboxSize: h, hasOwnLabel: v } = w$(e, n, {
    model: r
  }), { isDisabled: S } = S$(e, { model: r, isChecked: d }), { inputId: w, isLabeledByFormItem: E } = Ya(e, {
    formItemContext: l,
    disableIdGeneration: v,
    disableIdManagement: i
  }), { handleChange: m, onClickRoot: _ } = x$(e, {
    model: r,
    isLimitExceeded: s,
    hasOwnLabel: v,
    isDisabled: S,
    isLabeledByFormItem: E
  });
  return E$(e, { model: r }), {
    elFormItem: l,
    inputId: w,
    isLabeledByFormItem: E,
    isChecked: d,
    isDisabled: S,
    isGroup: i,
    checkboxSize: h,
    hasOwnLabel: v,
    model: r,
    handleChange: m,
    onClickRoot: _,
    focus: c,
    size: f
  };
}, T$ = ["tabindex", "role", "aria-checked"], C$ = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], A$ = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], I$ = {
  name: "ElCheckbox"
}, $$ = /* @__PURE__ */ $e({
  ...I$,
  props: Qh,
  emits: ev,
  setup(e) {
    const n = e, r = Ei(), {
      inputId: i,
      isLabeledByFormItem: s,
      isChecked: l,
      isDisabled: c,
      checkboxSize: f,
      hasOwnLabel: d,
      model: h,
      handleChange: v,
      onClickRoot: S,
      focus: w
    } = tv(n, r), E = Be("checkbox");
    return (m, _) => (V(), Me(In(!b(d) && b(s) ? "span" : "label"), {
      class: Q([
        b(E).b(),
        b(E).m(b(f)),
        b(E).is("disabled", b(c)),
        b(E).is("bordered", m.border),
        b(E).is("checked", b(l))
      ]),
      "aria-controls": m.indeterminate ? m.controls : null,
      onClick: b(S)
    }, {
      default: Oe(() => [
        fe("span", {
          class: Q([
            b(E).e("input"),
            b(E).is("disabled", b(c)),
            b(E).is("checked", b(l)),
            b(E).is("indeterminate", m.indeterminate),
            b(E).is("focus", b(w))
          ]),
          tabindex: m.indeterminate ? 0 : void 0,
          role: m.indeterminate ? "checkbox" : void 0,
          "aria-checked": m.indeterminate ? "mixed" : void 0
        }, [
          m.trueLabel || m.falseLabel ? Mt((V(), oe("input", {
            key: 0,
            id: b(i),
            "onUpdate:modelValue": _[0] || (_[0] = (O) => ro(h) ? h.value = O : null),
            class: Q(b(E).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            name: m.name,
            tabindex: m.tabindex,
            disabled: b(c),
            "true-value": m.trueLabel,
            "false-value": m.falseLabel,
            onChange: _[1] || (_[1] = (...O) => b(v) && b(v)(...O)),
            onFocus: _[2] || (_[2] = (O) => w.value = !0),
            onBlur: _[3] || (_[3] = (O) => w.value = !1)
          }, null, 42, C$)), [
            [Pa, b(h)]
          ]) : Mt((V(), oe("input", {
            key: 1,
            id: b(i),
            "onUpdate:modelValue": _[4] || (_[4] = (O) => ro(h) ? h.value = O : null),
            class: Q(b(E).e("original")),
            type: "checkbox",
            "aria-hidden": m.indeterminate ? "true" : "false",
            disabled: b(c),
            value: m.label,
            name: m.name,
            tabindex: m.tabindex,
            onChange: _[5] || (_[5] = (...O) => b(v) && b(v)(...O)),
            onFocus: _[6] || (_[6] = (O) => w.value = !0),
            onBlur: _[7] || (_[7] = (O) => w.value = !1)
          }, null, 42, A$)), [
            [Pa, b(h)]
          ]),
          fe("span", {
            class: Q(b(E).e("inner"))
          }, null, 2)
        ], 10, T$),
        b(d) ? (V(), oe("span", {
          key: 0,
          class: Q(b(E).e("label"))
        }, [
          Te(m.$slots, "default"),
          m.$slots.default ? we("v-if", !0) : (V(), oe(Kt, { key: 0 }, [
            ko(mt(m.label), 1)
          ], 64))
        ], 2)) : we("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var P$ = /* @__PURE__ */ Ue($$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const M$ = ["name", "tabindex", "disabled", "true-value", "false-value"], R$ = ["name", "tabindex", "disabled", "value"], L$ = {
  name: "ElCheckboxButton"
}, F$ = /* @__PURE__ */ $e({
  ...L$,
  props: Qh,
  emits: ev,
  setup(e) {
    const n = e, r = Ei(), { focus: i, isChecked: s, isDisabled: l, size: c, model: f, handleChange: d } = tv(n, r), { checkboxGroup: h } = zo(), v = Be("checkbox"), S = L(() => {
      var w, E, m, _;
      const O = (E = (w = h == null ? void 0 : h.fill) == null ? void 0 : w.value) != null ? E : "";
      return {
        backgroundColor: O,
        borderColor: O,
        color: (_ = (m = h == null ? void 0 : h.textColor) == null ? void 0 : m.value) != null ? _ : "",
        boxShadow: O ? `-1px 0 0 0 ${O}` : void 0
      };
    });
    return (w, E) => (V(), oe("label", {
      class: Q([
        b(v).b("button"),
        b(v).bm("button", b(c)),
        b(v).is("disabled", b(l)),
        b(v).is("checked", b(s)),
        b(v).is("focus", b(i))
      ])
    }, [
      w.trueLabel || w.falseLabel ? Mt((V(), oe("input", {
        key: 0,
        "onUpdate:modelValue": E[0] || (E[0] = (m) => ro(f) ? f.value = m : null),
        class: Q(b(v).be("button", "original")),
        type: "checkbox",
        name: w.name,
        tabindex: w.tabindex,
        disabled: b(l),
        "true-value": w.trueLabel,
        "false-value": w.falseLabel,
        onChange: E[1] || (E[1] = (...m) => b(d) && b(d)(...m)),
        onFocus: E[2] || (E[2] = (m) => i.value = !0),
        onBlur: E[3] || (E[3] = (m) => i.value = !1)
      }, null, 42, M$)), [
        [Pa, b(f)]
      ]) : Mt((V(), oe("input", {
        key: 1,
        "onUpdate:modelValue": E[4] || (E[4] = (m) => ro(f) ? f.value = m : null),
        class: Q(b(v).be("button", "original")),
        type: "checkbox",
        name: w.name,
        tabindex: w.tabindex,
        disabled: b(l),
        value: w.label,
        onChange: E[5] || (E[5] = (...m) => b(d) && b(d)(...m)),
        onFocus: E[6] || (E[6] = (m) => i.value = !0),
        onBlur: E[7] || (E[7] = (m) => i.value = !1)
      }, null, 42, R$)), [
        [Pa, b(f)]
      ]),
      w.$slots.default || w.label ? (V(), oe("span", {
        key: 2,
        class: Q(b(v).be("button", "inner")),
        style: At(b(s) ? b(S) : void 0)
      }, [
        Te(w.$slots, "default", {}, () => [
          ko(mt(w.label), 1)
        ])
      ], 6)) : we("v-if", !0)
    ], 2));
  }
});
var nv = /* @__PURE__ */ Ue(F$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const B$ = {
  name: "ElCheckboxGroup"
}, k$ = /* @__PURE__ */ $e({
  ...B$,
  props: b$,
  emits: O$,
  setup(e, { emit: n }) {
    const r = e, { elFormItem: i } = zo(), { groupId: s, isLabeledByFormItem: l } = y$(r, {
      elFormItem: i
    }), c = Sr(), f = Be("checkbox"), d = (v) => {
      n(It, v), De(() => {
        n("change", v);
      });
    }, h = L({
      get() {
        return r.modelValue;
      },
      set(v) {
        d(v);
      }
    });
    return Nt("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...nr(r),
      modelValue: h,
      checkboxGroupSize: c,
      changeEvent: d
    }), pe(() => r.modelValue, () => {
      r.validateEvent && (i == null || i.validate("change").catch((v) => bt(v)));
    }), (v, S) => {
      var w;
      return V(), Me(In(v.tag), {
        id: b(s),
        class: Q(b(f).b("group")),
        role: "group",
        "aria-label": b(l) ? void 0 : v.label || "checkbox-group",
        "aria-labelledby": b(l) ? (w = b(i)) == null ? void 0 : w.labelId : void 0
      }, {
        default: Oe(() => [
          Te(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var rv = /* @__PURE__ */ Ue(k$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const N$ = Vn(P$, {
  CheckboxButton: nv,
  CheckboxGroup: rv
});
or(nv);
or(rv);
const ov = nt({
  size: Ti,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), D$ = nt({
  ...ov,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), iv = {
  [It]: (e) => xt(e) || $n(e) || _r(e),
  [mu]: (e) => xt(e) || $n(e) || _r(e)
}, av = (e, n) => {
  const r = X(), i = qe(xh, void 0), s = L(() => !!i), l = L({
    get() {
      return s.value ? i.modelValue : e.modelValue;
    },
    set(v) {
      s.value ? i.changeEvent(v) : n && n(It, v), r.value.checked = e.modelValue === e.label;
    }
  }), c = Sr(L(() => i == null ? void 0 : i.size)), f = Ah(L(() => i == null ? void 0 : i.disabled)), d = X(!1), h = L(() => f.value || s.value && l.value !== e.label ? -1 : 0);
  return {
    radioRef: r,
    isGroup: s,
    radioGroup: i,
    focus: d,
    size: c,
    disabled: f,
    tabIndex: h,
    modelValue: l
  };
}, W$ = ["value", "name", "disabled"], z$ = {
  name: "ElRadio"
}, H$ = /* @__PURE__ */ $e({
  ...z$,
  props: D$,
  emits: iv,
  setup(e, { emit: n }) {
    const r = e, i = Be("radio"), { radioRef: s, radioGroup: l, focus: c, size: f, disabled: d, modelValue: h } = av(r, n);
    function v() {
      De(() => n("change", h.value));
    }
    return (S, w) => {
      var E;
      return V(), oe("label", {
        class: Q([
          b(i).b(),
          b(i).is("disabled", b(d)),
          b(i).is("focus", b(c)),
          b(i).is("bordered", S.border),
          b(i).is("checked", b(h) === S.label),
          b(i).m(b(f))
        ])
      }, [
        fe("span", {
          class: Q([
            b(i).e("input"),
            b(i).is("disabled", b(d)),
            b(i).is("checked", b(h) === S.label)
          ])
        }, [
          Mt(fe("input", {
            ref_key: "radioRef",
            ref: s,
            "onUpdate:modelValue": w[0] || (w[0] = (m) => ro(h) ? h.value = m : null),
            class: Q(b(i).e("original")),
            value: S.label,
            name: S.name || ((E = b(l)) == null ? void 0 : E.name),
            disabled: b(d),
            type: "radio",
            onFocus: w[1] || (w[1] = (m) => c.value = !0),
            onBlur: w[2] || (w[2] = (m) => c.value = !1),
            onChange: v
          }, null, 42, W$), [
            [Hp, b(h)]
          ]),
          fe("span", {
            class: Q(b(i).e("inner"))
          }, null, 2)
        ], 2),
        fe("span", {
          class: Q(b(i).e("label")),
          onKeydown: w[3] || (w[3] = Ut(() => {
          }, ["stop"]))
        }, [
          Te(S.$slots, "default", {}, () => [
            ko(mt(S.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var q$ = /* @__PURE__ */ Ue(H$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const U$ = nt({
  ...ov,
  name: {
    type: String,
    default: ""
  }
}), V$ = ["value", "name", "disabled"], K$ = {
  name: "ElRadioButton"
}, G$ = /* @__PURE__ */ $e({
  ...K$,
  props: U$,
  setup(e) {
    const n = e, r = Be("radio"), { radioRef: i, focus: s, size: l, disabled: c, modelValue: f, radioGroup: d } = av(n), h = L(() => ({
      backgroundColor: (d == null ? void 0 : d.fill) || "",
      borderColor: (d == null ? void 0 : d.fill) || "",
      boxShadow: d != null && d.fill ? `-1px 0 0 0 ${d.fill}` : "",
      color: (d == null ? void 0 : d.textColor) || ""
    }));
    return (v, S) => {
      var w;
      return V(), oe("label", {
        class: Q([
          b(r).b("button"),
          b(r).is("active", b(f) === v.label),
          b(r).is("disabled", b(c)),
          b(r).is("focus", b(s)),
          b(r).bm("button", b(l))
        ])
      }, [
        Mt(fe("input", {
          ref_key: "radioRef",
          ref: i,
          "onUpdate:modelValue": S[0] || (S[0] = (E) => ro(f) ? f.value = E : null),
          class: Q(b(r).be("button", "original-radio")),
          value: v.label,
          type: "radio",
          name: v.name || ((w = b(d)) == null ? void 0 : w.name),
          disabled: b(c),
          onFocus: S[1] || (S[1] = (E) => s.value = !0),
          onBlur: S[2] || (S[2] = (E) => s.value = !1)
        }, null, 42, V$), [
          [Hp, b(f)]
        ]),
        fe("span", {
          class: Q(b(r).be("button", "inner")),
          style: At(b(f) === v.label ? b(h) : {}),
          onKeydown: S[3] || (S[3] = Ut(() => {
          }, ["stop"]))
        }, [
          Te(v.$slots, "default", {}, () => [
            ko(mt(v.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var sv = /* @__PURE__ */ Ue(G$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const j$ = nt({
  id: {
    type: String,
    default: void 0
  },
  size: Ti,
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
}), Y$ = iv, Z$ = ["id", "aria-label", "aria-labelledby"], X$ = {
  name: "ElRadioGroup"
}, J$ = /* @__PURE__ */ $e({
  ...X$,
  props: j$,
  emits: Y$,
  setup(e, { emit: n }) {
    const r = e, i = Be("radio"), s = Ga(), l = X(), { formItem: c } = ja(), { inputId: f, isLabeledByFormItem: d } = Ya(r, {
      formItemContext: c
    }), h = (S) => {
      n(It, S), De(() => n("change", S));
    };
    ut(() => {
      const S = l.value.querySelectorAll("[type=radio]"), w = S[0];
      !Array.from(S).some((E) => E.checked) && w && (w.tabIndex = 0);
    });
    const v = L(() => r.name || s.value);
    return Nt(xh, Ln({
      ...nr(r),
      changeEvent: h,
      name: v
    })), pe(() => r.modelValue, () => {
      r.validateEvent && (c == null || c.validate("change").catch((S) => bt(S)));
    }), (S, w) => (V(), oe("div", {
      id: b(f),
      ref_key: "radioGroupRef",
      ref: l,
      class: Q(b(i).b("group")),
      role: "radiogroup",
      "aria-label": b(d) ? void 0 : S.label || "radio-group",
      "aria-labelledby": b(d) ? b(c).labelId : void 0
    }, [
      Te(S.$slots, "default")
    ], 10, Z$));
  }
});
var lv = /* @__PURE__ */ Ue(J$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const Q$ = Vn(q$, {
  RadioButton: sv,
  RadioGroup: lv
});
or(lv);
or(sv);
const uv = nt({
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
    values: xi,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), e3 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, t3 = {
  name: "ElTag"
}, n3 = /* @__PURE__ */ $e({
  ...t3,
  props: uv,
  emits: e3,
  setup(e, { emit: n }) {
    const r = e, i = Sr(), s = Be("tag"), l = L(() => {
      const { type: d, hit: h, effect: v, closable: S, round: w } = r;
      return [
        s.b(),
        s.is("closable", S),
        s.m(d),
        s.m(i.value),
        s.m(v),
        s.is("hit", h),
        s.is("round", w)
      ];
    }), c = (d) => {
      n("close", d);
    }, f = (d) => {
      n("click", d);
    };
    return (d, h) => d.disableTransitions ? (V(), oe("span", {
      key: 0,
      class: Q(b(l)),
      style: At({ backgroundColor: d.color }),
      onClick: f
    }, [
      fe("span", {
        class: Q(b(s).e("content"))
      }, [
        Te(d.$slots, "default")
      ], 2),
      d.closable ? (V(), Me(b(Hn), {
        key: 0,
        class: Q(b(s).e("close")),
        onClick: Ut(c, ["stop"])
      }, {
        default: Oe(() => [
          lt(b(Qd))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : we("v-if", !0)
    ], 6)) : (V(), Me(ao, {
      key: 1,
      name: `${b(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Oe(() => [
        fe("span", {
          class: Q(b(l)),
          style: At({ backgroundColor: d.color }),
          onClick: f
        }, [
          fe("span", {
            class: Q(b(s).e("content"))
          }, [
            Te(d.$slots, "default")
          ], 2),
          d.closable ? (V(), Me(b(Hn), {
            key: 0,
            class: Q(b(s).e("close")),
            onClick: Ut(c, ["stop"])
          }, {
            default: Oe(() => [
              lt(b(Qd))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : we("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var r3 = /* @__PURE__ */ Ue(n3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const o3 = Vn(r3), i3 = {
  name: "ElCollapseTransition"
}, a3 = /* @__PURE__ */ $e({
  ...i3,
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
    return (i, s) => (V(), Me(ao, Xn({
      name: b(n).b()
    }, uw(r)), {
      default: Oe(() => [
        Te(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Aa = /* @__PURE__ */ Ue(a3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Aa.install = (e) => {
  e.component(Aa.name, Aa);
};
const s3 = Aa, l3 = nt({
  model: Object,
  rules: {
    type: Ge(Object)
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
    values: xi
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
}), u3 = {
  validate: (e, n, r) => (ka(e) || xt(e)) && _r(n) && xt(r)
}, c3 = "ElForm";
function f3() {
  const e = X([]), n = L(() => {
    if (!e.value.length)
      return "0";
    const l = Math.max(...e.value);
    return l ? `${l}px` : "";
  });
  function r(l) {
    const c = e.value.indexOf(l);
    return c === -1 && bt(c3, `unexpected width ${l}`), c;
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
const Ea = (e, n) => {
  const r = Hl(n);
  return r.length > 0 ? e.filter((i) => i.prop && r.includes(i.prop)) : e;
}, d3 = {
  name: "ElForm"
}, p3 = /* @__PURE__ */ $e({
  ...d3,
  props: l3,
  emits: u3,
  setup(e, { expose: n, emit: r }) {
    const i = e, s = "ElForm", l = [], c = Sr(), f = Be("form"), d = L(() => {
      const { labelPosition: M, inline: k } = i;
      return [
        f.b(),
        f.m(c.value || "default"),
        {
          [f.m(`label-${M}`)]: M,
          [f.m("inline")]: k
        }
      ];
    }), h = (M) => {
      l.push(M);
    }, v = (M) => {
      M.prop && l.splice(l.indexOf(M), 1);
    }, S = (M = []) => {
      if (!i.model) {
        bt(s, "model is required for resetFields to work.");
        return;
      }
      Ea(l, M).forEach((k) => k.resetField());
    }, w = (M = []) => {
      Ea(l, M).forEach((k) => k.clearValidate());
    }, E = L(() => {
      const M = !!i.model;
      return M || bt(s, "model is required for validate to work."), M;
    }), m = (M) => {
      if (l.length === 0)
        return [];
      const k = Ea(l, M);
      return k.length ? k : (bt(s, "please pass correct props!"), []);
    }, _ = async (M) => C(void 0, M), O = async (M = []) => {
      if (!E.value)
        return !1;
      const k = m(M);
      if (k.length === 0)
        return !0;
      let R = {};
      for (const A of k)
        try {
          await A.validate("");
        } catch ($) {
          R = {
            ...R,
            ...$
          };
        }
      return Object.keys(R).length === 0 ? !0 : Promise.reject(R);
    }, C = async (M = [], k) => {
      const R = !Co(k);
      try {
        const A = await O(M);
        return A === !0 && (k == null || k(A)), A;
      } catch (A) {
        const $ = A;
        return i.scrollToError && N(Object.keys($)[0]), k == null || k(!1, $), R && Promise.reject($);
      }
    }, N = (M) => {
      var k;
      const R = Ea(l, M)[0];
      R && ((k = R.$el) == null || k.scrollIntoView());
    };
    return pe(() => i.rules, () => {
      i.validateOnRuleChange && _().catch((M) => bt(M));
    }, { deep: !0 }), Nt(Wo, Ln({
      ...nr(i),
      emit: r,
      resetFields: S,
      clearValidate: w,
      validateField: C,
      addField: h,
      removeField: v,
      ...f3()
    })), n({
      validate: _,
      validateField: C,
      resetFields: S,
      clearValidate: w,
      scrollToField: N
    }), (M, k) => (V(), oe("form", {
      class: Q(b(d))
    }, [
      Te(M.$slots, "default")
    ], 2));
  }
});
var h3 = /* @__PURE__ */ Ue(p3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, to.apply(this, arguments);
}
function v3(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Si(e, n);
}
function Jl(e) {
  return Jl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jl(e);
}
function Si(e, n) {
  return Si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, Si(e, n);
}
function g3() {
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
function Ia(e, n, r) {
  return g3() ? Ia = Reflect.construct.bind() : Ia = function(s, l, c) {
    var f = [null];
    f.push.apply(f, l);
    var d = Function.bind.apply(s, f), h = new d();
    return c && Si(h, c.prototype), h;
  }, Ia.apply(null, arguments);
}
function m3(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ql(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ql = function(i) {
    if (i === null || !m3(i))
      return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(i))
        return n.get(i);
      n.set(i, s);
    }
    function s() {
      return Ia(i, arguments, Jl(this).constructor);
    }
    return s.prototype = Object.create(i.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Si(s, i);
  }, Ql(e);
}
var b3 = /%[sdj%]/g, cv = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (cv = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(i) {
    return typeof i == "string";
  }) && console.warn(n, r);
});
function eu(e) {
  if (!e || !e.length)
    return null;
  var n = {};
  return e.forEach(function(r) {
    var i = r.field;
    n[i] = n[i] || [], n[i].push(r);
  }), n;
}
function hn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  var s = 0, l = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var c = e.replace(b3, function(f) {
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
function y3(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ot(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || y3(n) && typeof e == "string" && !e);
}
function _3(e, n, r) {
  var i = [], s = 0, l = e.length;
  function c(f) {
    i.push.apply(i, f || []), s++, s === l && r(i);
  }
  e.forEach(function(f) {
    n(f, c);
  });
}
function $p(e, n, r) {
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
function w3(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var Pp = /* @__PURE__ */ function(e) {
  v3(n, e);
  function n(r, i) {
    var s;
    return s = e.call(this, "Async Validation Error") || this, s.errors = r, s.fields = i, s;
  }
  return n;
}(/* @__PURE__ */ Ql(Error));
function S3(e, n, r, i, s) {
  if (n.first) {
    var l = new Promise(function(w, E) {
      var m = function(C) {
        return i(C), C.length ? E(new Pp(C, eu(C))) : w(s);
      }, _ = w3(e);
      $p(_, r, m);
    });
    return l.catch(function(w) {
      return w;
    }), l;
  }
  var c = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], f = Object.keys(e), d = f.length, h = 0, v = [], S = new Promise(function(w, E) {
    var m = function(O) {
      if (v.push.apply(v, O), h++, h === d)
        return i(v), v.length ? E(new Pp(v, eu(v))) : w(s);
    };
    f.length || (i(v), w(s)), f.forEach(function(_) {
      var O = e[_];
      c.indexOf(_) !== -1 ? $p(O, r, m) : _3(O, r, m);
    });
  });
  return S.catch(function(w) {
    return w;
  }), S;
}
function E3(e) {
  return !!(e && e.message !== void 0);
}
function x3(e, n) {
  for (var r = e, i = 0; i < n.length; i++) {
    if (r == null)
      return r;
    r = r[n[i]];
  }
  return r;
}
function Mp(e, n) {
  return function(r) {
    var i;
    return e.fullFields ? i = x3(n, e.fullFields) : i = n[r.field || e.fullField], E3(r) ? (r.field = r.field || e.fullField, r.fieldValue = i, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: i,
      field: r.field || e.fullField
    };
  };
}
function Rp(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var i = n[r];
        typeof i == "object" && typeof e[r] == "object" ? e[r] = to({}, e[r], i) : e[r] = i;
      }
  }
  return e;
}
var fv = function(n, r, i, s, l, c) {
  n.required && (!i.hasOwnProperty(n.field) || Ot(r, c || n.type)) && s.push(hn(l.messages.required, n.fullField));
}, O3 = function(n, r, i, s, l) {
  (/^\s+$/.test(r) || r === "") && s.push(hn(l.messages.whitespace, n.fullField));
}, xa, T3 = function() {
  if (xa)
    return xa;
  var e = "[a-fA-F\\d:]", n = function(k) {
    return k && k.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), l = new RegExp("(?:^" + r + "$)|(?:^" + s + "$)"), c = new RegExp("^" + r + "$"), f = new RegExp("^" + s + "$"), d = function(k) {
    return k && k.exact ? l : new RegExp("(?:" + n(k) + r + n(k) + ")|(?:" + n(k) + s + n(k) + ")", "g");
  };
  d.v4 = function(M) {
    return M && M.exact ? c : new RegExp("" + n(M) + r + n(M), "g");
  }, d.v6 = function(M) {
    return M && M.exact ? f : new RegExp("" + n(M) + s + n(M), "g");
  };
  var h = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", S = d.v4().source, w = d.v6().source, E = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", _ = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", O = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', N = "(?:" + h + "|www\\.)" + v + "(?:localhost|" + S + "|" + w + "|" + E + m + _ + ")" + O + C;
  return xa = new RegExp("(?:^" + N + "$)", "i"), xa;
}, Lp = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, si = {
  integer: function(n) {
    return si.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return si.number(n) && !si.integer(n);
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
    return typeof n == "object" && !si.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(Lp.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(T3());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(Lp.hex);
  }
}, C3 = function(n, r, i, s, l) {
  if (n.required && r === void 0) {
    fv(n, r, i, s, l);
    return;
  }
  var c = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], f = n.type;
  c.indexOf(f) > -1 ? si[f](r) || s.push(hn(l.messages.types[f], n.fullField, n.type)) : f && typeof r !== n.type && s.push(hn(l.messages.types[f], n.fullField, n.type));
}, A3 = function(n, r, i, s, l) {
  var c = typeof n.len == "number", f = typeof n.min == "number", d = typeof n.max == "number", h = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, v = r, S = null, w = typeof r == "number", E = typeof r == "string", m = Array.isArray(r);
  if (w ? S = "number" : E ? S = "string" : m && (S = "array"), !S)
    return !1;
  m && (v = r.length), E && (v = r.replace(h, "_").length), c ? v !== n.len && s.push(hn(l.messages[S].len, n.fullField, n.len)) : f && !d && v < n.min ? s.push(hn(l.messages[S].min, n.fullField, n.min)) : d && !f && v > n.max ? s.push(hn(l.messages[S].max, n.fullField, n.max)) : f && d && (v < n.min || v > n.max) && s.push(hn(l.messages[S].range, n.fullField, n.min, n.max));
}, Oo = "enum", I3 = function(n, r, i, s, l) {
  n[Oo] = Array.isArray(n[Oo]) ? n[Oo] : [], n[Oo].indexOf(r) === -1 && s.push(hn(l.messages[Oo], n.fullField, n[Oo].join(", ")));
}, $3 = function(n, r, i, s, l) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || s.push(hn(l.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var c = new RegExp(n.pattern);
      c.test(r) || s.push(hn(l.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, Fe = {
  required: fv,
  whitespace: O3,
  type: C3,
  range: A3,
  enum: I3,
  pattern: $3
}, P3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r, "string") && !n.required)
      return i();
    Fe.required(n, r, s, c, l, "string"), Ot(r, "string") || (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l), Fe.pattern(n, r, s, c, l), n.whitespace === !0 && Fe.whitespace(n, r, s, c, l));
  }
  i(c);
}, M3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, R3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (r === "" && (r = void 0), Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, L3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, F3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), Ot(r) || Fe.type(n, r, s, c, l);
  }
  i(c);
}, B3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, k3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, N3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (r == null && !n.required)
      return i();
    Fe.required(n, r, s, c, l, "array"), r != null && (Fe.type(n, r, s, c, l), Fe.range(n, r, s, c, l));
  }
  i(c);
}, D3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe.type(n, r, s, c, l);
  }
  i(c);
}, W3 = "enum", z3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l), r !== void 0 && Fe[W3](n, r, s, c, l);
  }
  i(c);
}, H3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r, "string") && !n.required)
      return i();
    Fe.required(n, r, s, c, l), Ot(r, "string") || Fe.pattern(n, r, s, c, l);
  }
  i(c);
}, q3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r, "date") && !n.required)
      return i();
    if (Fe.required(n, r, s, c, l), !Ot(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Fe.type(n, d, s, c, l), d && Fe.range(n, d.getTime(), s, c, l);
    }
  }
  i(c);
}, U3 = function(n, r, i, s, l) {
  var c = [], f = Array.isArray(r) ? "array" : typeof r;
  Fe.required(n, r, s, c, l, f), i(c);
}, Ol = function(n, r, i, s, l) {
  var c = n.type, f = [], d = n.required || !n.required && s.hasOwnProperty(n.field);
  if (d) {
    if (Ot(r, c) && !n.required)
      return i();
    Fe.required(n, r, s, f, l, c), Ot(r, c) || Fe.type(n, r, s, f, l);
  }
  i(f);
}, V3 = function(n, r, i, s, l) {
  var c = [], f = n.required || !n.required && s.hasOwnProperty(n.field);
  if (f) {
    if (Ot(r) && !n.required)
      return i();
    Fe.required(n, r, s, c, l);
  }
  i(c);
}, di = {
  string: P3,
  method: M3,
  number: R3,
  boolean: L3,
  regexp: F3,
  integer: B3,
  float: k3,
  array: N3,
  object: D3,
  enum: z3,
  pattern: H3,
  date: q3,
  url: Ol,
  hex: Ol,
  email: Ol,
  required: U3,
  any: V3
};
function tu() {
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
var nu = tu(), Ii = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = nu, this.define(r);
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
    return i && (this._messages = Rp(tu(), i)), this._messages;
  }, n.validate = function(i, s, l) {
    var c = this;
    s === void 0 && (s = {}), l === void 0 && (l = function() {
    });
    var f = i, d = s, h = l;
    if (typeof d == "function" && (h = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return h && h(null, f), Promise.resolve(f);
    function v(_) {
      var O = [], C = {};
      function N(k) {
        if (Array.isArray(k)) {
          var R;
          O = (R = O).concat.apply(R, k);
        } else
          O.push(k);
      }
      for (var M = 0; M < _.length; M++)
        N(_[M]);
      O.length ? (C = eu(O), h(O, C)) : h(null, f);
    }
    if (d.messages) {
      var S = this.messages();
      S === nu && (S = tu()), Rp(S, d.messages), d.messages = S;
    } else
      d.messages = this.messages();
    var w = {}, E = d.keys || Object.keys(this.rules);
    E.forEach(function(_) {
      var O = c.rules[_], C = f[_];
      O.forEach(function(N) {
        var M = N;
        typeof M.transform == "function" && (f === i && (f = to({}, f)), C = f[_] = M.transform(C)), typeof M == "function" ? M = {
          validator: M
        } : M = to({}, M), M.validator = c.getValidationMethod(M), M.validator && (M.field = _, M.fullField = M.fullField || _, M.type = c.getType(M), w[_] = w[_] || [], w[_].push({
          rule: M,
          value: C,
          source: f,
          field: _
        }));
      });
    });
    var m = {};
    return S3(w, d, function(_, O) {
      var C = _.rule, N = (C.type === "object" || C.type === "array") && (typeof C.fields == "object" || typeof C.defaultField == "object");
      N = N && (C.required || !C.required && _.value), C.field = _.field;
      function M(A, $) {
        return to({}, $, {
          fullField: C.fullField + "." + A,
          fullFields: C.fullFields ? [].concat(C.fullFields, [A]) : [A]
        });
      }
      function k(A) {
        A === void 0 && (A = []);
        var $ = Array.isArray(A) ? A : [A];
        !d.suppressWarning && $.length && e.warning("async-validator:", $), $.length && C.message !== void 0 && ($ = [].concat(C.message));
        var z = $.map(Mp(C, f));
        if (d.first && z.length)
          return m[C.field] = 1, O(z);
        if (!N)
          O(z);
        else {
          if (C.required && !_.value)
            return C.message !== void 0 ? z = [].concat(C.message).map(Mp(C, f)) : d.error && (z = [d.error(C, hn(d.messages.required, C.field))]), O(z);
          var Y = {};
          C.defaultField && Object.keys(_.value).map(function(G) {
            Y[G] = C.defaultField;
          }), Y = to({}, Y, _.rule.fields);
          var te = {};
          Object.keys(Y).forEach(function(G) {
            var U = Y[G], Z = Array.isArray(U) ? U : [U];
            te[G] = Z.map(M.bind(null, G));
          });
          var D = new e(te);
          D.messages(d.messages), _.rule.options && (_.rule.options.messages = d.messages, _.rule.options.error = d.error), D.validate(_.value, _.rule.options || d, function(G) {
            var U = [];
            z && z.length && U.push.apply(U, z), G && G.length && U.push.apply(U, G), O(U.length ? U : null);
          });
        }
      }
      var R;
      if (C.asyncValidator)
        R = C.asyncValidator(C, _.value, k, _.source, d);
      else if (C.validator) {
        try {
          R = C.validator(C, _.value, k, _.source, d);
        } catch (A) {
          console.error == null || console.error(A), d.suppressValidatorError || setTimeout(function() {
            throw A;
          }, 0), k(A.message);
        }
        R === !0 ? k() : R === !1 ? k(typeof C.message == "function" ? C.message(C.fullField || C.field) : C.message || (C.fullField || C.field) + " fails") : R instanceof Array ? k(R) : R instanceof Error && k(R.message);
      }
      R && R.then && R.then(function() {
        return k();
      }, function(A) {
        return k(A);
      });
    }, function(_) {
      v(_);
    }, f);
  }, n.getType = function(i) {
    if (i.type === void 0 && i.pattern instanceof RegExp && (i.type = "pattern"), typeof i.validator != "function" && i.type && !di.hasOwnProperty(i.type))
      throw new Error(hn("Unknown rule type %s", i.type));
    return i.type || "string";
  }, n.getValidationMethod = function(i) {
    if (typeof i.validator == "function")
      return i.validator;
    var s = Object.keys(i), l = s.indexOf("message");
    return l !== -1 && s.splice(l, 1), s.length === 1 && s[0] === "required" ? di.required : di[this.getType(i)] || void 0;
  }, e;
}();
Ii.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  di[n] = r;
};
Ii.warning = cv;
Ii.messages = nu;
Ii.validators = di;
const K3 = [
  "",
  "error",
  "validating",
  "success"
], G3 = nt({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: Ge([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: Ge([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: K3
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
    values: xi
  }
}), Fp = "ElLabelWrap";
var j3 = $e({
  name: Fp,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: n
  }) {
    const r = qe(Wo, void 0);
    qe(io) || Po(Fp, "usage: <el-form-item><label-wrap /></el-form-item>");
    const s = Be("form"), l = X(), c = X(0), f = () => {
      var v;
      if ((v = l.value) != null && v.firstElementChild) {
        const S = window.getComputedStyle(l.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(S));
      } else
        return 0;
    }, d = (v = "update") => {
      De(() => {
        n.default && e.isAutoWidth && (v === "update" ? c.value = f() : v === "remove" && (r == null || r.deregisterLabelWidth(c.value)));
      });
    }, h = () => d("update");
    return ut(() => {
      h();
    }), vn(() => {
      d("remove");
    }), ou(() => h()), pe(c, (v, S) => {
      e.updateAll && (r == null || r.registerLabelWidth(v, S));
    }), Do(L(() => {
      var v, S;
      return (S = (v = l.value) == null ? void 0 : v.firstElementChild) != null ? S : null;
    }), h), () => {
      var v, S;
      if (!n)
        return null;
      const {
        isAutoWidth: w
      } = e;
      if (w) {
        const E = r == null ? void 0 : r.autoLabelWidth, m = {};
        if (E && E !== "auto") {
          const _ = Math.max(0, Number.parseInt(E, 10) - c.value), O = r.labelPosition === "left" ? "marginRight" : "marginLeft";
          _ && (m[O] = `${_}px`);
        }
        return lt("div", {
          ref: l,
          class: [s.be("item", "label-wrap")],
          style: m
        }, [(v = n.default) == null ? void 0 : v.call(n)]);
      } else
        return lt(Kt, {
          ref: l
        }, [(S = n.default) == null ? void 0 : S.call(n)]);
    };
  }
});
const Y3 = ["role", "aria-labelledby"], Z3 = {
  name: "ElFormItem"
}, X3 = /* @__PURE__ */ $e({
  ...Z3,
  props: G3,
  setup(e, { expose: n }) {
    const r = e, i = Ei(), s = qe(Wo, void 0), l = qe(io, void 0), c = Sr(void 0, { formItem: !1 }), f = Be("form-item"), d = Ga().value, h = X([]), v = X(""), S = MO(v, 100), w = X(""), E = X();
    let m, _ = !1;
    const O = L(() => {
      if ((s == null ? void 0 : s.labelPosition) === "top")
        return {};
      const se = yi(r.labelWidth || (s == null ? void 0 : s.labelWidth) || "");
      return se ? { width: se } : {};
    }), C = L(() => {
      if ((s == null ? void 0 : s.labelPosition) === "top" || (s == null ? void 0 : s.inline))
        return {};
      if (!r.label && !r.labelWidth && Y)
        return {};
      const se = yi(r.labelWidth || (s == null ? void 0 : s.labelWidth) || "");
      return !r.label && !i.label ? { marginLeft: se } : {};
    }), N = L(() => [
      f.b(),
      f.m(c.value),
      f.is("error", v.value === "error"),
      f.is("validating", v.value === "validating"),
      f.is("success", v.value === "success"),
      f.is("required", Z.value || r.required),
      f.is("no-asterisk", s == null ? void 0 : s.hideRequiredAsterisk),
      (s == null ? void 0 : s.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [f.m("feedback")]: s == null ? void 0 : s.statusIcon }
    ]), M = L(() => _r(r.inlineMessage) ? r.inlineMessage : (s == null ? void 0 : s.inlineMessage) || !1), k = L(() => [
      f.e("error"),
      { [f.em("error", "inline")]: M.value }
    ]), R = L(() => r.prop ? xt(r.prop) ? r.prop : r.prop.join(".") : ""), A = L(() => !!(r.label || i.label)), $ = L(() => r.for || h.value.length === 1 ? h.value[0] : void 0), z = L(() => !$.value && A.value), Y = !!l, te = L(() => {
      const se = s == null ? void 0 : s.model;
      if (!(!se || !r.prop))
        return ml(se, r.prop).value;
    }), D = L(() => {
      const se = r.rules ? Hl(r.rules) : [], be = s == null ? void 0 : s.rules;
      if (be && r.prop) {
        const Ne = ml(be, r.prop).value;
        Ne && se.push(...Hl(Ne));
      }
      return r.required !== void 0 && se.push({ required: !!r.required }), se;
    }), G = L(() => D.value.length > 0), U = (se) => D.value.filter((Ne) => !Ne.trigger || !se ? !0 : Array.isArray(Ne.trigger) ? Ne.trigger.includes(se) : Ne.trigger === se).map(({ trigger: Ne, ...Ze }) => Ze), Z = L(() => D.value.some((se) => se.required === !0)), ne = L(() => {
      var se;
      return S.value === "error" && r.showMessage && ((se = s == null ? void 0 : s.showMessage) != null ? se : !0);
    }), ae = L(() => `${r.label || ""}${(s == null ? void 0 : s.labelSuffix) || ""}`), re = (se) => {
      v.value = se;
    }, he = (se) => {
      var be, Ne;
      const { errors: Ze, fields: _t } = se;
      (!Ze || !_t) && console.error(se), re("error"), w.value = Ze ? (Ne = (be = Ze == null ? void 0 : Ze[0]) == null ? void 0 : be.message) != null ? Ne : `${r.prop} is required` : "", s == null || s.emit("validate", r.prop, !1, w.value);
    }, ce = () => {
      re("success"), s == null || s.emit("validate", r.prop, !0, "");
    }, ye = async (se) => {
      const be = R.value;
      return new Ii({
        [be]: se
      }).validate({ [be]: te.value }, { firstFields: !0 }).then(() => (ce(), !0)).catch((Ze) => (he(Ze), Promise.reject(Ze)));
    }, _e = async (se, be) => {
      if (_)
        return !1;
      const Ne = Co(be);
      if (!G.value)
        return be == null || be(!1), !1;
      const Ze = U(se);
      return Ze.length === 0 ? (be == null || be(!0), !0) : (re("validating"), ye(Ze).then(() => (be == null || be(!0), !0)).catch((_t) => {
        const { fields: ft } = _t;
        return be == null || be(!1, ft), Ne ? !1 : Promise.reject(ft);
      }));
    }, at = () => {
      re(""), w.value = "", _ = !1;
    }, Qe = async () => {
      const se = s == null ? void 0 : s.model;
      if (!se || !r.prop)
        return;
      const be = ml(se, r.prop);
      _ = !0, be.value = Dd(m), await De(), at(), _ = !1;
    }, ct = (se) => {
      h.value.includes(se) || h.value.push(se);
    }, We = (se) => {
      h.value = h.value.filter((be) => be !== se);
    };
    pe(() => r.error, (se) => {
      w.value = se || "", re(se ? "error" : "");
    }, { immediate: !0 }), pe(() => r.validateStatus, (se) => re(se || ""));
    const rt = Ln({
      ...nr(r),
      $el: E,
      size: c,
      validateState: v,
      labelId: d,
      inputIds: h,
      isGroup: z,
      addInputId: ct,
      removeInputId: We,
      resetField: Qe,
      clearValidate: at,
      validate: _e
    });
    return Nt(io, rt), ut(() => {
      r.prop && (s == null || s.addField(rt), m = Dd(te.value));
    }), vn(() => {
      s == null || s.removeField(rt);
    }), n({
      size: c,
      validateMessage: w,
      validateState: v,
      validate: _e,
      clearValidate: at,
      resetField: Qe
    }), (se, be) => {
      var Ne;
      return V(), oe("div", {
        ref_key: "formItemRef",
        ref: E,
        class: Q(b(N)),
        role: b(z) ? "group" : void 0,
        "aria-labelledby": b(z) ? b(d) : void 0
      }, [
        lt(b(j3), {
          "is-auto-width": b(O).width === "auto",
          "update-all": ((Ne = b(s)) == null ? void 0 : Ne.labelWidth) === "auto"
        }, {
          default: Oe(() => [
            b(A) ? (V(), Me(In(b($) ? "label" : "div"), {
              key: 0,
              id: b(d),
              for: b($),
              class: Q(b(f).e("label")),
              style: At(b(O))
            }, {
              default: Oe(() => [
                Te(se.$slots, "label", { label: b(ae) }, () => [
                  ko(mt(b(ae)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : we("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        fe("div", {
          class: Q(b(f).e("content")),
          style: At(b(C))
        }, [
          Te(se.$slots, "default"),
          lt(ao, {
            name: `${b(f).namespace.value}-zoom-in-top`
          }, {
            default: Oe(() => [
              b(ne) ? Te(se.$slots, "error", {
                key: 0,
                error: w.value
              }, () => [
                fe("div", {
                  class: Q(b(k))
                }, mt(w.value), 3)
              ]) : we("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Y3);
    };
  }
});
var dv = /* @__PURE__ */ Ue(X3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const J3 = Vn(h3, {
  FormItem: dv
}), Q3 = or(dv);
class e4 {
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
          case Vt.down: {
            this.gotoSubIndex(this.subIndex + 1), s = !0;
            break;
          }
          case Vt.up: {
            this.gotoSubIndex(this.subIndex - 1), s = !0;
            break;
          }
          case Vt.tab: {
            Ta(n, "mouseleave");
            break;
          }
          case Vt.enter:
          case Vt.space: {
            s = !0, i.currentTarget.click();
            break;
          }
        }
        return s && (i.preventDefault(), i.stopPropagation()), !1;
      });
    });
  }
}
class t4 {
  constructor(n, r) {
    this.domNode = n, this.submenu = null, this.submenu = null, this.init(r);
  }
  init(n) {
    this.domNode.setAttribute("tabindex", "0");
    const r = this.domNode.querySelector(`.${n}-menu`);
    r && (this.submenu = new e4(this, r)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (n) => {
      let r = !1;
      switch (n.code) {
        case Vt.down: {
          Ta(n.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), r = !0;
          break;
        }
        case Vt.up: {
          Ta(n.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), r = !0;
          break;
        }
        case Vt.tab: {
          Ta(n.currentTarget, "mouseleave");
          break;
        }
        case Vt.enter:
        case Vt.space: {
          r = !0, n.currentTarget.click();
          break;
        }
      }
      r && n.preventDefault();
    });
  }
}
class n4 {
  constructor(n, r) {
    this.domNode = n, this.init(r);
  }
  init(n) {
    const r = this.domNode.childNodes;
    Array.from(r).forEach((i) => {
      i.nodeType === 1 && new t4(i, n);
    });
  }
}
const r4 = $e({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = Be("menu");
    return {
      listeners: {
        onBeforeEnter: (r) => r.style.opacity = "0.2",
        onEnter(r, i) {
          ya(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "1", i();
        },
        onAfterEnter(r) {
          bl(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "";
        },
        onBeforeLeave(r) {
          r.dataset || (r.dataset = {}), jO(r, e.m("collapse")) ? (bl(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), ya(r, e.m("collapse"))) : (ya(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), bl(r, e.m("collapse"))), r.style.width = `${r.scrollWidth}px`, r.style.overflow = "hidden";
        },
        onLeave(r) {
          ya(r, "horizontal-collapse-transition"), r.style.width = `${r.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function o4(e, n, r, i, s, l) {
  return V(), Me(ao, Xn({ mode: "out-in" }, e.listeners), {
    default: Oe(() => [
      Te(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var i4 = /* @__PURE__ */ Ue(r4, [["render", o4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function pv(e, n) {
  const r = L(() => {
    let s = e.parent;
    const l = [n.value];
    for (; s.type.name !== "ElMenu"; )
      s.props.index && l.unshift(s.props.index), s = s.parent;
    return l;
  });
  return {
    parentMenu: L(() => {
      let s = e.parent;
      for (; s && !["ElMenu", "ElSubMenu"].includes(s.type.name); )
        s = s.parent;
      return s;
    }),
    indexPath: r
  };
}
function a4(e) {
  return L(() => {
    const r = e.backgroundColor;
    return r ? new g$(r).shade(20).toString() : "";
  });
}
const hv = (e, n) => {
  const r = Be("menu");
  return L(() => r.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": a4(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${n}`
  }));
}, s4 = nt({
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
    type: Ao
  },
  expandOpenIcon: {
    type: Ao
  },
  collapseCloseIcon: {
    type: Ao
  },
  collapseOpenIcon: {
    type: Ao
  }
}), Tl = "ElSubMenu";
var Mu = $e({
  name: Tl,
  props: s4,
  setup(e, { slots: n, expose: r }) {
    const i = rn(), { indexPath: s, parentMenu: l } = pv(i, L(() => e.index)), c = Be("menu"), f = Be("sub-menu"), d = qe("rootMenu");
    d || Po(Tl, "can not inject root menu");
    const h = qe(`subMenu:${l.value.uid}`);
    h || Po(Tl, "can not inject sub menu");
    const v = X({}), S = X({});
    let w;
    const E = X(!1), m = X(), _ = X(null), O = L(() => D.value === "horizontal" && N.value ? "bottom-start" : "right-start"), C = L(() => D.value === "horizontal" && N.value || D.value === "vertical" && !d.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? A.value ? e.expandOpenIcon : e.expandCloseIcon : tT : e.collapseCloseIcon && e.collapseOpenIcon ? A.value ? e.collapseOpenIcon : e.collapseCloseIcon : sT), N = L(() => h.level === 0), M = L(() => e.popperAppendToBody === void 0 ? N.value : Boolean(e.popperAppendToBody)), k = L(() => d.props.collapse ? `${c.namespace.value}-zoom-in-left` : `${c.namespace.value}-zoom-in-top`), R = L(() => D.value === "horizontal" && N.value ? [
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
    ]), A = L(() => d.openedMenus.includes(e.index)), $ = L(() => {
      let ce = !1;
      return Object.values(v.value).forEach((ye) => {
        ye.active && (ce = !0);
      }), Object.values(S.value).forEach((ye) => {
        ye.active && (ce = !0);
      }), ce;
    }), z = L(() => d.props.backgroundColor || ""), Y = L(() => d.props.activeTextColor || ""), te = L(() => d.props.textColor || ""), D = L(() => d.props.mode), G = Ln({
      index: e.index,
      indexPath: s,
      active: $
    }), U = L(() => D.value !== "horizontal" ? {
      color: te.value
    } : {
      borderBottomColor: $.value ? d.props.activeTextColor ? Y.value : "" : "transparent",
      color: $.value ? Y.value : te.value
    }), Z = () => {
      var ce, ye, _e;
      return (_e = (ye = (ce = _.value) == null ? void 0 : ce.popperRef) == null ? void 0 : ye.popperInstanceRef) == null ? void 0 : _e.destroy();
    }, ne = (ce) => {
      ce || Z();
    }, ae = () => {
      d.props.menuTrigger === "hover" && d.props.mode === "horizontal" || d.props.collapse && d.props.mode === "vertical" || e.disabled || d.handleSubMenuClick({
        index: e.index,
        indexPath: s.value,
        active: $.value
      });
    }, re = (ce, ye = e.showTimeout) => {
      var _e;
      ce.type !== "focus" && (d.props.menuTrigger === "click" && d.props.mode === "horizontal" || !d.props.collapse && d.props.mode === "vertical" || e.disabled || (h.mouseInChild.value = !0, w == null || w(), { stop: w } = Gd(() => {
        d.openMenu(e.index, s.value);
      }, ye), M.value && ((_e = l.value.vnode.el) == null || _e.dispatchEvent(new MouseEvent("mouseenter")))));
    }, he = (ce = !1) => {
      var ye, _e;
      d.props.menuTrigger === "click" && d.props.mode === "horizontal" || !d.props.collapse && d.props.mode === "vertical" || (w == null || w(), h.mouseInChild.value = !1, { stop: w } = Gd(() => !E.value && d.closeMenu(e.index, s.value), e.hideTimeout), M.value && ce && ((ye = i.parent) == null ? void 0 : ye.type.name) === "ElSubMenu" && ((_e = h.handleMouseleave) == null || _e.call(h, !0)));
    };
    pe(() => d.props.collapse, (ce) => ne(Boolean(ce)));
    {
      const ce = (_e) => {
        S.value[_e.index] = _e;
      }, ye = (_e) => {
        delete S.value[_e.index];
      };
      Nt(`subMenu:${i.uid}`, {
        addSubMenu: ce,
        removeSubMenu: ye,
        handleMouseleave: he,
        mouseInChild: E,
        level: h.level + 1
      });
    }
    return r({
      opened: A
    }), ut(() => {
      d.addSubMenu(G), h.addSubMenu(G);
    }), vn(() => {
      h.removeSubMenu(G), d.removeSubMenu(G);
    }), () => {
      var ce;
      const ye = [
        (ce = n.title) == null ? void 0 : ce.call(n),
        gt(Hn, {
          class: f.e("icon-arrow"),
          style: {
            transform: A.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && d.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => xt(C.value) ? gt(i.appContext.components[C.value]) : gt(C.value)
        })
      ], _e = hv(d.props, h.level + 1), at = d.isMenuPopup ? gt(Pu, {
        ref: _,
        visible: A.value,
        effect: "light",
        pure: !0,
        offset: e.popperOffset,
        showArrow: !1,
        persistent: !0,
        popperClass: e.popperClass,
        placement: O.value,
        teleported: M.value,
        fallbackPlacements: R.value,
        transition: k.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var Qe;
          return gt("div", {
            class: [
              c.m(D.value),
              c.m("popup-container"),
              e.popperClass
            ],
            onMouseenter: (ct) => re(ct, 100),
            onMouseleave: () => he(!0),
            onFocus: (ct) => re(ct, 100)
          }, [
            gt("ul", {
              class: [
                c.b(),
                c.m("popup"),
                c.m(`popup-${O.value}`)
              ],
              style: _e.value
            }, [(Qe = n.default) == null ? void 0 : Qe.call(n)])
          ]);
        },
        default: () => gt("div", {
          class: f.e("title"),
          style: [
            U.value,
            { backgroundColor: z.value }
          ],
          onClick: ae
        }, ye)
      }) : gt(Kt, {}, [
        gt("div", {
          class: f.e("title"),
          style: [
            U.value,
            { backgroundColor: z.value }
          ],
          ref: m,
          onClick: ae
        }, ye),
        gt(s3, {}, {
          default: () => {
            var Qe;
            return Mt(gt("ul", {
              role: "menu",
              class: [c.b(), c.m("inline")],
              style: _e.value
            }, [(Qe = n.default) == null ? void 0 : Qe.call(n)]), [[Wr, A.value]]);
          }
        })
      ]);
      return gt("li", {
        class: [
          f.b(),
          f.is("active", $.value),
          f.is("opened", A.value),
          f.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: A.value,
        onMouseenter: re,
        onMouseleave: () => he(!0),
        onFocus: re
      }, [at]);
    };
  }
});
const l4 = nt({
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
    type: Ge(Array),
    default: () => Eh([])
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
}), Cl = (e) => Array.isArray(e) && e.every((n) => xt(n)), u4 = {
  close: (e, n) => xt(e) && Cl(n),
  open: (e, n) => xt(e) && Cl(n),
  select: (e, n, r, i) => xt(e) && Cl(n) && wr(r) && (i === void 0 || i instanceof Promise)
};
var c4 = $e({
  name: "ElMenu",
  props: l4,
  emits: u4,
  setup(e, { emit: n, slots: r, expose: i }) {
    const s = rn(), l = s.appContext.config.globalProperties.$router, c = X(), f = Be("menu"), d = Be("sub-menu"), h = X(-1), v = X(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), S = X(e.defaultActive), w = X({}), E = X({}), m = L(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), _ = () => {
      const D = S.value && w.value[S.value];
      if (!D || e.mode === "horizontal" || e.collapse)
        return;
      D.indexPath.forEach((U) => {
        const Z = E.value[U];
        Z && O(U, Z.indexPath);
      });
    }, O = (D, G) => {
      v.value.includes(D) || (e.uniqueOpened && (v.value = v.value.filter((U) => G.includes(U))), v.value.push(D), n("open", D, G));
    }, C = (D, G) => {
      const U = v.value.indexOf(D);
      U !== -1 && v.value.splice(U, 1), n("close", D, G);
    }, N = ({
      index: D,
      indexPath: G
    }) => {
      v.value.includes(D) ? C(D, G) : O(D, G);
    }, M = (D) => {
      (e.mode === "horizontal" || e.collapse) && (v.value = []);
      const { index: G, indexPath: U } = D;
      if (!(G === void 0 || U === void 0))
        if (e.router && l) {
          const Z = D.route || G, ne = l.push(Z).then((ae) => (ae || (S.value = G), ae));
          n("select", G, U, { index: G, indexPath: U, route: Z }, ne);
        } else
          S.value = G, n("select", G, U, { index: G, indexPath: U });
    }, k = (D) => {
      const G = w.value, U = G[D] || S.value && G[S.value] || G[e.defaultActive];
      U ? S.value = U.index : S.value = D;
    }, R = () => {
      var D, G;
      if (!c.value)
        return -1;
      const U = Array.from((G = (D = c.value) == null ? void 0 : D.childNodes) != null ? G : []).filter((ye) => ye.nodeName !== "#text" || ye.nodeValue), Z = 64, ne = Number.parseInt(getComputedStyle(c.value).paddingLeft, 10), ae = Number.parseInt(getComputedStyle(c.value).paddingRight, 10), re = c.value.clientWidth - ne - ae;
      let he = 0, ce = 0;
      return U.forEach((ye, _e) => {
        he += ye.offsetWidth || 0, he <= re - Z && (ce = _e + 1);
      }), ce === U.length ? -1 : ce;
    }, A = (D, G = 33.34) => {
      let U;
      return () => {
        U && clearTimeout(U), U = setTimeout(() => {
          D();
        }, G);
      };
    };
    let $ = !0;
    const z = () => {
      const D = () => {
        h.value = -1, De(() => {
          h.value = R();
        });
      };
      $ ? D() : A(D)(), $ = !1;
    };
    pe(() => e.defaultActive, (D) => {
      w.value[D] || (S.value = ""), k(D);
    }), pe(() => e.collapse, (D) => {
      D && (v.value = []);
    }), pe(w.value, _);
    let Y;
    cw(() => {
      e.mode === "horizontal" && e.ellipsis ? Y = Do(c, z).stop : Y == null || Y();
    });
    {
      const D = (ne) => {
        E.value[ne.index] = ne;
      }, G = (ne) => {
        delete E.value[ne.index];
      };
      Nt("rootMenu", Ln({
        props: e,
        openedMenus: v,
        items: w,
        subMenus: E,
        activeIndex: S,
        isMenuPopup: m,
        addMenuItem: (ne) => {
          w.value[ne.index] = ne;
        },
        removeMenuItem: (ne) => {
          delete w.value[ne.index];
        },
        addSubMenu: D,
        removeSubMenu: G,
        openMenu: O,
        closeMenu: C,
        handleMenuItemClick: M,
        handleSubMenuClick: N
      })), Nt(`subMenu:${s.uid}`, {
        addSubMenu: D,
        removeSubMenu: G,
        mouseInChild: X(!1),
        level: 0
      });
    }
    ut(() => {
      e.mode === "horizontal" && new n4(s.vnode.el, f.namespace.value);
    }), i({
      open: (G) => {
        const { indexPath: U } = E.value[G];
        U.forEach((Z) => O(Z, U));
      },
      close: C,
      handleResize: z
    });
    const te = (D) => {
      const G = Array.isArray(D) ? D : [D], U = [];
      return G.forEach((Z) => {
        Array.isArray(Z.children) ? U.push(...te(Z.children)) : U.push(Z);
      }), U;
    };
    return () => {
      var D, G;
      let U = (G = (D = r.default) == null ? void 0 : D.call(r)) != null ? G : [];
      const Z = [];
      if (e.mode === "horizontal" && c.value) {
        const re = te(U), he = h.value === -1 ? re : re.slice(0, h.value), ce = h.value === -1 ? [] : re.slice(h.value);
        (ce == null ? void 0 : ce.length) && e.ellipsis && (U = he, Z.push(gt(Mu, {
          index: "sub-menu-more",
          class: d.e("hide-arrow")
        }, {
          title: () => gt(Hn, {
            class: d.e("icon-more")
          }, { default: () => gt(ZT) }),
          default: () => ce
        })));
      }
      const ne = hv(e, 0), ae = gt("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: c,
        style: ne.value,
        class: {
          [f.b()]: !0,
          [f.m(e.mode)]: !0,
          [f.m("collapse")]: e.collapse
        }
      }, [...U, ...Z]);
      return e.collapseTransition && e.mode === "vertical" ? gt(i4, () => ae) : ae;
    };
  }
});
const f4 = nt({
  index: {
    type: Ge([String, null]),
    default: null
  },
  route: {
    type: Ge([String, Object])
  },
  disabled: Boolean
}), d4 = {
  click: (e) => xt(e.index) && Array.isArray(e.indexPath)
}, Al = "ElMenuItem", p4 = $e({
  name: Al,
  components: {
    ElTooltip: Pu
  },
  props: f4,
  emits: d4,
  setup(e, { emit: n }) {
    const r = rn(), i = qe("rootMenu"), s = Be("menu"), l = Be("menu-item");
    i || Po(Al, "can not inject root menu");
    const { parentMenu: c, indexPath: f } = pv(r, qn(e, "index")), d = qe(`subMenu:${c.value.uid}`);
    d || Po(Al, "can not inject sub menu");
    const h = L(() => e.index === i.activeIndex), v = Ln({
      index: e.index,
      indexPath: f,
      active: h
    }), S = () => {
      e.disabled || (i.handleMenuItemClick({
        index: e.index,
        indexPath: f.value,
        route: e.route
      }), n("click", v));
    };
    return ut(() => {
      d.addSubMenu(v), i.addMenuItem(v);
    }), vn(() => {
      d.removeSubMenu(v), i.removeMenuItem(v);
    }), {
      Effect: sA,
      parentMenu: c,
      rootMenu: i,
      active: h,
      nsMenu: s,
      nsMenuItem: l,
      handleClick: S
    };
  }
});
function h4(e, n, r, i, s, l) {
  const c = qt("el-tooltip");
  return V(), oe("li", {
    class: Q([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: n[0] || (n[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (V(), Me(c, {
      key: 0,
      effect: e.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: Oe(() => [
        Te(e.$slots, "title")
      ]),
      default: Oe(() => [
        fe("div", {
          class: Q(e.nsMenu.be("tooltip", "trigger"))
        }, [
          Te(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (V(), oe(Kt, { key: 1 }, [
      Te(e.$slots, "default"),
      Te(e.$slots, "title")
    ], 64))
  ], 2);
}
var vv = /* @__PURE__ */ Ue(p4, [["render", h4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const v4 = {
  title: String
}, g4 = "ElMenuItemGroup", m4 = $e({
  name: g4,
  props: v4,
  setup() {
    return {
      ns: Be("menu-item-group")
    };
  }
});
function b4(e, n, r, i, s, l) {
  return V(), oe("li", {
    class: Q(e.ns.b())
  }, [
    fe("div", {
      class: Q(e.ns.e("title"))
    }, [
      e.$slots.title ? Te(e.$slots, "title", { key: 1 }) : (V(), oe(Kt, { key: 0 }, [
        ko(mt(e.title), 1)
      ], 64))
    ], 2),
    fe("ul", null, [
      Te(e.$slots, "default")
    ])
  ], 2);
}
var gv = /* @__PURE__ */ Ue(m4, [["render", b4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const y4 = Vn(c4, {
  MenuItem: vv,
  MenuItemGroup: gv,
  SubMenu: Mu
}), Bp = or(vv), _4 = or(gv), w4 = or(Mu), mv = "ElSelectGroup", Xa = "ElSelect";
function S4(e, n) {
  const r = qe(Xa), i = qe(mv, { disabled: !1 }), s = L(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = L(() => r.props.multiple ? S(r.props.modelValue, e.value) : w(e.value, r.props.modelValue)), c = L(() => {
    if (r.props.multiple) {
      const _ = r.props.modelValue || [];
      return !l.value && _.length >= r.props.multipleLimit && r.props.multipleLimit > 0;
    } else
      return !1;
  }), f = L(() => e.label || (s.value ? "" : e.value)), d = L(() => e.value || e.label || ""), h = L(() => e.disabled || n.groupDisabled || c.value), v = rn(), S = (_ = [], O) => {
    if (s.value) {
      const C = r.props.valueKey;
      return _ && _.some((N) => pi(pn(N, C)) === pn(O, C));
    } else
      return _ && _.includes(O);
  }, w = (_, O) => {
    if (s.value) {
      const { valueKey: C } = r.props;
      return pn(_, C) === pn(O, C);
    } else
      return _ === O;
  }, E = () => {
    !e.disabled && !i.disabled && (r.hoverIndex = r.optionsArray.indexOf(v.proxy));
  };
  pe(() => f.value, () => {
    !e.created && !r.props.remote && r.setSelected();
  }), pe(() => e.value, (_, O) => {
    const { remote: C, valueKey: N } = r.props;
    if (Object.is(_, O) || (r.onOptionDestroy(O, v.proxy), r.onOptionCreate(v.proxy)), !e.created && !C) {
      if (N && typeof _ == "object" && typeof O == "object" && _[N] === O[N])
        return;
      r.setSelected();
    }
  }), pe(() => i.disabled, () => {
    n.groupDisabled = i.disabled;
  }, { immediate: !0 });
  const { queryChange: m } = pi(r);
  return pe(m, (_) => {
    const { query: O } = b(_), C = new RegExp(KO(O), "i");
    n.visible = C.test(f.value) || e.created, n.visible || r.filteredOptionsCount--;
  }), {
    select: r,
    currentLabel: f,
    currentValue: d,
    itemSelected: l,
    isDisabled: h,
    hoverItem: E
  };
}
const E4 = $e({
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
    const n = Be("select"), r = Ln({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: i, itemSelected: s, isDisabled: l, select: c, hoverItem: f } = S4(e, r), { visible: d, hover: h } = nr(r), v = rn().proxy;
    c.onOptionCreate(v), vn(() => {
      const w = v.value, { selected: E } = c, _ = (c.props.multiple ? E : [E]).some((O) => O.value === v.value);
      De(() => {
        c.cachedOptions.get(w) === v && !_ && c.cachedOptions.delete(w);
      }), c.onOptionDestroy(w, v);
    });
    function S() {
      e.disabled !== !0 && r.groupDisabled !== !0 && c.handleOptionSelect(v, !0);
    }
    return {
      ns: n,
      currentLabel: i,
      itemSelected: s,
      isDisabled: l,
      select: c,
      hoverItem: f,
      visible: d,
      hover: h,
      selectOptionClick: S,
      states: r
    };
  }
});
function x4(e, n, r, i, s, l) {
  return Mt((V(), oe("li", {
    class: Q([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: n[0] || (n[0] = (...c) => e.hoverItem && e.hoverItem(...c)),
    onClick: n[1] || (n[1] = Ut((...c) => e.selectOptionClick && e.selectOptionClick(...c), ["stop"]))
  }, [
    Te(e.$slots, "default", {}, () => [
      fe("span", null, mt(e.currentLabel), 1)
    ])
  ], 34)), [
    [Wr, e.visible]
  ]);
}
var Ru = /* @__PURE__ */ Ue(E4, [["render", x4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const O4 = $e({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = qe(Xa), n = Be("select"), r = L(() => e.props.popperClass), i = L(() => e.props.multiple), s = L(() => e.props.fitInputWidth), l = X("");
    function c() {
      var f;
      l.value = `${(f = e.selectWrapper) == null ? void 0 : f.offsetWidth}px`;
    }
    return ut(() => {
      c(), Do(e.selectWrapper, c);
    }), {
      ns: n,
      minWidth: l,
      popperClass: r,
      isMultiple: i,
      isFitInputWidth: s
    };
  }
});
function T4(e, n, r, i, s, l) {
  return V(), oe("div", {
    class: Q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: At({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Te(e.$slots, "default")
  ], 6);
}
var C4 = /* @__PURE__ */ Ue(O4, [["render", T4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function A4(e) {
  const { t: n } = yu();
  return Ln({
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
    tagInMultiLine: !1
  });
}
const I4 = (e, n, r) => {
  const { t: i } = yu(), s = Be("select"), l = X(null), c = X(null), f = X(null), d = X(null), h = X(null), v = X(null), S = X(-1), w = li({ query: "" }), E = li(""), { form: m, formItem: _ } = ja(), O = L(() => !e.filterable || e.multiple || !n.visible), C = L(() => e.disabled || (m == null ? void 0 : m.disabled)), N = L(() => {
    const B = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !C.value && n.inputHovering && B;
  }), M = L(() => e.remote && e.filterable ? "" : e.suffixIcon), k = L(() => s.is("reverse", M.value && n.visible)), R = L(() => e.remote ? 300 : 0), A = L(() => e.loading ? e.loadingText || i("el.select.loading") : e.remote && n.query === "" && n.options.size === 0 ? !1 : e.filterable && n.query && n.options.size > 0 && n.filteredOptionsCount === 0 ? e.noMatchText || i("el.select.noMatch") : n.options.size === 0 ? e.noDataText || i("el.select.noData") : null), $ = L(() => Array.from(n.options.values())), z = L(() => Array.from(n.cachedOptions.values())), Y = L(() => {
    const B = $.value.filter((J) => !J.created).some((J) => J.currentLabel === n.query);
    return e.filterable && e.allowCreate && n.query !== "" && !B;
  }), te = Sr(), D = L(() => ["small"].includes(te.value) ? "small" : "default"), G = L({
    get() {
      return n.visible && A.value !== !1;
    },
    set(B) {
      n.visible = B;
    }
  });
  pe([() => C.value, () => te.value, () => m == null ? void 0 : m.size], () => {
    De(() => {
      U();
    });
  }), pe(() => e.placeholder, (B) => {
    n.cachedPlaceHolder = n.currentPlaceholder = B;
  }), pe(() => e.modelValue, (B, J) => {
    e.multiple && (U(), B && B.length > 0 || c.value && n.query !== "" ? n.currentPlaceholder = "" : n.currentPlaceholder = n.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (n.query = "", Z(n.query))), re(), e.filterable && !e.multiple && (n.inputLength = 20), !Vd(B, J) && e.validateEvent && (_ == null || _.validate("change").catch((ve) => bt(ve)));
  }, {
    flush: "post",
    deep: !0
  }), pe(() => n.visible, (B) => {
    var J, ve, Ae;
    B ? ((ve = (J = f.value) == null ? void 0 : J.updatePopper) == null || ve.call(J), e.filterable && (n.filteredOptionsCount = n.optionsCount, n.query = e.remote ? "" : n.selectedLabel, e.multiple ? (Ae = c.value) == null || Ae.focus() : n.selectedLabel && (n.currentPlaceholder = `${n.selectedLabel}`, n.selectedLabel = ""), Z(n.query), !e.multiple && !e.remote && (w.value.query = "", ri(w), ri(E)))) : (c.value && c.value.blur(), n.query = "", n.previousQuery = null, n.selectedLabel = "", n.inputLength = 20, n.menuVisibleOnFocus = !1, ce(), De(() => {
      c.value && c.value.value === "" && n.selected.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
    }), e.multiple || (n.selected && (e.filterable && e.allowCreate && n.createdSelected && n.createdLabel ? n.selectedLabel = n.createdLabel : n.selectedLabel = n.selected.currentLabel, e.filterable && (n.query = n.selectedLabel)), e.filterable && (n.currentPlaceholder = n.cachedPlaceHolder))), r.emit("visible-change", B);
  }), pe(() => n.options.entries(), () => {
    var B, J, ve;
    if (!kt)
      return;
    (J = (B = f.value) == null ? void 0 : B.updatePopper) == null || J.call(B), e.multiple && U();
    const Ae = ((ve = h.value) == null ? void 0 : ve.querySelectorAll("input")) || [];
    Array.from(Ae).includes(document.activeElement) || re(), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && ae();
  }, {
    flush: "post"
  }), pe(() => n.hoverIndex, (B) => {
    typeof B == "number" && B > -1 && (S.value = $.value[B] || {}), $.value.forEach((J) => {
      J.hover = S.value === J;
    });
  });
  const U = () => {
    e.collapseTags && !e.filterable || De(() => {
      var B, J;
      if (!l.value)
        return;
      const ve = l.value.$el.querySelector("input"), Ae = d.value, pt = aC(te.value || (m == null ? void 0 : m.size));
      ve.style.height = `${(n.selected.length === 0 ? pt : Math.max(Ae ? Ae.clientHeight + (Ae.clientHeight > pt ? 6 : 0) : 0, pt)) - 2}px`, n.tagInMultiLine = Number.parseFloat(ve.style.height) >= pt, n.visible && A.value !== !1 && ((J = (B = f.value) == null ? void 0 : B.updatePopper) == null || J.call(B));
    });
  }, Z = async (B) => {
    if (!(n.previousQuery === B || n.isOnComposition)) {
      if (n.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        n.previousQuery = B;
        return;
      }
      n.previousQuery = B, De(() => {
        var J, ve;
        n.visible && ((ve = (J = f.value) == null ? void 0 : J.updatePopper) == null || ve.call(J));
      }), n.hoverIndex = -1, e.multiple && e.filterable && De(() => {
        const J = c.value.value.length * 15 + 20;
        n.inputLength = e.collapseTags ? Math.min(50, J) : J, ne(), U();
      }), e.remote && typeof e.remoteMethod == "function" ? (n.hoverIndex = -1, e.remoteMethod(B)) : typeof e.filterMethod == "function" ? (e.filterMethod(B), ri(E)) : (n.filteredOptionsCount = n.optionsCount, w.value.query = B, ri(w), ri(E)), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && (await De(), ae());
    }
  }, ne = () => {
    n.currentPlaceholder !== "" && (n.currentPlaceholder = c.value.value ? "" : n.cachedPlaceHolder);
  }, ae = () => {
    const B = $.value.filter((Ae) => Ae.visible && !Ae.disabled && !Ae.states.groupDisabled), J = B.find((Ae) => Ae.created), ve = B[0];
    n.hoverIndex = Ze($.value, J || ve);
  }, re = () => {
    var B;
    if (e.multiple)
      n.selectedLabel = "";
    else {
      const ve = he(e.modelValue);
      (B = ve.props) != null && B.created ? (n.createdLabel = ve.props.value, n.createdSelected = !0) : n.createdSelected = !1, n.selectedLabel = ve.currentLabel, n.selected = ve, e.filterable && (n.query = n.selectedLabel);
      return;
    }
    const J = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((ve) => {
      J.push(he(ve));
    }), n.selected = J, De(() => {
      U();
    });
  }, he = (B) => {
    let J;
    const ve = gl(B).toLowerCase() === "object", Ae = gl(B).toLowerCase() === "null", pt = gl(B).toLowerCase() === "undefined";
    for (let on = n.cachedOptions.size - 1; on >= 0; on--) {
      const Zt = z.value[on];
      if (ve ? pn(Zt.value, e.valueKey) === pn(B, e.valueKey) : Zt.value === B) {
        J = {
          value: B,
          currentLabel: Zt.currentLabel,
          isDisabled: Zt.isDisabled
        };
        break;
      }
    }
    if (J)
      return J;
    const yn = ve ? B.label : !Ae && !pt ? B : "", _n = {
      value: B,
      currentLabel: yn
    };
    return e.multiple && (_n.hitState = !1), _n;
  }, ce = () => {
    setTimeout(() => {
      const B = e.valueKey;
      e.multiple ? n.selected.length > 0 ? n.hoverIndex = Math.min.apply(null, n.selected.map((J) => $.value.findIndex((ve) => pn(ve, B) === pn(J, B)))) : n.hoverIndex = -1 : n.hoverIndex = $.value.findIndex((J) => et(J) === et(n.selected));
    }, 300);
  }, ye = () => {
    var B, J;
    _e(), (J = (B = f.value) == null ? void 0 : B.updatePopper) == null || J.call(B), e.multiple && !e.filterable && U();
  }, _e = () => {
    var B;
    n.inputWidth = (B = l.value) == null ? void 0 : B.$el.getBoundingClientRect().width;
  }, at = () => {
    e.filterable && n.query !== n.selectedLabel && (n.query = n.selectedLabel, Z(n.query));
  }, Qe = Ud(() => {
    at();
  }, R.value), ct = Ud((B) => {
    Z(B.target.value);
  }, R.value), We = (B) => {
    Vd(e.modelValue, B) || r.emit(mu, B);
  }, rt = (B) => {
    if (B.target.value.length <= 0 && !mn()) {
      const J = e.modelValue.slice();
      J.pop(), r.emit(It, J), We(J);
    }
    B.target.value.length === 1 && e.modelValue.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
  }, se = (B, J) => {
    const ve = n.selected.indexOf(J);
    if (ve > -1 && !C.value) {
      const Ae = e.modelValue.slice();
      Ae.splice(ve, 1), r.emit(It, Ae), We(Ae), r.emit("remove-tag", J.value);
    }
    B.stopPropagation();
  }, be = (B) => {
    B.stopPropagation();
    const J = e.multiple ? [] : "";
    if (typeof J != "string")
      for (const ve of n.selected)
        ve.isDisabled && J.push(ve.value);
    r.emit(It, J), We(J), n.visible = !1, r.emit("clear");
  }, Ne = (B, J) => {
    var ve;
    if (e.multiple) {
      const Ae = (e.modelValue || []).slice(), pt = Ze(Ae, B.value);
      pt > -1 ? Ae.splice(pt, 1) : (e.multipleLimit <= 0 || Ae.length < e.multipleLimit) && Ae.push(B.value), r.emit(It, Ae), We(Ae), B.created && (n.query = "", Z(""), n.inputLength = 20), e.filterable && ((ve = c.value) == null || ve.focus());
    } else
      r.emit(It, B.value), We(B.value), n.visible = !1;
    n.isSilentBlur = J, _t(), !n.visible && De(() => {
      ft(B);
    });
  }, Ze = (B = [], J) => {
    if (!wr(J))
      return B.indexOf(J);
    const ve = e.valueKey;
    let Ae = -1;
    return B.some((pt, yn) => pi(pn(pt, ve)) === pn(J, ve) ? (Ae = yn, !0) : !1), Ae;
  }, _t = () => {
    n.softFocus = !0;
    const B = c.value || l.value;
    B && (B == null || B.focus());
  }, ft = (B) => {
    var J, ve, Ae, pt, yn;
    const _n = Array.isArray(B) ? B[0] : B;
    let on = null;
    if (_n != null && _n.value) {
      const Zt = $.value.filter((Dt) => Dt.value === _n.value);
      Zt.length > 0 && (on = Zt[0].$el);
    }
    if (f.value && on) {
      const Zt = (pt = (Ae = (ve = (J = f.value) == null ? void 0 : J.popperRef) == null ? void 0 : ve.contentRef) == null ? void 0 : Ae.querySelector) == null ? void 0 : pt.call(Ae, `.${s.be("dropdown", "wrap")}`);
      Zt && YO(Zt, on);
    }
    (yn = v.value) == null || yn.handleScroll();
  }, gn = (B) => {
    n.optionsCount++, n.filteredOptionsCount++, n.options.set(B.value, B), n.cachedOptions.set(B.value, B);
  }, wt = (B, J) => {
    n.options.get(B) === J && (n.optionsCount--, n.filteredOptionsCount--, n.options.delete(B));
  }, Gt = (B) => {
    B.code !== Vt.backspace && mn(!1), n.inputLength = c.value.value.length * 15 + 20, U();
  }, mn = (B) => {
    if (!Array.isArray(n.selected))
      return;
    const J = n.selected[n.selected.length - 1];
    if (!!J)
      return B === !0 || B === !1 ? (J.hitState = B, B) : (J.hitState = !J.hitState, J.hitState);
  }, dt = (B) => {
    const J = B.target.value;
    if (B.type === "compositionend")
      n.isOnComposition = !1, De(() => Z(J));
    else {
      const ve = J[J.length - 1] || "";
      n.isOnComposition = !Sh(ve);
    }
  }, bn = () => {
    De(() => ft(n.selected));
  }, ir = (B) => {
    n.softFocus ? n.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !n.visible && (n.menuVisibleOnFocus = !0), n.visible = !0), r.emit("focus", B));
  }, yt = () => {
    var B;
    n.visible = !1, (B = l.value) == null || B.blur();
  }, ot = (B) => {
    De(() => {
      n.isSilentBlur ? n.isSilentBlur = !1 : r.emit("blur", B);
    }), n.softFocus = !1;
  }, jt = (B) => {
    be(B);
  }, Yt = () => {
    n.visible = !1;
  }, K = (B) => {
    n.visible && (B.preventDefault(), B.stopPropagation(), n.visible = !1);
  }, Se = () => {
    var B;
    C.value || (n.menuVisibleOnFocus ? n.menuVisibleOnFocus = !1 : n.visible = !n.visible, n.visible && ((B = c.value || l.value) == null || B.focus()));
  }, Tt = () => {
    n.visible ? $.value[n.hoverIndex] && Ne($.value[n.hoverIndex], void 0) : Se();
  }, et = (B) => wr(B.value) ? pn(B.value, e.valueKey) : B.value, Lt = L(() => $.value.filter((B) => B.visible).every((B) => B.disabled)), Gn = (B) => {
    if (!n.visible) {
      n.visible = !0;
      return;
    }
    if (!(n.options.size === 0 || n.filteredOptionsCount === 0) && !n.isOnComposition && !Lt.value) {
      B === "next" ? (n.hoverIndex++, n.hoverIndex === n.options.size && (n.hoverIndex = 0)) : B === "prev" && (n.hoverIndex--, n.hoverIndex < 0 && (n.hoverIndex = n.options.size - 1));
      const J = $.value[n.hoverIndex];
      (J.disabled === !0 || J.states.groupDisabled === !0 || !J.visible) && Gn(B), De(() => ft(S.value));
    }
  };
  return {
    optionsArray: $,
    selectSize: te,
    handleResize: ye,
    debouncedOnInputChange: Qe,
    debouncedQueryChange: ct,
    deletePrevTag: rt,
    deleteTag: se,
    deleteSelected: be,
    handleOptionSelect: Ne,
    scrollToOption: ft,
    readonly: O,
    resetInputHeight: U,
    showClose: N,
    iconComponent: M,
    iconReverse: k,
    showNewOption: Y,
    collapseTagSize: D,
    setSelected: re,
    managePlaceholder: ne,
    selectDisabled: C,
    emptyText: A,
    toggleLastOptionHitState: mn,
    resetInputState: Gt,
    handleComposition: dt,
    onOptionCreate: gn,
    onOptionDestroy: wt,
    handleMenuEnter: bn,
    handleFocus: ir,
    blur: yt,
    handleBlur: ot,
    handleClearClick: jt,
    handleClose: Yt,
    handleKeydownEscape: K,
    toggleMenu: Se,
    selectOption: Tt,
    getValueKey: et,
    navigateOptions: Gn,
    dropMenuVisible: G,
    queryChange: w,
    groupQueryChange: E,
    reference: l,
    input: c,
    tooltipRef: f,
    tags: d,
    selectWrapper: h,
    scrollbar: v
  };
}, kp = "ElSelect", $4 = $e({
  name: kp,
  componentName: kp,
  components: {
    ElInput: Rh,
    ElSelectMenu: C4,
    ElOption: Ru,
    ElTag: o3,
    ElScrollbar: aA,
    ElTooltip: Pu,
    ElIcon: Hn
  },
  directives: { ClickOutside: m$ },
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
      validator: sC
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
    teleported: Iu.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: [String, Object],
      default: gu
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: [String, Object],
      default: pT
    },
    tagType: { ...uv.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    It,
    mu,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, n) {
    const r = Be("select"), i = Be("input"), { t: s } = yu(), l = A4(e), {
      optionsArray: c,
      selectSize: f,
      readonly: d,
      handleResize: h,
      collapseTagSize: v,
      debouncedOnInputChange: S,
      debouncedQueryChange: w,
      deletePrevTag: E,
      deleteTag: m,
      deleteSelected: _,
      handleOptionSelect: O,
      scrollToOption: C,
      setSelected: N,
      resetInputHeight: M,
      managePlaceholder: k,
      showClose: R,
      selectDisabled: A,
      iconComponent: $,
      iconReverse: z,
      showNewOption: Y,
      emptyText: te,
      toggleLastOptionHitState: D,
      resetInputState: G,
      handleComposition: U,
      onOptionCreate: Z,
      onOptionDestroy: ne,
      handleMenuEnter: ae,
      handleFocus: re,
      blur: he,
      handleBlur: ce,
      handleClearClick: ye,
      handleClose: _e,
      handleKeydownEscape: at,
      toggleMenu: Qe,
      selectOption: ct,
      getValueKey: We,
      navigateOptions: rt,
      dropMenuVisible: se,
      reference: be,
      input: Ne,
      tooltipRef: Ze,
      tags: _t,
      selectWrapper: ft,
      scrollbar: gn,
      queryChange: wt,
      groupQueryChange: Gt
    } = I4(e, l, n), { focus: mn } = pC(be), {
      inputWidth: dt,
      selected: bn,
      inputLength: ir,
      filteredOptionsCount: yt,
      visible: ot,
      softFocus: jt,
      selectedLabel: Yt,
      hoverIndex: K,
      query: Se,
      inputHovering: Tt,
      currentPlaceholder: et,
      menuVisibleOnFocus: Lt,
      isOnComposition: Gn,
      isSilentBlur: B,
      options: J,
      cachedOptions: ve,
      optionsCount: Ae,
      prefixWidth: pt,
      tagInMultiLine: yn
    } = nr(l), _n = L(() => {
      const Dt = [r.b()], ar = b(f);
      return ar && Dt.push(r.m(ar)), e.disabled && Dt.push(r.m("disabled")), Dt;
    }), on = L(() => ({
      maxWidth: `${b(dt) - 32}px`,
      width: "100%"
    }));
    Nt(Xa, Ln({
      props: e,
      options: J,
      optionsArray: c,
      cachedOptions: ve,
      optionsCount: Ae,
      filteredOptionsCount: yt,
      hoverIndex: K,
      handleOptionSelect: O,
      onOptionCreate: Z,
      onOptionDestroy: ne,
      selectWrapper: ft,
      selected: bn,
      setSelected: N,
      queryChange: wt,
      groupQueryChange: Gt
    })), ut(() => {
      l.cachedPlaceHolder = et.value = e.placeholder || s("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (et.value = ""), Do(ft, h), e.remote && e.multiple && M(), De(() => {
        const Dt = be.value && be.value.$el;
        if (!!Dt && (dt.value = Dt.getBoundingClientRect().width, n.slots.prefix)) {
          const ar = Dt.querySelector(`.${i.e("prefix")}`);
          pt.value = Math.max(ar.getBoundingClientRect().width + 5, 30);
        }
      }), N();
    }), e.multiple && !Array.isArray(e.modelValue) && n.emit(It, []), !e.multiple && Array.isArray(e.modelValue) && n.emit(It, "");
    const Zt = L(() => {
      var Dt, ar;
      return (ar = (Dt = Ze.value) == null ? void 0 : Dt.popperRef) == null ? void 0 : ar.contentRef;
    });
    return {
      tagInMultiLine: yn,
      prefixWidth: pt,
      selectSize: f,
      readonly: d,
      handleResize: h,
      collapseTagSize: v,
      debouncedOnInputChange: S,
      debouncedQueryChange: w,
      deletePrevTag: E,
      deleteTag: m,
      deleteSelected: _,
      handleOptionSelect: O,
      scrollToOption: C,
      inputWidth: dt,
      selected: bn,
      inputLength: ir,
      filteredOptionsCount: yt,
      visible: ot,
      softFocus: jt,
      selectedLabel: Yt,
      hoverIndex: K,
      query: Se,
      inputHovering: Tt,
      currentPlaceholder: et,
      menuVisibleOnFocus: Lt,
      isOnComposition: Gn,
      isSilentBlur: B,
      options: J,
      resetInputHeight: M,
      managePlaceholder: k,
      showClose: R,
      selectDisabled: A,
      iconComponent: $,
      iconReverse: z,
      showNewOption: Y,
      emptyText: te,
      toggleLastOptionHitState: D,
      resetInputState: G,
      handleComposition: U,
      handleMenuEnter: ae,
      handleFocus: re,
      blur: he,
      handleBlur: ce,
      handleClearClick: ye,
      handleClose: _e,
      handleKeydownEscape: at,
      toggleMenu: Qe,
      selectOption: ct,
      getValueKey: We,
      navigateOptions: rt,
      dropMenuVisible: se,
      focus: mn,
      reference: be,
      input: Ne,
      tooltipRef: Ze,
      popperPaneRef: Zt,
      tags: _t,
      selectWrapper: ft,
      scrollbar: gn,
      wrapperKls: _n,
      selectTagsStyle: on,
      nsSelect: r
    };
  }
}), P4 = { class: "select-trigger" }, M4 = ["disabled", "autocomplete"], R4 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function L4(e, n, r, i, s, l) {
  const c = qt("el-tag"), f = qt("el-tooltip"), d = qt("el-icon"), h = qt("el-input"), v = qt("el-option"), S = qt("el-scrollbar"), w = qt("el-select-menu"), E = fw("click-outside");
  return Mt((V(), oe("div", {
    ref: "selectWrapper",
    class: Q(e.wrapperKls),
    onClick: n[22] || (n[22] = Ut((...m) => e.toggleMenu && e.toggleMenu(...m), ["stop"]))
  }, [
    lt(f, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: "bottom-start",
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
      default: Oe(() => [
        fe("div", P4, [
          e.multiple ? (V(), oe("div", {
            key: 0,
            ref: "tags",
            class: Q(e.nsSelect.e("tags")),
            style: At(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (V(), oe("span", {
              key: 0,
              class: Q([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              lt(c, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: n[0] || (n[0] = (m) => e.deleteTag(m, e.selected[0]))
              }, {
                default: Oe(() => [
                  fe("span", {
                    class: Q(e.nsSelect.e("tags-text")),
                    style: At({ maxWidth: e.inputWidth - 123 + "px" })
                  }, mt(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (V(), Me(c, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Oe(() => [
                  e.collapseTagsTooltip ? (V(), Me(f, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Oe(() => [
                      fe("span", {
                        class: Q(e.nsSelect.e("tags-text"))
                      }, "+ " + mt(e.selected.length - 1), 3)
                    ]),
                    content: Oe(() => [
                      fe("div", {
                        class: Q(e.nsSelect.e("collapse-tags"))
                      }, [
                        (V(!0), oe(Kt, null, Bl(e.selected.slice(1), (m, _) => (V(), oe("div", {
                          key: _,
                          class: Q(e.nsSelect.e("collapse-tag"))
                        }, [
                          (V(), Me(c, {
                            key: e.getValueKey(m),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !m.isDisabled,
                            size: e.collapseTagSize,
                            hit: m.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (O) => e.deleteTag(O, m)
                          }, {
                            default: Oe(() => [
                              fe("span", {
                                class: Q(e.nsSelect.e("tags-text")),
                                style: At({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, mt(m.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (V(), oe("span", {
                    key: 1,
                    class: Q(e.nsSelect.e("tags-text"))
                  }, "+ " + mt(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : we("v-if", !0)
            ], 2)) : we("v-if", !0),
            we(" <div> "),
            e.collapseTags ? we("v-if", !0) : (V(), Me(ao, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Oe(() => [
                fe("span", {
                  class: Q([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (V(!0), oe(Kt, null, Bl(e.selected, (m) => (V(), Me(c, {
                    key: e.getValueKey(m),
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    hit: m.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (_) => e.deleteTag(_, m)
                  }, {
                    default: Oe(() => [
                      fe("span", {
                        class: Q(e.nsSelect.e("tags-text")),
                        style: At({ maxWidth: e.inputWidth - 75 + "px" })
                      }, mt(m.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            we(" </div> "),
            e.filterable ? Mt((V(), oe("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": n[1] || (n[1] = (m) => e.query = m),
              type: "text",
              class: Q([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: At({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: n[2] || (n[2] = (...m) => e.handleFocus && e.handleFocus(...m)),
              onBlur: n[3] || (n[3] = (...m) => e.handleBlur && e.handleBlur(...m)),
              onKeyup: n[4] || (n[4] = (...m) => e.managePlaceholder && e.managePlaceholder(...m)),
              onKeydown: [
                n[5] || (n[5] = (...m) => e.resetInputState && e.resetInputState(...m)),
                n[6] || (n[6] = Dn(Ut((m) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                n[7] || (n[7] = Dn(Ut((m) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                n[8] || (n[8] = Dn((...m) => e.handleKeydownEscape && e.handleKeydownEscape(...m), ["esc"])),
                n[9] || (n[9] = Dn(Ut((...m) => e.selectOption && e.selectOption(...m), ["stop", "prevent"]), ["enter"])),
                n[10] || (n[10] = Dn((...m) => e.deletePrevTag && e.deletePrevTag(...m), ["delete"])),
                n[11] || (n[11] = Dn((m) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: n[12] || (n[12] = (...m) => e.handleComposition && e.handleComposition(...m)),
              onCompositionupdate: n[13] || (n[13] = (...m) => e.handleComposition && e.handleComposition(...m)),
              onCompositionend: n[14] || (n[14] = (...m) => e.handleComposition && e.handleComposition(...m)),
              onInput: n[15] || (n[15] = (...m) => e.debouncedQueryChange && e.debouncedQueryChange(...m))
            }, null, 46, M4)), [
              [dw, e.query]
            ]) : we("v-if", !0)
          ], 6)) : we("v-if", !0),
          lt(h, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": n[16] || (n[16] = (m) => e.selectedLabel = m),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: Q([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              n[17] || (n[17] = Dn(Ut((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              n[18] || (n[18] = Dn(Ut((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Dn(Ut(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Dn(e.handleKeydownEscape, ["esc"]),
              n[19] || (n[19] = Dn((m) => e.visible = !1, ["tab"]))
            ],
            onMouseenter: n[20] || (n[20] = (m) => e.inputHovering = !0),
            onMouseleave: n[21] || (n[21] = (m) => e.inputHovering = !1)
          }, pw({
            suffix: Oe(() => [
              e.iconComponent && !e.showClose ? (V(), Me(d, {
                key: 0,
                class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Oe(() => [
                  (V(), Me(In(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : we("v-if", !0),
              e.showClose && e.clearIcon ? (V(), Me(d, {
                key: 1,
                class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Oe(() => [
                  (V(), Me(In(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : we("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Oe(() => [
                fe("div", R4, [
                  Te(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: Oe(() => [
        lt(w, null, {
          default: Oe(() => [
            Mt(lt(S, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Q([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Oe(() => [
                e.showNewOption ? (V(), Me(v, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : we("v-if", !0),
                Te(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Wr, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (V(), oe(Kt, { key: 0 }, [
              e.$slots.empty ? Te(e.$slots, "empty", { key: 0 }) : (V(), oe("p", {
                key: 1,
                class: Q(e.nsSelect.be("dropdown", "empty"))
              }, mt(e.emptyText), 3))
            ], 64)) : we("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [E, e.handleClose, e.popperPaneRef]
  ]);
}
var F4 = /* @__PURE__ */ Ue($4, [["render", L4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const B4 = $e({
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
    const n = Be("select"), r = X(!0), i = rn(), s = X([]);
    Nt(mv, Ln({
      ...nr(e)
    }));
    const l = qe(Xa);
    ut(() => {
      s.value = c(i.subTree);
    });
    const c = (d) => {
      const h = [];
      return Array.isArray(d.children) && d.children.forEach((v) => {
        var S;
        v.type && v.type.name === "ElOption" && v.component && v.component.proxy ? h.push(v.component.proxy) : (S = v.children) != null && S.length && h.push(...c(v));
      }), h;
    }, { groupQueryChange: f } = pi(l);
    return pe(f, () => {
      r.value = s.value.some((d) => d.visible === !0);
    }), {
      visible: r,
      ns: n
    };
  }
});
function k4(e, n, r, i, s, l) {
  return Mt((V(), oe("ul", {
    class: Q(e.ns.be("group", "wrap"))
  }, [
    fe("li", {
      class: Q(e.ns.be("group", "title"))
    }, mt(e.label), 3),
    fe("li", null, [
      fe("ul", {
        class: Q(e.ns.b("group"))
      }, [
        Te(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Wr, e.visible]
  ]);
}
var bv = /* @__PURE__ */ Ue(B4, [["render", k4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
Vn(F4, {
  Option: Ru,
  OptionGroup: bv
});
const N4 = or(Ru);
or(bv);
const D4 = (e, n, r) => {
  let i;
  for (; (i = e.exec(n)) !== null; )
    r(i);
}, W4 = /\{\{\s*(\w+)\s*\}\}/g, $a = (e, n = {}, r = W4) => {
  let i = e;
  return D4(r, e, ([s, l]) => {
    ue.exports.has(n, l) && (i = i.replace(s, ue.exports.get(n, l)));
  }), i;
}, z4 = (e, n, r) => {
  const i = b(e.size) || "default", s = ru(), l = n.formData, c = n.emitChange, f = n.formProps, d = ue.exports.merge(
    { validateOnRuleChange: !1, size: i },
    s.elForm || {}
  ), h = ({ parent: O }) => O && ue.exports.has(Da, ue.exports.camelCase(O.tagname)) ? Da[ue.exports.camelCase(O.tagname)] : Rh, v = (O, C) => {
    var U, Z;
    const N = O.elem, M = O.parent, k = ue.exports.camelCase(C.tagname), R = ue.exports.camelCase(M == null ? void 0 : M.tagname), A = M == null ? void 0 : M.setupRes, $ = b(N.prop), z = typeof $ == "function" ? $(O) : $, Y = b(A == null ? void 0 : A.formProp) || [], te = new Array().concat(Y, z || []), D = te.join("."), G = { isFormElem: !1 };
    if (te.length > 0 && (G.formProp = D), H4(N, k, R)) {
      f.add(D), G.isFormElem = !0;
      const ne = (Z = b((U = N.modelValue) != null ? U : N.value)) != null ? Z : void 0, re = O.context.modelValue;
      ue.exports.get(b(re), D) == null && ue.exports.set(b(re), D, ne), G.prop = { "onUpdate:modelValue": (he) => {
        ue.exports.set(b(re), D, he != null ? he : ne), c(D, he);
      } }, G.excludeKeys = ["value"], G.isFormItem = !0, G.isNeedElFormItem = q4(N, k), zp(() => {
        f.delete(D);
      });
    }
    return G;
  }, S = (O) => {
    const C = O.props, N = O.context, M = O.setupRes;
    if (M.isFormElem) {
      const k = N.modelValue, R = M.formProp;
      if (ue.exports.unset(C, "value"), C.modelValue = ue.exports.get(b(k), R), M.isNeedElFormItem) {
        const A = {
          ...K4(C),
          prop: R
        };
        return A.rules = U4(A), gt(Q3, A, { default: () => Wl(O) });
      }
    }
    return Wl(O);
  }, w = X(), E = {
    ...d,
    tag: J3,
    ref: (O) => w.value = O,
    cls: qn(e, "column"),
    model: l
  }, m = (O, ...C) => {
    const N = ue.exports.get(b(w), O);
    if (N && ue.exports.isFunction(N))
      return N(...C);
  }, _ = {
    ...r,
    modelValue: l,
    tag: h,
    setup: v,
    render: S
  };
  return {
    elem: E,
    context: _,
    formRef: w,
    formApi: m,
    refresh: () => {
    },
    validate: (...O) => m("validate", O)
  };
}, yv = [
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
], Da = {
  elCheckboxGroup: N$,
  elRadioGroup: Q$,
  elSelect: N4
}, H4 = (e, n, r) => b(e.isFormElem) === !0 ? !0 : yv.includes(n) ? r && ue.exports.has(Da, r) ? ue.exports.camelCase(Da[r].name) !== n : !0 : !1, q4 = (e, n) => {
  var i, s;
  const r = (i = b(e.elFormItem)) != null ? i : yv.includes(n);
  return ue.exports.isBoolean(r) ? r : (s = r.enabled) != null ? s : !0;
}, Il = {
  required: "\u8BF7\u8F93\u5165 [ {{label}} ] \uFF01",
  pattern: "\u8BF7\u6309\u7167\u8981\u6C42\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F! \u683C\u5F0F\uFF1A{{ pattern }}",
  common: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F!"
}, U4 = (e) => {
  var d, h;
  const n = (d = b(e.required)) != null ? d : !1, r = (h = b(e.trigger)) != null ? h : "blur", i = ue.exports.has(e, "message") ? $a(b(e.message), e) : $a(Il.required, e), s = ue.exports.isArray(b(e.rules)) ? [...b(e.rules)] : [], l = Object.keys(Il), c = [];
  let f = !1;
  return s.forEach((v) => {
    var m;
    const S = { ...b(v) }, w = ((m = l.filter((_) => ue.exports.has(S, _))) == null ? void 0 : m[0]) || "common", E = S.message || b(e.message) || ue.exports.get(Il, w);
    S.message = $a(E, { ...e, ...S }), ue.exports.has(S, "required") && (f = !0), ue.exports.has(S, "trigger") || (S.trigger = r), c.push(S);
  }), !f && n && c.push({ required: n, message: i, trigger: r }), delete e.required, delete e.trigger, delete e.message, c;
}, V4 = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message"
], K4 = (e) => {
  const n = b(ue.exports.get(e, "elFormItem")), r = ue.exports.isArray(n) ? n : ue.exports.isObject(n) ? Object.keys(n) : [], i = ue.exports.isObject(n) ? { ...n } : {};
  return V4.forEach((s) => {
    ue.exports.has(e, s) && !r.includes(s) && (i[s] = ue.exports.get(e, s), ue.exports.unset(e, s));
  }), ue.exports.unset(e, "elFormItem"), i;
}, G4 = { class: "els-form" }, j4 = {
  name: "ElsForm"
}, Y4 = /* @__PURE__ */ $e({
  ...j4,
  props: {
    modelValue: null,
    column: null,
    size: { default: "small" },
    UIPluging: null,
    autoClean: { default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = Ei(), l = X({}), c = (w, E) => {
      r("change", w, E), r("update:modelValue", b(l));
    };
    ut(() => {
      r("update:modelValue", b(l));
    }), pe(qn(i, "modelValue"), (w) => {
      l.value = w;
    });
    const f = Ln(/* @__PURE__ */ new Set()), d = { formProps: f, formData: l, emitChange: c }, v = (i.UIPluging || z4)(i, d, { slots: s });
    if (i.autoClean) {
      let w = [];
      ut(() => {
        w = Array.from(f);
      }), vn(() => {
        w = [], f.clear();
      }), pe(f, (E) => {
        const m = Array.from(E), _ = ue.exports.difference(w, m);
        _.length > 0 && (_.forEach((O) => ue.exports.unset(b(l), O)), w = m, r("update:modelValue", b(l)));
      });
    }
    return n({ ...v, formProps: f, submit: async (w = (E, m) => m == null ? void 0 : [E, m]) => {
      try {
        await v.validate();
      } catch (m) {
        console.error("\u8868\u5355\u6821\u9A8C\u5931\u8D25\uFF01====>", m);
      }
      const E = {};
      for (const m in f) {
        const _ = ue.exports.get(b(l), m), O = w(m, _);
        if (O != null) {
          const [C, N] = O;
          ue.exports.set(E, C, N);
        }
      }
      return E;
    } }), (w, E) => (V(), oe("div", G4, [
      lt(b(iu), {
        elem: b(v).elem,
        context: b(v).context
      }, null, 8, ["elem", "context"])
    ]));
  }
});
const $l = {
  install(e) {
    e.component("els-form", Y4);
  }
}, Z4 = { class: "els-exp-box" }, X4 = ["onClick"], J4 = {
  key: 0,
  class: "els-cursor"
}, Q4 = ["onClick"], e8 = {
  key: 0,
  class: "els-cursor"
}, t8 = {
  name: "ElsExpBox"
}, n8 = /* @__PURE__ */ $e({
  ...t8,
  props: {
    modelValue: { default: "" },
    isEdit: { type: Boolean, default: !0 },
    mode: { default: "text" },
    init: null
  },
  emits: ["init", "update:modelValue"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = X(), { modelValue: l, isEdit: c, mode: f } = nr(i), d = X(!1);
    let h = "";
    const v = X([]), S = X([]), w = (R) => {
      if (!s.value)
        return;
      const { children: A } = s.value, $ = b(v).length, z = A[$], {
        offsetLeft: Y,
        offsetTop: te,
        offsetHeight: D,
        offsetWidth: G,
        tagName: U
      } = z, Z = R == "up" ? te - D / 2 : te + D + D / 2, ne = Y;
      Z > 0 && m(ne, Z);
    }, E = (R) => {
      const A = [...v.value, ...S.value], $ = A.length;
      R > $ ? R = $ : R < 0 && (R = $ + 1 - R);
      const z = A.slice(0, R), Y = A.slice(R);
      v.value = z, S.value = Y;
    }, m = (R, A) => {
      if (!s.value)
        return;
      const { children: $ } = s.value;
      let z = -1, Y = -1, te = 0;
      for (let D = 0, G = $.length; D < G; D++) {
        const U = $[D], {
          tagName: Z,
          offsetLeft: ne,
          offsetTop: ae,
          offsetWidth: re,
          offsetHeight: he
        } = U;
        if (Z == "SPAN" && (te = D), Z == "KBD" && A >= ae && A <= ae + he) {
          const ce = R - ne, ye = Math.abs(ce);
          (z == -1 || ye < z) && (z = ye, Y = ce > re / 2 ? D + 1 : D);
        }
      }
      if (Y == -1) {
        let D = 0, G = 0;
        for (let U = 0, Z = $.length; U < Z; U++) {
          const ne = $[U], { tagName: ae, offsetTop: re, offsetHeight: he } = ne;
          if (he > 0 ? (G = U, D = he, z = re + he) : U - G > 1 && (z = z + D), A >= z)
            Y = U + 1;
          else
            break;
        }
      }
      Y >= 0 && te < Y && Y--, E(Y);
    }, _ = (R) => {
      const { offsetX: A, offsetY: $ } = R;
      m(A, $);
    }, O = (R, A) => {
      const { offsetX: $ } = A, z = A.target;
      let Y = 1;
      if ($ && z) {
        const { offsetWidth: te } = z;
        $ < te / 2 && (Y = 0);
      }
      console.log(R), E(R + Y);
    }, C = (R) => {
      if (!c.value)
        return;
      const A = R.key;
      N(A);
    }, N = (R) => {
      switch (console.log("===addValue===>", R), R) {
        case "Enter":
          v.value.push(`
`);
          break;
        case "Space":
          v.value.push(" ");
          break;
        case "Backspace":
          v.value.pop();
          break;
        case "Delete":
          v.value.pop();
          break;
        case "Home":
          E(0);
          break;
        case "End":
          E(-1);
          break;
        case "ArrowLeft":
          E(v.value.length - 1);
          break;
        case "ArrowRight":
          E(v.value.length + 1);
          break;
        case "ArrowUp":
          w("up");
          break;
        case "ArrowDown":
          w("down");
          break;
        default:
          v.value.push(R);
      }
      M();
    }, M = () => {
      h = [...b(v), ...b(S)].join(""), r("update:modelValue", h);
    };
    document.onkeydown = (R) => {
      const A = R.code;
      if (console.log(A), ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(A))
        return !1;
    }, pe(l, (R) => {
      R != h && (h = R, v.value = R.split(""));
    });
    const k = {
      input: N,
      resetPos: E
    };
    return ut(() => {
      r("init", k), i.init && i.init(k);
    }), n(k), (R, A) => (V(), oe("div", Z4, [
      fe("div", {
        ref_key: "boxRef",
        ref: s,
        class: Q([`_mode-${b(f)}`, { "is-focus": d.value }]),
        tabindex: "1",
        onKeydown: C,
        onClick: Ut(_, ["stop"]),
        onFocus: A[0] || (A[0] = () => d.value = !0),
        onFocusout: A[1] || (A[1] = () => d.value = !1)
      }, [
        (V(!0), oe(Kt, null, Bl([...v.value, ...S.value], ($, z) => (V(), oe(Kt, null, [
          z == v.value.length ? (V(), oe("span", J4)) : we("", !0),
          $ != `
` ? (V(), oe("kbd", {
            key: 1,
            onClick: Ut((Y) => O(z, Y), ["stop"]),
            class: Q(z + "")
          }, mt($), 11, Q4)) : (V(), oe("br", {
            key: 2,
            class: Q(z + "")
          }, null, 2))
        ], 64))), 256)),
        S.value.length == 0 ? (V(), oe("span", e8)) : we("", !0)
      ], 42, X4)
    ]));
  }
});
const Lu = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [i, s] of n)
    r[i] = s;
  return r;
}, r8 = /* @__PURE__ */ Lu(n8, [["__scopeId", "data-v-c7d48fc8"]]), Pl = {
  install(e) {
    e.component("els-exp-box", r8);
  }
}, o8 = { class: "_track" }, i8 = {
  name: "ElsScrollBar"
}, a8 = /* @__PURE__ */ $e({
  ...i8,
  props: {
    direction: { default: "vertical" }
  },
  setup(e) {
    const n = e, { direction: r } = n, i = X(), s = L(() => {
      if (i.value)
        return i.value.parentElement;
    }), l = L(() => {
      const S = { width: 0, height: 0 };
      if (s.value) {
        const { offsetWidth: w, offsetHeight: E } = s.value;
        S.width = w, S.height = E;
      }
      return S;
    });
    L(() => {
      if (!s.value)
        return [];
      const { children: S } = s.value;
      Array.from(S).filter((w) => !w.className.includes("els-scroll-bar"));
    });
    const c = L(() => {
      if (!s.value)
        return { width: 0, height: 0 };
      let S = [], w = [];
      const { children: E } = s.value, m = Array.from(E);
      return S = m.map((_) => _.offsetWidth), w = m.map((_) => _.offsetHeight), console.log(m, S, w), { width: ue.exports.sum(S), height: ue.exports.sum(w) };
    }), f = L(() => {
      const { width: S, height: w } = b(l), { width: E, height: m } = b(c);
      return r == "vertical" ? m > w : E > S;
    }), d = (S) => {
    }, h = (S) => {
    }, v = (S) => {
    };
    return ut(() => {
    }), (S, w) => Mt((V(), oe("div", {
      ref_key: "elsScrollBarRef",
      ref: i,
      class: Q(["els-scroll-bar", `direction-${b(r)}`]),
      style: At(
        b(r) == "vertical" ? `height:${b(l).height}px` : `width:${b(l).width}px`
      )
    }, [
      fe("div", o8, [
        fe("div", {
          class: "_thumb",
          onMousedown: d,
          onMouseup: v,
          onMousemove: h
        }, [
          Te(S.$slots, "default", {}, void 0, !0)
        ], 32)
      ])
    ], 6)), [
      [Wr, b(f)]
    ]);
  }
});
const s8 = /* @__PURE__ */ Lu(a8, [["__scopeId", "data-v-0d77f244"]]), Ml = {
  install(e) {
    e.component("els-scroll-bar", s8);
  }
}, l8 = {
  name: "ElsPage"
};
const u8 = { class: "els-page" };
function c8(e, n, r, i, s, l) {
  return V(), oe("div", u8, " \u6211\u662F\u62BD\u8C61\u9875\u9762\u7EC4\u4EF6 ");
}
const f8 = /* @__PURE__ */ Lu(l8, [["render", c8], ["__scopeId", "data-v-2aa4e32d"]]), Rl = {
  install(e) {
    e.component("els-page", f8);
  }
};
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var Np;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Np || (Np = {}));
var Dp;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Dp || (Dp = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Wp;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Wp || (Wp = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const d8 = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function p8() {
  return qe(d8);
}
const h8 = /^\s*http/, _v = (e, n, r) => {
  typeof e == "string" && h8.test(e) ? window.open(e, (r == null ? void 0 : r.target) || "_blank") : n == null || n.push(e);
}, x8 = (e, n, r, i) => {
  _v(typeof e == "string" ? $a(e, n) : e, r, i);
}, O8 = (e, n) => {
  e.handle ? e.handle(e) : e.path && _v(e.path, n, e);
}, v8 = (e, n) => {
  const { path: r, fullPath: i } = e;
  let s = n, l = s.length;
  for (; ue.exports.isArray(s) && s.length > 0 && l > 0; )
    for (let c = 0, f = s.length; c < f; c++) {
      const d = s[c], h = d.path;
      if (h) {
        const v = typeof h == "string" ? h : h.path;
        if (r.includes(v) || i.includes(v)) {
          s = d.children || d, l = ue.exports.isArray(s) ? s.length : 0;
          break;
        }
      }
      l--;
    }
  return console.log(s, n), ue.exports.isArray(s) ? "" : String(s.id);
}, g8 = {
  key: 0,
  "aria-hidden": "true",
  class: "svg-icon"
}, m8 = ["href", "fill"], b8 = {
  name: "ElsSvg"
}, wv = /* @__PURE__ */ $e({
  ...b8,
  props: {
    id: null,
    color: { default: "" }
  },
  setup(e) {
    const n = e, { id: r, color: i } = nr(n);
    return (s, l) => typeof b(r) == "string" ? (V(), oe("svg", g8, [
      fe("use", {
        href: `#${b(r)}`,
        fill: b(i)
      }, null, 8, m8)
    ])) : (V(), Me(In(b(r)), { key: 1 }));
  }
}), Ll = {
  install(e) {
    e.component("els-svg", wv);
  }
}, y8 = (e, n) => {
  const r = ru(), i = (r == null ? void 0 : r.elMenu) || {}, s = e.menus, l = qn(e, "collapse"), c = n.currentId, f = (w) => {
    switch (w.elem.type || "item") {
      case "group":
        return _4;
      case "sub":
        return w4;
      case "item":
        return Bp;
    }
    return Bp;
  }, d = X();
  return {
    elem: {
      ...i,
      ref: (w) => d.value = w,
      ":collapse": l,
      ":defaultActive": c,
      tag: y4,
      cls: s
    },
    context: {
      tag: f,
      setup: (w, { tagname: E }) => {
        const m = ue.exports.camelCase(E);
        if (!["elMenuItem", "elSubMenu", "elMenuItemGroup"].includes(m))
          return {};
        const _ = w.elem, O = _ == null ? void 0 : _.icon, C = _.title || _.label, N = _.path, k = { index: String(_.id) }, R = [
          { tag: Hn, "v-if": O != null, cls: { tag: wv, id: O } },
          { tag: "span", cls: C }
        ];
        return m === "elMenuItem" ? (k.cls = R, k["@click"] = () => n.handleSelect(_)) : k.cls = {
          tag: "div",
          class: "_title-slot",
          "#title": !0,
          cls: R
        }, {
          prop: k,
          excludeKeys: ["id", "type", "title", "icon", "path"],
          path: N
        };
      }
    },
    menuRef: d
  };
}, _8 = { class: "els-menu" }, w8 = /* @__PURE__ */ $e({
  __name: "index",
  props: {
    menus: { default: () => [] },
    collapse: { default: !1 },
    context: { default: () => ({}) },
    initMenu: null,
    UIPluging: null
  },
  emits: ["init-menu", "change", "select"],
  setup(e, { expose: n, emit: r }) {
    const i = e, s = X(""), l = p8(), c = i.initMenu || v8;
    s.value = c(l, i.menus);
    const f = (v) => {
      console.log("=========", v), s.value !== String(v.id) && (s.value = String(v.id), r("change", v));
    }, h = (i.UIPluging || y8)(i, { currentId: s, handleSelect: f });
    return n({ ...h, currentId: s, handleSelect: f }), (v, S) => (V(), oe("div", _8, [
      lt(b(iu), {
        elem: b(h).elem,
        context: b(h).context
      }, null, 8, ["elem", "context"])
    ]));
  }
}), Fl = {
  install(e) {
    e.component("els-menu", w8);
  }
}, T8 = {
  install(e) {
    var n, r, i, s, l, c, f;
    (n = cl.install) == null || n.call(cl, e), (r = $l.install) == null || r.call($l, e), (i = Pl.install) == null || i.call(Pl, e), (s = Ml.install) == null || s.call(Ml, e), (l = Rl.install) == null || l.call(Rl, e), (c = Fl.install) == null || c.call(Fl, e), (f = Ll.install) == null || f.call(Ll, e);
  }
};
export {
  iu as ElsElem,
  cl as ElsElemPlugin,
  r8 as ElsExpBox,
  Pl as ElsExpBoxPlugin,
  Y4 as ElsForm,
  $l as ElsFormPlugin,
  w8 as ElsMenu,
  Fl as ElsMenuPlugin,
  f8 as ElsPage,
  Rl as ElsPagePlugin,
  s8 as ElsScrollBar,
  Ml as ElsScrollBarPlugin,
  wv as ElsSvg,
  Ll as ElsSvgPlugin,
  T8 as default,
  Wl as defaultRender,
  Ow as getDestruct,
  mw as getElemAttrs,
  xw as getExpValue,
  bw as getSlotName,
  v8 as initMenu,
  gw as isHtmlTag,
  _v as jump,
  x8 as jumpFromTempalte,
  O8 as menuJump,
  ww as parseDirective,
  E8 as propsFilter,
  pd as specialRender
};
