const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');

router.get('/api/users', UserController.allUsers);
router.get('/api/user/:id', UserController.findUser);
router.post('/api/users', UserController.create);
router.put('/api/user/:id', UserController.update);
router.post('/api/user/:id/add-value', UserController.addValue);
router.post('/api/user/:id/remove-value', UserController.removeValue);
router.post('/api/users/login', UserController.login);

module.exports = router;