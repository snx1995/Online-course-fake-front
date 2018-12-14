<template>
    <button class="by-button"><slot></slot></button>
</template>
<script>
export default {
    name: "ByButton",
}
</script>
<style lang="less" scoped>
.by-button {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: rgb(242, 13, 13);
    color: white;
    height: 3em;
    padding-left: 2em;
    padding-right: 2em;
    margin: 5px;
    border-radius: 7px;
    cursor: pointer;
    &:active {
        background-color: rgb(146, 5, 5);
    }
}
</style>
