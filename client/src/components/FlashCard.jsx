import React from "react";

function FlashCard({ card }) {
  return (
    <div>
      <h1>{card.question}</h1>
      <p>{card.answer}</p>
    </div>
  );
}

export default FlashCard;
