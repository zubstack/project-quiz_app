const { DataTypes } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const Flashcard = sequelize.define(
  'Flashcard',
  {
    question: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    domain: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
  },
  { tableName: 'flashcards' }
);

module.exports = Flashcard;
