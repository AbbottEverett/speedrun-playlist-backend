
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runs').del()
    .then(function () {
      // Inserts seed entries
      return knex('runs').insert([
        {id: 1, game_id: 'j1n8xy1p', date:'2017-12-02', run_time: 10103, video_url: 'https://www.twitch.tv/videos/206040648', category_id: 'mke5jpnk', platform_id: '41jdw3o7'},
        {id: 2, game_id: 'j1l9qz1g', date:'2017-03-23', run_time: 1029, video_url: 'https://www.twitch.tv/videos/130682049', category_id: 'z275w5k0', platform_id: 'goj4q3wm'},
        {id: 3, game_id: '9j1l8v6g', date:'2017-07-21', run_time: 5275, video_url: 'https://www.twitch.tv/videos/161032074', category_id: 'zjdznvdv', platform_id: 'dl37ev6q'},
        {id: 4, game_id: 'j1ne8e1p', date:'2017-07-27', run_time: 2056, video_url: 'https://www.youtube.com/watch?v=e808o1yiMvk', category_id: 'mke5gjk6', platform_id: '8zjwp7vo'}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('runs_id_seq', (SELECT MAX(id) FROM runs));`
        );
      });
    });
};
