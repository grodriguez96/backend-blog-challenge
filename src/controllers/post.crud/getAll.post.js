import { db } from "../../models/index.js";
import modifyPost from "../../utils/posts/modify.post.js";
import sortPost from "../../utils/posts/sort.post.js";
import bdInternalError from "../../utils/errors/bd.internalError.js";

const POST = db.posts;

export async function getAllPost(req, res) {
  try {
    const data = await POST.findAll();
    const newPosts = data.map(modifyPost);
    const posts = newPosts.sort(sortPost);
    res.send(posts);
  } catch (err) {
    bdInternalError(res, err);
  }
}
