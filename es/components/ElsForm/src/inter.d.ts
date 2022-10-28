import { Ref } from "vue";
import { Elem, Context } from "../../ElsElem";
export interface ElsFormProps {
    modelValue: Record<string, any>;
    column: Elem[];
    size?: "large" | "default" | "small";
    UIPluging?: ElsFormUIPlugin;
    autoClean?: boolean;
}
export interface ElsFormEmits {
    (e: "update:modelValue", v: Record<string, any>): void;
    (e: "change", name: string, value: any): void;
}
export declare type ElsFormUIPlugin = (props: ElsFormProps, cfg: ElsFormUIPluginConfig, ext: Record<string, any>) => {
    elem: Elem;
    context: Context;
    formRef: Ref<any>;
    formApi: (name: string, ...args: any) => any;
    validate: (...args: any) => Promise<any>;
};
export interface ElsFormUIPluginConfig {
    formProps: Set<string>;
    formData: Ref<Record<string, any>>;
    emitChange: (prop: string, val: any) => void;
}
