const express = require('express');
const router = express.Router();
const runsRoute = require('./runs');
const playlistsRoute = require('./playlists');

router.use('/runs', runsRoute);
router.use('/playlists', playlistsRoute);

module.exports = router;
