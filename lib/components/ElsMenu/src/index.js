"use strict";
const vue = require("vue");
const vueRouter = require("vue-router");
const ElsElem = require("../../ElsElem");
const util = require("./util");
const useElMenu = require("./elementPlus");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const useElMenu__default = /* @__PURE__ */ _interopDefaultLegacy(useElMenu);
const _hoisted_1 = { class: "els-menu" };
const __default__ = {
  name: "ElsMenuElem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    menus: { default: () => [] },
    collapse: { default: false },
    context: { default: () => ({}) },
    initMenu: null,
    UIPluging: null
  },
  emits: ["init-menu", "change", "select"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const currentId = vue.ref("");
    const route = vueRouter.useRoute();
    const initMenuFun = props.initMenu || util.initMenu;
    currentId.value = initMenuFun(route, props.menus);
    const handleSelect = (menu) => {
      emits("select", menu);
      if (currentId.value !== String(menu.id)) {
        currentId.value = String(menu.id);
        emits("change", menu);
      }
    };
    const UIPluging = props.UIPluging || useElMenu__default.default;
    const menuUI = UIPluging(props, { currentId, handleSelect });
    expose({ ...menuUI, currentId, handleSelect });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(vue.unref(ElsElem.ElsElem), {
          elem: vue.unref(menuUI).elem,
          context: vue.unref(menuUI).context
        }, null, 8, ["elem", "context"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_7d9fb007_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d9fb007"]]);
module.exports = index;
