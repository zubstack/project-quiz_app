const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const questionsRouter = require('./routes/questions');
const flashcardsRouter = require('./routes/flashcards');
const decksRouter = require('./routes/decks');
const sequelize = require('./libs/sequelize');

const app = express();

// Database check connecction
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/questions', questionsRouter);
app.use('/flashcards', flashcardsRouter);
app.use('/decks', decksRouter);

module.exports = app;
