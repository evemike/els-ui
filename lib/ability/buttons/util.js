"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const i18n = require("../../i18n");
const iconsVue = require("@element-plus/icons-vue");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const i18n__default = /* @__PURE__ */ _interopDefaultLegacy(i18n);
const $t = i18n__default.default.global.d;
const DEFAULT_OPERATES = {
  add: { icon: iconsVue.Plus, cls: $t("ELSUI_USEBUTTONS.add"), type: "primary" },
  edit: { icon: iconsVue.EditPen, cls: $t("ELSUI_USEBUTTONS.edit") },
  view: { icon: iconsVue.View, cls: $t("ELSUI_USEBUTTONS.view") },
  delete: { icon: iconsVue.Delete, cls: $t("ELSUI_USEBUTTONS.delete"), type: "danger" },
  deletes: { icon: iconsVue.Delete, cls: $t("ELSUI_USEBUTTONS.deletes"), type: "danger" },
  import: { icon: iconsVue.Upload, cls: $t("ELSUI_USEBUTTONS.import") },
  upload: { icon: iconsVue.Upload, cls: $t("ELSUI_USEBUTTONS.upload") },
  export: { icon: iconsVue.Download, cls: $t("ELSUI_USEBUTTONS.export") },
  download: { icon: iconsVue.Download, cls: $t("ELSUI_USEBUTTONS.download") },
  search: { icon: iconsVue.Search, cls: $t("ELSUI_USEBUTTONS.search"), type: "primary" },
  reset: { icon: iconsVue.Refresh, cls: $t("ELSUI_USEBUTTONS.reset") }
};
exports.DEFAULT_OPERATES = DEFAULT_OPERATES;
