"use strict";
const base = require("./en/base");
const page = require("./en/page");
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
const page__namespace = /* @__PURE__ */ _interopNamespace(page);
const en = {
  ...base__namespace,
  ...page__namespace
};
module.exports = en;
