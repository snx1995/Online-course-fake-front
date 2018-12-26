<template>
  <div id="app">
      <HomeHeader @login="showLoginModal('login')" @register="showLoginModal('register')" :is-online="isOnline" />
      <div class="content" >
        <router-view />
      </div>
      <home-footer />
      <IMPane />
      <LoginPane v-model="loginPanePage" v-show="showLoginPane" @close="closeLoginModal" @success="authoritySuccess($event)"/>
  </div>
</template>

<script>
import HomeHeader from "./home/components/HomeHeader";
import LoginPane from "./home/components/LoginPane";
import IMPane from "./home/components/IMPane";
import HomeFooter from "./home/components/HomeFooter";

export default {
  name: 'App',
  components: {LoginPane, HomeHeader, IMPane, HomeFooter},
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
    },
    showMsg() {
      console.log("should show msg");
      this.$refs.notification.newNotification();
    }
  },
  mounted() {
    let userInfo = this.$fclient.read(this.$fconfig.LOCAL_USER_KEY);
    if (userInfo) {
      this.isOnline = true;
      this.$store.commit("setUser", userInfo);
    }

  },
  
}
</script>

<style>
@import url("../static/common/style.css");
#app {
  font-family: "微软雅黑", "Microsoft Ya Hei", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-width: 1280px;
}
body, html {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(252, 252, 252);
}
.show-modal {
  overflow: hidden;
}
</style>
