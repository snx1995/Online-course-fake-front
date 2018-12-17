<template>
    <div class="home">
      <HomeHeader @login="showLoginModal('login')" @register="showLoginModal('register')" :is-online="isOnline" />
      <div class="content">
        <router-view />
      </div>
      <IMPane />
      <LoginPane v-model="loginPanePage" v-show="showLoginPane" @close="closeLoginModal" @success="authoritySuccess($event)"/>
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import LoginPane from "./LoginPane";
import IMPane from "./IMPane";
export default {
  name: 'Home',
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
<style lang="less" scoped>
  .home {
    width: 100%;
    padding-bottom: 100px;
    .content {
      min-width: 1366px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
