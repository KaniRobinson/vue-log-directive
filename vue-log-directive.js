import directive from "./directive";

export default {
  install(app) {
    if (app.version[0] !== "3") throw new Error("You must be using Vue 3 to use this directive");
    directive(app);
  },
};
