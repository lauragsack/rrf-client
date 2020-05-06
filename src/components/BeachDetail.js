import React from 'react';
import Media from 'react-bootstrap/Media'

const BeachDetail = (props) => {
  return (
    <Media>
      <img
        width={160}
        height={120}
        className="beachImage"
        src={props.beach.photo}
        alt="river beach"
      />
      <Media.Body>
        <h5>{props.beach.name}</h5>
        <p>{`${props.beach.rating} | ${props.beach.numRatings} reviews`}</p>
        <p>{props.beach.address}</p>
      </Media.Body>
    </Media>
  );
}

export default BeachDetail;
