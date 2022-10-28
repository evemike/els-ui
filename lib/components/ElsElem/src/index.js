"use strict";
const vue = require("vue");
const util = require("./util");
const lodash = require("lodash");
const index = vue.defineComponent({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(props, ctx) {
    const elem = props.elem || {};
    const context = props.context || {};
    const parent = props.parent;
    const params = props.params || {};
    const slots = lodash.assign(
      {},
      context.slots || {},
      props.slots || ctx.slots
    );
    const tag = vue.computed(() => {
      var _a, _b;
      const t = (_b = (_a = vue.unref(elem == null ? void 0 : elem.tag)) != null ? _a : vue.unref(context == null ? void 0 : context.tag)) != null ? _b : "div";
      if (typeof t == "function" && t.name === "tag") {
        return t(props, ctx);
      }
      return t;
    });
    const tagname = vue.computed(
      () => typeof tag.value === "string" ? tag.value : lodash.kebabCase(tag.value.name)
    );
    const isHtml = vue.computed(() => util.isHtmlTag(vue.unref(tagname)));
    let elemSetupRes = {};
    let ctxSetupRes = {};
    const setupRes = { prop: {} };
    if (context.setup) {
      ctxSetupRes = context.setup(props, { tag: vue.unref(tag), tagname: vue.unref(tagname), isHtml: vue.unref(isHtml) }, ctx) || {};
      lodash.merge(setupRes, ctxSetupRes);
    }
    if (elem.setup) {
      elemSetupRes = elem.setup(props, { tag: vue.unref(tag), tagname: vue.unref(tagname), isHtml: vue.unref(isHtml) }, ctx) || {};
      lodash.merge(setupRes, elemSetupRes);
    }
    const attrs = util.getElemAttrs(vue.mergeProps(elem, setupRes.prop || {}), context);
    const root = attrs.root;
    const prop = attrs.prop;
    const directive = attrs.directive;
    const excludeKeys = new Array().concat(
      setupRes.excludeKeys || [],
      elem.excludeKeys || [],
      context.excludeKeys || []
    );
    const _scopeA = { ...params, ...prop, ...setupRes };
    const _scopeB = {
      $tag: vue.unref(tag),
      $tagname: vue.unref(tagname),
      $isHtml: vue.unref(isHtml),
      $slots: slots,
      $elem: elem,
      $context: context,
      $root: root,
      $prop: prop,
      $directive: directive,
      $elemSetupRes: elemSetupRes,
      $ctxSetupRes: ctxSetupRes,
      $setupRes: setupRes,
      $parent: parent,
      $params: params
    };
    const childs = vue.computed(() => new Array().concat(vue.unref(root.children), vue.unref(root.cls)).filter((v) => v != void 0));
    const createChildren = (params2) => {
      const cls = vue.unref(childs);
      if (cls.length === 0) {
        return void 0;
      }
      const temp = {
        default: []
      };
      cls.forEach((c) => {
        const tc = vue.unref(c);
        if (vue.isVNode(tc)) {
          temp.default.push(() => tc);
        } else if (lodash.isFunction(tc)) {
          temp.default.push((_s) => tc(params2, _s, _scopeB));
        } else if (lodash.isObject(tc)) {
          const sn = util.getSlotName(tc);
          if (!temp[sn]) {
            temp[sn] = [];
          }
          temp[sn].push(
            (slotParams) => vue.h(vue.resolveComponent("els-elem"), {
              elem: tc,
              context,
              parent: { elem, tagname: vue.unref(tagname), setupRes },
              params: params2,
              slotParams,
              slots
            })
          );
        } else {
          temp.default.push((_s) => util.getExpValue(String(tc), params2));
        }
      });
      const res = {};
      Object.keys(temp).forEach((k) => {
        res[k] = (p) => temp[k].map((f) => f(p));
      });
      return res;
    };
    const render = () => {
      const name = vue.unref(tagname);
      const ss = util.getDestruct(root["slot-scope"], props.slotParams);
      const scope = { ..._scopeA, ...ss };
      const directives = util.parseDirective(directive, scope);
      if (directives["v-if"] === false) {
        return void 0;
      }
      const elemProps = lodash.omit(vue.mergeProps(
        prop,
        directives["v-bind"],
        directives["v-on"]
      ), excludeKeys);
      const children = createChildren(scope);
      const config = {
        tag: tag.value,
        tagname: name,
        isHtml: scope.$isHtml,
        props: elemProps,
        children,
        context,
        elem,
        slots,
        parent,
        directives,
        setupRes
      };
      const _render = (elemSetupRes == null ? void 0 : elemSetupRes.render) || (root == null ? void 0 : root.render) || (ctxSetupRes == null ? void 0 : ctxSetupRes.render) || (context == null ? void 0 : context.render);
      if (_render) {
        if (lodash.isFunction(_render)) {
          return _render(config);
        }
        if (_render[name] != void 0) {
          return _render[name](config);
        }
      }
      return util.defaultRender(config);
    };
    return render;
  }
});
module.exports = index;
