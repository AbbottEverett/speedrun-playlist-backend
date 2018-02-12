const knex = require('../../db');

const playlists = [
  {
    id: 1,
    user: 'Patrick',
    name: 'Patrick Games'
  }
];

class Playlist {
  constructor(data) {
    this.name = data.name;
    this.user_id = data.user_id;
  }
}

function getAllPlaylists() {
  return knex('playlists')
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
  let response = getOnePlaylist(id);

  if (response.errors) {
    return response;
  } else {
    const index = playlists.indexOf(response);
    const newPlaylistData = new Playlist(reqData, parseInt(id, 10));
    playlists[index] = newPlaylistData;
    response = playlists[index];
  }
  return response;
}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, deletePlaylist, updatePlaylist };
