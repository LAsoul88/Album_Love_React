import { useState } from 'react';
import './SearchBar.scss';

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
    <div className="SearchBar">
      <form 
        className="SearchBar_form" 
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder="Search for albums!"
          onChange={handleChange}
          className="SearchBar_input"
        />
        <button className="SearchBar_button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SearchBar;