import express from 'express';
import createPost from '../controllers/create.post.js'

var router = express.Router();

/** Create a new Tutorial */
router.post("/", createPost);


export default router;