<template>
    <transition name="fade">
      <div class="login-container">
        <div class="login-pane" @click="$emit('close')"></div>
        <div class="pane">
          <div class="header">
            <span :class="{active: value == 'login'}"><a href="#" @click="switchTo('login')">登录</a></span>
            <span>|</span>
            <span :class="{active: value == 'register'}"><a href="#" @click="switchTo('register')">注册</a></span>
          </div>
          <div class="body">
            <div class="login" v-show="value == 'login'">
              <ByInput :validate-rule="validateRules.account" placeholder="您的账号或者邮箱" @invalid="log('invalid')" v-model="account" />
              <ByInput :validate-rule="validateRules.password" placeholder="您的密码" :type="'password'" @invalid="log('invalid')" v-model="password" />
            </div>
            <div class="register" v-show="value == 'register'">
              <by-input placeholder="email" v-model="email" />
              <by-input placeholder="password" type="password" v-model="passwd" />
              <by-input placeholder="password confirm" type="password" v-model="passwdConfirm" />
              <by-input placeholder="验证码" v-model="validateCode"/>
            </div>
          </div>
          <div class="footer" v-show="value == 'login'">
            <by-button @click.native="login">确认</by-button>
            <by-button @click.native="$emit('close')">取消</by-button>
          </div>
          <div class="footer" v-show="value == 'register'">
            <by-button @click.native="login">注册<i class="icon-account_box"></i></by-button>
            <by-button @click.native="$emit('close')">取消</by-button>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
    import ByInput from "../../common/components/ByInput";
    import ByButton from "../../common/components/ByButton";
    import ByCheckbox from "../../common/components/ByCheckbox";

    import axios from "axios";
    import md5 from "blueimp-md5";
    export default {
      name: "LoginPane",
      components: {ByInput, ByButton, ByCheckbox},
      props: ["page", "value"],
      data() {
        return {
          account: "",
          password: "",
          name: "",
          email: "",
          passwd: "",
          passwdConfirm: "",
          validateCode: "",
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
          this.$emit("input", tab);
        },
        log(...info) {
          console.log(...info);
        },
        login() {
          let $this = this; 
          axios.get("/action/authority/login.action", {
            params: {
              account: $this.account,
              password: md5($this.password, "hit-go-forward")
            }
          }).then(response => {
            console.log(response);
            let user;
            if (response.data.status == 200) {
              user = response.data.data;
              this.$store.commit("setUser", response.data.data);
              this.$fclient.store(this.$fconfig.LOCAL_USER_KEY, response.data.data);
              this.$emit("success", "login");
            } else alert(response.data.data);
            this.$emit("close");
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .login-container {
    z-index: 2000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
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
        margin: 30px 0 10px 0;
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
    transform: translateY(-5%);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
</style>
