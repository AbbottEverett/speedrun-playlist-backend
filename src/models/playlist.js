const knex = require('../../db');

class Playlist {
  constructor(data) {
    this.name = data.name;
    this.user_id = data.user_id;
  }
}

function getAllPlaylists() {
  return knex('playlists')
}

function getAllPlaylistsByUserId(id) {
  return knex('playlists')
    .where({ user_id: id });
}

function getOnePlaylist(id) {
  return knex('playlists')
    .where({ 'id': id })
    .first();
}

function createPlaylist(reqData) {
  return knex('playlists')
    .insert(new Playlist(reqData))
    .returning('*');
}

function deletePlaylist(id) {
  return knex('playlists')
    .where({ 'id': id })
    .del()
    .returning('*');
}

function updatePlaylist(id, reqData) {
  return knex('playlists')
    .where({ 'id': id })
    .update(new Playlist(reqData))
    .returning('*');
}

module.exports = { getAllPlaylists, getAllPlaylistsByUserId, getOnePlaylist, createPlaylist, deletePlaylist, updatePlaylist };
