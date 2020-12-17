export default function modifyPost(body) {
  return {
    id: body.id,
    title: body.title,
    image: body.image,
    categoryId: body.categoryId,
    createdAt: body.createdAt,
  };
}
