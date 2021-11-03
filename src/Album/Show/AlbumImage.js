import React from 'react';

const AlbumImage = ({ album }) => {
  const { images, name } = album;
  return (
    <div>
      <img src={images[0].url} alt={name} />
    </div>
  )
}

export default AlbumImage;