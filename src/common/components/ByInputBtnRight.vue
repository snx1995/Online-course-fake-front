<template>
    <span class="by-input-btn-right" :class="size">
        <input :type="type" @input="$emit('input', $event.target.value)" :placeholder="placeholder">
        <button @click="$emit('btn-click')"><slot></slot></button>
    </span>
</template>
<script>
export default {
    name: "ByInputBtnRight",
    props: {
        size: {
            type: String,
            default: "middle",
        },
        validateRule: {
            type: Object,   // validateRule = {check() {...}, tip: ""}
            required: false,
            default: () => new Object()
        },
        type: {
            type: String,
            required: false,
            default: "text"
        },
        value: {
            type: [String, Number, Boolean],
            default: ""
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            inputValue: ""
        }
    },
}
</script>
<style lang="less" scoped>
    @themeColor: rgb(242, 13, 13);
    @themeHoverColor: rgb(252, 56, 56);
    .by-input-btn-right {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
            text-indent: 1em;
            outline: none;
            box-shadow: none;
            border-radius: 10px 0 0 10px;
            display: inline-block;
            border: 1px solid transparent;
            border-right: none;
            background: rgb(242, 242, 242);
            box-sizing: border-box;
            width: fill-available;
            &:focus {
                border: 1px solid @themeColor;
                border-right: none;
            }
        }
        button {
            cursor: pointer;
            padding-left: 1em;
            padding-right: 1em;
            border-radius: 0 10px 10px 0;
            color: #fff;
            border: 1px solid transparent;
            background-color: @themeColor;
            display: inline-block;
            box-sizing: border-box;
            outline: none;
            width: fit-content;
            white-space: nowrap;
            &:hover {
                background-color: @themeHoverColor;
            }
            &:active {
                background-color: @themeColor;
            }
        }
        &.small {
            input, button {
                height: 30px;
            }
        }
        &.middle {
            input, button {
                height: 40px;
            }
        }
        &.large {
            input, button {
                height: 50px;
            }
        }
    }
</style>
