<template>
    <div class="write-blog-container">
        <h1>
            标题：<input type="text" v-model="blogTitle">
        </h1>
        <mavon-editor v-model="blog" :boxShadow="false" @save="onBlogSave"/>
        <div class="save-dialog-container">
            <div class="save-dialog-overlay"></div>
            <div class="dialog-container">
                <div class="dialog-header">
                    <span>博客发布</span>
                </div>
                <div class="dialog-body">
                    <table>
                        <tr>
                            <td>分类:</td>
                            <td>
                                <select v-model="fristSelectValue">
                                    <option v-for="type in courseType" :value="type.id" :key='type.id'>
                                        {{type.name}}
                                    </option>
                                </select>
                            </td>
                            <td v-show='secondSelect.length'>
                                <select v-model="secondSelectValue">
                                    <option v-for="s2 in secondSelect" :value="s2.id" :key='s2.id'>
                                        {{s2.name}}
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>标签:</td>
                            <td colspan="2"><input type="text"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                草稿:<input type="radio" name="operation">
                                发布:<input type="radio" name="operation">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="dialog-footer"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.write-blog-container {
    margin: 0 auto;
    padding: 50px;
    min-width: 1000px;
    min-height: 600px;
    background: rgb(244, 244, 244);
    .save-dialog-container {
        z-index: 99999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .save-dialog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.2);
        }
        .dialog-container {
            overflow: hidden;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            min-width: 450px;
            height: auto;
            .dialog-header {
                width: 100%;
                height: 25px;
                background: rgb(244, 244, 244);
                border-bottom: 1px solid #888;
                span {
                    padding-left: 10px;
                    color: #5d5d5d;
                    font-size: 0.8em;
                }
            }
            .dialog-body {
                box-sizing: border-box;
                padding: 10px;
                width: 100%;
                height: auto;
                table {
                    width: 80%;
                    margin: 0 auto;
                    font-size: .8em;
                    td {
                        padding: 10px;
                        select, input[type='text'] {
                            padding-top: 1px;
                            display: inline-block;
                            width: 100%;
                            box-shadow: none;
                            outline: none;
                        }
                    }
                }
            }
            .dialog-footer {
                width: 100%;
                height: 30px;
                background: rgb(242, 13, 13);
            }
        }
    }
    h1 {
        display: flex;
        align-items: center;
        input {
            display: block;
            box-sizing: border-box;
            font-size: inherit;
            width: 90%;
            text-indent: .5em;
            box-shadow: none;

        }
    }
    .markdown-body {
        min-height: 600px;
        box-shadow: 0 12px 24px rgba(7, 17, 27, 0.2);
        z-index: auto;
        * {
            z-index: auto;
        }
    }
}
</style>
<script>
import ByInput from "../../common/components/ByInput";
export default {
    name: "WriteBlog",
    components: {ByInput},
    data() {
        return {
            blog: "",
            blogTitle: "",
            fristSelectValue: 1,
            secondSelectValue: -1
        }
    },
    methods: {
        onBlogSave() {
            alert(1);
        }
    },
    computed: {
        courseType() {
            return this.courseTypeData = this.$store.state.courseStore.courseType;
        },
        secondSelect() {
            return this.secondSelectData = this.$store.state.courseStore.courseType[this.fristSelectValue].children;
        }
    },
    mounted() {
        console.log(this.$store.state.courseStore.courseType);
        console.log(this.courseTypeData);
        console.log(this.secondSelectData);
    }
}
</script>
