<template>
    <div class="by-checkbox">
        <div class="checkbox-icon icon-checkbox-outline"></div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "ByCheckbox"
}
</script>
<style lang="less" scoped>
    .by-checkbox {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .checkbox-icon {
            font-size: 24px;
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
        }
    }
</style>
