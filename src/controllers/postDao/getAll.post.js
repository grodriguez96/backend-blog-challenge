import db from "../../models/index.js";

const Post = db.posts;

export default async function getAllPost(req, res) {
  /**Create a new post data without content value */
  const postStructure = (post) => {
    const { id, title, image, categoryId, createdAt } = post;
    const newPost = { id, title, image, categoryId, createdAt };
    return newPost;
  };

  /** Turn strings into dates, and then subtract them to get a value that is either negative, positive, or zero. */
  const sortData = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  /** Get all posts for the database. */
  try {
    const data = await Post.findAll();
    const newPosts = data.map(postStructure);
    const sortByDate = newPosts.sort(sortData);
    res.send(sortByDate);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving posts.",
    });
  }
}
