const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/runs');

router.get('/', ctrl.getAllRuns);

router.post('/', ctrl.createRun);

module.exports = router;
