// Will be broken down into separate modules after initial setup:
// modules to be --> allowed Origins, corsOptions, dbConn, *roles_list*
// config/allowedOrigins.js: to have our site name, local host for dev/testing
// config/corsOptions.js: to allow our allowed origins to request data
// config/dbConn: our mongoose connection to DB {to be created by Ozzy}
// config/roles_list && config/tags_list: list/object(s) housing the tags and user roles....user roles only if we get to the should haves and need to implement admin feature to delete group milestones



// const mongoose = require('mongoose')
// mongoose.connection.once('process.env.DATABASE_URI', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
//     .then(() => console.log(`Established Connection to DB: /* $ { DB NAME } */`))
//     .catch(err => console.log(`Error Connecting`))

import mongoose from 'mongoose';


const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
