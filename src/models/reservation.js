import axios from 'axios';

const REACT_APP_API_URL = "https://young-everglades-30243.herokuapp.com/api/v1/reservations";

export default class ReservationModel {
  static user = () => {
      let request = axios.get(`${REACT_APP_API_URL}/user`, {withCredentials: true});
      return request;
  }

  static create = (reservation) => {
    let request = axios.post(REACT_APP_API_URL, reservation, {withCredentials: true});
    return request;
  }

  static show = (reservationId) => {
    let request = axios.get(`${REACT_APP_API_URL}/${reservationId}`, reservationId, {withCredentials: true});
    return request;
  }

  static update = (reservation) => {
    let request = axios.put(`${REACT_APP_API_URL}/${reservation.reservationId}`, reservation, {withCredentials: true});
    return request;
  }

  static delete = (reservationId) => {
    let request = axios.delete(`${REACT_APP_API_URL}/${reservationId}`, reservationId, {withCredentials: true});
    return request;
  }
}