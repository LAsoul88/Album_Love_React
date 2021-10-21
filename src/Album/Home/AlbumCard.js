import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <div className="album__container">
      <h3>{album.name}</h3>
      <div>
        <img src={album.images[0].url} alt={album.name} />
      </div>
    </div>
  )
}

export default AlbumCard;