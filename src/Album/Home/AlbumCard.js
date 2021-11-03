import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const { id, images, name } = album;
  return (
      <div className="album__container">
        <h3><Link to={`albums/${id}`} className="name__link">{name}</Link></h3>
        <div>
          <Link to={`albums/${id}`} className="image__link"><img src={images[0].url} alt={name} /></Link>
        </div>
      </div>
  )
}

export default AlbumCard;