const router = require('express').Router();

const Dishes = require('./dishes-model');

router.get('/', (req, res) => {
    Dishes
        .find()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem retrieving the dishes." });
        });
});

module.exports = router;