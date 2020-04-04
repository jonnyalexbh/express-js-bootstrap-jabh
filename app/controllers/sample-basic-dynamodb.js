const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
});

exports.getAudit = (req, res) => {
  const db = new AWS.DynamoDB.DocumentClient();
  const { id } = req.query;

  const params = {
    TableName: 'audit-development',
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':id': id,
    },
  };

  db.query(params)
    .promise()
    .then((info) => res.send(info))
    .catch((error) => res.send(error));
};
