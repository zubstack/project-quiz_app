const express = require('express');
const router = express.Router();
const decks = require('../data/decks');

router.get('/', function (req, res, next) {
  res.json('we love flashcards');
});
router.get('/:deckId', function (req, res, next) {
  const { deckId } = req.params;
  const { flashcards } = decks.find((item) => item.id == parseInt(deckId));
  res.status(200).json(flashcards);
});

module.exports = router;
