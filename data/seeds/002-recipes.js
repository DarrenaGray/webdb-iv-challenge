
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Caesar Salad'},
        {dish_id: 2, name: 'Buffalo Chicken Pizza'},
        {dish_id: 3, name: 'German Chocolate Cake'}
      ]);
    });
 };
