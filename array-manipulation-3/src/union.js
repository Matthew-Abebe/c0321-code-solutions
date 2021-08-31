/* exported union */

function union(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (let m = 0; m < second.length; m++) {
    if (!newArr.includes(second[m])) {
      newArr.push(second[m]);
    }
  }

  return newArr;
}
