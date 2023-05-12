import path from "path";
import express from "express";
import session from 'cookie-session';
import dotenv from "dotenv";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.routes.js";
import milestoneRoutes from "./routes/milestone.routes.js";

// Import the 'crypto' module for generating secure random bytes
import  crypto from 'crypto';

// Load environment variables from .env file
dotenv.config();


// Create an Express application
const app = express();

const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000; // 8000 for localhost testing

const connectDB = mongoose()
connectDB()

app.use(cors(corsOptions))

app.use(express.json())


//Routes
app.use('/users', require('./routes/user.routes'))



// Generate two random 8-byte keys and store them in an array
const keys = [
crypto.randomBytes(8).toString('hex'),
crypto.randomBytes(8).toString('hex')
];

// Set up cookie-session middleware to handle session management with client-side cookies
app.use(
    session({
      name: 'session', // name of the cookie that will be set on the client-side
      keys: keys, // an array of secret keys used to sign the cookie and verify its integrity
      maxAge: 24 * 60 * 60 * 1000 // maximum age of the cookie, in milliseconds (24 hours in this case)
    })
  );

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