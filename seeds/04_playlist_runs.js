
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist_runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlist_runs').insert([
        {id: 1, playlist_id: 3, run_id: 1}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('playlist_runs_id_seq', (SELECT MAX(id) FROM playlist_runs));`
        );
      });
    });
};
