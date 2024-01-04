require('dotenv').config();
// {
//   "development": {
//     "username": "zubstack",
//     "password": "loto123",
//     "database": "quiz_app_dev",
//     "host": "localhost",
//     "dialect": "postgres"
//   }
// }

const config = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbTest: process.env.DB_NAME_TEST,
};
// const config = {
//   username: 'zubstack',
//   password: 'loto123',
//   database: 'quiz_app_dev',
//   host: 'localhost',
// };

module.exports = config;
