// Middleware for handling 404 errors when a route is not found
const notFound = (req, res, next) => {
	// Creates a new error object with a message containing the original URL that was not found
	const error = new Error(`Not Found - ${req.originalUrl}`);
	// Sets the HTTP status code to 404 (Not Found)
	res.status(404);
	// Calls the next middleware passing along the error
	next(error);
};

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
	// Determines the status code based on whether one has already been set (e.g. from a previously successful request) or if it needs to be set to 500 (Internal Server Error)
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	// Sets the HTTP status code to the determined status code
	res.status(statusCode);
	// Sends a JSON object with the error message and, if not in production mode, the error stack trace for debugging purposes
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

// Exports both middleware functions as named exports
export { notFound, errorHandler };
