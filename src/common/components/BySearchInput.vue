<template>
    <div class="by-input">
        <div class="input-wrapper">
            <input type="text" @input="$emit('input', $event.target.value)" :placeholder="placeholder">
            <div class="search-btn icon-search" @click="$emit('search')">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BySearchInput",
    props: {
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
        position: relative;
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
            border: 1px solid transparent;
            &:focus {
                border: 1px solid rgb(242, 13, 13);
            }
        }
        .search-btn {
            width: @inputHeight - 10px;
            height: @inputHeight - 10px;
            position: absolute;
            right: 10px;
            top: 5px;
            line-height: @inputHeight - 10px;
            text-align: center;
            color: #5d5d5d;
            &:hover {
                color: rgb(242, 13, 13);
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
