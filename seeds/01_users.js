
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Everett'},
        {id: 2, name: 'Jordan'},
        {id: 3, name: 'Patrick'},
        {id: 4, name: 'Admin'}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
        );
      });
    });
};
