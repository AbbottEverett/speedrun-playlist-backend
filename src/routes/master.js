const express = require('express');
const router = express.Router();
const runsRoute = require('./runs');
const playlistsRoute = require('./playlists');
const usersRoute = require('./users');
const playlistRunsRoute = require('./playlist-runs');
const gamesRoute = require('./games');

router.use('/runs', runsRoute);
router.use('/playlists', playlistsRoute);
router.use('/playlists/:id/runs', playlistRunsRoute);
router.use('/users', usersRoute);
router.use('/games', gamesRoute);

module.exports = router;
