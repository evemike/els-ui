export declare type Switch<T extends Record<any, any>> = boolean | (T & {
    enabled: boolean;
});
export declare type SwitchObj<T extends Record<any, any>> = {
    enabled: boolean;
} | ({
    enabled: boolean;
} & T);
export declare const getSwitchAttr: <T extends Record<string, any>>(attr: Switch<T>, value?: T | undefined, trans?: ((attr: Switch<T>, value?: T | undefined) => SwitchObj<T>) | undefined) => SwitchObj<T>;
