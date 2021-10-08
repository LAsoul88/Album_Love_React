import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <form action="/albums/home" method="GET">
        <input
          type="text"
          name="search"
          id="search-query"
          placeholder="search for an album"
          required
        />
        <input
          type="submit"
          value="Submit"
          id="search-submit"
        />
      </form>
    </div>
  )
}

export default SearchBar;