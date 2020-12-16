import db from "../../models/index.js";

const Post = db.posts;

export default async function getPostById(req, res) {
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
