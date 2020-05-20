import axios from 'axios';

const REACT_APP_API_URL = "https://young-everglades-30243.herokuapp.com/api/v1/floaties";

export default class FloatieModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_API_URL}`);
        return request;
    }

    static show = (floatieName) => {
        let request = axios.get(`${REACT_APP_API_URL}/${floatieName}`);
        return request
    }
}