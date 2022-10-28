import { Ref } from "vue";
export interface KeyValue<T> {
    [key: string]: T;
}
export declare type Direction = "top" | "right" | "bottom" | "left";
export declare type Site = "top" | "right" | "bottom" | "left";
export declare type Switch<T extends Record<any, any>> = boolean | (T & {
    enabled: boolean;
});
export declare type SwitchObj<T extends Record<any, any>> = {
    enabled: boolean;
} | ({
    enabled: boolean;
} & T);
export declare type TOA<T> = T | T[];
export declare type TOR<T> = T | Ref<T>;
export declare type TORA<T> = TOR<TOA<T>>;
