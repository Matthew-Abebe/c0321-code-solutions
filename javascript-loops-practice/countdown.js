/* exported countdown */

function countdown(number) {
  var numbersArr = [];
  // initializer variable for loop starts at a given number
  // condition i is set between 0 and a given number
  // expression decrements i every time loop is run
  for (var i = number; i <= number && i >= 0; i--) {
    // number is decremented every time loop is run and number is pushed into numbers arr
    number--;
    numbersArr.push(number);
  }
}
