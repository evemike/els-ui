import { DEFAULT_OPERATES } from "./util";
declare type DEFAULT_KEYS = keyof typeof DEFAULT_OPERATES;
declare type ItemAttrs = Record<string, any> & {
    keyid: string;
    "@click"?: (...args: any) => any;
};
export declare type IButtonsItem = DEFAULT_KEYS | [DEFAULT_KEYS, Record<string, any>] | ItemAttrs;
export interface IButtonsConfig {
    enabled: boolean;
    class: string;
    items: IButtonsItem[];
}
export {};
