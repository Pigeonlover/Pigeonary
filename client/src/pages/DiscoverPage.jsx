//
import "./DiscoverPage.css";
import Comments from "../components/Comments";

import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [pigeonBreeds, setPigeonBreeds] = useState(null);
  const [refreshComments, setRefreshComments] = useState(false);

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
    <div className="pigeon-breed-container">
      <div className="pigeon-area">
        <button className="new-breed-button" onClick={getPigeonBreedsData}>
          Show Me A New Breed
        </button>
        <div className="pigeon-image-container">
          <img src={pigeonBreeds.breedlink} alt={pigeonBreeds.breedalt} />
        </div>
        <div className="pigeon-text-container">
          <h3>{pigeonBreeds.breedname}</h3>
          <p>{pigeonBreeds.breeddescription}</p>
        </div>
      </div>

      <div className="comments-area">
        <Comments breedId={pigeonBreeds.id} key={refreshComments} />
        <button className="add-comment-button">Add A Comment</button>
      </div>
    </div>
  );
}
