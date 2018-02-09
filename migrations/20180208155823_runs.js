
exports.up = function(knex, Promise) {
  return knex.schema.createTable('runs', table => {
    table.increments();
    table.string('name').notNullable();
    table.date('date').notNullable();
    table.string('category');
    table.float('run_time').notNullable();
    table.string('platform').notNullable();
    table.string('video_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runs');
};
