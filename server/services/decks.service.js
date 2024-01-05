const data = require('../data/decks.data');
const Deck = require('../database/models/decks.model');

class DeckService {
  constructor() {}

  async getAll() {
    const decks = await Deck.findAll();
    console.log('decks', decks);
    return data;
  }

  async getFlashcards(id) {
    const { flashcards } = data.find((item) => item.id == parseInt(id));
    return flashcards;
  }

  async create(data) {
    await Deck.create(data);
  }
}

module.exports = DeckService;
