<template>
  <div class="header">
    <div class="logo">
      <img src="../../../static/default.jpg" alt="fake-front-logo">
    </div>
    <div class="link-list">
      <div class="links">免费课程</div>
      <div class="links">实战课程</div>
      <div class="links">就业班</div>
      <div class="links">博客</div>
    </div>
    <div class="container">
      <div v-if="!isOnline" class="login-pane">
        <span><a href="#" @click="$emit('login')">登录</a></span>
        <span>/</span>
        <span><a href="#" @click="$emit('register')">注册</a></span>
      </div>
      <div v-if="isOnline" class="online-pane">
        <span><a href="#">登录用户</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    props: ["isOnline"],
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  @headerHeight: 80px;
  .header {
    color: #5d5d5d;
    position: fixed;
    width: 100%;
    min-width: 800px;
    height: @headerHeight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    .logo {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      width: 150px;
      img {
        width: auto;
        height: 100%;
      }
    }
    .link-list {
      display: flex;
      align-items: center;
      .links {
        display: inline-block;
        line-height: @headerHeight;
        height: 100%;
        cursor: pointer;
        padding: 0 1.5em;
        margin-left: 10px;
        &:hover {
          background-color: rgb(244, 244, 244);
        }
      }
    }
    .container {
      line-height: @headerHeight;
      height: 100%;
      padding: 2em;
      display: inline-block;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
