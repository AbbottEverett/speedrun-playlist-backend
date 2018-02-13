
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs').insert([
        {id: 1, name: 'Super Mario RPG: Legend of the Seven Stars', date:'2017-12-02', run_time: 10103, video_url: 'https://www.twitch.tv/videos/206040648', category: 'Any%', platform: 'Super Nintendo'},
        {id: 2, name: 'The Legend of Zelda: Ocarina of Time', date:'2017-03-23', run_time: 1029, video_url: 'https://www.twitch.tv/videos/130682049', category: 'Any%', platform: 'Wii Virtual Console'},
        {id: 3, name: 'Shadow of the Colossus', date:'2017-07-21', run_time: 5275, video_url: 'https://www.twitch.tv/videos/161032074', category: 'Any%', platform: 'PlayStation 3'},
        {id: 4, name: 'Psychonauts', date:'2017-07-27', run_time: 2056, video_url: 'https://www.youtube.com/watch?v=e808o1yiMvk', category: 'Any%', platform: 'PC'}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('runs_id_seq', (SELECT MAX(id) FROM runs));`
        );
      });
    });
};
