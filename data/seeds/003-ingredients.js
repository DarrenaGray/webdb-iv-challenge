
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Pizza Crust'},
        {name: 'Buffalo Wing Sauce'},
        {name: 'Cheddar Cheese'},
        {name: 'Shredded Mozzarella'},
        {name: 'Cubed Boneless Chicken Breasts'},
        {name: 'Garlic Salt'},
        {name: 'Pepper'},
        {name: 'Chili Powder'},
        {name: 'Butter'},
        {name: 'Dried Oregano'},
      ]);
    });
 };
