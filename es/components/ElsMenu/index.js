import ElsMenu from "./src/index";
import { default as default2 } from "./src/index";
export * from "./src/inter";
export * from "./src/util";
const ElsMenuPlugin = {
  install(app) {
    app.component("els-menu", ElsMenu);
  }
};
export {
  default2 as ElsMenu,
  ElsMenuPlugin
};
