import React from 'react';

const TrackList = ({ album }) => {
  const tracks = album.tracks.items;
  return (
    <ol>
      { tracks.map(track => {
          return <li key={track.id}>{track.name}</li>
        })
      }
    </ol>

  )
}

export default TrackList;