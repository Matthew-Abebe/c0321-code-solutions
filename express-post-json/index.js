const express = require('express');

// const nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', function (req, res) {
  const gradesArr = [];
  for (const prop in grades) {
    gradesArr.push(grades[prop]);
  }
  res.json(gradesArr);
});

var jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', function (req, res) {
  res.send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
