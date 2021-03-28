/* exported getKeys */

function getKeys(object) {
  var newArr = [];
  var key;

  for (key in object) {
    newArr.push(key);
  }

  return (newArr);
}
