const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/playlists');

router.get('/', ctrl.getAllPlaylists);
router.get('/:id', ctrl.getOnePlaylist);
router.post('/', ctrl.createPlaylist);
router.patch('/:id', ctrl.updatePlaylist);
router.delete('/:id', ctrl.deletePlaylist);

module.exports = router;
