import React, { Component } from 'react';
import BeachModel from '../models/beach';
import BeachDetail from '../components/BeachDetail';
import BeachMap from '../components/BeachMap';

class BeachContainer extends Component {
  state = {
    beaches: []
  }

  componentDidMount() {
    this.fetchBeaches();
  }

  async fetchBeaches() {
    let res = await BeachModel.all();
    console.log(res.data)
    this.setState({
      beaches: res.data
    })
  }

  render() {
    let beaches = this.state.beaches.map((beach) => {
      return (
        <BeachDetail
          key={beach._id}
          beach={beach}
        />
      )
    })
    return (
      <>
        <BeachMap/>
        <div className="beaches">
          {beaches}
        </div>
      </>
    );
  }
}

export default BeachContainer;

