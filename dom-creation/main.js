/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

var rowEl = document.querySelector('.row');

function renderPokemon(pokemon) {

  var columnThirdDivEl = document.createElement('div');
  columnThirdDivEl.className = 'column-third';
  var pokemonCardDivEl = document.createElement('div');
  pokemonCardDivEl.className = 'pokemon-card';
  var pokemonImageEl = document.createElement('img');
  pokemonImageEl.src = pokemon.imageUrl;
  var pokemonCardTextDivEl = document.createElement('div');
  pokemonCardTextDivEl.className = 'pokemon-card-text';
  var pokemonHeaderEl = document.createElement('h2');
  var pokemonHeader = document.createTextNode(pokemon.name);
  pokemonHeaderEl.appendChild(pokemonHeader);
  var pokemonNumberEl = document.createElement('h3');
  var pokemonNumber = document.createTextNode(pokemon.number);
  pokemonNumberEl.appendChild(pokemonNumber);
  var pokemonDescriptionEl = document.createElement('p');
  var pokemonDescription = document.createTextNode(pokemon.description);
  pokemonDescriptionEl.appendChild(pokemonDescription);

  rowEl.appendChild(columnThirdDivEl);
  columnThirdDivEl.appendChild(pokemonCardDivEl);
  pokemonCardDivEl.appendChild(pokemonImageEl);
  pokemonCardDivEl.appendChild(pokemonCardTextDivEl);
  pokemonCardTextDivEl.appendChild(pokemonHeaderEl);
  pokemonCardTextDivEl.appendChild(pokemonNumberEl);
  pokemonCardTextDivEl.appendChild(pokemonDescriptionEl);

}

pokedex.forEach(pokemon => renderPokemon(pokemon));
