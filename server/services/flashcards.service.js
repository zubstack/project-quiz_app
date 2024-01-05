const Flashcard = require('../database/models/flashcards.model');

class FlashcardService {
  constructor() {}
  async getAll() {
    const data = await Flashcard.findAll();
    console.log('data', data);
  }
  async create(id, data) {
    await Flashcard.create({ ...data, deck_id: id });
  }
}

module.exports = FlashcardService;
