// awsUploadMiddleware.js
const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.FS_AWS_REGION,
  credentials: {
    accessKeyId: process.env.FS_AWS_ACCESS_KEY,
    secretAccessKey: process.env.FS_AWS_SECRET_KEY
  }
});

const upload = multer({
  storage: multerS3({
    s3: s3, 
    bucket: process.env.FS_AWS_BUCKET_NAME,
    acl: "public-read",
    key: function (req, file, cb) {
      const filename = Date.now().toString() + "-" + file.originalname;
      cb(null, filename);
    }
  })
});

module.exports = upload;
