
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs', table => {
    table.increments();
    table.string('game_id').notNullable();
    table.date('date').notNullable();
    table.string('category_id').notNullable();
    table.float('run_time').notNullable();
    table.string('platform_id').notNullable();
    table.string('video_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runs');
};
