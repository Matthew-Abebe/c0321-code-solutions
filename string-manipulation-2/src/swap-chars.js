/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newArr = string.split('');

  firstIndex = newArr[firstIndex];
  secondIndex = newArr[secondIndex];
  var temp;

  temp = firstIndex;
  firstIndex = secondIndex;
  secondIndex = temp;

  console.log(firstIndex, secondIndex);

  string = newArr.join('');

  return string;
}

// Swapping characters but trouble returning string.
