import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CoverArt from './CoverArt';
import TrackList from './TrackList';

import './ShowContainer.scss';


const ShowContainer = () => {
  
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/album?id=${id}`)
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