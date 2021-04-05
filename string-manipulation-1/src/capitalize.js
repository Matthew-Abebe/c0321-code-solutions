/* exported capitalize */

function capitalize(word) {
  var capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return (capWord);
}
