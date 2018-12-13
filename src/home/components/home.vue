<template>
    <div class="home">
      <HomeHeader @login="showLoginPane = true" :is-online="isOnline" />
      <LoginPane v-show="showLoginPane" @close="showLoginPane = false"/>
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import LoginPane from "./LoginPane";
export default {
  name: 'Home',
  components: {LoginPane, HomeHeader},
  data() {
    return {
      showLoginPane: false,
      isOnline: false
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
  }
</style>
