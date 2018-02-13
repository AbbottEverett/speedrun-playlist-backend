const knex = require('../../db');
const runs = [
  {
    id: 1,
    name: 'Super Mario World',
    date: '2017-12-09',
    category: '96_exit',
    run_time: 10000,
    platform: 'SNES',
    video_url:'youtube.com/myvideo'
  }
];

class Run {
  constructor(data) {
    this.name = data.name;
    this.date = data.date;
    this.category = data.category;
    this.run_time = data.run_time;
    this.platform = data.platform;
    this.video_url = data.video_url;
  }
}

function getAllRuns() {
  return knex('runs');
}

function getOneRun(id) {
  return knex('runs')
    .where({ 'id': id })
    .first();
}

function createRun(reqData) {
  return knex('runs')
    .insert(new Run(reqData))
    .returning('*');
}

function deleteRun(id) {
  let response = getOneRun(id);

  if (!response) {
    response = { errors: 'Please make sure id is inputted correctly' };
  } else {
    let index = runs.indexOf(response);
    runs.splice(index, 1);
  }

  return response;
}

function updateRun(id, reqData) {
  let response = getOneRun(id);
  if (response.errors) {
    return response;
  } else {
    const index = runs.indexOf(response);
    const newRunData = new Run(reqData, parseInt(id, 10));
    runs[index] = newRunData;
    response = runs[index];
  }
  return response;
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
