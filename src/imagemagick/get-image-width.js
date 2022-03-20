const sharp = require('sharp');

module.exports = async function getImageWidth(path) {
  const metadata = await sharp(path).metadata();

  if (metadata.width === undefined) {
    throw new Error(`Cannot parse width of image '${path}'`);
  }

  return metadata.width;
};
