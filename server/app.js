const express = require('express');
require('express-async-errors');

const cors = require('cors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routerApi = require('./routes');
const sequelize = require('./libs/sequelize');
const {
  logErrors,
  unknownEndpoint,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();

// Database check connecction
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection success');
  } catch (error) {
    console.error('Connection fail: ', error);
  }
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
routerApi(app);
app.use(logErrors);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
