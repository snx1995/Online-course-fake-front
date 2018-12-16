<template>
    <div class="banner-bottom">
        <div class="item">
            <img src="../../../static/imgs/1.jpg" alt="">
            <span>Web前端工程师</span>
            <span>互联网时代最火爆的技术</span>
        </div>
        <div class="item">
            <img src="../../../static/imgs/2.jpg" alt="">
            <span>Web前端工程师</span>
            <span>互联网时代最火爆的技术</span>
        </div>
        <div class="item">
            <img src="../../../static/imgs/3.jpg" alt="">
            <span>Web前端工程师</span>
            <span>互联网时代最火爆的技术</span>
        </div>
        <div class="item">
            <img src="../../../static/imgs/4.jpg" alt="">
            <span>Web前端工程师</span>
            <span>互联网时代最火爆的技术</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "BannerBottom"
}
</script>
<style lang="less" scoped>
    @bannerWidth: 1200px;
    @bannerLeftWidth: 220px;
    @bannerBottomHeight: 140px;
    .banner-bottom {
        position: absolute;
        bottom: 0;
        left: @bannerLeftWidth;
        width: @bannerWidth - @bannerLeftWidth;
        height: 140px;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item {
            cursor: pointer;
            width: 160px;
            height: 140px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                transition: transform 0.3s;
            }
            span {
                transition: transform 0.3s;
                padding-top: 10px;
                &:last-child {
                    font-size: 0.8em;
                }
            }
            &:hover {
                img, span {
                    transform: translateY(-15%);
                }
            }
        }
    }
</style>
