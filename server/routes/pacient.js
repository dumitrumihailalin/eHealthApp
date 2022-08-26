const express = require('express');
const { store } = require('../controllers/pacient');
const router = express.Router();


router.post('/store', store);

module.exports = router;
