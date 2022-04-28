import React from 'react';
import CandyItem from './CandyItem.js';

export default function CandyList({ candies }) {
  return (
    <div className='candy-list'>
      {candies.map((candy) => <CandyItem key={candy.id} {...candy} />)}
    </div>
  );
}

