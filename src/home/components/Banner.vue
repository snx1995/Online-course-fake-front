<template>
    <div class="home-banner">
        <banner-carousel />
        <banner-bottom />
        <banner-left />
    </div>
</template>
<script>
import BannerLeft from "./BannerLeft";
import BannerBottom from "./BannerBottom";
import BannerCarousel from "./BannerCarousel";
export default {
    name: "Banner",
    components: {BannerLeft, BannerBottom, BannerCarousel},

}
</script>
<style lang="less" scoped>
    .home-banner {
        margin: 40px auto;
        overflow: hidden;
        position: relative;
        width: 1200px;
        background-color: white;
        height: 500px;
        border-radius: 20px;
        box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.2)
    }
</style>
