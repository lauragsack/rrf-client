import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/beaches";

export default class BeachModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_API_URL}`);
        return request;
    }

}