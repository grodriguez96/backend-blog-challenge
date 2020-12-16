import db from "../../models/index.js";

const Post = db.posts;

export default async function createPost(req, res) {
  /** Create a new post. */
  const post = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    categoryId: req.body.categoryId,
  };

  /** Save post in the database. */
  try {
    const data = await Post.create(post);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the post.",
    });
  }
}
