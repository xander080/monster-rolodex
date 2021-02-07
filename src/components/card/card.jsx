import React from 'react';
import './card.css';

const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h3>{props.monsters.name}</h3>
      <p>{props.monsters.email}</p>
    </div>
  );
};

export default Card;
