import React from 'react';

export default function PlantItem({ name, species, type, care, difficulty, description, variations }) {
  return (
    <div className='plant-item'>
      <h2>{name}</h2>
      <p>{type}: {species} Difficulty: {difficulty}/10 </p>
      <p>{description}</p>
      <ul>
        <h3>Care:</h3>
        {care.map((care) => <li key={care}> {care} </li>)}
      </ul>
      <p>
        <h2>Variations:</h2>
        {variations.map((variation) => <p key={variation.name}>{variation.name}</p>)}
      </p>
    </div>
  );
}

