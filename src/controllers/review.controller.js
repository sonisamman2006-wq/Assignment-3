import {
  createReview as createReviewService,
  getReview as getReviewService,
  getReviews as getReviewsService,
} from "../services/review.service.js";

import { notFound } from "../utils/apiError.js";

const createReview = async (req, res, next) => {
  try {
    const review = await createReviewService(req.body);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

const getReview = async (req, res, next) => {
  try {
    const review = await getReviewService(req.params.id);

    if (!review) {
      return next(notFound("Review not found"));
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const reviews = await getReviewsService();

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createReview,
  getReview,
  getReviews,
};