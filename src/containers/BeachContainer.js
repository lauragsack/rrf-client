import React, { Component } from 'react';
import BeachModel from '../models/beach';
import BeachDetail from '../components/BeachDetail';

class BeachContainer extends Component {
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
    console.log(beaches)
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
      <BeachMap/>
      <>
        {beaches}
      </>
    );
  }
}

export default BeachContainer;

