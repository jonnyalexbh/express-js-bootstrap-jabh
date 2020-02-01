const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const documentation = require('./documentation');
const routes = require('./app/routes');
const errors = require('./app/middlewares/errors');

const app = express();

// middlewares, parsing of application/json, application/x-www-form-urlencoded type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));

routes.init(app);

app.use(errors.handle);

module.exports = app;
