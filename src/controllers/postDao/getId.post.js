import db from "../../models/index.js";
import { validationResult } from "express-validator";

const POST = db.posts;

export default async function getPostById(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const id = req.params.id;

  try {
    const data = await POST.findByPk(id);
    data
      ? res.send(data)
      : res
          .status(400)
          .send({ message: " The id = " + id + " doesn't exist." });
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Post with id=" + id,
    });
  }
}
