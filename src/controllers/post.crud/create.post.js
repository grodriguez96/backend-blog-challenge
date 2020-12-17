import db from "../../models/index.js";
import newPost from "../../utils/new.post.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/req.validationError.js";
import message from "../../utils/enum.message.js";
import bdInternalError from "../../utils/bd.internalError.js";

const POST = db.posts;

export default async function createPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(res, errors);
  else {
    const post = newPost(req.body);

    try {
      const data = await POST.create(post);
      res.send({ message: message.CREATED, data });
    } catch (err) {
      bdInternalError(res, err);
    }
  }
}
