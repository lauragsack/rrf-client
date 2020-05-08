import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReservationModel from '../../models/reservation';
import ReservationType from './ReservationType';
import Floaties from './Floaties';
import Footer from '../Footer';

class ReservationForm extends Component {
  state = {
    user: this.props.currentUser.data,
    startDate: "",
    endDate: "",
    totalPrice: "",
    type: "",
    pickupAddress: {},
    deliveryAddress: "",
    floaties: []
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleBeachChange = (event) => {
    console.log(event) 
    this.setState({
      pickupAddress: event.target.value
    })
  }

  handleFloatieChange = (event) => {
    let floatie = {floatie: event.target.id, quantity: event.target.value}
    console.log(floatie)
    let floaties = [floatie, ...this.state.floaties];
    this.setState({
      floaties: floaties
    })
    // this.getTotalPrice();
  }

  getDays(startDate, endDate) {
    const start = new Date(this.state.startDate);
    const end = new Date(this.state.endDate)
    let days = 0;
    while (end >= start) {
      days ++ 
      start.setDate(start.getDate() + 1)
    }
    return days
    console.log(days)
  }

  getTotalPrice() {
    const days = this.getDays();
    let subTotal;
    let totalPrice = 0;
    this.state.floaties.forEach(floatie => {
      subTotal = floatie.floatie.price * floatie.quantity
      totalPrice += (subTotal * days)
    })
    this.setState({
      totalPrice: totalPrice
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    ReservationModel.create(this.state)
        .then(res => {
            this.setState({
              startDate: "",
              endDate: "",
              totalPrice: "",
              type: "",
              pickupAddress: {},
              deliveryAddress: "",
              floaties: []
            })
            console.log(res.data);
        })
        .catch(err => console.log(err))
}


  render() {
    return (
      <>
      <Form className="resForm" onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control 
              onChange={this.handleChange}
              type="date" 
              id="startDate"
              name="startDate"
              value={this.state.startDate}
            />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control 
              onChange={this.handleChange}
              type="date" 
              id="endDate"
              name="endDate"
              value={this.state.endDate}
            />
          </Form.Group>
        </Form.Row>

      <Form.Group controlId="type">
        <Form.Label>Pickup or Delivery?</Form.Label>
        <Form.Control
          as="select" 
          onChange = {this.handleChange}
          name="type"
          id="type" 
          value={this.state.type}
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
          pickupAddress={this.pickupAddress} 
          deliveryAddress={this.deliveryAddress} 
          type={this.state.type}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Floaties</Form.Label>
        <Floaties
          floatieList={this.props.floatieList}
          handleFloatieChange={this.handleFloatieChange} 
          floaties={this.state.floaties}
        />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    <Footer/>
    </>
    );
  }
}

export default ReservationForm;
