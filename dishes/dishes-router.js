const router = require('express').Router();

const Dishes = require('./dishes-model');

router.get('/', (req, res) => {
    Dishes
        .getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem retrieving the dishes." });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    Dishes
        .getDish(id)
        .then(dish => {
            if (dish) {
                res.status(200).json(dish)
            } else {
                res.status(404).json({ message: "The dish with the specified ID could not be found." })
            }
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem retrieving the dish." })
        });
});

router.post('/', (req, res) => {
    const dishInfo = req.body
    Dishes
        .addDish(dishInfo)
        .then(dish => {
            res.status(201).json({ dish, message: "The dish was succesfully added!" })
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem adding the dish." })
        });
});

module.exports = router;