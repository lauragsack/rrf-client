import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/auth";

export default class UserModel {
    static create = (data) => {
        let request = axios.post(`${REACT_APP_API_URL}/signup`, data);
        return request;
    }

    static login = (credentials) => {
        let request = axios.post(`${REACT_APP_API_URL}/login`, credentials, {
            withCredentials: true
        });
        return request;
    }

    static logout = () => {
        let request = axios.delete(`${REACT_APP_API_URL}/logout`, { withCredentials: true});
        return request;
    }
}