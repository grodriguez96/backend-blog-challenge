import express from "express";
import * as postDao from "../controllers/post.controller.js";
import * as validator from "../validators/validator.js";

const router = express.Router();

/** Create a new post. */
router.post("/", [validator.body], postDao.create);

/** Get all post. */
router.get("/", postDao.getAll);

/** Get post by id. */
router.get("/:id", [validator.paramId], postDao.getById);

/** Update post by id */
router.patch("/:id", [validator.paramId, validator.body], postDao.update);

/** Delete post by id */
router.delete("/:id", [validator.paramId], postDao.delet);

export default router;
