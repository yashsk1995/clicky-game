import React from 'react';
import './jumbotron.css';

const Jumbotron = props => (
<div className="container main">
  <div className="jumbotron main img">
    <h1>Clicky Game!!</h1>      
    <p>Click on image to get points , but don't click on any one twice !! </p>
    <p>{props.text}</p>
  </div>
</div>
);

export default Jumbotron;