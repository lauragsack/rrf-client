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
          <Button className="make-res" href="/reservations" variant="light" size="lg" block>
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
      <Footer/>
      </div>
    );
  }
}

export default FloatiesContainer;

