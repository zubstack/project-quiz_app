import React from "react";
import data from "../data/flashcards.json";
import FlashCard from "../components/FlashCard";
import { useSearchParams } from "react-router-dom";

function FlashCards() {
  const [searchParams] = useSearchParams();

  const deckId = searchParams.get("deckId");
  console.log("deckId", deckId);
  const card = data[0];
  return (
    <div>
      <FlashCard key={card.cardId} card={card} />
    </div>
  );
}

export default FlashCards;
