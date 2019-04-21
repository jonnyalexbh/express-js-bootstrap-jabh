const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ greeting: 'hello world' });
});

router.post('/store-user', (req) => {
  console.log(req.body);
});

module.exports = router;
