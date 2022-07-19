import './CommentCard.scss';

const CommentCard = ({ comment }) => {
  const { content } = comment;
  return (
    <div className="CommentCard">{content}</div>
  )
}

export default CommentCard;