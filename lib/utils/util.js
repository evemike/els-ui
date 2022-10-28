"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const lodash = require("lodash");
const has = Object.prototype.hasOwnProperty;
const getType = (o) => {
  const t = Object.prototype.toString.call(o);
  const res = /^\[object (.*)\]$/.exec(t);
  return res === null ? "null" : res[1].toLowerCase();
};
const HTML_TAGS = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
const isHtmlTag = (tag) => HTML_TAGS.includes(tag);
const ExtKeys = ["this"];
const doEval = (s = "", obj = {}, isGetRefValue = false) => {
  try {
    const keys2 = Object.keys(obj).filter((k) => !ExtKeys.includes(k));
    const vals = keys2.map((k) => isGetRefValue ? vue.unref(obj[k]) : obj[k]);
    const str = "return " + s;
    return new Function(...keys2, str)(...vals);
  } catch (e) {
    console.error(e);
  }
  return void 0;
};
const getRefValue = (obj) => {
  if (typeof obj === "object" && obj && obj.__v_isRef === true) {
    return obj.value;
  }
  return obj;
};
const getMenus = (tree) => {
  const fn = (n) => n.type === "menu";
  return treeFilter(tree, fn, { children: "children", isSource: "isSource" });
};
const treeFilter = (tree = [], fn, cfg = { children: "children", isSource: "isSource" }) => {
  const ck = cfg.children || "children";
  const f = (n, l, i, pn, ins) => {
    const bool = fn(n, l, i, pn, ins);
    if (!bool) {
      const it = l.indexOf(n);
      l.splice(it, 1);
      if (pn && pn[ck] && pn[ck].length == 0) {
        delete pn[ck];
      }
    }
  };
  return treeMap(tree, f, cfg);
};
const treeMap = (tree = [], fn, cfg = { isSource: "isSource", children: "children" }) => {
  const isSource = cfg.isSource || false;
  const s = isSource ? tree : clone(tree);
  const ck = cfg.children || "children";
  const f = (list, pna, ins) => {
    [...list].forEach((n, i) => {
      if (n) {
        fn(n, list, i, ins);
        const c = n[ck];
        if (c && c.length > 0) {
          f(c, n, i);
        }
      }
    });
  };
  f(s, void 0, void 0);
  return s;
};
const clone = (obj = {}) => {
  const f = (o) => {
    const t = Array.isArray(o);
    const r = t ? [] : {};
    if (t) {
      o.forEach((v) => {
        const t2 = getType(v);
        if (t2 == "object" || t2 == "array") {
          r.push(f(v));
        } else {
          r.push(v);
        }
      });
    } else if (!t && typeof o === "object") {
      Object.keys(o).forEach((k) => {
        const v = o[k];
        const t2 = getType(v);
        if (t2 == "object" || t2 == "array") {
          r[k] = f(v);
        } else {
          r[k] = v;
        }
      });
    }
    return r;
  };
  return f(obj);
};
const props = {
  id: "id",
  index: "path",
  icon: "icon",
  title: "menuLabel",
  disabled: "disabled",
  children: "children",
  show: "show"
};
const buildMenus = (data) => {
  data = treeFilter(data, (n) => n.show !== false);
  const ks = lodash.keys(props);
  const fn = (item) => {
    const obj = {};
    ks.forEach((k) => {
      const v = props[k];
      const t = typeof v;
      if (t === "string" && Object.prototype.hasOwnProperty.call(item, v)) {
        obj[k] = item[v];
      } else if (t === "function") {
        obj[k] = v(item);
      }
    });
    return obj;
  };
  const tree = treeReset(data, fn);
  const mf = (n, list, i, pn, ins) => {
    const { index, title, children = [] } = n;
    if (title == void 0) {
      list.splice(i, 1, ...children);
    }
    if (index && index.charAt(0) !== "/") {
      if (pn) {
        n.index = pn.index + "/" + n.index;
      } else {
        n.index = "/" + n.index;
      }
    }
  };
  const menus = treeMap(tree, mf);
  return treeReset(menus, (n) => {
    const obj = { ...n };
    if (!obj.tag) {
      if (Array.isArray(obj.children) && obj.children.length > 0) {
        obj.tag = "el-submenu";
        obj.children = [...createTitle(obj), ...obj.children];
      } else {
        obj.tag = "el-menu-item";
        obj.cls = createTitle(obj);
      }
    }
    return obj;
  });
};
const createTitle = (node) => {
  const cls = [];
  if (node.icon) {
    cls.push({ tag: "i", class: node.icon });
  }
  if (node.title) {
    cls.push({ tag: "span", slot: "title", cls: node.title });
  }
  return cls;
};
const treeReset = (tree = [], fn, cfg = { sourceChildren: "sourceChildren", children: "children" }) => {
  const csk = cfg.sourceChildren || cfg.children || "children";
  const ctk = cfg.children || "children";
  const f = (n, l, i, pn, ins) => {
    const o = fn(n, l, i, pn, ins);
    if (!o) {
      l.splice(l.indexOf(n), 1);
      return;
    }
    const c = n[csk];
    const ks = Object.keys(n);
    ks.forEach((k) => delete n[k]);
    const oks = Object.keys(o);
    oks.forEach((k) => n[k] = o[k]);
    if (!o[ctk] && c && c.length > 0) {
      n[ctk] = c;
    }
  };
  return treeMap(tree, f);
};
const parseToken = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replaceAll("-", "+").replaceAll("_", "/");
  const obj = JSON.parse(window.atob(base64));
  return obj;
};
const isAdmin = (userInfo) => {
  return userInfo.scopes[0] == "SYS_ADMIN";
};
const getAssetsFile = (url) => {
  return new URL((/* @__PURE__ */ Object.assign({}))[`../../public/image/${url}`], self.location).href;
};
exports.buildMenus = buildMenus;
exports.clone = clone;
exports.createTitle = createTitle;
exports.doEval = doEval;
exports.getAssetsFile = getAssetsFile;
exports.getMenus = getMenus;
exports.getRefValue = getRefValue;
exports.getType = getType;
exports.has = has;
exports.isAdmin = isAdmin;
exports.isHtmlTag = isHtmlTag;
exports.parseToken = parseToken;
exports.treeFilter = treeFilter;
exports.treeMap = treeMap;
exports.treeReset = treeReset;
