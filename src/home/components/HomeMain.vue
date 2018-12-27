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
                if (response.status == 200) {
                    let type = response.data.filter(e => e.level == 1);
                    type.forEach(e => {
                        let courseRow = {
                            title: e.name,
                            courses: []
                        };
                        $this.courses.push(courseRow);
                        this.$fServer.get("/action/course/getCourseByType.action?typeId=" + e.id + "&start=0&length=10")
                            .then(response => courseRow.courses = response.data);
                    })
                }
            })
    }   
}
</script>
<style lang="less" scoped>

</style>
