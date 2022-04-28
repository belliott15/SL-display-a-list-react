import React from 'react';
import DipItem from './DipItem.js';

export default function DipList({ dips }) {
  return (
    <div className='dip-list'>
      {dips.map((dip) => <DipItem key={dip} dip={dip} />)}
    </div>
  );
}

