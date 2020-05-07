import React, { Component } from 'react';
import { CardDeck, Button } from 'react-bootstrap/'; 
import Floatie from '../components/Floatie';

class FloatiesContainer extends Component {
  state = {
    currentUser: this.props.currentUser,
  }

  render() {
    let floaties = this.props.floatieList.map((floatie) => {
      return (
        <Floatie
          key={floatie._id}
          floatie={floatie}
        />
      )
    })

    return (
      <>
      {this.props.currentUser?
        <>
        <Button href="/reservations" variant="light" size="lg" block>
          Make a Reservation
        </Button>
        <CardDeck>
          {floaties}
        </CardDeck>
        </>
        :
        <>
        <CardDeck>
          {floaties}
        </CardDeck>
        </>
      }
      </>
    );
  }
}

export default FloatiesContainer;

