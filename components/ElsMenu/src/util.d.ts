import { Router } from "vue-router";
import { RouterLocationRaw, MenuElem, ElsMenuProps } from "./inter";
export declare const jump: (path: RouterLocationRaw, router: Router, cfg?: Record<string, any>) => void;
export declare const jumpFromTempalte: (path: RouterLocationRaw, ctx: Record<string, any>, router: Router, cfg?: Record<string, any>) => void;
export declare const menuJump: (menu: MenuElem, router: Router) => void;
export declare const initMenu: ElsMenuProps["initMenu"];
