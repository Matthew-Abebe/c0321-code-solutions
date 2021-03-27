/* exported oddOrEven */

function oddOrEven(numbers) {
  var isEven = 'even';
  var isOdd = 'odd';
  var newArr = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] / 2 === 0) {
      newArr.push(isEven);
    } else {
      newArr.push(isOdd);
    }
  }
  return (newArr);
}
