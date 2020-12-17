import db from "../../models/index.js";
import newPost from "../../utils/new.post.js";
import { validationResult } from "express-validator";

const POST = db.posts;

export default async function createPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const post = newPost(req.body);

  try {
    const data = await POST.create(post);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the post.",
    });
  }
}
