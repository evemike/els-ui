"use strict";
const vue = require("vue");
const _hoisted_1 = { class: "els-exp-box" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "els-cursor"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "els-cursor"
};
const __default__ = {
  name: "ElsExpBox"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    modelValue: { default: "" },
    isEdit: { type: Boolean, default: true },
    mode: { default: "text" },
    init: null
  },
  emits: ["init", "update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const boxRef = vue.ref();
    const { modelValue, isEdit, mode } = vue.toRefs(props);
    const isFocus = vue.ref(false);
    let cacheValue = "";
    const leftText = vue.ref([]);
    const rightText = vue.ref([]);
    const cursorMove = (d) => {
      if (!boxRef.value) {
        return;
      }
      const { children } = boxRef.value;
      const index2 = vue.unref(leftText).length;
      const target = children[index2];
      const {
        offsetLeft: x,
        offsetTop: y,
        offsetHeight: h,
        offsetWidth: w,
        tagName
      } = target;
      const my = d == "up" ? y - h / 2 : y + h + h / 2;
      const mx = x;
      my > 0 && resetByPos(mx, my);
    };
    const resetLeftText = (index2) => {
      const t = [...leftText.value, ...rightText.value];
      const ml = t.length;
      if (index2 > ml) {
        index2 = ml;
      } else if (index2 < 0) {
        index2 = ml + 1 - index2;
      }
      const l = t.slice(0, index2);
      const r = t.slice(index2);
      leftText.value = l;
      rightText.value = r;
    };
    const resetByPos = (mx, my) => {
      if (!boxRef.value) {
        return;
      }
      const { children } = boxRef.value;
      let dis = -1;
      let pos = -1;
      let cd = 0;
      for (let i = 0, l = children.length; i < l; i++) {
        const elem = children[i];
        const {
          tagName,
          offsetLeft: x,
          offsetTop: y,
          offsetWidth: w,
          offsetHeight: h
        } = elem;
        if (tagName == "SPAN") {
          cd = i;
        }
        if (tagName == "KBD" && my >= y && my <= y + h) {
          const d = mx - x;
          const td = Math.abs(d);
          if (dis == -1) {
            dis = td;
            pos = d > w / 2 ? i + 1 : i;
          } else if (td < dis) {
            dis = td;
            pos = d > w / 2 ? i + 1 : i;
          }
        }
      }
      if (pos == -1) {
        let dh = 0;
        let di = 0;
        for (let i = 0, l = children.length; i < l; i++) {
          const elem = children[i];
          const { tagName, offsetTop: y, offsetHeight: h } = elem;
          if (h > 0) {
            di = i;
            dh = h;
            dis = y + h;
          } else if (i - di > 1) {
            dis = dis + dh;
          }
          if (my >= dis) {
            pos = i + 1;
          } else {
            break;
          }
        }
      }
      if (pos >= 0 && cd < pos) {
        pos--;
      }
      resetLeftText(pos);
    };
    const handleDivClick = (e) => {
      const { offsetX: mx, offsetY: my } = e;
      resetByPos(mx, my);
    };
    const handleClick = (i, e) => {
      const { offsetX } = e;
      const kbd = e.target;
      let cd = 1;
      if (offsetX && kbd) {
        const { offsetWidth } = kbd;
        if (offsetX < offsetWidth / 2) {
          cd = 0;
        }
      }
      console.log(i);
      resetLeftText(i + cd);
    };
    const handleKeyup = (e) => {
      if (!isEdit.value) {
        return;
      }
      const key = e.key;
      addValue(key);
    };
    const addValue = (val) => {
      console.log("===addValue===>", val);
      switch (val) {
        case "Enter":
          leftText.value.push("\n");
          break;
        case "Space":
          leftText.value.push(" ");
          break;
        case "Backspace":
          leftText.value.pop();
          break;
        case "Delete":
          leftText.value.pop();
          break;
        case "Home":
          resetLeftText(0);
          break;
        case "End":
          resetLeftText(-1);
          break;
        case "ArrowLeft":
          resetLeftText(leftText.value.length - 1);
          break;
        case "ArrowRight":
          resetLeftText(leftText.value.length + 1);
          break;
        case "ArrowUp":
          cursorMove("up");
          break;
        case "ArrowDown":
          cursorMove("down");
          break;
        default:
          leftText.value.push(val);
      }
      emitUpdateModelValue();
    };
    const emitUpdateModelValue = () => {
      const val = [...vue.unref(leftText), ...vue.unref(rightText)].join("");
      cacheValue = val;
      emits("update:modelValue", cacheValue);
    };
    document.onkeydown = (e) => {
      const code = e.code;
      console.log(code);
      const ex = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"];
      if (ex.includes(code)) {
        return false;
      }
    };
    vue.watch(modelValue, (v) => {
      if (v == cacheValue) {
        return;
      }
      cacheValue = v;
      leftText.value = v.split("");
    });
    const params = {
      input: addValue,
      resetPos: resetLeftText
    };
    vue.onMounted(() => {
      emits("init", params);
      if (props.init) {
        props.init(params);
      }
    });
    expose(params);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", {
          ref_key: "boxRef",
          ref: boxRef,
          class: vue.normalizeClass([`_mode-${vue.unref(mode)}`, { "is-focus": isFocus.value }]),
          tabindex: "1",
          onKeydown: handleKeyup,
          onClick: vue.withModifiers(handleDivClick, ["stop"]),
          onFocus: _cache[0] || (_cache[0] = () => isFocus.value = true),
          onFocusout: _cache[1] || (_cache[1] = () => isFocus.value = false)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList([...leftText.value, ...rightText.value], (v, i) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              i == leftText.value.length ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3)) : vue.createCommentVNode("", true),
              v != "\n" ? (vue.openBlock(), vue.createElementBlock("kbd", {
                key: 1,
                onClick: vue.withModifiers((e) => handleClick(i, e), ["stop"]),
                class: vue.normalizeClass(i + "")
              }, vue.toDisplayString(v), 11, _hoisted_4)) : (vue.openBlock(), vue.createElementBlock("br", {
                key: 2,
                class: vue.normalizeClass(i + "")
              }, null, 2))
            ], 64);
          }), 256)),
          rightText.value.length == 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5)) : vue.createCommentVNode("", true)
        ], 42, _hoisted_2)
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c7d48fc8_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7d48fc8"]]);
module.exports = index;
