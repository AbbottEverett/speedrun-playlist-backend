const express = require('express');
const model = require('../models/run');

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
  const data = model.deleteRun(req.params.id);

  if (data.errors) {
    return next({ status: 400, message: `Could not remove run at id: ${req.params.id}`, errors: data.errors });
  }

  res.status(200).json({ data });
}

function createRun(req, res, next) {
  const data = model.createRun(req.body);
  // Check if req body is valid
  // Create it and add it to array

  // Send an error

  res.status(201).json({ data });
}

function validateRequestBody(reqBody) {
  const errors = [];
  // Check if name, date, category, runTime, system, video_url exists
  // Check if name is a string
  // Check if date is YYYY-MM-DD
  // Check if category is a string
  // Check if runTime is HH:MM:SS:MSMS
  // Check if system is a string
  // Check if video_url is a valid URL
}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun };
