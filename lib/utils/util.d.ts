export declare const has: (v: PropertyKey) => boolean;
export declare const getType: (o: any) => string;
export declare const isHtmlTag: (tag: string) => boolean;
export declare const doEval: (s?: string, obj?: any, isGetRefValue?: boolean) => any;
export declare const getRefValue: (obj: any) => any;
export declare const getMenus: (tree: any) => any;
export declare const treeFilter: (tree: never[] | undefined, fn: Function, cfg?: {
    children: string;
    isSource: string;
}) => any;
export declare const treeMap: (tree: never[] | undefined, fn: Function, cfg?: {
    isSource: string;
    children: string;
}) => any;
export declare const clone: (obj?: {}) => any;
export declare const buildMenus: (data: any) => any;
export declare const createTitle: (node: any) => ({
    tag: string;
    class: any;
    slot?: undefined;
    cls?: undefined;
} | {
    tag: string;
    slot: string;
    cls: any;
    class?: undefined;
})[];
export declare const treeReset: (tree: never[] | undefined, fn: Function, cfg?: {
    sourceChildren: string;
    children: string;
}) => any;
export declare const parseToken: (token: string) => any;
export declare const isAdmin: (userInfo: {
    scopes: string[];
}) => boolean;
export declare const getAssetsFile: (url: string) => string;
