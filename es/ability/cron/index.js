import { ref, watch, onMounted } from "vue";
import { createElem, createCronData, validator, createCronText } from "./util";
export * from "./util";
function useCron(value, layout) {
  const cronText = ref(value != null ? value : "");
  const cronData = ref({});
  let isMounted = false;
  let isChangeText = true;
  let cacheText = "0 0 0 * * ? *";
  const tabElem = createElem(layout);
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
  cronData.value = createCronData(cacheText);
  watch(
    cronData,
    () => {
      if (!isMounted || !isChangeText) {
        setTimeout(() => {
          isChangeText = true;
        }, 50);
        return;
      }
      const t = createCronText(cronData);
      if (t !== cacheText) {
        resetCronText(t);
      }
    },
    { deep: true }
  );
  watch(cronText, (v) => {
    if (v != cacheText) {
      const d = createCronData(v);
      cacheText = v;
      isChangeText = false;
      cronData.value = d;
    }
  });
  onMounted(() => {
    isMounted = true;
  });
  return { cronData, cronText, column, validator };
}
export {
  useCron as default
};
