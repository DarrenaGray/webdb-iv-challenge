// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
        filename: './data/recipe_book',
    },
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
    pool : {
        afterCreate: (connection, done) => {
            connection.run('PRAGMA foreign_keys = ON', done);
        },
    },
  },
};
