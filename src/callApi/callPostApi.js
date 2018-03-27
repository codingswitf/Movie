import axios from 'axios';
import * as config from './../constants/config';

const callPostApi = (endpoint, method = "POST", body) => {
    return axios.post(config.API_URL + endpoint, body, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
    })
}
export default callPostApi;