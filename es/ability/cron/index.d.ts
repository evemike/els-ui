import { TypeLayout } from "./util";
export default function useCron(value?: string, layout?: TypeLayout[]): {
    cronData: import("vue").Ref<Record<string, any>>;
    cronText: import("vue").Ref<string>;
    column: {
        cls: {
            label: string;
            prop: "year" | "month" | "week" | "second" | "minute" | "hour" | "day";
            cls: {
                class: string;
                label: string;
                cls: any;
                tag: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly border: BooleanConstructor;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly border: BooleanConstructor;
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                    }>> & {
                        onChange?: ((val: string | number | boolean) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                    }>>;
                    emit: ((event: "update:modelValue", val: string | number | boolean) => void) & ((event: "change", val: string | number | boolean) => void);
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                    radioGroup: import("element-plus").RadioGroupContext | undefined;
                    focus: import("vue").Ref<boolean>;
                    size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
                    disabled: import("vue").ComputedRef<boolean>;
                    modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                    handleChange: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: string | number | boolean) => boolean;
                    change: (val: string | number | boolean) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly border: BooleanConstructor;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                }>> & {
                    onChange?: ((val: string | number | boolean) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                }, {
                    readonly disabled: boolean;
                    readonly name: string;
                    readonly label: import("element-plus/es/utils").EpPropMergeType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                    readonly modelValue: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                    readonly border: boolean;
                }>> & {
                    RadioButton: import("vue").DefineComponent<{
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                            readonly size: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly disabled: BooleanConstructor;
                            readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                        focus: import("vue").Ref<boolean>;
                        size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
                        disabled: import("vue").ComputedRef<boolean>;
                        modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                        radioGroup: import("element-plus").RadioGroupContext | undefined;
                        activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly label: import("element-plus/es/utils").EpPropFinalized<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
                    }>>, {
                        readonly disabled: boolean;
                        readonly name: string;
                        readonly label: import("element-plus/es/utils").EpPropMergeType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                    }>;
                    RadioGroup: import("vue").DefineComponent<{
                        readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                        readonly fill: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly textColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly size: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly disabled: BooleanConstructor;
                            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                            readonly fill: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly textColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        }>> & {
                            onChange?: ((val: string | number | boolean) => any) | undefined;
                            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                        }>>;
                        emit: ((event: "update:modelValue", val: string | number | boolean) => void) & ((event: "change", val: string | number | boolean) => void);
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        radioId: import("vue").Ref<string>;
                        radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
                        formItem: import("element-plus").FormItemContext | undefined;
                        groupId: import("vue").Ref<string | undefined>;
                        isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                        changeEvent: (value: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>) => void;
                        name: import("vue").ComputedRef<string>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        "update:modelValue": (val: string | number | boolean) => boolean;
                        change: (val: string | number | boolean) => boolean;
                    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly disabled: BooleanConstructor;
                        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                        readonly fill: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly textColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    }>> & {
                        onChange?: ((val: string | number | boolean) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                    }, {
                        readonly disabled: boolean;
                        readonly name: string;
                        readonly label: string;
                        readonly id: string;
                        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                        readonly fill: string;
                        readonly textColor: string;
                        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }>;
                };
                prop: string;
            }[];
            tag: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly closable: BooleanConstructor;
                readonly disabled: BooleanConstructor;
                readonly lazy: BooleanConstructor;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly name: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly closable: BooleanConstructor;
                    readonly disabled: BooleanConstructor;
                    readonly lazy: BooleanConstructor;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                instance: import("vue").ComponentInternalInstance;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                tabsRoot: import("element-plus").TabsRootContext;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                index: import("vue").Ref<string | undefined>;
                isClosable: import("vue").ComputedRef<boolean>;
                active: Readonly<import("vue").Ref<boolean>>;
                loaded: import("vue").Ref<boolean>;
                paneName: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
                shouldBeRender: Readonly<import("vue").Ref<boolean>>;
                pane: {
                    uid: number;
                    slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    props: {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        readonly disabled: boolean;
                        readonly name: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                        readonly label: string;
                        readonly closable: boolean;
                        readonly lazy: boolean;
                    };
                    paneName: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                    active: boolean;
                    index: string | undefined;
                    isClosable: boolean;
                };
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly closable: BooleanConstructor;
                readonly disabled: BooleanConstructor;
                readonly lazy: BooleanConstructor;
            }>>, {
                readonly disabled: boolean;
                readonly label: string;
                readonly closable: boolean;
                readonly lazy: boolean;
            }>>;
        }[];
        tag: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
            readonly activeName: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly closable: BooleanConstructor;
            readonly addable: BooleanConstructor;
            readonly modelValue: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly editable: BooleanConstructor;
            readonly tabPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "bottom" | "left", unknown, "top", boolean>;
            readonly beforeLeave: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | (() => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | {
                (): (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | (() => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | {
                (): (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => true, boolean>;
            readonly stretch: BooleanConstructor;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (name: import("element-plus").TabPanelName) => boolean;
            'tab-click': (pane: {
                uid: number;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                props: {
                    readonly disabled: boolean;
                    readonly label: string;
                    readonly closable: boolean;
                    readonly lazy: boolean;
                    readonly name?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                };
                paneName: string | number | undefined;
                active: boolean;
                index: string | undefined;
                isClosable: boolean;
            }, ev: Event) => boolean;
            'tab-change': (name: import("element-plus").TabPanelName) => boolean;
            edit: (paneName: import("element-plus").TabPanelName | undefined, action: "add" | "remove") => boolean;
            'tab-remove': (name: import("element-plus").TabPanelName) => boolean;
            'tab-add': () => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
            readonly activeName: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly closable: BooleanConstructor;
            readonly addable: BooleanConstructor;
            readonly modelValue: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly editable: BooleanConstructor;
            readonly tabPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "bottom" | "left", unknown, "top", boolean>;
            readonly beforeLeave: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | (() => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | {
                (): (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | (() => (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>) | {
                (): (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => true, boolean>;
            readonly stretch: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: ((name: import("element-plus").TabPanelName) => any) | undefined;
            "onTab-click"?: ((pane: {
                uid: number;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                props: {
                    readonly disabled: boolean;
                    readonly label: string;
                    readonly closable: boolean;
                    readonly lazy: boolean;
                    readonly name?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                };
                paneName: string | number | undefined;
                active: boolean;
                index: string | undefined;
                isClosable: boolean;
            }, ev: Event) => any) | undefined;
            "onTab-change"?: ((name: import("element-plus").TabPanelName) => any) | undefined;
            onEdit?: ((paneName: import("element-plus").TabPanelName | undefined, action: "add" | "remove") => any) | undefined;
            "onTab-remove"?: ((name: import("element-plus").TabPanelName) => any) | undefined;
            "onTab-add"?: (() => any) | undefined;
        }, {
            readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
            readonly closable: boolean;
            readonly tabPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
            readonly beforeLeave: (newName: import("element-plus").TabPanelName, oldName: import("element-plus").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
            readonly addable: boolean;
            readonly editable: boolean;
            readonly stretch: boolean;
        }>> & {
            TabPane: import("vue").DefineComponent<{
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly closable: BooleanConstructor;
                readonly disabled: BooleanConstructor;
                readonly lazy: BooleanConstructor;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly name: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly closable: BooleanConstructor;
                    readonly disabled: BooleanConstructor;
                    readonly lazy: BooleanConstructor;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                instance: import("vue").ComponentInternalInstance;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                tabsRoot: import("element-plus").TabsRootContext;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                index: import("vue").Ref<string | undefined>;
                isClosable: import("vue").ComputedRef<boolean>;
                active: Readonly<import("vue").Ref<boolean>>;
                loaded: import("vue").Ref<boolean>;
                paneName: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
                shouldBeRender: Readonly<import("vue").Ref<boolean>>;
                pane: {
                    uid: number;
                    slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    props: {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        readonly disabled: boolean;
                        readonly name: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                        readonly label: string;
                        readonly closable: boolean;
                        readonly lazy: boolean;
                    };
                    paneName: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                    active: boolean;
                    index: string | undefined;
                    isClosable: boolean;
                };
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly closable: BooleanConstructor;
                readonly disabled: BooleanConstructor;
                readonly lazy: BooleanConstructor;
            }>>, {
                readonly disabled: boolean;
                readonly label: string;
                readonly closable: boolean;
                readonly lazy: boolean;
            }>;
        };
        type: string;
    }[];
    validator: (v: string) => string;
};
export * from "./util";
