const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');

router.get('/api/users', UserController.allUsers);
router.post('/api/users', UserController.create);
router.post('/api/users/login', UserController.login);

module.exports = router;