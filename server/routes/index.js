const express = require('express');
const questionsRouter = require('./questions.router');
const flashcardsRouter = require('./flashcards.router');
const decksRouter = require('./decks.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/questions', questionsRouter);
  router.use('/flashcards', flashcardsRouter);
  router.use('/decks', decksRouter);
}

module.exports = routerApi;
