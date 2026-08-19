// const express = require("express");

// const router = express.Router();

// const reviewController = require("../controller/reviewController");

// const validationMiddleware = require("../middleware/validationMiddleware");

// const {
//   createReviewSchema,
//   getReviewsSchema,
// } = require("../validationSchema/reviewValidationSchema");

// // POST /createReview
// router.post(
//   "/createReview",
//   validationMiddleware(createReviewSchema),
//   reviewController.createReview
// );

// // GET /getReviews
// router.get(
//   "/getReviews",
//   validationMiddleware(getReviewsSchema, "query"),
//   reviewController.getReviews
// );

// module.exports = router;
const express = require("express");

const router = express.Router();

const reviewController = require("../controller/reviewController");

const validationMiddleware = require("../middleware/validationMiddleware");

const {
  createReviewSchema,
  getReviewsSchema,
  reviewIdSchema,
  updateReviewSchema,
} = require("../validationSchema/reviewValidationSchema");

// CREATE REVIEW
router.post(
  "/createReview",
  validationMiddleware(createReviewSchema),
  reviewController.createReview
);

// GET ALL REVIEWS
router.get(
  "/getReviews",
  validationMiddleware(getReviewsSchema, "query"),
  reviewController.getReviews
);

// GET SINGLE REVIEW
router.get(
  "/getSingleReview/:id",
  validationMiddleware(reviewIdSchema, "params"),
  reviewController.getSingleReview
);

// UPDATE REVIEW
router.patch(
  "/updateReview/:id",
  validationMiddleware(reviewIdSchema, "params"),
  validationMiddleware(updateReviewSchema),
  reviewController.updateReview
);

// DELETE REVIEW
router.delete(
  "/deleteReview/:id",
  validationMiddleware(reviewIdSchema, "params"),
  reviewController.deleteReview
);

module.exports = router;