import db from "../../models/index.js";
import boom from "@hapi/boom";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import message from "../../utils/enums/enum.message.js";

const POST = db.posts;

export async function getPostById(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(errors);

  const id = req.params.id;
  const post = await POST.findByPk(id);
  if (post) res.status(200).send(post);
  else {
    const err = boom.notFound(message.ID_NOT_FOUND);
    throw err;
  }
}
