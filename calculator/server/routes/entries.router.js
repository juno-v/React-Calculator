const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/get-calculations', (req, res) => {  

    let entry = req.body
    console.log(entry);
    
    const queryText = 'INSERT INTO "entries" ("calculation") VALUES ($1) RETURNING id';
    pool.query(queryText, [entry])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  });

  module.exports = router;