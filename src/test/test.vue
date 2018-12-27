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
            <li>
                <by-switch v-model="switchVal"/>
                <span>{{switchVal}}</span>
            </li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
import BySwitch from "../common/components/BySwitch";
export default {
    components: {BySwitch},
    data() {
        return {
            msgType: "success",
            msg: "",
            switchVal: "inactive"
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
    }
</style>
