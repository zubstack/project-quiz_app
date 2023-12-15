import Deck from "../components/Deck";
import BaseLayout from "../layout/BaseLayout";
import data from "../data/decks.json";

function Decks() {
  return (
    <BaseLayout className={"text-center"}>
      <h1 className="mb-4">Decks</h1>
      <div className={"grid grid-cols-2 gap-1 text-start"}>
        {data.map((item) => (
          <Deck key={item.deckId} item={item} />
        ))}
      </div>
    </BaseLayout>
  );
}

export default Decks;
