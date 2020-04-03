const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
});

exports.getAudit = (_, res) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const id = '2';

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

  docClient.query(params)
    .promise()
    .then((info) => res.send(info))
    .catch(console.log);
};
