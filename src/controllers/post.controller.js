import createPost from "./post.crud/create.post.js";
import getAllPost from "./post.crud/getAll.post.js";
import getPostById from "./post.crud/getId.post.js";
import updatePost from "./post.crud/update.post.js";
import deletePost from "./post.crud/delete.post.js";
import boom from "@hapi/boom";

const method = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
};

const path = {
  ROOT: "/",
  PARAMS: "/:id",
};

export default async function postController(req, res) {
  const PATH = req.route.path;
  const METHOD = req.route.stack[0].method;

  if (method.GET === METHOD && path.ROOT === PATH) await getAllPost(req, res);
  else if (method.GET === METHOD && path.PARAMS === PATH)
    await getPostById(req, res);
  else if (method.POST === METHOD && path.ROOT === PATH)
    await createPost(req, res);
  else if (method.PATCH === METHOD && path.PARAMS === PATH)
    await updatePost(req, res);
  else if (method.DELETE === METHOD && path.PARAMS === PATH)
    await deletePost(req, res);
}
