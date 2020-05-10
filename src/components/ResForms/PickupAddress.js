import React, { Component } from 'react';
import BeachModel from '../../models/beach';
import Media from 'react-bootstrap/Media'

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
      <div>
        <label>
          {beach.name}
        <input 
          name="pickupChoice" 
          type="radio"
          value={beach._id}
          selected={this.state.selectedBeach === beach._id}
          onChange={this.props.handleBeachChange}
          />
        <Media>
          <img
            width={160}
            height={120}
            className="beachImage"
            src={beach.photo}
            alt="river beach"
          />
          <Media.Body>
            <p>{`${beach.rating} | ${beach.numRatings} reviews`}</p>
            <p>{beach.address}</p>
          </Media.Body>
        </Media>
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
