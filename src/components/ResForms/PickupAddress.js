import React, { Component } from 'react';
import BeachModel from '../../models/beach';

class PickupAddress extends Component {
  state = {
    beaches: [],
    selectedBeach: this.props.pickupAddress,
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
      <div id="radio">
        <label>
        <p>{beach.name} <br/> {beach.address}</p>
        <input 
          name="pickupChoice" 
          type="radio"
          value={beach._id}
          defaultChecked={this.state.selectedBeach._id === beach._id}
          selected={this.state.selectedBeach._id === beach._id}
          onChange={this.props.handleBeachChange}
          />
        <img
          width={160}
          height={120}
          className="beachImg"
          src={beach.photo}
          alt="river beach"
        />
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
