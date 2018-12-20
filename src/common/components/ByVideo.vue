<template>
    <div class="by-video-wrapper">
        <video src="/media/resource/example.mp4" id="byVideoPlayer-vfgbty4533451" :width="width" :height="height">
            您的浏览器不受支持，推荐使用最新版Chrome观看！
        </video>
        <div class="by-video-bottom">
            <by-video-progress :position="position" :loaded="loaded"/>
            <div class="by-video-controls">
                <div class="control-left">
                    <i :class="playIcon" @click="playControl"></i>
                    <i class="icon-spin" @click="refresh"></i>
                </div>
                <div class="control-middle">
                    <input type="text" v-model="barrage" v-show="enableBarrage">
                    <button v-show="enableBarrage">咻~</button>
                </div>
                <div class="control-right">
                    <by-checkbox 
                    style="color: rgb(242, 13, 13);" 
                    :box-style="'toggle'" 
                    v-model="enableBarrage">
                    弹幕
                    </by-checkbox>
                    <i class="icon-volume-medium"></i>
                    <i class="icon-aspect_ratio"></i>
                    <i class="icon-crop_free"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ByVideoProgress from "./ByVideoProgress";
import ByCheckbox from "./ByCheckbox";
import { callbackify, isRegExp } from 'util';
export default {
    name: "ByVideo",
    components:{ByVideoProgress, ByCheckbox},
    props: {
        width: {
            type: String,
            default: "800px"
        },
        height: {
            type: String,
            default: "540px"
        },
        src: {
            type: String,
            default: "/media/resource/default.mp4"
        }
    },
    data() {
        return {
            video: {},
            state: 0, // 0 loading, 1 palying, 2 paused
            preState: 2,
            position: 0,
            loaded: 0,
            enableBarrage: true,
            barrage: "",
            isReady: false,

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
        },
        refresh() {
            let video = this.video;
            video.load();
            this.state = 2;
            this.preState = 2;
            this.loaded = 0;
            this.position = 0;
            this.isReady = false;
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
        let setLoadedBar = () => {
            let buffered = this.video.buffered;
            let duration = this.video.duration;
            let len = buffered.length - 1;
            try {
                this.loaded = this.video.clientWidth * buffered.end(len > 0 ? -1 : len) / duration;
            } catch(e) {} 
        }

        this.video = document.querySelector("video");
        this.video.oncanplay = event => {
            console.log("canplay");
            setLoadedBar();
            this.state = this.preState;
            this.isReady = true;
        }
        this.video.onwaiting = event => {
            console.log("waiting");
            this.preState = this.state;
            this.state =  0;
        }
        this.video.ontimeupdate = event => {
            if (this.isReady) {
                let currentTime = this.video.currentTime;
                let duration = this.video.duration;
                this.position = this.video.clientWidth * currentTime / duration;
            }
        }
        this.video.onended = event => {
            this.$emit("ended");
            console.log("ended");
            this.video.pause();
            this.video.currentTime = 0;
            this.state = 2;
        }
        this.video.onprogress = event => {
            setLoadedBar();
        }

        
    }
}
</script>
<style lang="less" scoped>
    @keyframes rotate {
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
        background-color: #222;
        .by-video-bottom {
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 70px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            .by-video-controls {
                padding-bottom: 10px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50px;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                box-shadow: 0 -12px 24px rgba(7, 17, 27, 0.3);
                .control-left, .control-middle, .control-right {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .control-left {
                    width: 100px;
                }
                .control-middle {
                    input {
                        color: white;
                        text-indent: 1em;
                        border-radius: 5px 0 0 5px;
                        box-sizing: border-box;
                        display: inline-block;
                        height: 30px;
                        width: 250px;
                        background: transparent;
                        border: 1px solid rgba(242, 13, 13, 1);
                        border-right: none;
                        outline: none;
                        &:active, &:focus {
                            border: 1px solid rgba(242, 13, 13, 1);
                        }
                    }
                    button {
                        cursor: pointer;
                        color: white;
                        font-weight: bold;
                        display: block;
                        height: 30px;
                        width: auto;
                        padding: 0 1em;
                        background: rgba(242, 13, 13, 1);
                        border: none;
                        outline: none;
                        box-shadow: none;
                        border-radius: 0 5px 5px 0;
                        &:hover {
                            background: rgba(242, 13, 13, 0.8);
                        }
                        &:active {
                            background: rgba(242, 13, 13, 0.6);
                        }
                    }
                }
                i {
                    font-size: 1.5em;
                    // color: rgba(242, 13, 13, 1);
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s;
                    margin-right: 10px;
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
            }
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
<style lang="less">
    
</style>

