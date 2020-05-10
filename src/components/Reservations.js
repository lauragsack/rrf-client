import React, { Component } from 'react';
import { Button, CardColumns } from 'react-bootstrap'
import ReservationModel from '../models/reservation';
import Reservation from './Reservation';

class Reservations extends Component {
  state = {
    reservations: [],
  }

  componentDidMount() {
    this.fetchReservations();
  }

  async fetchReservations() {
    let res = await ReservationModel.user(this.props.currentUser)
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
        <Button className="make-res" href="/reservations" variant="light" size="lg" block>
          Make a Reservation
        </Button>
        <CardColumns>
          {reservations}
        </CardColumns>
      </div>
    );
  }
}

export default Reservations;
