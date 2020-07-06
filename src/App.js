import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchItems();
  }, [query]);

  const queryHandler = (val) => {
    setQuery(val);
  };

  return (
    <div className='container'>
      <Header />
      <Search queryHandler={queryHandler} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
