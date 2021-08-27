/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newArr = string.split('');

  var first = newArr[firstIndex];
  var second = newArr[secondIndex];

  newArr[firstIndex] = second;
  newArr[secondIndex] = first;

  string = newArr.join('');

  return string;
}
