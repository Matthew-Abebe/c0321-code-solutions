import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('root');

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemonList = pokedex.map((pokemon, index) =>
  <div key={index}>
    <li>{pokemon.name}</li>
  </div>
);

ReactDOM.render(
  <ul>{pokemonList}</ul>,
  element
);
