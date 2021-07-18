const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error occured.' });
    });
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const score = parseInt(req.body.score, 10);

  if (!Number.isInteger(score) || !req.body.name || !req.body.course || !req.body.score || req.body.score < 1 || score > 100) {
    res.status(400).send({ error: 'Invalid grade or missing name, course or score. Please ensure that score is an integer between 1 and 100.' });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [req.body.name, req.body.course, score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error ocurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const score = parseInt(req.body.score, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).send({ error: "'gradeId' must be a positive integer." });
    return;
  } else if (!Number.isInteger(score) || !req.body.name || !req.body.course || !score || score < 1 || score > 100) {
    res.status(400).send({ error: 'invalid gradeId or invalid/missing name, course, or score' });
    return;
  }
  const sql = `
    update "grades"
      set "name"   =   $1,
          "course" =   $2,
          "score"  =   $3
      where "gradeId" = $4
      returning *
    `;

  const params = [req.body.name, req.body.course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).send({ error: "'gradeId' does not exist." });
      }
      res.status(200).send(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error ocurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).send({ error: "'gradeId' must be a positive integer" });
    return;
  }

  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *
  `;

  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).send({ error: "'gradeId' does not exist" });
      }
      res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error ocurred.' });
    });
});
