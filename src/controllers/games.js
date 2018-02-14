const express = require('express');
const model = require('../models/game');

function getGameByName(req, res, next) {
  model.getGameByName(req.query.name)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return next({ status: 500, message: 'Server ERROR! Contact IT', errors: err });
    })
}

module.exports = { getGameByName };
