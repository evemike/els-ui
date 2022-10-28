import ElsPage from "./src/index";
import { default as default2 } from "./src/index";
const ElsPagePlugin = {
  install(app) {
    app.component("els-page", ElsPage);
  }
};
export {
  default2 as ElsPage,
  ElsPagePlugin
};
