const knex = require('../../db');

const playlists = [
  {
    id: 1,
    user: 'Patrick',
    name: 'Patrick Games'
  }
];

class Playlist {
  constructor(data, id) {
    this.id = this.generateId(id);
    this.name = data.name;
    this.user = data.user;
  }
  generateId(id) {
    if (id) {
      return id;
    } else if (playlists.length > 0) {
      return playlists[playlists.length-1].id + 1;
    }
    return 1;
  }
}

function getAllPlaylists() {
  return knex('playlists')
    .then((response) => {
      console.log(response);
      return response;
    });
  // const response = playlists;
  // return response;
}

function getOnePlaylist(id) {
  const idToCheck = parseInt(id, 10);
  let response;

  playlists.forEach((playlist) => {
    if (playlist.id === idToCheck) {
      response = playlist;
    }
  });

  if (!response) {
    response = { errors: 'Please make sure id is inputted correctly' };
  }

  return response;
}

function createPlaylist(reqData) {
  const response = new Playlist(reqData);
  playlists.push(response);
  return response;
}

function deletePlaylist(id) {
  let response = getOnePlaylist(id);

  if (response.errors) {
    return response;
  } else {
    let index = playlists.indexOf(response);
    playlists.splice(index, 1);
  }

  return response;
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
