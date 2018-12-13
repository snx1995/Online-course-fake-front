import axios from 'axios';

let net = {
    get(url, param) {
        return axios.get(url, param);
    },
    post(url, data) {
        return axios.post(url, data);
    }
}

export default net;