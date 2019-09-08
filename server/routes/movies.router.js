const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

////GET
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

////PUT 
router.put('/', (req, res) => {
    const movieObject = req.body;
    const movieId = req.body.id;
    console.log(`req.body contains:`, req.body)
    
    const queryText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE id=$3;`;

    pool.query(queryText, [movieObject.title, movieObject.description, movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error updating database: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;