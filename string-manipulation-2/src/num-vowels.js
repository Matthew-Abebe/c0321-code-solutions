/* exported numVowels */

function numVowels(string) {
  string = string.toLowerCase();

  var lettersArr = string.split('');
  var newArr = [];

  for (var i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i] === 'a' || lettersArr[i] === 'e' || lettersArr[i] === 'i' || lettersArr[i] === 'o' || lettersArr[i] === 'u') {
      newArr.push(lettersArr[i]);
    }
  }
  return newArr.length;
}
