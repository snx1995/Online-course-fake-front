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
            <li>
                <select v-model="uploadType">
                    <option value="img">img</option>
                    <option value="userImg">userImg</option>
                </select> 
                <by-upload :type="uploadType"/>
            </li>
            <li>

            </li>
        </ul>
    </div>
</template>
<script>
import BySwitch from "../common/components/BySwitch";
import ByUpload from "../common/components/ByUpload";
export default {
    components: {BySwitch, ByUpload},
    data() {
        return {
            msgType: "success",
            msg: "",
            switchVal: "inactive",
            uploadType: "img"
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
