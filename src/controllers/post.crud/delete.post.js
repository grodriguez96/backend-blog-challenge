import db from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import message from "../../utils/enums/enum.message.js";
import boom from "@hapi/boom";

const POST = db.posts;

export async function deletePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(errors);

  const id = req.params.id;
  const result = await POST.destroy({ where: { id: id } });
  if (result > 0) {
    res.send({ result: result });
  } else {
    const err = boom.notImplemented(message.ID_NOT_FOUND);
    throw err;
  }
}
