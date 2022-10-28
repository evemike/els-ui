import { defineComponent, toRefs, unref, openBlock, createElementBlock, createElementVNode, createBlock, resolveDynamicComponent } from "vue";
const _hoisted_1 = {
  key: 0,
  "aria-hidden": "true",
  class: "svg-icon"
};
const _hoisted_2 = ["href", "fill"];
const __default__ = {
  name: "ElsSvg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    id: null,
    color: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { id, color } = toRefs(props);
    return (_ctx, _cache) => {
      return typeof unref(id) === "string" ? (openBlock(), createElementBlock("svg", _hoisted_1, [
        createElementVNode("use", {
          href: `#${unref(id)}`,
          fill: unref(color)
        }, null, 8, _hoisted_2)
      ])) : (openBlock(), createBlock(resolveDynamicComponent(unref(id)), { key: 1 }));
    };
  }
});
export {
  _sfc_main as default
};
