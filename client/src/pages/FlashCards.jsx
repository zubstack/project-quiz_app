import React, { useState } from 'react';
import data from '../data/flashcards.json';
import FlashCard from '../components/FlashCard';

function FlashCards() {
  // const [searchParams] = useSearchParams();
  // const deckId = searchParams.get("deckId");
  // console.log("deckId", deckId);
  const [flashcardsState, setFlashcardsState] = useState('card-1');
  const card = data[flashcardsState.split('-')[1] - 1];
  function onTrasition(state) {
    setFlashcardsState(state);
  }
  return (
    <div>
      <FlashCard
        key={card.cardId}
        card={card}
        onTrasition={onTrasition}
        number={parseInt(flashcardsState.split('-')[1])}
        len={data.length}
      />
    </div>
  );
}

export default FlashCards;
