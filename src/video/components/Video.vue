<template>
    <div class="video">
        <div class="video-title">
            <h2>第一章-基础知识</h2>
        </div>
        <div class="video-container">
        <by-video />
        <div class="video-side-pane">
            <div class="nav">
                <div class="nav-item">弹幕</div>
                <div class="nav-item">章节</div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import ByVideo from "../../common/components/ByVideo";
export default {
    name: "Video",
    components: {ByVideo},
    data() {
        return {
            videoUrl: "/media/resource/example2.avi"
        }
    }
}
</script>
<style lang="less" scoped>
    .video {
        background-color: #353535;
        height: 680px;
        width: 100%;
        .video-title {
            @height: 80px;
            color: white;
            width: 100%;
            height: @height;
            background-color: #222;
            h2 {
                line-height: @height;
                height: 100%;
                text-indent: 2em;
            }
        }
        .video-container {
            @videoHeight: 540px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 1200px;
            margin: 0 auto;
            height: 600px;
            video {
                width: 800px;
                height: @videoHeight;
                position: relative;
            }
            .video-side-pane {
                box-sizing: border-box;
                width: 400px;
                height: @videoHeight;
                background-color: rgb(7, 17, 27);
                .nav {
                    width: 100%;
                    height: 40px;
                    color: #5d5d5d;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .nav-item {
                        padding: 20px;
                        cursor: pointer;
                        border-bottom: 2px solid #5d5d5d;
                        &:hover {
                            color: #ddd;
                            border-bottom: 2px solid #ddd;
                        }
                    }
                }
            }
        }
    }
</style>
