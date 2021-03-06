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
    .then(ids => {
        return ({ id: ids[0] });
    });
}