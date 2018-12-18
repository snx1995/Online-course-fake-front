import axios from 'axios';

export default {
    get(url, param) {
        return axios.get(url, param);
    },
    post(url, data) {
        return axios.post(url, data);
    },
    actionGet(url, param) {

    },
    meidaGet(url, param) {

    },
    resourceUpload() {

    }
}
