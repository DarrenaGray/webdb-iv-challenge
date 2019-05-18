
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 2, ingredient_id: 1, name: 'Pizza Crust', quantity: "1"},
        {recipe_id: 2, ingredient_id: 2, name: 'Buffalo Wing Sauce', quantity: "1"},
        {recipe_id: 2, ingredient_id: 3, name: 'Cheddar Cheese', quantity: "1.5"},
        {recipe_id: 2, ingredient_id: 4, name: 'Shredded Mozzarella', quantity: "1.5" },
        {recipe_id: 2, ingredient_id: 5, name: 'Cubed Boneless Chicken Breasts', quantity: "2"},
        {recipe_id: 2, ingredient_id: 6, name: 'Garlic Salt', quantity: ".5"},
        {recipe_id: 2, ingredient_id: 7, name: 'Pepper', quantity: ".5"},
        {recipe_id: 2, ingredient_id: 8, name: 'Chili Powder', quantity: ".5"},
        {recipe_id: 2, ingredient_id: 9, name: 'Butter', quantity: "2"},
        {recipe_id: 2, ingredient_id: 10, name: 'Dried Oregano', quantity: ".5"},
      ]);
    });
};
