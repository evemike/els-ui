import { ElsMenuProps, MenuElem } from "./inter";
declare const _sfc_main: import("vue").DefineComponent<{
    menus: {
        type: null;
        required: true;
        default: () => never[];
    };
    collapse: {
        type: null;
        required: false;
        default: boolean;
    };
    context: {
        type: null;
        required: false;
        default: () => {};
    };
    initMenu: {
        type: null;
        required: false;
    };
    UIPluging: {
        type: null;
        required: false;
    };
}, {
    emits: {
        (e: "init-menu", router: Record<string, any>, menus: ElsMenuProps["menus"]): void;
        (e: "change", menu: MenuElem): void;
        (e: "select", menu: MenuElem): void;
    };
    props: {
        menus: ElsMenuProps["menus"];
        collapse: ElsMenuProps["collapse"];
        context: ElsMenuProps["context"];
        initMenu?: ((route: {
            path: string;
            fullPath: string;
            meta: Record<string, any>;
        }, menus: MenuElem[]) => string) | undefined;
        UIPluging?: import("./inter").ElsMenuUIPlugin | undefined;
    };
    currentId: import("vue").Ref<string>;
    route: import("vue-router").RouteLocationNormalizedLoaded;
    initMenuFun: (route: {
        path: string;
        fullPath: string;
        meta: Record<string, any>;
    }, menus: MenuElem[]) => string;
    handleSelect: (menu: MenuElem) => void;
    UIPluging: import("./inter").ElsMenuUIPlugin;
    menuUI: {
        elem: import("../../ElsElem").Elem;
        context: import("../../ElsElem").Context;
        menuRef: import("vue").Ref<any>;
    };
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change" | "init-menu")[], "select" | "change" | "init-menu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: null;
        required: true;
        default: () => never[];
    };
    collapse: {
        type: null;
        required: false;
        default: boolean;
    };
    context: {
        type: null;
        required: false;
        default: () => {};
    };
    initMenu: {
        type: null;
        required: false;
    };
    UIPluging: {
        type: null;
        required: false;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    "onInit-menu"?: ((...args: any[]) => any) | undefined;
}, {
    context: any;
    menus: any;
    collapse: any;
}>;
export default _sfc_main;
