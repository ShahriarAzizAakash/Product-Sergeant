import Vue from "vue";
import Router from "vue-router";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";
import New from "@/components/products/New";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Signin
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/products",
      component: New
    }
  ]
});
