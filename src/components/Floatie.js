import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Floatie = (props) => {
  return (

    <Card className="floatie-card" id="fl-card">
      <Card.Img className="fl-card-img" variant="top" src={props.floatie.photo} />
      <Card.Body>
        <Card.Title className="floatieTitle" style={{fontSize: 35}}><Link to={`/floaties/${props.floatie.name}`}>{props.floatie.name}</Link></Card.Title>
        <Card.Text className="fl-card-text">
          {props.floatie.deliverable === true ?
            <>
              Can be delivered: <i className="fas fa-check"></i>
            </>
            :
            <>
              Can be delivered: <i className="fas fa-times"></i> 
            </>
          }
        </Card.Text>
        <Card.Text className="fl-card-text">
          {`Price per day: $${props.floatie.price}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Floatie;
