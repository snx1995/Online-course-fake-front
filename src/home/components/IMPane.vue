<template>
    <div class="im-pane">
        <div class="im-indicator" @click="showIMPane = !showIMPane" v-show="!showIMPane">
            {{msgUnread == 0 ? "全部已读" : msgUnread + "条未读消息"}}
        </div>
        <transition name="fade">
            <div class="im-pane-containter" v-show="showModal">
                <div class="im-pane-mask" @click="showIMPane = false"></div>
                <div class="im-pane">

                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "IMPane",
    data() {
        return {
            msgUnread: 100,
            showIMPane: false
        }
    },
    computed: {
        showModal() {
            if (this.showIMPane) this.$emit("open-modal");
            return this.showIMPane;
        }
    }
}
</script>
<style lang="less" scoped>
    .im-pane {
        .im-indicator {
            padding: 0 20px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
            color: #fff;
            position: fixed;
            bottom: 0;
            right: 20px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            width: fit-content;
            background-color: rgb(247, 72, 72);
            box-shadow: 0px 0 12px rgba(7, 17, 27, 0.2);
        }
        .im-pane-containter {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .im-pane-mask {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.3);
            }
            .im-pane {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 800px;
                height: 600px;
                background-color: #fff;
                border-radius: 10px;
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
