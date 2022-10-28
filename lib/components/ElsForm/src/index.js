"use strict";
const vue = require("vue");
const useFormPluging = require("./elementPlus");
const ElsElem = require("../../ElsElem");
const lodash = require("lodash");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const useFormPluging__default = /* @__PURE__ */ _interopDefaultLegacy(useFormPluging);
const _hoisted_1 = { class: "els-form" };
const __default__ = {
  name: "ElsForm"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    modelValue: null,
    column: null,
    size: { default: "small" },
    UIPluging: null,
    autoClean: { default: true }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const slots = vue.useSlots();
    const formData = vue.ref({});
    const emitChange = (prop, val) => {
      emits("change", prop, val);
      emits("update:modelValue", vue.unref(formData));
    };
    vue.onMounted(() => {
      emits("update:modelValue", vue.unref(formData));
    });
    vue.watch(vue.toRef(props, "modelValue"), (v) => {
      formData.value = v;
    });
    const formProps = vue.reactive(/* @__PURE__ */ new Set());
    const UIConfig = { formProps, formData, emitChange };
    const pluging = props.UIPluging || useFormPluging__default.default;
    const formUI = pluging(props, UIConfig, { slots });
    if (props.autoClean) {
      let formPropsCache = [];
      vue.onMounted(() => {
        formPropsCache = Array.from(formProps);
      });
      vue.onBeforeUnmount(() => {
        formPropsCache = [];
        formProps.clear();
      });
      vue.watch(formProps, (v) => {
        const arr = Array.from(v);
        const da = lodash.difference(formPropsCache, arr);
        if (da.length > 0) {
          da.forEach((p) => lodash.unset(vue.unref(formData), p));
          formPropsCache = arr;
          emits("update:modelValue", vue.unref(formData));
        }
      });
    }
    const submit = async (call = (k, v) => v == void 0 ? void 0 : [k, v]) => {
      try {
        await formUI.validate();
      } catch (e) {
        console.error("\u8868\u5355\u6821\u9A8C\u5931\u8D25\uFF01====>", e);
      }
      const res = {};
      for (const k in formProps) {
        const v = lodash.get(vue.unref(formData), k);
        const r = call(k, v);
        if (r != void 0) {
          const [key, val] = r;
          lodash.set(res, key, val);
        }
      }
      return res;
    };
    expose({ ...formUI, formProps, submit });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(vue.unref(ElsElem.ElsElem), {
          elem: vue.unref(formUI).elem,
          context: vue.unref(formUI).context
        }, null, 8, ["elem", "context"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
module.exports = _sfc_main;
