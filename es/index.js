import { ElsElemPlugin } from "./components/ElsElem";
export * from "./components/ElsElem";
import { ElsFormPlugin } from "./components/ElsForm";
export * from "./components/ElsForm";
import { ElsExpBoxPlugin } from "./components/ElsExpBox";
export * from "./components/ElsExpBox";
import { ElsScrollBarPlugin } from "./components/ElsScrollBar";
export * from "./components/ElsScrollBar";
import { ElsPagePlugin } from "./components/ElsPage";
export * from "./components/ElsPage";
import { ElsMenuPlugin } from "./components/ElsMenu";
export * from "./components/ElsMenu";
import { ElsSvgPlugin } from "./components/ElsSvg";
export * from "./components/ElsSvg";
const MYLibPlugin = {
  install(app) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    (_b = (_a = ElsElemPlugin).install) == null ? void 0 : _b.call(_a, app);
    (_d = (_c = ElsFormPlugin).install) == null ? void 0 : _d.call(_c, app);
    (_f = (_e = ElsExpBoxPlugin).install) == null ? void 0 : _f.call(_e, app);
    (_h = (_g = ElsScrollBarPlugin).install) == null ? void 0 : _h.call(_g, app);
    (_j = (_i = ElsPagePlugin).install) == null ? void 0 : _j.call(_i, app);
    (_l = (_k = ElsMenuPlugin).install) == null ? void 0 : _l.call(_k, app);
    (_n = (_m = ElsSvgPlugin).install) == null ? void 0 : _n.call(_m, app);
  }
};
export {
  MYLibPlugin as default
};
