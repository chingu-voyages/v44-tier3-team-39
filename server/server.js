// require('dotenv').config()
// const express = require('express') // Not needed with next.js ?
// const app = express();
// const PORT = process.env.PORT || 8000; // 8000 for localhost testing

// const mongoose = require('mongoose')
// const connectDB = mongoose()

// connectDB()

// //Routes

// app.listen(port, () => console.log(`Listening on port: ${PORT}`))

import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/mongoose.config.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Create an Express application
const app = express();

// Use the cookie-parser middleware to parse cookies in incoming requests
app.use(cookieParser());

// Parse JSON in request body
app.use(express.json());

// Routes


// Error handlers
app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle other errors

// Settings for deployment
// The production build will be in a directory called build in the frontend directory
// This sets the build folder as a static directory to allow access to load the index.html
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    // Gets anything (except /api routes)
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
} else {
    // Route to handle requests to the root URL in development mode
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}

const PORT = process.env.PORT || 6000;

// Start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);