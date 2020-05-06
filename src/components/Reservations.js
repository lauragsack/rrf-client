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
    console.log(res.data)
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
        <h1>Your Reservations</h1>
        <Button href="/reservations" variant="primary" size="lg" block>
          Make a Reservation
        </Button>
        <CardColumns className="reservations">
          {reservations}
        </CardColumns>
      </>
    );
  }
}

export default Reservations;
