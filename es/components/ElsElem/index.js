import ElsElem from "./src/index";
import { default as default2 } from "./src/index";
export * from "./src/inter";
export * from "./src/util";
const ElsElemPlugin = {
  install(app) {
    app.component("els-elem", ElsElem);
  }
};
export {
  default2 as ElsElem,
  ElsElemPlugin
};
