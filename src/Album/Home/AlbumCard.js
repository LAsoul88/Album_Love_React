import { Link } from 'react-router-dom';

import './AlbumCard.scss';

const AlbumCard = ({ album }) => {
  const { id, images, name } = album;
  let formattedName = name;
  if (name.length > 43) {
    formattedName = name.substring(0, 40).trim() + "...";
  }
  return (
      <div className="AlbumCard">
        <div className="AlbumCard_nameLinkContainer">
          <Link 
            to={`albums/${id}`} 
            className="AlbumCard_nameLink nameLink___fontSize"
          >{formattedName}</Link>
        </div>
        <div className="AlbumCard_imgContainer">
          <Link 
            to={`albums/${id}`} 
            className="AlbumCard_imgLink"
          >
            <img 
              src={images[0].url} 
              alt={name} 
              className="AlbumCard_img img___shadow" 
            />
          </Link>
        </div>
      </div>
  )
}

export default AlbumCard;