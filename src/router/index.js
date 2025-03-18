import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TanamanPage from "../views/TanamanPage.vue";
import TentangPage from "../views/TentangPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/tanaman",
    name: "Tanaman",
    component: TanamanPage,
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: TentangPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
