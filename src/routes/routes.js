import express from "express";
import postController from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import Boom from "@hapi/boom";

const err = Boom.methodNotAllowed();
const router = express.Router();

router

  .get("/", asyncMiddleware(postController))
  .get("/:id", [validator.paramId], asyncMiddleware(postController))
  .post("/", [validator.body], asyncMiddleware(postController))
  .patch(
    "/:id",
    [validator.paramId, validator.body],
    asyncMiddleware(postController)
  )
  .delete("/:id", [validator.paramId], asyncMiddleware(postController))
  .all("/", (req, res, next) => {
    res.status(err.output.statusCode).json(err.output.payload);
  })
  .all("/:id", (req, res, next) => {
    res.status(err.output.statusCode).json(err.output.payload);
  });
export default router;
