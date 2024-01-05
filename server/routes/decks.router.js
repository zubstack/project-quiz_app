const express = require('express');
const DeckService = require('../services/decks.service');
const router = express.Router();
const service = new DeckService();

router.get('/', async (req, res) => {
  const response = await service.getAll();
  res.status(200).json(response);
});
router.get('/:deckId/flashcards', async (req, res) => {
  const { deckId } = req.params;
  const data = await service.getFlashcards(deckId);
  res.status(200).json(data);
});
router.post('/', async (req, res) => {
  const { body } = req;
  await service.create(body);
  res.status(201).json({
    massage: 'created',
    body,
  });
});

module.exports = router;
