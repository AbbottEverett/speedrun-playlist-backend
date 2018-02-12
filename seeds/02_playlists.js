
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        {id: 1, name: 'Super Mario World Records', user_id: 1},
        {id: 2, name: 'Jordan Games', user_id: 2}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('playlists_id_seq', (SELECT MAX(id) FROM playlists));`
        );
      });
    });
};
