const express = require('express');
const router2 = express.Router(); //We created sub application for users
const { protect } = require('./../controllers/authController');
const { reserve } = require('./../controllers/reserveController');

router2.route('/').post(reserve);

module.exports = router2;
