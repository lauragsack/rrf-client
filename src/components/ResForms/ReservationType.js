import React from 'react';
import DeliveryAddress from './DeliveryAddress';
import PickupAddress from './PickupAddress';

const ReservationType = (props) => {
  
  return (
    <>
    {props.type === "" ?
      <>
      </>
      : props.type === "Delivery" ?
        <DeliveryAddress handleChange={props.handleChange} deliveryAddress={props.deliveryAddress}/>
      : 
        <PickupAddress handleBeachChange={props.handleBeachChange} pickupAddress={props.pickupAddress}/>
    }
    </>
  );
}

export default ReservationType;
