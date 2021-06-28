/* exported capitalizeWord */

function capitalizeWord(word) {

  word = word.toLowerCase();

  if (word === 'javascript') {
    return 'JavaScript';
  }

  var lettersArr = [];
  var newArr = [];

  lettersArr = word.split();

  for (var i = 0; i < lettersArr.length; i++) {
    newArr.push(lettersArr[i].charAt(0).toUpperCase() + lettersArr[i].slice(1));
  }
  return newArr.join(' ');
}
