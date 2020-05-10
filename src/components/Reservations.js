import React, { Component } from 'react';
import { Button, CardColumns } from 'react-bootstrap'
import ReservationModel from '../models/reservation';
import Reservation from './Reservation';
import Footer from './Footer';

class Reservations extends Component {
  state = {
    reservations: [],
  }

  componentDidMount() {
    this.fetchReservations();
  }

  async fetchReservations() {
    console.log(this.props.currentUser)
    let res = await ReservationModel.user()
    this.setState({
      reservations: res.data
    })
  }

  cancelReservation = async(event) => {
    console.log(event.target.id)
    let res = await ReservationModel.delete(event.target.id)
    this.setState({
      cancel: false
    })
    this.fetchReservations();
  }

  render() {
    let reservations = this.state.reservations.map((reservation) => {
      return (
        <Reservation
          key={reservation._id}
          reservation={reservation}
          cancelReservation={this.cancelReservation}
        />
      )
    })
    return (
      <div className="resList">
        <Button id="make-res" href="/reservations" variant="light" block style={{fontSize: 35}}>
          Make a Reservation
        </Button>
        <CardColumns className="resCards">
          {reservations}
        </CardColumns>
      </div>
    );
  }
}

export default Reservations;
