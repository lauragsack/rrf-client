import React from 'react';
import Form from 'react-bootstrap/Form'

const DeliveryAddress = (props) => {
  return (
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Delivery Address</Form.Label>
      <Form.Control 
      placeholder="1234 Main St" 
      />
  </Form.Group>
  );
}

export default DeliveryAddress;
