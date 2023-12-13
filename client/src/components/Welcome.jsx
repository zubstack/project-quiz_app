function Welcome({ onTransition }) {
  return (
    <>
      <h1>Welcome to the Javascript Quiz</h1>
      <p>
        {
          "Whether you're a seasoned JavaScript developer or just getting started, this quiz is designed to challenge your understanding of the language and help you learn along the way."
        }
      </p>
      <button onClick={() => onTransition("question_1")}>Start</button>
    </>
  );
}

export default Welcome;
