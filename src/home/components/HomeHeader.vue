<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="../../../static/logo.png" alt="fake-front-logo">
    </div>
    <div class="link-list">
      <div class="link">免费课程</div>
      <div class="link">实战课程</div>
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
        <img :src="'/media' + loginUser.img">
        <div class="user-menu">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BySearchInput from "../../common/components/BySearchInput";
  export default {
    name: "HomeHeader",
    components: {BySearchInput},
    data() {
      return {
        keyword: ""
      }
    },
    computed: {
      isOnline() {
        let user = this.$store.state.userStore.user;
        return user && user.id;
      },
      loginUser() {
          return this.$store.state.userStore.user;
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      margin: 0 2em;
      .online-pane {
        @width: 40px;
        @arrowHeight: 10px;
        @menuBGColor: black;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          position: relative;
          cursor: pointer;
          width: @width;
          height: @width;
          border-radius: 50%;
          border: 2px solid transparent;
          &:hover {
            border: 2px solid rgba(242, 12, 12);
            // &::after {
            //   content: "";
            //   display: block;
            //   position: absolute;
            //   top: 100%;
            //   left: 50%;
            //   transform: translateX(-50%);
            //   width: 0;
            //   height: 0;
            //   border: @arrowHeight solid transparent;
            //   border-bottom: @arrowHeight solid @menuBGColor;
            // }
            &+.user-menu {
              display: block;
            }
          }
        }
        .user-menu {
          z-index: 200;
          background-color: @menuBGColor;
          display: none;
          position: absolute;
          top: @width + 10px;
          right: -1em;
          width: 200px;
          height: 120px;
          box-shadow: 0 12px 24px rgba(7, 17, 27, 0.2);
          transition: display 0.3s;
        }
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
