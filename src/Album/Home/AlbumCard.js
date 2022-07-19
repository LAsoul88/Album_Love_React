import { Link } from 'react-router-dom';
import './AlbumCard.scss';

const AlbumCard = ({ album }) => {
  const { id, images, name } = album;
  return (
      <div className="AlbumCard">
        <Link 
          to={`albums/${id}`} 
          className="AlbumCard_nameLink"
        >{name}</Link>
        <div className="AlbumCard_imgContainer">
          <Link 
            to={`albums/${id}`} 
            className="AlbumCard_imgLink"
          >
            <img 
              src={images[0].url} 
              alt={name} 
              className="AlbumCard_img" 
            />
          </Link>
        </div>
      </div>
  )
}

export default AlbumCard;