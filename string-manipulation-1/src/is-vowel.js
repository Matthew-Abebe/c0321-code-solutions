/* exported isVowel */

function isVowel(char) {
  var charLowerCase = char.toLowerCase();

  if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else if (charLowerCase === 'a' || charLowerCase === 'e' || charLowerCase === 'i' || charLowerCase === 'o' || charLowerCase === 'u') {
    return true;
  } else {
    return false;
  }
}
