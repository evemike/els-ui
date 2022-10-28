"use strict";
const vue = require("vue");
const lodash = require("lodash");
const _hoisted_1 = { class: "_track" };
const __default__ = {
  name: "ElsScrollBar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    direction: { default: "vertical" }
  },
  setup(__props) {
    const props = __props;
    const { direction } = props;
    const elsScrollBarRef = vue.ref();
    const parentElem = vue.computed(() => {
      if (elsScrollBarRef.value) {
        return elsScrollBarRef.value.parentElement;
      }
      return void 0;
    });
    const parentSize = vue.computed(() => {
      const res = { width: 0, height: 0 };
      if (parentElem.value) {
        const { offsetWidth, offsetHeight } = parentElem.value;
        res.width = offsetWidth;
        res.height = offsetHeight;
      }
      return res;
    });
    vue.computed(() => {
      if (!parentElem.value) {
        return [];
      }
      const { children } = parentElem.value;
      Array.from(children).filter((e) => !e.className.includes("els-scroll-bar"));
    });
    const contentSize = vue.computed(() => {
      if (!parentElem.value) {
        return { width: 0, height: 0 };
      }
      let ws = [];
      let hs = [];
      const { children } = parentElem.value;
      const elements = Array.from(children);
      ws = elements.map((e) => e.offsetWidth);
      hs = elements.map((e) => e.offsetHeight);
      console.log(elements, ws, hs);
      return { width: lodash.sum(ws), height: lodash.sum(hs) };
    });
    const isShow = vue.computed(() => {
      const { width: bw, height: bh } = vue.unref(parentSize);
      const { width: cw, height: ch } = vue.unref(contentSize);
      if (direction == "vertical") {
        return ch > bh;
      }
      return cw > bw;
    });
    const handleMouseDown = (e) => {
    };
    const handleMouseMove = (e) => {
    };
    const handleMouseUp = (e) => {
    };
    vue.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "elsScrollBarRef",
        ref: elsScrollBarRef,
        class: vue.normalizeClass(["els-scroll-bar", `direction-${vue.unref(direction)}`]),
        style: vue.normalizeStyle(
          vue.unref(direction) == "vertical" ? `height:${vue.unref(parentSize).height}px` : `width:${vue.unref(parentSize).width}px`
        )
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.createElementVNode("div", {
            class: "_thumb",
            onMousedown: handleMouseDown,
            onMouseup: handleMouseUp,
            onMousemove: handleMouseMove
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 32)
        ])
      ], 6)), [
        [vue.vShow, vue.unref(isShow)]
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0d77f244_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d77f244"]]);
module.exports = index;
