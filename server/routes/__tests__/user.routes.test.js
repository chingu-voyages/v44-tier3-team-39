import request from 'supertest';
import { app } from '../../server';


  describe('POST /api/users/signup', () => {
    it('should create a new user and return a token and user data', async () => {
      const userData = {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        password: 'password',
      };

      const response = await request(app)
        .post('/api/users/signup')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('token');
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.user.firstname).toEqual(userData.firstname);
      expect(response.body.user.lastname).toEqual(userData.lastname);
      expect(response.body.user.email).toEqual(userData.email);
      expect(response.body.user.milestones).toEqual([]);

      // You can also test that the user was actually created in the database
      // by querying the database and asserting that the user with the given
      // email exists
    });

    it('should return an error if the user already exists', async () => {
      // First, create a user with the given email
      const existingUser = {
        firstname: 'Existing',
        lastname: 'User',
        email: 'existing@example.com',
        password: 'password',
      };

      await request(app)
        .post('/api/users/signup')
        .send(existingUser)
        .expect(201);

      // Then, try to create another user with the same email
      const duplicateUser = {
        firstname: 'Duplicate',
        lastname: 'User',
        email: 'existing@example.com', // Same email as existingUser
        password: 'password',
      };

      const response = await request(app)
        .post('/api/users/signup')
        .send(duplicateUser)
        .expect(400);

      expect(response.body.message).toEqual('User already exists');
    });

    it('should return an error if the request body is invalid', async () => {
      const invalidUserData = {
        firstname: 'Test',
        lastname: 'User',
        // Missing email and password fields
      };

      const response = await request(app)
        .post('/api/users/signup')
        .send(invalidUserData)
        .expect(422);
        expect(response.body).toHaveProperty('message');
    });
  });

describe('POST /api/users/login', () => {
    it('should log in a user and return a token', async () => {
      // Create a new user
      const user = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@example.com',
        password: 'password',
      };
  
      // Sign up the user
      await request(app)
        .post('/api/users/signup')
        .send(user)
        .expect(201);
  
      // Log in the user
      const response = await request(app)
        .post('/api/users/login')
        .send({
          email: user.email,
          password: user.password,
        })
        .expect(200);
  
      // Ensure that a token was returned
      expect(response.body.token).toBeDefined();
    });
  
    it('should return an error for an invalid login', async () => {
      // Log in with invalid credentials
      const response = await request(app)
        .post('/api/users/login')
        .send({
          email: 'invalid@example.com',
          password: 'password',
        })
        .expect(401);
  
      // Ensure that an error message was returned
      expect(response.body.message).toBe('Invalid email or password');
    });
    it('should return a user object on successful login', async () => {
        // Create a new user
        const user = {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          password: 'password',
        };
    
        // Sign up the user
        await request(app)
          .post('/api/users/signup')
          .send(user)
          .expect(201);
    
        // Log in the user
        const response = await request(app)
          .post('/api/users/login')
          .send({
            email: user.email,
            password: user.password,
          })
          .expect(200);
    
        // Ensure that the response includes the user object
        expect(response.body.user).toBeDefined();
        expect(response.body.user.firstname).toBe(user.firstname);
        expect(response.body.user.lastname).toBe(user.lastname);
        expect(response.body.user.email).toBe(user.email);
        expect(response.body.user).toHaveProperty('milestones')
      });
    
      it('should return an error when an incorrect password is supplied', async () => {
        // Create a new user
        const user = {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          password: 'password',
        };
      
        // Sign up the user
        await request(app)
          .post('/api/users/signup')
          .send(user)
          .expect(201);
      
        // Log in with incorrect password
        const response = await request(app)
          .post('/api/users/login')
          .send({
            email: user.email,
            password: 'incorrectPassword',
          })
          .expect(401);
      
        // Ensure that an error message was returned
        expect(response.body.message).toBe('Invalid email or password');
      });
      
  });

  