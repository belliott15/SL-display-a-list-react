import React from 'react';
import PlantItem from './PlantItem';

export default function PlantList({ plants }) {
  return (
    <div className='plant-list'>
      {plants.map((plant) => <PlantItem key={plant.id} {...plant}/>)}
    </div>
  );
}

