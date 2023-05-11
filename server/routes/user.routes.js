import express from 'express';
import {
  logout,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from '../controllers/user.controller.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateRequest } from '../middleware/validationMiddleware.js';
import { body } from 'express-validator';

const router = express.Router();

// Public routes
router.post('/login',[
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('You must supply a password'),
],validateRequest, loginUser);
router.post('/signup',[
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('You must supply a password'),
],validateRequest, createUser);
router.get('/users', getAllUsers);

// Private routes
router.use(protect); // Protect all routes below this middleware
router.post('/logout', logout);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;