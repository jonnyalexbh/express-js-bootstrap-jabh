require('dotenv').config();

const config = {
  common: {
    api: {
      port: process.env.PORT,
    },
  },
};

module.exports = config;
