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
app.get("/", (request, response) => {
  response.send("Welcome to the server!");
});

// =====================================================
// ROUTES

app.get("/pigeon-breeds", async (_, res) => {
  // Error handling with 'try ... catch'
  try {
    const data = await db.query(
      `SELECT breedName, breedLink, breedDescription FROM pigeonBreeds;`
    );
    // Wrangling the data
    res.json(data.rows);
  } catch (error) {
    console.error("Fatal: pigeons could not be retrieved!", error);
    res.status(500).json({ success: false });
  }
});
