<template>
    <div class="home-footer">
        <span>banyq &copy; 2018-12-18</span>
        <span>www.byq.com</span>
        <span>fake-front all right reserved.</span>
    </div>
</template>
<script>
export default {
    name: "HomeFooter",    
}
</script>
<style lang="less" scoped>
    .home-footer {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #5d5d5d;
        font-size: 0.9m;
        span {
            margin: 0 20px;
        }
    }
</style>
