import db from "../../models/index.js";
import newPost from "../../utils/posts/new.post.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import message from "../../utils/enums/enum.message.js";

const POST = db.posts;

export default async function createPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(errors);

  const post = newPost(req.body);
  const data = await POST.create(post);
  res.status(200).send({ message: message.CREATED, id: data.id });
}
