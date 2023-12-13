// import "./Question.css";

import { useState } from "react";

function Question({ question, onTransition, number, last, setUserAnswers }) {
  const [currentOption, setCurrentOption] = useState(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    onTransition(`${last ? "results" : `question_${number + 1}`}`);
    setUserAnswers((prev) => [...prev, currentOption]);
  }
  return (
    <>
      <h3>Question # {number}</h3>
      <form onSubmit={handleSubmit} className="question__container">
        <h4>{question.question}</h4>
        {question.alternatives.map((option, index) => (
          <div key={index}>
            <input
              onChange={({ target }) => setCurrentOption(parseInt(target.id))}
              type="radio"
              id={index}
              name="drone"
            />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
        <button type="submit">{last ? "Finish" : "Next"}</button>
      </form>
    </>
  );
}

export default Question;
