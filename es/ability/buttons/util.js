import i18n from "../../i18n";
import { Plus, EditPen, View, Delete, Upload, Download, Search, Refresh } from "@element-plus/icons-vue";
const $t = i18n.global.d;
const DEFAULT_OPERATES = {
  add: { icon: Plus, cls: $t("ELSUI_USEBUTTONS.add"), type: "primary" },
  edit: { icon: EditPen, cls: $t("ELSUI_USEBUTTONS.edit") },
  view: { icon: View, cls: $t("ELSUI_USEBUTTONS.view") },
  delete: { icon: Delete, cls: $t("ELSUI_USEBUTTONS.delete"), type: "danger" },
  deletes: { icon: Delete, cls: $t("ELSUI_USEBUTTONS.deletes"), type: "danger" },
  import: { icon: Upload, cls: $t("ELSUI_USEBUTTONS.import") },
  upload: { icon: Upload, cls: $t("ELSUI_USEBUTTONS.upload") },
  export: { icon: Download, cls: $t("ELSUI_USEBUTTONS.export") },
  download: { icon: Download, cls: $t("ELSUI_USEBUTTONS.download") },
  search: { icon: Search, cls: $t("ELSUI_USEBUTTONS.search"), type: "primary" },
  reset: { icon: Refresh, cls: $t("ELSUI_USEBUTTONS.reset") }
};
export {
  DEFAULT_OPERATES
};
