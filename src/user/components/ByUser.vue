<template>
    <div class="by-user">
        <img class="by-user-img" :src="user.src" :alt="user.intro">
        <div class="by-intro">
            <span class="by-user-name"></span>
            <span class="by-user-school"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "ByUser",
    props: ["user"] 
}
</script>
<style lang="less" scoped>

</style>
