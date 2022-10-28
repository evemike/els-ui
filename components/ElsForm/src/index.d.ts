import { ElsFormProps, ElsFormUIPluginConfig } from "./inter";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: true;
    };
    column: {
        type: null;
        required: true;
    };
    size: {
        type: null;
        required: false;
        default: string;
    };
    UIPluging: {
        type: null;
        required: false;
    };
    autoClean: {
        type: null;
        required: false;
        default: boolean;
    };
}, {
    emits: {
        (e: "update:modelValue", v: Record<string, any>): void;
        (e: "change", name: string, value: any): void;
    };
    props: {
        modelValue: ElsFormProps["modelValue"];
        column: ElsFormProps["column"];
        size: ElsFormProps["size"];
        UIPluging?: ElsFormProps["UIPluging"];
        autoClean: ElsFormProps["autoClean"];
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    formData: import("vue").Ref<Record<string, any>>;
    emitChange: (prop: string, val: any) => void;
    formProps: Set<string>;
    UIConfig: ElsFormUIPluginConfig;
    pluging: import("./inter").ElsFormUIPlugin;
    formUI: {
        elem: import("../../ElsElem").Elem;
        context: import("../../ElsElem").Context;
        formRef: import("vue").Ref<any>;
        formApi: (name: string, ...args: any) => any;
        validate: (...args: any) => Promise<any>;
    };
    submit: (call?: (k: string, v: any) => undefined | [string, any]) => Promise<Record<string, any>>;
    ElsElem: import("vue").DefineComponent<{
        elem: import("vue").PropType<import("../../ElsElem").Elem>;
        context: import("vue").PropType<import("../../ElsElem").Context>;
        parent: import("vue").PropType<(Record<string, any> & {
            elem: import("../../ElsElem").Elem;
            setupRes: void | (Record<string, any> & {
                prop?: Record<string, any> | undefined;
                render?: import("../../ElsElem").RenderFunction | Record<string, import("../../ElsElem").RenderFunction> | undefined;
                beforeRender?: ((scope: import("../../ElsElem").ElsElemScope) => void) | undefined;
                excludeKeys?: string[] | undefined;
            });
            tagname: string;
        }) | undefined>;
        params: import("vue").PropType<Record<string, any> | undefined>;
        slotParams: import("vue").PropType<any>;
        slots: import("vue").PropType<any>;
    }, import("../../ElsElem").RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        elem: import("vue").PropType<import("../../ElsElem").Elem>;
        context: import("vue").PropType<import("../../ElsElem").Context>;
        parent: import("vue").PropType<(Record<string, any> & {
            elem: import("../../ElsElem").Elem;
            setupRes: void | (Record<string, any> & {
                prop?: Record<string, any> | undefined;
                render?: import("../../ElsElem").RenderFunction | Record<string, import("../../ElsElem").RenderFunction> | undefined;
                beforeRender?: ((scope: import("../../ElsElem").ElsElemScope) => void) | undefined;
                excludeKeys?: string[] | undefined;
            });
            tagname: string;
        }) | undefined>;
        params: import("vue").PropType<Record<string, any> | undefined>;
        slotParams: import("vue").PropType<any>;
        slots: import("vue").PropType<any>;
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: true;
    };
    column: {
        type: null;
        required: true;
    };
    size: {
        type: null;
        required: false;
        default: string;
    };
    UIPluging: {
        type: null;
        required: false;
    };
    autoClean: {
        type: null;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    size: any;
    autoClean: any;
}>;
export default _sfc_main;
