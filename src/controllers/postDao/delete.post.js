import db from "../../models/index.js";

const status = {
  SUCCESS: 1,
  FAILURE: 0,
};

const Post = db.posts;

export default async function deletePost(req, res) {
  /** Delete post by id. */
  const id = req.params.id;

  try {
    const num = await Post.destroy({ where: { id: id } });
    num == status.SUCCESS
      ? res.send({ message: "Post was delete successfully." })
      : res.send({ message: "Cannot delete Post with id = " + id });
  } catch (err) {
    res.status(500).send({
      message: "Error deleting Post with id=" + id,
    });
  }
}
