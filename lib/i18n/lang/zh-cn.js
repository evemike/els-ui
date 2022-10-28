"use strict";
const base = require("./zh-cn/base");
const error = require("./zh-cn/error");
const dict = require("./zh-cn/dict");
const els = require("./zh-cn/els");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const base__namespace = /* @__PURE__ */ _interopNamespace(base);
const error__namespace = /* @__PURE__ */ _interopNamespace(error);
const dict__namespace = /* @__PURE__ */ _interopNamespace(dict);
const els__namespace = /* @__PURE__ */ _interopNamespace(els);
const zhCn = {
  ...base__namespace,
  ...error__namespace,
  ...dict__namespace,
  ...els__namespace
};
module.exports = zhCn;
