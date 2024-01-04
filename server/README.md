# API Documentation

### Decks

- Get all the decks
  GET http://localhost:3001/api/v1/decks

- Get the deck flashcards
  GET http://localhost:3001/api/v1/decks/{deck_id}

- Add decks
  POST http://localhost:3001/api/v1/decks

- Remove decks
  DELETE http://localhost:3001/api/v1/decks?id={id}

### Flashcards

- Add flashcards
  POST http://localhost:3001/api/v1/flashcards?deckId={deck_id}

- Remove flashcards
  DELETE http://localhost:3001/api/v1/flashcards?id={id}
