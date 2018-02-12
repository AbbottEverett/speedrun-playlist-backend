const express = require('express');
const model = require('../models/playlist');

const playlists = [
  {
    id: 1,
    user: 'Patrick',
    name: 'Patrick Games'
  }
];

function getAllPlaylists(req, res, next) {
  const data = model.getAllPlaylists();
  res.status(200).json({ data });
}

function getOnePlaylist(req, res, next) {
  const data = model.getOnePlaylist(req.params.id);

  if (data.errors) {
    return next({ status: 404, message: `Could not find playlist at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function createPlaylist(req, res, next) {
  const data = model.createPlaylist(req.body);
  // Check if req body is valid
  // Create it and add it to array

  // Send an error
  res.status(201).json({ data });
}

function updatePlaylist(req, res, next) {
  let data = playlists;
  res.status(200).json({ data });
}

function deletePlaylist(req, res, next) {
  let data = model.deletePlaylist(req.params.id);

  if (data.errors) {
    return next({ status: 400, message: `Could not remove playlist at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, updatePlaylist, deletePlaylist };
