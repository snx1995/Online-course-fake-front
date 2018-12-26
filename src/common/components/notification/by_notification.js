import Vue from "Vue";
import ByNotification from "./BynotifySystem";

const Constructor = Vue.extend(ByNotification);

const instance = new Constructor();

const vm = instance.$mount();
document.body.appendChild(vm.$el);

const notify = {
    success(msg, duration = 5000) {
        vm.newNotification({
            type: "success",
            msg,
            duration
        });
    },
    error(msg, duration = 5000) {
        vm.newNotification({
            type: "error",
            msg,
            duration
        });
    },
    warning(msg, duration = 5000) {
        vm.newNotification({
            type: "warning",
            msg,
            duration
        });
    },
    info(msg, duration = 5000) {
        vm.newNotification({
            type: "info",
            msg,
            duration
        });
    },
    emit(type, msg, duration = 5000) {
        vm.newNotification({
            type,
            msg,
            duration
        });
    }
}

export default notify;