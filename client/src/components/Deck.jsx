import { useNavigate } from "react-router-dom";
import "./Deck.css";
import ColorButton from "./ui/ColorButton";
function Deck({ item }) {
  const navigate = useNavigate();
  return (
    <div className="deck__container border border-black">
      <h2 className="mb-4">Tema: {item.topic}</h2>
      <ul className="px-4">
        <li>
          High: <span className="text-green-800">{item.domain.high}</span>
        </li>
        <li>
          Mid: <span className="text-slate-800">{item.domain.mid}</span>
        </li>
        <li>
          Low: <span className="text-red-800">{item.domain.low}</span>
        </li>
      </ul>
      <div className="absolute bottom-2 right-2">
        <ColorButton
          onClick={() => {
            navigate(`/flashcards?deckId=${item.deckId}`);
          }}
          color={"yellow"}
        >
          Review
        </ColorButton>
      </div>
    </div>
  );
}

export default Deck;
