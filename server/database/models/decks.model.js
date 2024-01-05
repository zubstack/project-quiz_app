const { DataTypes } = require('sequelize');
const sequelize = require('../../libs/sequelize');
const Flashcard = require('./flashcards.model');

const Deck = sequelize.define(
  'Deck',
  {
    domain_percentage: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 0,
    },
    topic: {
      type: DataTypes.STRING(300),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
  },
  { tableName: 'decks' }
);

Deck.hasMany(Flashcard, { as: 'flashcards', foreignKey: 'deck_id' });
Flashcard.belongsTo(Deck, {
  foreignKey: 'deck_id',
});

module.exports = Deck;
