import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Indexpage from "../views/IndexPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Indexpage,
  },
  {
    path: "/:category",
    component: Indexpage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
