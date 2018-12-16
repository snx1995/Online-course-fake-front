import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
import VueCookies from "vue-cookies";
Vue.use(Router);
Vue.use(VueCookies);


export default new Router({
  routes: [
    home,
  ]
})
