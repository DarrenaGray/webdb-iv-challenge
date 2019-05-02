const router = require('express').Router();

const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        });
});

router.post('/', (req, res) => {
    const { dish_id, name } = req.body;
    Recipes
        .addRecipe({ dish_id, name })
        .then(recipe => {
            res.status(201).json({ recipe, message: "The recipe was successfully added!" });
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem adding the recipe." });
        });
})

module.exports = router;