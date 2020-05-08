import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class Floaties extends Component {
  state = {
    floaties: this.props.floaties,
  }

  handleFloatieChange = (event) => {
    this.setState({

    })
  }

  render() {
    console.log(this.props)
    let floatieList = this.props.floatieList.map((floatie) => {
      return (
        <div>
          <label>
            {floatie.name}
          <input 
            name={floatie.name}
            type="number"
            value={floatie._id}
            onChange={this.props.handleFloatieChange}
            />
          <Media>
            <img
              width={160}
              height={120}
              className="flImage"
              src={floatie.photo}
              alt="river floatie"
            />
            <Media.Body>
              <p>{floatie.price}</p>
            </Media.Body>
          </Media>
          </label>
        </div>
      )
    })
    return (
      <div>
        
      </div>
    );
  }
}

export default Floaties;
