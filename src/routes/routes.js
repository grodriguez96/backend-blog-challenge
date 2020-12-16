import express from 'express';
import * as postDao from '../controllers/post.controller.js'

var router = express.Router();

/** Create a new Tutorial */
router.post("/", postDao.create);


export default router;