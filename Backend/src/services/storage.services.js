// services jinka fix nhi hai aage yhi use krenge wo yaha likhte h
const ImageKit = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(buffer){
  const result = await imageKit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
});

  return result;
}


module.exports=uploadFile;

