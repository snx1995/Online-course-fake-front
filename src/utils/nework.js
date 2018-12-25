import axios from 'axios';
import toast from './notification';

const STATUS_HAVE_NO_RIGHT = 403000;
const STATUS_INVALID_PARAMS = 403001;
const STATUS_INVALID_DATA = 403002;



let server = new Proxy(axios, {
    get: function (target, propKey, receiver) {
        if (typeof target[propKey] === "function") {
            return (...args) => {
                let method = Reflect.get(target, propKey);
                return method.apply(target, args).then(response => {
                    // HTTP过滤
                    switch (response.status) {
                        case 200:
                            return response.data;
                            break;
                        default:
                            toast.error("请求失败：" + response.status);
                    } 
                })
            }
        }
        return target[propKey];
    }
})



export default server;

