<template>
    <div class="course-chapter-pane">
        <div class="title-content" @click="showChapterContent = !showChapterContent">
            <h3>{{chapter.title}}</h3>
            <i class="icon-arrow_drop_down_circle" :class="{open:showChapterContent}"></i>
        </div>
        <div class="chapter-content" v-show="showChapterContent">
            <p class="chapter-intro">{{chapter.intro}}</p>
            <ul>
                <li v-for="(section, index) in chapter.sections" :key="index">
                    <router-link :to="'/video/123'">
                        <span><i class="icon-play-circle"></i>{{section.title}}</span><i class="icon-circle-o"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "CourseChapter",
    props: ["chapter"],
    data() {
        return {
            showChapterContent: false
        }
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
        .title-content {
            border: 1px dotted transparent;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            * {
                padding: 0;
            }
            &:hover {
                border-bottom: 1px dotted #000;
            }
            i {
                &.open {
                    transform: rotate(360deg);
                }
                font-size: 1.2em;
                transform: rotate(180deg);
                transition: transform 0.5s;
                cursor: pointer;
            }
        }
        .chapter-content {
            height: auto;
            transition: all 0.5s;
        }
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
                &:hover {
                    color: rgb(242, 17, 17);
                    background-color: rgba(241, 65, 65, 0.1);
                }
                i {
                    padding: 0 10px;
                }
                a {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    text-decoration: none;
                    color: inherit;
                }
            }
        }
    }
</style>
