import React from "react";

function Results({ onTransition, userAnswers, questions }) {
  userAnswers.map((answer, index) => {
    console.log("answer", answer === questions[index].answerIndex);
  });
  return (
    <>
      <h1>Results</h1>
      <button onClick={() => onTransition("start")}>Restart</button>
    </>
  );
}

export default Results;
