<template>
    <div class="home-course-row">
        <div class="row-content">
            <h3 class="row-title">
            {{data.title.split("").join(" / ")}}
        </h3>
        <div class="row-content">
            <div class="row-item" v-for="(item, index) in data.courses" :key="index">
                <router-link :to="'/course/7'" class="router-link">
                    <img :src="item.src" :alt="item.alt">
                    <p class="course-title">{{item.title}}</p>
                </router-link>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CourseRow",
    props: ["data"]
}
</script>
<style lang="less" scoped>
    .home-course-row {
        width: 100%;
        height: auto;
        padding: 20px;
        margin-top: 40px;
        box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.1);
        box-sizing: border-box;
        .row-content {
            width: 1200px;
            margin: 0 auto;
            .row-title {
                text-align: center;
                color: rgb(247, 72, 72);
            }
            .row-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;
                .row-item {
                    cursor: pointer;
                    width: 216px;
                    margin-bottom: 20px;
                    img {
                        width: 100%;
                        height: 120px;
                        border-radius: 5px;
                        transition: box-shadow 0.2s, transform 0.2s;
                    }
                    p.course-title {
                        margin-top: 15px;
                        text-decoration: none;
                        color: #5d5d5d;
                    }
                    &:hover {
                        p.course-title {
                            color: rgb(242, 13, 13);
                        }
                        img {
                            transform: translateY(-4%);
                            box-shadow: 8px 8px 20px rgba(7, 17, 27, 0.4);
                        }
                    }

                }
            }
        }
    }
    .router-link {
        text-decoration: none;
    }
</style>
