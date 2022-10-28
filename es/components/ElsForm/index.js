import ElsForm from "./src/index";
import { default as default2 } from "./src/index";
const ElsFormPlugin = {
  install(app) {
    app.component("els-form", ElsForm);
  }
};
export {
  default2 as ElsForm,
  ElsFormPlugin
};
