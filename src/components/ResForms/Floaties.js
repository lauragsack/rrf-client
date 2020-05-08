import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class Floaties extends Component {
  state = {
    floaties: this.props.floaties,
  }

  render() {
    let floatieOptions = this.props.floatieList.map((floatie) => {
      return (
        <div>
          <label>
          {floatie.name}: 
          {`$${floatie.price} / day`}
          <img
            width={160}
            height={130}
            className="flImage"
            src={floatie.photo}
            alt="river floatie"
          />
          {/* <input
            name={floatie.name}
            type="text"
            id={floatie._id}
            value="0"
            placeholder="0"
            onChange={this.props.handleFloatieChange}
          /> */}
          <select onChange={this.props.handleFloatieChange} id={floatie._id} className={floatie.price}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </label>
        </div>
      )
    })
    return (
      <div>
        {floatieOptions}
      </div>
    );
  }
}

export default Floaties;
