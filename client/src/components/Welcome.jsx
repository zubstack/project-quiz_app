import Button from "./ui/Button";

function Welcome({ onTransition }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">
        Welcome to the Javascript Quiz
      </h1>
      <p>
        {
          "Whether you're a seasoned JavaScript developer or just getting started, this quiz is designed to challenge your understanding of the language and help you learn along the way."
        }
      </p>
      <Button onClick={() => onTransition("question_1")}>Start</Button>
    </>
  );
}

export default Welcome;
