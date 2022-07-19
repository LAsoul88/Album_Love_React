import { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCard from './CommentCard';

import "./Comments.scss";

const Comments = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/comments`)
    .then(response => {
      setComments(response.data);
    });
  }, []);
  
  return (
    <div className="Comments">
      <h2 className="Comments_title">Comments</h2>
      <ul className="Comments_list">
        { comments.length > 0 ? 
          comments.map(comment => {
            return <CommentCard
                     comment={comment}
                     key={comment._id}
                     className="Comments_commentCard"
                   />
          }) :
          "No comments available"
        }
      </ul>
    </div>
  )
}

export default Comments;