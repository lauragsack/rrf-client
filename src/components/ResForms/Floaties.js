import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class Floaties extends Component {
  state = {
    floaties: this.props.floaties,
  }


//   componentDidMount() {
//    this.setState({
//      floaties: this.props.floatieList.map((floatie) => {
//       resFloatie = {
//         floatie: floatie,
//         quantity: 0
//       }
//     })
//   })
// }

  render() {
    let floatieOptions = this.props.floatieList.map((floatie) => {
      return (
        <div>
          <label>
            {floatie.name}
          <select onChange={this.props.handleFloatieChange}>
            <option id={floatie._id} value="0">0</option>
            <option id={floatie._id} value="1">1</option>
            <option id={floatie._id} value="2">2</option>
            <option id={floatie._id} value="3">3</option>
            <option id={floatie._id} value="4">4</option>
            <option id={floatie._id} value="5">5</option>
          </select>
          <Media>
            <img
              width={160}
              height={120}
              className="flImage"
              src={floatie.photo}
              alt="river floatie"
            />
            <Media.Body>
              <p>{`$${floatie.price} / day`}</p>
            </Media.Body>
          </Media>
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
