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
            courses: []
        }
    },
    mounted() {
        let courseTypes;
        let $this = this;
        $this.$fServer.get("/action/course/getAllCourseType.action")
            .then(response => {
                if (response.status == 20000) {
                    let type = {};
                    response.data.forEach(e => {
                        if (e.level == 1) {
                            e['children'] = [];
                            type[e.id] = e;
                        } else if (e.level == 2) {
                            type[e.parent]['children'].push(e);
                        }
                    })
                    this.$store.commit("storeCourseType", type);
                    console.log(this.$store.state.courseStore.courseType);
                    for (let s in type) {
                        if (type.hasOwnProperty(s)) {
                            let e = type[s];
                            let courseRow = {
                                title: e.name,
                                courses: []
                            };
                            $this.courses.push(courseRow);
                            this.$fServer.get("/action/course/getCourseByType.action?typeId=" + e.id + "&start=0&length=10")
                                .then(response => courseRow.courses = response.data);
                        }
                    }
                }
            })
    }   
}
</script>
<style lang="less" scoped>

</style>
