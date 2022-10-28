const saveLocal = (key, val) => {
  const t = typeof val;
  if (t === "object") {
    localStorage.setItem(key, JSON.stringify(val));
  } else {
    localStorage.setItem(key, val);
  }
};
function getLocal(key, isObj) {
  const v = localStorage.getItem(key);
  switch (v) {
    case "null":
      return null;
    case "undefined":
      return null;
  }
  let res = v;
  if (isObj && v) {
    res = JSON.parse(v);
  }
  return res;
}
const clearLocal = () => {
  localStorage.clear();
};
export {
  clearLocal,
  getLocal,
  saveLocal
};
