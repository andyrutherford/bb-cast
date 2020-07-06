import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className='cards'>
      {items.map((i) => (
        <CharacterItem key={items.char_id} item={i} />
      ))}
    </section>
  );
};

export default CharacterGrid;
