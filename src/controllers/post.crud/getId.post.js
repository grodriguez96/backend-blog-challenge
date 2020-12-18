import { db } from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import bdInternalError from "../../utils/errors/bd.internalError.js";
import message from "../../utils/enums/enum.message.js";

const POST = db.posts;

export async function getPostById(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(res, errors);
  else {
    try {
      const id = req.params.id;
      const post = await POST.findByPk(id);
      post ? res.send(post) : res.send({ message: message.ID_NOT_FOUND });
    } catch (err) {
      bdInternalError(res, err);
    }
  }
}
