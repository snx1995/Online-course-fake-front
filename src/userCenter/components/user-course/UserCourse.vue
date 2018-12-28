<template>
    <div class="user-summary">
        <div class="title">
            <h4>个人中心/我的课程</h4>
            <button v-if="loginUser.type <= 3" @click="$router.push('/userCenter/course/addNewCourse')">新建课程</button>
        </div>
        <div class="body">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name: "UserCourse",
    data() {
        return {

        }
    },
    computed: {
        loginUser() {
            return this.$store.state.userStore.user;
        }
    }
}
</script>
<style lang="less" scoped>
    .borderStyle() {
        border: none;
        outline: none;
        box-shadow: none;
    }
    .user-summary {
        box-sizing: border-box;
        width: 100%;
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            width: 100%;
            border-bottom: 1px solid rgb(242, 13, 13);
            button {
                cursor: pointer;
                padding: 10px 14px;
                background-color: rgb(242, 13, 13);
                color:#fff;
                border-radius: 8px;
                .borderStyle();
            }
        }
        .body {

        }
    }
</style>
