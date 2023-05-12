require('dotenv').config()
const express = require('express') // Not needed with next.js ?
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



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))