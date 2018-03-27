import axios from 'axios';
import * as config from './../constants/config';

const callDeleteApi = (endpoint, method = "DELETE", body) => {
    return axios({
        method: method,
        url: config.API_URL + endpoint,
        data: body,
        headers: { 'Content-Type': 'application/json'  },
    })
}
export default callDeleteApi;