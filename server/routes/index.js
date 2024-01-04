const express = require('express');
const questionsRouter = require('../routes/questions');
const flashcardsRouter = require('../routes/flashcards');
const decksRouter = require('../routes/decks');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/questions', questionsRouter);
  router.use('/flashcards', flashcardsRouter);
  router.use('/decks', decksRouter);
}

module.exports = routerApi;
