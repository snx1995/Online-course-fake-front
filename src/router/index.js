import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    home,
  ]
})
