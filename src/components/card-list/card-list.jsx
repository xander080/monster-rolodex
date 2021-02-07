import React from 'react';
import './card-list.css';
import Card from '../card/card';

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monsters => (
        <Card key={monsters.id} monsters={monsters} />
      ))}
    </div>
  );
};

export default CardList;
