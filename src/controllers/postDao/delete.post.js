import db from "../../models/index.js";
import { validationResult } from "express-validator";
import status from "../../utils/enum.status.js";

const POST = db.posts;

export default async function deletePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const id = req.params.id;

  try {
    const num = await POST.destroy({ where: { id: id } });
    num == status.SUCCESS
      ? res.send({ message: "Post was delete successfully." })
      : res.send({ message: "Cannot delete Post with id = " + id });
  } catch (err) {
    res.status(500).send({
      message: "Error deleting Post with id=" + id,
    });
  }
}
