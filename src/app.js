import express from "express";

import reviewRouter from "./routes/review.route.js";

import {
  notFound,
  errorHandler,
} from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

// Review routes
app.use("/reviews", reviewRouter);

// 404 middleware
app.use(notFound);

// Global error handler - MUST BE LAST
app.use(errorHandler);

export default app;