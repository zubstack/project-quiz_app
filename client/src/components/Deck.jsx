import { useNavigate } from 'react-router-dom';
import './Deck.css';
import ColorButton from './ui/ColorButton';
function Deck({ item }) {
  console.log('item', item);
  const navigate = useNavigate();
  return (
    <div className='deck__container border border-black'>
      <h2 className='mb-4'>Tema: {item.topic}</h2>

      <div className='absolute bottom-2 right-2'>
        <ColorButton
          onClick={() => {
            navigate(`/flashcards?deckId=${item.id}`);
          }}
          color={'yellow'}
        >
          Check
        </ColorButton>
      </div>
    </div>
  );
}

export default Deck;
