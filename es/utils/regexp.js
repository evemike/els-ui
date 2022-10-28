import { has, get } from "lodash";
const RegEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const RegPhone = /^(1[0-9][0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
const RegHTTPURL = /^https?:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/;
const RegTelephone = /^(\d{3}-\d{8})|(\d{4}-\d{7})$/;
const RegIDCard = /^\d{15}|\d{18}$/;
const RegIP = /^((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))$/;
const RegChinese = /^[\u4e00-\u9fa5]+$/;
const RegOneText = /^[\w\u4e00-\u9fa5]+$/;
const RegNoSignOneText = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
const loopExec = (reg, str, call) => {
  let t;
  while ((t = reg.exec(str)) !== null) {
    call(t);
  }
};
const DEFAULT_TEMP_REG = /\{\{\s*(\w+)\s*\}\}/g;
const getTempValue = (str, ctx = {}, reg = DEFAULT_TEMP_REG) => {
  let res = str;
  loopExec(reg, str, ([s, k]) => {
    if (has(ctx, k)) {
      res = res.replace(s, get(ctx, k));
    }
  });
  return res;
};
export {
  RegChinese,
  RegEmail,
  RegHTTPURL,
  RegIDCard,
  RegIP,
  RegNoSignOneText,
  RegOneText,
  RegPhone,
  RegTelephone,
  getTempValue,
  loopExec
};
