import React from 'react';
import './AlbumCard.css';

const AlbumCard = props => {

  return (
    <div className="album__container">
      <h3>{props.album.name}</h3>
      <div>
        <img src={props.album.images[0].url} alt={props.album.name} />
      </div>
    </div>
  )
}

export default AlbumCard;