import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import AlbumCard from './AlbumCard';

import './Search.css';

const Search = () => {
  
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    axios.get(`http://localhost:4000/api/albums?search=${query}`)
    .then(response => {
      setAlbums(response.data);
    })
  }, [query]);
  
  const updateQuery = query => {
    setQuery(query);
  }

  return (
    <div className="albums__container">
      <h2>Use the search bar below to start looking for your favorite albums!</h2>
      <SearchBar updateQuery={updateQuery} />
      <div>
        { albums.length > 0 ? (
          albums.map(album => {
            return <AlbumCard album={album} key={album.id} />
          })) : (
            <img src="https://media.giphy.com/media/l3vQY93bN54rXJTrO/giphy.gif" alt="searching through records" />
        )}
      </div>
    </div>
  )
}

export default Search;