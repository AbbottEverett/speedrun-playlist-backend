
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist_runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlist_runs').insert([
        
      ]).then(() => {
        return knex.raw(
          `SELECT setval('playlist_runs_id_seq', (SELECT MAX(id) FROM playlist_runs));`
        );
      });
    });
};
