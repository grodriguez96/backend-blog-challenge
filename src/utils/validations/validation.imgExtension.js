const imgExtension = ["png", "gif", "bmp", "jpg", "jpeg", "tif", "tiff"];
const SPLIT = ".";

export default function validationImageExtension(url) {
  const splittedUrl = url.split(SPLIT);
  const urlExtension = splittedUrl[splittedUrl.length - 1];
  return imgExtension.includes(urlExtension);
}
