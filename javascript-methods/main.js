var num1 = 15;
var num2 = 30;
var num3 = 55;

var maximumValue = Math.max(num1, num2, num3);
console.log('Maximum value:', maximumValue);

var heroes = ['Spiderman', 'Iron Man', 'The Hulk', 'Black Panther'];
var randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);

var library = [
  {
    title: 'The Giver',
    author: 'Lois Lowry'
  },
  {
    title: 'Eye of the Needle',
    author: 'Ken Follet'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];

var lastBook = library.pop();
console.log('Last book:', lastBook);
var firstBook = library.shift();
console.log('First book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Libary', library);

var fullName = 'Matthew Abebe';
var firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
