const express = require('express');
const router = express.Router();
const data = require('../data/questions.data');

router.get('/', function (req, res, next) {
  res.json(data);
});

module.exports = router;
