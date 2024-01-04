const data = require('../data/decks');

class DeckService {
  constructor() {}

  async find() {
    return data;
  }
  async getFlashcards(id) {
    const { flashcards } = data.find((item) => item.id == parseInt(id));
    return flashcards;
  }
}

module.exports = DeckService;
