
exports.up = function(knex, Promise) {
    return knex.schema
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
                .float('quantity');
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
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')
};
