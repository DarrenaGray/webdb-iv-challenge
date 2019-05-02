const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    getDish,
    getDishRecipes,
    addDish,
}

function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db('dishes')
        .where({ id })
        .first();
}

function getDishRecipes(dishId) {
    return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dish_id')
    .select('r.id', 'r.name', 'd.name as relatedDish')
    .where('r.dish_id', dishId);
};

function addDish(dish) {
    return db('dishes')
        .insert(dish, 'id')
        .then(([id]) => {
            return getDish(id);
        });
}