export default function errorHandler(err, req, res, next) {
  console.log(err.output);
  return res.status(err.output.statusCode).send(err.output.message);
}
