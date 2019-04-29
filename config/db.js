module.exports = {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'express_js_bootstrap_dev',
    host: 'localhost',
    dialect: 'postgres',
    logging: true,
  },
  testing: {
    username: 'postgres',
    password: 'root',
    database: 'express_js_bootstrap_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: 'postgres',
    password: 'root',
    database: 'express_js_bootstrap_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
};
