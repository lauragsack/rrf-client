import React from 'react';
import Media from 'react-bootstrap/Media'

const BeachDetail = (props) => {
  return (
    <Media className="beachDet">
      <img
        width={160}
        height={120}
        className="beachImage"
        src={props.beach.photo}
        alt="river beach"
      />
      <Media.Body className="beachDetBody">
        <h5 id="beachName">{props.beach.name}</h5>
        <p>{`${props.beach.rating} | ${props.beach.numRatings} reviews`}</p>
        <p>{props.beach.address}</p>
      </Media.Body>
    </Media>
  );
}

export default BeachDetail;
