const express = require('express');

const playlists = [
  {
    id: 1,
    user: 'Patrick',
    name: 'Patrick Games'
  }
];

function getAllPlaylists(req, res, next) {
  let data = playlists;
  res.status(200).json({ data });
}

function getOnePlaylist(req, res, next) {
  let data = playlists;
  res.status(200).json({ data });
}

function createPlaylist(req, res, next) {
  let data = playlists;
  res.status(201).json({ data });
}

function updatePlaylist(req, res, next) {
  let data = playlists;
  res.status(200).json({ data });
}

function deletePlaylist(req, res, next) {
  let data = playlists;
  res.status(200).json({ data });
}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, updatePlaylist, deletePlaylist };
