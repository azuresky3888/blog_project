import Vue from "vue";
import Router from "vue-router";
import Home from "../Home.vue";
import Java from "../Java.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/java",
      name: "Java",
      component: Java,
    },
  ],
});
