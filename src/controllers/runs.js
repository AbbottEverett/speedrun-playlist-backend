const express = require('express');
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
  const data = runs;
  res.status(200).json({ data });
}

function getOneRun(req, res, next) {
  const idToCheck = parseInt(req.params.id, 10);
  let data;
  runs.forEach((run) => {
    if (run.id === idToCheck) {
      data = run;
    }
  });
  res.status(200).json({ data });
}

function deleteRun(req, res, next) {

}

function createRun(req, res, next) {
  const { name, date, category, runTime, system, video_url } = req.body;
  // Check if req body is valid
  // Create it and add it to array
  const run = {
    id: runs[runs.length-1].id + 1,
    name,
    date,
    category,
    runTime,
    system,
    video_url
  };
  runs.push(run);
  // Send an error

  res.status(201).json({ run });
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun };
