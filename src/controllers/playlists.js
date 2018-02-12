const express = require('express');
const model = require('../models/playlist');

function getAllPlaylists(req, res, next) {
  model.getAllPlaylists()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 500, message: 'Server failure, speak to IT.' });
    });
}

function getOnePlaylist(req, res, next) {
  model.getOnePlaylist(req.params.id)
    .then((data) => {
      if (!data) {
        return next({ status: 404, message: `Could not find playlist at id: ${req.params.id}`, errors: `Playlist at id: ${req.params.id} does not exists.` });
      }
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 404, message: `Could not find playlist at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly.` });
    });
}

function createPlaylist(req, res, next) {
  model.createPlaylist(req.body)
    .then((response) => {
      let data = response[0];
      res.status(201).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: 'Could not create new playlist', errors: 'Please make sure request body is valid' });
    });
}

function updatePlaylist(req, res, next) {
  let data;
  if (isRequestBodyValid(req.body)) {
    data = model.updatePlaylist(req.params.id, req.body);
  } else {
    return next({ status: 400, message: `Could not update playlist at id: ${req.params.id}`, errors: 'Please make sure request body is valid' });
  }

  if (data.errors) {
    return next({ status: 400, message: `Could not update playlist at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function deletePlaylist(req, res, next) {
  const data = model.deletePlaylist(req.params.id);

  if (data.errors) {
    return next({ status: 400, message: `Could not remove playlist at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function isRequestBodyValid(reqData) {
  if (!reqData.name) return false;
  if (!reqData.user_id) return false;
  return true;
}

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, updatePlaylist, deletePlaylist };
