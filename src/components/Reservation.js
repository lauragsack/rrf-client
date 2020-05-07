import React, { Component } from 'react';
import { Modal, Dropdown, Card } from 'react-bootstrap';
import Cancel from './Cancel';
import ReservationModel from '../models/reservation';

class Reservation extends Component {
  state = {
    cancel: false,
  }

  async cancelReservation() {
    let res = await ReservationModel.delete(this.props.reservation._id)
    this.setState({
      cancel: false
    })
  }

  closeCancel = () => this.setState({cancel: false});
  openCancel = () => this.setState({cancel: true});

  render() {
    const cancel = this.state.cancel;
    let startDate = new Intl.DateTimeFormat('en-US').format(new Date(this.props.reservation.startDate));
    let endDate = new Intl.DateTimeFormat('en-US').format(new Date(this.props.reservation.endDate));
    return (
      <Card>
          <Dropdown className="float-right dropdown">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Manage Reservation
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/reservations/${this.props.reservation._id}`}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={this.openCancel}>Cancel
                <Modal show={cancel} onHide={this.closeCancel}>
                  <Cancel cancelReservation={this.cancelReservation} reservation={this.props.reservation} closeCancel={this.closeCancel}/>
                </Modal>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Card.Body>
        <Card.Title>{`${startDate} - ${endDate}`}</Card.Title>
        <Card.Text>
        {this.props.reservation.type === "Delivery" ?
        <>
          <strong>Delivery Address:</strong> <br/> {this.props.reservation.deliveryAddress}
        </>
        :
        <>
          <strong>Pickup Address:</strong> <br/> {this.props.reservation.pickupAddress.name} <br/> {this.props.reservation.pickupAddress.address}
        </>
        }
        </Card.Text>
        <Card.Text>
          ${this.props.reservation.totalPrice}
        </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Reservation;

