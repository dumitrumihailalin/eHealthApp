const express = require('express');
const { store, find, schedule } = require('../controllers/doctor');
const router = express.Router();

router.post('/store', store);
router.post('/find', find);
router.post('/schedule', schedule);

module.exports = router;
