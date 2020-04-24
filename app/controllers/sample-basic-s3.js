const AWS = require('aws-sdk');

const s3 = new AWS.S3(
  new AWS.Config({
    region: 'us-east-1',
    endpoint: 'http://localhost:4572',
    s3ForcePathStyle: true,
  }),
);

exports.getFileS3 = async (req, res) => {
  const s3Params = { Bucket: 'jabhbucket', Key: 'environment.txt' };

  s3.getObject(s3Params)
    .promise()
    .then((data) => {
      res.attachment(s3Params.Key);
      res.send(data.Body);
    })
    .catch((error) => res.send(error));
};
