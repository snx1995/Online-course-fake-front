<template>
    <div class="course-summary">
        <course-banner :course="course"/>
        <course-nav v-model="currPage"/>
        <div class="course-container">
            <div class="course-chapters" v-show="currPage == 1">
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
            currPage: 1,
            course: null,
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
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            let courseId = vm.$route.params.courseId;
            getCourseInfo(courseId, vm);
        })
    },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
        let courseId = this.$route.params.courseId;
        getCourseInfo(courseId, this);
    },
    mounted() {
        let courseId = this.$route.params.courseId;
        this.$fServer.get("/action/course/getCourseOutlineDetail.action", {params: {courseId}})
            .then(response => {
                if (response.status == 200) {
                    let outlineMap = {};
                    if (response.data && response.data.length) {
                        response.data.forEach(e => {
                            if (!outlineMap[e.chapterNum]) {
                                outlineMap[e.chapterNum] = {
                                    chapterNum: e.chapterNum,
                                    chapterTitle: e.chapterTitle,
                                    sections: [
                                        {
                                            sectionNum: e.sectionNum,
                                            sectionTitle: e.sectionTitle,
                                            video: e.video,
                                            file: e.file
                                        }
                                    ]
                                }
                            } else {
                                outlineMap[e.chapterNum].sections.push({
                                    sectionNum: e.sectionNum,
                                    sectionTitle: e.sectionTitle,
                                    video: e.video,
                                    file: e.file
                                })
                            }
                        });
                    }
                    this.chapters = outlineMap;
                }
            })
    }
}

function getCourseInfo(courseId, $this) {
    $this.$fServer.get("/action/course/getCourseById.action", {params: {courseId}}).then(response => {
            if (response.status == 200) {
                $this.course = response.data;
            } else alert(response.status + ":" + response.data);
        })
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
            padding-bottom: 50px;
        }
    }
</style>
