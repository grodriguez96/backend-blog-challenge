export default function sortPost(a, b) {
  return new Date(b.createdAt) - new Date(a.createdAt);
}
