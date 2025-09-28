//
import "../App.css";

import { useEffect, useState } from "react";

export default function Comments({ breedId, refreshComments }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_LINK}${breedId}`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Comments failed to be loaded!", error);
      }
    }

    fetchComments();
  }, [breedId, refreshComments]);

  return (
    <div className="comments-area flex flex-col">
      <h1 className="font-bold text-xl">Comments</h1>
      <div className="comment-container">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-[#f0ebd8ff] text-[#0d1321ff] rounded-lg shadow-md p-4 mb-4 w-full max-w-md"
            >
              <p className="font-bold">👤 {comment.username}</p>
              <p className="italic text-xs">
                {new Date(comment.created_at).toLocaleDateString()}
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
