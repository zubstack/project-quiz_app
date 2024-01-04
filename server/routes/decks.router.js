const express = require('express');
const DeckService = require('../services/decks.service');
const router = express.Router();
const service = new DeckService();

router.get('/', async (req, res) => {
  const response = await service.find();
  res.status(200).json(response);
});
router.get('/:deckId', async (req, res) => {
  const { deckId } = req.params;
  const data = await service.getFlashcards(deckId);
  res.status(200).json(data);
});

module.exports = router;
