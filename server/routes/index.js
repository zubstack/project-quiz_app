const express = require('express');
const questionsRouter = require('./questions.router');
const decksRouter = require('./decks.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/questions', questionsRouter);
  router.use('/decks', decksRouter);
}

module.exports = routerApi;
