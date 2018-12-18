<template>
    <div>
        <Banner />
        <course-row v-for="(row, index) in courses" :key="index" :data="row" />
    </div>
</template>
<script>
import Banner from "./Banner";
import CourseRow from "./CourseRow";
export default {
    name: "HomeMain",
    components: {Banner, CourseRow},
    data() {
        return {
            courses: [
                {
                title: "实战推荐",
                courses: [
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战1", src: "../../../static/imgs/1.jpg", alt: "1"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战5", src: "../../../static/imgs/5.jpg", alt: "5"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战6", src: "../../../static/imgs/6.jpg", alt: "6"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战7", src: "../../../static/imgs/1.jpg", alt: "7"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"}
                ]
                },
                {
                title: "新上好课",
                courses: [
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战1", src: "../../../static/imgs/1.jpg", alt: "1"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战5", src: "../../../static/imgs/5.jpg", alt: "5"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战6", src: "../../../static/imgs/6.jpg", alt: "6"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战7", src: "../../../static/imgs/1.jpg", alt: "7"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                ]
                },
                {
                title: "新手入门",
                courses: [
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战1", src: "../../../static/imgs/1.jpg", alt: "1"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战5", src: "../../../static/imgs/5.jpg", alt: "5"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"}
                ]
                },
                {
                title: "技能提升",
                courses: [
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战1", src: "../../../static/imgs/1.jpg", alt: "1"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战7", src: "../../../static/imgs/1.jpg", alt: "7"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战2", src: "../../../static/imgs/2.jpg", alt: "2"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战3", src: "../../../static/imgs/3.jpg", alt: "3"},
                    {title: "微信小程序入门与实战 常用组件API开发技巧i项目实战4", src: "../../../static/imgs/4.jpg", alt: "4"}
                ]
                }
            ]
        }
    }    
}
</script>
<style lang="less" scoped>

</style>
