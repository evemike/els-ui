import { isDate, isNumber } from "lodash";
const getDate = (d) => {
  if (d == void 0) {
    return new Date();
  }
  if (isDate(d)) {
    return d;
  }
  if (isNumber(d)) {
    return new Date(d);
  }
  if (/^\d+$/.test(d)) {
    return new Date(Number(d));
  }
  try {
    return new Date(d);
  } catch (e) {
    console.error("getDate ===> ", e);
  }
  return new Date();
};
const dateFormate = (fmt, d) => {
  const date = getDate(d);
  const o = {
    "Y+": date.getFullYear(),
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  for (const k in o) {
    const ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? String(o[k]) : String(o[k]).padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};
const registerFormat = () => {
  Date.prototype.format = function(fmt) {
    return dateFormate(fmt, this);
  };
};
export {
  dateFormate,
  getDate,
  registerFormat
};
