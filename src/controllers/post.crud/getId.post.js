import db from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/req.validationError.js";
import bdInternalError from "../../utils/bd.internalError.js";

import message from "../../utils/enum.message.js";

const POST = db.posts;

export default async function getPostById(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(res, errors);
  else {
    try {
      const id = req.params.id;
      const data = await POST.findByPk(id);
      data ? res.send(data) : res.send({ message: message.ID_NOT_FOUND });
    } catch (err) {
      bdInternalError(res, err);
    }
  }
}
