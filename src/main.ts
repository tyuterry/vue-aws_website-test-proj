import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";

//preview plugin
import Previewer from "virtual:vue-component-preview";

//icon package
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCaretDown,
  faXmark,
  faChevronRight,
  faChevronLeft,
  faCircle,
  faPodcast,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { faCircle as faCircleR } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faTwitter, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./assets/main.scss";

library.add(
  faCaretDown,
  faXmark,
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCircleR,
  faPodcast,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faTwitch,
  faYoutube
);

const app = createApp(App);

app.use(router);
app.use(Previewer);
app.component("FAicon", FontAwesomeIcon);

app.mount("#app");
