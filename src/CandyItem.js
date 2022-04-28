import React from 'react';

export default function candyItem({ name, type, flavor, color, sweetness }) {
  return (
    <div className='candy-item' style={{ background: color }}>
      <h2>{name}</h2>
      <p>Type:{type}</p>
      <p>{flavor}</p>
      <p>Sweetness Level: {sweetness}/10</p>
    </div>
  );
}

