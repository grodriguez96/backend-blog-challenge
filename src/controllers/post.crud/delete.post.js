import db from "../../models/index.js";
import { validationResult } from "express-validator";
import reqValidationError from "../../utils/errors/req.validationError.js";
import status from "../../utils/enums/enum.status.js";
import message from "../../utils/enums/enum.message.js";
import bdInternalError from "../../utils/errors/bd.internalError.js";

const POST = db.posts;

export default async function deletePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) reqValidationError(res, errors);
  else {
    try {
      const id = req.params.id;
      const num = await POST.destroy({ where: { id: id } });
      num == status.SUCCESS
        ? res.send({ message: message.DELETED })
        : res.send({ message: message.ID_NOT_FOUND });
    } catch (err) {
      bdInternalError(res, err);
    }
  }
}
