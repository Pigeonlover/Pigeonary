//
import "../App.css";

import Comments from "../components/Comments";
import AddCommentForm from "../components/AddCommentForm.jsx";

import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [pigeonBreeds, setPigeonBreeds] = useState(null);
  const [refreshComments, setRefreshComments] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function getPigeonBreedsData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_LINK}/random`
        );
        if (!ignore) {
          const data = await response.json();
          setPigeonBreeds(data);
        }
      } catch (error) {
        console.error("Pigeon data failed to be retrieved!", error);
      }
    }
    getPigeonBreedsData();

    return () => {
      ignore = true;
    };
  }, []);

  async function getPigeonBreedsData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_LINK}/random`
      );
      const data = await response.json();
      setPigeonBreeds(data);
    } catch (error) {
      console.error("Pigeon data failed to be retrieved!", error);
    }
  }

  if (!pigeonBreeds) {
    return <p>Loading pigeon breed...</p>;
  }

  return (
    <div className="main-content">
      <div className="flex items-center flex-row flex-wrap w-2/3 m-8">
        <div className="basis-1/2 flex flex-col justify-center items-center p-3">
          <button className="basis-1/8" onClick={getPigeonBreedsData}>
            Show Me A New Breed
          </button>
          <div className="basis-5/8">
            <img
              src={pigeonBreeds.breedlink}
              alt={pigeonBreeds.breedalt}
              className="aspect-1/1 object-cover"
            />
          </div>
          <div className="basis-2/8 bg-[#f7f7f7] p-2 rounded-lg shadow-md">
            <h3 className="font-bold">{pigeonBreeds.breedname}</h3>
            <p className="text-base text-gray-700 leading-relaxed max-w-xl">
              {pigeonBreeds.breeddescription}
            </p>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="overflow-y-auto w-100%">
            <Comments
              breedId={pigeonBreeds.id}
              key={refreshComments}
              refreshComments={refreshComments}
            />
          </div>

          <button
            className="add-comment-button"
            onClick={() => setShowForm(true)}
          >
            Add A Comment
          </button>
          {showForm && (
            <AddCommentForm
              breedId={pigeonBreeds.id}
              onClose={() => setShowForm(false)}
              onSubmit={() => {
                setRefreshComments((prev) => !prev);
                setShowForm(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
