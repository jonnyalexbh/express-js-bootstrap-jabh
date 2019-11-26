require('dotenv').config();

const config = {
  common: {
    database: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
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
