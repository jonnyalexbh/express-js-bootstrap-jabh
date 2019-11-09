require('dotenv').config();

const config = {
  common: {
    database: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
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
