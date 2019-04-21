const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

// app
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(bodyParser.json());                         // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of application/x-www-form-urlencoded post data

// routes
app.use(routes);

const server = app.listen(port, () => {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});
