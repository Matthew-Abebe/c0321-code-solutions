/* exported getValues */

function getValues(object) {
  var newArr = [];

  for (var i in object) {
    newArr.push(object[i]);
  }
  return (newArr);
}
