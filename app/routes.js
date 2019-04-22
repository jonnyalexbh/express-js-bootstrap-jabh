const express = require('express');

const router = express.Router();
const olderAgeMiddleware = require('./middlewares/olderAge');

router.get('/', (req, res) => {
  res.send({ greeting: 'hello world' });
});

router.get('/show-age/:age', olderAgeMiddleware, (req, res) => {
  res.send(`your age is ${req.params.age}`);
});

router.post('/store-user', (req) => {
  console.log(req.body);
});

module.exports = router;
