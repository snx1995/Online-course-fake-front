<template>
    <transition name="fade">
      <div class="login-container">
        <div class="login-pane" @click="$emit('close')"></div>
        <div class="pane">
          <div class="header">
            <span :class="{active: type == 0}"><a href="#" @click="switchTo(0)">登录</a></span>
            <span>|</span>
            <span :class="{active: type == 1}"><a href="#" @click="switchTo(1)">注册</a></span>
          </div>
          <div class="body">
            <div class="login" v-show="type == 0">
              <ByInput :validate-rule="validateRules.account" placeholder="您的账号或者邮箱" @invalid="log('invalid')" v-model="account" />
              <ByInput :validate-rule="validateRules.password" placeholder="您的密码" :type="'password'" @invalid="log('invalid')" v-model="password" />
            </div>
            <div class="register" v-show="type == 1">
              <h1>register</h1>
            </div>
          </div>
          <div class="footer">
            <by-button @click.native="login">确认</by-button>
            <by-button @click.native="$emit('close')">取消</by-button>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
    import ByInput from "./ByInput";
    import ByButton from "./ByButton";
    import axios from "axios";
    export default {
      name: "LoginPane",
      components: {ByInput, ByButton},
      data() {
        return {
          type: 0,
          account: "",
          password: "",
          validateRules: {
            account: {
              check(value) {
                return value; 
              },
              tips: "账号不能为空！"
            },
            password: {
              check(value) {
                return value; 
              },
              tips: "密码不能为空！"
            }
          }
        }
      },
      methods: {
        switchTo(tab) {
          this.type = tab;
        },
        log(...info) {
          console.log(...info);
        },
        login() {
          let $this = this;
          axios.get("/action/authority/login.action", {
            params: {
              account: $this.account,
              password: $this.password
            }
          }).then(response => {
            console.log(response);
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .login-container {
    width: 100%;
    height: 100%;
    position: fixed;
    .login-pane {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .pane {
      width: 450px;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      padding: 20px;
      .header {
        text-align: left;
        padding-left: 20px;
        span {
          padding: 0.5em 0;
          font-size: 1.2em;
          &:first-child, &:last-child {
            border-bottom: 2px solid #555;
          }
          &.active {
            color: rgb(242, 13, 13);
            border-bottom: 2px solid rgb(242, 13, 13);
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
      }
      .body {
        margin-top: 60px;
      }
      .footer {
        margin: 0 2em;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
</style>
