<template>
    <div class="by-upload-container">
        <div class="upload-user-img" v-if="type == 'userImg'">
            <div class="vertical"></div>
            <div class="horizontal"></div>
        </div>
        <div class="upload-img" v-if="type == 'img'">
            <div class="img-wrapper">
                <i class="icon-photo_library"></i>
                <img class="display-img" >
            </div>
            <div class="img-upload-control">
                <span>请选择上传jpg，png格式的图片</span>
                <button class="by-button" @click="onImgUploadClick">选择文件</button>
            </div>
        </div>
        <form :action="action" :enctype="enctype" :method="method">
            <input type="file" @change="imgChange">
        </form>
    </div>
</template>
<script>
export default {
    name: "ByUpload",
    data() {
        return {
            fileForm: {},
            imgInput: {},
            displayImg: {},
        }
    },
    props: {
        action: {
            type: String,
            default: ""
        },
        method: {
            type: String,
            default: "POST"
        },
        enctype: {
            type: String,
            default: "multipart/form-data"
        },
        type: {
            type: String,
            default: "img"
        },
        maxSize: {
            type: Number,
            default: 1048576    // default 1m
        },
    },
    computed: {
        theme() {
            return {
                width: this.size + "px"
            }
        }
    },
    methods: {
        onImgUploadClick() {
            this.fileInput.click();
        },
        imgChange() {
            let file = this.fileInput.files[0];
            console.log(file);
            if (this.isAcceptable(file)) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = event => {
                    this.$el.querySelector("img").src = event.target.result;
                }
            }
        },
        isAcceptableFileType(file) {
            let type;
            let index = file.name.lastIndexOf('.');
            if (index >= 0) type = file.name.substring(index + 1);
            else {
                this.$byNotify.error("不支持的文件类型！");
                this.clearFile();
                return false;
            }

            if (this.type == "img") {
                if (type == "jpg" || type == "png") return true;
                this.$byNotify.error("不支持的文件类型！");
                this.clearFile();
                return false;
            }
            else if (this.type = 'file') return true;

            this.$byNotify.error("不支持的文件类型！"); 
            this.clearFile();
            return false;
        },
        isAcceptable(file) {
            if (file.size <= this.maxSize) return this.isAcceptableFileType(file);
            this.$byNotify.error("文件太大！");
            return false;
        },
        clearFile() {
            if (this.fileInput.outerHTML) {
                this.fileInput.outerHTML = this.fileInput.outerHTML;
            } else {
                this.fileInput.value = '';
            }
            this.displayImg.removeAttribute("src");
        }
    },
    mounted() {
        this.fileForm = this.$el.lastChild;
        this.fileInput = this.fileForm.children[0];
        this.displayImg = this.$el.querySelector("img.display-img");
    }
}
</script>
<style lang="less" scoped>
.by-upload-container {
    display: inline-block;
    width: fit-content;
    form {
        display: none;
    }
    .upload-user-img {
        position: relative;
    }
    .upload-img {
        display: flex;
        .img-wrapper {
            overflow: hidden;
            width: 136px;
            height: 90px;
            position: relative;
            border: 1px solid #7c7c7c;
            border-radius: 10px;
            .display-img {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: auto;
                height: 100%;
                margin: 0 auto;
            }
            .icon-photo_library {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.5em;
            }
        }
        .img-upload-control {
            margin-left: 10px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            align-items: flex-start;
            span {
                margin-top: 5px;
                font-size: 0.8em;
                color: #7c7c7c;
            }
            
        }
    }
}
</style>
