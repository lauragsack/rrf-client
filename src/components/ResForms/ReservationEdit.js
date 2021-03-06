import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReservationModel from '../../models/reservation';
import ReservationType from './ReservationType';

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
    if(this.state.reservation.type === "") {
      this.fetchReservation();
    }
  }

  async fetchReservation() {
    let res = await ReservationModel.show(this.state.reservationId)
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
      reservation: {
        ...this.state.reservation,
        deliveryAddress: event.target.value
      }
    })
  }

  handleBeachChange = (event) => {
    this.setState({
      reservation: {
        ...this.state.reservation,
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
            this.props.history.push("/reservations/user")
        })
        .catch(err => console.log(err))
}


  render() {
    return (
      <>
      <Form className="resForm" onSubmit={this.handleSubmit}>
        <Form.Group controlId="type">
          <Form.Label className="resLabel">Pickup or Delivery?</Form.Label>
          <Form.Control
            as="select" 
            onChange = {this.handleChange}
            name="type"
            id="type" 
            value={this.state.reservation.type}
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

      <Button variant="light" type="submit">
        Submit
      </Button>
    </Form>
    </>
    );
  }
}

export default ReservationEdit;

