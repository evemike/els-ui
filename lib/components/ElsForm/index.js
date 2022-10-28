"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsForm = require("./src/index");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsForm__default = /* @__PURE__ */ _interopDefaultLegacy(ElsForm);
const ElsFormPlugin = {
  install(app) {
    app.component("els-form", ElsForm__default.default);
  }
};
Object.defineProperty(exports, "ElsForm", {
  enumerable: true,
  get: () => ElsForm__default.default
});
exports.ElsFormPlugin = ElsFormPlugin;
