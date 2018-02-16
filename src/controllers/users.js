const express = require('express');
const model = require('../models/user');

function getAllUsers(req, res, next) {
  model.getAllUsers()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
      return next({ status: 500, message: 'Server failure, speak to IT.' });
    });
}

function getOneUser(req, res, next) {
  model.getOneUser(req.params.id)
    .then((data) => {
      if (!data) {
        return next({ status: 404, message: `Could not find user at id: ${req.params.id}`, errors: `User at id: ${req.params.id} does not exists.` });
      }
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 404, message: `Could not find user at id: ${req.params.id}`, errors: `Please make sure id is inputted correctly.` });
    });
}

module.exports = { getAllUsers, getOneUser };
