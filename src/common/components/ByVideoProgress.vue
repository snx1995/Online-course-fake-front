<template>
    <div class="by-video-progress">
        <div class="progress-loaded" :style="{width: loaded + 'px'}"></div>
        <div class="progress-played" :style="{width: position + 'px'}"></div>
        <div class="play-progress-outer">
            <div class="by-progress-drag-wrapper">
                <div class="handler" :style="{left: position + 'px'}"></div>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByVideoProgress",
    props: ["position", "loaded"],
    data() {
        return {

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
            // width: 400px;
        }
        .progress-played {
            background-color: rgba(242, 13, 13, 0.8);
            // width: 200px;
        }
        .play-progress-outer {
            position: absolute;
            background-color: transparent;
            height: @barHeight;
            width: 100%;
            .handler {
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
                    .by-progress-drag-wrapper {
                        display: block;
                    }
                }
                
            }
        }
    }
</style>
