import path from "path";
import express from "express";

import dotenv from "dotenv";
import cors from 'cors'

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.routes.js";
import milestoneRoutes from "./routes/milestone.routes.js";

// Import the 'crypto' module for generating secure random bytes
import  crypto from 'crypto';

// Load environment variables from .env file
dotenv.config();


// Create an Express application
const app = express();


app.use(cors())

// Generate two random 8-byte keys and store them in an array
const keys = [
crypto.randomBytes(8).toString('hex'),
crypto.randomBytes(8).toString('hex')
];



// Parse JSON in request body
app.use(express.json());

// Routes
app.use("/api/milestones", milestoneRoutes);
app.use("/api/users", userRoutes);

// Error handlers
app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle other errors

// Route to handle requests to the root URL
app.get("/", (req, res) => {
    res.send("API is running...");
  });
  
export { app }