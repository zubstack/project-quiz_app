import axios from 'axios';
import Deck from '../components/Deck';
import BaseLayout from '../layout/BaseLayout';
import { useEffect, useState } from 'react';

function Decks() {
  const [decks, setDecks] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:3001/decks');
        setDecks(data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchData();
  }, []);

  console.log('decks', decks);
  return (
    <BaseLayout className={'text-center'}>
      <h1 className='mb-4'>Decks</h1>
      <div>
        {decks?.map((item) => (
          <Deck key={item.id} item={item} />
        ))}
      </div>
    </BaseLayout>
  );
}

export default Decks;
