import { useAttrs, toRef, ref } from "vue";
import { ElsSvg } from "../../ElsSvg";
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon } from "element-plus";
import { camelCase } from "lodash";
const useElMenu = (props, cfg) => {
  const attrs = useAttrs();
  const elMenuAttrs = (attrs == null ? void 0 : attrs.elMenu) || {};
  const menus = props.menus;
  const collapse = toRef(props, "collapse");
  const currentId = cfg.currentId;
  const tag = (props2) => {
    const elem2 = props2.elem;
    const type = elem2.type || "item";
    switch (type) {
      case "group":
        return ElMenuItemGroup;
      case "sub":
        return ElSubMenu;
      case "item":
        return ElMenuItem;
    }
    return ElMenuItem;
  };
  const elMenuRef = ref();
  const elem = {
    ...elMenuAttrs,
    ref: (e) => elMenuRef.value = e,
    ":collapse": collapse,
    ":defaultActive": currentId,
    tag: ElMenu,
    cls: menus
  };
  const setup = (props2, { tagname }) => {
    const name = camelCase(tagname);
    if (!["elMenuItem", "elSubMenu", "elMenuItemGroup"].includes(name)) {
      return {};
    }
    const elem2 = props2.elem;
    const icon = elem2 == null ? void 0 : elem2.icon;
    const title = elem2.title || elem2.label;
    const path = elem2.path;
    const index = String(elem2.id);
    const prop = { index };
    const tcls = [
      { tag: ElIcon, "v-if": icon != void 0, cls: { tag: ElsSvg, id: icon } },
      { tag: "span", cls: title }
    ];
    if (name === "elMenuItem") {
      prop.cls = tcls;
      prop["@click"] = () => cfg.handleSelect(elem2);
    } else {
      prop.cls = {
        tag: "div",
        class: "_title-slot",
        "#title": true,
        cls: tcls
      };
    }
    return {
      prop,
      excludeKeys: ["id", "type", "title", "icon", "path"],
      path
    };
  };
  const context = {
    tag,
    setup
  };
  return {
    elem,
    context,
    menuRef: elMenuRef
  };
};
export {
  useElMenu as default
};
