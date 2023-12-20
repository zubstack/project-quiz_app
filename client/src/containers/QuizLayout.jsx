import { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import Question from '../components/Question';
import Results from '../components/Results';

function QuizLayout() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState(null);
  const [quizState, setQuizState] = useState('start');
  console.log('questions', questions);
  useEffect(() => {
    function fetchQuestions() {
      fetch('http://localhost:3001/questions')
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    }
    fetchQuestions();
  }, []);
  function onTransition(state) {
    setQuizState(state);
  }
  return (
    <>
      {quizState === 'start' && <Welcome onTransition={onTransition} />}
      {quizState.split('_')[0] === 'question' && (
        <Question
          setUserAnswers={setUserAnswers}
          question={questions[quizState.split('_')[1] - 1]}
          number={parseInt(quizState.split('_')[1])}
          onTransition={onTransition}
          last={parseInt(quizState.split('_')[1]) === questions.length}
        />
      )}
      {quizState === 'results' && (
        <Results
          onTransition={onTransition}
          userAnswers={userAnswers}
          questions={questions}
          setUserAnswers={setUserAnswers}
        />
      )}
    </>
  );
}

export default QuizLayout;
// {quizState === "question_1" && (
//   <Question
//     question={questions[0]}
//     number={1}
//     onTransition={onTransition}
//   />
// )}
// {quizState === "question_2" && (
//   <Question
//     question={questions[1]}
//     number={2}
//     onTransition={onTransition}
//   />
// )}{" "}
// {quizState === "question_3" && (
//   <Question
//     question={questions[2]}
//     number={3}
//     onTransition={onTransition}
//     last={true}
//   />
// )}
