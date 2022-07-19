import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import AlbumCard from './AlbumCard';

import './Search.scss';

const Search = () => {
  
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    axios.get(`http://localhost:4000/api/albums?search=${query}`)
    .then(response => {
      setAlbums(response.data);
    });
  }, [query]);
  
  const updateQuery = query => {
    setQuery(query);
  }

  return (
    <div className="Search">
      <h2 className="Search_helperText">
        Use the search bar below to 
        {albums.length > 0 ? 'continue' : 'start'} 
        looking for your favorite albums!
      </h2>
      <div className="Search_searchBar">
        <SearchBar updateQuery={updateQuery} />
      </div>
      <div className="Search_albumList">
        { albums.length > 0 ? (
          albums.map(album => {
            return <AlbumCard 
                     album={album} 
                     key={album.id} 
                   />
          })) : (
            <img 
              src="https://media.giphy.com/media/l3vQY93bN54rXJTrO/giphy.gif" alt="searching through records" 
              className="Search_gif"
            />
        )}
      </div>
    </div>
  )
}

export default Search;