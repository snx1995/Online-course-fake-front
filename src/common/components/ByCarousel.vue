<template>
    <div class="by-carousel">
        <div class="imgs">
            <transition-group name="fade">
                <a v-for="(img, index) in imgs" v-if="index == imgIndex" :key="img.src" :href="img.href">
                    <img :src="img.src" :alt="img.alt">
                </a>
            </transition-group>
        </div>
        <i class="switch-handler handler-left icon-chevron-left" @click="switchLeft"></i>
        <i class="switch-handler handler-right icon-chevron-right" @click="switchRight"></i>
        <div class="index-indicators">
            <div class="indicator" v-for="n in imgs.length" :key="n" :class="{active: imgIndex == n - 1}" @click="switchTo(n - 1)">{{n}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByCarousel",
    props: ["imgs"],
    data() {
        return {
            imgIndex: 0
        }
    },
    methods: {
        switchLeft() {
            if (this.imgIndex > 0) this.imgIndex--;
            else this.imgIndex = this.imgs.length - 1;
        },
        switchRight() {
            if (this.imgIndex < this.imgs.length - 1) this.imgIndex++;
            else this.imgIndex = 0;
        },
        switchTo(n) {
            this.imgIndex = n;
        }
    }
}
</script>
<style lang="less" scoped>
    .by-carousel {
        width: 100%;
        height: 100%;
        position: relative;
        .imgs {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .switch-handler {
            display: block;
            cursor: pointer;
            opacity: 0.6;
            position: absolute;
            top: 50%;
            width: 36px;
            height: 36px;
            line-height: 36px;
            border-radius: 50%;
            text-align: center;
            background-color: transparent;
            transform: translateY(-50%);
            font-size: 1.5em;
            transition: opacity 0.3s, background-color 0.3s;
            &.handler-left {
                left: 20px;
            }
            &.handler-right {
                right: 20px;
            }
            &:hover {
                color: #fff;
                opacity: 1;
                background-color: rgba(0, 0, 0, 0.4);
            }
        }
        .index-indicators {
            position: absolute;
            bottom: 20px;
            right: 20px;
            height: 20px;
            width: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            opacity: 0.8;
            transition: opacity 0.3s;
            &:hover {
                opacity: 1;
            }
            .indicator {
                cursor: pointer;
                margin-right: 5px;
                line-height: 18px;
                text-align: center;
                color: #7a7a7a;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: #fff;
                transition: background-color 0.3s;
                &.active {
                    background-color: rgb(242, 13, 13);
                    color: #fff;
                }
            }
        }
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
</style>
