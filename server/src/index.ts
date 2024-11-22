import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes";

// Load environment variables from a .env file into process.env
dotenv.config();

 // Initialize Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

const PORT = process.env.PORT || 4000; // Define the port number from environment variables or default to 4000

// Use routes defined in the 'routes' module
app.use(routes);

// Start the server and listen on the specified port
app
  .listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT); // Log server address on successful startup
  })
  .on("error", (error) => {
    // Handle server errors gracefully by throwing an error with a custom message
    throw new Error(error.message);
  });