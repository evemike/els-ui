"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vueI18n = require("vue-i18n");
const storage = require("../utils/storage");
const zhLocale = require("element-plus/es/locale/lang/zh-cn");
const enLocale = require("element-plus/es/locale/lang/en");
const cn = require("./lang/zh-cn");
const en = require("./lang/en");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const zhLocale__default = /* @__PURE__ */ _interopDefaultLegacy(zhLocale);
const enLocale__default = /* @__PURE__ */ _interopDefaultLegacy(enLocale);
const cn__default = /* @__PURE__ */ _interopDefaultLegacy(cn);
const en__default = /* @__PURE__ */ _interopDefaultLegacy(en);
const i18n = vueI18n.createI18n({
  legacy: false,
  locale: storage.getLocal("i18nLocal") || "zh-cn",
  messages: {
    "zh-cn": Object.assign({}, cn__default.default, zhLocale__default.default),
    en: Object.assign({}, en__default.default, enLocale__default.default)
  }
});
Object.defineProperty(exports, "zhcn", {
  enumerable: true,
  get: () => cn__default.default
});
Object.defineProperty(exports, "en", {
  enumerable: true,
  get: () => en__default.default
});
exports.default = i18n;
