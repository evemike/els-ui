import { RenderFunction } from "./../../../../docs/packages/components/ElsElem/src/inter";
import { PropType } from "vue";
import { Elem, Context, ElsElemScope } from "./inter";
declare const _default: import("vue").DefineComponent<{
    elem: PropType<Elem>;
    context: PropType<Context>;
    parent: PropType<(Record<string, any> & {
        elem: Elem;
        setupRes: void | (Record<string, any> & {
            prop?: Record<string, any> | undefined;
            render?: import("./inter").RenderFunction | Record<string, import("./inter").RenderFunction> | undefined;
            beforeRender?: ((scope: ElsElemScope) => void) | undefined;
            excludeKeys?: string[] | undefined;
        });
        tagname: string;
    }) | undefined>;
    params: PropType<Record<string, any> | undefined>;
    slotParams: PropType<any>;
    slots: PropType<any>;
}, RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    elem: PropType<Elem>;
    context: PropType<Context>;
    parent: PropType<(Record<string, any> & {
        elem: Elem;
        setupRes: void | (Record<string, any> & {
            prop?: Record<string, any> | undefined;
            render?: import("./inter").RenderFunction | Record<string, import("./inter").RenderFunction> | undefined;
            beforeRender?: ((scope: ElsElemScope) => void) | undefined;
            excludeKeys?: string[] | undefined;
        });
        tagname: string;
    }) | undefined>;
    params: PropType<Record<string, any> | undefined>;
    slotParams: PropType<any>;
    slots: PropType<any>;
}>>, {}>;
export default _default;
