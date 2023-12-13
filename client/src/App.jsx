import "./App.css";
import BaseLayout from "./layout/BaseLayout";
import QuizLayout from "./containers/QuizLayout";

function App() {
  return (
    <>
      <BaseLayout>
        <QuizLayout />
      </BaseLayout>
    </>
  );
}

export default App;
