// const reviewService = require("../service/reviewService");

// const createReview = async (req, res) => {
//   try {
//     const review = await reviewService.createReview(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Review created successfully",
//       data: review,
//     });
//   } catch (error) {
//     res.status(error.statusCode || 500).json({
//       success: false,
//       message: error.message || "Internal server error",
//     });
//   }
// };

// const getReviews = async (req, res) => {
//   try {
//     const result = await reviewService.getReviews(req.query);

//     res.status(200).json({
//       success: true,
//       message: "Reviews fetched successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error",
//     });
//   }
// };

// module.exports = {
//   createReview,
//   getReviews,
// };
const reviewService = require("../service/reviewService");

// CREATE
const createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview(req.body);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
const getReviews = async (req, res) => {
  try {
    const result = await reviewService.getReviews(req.query);

    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE
const getSingleReview = async (req, res) => {
  try {
    const review = await reviewService.getSingleReview(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
      data: review,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
const updateReview = async (req, res) => {
  try {
    const review = await reviewService.updateReview(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
const deleteReview = async (req, res) => {
  try {
    const review = await reviewService.deleteReview(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: review,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};