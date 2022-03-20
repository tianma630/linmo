import { createApp } from "vue";
import {
  Button,
  ImagePreview,
  Dialog,
  Field,
  CellGroup,
  Toast,
  Cascader,
  Popup,
  Picker,
} from "vant";

import App from "./App.vue";
import router from "./router";

const components = [
  Button,
  ImagePreview,
  Dialog,
  Field,
  CellGroup,
  Toast,
  Cascader,
  Popup,
  Picker,
];

const app = createApp(App);

components.map((component) => app.use(component));

app.use(router).mount("#app");
