import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const { id, images, name } = album
  const albumLink = `/:${id}`
  return (
    <div className="album__container">
      <h3><a href={albumLink}>{name}</a></h3>
      <div>
        <a href={albumLink}><img src={images[0].url} alt={name} /></a>
      </div>
    </div>
  )
}

export default AlbumCard;