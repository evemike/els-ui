import { ElMessage, ElMessageBox, ElAlert, ElPopover, ElButton } from "element-plus";
import { InfoFilled } from "@element-plus/icons-vue";
const tipBase = (option, appContext) => {
  ElMessage(option, appContext);
};
const tipSuccess = (tipText, appContext) => {
  const options = {
    message: tipText,
    type: "success"
  };
  tipBase(options, appContext);
};
const tipWarning = (tipText, appContext) => {
  const options = {
    message: tipText,
    type: "warning"
  };
  tipBase(options, appContext);
};
const tipInfo = (tipText, appContext) => {
  const options = {
    message: tipText,
    type: "info"
  };
  tipBase(options, appContext);
};
const tipError = (tipText, appContext) => {
  const options = {
    message: tipText,
    type: "error"
  };
  tipBase(options, appContext);
};
const TIP_TEXT_LIB = { add: "\u65B0\u589E", edit: "\u7F16\u8F91", delete: "\u5220\u9664", other: "\u64CD\u4F5C", validate: "\u8868\u5355\u9A8C\u8BC1" };
const TIP_TYPE_TEXT = { success: "\u6210\u529F", warning: "\u8B66\u544A", info: "\u63D0\u793A", error: "\u5931\u8D25" };
const tip = (tipName = "other", type = "success", tipText) => {
  const message = tipText != null ? tipText : Object.keys(TIP_TEXT_LIB).includes(tipName) ? TIP_TEXT_LIB[tipName] : tipName;
  tipBase({ message, type });
};
const CONFIRM_TEXT_LIB = { delete: "\u662F\u5426\u5220\u9664\u6570\u636E : " };
const confirm = (info = "", tip2 = "delete", type = "warning", title = "") => {
  return ElMessageBox.confirm(
    `${Object.keys(CONFIRM_TEXT_LIB).includes(tip2) ? CONFIRM_TEXT_LIB[tip2] : tip2} ${info} ?`,
    title || TIP_TYPE_TEXT[type],
    {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88",
      type: "warning"
    }
  );
};
const elemTip = (info) => {
  let infoElem = [];
  if (typeof info === "string") {
    infoElem = info.split("/br").map((s) => ({ tag: ElAlert, closable: false, type: "info", title: s }));
  } else {
    infoElem = [info];
  }
  return {
    tag: ElPopover,
    class: "els-form--tip-popover",
    popperClass: "els-form--tip-popover-popper",
    trigger: "hover",
    placement: "top",
    width: "auto",
    cls: [
      {
        tag: ElButton,
        slot: "reference",
        class: "els-form--tip-button",
        link: true,
        icon: InfoFilled
      },
      ...infoElem
    ]
  };
};
export {
  confirm,
  elemTip,
  tip,
  tipBase,
  tipError,
  tipInfo,
  tipSuccess,
  tipWarning
};
