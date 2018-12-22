<template>
    <div class="by-video-progress">
        <div class="progress-loaded" :style="{width: loaded + '%'}"></div>
        <div class="progress-played" :style="{width: value + '%'}"></div>
        <div class="play-progress-outer">
            <div @drag.prevent="" class="by-video-progress-handler" @mousedown="mousedown" @mouseup="mouseup" :style="{left: value + '%'}"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByVideoProgress",
    props: ["value", "loaded"],
    data() {
        return {
            slideEnabled: false,
        }
    },
    methods: {
        mousedown() {
            console.log("mousedown");
        },
        mouseup() {
            console.log("mouseup");
        }
    },
    mounted() {
        let $this = this;
        console.log(this);
        let outer = $this.$el.children[2];
        let val = 0;

        document.addEventListener("mousedown", event => {
            let target = event.target;
            if (target.classList.contains("by-video-progress-handler")) {
                console.log("moveenabled");                
                $this.slideEnabled = true;
            }
        });

        document.addEventListener("mousemove", event => {
            if ($this.slideEnabled) {
                // console.log("moving");
                let start = getOffsetLeft(outer);
                let width = outer.clientWidth;
                let mousePosX = event.clientX;

                console.log(start, width, mousePosX);
                
                val = (mousePosX - start) / width;
                if (val < 0) val = 0;
                else if (val > 1) val = 1;
                console.log(val);
                this.$emit("input", val);
            }
        });
        document.addEventListener("mouseup", event => {
            if ($this.slideEnabled) {
                $this.slideEnabled = false;
                this.$emit("progresschange", val * 100);
            }
        });

        function getOffsetLeft(el){
            return el.offsetParent
            ? el.offsetLeft + getOffsetLeft(el.offsetParent)
            : el.offsetLeft
        }
    }
}
</script>
<style lang="less" scoped>
    .by-video-progress {
        @barHeight: 3px;
        width: 100%;
        height: @barHeight;
        background-color: rgba(255, 255, 255, 0.2);
        position: relative;
        .progress-loaded, .progress-played {
            left: 0;
            top: 0;
            position: absolute;
            height: @barHeight;
        }
        .progress-loaded {
            background-color: rgba(255, 255, 255, 0.8);
        }
        .progress-played {
            background-color: rgba(242, 13, 13, 0.8);
        }
        .play-progress-outer {
            position: absolute;
            background-color: transparent;
            height: @barHeight;
            width: 100%;
            .by-video-progress-handler {
                // z-index: 100;
                cursor: pointer;
                border-radius: 50%;
                width: 20px;
                height: 10px;
                position: absolute;
                // left: 200px;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(255, 255, 255, 1);
                &:hover {
                    background-color: rgba(230, 230, 230, 1);
                }
                &:active {
                    background-color: rgba(200, 200, 200, 1);
                }
                
            }
        }
    }
</style>
