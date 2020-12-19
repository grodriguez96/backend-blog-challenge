import express from "express";
import {
  createPost,
  getAllPost,
  getPostById,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";

const router = express.Router();

router.post("/", [validator.body], asyncMiddleware(createPost));

router.get("/", asyncMiddleware(getAllPost));

router.get("/:id", [validator.paramId], asyncMiddleware(getPostById));

router.patch(
  "/:id",
  [validator.paramId, validator.body],
  asyncMiddleware(updatePost)
);

router.delete("/:id", [validator.paramId], asyncMiddleware(deletePost));

export default router;
