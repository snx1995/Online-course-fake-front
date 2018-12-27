<template>
    <span class="by-switch" :class="{active: truth}" @click="onClick">
        <input type="checkbox" :name="name" checked :value="truth ? activeValue : inactiveValue">
    </span>
</template>
<script>
export default {
    name: "BySwitch",
    props: {
        value: {
            type: [String, Boolean, Number],
            default: "inactive"
        },
        activeValue: {
            type: [String, Boolean, Number],
            default: "active"
        },
        inactiveValue: {
            type: [String, Boolean, Number],
            default: "inactive"
        },
        name: {
            type: String,
            default: "switch"
        }
    },
    data() {
        return {
            truth: this.value == this.activeValue
        }
    },
    methods: {
        onClick() {
            this.truth = !this.truth;
            this.$emit("input", this.truth ? this.activeValue : this.inactiveValue);
        }
    },
}
</script>
<style lang="less" scoped>
    .by-switch {
        vertical-align: bottom;
        cursor: pointer;
        position: relative;
		display: inline-block;
		height: 20px;
		width: 40px;
		border-radius: 11px;
		border: 1px solid rgb(255, 73, 73);
		background-color: rgb(255, 73, 73);
        transition: background-color 0.3s, border-color 0.3s;
        &:after {
            background-color: #fff;
			content: "";
			position: absolute;
			top: 2px;
			left: 2px;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			transition: all 0.3s;
        }
        &.active {
			background-color: rgb(19, 206, 102);
            border-color: rgb(19, 206, 102);
            &:after {
                left: 100%;
			    margin-left: -18px;
            }
        }
        input {
            display: none;
        }
    }
</style>
