/* exported compact */

function compact(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === isNaN(1 + undefined) || array[i] === 0 || typeof array[i] === 'undefined' || array[i] === '' || isNaN(array[i])) {
      delete array[i];
    } else {
      newArr.push(array[i]);
    }
  }
  return (newArr);
}
