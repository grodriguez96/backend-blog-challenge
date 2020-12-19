import db from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import message from "../../utils/enums/enum.message.js";

const POST = db.posts;

export async function updatePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(errors);

  const id = req.params.id;
  const result = await POST.update(req.body, { where: { id: id } });
  result
    ? res.send({ message: message.UPDATED })
    : res.send({ message: message.ID_NOT_FOUND });
}
