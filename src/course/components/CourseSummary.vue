<template>
    <div class="course-summary">
        <course-banner />
        <course-nav />
        <div class="course-container">
            <div class="course-chapters">
                <course-chapter v-for="(chapter, index) in chapters" :key="index" :chapter="chapter" />
            </div>
            <course-summary-right />
        </div>
    </div>
</template>
<script>
import CourseBanner from "./CourseBanner";
import CourseNav from "./CourseNav";
import CourseChapter from "./CourseChapter";
import CourseSummaryRight from "./CourseSummaryRight";

export default {
    name: "CourseSummary",
    components: {CourseBanner, CourseNav, CourseChapter, CourseSummaryRight},
    data() {
        return {
            chapters: [
                {
                    title: "第1章 课程介绍",
                    intro: "本章中将会针对课程安排进行概要介绍。",
                    sections: [
                        {title: "1-1 课程介绍1(04：50)"},
                        {title: "1-2 课程介绍2(04：50)"},
                        {title: "1-3 课程介绍3(04：50)"},
                        {title: "1-4 课程介绍4(04：50)"},
                    ]
                },
                {
                    title: "第2章 应用SpringBoot完成基础项目搭建",
                    intro: "本章中将带领大家使用SpringBoot快速搭建一个web mvc的完整项目，并完成接入mybatis完成基础数据库的访问。",
                    sections: [
                        {title: "2-1 使用IDEA创建maven项目1(04：50)"},
                        {title: "2-2 使用IDEA创建maven项目2(04：50)"},
                        {title: "2-3 使用IDEA创建maven项目3(04：50)"},
                        {title: "2-4 使用IDEA创建maven项目4(04：50)"},
                        {title: "2-5 使用IDEA创建maven项目4(04：50)"},
                        {title: "2-6 使用IDEA创建maven项目4(04：50)"},
                        {title: "2-7 使用IDEA创建maven项目4(04：50)"},
                        {title: "2-8 使用IDEA创建maven项目4(04：50)"},
                        {title: "2-9 使用IDEA创建maven项目4(04：50)"},
                    ]
                },
                {
                    title: "第1章 课程介绍",
                    intro: "本章中将会针对课程安排进行概要介绍。",
                    sections: [
                        {title: "1-1 课程介绍1(04：50)"},
                        {title: "1-2 课程介绍2(04：50)"},
                        {title: "1-3 课程介绍3(04：50)"},
                        {title: "1-4 课程介绍4(04：50)"},
                    ]
                },
                {
                    title: "第1章 课程介绍",
                    intro: "本章中将会针对课程安排进行概要介绍。",
                    sections: [
                        {title: "1-1 课程介绍1(04：50)"},
                        {title: "1-2 课程介绍2(04：50)"},
                        {title: "1-3 课程介绍3(04：50)"},
                        {title: "1-4 课程介绍4(04：50)"},
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .course-summary {
        width: 100%;
        .course-container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
