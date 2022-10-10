const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`
        SELECT * FROM "toDoList" ORDER BY "id";
    `)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((err) => {
        console.log('something wrong in router.get', err);
        res.sendStatus(500);
    })
})

// POST
router.post('/', (req, res) => {
    let queryText = (`
        INSERT INTO "toDoList" ("task") VALUES ($1);
    `)
    pool.query(queryText, [req.body.text])
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('something wrong in router.post', err);
            res.sendStatus(500);
        })
})

// PUT
router.put('/:id', (req, res) => {
    let queryText = (`
        UPDATE "toDoList" SET "isComplete" = NOT "isComplete" WHERE "id" = $1;
    `)
    pool.query(queryText,[req.params.id])
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('something wrong in router.put', err);
            res.sendStatus(500);
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    let queryText = (`
        DELETE FROM "toDoList" WHERE "id" = $1;
    `)

    pool.query(queryText, [req.params.id])
        .then(dbRes => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('something wrong in router.delete', err);
            res.sendStatus(500);
        })
})


module.exports = router;