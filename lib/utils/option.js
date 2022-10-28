"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const lodash = require("lodash");
const getOption = (d, attr = {}, config = {}) => {
  const keys = Object.assign({ bool: "enabled", data: "data" }, config);
  const bool = lodash.isBoolean(d) ? d : d == void 0 ? false : true;
  const res = lodash.isObject(d) ? { ...attr, ...d } : { ...attr };
  if (lodash.isObject(d)) {
    return res;
  }
  res[keys.bool] = bool;
  if (lodash.isArray(d)) {
    res[keys.data] = d;
  } else if (config.default != void 0) {
    res[keys.data] = config.default;
  }
  if (res[keys.data] == void 0 || res[keys.data].length == 0) {
    res[keys.bool] = false;
  }
  return res;
};
exports.getOption = getOption;
