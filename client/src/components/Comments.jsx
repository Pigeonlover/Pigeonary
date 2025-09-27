// Comments.jsx
import { useEffect, useState } from "react";

export default function Comments({ breedId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://localhost:8080/comments/${breedId}`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Comments failed to be loaded!", error);
      }
    }

    fetchComments();
  }, [breedId]);

  return (
    <div className="comments-area">
      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p>
                {comment.username}
                <p>{new Date(comment.created_at).toLocaleString()}</p>
              </p>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>
            There are no comments here yet. Be the first to write about this
            beautiful pigeon breed!
          </p>
        )}
      </div>
    </div>
  );
}
