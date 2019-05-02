const router = require('express').Router();

const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        });
});

module.exports = router;