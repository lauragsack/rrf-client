import React, { Component } from 'react';
import BeachModel from '../../models/beach';

class PickupAddress extends Component {
  state = {
    beaches: []
  }

  componentDidMount() {
    this.fetchBeaches();
  }

  async fetchBeaches() {
    let res = await BeachModel.all();
    this.setState({
      beaches: res.data
    })
  }

  render() {
    let beaches = this.state.beaches.map((beach) => {
      return (
      <div>
        <label>{beach.name}
        <input name="pickupChoice" type="radio"/>
        </label>
      </div>
      )
    })
    return(
      <>
      {beaches}
      </>
    )
  }
}

export default PickupAddress;
