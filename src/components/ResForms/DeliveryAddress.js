import React from 'react';
import Form from 'react-bootstrap/Form'

const DeliveryAddress = (props) => {
  return (
    <Form.Group controlId="deliveryAddress">
      <Form.Label>Delivery Address</Form.Label>
      <Form.Control 
        placeholder="123 River Rd, Guerneville, CA 95446" 
        type="text" 
        id="deliveryAddress"
        name="deliveryAddress"
        value={props.deliveryAddress}
        onChange={props.handleChange}
      />
  </Form.Group>
  );
}

export default DeliveryAddress;
