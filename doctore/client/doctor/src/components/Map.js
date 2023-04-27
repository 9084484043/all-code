import React from 'react'

const Map = props => {
  const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

  return (
    <ul>
      {animals.map(animal => (
        <li>{animal}</li>
      ))}
    </ul>
  );
};

export default Map