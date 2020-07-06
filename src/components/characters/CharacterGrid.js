import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((i) => (
        <CharacterItem key={items.char_id} item={i} />
      ))}
    </section>
  );
};

export default CharacterGrid;
