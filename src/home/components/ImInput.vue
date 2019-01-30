<template>
    <div class="im-input">
        <div class="im-send icon-paper-plane-o" @click="$emit('send')"></div>

        <textarea cols="30" rows="10" class="im-input-text" :value='value' @input="$emit('input', $event.target.value)"></textarea>
        <span class="count">{{wordCanEnter}}</span>
    </div>
</template>
<style lang="scss">
    .im-input {
        width: 100%;
        height: 100%;
        position: relative;
        .im-input-text {
            resize: none;
            border: none;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            padding: 0.5em;
            display: block;
            float: right;
            width: 85%;
            height: 100%;
        }
        .im-send {
            position: relative;
            font-size: 1.5em;
            cursor: pointer;
            background-color: rgb(244, 244, 244);
            box-sizing: border-box;
            width: 15%;
            height: 100%;
            float: right;
            margin: 0;
            padding: 0;
            text-align: center;
            &:before {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &:hover {
                background-color: rgb(230, 230, 230);
            }
            &:active {
                background-color: rgb(244, 244, 244);
            }
        }
        .count {
            color: #ddd;
            position: absolute;
            bottom: 1%;
            right: 16%;
        }
    }
</style>
<script>
export default {
    name: 'ImInput',
    props: ['value'],
    data() {
        return {
            wordCanEnter: 300,
            msg: ''
        }
    },
    methods: {
    },
    watch: {
        value() {
            this.wordCanEnter = 300 - this.value.length;
            let el = this.$el.children[2];
            if (this.wordCanEnter < 0) {
                el.style.color = 'red';
            } else el.style.color = '#ddd';
        }
    }
}
</script>
