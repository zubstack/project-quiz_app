import React from 'react';
import Button from './ui/Button';

function Results({ onTransition, userAnswers, questions, setUserAnswers }) {
  console.log('userAnswers', userAnswers);
  userAnswers?.map((answer, index) => {
    console.log('answer', answer === questions[index]?.answerIndex);
  });
  return (
    <>
      <h1>Results</h1>
      <Button
        onClick={() => {
          onTransition('start');
          setUserAnswers([]);
        }}
      >
        Restart
      </Button>
    </>
  );
}

export default Results;
