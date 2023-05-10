require('dotenv').config()
const express = require('express') // Not needed with next.js ?
const app = express();
const PORT = process.env.PORT || 8000; // 8000 for localhost testing

const mongoose = require('mongoose')
const connectDB = mongoose()

connectDB()

//Routes




app.listen(port, () => console.log(`Listening on port: ${PORT}`))