import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import AlbumCard from './AlbumCard';


const HomeContainer = () => {

  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    axios.post('http://localhost:4000', {
      method: 'POST',
      query: query,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      setAlbums(response.data);
    })
  }, [query]);
  
  const updateQuery = query => {
    setQuery(query);
  }

  return (
    <>
      <SearchBar updateQuery={updateQuery} />
      { albums ? (
        albums.map(album => {
          return <AlbumCard album={album} key={album.id} />
        })) : (
          <img src="https://media.giphy.com/media/l3vQY93bN54rXJTrO/giphy.gif" alt="searching through records" />
      )}
    </>
  )
}

export default HomeContainer;