import ElsScrollBar from "./src/index";
import { default as default2 } from "./src/index";
const ElsScrollBarPlugin = {
  install(app) {
    app.component("els-scroll-bar", ElsScrollBar);
  }
};
export {
  default2 as ElsScrollBar,
  ElsScrollBarPlugin
};
