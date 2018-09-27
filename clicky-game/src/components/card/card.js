import React from 'react';
import "./card.css"
const Card = props =>(

<div className="card main images" onClick={() => props.clicked(props.id)} >

  <img className="card-img-top img1"  src={props.image} alt={props.name} />
 
</div>
);


export default Card;
