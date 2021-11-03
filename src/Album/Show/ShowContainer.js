import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './ShowContainer.css';

import AlbumImage from './AlbumImage';

const ShowContainer = () => {
  
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.post(`http://localhost:4000/albums/:id`, {
      method: 'POST',
      query: id,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      setAlbum(response.data);
    })
  }, [])

  return (
    <>
      { album ? (
        <AlbumImage album={album} key={id} />
      ) : (
        <p>Loading...</p>
      )} 
    </>
  )
}

export default ShowContainer;