import React from "react";
import FlashCard from "../components/FlashCard";
import data from "../data/flashcards.json";

function Decks() {
  return (
    <div>
      {data.map((card) => (
        <FlashCard key={card.cardId} card={card} />
      ))}
    </div>
  );
}

export default Decks;
