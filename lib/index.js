"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElsElem = require("./components/ElsElem");
const ElsForm = require("./components/ElsForm");
const ElsExpBox = require("./components/ElsExpBox");
const ElsScrollBar = require("./components/ElsScrollBar");
const ElsPage = require("./components/ElsPage");
const ElsMenu = require("./components/ElsMenu");
const ElsSvg = require("./components/ElsSvg");
const MYLibPlugin = {
  install(app) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    (_b = (_a = ElsElem.ElsElemPlugin).install) == null ? void 0 : _b.call(_a, app);
    (_d = (_c = ElsForm.ElsFormPlugin).install) == null ? void 0 : _d.call(_c, app);
    (_f = (_e = ElsExpBox.ElsExpBoxPlugin).install) == null ? void 0 : _f.call(_e, app);
    (_h = (_g = ElsScrollBar.ElsScrollBarPlugin).install) == null ? void 0 : _h.call(_g, app);
    (_j = (_i = ElsPage.ElsPagePlugin).install) == null ? void 0 : _j.call(_i, app);
    (_l = (_k = ElsMenu.ElsMenuPlugin).install) == null ? void 0 : _l.call(_k, app);
    (_n = (_m = ElsSvg.ElsSvgPlugin).install) == null ? void 0 : _n.call(_m, app);
  }
};
exports.default = MYLibPlugin;
for (const k in ElsElem) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsElem[k]
    });
}
for (const k in ElsForm) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsForm[k]
    });
}
for (const k in ElsExpBox) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsExpBox[k]
    });
}
for (const k in ElsScrollBar) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsScrollBar[k]
    });
}
for (const k in ElsPage) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsPage[k]
    });
}
for (const k in ElsMenu) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsMenu[k]
    });
}
for (const k in ElsSvg) {
  if (k !== "default" && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => ElsSvg[k]
    });
}
