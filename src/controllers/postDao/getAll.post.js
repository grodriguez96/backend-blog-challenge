import db from "../../models/index.js";
import modifyPost from "../../utils/modify.post.js";
import sortPost from "../../utils/sort.post.js";

const POST = db.posts;

export default async function getAllPost(req, res) {
  try {
    const data = await POST.findAll();
    const newPosts = data.map(modifyPost);
    const Posts = newPosts.sort(sortPost);
    res.send(Posts);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving posts.",
    });
  }
}
