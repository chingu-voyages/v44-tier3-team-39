import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from 'supertest';
import { app } from "../server";

// Declare global variable for signing in and accessing the application
global.signin = async () => {
  const firstname = 'test'
  const lastname = 'User'
  const email = 'test@test.com';
  const password = 'password';
  

  // Send a POST request to create a new user with test credentials
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      firstname,
      lastname,
      email,
      password
    })
    .expect(201);

  // Extract the authentication cookie from the response headers
  const cookie = response.get('Set-Cookie');

  return cookie;
};

// Declare global variable for the MongoDB in-memory server
let mongo;

// Set up the MongoDB in-memory server and connect to it before running tests
beforeAll(async () => {
  // Set the JWT secret key
  let JWT_KEY = "asdfasdf";

  // Create a new instance of the MongoDB in-memory server
  mongo = await MongoMemoryServer.create();

  // Get the URI for connecting to the in-memory server
  const mongoUri = mongo.getUri();

  // Connect to the in-memory server with Mongoose
  await mongoose.connect(mongoUri, {});
});

// Clear all data from the collections before each test
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// Stop the MongoDB in-memory server and close the Mongoose connection after running tests
afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();

});
