import { createI18n } from "vue-i18n";
import { getLocal } from "../utils/storage";
import zhLocale from "element-plus/es/locale/lang/zh-cn";
import enLocale from "element-plus/es/locale/lang/en";
import cn from "./lang/zh-cn";
import { default as default2 } from "./lang/zh-cn";
import en from "./lang/en";
import { default as default3 } from "./lang/en";
const i18n = createI18n({
  legacy: false,
  locale: getLocal("i18nLocal") || "zh-cn",
  messages: {
    "zh-cn": Object.assign({}, cn, zhLocale),
    en: Object.assign({}, en, enLocale)
  }
});
export {
  i18n as default,
  default3 as en,
  default2 as zhcn
};
