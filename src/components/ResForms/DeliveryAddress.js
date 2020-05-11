import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class DeliveryAddress extends Component {
  state = {
    deliveryAddress: this.props.deliveryAddress
  }

  render() {
    return (
      <Form.Group controlId="deliveryAddress">
      <Form.Label className="resLabel">Delivery Address</Form.Label>
      <Form.Control 
        placeholder="123 River Rd, Guerneville, CA 95446" 
        type="text" 
        id="deliveryAddress"
        name="deliveryAddress"
        value={this.props.deliveryAddress}
        onChange={this.props.handleChange}
      />
  </Form.Group>
    );
  }
}

export default DeliveryAddress;
