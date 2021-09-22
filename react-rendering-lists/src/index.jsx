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

function RenderPokemonList() {
  const pokemonList = pokedex.map((pokemon, index) => {
    return (
      <div key={index}>
        <ul>
          <li>{pokemon.name}</li>
        </ul>
      </div>
    );
  });
  return pokemonList;
}

ReactDOM.render(
  <RenderPokemonList />,
  element
);
