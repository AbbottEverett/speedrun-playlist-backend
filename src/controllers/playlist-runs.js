const express = require('express');
const model = require('../models/playlist-run');

function getAllPlaylistRuns(req, res, next) {
  model.getAllPlaylistRuns(req.params.id)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 500, message: 'Server failure, speak to IT.' });
    });
}

function getOnePlaylistRun(req, res, next) {
  model.getOnePlaylistRun(req.params.id, req.params.runId)
    .then((data) => {
      if (!data) {
        return next({ status: 404, message: `Could not find playlist_run at id: ${req.params.runId}`, errors: `PlaylistRun at id: ${req.params.runId} does not exists.` });
      }
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 404, message: `Could not find playlist_run at id: ${req.params.runId}`, errors: `Please make sure id is inputted correctly.` });
    });
}

function createPlaylistRun(req, res, next) {
  model.createPlaylistRun(req.params.id, req.body)
    .then((response) => {
      let data = response[0];
      res.status(201).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: 'Could not create new playlist_run', errors: 'Please make sure request body is valid' });
    });
}

module.exports = { getAllPlaylistRuns, getOnePlaylistRun, createPlaylistRun };


//
// function updatePlaylistRun(req, res, next) {
//   model.updatePlaylistRun(req.params.id, req.params.runId, req.body)
//     .then((response) => {
//       if (response.length < 1) {
//         return next({ status: 400, message: `Could not update playlist_run at id: ${req.params.runId}`, errors: `PlaylistRun at id: ${req.params.runId} does not exists.` });
//       }
//       let data = response[0];
//       res.status(200).json({ data });
//     })
//     .catch((err) => {
//       return next({ status: 400, message: `Could not update playlist_run at id: ${req.params.runId}`, errors: `Please make sure id is inputted correctly or request body is valid.` });
//     });
// }
//
// function deletePlaylistRun(req, res, next) {
//   model.deletePlaylistRun(req.params.id, req.params.runId)
//     .then((response) => {
//       if (response.length < 1) {
//         return next({ status: 400, message: `Could not delete playlist_run at id: ${req.params.runId}`, errors: `PlaylistRun at id: ${req.params.runId} does not exists.` });
//       }
//       let data = response[0];
//       res.status(200).json({ data });
//     })
//     .catch((err) => {
//       return next({ status: 400, message: `Could not delete playlist_run at id: ${req.params.runId}`, errors: `Please make sure id is inputted correctly.` });
//     });
// }

// module.exports = { getAllPlaylistRuns, getOnePlaylistRun, createPlaylistRun, updatePlaylistRun, deletePlaylistRun };
