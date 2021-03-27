/* exported includesSeven */

function includesSeven(array) {
  var hasSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      hasSeven = true;
    }
  }
  return hasSeven;
}
