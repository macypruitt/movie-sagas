const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "movies_genres".genre_id = "genres".id
    ORDER BY "movies".title ASC;`;

    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        });
});