import React, { Component } from 'react';
import { Button, CardColumns } from 'react-bootstrap'
import ReservationModel from '../models/reservation';
import Reservation from './Reservation';

class Reservations extends Component {
  state = {
    reservations: []
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

  render() {
    let reservations = this.state.reservations.map((reservation) => {
      return (
        <Reservation
          key={reservation._id}
          reservation={reservation}
        />
      )
    })
    return (
      <>
        <Button href="/reservations" variant="light" size="lg" block>
          Make a Reservation
        </Button>
        <h1>Your Reservations</h1>
        <CardColumns className="reservations">
          {reservations}
        </CardColumns>
      </>
    );
  }
}

export default Reservations;
