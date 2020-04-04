const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const config = require('../../config').common;
const errors = require('../errors');

const awsConfig = {
  ...new AWS.Config({
    endpoint: config.dynamodb.endpoint,
    accessKeyId: config.amazon.accessKeyId,
    secretAccessKey: config.amazon.secretAccessKey,
    region: config.amazon.region,
  }),
};

const db = new AWS.DynamoDB.DocumentClient(awsConfig);
const tableName = config.dynamodb.table;

exports.getAudit = (id) => {
  const params = {
    TableName: tableName,
    Key: {
      id,
    },
  };

  return db
    .get(params)
    .promise()
    .then((item) => item)
    .catch((error) => {
      throw errors.databaseError(error.message);
    });
};

exports.createAudit = (data) => {
  const item = { ...data, id: uuid() };

  return db
    .put({
      TableName: tableName,
      Item: item,
    })
    .promise()
    .then(() => item)
    .catch((error) => {
      throw errors.databaseError(error.message);
    });
};
