export default function newPost(body) {
  return {
    title: body.title,
    body: body.body,
    image: body.image,
    categoryId: body.categoryId,
    userId: body.userId,
  };
}
