/* exported getIndexes */

function getIndexes(array) {
  var indexes = [];

  for (var i = 0; i < array.length; i++) {
    var index = array.indexOf(array[i]);
    indexes.push(index);
  }
  return (indexes);
}
