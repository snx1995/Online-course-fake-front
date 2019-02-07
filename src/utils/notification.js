import notify from '../common/components/notification/by_notification';

let toast = {
    success(...msgs) {
        notify.success(msgs.join(','));
    },
    error(...msgs) {
        notify.error(msgs.join(','));
    },
    warning(...msgs) {
        notify.warning(msgs.join(','));
    }
}
export default toast;