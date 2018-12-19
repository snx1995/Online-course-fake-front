import Vue from 'vue'
import Router from 'vue-router'

import HomeMain from "../home/components/HomeMain";

import course from "./course";
import videoRouter from "./videoRouter";
import testRouter from "./testRouter";

import VueCookies from "vue-cookies";
Vue.use(Router);
Vue.use(VueCookies);


export default new Router({
  routes: [
    {
      path: "/",
      component: HomeMain
    },
    course,
    videoRouter,
    testRouter,
  ]
})
