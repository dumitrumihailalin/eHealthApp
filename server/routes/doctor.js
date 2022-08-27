const express = require('express');
const { store, find, schedule, info } = require('../controllers/doctor');
const router = express.Router();

router.post('/store', store);
router.post('/find', find);
router.post('/schedule', schedule);
router.get('/info/:id', info);


module.exports = router;
