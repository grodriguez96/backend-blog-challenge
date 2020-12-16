import db from "../../models/index.js";
import expressV from "express-validator";

const Post = db.posts;

export default async function getPostById(req, res) {
  /** Finds the validation errors in this request and wraps them in an object with handy functions. */
  const errors = expressV.validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  /** Get post by id. */
  const id = req.params.id;

  try {
    const data = await Post.findByPk(id);
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
