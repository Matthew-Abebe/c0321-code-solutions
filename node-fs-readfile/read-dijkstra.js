const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
