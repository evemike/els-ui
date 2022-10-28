import { unref, renderSlot, resolveDynamicComponent, createVNode, h } from "vue";
import { isMap, isObject, upperFirst, isArray, get, omit } from "lodash";
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
  const keys = Object.keys(elem);
  const res = { root: {}, directive: {}, prop: {} };
  keys.forEach((k) => {
    var _a, _b;
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
      res.root["slot"] = (_b = (_a = REG_SLOT.exec(k)) == null ? void 0 : _a[1]) != null ? _b : "default";
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
  var _a;
  const keys = Object.keys(elem).filter((k) => REG_SLOT.test(k));
  if (keys.length > 0) {
    return ((_a = REG_SLOT.exec(keys[0])) == null ? void 0 : _a[1]) || "default";
  }
  return "default";
};
const doEval = (s = "", obj = {}, isGetRefValue = false) => {
  try {
    const keys = Object.keys(obj).filter((k) => !ExtKeys.includes(k));
    const vals = keys.map((k) => isGetRefValue ? unref(obj[k]) : obj[k]);
    const str = "return " + s;
    return new Function(...keys, str)(...vals);
  } catch (e) {
    console.error(e);
  }
  return void 0;
};
const ExtKeys = ["this"];
const EventKeys = ["pointerevent"];
const parseDirective = (directive, scope) => {
  const keys = Object.keys(directive);
  const res = { "v-bind": {}, "v-on": {} };
  keys.forEach((k) => {
    var _a, _b;
    let v = directive[k];
    if (typeof v === "string") {
      v = doEval(v, scope, true);
    } else {
      v = unref(v);
    }
    if (REG_BIND.test(k)) {
      const bk = (_a = REG_BIND.exec(k)) != null ? _a : [];
      if (bk[1] == void 0) {
        if (isMap(v)) {
          for (const [tk, tv] of v) {
            if (REG_IS_VUE.test(tk)) {
              res[tk] = tv;
            } else {
              res["v-bind"][tk] = tv;
            }
          }
        } else if (isObject(v)) {
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
        const tk = "on" + upperFirst(ek[1]);
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
const loopExec = (reg, str, call) => {
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
  loopExec(REG_EXP, str, ([s, exp]) => {
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
  if (isArray(s) && REG_ISARRAY.test(str)) {
    const as = REG_ISARRAY.exec(str);
    const ks = (as == null ? void 0 : as[1]) ? as[1].split(",").map((k) => k.trim()) : [];
    ks.forEach((k, i) => {
      res[k] = s == null ? void 0 : s[i];
    });
  } else if (isObject(s) && REG_ISOBJECT.test(str)) {
    const as = REG_ISOBJECT.exec(str);
    const ks = (as == null ? void 0 : as[1]) ? as[1].split(",").map((k) => k.trim()) : [];
    ks.forEach((k) => {
      const [sk, tk] = k.split(":").map((s2) => s2.trim());
      res[tk || sk] = get(s, sk);
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
    var _a;
    const name = props.name || "default";
    delete props.name;
    const childs = (_a = children == null ? void 0 : children[name]) != null ? _a : () => [];
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
  return omit(props, extKeys);
};
export {
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
