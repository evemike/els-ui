"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsExpBox = require("./src/index");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElsExpBox__default = /* @__PURE__ */ _interopDefaultLegacy(ElsExpBox);
const ElsExpBoxPlugin = {
  install(app) {
    app.component("els-exp-box", ElsExpBox__default.default);
  }
};
Object.defineProperty(exports, "ElsExpBox", {
  enumerable: true,
  get: () => ElsExpBox__default.default
});
exports.ElsExpBoxPlugin = ElsExpBoxPlugin;
