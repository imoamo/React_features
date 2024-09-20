// ItemCard.js
import React from 'react';

const ItemCard = ({ item }) => (
  <div className="item-card">
    <h3>{item.title}</h3>
    <p>{item.body}</p>
  </div>
);

export default ItemCard;
