/* exported calculator */

var calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  divide: function divide(x, y) {
    return x / y;
  },
  square: function square(x, y) {
    return x * x;
  },
  sumAll: function sumAll(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function getAverage(numbers) {
    var average = 0;

    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i] / numbers.length;
    }
    return average;
  }
};
