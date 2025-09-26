//

// Imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// Initialise express
const app = express();

// Configure express with JSON and cors in express
app.use(express.json());
app.use(cors());

// Set up a port
const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});

// Root route
app.get("/", (_, response) => {
  response.send("Welcome to the server!");
});

// =====================================================
// ROUTES

app.get("/pigeon-breeds", async (_, response) => {
  // Error handling with 'try ... catch'
  try {
    const data = await db.query(
      `SELECT breedName, breedLink, breedDescription, breedAlt FROM pigeonBreeds;`
    );
    // Wrangling the data
    response.json(data.rows);
  } catch (error) {
    console.error("Fatal: pigeons could not be retrieved!", error);
    response.status(500).json({ success: false });
  }
});

// Route to fetch ONE random entry from the pigeonBreeds table.
app.get("/pigeon-breeds/random", async (_, response) => {
  // Error handling with 'try ... catch'
  try {
    const data = await db.query(
      `SELECT breedName, breedLink, breedDescription, breedAlt FROM pigeonBreeds ORDER BY RANDOM() LIMIT 1;`
    );
    // Wrangling the data
    response.json(data.rows[0]);
  } catch (error) {
    console.error("Fatal: random pigeon could not be retrieved!", error);
    response.status(500).json({ success: false });
  }
});
