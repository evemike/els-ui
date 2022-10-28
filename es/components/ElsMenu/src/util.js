import { getTempValue } from "../../../utils/regexp";
import { isArray } from "lodash";
const HTTP_REG = /^\s*http/;
const jump = (path, router, cfg) => {
  if (typeof path === "string" && HTTP_REG.test(path)) {
    window.open(path, (cfg == null ? void 0 : cfg.target) || "_blank");
  } else {
    router == null ? void 0 : router.push(path);
  }
};
const jumpFromTempalte = (path, ctx, router, cfg) => {
  jump(typeof path === "string" ? getTempValue(path, ctx) : path, router, cfg);
};
const menuJump = (menu, router) => {
  if (menu.handle) {
    menu.handle(menu);
  } else if (menu.path) {
    jump(menu.path, router, menu);
  }
};
const initMenu = (route, menus) => {
  const { path, fullPath } = route;
  let ms = menus;
  let ct = ms.length;
  while (isArray(ms) && ms.length > 0 && ct > 0) {
    for (let i = 0, l = ms.length; i < l; i++) {
      const e = ms[i];
      const p = e.path;
      if (p) {
        const t = typeof p === "string" ? p : p.path;
        if (path.includes(t) || fullPath.includes(t)) {
          ms = e.children || e;
          ct = isArray(ms) ? ms.length : 0;
          break;
        }
      }
      ct--;
    }
  }
  console.log(ms, menus);
  return !isArray(ms) ? String(ms.id) : "";
};
export {
  initMenu,
  jump,
  jumpFromTempalte,
  menuJump
};
