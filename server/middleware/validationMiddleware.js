import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
  
    const extractedErrors = [];
    errors.array().forEach((err) => extractedErrors.push(err.msg));
    
    res.statusCode = 422;
    const error = new Error(extractedErrors.join(', '));
    
    
  
    next(error);
};
