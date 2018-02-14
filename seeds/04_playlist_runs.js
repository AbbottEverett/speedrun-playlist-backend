
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist_runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlist_runs').insert([
        {id: 1, playlist_id: 3, run_id: 1},
        {id: 2, playlist_id: 3, run_id: 2},
        {id: 3, playlist_id: 2, run_id: 3},
        {id: 4, playlist_id: 2, run_id: 4},
        {id: 5, playlist_id: 1, run_id: 1},
        {id: 6, playlist_id: 1, run_id: 4}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('playlist_runs_id_seq', (SELECT MAX(id) FROM playlist_runs));`
        );
      });
    });
};
