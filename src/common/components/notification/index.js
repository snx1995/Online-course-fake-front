import Notification from "./ByNotifySystem";
import notify from "./by_notification";

export default Vue => {
    Vue.component(Notification.name, Notification);
    Vue.prototype.$byNotify = notify;
}