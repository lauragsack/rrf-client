import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Reservation = (props) => {
  let startDate = new Intl.DateTimeFormat('en-US').format(new Date(props.reservation.startDate));
  let endDate = new Intl.DateTimeFormat('en-US').format(new Date(props.reservation.endDate));
  return (
    <Card>
      <Card.Body>
      <Card.Title>{`${startDate} - ${endDate}`}</Card.Title>
      <Card.Text>
      {props.reservation.type === "Delivery" ?
      <>
        <strong>Delivery Address:</strong> <br/> {props.reservation.deliveryAddress}
      </>
      :
      <>
        <strong>Pickup Address:</strong> <br/> {props.reservation.pickupAddress.name} <br/> {props.reservation.pickupAddress.address}
      </>
      }
      </Card.Text>
      <Card.Text>
        ${props.reservation.totalPrice}
      </Card.Text>
    </Card.Body>
    </Card>
  );
}

export default Reservation;
