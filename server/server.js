import path from "path";
import express from "express";

import dotenv from "dotenv";
import cors from 'cors'
import corsOptions from './config/corsOptions.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.routes.js";
import milestoneRoutes from "./routes/milestone.routes.js";

// Import the 'crypto' module for generating secure random bytes
import  crypto from 'crypto';

// Load environment variables from .env file
dotenv.config();


// Create an Express application
const app = express();


app.use(cors(corsOptions))

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

export { app }