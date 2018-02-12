const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/runs');

router.get('/', ctrl.getAllRuns);
router.get('/:id', ctrl.getOneRun);
router.post('/', ctrl.createRun);
router.put('/:id', ctrl.updateRun);
router.delete('/:id', ctrl.deleteRun);

module.exports = router;
