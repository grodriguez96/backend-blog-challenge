import db from "../../models/index.js";
import newPost from "../../utils/new.post.js";
import { validationResult } from "express-validator";
import boom from "@hapi/boom";
import message from "../../utils/enum.message.js";

const POST = db.posts;

export default async function createPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = boom.badRequest(errors.array()[0]["msg"]);
    return res
      .status(validationError.output.statusCode)
      .json(validationError.output.payload);
  }

  const post = newPost(req.body);

  try {
    const data = await POST.create(post);
    res.send({ message: message.CREATED, data });
  } catch (err) {
    const serverError = boom.internal(
      err.message || message.INTERNAL_SERVER_ERROR
    );
    res
      .status(serverError.output.statusCode)
      .json(validationError.output.payload);
  }
}
