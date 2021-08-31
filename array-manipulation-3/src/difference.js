/* exported difference */

function difference(first, second) {
  var newArr = [];

  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }

  for (let m = 0; m < second.length; m++) {
    if (!first.includes(second[m])) {
      newArr.push(second[m]);
    }
  }

  return newArr;
}
