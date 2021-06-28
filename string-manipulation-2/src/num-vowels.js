/* exported numVowels */

function numVowels(string) {
  string = string.toLowerCase();

  var lettersArr = string.split('');
  var counter = 0;

  for (var i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i] === 'a' || lettersArr[i] === 'e' || lettersArr[i] === 'i' || lettersArr[i] === 'o' || lettersArr[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
