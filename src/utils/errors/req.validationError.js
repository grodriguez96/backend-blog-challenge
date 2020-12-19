import boom from "@hapi/boom";

export default function reqValidationError(err) {
  const validationError = boom.badRequest(err.array()[0]["msg"]);
  throw validationError;
}
