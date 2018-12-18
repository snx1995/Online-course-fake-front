<template>
    <div class="by-user">
        <img class="by-user-img" :src="userComputed.img" :alt="userComputed.name">
        <div class="by-intro">
            <span class="by-user-name">{{userComputed.name}}</span>
            <span class="by-user-school">{{userComputed.school.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByUser",
    props: ["user"],
    computed: {
        userComputed() {
            return this.user ? this.user : {school:{}};
        }
    }
}
</script>
<style lang="less" scoped>
    .by-user {
        display: flex;
        justify-content: flex-start;
        width: auto;
        height: 50px;
        .by-user-img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        .by-intro {
            margin-left: 10px;
            height: 90%;
            width: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            font-size: 0.9em;
            .by-user-name {
                font-weight: bold;
            }
        }
    }
</style>
