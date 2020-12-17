import express from "express";
import {
  createPost,
  getAllPost,
  getIdPost,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";

const router = express.Router();

router.post("/", [validator.body], createPost);

router.get("/", getAllPost);

router.get("/:id", [validator.paramId], getIdPost);

router.patch("/:id", [validator.paramId, validator.body], updatePost);

router.delete("/:id", [validator.paramId], deletePost);

export default router;
