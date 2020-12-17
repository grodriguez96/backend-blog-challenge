import imgExtension from "./array.imgExtension.js";

const SPLIT = ".";

export default function validationImageExtension(url) {
  const splittedUrl = url.split(SPLIT);
  const urlExtension = splittedUrl[splittedUrl.length - 1];
  return imgExtension.includes(urlExtension);
}
