<template>
  <div id="app">
      <HomeHeader @login="showLoginModal('login')" @register="showLoginModal('register')" :is-online="isOnline" />
      <div class="content">
        <router-view />
      </div>
      <IMPane />
      <LoginPane v-model="loginPanePage" v-show="showLoginPane" @close="closeLoginModal" @success="authoritySuccess($event)"/>
  </div>
</template>

<script>
import HomeHeader from "./home/components/HomeHeader";
import LoginPane from "./home/components/LoginPane";
import IMPane from "./home/components/IMPane";
export default {
  name: 'App',
  components: {LoginPane, HomeHeader, IMPane},
  data() {
    return {
      loginPanePage: "login",
      showLoginPane: false,
      isOnline: false,
    }
  },
  methods: {
    showLoginModal(page) {
      this.showLoginPane = true;
      this.loginPanePage = page;
    },
    closeLoginModal() {
      this.showLoginPane = false;
    },
    authoritySuccess(type) {
      console.log(type);
      if (type == "login") this.isOnline = true;
    }
  }
}
</script>

<style>
@import url("../static/common/style.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-width: 1200px;
  padding-bottom: 80px;
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(252, 252, 252);
}
.show-modal {
  overflow: hidden;
}
</style>
