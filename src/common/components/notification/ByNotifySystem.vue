<template>
    <div class="by-notify-content">
        <transition-group 
            tag="div"
            name="msgs">

            <by-notify v-for="(msg, index) in msgList" 
            :key="msg.$key" 
            :duration="msg.duration"
            :type="msg.type"
            @close="closeNotify(index)">
                <p>{{msg.msg}}</p>
            </by-notify>

        </transition-group>
    </div>
</template>
<script>
import ByNotify from "./ByNotify";
export default {
    name: "ByNotifySystem",
    components: {ByNotify},
    data() {
        return {
            msgList: [],
            msgIndex: 0
        }
    },
    methods: {
        newNotification(msg) {
            msg.$key = this.msgIndex;
            this.msgList.unshift(msg);
            this.msgIndex ++;
        },
        closeNotify(key) {
            this.msgList.splice(key, 1);
        },
        getIndex(index) {
            return (m => m)(index);
        }
    }
}
</script>
<style lang="less" scoped>
    .by-notify-content {
        position: fixed;
        top: 60px;right: 20px;
        width: 300px;
        height: fit-content;
    }

    .msgs-move {
        transition: transform 0.5s;
    }
    .msgs-enter, .msgs-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }
    .msgs-enter-active, .msgs-leave-active {
        transition: opacity 0.5s, transform 0.5s;
    }
</style>
