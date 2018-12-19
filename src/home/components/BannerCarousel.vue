<template>
    <div class="banner-carousel">
        <ByCarousel :imgs="imgs" />
    </div>
</template>
<script>
import ByCarousel from "../../common/components/ByCarousel";
export default {
    name: "BannerCarousel",
    components: {ByCarousel},
    data() {
        return {
            imgs: [
                {
                    src: "../../../static/imgs/1.jpg",
                    alt: "1",
                    href: "/#/course/37"
                },
                {
                    src: "../../../static/imgs/2.jpg",
                    alt: "2",
                    href: "/#/course/37"
                },
                {
                    src: "../../../static/imgs/3.jpg",
                    alt: "3",
                    href: "/#/course/37"
                },
                {
                    src: "../../../static/imgs/4.jpg",
                    alt: "4",
                    href: "/#/course/37"
                },
                {
                    src: "../../../static/imgs/5.jpg",
                    alt: "5",
                    href: "/#/course/37"
                },
                {
                    src: "../../../static/imgs/6.jpg",
                    alt: "6",
                    href: "/#/course/37"
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    @bannerHeight: 500px;
    @bannerWidth: 1200px;
    @bannerLeftWidth: 220px;
    @bannerBottomHeight: 140px;
    .banner-carousel {
        position: absolute;
        top: 0;
        left: @bannerLeftWidth;
        width: @bannerWidth - @bannerLeftWidth;
        height: @bannerHeight - @bannerBottomHeight;
        background-color: #555;
    }
</style>
