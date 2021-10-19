import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import AlbumCard from './AlbumCard';


const HomeContainer = () => {

  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);

  const updateQuery = search => {
    setQuery(search);
  }

  useEffect(() => {

    if (query === '') { 
      setAlbums([]);

    } else {
    
      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa('2f212092437640b08c1577de2c87a6b3:e587869e784943bd91f1ba87094b4067')
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {

        axios(`https://api.spotify.com/v1/search?q=${query}&type=album&market=US&limit=50`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token }
        })
        .then(albumResponse => {
          setAlbums(albumResponse.data.albums.items);
        })
      })
    }
  }, [query]);
  
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