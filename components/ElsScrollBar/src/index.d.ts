declare const _sfc_main: import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        direction: "vertical" | "horizontal";
    };
    direction: "vertical" | "horizontal";
    elsScrollBarRef: import("vue").Ref<HTMLDivElement | undefined>;
    parentElem: import("vue").ComputedRef<HTMLElement | null | undefined>;
    parentSize: import("vue").ComputedRef<{
        width: number;
        height: number;
    }>;
    contentElems: import("vue").ComputedRef<never[] | undefined>;
    contentSize: import("vue").ComputedRef<{
        width: number;
        height: number;
    }>;
    isShow: import("vue").ComputedRef<boolean>;
    handleMouseDown: (e: MouseEvent) => void;
    handleMouseMove: (e: MouseEvent) => void;
    handleMouseUp: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    direction: string;
}>;
export default _sfc_main;
