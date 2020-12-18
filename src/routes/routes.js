import express from "express";
import {
  createPost,
  getAllPost,
  getPostById,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";

const router = express.Router();

router.post("/", [validator.body], createPost);

router.get("/", getAllPost);

router.get("/:id", [validator.paramId], getPostById);

router.patch("/:id", [validator.paramId, validator.body], updatePost);

router.delete("/:id", [validator.paramId], deletePost);

export default router;
