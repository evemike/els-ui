const getSwitchAttr = (attr, value, trans) => {
  if (trans) {
    return trans(attr, value);
  }
  if (typeof attr == "boolean") {
    return value ? { ...value, enabled: attr } : { enabled: attr };
  }
  return value ? { ...value, ...attr } : attr;
};
export {
  getSwitchAttr
};
