<template>
    <div class="course-chapter-pane">
        <h3>{{chapter.title}}</h3>
        <p class="chapter-intro">{{chapter.intro}}</p>
        <ul>
            <li v-for="(section, index) in chapter.sections" :key="index">
                <span><i class="icon-play-circle"></i>{{section.title}}</span><i class="icon-circle-o"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "CourseChapter",
    props: ["chapter"],
    mounted() {
        console.log(this.$store)
    }
}
</script>
<style lang="less" scoped>
    .course-chapter-pane {
        box-sizing: border-box;
        margin-top: 40px;
        border-radius: 15px;
        width: 800px;
        height: auto;
        padding: 24px 32px;
        background-color: white;
        box-shadow: 0 12px 20px rgba(7, 17, 27, 0.2);
        .chapter-intro {
            font-size: 0.8em;
        }
        ul {
            list-style: none;
            padding: 0;
            li {
                color: #5d5d5d;
                cursor: pointer;
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:hover {
                    color: rgb(242, 17, 17);
                    background-color: rgba(241, 65, 65, 0.1);
                }
                i {
                    padding: 0 10px;
                }
            }
        }
    }
</style>
