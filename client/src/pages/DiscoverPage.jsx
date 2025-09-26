//

import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [pigeonBreeds, setPigeonBreeds] = useState(null);

  useEffect(() => {
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
    getPigeonBreedsData();
  }, []);

  if (!pigeonBreeds) {
    return <p>Loading pigeon breed...</p>;
  }

  return (
    <div>
      <div>
        <img src={pigeonBreeds.breedlink} alt={pigeonBreeds.breedalt} />
      </div>
      <div>
        <h3>{pigeonBreeds.breedname}</h3>
        <p>{pigeonBreeds.breeddescription}</p>
      </div>
    </div>
  );
}
