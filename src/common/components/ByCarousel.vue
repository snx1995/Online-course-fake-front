<template>
    <div class="by-carousel">
        <div class="imgs">
            <!-- <transition-group
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"> -->
            <transition-group name="fade">
                <a v-for="(img, index) in imgs" v-show="index == imgIndex" :key="img.src" :href="img.href">
                    <img :src="img.src" :alt="img.alt" :key="img.src">
                </a>
            </transition-group>
        </div>
        <i class="switch-handler handler-left icon-chevron-left" @click="switchLeft"></i>
        <i class="switch-handler handler-right icon-chevron-right" @click="switchRight"></i>
        <div class="index-indicators">
            <div class="indicator" v-for="n in imgs.length" :key="n" :class="{active: imgIndex == n - 1}" @mouseenter="switchTo(n - 1)">{{n}}</div>
        </div>
    </div>
</template>
<script>
import Velocity from "velocity-animate";
import Axios from 'axios';
export default {
    name: "ByCarousel",
    props: ["imgs"],
    data() {
        return {
            imgIndex: 0,
            timer: -1
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
        },
        beforeEnter(el) {
            console.log(el);
            console.log("beforeEnter");
            el.style.transform = "translateX(-100%)";
        },
        enter(el, done) {
            console.log("enter");
            Velocity(el, 'stop');
            Velocity(el, {
                transform: "translateX(0)"
            }, {
                duration: 1000,
                easing: [ 0.4, 0.01, 0.165, 0.99 ],
                complete: done
            })
        },
        afterEnter(el) {
            console.log("afterEnter");
        },
        beforeLeave(el) {
            console.log(el);
            console.log("beforeLeave");
        },
        leave(el, done) {
            console.log("leave");
            Velocity(el, 'stop');
            Velocity(el, {
                transform: "translateX(100%)"
            }, {
                duration: 1000,
                easing: [ 0.4, 0.01, 0.165, 0.99 ],
                complete: done
            })
        },
        afterLeave(el) {
            console.log("afterLeave");
        }
    },
    mounted() {
        this.timer = setInterval(this.switchRight, 5000);
        
        this.$el.addEventListener('mouseenter', () => {
            clearInterval(this.timer);
        });
        this.$el.addEventListener('mouseleave', () => {
            this.timer = setInterval(this.switchRight, 5000);
        })

    }
}
</script>
<style lang="less" scoped>
    .by-carousel {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .imgs {
            position: relative;
            width: 100%;
            height: 100%;
            a {
                position: absolute;
                top: 0;
                left: 0;
                img {
                    width: 100%;
                    height: 100%;
                }               
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
            text-align: center;
            background-color: transparent;
            transform: translateY(-50%);
            font-size: 2em;
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

    .slide-enter {
        transform: translateX(-100%);
    }
    .slide-leave-to {
        transform: translateX(100%);
    }
    .slide-enter-active, .slide-leave-active {
        transition: transform 1s;
    }
    .slide-enter-to {
        transform: translateX(0);
    }
</style>
