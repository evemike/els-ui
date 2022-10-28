"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsMenu = require("./src/index");
const inter = require("./src/inter");
const util = require("./src/util");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsMenu__default = /* @__PURE__ */ _interopDefaultLegacy(ElsMenu);
const ElsMenuPlugin = {
  install(app) {
    app.component("els-menu", ElsMenu__default.default);
  }
};
Object.defineProperty(exports, "ElsMenu", {
  enumerable: true,
  get: () => ElsMenu__default.default
});
exports.ElsMenuPlugin = ElsMenuPlugin;
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
