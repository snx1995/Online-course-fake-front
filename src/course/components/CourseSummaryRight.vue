<template>
    <div class="course-announcement-right">
        <course-announcement />
    </div>
</template>
<script>
import CourseAnnouncement from "./CourseAnnouncement";

export default {
    name: "CourseAnnouncementRight",
    components: {CourseAnnouncement},
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    .course-announcement-right {
        box-sizing: border-box;
        width: 370px;
        height: auto;
    }
</style>
