import db from "../../models/index.js";
import modifyPost from "../../utils/modify.post.js";
import sortPost from "../../utils/sort.post.js";
import boom from "@hapi/boom";
import message from "../../utils/enum.message.js";

const POST = db.posts;

export default async function getAllPost(req, res) {
  try {
    const data = await POST.findAll();
    const newPosts = data.map(modifyPost);
    const Posts = newPosts.sort(sortPost);
    res.send(Posts);
  } catch (err) {
    const serverError = boom.internal(
      err.message || message.INTERNAL_SERVER_ERROR
    );
    res.status(serverError.output.statusCode).send(serverError.output.payload);
  }
}
