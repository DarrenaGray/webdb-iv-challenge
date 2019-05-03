
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('dishes', tbl => {
          tbl.increments();

          tbl
              .string('name', 255)
              .notNullable();
      })
      .createTable('recipes', tbl => {
          tbl.increments();

          tbl
              .string('name', 255)
              .notNullable();

          tbl
              .integer('dish_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('dishes')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
      })
      .createTable('ingredients', tbl => {
        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl
            .increments();

        tbl
            .string('name', 255)
            .notNullable();

        tbl
            .float('quantity')

        tbl

            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes')
};