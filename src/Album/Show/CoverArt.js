import React from 'react';

const CoverArt = ({ album }) => {
  const { images, name } = album;
  return (
    <div>
      <img src={images[0].url} alt={name} />
    </div>
  )
}

export default CoverArt;