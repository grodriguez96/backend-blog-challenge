import express from "express";
import postController from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import boom from "@hapi/boom";

const router = express.Router();
const err = boom.methodNotAllowed();

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
