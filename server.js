const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const reviewRoutes = require("./src/routes/review.route");

const app = express();

app.use(express.json());

app.use("/reviews", reviewRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });