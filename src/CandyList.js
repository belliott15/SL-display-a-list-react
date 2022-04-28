import React from 'react';
import CandyItem from './CandyItem.js';

export default function CandyList({ candies }) {
  return (
    <div>
      {candies.map((candy) => <CandyItem key={candy.id} {...candy} />)}
    </div>
  );
}

