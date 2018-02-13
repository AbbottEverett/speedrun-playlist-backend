const knex = require('../../db');

class PlaylistRun {
  constructor(id, data) {
    this.playlist_id = id,
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
  return knex('playlist_runs')
    .insert(new PlaylistRun(playlistId, reqData))
    .returning('*');
}

function deletePlaylistRun(playlistId, runId) {
  return knex('playlist_runs')
    .where({ 'playlist_id': playlistId, 'run_id': runId })
    .del()
    .returning('*');
}

module.exports = { getAllPlaylistRuns, getOnePlaylistRun, createPlaylistRun, deletePlaylistRun };
