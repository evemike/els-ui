import ElsExpBox from "./src/index";
import { default as default2 } from "./src/index";
const ElsExpBoxPlugin = {
  install(app) {
    app.component("els-exp-box", ElsExpBox);
  }
};
export {
  default2 as ElsExpBox,
  ElsExpBoxPlugin
};
