var express = require('express');
var router = express.Router();
const data = require('../data');

/* GET quotes listing. */
router.get('/', function (req, res, next) {
  console.log(`Quotes`);
  res.json(data);
});

module.exports = router;
