import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <form action="albums" method="GET">
        <input
          type="text"
          name="search"
          id="search-query"
          className="search-query"
          placeholder="search for an album"
          required
        />
        <input
          type="submit"
          value="Submit"
          id="search-submit"
          className="search-query button"
        />
      </form>
    </div>
  )
}

export default SearchBar;