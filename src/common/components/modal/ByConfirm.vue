<template>
    <transition name="modal">
        <div class="by-confirm-container" v-show='showModal'>
            <div class="by-confirm-overlay" @click="showModal = false"></div>
            <div class="by-confirm">
                <div class="body">
                    <span>this is the confirm message</span>
                </div>
                <div class="footer">
                    <div class="by-btn cancel" @click="showModal = false">取消</div>
                    <div class="by-btn confirm">确认</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="scss">
    .by-confirm-container {
        z-index: 9000;
        .by-confirm-overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.3);
        }
        .by-confirm {
            width: 600px;
            height: auto;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 0 12px 24px rgba(7, 17, 27, 0.3);
            .body {
                height: auto;
                padding: 30px 20px;
            }
            .footer {
                height: 30px;
                margin-bottom: 20px;
                padding: 0 20px;
                .by-btn {
                    float: right;
                    margin-left: 10px;
                    color: #fff;
                }
                .cancel {
                    background-color: rgb(165, 165, 165);
                }
                .confirm {
                    background-color: #f54829;
                }
            }
        }
    }
    .modal-enter, .modal-leave-to {
        opacity: 0;
        transform: translateY(-5%);
    }
    .modal-enter-active, .modal-leave-active {
        transition: all 0.3s;
        transform: translateY(0%);
    }
</style>
<script>
export default {
    name: 'ByConfirm',
    data() {
        return {
            showModal: true
        }
    }
}
</script>
