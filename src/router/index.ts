import { createRouter, createWebHistory } from "vue-router";
import PageReInventView from "@/views/page/PageReInventView.vue";
import PageConsoleVue from "@/views/page/PageConsole.vue";
import PageFrameWorkVue from "@/views/page/PageFrameWork.vue";

import PageConsleHomeVue from "@/views/page/PageConsleHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PageFrameWorkVue,
      children: [
        {
          path: "",
          name: "ReInventView",
          component: PageReInventView,
        },
      ],
    },
    {
      path: "/console",
      name: "console",
      component: PageConsoleVue,
      children: [
        {
          path: "",
          name: "ConsoleHome",
          component: PageConsleHomeVue,
        },
      ],
    },
  ],
});

export default router;
