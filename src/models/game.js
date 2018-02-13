const axios = require('axios');
const baseURL = 'https://www.speedrun.com/api/v1';

function getGameByName(name) {
  let game = {};
  let categories = [];
  return axios.get(`${baseURL}/games?name=${name}&_bulk=yes&max=5`)
    .then((result) => {
      let gameData = result.data.data[0];
      game.id = gameData.id;
      game.name = gameData.names.international;
      return axios.get(`${baseURL}/games/${game.id}/records?top=1`);
    })
    .then((result) => {
      let categoriesList = result.data.data;
      categoriesList.forEach((category) => {
        let reqData = category.runs[0].run;
        let run = {};
        run.weblink = reqData.weblink;
        run.player = reqData.players;
        run.categoryId = reqData.category;
        run.video_url = reqData.videos.links;
        run.run_time = reqData.times.primary_t;
        run.platformId = reqData.system.platform;
        run.date = reqData.date;
        categories.push(run);
      });
      return { game, categories };
    });
}

// function getCategoriesList(id, categoriesList) {
//   const arr = [];
//   categoriesList.forEach((category) => {
//     let categoryId = category.run.id;
//     let url = `${baseURL}/category/${categoryId}`;
//     let promise = axios.get(url);
//     arr.push(promise);
//   });
//   return Promise.all(arr)
//     .then((responses) => {
//       console.log(responses);
//       return responses;
//     })
// }

module.exports = { getGameByName };
