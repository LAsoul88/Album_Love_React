import React, { useState } from 'react';

const SearchBar = props => {
  const [query, setQuery] = useState("john coltrane");

  console.log('Rendering Search Bar', query);

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      Album Search
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search for albums!"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;