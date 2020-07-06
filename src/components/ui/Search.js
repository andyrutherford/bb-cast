import React, { useState } from 'react';

const Search = ({ queryHandler }) => {
  const [text, setText] = useState('');

  const onChange = (val) => {
    setText(val);
    queryHandler(val);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          classname='form-control'
          placeholder='Search characters'
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
