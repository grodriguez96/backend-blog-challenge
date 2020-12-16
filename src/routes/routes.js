import express from 'express';
import * as postDao from '../controllers/post.controller.js'

let router = express.Router();

/** Create a new post. */
router.post("/", postDao.create);

/** Get all post. */
router.get("/", postDao.getAll);

/** Get post by id. */
router.get("/:id", postDao.getById);

export default router;