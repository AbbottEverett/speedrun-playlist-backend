const axios = require('axios');
const baseURL = 'https://www.speedrun.com/api/v1';

class Run {
  constructor(data) {
    this.weblink = data.weblink;
    this.player = data.players;
    this.categoryId = data.category;
    this.video_url = data.videos.links;
    this.run_time = data.times.primary_t;
    this.platformId = data.system.platform;
    this.date = data.date;
  }
}

function getGameByName(name) {
  let game = {};
  return axios.get(`${baseURL}/games?name=${name}`)
    .then((result) => {
      let gameData = result.data.data[0];
      game.id = gameData.id;
      game.name = gameData.names.international;
      return axios.get(`${baseURL}/games/${game.id}/records?top=1`);
    })
    .then((result) => {
      let categories = [];
      let categoriesList = result.data.data;
      categoriesList.forEach((category) => {
        if (category.runs.length > 0) {
          let reqData = category.runs[0].run;
          let run = new Run(reqData);
          categories.push(run);
        }
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
