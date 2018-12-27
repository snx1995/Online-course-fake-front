<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="../../../static/logo.png" alt="fake-front-logo">
    </div>
    <div class="link-list">
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
          <ul>
            <li><router-link :to="'/userCenter'">
              <i class="icon-user-circle"></i>个人中心
            </router-link></li>
            <li v-if="loginUser.type <= 2">
              <i class="icon-beenhere"></i>审批中心
            </li>
            <li>
              我的课程
            </li>
            <li>
              关于网站
            </li>
            <li @click="logout">
              退出登录
            </li>            
          </ul>
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
        keyword: "",
        showUserMenu: false
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
      },
      logout() {
        this.$fClient.logout();
      },
      userCenter() {
        this.$router.push("/userCenter")
      }
    },
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
    min-width: 1280px;
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
        @menuBGColor: #fff;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &:hover {
          img {
            border: 2px solid rgba(242, 12, 12);
          }
          .user-menu {
            display: block;
          }
        }
        img {
          position: relative;
          cursor: pointer;
          display: block;
          width: @width;
          height: @width;
          border-radius: 50%;
          border: 2px solid transparent;
        }
        .user-menu {
          display: none;
          z-index: 200;
          background-color: @menuBGColor;
          position: absolute;
          top: 70px;
          right: -1em;
          width: auto;
          box-shadow: 0 0px 24px rgba(7, 17, 27, 0.2);
          padding: 10px 0;
          border-radius: 5px;
          transition: display 0.3s;
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            width: 100%;
            li {
              cursor: pointer;
              padding: 5px 20px;
              width: 5em;
              color: #5d5d5d;
              text-align: center;
              &:hover {
                background-color: rgb(242, 13, 13);
                color: #fff;
              }
            }
          }
          // &:active {
          //   display: none;
          // }
        }
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
