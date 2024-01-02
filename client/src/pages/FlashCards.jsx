import React, { useEffect, useState } from 'react';
// import data from '../data/flashcards.json';
import FlashCard from '../components/FlashCard';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function FlashCards() {
  const [searchParams] = useSearchParams();
  const [flashcards, setFlashcards] = useState([]);
  const [flashcardsState, setFlashcardsState] = useState('card-1');
  const deckId = searchParams.get('deckId');
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/flashcards/${deckId}`
        );
        setFlashcards(data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchData();
  }, []);
  console.log('flashcards', flashcards);
  const card = flashcards[flashcardsState.split('-')[1] - 1];
  console.log('card', card);
  function onTrasition(state) {
    setFlashcardsState(state);
  }
  if (!card) return;
  return (
    <div>
      <FlashCard
        key={card.id}
        card={card}
        onTrasition={onTrasition}
        number={parseInt(flashcardsState.split('-')[1])}
        len={flashcards.length}
      />
    </div>
  );
}

export default FlashCards;
