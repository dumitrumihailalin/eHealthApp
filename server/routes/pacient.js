const express = require('express');
const { store, list, find } = require('../controllers/pacient');
const router = express.Router();

router.get('/list/:id', list);
router.get('/find/:id', find)
router.post('/store', store);

module.exports = router;
