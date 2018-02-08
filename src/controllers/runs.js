const express = require('express');
const model = require('../models/run');

const runs = [
  {
    id: 1,
    name: 'Super Mario World',
    date: '2017-12-09',
    category: '96_exit',
    runTime: '15:47',
    system: 'SNES',
    video_url:'youtube.com/myvideo'
  }
];

function getAllRuns(req, res, next) {
  const data = model.getAllRuns();
  res.status(200).json({ data });
}

function getOneRun(req, res, next) {
  const data = model.getOneRun(req.params.id);

  if (data.errors) {
    return next({ status: 404, message: `Could not find run at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function deleteRun(req, res, next) {

}

function createRun(req, res, next) {
  const data = model.createRun(req.body);
  // Check if req body is valid
  // Create it and add it to array

  // Send an error

  res.status(201).json({ data });
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun };
