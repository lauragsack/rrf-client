import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
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
      <Container fluid id="fl-detail-container">
        <Card id="fl-detail-card">
          <Card.Img id="fl-detail-img" variant="top" src={this.state.floatie.photo}/>
          <Card.Body id="fl-detail-body">
            <Card.Title id="fl-detail-title">{this.state.floatieName}</Card.Title>
            <Card.Text>
              {this.state.floatie.description}
            </Card.Text>
            <Card.Text>
            {this.state.floatie.deliverable === true ?
              <>
                Can be delivered: <i className="fas fa-check"></i>
              </>
              :
              <>
                Can be delivered: <i className="fas fa-times"></i> 
              </>
            }
            </Card.Text>     
            <Card.Text>
              {`Good for: ${this.state.floatie.goodFor}`}
            </Card.Text>
            <Card.Text>
            {this.state.floatie.dogFriendly === true ?
              <>
                Dog Friendly: <i className="fas fa-paw"></i>
              </>
              :
              <>
                Dog Friendly: <i className="fas fa-times"></i> 
              </>
            }
            </Card.Text>  
            <Card.Text>
              {`Price per day: $${this.state.floatie.price}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default FloatieDetail;
