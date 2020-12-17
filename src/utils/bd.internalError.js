import boom from "@hapi/boom";
import message from "./enum.message.js";

export default function bdInternalError(res, err) {
  const serverError = boom.internal(
    err.message || message.INTERNAL_SERVER_ERROR
  );
  return res
    .status(serverError.output.statusCode)
    .send(serverError.output.payload);
}
