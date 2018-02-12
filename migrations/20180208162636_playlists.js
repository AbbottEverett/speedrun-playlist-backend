
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlists', table => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlists');
};
