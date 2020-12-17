import db from "../../models/index.js";
import { validationResult } from "express-validator";
import status from "../../utils/enum.status.js";

const POST = db.posts;

export default async function updatePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const id = req.params.id;

  try {
    const num = await POST.update(req.body, { where: { id: id } });
    num == status.SUCCESS
      ? res.send({ message: "Post was update successfully." })
      : res.send({ message: "Cannot update Post with id = " + id });
  } catch (err) {
    res.status(500).send({
      message: "Error updating Post with id=" + id,
    });
  }
}
