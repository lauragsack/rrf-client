import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReservationModel from '../../models/reservation';
import ReservationType from './ReservationType';
import Floaties from './Floaties';
import Footer from '../Footer';

class ReservationEdit extends Component {
  state = {
    reservationId: null,
    reservation: {
      user: "",
      type: "",
      pickupAddress: "",
      deliveryAddress: "",
    }
  }

  componentDidMount() {
    this.setState({
      reservationId: this.props.match.params.id,
    })
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
    console.log(this.state)
    if(this.state.reservation.type === "") {
      this.fetchReservation();
    }
  }

  async fetchReservation() {
    console.log("fetching reservation")
    let res = await ReservationModel.show(this.state.reservationId)
    console.log(res.data)
    this.setState({
      reservation: {
        user: res.data.user,
        type: res.data.type,
        deliveryAddress: res.data.deliveryAddress,
        pickupAddress: res.data.pickupAddress,
      }
    })
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleBeachChange = (event) => {
    console.log(event) 
    this.setState({
      reservation: {
        pickupAddress: event.target.value
      }
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    ReservationModel.update(this.state)
        .then(res => {
            this.setState({
              user: "",
              type: "",
              pickupAddress: {},
              deliveryAddress: "",
            })
            console.log(res.data);
        })
        .catch(err => console.log(err))
}


  render() {
    console.log(this.state.reservation.type)
    return (
      <>
      <Form className="resForm" onSubmit={this.handleSubmit}>
        <Form.Group controlId="type">
          <Form.Label>Pickup or Delivery?</Form.Label>
          <Form.Control
            as="select" 
            onChange = {this.handleChange}
            name="type"
            id="type" 
            value={this.state.reservation.type}
            defaultValue={this.state.reservation.type}
          >
            <option>Select One...</option>
            <option>Delivery</option>
            <option>Pickup</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <ReservationType 
            handleChange={this.handleChange} 
            handleBeachChange={this.handleBeachChange}
            pickupAddress={this.state.reservation.pickupAddress} 
            deliveryAddress={this.state.reservation.deliveryAddress} 
            type={this.state.reservation.type}
          />
        </Form.Group>

      <Button variant="secondary" type="submit">
      {/* href="/reservations/user" */}
        Submit
      </Button>
    </Form>
    </>
    );
  }
}

export default ReservationEdit;

