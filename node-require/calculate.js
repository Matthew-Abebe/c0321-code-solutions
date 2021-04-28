const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');

const x = parseFloat(process.argv[2]);
const operation = process.argv[3];
const y = parseFloat(process.argv[4]);

if (operation === 'plus') {
  console.log('result: ', plus(x, y));
} else if (operation === 'minus') {
  console.log('result: ', minus(x, y));
} else if (operation === 'times') {
  console.log('result: ', times(x, y));
} else if (operation === 'over') {
  console.log('result: ', over(x, y));
} else {
  console.log('invalid operation');
}
