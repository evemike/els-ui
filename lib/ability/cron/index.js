"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const util = require("./util");
function useCron(value, layout) {
  const cronText = vue.ref(value != null ? value : "");
  const cronData = vue.ref({});
  let isMounted = false;
  let isChangeText = true;
  let cacheText = "0 0 0 * * ? *";
  const tabElem = util.createElem(layout);
  const column = [tabElem];
  const resetCronText = (v) => {
    cacheText = v;
    cronText.value = v;
  };
  if (value) {
    cacheText = value;
  } else {
    cronText.value = cacheText;
  }
  cronData.value = util.createCronData(cacheText);
  vue.watch(
    cronData,
    () => {
      if (!isMounted || !isChangeText) {
        setTimeout(() => {
          isChangeText = true;
        }, 50);
        return;
      }
      const t = util.createCronText(cronData);
      if (t !== cacheText) {
        resetCronText(t);
      }
    },
    { deep: true }
  );
  vue.watch(cronText, (v) => {
    if (v != cacheText) {
      const d = util.createCronData(v);
      cacheText = v;
      isChangeText = false;
      cronData.value = d;
    }
  });
  vue.onMounted(() => {
    isMounted = true;
  });
  return { cronData, cronText, column, validator: util.validator };
}
exports.default = useCron;
for (const k in util) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => util[k]
    });
}
