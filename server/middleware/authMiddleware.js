import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';




export const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Checks if the token in the cookie and header, if any, as convention, starts with Bearer
  if (req.body.headers.authorization && req.body.headers.authorization.startsWith('Bearer')) {
    try {
      const JWT_SECRET =  "1234";
      // Splits into two array items at the space, 'Bearer' at position 0 and token at pos 1
      token = req.body.headers.authorization.split(' ')[1];
      // Decodes the token body (user id, issued at, expires at)
      const decoded = jwt.verify(token, JWT_SECRET);
      // Sets req.user to authenticated users profile minus the password, now accessible on all protected routes
      // req.user = await User.findById(decoded.id).select('-password');
      // If token valid send user data with request
      const currentTime = new Date().getTime() / 1000;
      const user = await User.findById(decoded.id)
      if (decoded.exp > currentTime) {
        req.user = {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          
        };
      }
    
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('Not authorised, token error');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorised, no token');
  }
});
