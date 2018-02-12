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
  console.log(playlists)
  return response;
}

function deletePlaylist(id) {
  let response = getOnePlaylist(id);

  if (!response) {
    response = { errors: 'Please make sure id is inputted correctly' };
  } else {
    let index = playlists.indexOf(response);
    playlists.splice(index, 1);
  }
  console.log(playlists);
  console.log(response);
  return response;
}

function updatePlaylist(reqData, id) {

}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, deletePlaylist, updatePlaylist };
