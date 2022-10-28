"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsScrollBar = require("./src/index");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsScrollBar__default = /* @__PURE__ */ _interopDefaultLegacy(ElsScrollBar);
const ElsScrollBarPlugin = {
  install(app) {
    app.component("els-scroll-bar", ElsScrollBar__default.default);
  }
};
Object.defineProperty(exports, "ElsScrollBar", {
  enumerable: true,
  get: () => ElsScrollBar__default.default
});
exports.ElsScrollBarPlugin = ElsScrollBarPlugin;
