import axios from 'axios';
import * as config from './../constants/config';

const callApi = (endpoint, method= "GET", body) => {
    return axios({
        method,
        url: config.API_URL+endpoint,
        data: body
    })
}
export default callApi;