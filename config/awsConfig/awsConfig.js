const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.FS_AWS_ACCESS_KEY,
  secretAccessKey: process.env.FS_AWS_SECRET_KEY,
  region: process.env.FS_AWS_REGION 
});

const s3 = new AWS.S3();
module.exports = s3;