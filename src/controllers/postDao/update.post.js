import db from "../../models/index.js";

const status = {
  SUCCESS: 1,
  FAILURE: 0,
};

const Post = db.posts;

export default async function updatePost(req, res) {
  /** Update post by id. */
  const id = req.params.id;

  try {
    const num = await Post.update(req.body, { where: { id: id } });
    num == status.SUCCESS
      ? res.send({ message: "Post was update successfully." })
      : res.send({ message: "Cannot update Post with id = " + id });
  } catch (err) {
    res.status(500).send({
      message: "Error updating Post with id=" + id,
    });
  }
}
