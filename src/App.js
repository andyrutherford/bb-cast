import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters`
        );
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
