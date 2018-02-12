
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_runs', table => {
    table.increments();
    table.integer('playlist_id').notNullable();
    table.foreign('playlist_id').references('playlists.id').onDelete('CASCADE');
    table.integer('run_id').notNullable();
    table.foreign('run_id').references('runs.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_runs');
};
