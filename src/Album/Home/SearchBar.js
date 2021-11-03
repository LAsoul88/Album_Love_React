import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ updateQuery }) => {

  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    updateQuery(query);
  }

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search for albums!"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;