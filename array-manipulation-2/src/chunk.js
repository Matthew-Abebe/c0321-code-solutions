/* exported chunk */

function chunk(array, size) {
  var newArr = [];

  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArr.push(chunk);
  }
  return newArr;
}
