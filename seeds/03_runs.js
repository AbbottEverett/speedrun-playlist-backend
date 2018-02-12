
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs').insert([
        {id: 1, name: 'Super Mario RPG: Legend of the Seven Stars', date:'2017-12-02', run_time: 10103, video_url: 'https://www.twitch.tv/videos/206040648', category: 'Any%', platform: 'Super Nintendo'}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('runs_id_seq', (SELECT MAX(id) FROM runs));`
        );
      });
    });
};
