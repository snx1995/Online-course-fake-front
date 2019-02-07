<template>
    <div class="course-summary">
        <course-banner :course="course"/>
        <course-nav v-model="currPage"/>
        <div class="course-container">
            <div class="course-chapters" v-show="currPage == 1">
                <course-chapter v-for="(chapter, index) in chapters" :key="index" :chapter="chapter" />
                <span v-if="!chapters.length">--- 暂无章节 ---</span>
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
            chapters: [],
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
                if (response.status == 20000) {
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
            if (response.status == 20000) {
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
            .course-chapters {
                span {
                    margin-top: 100px;
                    display: block;
                    text-align: center;
                    width: 800px;
                }
            }
        }
    }
</style>
