const express = require('express');
const model = require('../models/run');

function getAllRuns(req, res, next) {
  model.getAllRuns()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 500, message: 'Server failure, speak to IT.', errors: err });
    });
}

function getOneRun(req, res, next) {
  model.getOneRun(req.params.id)
    .then((data) => {
      if (!data) {
        return next({ status: 404, message: `Could not find run at id: ${req.params.id}`, errors: `Run at id: ${req.params.id} does not exists.` });
      }
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 404, message: `Could not find run at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly.` });
    });
}

function deleteRun(req, res, next) {
  model.deleteRun(req.params.id)
    .then((response) => {
      if (response.length < 1) {
        return next({ status: 400, message: `Could not delete run at id: ${req.params.id}`, errors: `Run at id: ${req.params.id} does not exists.` });
      }
      let data = response[0];
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: `Could not delete run at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly.` });
    });
}

function createRun(req, res, next) {
  model.createRun(req.body)
    .then((response) => {
      let data = response[0];
      res.status(201).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: 'Could not create new run', errors: 'Please make sure request body is valid' });
    });
}

function updateRun(req, res, next) {
  model.updateRun(req.params.id, req.body)
    .then((response) => {
      if (response.length < 1) {
        return next({ status: 400, message: `Could not update run at id: ${req.params.id}`, errors: `Run at id: ${req.params.id} does not exists.` });
      }
      let data = response[0];
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 400, message: `Could not update run at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly or request body is valid.` });
    });
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
