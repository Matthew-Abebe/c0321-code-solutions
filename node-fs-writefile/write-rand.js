const fs = require('fs');

const data = Math.random().toString();

fs.writeFile('random-text.txt', data, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
