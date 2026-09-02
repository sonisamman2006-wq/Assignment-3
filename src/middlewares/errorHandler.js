import { notFound as createNotFoundError } from "../utils/apiError.js";

// 404 - Route not found
const notFound = (req, res, next) => {
  next(createNotFoundError(`Route not found: ${req.originalUrl}`));
};

// Global error handler
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";
  let errors = err.errors || [];

  // Mongoose CastError
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid value for '${err.path}'`;
  }

  // Mongoose ValidationError
  else if (err.name === "ValidationError") {
    statusCode = 400;

    errors = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));

    message = "Validation failed";
  }

  // Duplicate key
  else if (err.code === 11000) {
    statusCode = 409;
    message = "This email already exists";
  }

  // JWT invalid token
  else if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  // JWT expired token
  else if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  // Unknown error
  else if (!err.statusCode) {
    statusCode = 500;
    message = "Internal server error";
  }

  const response = {
    success: false,
    message,
    errors,
  };

  // Show stack only in development
  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};

export {
  notFound,
  errorHandler,
};