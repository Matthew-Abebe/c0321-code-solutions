/* exported compact */

function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== 0 && typeof array[i] !== 'undefined' && array[i] !== '' && array[i] !== null && !isNaN(array[i])
    ) {
      newArr.push(array[i]);
    }
  }
  return (newArr);
}
