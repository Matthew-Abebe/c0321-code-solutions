/* exported zip */

function zip(first, second) {
  var newArr = [];

  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  } else {
    for (let m = 0; m < second.length; m++) {
      newArr.push([first[m], second[m]]);
    }
  }
  console.log(newArr);

  return newArr;

}
