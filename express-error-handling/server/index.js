require('dotenv/config');
const pg = require('pg');
const express = require('express');
const ClientError = require('./client-error'); // eslint-disable-line
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => next(err));
});

app.post('/api/grades', (req, res, next) => {
  const { name, course } = req.body;
  const score = parseInt(req.body.score, 10);
  if (!name || !course || !score) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an integer between 0 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const [newGrade] = result.rows;
      res.status(201).json(newGrade);
    })
    .catch(err => next(err));
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const [grade] = result.rows;
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => next(err));
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
  const { name, course } = req.body;
  const score = parseInt(req.body.score, 10);
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name"   = $1,
           "course" = $2,
           "score"  = $3
     where "gradeId" = $4
    returning *
  `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const [updatedGrade] = result.rows;
      if (!updatedGrade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(updatedGrade);
      }
    })
    .catch(err => next(err));
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const [deletedGrade] = result.rows;
      if (!deletedGrade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`express server listening on port ${process.env.PORT}`)
});
