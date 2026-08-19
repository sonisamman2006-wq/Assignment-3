const ReviewModel = require("../model/reviewModel");

const createReview = async (data) => {
  const { reviewerName, title } = data;

  const alreadyReviewed = await ReviewModel.findOne({
    reviewerName,
    title,
  });

  if (alreadyReviewed) {
    const error = new Error("You have already reviewed this product");
    error.statusCode = 409;
    throw error;
  }

  return await ReviewModel.create(data);
};

const getReviews = async (queryParams) => {
  const {
    status,
    minRating,
    page = 1,
    limit = 10,
  } = queryParams;

  const filter = {};

  if (status) {
    filter.status = status;
  }

  if (minRating) {
    filter.rating = { $gte: minRating };
  }

  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    ReviewModel.find(filter)
      .skip(skip)
      .limit(limit),

    ReviewModel.countDocuments(filter),
  ]);

  return {
    reviews,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

module.exports = {
  createReview,
  getReviews,
};