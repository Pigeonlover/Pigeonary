//

import { useState } from "react";

export default function AddCommentForm({ breedId, setComments, setShowModal }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim() || !comment.trim()) return; // basic validation

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/post-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, comment, breedId }),
      });

      if (!response.ok) throw new Error("Failed to post comment");

      const newComment = await response.json();

      // Add the new comment to the list in parent component
      setComments((prevComments) => [...prevComments, newComment]);

      // Reset and close
      setUsername("");
      setComment("");
      setShowModal(false);
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-2">Add a Comment</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 w-full my-2 rounded"
          />
          <textarea
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="border p-2 w-full my-2 rounded"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Posting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
