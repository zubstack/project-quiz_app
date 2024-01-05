const express = require('express');
const FlashcardService = require('../services/flashcards.service');
const router = express.Router();

const service = new FlashcardService();

router.get('/', async (req, res) => {
  await service.getAll();
  res.json('we love flashcards');
});

router.post('/:deckId', async (req, res) => {
  const { deckId } = req.params;
  const { body } = req;
  await service.create(deckId, body);
  res.status(201).json({
    message: 'created',
    body,
  });
});

module.exports = router;
