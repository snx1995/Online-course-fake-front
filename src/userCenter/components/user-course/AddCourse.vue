<template>
    <div class="add-new-course">
        <table>
            <tr>
                <td>名称：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>封面：</td>
                <td><by-upload /></td>
            </tr>
            <tr>
                <td>简介：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>要求：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>教材：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>分类：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>标签：</td>
                <td><by-input /></td>
            </tr>
            <tr>
                <td>详细说明：</td>
                <td><by-input /></td>
            </tr>
        </table>
    </div>
</template>
<script>
import ByInput from "../../../common/components/ByInput";
import ByUpload from "../../../common/components/ByUpload";
export default {
    name: "AddCourse",
    components: {ByInput, ByUpload},
}
</script>
<style lang="less" scoped>
.add-new-course {
    width: 100%;
    table {
        width: 90%;
        td {
            &:first-child {
                text-align: right;
                width: 6em;
            }
            &:last-child {
                width: fill-available
            }
        }
    }
}
</style>
