<template>
    <div class="write-blog-container">
        <h1>
            标题：<input type="text" v-model="blogTitle">
        </h1>
        <mavon-editor v-model="blog" :boxShadow="false" @save="onBlogSave"/>
        <transition name="fade">
            <div class="save-dialog-container" v-show='showSaveDialog'>
            <div class="save-dialog-overlay" @click="onDialogClose"></div>
            <div class="dialog-container">
                <div class="dialog-header">
                    <span>博客发布</span>
                </div>
                <div class="dialog-body">
                    <table>
                        <tr>
                            <td>分类:</td>
                            <td>
                                <select v-model="fristSelectValue" @change='onFirstChange'>
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
                            <td colspan="2">
                                <input type="text" v-model="blogLabel">
                                <span class="tips">输入标签，以英文逗号分隔，例如：计算机,JAVA</span>
                            </td>

                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                草稿:<input type="radio" name="operation" value="draft" v-model="operation">
                                发布:<input type="radio" name="operation" value="release" v-model="operation">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="dialog-footer">
                    <div class="by-btn by-confirm" @click="onDialogConfirm">发布</div>
                    <div class="by-btn by-cancel" @click="onDialogClose">取消</div>
                </div>
            </div>
        </div>
        </transition>
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
                            box-sizing: content-box;
                            display: inline-block;
                            width: 100%;
                            box-shadow: none;
                            outline: none;
                        }
                        .tips {
                            font-size: .5em;
                            color: #888;
                        }
                        &:first-child {
                            min-width: 2.5em;
                        }
                    }
                }
            }
            .dialog-footer {
                width: 100%;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                .by-btn {
                    margin: 10px 10px 10px 0;
                }
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
import axios from "axios";
import ByInput from "../../common/components/ByInput";
export default {
    name: "WriteBlog",
    components: {ByInput},
    data() {
        return {
            blog: "this is a test",
            blogTitle: "this is a test",
            fristSelectValue: 1,
            secondSelectValue: 117,
            showSaveDialog: false,
            blogLabel: "this,is,a,test",
            operation: "release"
        }
    },
    methods: {
        onBlogSave() {
            this.showSaveDialog = true;
            document.body.style.overflow = "hidden";
        },
        onDialogClose() {
            this.showSaveDialog = false;
            document.body.style.overflow = "auto";
        },
        onDialogConfirm() {
            const self = this;
            axios.post("/local/blog/uploadBlog.action", {
                title: self.blogTitle,
                type: self.secondSelectValue ? self.secondSelectValue : self.fristSelectValue,
                label: self.blogLabel,
                blog: self.blog,
                operation: self.operation
            }).then(response => {
                    if (response.status == 20000) {
                        self.$byNotify.success("保存成功！");
                        self.onDialogClose();
                    }
                }).catch(err => {
                    self.$byNotify.error("请求失败！请稍后再试!");
                });
        }
        ,
        onFirstChange() {
            this.secondSelectValue = this.secondSelect[0]?  this.secondSelect[0].id : 0;
        }
    },
    computed: {
        courseType() {
            return this.courseTypeData = this.$store.state.courseStore.courseType;
        },
        secondSelect() {
            return this.secondSelectData = this.$store.state.courseStore.courseType[this.fristSelectValue].children;
        }
    }
}
</script>
