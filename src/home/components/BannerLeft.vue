<template>
    <div class="banner-left">
        <ul class="banner-menu">
            <li>
                前沿 / 区块链 / 人工智能
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">
                    <h1>1</h1>
                </div>
            </li>
            <li>
                前端 / 小程序 / JS
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">
                    <h1>1</h1>
                </div>
            </li>
            <li>
                后端 / JAVA / Python
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">

                </div>
            </li>
            <li>
                移动 / Android / IOS
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">

                </div>
            </li>
            <li>
                云计算 / 大数据 / 容器
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">

                </div>
            </li>
            <li>
                运维 / 测试 / 数据库
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">

                </div>
            </li>
            <li>
                UI设计 / 3D动画 / 游戏
                <i class="icon-keyboard_arrow_right"></i>
                <div class="item-detail">
                    <h1>1</h1>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Banner"
}
</script>
<style lang="less" scoped>
    @bannerWidth: 1000px;
    @bannerLeftWidth: 220px;
    .banner-left {
        background-color: #2b333b;
        position: absolute;
        top: 0;
        left: 0;
        width: @bannerLeftWidth;
        height: 100%;
        ul {
            margin: 0;
            padding: 5px 0 5px 20px;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.6);
            height: 100%;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            li {
                @height: 4em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 5px 0 0 5px;
                padding: 0 0 0 10px;
                line-height: @height;
                height: @height;
                cursor: default;
                .item-detail {
                    display: none;
                    background-color: #fff;
                    width: 500px;
                    position: absolute;
                    top: 0;
                    left: 100%;
                    height: 100%;
                }
                &:hover {
                    background-color: rgba(244, 244, 244, 0.5);
                    color: #fff;
                    .item-detail {
                        display: block;
                    }
                }
                
            }
        }
    }
</style>
