import { unref, useAttrs, ref, toRef, onUnmounted, h } from "vue";
import { defaultRender } from "../../ElsElem";
import { ElForm, ElInput, ElFormItem, ElCheckbox, ElRadio, ElOption } from "element-plus";
import { getTempValue } from "../../../utils/regexp";
import { merge, has, camelCase, get, set, unset, isFunction, isBoolean, isArray, isObject } from "lodash";
const useElForm = (props, cfg, ext) => {
  const size = unref(props.size) || "default";
  const attrs = useAttrs();
  const formData = cfg.formData;
  const emitChange = cfg.emitChange;
  const formProps = cfg.formProps;
  const defaultElFormProps = merge(
    { validateOnRuleChange: false, size },
    attrs.elForm || {}
  );
  const tag = ({ parent }) => {
    if (parent && has(EL_FORM_DEFAULT_CHILD, camelCase(parent.tagname))) {
      return EL_FORM_DEFAULT_CHILD[camelCase(parent.tagname)];
    }
    return ElInput;
  };
  const setup = (props2, params) => {
    var _a, _b;
    const elem2 = props2.elem;
    const parent = props2.parent;
    const tagname = camelCase(params.tagname);
    const parentname = camelCase(parent == null ? void 0 : parent.tagname);
    const setupRes = parent == null ? void 0 : parent.setupRes;
    const tp = unref(elem2.prop);
    const ep = typeof tp === "function" ? tp(props2) : tp;
    const fp = unref(setupRes == null ? void 0 : setupRes.formProp) || [];
    const p = new Array().concat(fp, ep || []);
    const formProp = p.join(".");
    const res = { isFormElem: false };
    if (p.length > 0) {
      res.formProp = formProp;
    }
    if (isFormElem(elem2, tagname, parentname)) {
      formProps.add(formProp);
      res.isFormElem = true;
      const defaultValue = (_b = unref((_a = elem2.modelValue) != null ? _a : elem2.value)) != null ? _b : void 0;
      const context2 = props2.context;
      const modelValue = context2.modelValue;
      if (get(unref(modelValue), formProp) == void 0) {
        set(unref(modelValue), formProp, defaultValue);
      }
      res.prop = { "onUpdate:modelValue": (v) => {
        set(unref(modelValue), formProp, v != null ? v : defaultValue);
        emitChange(formProp, v);
      } };
      res.excludeKeys = ["value"];
      res.isFormItem = true;
      res.isNeedElFormItem = isNeedElFormItem(elem2, tagname);
      onUnmounted(() => {
        formProps.delete(formProp);
      });
    }
    return res;
  };
  const render = (config) => {
    const props2 = config.props;
    const context2 = config.context;
    const setupRes = config.setupRes;
    if (setupRes.isFormElem) {
      const modelValue = context2.modelValue;
      const prop = setupRes.formProp;
      unset(props2, "value");
      props2.modelValue = get(unref(modelValue), prop);
      if (setupRes.isNeedElFormItem) {
        const elFormItemProps = {
          ...buildElFormItemProps(props2),
          prop
        };
        elFormItemProps.rules = buildRules(elFormItemProps);
        return h(ElFormItem, elFormItemProps, { default: () => defaultRender(config) });
      }
    }
    return defaultRender(config);
  };
  const elFormRef = ref();
  const elem = {
    ...defaultElFormProps,
    tag: ElForm,
    ref: (e) => elFormRef.value = e,
    cls: toRef(props, "column"),
    model: formData
  };
  const elFormApi = (name, ...args) => {
    const f = get(unref(elFormRef), name);
    if (f && isFunction(f)) {
      return f(...args);
    }
  };
  const context = {
    ...ext,
    modelValue: formData,
    tag,
    setup,
    render
  };
  return {
    elem,
    context,
    formRef: elFormRef,
    formApi: elFormApi,
    refresh: () => {
    },
    validate: (...args) => elFormApi("validate", args)
  };
};
const EL_FORM_ELEM_TAGS = [
  "elInput",
  "elInputNumber",
  "elSelect",
  "elSelectV2",
  "elDatePicker",
  "elRadio",
  "elRadioGroup",
  "elCheckbox",
  "elCheckboxGroup",
  "elCascader",
  "elCascaderPanel",
  "elColorPicker",
  "elRate",
  "elSlider",
  "elSwitch",
  "elTimePicker",
  "elTimeSelect",
  "elTransfer",
  "elAutocomplete"
];
const EL_FORM_DEFAULT_CHILD = {
  elCheckboxGroup: ElCheckbox,
  elRadioGroup: ElRadio,
  elSelect: ElOption
};
const isFormElem = (e, en, pn) => {
  if (unref(e.isFormElem) === true) {
    return true;
  }
  if (!EL_FORM_ELEM_TAGS.includes(en)) {
    return false;
  }
  if (pn && has(EL_FORM_DEFAULT_CHILD, pn)) {
    return camelCase(EL_FORM_DEFAULT_CHILD[pn].name) !== en;
  }
  return true;
};
const isNeedElFormItem = (e, en) => {
  var _a, _b;
  const elFormItem = (_a = unref(e.elFormItem)) != null ? _a : EL_FORM_ELEM_TAGS.includes(en);
  if (isBoolean(elFormItem)) {
    return elFormItem;
  }
  return (_b = elFormItem.enabled) != null ? _b : true;
};
const RULE_MESSAGE_TEMPLATE = {
  required: "\u8BF7\u8F93\u5165 [ {{label}} ] \uFF01",
  pattern: "\u8BF7\u6309\u7167\u8981\u6C42\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F! \u683C\u5F0F\uFF1A{{ pattern }}",
  common: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684 [ {{label}} ] \u683C\u5F0F!"
};
const buildRules = (props) => {
  var _a, _b;
  const required = (_a = unref(props.required)) != null ? _a : false;
  const trigger = (_b = unref(props.trigger)) != null ? _b : "blur";
  const message = has(props, "message") ? getTempValue(unref(props.message), props) : getTempValue(RULE_MESSAGE_TEMPLATE.required, props);
  const rules = isArray(unref(props.rules)) ? [...unref(props.rules)] : [];
  const tks = Object.keys(RULE_MESSAGE_TEMPLATE);
  const res = [];
  let hasRequired = false;
  rules.forEach((rule) => {
    var _a2;
    const d = { ...unref(rule) };
    const k = ((_a2 = tks.filter((k2) => has(d, k2))) == null ? void 0 : _a2[0]) || "common";
    const t = d.message || unref(props.message) || get(RULE_MESSAGE_TEMPLATE, k);
    d.message = getTempValue(t, { ...props, ...d });
    if (has(d, "required")) {
      hasRequired = true;
    }
    if (!has(d, "trigger")) {
      d.trigger = trigger;
    }
    res.push(d);
  });
  if (!hasRequired && required) {
    res.push({ required, message, trigger });
  }
  delete props.required;
  delete props.trigger;
  delete props.message;
  return res;
};
const EL_FORM_ITEM_PROPS_KEYS = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message"
];
const buildElFormItemProps = (props) => {
  const elFormItem = unref(get(props, "elFormItem"));
  const keys = isArray(elFormItem) ? elFormItem : isObject(elFormItem) ? Object.keys(elFormItem) : [];
  const res = isObject(elFormItem) ? { ...elFormItem } : {};
  EL_FORM_ITEM_PROPS_KEYS.forEach((k) => {
    if (has(props, k) && !keys.includes(k)) {
      res[k] = get(props, k);
      unset(props, k);
    }
  });
  unset(props, "elFormItem");
  return res;
};
export {
  useElForm as default
};
