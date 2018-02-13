const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/games');

router.get('/', ctrl.getGameByName);

module.exports = router;
