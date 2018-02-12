const playlists = [
  {
    id: 1,
    user: 'Patrick',
    name: 'Patrick Games'
  }
];

class Playlist {
  constructor(data) {
    this.id = this.generateId();
    this.name = data.name;
    this.user = data.user;
  }
  generateId() {
    if (playlists.length > 0) {
      return playlists[playlists.length-1].id + 1;
    }
    return 1;
  }
}

function getAllPlaylists() {
  const response = playlists;
  return response;
}

function getOnePlaylist(id) {

}

function createPlaylist(input) {

}

function deletePlaylist(id) {

}

function updatePlaylist(input, id) {
  
}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, deletePlaylist, updatePlaylist };
