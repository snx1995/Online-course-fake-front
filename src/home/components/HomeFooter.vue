<template>
    <div class="home-footer">
        <span>banyq &copy; 2018</span>
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
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #ddd;
        background-color: #9d9d9d;
        font-size: 0.9m;
        span {
            margin: 0 20px;
        }
    }
</style>
