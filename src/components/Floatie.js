import React from 'react';
import Card from 'react-bootstrap/card';
import { Link } from 'react-router-dom';

const Floatie = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.floatie.photo} />
      <Card.Body>
        <Card.Title><Link to={`/floaties/${props.floatie.name}`}>{props.floatie.name}</Link></Card.Title>
        <Card.Text>
          {`Deliverable: ${props.floatie.deliverable}`}
        </Card.Text>
        <Card.Text>
          {`Good for ${props.floatie.goodFor}`}
        </Card.Text>
        <Card.Text>
          {`Price per day: $${props.floatie.price}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Floatie;
