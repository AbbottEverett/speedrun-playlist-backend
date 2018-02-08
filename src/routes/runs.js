const express = require('express');
const router = express.Router();

const runs = [
  {
    id: 1,
    name: 'Super Mario World',
    date: '2017-12-09',
    category: '96_exit',
    runTime: '15:47',
    system: 'SNES',
    video_url:'youtube.com/myvideo'
  }
];

router.get('/', (req, res, next) => {
  const data = runs;
  res.status(200).json({ data });
});

router.post('/', (req, res, next) => {

});

module.exports = router;
