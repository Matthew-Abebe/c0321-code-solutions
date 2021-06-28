/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newArr = string.split('');

  var first = newArr[firstIndex];
  var second = newArr[secondIndex];

  newArr[firstIndex] = second;
  newArr[secondIndex] = first;

  console.log(first, second);

  string = newArr.join('');
  console.log(string);

  return string;
}
