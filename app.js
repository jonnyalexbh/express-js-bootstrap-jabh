const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

// app
const app = express();
const port = process.env.PORT || 3000;

// middlewares, parsing of application/json, application/x-www-form-urlencoded type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(routes);

const server = app.listen(port, () => {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});
