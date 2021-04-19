/* exported ransomCase */

function ransomCase(string) {
  string = string.toLowerCase();

  var lettersArr = string.split(' ');
  var newArr = [];

  for (var i = 0; i < lettersArr.length; i += 2) {
    newArr.push(lettersArr[i].toUpperCase());
  }
  return newArr.join(' ');

}
