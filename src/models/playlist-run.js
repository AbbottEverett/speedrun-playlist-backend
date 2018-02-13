const knex = require('../../db');

class PlaylistRun {
  constructor(data) {
    this.playlist_id = data.playlist_id,
    this.run_id = data.run_id
  }
}

function getAllPlaylistRuns(playlistId) {
  return knex('playlist_runs')
    .where({ 'playlist_id': playlistId });
}

function getOnePlaylistRun(playlistId, runId) {
  return knex('playlist_runs')
    .where({ 'playlist_id': playlistId, 'run_id': runId })
    .first();
}

function createPlaylistRun(playlistId, reqData) {
  // return knex('playlist_runs')
  //   .insert(new PlaylistRun(reqData))
  //   .returning('*');
}

function deletePlaylistRun(playlistId, runId) {
  // return knex('playlist_runs')
  //   .where({ 'id': id })
  //   .del()
  //   .returning('*');
}

function updatePlaylistRun(playlistId, runId, reqData) {
  // return knex('playlist_runs')
  //   .where({ 'id': id })
  //   .update(new PlaylistRun(reqData))
  //   .returning('*');
}

module.exports = { getAllPlaylistRuns, getOnePlaylistRun, createPlaylistRun, deletePlaylistRun, updatePlaylistRun };
