const config = require('../config');
const schemas = require('./schemas');
const paths = require('./paths');

const port = config.common.api.port || 8080;

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '0.1.0',
    title: 'expressjs bootstrap',
    description: 'expressjs bootstrap jonnyalexbh',
    termsOfService: '',
    contact: {
      name: 'Jonny Alexander',
      email: 'jonnyalex.bh@...com',
    },
    license: {
      name: 'MIT',
    },
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server',
    },
    {
      url: 'https://api_url_testing',
      description: 'Testing server',
    },
  ],
  security: [],
  tags: [
    {
      name: 'CRUD operations',
    },
  ],
  paths,
  components: {
    schemas,
    securitySchemes: {},
  },
};
