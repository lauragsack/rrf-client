import axios from 'axios';

const REACT_APP_API_URL = "https://young-everglades-30243.herokuapp.com/api/v1/auth";

export default class UserModel {
    static create = (data) => {
        let request = axios.post(`${REACT_APP_API_URL}/signup`, data, {withCredentials: true});
        return request;
    }

    static login = (credentials) => {
        let request = axios.post(`${REACT_APP_API_URL}/login`, credentials, {
            withCredentials: true
        });
        return request;
    }

    static logout = () => {
        let request = axios.delete(`${REACT_APP_API_URL}/logout`, {withCredentials: true});
        return request;
    }

    static verify = () => {
        let request = axios.get(`${REACT_APP_API_URL}/verify`, {withCredentials: true});
        return request;
    }
}