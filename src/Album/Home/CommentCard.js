import './CommentCard.scss';

const CommentCard = ({ comment, album }) => {
  const { content, userId, publishDate } = comment;
  const { name, images } = album;
  const { avatar, username } = userId;
  return (
    <div className="CommentCard">
      <div className="CommentCard_topRow">
        <div className="CommentCard_avatarImgContainer">
          <img 
            src={avatar}
            alt={username + " - avatar"}
            className="CommentCard_avatarImg"
          />
        </div>
        <div className="CommentCard_albumImgContainer">
          <img
            src={images[0].url}
            alt={name}
            className="CommentCard_albumImg"
          />
        </div>
      </div>
      <p className="CommentCard_username">{username}</p>
      <p className="CommentCard_publishDate">{publishDate}</p>
      <p className="CommentCard_content">{content}</p>
    </div>
  )
}

export default CommentCard;