const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ greeting: "hello world" });
})

router.post('/store-user', function (req, res, next) {
  console.log(req.body);
})

module.exports = router;
