import boom from "@hapi/boom";

export default function reqValidationResult(res, errors) {
  const validationError = boom.badRequest(errors.array()[0]["msg"]);
  return res
    .status(validationError.output.statusCode)
    .send(validationError.output.payload);
}
