<template>
    <div class="by-notify" @mouseenter="stopTimer" @mouseleave="startTimer">
        <i class="icon-close" @click="close"></i>
        <div class="msg-body">
            <i :class="style.icon" class="msg-icon"></i>
            <div class="content">
                <span class="title">{{style.title}}</span>
                <slot></slot>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByNotify",
    props: {
        duration: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: "info"
        }
    },
    data() {
        return {
            intervalIndex: -1
        }
    },
    methods: {
        startTimer() {
            if (this.duration > 0) {
                let $this = this;
                this.intervalIndex = setInterval(() => {
                    this.$emit("close")
                }, this.duration);
            }
        },
        stopTimer() {
            if (this.duration > 0) {
                clearInterval(this.intervalIndex);
            }
        },
        close() {
            console.log('close btn');
            this.$emit('close');
        }
    },
    mounted() {
        if (this.duration > 0) {
            this.intervalIndex = setInterval(() => {
                this.$emit("close")
            }, this.duration);
        }
    },
    computed: {
        style() {
            let style = {
                title: "提示",
                icon: "icon-info-circle",
                color: "#409EFF"
            }
            switch (this.type) {
                case "success":
                    style = {
                        title: "成功",
                        icon: "icon-check-circle",
                        color: "#67c23a"
                    }
                    break;
                case "error":
                    style = {
                        title: "错误",
                        icon: "icon-times-circle",
                        color: "#f56c6c"
                    }
                    break;
                case "info":
                    style = {
                        title: "提示",
                        icon: "icon-info-circle",
                        color: "#409EFF"
                    }
                    break;
                case "warning":
                    style = {
                        title: "警告",
                        icon: "icon-error",
                        color: "#e6a23c"
                    }
                    break;
                default:
                    break;
            }
            return style;
        }
    }

}
</script>
<style lang="less" scoped>
    .by-notify {
        margin-top: 20px;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 12px 24px rgba(7, 17, 27, 0.2);
        border-radius: 10px;
        position: relative;
        .icon-close {
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 10px;
            transition: transform 0.5s;
            &:hover {
                transform: rotate(360deg);
            }
        }
        .msg-body {
            padding: 10px;
            .msg-icon {
                vertical-align: top;
                display: inline-block;
                margin-right: 10px;
                font-size: 1.5em;
                &.icon-check-circle { // success
                    color: #67c23a;
                }
                &.icon-times-circle { // error
                    color: #f56c6c;
                }
                &.icon-info-circle { // info
                    color: #409EFF;
                }
                &.icon-error { // warning!!
                     color: #e6a23c;
                }
            }
            .content {
                display: inline-block;
                .title {
                    font-weight: bold;
                }
                
            }
        }
    }
</style>
