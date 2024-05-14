import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/expense.routes.js";

// Connect to the database
dbConnect();

// Create an instance of the express application
const app = express();

// Use CORS middleware to enable cross-origin requests
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Use the router middleware for handling API routes under /api prefix
app.use("/api", router);

// Start the server and listen on specified port from environment variables
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
