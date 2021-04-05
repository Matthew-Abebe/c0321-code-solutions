/* exported isVowel */

function isVowel(char) {
  var charLowerCase = char.toLowerCase();

  if (charLowerCase === 'a' || charLowerCase === 'e' || charLowerCase === 'i' || charLowerCase === 'o' || charLowerCase === 'u') {
    return true;
  } else {
    return false;
  }
}
