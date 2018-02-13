const express = require('express');
const router = express.Router({ mergeParams: true });
const ctrl = require('../controllers/playlist-runs');

router.get('/', ctrl.getAllPlaylistRuns);
// router.get('/:runId', ctrl.getOnePlaylistRun);
// router.post('/', ctrl.createPlaylistRun);
// router.patch('/:runId', ctrl.updatePlaylistRun);
// router.delete('/:runId', ctrl.deletePlaylistRun);

module.exports = router;
