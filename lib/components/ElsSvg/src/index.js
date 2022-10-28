"use strict";
const vue = require("vue");
const _hoisted_1 = {
  key: 0,
  "aria-hidden": "true",
  class: "svg-icon"
};
const _hoisted_2 = ["href", "fill"];
const __default__ = {
  name: "ElsSvg"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    id: null,
    color: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { id, color } = vue.toRefs(props);
    return (_ctx, _cache) => {
      return typeof vue.unref(id) === "string" ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
        vue.createElementVNode("use", {
          href: `#${vue.unref(id)}`,
          fill: vue.unref(color)
        }, null, 8, _hoisted_2)
      ])) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(id)), { key: 1 }));
    };
  }
});
module.exports = _sfc_main;
