import ReviewModel from "../models/review.model.js";

const createReview = async (data) => {
  const review = await ReviewModel.create(data);

  return review;
};

const getReview = async (id) => {
  const review = await ReviewModel.findById(id);

  return review;
};

const getReviews = async () => {
  const reviews = await ReviewModel.find();

  return reviews;
};

export {
  createReview,
  getReview,
  getReviews,
};