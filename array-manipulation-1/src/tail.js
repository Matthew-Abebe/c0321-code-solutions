/* exported tail */

function tail(array) {
  var newArr = [];

  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    newArr.push(item);
  }
  return (newArr);
}
