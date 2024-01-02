const express = require('express');
const router = express.Router();
const data = require('../data/flashcards');

router.get('/', function (req, res, next) {
  res.json(data);
});

module.exports = router;
