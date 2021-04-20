/* exported capitalizeWords */

function capitalizeWords(string) {
  string = string.toLowerCase();

  var lettersArr = string.split(' ');
  var newArr = [];

  for (var i = 0; i < lettersArr.length; i++) {
    newArr.push(lettersArr[i].charAt(0).toUpperCase() + lettersArr[i].slice(1));
  }
  return newArr.join(' ');
}
