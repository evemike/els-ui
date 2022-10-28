import { defineComponent, useSlots, ref, onMounted, unref, watch, toRef, reactive, onBeforeUnmount, openBlock, createElementBlock, createVNode } from "vue";
import useFormPluging from "./elementPlus";
import { ElsElem } from "../../ElsElem";
import { difference, unset, get, set } from "lodash";
const _hoisted_1 = { class: "els-form" };
const __default__ = {
  name: "ElsForm"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const slots = useSlots();
    const formData = ref({});
    const emitChange = (prop, val) => {
      emits("change", prop, val);
      emits("update:modelValue", unref(formData));
    };
    onMounted(() => {
      emits("update:modelValue", unref(formData));
    });
    watch(toRef(props, "modelValue"), (v) => {
      formData.value = v;
    });
    const formProps = reactive(/* @__PURE__ */ new Set());
    const UIConfig = { formProps, formData, emitChange };
    const pluging = props.UIPluging || useFormPluging;
    const formUI = pluging(props, UIConfig, { slots });
    if (props.autoClean) {
      let formPropsCache = [];
      onMounted(() => {
        formPropsCache = Array.from(formProps);
      });
      onBeforeUnmount(() => {
        formPropsCache = [];
        formProps.clear();
      });
      watch(formProps, (v) => {
        const arr = Array.from(v);
        const da = difference(formPropsCache, arr);
        if (da.length > 0) {
          da.forEach((p) => unset(unref(formData), p));
          formPropsCache = arr;
          emits("update:modelValue", unref(formData));
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
        const v = get(unref(formData), k);
        const r = call(k, v);
        if (r != void 0) {
          const [key, val] = r;
          set(res, key, val);
        }
      }
      return res;
    };
    expose({ ...formUI, formProps, submit });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElsElem), {
          elem: unref(formUI).elem,
          context: unref(formUI).context
        }, null, 8, ["elem", "context"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
