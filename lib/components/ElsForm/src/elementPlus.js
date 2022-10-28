"use strict";
const vue = require("vue");
const ElsElem = require("../../ElsElem");
const elementPlus = require("element-plus");
const regexp = require("../../../utils/regexp");
const lodash = require("lodash");
const useElForm = (props, cfg, ext) => {
  const size = vue.unref(props.size) || "default";
  const attrs = vue.useAttrs();
  const formData = cfg.formData;
  const emitChange = cfg.emitChange;
  const formProps = cfg.formProps;
  const defaultElFormProps = lodash.merge(
    { validateOnRuleChange: false, size },
    attrs.elForm || {}
  );
  const tag = ({ parent }) => {
    if (parent && lodash.has(EL_FORM_DEFAULT_CHILD, lodash.camelCase(parent.tagname))) {
      return EL_FORM_DEFAULT_CHILD[lodash.camelCase(parent.tagname)];
    }
    return elementPlus.ElInput;
  };
  const setup = (props2, params) => {
    var _a, _b;
    const elem2 = props2.elem;
    const parent = props2.parent;
    const tagname = lodash.camelCase(params.tagname);
    const parentname = lodash.camelCase(parent == null ? void 0 : parent.tagname);
    const setupRes = parent == null ? void 0 : parent.setupRes;
    const tp = vue.unref(elem2.prop);
    const ep = typeof tp === "function" ? tp(props2) : tp;
    const fp = vue.unref(setupRes == null ? void 0 : setupRes.formProp) || [];
    const p = new Array().concat(fp, ep || []);
    const formProp = p.join(".");
    const res = { isFormElem: false };
    if (p.length > 0) {
      res.formProp = formProp;
    }
    if (isFormElem(elem2, tagname, parentname)) {
      formProps.add(formProp);
      res.isFormElem = true;
      const defaultValue = (_b = vue.unref((_a = elem2.modelValue) != null ? _a : elem2.value)) != null ? _b : void 0;
      const context2 = props2.context;
      const modelValue = context2.modelValue;
      if (lodash.get(vue.unref(modelValue), formProp) == void 0) {
        lodash.set(vue.unref(modelValue), formProp, defaultValue);
      }
      res.prop = { "onUpdate:modelValue": (v) => {
        lodash.set(vue.unref(modelValue), formProp, v != null ? v : defaultValue);
        emitChange(formProp, v);
      } };
      res.excludeKeys = ["value"];
      res.isFormItem = true;
      res.isNeedElFormItem = isNeedElFormItem(elem2, tagname);
      vue.onUnmounted(() => {
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
      lodash.unset(props2, "value");
      props2.modelValue = lodash.get(vue.unref(modelValue), prop);
      if (setupRes.isNeedElFormItem) {
        const elFormItemProps = {
          ...buildElFormItemProps(props2),
          prop
        };
        elFormItemProps.rules = buildRules(elFormItemProps);
        return vue.h(elementPlus.ElFormItem, elFormItemProps, { default: () => ElsElem.defaultRender(config) });
      }
    }
    return ElsElem.defaultRender(config);
  };
  const elFormRef = vue.ref();
  const elem = {
    ...defaultElFormProps,
    tag: elementPlus.ElForm,
    ref: (e) => elFormRef.value = e,
    cls: vue.toRef(props, "column"),
    model: formData
  };
  const elFormApi = (name, ...args) => {
    const f = lodash.get(vue.unref(elFormRef), name);
    if (f && lodash.isFunction(f)) {
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
  elCheckboxGroup: elementPlus.ElCheckbox,
  elRadioGroup: elementPlus.ElRadio,
  elSelect: elementPlus.ElOption
};
const isFormElem = (e, en, pn) => {
  if (vue.unref(e.isFormElem) === true) {
    return true;
  }
  if (!EL_FORM_ELEM_TAGS.includes(en)) {
    return false;
  }
  if (pn && lodash.has(EL_FORM_DEFAULT_CHILD, pn)) {
    return lodash.camelCase(EL_FORM_DEFAULT_CHILD[pn].name) !== en;
  }
  return true;
};
const isNeedElFormItem = (e, en) => {
  var _a, _b;
  const elFormItem = (_a = vue.unref(e.elFormItem)) != null ? _a : EL_FORM_ELEM_TAGS.includes(en);
  if (lodash.isBoolean(elFormItem)) {
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
  const required = (_a = vue.unref(props.required)) != null ? _a : false;
  const trigger = (_b = vue.unref(props.trigger)) != null ? _b : "blur";
  const message = lodash.has(props, "message") ? regexp.getTempValue(vue.unref(props.message), props) : regexp.getTempValue(RULE_MESSAGE_TEMPLATE.required, props);
  const rules = lodash.isArray(vue.unref(props.rules)) ? [...vue.unref(props.rules)] : [];
  const tks = Object.keys(RULE_MESSAGE_TEMPLATE);
  const res = [];
  let hasRequired = false;
  rules.forEach((rule) => {
    var _a2;
    const d = { ...vue.unref(rule) };
    const k = ((_a2 = tks.filter((k2) => lodash.has(d, k2))) == null ? void 0 : _a2[0]) || "common";
    const t = d.message || vue.unref(props.message) || lodash.get(RULE_MESSAGE_TEMPLATE, k);
    d.message = regexp.getTempValue(t, { ...props, ...d });
    if (lodash.has(d, "required")) {
      hasRequired = true;
    }
    if (!lodash.has(d, "trigger")) {
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
  const elFormItem = vue.unref(lodash.get(props, "elFormItem"));
  const keys = lodash.isArray(elFormItem) ? elFormItem : lodash.isObject(elFormItem) ? Object.keys(elFormItem) : [];
  const res = lodash.isObject(elFormItem) ? { ...elFormItem } : {};
  EL_FORM_ITEM_PROPS_KEYS.forEach((k) => {
    if (lodash.has(props, k) && !keys.includes(k)) {
      res[k] = lodash.get(props, k);
      lodash.unset(props, k);
    }
  });
  lodash.unset(props, "elFormItem");
  return res;
};
module.exports = useElForm;
