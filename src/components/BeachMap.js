import React from 'react';

const REACT_APP_EXTERNAL_KEY = "AIzaSyBKEQgBNJqowcHe2bGGQYAZ6tDYt9Sjinc";

const BeachMap = () => {
  return (
    <>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=800x400&markers=color:red|38.500246,-122.997504|38.5106054,-122.923604|38.5020377,-122.9349363|38.4664862,-123.00969|38.4999242,-122.899612&key=${REACT_APP_EXTERNAL_KEY}`}/>
    </>
  );
}

export default BeachMap;