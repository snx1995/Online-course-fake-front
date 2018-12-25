<template>
    <div class="by-notify" @mouseenter="stopTimer" @mouseleave="startTimer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "ByNotify",
    props: {
        duration: {
            type: Number,
            default: 0
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
        }
    },
    mounted() {
        if (this.duration > 0) {
            this.intervalIndex = setInterval(() => {
                this.$emit("close")
            }, this.duration);
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
        
    }
</style>
