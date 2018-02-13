const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllUsers);
router.get('/:id', ctrl.getOneUser);

module.exports = router;
