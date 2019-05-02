const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('dishes');
}

function findById(id) {
    return db('dishes')
        .where({ id })
        .first();
}

function add() {
    return db('dishes')
        .insert(dish, 'id')
        .then(([id]) => {
            return findById(id);
        });
}