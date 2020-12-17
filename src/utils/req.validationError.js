import boom from "@hapi/boom";

export default function reqValidationError(res, err) {
  const validationError = boom.badRequest(err.array()[0]["msg"]);
  return res
    .status(validationError.output.statusCode)
    .send(validationError.output.payload);
}
