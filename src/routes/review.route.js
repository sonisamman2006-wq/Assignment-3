import { Router } from "express";

import {
  createReview,
  getReview,
  getReviews,
} from "../controllers/review.controller.js";

const router = Router();

router.post("/", createReview);

router.get("/", getReviews);

router.get("/:id", getReview);

export default router;