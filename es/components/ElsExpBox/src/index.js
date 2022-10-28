import { defineComponent, ref, toRefs, watch, onMounted, openBlock, createElementBlock, createElementVNode, normalizeClass, unref, withModifiers, Fragment, renderList, createCommentVNode, toDisplayString } from "vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const boxRef = ref();
    const { modelValue, isEdit, mode } = toRefs(props);
    const isFocus = ref(false);
    let cacheValue = "";
    const leftText = ref([]);
    const rightText = ref([]);
    const cursorMove = (d) => {
      if (!boxRef.value) {
        return;
      }
      const { children } = boxRef.value;
      const index2 = unref(leftText).length;
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
      const val = [...unref(leftText), ...unref(rightText)].join("");
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
    watch(modelValue, (v) => {
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
    onMounted(() => {
      emits("init", params);
      if (props.init) {
        props.init(params);
      }
    });
    expose(params);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          ref_key: "boxRef",
          ref: boxRef,
          class: normalizeClass([`_mode-${unref(mode)}`, { "is-focus": isFocus.value }]),
          tabindex: "1",
          onKeydown: handleKeyup,
          onClick: withModifiers(handleDivClick, ["stop"]),
          onFocus: _cache[0] || (_cache[0] = () => isFocus.value = true),
          onFocusout: _cache[1] || (_cache[1] = () => isFocus.value = false)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([...leftText.value, ...rightText.value], (v, i) => {
            return openBlock(), createElementBlock(Fragment, null, [
              i == leftText.value.length ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true),
              v != "\n" ? (openBlock(), createElementBlock("kbd", {
                key: 1,
                onClick: withModifiers((e) => handleClick(i, e), ["stop"]),
                class: normalizeClass(i + "")
              }, toDisplayString(v), 11, _hoisted_4)) : (openBlock(), createElementBlock("br", {
                key: 2,
                class: normalizeClass(i + "")
              }, null, 2))
            ], 64);
          }), 256)),
          rightText.value.length == 0 ? (openBlock(), createElementBlock("span", _hoisted_5)) : createCommentVNode("", true)
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
export {
  index as default
};
