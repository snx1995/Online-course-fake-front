<template>
    <div class="course-header">
        <img src="../../../static/imgs/4.jpg" alt="" class="background">
        <div class="course-summary-content">
            <span>课程 \后端开发 \Java \SpringBoot构建电商基础秒杀项目</span>
            <h1>{{courseComputed.name}}</h1>
            <div class="course-features">
                <by-user v-bind="courseComputed.teacher" />
                <span>难度 中级</span>
                <span>时长 6小时31分</span>
                <span>学习人数 3792</span>
                <span>综合评分 9.2</span>
            </div>
        </div>
    </div>
</template>
<script>
import ByUser from "../../user/components/ByUser";
export default {
    name: "CourseBanner",
    components: {ByUser},
    props: ["course"],
    data() {
        return {
            
        }
    },
    computed: {
        courseComputed() {
            return this.course ? this.course : {};
        }
    }
}
</script>
<style lang="less" scoped>
    .course-header {
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;
        img.background {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: blur(10px);
            width: 120%;
            height: auto;
        }
        .course-summary-content {
            padding-left: 40px;
            height: 100%;;
            color: #fff;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            * {
                z-index: inherit;
            }
            .course-features {
                display: flex;
                justify-content: space-around;
                align-items: center;
                > * {
                    margin-right: 20px;
                }
                > span {
                    font-size: 0.8em;
                }
            }
        }
        
    }
</style>
