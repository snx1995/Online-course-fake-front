<template>
    <div class="user-center">
        <div class="center-header">
            <img :src="headerImg" :title="loginUser.name" class="header-background">
        </div>
        <div class="center-body">
            <div class="left-menu">
                <ul>
                    <li :class="{active: index == 0}" @click="changeIndex(0)">
                        <i class="icon-list-ul"></i>概况
                    </li>
                    <li :class="{active: index == 1}" @click="changeIndex(1)">
                        <i class="icon-user-circle"></i>个人信息
                    </li>
                    <li :class="{active: index == 2}" @click="changeIndex(2)">
                        <i class="icon-local_library"></i>我的课程
                    </li>
                    <li :class="{active: index == 3}" @click="changeIndex(3)">
                        <i class="icon-star"></i>我的博客
                    </li>
                    <li :class="{active: index == 4}" @click="changeIndex(4)">
                        <i class="icon-globe"></i>历史
                    </li>
                </ul>
            </div>
            <div class="right-content">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserCenter",
    data() {
        return {
            headerImg: "/media/resource/defaultBg.jpg",
        }
    },
    computed: {
        loginUser() {
            return this.$store.state.userStore.user;
        },
        index() {
            switch (this.$route.path) {
                case "/userCenter":
                    return 0;
                case "/userCenter/info":
                    return 1;
                case "/userCenter/course":
                    return 2;
                case "/userCenter/blog":
                    return 3;
                case "/userCenter/history":
                    return 4;
                default:
                    return -1;            
            }
        }
    },
    methods: {
        changeIndex(index) {
            switch (index) {
                case 0:
                    this.$router.push("/userCenter");
                    break;
                case 1:
                    this.$router.push("/userCenter/info");
                    break;
                case 2:
                    this.$router.push("/userCenter/course");
                    break;
                case 3:
                    this.$router.push("/userCenter/blog");
                    break;
                case 4:
                    this.$router.push("/userCenter/history");
                    break;
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .user-center {
        .center-header {
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
            .header-background {
                width: 120%;
                height: auto;
                filter: blur(20px);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .center-body {
            position: relative;
            width: 1200px;
            margin: 0 auto;
            padding-top: 40px;
            .right-content {
                vertical-align: top;
                height: auto;
                display: inline-block;
                width: 950px;
            }
            .left-menu {
                display: inline-block;
                width: 150px;
                padding-right: 20px;
                ul {
                    width: 100%;
                    list-style: none;
                    padding: 0;
                    border-right: 1px solid rgb(242, 13, 13);
                    li {
                        color: inherit;
                        text-decoration: none;
                        position: relative;
                        padding: 10px 20px;
                        margin: 10px;
                        margin-right: 0;
                        cursor: pointer;
                        font-size: 16px;
                        border-radius: 10px 0 0 10px;
                        a {
                            color: inherit;
                            text-decoration: none;
                        }
                        i {
                            margin-right: 5px;
                        }
                        &:hover {
                            background-color: rgb(244, 244, 244);
                            color: rgba(242, 13, 13, 0.6);
                        }
                        &.active {
                            @color: rgb(242, 13, 13);
                            background-color: @color;
                            color:#fff;
                            &:after {
                                content: "";
                                position: absolute;
                                left: 141px;
                                top: 0;
                                width: 0;
                                height: 0;
                                border-left: 10px solid @color;
                                border-right: 10px solid transparent;
                                border-top: 20px solid transparent;
                                border-bottom: 20px solid transparent;

                            }
                        }
                    }
                }
            }
        }
    }
</style>
