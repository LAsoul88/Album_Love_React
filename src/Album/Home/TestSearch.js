import React, { useState } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';

const TestSearch = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([])

  const spotifySearch = searchTerm => {
    axios.post('http://localhost:4000', {
      method: 'POST',
      query: searchTerm,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      setResults(response.data);
    })
  }

  const handleSubmit = event => {
    console.log('submitted');
    event.preventDefault();
    spotifySearch(query);
  }

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
        />  
        <button type="submit">Submit</button>
      </form>
      <div>
        {results.map(result => {
          return <AlbumCard album={result} key={result.id} />
        })}
      </div>
    </div>
  )
}

export default TestSearch;