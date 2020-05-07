import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cancel = (props) => {

  console.log(props)

  return (
  <>
    <Modal.Body>
    Are you sure you want to cancel your reservation?
    </Modal.Body>
    <Modal.Footer>
        <Button id="stopBtn" variant="secondary" onClick={props.closeCancel}>
            JK, float on <i className="far fa-hand-peace"></i>
        </Button>
        <Button id={props.reservation._id} variant="secondary" onClick={props.cancelReservation}>
            Yes, please cancel!
        </Button>
    </Modal.Footer>
  </>
  );
}

export default Cancel;

