
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
            .notNullable()
            .unique();
        
        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('recipes')
};
