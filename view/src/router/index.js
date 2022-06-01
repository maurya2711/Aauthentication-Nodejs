import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SingleAnimeList from "../views/SingleAnimeList.vue";
import Setting from "../views/Setting.vue";

let token = localStorage.getItem("token");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/anime/:id",
    name: "SingleAnimeList",
    component: SingleAnimeList,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (!token && to.name !== "Login" && to.name !== "SignUp") {
    return { name: "Login" };
  }
});

export default router;
