const express = require('express');
const { store, list, find, result, show } = require('../controllers/pacient');
const router = express.Router();

router.get('/list/:id', list);
router.get('/find/:id', find)
router.post('/store', store);
router.post('/result', result);
router.get('/show/:id', show);

module.exports = router;
