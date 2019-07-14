const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/post-calculations', (req, res) => {  

    let entry = req.body
    console.log(entry);
    
    const queryText = 'INSERT INTO "entries" ("calculation") VALUES ($1) RETURNING id';
    pool.query(queryText, [entry])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  });

  router.get('/get-calculations', (req, res) => {
    const queryText = 'SELECT * FROM "entries" ORDER BY id DESC limit 10;';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
        console.log('Error getting calculations', err);
        res.sendStatus(500);
        });
    });

    router.delete('/:id', (req, res) => {
      const queryText = 'DELETE FROM "entries" WHERE id=$1';
      pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
          console.log('Error deleting entry', err);
          res.sendStatus(500);
        });
    });

  module.exports = router;