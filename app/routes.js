const express = require('express');
const db = require('./models');

const router = express.Router();
const olderAgeMiddleware = require('./middlewares/olderAge');
const isAdminMiddleware = require('./middlewares/isAdmin');

// middleware, applies for all routes
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send({ greeting: 'hello world' });
});

router.get('/users', (req, res) => db.User.findAll()
  .then(users => res.send(users))
  .catch((err) => {
    console.log('There was an error querying contacts', JSON.stringify(err));
    return res.send(err);
  }));

router.get('/other-test', (req, res) => {
  res.send('other route');
});

router.get('/show-age/:age/:admin?', [isAdminMiddleware, olderAgeMiddleware], (req, res) => {
  res.send(`your age is ${req.params.age}`);
});

router.post('/store-user', (req) => {
  console.log(req.body);
});

module.exports = router;
