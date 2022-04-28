import React from 'react';
import PlantItem from './PlantItem';

export default function PlantList({ plants }) {
  return (
    <div>
      {plants.map((plant) => <PlantItem key={plant.id} {...plant}/>)}
    </div>
  );
}

