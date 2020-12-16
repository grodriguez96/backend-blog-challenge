import express from "express";
import * as postDao from "../controllers/post.controller.js";

const router = express.Router();

/** Create a new post. */
router.post("/", postDao.create);

/** Get all post. */
router.get("/", postDao.getAll);

/** Get post by id. */
router.get("/:id", postDao.getById);

/** Update post by id */
router.patch("/:id", postDao.update);

/** Delete post by id */
router.delete("/:id", postDao.delet);

export default router;
