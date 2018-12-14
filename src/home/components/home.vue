<template>
    <div class="home">
      <HomeHeader @login="showLoginModal('login')" @register="showLoginModal('register')" :is-online="isOnline" />
      <Banner />
      
      <LoginPane v-model="loginPanePage" v-show="showLoginPane" @close="closeLoginModal" @success="authoritySuccess($event)"/>
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import LoginPane from "./LoginPane";
import Banner from "./Banner";
export default {
  name: 'Home',
  components: {LoginPane, HomeHeader, Banner},
  data() {
    return {
      loginPanePage: "login",
      showLoginPane: false,
      isOnline: false
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
  }
</style>
