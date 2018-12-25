<template>
    <div class="by-notify-content">
        <transition-group 
            tag="div"
            name="msgs">
            <by-notify v-for="(msg, index) in msgList" 
            :key="msg.key" 
            :duration="5000"
            @close="closeNotify(index)">
                <h3 @click="closeNotify(index)">{{"this is No." + index + ":" + msg.msg}}</h3>
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
        newNotification() {
            this.msgList.unshift({
                type: "success",
                msg: this.msgIndex + ": this is another msg fot test",
                key: this.msgIndex
            })
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
