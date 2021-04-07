/* exported initial */

function initial(array) {
  var newArr = [];

  for (var i = 0; i < array.length - 1; i++) {
    var item = array[i];
    newArr.push(item);
  }
  return newArr;
}
