"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsPage = require("./src/index");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsPage__default = /* @__PURE__ */ _interopDefaultLegacy(ElsPage);
const ElsPagePlugin = {
  install(app) {
    app.component("els-page", ElsPage__default.default);
  }
};
Object.defineProperty(exports, "ElsPage", {
  enumerable: true,
  get: () => ElsPage__default.default
});
exports.ElsPagePlugin = ElsPagePlugin;
