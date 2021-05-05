
const express = require('express');

const notes = {
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }
};

const app = express();

app.get('/api/notes', function (req, res) {
  const notesArr = [];
  for (const prop in notes) {
    notesArr.push(notes[prop]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;

  if (id < 0) {
    res.status(400);
    res.json({ error: 'id must be a postive integer.' });
  } else if (!notes[id]) {
    res.status(404);
    res.json({ error: `cannot find note with id ${notes[id]}.` });
  }

  res.json(notes[id]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
