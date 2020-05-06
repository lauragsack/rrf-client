import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'; 
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
      <CardDeck>
        {floaties}
      </CardDeck>
    );
  }
}

export default FloatiesContainer;

