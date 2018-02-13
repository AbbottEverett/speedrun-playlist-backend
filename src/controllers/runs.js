const express = require('express');
const model = require('../models/run');

function getAllRuns(req, res, next) {
  // const data = model.getAllRuns();
  // res.status(200).json({ data });
  model.getAllRuns()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 500, message: 'Server failure, speak to IT.' });
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
  const data = model.deleteRun(req.params.id);

  if (data.errors) {
    return next({ status: 400, message: `Could not remove run at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function createRun(req, res, next) {
  // let data;
  //
  // if (isRequestBodyValid(req.body)) {
  //   data = model.createRun(req.body);
  // } else {
  //   return next({ status: 400, message: 'Could not create new run', errors: 'Please make sure request body is valid' });
  // }
  //
  // res.status(201).json({ data });
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
  let data;

  if (isRequestBodyValid(req.body)) {
    data = model.updateRun(req.params.id, req.body);
  } else {
    return next({ status: 400, message: `Could not update run at id: ${req.params.id}`, errors: 'Please make sure request body is valid' });
  }

  if (data.errors) {
    return next({ status: 400, message: `Could not update run at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function isRequestBodyValid(reqData) {
  if (!reqData.name) return false;
  if (!reqData.date) return false;
  if (!reqData.category) return false;
  if (!reqData.run_time) return false;
  if (!reqData.platform) return false;
  if (!reqData.video_url) return false;
  return true;
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
