/* exported intersection */

function intersection(first, second) {
  var newArr = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }

  return newArr;
}
