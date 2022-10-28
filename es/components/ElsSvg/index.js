import ElsSvg from "./src/index";
import { default as default2 } from "./src/index";
const ElsSvgPlugin = {
  install(app) {
    app.component("els-svg", ElsSvg);
  }
};
export {
  default2 as ElsSvg,
  ElsSvgPlugin
};
