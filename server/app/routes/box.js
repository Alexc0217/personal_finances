const express = require('express');
const router = express.Router();
const BoxController = require('../controller/BoxController.js');

router.post('/api/box/:user_id', BoxController.create);
router.get('/api/box/mine/:user_id', BoxController.myBoxes);
router.put('/api/box/:user_id/:box_id', BoxController.updateValue);

module.exports = router;