"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsElem = require("./src/index");
const inter = require("./src/inter");
const util = require("./src/util");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsElem__default = /* @__PURE__ */ _interopDefaultLegacy(ElsElem);
const ElsElemPlugin = {
  install(app) {
    app.component("els-elem", ElsElem__default.default);
  }
};
Object.defineProperty(exports, "ElsElem", {
  enumerable: true,
  get: () => ElsElem__default.default
});
exports.ElsElemPlugin = ElsElemPlugin;
for (const k in inter) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => inter[k]
    });
}
for (const k in util) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => util[k]
    });
}
