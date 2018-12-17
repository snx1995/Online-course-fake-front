<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="../../../static/logo.png" alt="fake-front-logo">
    </div>
    <div class="link-list">
      <div class="link">免费课程</div>
      <div class="link">实战课程</div>
      <div class="link">就业班</div>
      <div class="link">博客</div>
      <div class="link">问答</div>
      <div class="link">直播</div>
      <div class="search-content">
        <by-search-input placeholder="搜索fake-front" v-model="keyword" @search="search"/>
      </div>
    </div>
    <div class="container">
      <div v-if="!isOnline" class="login-pane">
        <span><a href="#" @click="$emit('login')">登录</a></span>
        <span>/</span>
        <span><a href="#" @click="$emit('register')">注册</a></span>
      </div>
      <div v-if="isOnline" class="online-pane">
        <span><a href="#">{{loginUser}}</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  import BySearchInput from "../../common/components/BySearchInput";
  export default {
    name: "HomeHeader",
    props: ["isOnline"],
    components: {BySearchInput},
    data() {
      return {
        keyword: ""
      }
    },
    computed: {
      loginUser() {
          return this.$cookies.get("userName");
      }
    },
    methods: {
      search() {
        alert("search" + this.keyword);
      }
    }
  }
</script>

<style lang="less" scoped>
  @headerHeight: 80px;
  .header {
    background-color: #fff;
    color: #5d5d5d;
    // position: absolute;
    // top: 0;
    // left: 0;
    position: relative;
    width: 100%;
    min-width: 1366px;
    height: @headerHeight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    .logo {
      cursor: pointer;
      padding-left: 30px;
      display: inline-block;
      height: 120%;
      overflow: hidden;
      width: 200px;
      img {
        width: auto;
        height: 100%;
      }
    }
    .link-list {
      display: flex;
      align-items: center;
      .link {
        font-weight: bold;
        display: inline-block;
        line-height: @headerHeight;
        height: 100%;
        cursor: pointer;
        padding: 0 1.5em;
        margin-left: 10px;
        &:hover {
          background-color: rgb(244, 244, 244);
          color: rgb(242, 13, 13);
        }
      }
      .search-content {
        display: inline-block;
        line-height: @headerHeight;
        height: 100%;
        cursor: pointer;
        padding: 0 1.5em;
        margin-left: 10px;
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
