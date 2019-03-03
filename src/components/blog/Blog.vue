<template>
    <div class="blog-container">
        <div class="header-img-container">
            <img src="../../../static/imgs/1.jpg" alt="" class="header-img">
        </div>
        <div class="header">
            <div class="by-btn">
                <router-link to="/writeBlog">
                    <i class="icon-mode_edit"></i>写 博 客
                </router-link>
            </div>
        </div>
        <div class="content">
            <div class="left">
                <div class="hot-blog-container">
                    <h1><router-link :to="'/blog/article/' + hotBlog.id">{{hotBlog.title}}</router-link></h1>
                    <div class="detail-container">
                        <span>{{hotBlog.userName}}</span>
                        <span>{{hotBlog.updateDate}}</span>
                        <span>{{hotBlog.typeName}}</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <span class="title">飙升榜</span>
                <ul class="up-list">
                    <li v-for="(blog, index) in upList" :key='index'>
                        <span class="list-index">{{index + 1}}</span>
                        <span class="list-title">
                            <router-link :to="'/blog/article/' + blog.id">{{blog.title}}</router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
@themeColor: rgb(255, 81, 0);
.blog-container {
    width: 100%;
    min-height: 400px;
    a {
        color: inherit;
        text-decoration: none;
    }
    .header-img-container {
        width: 100%;
        height: 150px;
        position: relative;
        overflow: hidden;
        .header-img  {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120%;
            height: auto;
            filter: blur(12px);
        }
    }
    .header {
        display: flex;
        flex-direction: row-reverse;
        height: 50px;
        width: 100%;
        background: rgb(244, 244, 244);
        box-shadow: 0 12px 24px rgba(7, 17, 27, 0.2);
        align-items: center;
        .by-btn {
            color: rgb(244, 244, 244);
            font-size: 0.8em;
            background: @themeColor;
            margin-right: 50px;
            padding-left: 20px;
            padding-right: 20px;
            i {
                margin-right: 5px;
            }
        }
    }
    .content {
        margin: 0 auto;
        width: 1100px;
        height: auto;
        display: flex;
        justify-content: space-around;
        .left {
            width: 750px;
            .hot-blog-container {
                box-sizing: border-box;
                padding: 50px;
                width: 700px;
                height: 300px;
                h1 {
                    width: 100%;
                    text-align: center;
                    color: @themeColor;
                    margin-bottom: 0;
                }
                .detail-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    color: #5d5d5d;
                    border-bottom: 1px dashed #888;
                    padding: 10px 50px;
                    span {
                        font-size: 0.8em;
                    }
                }
            }
        }
        .right {
            width: 300px;
            padding: 50px 20px;
            box-sizing: border-box;
            .title {
                box-sizing: border-box;
                display: block;
                padding: 5px;
                width: 100%;
                font-size: 0.8em;
                color: #eee;
                padding-left: 20px;
                background: @themeColor;
            }
            .up-list {
                list-style: none;
                padding: 0;
                margin: 10px 0;
                width: 100%;
                li {
                    padding: 5px 0;
                    font-size: 0.8em;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    &:hover {
                        font-size: 1em;
                        padding: 10px 0;
                    }
                    .list-index {
                        padding: 5px;
                        background: #ddd;
                        color: #fff;
                        display: inline-block;
                        width: 1.2em;
                        height: 1.2em;
                        text-align: center;
                    }
                    .list-title {
                        display: inline-block;
                        max-width: 210px;
                        padding: 5px;
                        white-space:nowrap; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:first-child {
                        .list-index {
                            background: @themeColor;
                        }
                        .list-title {
                            color: @themeColor;
                        }
                    }
                    &:nth-child(2) {
                        .list-index {
                            background: rgb(252, 173, 3);
                        }
                        .list-title {
                            color: rgb(252, 173, 3);
                        }
                    }
                }
            }
        }
    }
    
}
</style>
<script>
export default {
    name: "Blog",
    data() {
        return {
            hotBlog: {
                id: 0,
                title: "SSM框架实训教程-初始开发环境搭建",
                updateDate: "2019-03-03 15:50:00",
                userName: "banyq",
                typeName: "计算机"
            },
            upList: [
                {
                    id: 0,
                    title: "SSM框架实训教程-初始开发环境搭建",
                    updateDate: "2019-03-03 15:50:00",
                    userName: "banyq",
                    typeName: "计算机"
                },
                {
                    id: 1,
                    title: "SSM框架实训教程-初始开发环境搭建",
                    updateDate: "2019-03-03 15:50:00",
                    userName: "banyq",
                    typeName: "计算机"
                },
                {
                    id: 2,
                    title: "SSM框架实训教程-初始开发环境搭建",
                    updateDate: "2019-03-03 15:50:00",
                    userName: "banyq",
                    typeName: "计算机"
                },
                {
                    id: 3,
                    title: "SSM框架实训教程-初始开发环境搭建",
                    updateDate: "2019-03-03 15:50:00",
                    userName: "banyq",
                    typeName: "计算机"
                },
                {
                    id: 4,
                    title: "SSM框架实训教程-初始开发环境搭建",
                    updateDate: "2019-03-03 15:50:00",
                    userName: "banyq",
                    typeName: "计算机"
                }
            ]
        }
    }
}
</script>

