/* exported flatten */

function flatten(array) {
  var newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let m = 0; m < array[i].length; m++) {
        newArr.push(array[i][m]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
