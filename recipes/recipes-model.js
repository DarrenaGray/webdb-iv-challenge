const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    addRecipe,
}

function getRecipes() {
    return db('recipes');
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
    .then(([id]) => {
        return getDish(id);
    });
}