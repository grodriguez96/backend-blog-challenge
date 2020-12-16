import express from "express";
import expressV from "express-validator";
import * as postDao from "../controllers/post.controller.js";

const router = express.Router();

const isInt = expressV.param("id").isInt();

/** Create a new post. */
router.post("/", postDao.create);

/** Get all post. */
router.get("/", postDao.getAll);

/** Get post by id. */
router.get("/:id", [isInt], postDao.getById);

/** Update post by id */
router.patch("/:id", [isInt], postDao.update);

/** Delete post by id */
router.delete("/:id", [isInt], postDao.delet);

export default router;
