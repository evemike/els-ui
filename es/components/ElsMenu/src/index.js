import { defineComponent, ref, openBlock, createElementBlock, createVNode, unref } from "vue";
import { useRoute } from "vue-router";
import { ElsElem } from "../../ElsElem";
import { initMenu } from "./util";
import useElMenu from "./elementPlus";
const _hoisted_1 = { class: "els-menu" };
const __default__ = {
  name: "ElsMenuElem"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const currentId = ref("");
    const route = useRoute();
    const initMenuFun = props.initMenu || initMenu;
    currentId.value = initMenuFun(route, props.menus);
    const handleSelect = (menu) => {
      emits("select", menu);
      if (currentId.value !== String(menu.id)) {
        currentId.value = String(menu.id);
        emits("change", menu);
      }
    };
    const UIPluging = props.UIPluging || useElMenu;
    const menuUI = UIPluging(props, { currentId, handleSelect });
    expose({ ...menuUI, currentId, handleSelect });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElsElem), {
          elem: unref(menuUI).elem,
          context: unref(menuUI).context
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
export {
  index as default
};