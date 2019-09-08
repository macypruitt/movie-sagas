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

router.put('/edit/:id', (req,res) => {
    const editObject = req.body;
    const movieId = req.params.id;
    const queryText = `UPDATE "movies" SET "title"=$1 WHERE id=$2;`;

    pool.query(queryText, [editObject.title, movieId])
        .then((result) => { 
            res.sendStatus(200); 
        })
        .catch((err) => {
                console.log('Error Editing movie data', err);
                res.sendStatus(500);
            });
});

module.exports = router;