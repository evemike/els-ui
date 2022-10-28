"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsSvg = require("./src/index");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsSvg__default = /* @__PURE__ */ _interopDefaultLegacy(ElsSvg);
const ElsSvgPlugin = {
  install(app) {
    app.component("els-svg", ElsSvg__default.default);
  }
};
Object.defineProperty(exports, "ElsSvg", {
  enumerable: true,
  get: () => ElsSvg__default.default
});
exports.ElsSvgPlugin = ElsSvgPlugin;
