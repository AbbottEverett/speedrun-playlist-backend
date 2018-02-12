
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist_runs').del()
    .then(() => {
      return knex('playlists').del();
    })
    .then(() => {
      return knex('runs').del();
    })
    .then(() => {
      return knex('users').del();
    });
};
