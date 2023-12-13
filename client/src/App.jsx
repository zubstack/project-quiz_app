import { useEffect, useState } from "react";
import "./App.css";
import BaseLayout from "./layout/BaseLayout";
import QuizLayout from "./containers/QuizLayout";

function App() {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    function fetchQuestions() {
      fetch("http://localhost:3001/questions")
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    }
    fetchQuestions();
  }, []);
  console.log("questions", questions);
  return (
    <>
      <BaseLayout>
        <QuizLayout />
      </BaseLayout>
    </>
  );
}

export default App;
