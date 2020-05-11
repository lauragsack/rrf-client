import React, { Component } from 'react';
import { CardDeck, Button } from 'react-bootstrap/'; 
import Floatie from '../components/Floatie';
import Footer from '../components/Footer';

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
      <div className="floatieBody">
        {this.props.currentUser?
          <>
          <Button id="make-res-fl" href="/reservations" variant="light" block style={{fontSize: 35}}>
            Make a Reservation
          </Button>
          <CardDeck class="fl-card-container">
            {floaties}
          </CardDeck>
          </>
          :
          <>
          <CardDeck class="fl-card-container">
            {floaties}
          </CardDeck>
          </>
        }
      </div>
    );
  }
}

export default FloatiesContainer;

