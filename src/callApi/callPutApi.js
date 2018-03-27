import axios from 'axios';
import * as config from './../constants/config';

const callPutApi = (endpoint, method = "PUT", body) => {
    return axios({
        method: method,
        url: config.API_URL + endpoint,
        data: body,
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
    })
}
export default callPutApi;