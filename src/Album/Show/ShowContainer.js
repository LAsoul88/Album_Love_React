import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './ShowContainer.css';

import CoverArt from './CoverArt';
import TrackList from './TrackList';

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
  }, [id])

  return (
    <>
      { album ? (
        <>
          <CoverArt album={album} key={`art:${id}`} />
          <TrackList album={album} key={`tracks:${id}`} />
        </>
      ) : (
        <p>Loading...</p>
      )} 
    </>
  )
}

export default ShowContainer;