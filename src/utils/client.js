let client = {
    store(key, value) {
        if (window.localStorage) {
            let so = new StorageObject(value);
            window.localStorage.setItem(key, JSON.stringify(so));
        } else {
            // TODO
        }
    },
    read(key) {
        if (window.localStorage) {
            let ls = window.localStorage;
            let so;
            try {
                so = JSON.parse(ls.getItem(key));
                if (so) {
                    let expireTime = so.expireTime;
                    if (expireTime > new Date().getTime()) return so.data;
                    ls.removeItem(key);
                    return null;
                }
                return null;
            } catch (e) {
                return null;
            }
        } else {
            // TODO
        }
        return null;
    },
    logout() {
        if (confirm("将会清除用户信息并退出登录返回主页，确认继续吗？")) {
            window.localStorage.clear();
            window.location = "/";
        }
    }
}

function StorageObject(data, expireTimeMS = 604800000) {    // 默认七天过期
    this.data = data;
    this.expireTime = new Date().getTime() + expireTimeMS;
}

export default client;