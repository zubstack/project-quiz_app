import React from "react";
import FlashCard from "../components/FlashCard";
import data from "../data/flashcards.json";

function Decks() {
  const card = data[0];
  return (
    <div>
      <FlashCard key={card.cardId} card={card} />
    </div>
  );
}

export default Decks;
