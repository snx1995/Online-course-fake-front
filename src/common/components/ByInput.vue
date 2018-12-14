<template>
    <div class="by-input">
        <div class="input-wrapper">
            <input :type="type" @input="$emit('input', $event.target.value)" :placeholder="placeholder" @blur="validate">
        </div>
        <transition name="tips">
            <span class="tips" v-show="isInvalid">{{validateRule.tips}}</span>
        </transition>
    </div>
</template>
<script>
export default {
    name: "ByInput",
    props: { 
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
            type: [String, Number, Boolean]
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            isInvalid: false,
        }
    },
    methods: {
        validate() {
            if (this.validateRule) {
                if (this.validateRule.check && !this.validateRule.check(this.value)) {
                    this.isInvalid = true;
                    this.$emit("invalid");
                } else this.isInvalid = false;
            }
        }
    }
}
</script>
<style lang="less" scoped>
@inputHeight: 50px;
.input-style {
    outline: none;
    box-shadow: none;
}
.by-input {
    margin: 10px;
    display: inline-block;
    width: fill-available;
    .input-wrapper {
        height: @inputHeight;
        width: 100%;
        input {
            .input-style();
            background-color: rgb(242, 242, 242);
            border-radius: 10px;
            font-size: 1em;
            padding: 0 @inputHeight / 2;
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            &:focus {
                border: 1px solid rgb(242, 13, 13);
            }
        }
    }
    .tips {
        padding: 5px 20px;
        font-size: 0.8em;
        color: red;
    }
}
.tips-enter, .tips-leave-to {
    opacity: 0;
}
.tips-enter-active, .tips-leave-active {
    transition: opacity 0.3s;
}
</style>
