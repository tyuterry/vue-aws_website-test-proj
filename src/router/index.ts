import { createRouter, createWebHistory } from "vue-router";
import PageReInventView from "@/views/page/PageReInventView.vue";
import PageConsoleVue from "@/views/page/PageConsole.vue";
import PageFrameWorkVue from "@/views/page/PageFrameWork.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PageFrameWorkVue,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "/",
          component: PageReInventView,
        },
      ],
    },
    {
      path: "/console/",
      name: "console",
      component: PageConsoleVue,
    },
  ],
});

export default router;
