<template>
    <div class="by-video-wrapper">
        <video src="/media/resource/example.mp4" id="byVideoPlayer-vfgbty4533451" :width="width" :height="height">
            您的浏览器不受支持，推荐使用最新版Chrome观看！
        </video>
        <div class="by-video-controls">
            <i :class="playIcon" @click="playControl"></i>
            <i class="icon-refresh"></i>
            <i class="icon-fullscreen"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByVideo",
    props: {
        width: {
            type: String,
            default: "800px"
        },
        height: {
            type: String,
            default: "540px"
        }
    },
    data() {
        return {
            video: {},
            state: 2, // 0 loading, 1 palying, 2 paused
        }
    },
    methods: {
        playControl() {
            let video = this.video;
            if (!video) return;
            switch (this.state) {
                case 0:
                    break;
                case 1:
                    this.state = 2;
                    video.pause();
                    break;
                case 2:
                    this.state = 1;
                    video.play();
                    break;
                default:
                    return "icon-error";
            }
        }
    },
    computed: {
        playIcon() {
            switch (this.state) {
                case 0:
                    return "icon-spinner9"
                    break;
                case 1:
                    return "icon-pause";
                    break;
                case 2:
                    return "icon-play";
                    break;
                default:
                    return "icon-error";
            }
        }
    },
    mounted() {
        this.video = document.querySelector("video");
    }
}
</script>
<style lang="less" scoped>
    @keyframes rotate {
        // 0% {
        //     transform: rotate(0);
        // }
        // 100% {
        //     transform: rotate(-360deg);
        // }
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .by-video-wrapper {
        overflow: hidden;
        padding: 0;
        position: relative;
        height: auto;
        width: fit-content;
        video {
            background-color: #222;
        }
        .by-video-controls {
            padding-bottom: 10px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 0;
            height: 50px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 1px solid #07111b;
            box-shadow: 0 -12px 24px rgba(7, 17, 27, 0.3);
            background-color: rgba(0, 0, 0, 0.3);
            i {
                font-size: 1.5em;
                color: #fff;
                cursor: pointer;
                &:first-child {
                    margin-left: 20px;
                }
                &:last-child {
                    margin-right: 20px;
                }
                &:hover {
                    color: #ccc;
                }
                &:active {
                    color: #fff;
                }
                &.icon-spinner9 {
                    animation: rotate 1s infinite linear;
                }
            }
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
<style lang="less">
    
</style>

