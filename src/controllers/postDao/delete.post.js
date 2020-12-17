import db from "../../models/index.js";
import { validationResult } from "express-validator";
import status from "../../utils/enum.status.js";
import boom from "@hapi/boom";
import message from "../../utils/enum.message.js";

const POST = db.posts;

export default async function deletePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = boom.badRequest(errors.array()[0]["msg"]);
    return res
      .status(validationError.output.statusCode)
      .json(validationError.output.payload);
  }

  try {
    const id = req.params.id;
    const num = await POST.destroy({ where: { id: id } });
    num == status.SUCCESS
      ? res.send({ message: message.DELETE })
      : res.send({ message: message.ID_NOT_FOUND });
  } catch (err) {
    const serverError = boom.internal(
      err.message || message.INTERNAL_SERVER_ERROR
    );
    res
      .status(serverError.output.statusCode)
      .json(validationError.output.payload);
  }
}
