<template>
    <div class="course-nav">
        <div class="item-content">
            <div class="nav-item" :class="{active : currPage == 1}" @click="currPage = 1">课程主页</div>
            <div class="nav-item" :class="{active : currPage == 2}" @click="currPage = 2">课后讨论</div>
            <div class="nav-item" :class="{active : currPage == 3}" @click="currPage = 3">问学霸</div>
            <div class="nav-item" :class="{active : currPage == 4}" @click="currPage = 4">评分</div>
        </div>
        <div class="course-learn-pane">
            <button class="course-learn-btn">加入学习</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "CourseNav",
    data() {
        return {
            currPage: 1
        }
    }
}
</script>
<style lang="less" scoped>
    @navHeight: 70px;
    .course-nav {
        box-shadow: 0 12px 24px rgba(7, 17, 27, 0.2);
        width: 100%;
        height: @navHeight;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item-content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .nav-item {
                font-weight: bold;
                position: relative;
                cursor: pointer;
                height: @navHeight;
                line-height: @navHeight;
                padding: 0 30px;
                margin-left: 30px;
                &.active {
                    color: rgb(242, 17, 17);
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        background-color: rgb(242, 17, 17);
                        transform: translateX(-50%);
                        width: 25px;
                        height: 3px;
                    }
                }
            }
        }
        .course-learn-pane {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            background-color: white;
            height: 180px;
            width: 290px;
            padding: 20px 20px 20px 20px;
            border-radius: 20px;
            box-shadow: 0 -12px 24px rgba(7, 17, 27, 0.2), 0 12px 24px rgba(7, 17, 27, 0.2);
            z-index: 100;
            align-self: flex-end;
            transform: translateY(20px);
            .course-learn-btn {
                font-weight: bold;
                font-size: 1.1em;
                cursor: pointer;
                @height: 50px;
                border-radius: @height / 2;
                width: 100%;
                height: @height;
                margin: 10px 0;
                border: none;
                box-shadow: none;
                outline: none;
                color: white;
                background-color: rgb(242, 17, 17);
                &:active {
                    background-color: rgb(146, 5, 5);
                }
            }
        }
    }
</style>
