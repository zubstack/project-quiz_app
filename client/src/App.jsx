import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div id="main__container">
        <Routes>
          <Route path="/decks" element={<Decks />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <p className="text-3xl font-bold underline text-blue">Hello world!</p>;
}

function Decks() {
  return <h2>Decks</h2>;
}
