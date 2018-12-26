<template>
    <div class="test-container">
        <ul>
            <li>
                <label>Notification: </label>
                <select v-model="msgType">
                    <option value="success">success</option>
                    <option value="error">error</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                </select> 
                <input type="text" v-model="msg">
                <button @click="emitMsg">emit</button>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msgType: "success",
            msg: "",
        }
    },
    methods: {
        emitMsg() {
            this.$byNotify.emit(this.msgType, this.msg);
        }
    }
}
</script>
<style lang="less" scoped>
    .test-container {
        width: 100%;
        ul {
            list-style: none;
        }
    }
</style>
