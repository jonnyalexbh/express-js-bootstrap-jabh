const express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./app/routes');

const app = express();

// middlewares, parsing of application/json, application/x-www-form-urlencoded type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.init(app);

module.exports = app;
