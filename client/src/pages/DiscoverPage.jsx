//

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
          "http://localhost:8080/pigeon-breeds/random"
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
        "http://localhost:8080/pigeon-breeds/random"
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
    <div className="flex items-center flex-row flex-wrap">
      <div className="basis-1/2 flex flex-col">
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
        <div className="basis-2/8">
          <h3>{pigeonBreeds.breedname}</h3>
          <p>{pigeonBreeds.breeddescription}</p>
        </div>
      </div>

      <div className="basis-1/2">
        <Comments
          breedId={pigeonBreeds.id}
          key={refreshComments}
          refreshComments={refreshComments}
        />
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
  );
}
