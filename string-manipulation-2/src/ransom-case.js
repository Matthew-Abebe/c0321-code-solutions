/* exported ransomCase */

function ransomCase(string) {
  string = string.toLowerCase();

  var lettersArr = string.split('');
  var newArr = [];

  for (var i = 0; i < lettersArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(lettersArr[i].toLowerCase());
    } else if (i % 2 !== 0) {
      newArr.push(lettersArr[i].toUpperCase());
    }
  }
  return newArr.join('');

}
