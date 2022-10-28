import { isBoolean, isObject, isArray } from "lodash";
const getOption = (d, attr = {}, config = {}) => {
  const keys = Object.assign({ bool: "enabled", data: "data" }, config);
  const bool = isBoolean(d) ? d : d == void 0 ? false : true;
  const res = isObject(d) ? { ...attr, ...d } : { ...attr };
  if (isObject(d)) {
    return res;
  }
  res[keys.bool] = bool;
  if (isArray(d)) {
    res[keys.data] = d;
  } else if (config.default != void 0) {
    res[keys.data] = config.default;
  }
  if (res[keys.data] == void 0 || res[keys.data].length == 0) {
    res[keys.bool] = false;
  }
  return res;
};
export {
  getOption
};
