import db from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/req.validationError.js";
import status from "../../utils/enum.status.js";
import bdInternalError from "../../utils/bd.internalError.js";

import message from "../../utils/enum.message.js";

const POST = db.posts;

export default async function updatePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(res, errors);
  else {
    try {
      const id = req.params.id;
      const num = await POST.update(req.body, { where: { id: id } });
      num == status.SUCCESS
        ? res.send({ message: message.UPDATED })
        : res.send({ message: message.ID_NOT_FOUND });
    } catch (err) {
      bdInternalError(res, err);
    }
  }
}
