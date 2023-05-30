const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController.js');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('home page');
});

router.get('/api/users', UserController.index);

module.exports = router;