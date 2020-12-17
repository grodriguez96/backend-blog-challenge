export default function newPost(body) {
  return {
    title: body.title,
    content: body.content,
    image: body.image,
    categoryId: body.categoryId,
  };
}
