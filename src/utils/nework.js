import axios from 'axios';
import toastr from './notification';
import client from './client';
import config from '../config';

const STATUS_HAVE_NO_RIGHT = 403000;
const STATUS_INVALID_PARAMS = 403001;
const STATUS_INVALID_DATA = 403002;

const server = axios;
const user = client.read(config.LOCAL_USER_KEY);

axios.interceptors.request.use(config => {
    if (user) {
        if (!config.params) config.params = {token: user.token};
        else config.params.token = user.token;
    }
    return config;
}, error => {
    // toastr.error("error");
    throw error;
});

axios.interceptors.response.use(response => {
    if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        if (data.status >= 30000) throw new Error(data);
        return data;
    }
    return response;
}, error => {
    // toastr.error("error");
    throw error;
});


export default server;

