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
  model.updatePlaylist(req.params.id, req.body)
    .then((response) => {
      if (response.length < 1) {
        return next({ status: 400, message: `Could not update playlist at id: ${req.params.id}`, errors: `Playlist at id: ${req.params.id} does not exists.` });
      }
      let data = response[0];
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: `Could not update playlist at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly or request body is valid.` });
    });
}

function deletePlaylist(req, res, next) {
  model.deletePlaylist(req.params.id)
    .then((response) => {
      if (response.length < 1) {
        return next({ status: 400, message: `Could not delete playlist at id: ${req.params.id}`, errors: `Playlist at id: ${req.params.id} does not exists.` });
      }
      let data = response[0];
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: `Could not delete playlist at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly.` });
    });
}

// function isRequestBodyValid(reqData) {
//   if (!reqData.name) return false;
//   if (!reqData.user_id) return false;
//   return true;
// }

module.exports = { getAllPlaylists, getOnePlaylist, createPlaylist, updatePlaylist, deletePlaylist };
