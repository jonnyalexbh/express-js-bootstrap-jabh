require('dotenv').config();

const config = {
  common: {
    database: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    amazon: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    },
    dynamodb: {
      endpoint: process.env.NODE_API_DYNAMO_ENDPOINT,
      table: process.env.NODE_API_DYNAMO_TABLE,
    },
    firebase: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    },
    encryption: {
      salt_sync: process.env.BCRYPT_SALT,
    },
    api: {
      port: process.env.PORT,
    },
    albumsApi: {
      url: process.env.PLACEHOLDER_URL,
    },
  },
};

module.exports = config;
