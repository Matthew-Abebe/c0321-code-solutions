const takeAChance = require('./take-a-chance');

const takeAChanceName = takeAChance('Matthew');

takeAChanceName.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
