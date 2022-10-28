"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const getSwitchAttr = (attr, value, trans) => {
  if (trans) {
    return trans(attr, value);
  }
  if (typeof attr == "boolean") {
    return value ? { ...value, enabled: attr } : { enabled: attr };
  }
  return value ? { ...value, ...attr } : attr;
};
exports.getSwitchAttr = getSwitchAttr;
