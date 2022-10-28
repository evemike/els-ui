import { camelCase } from "lodash";
const getCSSStyle = (elem) => {
  return window.getComputedStyle(elem);
};
const getElemStyleValue = (elem, key = []) => {
  const so = getCSSStyle(elem);
  const res = {};
  const keys = new Array().concat(key);
  for (const k of keys) {
    const val = so.getPropertyValue(k);
    const key2 = camelCase(k);
    res[key2] = val;
  }
  return res;
};
export {
  getCSSStyle,
  getElemStyleValue
};
