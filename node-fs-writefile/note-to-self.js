const fs = require('fs');

const data = process.argv[2];

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
