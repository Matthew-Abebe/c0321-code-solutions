const fs = require('fs');
const express = require('express');
const { error } = require('console');

let nextId = 5;

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

  if (id < 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'id must be a postive integer.' });
  } else if (!notes[id]) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}.` });
  } else {
    res.status(200);
  }

  res.json(notes[id]);
});

var jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', function (req, res, err) {
  const newNote = req.body;
  const id = nextId++;
  newNote.id = id;
  notes[id] = newNote;

  const result = JSON.stringify(newNote, null, 2);

  fs.writeFile('data.json', result, function (err) {

    if (!req.body.content) {
      res.status(400);
      res.json({ error: 'content is a required field' });
    } else if (err) {
      res.status(500);
      (console.error(err));
      res.json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201);
      res.json(JSON.parse(result));
    }
  });
});

app.delete('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (id < 0 || isNaN(id)) {
    res.status(400).json({ error: 'id must be a postive integer.' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}.` });
  } else {
    delete notes[id];
    const result = JSON.stringify(notes, null, 2);
    fs.writeFile('data.json', `${result}`, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});

app.put('/api/notes/:id', function (req, res, err) {

  const id = req.params.id;
  const updatedNote = req.body.content;

  if (id < 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'id must be a postive integer.' });
  } else if (typeof updatedNote !== 'string') {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else if (notes[id] === undefined) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}.` });
  } else {

    const targetNote = notes[id];
    const writtenNotes = notes;
    targetNote.content = updatedNote;
    const result = JSON.stringify(writtenNotes, null, 2);

    console.log('typeof updatedNote: ', typeof updatedNote);
    console.log('value updatedNote: ', updatedNote);

    fs.writeFile('data.json', result, function (err) {
      if (err) {
        res.status(500);
        console.error(error.message);
        res.json({ error: 'something broke!' });
      } else {
        res.status(200);
        res.json(result);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
