import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import FloatieModel from '../models/floatie';

class FloatieDetail extends Component {
  state = {
    floatieName: null,
    floatie: {
      description: "",
      photo: "",
      type: "",
      deliverable: "",
      goodFor: "",
      dogFriendly: "",
      price: "",
    }
  }

  componentDidMount() {
    this.setState({
      floatieName: this.props.match.params.name
    })
  }

  componentDidUpdate() {
    if(this.state.floatie.description === "") {
      this.fetchFloatie();
    }
  }

  async fetchFloatie() {
    let res = await FloatieModel.show(this.state.floatieName)
    this.setState({
      floatie: res.data
    })
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.state.floatie.photo} />
        <Card.Body>
          <Card.Title>{this.state.floatieName}</Card.Title>
          <Card.Text>
            {this.state.floatie.description}
          </Card.Text>
          <Card.Text>
            {`Type: ${this.state.floatie.type}`}
          </Card.Text>
          <Card.Text>
            {`Deliverable: ${this.state.floatie.deliverable}`}
          </Card.Text>
          <Card.Text>
            {`Good for ${this.state.floatie.goodFor} people`}
          </Card.Text>
          <Card.Text>
            {this.state.floatie.dogFriendly}
          </Card.Text>
          <Card.Text>
            {`Price per day: $${this.state.floatie.price}`}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default FloatieDetail;