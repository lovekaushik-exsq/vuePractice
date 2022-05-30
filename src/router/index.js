import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutPage.vue";
import Home from "../views/HomePage.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
