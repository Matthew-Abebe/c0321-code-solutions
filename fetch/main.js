const array = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => array.push(data))
  .then(console.log(array));

const favoritePokemon = [];

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => favoritePokemon.push(data))
  .then(console.log(favoritePokemon));
