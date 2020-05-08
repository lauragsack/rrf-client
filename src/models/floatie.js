import axios from 'axios';

const REACT_APP_API_URL = "mongodb://heroku_cf9hmk9p:n56sne2us9p3cbvchvuiqjece8@ds233531.mlab.com:33531/heroku_cf9hmk9p/api/v1/floaties";

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