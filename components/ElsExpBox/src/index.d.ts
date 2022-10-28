interface InitParams {
    input: (val: string) => void;
    resetPos: (index: number) => void;
}
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    isEdit: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    init: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    emits: {
        (e: "init", params: InitParams): void;
        (e: "update:modelValue", val: string): void;
    };
    props: {
        modelValue: string;
        isEdit: boolean;
        mode: "text" | "box" | "border";
        init?: ((params: InitParams) => void) | undefined;
    };
    boxRef: import("vue").Ref<HTMLDivElement | undefined>;
    modelValue: import("vue").Ref<string>;
    isEdit: import("vue").Ref<boolean>;
    mode: import("vue").Ref<"text" | "box" | "border">;
    isFocus: import("vue").Ref<boolean>;
    cacheValue: string;
    leftText: import("vue").Ref<string[]>;
    rightText: import("vue").Ref<string[]>;
    cursorMove: (d: "up" | "down") => void;
    resetLeftText: (index: number) => void;
    resetByPos: (mx: number, my: number) => void;
    handleDivClick: (e: MouseEvent) => void;
    handleClick: (i: number, e: MouseEvent) => void;
    handleKeyup: (e: KeyboardEvent) => void;
    addValue: (val: string) => void;
    emitUpdateModelValue: () => void;
    params: InitParams;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "update:modelValue")[], "init" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    isEdit: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    init: {
        type: FunctionConstructor;
        required: false;
    };
}>> & {
    onInit?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    isEdit: boolean;
    mode: string;
}>;
export default _sfc_main;
