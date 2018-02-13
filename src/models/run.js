const knex = require('../../db');

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
  return knex('runs')
    .where({ 'id': id })
    .del()
    .returning('*');
}

function updateRun(id, reqData) {
  return knex('runs')
    .where({ 'id': id })
    .update(new Run(reqData))
    .returning('*');
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
