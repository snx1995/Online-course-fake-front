// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store/store";
import server from "./utils/nework";
import client from "./utils/client";
import config from "./config";

Vue.config.productionTip = false

Vue.prototype.$fserver = server;
Vue.prototype.$fclient = client;
Vue.prototype.$fconfig = config;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
