import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

const app = createApp(App);

app.use(router).use(vuetify);

app.mount("#app");
