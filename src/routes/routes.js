import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import Boom from "@hapi/boom";

const err = Boom.methodNotAllowed();
const router = express.Router();

router

  .get("/", asyncMiddleware(getAllPost))
  .get("/:id", [validator.paramId], asyncMiddleware(getPostById))
  .post("/", [validator.body], asyncMiddleware(createPost))
  .patch(
    "/:id",
    [validator.paramId, validator.body],
    asyncMiddleware(updatePost)
  )
  .delete("/:id", [validator.paramId], asyncMiddleware(deletePost));

export default router;
