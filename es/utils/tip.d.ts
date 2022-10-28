import { MessageParams } from "element-plus";
import { AppContext, VNode } from "vue";
export declare const tipBase: (option?: MessageParams, appContext?: AppContext) => void;
export declare const tipSuccess: (tipText: string | VNode, appContext?: AppContext) => void;
export declare const tipWarning: (tipText: string | VNode, appContext?: AppContext) => void;
export declare const tipInfo: (tipText: string | VNode, appContext?: AppContext) => void;
export declare const tipError: (tipText: string | VNode, appContext?: AppContext) => void;
declare const TIP_TEXT_LIB: Record<string, string>;
declare const TIP_TYPE_TEXT: {
    success: string;
    warning: string;
    info: string;
    error: string;
};
export declare const tip: (tipName?: keyof typeof TIP_TEXT_LIB | string, type?: keyof typeof TIP_TYPE_TEXT, tipText?: string | VNode) => void;
declare const CONFIRM_TEXT_LIB: {
    readonly delete: "是否删除数据 : ";
};
export declare const confirm: (info?: string, tip?: keyof typeof CONFIRM_TEXT_LIB | string, type?: keyof typeof TIP_TYPE_TEXT, title?: string) => Promise<import("element-plus").MessageBoxData>;
export declare const elemTip: (info: string | Record<string, any>) => Record<string, any>;
export {};
