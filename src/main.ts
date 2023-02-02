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
  faEnvelope,
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
  faCube,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";

import {
  faCircle as faCircleR,
  faBell as faBellR,
  faCircleQuestion as faCircleQuestionR,
  faStar as faStarR,
  faPaperPlane as faPaperPlaneR,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import vueClickOutsideElement from "vue-click-outside-element";
import "./assets/main.scss";
import PortalVue from 'portal-vue';

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
  faYoutube,
  faBellR,
  faCircleQuestionR,
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
  faCube,
  faStarR,
  faFileInvoice,
  faPaperPlaneR
);

const app = createApp(App);

app.use(router);
app.use(Previewer);
app.use(vueClickOutsideElement);
app.use(PortalVue);
app.component("FAicon", FontAwesomeIcon);

app.mount("#app");
